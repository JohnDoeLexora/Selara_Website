import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Privacy-First AI Assistant', 'Selara emphasizes trust, approvals, and privacy-first control.', '/privacy-first-ai-assistant');

export default function PrivacyAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy-first AI"
        title="Trust is not legal garnish. It is the product."
        intro="This page sharpens the privacy-first and approval-first story into a dedicated conversion surface for trust-sensitive users."
      />
      <Section eyebrow="Trust model" title="The site now sells privacy as behavior, not boilerplate." intro="Approvals, transparency, and calm reversibility are positioned as the luxury move, not the boring compliance move.">
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded"><h3>Approval-first actions</h3><p>The assistant stops before consequential outward moves instead of assuming that invisibility equals convenience.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Transparent intent</h3><p>Selara is at its most compelling when users can see what it plans to do and why.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Composed by design</h3><p>Luxury software should feel calm under power. That is one of Selara’s strongest differentiators.</p></article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
