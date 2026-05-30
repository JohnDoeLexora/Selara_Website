import { automationOutcomes, createMetadata, deepPageMoments } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Automations',
  'Repetitive work stops being your problem. Selara handles the routine with context and only surfaces the things that actually need your judgment.',
  '/ai-automations'
);

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Automations"
        title="Repetitive work stops being your problem."
        intro="Selara knows your tools, your preferences, and what “done well” looks like for you. Routine work moves fast — until it would affect your calendar, team, or reputation."
      />

      <Section
        eyebrow="Automation that actually helps"
        title="Context travels with the work. You only touch the exceptions."
        intro="This is what connected automation feels like when it’s built for people who can’t afford for something to go wrong without them knowing."
      >
        <FeatureGrid items={automationOutcomes} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Speed without surprise on the work that matters."
        intro="Automations run in the background until stakes rise — then you see the plan and decide."
      >
        <DeepPageMoment moment={deepPageMoments.automations} />
      </Section>

      <CTASection />
    </>
  );
}
