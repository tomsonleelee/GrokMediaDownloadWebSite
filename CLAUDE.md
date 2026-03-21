# GrokMediaDownloader — Marketing Website

## Project Overview

Static marketing website for the **GrokMediaDownloader** Chrome extension (Grok AI media management tool). Published by **Kario Studio**.

- **Type**: Static HTML/CSS/JS — Tailwind CSS compiled via CLI (no framework)
- **Domain**: `https://grokmedia.kario-studio.com`
- **Chrome Web Store**: `https://chromewebstore.google.com/detail/grok-media-downloader/niebmpjbnghbfnjbbeajlndkjpgpamhi`
- **Extension ID**: `niebmpjbnghbfnjbbeajlndkjpgpamhi`
- **CWS Stats**: Check [Chrome Web Store listing](https://chromewebstore.google.com/detail/grok-media-downloader/niebmpjbnghbfnjbbeajlndkjpgpamhi) for current user count and rating
- **CWS Languages**: EN (default), zh-TW, JA, ES, DE, KO (6 languages — more than marketing site's 4)
- **Payment**: LemonSqueezy integration for Pro license ($4.99 Lifetime)

## Tech Stack

| Layer | Tool |
|-------|------|
| CSS | TailwindCSS v3 — static compiled (`css/styles.css`) via `npm run build:css` |
| Icons | Lucide Icons via CDN |
| Analytics | GA4 — `G-6YPN8563C6` (marketing site) + `G-8DSYQ27F9Y` (CWS, via Connected Site Tags) |
| Components | `js/components.js` — shared header/footer loader, GA4 event tracking |
| i18n | `js/i18n.js` — toast translations only (4 keys × 4 languages) + language switch |

## Multilingual Structure (i18n)

Four languages, each with its own directory. **Body text is hardcoded in each HTML file** (no JS dependency for SEO).

| Language | Path | HTML `lang` | Note |
|----------|------|-------------|------|
| English | `/` (root) | `en` | Default & primary (x-default) |
| 繁體中文 | `/zh-TW/` | `zh-TW` | |
| 日本語 | `/ja/` | `ja` | |
| 한국어 | `/ko/` | `ko` | |

**hreflang convention:**
- `x-default` → `/` (root, English)
- `hreflang="en"` → `/`
- `hreflang="zh-TW"` → `/zh-TW/`
- `hreflang="ja"` → `/ja/`
- `hreflang="ko"` → `/ko/`

## Pages

| Page | Root (EN) | `/zh-TW/` | `/ja/` | `/ko/` |
|------|-----------|-----------|--------|--------|
| Homepage | `index.html` | ✅ | ✅ | ✅ |
| Story Mode | `story-mode.html` | ✅ | ✅ | ✅ |
| Video Gen Queue | `video-gen-queue.html` | ✅ | ✅ | ✅ |
| Stream Capture | `stream-capture.html` | ✅ | ✅ | ✅ |
| Project Download | `project-download.html` | ✅ | ✅ | ✅ |
| Pricing | `pricing.html` | ✅ | ✅ | ✅ |
| FAQ | `faq.html` | ✅ | ✅ | ✅ |
| Privacy Policy | `privacy.html` | ✅ | ✅ | ✅ |
| Terms of Service | `terms.html` | ✅ | ✅ | ✅ |
| Purchase Success | `success.html` | ✅ | ✅ | ✅ |
| 404 | `404.html` | — | — | — |

Shared components loaded via JS (language-specific versions):
- `components/header.html` (EN), `components/header-zh-TW.html`, `components/header-ja.html`, `components/header-ko.html`
- `components/footer.html` (EN), `components/footer-zh-TW.html`, `components/footer-ja.html`, `components/footer-ko.html`

## Common Commands

```bash
# First-time setup (after git clone)
npm install

# Build Tailwind CSS (REQUIRED after changing any Tailwind classes)
npm run build:css

# Watch mode (auto-rebuild on changes during development)
npm run watch:css

# Local dev server
python3 -m http.server 8080

# Resize feature images to 1280x800 & 640x400 (16:10)
./resize-images.sh

# Compress video (quality: high | medium | low)
./compress-video.sh input.mp4 [quality]
```

## Design System

- **Primary color**: `#db2777` (pink-600) — brand accent, CTAs, highlights
- **Background**: `#0f172a` (slate-900) — dark navy theme
- **Text**: white / `#ccc` / `#aaa` on dark backgrounds
- **Gradient buttons**: pink-to-purple gradient (`from-pink-500 to-purple-600`)
- **Feature card borders**: Color-coded gradients (`.feat-border-blue`, `.feat-border-purple`, etc.)
- **Background orbs**: Animated radial gradients (blue, purple, cyan) at low opacity

## Commit Convention

- Format: **Conventional Commits** — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`
- Language: **English** commit messages
- Co-author: Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` when Claude writes the commit

## Key Reminders

1. **Four-language sync**: When modifying any page content, update ALL four language versions (root EN, `/zh-TW/`, `/ja/`, `/ko/`) — body text is hardcoded per language, no JS dependency
2. **Component sync**: When modifying header/footer, update all 4 versions (`header.html`, `header-zh-TW.html`, `header-ja.html`, `header-ko.html`, same for footer)
3. **SEO sync**: When adding a new page, update `sitemap.xml` with hreflang links for all four languages
4. **Assets**: Always reference images from `assets/resized/` (not originals). Run `./resize-images.sh` after adding new feature images
5. **Schema.org**: Homepage includes `SoftwareApplication`, `WebSite`, `BreadcrumbList`, and `VideoObject` structured data
6. **Tailwind CSS**: After adding/changing Tailwind classes, run `npm run build:css` to regenerate `css/styles.css`. The compiled CSS is committed to git so no build step is needed for deployment
7. **CWS has 6 languages**: Marketing site has 4 (EN, zh-TW, JA, KO), but CWS listing has 6 (+ ES, DE). When updating CWS descriptions, update all 6
8. **Social proof must use real data**: Always check CWS listing for current stats before using numbers. Testimonials must be based on real CWS reviews (Jerome, Tamas, lipo dipo). Never fabricate numbers
9. **OG Images**: Homepage uses `assets/og-image.jpg` (1200x630). Feature pages use page-specific OG images (`assets/og-{feature}.jpg`). All include `og:image:width/height/type` meta tags
