import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Automations', 'Selara brings connected, approval-first AI automations to real workflows.', '/ai-automations');

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI automations"
        title="Automation that stays supervised is easier to trust."
        intro="Selara connects to your stack, carries context forward, and asks before it does anything that could surprise you or someone else."
      />
      <Section
        eyebrow="How we automate"
        title="More context, more control, less black-box behavior."
        intro="Workflows get better when the assistant knows your tools and timing—and when consequential steps stay visible."
      >
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded">
            <h3>Connected workflows</h3>
            <p>Automation becomes more valuable when it understands the systems, deadlines, and preferences around the task.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Approval where it matters</h3>
            <p>Routine flow can stay fast while outbound or irreversible actions stay in your hands.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Better with memory</h3>
            <p>Repeated work gets smoother as Selara learns what “done well” looks like for you.</p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
