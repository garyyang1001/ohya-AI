# Headless CMS Frontend (Next.js App Router)

這是一個基於 Next.js 14+ App Router 的 Headless WordPress 前端專案。

## 🚀 部署關鍵設定 (Deployment Checklist)

### 1. 環境變數 (Environment Variables)

在 Zeabur (或其他部署平台) 必須設定以下變數，否則 Build 會失敗或選單消失。

| 變數名稱 | 範例值 | 說明 |
| --- | --- | --- |
| `NEXT_PUBLIC_WORDPRESS_API_URL` | `https://cms.ohya.co/graphql` | **重要**：請確認是 WordPress 的正確網址 (通常是 `cms.` 子網域)，不要少打 `/graphql`。 |
| `REVALIDATE_SECRET` | `(your-secret-token)` | 用於 On-Demand Revalidation 的密鑰。 |

### 2. On-Demand Revalidation 架構

本專案採用 **Pure On-Demand Revalidation** 策略：

*   **Caching**: 所有 fetch 請求預設 `revalidate: false` (永久快取)。
*   **Trigger**: 依賴 WordPress Webhook 觸發 `api/revalidate` 來更新內容。
*   **優點**: 極大化前端效能 (全靜態 HTML)，極小化後端負載。

**⚠️ 注意事項**：
*   如果 Build 的時候 WordPress 掛掉 (502)，頁面會顯示 Fallback 內容 (例如預設選單)。
*   解決方法：確認 WordPress 恢復後，觸發一次 Webhook 或重新部署。

---

## �️ 開發與除錯

### 常見錯誤排除

**Q: 為什麼選單不見了？**
A: 這通常是因為在 Build Time 時，WordPress 回傳錯誤 (502/404)。
*   檢查 `NEXT_PUBLIC_WORDPRESS_API_URL` 是否正確。
*   檢查 WordPress 是否活著。
*   Header 有內建 `FALLBACK_MENU`，如果連這個都沒出來，代表環境變數完全沒吃到。

**Q: Build 失敗 `undefined reading toString`？**
A: 通常是因為 `fetch` 失敗導致資料為 `null`，而後續程式碼嘗試讀取它。
*   我們已經在全域 `fetchGraphQL` 加上 `try-catch` 防護。
*   請檢查後端網址是否正確。

### 指令

```bash
# 安裝依賴
npm install

# 本地開發
npm run dev

# 建置 (測試 SSG 生成)
npm run build
```

## 📂 專案結構

*   `app/components/Header.tsx`: 包含 Menu Fetch 邏輯與 Fallback Menu。
*   `app/[...slug]/page.tsx`: 通用頁面渲染 (Page/Post)。
*   `app/api/revalidate/route.ts`: 接收 WordPress Webhook 的 API。
