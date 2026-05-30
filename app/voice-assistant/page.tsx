import { createMetadata, deepPageMoments, voiceCapabilities } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Voice AI Personal Assistant',
  'Talk normally. Get real work done. Selara turns voice into plans, follow-ups, and calendar changes you can review.',
  '/voice-assistant'
);

export default function VoiceAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Voice assistant"
        title="Talk like a person. Get treated like one."
        intro="Between meetings, in the car, on a walk — say what you need in plain English. Selara turns it into structured work you can review before anything runs."
      />

      <Section
        eyebrow="Voice that works"
        title="Natural speech becomes real progress, not another inbox of prompts."
        intro="This is what voice delegation feels like when the assistant actually knows your context and follows through."
      >
        <FeatureGrid items={voiceCapabilities} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Voice requests become visible plans — not surprise actions."
        intro="When speech would touch your calendar, inbox, or reputation, Selara pauses for your review."
      >
        <DeepPageMoment moment={deepPageMoments.voice} />
      </Section>

      <CTASection />
    </>
  );
}
