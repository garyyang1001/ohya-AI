import { GET_POSTS } from '@/graphql/queries/GetPosts';
import BlogCard from '@/app/components/BlogCard';
import Link from 'next/link';

// Force dynamic rendering - skip pre-render during build
export const dynamic = 'force-dynamic';

// 類型定義
interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
    categories?: {
        nodes: {
            name: string;
            slug: string;
        }[];
    };
}

// 取得所有文章
async function getAllPosts(): Promise<Post[]> {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: GET_POSTS,
            variables: { first: 50 }
        }),
        next: { revalidate: false },
    });

    if (!res.ok) return [];
    const json = await res.json();
    return json.data?.posts?.nodes || [];
}

export default async function AllPostsPage() {
    const posts = await getAllPosts();

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[var(--brand-bg)]">
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto mb-8 text-xs font-sans tracking-widest text-[var(--brand-gray)]">
                <Link href="/blog" className="hover:text-[var(--brand-red)] transition-colors">
                    學習與探索
                </Link>
                <span className="mx-2">/</span>
                <span className="text-[var(--brand-ink)]">所有文章</span>
            </nav>

            {/* Header */}
            <header className="mb-12 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light text-[var(--brand-ink)] leading-tight mb-4">
                    所有文章
                </h1>
                <p className="text-lg text-[var(--brand-gray)] font-light max-w-2xl leading-relaxed">
                    瀏覽我們所有的文章，探索不同主題的精彩內容。
                </p>
                <div className="mt-4 text-xs font-sans tracking-widest text-[var(--brand-gray)]">
                    共 {posts.length} 篇文章
                </div>
            </header>

            {/* Posts Grid - Masonry 風格 */}
            {posts.length > 0 ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div
                            key={post.id}
                            className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                        >
                            <BlogCard
                                title={post.title}
                                slug={post.slug}
                                date={post.date}
                                featuredImage={post.featuredImage?.node?.sourceUrl}
                                category={post.categories?.nodes?.[0]?.name}
                                size={index === 0 ? 'large' : 'medium'}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-7xl mx-auto text-center py-24">
                    <p className="text-[var(--brand-gray)] font-light">
                        目前沒有文章。
                    </p>
                </div>
            )}

            {/* Back Link */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--brand-line)]">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-[var(--brand-gray)] hover:text-[var(--brand-ink)] transition-colors"
                >
                    <span>←</span>
                    <span>返回所有主題</span>
                </Link>
            </div>
        </main>
    );
}
