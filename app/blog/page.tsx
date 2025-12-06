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
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_CATEGORIES }),
            next: { revalidate: false },
        });

        if (!res.ok) {
            console.error(`Failed to fetch categories: ${res.status}`);
            return [];
        }

        const json = await res.json();
        return json.data?.categories?.nodes || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
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

            {/* Categories Grid - 簡潔白色卡片風格 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className="group block"
                    >
                        <div
                            className="relative overflow-hidden bg-white border border-[var(--brand-line)] p-8 min-h-[200px] flex flex-col justify-between transition-all duration-700 hover:border-[var(--brand-red)] hover:-translate-y-1 hover:shadow-lg"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            {/* 頂部：圖示與數量 */}
                            <div className="flex justify-between items-start">
                                <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    {categoryIcons[category.slug] || categoryIcons['default']}
                                </div>
                                <span className="text-xs tracking-widest text-[var(--brand-gray)] uppercase">
                                    {category.count} 篇
                                </span>
                            </div>

                            {/* 底部：名稱與描述 */}
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-light text-[var(--brand-ink)] mb-2 group-hover:text-[var(--brand-red)] group-hover:translate-x-1 transition-all duration-500"
                                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                >
                                    {category.name}
                                </h2>

                                {category.description && (
                                    <p className="text-sm text-[var(--brand-gray)] line-clamp-2 font-light leading-relaxed">
                                        {category.description}
                                    </p>
                                )}
                            </div>

                            {/* 箭頭指示器 */}
                            <span
                                className="absolute bottom-8 right-8 text-[var(--brand-line)] group-hover:text-[var(--brand-red)] group-hover:translate-x-1 transition-all duration-500"
                                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                            >
                                →
                            </span>
                        </div>
                    </Link>
                ))}

                {/* 所有文章卡片 - 使用品牌紅色邊框 */}
                <Link href="/blog/all" className="group block">
                    <div
                        className="relative overflow-hidden bg-white border-2 border-[var(--brand-red)] p-8 min-h-[200px] flex flex-col justify-between transition-all duration-700 hover:bg-[var(--brand-red)] hover:-translate-y-1 hover:shadow-lg"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                        <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            📖
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-light text-[var(--brand-ink)] mb-2 group-hover:text-white transition-colors duration-500">
                                所有文章
                            </h2>
                            <p className="text-sm text-[var(--brand-gray)] font-light group-hover:text-white/80 transition-colors duration-500">
                                瀏覽我們的完整文章庫
                            </p>
                        </div>

                        <span className="absolute bottom-8 right-8 text-[var(--brand-red)] group-hover:text-white transition-colors duration-500">
                            →
                        </span>
                    </div>
                </Link>
            </div>
        </main>
    );
}
