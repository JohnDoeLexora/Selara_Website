# Selara.app Overhaul Map — Launch Implementation Spec (v4)

**Prepared for:** Implementation agents  
**Target Window:** Open beta public link drops in ~1 week  
**Core Rule:** The site must feel like a finished, premium product the day the link goes live. Write and design **as if the open beta is the real product today**.

**Important:** This document now contains **specific, actionable changes per page** — both content/messaging **and** aesthetics/layout/visual improvements.

**Status key:** ✅ Done · 🟡 Partial · ⬜ Not started

---

## 0. Implementation Status

**Last updated:** 2026-05-30 — Chunk 3 (home `WhoThisIsFor` + `.env.example`).  
**Verified:** `npm run build` passes.

### Chunk 3 — Completed (launch polish)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Home “Who this is for” | ✅ | `WhoThisIsFor` + `audienceProfiles`; section immediately after hero. |

### Chunk 2 — Completed (bottom-up overhaul)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | `/vs-openclaw` visual polish | ✅ | `comparisonSectionFrame` + editorial table; `OpenClawContrastVisual`; mobile labeled rows. |
| 2 | `/features` dedupe + hub moment | ✅ | No `StoryGrid`/`ProductRunway`; `DeepPageMoment` + `featuresHub` slot. |
| 3 | Deep page image slots + moments | ✅ | `deepCalendar` … `deepPrivacy` + `DeepPageMoment` on 5 deep routes. |
| 4 | FeatureGrid polish | ✅ | Hover lift, focus ring, link hover in `globals.css`. |
| 5 | Footer aesthetics | ✅ | More breathing room, refined divider/gradient, smaller headline scale. |
| 6 | Launch env documentation | ✅ | `.env.example` only — **setting the real URL at deploy is still open** (see Still open). |

### Chunk 1 — Completed (Section 6, items 1–10)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Wire TestFlight to all primary CTAs | 🟡 | All primary CTAs use `betaUrl` (`NEXT_PUBLIC_BETA_URL`, fallback `/download`). Set env at deploy. See `.env.example`. |
| 2 | Create `/future` page | ✅ | Hero + one supporting section, `FutureVisualSlot`, `CTASection`, SEO in `seoPages`, nav + footer links, `.pageHeroFuture` styling. |
| 3 | Nav + global CTAs/labels | ✅ | "Open Beta" everywhere; Future in nav; active-route styling (`nav-links.tsx`); Integrations/Vs OpenClaw demoted to footer secondary columns. |
| 4 | Home hero + key sections | ✅ | Hero + `WhoThisIsFor` + StoryGrid + ApprovalShowcase + FeatureCards + pricing/FAQ + FutureTeaser + CTA. |
| 5 | Pricing page | ✅ | Outcome-led copy, annual savings badges, card elevation, feature list styling, section frame, Pinnacle callout + mailto, beta value in hero. |
| 6 | Highest-visibility image slots | 🟡 | `imageSlots` in `lib/site-data.ts`; `// IMAGE SLOT:` in `sections.tsx` for hero, approval, `/future`, download preview. Placeholders until PNGs in `public/images/real-app/`. |
| 7 | OpenClaw contrast language | ✅ | Home `ApprovalShowcase`; `/vs-openclaw` intro + editorial table + contrast visual. |
| 8 | Improve `/download` | ✅ | `ProductRunway` removed; live-beta copy; premium Ready cards; links to `/pricing` + `/future`; SEO → "Open Beta". |
| 9 | Global spacing + hierarchy | ✅ | Section padding 128px / 96px mobile; story card polish; shared card treatments. |
| 10 | CTASection refresh | ✅ | Copy + stronger container (border, padding, typography hierarchy, button weight). |

**Strongly recommended (same chunk):**
- Mobile experience polish — ✅ Open Beta CTA prominent in mobile panel + hero; scrim blur; full-width primary CTA ≤760px.

**Current home section order:** Hero → Who it's for (`WhoThisIsFor`) → How it works (`StoryGrid`) → Trust (`ApprovalShowcase`) → Core capabilities (`FeatureCards`) → Pricing → FAQ → Future teaser → `CTASection`.

