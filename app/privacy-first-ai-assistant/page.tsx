import { createMetadata, privacyPositioning } from '@/lib/site-data';
import { CTASection, FeatureGrid, PageHero, Section } from '@/components/sections';

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
        intro="Selara is built for people whose reputation, relationships, and calendar are too expensive to hand to something that might surprise them."
      />

      <Section
        eyebrow="What this actually means"
        title="You see the plan before anything touches your real life."
        intro="This is the difference between an assistant that feels powerful and one that feels like a liability waiting to happen."
      >
        <FeatureGrid items={privacyPositioning} />
      </Section>

      <Section
        eyebrow="The luxury of being in charge"
        title="Judgment calls stay yours. Everything else gets lighter."
        intro="When the stakes are real — a message to a client, a reschedule that affects four people, anything that touches your reputation — you stay the decider. The rest just moves."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Nothing consequential happens in the dark</h3>
            <p>No black-box “I took care of it.” You get a clear summary of intent before anything lands in your calendar or inbox.</p>
          </div>
          <div className="contentCard">
            <h3>The expensive part of your brain stays protected</h3>
            <p>Relationship-sensitive messages, strategic decisions, anything with real stakes — those stay in your hands. Everything else gets handled.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
