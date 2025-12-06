import { GET_POST_BY_SLUG } from '@/graphql/queries/GetPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Force dynamic rendering - skip pre-render during build
export const dynamic = 'force-dynamic';

// Fetch data
async function getPost(slug: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: GET_POST_BY_SLUG,
            variables: { slug }
        }),
        next: { revalidate: false },
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data?.post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};

    return {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt,
        openGraph: {
            images: [post.seo?.openGraph?.image?.url || post.featuredImage?.node?.sourceUrl],
        },
    };
}

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const categorySlug = post.categories?.nodes?.[0]?.slug;
    const categoryName = post.categories?.nodes?.[0]?.name;

    return (
        <article className="min-h-screen bg-[var(--brand-bg)] pb-24">
            {/* Hero Section */}
            <header className="pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-xs font-sans tracking-widest text-[var(--brand-gray)]">
                    <Link href="/blog" className="hover:text-[var(--brand-red)] transition-colors">
                        學習與探索
                    </Link>
                    <span>/</span>
                    {categorySlug ? (
                        <Link href={`/blog/category/${categorySlug}`} className="hover:text-[var(--brand-red)] transition-colors">
                            {categoryName}
                        </Link>
                    ) : (
                        <span>未分類</span>
                    )}
                </nav>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-light text-[var(--brand-ink)] leading-tight mb-6">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-[var(--brand-gray)] mb-8">
                    {post.author?.node && (
                        <div className="flex items-center gap-2">
                            {post.author.node.avatar?.url && (
                                <Image
                                    src={post.author.node.avatar.url}
                                    alt={post.author.node.name || '作者'}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            )}
                            <span>{post.author.node.name}</span>
                        </div>
                    )}
                    <span className="text-[var(--brand-line)]">|</span>
                    <span>{new Date(post.date).toLocaleDateString('zh-TW')}</span>
                </div>

                {/* Featured Image */}
                {post.featuredImage && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </header>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Post Body */}
                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-light prose-headings:text-[var(--brand-ink)]
            prose-p:text-[var(--brand-ink)] prose-p:font-light prose-p:leading-loose
            prose-a:text-[var(--brand-red)] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-2 prose-blockquote:border-[var(--brand-red)]
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[var(--brand-gray)]
            prose-img:rounded-xl
            prose-strong:text-[var(--brand-ink)]
            font-serif"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {/* Footer Navigation */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[var(--brand-line)]">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-[var(--brand-gray)] hover:text-[var(--brand-ink)] transition-colors"
                >
                    <span>←</span>
                    <span>返回所有主題</span>
                </Link>
            </div>
        </article>
    );
}
