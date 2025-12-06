import { process } from 'postcss';
import Image from 'next/image';
import Link from 'next/link';
import { projects, portfolioContent } from './content';

export const metadata = {
    title: '作品集 | 好事發生數位',
    description: '瀏覽我們精選的網頁設計、AI 導入與數位行銷案例。',
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[var(--brand-bg)]">
            {/* Header */}
            <header className="mb-24 max-w-7xl mx-auto">
                <span className="text-xs font-sans tracking-[0.2em] text-[var(--brand-red)] block mb-4 uppercase">
                    Portfolio
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-[var(--brand-ink)] leading-tight mb-6">
                    {portfolioContent.hero.title}
                    <span className="block text-2xl md:text-3xl text-[var(--brand-gray)] mt-2 font-normal">
                        {portfolioContent.hero.subtitle}
                    </span>
                </h1>
                <p className="text-lg text-[var(--brand-gray)] font-light max-w-2xl leading-relaxed">
                    {portfolioContent.hero.description}
                </p>
            </header>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`group cursor-pointer flex flex-col ${index % 3 === 0 ? 'md:col-span-2 mb-12' : ''
                                }`}
                        >
                            {/* Image Container */}
                            <div className={`relative overflow-hidden mb-6 bg-[#1a1a1a] ${index % 3 === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                                }`}>
                                {/* Image Placeholder / Real Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                                    {/* 暫時使用文字代替圖片，直到 User 提供真實圖片 */}
                                    {/* 
                                     <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                     /> 
                                     */}
                                    <span className="text-6xl opacity-10 font-serif">{project.id.charAt(0).toUpperCase()}</span>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between border-b border-[var(--brand-line)] pb-4 mb-2">
                                    <span className="text-xs font-sans tracking-widest text-[var(--brand-red)] uppercase">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-sans text-[var(--brand-gray)]">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-light text-[var(--brand-ink)] group-hover:text-[var(--brand-red)] transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-[var(--brand-gray)] font-light leading-relaxed mb-4 max-w-xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--brand-line)] text-[var(--brand-gray)] rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-[var(--brand-line)] text-center">
                <h2 className="text-3xl font-light text-[var(--brand-ink)] mb-6">
                    有興趣合作嗎？
                </h2>
                <Link
                    href="/contact-us"
                    className="inline-block px-8 py-3 bg-[var(--brand-ink)] text-white font-light tracking-widest hover:bg-[var(--brand-red)] transition-colors duration-500 rounded-sm"
                >
                    開始專案諮詢
                </Link>
            </div>
        </main>
    );
}
