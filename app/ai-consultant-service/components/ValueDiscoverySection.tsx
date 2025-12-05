'use client';

import { AIContent } from '../content';
import { MessageCircleQuestion, AlertTriangle, Lightbulb } from 'lucide-react';

interface ValueDiscoverySectionProps {
    data: AIContent['valueDiscovery'];
}

export default function ValueDiscoverySection({ data }: ValueDiscoverySectionProps) {
    return (
        <section className="bg-white py-24 sm:py-32 border-t border-brand-line">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <span className="tech-tag mb-4">Value Discovery</span>
                    <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl font-serif mt-4">
                        {data.sectionTitle}
                    </h2>
                </div>

                {/* Vertical Timeline - Each Phase is a full section */}
                <div className="mx-auto max-w-5xl">
                    {data.phases.map((phase, index) => (
                        <div key={phase.number} className="relative mb-24 last:mb-0">
                            {/* Connecting Line (only between phases) */}
                            {index < data.phases.length - 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-24 w-px bg-gradient-to-b from-brand-line to-transparent" />
                            )}

                            {/* Phase Number & Title */}
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-2 border-brand-red bg-white mb-6 shadow-sm">
                                    <span className="text-2xl font-serif font-medium text-brand-red">{index + 1}</span>
                                </div>
                                <div>
                                    <span className="text-brand-red font-sans text-xs font-bold tracking-widest uppercase block mb-2">
                                        {phase.number}
                                    </span>
                                    <h3 className="text-2xl font-medium text-brand-ink font-serif">
                                        {phase.title} <span className="text-brand-gray font-light">({phase.subtitle})</span>
                                    </h3>
                                </div>
                            </div>

                            {/* Main Question */}
                            <div className="mb-10">
                                <div className="flex items-start gap-4 p-6 bg-brand-bg border-l-4 border-brand-red max-w-3xl mx-auto">
                                    <MessageCircleQuestion className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" strokeWidth={1.5} />
                                    <p className="text-lg text-brand-ink font-medium">
                                        {phase.mainQuestion}
                                    </p>
                                </div>
                            </div>

                            {/* Two Column Grid: Listen For & Red Flags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
                                {/* Listen For */}
                                <div className="p-6 border border-brand-line bg-white">
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-brand-gray mb-4 font-sans flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        尋找線索 (Listen For)
                                    </h4>
                                    <ul className="space-y-3">
                                        {phase.listenFor.map((item, i) => (
                                            <li key={i} className="text-sm text-brand-ink leading-relaxed font-light pl-4 border-l-2 border-brand-line">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Red Flags */}
                                <div className="p-6 border border-brand-line bg-white">
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-brand-gray mb-4 font-sans flex items-center gap-2">
                                        <AlertTriangle className="h-3 w-3 text-brand-red" />
                                        紅旗警示 (Red Flags)
                                    </h4>
                                    <ul className="space-y-3">
                                        {phase.redFlags.map((item, i) => (
                                            <li key={i} className="text-sm text-brand-gray leading-relaxed font-light pl-4 border-l-2 border-brand-red/30">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Key Insight */}
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-start gap-4 p-6 bg-brand-ink text-brand-bg">
                                    <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                                    <p className="text-sm leading-relaxed font-light">
                                        <span className="font-bold text-yellow-400">關鍵洞察：</span> {phase.keyInsight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
