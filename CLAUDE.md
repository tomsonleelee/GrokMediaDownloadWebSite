# GrokMediaDownloader — Marketing Website

## Project Overview

Static marketing website for the **GrokMediaDownloader** Chrome extension (Grok AI media management tool). Published by **Kario Studio**.

- **Type**: Pure static HTML/CSS/JS — no build system, no bundler, no framework
- **Domain**: `https://grokmedia.kario-studio.com`
- **Chrome Web Store**: `https://chromewebstore.google.com/detail/grok-media-downloader/niebmpjbnghbfnjbbeajlndkjpgpamhi`
- **Payment**: LemonSqueezy integration for Pro license

## Tech Stack

| Layer | Tool |
|-------|------|
| CSS | TailwindCSS via CDN (`<script src="https://cdn.tailwindcss.com">`) |
| Icons | Lucide Icons via CDN |
| Analytics | GA4 — Property ID: `G-6YPN8563C6` |
| Components | `js/components.js` — shared header/footer loader, GA4 event tracking |
| i18n | `js/i18n.js` — toast translations only (4 keys × 3 languages) + language toggle |

## Multilingual Structure (i18n)

Three languages, each with its own directory. **Body text is hardcoded in each HTML file** (no JS dependency for SEO).

| Language | Path | HTML `lang` | Note |
|----------|------|-------------|------|
| English | `/` (root) | `en` | Default & primary (x-default) |
| 繁體中文 | `/zh-TW/` | `zh-TW` | |
| 日本語 | `/ja/` | `ja` | |

**hreflang convention:**
- `x-default` → `/` (root, English)
- `hreflang="en"` → `/`
- `hreflang="zh-TW"` → `/zh-TW/`
- `hreflang="ja"` → `/ja/`

## Pages

| Page | Root (EN) | `/zh-TW/` | `/ja/` |
|------|-----------|-----------|--------|
| Homepage | `index.html` | ✅ | ✅ |
| Story Mode | `story-mode.html` | ✅ | ✅ |
| Video Gen Queue | `video-gen-queue.html` | ✅ | ✅ |
| Pricing | `pricing.html` | ✅ | ✅ |
| FAQ | `faq.html` | ✅ | ✅ |
| Privacy Policy | `privacy.html` | ✅ | ✅ |
| Terms of Service | `terms.html` | ✅ | ✅ |
| Purchase Success | `success.html` | ✅ | ✅ |
| 404 | `404.html` | — | — |

Shared components loaded via JS (language-specific versions):
- `components/header.html` (EN), `components/header-zh-TW.html`, `components/header-ja.html`
- `components/footer.html` (EN), `components/footer-zh-TW.html`, `components/footer-ja.html`

## Common Commands

```bash
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

1. **Three-language sync**: When modifying any page content, update ALL three language versions (root EN, `/zh-TW/`, `/ja/`) — body text is hardcoded per language, no JS dependency
2. **Component sync**: When modifying header/footer, update all 3 versions (`header.html`, `header-zh-TW.html`, `header-ja.html`, same for footer)
3. **SEO sync**: When adding a new page, update `sitemap.xml` with hreflang links for all three languages
4. **Assets**: Always reference images from `assets/resized/` (not originals). Run `./resize-images.sh` after adding new feature images
5. **Schema.org**: Homepage includes `SoftwareApplication`, `WebSite`, `BreadcrumbList`, and `VideoObject` structured data
