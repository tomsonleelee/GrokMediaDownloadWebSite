---
globs: ["sitemap.xml", "robots.txt", "*.html", "zh-TW/*.html", "ja/*.html"]
---

# SEO Rules

## Every Page Must Have

1. `<title>` — unique, descriptive, includes "GrokMediaDownloader"
2. `<meta name="description">` — unique per page, under 160 chars
3. `<link rel="canonical">` — absolute URL to the current page
4. `<meta property="og:*">` — Open Graph tags (title, description, image, url)
5. `<link rel="alternate" hreflang="...">` — all three language versions + `x-default`
6. **Body text in the correct language** — hardcoded, no JS dependency

## hreflang Template

Every page needs this set of hreflang links (adjust paths per page):

```html
<link rel="alternate" hreflang="en" href="https://grokmedia.kario-studio.com/{page}" />
<link rel="alternate" hreflang="zh-TW" href="https://grokmedia.kario-studio.com/zh-TW/{page}" />
<link rel="alternate" hreflang="ja" href="https://grokmedia.kario-studio.com/ja/{page}" />
<link rel="alternate" hreflang="x-default" href="https://grokmedia.kario-studio.com/{page}" />
```

`x-default` always points to the English (root) version.

## Adding a New Page — SEO Checklist

1. Create all three language versions (root EN, `/zh-TW/`, `/ja/`)
2. **Hardcode body text** in the correct language for each version
3. Add unique `<title>`, `<meta description>`, `<link canonical>` per version
4. Add hreflang links to all three versions
5. Add Open Graph meta tags
6. Update `sitemap.xml`:
   - Add `<url>` entry for each language version (3 entries)
   - Include `<xhtml:link rel="alternate" hreflang="...">` in each entry
   - Set appropriate `<priority>` and `<changefreq>`
7. Add Schema.org structured data if applicable (see below)
8. Update navigation in all 3 header components (`header.html`, `header-zh-TW.html`, `header-ja.html`)

## Schema.org Types Used

| Schema Type | Used On | Purpose |
|-------------|---------|---------|
| `SoftwareApplication` | Homepage | Product details, ratings, publisher |
| `WebSite` | Homepage | Site identity, languages |
| `BreadcrumbList` | Homepage | Navigation breadcrumbs |
| `VideoObject` | Homepage | Demo video metadata |

## Sitemap Priority Guide

| Page Type | Priority | Change Frequency |
|-----------|----------|-----------------|
| Homepage | `1.0` | weekly |
| Feature pages (story-mode, video-gen-queue) | `0.8–0.9` | weekly |
| Pricing | `0.7–0.8` | monthly |
| FAQ | `0.6–0.7` | monthly |
| Legal (privacy, terms) | `0.3` | yearly |
