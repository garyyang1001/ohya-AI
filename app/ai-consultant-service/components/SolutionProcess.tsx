'use client';

import { AIContent } from '../content';
import { Check } from 'lucide-react';

interface SolutionProcessProps {
    solution: AIContent['solution'];
    process: AIContent['process'];
}

export default function SolutionProcess({ solution, process }: SolutionProcessProps) {
    return (
        <div className="" id="process">
            {/* Solution Part */}
            <section className="bg-white py-24 sm:py-32 border-t border-brand-line">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="max-w-lg">
                            <span className="text-brand-red text-xs font-bold tracking-widest uppercase mb-4 block font-sans">Our Solution</span>
                            <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl font-serif mb-6">
                                {solution.title}
                            </h2>
                            <p className="text-lg text-brand-gray font-light leading-relaxed">
                                {solution.subtitle}
                            </p>
                        </div>

                        <div className="grid gap-y-12">
                            {solution.features.map((feature) => (
                                <div key={feature.title} className="relative pl-10">
                                    <dt className="text-lg font-medium leading-7 text-brand-ink font-serif">
                                        <div className="absolute left-0 top-1">
                                            <Check className="h-5 w-5 text-brand-red" strokeWidth={2} />
                                        </div>
                                        {feature.title}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-brand-gray font-light">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Part */}
            <section className="bg-brand-bg py-24 sm:py-32 border-t border-brand-line paper-texture">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="tech-tag mb-4">Workflow</span>
                        <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl font-serif mt-4">
                            {process.title}
                        </h2>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3 relative">
                        {/* Decorative Line */}
                        <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-brand-line z-0" />

                        {process.steps.map((step, index) => (
                            <div key={step.number} className="relative z-10 text-center">
                                <div className="mb-8 flex flex-col items-center">
                                    <span className="text-brand-red font-sans text-[10px] font-bold tracking-widest uppercase mb-2">
                                        Phase
                                    </span>
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-line bg-white shadow-sm">
                                        <span className="text-2xl font-serif font-light text-brand-ink">{step.number}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-lg font-medium text-brand-ink font-serif">
                                        {step.title}
                                    </h3>
                                    <p className="text-brand-gray leading-relaxed font-light text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
