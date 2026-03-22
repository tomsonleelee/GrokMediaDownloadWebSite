---
globs: ["sitemap.xml", "robots.txt", "*.html", "zh-TW/*.html", "ja/*.html", "ko/*.html"]
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
| `FAQPage` | FAQ (all 4 languages) | 18 Q&A pairs for rich snippets |
| `Product` | Pricing (all 4 languages) | Product/offer details with rating |

## OG Images

| Page | OG Image | Size |
|------|----------|------|
| Homepage / Pricing / FAQ / Legal | `assets/og-image.jpg` | 1200x630, ~67KB |
| Story Mode | `assets/og-story-mode.jpg` | 1200x630, ~48KB |
| Video Gen Queue | `assets/og-video-gen-queue.jpg` | 1200x630, ~54KB |
| Stream Capture | `assets/og-stream-capture.jpg` | 1200x630, ~82KB |
| Project Download | `assets/og-project-download.jpg` | 1200x630, ~53KB |

## SEO Improvements Log

### Completed (2026-03-22)

- **Title optimization**: Removed version numbers from homepage titles (EN, zh-TW), added keyword-rich descriptive titles with "Chrome Extension" / "Chrome 擴充功能"
- **Image alt text**: Improved all 8 feature image alt texts across 4 languages (32 total) — from generic names to descriptive, keyword-rich alt text
- **404.html fix**: Changed `lang="zh-TW"` → `lang="en"`, translated all UI text to English (was hardcoded Chinese on an English-path page)
- **Nav fallback completion**: All 40 HTML pages now have complete static fallback nav (7 links) inside `<div id="header-placeholder">` — visible to Googlebot even without JS
- **Footer fallback**: All 40 HTML pages now have simplified footer fallback (Privacy Policy + Terms of Service + copyright) inside `<div id="footer-placeholder">`

### Previously Completed

- Tailwind CDN → static compiled CSS (`css/styles.css`)
- FAQPage schema (18 Q&A pairs × 4 languages)
- CWS description backlinks to marketing site
- Static fallback nav initial implementation (commit `3756eff`)

## Known SEO Issues (as of 2026-03-22)

- **GSC: 0 pages indexed** — All pages show "Crawled - currently not indexed"
- Likely causes: low domain authority (new domain), insufficient external backlinks
- **Next steps**: Request indexing in GSC for key pages, build external backlinks, monitor weekly
- **Navigation SEO**: Header/footer loaded via JS `fetch()` in `loadComponents()` — mitigated by static fallback nav/footer in placeholder divs

## Sitemap Priority Guide

| Page Type | Priority | Change Frequency |
|-----------|----------|-----------------|
| Homepage | `1.0` | weekly |
| Feature pages (story-mode, video-gen-queue) | `0.8–0.9` | weekly |
| Pricing | `0.7–0.8` | monthly |
| FAQ | `0.6–0.7` | monthly |
| Legal (privacy, terms) | `0.3` | yearly |