### Still open (other agents / later chunks)

| Area | Status | Notes |
|------|--------|-------|
| **Set `NEXT_PUBLIC_BETA_URL` at deploy** | ⬜ | CTAs wired in code (`betaUrl` → TestFlight when set; else `/download`). Copy `.env.example` → `.env.local` / Vercel env and paste the **public** TestFlight link before the beta drops. |
| Deep pages (`/features`, `/calendar-assistant`, etc.) | ✅ | Chunk 2: `/features` deduped; `DeepPageMoment` + 5 per-page slots wired. |
| `/vs-openclaw` visual polish | ✅ | Editorial comparison table + `OpenClawContrastVisual`. |
| `/integrations` page overhaul | ⬜ | Lower priority. |
| Real screenshots | ⬜ | Drop named files per `public/images/real-app/DROP_INSTRUCTIONS.md`; point `imageSlots.*.placeholder` at `target` when ready. |
| Pricing page product UI slot | ⬜ | Optional per spec Section 5 #4. |
| Home “who this is for” | ✅ | `WhoThisIsFor` section after hero; `audienceProfiles` in `site-data.ts`. |

### Key files touched in Chunk 3

- `lib/site-data.ts` — `audienceProfiles`
- `components/sections.tsx` — `WhoThisIsFor`
- `app/page.tsx`, `app/globals.css`, `.env.example`

### Key files touched in Chunk 2

- `lib/site-data.ts` — `deepPageMoments`, `featuresHub`, deep-page `imageSlots` keys
- `components/sections.tsx` — `DeepPageMoment`, `OpenClawContrastVisual`, editorial `ComparisonTable`
- `app/vs-openclaw/page.tsx`, `app/features/page.tsx`, `app/globals.css`, `.env.example`
- Deep routes: `calendar-assistant`, `voice-assistant`, `email-assistant`, `ai-automations`, `privacy-first-ai-assistant`
- `components/sections.tsx` — `DeepPageMoment`
- `app/features/page.tsx`, `app/calendar-assistant/page.tsx`, `app/voice-assistant/page.tsx`, `app/email-assistant/page.tsx`, `app/ai-automations/page.tsx`, `app/privacy-first-ai-assistant/page.tsx`
- `app/globals.css` — `.deepPageMoment`, `.featureCardExpanded` polish

### Key files touched in Chunk 1

- `lib/site-data.ts` — `imageSlots`, `proofPoints`, `futureTeaser`, `approvalTrustCopy`, `openClawIntro`, `pricingBetaNote`, pricing copy, `seoPages`
- `components/site-shell.tsx`, `components/nav-links.tsx`, `components/mobile-nav.tsx`
- `components/sections.tsx` — Hero, ApprovalShowcase, FutureTeaser, FutureVisualSlot, DownloadPreview, PricingGrid, PinnacleCallout, CTASection
- `app/page.tsx`, `app/pricing/page.tsx`, `app/future/page.tsx`, `app/download/page.tsx`, `app/vs-openclaw/page.tsx`
- `app/globals.css`

---

## 1. Role Clarity

- PM scope = this markdown only.
- All implementation (code, copy, layout, image slots) will be done by other agents following this spec.
- The goal is for this document to be detailed enough that agents can execute with minimal additional questions.

---

## 2. Launch Non-Negotiables

- Primary CTAs = direct link to public TestFlight (no forms on the main path).
- Real screenshots will be added later. Design must accommodate clean image swaps.
- Tone: Professional premium AI concierge for lawyers, doctors, executives, and high-earning professionals. Calm, polished, restrained.
- No "coming soon" language for the core beta experience.

---

## 3. Global Aesthetic & Layout Principles (Apply Across All Pages)

These rules must be respected during the overhaul:

- Preserve the existing premium direction (Fraunces + DM Sans, glassmorphism, halos, generous spacing, restrained motion).
- Improve visual hierarchy and breathing room — current sections sometimes feel dense.
- Image treatment: All product screenshots should feel like they belong in a premium product, not marketing assets. Use consistent framing, subtle device bezels only where they add value, and excellent alt text.
- When real screenshots arrive, they should feel like the hero of the page, not decoration.
- Reduce repetition: The current site re-uses the same approval flow and "how it works" blocks too many times. Consolidate.
- Mobile: Ensure the experience feels as premium on mobile as desktop (current mobile nav is functional but can feel secondary).
- Temporary placeholders: While waiting for real screenshots, use clean, minimal, high-quality placeholders that still look intentional (not "broken" or "under construction").

