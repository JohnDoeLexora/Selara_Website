import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, PricingGrid, Section } from '@/components/sections';

export const metadata = createMetadata('Selara Pricing', 'Pricing for Selara Select, Premium, and Pinnacle.', '/pricing');

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that match how hard your time is to replace."
        intro="Choose the tier that fits your workload. Every plan includes the core Selara experience—voice, memory, deep integrations, and approval-first actions—with more capacity and household features as you move up."
      />
      <Section
        eyebrow="Plans"
        title="Select, Premium, and Pinnacle"
        intro="Monthly or annual billing. Upgrade when you are ready."
      >
        <PricingGrid />
      </Section>
      <Section eyebrow="Billing" title="Simple subscription mechanics">
        <div className="twoColumn">
          <div className="contentCard">
            <h3>What you get</h3>
            <p>
              Each plan lists included capabilities upfront. Your subscription renews on the cycle you choose; manage
              billing from your account when we enable self-serve checkout.
            </p>
          </div>
          <div className="contentCard">
            <h3>Questions</h3>
            <p>
              For volume, teams, or custom arrangements, use the support email in the footer—we read every message.
            </p>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
