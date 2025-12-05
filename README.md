# WannaVegTour Headless CMS 專案

## 📌 專案概述

將 ohya.co 由傳統 WordPress 遷移為 **Headless CMS 架構**：
- **前端**：Next.js 15 (App Router) 部署於 Zeabur
- **後端**：WordPress (WPGraphQL) 作為 CMS

---

## 🎨 設計系統 (Design System v2.0)

基於 `Design-CI.html` 的全新品牌識別：

```css
--brand-bg: #F5F5F3;      /* 再生紙白 (60%) */
--brand-ink: #2B2B2B;     /* 墨黑 (30%) */
--brand-gray: #7A7A7A;    /* 石墨灰 (8%) */
--brand-line: #E0E0E0;    /* 極細分隔線 */
--brand-red: #8C3A3A;     /* 印泥紅 (2% 強調) */
```

**設計原則**：
- **字體**：Noto Serif TC (主要), Lato (功能性小字)
- **排版**：8pt 間距系統 (Spacing System)
- **視覺**：極簡留白、極細線 (0.5px)、低飽和度圖片、扁平化卡片
- **動效**：700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

---

## ✅ 目前進度 (Current Status)

### 1. 核心頁面
- [x] **首頁 (Home)**: Hero, Services, Blog, Testimonial 區塊完成
- [x] **AI SEO Marketing**: `/ai-seo-marketing` (移植自 `index (1).html`)
- [x] **作品集**: `/portfolio` (靜態頁面)
- [x] **聯繫我們**: `/contact-us` (靜態頁面)

### 2. 導航系統 (Navigation)
- [x] **Header**:
    - [x] Logo 更新 (好事發生數位 AI)
    - [x] **Desktop Menu**: 置中下拉選單、扁平化設計、箭頭指示
    - [x] **Mobile Menu**: 左對齊設計、點擊父層展開子選單、底部社群連結 (FB, Threads, YT)
    - [x] **連結修復**: 自動將 WordPress 分類連結 (`/category/xxx`) 映射至 `/blog/category/xxx`

### 3. 部落格系統 (Blog System)
- [x] **文章列表 (`/blog`)**: 白色卡片風格、品牌色邊框、Hover 效果
- [x] **分類頁面 (`/blog/category/[slug]`)**: 動態抓取分類文章
- [x] **文章內頁 (`/blog/[slug]`)**: Averi.ai 風格、特色圖片圓角、麵包屑導航
- [x] **所有文章 (`/blog/all`)**: 顯示所有文章列表

### 4. 性能優化 (Performance)
- [x] **CSS 優化**: 啟用 `experimental.optimizeCss` (critters)
- [x] **Bundle 優化**: 配置 `browserslist` 減少 polyfills
- [x] **生產環境**: 自動移除 `console.log`

---

## 📁 專案結構

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Server Component (Fetch Menu)
│   │   ├── HeaderContent.tsx # Client Component (UI & Logic)
│   │   ├── MobileMenu.tsx    # 手機版選單 (含連結轉換邏輯)
│   │   └── BlogCard.tsx      # 部落格卡片組件
│   ├── blog/
│   │   ├── page.tsx          # 部落格首頁 (分類列表)
│   │   ├── all/              # 所有文章列表
│   │   └── category/[slug]/  # 分類文章列表
│   ├── [slug]/               # 頁面動態路由
│   └── globals.css           # 全域樣式 & Tailwind 設定
├── graphql/queries/          # GraphQL 查詢字串
└── next.config.mjs           # Next.js 設定 (含 Image Domains)
```

---

## 🔧 常用指令

```bash
# 開發 (Port 3000 被佔用時會自動切換)
cd frontend
npm run dev

# 構建測試
npm run build

# 推送到 GitHub (觸發 Zeabur 自動部署)
git add -A && git commit -m "message" && git push
```

---

## 📝 下一步待辦 (Next Steps)

1. **SEO 細部優化**: 檢查各頁面的 Meta Tags (Title, Description, OG Image)
2. **404 頁面**: 設計自定義 404 頁面
3. **Loading 狀態**: 優化頁面切換時的 Loading 效果
4. **內容遷移**: 確認所有 WordPress 舊文章的圖片和格式在 Next.js 中顯示正常

---

## 🔗 相關連結

- **GitHub**: https://github.com/garyyang1001/ohya-AI
- **Zeabur**: https://ohya-new.zeabur.app
- **WordPress GraphQL**: https://ohya.co/graphql
