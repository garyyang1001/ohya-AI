# CLAUDE.md - Ohya Digital Frontend Project

這是 Claude Code 的專案指引檔案，定義了專案的結構、技術規範與開發標準。

---

## 專案概覽

**Ohya Digital Frontend** 是一個基於 Next.js App Router 的 Headless WordPress 前端專案，提供 AI 數位服務的企業網站。

### 核心服務
- AI 導入企業顧問 (`/ai-consultant-service`)
- AI 客服解決方案 (`/ai-customer-service`)
- AI SEO 自動化行銷 (`/ai-seo-marketing`)
- WordPress 網站設計
- n8n 自動化工作流

---

## 技術棧

| 技術 | 版本 | 說明 |
|------|------|------|
| Next.js | 15.5.9 | App Router 架構，SSG/ISR |
| React | 19.0.0 | 現代 React 開發 |
| TypeScript | 5.x | 完整類型安全 |
| Tailwind CSS | 3.4.1 | Utility-first 樣式 |
| GraphQL | - | 連接 WordPress CMS |

---

## 目錄結構

```
ohya-AI/
├── app/                      # Next.js App Router
│   ├── components/           # 共用元件
│   │   ├── Header.tsx       # 導航（含 Fallback Menu）
│   │   ├── Footer.tsx       # 頁腳
│   │   ├── BlogCard.tsx     # 部落格卡片
│   │   └── MobileMenu.tsx   # 行動選單
│   ├── hooks/               # 自訂 Hooks
│   │   └── useAnimations.ts # 滾動動畫
│   ├── api/revalidate/      # On-Demand Revalidation API
│   ├── blog/                # 部落格系統
│   ├── ai-consultant-service/   # AI 顧問頁面
│   ├── ai-customer-service/     # AI 客服頁面
│   ├── ai-seo-marketing/        # AI SEO 頁面
│   ├── [...slug]/           # 動態頁面（WordPress Page/Post）
│   ├── page.tsx             # 首頁
│   ├── layout.tsx           # 根佈局
│   └── globals.css          # 全域樣式
├── graphql/queries/         # GraphQL 查詢定義
├── gql/                     # GraphQL Code Generator 輸出
└── public/images/           # 靜態資源
```

---

## 快取策略（重要）

本專案使用 **Tag-based On-Demand Revalidation**，不使用 Time-based ISR。

### Cache Tags 對照表

| 頁面 | Tags |
|------|------|
| `/blog` | `posts`, `categories` |
| `/blog/[slug]` | `posts` |
| Header Menu | `menus` |
| Pages/Posts | `pages`, `posts` |

### 正確寫法
```typescript
// 使用 tags，不要用 revalidate 數字
const data = await fetch(url, {
  next: { tags: ['posts'] }
});
```

### 錯誤寫法（避免）
```typescript
// 不要這樣做！會造成不必要的重新驗證
next: { revalidate: 60 }
```

---

## 品牌設計規範

### 色彩系統
```css
--brand-bg: #F5F5F3;         /* 再生紙白（背景） */
--brand-ink: #2B2B2B;        /* 墨黑（主要文字） */
--brand-gray: #7A7A7A;       /* 石墨灰（次要文字） */
--brand-light-gray: #D4D4D4; /* 淺灰（邊框） */
--brand-line: #E5E5E5;       /* 極細線 */
--brand-red: #8C3A3A;        /* 印泥紅（強調色） */
```

### 字體
- **標題**: Noto Serif TC（襯線體）
- **內文**: Lato（無襯線體）
- **行高**: 1.8
- **字重**: 300-600

### 間距
- 遵循 **8pt Grid** 系統
- 所有間距為 8 的倍數
- Container 最大寬度: `max-w-7xl`

### 動畫
- 過渡時間: `duration-500` 到 `duration-700`
- 緩動函數: `ease-out`
- 滾動淡入使用 Intersection Observer

---

## 常用指令

```bash
# 開發
npm run dev

# 建置
npm run build

# 啟動
npm run start

# ESLint 檢查
npm run lint

# GraphQL 代碼生成
npm run codegen
npm run codegen:watch
```

---

## 環境變數

| 變數 | 說明 |
|------|------|
| `NEXT_PUBLIC_WORDPRESS_API_URL` | WordPress GraphQL API 網址 |
| `REVALIDATE_SECRET` | Webhook 驗證密鑰 |

---

## 開發注意事項

### 1. GraphQL 查詢
- 查詢定義放在 `graphql/queries/`
- 運行 `npm run codegen` 生成類型
- 類型輸出在 `gql/` 目錄

### 2. 新增頁面
服務頁面結構參考 `/ai-consultant-service/`：
```
ai-xxx-service/
├── page.tsx      # 主頁面
├── content.ts    # 內容資料
└── components/   # 區段元件
    ├── HeroSection.tsx
    ├── PricingSection.tsx
    └── ...
```

### 3. 部落格
- 文章來自 WordPress
- 使用 `BlogCard` 元件顯示
- 支援分類篩選

### 4. 動態頁面
- `/[...slug]/page.tsx` 處理 WordPress 的 Page 和 Post
- 自動從 WordPress 取得內容

---

## 常見問題排除

### 選單不見了
1. 檢查 `NEXT_PUBLIC_WORDPRESS_API_URL` 是否正確
2. 確認 WordPress GraphQL 端點可用
3. Header 有內建 `FALLBACK_MENU` 作為備援

### Build 失敗
1. 通常是 GraphQL 請求失敗
2. 檢查 WordPress 後端是否正常運作
3. 檢查環境變數設定

### 內容沒更新
1. 確認 WordPress Webhook 已設定
2. 檢查 `REVALIDATE_SECRET` 是否一致
3. 手動呼叫 `/api/revalidate?secret=xxx&tag=posts` 測試

---

## 程式碼風格

- 使用 TypeScript 嚴格模式
- 元件使用 PascalCase
- 檔案使用 kebab-case 或 PascalCase（元件）
- 遵循 ESLint 規則
- 優先使用 Server Components
- 只在需要互動時使用 `'use client'`

---

## AI 輔助開發提示

當 Claude 協助開發此專案時：

1. **新增功能**: 參考現有的 `ai-consultant-service` 結構
2. **修改樣式**: 遵循品牌色彩和 8pt 間距系統
3. **GraphQL**: 查詢放在 `graphql/queries/`，然後運行 codegen
4. **快取**: 永遠使用 `tags`，不用 `revalidate` 數字
5. **元件**: 放在 `app/components/` 或各頁面的 `components/` 子目錄

---

*最後更新: 2026-01*
