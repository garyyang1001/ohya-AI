'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollFadeIn } from './hooks/useAnimations';
import { useEffect, useState } from 'react';

// Types
interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    featuredImage: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    } | null;
}

// Services data - with icons (Phosphor style)
const services = [
    {
        id: 1,
        title: 'WordPress 網站設計',
        description: '打造高效能、易維護的專業網站，從規劃到上線一站式服務。',
        link: '/wordpress-web-design',
        icon: 'globe',
    },
    {
        id: 2,
        title: 'AI SEO 自動化行銷',
        description: '顧問 + AI Agent 團隊協作提供 24/7 不間斷的優化服務',
        link: '/ai-seo-marketing',
        icon: 'chart-line-up',
    },
    {
        id: 3,
        title: 'AI 導入顧問',
        description: '專為企業打造 AI 自動化流程解決方案。',
        link: '/ai-consultant-service',
        icon: 'brain',
    },
    {
        id: 4,
        title: 'AI 客服解決方案',
        description: '智能化客戶服務系統，提升回應效率與客戶滿意度。',
        link: '/ai-customer-service',
        icon: 'chats-circle',
    },
    {
        id: 5,
        title: 'n8n 自動化工作流',
        description: '打造企業專屬自動化流程，省時省力',
        link: '/n8n-automation-workflow',
        icon: 'flow-arrow',
    },
    {
        id: 6,
        title: '數位行銷策略',
        description: '整合性數位行銷規劃，從內容到轉換的全方位顧問服務。',
        link: '/digital-marketing-strategy',
        icon: 'target',
    }
];

const features = [
    {
        title: '專業團隊',
        description: '資深數位行銷與技術專家，深耕產業多年實戰經驗。'
    },
    {
        title: '客製化服務',
        description: '依據企業需求量身打造解決方案，絕非套版制式服務。'
    },
    {
        title: '長期夥伴',
        description: '不只是接案，更重視長期合作與持續優化成長。'
    },
    {
        title: '成效導向',
        description: '以實際數據與成效為導向，確保每一分預算都有價值。'
    }
];

