import { createMetadata, deepPageMoments, privacyPositioning } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Privacy-First AI Assistant',
  'Power that doesn’t feel like giving up control. Selara shows you what it’s about to do — every time — so you can use it on the work that actually matters.',
  '/privacy-first-ai-assistant'
);

export default function PrivacyAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy-first"
        title="Real power without the usual disasters."
        intro="Selara is built for people who can’t afford surprises. It shows you the plan before it touches anything important."
      />

      <Section
        eyebrow="What this actually means"
        title="You see the plan before anything touches your real life."
        intro="The difference between an assistant you can actually trust with real work and one that might blow up on you."
      >
        <FeatureGrid items={privacyPositioning} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Judgment calls stay yours. Everything else gets lighter."
        intro="Nothing important happens without you seeing it first."
      >
        <DeepPageMoment moment={deepPageMoments.privacy} />
      </Section>

      <CTASection />
    </>
  );
}
