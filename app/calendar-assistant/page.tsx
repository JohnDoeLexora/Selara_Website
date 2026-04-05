import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Calendar Assistant', 'Selara helps professionals reclaim time with calendar-aware AI assistance.', '/calendar-assistant');

export default function CalendarAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI calendar assistant"
        title="A calendar assistant should protect time, not just shuffle boxes around."
        intro="Selara helps you run more intentional weeks: smarter reschedules, focus protection, and coordination you approve before it goes out."
      />
      <Section
        eyebrow="Calendar intelligence"
        title="Built for schedules that actually drive your week."
        intro="When your calendar is the spine of your work, the assistant should interpret the day—not only list it."
      >
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded">
            <h3>Reschedule with context</h3>
            <p>Selara proposes moves that respect timing, priorities, and what else is on your plate.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Protect deep work</h3>
            <p>Defend focus blocks instead of letting the week slowly collapse into pure reaction.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Approve before outreach</h3>
            <p>Review external calendar actions before they land, so speed never trades away control.</p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