// Service Icon Component (Phosphor-style line icons)
function ServiceIcon({ name }: { name: string }) {
    const iconClass = "w-8 h-8";

    switch (name) {
        case 'globe':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <circle cx="12" cy="12" r="10" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                    <path d="M2 12h20" />
                </svg>
            );
        case 'chart-line-up':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M3 20h18M6 16l4-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'brain':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M12 4.5C7 4.5 3 8.5 3 12c0 2 1 4 2.5 5.5M12 4.5c5 0 9 4 9 7.5 0 2-1 4-2.5 5.5M12 4.5v15M8 8.5c-1 1-1.5 2.5-1 4M16 8.5c1 1 1.5 2.5 1 4" strokeLinecap="round" />
                </svg>
            );
        case 'chats-circle':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <circle cx="9" cy="9" r="6" />
                    <path d="M15 9a6 6 0 1 1 0 12 6 6 0 0 1-6-6" />
                </svg>
            );
        case 'flow-arrow':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <rect x="3" y="3" width="5" height="5" rx="1" />
                    <rect x="16" y="16" width="5" height="5" rx="1" />
                    <path d="M5.5 8v3a2 2 0 0 0 2 2h9a2 2 0 0 1 2 2v1.5M18 15l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'target':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            );
        default:
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <circle cx="12" cy="12" r="10" />
                </svg>
            );
    }
}
const GET_LATEST_POSTS = `
  query GetLatestPosts {
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { ref, isVisible } = useScrollFadeIn();

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}

// Blog Section Component
function BlogSection() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: GET_LATEST_POSTS }),
                });
                const json = await res.json();
                setPosts(json.data?.posts?.nodes || []);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>/g, '').substring(0, 100) + '...';
    };

    if (loading) {
        return (
            <section className="py-24 lg:py-32 px-6 border-t border-[var(--brand-line)]">
                <div className="max-w-[1600px] mx-auto text-center">
                    <p className="text-[var(--brand-gray)]">載入中...</p>
                </div>
            </section>
        );
    }

    if (posts.length === 0) return null;

    return (
        <section className="py-24 lg:py-32 px-6 border-t border-[var(--brand-line)] bg-white">
            <div className="max-w-[1600px] mx-auto">
                <FadeInSection>
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <p
                                className="text-xs tracking-widest text-[var(--brand-red)] uppercase mb-4"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                Latest Articles
                            </p>
                            <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)]" style={{ letterSpacing: '0.05em' }}>
                                好事發生行銷誌
                            </h2>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden md:inline-block text-xs tracking-widest text-[var(--brand-gray)] uppercase hover:text-[var(--brand-ink)] border-b border-[var(--brand-gray)] pb-1 hover:border-[var(--brand-ink)]"
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        >
                            View All
                        </Link>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <FadeInSection key={post.id} delay={index * 100}>
                            <Link href={`/blog/${post.slug}`} className="group block">
                                {/* Featured Image - Grayscale */}
                                <div className="relative h-56 overflow-hidden mb-6 bg-[var(--brand-line)]">
                                    {post.featuredImage?.node?.sourceUrl ? (
                                        <Image
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.featuredImage.node.altText || post.title}
                                            fill
                                            className="object-cover filter grayscale contrast-[0.9] group-hover:grayscale-0 group-hover:contrast-100"
                                            style={{ transition: 'filter 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[var(--brand-line)] flex items-center justify-center">
                                            <span className="text-[var(--brand-gray)] text-xs uppercase tracking-widest" style={{ fontFamily: 'Lato, sans-serif' }}>No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 border border-black/5" />
                                </div>

                                <p
                                    className="text-xs text-[var(--brand-gray)] mb-2 uppercase tracking-wider"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    {formatDate(post.date)}
                                </p>

                                <h3
                                    className="text-lg font-normal text-[var(--brand-ink)] mb-3 group-hover:translate-x-2"
                                    style={{ transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                >
                                    {post.title}
                                </h3>

                                <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                    {stripHtml(post.excerpt)}
                                </p>
                            </Link>
                        </FadeInSection>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-block text-xs tracking-widest text-[var(--brand-gray)] uppercase hover:text-[var(--brand-ink)] border-b border-[var(--brand-gray)] pb-1"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 lg:pt-20">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                        backgroundSize: '40px 40px',
                        backgroundImage: 'linear-gradient(to right, var(--brand-line) 1px, transparent 1px), linear-gradient(to bottom, var(--brand-line) 1px, transparent 1px)'
                    }}
                />

                <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-8 relative z-10">
                    <FadeInSection>
                        {/* Version Badge */}
                        <div className="flex items-center gap-3 mb-8">
                            <span
                                className="px-3 py-1 border border-[var(--brand-ink)] text-[10px] tracking-widest uppercase"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                Digital Partner
                            </span>
                            <span
                                className="px-3 py-1 bg-[var(--brand-ink)] text-white text-[10px] tracking-widest uppercase"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                AI
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-light mb-8 text-[var(--brand-ink)]" style={{ letterSpacing: '0.05em', lineHeight: '1.2' }}>
                            AI 轉型，<span className="inline md:hidden"><br /></span>始於對<span className="font-normal border-b-2 border-[var(--brand-red)]/50 pb-1">效率的追求</span>。
                        </h1>

                        {/* Body Text */}
                        <p className="text-[var(--brand-gray)] text-base max-w-lg leading-loose mb-12 font-light">
                            我們協助企業剝離繁雜的技術表象，將 WordPress、SEO、AI 轉化為最純粹的商業動力。不追求炫技，只專注於解決問題的本質。
                        </p>

                        {/* Primary Button - 改為查看服務 */}
                        <Link
                            href="#services"
                            className="inline-block px-8 py-3 border border-[var(--brand-ink)] bg-[var(--brand-ink)] text-white text-sm tracking-widest uppercase hover:bg-[var(--brand-gray)] hover:border-[var(--brand-gray)]"
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        >
                            查看服務
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* Why Choose Us - 獨立區塊 */}
            <section className="py-24 lg:py-32 border-t border-[var(--brand-line)] bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <FadeInSection>
                        <p
                            className="text-xs tracking-widest text-[var(--brand-red)] uppercase mb-4 text-center"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] text-center mb-16" style={{ letterSpacing: '0.05em' }}>
                            為什麼選擇我們
                        </h2>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 border border-[var(--brand-line)] hover:bg-[var(--brand-bg)] text-center group cursor-default"
                                style={{ transition: 'background-color 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                            >
                                <FadeInSection delay={index * 100}>
                                    <div
                                        className="w-2 h-2 bg-[var(--brand-ink)] rounded-full mx-auto mb-6 group-hover:scale-150"
                                        style={{ transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                    />
                                    <h4 className="text-lg font-medium text-[var(--brand-ink)] tracking-wide mb-4">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-[var(--brand-gray)] leading-loose font-light">
                                        {feature.description}
                                    </p>
                                </FadeInSection>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid - 獨立區塊 */}
            <section id="services" className="py-24 lg:py-32 border-t border-[var(--brand-line)]">
                <div className="max-w-[1600px] mx-auto px-6">
                    <FadeInSection>
                        <p
                            className="text-xs tracking-widest text-[var(--brand-red)] uppercase mb-4 text-center"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Our Services
                        </p>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] text-center mb-16" style={{ letterSpacing: '0.05em' }}>
                            服務項目
                        </h2>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={service.id}
                                href={service.link}
                                className="group p-8 border border-[var(--brand-line)] hover:bg-white h-72 flex flex-col justify-between relative overflow-hidden"
                                style={{ transition: 'background-color 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                            >
                                {/* Number + Icon Row */}
                                <div className="flex justify-between items-start">
                                    {/* Large Number */}
                                    <span
                                        className="text-5xl font-light text-[var(--brand-line)] group-hover:text-[var(--brand-red)]/30"
                                        style={{
                                            fontFamily: 'Lato, sans-serif',
                                            transition: 'color 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Icon - using SVG based on icon name */}
                                    <div
                                        className="text-[var(--brand-gray)] group-hover:text-[var(--brand-red)]"
                                        style={{ transition: 'color 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                    >
                                        <ServiceIcon name={service.icon} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3
                                            className="text-xl lg:text-2xl font-normal text-[var(--brand-ink)] group-hover:translate-x-2"
                                            style={{ transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                        >
                                            {service.title}
                                        </h3>
                                        {/* Arrow indicator */}
                                        <span
                                            className="text-[var(--brand-line)] group-hover:text-[var(--brand-ink)] group-hover:translate-x-1"
                                            style={{ transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                                        >
                                            →
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogSection />

            {/* Testimonial */}
            <section className="py-24 lg:py-32 px-6 border-t border-[var(--brand-line)]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <blockquote className="pl-0 border-l-0 lg:border-l-2 lg:border-[var(--brand-red)]/50 lg:pl-8 lg:text-left">
                            <p className="text-xl md:text-2xl font-light text-[var(--brand-ink)] leading-relaxed mb-6 italic">
                                "與好事發生合作後，我們的營業額跟SEO表現都明顯成長，更重要的是找到了長期可信賴的數位夥伴。"
                            </p>
                            <footer
                                className="text-xs tracking-widest text-[var(--brand-gray)] uppercase not-italic"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                — 阿玩旅遊
                            </footer>
                        </blockquote>
                    </FadeInSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 px-6 border-t border-[var(--brand-line)] bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-4xl font-light mb-6 text-[var(--brand-ink)]" style={{ letterSpacing: '0.05em' }}>
                            開啟對話
                        </h2>
                        <div className="w-16 h-px bg-[var(--brand-line)] mx-auto mb-8" />
                        <p className="text-[var(--brand-gray)] mb-12 font-light leading-loose">
                            每一次合作，都始於一次真誠的探詢。<br />
                            告訴我們您的困擾，我們會以最純粹的數位思維回應。
                        </p>

                        <Link
                            href="/contact-us"
                            className="inline-block px-8 py-3 border border-[var(--brand-ink)] bg-transparent text-[var(--brand-ink)] text-sm tracking-widest uppercase hover:bg-[var(--brand-ink)] hover:text-white"
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        >
                            立即聯繫
                        </Link>
                    </FadeInSection>
                </div>
            </section>

        </div>
    );
}
