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
- **視覺**：極簡留白、極細線 (0.5px)、低飽和度圖片
- **動效**：700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

---

## 📁 專案結構

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx    # 全站 Header (動態選單 + Dropdown)
│   │   └── Footer.tsx    # 全站 Footer (完整資訊 + 社群)
│   ├── hooks/
│   │   └── useAnimations.ts
│   ├── [...slug]/
│   │   └── page.tsx      # 動態路由 (文章/頁面)
│   ├── layout.tsx        # 根 Layout (含 Header/Footer)
│   ├── page.tsx          # 首頁 (Hero, Services, Blog, Testimonial)
│   └── globals.css       # 設計系統 (CSS Variables & Utilities)
├── graphql/queries/      # GraphQL 查詢定義
├── gql/                  # Codegen 產生的類型
├── codegen.ts            # GraphQL Codegen 設定
└── next.config.mjs       # Next.js 設定
```

---

## ✅ 已完成 (Design System v2.0 Redesign)

### 核心系統
- [x] Next.js 15 專案初始化
- [x] GraphQL Codegen 設定
- [x] `globals.css` 全面更新 (Colors, Typography, 8pt Grid)

### Header & Footer
- [x] **Header**: 
    - [x] Logo 更新 (好事發生數位 AI)
    - [x] WordPress 動態選單整合
    - [x] Dropdown 樣式優化 (8pt spacing, dots indicator)
- [x] **Footer**: 
    - [x] 完整聯絡資訊 & 社群連結 (FB, Threads, YT, Skool)
    - [x] Since 2018

### 首頁 (Homepage)
- [x] **Hero Section**: 修正標題斷行，按鈕改為「查看服務」
- [x] **Services Section**: Option B 設計 (大數字 + Icons + 箭頭提示)
- [x] **Blog Section**: 顯示最新 3 篇文章 (灰階圖片 + Hover 彩色)
- [x] **Testimonial**: 阿玩旅遊案例
- [x] **區塊分離**: 服務項目與特色區塊獨立

---

## 📋 待完成

### Phase 2: 手機版體驗
- [ ] **Mobile Menu**: 實作漢堡選單展開/收合功能
- [ ] RWD 調整: 確保所有區塊在手機上顯示正常

### Phase 3: 部落格系統
- [ ] **文章列表頁 (`/blog`)**: 網格佈局、分頁
- [ ] **文章內頁 (`/[slug]`)**: 標題、Meta、內容樣式
- [ ] **分類與標籤頁**: `/category/[slug]`, `/tag/[slug]`

### Phase 4: SEO & 優化
- [ ] 動態 Metadata (Title, Description, OG Image)
- [ ] Sitemap 生成
- [ ] 404 頁面設計
- [ ] Loading 狀態優化

---

## 🔧 常用指令

```bash
# 開發
cd frontend
npm run dev

# GraphQL 類型重新生成
npm run codegen

# 推送到 GitHub (觸發 Zeabur 自動部署)
git add -A && git commit -m "message" && git push
```

---

## 🔗 相關連結

- **GitHub**: https://github.com/garyyang1001/ohya-AI
- **Zeabur**: (部署後的網址)
- **WordPress GraphQL**: https://ohya.co/graphql

---

## 📝 開發備註

1. **圖片來源**：`next.config.mjs` 已設定允許 `ohya.co` 的遠端圖片
2. **Menu 資料**：Header 從 WordPress `MENU_1` 抓取
3. **快取策略**：Menu 資料快取 **60 秒** (`revalidate: 60`) 以便快速同步
