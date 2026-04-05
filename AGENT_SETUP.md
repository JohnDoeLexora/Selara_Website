# Selara marketing site — agent notes

## Scope
Ship and maintain the public marketing site. Preserve the established visual direction (typography, motion, spacing) unless the owner requests a redesign.

## Images
- Marketing screenshots live under `public/images/`. **Do not commit real account, billing, or inbox content**—use demo data or illustrated mocks (see `selara-subscription.svg` / `selara-settings.svg`).
- Hero and runway slots: `components/sections.tsx` (`heroShowcase`, `runwayScreens`).

## Stripe / checkout
- Plan **names and prices** on the site are marketing copy in `lib/site-data.ts`. **Do not put Stripe product or price IDs in client-visible code.**
- Wire checkout using environment variables (payment links or your backend):
  - `NEXT_PUBLIC_STRIPE_SELECT_URL`
  - `NEXT_PUBLIC_STRIPE_PREMIUM_URL`
  - `NEXT_PUBLIC_STRIPE_PINNACLE_URL`
- Catalog IDs belong in **Stripe Dashboard** or **server-only** config, not in shared site bundles.

## Beta
- `NEXT_PUBLIC_BETA_URL` — defaults to `/download` if unset (`site-data.ts`).

## Legal
- Do not edit `lib/legal.ts` unless the owner supplies replacement counsel-approved text.

## Checks
- `npm run lint` and `npm run build` before merge.
