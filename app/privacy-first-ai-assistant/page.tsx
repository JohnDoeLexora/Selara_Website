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
        title="Power that doesn’t feel like giving up control."
        intro="Selara is built for people whose reputation, relationships, and calendar are too expensive to hand to something that might surprise them — with visible approval on every consequential step."
      />

      <Section
        eyebrow="What this actually means"
        title="You see the plan before anything touches your real life."
        intro="This is the difference between an assistant that feels powerful and one that feels like a liability waiting to happen."
      >
        <FeatureGrid items={privacyPositioning} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Judgment calls stay yours. Everything else gets lighter."
        intro="Nothing consequential happens in the dark — you get a clear summary of intent before action."
      >
        <DeepPageMoment moment={deepPageMoments.privacy} />
      </Section>

      <CTASection />
    </>
  );
}
