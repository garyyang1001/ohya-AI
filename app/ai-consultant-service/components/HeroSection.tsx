'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AIContent } from '../content';

interface HeroSectionProps {
    data: AIContent['hero'];
}

export default function HeroSection({ data }: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-brand-bg pt-24 pb-20 lg:pt-40 lg:pb-32 paper-texture">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-left md:text-center">
                    {/* Tagline */}
                    <div className="mb-6 flex justify-start md:justify-center">
                        <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm font-sans">
                            {data.tagline}
                        </span>
                    </div>

                    <h1 className="text-4xl font-light tracking-wide text-brand-ink sm:text-6xl font-serif leading-relaxed md:leading-tight">
                        {data.title}
                    </h1>

                    <h2 className="mt-6 text-xl text-brand-gray sm:text-2xl font-light leading-relaxed">
                        {data.subtitle}
                    </h2>

                    <div className="mt-8 flex justify-start md:justify-center">
                        <div className="h-px w-24 bg-brand-red opacity-60"></div>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link
                            href="#contact-form"
                            className="group inline-flex items-center justify-center border border-brand-ink bg-brand-ink px-8 py-3 text-sm font-medium text-brand-bg tracking-widest hover:bg-transparent hover:text-brand-ink transition-colors duration-300"
                        >
                            {data.ctaPrimary}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#process"
                            className="border-b border-brand-gray text-brand-gray pb-1 hover:text-brand-ink hover:border-brand-ink transition-colors duration-300 text-sm tracking-widest"
                        >
                            {data.ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
