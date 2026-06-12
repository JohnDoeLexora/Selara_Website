# A/B testing process — selara.app

Lightweight experiment framework for headlines, CTAs, and pricing presentation. Built in-house on consent-gated Plausible events; upgrade to PostHog or Vercel Edge Config later if statistical rigor is needed.

---

## Architecture

| Piece | Location |
|-------|----------|
| Experiment registry | `lib/experiments.ts` |
| Visitor ID + variant persistence | `lib/experiment-storage.ts` |
| React wrapper | `components/experiment-variant.tsx` |
| Hero integrations | `components/hero-experiments.tsx` |
| Analytics events | `lib/analytics.ts` → `experiment_exposure` |
| Email sequences | `lib/email-sequences.ts` — see [email-sequence-process.md](./email-sequence-process.md) |

### How assignment works

1. On first visit, a `selara-visitor-id` is stored in `localStorage`.
2. Each experiment assigns a variant deterministically: `hash(visitorId + experimentId) % variantCount`.
3. Assignment is stored in `selara_exp_{experimentId}` so the user sees a consistent variant.
4. `experiment_exposure` fires once per session per variant (consent-gated via `canTrack()`).

Variants render immediately; exposure tracking waits for analytics consent.

---

## Active experiments (v1)

### `hero_headline`

Tests `heroLead` copy on the home page.

| Variant | ID | Copy theme |
|---------|-----|------------|
| Control | `control` | Default `heroLead` from `site-data.ts` |
| Approval | `approval` | Approval-first safety |
| Calendar | `calendar` | Calendar intelligence |

### `hero_cta`

Tests primary hero button label.

| Variant | ID | Label |
|---------|-----|-------|
| Control | `control` | Download now |
| Start | `start` | Start free in open beta |

### Planned (not yet wired)

- **Pricing recommended badge** — emphasize Premium tier in `components/pricing-grid.tsx`
- **Pricing card order** — document hypothesis before implementing

---

## Success metrics

| Metric | Plausible event | Notes |
|--------|-----------------|-------|
| Exposure | `experiment_exposure` | Props: `experiment`, `variant`, `page` |
| Primary conversion | `cta_click` where `cta=hero-download` | Funnel from exposure → click |
| Engagement | `scroll_depth` | Home page only |
| Secondary | `pricing_plan_click` | Pricing experiments |

### Suggested Plausible funnels

1. `experiment_exposure` (filter `experiment=hero_headline`) → `cta_click` (`hero-download`)
2. `experiment_exposure` (filter `experiment=hero_cta`) → `cta_click` (`hero-download`)

Plausible does not compute statistical significance automatically. Review weekly during active tests; run each variant for at least 2 weeks or ~500 exposures per variant before concluding.

---

## Adding a new experiment

1. **Define** variants in `lib/experiments.ts` with stable `id` strings.
2. **Wrap** UI in `<ExperimentVariant experimentId="..." variants={{ control: ..., b: ... }} fallback={...} />` or add a dedicated component like `hero-experiments.tsx`.
3. **Track** conversions via existing `data-cta` attributes (auto `cta_click`) or custom `trackEvent` calls.
4. **Document** the hypothesis, start date, and success metric in this file.
5. **Conclude** — pick winner, merge copy into `site-data.ts`, remove or freeze the experiment.

---

## Consent & privacy

- Variant assignment uses `localStorage` (functional, not tracking).
- `experiment_exposure` fires only when `canTrack()` is true (user accepted analytics cookies).
- Do not send PII in experiment event props.

---

## Upgrade path

If manual Plausible review becomes insufficient:

- **PostHog** — feature flags + automatic significance; requires new SDK and consent update
- **Vercel Edge Config** — server-side assignment for zero flicker; pairs with Edge Middleware
- **GrowthBook** — open-source option with warehouse integration

Until then, keep experiments few, documented, and easy to remove.