**Specific global tasks:**
- ✅ Audit and improve spacing scale (especially section padding and component internal spacing).
- 🟡 Standardize card and section treatments for better consistency.
- ✅ Improve button hierarchy and states (primary/secondary) to feel more luxurious.
- ✅ Add better focus and hover states that match the premium tone.

---

## 4. Page-by-Page Specific Changes

**Important:** Every page in this section explicitly contains **two separate tracks**:

- **Content & Messaging Changes** — what to say, what to emphasize, new copy direction, positioning language.
- **Aesthetics & Layout Improvements (Specific)** — concrete visual, spacing, hierarchy, component, image treatment, and layout changes.

This split exists so implementation agents know exactly what to change on the words *and* on the visuals for each page.

### Home (Highest priority page) — 🟡 Chunk 1 mostly done

**Overall Goal on Launch Day:**
A high-earning professional should land here and immediately feel: "This is the serious, calm, premium option — not another chaotic agent."

#### Content & Messaging Changes
- ✅ Rewrite hero lead to: "The premium AI concierge for professionals. Voice, approvals, calendar intelligence, and memory — live now in open beta."
- ✅ Replace current proof points with tighter, outcome-focused language aimed at lawyers/doctors/executives.
- ✅ Reduce the number of sections from the current long scroll. Target 6–7 strong sections max for launch. *(Now 8 blocks: Hero + StoryGrid + ApprovalShowcase + FeatureCards + PricingGrid + FaqList + FutureTeaser + CTASection — pricing/FAQ kept on home for conversion.)*
- ✅ In the trust/approval section: Lightly reference 1–2 real OpenClaw disasters (Summer Yue email deletion, Claire Vo calendar wipe) using elegant, restrained language.
- ✅ Add a clear "Who this is for" signal early (without making it a marketing cliché). `WhoThisIsFor` + `audienceProfiles` after hero.
- ✅ Add a subtle /future teaser near the bottom.
- ✅ Final CTA should feel like the capstone (direct Open Beta button + secondary "See plans").

#### Aesthetics & Layout Improvements (Specific)
- **Hero** — ✅ Chunk 1:
  - ✅ Tighten vertical rhythm and reduce unnecessary whitespace above the fold.
  - ✅ Make the two showcase product windows feel more intentional and less like demo screenshots. Soften or remove the "Live conversation" labels.
  - ✅ Improve the blue/gold halo treatments so they feel more sophisticated rather than decorative.
  - ✅ Better glassmorphism / surface treatment on the hero windows.
- **Image slots** (Critical) — 🟡 structure done, real files pending:
  - ✅ Convert the primary hero image to a proper slot expecting `hero-main-chat.png`.
  - ✅ Convert the secondary hero image to a proper slot expecting `calendar-intelligence.png`.
  - ✅ Define clean, consistent container sizes and aspect ratios now so swapping in real screenshots later causes zero layout shift.
  - ✅ Add very clear `// IMAGE SLOT:` comments with the exact filename.
  - ⬜ Swap placeholders → `public/images/real-app/*.png` when screenshots are dropped.
- **Section spacing & rhythm** — ✅:
  - ✅ Increase breathing room between major sections (128px desktop / 96px mobile).
  - ✅ Standardize section top/bottom padding across the page.
  - ✅ Reduce the number of heavy sections — aim for more white space and fewer competing blocks.
- **Proof / Story / How it works cards** — ✅:
  - ✅ Make the 4-step cards feel significantly more premium (better subtle borders or elevation, improved typography scale, more generous internal padding).
  - ✅ Reduce the visual heaviness of the numbered steps.
- **Repetition cleanup (visual + structural)** — ✅:
  - ✅ Removed from home: IntegrationTicker, ProductRunway, inline ComparisonTable (full table on `/vs-openclaw` only). Pricing + FAQ remain on home and `/pricing`.
