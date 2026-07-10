import Link from 'next/link';
import { getPageMetadata, deepPageMoments } from '@/lib/site-data';
import { PrintSaveButton } from '@/components/print-save-button';
import { CTASection, DeepPageMoment, FeatureCards, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/features');

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="What it does"
        title="One assistant that actually knows your life."
        intro="Calendar, email, notes, and the tools you use — all in one place. It shows you the plan before it does anything that matters."
      />
      <div className="shell pageHeroActions">
        <PrintSaveButton />
      </div>

      <Section
        eyebrow="The whole thing in one place"
        title="Intelligence, calendar, email, and notes — without the usual mess."
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
        <div className="chipGrid chipGridCentered">
          <Link className="secondaryButton" href="/calendar-assistant">Calendar</Link>
          <Link className="secondaryButton" href="/voice-assistant">Voice</Link>
          <Link className="secondaryButton" href="/email-assistant">Email</Link>
          <Link className="secondaryButton" href="/ai-automations">Automations</Link>
          <Link className="secondaryButton" href="/privacy-first-ai-assistant">Privacy &amp; Control</Link>
          <Link className="secondaryButton" href="/guide">Approval-first guide</Link>
          <Link className="secondaryButton" href="/stories">Success stories</Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
