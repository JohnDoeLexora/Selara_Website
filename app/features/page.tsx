import { createMetadata, deepPageMoments } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureCards, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Selara Features',
  'One calm system for your calendar, voice, documents, automations, and memory — with real control when it matters.',
  '/features'
);

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One system. Real breadth. Actual control."
        intro="Selara is the premium AI concierge for professionals who need calendar, voice, documents, and memory in one calm surface — with approval-first guardrails when the stakes are real."
      />

      <Section
        eyebrow="The full surface"
        title="Everything you need to run your life, in one place that doesn’t feel chaotic."
        intro="This is the breadth that matters: not a pile of disconnected tricks, but one assistant that actually knows what’s going on across your tools."
      >
        <FeatureCards />
      </Section>

      <Section
        eyebrow="Control when it counts"
        title="Approval-first across every surface."
        intro="Breadth without chaos: Selara pauses on the moments that touch your calendar, inbox, or reputation — and shows you the plan first."
      >
        <DeepPageMoment moment={deepPageMoments.features} />
      </Section>

      <Section
        eyebrow="Go deeper"
        title="Specific surfaces, specific outcomes."
        intro="Some parts of the assistant deserve their own spotlight. Here’s where to go when you want the full story on one capability."
      >
        <div className="chipGrid" style={{ justifyContent: 'center' }}>
          <a className="secondaryButton" href="/calendar-assistant">Calendar</a>
          <a className="secondaryButton" href="/voice-assistant">Voice</a>
          <a className="secondaryButton" href="/email-assistant">Email</a>
          <a className="secondaryButton" href="/ai-automations">Automations</a>
          <a className="secondaryButton" href="/privacy-first-ai-assistant">Privacy &amp; Control</a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
