import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const secret = request.headers.get('x-revalidate-secret') || request.nextUrl.searchParams.get('secret');

    // Validate secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
        console.error('Revalidation failed: Invalid secret');
        return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { uri, type } = body;

        if (!uri) {
            return NextResponse.json({ error: 'Missing uri' }, { status: 400 });
        }

        // Revalidate the specific path
        revalidatePath(uri);
        console.log(`Revalidated: ${uri}`);

        // Also revalidate related listing pages
        if (type === 'post') {
            revalidatePath('/blog');
            revalidatePath('/blog/all');
            console.log('Revalidated: /blog, /blog/all');
        }

        return NextResponse.json({
            revalidated: true,
            uri,
            timestamp: Date.now(),
        });
    } catch (err) {
        console.error('Revalidation error:', err);
        return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
    }
}

// Health check endpoint
export async function GET() {
    return NextResponse.json({ status: 'ok', endpoint: 'revalidate' });
}
