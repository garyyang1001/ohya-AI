'use client';

import Link from 'next/link';
import { useScrollFadeIn, useCounter } from './hooks/useAnimations';

// Services data
const services = [
    {
        id: 1,
        title: 'WordPress 網站設計',
        description: '打造高效能、易維護的專業網站，從規劃到上線一站式服務。',
        link: '/wordpress-web-design',
        image: '/images/services/wordpress.png'
    },
    {
        id: 2,
        title: 'SEO 行銷',
        description: '提升搜尋排名，讓目標客戶主動找上門，建立長期流量優勢。',
        link: '/seo-marketing',
        image: '/images/services/seo.png'
    },
    {
        id: 3,
        title: 'AI 導入顧問',
        description: '專為企業打造 AI 自動化流程解決方案。',
        link: '/ai-consultant',
        image: '/images/services/linkedin.png'
    },
    {
        id: 4,
        title: 'AI 客服解決方案',
        description: '智能化客戶服務系統，提升回應效率與客戶滿意度。',
        link: '/ai-customer-service',
        image: '/images/services/ai.png'
    },
    {
        id: 5,
        title: 'n8n 自動化工作流',
        description: '打造企業專屬自動化流程，節省時間成本，提升工作效率。',
        link: '/n8n-automation-workflow',
        image: '/images/services/n8n.png'
    },
    {
        id: 6,
        title: '數位行銷策略',
        description: '整合性數位行銷規劃，從內容到轉換的全方位顧問服務。',
        link: '/digital-marketing-strategy',
        image: '/images/services/digital.png'
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


function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { ref, isVisible } = useScrollFadeIn();

    return (
        <div
            ref={ref}
            className="transition-all duration-1000 ease-out"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen">

            {/* Minimal Header */}
            <header className="fixed w-full z-50 top-0 left-0 px-6 py-6 bg-[var(--muji-bg)]/95 backdrop-blur-sm thin-border border-b">
                <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl tracking-[0.2em] font-medium text-[var(--muji-ink)] hover:opacity-70 transition-opacity">
                        好事發生<span className="text-xs align-top ml-1">數位</span>
                    </Link>
                    <nav className="hidden md:flex space-x-12 text-sm tracking-[0.3em] text-[var(--muji-gray)]">
                        <Link href="/blog" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                            文章
                        </Link>
                        <Link href="/about" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                            關於
                        </Link>
                        <Link href="/contact" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                            聯繫
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
                <div className="max-w-5xl w-full">
                    <FadeInSection>
                        <p className="text-xs text-[var(--muji-gray)] tracking-[0.3em] mb-6">DIGITAL TRANSFORMATION PARTNER</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-light mb-8 text-[var(--muji-ink)]">
                            AI 轉型，<br />
                            始於對<br />
                            <span className="font-normal border-b border-[var(--muji-ink)] pb-2">效率的追求</span>。
                        </h1>
                        <p className="text-[var(--muji-gray)] text-sm md:text-base max-w-md leading-loose mb-12">
                            我們協助企業剝離繁雜的技術表象，將 WordPress、SEO、AI 轉化為最純粹的商業動力。不追求炫技，只專注於解決問題的本質。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-3 thin-border border text-sm tracking-[0.3em] hover:bg-[var(--muji-ink)] hover:text-white transition-all duration-500"
                        >
                            開始諮詢
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="thin-border border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-12 thin-border ${index !== 3 ? 'border-r' : ''} hover:bg-white transition-colors duration-500 text-center group cursor-default`}
                        >
                            <FadeInSection delay={index * 100}>
                                <div className="w-2 h-2 bg-[var(--muji-ink)] rounded-full mx-auto mb-6 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-lg font-medium text-[var(--muji-ink)] tracking-wide mb-4">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-[var(--muji-gray)] leading-loose">
                                    {feature.description}
                                </p>
                            </FadeInSection>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services: Grid Layout */}
            <section className="thin-border border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group p-12 thin-border ${index % 3 !== 2 ? 'border-r' : ''} ${index < 3 ? 'border-b' : ''} hover:bg-white transition-colors duration-500 h-96 flex flex-col justify-between cursor-pointer`}
                        >
                            {/* Image */}
                            <div className="w-full h-32 overflow-hidden mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover muted-img"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl mb-4 font-normal group-hover:translate-x-2 transition-transform duration-300">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-[var(--muji-gray)] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-32 px-6 bg-white thin-border border-t">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <div className="w-1 h-16 bg-[var(--muji-line)] mx-auto mb-12"></div>
                        <blockquote className="text-xl md:text-2xl font-light text-[var(--muji-ink)] leading-relaxed mb-8">
                            「與好事發生合作後，我們的網站流量成長了 3 倍，<br className="hidden md:block" />
                            更重要的是找到了長期可信賴的數位夥伴。」
                        </blockquote>
                        <div className="text-xs tracking-[0.3em] text-[var(--muji-gray)]">
                            某科技公司 CEO
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 thin-border border-t">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-4xl font-light mb-8">開啟對話</h2>
                        <div className="w-16 h-px bg-[var(--muji-line)] mx-auto mb-8"></div>
                        <p className="text-[var(--muji-gray)] mb-12 font-light">
                            每一次合作，都始於一次真誠的探詢。<br />
                            告訴我們您的困擾，我們會以最純粹的數位思維回應。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-3 thin-border border text-sm tracking-[0.3em] hover:bg-[var(--muji-ink)] hover:text-white transition-all duration-500"
                        >
                            立即聯繫
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 thin-border border-t text-center md:text-left">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muji-gray)] tracking-[0.3em]">
                    <div className="mb-4 md:mb-0">
                        © 2024 好事發生數位
                    </div>
                    <div className="flex space-x-8">
                        <Link href="#" className="hover:text-[var(--muji-ink)] transition-colors">LINKEDIN</Link>
                        <Link href="#" className="hover:text-[var(--muji-ink)] transition-colors">MEDIUM</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
