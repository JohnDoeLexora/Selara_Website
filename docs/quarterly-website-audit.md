# Quarterly website audit — selara.app

Recurring maintenance checklist for the Selara marketing site. Run once per quarter (Q1–Q4). **Owner:** Zachary Cohen. **Timebox:** ~2 hours.

Cross-references:
- [Performance budget](./performance-budget.md)
- [Image guidelines](./image-guidelines.md)
- [A/B testing process](./ab-testing-process.md)
- [Email sequence process](./email-sequence-process.md)
- [Editorial calendar](./editorial-calendar.md)

---

## Cadence & ownership

| Quarter | Target week | Owner | Status |
|---------|-------------|-------|--------|
| Q1 | First full week of January | Zachary Cohen | ☐ |
| Q2 | First full week of April | Zachary Cohen | ☐ |
| Q3 | First full week of July | Zachary Cohen | ☐ |
| Q4 | First full week of October | Zachary Cohen | ☐ |

Set a recurring calendar reminder titled **“Selara website quarterly audit”** with a link to this file.

---

## 1. Performance (Core Web Vitals)

Compare against targets in [performance-budget.md](./performance-budget.md):

- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on `/`, `/pricing`, `/download`
- [ ] LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms on mobile and desktop
- [ ] Confirm hero logo still uses `priority`; below-fold images lazy-load
- [ ] Check `@vercel/speed-insights` dashboard if deployed on Vercel
- [ ] Review bundle: no accidental heavy imports on the home page

---

## 2. Accessibility (WCAG AA+)

- [ ] Lighthouse accessibility score ≥ 95 on home and `/pricing`
- [ ] Keyboard tab through nav, FAQ accordions, lead capture form, help search
- [ ] Visible focus rings on buttons and links (especially `.primaryButton`, `.secondaryButton`)
- [ ] Color contrast in light and dark mode (`data-theme`)
- [ ] Screen reader spot-check: hero, one capability page, one insights article
- [ ] All form inputs have associated `<label>` elements

---

## 3. SEO & discoverability

- [ ] `app/sitemap.ts` includes all `seoPages`, stories, help articles, and insights posts
- [ ] Each page has unique `title` and `description` via `createMetadata` / `getPageMetadata`
- [ ] [Google Search Console](https://search.google.com/search-console) — no new crawl errors
- [ ] `app/robots.ts` allows indexing of public marketing routes
- [ ] Canonical URLs resolve to `NEXT_PUBLIC_SITE_URL` (no www/non-www drift)
- [ ] `/insights/rss.xml` returns valid RSS
- [ ] Structured data validates (Organization, FAQPage, BlogPosting) via [Rich Results Test](https://search.google.com/test/rich-results)

---

## 4. Content freshness

- [ ] Home FAQ (`lib/site-data.ts` `faqs`) reflects current product capabilities and tiers
- [ ] Pricing copy matches app plans (Select, Premium, Pinnacle)
- [ ] Testimonials / success stories (`lib/case-studies.ts`) — add or refresh if new beta feedback exists
- [ ] Help center articles (`lib/help-articles.ts`) match current app flows
- [ ] Insights posts (`lib/insights-posts.ts`) — publish at least one new article per quarter if possible
- [ ] Legal pages (`lib/legal.ts`, `/privacy`, `/terms`) reviewed for accuracy
- [ ] Press kit assets (`/press`) and founder bio current
- [ ] Comparison pages (`/vs-*`) still accurate vs competitors

---

## 5. Analytics & conversion

- [ ] Plausible dashboard: review `cta_click`, `consent_accept`, `scroll_depth` trends
- [ ] Funnels documented in `lib/analytics.ts` still configured in Plausible
- [ ] Active A/B experiments (`lib/experiments.ts`) — conclude or extend; document in [ab-testing-process.md](./ab-testing-process.md)
- [ ] Lead magnet (`/guide`) webhook (`LEAD_MAGNET_WEBHOOK_URL`) receiving submissions
- [ ] Beta email sequences (`lib/email-sequences.ts`) copy matches product; ESP automations healthy per [email-sequence-process.md](./email-sequence-process.md)
- [ ] Conversion banner and referral section performance (`conversionBanner`, `/invite`)

---

## 6. Security & dependencies

- [ ] Security headers in `next.config.ts` — run [securityheaders.com](https://securityheaders.com) on production URL
- [ ] `npm audit` — address high/critical vulnerabilities
- [ ] No secrets in client bundles (`NEXT_PUBLIC_*` only for public values)
- [ ] Sentry (`NEXT_PUBLIC_SENTRY_DSN`) receiving errors if enabled
- [ ] Cookie consent banner (`components/consent-banner.tsx`) still links to `/privacy`

---

## 7. Broken links & routes

- [ ] Smoke-test all nav and footer links
- [ ] External links: TestFlight/beta URL, social links, Stripe checkout URLs
- [ ] Optional: `npx linkinator https://selara.app --recurse --skip www.google.com`
- [ ] 404 page renders for unknown routes

---

## 8. Sign-off

| Check | Pass | Notes |
|-------|------|-------|
| Performance | ☐ | |
| Accessibility | ☐ | |
| SEO | ☐ | |
| Content | ☐ | |
| Analytics | ☐ | |
| Security | ☐ | |
| Links | ☐ | |

**Completed by:** _______________ **Date:** _______________

**Top 3 actions for next quarter:**
1.
2.
3.
