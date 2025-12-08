'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    data: {
        title: string;
        subtitle: string;
        ctaPrimary: string;
    };
}

export default function CTASection({ data }: CTASectionProps) {
    return (
        <section id="contact-form" className="bg-brand-ink py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-left md:text-center">
                    <h2 className="text-3xl font-light tracking-wide text-brand-bg sm:text-4xl font-serif mb-6 whitespace-pre-line leading-relaxed md:leading-normal">
                        準備好開始您的 AI 轉型了嗎？
                    </h2>
                    <p className="text-xl text-white font-medium mb-10 leading-relaxed">
                        不要讓「不知道」成為阻礙。現在就私訊我們，進行一場免費的策略諮詢。
                    </p>

                    <Link
                        href="https://www.threads.net/@881freelancer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center border border-brand-bg bg-brand-bg px-8 py-4 text-sm font-medium text-brand-ink tracking-widest hover:bg-transparent hover:text-brand-bg transition-colors duration-300"
                    >
                        私訊 Threads 預約諮詢
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
