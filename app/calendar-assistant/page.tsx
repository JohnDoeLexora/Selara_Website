import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Calendar Assistant', 'Selara helps professionals reclaim time with calendar-aware AI assistance.', '/calendar-assistant');

export default function CalendarAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI calendar assistant"
        title="A calendar assistant should protect time, not just shuffle boxes around."
        intro="Selara’s calendar story is about intentional weeks: better reschedules, focus protection, and approval-first coordination."
      />
      <Section eyebrow="Calendar intelligence" title="Designed for people whose schedule actually matters." intro="This page extends the homepage promise into SEO-friendly, conversion-friendly specificity.">
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded"><h3>Reschedule with context</h3><p>Selara prepares smarter moves because it understands timing, priorities, and surrounding commitments.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Protect deep work</h3><p>Create more intentional space instead of accepting a calendar that slowly collapses into reaction mode.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Approve before outreach</h3><p>Review the external moves before they go out, keeping the process fast without losing control.</p></article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
