---
globs: ["assets/**", "resize-images.sh", "compress-video.sh"]
---

# Asset Management Rules

## Image Naming Convention

- Feature images: `assets/feat-{feature-name}.jpg` (originals)
- Resized versions: `assets/resized/feat-{feature-name}_{width}x{height}.jpg`
- Generated sizes: `1280x800` and `640x400` (16:10 aspect ratio)
- Posters: `assets/{feature-name}-poster.jpg`
- Promo images (Chrome Web Store): `assets/{Name}.png`

## Adding a New Feature Screenshot

1. Save the original screenshot as `assets/feat-{name}.jpg`
2. Run `./resize-images.sh` — it will auto-detect and process all `feat-*.jpg` files
3. Reference the resized version in HTML: `assets/resized/feat-{name}_1280x800.jpg` or `_640x400.jpg`
4. **Never** reference original full-size images in HTML — always use the `/resized/` versions

## Video Compression

```bash
# Default (medium quality, CRF 24, 128k audio)
./compress-video.sh assets/my-video.mp4

# High quality (CRF 20, 192k audio)
./compress-video.sh assets/my-video.mp4 high

# Low quality / smaller file (CRF 28, 96k audio)
./compress-video.sh assets/my-video.mp4 low
```

- Codec: H.264 (libx264), medium preset
- Audio: AAC
- Output includes `-faststart` flag for web streaming

## Current Asset Inventory

- **Feature images**: 8 (feat-generate-list, feat-date-filter, feat-export-import, feat-hd-upgrade, feat-stream-capture, feat-story-mode, feat-video-gen-queue, feat-project-download)
- **Demo videos**: 4 (story-mode-demo, stream-capture-demo, project-download-demo, video-gen-queue)
- **Resized images**: 21 files in `assets/resized/`
