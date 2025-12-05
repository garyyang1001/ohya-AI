'use client';

import { AIContent } from '../content';
import { Users, FileText, AlertTriangle, Search, Shuffle } from 'lucide-react';

interface PainPointsProps {
    data: AIContent['painPoints'];
}

const IconMap: { [key: string]: any } = {
    Search: Search,
    Shuffle: Shuffle,
    Users: Users,
    UserFocus: Users,
    Files: FileText,
    Warning: AlertTriangle,
};

export default function PainPoints({ data }: PainPointsProps) {
    return (
        <section className="bg-brand-bg py-24 border-t border-brand-line paper-texture">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-light tracking-wide text-brand-ink sm:text-4xl font-serif mb-6">
                        {data.title}
                    </h2>
                    <p className="text-lg text-brand-gray font-light leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                <div className="mx-auto max-w-7xl">
                    <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {data.items.map((item) => {
                            const IconComponent = IconMap[item.icon] || AlertTriangle;

                            return (
                                <div key={item.title} className="group relative flex flex-col items-start p-8 transition-colors hover:bg-white bg-white border border-brand-line">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center text-brand-red opacity-80">
                                        <IconComponent className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
                                    </div>

                                    <dt className="text-xl font-medium leading-7 text-brand-ink font-serif mb-4">
                                        {item.title}
                                    </dt>

                                    <dd className="text-base leading-7 text-brand-gray font-light">
                                        {item.description}
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
