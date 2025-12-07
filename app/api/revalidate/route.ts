import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET 方法 - 供 WordPress Webhook 使用 (簡單 tag-based)
 * 使用方式: GET /api/revalidate?secret=xxx&tag=posts
 */
export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');
    const tag = request.nextUrl.searchParams.get('tag');

    if (secret !== process.env.REVALIDATE_SECRET) {
        console.error('[Revalidate] Invalid secret');
        return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    if (!tag) {
        return NextResponse.json({ error: 'Missing tag parameter' }, { status: 400 });
    }

    try {
        revalidateTag(tag);
        console.log(`[Revalidate] Tag cleared: ${tag}`);

        return NextResponse.json({
            revalidated: true,
            tag,
            timestamp: Date.now(),
        });
    } catch (err) {
        console.error('[Revalidate] Error:', err);
        return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
    }
}

/**
 * POST 方法 - 進階 Webhook 支援 (多標籤 + 相容舊版 path-based)
 * Body: { tags: ['posts'], uri: '/blog/slug', type: 'post' }
 */
export async function POST(request: NextRequest) {
    const secret = request.headers.get('x-revalidate-secret')
        || request.nextUrl.searchParams.get('secret');

    if (secret !== process.env.REVALIDATE_SECRET) {
        console.error('[Revalidate] Invalid secret');
        return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { tags, uri, type } = body;

        const revalidatedItems: string[] = [];

        // 優先使用 tag-based revalidation
        if (tags && Array.isArray(tags)) {
            tags.forEach((tag: string) => {
                revalidateTag(tag);
                revalidatedItems.push(`tag:${tag}`);
            });
        }

        // 相容舊的 path-based revalidation
        if (uri) {
            revalidatePath(uri);
            revalidatedItems.push(`path:${uri}`);

            // 文章更新時也重新驗證列表頁
            if (type === 'post') {
                revalidatePath('/blog');
                revalidatePath('/blog/all');
                revalidatedItems.push('path:/blog', 'path:/blog/all');
            }
        }

        console.log(`[Revalidate] Cleared: ${revalidatedItems.join(', ')}`);

        return NextResponse.json({
            revalidated: true,
            items: revalidatedItems,
            timestamp: Date.now(),
        });
    } catch (err) {
        console.error('[Revalidate] Error:', err);
        return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
    }
}
