# Selara Website Agent Setup

## Goal
Finish the last-mile launch setup for the Selara marketing site without changing the current design direction.

## Asset pass
- Replace the concept-only product theater in `components/sections.tsx` with final uploaded assets from the user.
- Prioritize these visual insertion points:
  - `Hero` -> `heroWindowPrimary` and `heroWindowSecondary`
  - `ProductRunway` cards
- Keep the existing motion, depth, spacing, and editorial composition. Do not collapse the design into flat screenshots.
- If assets are portrait screenshots, frame them inside the existing glass/window shells instead of dropping them raw on the page.

## Stripe setup
- Do not create new Stripe products or prices.
- Existing Stripe catalog already mapped in `lib/site-data.ts`:
  - Select product `prod_UEwoOAUuDFlWqN`
  - Premium product `prod_UEwo7Z3Ov3lPPf`
  - Pinnacle product `prod_UEwoZXUH3Nm5Kc`
- Existing recurring prices already mapped there as well.
- Only connect CTA destinations to existing payment links or an approved billing flow.
- If payment links already exist later, set them through `.env.local` using:
  - `NEXT_PUBLIC_STRIPE_SELECT_URL`
  - `NEXT_PUBLIC_STRIPE_PREMIUM_URL`
  - `NEXT_PUBLIC_STRIPE_PINNACLE_URL`

## Beta setup
- Set `NEXT_PUBLIC_BETA_URL` in `.env.local` to the final TestFlight or beta landing destination.
- Confirm all primary CTAs still route there after the update.

## Legal and QA
- Keep the legal text in `lib/legal.ts` untouched unless the user provides replacement text.
- Run:
  - `npm run lint`
  - `npm run build`
- Review desktop and mobile for:
  - theme toggle
  - hero overflow
  - pricing card readability
  - legal page whitespace and wrapping
