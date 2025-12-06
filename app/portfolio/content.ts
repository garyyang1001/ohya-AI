export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    link?: string;
    tags: string[];
    year: string;
}

export const projects: Project[] = [
    {
        id: 'wannavegtour',
        title: 'WannaVegTour 素食旅遊',
        category: 'Headless CMS Development',
        description: '將傳統 WordPress 網站轉型為 Headless 架構，結合 Next.js 與 WPGraphQL，實現極致的頁面加載速度與 SEO 排名優化。整合 ACF 欄位管理行程細節，並透過 ISR 技術確保內容即時性。',
        image: '/images/portfolio/wannavegtour-cover.jpg', // 需確認圖片路徑
        link: 'https://wannavegtour.com',
        tags: ['Next.js', 'WordPress', 'GraphQL', 'Tailwind CSS'],
        year: '2024'
    },
    {
        id: 'ai-consultant',
        title: '企業 AI 導入顧問服務',
        category: 'AI Solution',
        description: '協助企業導入 Generative AI 工作流，建立內部知識庫 RAG 系統。從痛點診斷到實際工具落地，打造自動化業務流程，提升團隊 10x 生產力。',
        image: '/images/portfolio/ai-consultant.jpg',
        tags: ['AI Agent', 'RAG', 'Python', 'Process Automation'],
        year: '2024'
    },
    {
        id: 'seo-marketing',
        title: 'AI SEO 內容矩陣',
        category: 'Digital Marketing',
        description: '運用 AI Agent 自動化產出高品質 SEO 文章，建立網站內容矩陣。針對長尾關鍵字進行佈局，大幅提升自然搜尋流量與品牌曝光度。',
        image: '/images/portfolio/seo-marketing.jpg',
        tags: ['SEO', 'Content Strategy', 'AI Writing', 'Data Analysis'],
        year: '2023'
    }
];

export const portfolioContent = {
    hero: {
        title: "精選案例",
        subtitle: "好酒沉甕底",
        description: "更新中，敬請期待"
    }
};
