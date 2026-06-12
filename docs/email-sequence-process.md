# Email sequence process — selara.app

Beta welcome series and engaged-user nurture flows. Copy lives in the repo; sending and automation live in your ESP (ConvertKit, Buttondown, Resend, etc.).

Cross-references:
- [Quarterly website audit](./quarterly-website-audit.md)
- [A/B testing process](./ab-testing-process.md)

---

## Architecture

| Piece | Location |
|-------|----------|
| Canonical email copy | `lib/email-sequences.ts` |
| Welcome series (5 emails) | `getWelcomeSequence()` — days 0, 2, 5, 9, 14 |
| Nurture series (4 emails) | `getNurtureSequence()` — days 21, 30, 45, 60 |
| Guide lead capture | `components/lead-capture-form.tsx` → `app/api/lead/route.ts` |
| Beta install funnel | `/download` → TestFlight (`NEXT_PUBLIC_BETA_URL`) |
| In-app invite flow | Settings → Invite (explained on `/invite`) |

**Division of responsibility:** This repo owns copy, tags, and webhook payload shapes. Your ESP owns scheduling, delivery, open/click tracking, and unsubscribe handling.

---

## Trigger matrix

| Segment | Trigger | Tags | Sequence |
|---------|---------|------|----------|
| Beta signup | App/backend webhook on first sign-in, or manual ESP import | `beta-user`, `open-beta` | Welcome 5-email series (`beta-welcome`) |
| Guide lead | `LEAD_MAGNET_WEBHOOK_URL` on `/guide` form submit | `lead-magnet`, `guide` | Guide nurture (link to `/guide` content); bridge to welcome if they install |
| Engaged beta | Tag `beta-engaged` applied when 3+ approvals OR 14+ days since signup (app event webhook when available). **Nurture delays use `signedUpAt` as anchor** — `beta-engaged` is a send gate, not a new clock. | `beta-engaged` | Nurture N1–N4 (`beta-nurture`) |

**Production note:** TestFlight installs do not pass through the marketing site today. The app/backend must fire the beta signup webhook (or you import signups manually into the ESP) for the welcome series to run automatically.

---

## Webhook payload specs

### Guide lead (live today)

`POST` to `LEAD_MAGNET_WEBHOOK_URL` from `app/api/lead/route.ts`:

```json
{
  "email": "user@example.com",
  "firstName": "Alex",
  "source": "approval-first-guide",
  "tags": ["lead-magnet", "guide"]
}
```

### Beta signup (recommended — app/backend)

`POST` to `BETA_SIGNUP_WEBHOOK_URL` (documented in `.env.example`; wired outside this repo):

```json
{
  "email": "user@example.com",
  "firstName": "Alex",
  "source": "beta-signup",
  "tags": ["beta-user", "open-beta"],
  "signedUpAt": "2026-06-12T00:00:00Z"
}
```

### Engaged beta (recommended — app/backend)

```json
{
  "email": "user@example.com",
  "source": "beta-engagement",
  "tags": ["beta-engaged"],
  "approvalCount": 5,
  "daysSinceSignup": 14
}
```

---

## ESP setup checklist

1. **Import copy** from `lib/email-sequences.ts` — one automation per sequence (`beta-welcome`, `beta-nurture`).
2. **Configure delays** using each email’s `dayOffset` relative to **`signedUpAt`** from the beta-signup webhook. For nurture, require tag `beta-engaged` before each send — do not restart the clock on the engagement webhook.
3. **Apply tags** from each message’s `espTags` for segmentation and exit rules.
4. **Set exit conditions** — unsubscribe, hard bounce, or tag `beta-churned` removes user from active sequences.
5. **Bridge guide → beta** — when a `guide` lead installs (detect via app signup with same email), add `beta-user` and start welcome series; suppress duplicate welcome if already enrolled.
6. **Unsubscribe** — honor opt-out per `lib/legal.ts`; nurture emails (N2, N4) include unsubscribe reminder in body copy.
7. **Test** — send each email to a staging list; verify all `cta.href` links resolve on production.

Provider-agnostic: ConvertKit automations, Buttondown sequences, Resend + external scheduler, or similar.

---

## In-app ↔ email alignment

| Email ID | Day | In-app tie-in | Help / site link |
|----------|-----|---------------|------------------|
| `beta-welcome-01` | 0 | Settings → connect calendar/mail | `/download`, `help/install-open-beta` |
| `beta-welcome-02` | 2 | Chat → approve/reject plan | `/help/first-approval` |
| `beta-welcome-03` | 5 | Calendar reschedule plan | `/calendar-assistant`, `help/protect-focus-blocks` |
| `beta-welcome-04` | 9 | Mic → plan review on screen | `/voice-assistant`, `/email-assistant` |
| `beta-welcome-05` | 14 | Note a win; reply with feedback | `/stories`, mailto support |
| `beta-nurture-01` | 21 | Settings → Invite | `/invite` |
| `beta-nurture-02` | 30 | — (upgrade when ready) | `/pricing` |
| `beta-nurture-03` | 45 | — (site glossary) | `/how-selara-thinks` |
| `beta-nurture-04` | 60 | — | `/insights`, `/insights/rss.xml` |

---

## Success metrics

| Metric | Source | Notes |
|--------|--------|-------|
| Welcome open rate | ESP | Benchmark 40%+ for transactional-style welcome |
| CTA click-through | ESP link tracking | `/download`, `/help/*`, `/calendar-assistant`, `/voice-assistant` |
| First approval (proxy) | App analytics | Users who complete welcome-02 window with 1+ approval |
| Guide → beta bridge | Plausible `lead_form_success` + app signup match | Same email in both systems |
| Referral activations | App invite events | After nurture-01 (day 21) |
| Upgrade intent | ESP clicks on `/pricing` | After nurture-02 (day 30) |
| Feedback replies | Support inbox | Subject “Beta feedback” after welcome-05 |
| Unsubscribe rate | ESP | Keep below 2% on nurture; investigate if higher |

---

## Quarterly review

During the [quarterly website audit](./quarterly-website-audit.md):

- [ ] Copy in `lib/email-sequences.ts` still matches product (features, pricing, beta status)
- [ ] ESP automations running; webhook URLs set in production env
- [ ] Welcome and nurture metrics reviewed; top 3 subject lines / CTAs noted
- [ ] New case studies or insights added to rotation (update `beta-nurture-04` bullets if needed)
- [ ] In-app tie-ins still accurate after app UI changes
