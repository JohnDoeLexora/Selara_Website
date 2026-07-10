# Editorial calendar — selara.app Insights

Sustained SEO and thought leadership for the `/insights` hub. Copy lives in the repo; publishing rhythm and topic pipeline live here.

Cross-references:
- [Quarterly website audit](./quarterly-website-audit.md)
- [Email sequence process](./email-sequence-process.md)
- [Image guidelines](./image-guidelines.md)
- [Performance budget](./performance-budget.md)

---

## Architecture

| Piece | Location |
|-------|----------|
| Published posts | `lib/insights-posts.ts` → `insightPosts` |
| Insights hub page | `app/insights/page.tsx` |
| Post detail pages | `app/insights/[slug]/page.tsx` |
| RSS feed | `app/insights/rss.xml/route.ts` |
| Sitemap entries | `app/sitemap.ts` (auto from `insightPosts`) |
| Structured data | `components/insights-structured-data.tsx` |
| Categories | `InsightCategoryId`: productivity, ai-ethics, calendar, memory |

**Division of responsibility:** This repo owns essay copy and on-site presentation. Distribution (newsletter, social) is optional and tracked outside the site.

---

## Cadence & ownership

| Rhythm | Target | Owner |
|--------|--------|-------|
| Publish frequency | **1 post every 2 weeks** (biweekly) | Zachary Cohen |
| Quarterly theme | Rotate focus area (see below) | Zachary Cohen |
| Content review | Self-review + spell-check before merge | Zachary Cohen |
| Freshness audit | Q1–Q4 per [quarterly-website-audit.md](./quarterly-website-audit.md) | Zachary Cohen |

Set a recurring calendar reminder titled **“Selara Insights — draft or publish”** every two weeks.

---

## Quarterly themes (2026)

| Quarter | Theme | Focus categories | Example angles |
|---------|-------|------------------|----------------|
| **Q2 2026** | Productivity without chaos | productivity, calendar | Focus blocks, delegation frameworks, calm software habits |
| **Q3 2026** | AI ethics for professionals | ai-ethics, memory | Approval-first design, data boundaries, when not to automate |
| **Q4 2026** | Delegation & calendar mastery | calendar, productivity | Reschedule tradeoffs, EA replacement myths, cross-tool memory |

Each post should include **2–3 internal links** to capability pages (`/calendar-assistant`, `/trust`, comparisons) or `/help` articles.

---

## Topic pipeline (queued)

Status key: **Draft** → **Review** → **Published** (in `insightPosts`)

| # | Title (working) | Category | Target quarter | Internal links |
|---|-----------------|----------|----------------|----------------|
| 1 | Why focus blocks fail without calendar intelligence | calendar | Q2 | `/calendar-assistant`, `/help/protect-focus-blocks` |
| 2 | The three questions before you approve any AI plan | ai-ethics | Q2 | `/how-selara-thinks`, `/trust` |
| 3 | Delegation frameworks for lawyers and litigators | productivity | Q2 | `/calendar-assistant`, `/stories` |
| 4 | What “memory” should mean in a professional assistant | memory | Q2 | `/how-selara-thinks`, `/privacy-first-ai-assistant` |
| 5 | When calendar AI creates more work, not less | calendar | Q3 | `/vs-calendar-ai`, `/calendar-assistant` |
| 6 | No-training-on-your-data: what to ask any AI vendor | ai-ethics | Q3 | `/trust`, `/privacy` |
| 7 | The executive’s guide to rejecting AI plans gracefully | productivity | Q3 | `/vs-executive-assistant`, `/features` |
| 8 | Voice capture vs voice execution — why they must split | memory | Q3 | `/voice-assistant`, `/help/voice-basics` |
| 9 | Building a delegation habit in 30 days | productivity | Q4 | `/guide`, `/download` |
| 10 | Calendar mastery: protecting client-critical windows | calendar | Q4 | `/calendar-assistant`, `/help/protect-focus-blocks` |
| 11 | Generic AI vs approval-first: a decision checklist | ai-ethics | Q4 | `/vs-generic-ai`, `/how-selara-thinks` |
| 12 | How memory compounds when approvals stay visible | memory | Q4 | `/trust`, `/ai-automations` |
| 13 | Calm software as a competitive advantage | productivity | Q4 | `/philosophy`, `/insights/luxury-of-calm-software` |
| 14 | Integrations without anxiety: the approval layer | ai-ethics | Q4 | `/integrations`, `/help/approvals-overview` |

Add rows as ideas surface from beta feedback, support tickets, or Linear product issues.

---

## Publishing workflow

1. **Pick** the next queued title for the current quarterly theme.
2. **Draft** 4–6 paragraphs + optional bullets in plain language (match tone of existing posts in `insightPosts`).
3. **Review** for accuracy, internal links, and meta description length (~150–160 chars).
4. **Implement** in `lib/insights-posts.ts`:
   - `slug`, `title`, `summary`, `category`, `publishedAt`, `readingTimeMinutes`, `body`, `relatedLinks`
5. **Verify** locally: `/insights`, `/insights/[slug]`, RSS at `/insights/rss.xml`.
6. **Ship** — sitemap regenerates on build; no manual sitemap edit unless adding a new route type.
7. **Promote** (optional): link from homepage FAQ, nurture email in `lib/email-sequences.ts`, or social.

---

## SEO & quality checklist (per post)

- [ ] Unique `title` and `summary` (no duplicate meta with other pages)
- [ ] `slug` is kebab-case and stable once published
- [ ] `publishedAt` reflects actual publish date (ISO `YYYY-MM-DD`)
- [ ] `readingTimeMinutes` roughly matches word count ÷ 200
- [ ] At least 2 `relatedLinks` to on-site destinations
- [ ] Category matches `insightCategories` id
- [ ] No broken internal links after deploy

---

## Success metrics

| Metric | Source | Notes |
|--------|--------|-------|
| Organic impressions / clicks | Google Search Console | Filter by `/insights/*` |
| Time on page | Plausible | `/insights` and post URLs |
| Scroll depth | Plausible `scroll_depth` | Home → Insights CTA path |
| Lead magnet conversions | `lead_form_success` | Guide readers from insights CTAs |
| RSS subscribers | Feed analytics (if enabled) | Optional |

Review metrics during each [quarterly website audit](./quarterly-website-audit.md).

---

## Related files

- `lib/insights-posts.ts` — canonical post data
- `app/insights/page.tsx` — hub listing
- `app/insights/[slug]/page.tsx` — article template
- `app/insights/rss.xml/route.ts` — RSS
- `components/insights-structured-data.tsx` — BlogPosting JSON-LD
