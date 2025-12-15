import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'AI SEO 自動化行銷 | 好事發生數位',
    description: '你的競爭對手正在用 AI 搶走你的客戶。每月流失的不只是流量，更是 50-300 萬潛在營收。用 AI 數位分身，把客戶搶回來。',
};

export default function AISEOMarketingPage() {
    return (
        <main className="min-h-screen bg-[var(--brand-bg)]">
            {/* ===== Section 1: HOOK - 金錢化開場衝擊 ===== */}
            <section className="pt-40 pb-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-left md:text-center">
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] tracking-[0.25em] text-[var(--brand-red)] border border-[var(--brand-red)] bg-white font-sans uppercase">
                        ⚠️ 緊急：你的市佔率正在流失
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-ink)] mb-10 leading-relaxed md:leading-tight">
                        <span className="block mb-4">你的競爭對手，</span>
                        <span className="block text-[var(--brand-red)]">正在用 AI 偷走你的客戶</span>
                    </h1>
                    <p className="max-w-3xl md:mx-auto text-lg text-[var(--brand-gray)] mb-6 font-light leading-loose">
                        當你還在猶豫要不要開始內容行銷時，你的競爭對手已經用 AI 做出了 <strong className="text-[var(--brand-ink)]">48 篇文章</strong>，搶走 Google 搜尋結果的前 10 名位置。
                    </p>
                    <p className="max-w-3xl md:mx-auto text-xl text-[var(--brand-ink)] mb-16 font-medium">
                        每一個被搶走的關鍵字，都代表<span className="text-[var(--brand-red)]">每月 5-50 萬的潛在客戶</span>流向他們。
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-6">
                        <Link
                            href="#diagnosis"
                            className="inline-block px-10 py-4 bg-[var(--brand-red)] text-white text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            免費診斷：我每月流失多少？
                        </Link>
                        <Link
                            href="#cost"
                            className="inline-block px-10 py-4 border border-[var(--brand-ink)] text-[var(--brand-ink)] text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[var(--brand-ink)] hover:text-white"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            看看不行動的代價
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== Section 2: COST OF INACTION - 不行動的代價 ===== */}
            <section id="cost" className="py-24 bg-[var(--brand-ink)] text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Cost of Inaction
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light mb-6 leading-relaxed md:leading-normal">
                            如果你今天什麼都不做...
                        </h2>
                        <p className="text-white/70">
                            我們遇過很多老闆說：「我再觀望一下。」好，我們來算一筆帳。
                        </p>
                    </div>

                    {/* Calculator */}
                    <div className="bg-white/10 backdrop-blur p-10 md:p-14 border border-white/20 mb-12">
                        <h3 className="text-xl font-medium mb-8 text-center">📊 你的「觀望成本」計算機</h3>
                        <div className="space-y-6 text-lg">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4">
                                <span className="text-white/70">你的平均客戶終身價值</span>
                                <span className="text-2xl font-light mt-2 md:mt-0">NT$ <strong>100,000</strong></span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4">
                                <span className="text-white/70">你每月從 Google 來的潛在客戶</span>
                                <span className="text-2xl font-light mt-2 md:mt-0"><strong>20</strong> 位</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4">
                                <span className="text-white/70">如果競爭對手搶走其中 25%</span>
                                <span className="text-2xl font-light mt-2 md:mt-0">每月流失 <strong className="text-[var(--brand-red)]">5</strong> 位客戶</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4">
                                <span className="text-white/70">每月損失營收</span>
                                <span className="text-3xl font-medium mt-2 md:mt-0 text-[var(--brand-red)]">NT$ 500,000</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4">
                                <span className="text-white font-medium text-xl">觀望 6 個月的總損失</span>
                                <span className="text-4xl font-bold mt-2 md:mt-0 text-[var(--brand-red)]">NT$ 3,000,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xl font-light text-white/80 mb-4">
                            這就是「什麼都不做」的<strong className="text-white">真正成本</strong>。
                        </p>
                        <p className="text-lg text-[var(--brand-red)]">
                            你還要觀望多久？
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 3: PROBLEM SEEKER - 問題診斷 ===== */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            你真正的問題，<br className="md:hidden" />不是「沒時間寫文章」
                        </h2>
                        <p className="text-[var(--brand-gray)] max-w-2xl md:mx-auto">
                            你心裡可能在想：「我的問題是沒時間、沒人、沒預算。」<br />
                            但這不是根本問題。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* 錯誤認知 */}
                        <div className="bg-[var(--brand-bg)] border border-[var(--brand-line)] p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-full bg-[var(--brand-gray)]/20 flex items-center justify-center text-2xl">❌</span>
                                <h3 className="text-xl font-medium text-[var(--brand-gray)]">你以為的問題</h3>
                            </div>
                            <ul className="space-y-4 text-[var(--brand-gray)]">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    <span>「我沒時間寫文章」</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    <span>「我不會 SEO」</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    <span>「我預算不夠請編輯」</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    <span>「AI 寫的內容沒有溫度」</span>
                                </li>
                            </ul>
                        </div>

                        {/* 真正問題 */}
                        <div className="bg-[var(--brand-red)]/5 border-2 border-[var(--brand-red)] p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-full bg-[var(--brand-red)] flex items-center justify-center text-2xl text-white">⚡</span>
                                <h3 className="text-xl font-medium text-[var(--brand-red)]">真正的商業問題</h3>
                            </div>
                            <p className="text-lg text-[var(--brand-ink)] leading-relaxed mb-6">
                                <strong>你的競爭對手正在用更低的成本，</strong><br />
                                <strong>搶走更多的市場份額。</strong>
                            </p>
                            <ul className="space-y-3 text-[var(--brand-gray)]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand-red)]">→</span>
                                    <span>他們不一定比你專業</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand-red)]">→</span>
                                    <span>他們不一定比你努力</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand-red)]">→</span>
                                    <span className="font-medium text-[var(--brand-ink)]">他們只是比你<strong className="text-[var(--brand-red)]">更早用 AI 武裝自己</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xl text-[var(--brand-ink)] font-light">
                            問題不是你不夠努力，<br />
                            問題是<strong className="text-[var(--brand-red)]">你的武器不夠先進</strong>。
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 4: DOLLARIZE VALUE - 價值貨幣化 ===== */}
            <section className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            ROI Calculator
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            這不是一筆「支出」，<br className="md:hidden" />是一筆「投資」
                        </h2>
                        <p className="text-[var(--brand-gray)]">
                            讓我們算一筆帳：
                        </p>
                    </div>

                    <div className="bg-white border border-[var(--brand-line)] p-10 md:p-14 mb-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 投入 */}
                            <div>
                                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--brand-gray)] mb-6 border-b border-[var(--brand-line)] pb-3">你的投入</h3>
                                <div className="text-center py-8">
                                    <span className="text-5xl font-light text-[var(--brand-ink)]">NT$ 50,000</span>
                                    <span className="block text-sm text-[var(--brand-gray)] mt-2">/ 月</span>
                                </div>
                            </div>

                            {/* 產出 */}
                            <div>
                                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--brand-gray)] mb-6 border-b border-[var(--brand-line)] pb-3">你得到什麼</h3>
                                <ul className="space-y-4 text-[var(--brand-gray)]">
                                    <li className="flex items-center gap-3">
                                        <span className="text-[var(--brand-red)]">✓</span>
                                        <span>每月產出 <strong className="text-[var(--brand-ink)]">16 篇</strong> SEO 優化文章</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[var(--brand-red)]">✓</span>
                                        <span>6 個月後，新增 <strong className="text-[var(--brand-ink)]">20 組</strong> Google 排名關鍵字</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[var(--brand-red)]">✓</span>
                                        <span>每個關鍵字每月帶來 <strong className="text-[var(--brand-ink)]">100-500 次</strong>曝光</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[var(--brand-red)]">✓</span>
                                        <span>假設轉化率 2%，每月新增 <strong className="text-[var(--brand-ink)]">40-200 個</strong>潛在客戶</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[var(--brand-red)]">✓</span>
                                        <span>假設成交率 5%，每月新增 <strong className="text-[var(--brand-ink)]">2-10 個</strong>付費客戶</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[var(--brand-line)] text-center">
                            <p className="text-lg text-[var(--brand-gray)] mb-4">假設平均客單價 NT$ 50,000</p>
                            <p className="text-2xl text-[var(--brand-ink)] font-light mb-2">
                                每月潛在新增營收
                            </p>
                            <p className="text-5xl font-bold text-[var(--brand-red)]">
                                NT$ 100,000 - 500,000
                            </p>
                        </div>
                    </div>

                    <div className="bg-[var(--brand-red)] text-white p-10 text-center">
                        <p className="text-2xl font-light mb-2">
                            你花 <strong>5 萬</strong>，有機會賺回 <strong>10-50 萬</strong>
                        </p>
                        <p className="text-xl">
                            這不是成本，這是 <strong className="text-3xl">10 倍 ROI</strong> 的投資。
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 5: SOLUTION - 精簡解決方案 ===== */}
            <section id="solution" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            我們如何幫你做到？
                        </h2>
                        <p className="text-xl text-[var(--brand-ink)] font-medium">
                            我們不賣軟體，我們賣<span className="text-[var(--brand-red)]">結果</span>。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                step: '01',
                                title: '市場分析',
                                desc: '我們分析你的市場、競爭對手、關鍵字缺口，找出最有價值的內容機會。',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                )
                            },
                            {
                                step: '02',
                                title: 'AI + 人工產出',
                                desc: '用 AI 數位分身 + 真人審核，每月產出 16 篇高品質、符合你品牌語氣的文章。',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                )
                            },
                            {
                                step: '03',
                                title: '直接發布',
                                desc: '我們直接發布到你的網站，你只需要 10 分鐘審核確認即可。',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 border border-[var(--brand-line)] hover:border-[var(--brand-red)] transition-colors duration-500">
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--brand-line)] rounded-full text-[var(--brand-red)]">
                                    {item.icon}
                                </div>
                                <span className="text-xs text-[var(--brand-red)] tracking-[0.2em] uppercase">Step {item.step}</span>
                                <h3 className="text-xl font-medium text-[var(--brand-ink)] mt-2 mb-4">{item.title}</h3>
                                <p className="text-sm text-[var(--brand-gray)] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-[var(--brand-bg)] border border-[var(--brand-line)] p-8">
                        <p className="text-lg text-[var(--brand-ink)]">
                            你不需要懂 AI、懂 SEO、懂技術。<br />
                            你只需要<strong className="text-[var(--brand-red)]">驗收成果</strong>。
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 6: RISK REVERSAL - 風險反轉 ===== */}
            <section className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="bg-white border-2 border-[var(--brand-red)] p-12 md:p-16 relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--brand-red)] text-white px-6 py-2 text-sm tracking-[0.1em] uppercase">
                            零風險承諾
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-8 leading-relaxed">
                            如果我們做不到，<br />你一毛錢都不用付
                        </h2>
                        <p className="text-lg text-[var(--brand-gray)] mb-8 leading-relaxed">
                            我們知道你可能在想：「萬一沒效果呢？」
                        </p>
                        <div className="bg-[var(--brand-bg)] p-8 mb-8">
                            <ul className="space-y-4 text-left max-w-md mx-auto">
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--brand-red)] text-xl">✓</span>
                                    <span className="text-[var(--brand-ink)]">如果 3 個月內，你對成果不滿意，<strong className="text-[var(--brand-red)]">全額退費</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--brand-red)] text-xl">✓</span>
                                    <span className="text-[var(--brand-ink)]">我們不是賣軟體授權，我們是<strong>對結果負責</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--brand-red)] text-xl">✓</span>
                                    <span className="text-[var(--brand-ink)]">隨時可以終止合約，退還當月費用</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-xl font-medium text-[var(--brand-ink)]">
                            你唯一的風險，是<span className="text-[var(--brand-red)]">繼續什麼都不做</span>。
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Section 7: URGENCY + SOCIAL PROOF - 急迫感 ===== */}
            <section className="py-24 bg-[var(--brand-ink)] text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
                        他們已經開始了。<br />你呢？
                    </h2>

                    <div className="bg-white/10 backdrop-blur border border-white/20 p-10 mb-12">
                        <p className="text-lg text-white/80 mb-6">
                            本月我們只接受
                        </p>
                        <p className="text-6xl font-bold text-[var(--brand-red)] mb-2">
                            3 位
                        </p>
                        <p className="text-lg text-white/80 mb-8">
                            新客戶
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                            因為我們會投入大量時間研究你的市場，這需要我們全心投入。<br />
                            如果你錯過這個月，下一個開放名額是 <strong className="text-white">2 個月後</strong>。
                        </p>
                    </div>

                    <p className="text-xl text-white/80 mb-4">
                        2 個月，你的競爭對手又可以多寫 <strong className="text-white">32 篇文章</strong>。
                    </p>
                    <p className="text-2xl text-[var(--brand-red)]">
                        你還要等多久？
                    </p>
                </div>
            </section>

            {/* ===== Section 8: CTA - 最終轉化 ===== */}
            <section id="diagnosis" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed">
                        現在預約免費診斷
                    </h2>
                    <p className="text-xl text-[var(--brand-red)] mb-12">
                        看看你每月正在流失多少客戶
                    </p>

                    <div className="bg-[var(--brand-bg)] border border-[var(--brand-line)] p-10 mb-12 text-left">
                        <p className="text-lg text-[var(--brand-ink)] mb-6 text-center">
                            預約一次 <strong>30 分鐘免費診斷</strong>，我們會告訴你：
                        </p>
                        <ul className="space-y-4 max-w-lg mx-auto">
                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center text-sm flex-shrink-0">1</span>
                                <span className="text-[var(--brand-gray)]">你目前有哪些<strong className="text-[var(--brand-ink)]">關鍵字缺口</strong>正在被競爭對手佔據</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center text-sm flex-shrink-0">2</span>
                                <span className="text-[var(--brand-gray)]">這些缺口每月讓你流失多少<strong className="text-[var(--brand-ink)]">潛在營收</strong></span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center text-sm flex-shrink-0">3</span>
                                <span className="text-[var(--brand-gray)]">最適合你的<strong className="text-[var(--brand-ink)]">內容策略路徑圖</strong></span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-[var(--brand-gray)] mb-8">
                        就算最後你選擇不跟我們合作，這份診斷報告也值得你花 30 分鐘。
                    </p>

                    <a
                        href="https://www.threads.com/@881freelancer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-16 py-5 bg-[var(--brand-red)] text-white text-lg tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A] shadow-lg hover:shadow-xl"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                        📅 預約免費診斷
                    </a>

                    <p className="text-sm text-[var(--brand-gray)] mt-6">
                        透過 Threads 私訊預約 · 24 小時內回覆
                    </p>
                </div>
            </section>

            {/* ===== About Section ===== */}
            <section id="about" className="py-24 bg-[var(--brand-bg)] border-t border-[var(--brand-line)]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white p-12 md:p-20 border border-[var(--brand-line)] relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--brand-red)]" />
                        <div className="flex flex-col md:flex-row gap-16 items-start">
                            <div className="md:w-1/3 w-full">
                                <div className="aspect-[3/4] bg-white border border-[var(--brand-line)] relative p-4 shadow-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/41122.jpg"
                                        alt="Gary Yang"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-light mb-8">為什麼聽我的？</h2>
                                <h3 className="text-xl text-[var(--brand-red)] font-light mb-8 leading-relaxed">
                                    因為我也曾經狠狠摔過。
                                </h3>
                                <div className="space-y-6 text-[var(--brand-gray)] font-light leading-loose text-sm">
                                    <p>
                                        我是好事發生數位的創辦人。我不只是一個技術宅，我是連續創業家。
                                    </p>
                                    <p>
                                        開過三家公司，也曾失敗收場。所以我比誰都懂，老闆的時間有多珍貴，每一分行銷預算都不能浪費。
                                    </p>
                                    <p>
                                        2018 年，我站上 WordPress WordCamp 的講台。2023年，創辦過 AI 解決方案公司。現在，我專注於將最前沿的 AI Agent 技術導入企業。
                                    </p>
                                    <p className="text-[var(--brand-ink)] font-medium pt-4 border-t border-[var(--brand-line)] mt-8">
                                        我不是教你玩工具，我是幫你<strong className="text-[var(--brand-red)]">把工具變成現金流</strong>。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Footer CTA ===== */}
            <section className="py-24 bg-[var(--brand-ink)] text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl mb-4 font-light">
                        每多等一天，
                    </h2>
                    <h2 className="text-3xl md:text-4xl mb-8 font-light">
                        就多流失一位客戶給競爭對手。
                    </h2>
                    <a
                        href="https://www.threads.com/@881freelancer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-16 py-5 bg-[var(--brand-red)] text-white text-lg tracking-[0.1em] transition-all duration-700 hover:bg-white hover:text-[var(--brand-red)]"
                    >
                        立即預約免費診斷
                    </a>
                </div>
            </section>
        </main>
    );
}
