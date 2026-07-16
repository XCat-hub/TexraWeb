## 2026-07-16 — 改用 GitHub Pages 默认域名

### 需求
不注册自定义域名，改用 GitHub 默认域名发布。

### 方案
1. 删除 `CNAME`（`texra.app`）。
2. 站点资源与导航改为相对路径，适配项目页 `https://xcat-hub.github.io/TexraWeb/`。
3. 法律页 / README / robots 中的站点 URL 改为上述 GitHub Pages 地址。
4. TexraJava `AppLinks` 同步指向同一地址。

### 修改文件
- 删除 `CNAME`
- `index.html`、`privacy/index.html`、`terms/index.html`
- `robots.txt`、`README.md`
- `../TexraJava/app/src/main/java/dd/ai/texra/util/AppLinks.kt`
- `history.md`

---

## 2026-07-16 — 新建 TexraWeb 静态站（服务 TexraJava）

### 需求
为 TexraJava 项目搭建静态 GitHub 网站（TexraWeb），包含服务条款、隐私协议，以及 AdMob 所需的 `app-ads.txt`。

### 方案
1. 在空仓库 `TexraWeb` 使用纯静态 HTML/CSS/JS（无构建步骤），便于 GitHub Pages 直接发布。
2. 路径对齐 TexraJava `AppLinks`：`/`、`/privacy/`、`/terms/`、站点根目录 `app-ads.txt`。
3. `app-ads.txt` 声明 `pub-4760444532791306`（与 TexraJava release AdMob App ID 一致）。
4. 视觉对齐 Texra Design System（Primary `#185FA5`、Accent `#EF9F27`、Canvas `#F8F9FC`）。
5. 法律页中英双语（本地语言切换）；联系邮箱 `support@texra.app`。

### 修改文件
- `index.html`（新增）
- `privacy/index.html`（新增）
- `terms/index.html`（新增）
- `app-ads.txt`（新增）
- `robots.txt`（新增）
- `assets/css/styles.css`（新增）
- `assets/js/i18n.js`（新增）
- `README.md`（新增）
- `history.md`（新增）
