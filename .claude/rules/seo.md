---
paths: ["sitemap.xml", "robots.txt", "*.html", "zh-TW/*.html", "ja/*.html", "ko/*.html"]
---

# SEO Rules

## Every Page Must Have

1. `<title>` — unique, descriptive, includes "GrokMediaDownloader"
2. `<meta name="description">` — unique per page, under 160 chars
3. `<link rel="canonical">` — absolute URL to the current page
4. `<meta property="og:*">` — Open Graph tags (title, description, image, url) + `og:image:width` (1200), `og:image:height` (630), `og:image:type` (image/jpeg)
5. `<link rel="alternate" hreflang="...">` — all four language versions + `x-default`
6. **Body text in the correct language** — hardcoded, no JS dependency

## hreflang Template

Every page needs this set of hreflang links (adjust paths per page):

```html
<link rel="alternate" hreflang="en" href="https://grokmedia.kario-studio.com/{page}" />
<link rel="alternate" hreflang="zh-TW" href="https://grokmedia.kario-studio.com/zh-TW/{page}" />
<link rel="alternate" hreflang="ja" href="https://grokmedia.kario-studio.com/ja/{page}" />
<link rel="alternate" hreflang="ko" href="https://grokmedia.kario-studio.com/ko/{page}" />
<link rel="alternate" hreflang="x-default" href="https://grokmedia.kario-studio.com/{page}" />
```

`x-default` always points to the English (root) version.

## Adding a New Page — SEO Checklist

1. Create all four language versions (root EN, `/zh-TW/`, `/ja/`, `/ko/`)
2. **Hardcode body text** in the correct language for each version
3. Add unique `<title>`, `<meta description>`, `<link canonical>` per version
4. Add hreflang links to all four versions
5. Add Open Graph meta tags
6. Update `sitemap.xml`:
   - Add `<url>` entry for each language version (4 entries)
   - Include `<xhtml:link rel="alternate" hreflang="...">` in each entry
   - Set appropriate `<priority>` and `<changefreq>`
7. Add Schema.org structured data if applicable (see below)
8. Update navigation in all 4 header components (`header.html`, `header-zh-TW.html`, `header-ja.html`, `header-ko.html`)

## Schema.org Types Used

| Schema Type | Used On | Purpose |
|-------------|---------|---------|
| `SoftwareApplication` | Homepage | Product details, ratings, publisher |
| `WebSite` | Homepage | Site identity, languages |
| `BreadcrumbList` | Homepage, FAQ, Pricing | Navigation breadcrumbs |
| `VideoObject` | Homepage | Demo video metadata |
| `FAQPage` | FAQ and feature pages (all 4 languages) | Q&A rich results; keep schema Q&A in sync with visible FAQ content |
| `Product` | Pricing (all 4 languages) | Product/offer details with rating |
| `Organization` | Homepage (all 4 languages) | Publisher identity (Kario Studio) |

## OG Images

| Page | OG Image | Size |
|------|----------|------|
| Homepage / Pricing / FAQ / Legal | `assets/og-image.jpg` | 1200x630, ~67KB |
| Whole Library Download | `assets/og-library-download.jpg` | 1200x630, ~57KB |
| Story Mode | `assets/og-story-mode.jpg` | 1200x630, ~48KB |
| Video Gen Queue | `assets/og-video-gen-queue.jpg` | 1200x630, ~54KB |
| Stream Capture | `assets/og-stream-capture.jpg` | 1200x630, ~82KB |
| Project Download | `assets/og-project-download.jpg` | 1200x630, ~53KB |

## On-Page Conventions

- `<title>`: no version numbers. Homepage titles carry the platform keyword in each language ("Chrome Extension" / "Chrome 擴充功能" / "Chrome拡張機能" / Korean equivalent).
- Image `alt` text: descriptive and keyword-rich in the page's language, never a generic file or feature name.
- `404.html` is served at the root (English path): keep `lang="en"` and English UI text.

## Navigation Rendering

- Header/footer are injected via JS `fetch()` in `loadComponents()` (`js/components.js`). Crawlers that skip JS see only the static fallback nav/footer inside `<div id="header-placeholder">` / `<div id="footer-placeholder">`, so every page that loads `js/components.js` must keep them.

## Sitemap Priority Guide

| Page Type | Priority | Change Frequency |
|-----------|----------|-----------------|
| Homepage | `1.0` | weekly |
| Feature pages (story-mode, video-gen-queue) | `0.8–0.9` | weekly |
| Pricing | `0.7–0.8` | monthly |
| FAQ | `0.6–0.7` | monthly |
| Legal (privacy, terms) | `0.3` | yearly |
