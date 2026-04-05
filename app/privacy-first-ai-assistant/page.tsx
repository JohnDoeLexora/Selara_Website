import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Privacy-First AI Assistant', 'Selara emphasizes trust, approvals, and privacy-first control.', '/privacy-first-ai-assistant');

export default function PrivacyAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy-first AI"
        title="Trust is not fine print. It is how the product behaves."
        intro="Selara is built for people who care what an assistant can see, say, and do on their behalf—before it does it."
      />
      <Section
        eyebrow="Trust model"
        title="Privacy as behavior, not boilerplate."
        intro="Approvals, transparency, and the ability to reverse course are part of the experience—not an afterthought."
      >
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded">
            <h3>Approval-first actions</h3>
            <p>The assistant pauses before consequential outward moves instead of assuming speed beats clarity.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Transparent intent</h3>
            <p>See what Selara plans to do and why—especially when the stakes are real.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Calm under power</h3>
            <p>Luxury software should stay composed even when the underlying automation is strong.</p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
