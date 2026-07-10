# Selara site — image guidelines

Use this guide when adding hero images, app screenshots, OG assets, or illustrations to the marketing site.

## Alt text formula

**`[What is shown] — [context for Selara capability]`**

Examples:

- `Selara calendar view with AI-assisted scheduling and visible plan before changes land.`
- `Selara approval flow showing a visible plan before any action runs.`

Rules:

- Describe the screen or illustration, not “image of” or “screenshot of”.
- Include the capability (calendar, voice, approvals) when relevant.
- Keep under ~125 characters when possible.
- Never leave decorative images with empty alt unless they are purely ornamental (use `alt=""` only for brand icon in header).

## Filename convention

Place production PNGs in `public/images/real-app/`:

```
selara-{surface}-{action}.png
```

Examples: `hero-main-chat.png`, `calendar-intelligence.png`, `approval-flow.png`.

Legacy placeholders live in `public/images/` until real assets ship. See `public/images/real-app/DROP_INSTRUCTIONS.md`.

## Dimensions

| Asset type | Size | Notes |
|------------|------|-------|
| Hero / marketing | 1200×800 | OG and wide hero slots |
| Phone screenshots | 390×844 (9:19.5) | Matches `.deepPageImageSlot` aspect ratio |
| Logo | 512×512 or SVG | Header uses 42×42 display |
| Press / one-pager | Vector or 2× PNG | `/press/selara-logo.svg` |

## Formats and delivery

- Next.js Image serves **AVIF** and **WebP** automatically (`next.config.ts`).
- Use PNG sources in `imageSlots`; Next.js optimizes at build/runtime.
- SVG placeholders: set `unoptimized` via `SlotImage` (automatic for `.svg` paths).

## Lazy loading vs priority

| When | Setting |
|------|---------|
| Header logo | `priority` |
| Above-the-fold hero on home | Consider `priority` once LCP screenshot exists |
| Deep-page moments, grids, footers | Default lazy via `SlotImage` |
| Print / legal pages | Lazy OK |

## `imageSlots` registry

All marketing images are registered in `lib/site-data.ts` → `imageSlots`. Each slot needs:

- `target` — preferred real-app PNG path
- `placeholder` — fallback until assets land
- `alt` — descriptive alt text per formula above

Use `SlotImage` with `slotKey` — never hardcode paths in components.

## Structured data (future)

When OG images are final, reference them in:

- `createMetadata()` → `ogImage` / `ogImageAlt`
- Optional `ImageObject` in page-level JSON-LD for high-intent routes

## Verification

After adding assets:

1. Confirm files exist at `target` and `placeholder` paths.
2. Run Lighthouse — check LCP element and CLS on `/` and capability pages.
3. Validate alt text with screen reader or axe DevTools.
