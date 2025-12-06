'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, Check, Monitor, Smartphone, Tablet } from 'lucide-react';

// Since this is a client component for now (interactive elements might be added), 
// we can't export metadata directly if we use 'use client'. 
// However, for a simple static page, we can remove 'use client' if no hooks are used.
// But I'll keep it simple and maybe add interaction later. 
// Actually, let's make it a server component by default and put client parts in leaves if needed.
// But for now, I will just make it a standard page. 
// Wait, I can't export metadata from a client component. 
// I will remove 'use client' as I don't strictly need it for this static content.

export default function BrandGuidelinesPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-ink font-serif antialiased paper-texture">

            {/* 1. Hero / Intro */}
            <header className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative border-b border-brand-line">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 border border-brand-ink text-[10px] tracking-widest uppercase font-sans">Design System</span>
                    <span className="px-3 py-1 bg-brand-ink text-white text-[10px] tracking-widest uppercase font-sans">v2.0</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-light mb-8 text-brand-ink leading-tight">
                    好事發生數位<br />
                    <span className="text-lg md:text-xl block mt-6 text-brand-gray font-normal tracking-widest uppercase">Good Things Digital</span>
                </h1>

                <p className="max-w-xl text-brand-gray text-sm leading-loose mt-8 font-light">
                    這是一套基於「原子設計」與「無印美學」構建的設計語言。<br />
                    我們定義了微小的間距、精確的字階與流暢的動態，<br />
                    確保每一個數位接觸點，都能傳遞出理性與溫度的完美平衡。
                </p>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <ArrowDown className="text-brand-gray w-6 h-6" />
                </div>
            </header>

            {/* Logo System */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">Logo System</span>
                    <h2 className="text-3xl font-light mb-12">標誌系統</h2>

                    <div className="p-16 border border-brand-line bg-white flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-4 left-4 text-xs font-sans text-brand-gray">Primary Logotype</div>
                        <div className="text-3xl md:text-5xl tracking-[0.2em] font-medium text-brand-ink relative whitespace-nowrap font-serif">
                            好事發生數位
                            <span className="text-xs align-top ml-2 absolute top-2 -right-6 tracking-widest text-brand-gray font-normal font-sans">AI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">01. Philosophy</span>
                    <h2 className="text-3xl font-light mb-12">核心設計理念</h2>

                    <div className="bg-white p-12 border border-brand-line shadow-sm">
                        <h3 className="text-2xl font-light mb-6 text-center">「如無印良品般的數位體驗」</h3>
                        <p className="text-brand-gray leading-relaxed text-center mb-12">
                            我們的設計不追求過度的裝飾與喧嘩，而是專注於內容的本質與閱讀的呼吸感。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="font-serif italic">E</span>
                                </div>
                                <h4 className="font-medium mb-2">Essentialism</h4>
                                <p className="text-xs text-brand-gray">去除多餘裝飾<br />只保留意義</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="font-serif italic">T</span>
                                </div>
                                <h4 className="font-medium mb-2">Tactile Quality</h4>
                                <p className="text-xs text-brand-gray">微細紋理<br />紙張手感</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="font-serif italic">R</span>
                                </div>
                                <h4 className="font-medium mb-2">Rhythm</h4>
                                <p className="text-xs text-brand-gray">字級對比<br />閱讀韻律</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Color System */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">02. Colors</span>
                    <h2 className="text-3xl font-light mb-12">色彩系統</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Primary */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">Brand Primary</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 bg-brand-ink rounded-full shadow-lg"></div>
                                    <div>
                                        <h4 className="font-bold text-brand-ink">Brand Ink</h4>
                                        <p className="text-xs text-brand-gray font-mono mt-1">#2D2A26</p>
                                        <p className="text-xs text-brand-gray mt-2">主要標題、內文、強調元素</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 bg-brand-bg rounded-full border border-brand-line shadow-sm"></div>
                                    <div>
                                        <h4 className="font-bold text-brand-ink">Brand Background</h4>
                                        <p className="text-xs text-brand-gray font-mono mt-1">#F5F5F0</p>
                                        <p className="text-xs text-brand-gray mt-2">整體頁面背景 (米色紙張)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">Secondary & Accent</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-brand-gray rounded-full"></div>
                                    <div>
                                        <h4 className="font-medium text-brand-ink">Brand Gray</h4>
                                        <p className="text-xs text-brand-gray font-mono mt-1">#8C8C88</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-brand-line rounded-full border border-gray-200"></div>
                                    <div>
                                        <h4 className="font-medium text-brand-ink">Brand Line</h4>
                                        <p className="text-xs text-brand-gray font-mono mt-1">#E0E0D8</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-brand-red rounded-full"></div>
                                    <div>
                                        <h4 className="font-medium text-brand-ink">Brand Red</h4>
                                        <p className="text-xs text-brand-gray font-mono mt-1">#C84630</p>
                                        <p className="text-xs text-brand-red mt-1">僅用於點綴 (5%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Typography */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">03. Typography</span>
                    <h2 className="text-3xl font-light mb-12">字體系統</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-brand-line text-xs font-sans text-brand-gray tracking-widest">
                                    <th className="py-4 w-1/12">TOKEN</th>
                                    <th className="py-4 w-4/12">PREVIEW</th>
                                    <th className="py-4 w-2/12">SIZE (PX/REM)</th>
                                    <th className="py-4 w-2/12">LINE-HEIGHT</th>
                                    <th className="py-4 w-2/12">TRACKING</th>
                                    <th className="py-4 w-1/12">WEIGHT</th>
                                </tr>
                            </thead>
                            <tbody className="text-brand-ink">
                                <tr className="border-b border-brand-line">
                                    <td className="py-8 font-mono text-xs text-brand-red">H1</td>
                                    <td className="py-8 text-5xl md:text-6xl font-light">好事發生</td>
                                    <td className="py-8 font-sans text-xs text-brand-gray">60px / 3.75rem</td>
                                    <td className="py-8 font-sans text-xs text-brand-gray">1.2 (Tight)</td>
                                    <td className="py-8 font-sans text-xs text-brand-gray">0.05em</td>
                                    <td className="py-8 font-sans text-xs text-brand-gray">300 (Light)</td>
                                </tr>
                                <tr className="border-b border-brand-line">
                                    <td className="py-6 font-mono text-xs text-brand-red">H2</td>
                                    <td className="py-6 text-3xl md:text-4xl font-light">數據的秩序</td>
                                    <td className="py-6 font-sans text-xs text-brand-gray">36px / 2.25rem</td>
                                    <td className="py-6 font-sans text-xs text-brand-gray">1.3</td>
                                    <td className="py-6 font-sans text-xs text-brand-gray">0.05em</td>
                                    <td className="py-6 font-sans text-xs text-brand-gray">300 (Light)</td>
                                </tr>
                                <tr className="border-b border-brand-line">
                                    <td className="py-4 font-mono text-xs text-brand-red">H3</td>
                                    <td className="py-4 text-2xl font-normal">我們的核心價值</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">24px / 1.5rem</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">1.4</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">0.025em</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">400 (Regular)</td>
                                </tr>
                                <tr className="border-b border-brand-line">
                                    <td className="py-4 font-mono text-xs text-brand-red">H4</td>
                                    <td className="py-4 text-lg font-medium">服務項目概覽</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">18px / 1.125rem</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">1.5</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">0.025em</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">500 (Medium)</td>
                                </tr>
                                <tr className="border-b border-brand-line">
                                    <td className="py-4 font-mono text-xs text-brand-gray">Body</td>
                                    <td className="py-4 text-base font-light max-w-xs">最好的科技是隱形的，它應該像空氣與水一樣自然。</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">16px / 1rem</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">1.8 (Loose)</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">0</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">300 (Light)</td>
                                </tr>
                                <tr className="border-b border-brand-line">
                                    <td className="py-4 font-mono text-xs text-brand-gray">Small</td>
                                    <td className="py-4 text-xs font-normal text-brand-gray tracking-widest uppercase">Design System v2.0</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">12px / 0.75rem</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">1.5</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">0.1em</td>
                                    <td className="py-4 font-sans text-xs text-brand-gray">400 (Regular)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. Layout & Spacing */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">04. Layout & Spacing</span>
                    <h2 className="text-3xl font-light mb-16">格線與間距 / Grid & Spacing</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* 8pt Grid System */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">8pt 間距系統</h3>
                            <p className="text-sm text-brand-gray mb-8 leading-relaxed">
                                所有的 Margin 與 Padding 皆為 8 的倍數。這創造了視覺上的韻律感與一致性。<br />
                                例外：對於微小元件（如 Tag）內部可使用 4px。
                            </p>

                            <div className="space-y-4 font-sans text-xs text-brand-gray">
                                <div className="flex items-center">
                                    <span className="w-12">xs</span>
                                    <div className="h-4 w-1 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">4px (0.25rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">sm</span>
                                    <div className="h-4 w-2 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">8px (0.5rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">base</span>
                                    <div className="h-4 w-4 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">16px (1rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">md</span>
                                    <div className="h-4 w-6 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">24px (1.5rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">lg</span>
                                    <div className="h-4 w-8 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">32px (2rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">xl</span>
                                    <div className="h-4 w-16 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">64px (4rem)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-12">2xl</span>
                                    <div className="h-4 w-32 bg-brand-red/20 border border-brand-red"></div>
                                    <span className="ml-4">128px (8rem)</span>
                                </div>
                            </div>
                        </div>

                        {/* Layout Grid */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">12 欄佈局規範</h3>
                            <div className="relative h-64 bg-white border border-brand-line flex overflow-hidden">
                                {/* Columns simulation */}
                                <div className="absolute inset-0 flex gap-4 px-4 py-4 opacity-20">
                                    <div className="flex-1 bg-brand-red h-full"></div>
                                    <div className="flex-1 bg-brand-red h-full"></div>
                                    <div className="flex-1 bg-brand-red h-full"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden md:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden md:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden md:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                    <div className="flex-1 bg-brand-red h-full hidden lg:block"></div>
                                </div>
                                <div className="relative z-10 p-8 flex items-center justify-center w-full">
                                    <div className="bg-brand-bg p-6 border border-brand-line shadow-sm w-3/4 text-center">
                                        Content Container
                                        <div className="mt-2 text-[10px] text-brand-red bg-brand-red/5 px-2 py-1 inline-block">Max-Width: 1600px</div>
                                    </div>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-2 text-sm text-brand-gray list-disc list-inside">
                                <li><strong>Mobile:</strong> 4 Columns, 16px Gutter, 24px Margin</li>
                                <li><strong>Tablet:</strong> 6 Columns, 24px Gutter, 32px Margin</li>
                                <li><strong>Desktop:</strong> 12 Columns, 32px Gutter, Auto Margin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Components */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">05. Components</span>
                    <h2 className="text-3xl font-light mb-12">元件庫</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Buttons */}
                        <div className="space-y-12">
                            <h3 className="text-lg font-medium border-b border-brand-line pb-4">按鈕 / Buttons</h3>

                            {/* Primary */}
                            <div>
                                <div className="flex items-center gap-8 mb-4">
                                    <button className="px-8 py-3 border border-brand-ink bg-brand-ink text-brand-bg text-sm tracking-widest hover:bg-transparent hover:text-brand-ink transition-colors duration-300">
                                        PRIMARY
                                    </button>
                                    <p className="text-xs text-brand-gray font-mono">bg-brand-ink / text-brand-bg</p>
                                </div>
                            </div>

                            {/* Secondary */}
                            <div>
                                <div className="flex items-center gap-8 mb-4">
                                    <button className="px-8 py-3 border border-brand-ink bg-transparent text-brand-ink text-sm tracking-widest hover:bg-brand-ink hover:text-brand-bg transition-colors duration-300">
                                        SECONDARY
                                    </button>
                                    <p className="text-xs text-brand-gray font-mono">border-brand-ink / transparent</p>
                                </div>
                            </div>

                            {/* Text Link */}
                            <div>
                                <div className="flex items-center gap-8 mb-4">
                                    <a href="#" className="border-b border-brand-gray text-brand-gray pb-1 hover:text-brand-ink hover:border-brand-ink transition-colors duration-300 text-sm tracking-widest">
                                        READ MORE
                                    </a>
                                    <p className="text-xs text-brand-gray font-mono">Border-bottom: 1px</p>
                                </div>
                            </div>
                        </div>

                        {/* Forms & Quotes */}
                        <div className="space-y-12">
                            {/* Input */}
                            <div>
                                <h3 className="text-lg font-medium border-b border-brand-line pb-4 mb-8">表單 / Forms</h3>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="請輸入 Email"
                                        className="w-full bg-transparent border-b border-brand-line py-3 text-brand-ink focus:outline-none focus:border-brand-ink transition-colors font-light"
                                    />
                                    <div className="tech-tag mt-2 text-[10px] text-brand-red bg-brand-red/5 px-2 py-1 inline-block">Focus: Border-color #2B2B2B</div>
                                </div>
                            </div>

                            {/* Blockquote */}
                            <div>
                                <h3 className="text-lg font-medium border-b border-brand-line pb-4 mb-8">引言 / Blockquote</h3>
                                <blockquote className="pl-6 border-l-2 border-brand-red/50 italic text-xl text-brand-gray font-serif">
                                    "Simplicity is the ultimate sophistication."
                                    <footer className="text-xs font-sans text-brand-gray mt-2 not-italic uppercase tracking-widest">
                                        — Leonardo da Vinci
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Interaction Principles */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">06. Interaction</span>
                    <h2 className="text-3xl font-light mb-12">UI 互動原則</h2>

                    <div className="bg-brand-bg border border-brand-line p-12">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-brand-ink">Motion Principles</h3>
                            <p className="text-brand-gray font-light leading-relaxed mb-8">
                                我們的動畫應該是「優雅且緩慢」的，避免彈跳 (Bounce) 或急速 (Linear) 的效果。
                                所有過渡效果應模仿墨水暈染或紙張翻動的物理特性。
                            </p>
                            <div className="flex flex-wrap gap-4 font-mono text-xs text-brand-red">
                                <span className="border border-brand-line px-3 py-1">Duration: 700ms - 1000ms</span>
                                <span className="border border-brand-line px-3 py-1">Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. RWD Strategy */}
            <section className="py-24 px-6 md:px-24 border-b border-brand-line">
                <div className="max-w-7xl mx-auto">
                    <span className="tech-tag mb-4">07. RWD Strategy</span>
                    <h2 className="text-3xl font-light mb-12">響應式策略</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 border border-brand-line text-center">
                            <Smartphone className="w-8 h-8 mx-auto text-brand-gray mb-4" />
                            <h4 className="font-medium mb-2">Mobile</h4>
                            <p className="text-xs text-brand-gray">&lt; 767px</p>
                            <p className="text-xs text-brand-gray mt-2">堆疊佈局<br />隱藏 Hover</p>
                        </div>
                        <div className="bg-white p-6 border border-brand-line text-center">
                            <Tablet className="w-8 h-8 mx-auto text-brand-gray mb-4" />
                            <h4 className="font-medium mb-2">Tablet</h4>
                            <p className="text-xs text-brand-gray">768px - 1023px</p>
                            <p className="text-xs text-brand-gray mt-2">混合佈局<br />觸控友善</p>
                        </div>
                        <div className="bg-white p-6 border border-brand-line text-center">
                            <Monitor className="w-8 h-8 mx-auto text-brand-gray mb-4" />
                            <h4 className="font-medium mb-2">Desktop</h4>
                            <p className="text-xs text-brand-gray">≥ 1024px</p>
                            <p className="text-xs text-brand-gray mt-2">12 欄網格<br />最大寬度 1600px</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA Section */}
            <section className="py-24 px-6 md:px-24 bg-brand-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6 text-brand-ink">你也想讓AI幫你設計這樣子的品牌視覺規範嗎？</h2>
                    <p className="text-brand-gray mb-12 font-light">請點擊下方按鈕，前往我的SKOOL免費領取</p>
                    <a
                        href="https://www.skool.com/one-man-business-with-ai-4046/free-ai-prompt?p=9d38f2ea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-4 border border-brand-ink bg-brand-ink text-white text-sm tracking-widest hover:bg-transparent hover:text-brand-ink transition-colors duration-300"
                    >
                        前往SKOOL領取
                    </a>
                </div>
            </section>

            {/* Footer for this page */}
            <footer className="py-12 text-center text-xs text-brand-gray tracking-widest border-t border-brand-line bg-white">
                好事發生數位 DESIGN SYSTEM v2.0
            </footer>
        </main>
    );
}
