# Performance budget — selara.app

This document defines Core Web Vitals targets, asset strategies, and caching expectations for the Selara marketing site.

## Core Web Vitals targets

| Metric | Target | Notes |
|--------|--------|-------|
| **LCP** (Largest Contentful Paint) | **< 2.5s** | Hero copy and header logo are the primary LCP candidates. Only the above-fold brand logo uses `priority`; product screenshots lazy-load. |
| **CLS** (Cumulative Layout Shift) | **< 0.1** | Fixed-size theme toggle (44×44px), CSS-driven icon swap tied to `data-theme`, no mount-time placeholder swap. Image slots reserve aspect-ratio space in CSS. |
| **INP** (Interaction to Next Paint) | **< 200ms** | Below-fold `framer-motion` sections are code-split via `next/dynamic` on the home page. `prefers-reduced-motion` disables animations. |

Measure in production with [PageSpeed Insights](https://pagespeed.web.dev/) or Chrome UX Report after deploy.

## Font strategy

Fonts are loaded via `next/font/google` in `app/layout.tsx`:

- **Fraunces** — display/headings (`--font-fraunces`)
- **DM Sans** — body/UI (`--font-dm-sans`)

Both use:

- `subsets: ['latin']` — only Latin glyphs shipped
- `display: 'swap'` — fallback text visible immediately; webfont swaps in without blocking render

No additional `@font-face` declarations or third-party font CDNs.

## Image strategy

Configured in `next.config.ts`:

```ts
images: { formats: ['image/avif', 'image/webp'] }
```

Next.js Image Optimization serves **AVIF** first, then **WebP**, then the source format.

### Loading rules

| Asset | Loading | Rationale |
|-------|---------|-----------|
| Header logo (`/images/selara-logo.png`) | `priority` | Above-fold, in every page shell |
| Hero / product screenshots (`SlotImage`) | `loading="lazy"` (default) | Below-fold or decorative; avoids competing with LCP |
| SVG press assets | `unoptimized` | Vector; no raster pipeline needed |

`SlotImage` explicitly sets `loading="lazy"` when `priority` is not passed.

## JavaScript bundling

- **`components/sections-motion.tsx`** — client bundle for `framer-motion` sections (Hero, grids, showcases).
- **Home page (`app/page.tsx`)** — below-fold motion sections (`WhoThisIsFor`, `StoryGrid`, `ApprovalShowcase`, `FeatureCards`, `PricingGrid`) are dynamically imported to defer `framer-motion` parse/execute until needed.
- **Hero** stays in the initial bundle (above-fold, first paint).

## Theme toggle (CLS)

The inline script in `app/layout.tsx` sets `data-theme` before first paint. The toggle renders both sun/moon icons; CSS hides the inactive icon via `[data-theme]` selectors — no hydration placeholder or icon swap on mount.

## Caching headers

Explicit `Cache-Control` rules in `next.config.ts` `headers()`:

| Path | Policy |
|------|--------|
| `/_next/static/*` | `public, max-age=31536000, immutable` |
| `/images/*` | `public, max-age=86400, stale-while-revalidate=604800` |
| `/press/*` | `public, max-age=86400, stale-while-revalidate=604800` |

Applies on Vercel, Firebase App Hosting, and any Next.js-compatible host.

## Package import optimization

`next.config.ts` sets `experimental.optimizePackageImports` for `framer-motion` and `lucide-react` to tree-shake icon and motion modules.

## Site search bundle

`components/site-search.tsx` is dynamically imported in `site-shell.tsx` (`ssr: false`) so the command palette does not inflate the initial JS payload.

## Monitoring alerts

| Signal | Source | When it fires |
|--------|--------|---------------|
| Web Vitals (LCP, CLS, INP, FCP, TTFB) | Sentry breadcrumbs via `lib/monitoring.ts` | After consent + `NEXT_PUBLIC_SENTRY_DSN` |
| Real-user performance | Vercel Speed Insights | After consent (`@vercel/speed-insights`) |
| JS errors | Sentry `captureException` | Uncaught errors + unhandled rejections |

**Alert setup (production):** Configure Sentry alert rules for error rate spikes. Review Web Vitals breadcrumbs weekly during [quarterly website audit](./quarterly-website-audit.md). Run PageSpeed Insights after major layout changes.

## Firebase App Hosting — caching notes

Deployed via Firebase App Hosting (`apphosting.yaml`, `firebase.json`).

- **SSR / ISR pages** — App Hosting runs the Next.js server (512 MiB, concurrency 80). HTML is generated per request or from Next.js cache; not served as long-lived static files at the edge by default.
- **`/_next/static/*`** — content-hashed build assets (JS/CSS chunks). Safe for **immutable** long-term caching (`Cache-Control: public, max-age=31536000, immutable`). App Hosting / the Next.js adapter applies this automatically for hashed static files.
- **`/images/*`, `/press/*`** — public folder assets. Rely on CDN edge caching; bump filenames or use cache-busting when replacing screenshots.
- **Security headers** — defined in `next.config.ts` (`HSTS`, `CSP`, `X-Frame-Options`, etc.) and applied to all routes via `headers()`.
- **Cold starts** — `minInstances: 0` in `apphosting.yaml` allows scale-to-zero; first request after idle may add latency. Raise `minInstances` if LCP regression is observed in production.

## Verification checklist

- [x] `npm run build` passes
- [x] Immutable cache headers on `/_next/static/*`
- [x] Public asset cache on `/images/*` and `/press/*`
- [x] `optimizePackageImports` for framer-motion and lucide-react
- [x] Site search palette code-split (dynamic import)
- [x] No `priority` on images except header logo
- [x] `prefers-reduced-motion: reduce` disables motion transforms
- [ ] PageSpeed mobile LCP < 2.5s on `/` (verify post-deploy)
- [ ] CLS < 0.1 on `/` (verify post-deploy)

## Related files

- `app/layout.tsx` — fonts, theme bootstrap script
- `next.config.ts` — image formats, security headers, cache headers, optimizePackageImports
- `components/site-shell.tsx` — priority logo
- `components/slot-image.tsx` — lazy loading defaults
- `components/sections-motion.tsx` — motion client bundle
- `app/page.tsx` — dynamic imports for below-fold sections
- `apphosting.yaml` — App Hosting runtime config
