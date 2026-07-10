import { createMetadata, deepPageMoments, planIncludesLine } from '@/lib/site-data';
import {
  BetaUpgradeCallout,
  CTASection,
  DeepPageMoment,
  FaqList,
  PageHero,
  PinnacleCallout,
  PricingGrid,
  Section,
  TrustSignalStrip,
} from '@/components/sections';
import { TestimonialsSection } from '@/components/testimonials-section';

export const metadata = createMetadata(
  'Selara Pricing',
  'Pricing for Selara Select, Premium, and Pinnacle.',
  '/pricing',
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that match how hard your time is to replace."
        intro="Choose the tier that fits your workload. The full concierge experience is available in the open beta today — upgrade to paid whenever you are ready, with no lock-in."
      />

      <div className="shell pageTrustStripWrap">
        <TrustSignalStrip compact />
      </div>

      <Section
        eyebrow="In the app"
        title="Billing that feels like the rest of Selara."
        intro="Subscription status and plan details stay readable in the product — not buried in a generic portal."
        className="sectionCompact"
      >
        <DeepPageMoment moment={deepPageMoments.pricing} />
      </Section>

      <Section
        id="plans"
        eyebrow="Plans"
        title="Select, Premium, and Pinnacle"
        intro={`Monthly or annual billing. Every plan includes ${planIncludesLine}`}
      >
        <BetaUpgradeCallout />
        <PricingGrid />
        <PinnacleCallout />
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

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Answers before you need to ask"
        intro="Pricing, behavior, and billing — covered in plain language."
      >
        <FaqList labelledBy="faq-heading" />
      </Section>

      <Section
        eyebrow="What professionals say"
        title="Calm delegation, when the stakes are real."
        intro="Early beta voices from people whose weeks cannot absorb silent automation."
      >
        <TestimonialsSection />
      </Section>

      <CTASection />
    </>
  );
}
