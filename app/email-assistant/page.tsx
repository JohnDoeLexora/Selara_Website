import { createMetadata, deepPageMoments, emailCapabilities } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Email Assistant',
  'Your inbox stops living in your head. Selara surfaces what matters, drafts the rest, and makes sure follow-ups actually happen.',
  '/email-assistant'
);

export default function EmailAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Email assistant"
        title="The inbox stops living in your head."
        intro="It figures out what actually needs you, drafts the rest, and makes sure the important stuff doesn’t get lost."
      />

      <Section
        eyebrow="Email that doesn’t leak"
        title="Drafts in your voice. Follow-ups that actually happen. Nothing important disappears."
        intro="This is what email assistance looks like when the assistant knows your priorities and protects your reputation."
      >
        <FeatureGrid items={emailCapabilities} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="The important ones wait for you."
        intro="Normal stuff moves. Anything sensitive waits until you see it and say yes."
      >
        <DeepPageMoment moment={deepPageMoments.email} />
      </Section>

      <CTASection />
    </>
  );
}
