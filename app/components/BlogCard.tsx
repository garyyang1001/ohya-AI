'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
    title: string;
    excerpt?: string;
    slug: string;
    date: string;
    featuredImage?: string | null;
    category?: string;
    size?: 'large' | 'medium' | 'small';
}

export default function BlogCard({
    title,
    slug,
    date,
    featuredImage,
    category,
    size = 'medium'
}: BlogCardProps) {
    // 根據尺寸調整高度
    const heightClass = {
        large: 'aspect-[16/9] md:aspect-[21/9]',
        medium: 'aspect-[4/3]',
        small: 'aspect-square',
    }[size];

    return (
        <Link href={`/blog/${slug}`} className="group block relative overflow-hidden rounded-xl">
            {/* 圖片容器 */}
            <div className={`relative w-full ${heightClass} bg-[#1A1A1A]`}>
                {featuredImage ? (
                    <Image
                        src={featuredImage}
                        alt={title}
                        fill
                        className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] grayscale group-hover:grayscale-0 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--brand-gray)]">
                        <span className="text-4xl opacity-30">📷</span>
                    </div>
                )}

                {/* 底部漸層遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* 分類標籤 */}
                {category && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                            {category}
                        </span>
                    </div>
                )}

                {/* 標題區域 (疊在圖片底部) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                    <h3 className={`text-white font-light leading-snug mb-2 ${size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                        }`}>
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                        <span>{new Date(date).toLocaleDateString('zh-TW')}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