- **Mobile** — ✅:
  - ✅ Improve hero stacking and make the primary "Open Beta" button much more prominent on small screens.
  - ✅ Ensure all new image slots have good responsive behavior.

**Files to focus on:** `app/page.tsx`, `components/sections.tsx` (Hero, StoryGrid, ApprovalShowcase, FutureTeaser, PricingGrid, CTASection).

---

### Pricing (Critical conversion page) — ✅ Chunk 1 done

> No product UI image slot yet (Section 5 #4 optional).

**Overall Goal:**
Make choosing a plan feel like selecting a high-end professional service, not comparing SaaS feature tables.

#### Content & Messaging Changes
- ✅ Rewrite tier descriptions to lead with outcomes for professionals ("Protect your reputation and focus", "Shared context with spouse or key team member", etc.).
- ✅ Add strong day-one beta value messaging ("Full concierge experience available in the open beta today").
- ✅ Make the annual savings more visually prominent.
- 🟡 Clarify the upgrade path from beta → paid. *(Intro mentions upgrade when ready; could add explicit beta→paid line on page.)*
- ✅ Add a small "Pinnacle is for teams and households" callout with a soft "Talk to us" path if relevant.

#### Aesthetics & Layout Improvements (Specific)
- **Pricing cards redesign** — ✅:
  - ✅ Give the featured (Premium) card stronger elevation, better border, and a more luxurious background treatment.
  - ✅ Improve visual separation between the monthly price, annual price, and savings line.
  - ✅ Make the feature lists feel higher quality — better spacing, subtle dividers or small icons instead of plain bullets.
  - ✅ Redesign the "Most popular" badge to feel more premium and less generic.
- ✅ Increase internal padding and breathing room significantly inside the cards.
- ✅ Add better section framing around the whole pricing grid so the area feels special rather than just three cards sitting on the page.
- 🟡 **Mobile**: Ensure the stacked cards still feel premium (good spacing, no cramping, clear visual hierarchy). *(Desktop-first pass done; worth a visual QA pass on small screens.)*
- ✅ Overall grid and surrounding layout should feel more intentional and less "SaaS table".

**Files to focus on:** `app/pricing/page.tsx`, `components/sections.tsx` (PricingGrid), `globals.css` (pricing card styles).

---

### /future (New page — must create) — ✅ Chunk 1 done

**Overall Goal:**
Light, inspiring, high-level vision page that shows ambition without over-promising.

#### Content & Messaging Changes
- ✅ Use this exact direction (high-level only):
  "Selara is built to be your personal assistant everywhere — starting on iOS today, with Mac, browser, Watch, and deeper ecosystem surfaces coming soon."
- ✅ Keep it short: One strong hero + 1–2 supporting sections max. *(One supporting section + CTASection.)*
- ✅ No fake timelines. No detailed feature lists for future products.
- ✅ End with a soft tie-back to the current open beta.

#### Aesthetics & Layout Improvements (Specific)
- ✅ Make this page feel calmer and more editorial than the others (slightly more whitespace, more restrained use of halos).
- ✅ Use a single strong, conceptual visual (or elegant placeholder) rather than multiple product screenshots. *( `FutureVisualSlot` → `future-ecosystem.png` )*
- ✅ Typography should feel especially premium here — consider slightly larger display sizes for the main vision statement.
- ✅ Keep the overall shell and component system consistent, but allow this page to feel a bit more spacious and thoughtful.

**Files:** `app/future/page.tsx` ✅ · navigation ✅ · footer ✅ · `seoPages` ✅

---

### /download (Support page for the direct link) — ✅ Chunk 1 done

**Overall Goal:**
When someone arrives here (either via direct link or curiosity), it should feel like a high-quality, reassuring experience that explains what they're about to get.

#### Content & Messaging Changes
- ✅ Shift language from "join the beta" to "the open beta is live — here's what you get on day one."
- ✅ List the real, solid capabilities available today (voice + plan + approval, calendar intelligence, travel, documents, memory, etc.) — pulled from the actual app README.
- ✅ Set honest expectations without sounding defensive.
- ✅ Strong secondary CTAs to pricing and /future.

#### Aesthetics & Layout Improvements (Specific)
- ✅ This page currently re-uses too much from the home (ProductRunway, etc.). Make it feel distinct and lighter.
- ✅ Improve the two-column "Ready?" section — make the cards feel more premium.
- ✅ Better visual treatment around the primary "Open Beta" button (make it the clear star of the page).
- ✅ Reduce repetition of the sidebar/settings screenshots if they appear here — either remove or turn into proper slots with better context.
- ✅ Overall: Make the page feel more "this is the real thing" and less "marketing for something coming".

**Files to focus on:** `app/download/page.tsx`, shared components.

---

### /features + Deep Pages (/calendar, /voice, /automations, /privacy-control) — ✅ Chunk 2 done

> **Status (2026-05-30):** `DeepPageMoment`, per-page `imageSlots`, `/features` dedupe, FeatureGrid polish complete.

**Overall Goal for Launch:**
Support the main positioning. Do not try to be exhaustive documentation.

#### Content & Messaging Changes
- ✅ Lead every page with the concierge/professional outcome angle rather than feature lists.
- ✅ Use the existing FeatureGrid component but tighten the copy to the target audience.
- ✅ On deep pages, add one strong "This is what approval-first looks like here" moment (with image slot).

#### Aesthetics & Layout Improvements (Specific)
- ✅ These pages currently feel quite repetitive with the home. Reduce duplicated sections.
- ✅ Improve the feature cards visually (better hover, clearer hierarchy inside cards, consistent icon treatment if any are added).
- ✅ Image slots: Add at least one high-quality image slot per deep page (e.g. calendar view on /calendar, voice flow on /voice).
- ✅ Spacing and section rhythm should match the improved home standard.

**Files:** `app/features/page.tsx` and the individual deep pages.

---

### /vs-openclaw (Include if time — lower priority) — ✅ Chunk 2 done

> **Status (2026-05-30):** Editorial `ComparisonTable`, `OpenClawContrastVisual`, contrast panel CSS; copy unchanged.

**Overall Goal:**
Elegant category contrast, not a joke or aggressive takedown.

#### Content & Messaging Changes
- ✅ Lightly introduce OpenClaw as an example of powerful but chaotic agents.
- ✅ Use 1–2 real disasters (Summer Yue, Claire Vo) as evidence.
- ✅ Clearly contrast: raw speed and autonomy vs. calm, visible, approval-first control for serious professionals.

#### Aesthetics & Layout Improvements (Specific)
- ✅ Make the comparison table feel more premium (better typography, subtle dividers, not just a plain grid).
- ✅ Avoid making it look like a marketing "us vs them" table — lean editorial.
- ✅ Add one strong visual moment that reinforces the "calm vs chaotic" feeling (`OpenClawContrastVisual` + approval-flow slot).

---

### Global Elements (Nav, Footer, CTASection, etc.) — ✅ Chunk 1 + Chunk 2 footer done

**Specific changes:**

**Navigation (Content + Visual):**
- ✅ Change label from "Download Beta" → "Open Beta" (content).
- ✅ Add "Future" to primary nav.
- ✅ Remove or move "Vs OpenClaw" and "Integrations" out of the main nav for launch.
- ✅ **Aesthetics**: Make the active nav item more visually distinct. Improve the overall nav bar padding and the "Open Beta" button to feel like the clear primary action (stronger contrast, better hover, slightly larger on desktop).

**Primary "Open Beta" Button (across the whole site):**
- ✅ Content: Consistently use "Open Beta" (not "Download Beta").
- ✅ **Aesthetics**: Increase visual weight. Improve hover/focus states to feel more luxurious. Ensure it stands out strongly on both light and dark themes. On mobile, make it full-width or very prominent in the mobile menu.

**Footer:**
- ✅ Content: Update all labels and descriptive text to the new "professional concierge" tone. Add link to /future.
- ✅ **Aesthetics**: Tighten spacing, improve link hover states, make the overall footer feel less dense and more premium (better alignment, subtle divider treatment).

**CTASection (the large closing block on most pages):**
- ✅ Content: Rewrite headline and body to the live open beta concierge voice (as specified in the Home section).
- ✅ **Aesthetics**: Give the container stronger visual presence (better border or subtle background treatment, more generous internal padding, stronger typography hierarchy). Make the two buttons feel clearly primary vs secondary.

**Mobile Navigation:**
- ✅ Content: Match the new desktop nav labels ("Open Beta", "Future").
- 🟡 **Aesthetics**: Improve the slide-in panel quality — better backdrop blur, smoother animation, clearer tap targets, and make the "Open Beta" button the most visually dominant element in the mobile menu. *(Blur + dominant CTA done; animation polish optional.)*

---

## 5. Image Slot Specifications (Concrete)

For every major product image area, implementation agents must:

1. Create a clean container with the correct aspect ratio for iPhone screenshots (roughly 9:19.5 or similar for modern iPhones).
2. Add a clear comment: `// IMAGE SLOT: filename.png — replace with real screenshot from /public/images/real-app/`
3. Ensure the layout does not break when a real high-quality screenshot is swapped in.
4. Provide graceful temporary treatment (subtle background, elegant loading state, or high-quality current mockup).

Prioritized slots for launch (in order):
1. Home hero primary (chat/voice) — **Done** (placeholder → `hero-main-chat.png`)
2. Home hero secondary (calendar) — **Done** (placeholder → `calendar-intelligence.png`)
3. Main approval flow moment (home or dedicated section) — **Done** (`approval-flow.png` in `ApprovalShowcase`)
4. Pricing page (if showing any product UI) — **Not started**
5. /future page (one conceptual image) — **Done** (`future-ecosystem.png` via `FutureVisualSlot`)
6. Deep pages (one relevant screenshot each) — **Done** (`DeepPageMoment` + 5 slots in `imageSlots`)

Central registry: `lib/site-data.ts` → `imageSlots`. Drop real files in `public/images/real-app/` per `DROP_INSTRUCTIONS.md`.

---

## 6. Prioritized Implementation Order (for ~1 week)

**Before the link can drop:**
1. 🟡 Wire direct TestFlight link to all primary CTAs. — Code wired via `betaUrl`; **set `NEXT_PUBLIC_BETA_URL` before launch.**
2. ✅ Create `/future` page.
3. ✅ Update navigation and global CTAs/labels.
4. 🟡 Rewrite Home hero + key sections (content + image slots + layout breathing room). — Mostly done; dedicated “who this is for” section optional.
5. ✅ Improve Pricing page (content + card aesthetics).
6. 🟡 Convert highest-visibility image areas into proper slots. — Structure done (home, approval, future); real PNG swap + pricing/deep slots pending.
7. ✅ Update OpenClaw contrast language. — Home + `/vs-openclaw` copy and visual polish complete.
8. ✅ Improve /download page.

**Strongly recommended:**
- ✅ Global spacing and hierarchy cleanup. — Main pages (Section 3 tasks largely done).
- ✅ CTASection refresh across the site.
- ✅ Mobile experience polish. — Open Beta prominence, backdrop blur, tap targets, full-width hero CTA on small screens.

**Next recommended chunk for other agents:**
1. ✅ Deep pages + `/features` — dedupe, per-page slots, approval-first moments *(Chunk 2)*
2. ✅ `/vs-openclaw` — premium comparison table + calm-vs-chaotic visual *(Chunk 2)*
3. Real screenshots — drop files in `public/images/real-app/`, point `imageSlots` at `target` paths
4. ⬜ Launch — set `NEXT_PUBLIC_BETA_URL` to public TestFlight (see `.env.example`; still open until deploy)

---

---

## Confirmation: Content + Visual Coverage

**Yes.** 

This document contains **both** for every major page:

- Detailed **Content & Messaging Changes** (what to say, new headlines, tone, positioning language, specific examples).
- Detailed **Aesthetics & Layout Improvements** (spacing, visual hierarchy, card treatments, image slot specifications, button quality, mobile behavior, overall feel, etc.).

The split is explicit on Home, Pricing, /future, /download, deep pages, /vs-openclaw, and Global Elements (nav, buttons, footer, CTASection).

Implementation agents can follow this spec and deliver changes on both the words and the visuals without needing to guess what "better aesthetics" means on any given page.