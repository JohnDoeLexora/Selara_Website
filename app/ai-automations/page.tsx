import {
  automationOutcomes,
  getCapabilityPage,
  getPageMetadata,
  deepPageMoments,
} from '@/lib/site-data';
import { CapabilityFaqStructuredData } from '@/components/capability-structured-data';
import {
  BeforeAfterPanel,
  CTASection,
  DeepPageMoment,
  FaqList,
  FeatureGrid,
  PageHero,
  RelatedLinksRow,
  Section,
  UseCaseGrid,
} from '@/components/sections';

const page = getCapabilityPage('/ai-automations');

export const metadata = getPageMetadata('/ai-automations');

export default function AiAutomationsPage() {
  return (
    <>
      <CapabilityFaqStructuredData items={page.faqs} />
      <PageHero
        className="pageHeroCapability"
        eyebrow="AI automations"
        title="Automation that actually helps — without the usual surprises."
        intro="Selara connects 800+ tools with memory and approval-first guardrails — cross-tool busywork that waits for your OK before touching calendar, mail, or reputation."
      />

      <Section
        eyebrow="Automation that actually helps"
        title="Cross-tool workflows with judgment built in."
        intro="Routine work gets lighter. Important steps still land on your screen first."
      >
        <FeatureGrid items={automationOutcomes} />
      </Section>

      <Section
        eyebrow="Professional use cases"
        title="Automations for executive workflows."
        intro="Status updates, onboarding chains, and follow-through — without silent sends or brittle triggers."
        className="sectionAlt"
      >
        <UseCaseGrid items={page.useCases} />
      </Section>

      <Section
        eyebrow="Before & after"
        title="From brittle triggers to trusted delegation."
        intro="What changes when automations respect context and approval."
      >
        <BeforeAfterPanel before={page.beforeAfter.before} after={page.beforeAfter.after} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Automations pause where judgment matters."
        intro="Cross-tool plans show up clearly — you approve before anything external runs."
      >
        <DeepPageMoment moment={deepPageMoments.automations} />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Automation questions"
        intro="Integrations, failures, approval rules, and how Selara compares to workflow builders."
      >
        <FaqList items={page.faqs} labelledBy="faq-heading" />
      </Section>

      <Section eyebrow="Explore further" title="Related capabilities and comparisons">
        <RelatedLinksRow links={page.relatedLinks} />
      </Section>

      <CTASection />
    </>
  );
}
