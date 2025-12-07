# Headless CMS Frontend (Next.js App Router)

這是一個基於 Next.js 14+ App Router 的 Headless WordPress 前端專案。

---

## ⚠️ 初學者必讀：快取策略的大地雷

> **這是 Headless CMS 最容易踩到的坑！** 如果你發現「WordPress 明明更新了，但前台沒變」，99% 是快取策略設錯。

### ❌ 錯誤做法：Time-based ISR
```typescript
// 這樣會每 60 秒自動重新驗證，但：
// 1. 更新不即時 (最慢要等 60 秒)
// 2. 伺服器持續運算，浪費資源
next: { revalidate: 60 }
```

### ✅ 正確做法：Tag-based On-Demand Revalidation
```typescript
// 這樣頁面是純靜態，只有 WordPress 觸發 Webhook 時才更新
next: { tags: ['posts'] }
```

**好處：**
- 記憶體用量最低（伺服器平常在睡覺）
- 更新最即時（WordPress 儲存後 1-2 秒前台就變了）
- 完美符合「內容有變動時再運算 1 次」的設計理念

---

## 🚀 部署關鍵設定 (Deployment Checklist)

### 1. 環境變數 (Environment Variables)

在 Zeabur (或其他部署平台) 必須設定以下變數，否則 Build 會失敗或選單消失。

| 變數名稱 | 範例值 | 說明 |
| --- | --- | --- |
| `NEXT_PUBLIC_WORDPRESS_API_URL` | `https://cms.ohya.co/graphql` | **重要**：請確認是 WordPress 的正確網址 (通常是 `cms.` 子網域)，不要少打 `/graphql`。 |
| `REVALIDATE_SECRET` | `(your-secret-token)` | 用於 On-Demand Revalidation 的密鑰。 |

### 2. On-Demand Revalidation 架構

本專案採用 **Tag-based On-Demand Revalidation** 策略：

*   **Caching**: 所有 fetch 請求使用 `next: { tags: [...] }` (永久快取 + 標籤)。
*   **Trigger**: 依賴 WordPress Webhook 觸發 `api/revalidate` 並使用 `revalidateTag()` 精準清除快取。
*   **優點**: 極大化前端效能 (全靜態 HTML)，極小化後端負載，更新即時 (1-2 秒)。

#### Cache Tags 對照表

| 頁面 | Tags |
|------|------|
| `/blog` | `posts`, `categories` |
| `/blog/[slug]` | `posts` |
| `/blog/all` | `posts` |
| `/blog/category/[slug]` | `posts`, `categories` |
| `/[...slug]` (Page/Post) | `pages`, `posts` |
| Header Menu | `menus` |

#### API 使用方式

```bash
# GET (單一 tag) - WordPress Webhook 用
GET /api/revalidate?secret=xxx&tag=posts

# POST (多 tags)
POST /api/revalidate
Header: x-revalidate-secret: xxx
Body: { "tags": ["posts", "categories"] }
```

---

## 🔗 WordPress Webhook 設定

在 WordPress 的 `functions.php` 加入以下代碼，支援 Post/Page/Menu/Media 的 新增/更新/刪除：

```php
<?php
/**
 * Next.js On-Demand Revalidation
 */
define('NEXTJS_FRONTEND_URL', 'https://你的前台網域');
define('NEXTJS_REVALIDATE_SECRET', '你的REVALIDATE_SECRET');

function nextjs_revalidate_tags($tags) {
    if (empty($tags)) return;
    wp_remote_post(NEXTJS_FRONTEND_URL . '/api/revalidate', [
        'timeout' => 5,
        'blocking' => false,
        'headers' => [
            'Content-Type' => 'application/json',
            'x-revalidate-secret' => NEXTJS_REVALIDATE_SECRET,
        ],
        'body' => json_encode(['tags' => $tags]),
    ]);
}

// Post
add_action('save_post', function($post_id, $post) {
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) return;
    if ($post->post_type === 'post') nextjs_revalidate_tags(['posts', 'categories']);
    if ($post->post_type === 'page') nextjs_revalidate_tags(['pages']);
}, 10, 2);

add_action('wp_trash_post', function($post_id) {
    $type = get_post_type($post_id);
    if ($type === 'post') nextjs_revalidate_tags(['posts', 'categories']);
    if ($type === 'page') nextjs_revalidate_tags(['pages']);
});

add_action('before_delete_post', function($post_id) {
    $type = get_post_type($post_id);
    if ($type === 'post') nextjs_revalidate_tags(['posts', 'categories']);
    if ($type === 'page') nextjs_revalidate_tags(['pages']);
});

// Menu
add_action('wp_update_nav_menu', function() { nextjs_revalidate_tags(['menus']); });
add_action('wp_delete_nav_menu', function() { nextjs_revalidate_tags(['menus']); });

// Media
add_action('add_attachment', function() { nextjs_revalidate_tags(['media', 'posts', 'pages']); });
add_action('attachment_updated', function() { nextjs_revalidate_tags(['media', 'posts', 'pages']); });
add_action('delete_attachment', function() { nextjs_revalidate_tags(['media', 'posts', 'pages']); });
```

---

## 🛠️ 開發與除錯

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
*   `app/api/revalidate/route.ts`: 接收 WordPress Webhook 的 API (支援 `revalidateTag`)。
