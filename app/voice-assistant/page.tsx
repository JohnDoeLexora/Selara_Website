import { createMetadata, voiceCapabilities } from '@/lib/site-data';
import { CTASection, FeatureGrid, PageHero, Section } from '@/components/sections';

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
        intro="Between meetings, in the car, on a walk — say what you need in plain English. Selara turns it into structured work you can actually review and hand off."
      />

      <Section
        eyebrow="Voice that works"
        title="Natural speech becomes real progress, not another inbox of prompts."
        intro="This is what voice delegation feels like when the assistant actually knows your context and follows through."
      >
        <FeatureGrid items={voiceCapabilities} />
      </Section>

      <Section
        eyebrow="Why it feels different"
        title="It remembers who you are and what “done well” means to you."
        intro="The more you use voice, the less you repeat yourself. Preferences, recurring patterns, and how you like things handled travel with every request."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>From voice to calendar in seconds</h3>
            <p>“Move the 2pm and tell the team I’ll be five late” becomes a real reschedule + message draft before you finish the thought.</p>
          </div>
          <div className="contentCard">
            <h3>Still your voice on the other side</h3>
            <p>When it speaks or writes for you, it sounds like you — not generic corporate AI. You edit the substance, not the tone.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
