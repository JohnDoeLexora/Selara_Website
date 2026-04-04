import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Voice AI Personal Assistant', 'Talk to Selara naturally and reclaim time with voice-first assistance.', '/voice-assistant');

export default function VoiceAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Voice assistant"
        title="The fastest way to delegate is still talking like a human."
        intro="Selara’s voice story is not novelty. It is momentum: capturing intent while you are already moving."
      />
      <Section eyebrow="Voice-first" title="Built for natural delegation, not robotic prompting." intro="This extends the premium personal assistant positioning into a voice-native story that feels modern and desirable.">
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded"><h3>Natural language in motion</h3><p>Speak in the car, between meetings, or mid-walk without converting your thoughts into machine syntax.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Premium interaction model</h3><p>The voice experience is framed as deliberate, polished, and emotionally smoother than standard assistant products.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Turns voice into plans</h3><p>Selara does more than transcribe. It structures intent into the next useful sequence.</p></article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
