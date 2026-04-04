import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Automations', 'Selara brings connected, approval-first AI automations to real workflows.', '/ai-automations');

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI automations"
        title="Automation that still feels supervised is dramatically more attractive."
        intro="Selara’s automation story is about leverage without anxiety: connected systems, context, approvals, and compound value over time."
      />
      <Section eyebrow="Automation philosophy" title="More context, more control, less black-box behavior." intro="This is where Selara’s trust posture becomes a growth advantage, not merely a safety disclaimer.">
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded"><h3>Connected workflows</h3><p>Automation becomes more valuable when it knows the tools, timing, and preferences around the task.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Approval where it matters</h3><p>Routine flow can stay fast while consequential actions remain visible and governed.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Better with memory</h3><p>Repeated workflows become less repetitive as the assistant learns what good looks like for you.</p></article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
