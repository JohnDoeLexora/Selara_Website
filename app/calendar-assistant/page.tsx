import { calendarCapabilities, createMetadata, deepPageMoments } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Calendar Assistant',
  'Your calendar stops being a second job. Selara protects focus, proposes smarter moves, and makes sure nothing important falls through.',
  '/calendar-assistant'
);

export default function CalendarAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar assistant"
        title="Your calendar stops being a second job."
        intro="Selara sees the real shape of your week — conflicts, energy, travel, priorities — and turns it into something you can steer instead of constantly firefight."
      />

      <Section
        eyebrow="What actually changes"
        title="Focus blocks that survive. Follow-ups that don’t vanish. Weeks that feel intentional."
        intro="This is what calendar intelligence looks like when it’s built for people whose time is genuinely expensive."
      >
        <FeatureGrid items={calendarCapabilities} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Every consequential calendar move stays visible before it lands."
        intro="Reschedules, external notes, and trade-offs that affect your reputation — you see the plan first."
      >
        <DeepPageMoment moment={deepPageMoments.calendar} />
      </Section>

      <CTASection />
    </>
  );
}
