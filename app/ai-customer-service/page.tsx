import Link from 'next/link';

export const metadata = {
    title: 'AI 客服解決方案 | 好事發生數位',
    description: '讓 AI 成為你的第一線客服。精簡人力成本、提升回應效率、24 小時不間斷服務。透過 n8n 自動化工作流，打造專屬的智能客服系統。',
};

export default function AICustomerServicePage() {
    return (
        <main className="min-h-screen bg-[var(--brand-bg)]">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 lg:px-8">
                <div className="max-w-[1600px] mx-auto text-left md:text-center">
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] tracking-[0.25em] text-[var(--brand-red)] border border-[var(--brand-line)] bg-white font-sans uppercase">
                        AI Customer Service
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--brand-ink)] mb-10 leading-tight">
                        <span className="block mb-4">讓 AI 成為你的</span>
                        <span className="block text-[var(--brand-red)]">第一線客服</span>
                    </h1>
                    <p className="max-w-3xl md:mx-auto text-lg text-[var(--brand-gray)] mb-8 font-light leading-loose">
                        精簡人力成本、提升回應效率、24 小時不間斷服務。<br />
                        <strong className="text-[var(--brand-ink)]">透過 n8n 自動化工作流，打造專屬的智能客服系統。</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-6 mt-12">
                        <Link
                            href="#pricing"
                            className="inline-block px-10 py-4 bg-[var(--brand-red)] text-white text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            預約 AI 客服診斷
                        </Link>
                        <Link
                            href="#process"
                            className="inline-block px-10 py-4 border border-[var(--brand-red)] text-[var(--brand-red)] text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[var(--brand-red)] hover:text-white"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            了解導入流程
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section id="problem" className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            你的客服團隊<br className="md:hidden" />是不是正在面臨這些問題？
                        </h2>
                        <p className="text-[var(--brand-gray)]">
                            如果以下情境讓你點頭如搗蒜，那麼是時候考慮<strong className="text-[var(--brand-ink)]">讓 AI 分擔壓力</strong>了。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pain Point 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--brand-line)] rounded-full">
                                <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">人力成本失控</h3>
                            <p className="text-[var(--brand-gray)] font-light text-sm leading-relaxed mb-4">
                                人難請、難留、難管理。薪資加上勞健保、教育訓練，一個客服年成本破百萬。人員一離職，服務品質就崩盤。
                            </p>
                            <p className="text-xs text-[var(--brand-red)] italic">「光是招聘成本，就佔掉預算的 20%。」</p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--brand-line)] rounded-full">
                                <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">客服量能超載</h3>
                            <p className="text-[var(--brand-gray)] font-light text-sm leading-relaxed mb-4">
                                尖峰時段根本接不完，80% 的時間都在回答重複問題。真正需要處理的複雜案件反而被延誤。
                            </p>
                            <p className="text-xs text-[var(--brand-red)] italic">「每天都在滅火，根本沒時間優化流程。」</p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--brand-line)] rounded-full">
                                <svg className="w-8 h-8 text-[var(--brand-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">服務時間受限</h3>
                            <p className="text-[var(--brand-gray)] font-light text-sm leading-relaxed mb-4">
                                下班後沒人顧、國際客戶有時差、節假日客服真空。客戶等不到回覆，就默默流失了。
                            </p>
                            <p className="text-xs text-[var(--brand-red)] italic">「凌晨的訊息，隔天才回覆就太晚了。」</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto mt-20 text-center">
                        <svg className="w-8 h-8 text-[var(--brand-red)] mx-auto mb-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                        <h4 className="text-xl md:text-2xl font-light text-[var(--brand-ink)] mb-8 leading-relaxed">
                            試著問自己：<br />
                            「如果客服量明年再成長 50%，你的團隊撐得住嗎？」
                        </h4>
                        <p className="text-[var(--brand-gray)] font-light">
                            或許你會發現，<strong className="text-[var(--brand-ink)] font-normal">你不缺人，你缺的是一套能自動運轉的系統。</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            AI 智能客服 + <br className="md:hidden" />n8n 自動化工作流
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-[var(--brand-gray)] font-light">
                            我們不只給你一個聊天機器人，而是一套<strong className="text-[var(--brand-ink)]">能理解、能行動、能學習</strong>的客服自動化系統。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Solution 1 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 transition-all duration-700 hover:border-[var(--brand-red)] hover:-translate-y-1"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                            <div className="text-[var(--brand-ink)] mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">智能問答</h3>
                            <p className="text-sm text-[var(--brand-gray)] leading-loose font-light">
                                AI 理解客戶問題的語意，不是關鍵字比對。從你的知識庫中檢索最佳答案，回覆精準且口吻一致。
                            </p>
                        </div>

                        {/* Solution 2 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 transition-all duration-700 hover:border-[var(--brand-red)] hover:-translate-y-1"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                            <div className="text-[var(--brand-ink)] mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">工作流自動化</h3>
                            <p className="text-sm text-[var(--brand-gray)] leading-loose font-light">
                                透過 n8n 串接你的 CRM、訂單系統、知識庫。AI 不只會回答，還能查訂單、建立工單、發送通知。
                            </p>
                        </div>

                        {/* Solution 3 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 transition-all duration-700 hover:border-[var(--brand-red)] hover:-translate-y-1"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                            <div className="text-[var(--brand-ink)] mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl mb-4 font-medium text-[var(--brand-ink)]">人機協作</h3>
                            <p className="text-sm text-[var(--brand-gray)] leading-loose font-light">
                                簡單問題 AI 搞定，複雜問題自動分類、轉接真人客服。兩者無縫銜接，客戶感受不到斷點。
                            </p>
                        </div>
                    </div>

                    {/* Demo UI Section */}
                    <div className="mt-16">
                        <div className="text-left md:text-center mb-8">
                            <p className="text-xs text-[var(--brand-gray)] uppercase tracking-widest mb-2">Demo Preview</p>
                            <h3 className="text-xl font-light text-[var(--brand-ink)]">統一後台，一目瞭然</h3>
                        </div>

                        {/* Chat UI Demo */}
                        {/* Chat UI Demo */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-[var(--brand-line)]">
                            {/* Top Bar */}
                            <div className="bg-[var(--brand-bg)] px-4 py-3 flex items-center justify-between border-b border-[var(--brand-line)]">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#ce534d]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d6a12b]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#23a537]"></div>
                                    </div>
                                    <span className="text-[var(--brand-gray)] text-xs ml-2 hidden sm:inline font-sans tracking-wide">AI 客服管理後台</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-[var(--brand-red)] bg-[#FDF2F2] border border-[var(--brand-red)]/20 px-2 py-0.5 rounded-full">● 系統運作中</span>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex h-[600px] md:h-[700px] bg-white">
                                {/* Sidebar - Hidden on Mobile */}
                                <div className="hidden lg:flex flex-col w-72 bg-[var(--brand-bg)] border-r border-[var(--brand-line)]">
                                    {/* Search */}
                                    <div className="p-3 border-b border-[var(--brand-line)]">
                                        <div className="flex items-center gap-2 bg-white rounded border border-[var(--brand-line)] px-3 py-2">
                                            <svg className="w-4 h-4 text-[var(--brand-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <span className="text-[var(--brand-gray)] text-xs">搜尋對話...</span>
                                        </div>
                                    </div>

                                    {/* Tabs */}
                                    <div className="flex border-b border-[var(--brand-line)] text-xs font-sans">
                                        <button className="flex-1 py-3 text-[var(--brand-red)] border-b-2 border-[var(--brand-red)] font-medium bg-white">待處理 3</button>
                                        <button className="flex-1 py-3 text-[var(--brand-gray)] hover:bg-white transition-colors">已指派 2</button>
                                        <button className="flex-1 py-3 text-[var(--brand-gray)] hover:bg-white transition-colors">全部 8</button>
                                    </div>

                                    {/* Conversation List */}
                                    <div className="flex-1 overflow-y-auto">
                                        {/* Active Conversation */}
                                        <div className="p-4 bg-white border-l border-[var(--brand-red)]/60 border-b border-[var(--brand-line)]">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[var(--brand-ink)] flex items-center justify-center text-white text-sm font-medium">林</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[var(--brand-ink)] text-sm font-medium">林小姐</span>
                                                        <span className="text-[var(--brand-gray)] text-[10px]">剛剛</span>
                                                    </div>
                                                    <p className="text-[var(--brand-ink)] text-xs truncate mb-2">我想查詢訂單 #TW20241208</p>
                                                    <div className="flex gap-1">
                                                        <span className="text-[10px] bg-[#FDF2F2] text-[var(--brand-red)] border border-[#FDF2F2] px-1.5 py-0.5 rounded">訂單查詢</span>
                                                        <span className="text-[10px] bg-[#00C300]/10 text-[#00C300] border border-[#00C300]/20 px-1.5 py-0.5 rounded">LINE</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Other Conversations */}
                                        <div className="p-4 hover:bg-white transition-colors cursor-pointer border-b border-[var(--brand-line)] group">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[var(--brand-gray)] text-sm font-medium border border-[var(--brand-line)]">王</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[var(--brand-ink)] group-hover:text-[var(--brand-red)] text-sm transition-colors">王先生</span>
                                                        <span className="text-[var(--brand-gray)] text-[10px]">5 分鐘前</span>
                                                    </div>
                                                    <p className="text-[var(--brand-gray)] text-xs truncate mb-2">請問可以改預約時間嗎？</p>
                                                    <span className="text-[10px] bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 px-1.5 py-0.5 rounded inline-block">FB</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 hover:bg-white transition-colors cursor-pointer border-b border-[var(--brand-line)] group">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[var(--brand-gray)] text-sm font-medium border border-[var(--brand-line)]">陳</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[var(--brand-ink)] group-hover:text-[var(--brand-red)] text-sm transition-colors">陳小明</span>
                                                        <span className="text-[var(--brand-gray)] text-[10px]">12 分鐘前</span>
                                                    </div>
                                                    <p className="text-[var(--brand-gray)] text-xs truncate mb-2">產品有保固嗎？</p>
                                                    <span className="text-[10px] bg-[#00C300]/10 text-[#00C300] border border-[#00C300]/20 px-1.5 py-0.5 rounded inline-block">網站</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="flex-1 flex flex-col bg-[#FAFAFA]">
                                    {/* Chat Header */}
                                    <div className="px-4 py-3 border-b border-[var(--brand-line)] flex items-center justify-between bg-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--brand-ink)] flex items-center justify-center text-white text-sm font-medium">林</div>
                                            <div>
                                                <h4 className="text-[var(--brand-ink)] text-sm font-medium">林小姐</h4>
                                                <p className="text-[var(--brand-gray)] text-xs">來自 LINE • 正在輸入...</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-[var(--brand-bg)] rounded text-[var(--brand-gray)] transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                            </button>
                                            <button className="px-3 py-1.5 bg-[#00C300]/10 text-[#00C300] border border-[#00C300]/20 text-xs rounded hover:bg-[#00C300]/20 transition-colors">
                                                已解決
                                            </button>
                                        </div>
                                    </div>

                                    {/* Messages */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#FAFAFA]">
                                        {/* Customer Message */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[var(--brand-ink)] flex items-center justify-center text-white text-xs flex-shrink-0 mt-2">林</div>
                                            <div>
                                                <div className="bg-white border border-[var(--brand-line)] rounded-lg rounded-tl-none px-4 py-3 max-w-[280px] shadow-sm">
                                                    <p className="text-[var(--brand-ink)] text-sm">你好，我想查詢訂單 #TW20241208 的配送狀態</p>
                                                </div>
                                                <span className="text-[var(--brand-gray)] text-[10px] mt-1 block">下午 2:32</span>
                                            </div>
                                        </div>

                                        {/* AI Response */}
                                        <div className="flex gap-3 justify-end">
                                            <div>
                                                <div className="bg-[var(--brand-ink)] rounded-lg rounded-tr-none px-4 py-3 max-w-[320px] shadow-sm">
                                                    <p className="text-white text-sm">您好林小姐！我已經幫您查詢到訂單狀態：</p>
                                                    <div className="mt-3 bg-white/10 rounded p-3 text-xs border border-white/10">
                                                        <p className="text-white/90 mb-1">📦 訂單編號：#TW20241208</p>
                                                        <p className="text-white/90 mb-1">🚚 狀態：配送中</p>
                                                        <p className="text-white/90">📍 預計到達：今天下午 5:00 前</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-end gap-1 mt-1">
                                                    <span className="text-[10px] bg-[var(--brand-red)]/5 text-[var(--brand-red)] px-1.5 py-0.5 rounded border border-[var(--brand-red)]/10">AI 自動回覆</span>
                                                    <span className="text-[var(--brand-gray)] text-[10px]">下午 2:32</span>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-[var(--brand-red)] flex items-center justify-center flex-shrink-0 mt-2">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Customer Follow-up */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[var(--brand-ink)] flex items-center justify-center text-white text-xs flex-shrink-0 mt-2">林</div>
                                            <div>
                                                <div className="bg-white border border-[var(--brand-line)] rounded-lg rounded-tl-none px-4 py-3 max-w-[280px] shadow-sm">
                                                    <p className="text-[var(--brand-ink)] text-sm">太好了！可以改成寄到公司嗎？</p>
                                                </div>
                                                <span className="text-[var(--brand-gray)] text-[10px] mt-1 block">下午 2:33</span>
                                            </div>
                                        </div>

                                        {/* System Note */}
                                        <div className="flex justify-center">
                                            <span className="text-[10px] text-[var(--brand-gray)] bg-[var(--brand-bg)] border border-[var(--brand-line)] px-3 py-1 rounded-full">
                                                🔄 已自動建立工單 #CS-1208，轉派給物流組
                                            </span>
                                        </div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-4 border-t border-[var(--brand-line)] bg-white">
                                        <div className="flex items-center gap-2 bg-[var(--brand-bg)] rounded-lg p-2 border border-[var(--brand-line)]">
                                            <input
                                                type="text"
                                                placeholder="輸入訊息... (/ 開頭可選擇快捷回覆)"
                                                className="flex-1 bg-transparent text-[var(--brand-ink)] text-sm outline-none placeholder:text-[var(--brand-gray)] px-2"
                                                disabled
                                            />
                                            <button className="px-3 py-1.5 bg-[var(--brand-red)] text-white text-xs rounded flex items-center gap-1 hover:bg-[#a94442] transition-colors">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                                </svg>
                                                AI 協助
                                            </button>
                                            <button className="px-4 py-1.5 bg-[var(--brand-ink)] text-white text-xs rounded hover:opacity-90 transition-opacity">
                                                發送
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel - Hidden on Mobile & Tablet */}
                                <div className="hidden xl:flex flex-col w-72 bg-[var(--brand-bg)] border-l border-[var(--brand-line)] font-sans">
                                    {/* Customer Info Header */}
                                    <div className="p-6 border-b border-[var(--brand-line)] text-center bg-white">
                                        <div className="w-16 h-16 rounded-full bg-[var(--brand-ink)] flex items-center justify-center text-white text-xl font-medium mx-auto mb-3 shadow-md">林</div>
                                        <h4 className="text-[var(--brand-ink)] font-medium text-lg">林小姐</h4>
                                        <p className="text-[var(--brand-gray)] text-xs mt-1">LINE: @linmei_0808</p>
                                    </div>

                                    {/* Customer Details */}
                                    <div className="p-6 space-y-5 text-sm flex-1 overflow-y-auto">
                                        <div>
                                            <p className="text-[var(--brand-gray)] text-[10px] uppercase tracking-wider mb-1">Email</p>
                                            <p className="text-[var(--brand-ink)]">lin.mei@example.com</p>
                                        </div>
                                        <div>
                                            <p className="text-[var(--brand-gray)] text-[10px] uppercase tracking-wider mb-1">Phone</p>
                                            <p className="text-[var(--brand-ink)]">0912-345-678</p>
                                        </div>
                                        <div>
                                            <p className="text-[var(--brand-gray)] text-[10px] uppercase tracking-wider mb-1">Tags</p>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                <span className="text-[10px] bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 px-2 py-0.5 rounded">VIP</span>
                                                <span className="text-[10px] bg-purple-500/10 text-purple-600 border border-purple-500/20 px-2 py-0.5 rounded">回購客</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[var(--brand-gray)] text-[10px] uppercase tracking-wider mb-1">History</p>
                                            <p className="text-[var(--brand-ink)]">12 筆 (總消費 NT$45,800)</p>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="p-4 border-t border-[var(--brand-line)] bg-white mt-auto">
                                        <p className="text-[var(--brand-gray)] text-[10px] uppercase tracking-wider mb-3">Quick Actions</p>
                                        <div className="space-y-2">
                                            <button className="w-full text-left px-3 py-2 bg-[var(--brand-bg)] text-[var(--brand-ink)] text-xs rounded hover:bg-[#eaccce]/30 transition-colors flex items-center gap-2 border border-[var(--brand-line)]">
                                                <svg className="w-4 h-4 text-[var(--brand-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                                查看所有訂單
                                            </button>
                                            <button className="w-full text-left px-3 py-2 bg-[var(--brand-bg)] text-[var(--brand-ink)] text-xs rounded hover:bg-[#eaccce]/30 transition-colors flex items-center gap-2 border border-[var(--brand-line)]">
                                                <svg className="w-4 h-4 text-[var(--brand-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />
                                                </svg>
                                                建立工單
                                            </button>
                                            <button className="w-full text-left px-3 py-2 bg-[var(--brand-red)] text-white text-xs rounded hover:bg-[#a94442] transition-colors flex items-center gap-2 shadow-sm">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                轉接真人客服
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-xs text-[var(--brand-gray)] mt-4">
                            * 以上為系統模擬畫面，實際介面會根據您的需求客製化
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            我們會幫你建置什麼？
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-[var(--brand-gray)] font-light">
                            不只是聊天機器人，而是完整的客服自動化系統。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Capability 1 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">多平台整合</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                LINE、FB Messenger、網站 Chat 一次串接，統一後台管理。
                            </p>
                        </div>

                        {/* Capability 2 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">知識庫問答</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                根據你的 FAQ、產品資料建立專屬 AI 知識庫，持續學習更新。
                            </p>
                        </div>

                        {/* Capability 3 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">訂單查詢</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                客戶輸入訂單編號，AI 自動查詢並回覆物流狀態，不需人工介入。
                            </p>
                        </div>

                        {/* Capability 4 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">預約/報名</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                自動化處理預約流程，同步寫入 Google 日曆或 CRM 系統。
                            </p>
                        </div>

                        {/* Capability 5 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">客訴分類</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                偵測負面情緒，自動分類優先等級，派工給對應負責人處理。
                            </p>
                        </div>

                        {/* Capability 6 */}
                        <div className="border border-[var(--brand-line)] p-8 hover:border-[var(--brand-ink)] transition-colors duration-500">
                            <div className="text-[var(--brand-red)] mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-[var(--brand-ink)] mb-2">數據報表</h4>
                            <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                                追蹤客服量、解決率、常見問題統計，讓你用數據持續優化服務。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-24 bg-[var(--brand-bg)]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            從診斷到上線，<br className="md:hidden" />我們一步步陪你走
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-[var(--brand-gray)] font-light">
                            兩階段導入流程，確保每一步都清楚透明。
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Phase 1 */}
                        <div className="bg-white border border-[var(--brand-line)] p-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-12 rounded-full bg-[var(--brand-ink)] text-white flex items-center justify-center text-lg font-light">1</span>
                                <div>
                                    <h3 className="text-2xl font-medium text-[var(--brand-ink)]">顧問診斷</h3>
                                    <p className="text-xs text-[var(--brand-red)] uppercase tracking-widest">Consulting Phase</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">01</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">透過 Threads 聯絡我們</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">簡單聊聊你的客服現況與期望目標</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">02</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">支付顧問費用</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">確認款項後，預約深度策略會議</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">03</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">取得專屬建議書</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">包含：問題診斷、解決方案、技術選型、預估效益</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-white border border-[var(--brand-red)] p-10 relative">
                            <span className="absolute top-0 right-0 bg-[var(--brand-red)] text-white text-[10px] px-4 py-1.5 tracking-widest uppercase">
                                n8n Automation
                            </span>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-12 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center text-lg font-light">2</span>
                                <div>
                                    <h3 className="text-2xl font-medium text-[var(--brand-ink)]">建置與維護</h3>
                                    <p className="text-xs text-[var(--brand-red)] uppercase tracking-widest">Implementation Phase</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">01</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">流程設計</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">根據建議書，設計客製化的 n8n 工作流</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">02</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">系統建置</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">開發、測試、串接你現有的平台 (LINE / FB / 網站)</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--brand-red)] font-medium">03</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--brand-ink)] mb-1">上線 + 維護</h4>
                                        <p className="text-sm text-[var(--brand-gray)] font-light">正式上線後，持續監控、優化、更新知識庫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="text-left md:text-center mb-16">
                        <span className="text-[var(--brand-red)] text-xs tracking-[0.2em] uppercase mb-4 block font-sans">
                            Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[var(--brand-ink)] mb-6">
                            透明的階段式收費
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-[var(--brand-gray)] font-light">
                            先診斷、再建置、持續維護。每一筆費用都清楚明瞭。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Pricing 1 - Consulting */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 flex flex-col">
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-gray)] uppercase border-b border-[var(--brand-line)] pb-2 block mb-4 font-sans">
                                    Phase 1
                                </span>
                                <h3 className="text-2xl font-medium mb-2">顧問諮詢費</h3>
                                <p className="text-sm text-[var(--brand-gray)]">先了解問題，再提出方案</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">NT$ 10,000</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">一次性付費</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    3 小時深度策略會議
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    AI 客服建議書
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">●</span>
                                    技術選型建議
                                </li>
                            </ul>

                        </div>

                        {/* Pricing 2 - Build */}
                        <div className="bg-white border border-[var(--brand-line)] p-10 flex flex-col">
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-gray)] uppercase border-b border-[var(--brand-line)] pb-2 block mb-4 font-sans">
                                    Phase 2
                                </span>
                                <h3 className="text-2xl font-medium mb-2">系統建置費</h3>
                                <p className="text-sm text-[var(--brand-gray)]">n8n 工作流設計與開發</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">客製化報價</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">一次性付費</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    客製化 n8n 工作流設計
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    系統開發與測試
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    平台串接上線
                                </li>
                            </ul>

                        </div>

                        {/* Pricing 3 - Maintain */}
                        <div className="bg-[#FFFEFA] border-2 border-[var(--brand-red)] p-10 flex flex-col relative shadow-lg">
                            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--brand-red)] text-white px-4 py-1 text-xs tracking-[0.2em]">
                                RECOMMENDED
                            </span>
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] text-[var(--brand-red)] uppercase border-b border-[var(--brand-red)]/30 pb-2 block mb-4 font-sans">
                                    Ongoing
                                </span>
                                <h3 className="text-2xl font-medium mb-2">月維護費</h3>
                                <p className="text-sm text-[var(--brand-gray)]">持續優化，讓系統越來越聰明</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-light text-[var(--brand-ink)]">客製化報價</span>
                                <span className="text-xs text-[var(--brand-gray)] block mt-2">/ 月</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm text-[var(--brand-gray)]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    系統監控與 bug 修復
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    流程優化調整
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[var(--brand-red)]">✓</span>
                                    知識庫更新維護
                                </li>
                                <li className="flex items-start text-[var(--brand-red)] font-medium">
                                    <span className="mr-3">🎁</span>
                                    月度數據報表分析
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* Unified CTA */}
                    <div className="max-w-md mx-auto mt-16 px-6">
                        <a
                            href="https://www.threads.com/@881freelancer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-[var(--brand-red)] text-white text-sm tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            透過 Threads 聯絡我
                        </a>
                        <p className="text-center text-xs text-[var(--brand-gray)] mt-4">
                            需要更詳細的諮詢？歡迎直接私訊討論
                        </p>
                    </div>

                    <p className="text-center mt-8 text-sm text-[var(--brand-gray)]">
                        * 顧問費用將於選擇建置方案後，全額折抵建置費用。
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[var(--brand-bg)] border-t border-[var(--brand-line)]">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl text-left md:text-center mb-12 font-light">常見問題</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Q: 這跟一般的聊天機器人有什麼不同？',
                                a: 'A: 一般 chatbot 只能照劇本走關鍵字比對，客戶問法稍微不同就掛掉。我們的方案能理解語意、串接後台系統、真正解決問題，而不只是回答問題。'
                            },
                            {
                                q: 'Q: 需要準備什麼資料？',
                                a: 'A: 你的 FAQ、產品資料、過往客服對話紀錄 (如有)。我們會協助你整理成 AI 可以學習的格式。'
                            },
                            {
                                q: 'Q: 導入需要多久時間？',
                                a: 'A: 視複雜度而定。簡單的問答系統約 1 個月 (含前期諮詢)，平均專案費用約 6 萬左右，實際視複雜度而定。若需串接訂單系統等複雜功能，則約需 2-3 個月不等。'
                            },
                            {
                                q: 'Q: 如果要更換平台怎麼辦？',
                                a: 'A: n8n 架構彈性高，新增或更換平台 (例如從 LINE 換到 WhatsApp) 只需調整節點設定，不用重寫整套系統。'
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
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl mb-8 font-light">準備好讓 AI 分擔你的客服壓力了嗎？</h2>
                    <Link
                        href="#pricing"
                        className="inline-block px-12 py-4 bg-[var(--brand-red)] text-white text-lg tracking-[0.1em] transition-all duration-700 hover:bg-[#6B2A2A]"
                    >
                        預約免費諮詢
                    </Link>
                </div>
            </section>
        </main >
    );
}
