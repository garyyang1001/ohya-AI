'use client';

import { AIContent } from '../content';
import { MessageCircle, CreditCard, FileCheck, Check } from 'lucide-react';

interface PricingSectionProps {
    data: AIContent['pricing'];
}

const stepIcons = [MessageCircle, CreditCard, FileCheck];

export default function PricingSection({ data }: PricingSectionProps) {
    return (
        <section className="bg-white py-24 sm:py-32 border-t border-brand-line">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <span className="tech-tag mb-4">Pricing</span>
                    <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl font-serif mt-4">
                        {data.title}
                    </h2>
                </div>

                {/* 3-Step Flow */}
                <div className="mx-auto max-w-5xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Lines (desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-brand-line" />

                        {data.steps.map((step, index) => {
                            const Icon = stepIcons[index];
                            return (
                                <div key={step.number} className="relative text-center">
                                    <div className="mb-6 flex flex-col items-center">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-brand-line bg-brand-bg shadow-sm relative z-10">
                                            <Icon className="h-8 w-8 text-brand-ink" strokeWidth={1} />
                                        </div>
                                        <span className="mt-4 text-brand-red font-sans text-xs font-bold tracking-widest uppercase">
                                            Step {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-medium text-brand-ink font-serif mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-brand-gray font-light leading-relaxed mb-2 whitespace-pre-line">
                                        {step.description}
                                    </p>
                                    {step.detail && (
                                        <p className="text-sm text-brand-ink font-medium bg-brand-bg px-4 py-2 inline-block">
                                            {step.detail}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Proposal Includes */}
                <div className="mx-auto max-w-3xl mb-12">
                    <div className="p-8 border border-brand-line bg-brand-bg">
                        <h3 className="text-lg font-medium text-brand-ink font-serif mb-6 text-center">
                            建議書內容包含
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.proposalIncludes.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={2} />
                                    <span className="text-sm text-brand-ink font-light leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Note */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm text-brand-gray font-light whitespace-pre-line">
                        {data.note}
                    </p>
                </div>
            </div>
        </section>
    );
}
