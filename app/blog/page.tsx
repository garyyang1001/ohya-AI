import Link from 'next/link';
import { GET_CATEGORIES } from '@/graphql/queries/GetPosts';

// 分類資料類型
interface Category {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    count: number;
}

// 取得所有分類
async function getCategories(): Promise<Category[]> {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: GET_CATEGORIES }),
        next: { revalidate: 60 },
    });

    if (!res.ok) return [];
    const json = await res.json();
    return json.data?.categories?.nodes || [];
}

// 分類圖示 (可根據 slug 自定義)
const categoryIcons: Record<string, string> = {
    'default': '📚',
    'ai': '🤖',
    'marketing': '📈',
    'design': '🎨',
    'business': '💼',
    'content': '✍️',
};

export default async function BlogArchive() {
    const categories = await getCategories();

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[var(--brand-bg)]">
            {/* Header */}
            <header className="mb-16 max-w-7xl mx-auto">
                <span className="text-xs font-sans tracking-[0.2em] text-[var(--brand-red)] block mb-4">
                    EXPLORE
                </span>
                <h1 className="text-4xl md:text-6xl font-light text-[var(--brand-ink)] leading-tight mb-6">
                    學習與探索
                </h1>
                <p className="text-lg text-[var(--brand-gray)] font-light max-w-2xl leading-relaxed">
                    我們相信知識的分享能創造更大的價值。探索我們精心整理的主題，找到對你最有幫助的內容。
                </p>
            </header>

            {/* Categories Grid - 深色卡片 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className="group block"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] p-6 md:p-8 min-h-[200px] flex flex-col justify-end transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:translate-y-[-4px] hover:shadow-2xl">
                            {/* 裝飾圖示 */}
                            <div className="absolute top-6 right-6 text-4xl opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                                {categoryIcons[category.slug] || categoryIcons['default']}
                            </div>

                            {/* 文章數量 */}
                            <div className="mb-3">
                                <span className="text-white/40 text-xs tracking-widest uppercase">
                                    {category.count} 篇文章
                                </span>
                            </div>

                            {/* 分類名稱 */}
                            <h2 className="text-xl md:text-2xl font-light text-white mb-2 group-hover:text-[var(--brand-red)] transition-colors duration-500">
                                {category.name}
                            </h2>

                            {/* 描述 */}
                            {category.description && (
                                <p className="text-sm text-white/60 line-clamp-2 font-light">
                                    {category.description}
                                </p>
                            )}
                        </div>
                    </Link>
                ))}

                {/* 所有文章卡片 */}
                <Link href="/blog/all" className="group block">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-red)] to-[#8B2E2B] p-6 md:p-8 min-h-[200px] flex flex-col justify-end transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:translate-y-[-4px] hover:shadow-2xl">
                        <div className="absolute top-6 right-6 text-4xl opacity-30">
                            📖
                        </div>
                        <h2 className="text-xl md:text-2xl font-light text-white mb-2">
                            所有文章
                        </h2>
                        <p className="text-sm text-white/80 font-light">
                            瀏覽我們的完整文章庫
                        </p>
                    </div>
                </Link>
            </div>
        </main>
    );
}
