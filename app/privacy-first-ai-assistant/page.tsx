import {
  privacyPositioning,
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

const page = getCapabilityPage('/privacy-first-ai-assistant');

export const metadata = getPageMetadata('/privacy-first-ai-assistant');

export default function PrivacyFirstAiAssistantPage() {
  return (
    <>
      <CapabilityFaqStructuredData items={page.faqs} />
      <PageHero
        className="pageHeroCapability"
        eyebrow="Privacy-first AI assistant"
        title="Real power without the usual disasters."
        intro="Selara is a privacy-first AI assistant for professionals who need serious help — approval controls, transparent memory, and nothing important running without your sign-off."
      />

      <Section
        eyebrow="What this actually means"
        title="Control, visibility, and calm — not creepiness or autopilot."
        intro="Product philosophy for people whose reputation depends on getting automation right."
      >
        <FeatureGrid items={privacyPositioning} />
      </Section>

      <Section
        eyebrow="Professional use cases"
        title="When privacy and control are non-negotiable."
        intro="Client work, clinical leadership, compliance reviews — scenarios where approval-first design matters."
        className="sectionAlt"
      >
        <UseCaseGrid items={page.useCases} />
      </Section>

      <Section
        eyebrow="Before & after"
        title="From fast agents to trusted assistance."
        intro="What changes when AI respects professional stakes."
      >
        <BeforeAfterPanel before={page.beforeAfter.before} after={page.beforeAfter.after} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="You see the plan before anything runs."
        intro="Privacy-first is not less capability — it is capability with guardrails you can explain to counsel."
      >
        <DeepPageMoment moment={deepPageMoments.privacy} />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Privacy-first AI questions"
        intro="Training data, memory, deletion, and how this differs from our Trust page."
      >
        <FaqList items={page.faqs} labelledBy="faq-heading" />
      </Section>

      <Section eyebrow="Explore further" title="Trust, policy, and related pages">
        <RelatedLinksRow links={page.relatedLinks} />
      </Section>

      <CTASection />
    </>
  );
}
