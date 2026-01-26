import Link from 'next/link';

export const metadata = {
    title: '好事SEO 流量成長解決方案 | AI 自動化 SEO 內容生產',
    description: '一個人就能做到十人團隊的 SEO 產出。20+ AI 專業代理人全自動協作，從關鍵字研究到文章發布，讓你專注在策略與客戶。',
};

export default function AISEOMarketingPage() {
    return (
        <main className="min-h-screen bg-[var(--brand-bg)]">
            {/* ===== Section 1: Hero ===== */}
            <section className="pt-32 pb-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-2 mb-10 text-[10px] tracking-[0.25em] text-[var(--brand-red)] border border-[var(--brand-red)] font-sans uppercase">
                        FOR SEO AGENCIES & CONTENT TEAMS
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-ink)] mb-6 leading-tight tracking-wide">
                        一個人，
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-red)] mb-10 leading-tight tracking-wide">
                        就能做到十人團隊的 SEO 產出
                    </h1>
                    <p className="max-w-2xl text-lg text-[var(--brand-gray)] mb-12 font-light leading-loose">
                        好事SEO 流量成長解決方案——從關鍵字研究到文章發布，
                        <br />
                        20+ AI 專業代理人全自動協作，讓你專注在策略與客戶。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="#cta"
                            className="inline-block px-10 py-4 bg-[var(--brand-ink)] text-[var(--brand-bg)] text-sm tracking-[0.15em] transition-all duration-700 hover:bg-transparent hover:text-[var(--brand-ink)] border border-[var(--brand-ink)]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            申請 DEMO
                        </Link>
                        <Link
                            href="#process"
                            className="inline-block px-10 py-4 border border-[var(--brand-ink)] text-[var(--brand-ink)] text-sm tracking-[0.15em] transition-all duration-700 hover:bg-[var(--brand-ink)] hover:text-white"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            了解運作流程
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== Section 2: Pain Points ===== */}
            <section className="py-24 px-6 bg-[var(--brand-bg)]">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[var(--brand-red)] text-[10px] tracking-[0.2em] uppercase mb-4 block font-sans">
                            THE REAL PROBLEMS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] tracking-wide">
                            SEO 公司的四個成長天花板
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {[
                            {
                                num: '01',
                                title: '人力成本吃掉利潤',
                                desc: '請一位 SEO 專員月薪 4-6 萬，還要培訓、管理、處理離職交接。人事成本永遠是最大的隱形支出。'
                            },
                            {
                                num: '02',
                                title: '工具訂閱費疊加',
                                desc: 'Ahrefs 6,000/月、Surfer SEO 3,000/月、Grammarly、Canva⋯⋯ 十幾套工具加起來，每月固定燒掉 2-3 萬。'
                            },
                            {
                                num: '03',
                                title: '案子接得到，產能跟不上',
                                desc: '客戶越來越多，但內容產出永遠是瓶頸。不是不想接，是根本做不完。'
                            },
                            {
                                num: '04',
                                title: '發布後沒人維護',
                                desc: '文章上線就沒人管了。半年後流量歸零，舊文變成數位垃圾，SEO 資產持續貶值。'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[var(--brand-line)] p-8">
                                <span className="text-[var(--brand-red)] text-xs tracking-[0.15em] font-sans">{item.num}</span>
                                <h3 className="text-xl font-medium text-[var(--brand-ink)] mt-3 mb-4">{item.title}</h3>
                                <p className="text-[var(--brand-gray)] font-light leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg text-[var(--brand-ink)] font-light leading-loose">
                        這些問題的根源不是你不夠努力，
                        <br />
                        而是傳統的內容生產模式已經到達極限。
                    </p>
                </div>
            </section>

            {/* ===== Section 3: Solution ===== */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[var(--brand-red)] text-[10px] tracking-[0.2em] uppercase mb-4 block font-sans">
                            THE SOLUTION
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 tracking-wide">
                            好事SEO 流量成長解決方案
                        </h2>
                        <p className="text-xl text-[var(--brand-gray)] font-light leading-loose">
                            不是另一個 AI 寫作工具。
                            <br />
                            是一整支 AI 內容團隊，為你全自動運作。
                        </p>
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-lg text-[var(--brand-ink)] font-light mb-8">
                            我們打造了 20+ 個專業 AI 代理人，各司其職，自動協作完成整套 SEO 內容流程：
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {['關鍵字策略', '內容企劃', '文章撰寫', 'SEO 優化', '事實查核', '內外部連結', 'WordPress 發布'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 border border-[var(--brand-line)] text-sm text-[var(--brand-ink)] font-light">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-[var(--brand-ink)] font-medium">
                            你只需要指定關鍵字，剩下的交給系統。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <div className="bg-[var(--brand-bg)] border border-[var(--brand-line)] p-10 text-center">
                            <h3 className="text-2xl font-medium text-[var(--brand-ink)] mb-4">訂閱制服務</h3>
                            <div className="w-10 h-px bg-[var(--brand-red)] mx-auto mb-6"></div>
                            <ul className="space-y-3 text-[var(--brand-gray)] font-light mb-6">
                                <li>我們幫你操作</li>
                                <li>全流程代管</li>
                                <li>專人支援</li>
                            </ul>
                            <p className="text-sm text-[var(--brand-red)] font-medium">適合：專注本業的團隊</p>
                        </div>
                        <div className="bg-[var(--brand-bg)] border border-[var(--brand-line)] p-10 text-center">
                            <h3 className="text-2xl font-medium text-[var(--brand-ink)] mb-4">一次性買斷</h3>
                            <div className="w-10 h-px bg-[var(--brand-red)] mx-auto mb-6"></div>
                            <ul className="space-y-3 text-[var(--brand-gray)] font-light mb-6">
                                <li>你自己掌控</li>
                                <li>自行安裝維運</li>
                                <li>完整系統移交</li>
                            </ul>
                            <p className="text-sm text-[var(--brand-red)] font-medium">適合：有技術能力的公司</p>
                        </div>
                    </div>

                    <p className="text-center text-[var(--brand-gray)] font-light mt-8">
                        費用細節？預約 Demo 時詳談。
                    </p>
                </div>
            </section>

            {/* ===== Section 4: Process ===== */}
            <section id="process" className="py-24 px-6 bg-[var(--brand-ink)]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-400 text-[10px] tracking-[0.2em] uppercase mb-4 block font-sans">
                            HOW IT WORKS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                            一條龍自動化流程
                        </h2>
                        <p className="text-xl text-white/60 font-light">
                            每個環節都有專責 AI 代理人
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                step: '01',
                                title: '策略階段',
                                agents: '關鍵字策略師\n內容企劃師',
                                desc: '競品分析、Topic Cluster 設計、重複性檢測、搜尋意圖研究'
                            },
                            {
                                step: '02',
                                title: '生產階段',
                                agents: '內容撰稿人\nSEO 優化師\n事實查核員',
                                desc: '撰寫去 AI 味文章、Meta 優化、Schema 標記、數據驗證'
                            },
                            {
                                step: '03',
                                title: '連結與發布',
                                agents: '內部連結專家\n外部連結專家\n文章發布員',
                                desc: 'Pillar-Cluster 內連架構、權威外連引用、WordPress 自動發布'
                            },
                            {
                                step: '04',
                                title: '持續維護',
                                agents: '舊文翻新工程師\n風格學習系統',
                                desc: '定期更新舊文、從人工編輯中學習品牌語氣'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 border border-white/20 p-6">
                                <span className="text-amber-400 text-[10px] tracking-[0.15em] font-sans">STEP {item.step}</span>
                                <h3 className="text-lg font-medium text-white mt-3 mb-4">{item.title}</h3>
                                <p className="text-amber-300 text-sm font-light mb-4 whitespace-pre-line">{item.agents}</p>
                                <p className="text-white/70 text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-xl text-white font-medium mb-2">這不是黑盒子。</p>
                        <p className="text-white/60 font-light leading-loose">
                            每一個步驟都有明確的輸入、輸出與品質檢查點。
                            <br />
                            你隨時可以介入審核，掌握完整控制權。
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 5: Advantages ===== */}
            <section className="py-24 px-6 bg-[var(--brand-bg)]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[var(--brand-red)] text-[10px] tracking-[0.2em] uppercase mb-4 block font-sans">
                            WHY US
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] tracking-wide">
                            效率與品質，缺一不可
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-[var(--brand-line)] p-10">
                            <span className="text-[var(--brand-red)] text-xs tracking-[0.15em] font-sans">效率</span>
                            <h3 className="text-2xl font-light text-[var(--brand-ink)] mt-3 mb-6">一個人做十人的事</h3>
                            <p className="text-[var(--brand-gray)] font-light leading-loose text-sm">
                                傳統 SEO 團隊需要：關鍵字專員、內容編輯、SEO 優化師、校稿人員、發布人員⋯⋯
                                <br /><br />
                                現在，一個人 + 我們的系統，就能達到同等產出。讓你的團隊專注在高價值的策略工作。
                            </p>
                        </div>
                        <div className="bg-white border border-[var(--brand-line)] p-10">
                            <span className="text-[var(--brand-red)] text-xs tracking-[0.15em] font-sans">品質</span>
                            <h3 className="text-2xl font-light text-[var(--brand-ink)] mt-3 mb-6">不是 AI 味，是專業內容</h3>
                            <p className="text-[var(--brand-gray)] font-light leading-loose text-sm">
                                我們的系統內建：
                                <br /><br />
                                • 去 AI 味寫作機制——讀起來像人寫的
                                <br />
                                • 事實查核代理人——數據與連結自動驗證
                                <br />
                                • E-E-A-T 優化——符合 Google 品質指南
                                <br />
                                • 品牌語氣學習——越用越像你的風格
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section 6: CTA ===== */}
            <section id="cta" className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 tracking-wide">
                        準備好提升你的 SEO 產能了嗎？
                    </h2>
                    <p className="text-xl text-[var(--brand-gray)] font-light mb-12">
                        預約 Demo，看看系統如何運作
                    </p>

                    <a
                        href="https://www.threads.com/@881freelancer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-14 py-5 bg-[var(--brand-red)] text-white text-base tracking-[0.15em] transition-all duration-700 hover:bg-[#a63a28]"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                        申請 DEMO
                    </a>

                    <div className="mt-10">
                        <p className="text-[var(--brand-gray)] font-light mb-2">或透過 Threads 與我聯繫</p>
                        <a
                            href="https://www.threads.com/@881freelancer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--brand-ink)] font-medium hover:text-[var(--brand-red)] transition-colors"
                        >
                            @881freelancer
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="py-12 px-6 bg-[var(--brand-ink)] text-center">
                <p className="text-white font-light tracking-[0.2em] mb-4">好事發生數位</p>
                <p className="text-white/40 text-sm font-light tracking-wide">
                    © 2025 Good Things Digital. All rights reserved.
                </p>
            </footer>
        </main>
    );
}
