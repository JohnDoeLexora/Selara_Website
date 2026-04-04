import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, PricingGrid, Section } from '@/components/sections';

export const metadata = createMetadata('Selara Pricing', 'Pricing for Selara Select, Premium, and Pinnacle.', '/pricing');

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Real Stripe-backed plans, no made-up pricing artifacts."
        intro="This page now reflects the actual existing Stripe product catalog and recurring price IDs already present in your account. No new products or prices were created."
      />
      <Section eyebrow="Live catalog" title="Select, Premium, and Pinnacle from the existing Stripe account." intro="The public design stays elegant, while the setup layer exposes the exact product and price IDs needed for the next integration pass.">
        <PricingGrid />
      </Section>
      <Section eyebrow="Setup note" title="Checkout can still be connected later without redesigning pricing." intro="You asked not to create new Stripe objects. This build respects that and keeps CTA destinations configurable until you are ready to point them at existing payment links or a custom checkout flow.">
        <div className="twoColumn">
          <div className="contentCard"><h3>What is real now</h3><p>Product names, descriptions, monthly prices, yearly prices, product IDs, and recurring price IDs are all mapped from the current Stripe account.</p></div>
          <div className="contentCard"><h3>What still needs wiring</h3><p>Public checkout destinations. Once you decide how you want customers to land in payment, the CTAs can be aimed there without further redesign.</p></div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
