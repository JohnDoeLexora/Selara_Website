import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Voice AI Personal Assistant', 'Talk to Selara naturally and reclaim time with voice-first assistance.', '/voice-assistant');

export default function VoiceAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Voice assistant"
        title="The fastest way to delegate is still talking like a human."
        intro="Capture intent while you are in motion—between meetings, on a walk, in the car—without translating your thoughts into commands."
      />
      <Section
        eyebrow="Voice-first"
        title="Natural delegation, not robotic prompting."
        intro="Voice should feel like a premium channel: fast when you need speed, careful when the outcome matters."
      >
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded">
            <h3>Natural language in motion</h3>
            <p>Speak plainly; Selara structures what you mean into the next useful sequence.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Polished interaction</h3>
            <p>Voice is integrated with the same calm hierarchy and memory as the rest of the assistant.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>From speech to plan</h3>
            <p>More than transcription—Selara turns what you said into what should happen next.</p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
