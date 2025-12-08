import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'AI SEO 自動化行銷 | 好事發生數位',
    description: '複製一個「數位分身」，讓它 24 小時全自動幫你經營內容行銷。用不到真人團隊 1/10 的成本，獲得專業級的內容產出。',
};

export default function AISEOMarketingPage() {
    return (
        <main className="min-h-screen bg-[var(--brand-bg)]">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-5xl mx-auto text-left md:text-center">
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] tracking-[0.25em] text-[var(--brand-red)] border border-[var(--brand-line)] bg-white font-sans uppercase">
                        AI Digital Twin
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-ink)] mb-10 leading-relaxed md:leading-tight">
                        <span className="block mb-4">複製一個「數位分身」</span>
                        <span className="block text-[var(--brand-red)]">讓它 24 小時全自動<br className="md:hidden" />幫你經營內容</span>
                    </h1>
                    <p className="max-w-3xl md:mx-auto text-lg text-[var(--brand-gray)] mb-8 font-light leading-loose">
                        你心裡一定想過：「如果有另一個我就好了。」<br />
                        <strong className="text-[var(--brand-ink)]">這不再是想像。我們把你的「大腦」複製出來，讓它幫你寫作、經營品牌。</strong>
                    </p>
                    <p className="max-w-2xl md:mx-auto text-base text-[var(--brand-gray)] mb-16 font-light leading-relaxed border-l-2 border-[var(--brand-red)] pl-6 text-left">
                        這不是一般的 AI 工具，而是你的<strong className="text-[var(--brand-ink)]">全自動數位分身</strong>。<br />
                        它繼承了你的語氣、你的觀點，甚至比你更勤勞。
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-6">
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
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            為什麼你明知道要做內容行銷，<br className="md:hidden" />卻一直沒開始？
                        </h2>
                        <p className="text-[var(--brand-gray)]">
                            因為真正的問題不是「AI 能不能寫」，而是經營內容的<strong className="text-[var(--brand-ink)]">成本</strong>太高！
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                ),
                                title: '競爭對手正在超車',
                                desc: '你的競爭對手每個月產出 12-16 篇文章，佔據了 Google 前三頁。你一個月產出 1 篇，結果淹沒在第五頁。',
                                quote: '「6 個月後，你的流量比現在少 40%。」'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: '人力成本太高，效率差',
                                desc: '一個資深編輯年薪 80 萬起跳，加上勞健保成本超過 100 萬。還不一定有 SEO 專業，產出品質不穩定。',
                                quote: '「年度行銷預算的 1/3 都在養人。」'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
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

                    <div className="max-w-3xl mx-auto mt-20 text-center">
                        <svg className="w-8 h-8 text-[var(--brand-red)] mx-auto mb-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                        <h4 className="text-xl md:text-2xl font-light text-[var(--brand-ink)] mb-8 leading-relaxed">
                            試著問自己：<br />
                            「如果你什麼都不做，繼續用現在的方式產內容，一年後你的網站會在哪裡？」
                        </h4>
                        <p className="text-[var(--brand-gray)] font-light">
                            <strong className="text-[var(--brand-ink)] font-normal">如果你的競爭對手開始用 AI 自動化，你覺得你還能撐多久？</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    {/* Workflow */}
                    <div className="text-left md:text-center mb-24">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Workflow
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            我們如何複製「你」？
                        </h2>
                        <p className="text-[var(--brand-gray)] mb-12">透明、標準化的數位分身建置流程</p>

                        {/* Flowchart */}
                        <div className="max-w-5xl mx-auto bg-white border border-[var(--brand-line)] p-12">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-[var(--brand-line)] -z-0" />

                                {/* Step 1 */}
                                <div className="flex flex-col items-center w-full md:w-1/4 relative z-10 bg-white">
                                    <div className="w-20 h-20 rounded-full border border-[var(--brand-line)] bg-white flex items-center justify-center mb-6 shadow-sm">
                                        <svg className="w-8 h-8 text-[var(--brand-ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-medium text-lg mb-2">1. 點子輸入</h4>
                                    <p className="text-xs text-[var(--brand-gray)]">你提供主題或關鍵字</p>
                                </div>

                                {/* Step 2 - Core */}
                                <div className="flex flex-col items-center w-full md:w-1/3 relative z-10 bg-white">
                                    <div className="w-20 h-20 rounded-full bg-[var(--brand-ink)] flex items-center justify-center mb-6 shadow-md ring-4 ring-[var(--brand-bg)]">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-medium text-xl mb-3 text-[var(--brand-ink)]">2. 分身運作</h4>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <span className="text-[10px] uppercase tracking-widest text-[var(--brand-red)] border border-[var(--brand-red)] px-2 py-0.5 rounded-full mx-auto">Digital Twin</span>
                                        <p className="text-xs text-[var(--brand-gray)] mt-1">模仿思考 • 語氣 • 美感</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center w-full md:w-1/4 relative z-10 bg-white">
                                    <div className="w-20 h-20 rounded-full border border-[var(--brand-line)] bg-white flex items-center justify-center mb-6 shadow-sm">
                                        <svg className="w-8 h-8 text-[var(--brand-ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-medium text-lg mb-2">3. 完美成品</h4>
                                    <p className="text-xs text-[var(--brand-gray)]">像你親手寫的深度文章</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution Cards */}
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            隆重介紹：<br className="md:hidden" />你的 24 小時 AI 數位分身
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-[var(--brand-gray)] font-light">
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
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-24">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
                            數位分身的構造
                        </h2>
                        <p className="text-[var(--brand-gray)]">這不是軟體功能，而是構成你「數位大腦」的五大模組。</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* 1. Core Module - Left Side */}
                        <div className="lg:col-span-5 flex flex-col">
                            <div className="h-full bg-white border border-[var(--brand-red)] p-10 md:p-14 relative flex flex-col justify-center overflow-hidden group hover:shadow-xl transition-shadow duration-700">
                                <span className="absolute top-0 right-0 bg-[var(--brand-red)] text-white text-[10px] px-4 py-1.5 tracking-widest uppercase">
                                    System Core
                                </span>
                                <div className="relative z-10 mb-8">
                                    <div className="w-20 h-20 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-medium text-[var(--brand-ink)] mb-3">
                                        核心人格
                                    </h3>
                                    <p className="text-[var(--brand-red)] uppercase tracking-widest text-xs mb-6">The Soul</p>
                                    <p className="text-[var(--brand-gray)] leading-loose text-base font-light">
                                        這是系統最厲害的地方。它不僅是寫作工具，更是一個會觀察的學習者。<br /><br />
                                        當你修改文章時，它會默默在旁邊紀錄，學習你的用詞習慣、語氣起伏，甚至你的幽默感。你會發現每過一個月，它就越像你。
                                    </p>
                                </div>
                                {/* Background Decorative Circle */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--brand-red)]/5 rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
                            </div>
                        </div>

                        {/* 2. Functional Modules - Right Side Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                {/* Strategy */}
                                <div className="bg-white border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                                    <div className="text-[var(--brand-ink)] mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">策略模組</h4>
                                    <p className="text-xs text-[var(--brand-red)] mb-3 uppercase tracking-wider">Strategy</p>
                                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                        它會掃描網路，分析競爭對手缺漏的內容，主動建議：「這個題目很多人搜，但沒人寫得好，我們來寫！」
                                    </p>
                                </div>

                                {/* Writing */}
                                <div className="bg-white border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                                    <div className="text-[var(--brand-ink)] mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">撰寫模組</h4>
                                    <p className="text-xs text-[var(--brand-red)] mb-3 uppercase tracking-wider">Writing</p>
                                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                        拿到題目後，用「你的語氣」開始寫作。它不只會寫字，還懂得怎麼在文章中自然地置入你的產品優勢。
                                    </p>
                                </div>

                                {/* Visual */}
                                <div className="bg-white border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                                    <div className="text-[var(--brand-ink)] mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">視覺模組</h4>
                                    <p className="text-xs text-[var(--brand-red)] mb-3 uppercase tracking-wider">Visual</p>
                                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                        別擔心文章全是字。它會根據內容，自動生成風格一致的插圖或圖表，讓讀者更願意看下去。
                                    </p>
                                </div>

                                {/* Publishing */}
                                <div className="bg-white border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                                    <div className="text-[var(--brand-ink)] mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">發布模組</h4>
                                    <p className="text-xs text-[var(--brand-red)] mb-3 uppercase tracking-wider">Publishing</p>
                                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                        處理最繁瑣的雜事：排版、設定 SEO 關鍵字、上傳圖片，最後存成草稿。你只要喝杯咖啡，點個確認就好。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6 leading-relaxed md:leading-normal">
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
                                <span className="text-3xl font-light text-[var(--brand-ink)]">NT$ 50,000</span>
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
                    <h2 className="text-2xl text-left md:text-center mb-12 font-light">常見問題</h2>
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
            <section className="py-24 bg-white border-t border-[var(--brand-line)] text-left md:text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl mb-8 font-light">準備好讓你的內容行銷自動運轉了嗎？</h2>
                    <Link
                        href="#pricing"
                        className="inline-block px-12 py-4 bg-[var(--brand-red)] text-white text-lg tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                    >
                        立即開始
                    </Link>

                </div>
            </section>
        </main>
    );
}
