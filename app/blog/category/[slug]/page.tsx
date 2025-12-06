import { GET_POSTS_BY_CATEGORY } from '@/graphql/queries/GetPosts';
import BlogCard from '@/app/components/BlogCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
}

interface CategoryData {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    posts: {
        nodes: Post[];
    };
}

// 取得分類及其文章
async function getCategoryWithPosts(slug: string): Promise<CategoryData | null> {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: GET_POSTS_BY_CATEGORY,
            variables: { slug, first: 20 }
        }),
        next: { revalidate: false },
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data?.category;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = await getCategoryWithPosts(slug);

    if (!category) return {};

    return {
        title: `${category.name} - 好事發生數位`,
        description: category.description || `探索 ${category.name} 相關的所有文章`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = await getCategoryWithPosts(slug);

    if (!category) {
        notFound();
    }

    const posts = category.posts?.nodes || [];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[var(--brand-bg)]">
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto mb-8 text-xs font-sans tracking-widest text-[var(--brand-gray)]">
                <Link href="/blog" className="hover:text-[var(--brand-red)] transition-colors">
                    學習與探索
                </Link>
                <span className="mx-2">/</span>
                <span className="text-[var(--brand-ink)]">{category.name}</span>
            </nav>

            {/* Header */}
            <header className="mb-12 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light text-[var(--brand-ink)] leading-tight mb-4">
                    {category.name}
                </h1>
                {category.description && (
                    <p className="text-lg text-[var(--brand-gray)] font-light max-w-2xl leading-relaxed">
                        {category.description}
                    </p>
                )}
                <div className="mt-4 text-xs font-sans tracking-widest text-[var(--brand-gray)]">
                    {posts.length} 篇文章
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
                                category={category.name}
                                size={index === 0 ? 'large' : 'medium'}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-7xl mx-auto text-center py-24">
                    <p className="text-[var(--brand-gray)] font-light">
                        此分類目前沒有文章。
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
