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
        eyebrow="What it does"
        title="One assistant that actually knows your life."
        intro="Calendar, voice, documents, and the tools you use — all in one place. It shows you the plan before it does anything that matters."
      />

      <Section
        eyebrow="The whole thing in one place"
        title="Your calendar, your voice, your documents — without the usual mess."
        intro="It works across the tools you already use and keeps everything in one calm spot."
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
