import Image from 'next/image';
import Link from 'next/link';

// Force dynamic rendering - skip pre-render during build
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'AI SEO 自動化行銷 | 好事發生數位',
    description: '複製一個「數位分身」，讓它 24 小時全自動幫你經營內容行銷。用不到真人團隊 1/10 的成本，獲得專業級的內容產出。',
};

export default function AISEOMarketingPage() {
    return (
        <main className="min-h-screen bg-[var(--brand-bg)]">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] tracking-[0.25em] text-[var(--brand-red)] border border-[var(--brand-line)] bg-white font-sans uppercase">
                        AI Digital Twin
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-ink)] mb-10 leading-tight">
                        <span className="block mb-4">複製一個「數位分身」</span>
                        <span className="block text-[var(--brand-red)]">讓它 24 小時全自動幫你經營內容</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--brand-gray)] mb-8 font-light leading-loose">
                        你心裡一定想過：「如果有另一個我就好了。」<br />
                        <strong className="text-[var(--brand-ink)]">這不再是想像。我們把你的「大腦」複製出來，讓它幫你寫作、經營品牌。</strong>
                    </p>
                    <p className="max-w-2xl mx-auto text-base text-[var(--brand-gray)] mb-16 font-light leading-relaxed border-l-2 border-[var(--brand-red)] pl-6 text-left">
                        這不是一般的 AI 工具，而是你的<strong className="text-[var(--brand-ink)]">全自動數位分身</strong>。<br />
                        它繼承了你的語氣、你的觀點，甚至比你更勤勞。
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="#pricing"
                            className="inline-block px-10 py-4 bg-[var(--brand-red)] text-white text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            打造我的數位分身 (限量 3 名)
                        </Link>
                        <Link
                            href="#solution"
                            className="inline-block px-10 py-4 border border-[var(--brand-red)] text-[var(--brand-red)] text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[var(--brand-red)] hover:text-white"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            看它如何運作
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section id="problem" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            為什麼你明知道要做內容行銷，卻一直沒開始？
                        </h2>
                        <p className="text-[var(--brand-gray)]">
                            因為真正的問題不是「AI 能不能寫」，而是經營內容的<strong className="text-[var(--brand-ink)]">成本</strong>太高！
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: '📈',
                                title: '競爭對手正在超車',
                                desc: '你的競爭對手每個月產出 12-16 篇文章，佔據了 Google 前三頁。你一個月產出 1 篇，結果淹沒在第五頁。',
                                quote: '「6 個月後，你的流量比現在少 40%。」'
                            },
                            {
                                icon: '💰',
                                title: '人力成本太高，效率差',
                                desc: '一個資深編輯年薪 80 萬起跳，加上勞健保成本超過 100 萬。還不一定有 SEO 專業，產出品質不穩定。',
                                quote: '「年度行銷預算的 1/3 都在養人。」'
                            },
                            {
                                icon: '⏳',
                                title: '外包流程冗長，緩不濟急',
                                desc: '找外包寫手，光規劃就要兩週。寫完回來還要審核觀點、語氣，來回修改又是兩週。',
                                quote: '「明明付了錢，卻覺得比自己寫還累。」'
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--brand-line)] text-2xl rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">{item.title}</h3>
                                <p className="text-[var(--brand-gray)] font-light text-sm leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                                <p className="text-xs text-[var(--brand-red)] italic">{item.quote}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto mt-16 p-8 bg-[var(--brand-bg)] border-l-2 border-[var(--brand-red)]">
                        <p className="text-base text-[var(--brand-ink)] leading-loose">
                            <strong className="text-lg">試著問自己：</strong><br />
                            「如果你什麼都不做，繼續用現在的方式產內容，一年後你的網站會在哪裡？」<br />
                            「如果你的競爭對手開始用 AI 自動化，你覺得你還能撐多久？」
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Workflow */}
                    <div className="text-center mb-24">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Workflow
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            我們如何複製「你」？
                        </h2>
                        <p className="text-[var(--brand-gray)] mb-12">透明、標準化的數位分身建置流程</p>

                        {/* Flowchart */}
                        <div className="max-w-4xl mx-auto bg-white border border-[var(--brand-line)] p-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center w-full md:w-1/4">
                                    <div className="w-16 h-16 rounded-full border-2 border-[var(--brand-red)] bg-[var(--brand-bg)] flex items-center justify-center text-2xl mb-4">
                                        💡
                                    </div>
                                    <h4 className="font-medium text-lg mb-2">1. 點子輸入</h4>
                                    <p className="text-xs text-[var(--brand-gray)]">你提供主題或關鍵字</p>
                                </div>

                                {/* Arrow */}
                                <div className="text-[var(--brand-line)] text-xl hidden md:block">→</div>

                                {/* Step 2 - Core */}
                                <div className="flex flex-col items-center w-full md:w-1/3 border border-[var(--brand-red)] p-6 relative">
                                    <span className="absolute -top-3 bg-[var(--brand-red)] text-white text-[10px] px-2 py-0.5 tracking-widest">
                                        DIGITAL TWIN
                                    </span>
                                    <div className="w-20 h-20 rounded-full bg-[var(--brand-red)] flex items-center justify-center text-3xl text-white mb-4">
                                        🧠
                                    </div>
                                    <h4 className="font-medium text-xl mb-3">2. 分身運作</h4>
                                    <ul className="text-left text-xs text-[var(--brand-gray)] space-y-2 w-full">
                                        <li className="flex items-center">
                                            <span className="text-[var(--brand-red)] mr-2">✓</span>
                                            模仿你的思考策略
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-[var(--brand-red)] mr-2">✓</span>
                                            使用你的語氣撰寫
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-[var(--brand-red)] mr-2">✓</span>
                                            保持你的品牌美感
                                        </li>
                                    </ul>
                                </div>

                                {/* Arrow */}
                                <div className="text-[var(--brand-line)] text-xl hidden md:block">→</div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center w-full md:w-1/4">
                                    <div className="w-16 h-16 rounded-full border-2 border-[var(--brand-red)] bg-[var(--brand-bg)] flex items-center justify-center text-2xl mb-4">
                                        📄
                                    </div>
                                    <h4 className="font-medium text-lg mb-2">3. 完美成品</h4>
                                    <p className="text-xs text-[var(--brand-gray)]">像你親手寫的深度文章</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution Cards */}
                    <div className="text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            隆重介紹：你的 24 小時 AI 數位分身
                        </h2>
                        <p className="max-w-2xl mx-auto text-[var(--brand-gray)] font-light">
                            我們把頂尖編輯團隊的工作流程，內化成一個「數位大腦」。<br />
                            這不是一個聊天機器人，而是你在網路上的完美分身。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: '1. 它繼承你的記憶', desc: '它會先讀完你的網站和資料，學會你的說話方式，才開始寫作。' },
                            { title: '2. 它有你的邏輯', desc: '每一篇文章都是根據真實的搜尋數據寫的，不是瞎掰的。' },
                            { title: '3. 它會自我進化', desc: '你改得越多，它就學得越像你。就像另一個你在成長。' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-[var(--brand-line)] p-10 transition-all duration-700 hover:border-[var(--brand-red)] hover:-translate-y-1"
                                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                            >
                                <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">{item.title}</h3>
                                <p className="text-sm text-[var(--brand-gray)] leading-loose">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Modules Section */}
            <section id="team" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            數位分身的構造
                        </h2>
                        <p className="text-[var(--brand-gray)]">這不是軟體功能，而是構成你「數位大腦」的五大模組。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🧠', title: '核心人格', subtitle: '分身的靈魂', desc: '系統最厲害的地方。當你修改文章時，它會默默在旁邊看，學習你的用詞習慣。你會發現它越用越像你。', isCore: true },
                            { icon: '♟️', title: '策略模組', subtitle: '幫你找題目', desc: '它會去網路上看競爭對手在寫什麼，然後告訴你：「這個題目很多人搜，但沒人寫得好，我們來寫！」' },
                            { icon: '✍️', title: '撰寫模組', subtitle: '幫你產出內容', desc: '拿到題目後，用「你的語氣」開始寫作。它不只會寫字，還懂得怎麼在文章中自然地介紹你的產品。' },
                            { icon: '🎨', title: '視覺模組', subtitle: '幫你配圖', desc: '看完文章後，自動幫你畫出適合的插圖或圖表。讓文章圖文並茂，讀者更願意看下去。' },
                            { icon: '📤', title: '發布模組', subtitle: '幫你處理雜事', desc: '幫你把文章排版好、設定好 SEO 關鍵字、上傳圖片，最後存成草稿等你確認。' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`bg-white border p-10 transition-all duration-700 hover:-translate-y-1 relative ${item.isCore ? 'border-[var(--brand-red)]' : 'border-[var(--brand-line)] hover:border-[var(--brand-red)]'
                                    }`}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                            >
                                {item.isCore && (
                                    <span className="absolute top-0 right-0 bg-[var(--brand-red)] text-white text-[10px] px-3 py-1">
                                        CORE
                                    </span>
                                )}
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-medium mb-2 text-[var(--brand-ink)]">{item.title}</h3>
                                <p className="text-sm text-[var(--brand-red)] mb-4">{item.subtitle}</p>
                                <p className="text-sm text-[var(--brand-gray)] leading-relaxed border-t border-[var(--brand-line)] pt-4">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            打造你的數位分身
                        </h2>
                        <p className="text-[var(--brand-gray)]">我們不賣軟體，我們幫你「找回時間」。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {/* Plan 1 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 flex flex-col">
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-gray)] uppercase border-b border-[var(--brand-line)] pb-2 block mb-4 font-sans">
                                    Do It Yourself
                                </span>
                                <h3 className="text-2xl font-medium mb-2">AI 內容部隊建置課</h3>
                                <p className="text-sm text-[var(--brand-gray)]">適合自由接案者、想學技術的行銷人</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">NT$ 39,800</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">一次性付費</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    完整 AI Agent 工作流教學
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    品牌規範書採集邏輯
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    WordPress 自動化串接
                                </li>
                            </ul>
                            <span className="block w-full text-center py-4 border border-[var(--brand-line)] text-[var(--brand-gray)] text-sm">
                                近期推出
                            </span>
                        </div>

                        {/* Plan 2 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 flex flex-col">
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-gray)] uppercase border-b border-[var(--brand-line)] pb-2 block mb-4 font-sans">
                                    Teaching & Transfer
                                </span>
                                <h3 className="text-2xl font-medium mb-2">企業 AI 轉型計畫</h3>
                                <p className="text-sm text-[var(--brand-gray)]">適合已有行銷人員，想透過 AI 賦能團隊</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">NT$ 120,000</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">一次性導入費 (含 3 個月輔導)</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>數位大腦建置</b>：建置工作我們來，完整交接給你</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>SOP 建立</b>：不只給工具，還建立標準化作業流程</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>團隊賦能</b>：教員工如何駕馭 AI，讓產能翻倍</span>
                                </li>
                            </ul>
                            <a
                                href="https://www.threads.com/@881freelancer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 border border-[var(--brand-red)] text-[var(--brand-red)] text-sm transition-all duration-700 hover:bg-[var(--brand-red)] hover:text-white"
                            >
                                透過 Threads 聯絡我
                            </a>
                        </div>

                        {/* Plan 3 - Recommended */}
                        <div className="bg-[#FFFEFA] border-2 border-[var(--brand-red)] p-10 flex flex-col relative shadow-xl">
                            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--brand-red)] text-white px-4 py-1 text-xs tracking-[0.2em]">
                                RECOMMENDED
                            </span>
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-red)] uppercase border-b border-[var(--brand-red)]/30 pb-2 block mb-4 font-sans">
                                    Consulting & Partner
                                </span>
                                <h3 className="text-2xl font-medium mb-2">虛擬總編輯</h3>
                                <p className="text-sm text-[var(--brand-gray)]">適合沒有行銷團隊，只需要「結果」的品牌</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">NT$ 45,000</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">/ 月 (簽約一年)</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>策略把關</b>：我們負責想題目，確保內容符合商業目標</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>成效負責</b>：我們盯著 AI 產出，確保品質與 SEO 排名</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    <span><b>風險轉移</b>：做不好我們負責，你專注本業</span>
                                </li>
                                <li className="flex items-start text-[var(--brand-red)] font-medium">
                                    <span className="mr-3">🎁</span>
                                    [BONUS] 全通路內容佈局 (FB/Threads)
                                </li>
                            </ul>
                            <div className="bg-[var(--brand-bg)] p-4 mb-6 text-xs text-[var(--brand-gray)] text-center border border-[var(--brand-line)]">
                                <strong>安心承諾：</strong>如果不滿意，隨時可以終止合約，我們退還當月費用。
                            </div>
                            <a
                                href="https://www.threads.com/@881freelancer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 bg-[var(--brand-red)] text-white text-sm transition-all duration-700 hover:bg-[#6B2A2A]"
                            >
                                透過 Threads 聯絡我
                            </a>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl text-center mb-8 font-light">為什麼這是個很划算的選擇？</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white border border-[var(--brand-line)]">
                                <thead>
                                    <tr className="bg-[var(--brand-bg)]">
                                        <th className="p-5 text-left border-b-2 border-[var(--brand-line)] text-[var(--brand-red)]">比較項目</th>
                                        <th className="p-5 text-left border-b-2 border-[var(--brand-line)] text-[var(--brand-red)]">傳統做法 (招聘真人團隊)</th>
                                        <th className="p-5 text-left border-b-2 border-[var(--brand-line)] text-[var(--brand-red)]">AI 數位分身系統</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-[var(--brand-gray)]">
                                    <tr>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong>配置</strong></td>
                                        <td className="p-5 border-b border-[var(--brand-line)]">1 位資深編輯 + 1 位寫手 + 1 位社群小編</td>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong className="text-[var(--brand-red)]">1 套全自動數位分身</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong>成本</strong></td>
                                        <td className="p-5 border-b border-[var(--brand-line)]">約 <strong>$1,500,000 / 年</strong></td>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong className="text-[var(--brand-red)]">僅需 1/10 的價格</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong>效率</strong></td>
                                        <td className="p-5 border-b border-[var(--brand-line)]">產出一篇長文需 3-5 天</td>
                                        <td className="p-5 border-b border-[var(--brand-line)]"><strong className="text-[var(--brand-red)]">產出一篇長文需 5 分鐘</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="p-5"><strong>品質</strong></td>
                                        <td className="p-5">品質不一，受情緒影響</td>
                                        <td className="p-5"><strong className="text-[var(--brand-red)]">品質穩定，越用越聰明</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center mt-6 text-lg font-light">
                            結論：用一個實習生的價格，擁有一個 24 小時工作的數位分身。
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white border-t border-[var(--brand-line)]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[var(--brand-bg)] p-12 md:p-20 border border-[var(--brand-line)] relative">
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
                                <h2 className="text-2xl font-light mb-8">關於我</h2>
                                <h3 className="text-xl text-[var(--brand-red)] font-light mb-8 leading-relaxed">
                                    我是好事發生數位的創辦人，<br />我也曾經跌倒過。
                                </h3>
                                <div className="space-y-6 text-[var(--brand-gray)] font-light leading-loose text-sm">
                                    <p>
                                        我是好事發生數位的創辦人。我不只是一個技術宅，我是連續創業家。
                                    </p>
                                    <p>
                                        開過三家公司，也曾失敗收場。所以我比誰都懂，老闆的時間有多珍貴，每一分行銷預算都不能浪費。
                                    </p>
                                    <p>
                                        2018 年，我站上 WordPress WordCamp 的講台。2023年，創辦過AI解決方案公司。現在，我專注於將最前沿的 AI Agent 技術導入企業。
                                    </p>
                                    <p className="text-[var(--brand-ink)] font-medium pt-4 border-t border-[var(--brand-line)] mt-8">
                                        我不是教你玩工具，我是幫你把工具變成現金流。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[var(--brand-bg)] border-t border-[var(--brand-line)]">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl text-center mb-12 font-light">常見問題</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Q: 這跟我自己用 ChatGPT 有什麼不一樣？',
                                a: 'A: 差多了。ChatGPT 就像一支筆，你要自己握著它寫；我們這套系統像是一個受過訓練的作家，你只要給他題目，他就能交稿。'
                            },
                            {
                                q: 'Q: 寫出來的東西會不會有版權問題？',
                                a: 'A: 不會。所有內容都是 AI 原創生成的，而且我們會幫你檢查有沒有重複。'
                            },
                            {
                                q: 'Q: 我需要懂電腦程式嗎？',
                                a: 'A: 完全不用。你就像在跟真人對話一樣，用中文下指令就可以了。'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 border border-[var(--brand-line)]">
                                <h4 className="font-medium mb-3 text-lg">{item.q}</h4>
                                <p className="text-sm text-[var(--brand-gray)] leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-white border-t border-[var(--brand-line)] text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl mb-8 font-light">準備好讓你的內容行銷自動運轉了嗎？</h2>
                    <Link
                        href="#pricing"
                        className="inline-block px-12 py-4 bg-[var(--brand-red)] text-white text-lg tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                    >
                        立即開始
                    </Link>
                    <p className="mt-12 text-xs text-[var(--brand-gray)]">
                        © 2024 Good Things Happen Digital. All rights reserved.
                    </p>
                </div>
            </section>
        </main>
    );
}
