# TexraWeb

Static GitHub Pages site for the **Texra** Android app (`dd.ai.texra`).

**Live URL:** https://xcat-hub.github.io/TexraWeb/

## URLs (match TexraJava `AppLinks`)

| Path | Purpose |
|------|---------|
| `/` | Product landing |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Service |
| `/app-ads.txt` | AdMob authorized seller file |

Contact: [xuetingcat@gmail.com](mailto:xuetingcat@gmail.com)

## AdMob `app-ads.txt`

```
google.com, pub-4760444532791306, DIRECT, f08c47fec0942fa0
```

Publisher ID matches TexraJava release AdMob App ID `ca-app-pub-4760444532791306~6801371745`.

Site file: https://xcat-hub.github.io/TexraWeb/app-ads.txt

> Note: AdMob usually crawls `app-ads.txt` at the **domain root** (`https://xcat-hub.github.io/app-ads.txt`). If verification requires it, also place the same file in a user/org Pages repo named `XCat-hub.github.io` (same pattern as other apps under this account if needed).

## Deploy (GitHub Pages)

1. Create/push remote: `https://github.com/XCat-hub/TexraWeb.git`
2. **Settings → Pages → Build and deployment**: Source = **Deploy from a branch**, Branch = `main` (or `master`) / root (`/`).
3. Open https://xcat-hub.github.io/TexraWeb/

## Local preview

```bash
npx --yes serve .
```
