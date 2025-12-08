'use client';

import { AIContent } from '../content';
import { Plus } from 'lucide-react';

interface FAQSectionProps {
    data: AIContent['faq'];
}

export default function FAQSection({ data }: FAQSectionProps) {
    return (
        <section className="bg-white py-24 sm:py-32 border-t border-brand-line">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl mb-16 text-left md:text-center font-serif leading-relaxed md:leading-normal">
                    {data.title}
                </h2>

                <div className="space-y-0 border-t border-brand-line">
                    {data.items.map((item) => (
                        <details
                            key={item.question}
                            className="group border-b border-brand-line pt-6 pb-6"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between text-brand-ink">
                                <span className="text-lg font-medium font-serif pr-8">{item.question}</span>
                                <span className="transition-transform duration-300 group-open:rotate-45">
                                    <Plus className="h-5 w-5 text-brand-red opacity-70" strokeWidth={1.5} />
                                </span>
                            </summary>
                            <div className="pt-4 text-brand-gray leading-loose font-light">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
