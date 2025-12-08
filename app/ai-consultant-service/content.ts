
export interface AIContent {
    hero: {
        tagline: string;
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    painPoints: {
        title: string;
        subtitle: string;
        items: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
    solution: {
        title: string;
        subtitle: string;
        features: Array<{
            title: string;
            description: string;
        }>;
    };
    process: {
        title: string;
        steps: Array<{
            number: string;
            title: string;
            description: string;
        }>;
    };
    valueDiscovery: {
        sectionTitle: string;
        phases: Array<{
            number: string;
            title: string;
            subtitle: string;
            mainQuestion: string;
            listenFor: Array<string>;
            redFlags: Array<string>;
            keyInsight: string;
        }>;
    };
    pricing: {
        title: string;
        steps: Array<{
            number: string;
            title: string;
            description: string;
            detail?: string;
        }>;
        proposalIncludes: Array<string>;
        note: string;
    };
    faq: {
        title: string;
        items: Array<{
            question: string;
            answer: string;
        }>;
    };
}

export const content: AIContent = {
    hero: {
        tagline: "AI Integration for Business",
        title: "AI導入企業顧問服務",
        subtitle: "我們協助您無痛導入AI服務",
        ctaPrimary: "預約 AI 導入診斷",
        ctaSecondary: "了解導入流程",
    },
    painPoints: {
        title: "為什麼企業要導入 AI 那麼難？",
        subtitle: "如果你發現公司陷入有以下症頭，那麼問題不在於員工，而是沒有被標準化或是被有效率的記下來，並且能讓同仁們快速的取用學習。",
        items: [
            {
                icon: "UserFocus",
                title: "症狀 1：主事者是唯一的瓶頸",
                description: "每一個決策都要等您拍板，沒有人敢貿然調整。結果就是公司少了主事者就動不了，您成了最大的風險來源。",
            },
            {
                icon: "Shuffle",
                title: "症狀 2：無效的訓練輪迴",
                description: "請人、訓練、離職、崩潰，不斷循環。您花大量時間重複教導基礎知識，卻沒有替團隊準備一套可被遵循執行的系統。",
            },
            {
                icon: "Search",
                title: "症狀 3：隱性知識的斷層",
                description: "多年經驗讓 SOP 都鎖在您的腦袋或資深員工的直覺裡。這些肌肉記憶拿不出來，導致品質永遠無法被標準化複製。",
            },
        ],
    },
    solution: {
        title: "我們是怎麼協助企業成功導入 AI？",
        subtitle: "我們的目標不是賣給你更多軟體，而是給你能夠使用的解決方案，也就是「企業知識資產化」。把你的直覺 (Gut Feeling) 轉換為可以被同事重複使用的 AI 知識庫。",
        features: [
            {
                title: "Extraction (知識萃取)",
                description: "深度訪談創辦人。將那些「只可意會不可言傳」的隱性知識，具象化為清晰的邏輯路徑 (Logic Path)。",
            },
            {
                title: "Codification (知識編碼)",
                description: "運用 Google Antigravity 或 RAG 技術，將萃取出的邏輯寫入數位大腦。建立一個永遠不會離職、品質永遠一致的資深員工。",
            },
            {
                title: "Integration (工作流整合)",
                description: "將數位大腦無縫嵌入團隊的 Slack、Email 或 CRM。員工獲得即時賦能，不需要學習新工具，戰力卻提升十倍。",
            },
        ],
    },
    process: {
        title: "AI導入企業的三個關鍵階段",
        steps: [
            {
                number: "01",
                title: "價值診斷 (The Audit)",
                description: "我們不賣產品，我們先診斷。透過深度策略會議，找出您生意中「卡住」的環節，以及自動化後能釋放的最大槓桿點。",
            },
            {
                number: "02",
                title: "架構設計 (The Blueprint)",
                description: "設計您的數位資產架構。決定哪些知識存本地 (Local)、哪些走雲端 (Cloud)，並規劃人類員工與數位員工的協作模式。",
            },
            {
                number: "03",
                title: "建置與移轉 (The Handoff)",
                description: "我們負責技術實作，並訓練您的團隊如何駕馭這套系統。最終目標是讓這套系統由您內部掌管，或是交由我們全權託管。",
            },
        ],
    },
    valueDiscovery: {
        sectionTitle: "第一次接觸：我們如何了解您的需求",
        phases: [
            {
                number: "Phase 1",
                title: "了解現況",
                subtitle: "找出讓您頭痛的地方",
                mainQuestion: "您或團隊目前最花時間、最讓人煩躁的重複性工作是什麼？",
                listenFor: [
                    "「這件事每天都要做，但其實不需要動腦...」",
                    "「新人來都要花很久教，教完又離職...」",
                    "「這個流程常常出錯，每次都要重來...」",
                ],
                redFlags: [
                    "如果這件事一年才需要處理一兩次，可能不是優先項目",
                    "如果做法因人而異、沒有固定流程，我們需要先幫您整理",
                ],
                keyInsight: "我們會深入了解這個問題造成了什麼困擾：是讓團隊加班？造成客訴？還是讓您無法專心做更重要的事？",
            },
            {
                number: "Phase 2",
                title: "描繪理想",
                subtitle: "想像問題解決後的樣子",
                mainQuestion: "如果這個問題完全解決了，您的公司會變成什麼樣子？",
                listenFor: [
                    "「同事可以準時下班，不用每天加班趕進度」",
                    "「處理速度變快、錯誤變少、客戶更滿意」",
                    "「我終於有時間去開發新產品、開拓新市場」",
                ],
                redFlags: [
                    "「就...變快一點？」— 太模糊了，我們需要更具體的畫面",
                    "「應該會比較好吧」— 需要能衡量的改變",
                ],
                keyInsight: "我們不只幫您省時間，更重要的是幫您釐清：省下來的時間，要用來做什麼更有價值的事？這才是導入 AI 真正的意義。",
            },
            {
                number: "Phase 3",
                title: "評估急迫性",
                subtitle: "思考維持現狀的代價",
                mainQuestion: "如果這個問題再拖半年不處理，可能會發生什麼事？",
                listenFor: [
                    "「員工可能會受不了離職...」",
                    "「成本越來越高，利潤越來越薄...」",
                    "「聽說競爭對手已經開始導入 AI 了...」",
                ],
                redFlags: [
                    "「沒關係，之後再說」— 時機可能還沒到，我們會尊重您的判斷",
                    "「老闆還沒有要處理」— 需要決策者也認同這件事的重要性",
                ],
                keyInsight: "我們不會硬推銷。但如果您已經感受到問題的急迫性，我們可以一起討論解決方案。",
            },
        ],
    },
    pricing: {
        title: "我們的收費方式",
        steps: [
            {
                number: "01",
                title: "透過Threads 聯絡我們",
                description: "讓我們先了解您的公司規模、目前遇到的問題、以及期望達成的目標。",
            },
            {
                number: "02",
                title: "支付顧問費用",
                description: "我們會透過信件發送付款連結給您。\n確認款項之後，跟您預約會議時間",
            },
            {
                number: "03",
                title: "取得專屬建議書",
                description: "諮詢結束後，\n我們會提供一份針對您企業的「AI 導入建議書」。",
            },
        ],
        proposalIncludes: [
            "問題診斷：釐清目前流程的痛點與優化空間",
            "解決方案：建議的 AI 導入方向與實作方式",
            "工具建議：適合您團隊的技術選型",
            "預估效益：導入後預期可節省的時間與成本",
        ],
        note: "顧問諮詢時間以 3 小時為上限，費用為 NT$ 10,000（未稅）。\n本服務不提供退費，但若後續選擇採用我們的方案進行實作，顧問費用將全額折抵於總專案費用中。",
    },
    faq: {
        title: "常見問題：關於 AI 導入企業",
        items: [
            {
                question: "這跟一般的 AI 導入有什麼不同？",
                answer: "一般廠商賣的是「工具」 (如：幫你裝一個 ChatGPT)，我們賣的是「商業成果」 (如：讓創辦人每週省下 10 小時)。我們關注的是如何透過 AI 達成生意的規模化。",
            },
            {
                question: "我需要準備什麼？",
                answer: "只需要準備您的「決心」與「時間」。在初期，我們需要創辦人高度參與，因為我們要複製的是您的腦袋。如果您沒空參與，這個專案就會失敗。",
            },
            {
                question: "如果不做會怎樣？",
                answer: "不會怎樣，您會繼續忙碌。但如果您的競爭對手開始將知識資產化，他們將能以更低的成本、更快的速度提供更穩定的服務。這是生存問題。",
            },
        ],
    },
};
