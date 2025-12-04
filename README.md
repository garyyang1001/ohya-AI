# WannaVegTour Headless CMS 專案

## 📌 專案概述

將 ohya.co 由傳統 WordPress 遷移為 **Headless CMS 架構**：
- **前端**：Next.js 15 (App Router) 部署於 Zeabur
- **後端**：WordPress (WPGraphQL) 作為 CMS

---

## 🎨 設計系統 (MUJI 風格)

參考 `globals.css` 的 CSS Variables：

```css
--muji-bg: #F5F5F3;      /* 米灰色背景 */
--muji-ink: #2B2B2B;     /* 墨色 (非純黑) */
--muji-gray: #7A7A7A;    /* 次要文字 */
--muji-line: #E0E0E0;    /* 極細分隔線 */
--muji-accent: #8C3A3A;  /* 印泥暗紅 (強調色) */
```

**設計原則**：
- 字體：Noto Serif TC (細體為主)
- letter-spacing: 0.02em ~ 0.3em
- 極細邊框 (0.5px)
- 留白充足、極簡風格

---

## 📁 專案結構

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx    # 全站 Header (MUJI 風格)
│   │   └── Footer.tsx    # 全站 Footer (MUJI 風格)
│   ├── hooks/
│   │   └── useAnimations.ts
│   ├── [...slug]/
│   │   └── page.tsx      # 動態路由 (文章/頁面)
│   ├── layout.tsx        # 根 Layout (含 Header/Footer)
│   ├── page.tsx          # 首頁
│   └── globals.css       # 設計系統
├── graphql/queries/      # GraphQL 查詢定義
├── gql/                  # Codegen 產生的類型
├── codegen.ts            # GraphQL Codegen 設定
└── next.config.mjs       # Next.js 設定
```

---

## ✅ 已完成

- [x] Next.js 15 專案初始化
- [x] GraphQL Codegen 設定 (連接 ohya.co/graphql)
- [x] 首頁設計 (MUJI 風格)
- [x] Header 元件 (從 WordPress Menu 抓取)
- [x] Footer 元件
- [x] 動態路由 ([...slug]) 處理文章/頁面
- [x] 部署到 Zeabur

---

## 📋 待完成

### Phase 1: 核心頁面
- [ ] 文章列表頁 `/blog`
- [ ] 分類頁 `/category/[slug]`
- [ ] 標籤頁 `/tag/[slug]`
- [ ] 手機版選單展開功能

### Phase 2: SEO & 優化
- [ ] 動態 SEO Metadata (title, description, OG image)
- [ ] 404 頁面設計
- [ ] Sitemap 自動生成
- [ ] 搜尋功能

### Phase 3: 正式上線
- [ ] DNS 切換 (ohya.co → Zeabur)
- [ ] WordPress 移到 cms.ohya.co

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
2. **Menu 資料**：Header 會嘗試從 WordPress PRIMARY 選單抓取，若無則使用 fallback
3. **快取策略**：Menu 資料快取 1 小時 (`revalidate: 3600`)
