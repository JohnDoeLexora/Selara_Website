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
        title="You see every important calendar change before it happens."
        intro="It handles rescheduling and messages — and shows you the plan before anything goes out."
      >
        <DeepPageMoment moment={deepPageMoments.calendar} />
      </Section>

      <CTASection />
    </>
  );
}
