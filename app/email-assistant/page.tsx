import {
  emailCapabilities,
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

const page = getCapabilityPage('/email-assistant');

export const metadata = getPageMetadata('/email-assistant');

export default function EmailAssistantPage() {
  return (
    <>
      <CapabilityFaqStructuredData items={page.faqs} />
      <PageHero
        className="pageHeroCapability"
        eyebrow="AI email assistant"
        title="The inbox stops living in your head."
        intro="Selara is an AI personal assistant for professionals who need mail triage, follow-through, and drafts — with approval-first control before anything sends under your name."
      />

      <Section
        eyebrow="What actually changes"
        title="Drafts in your voice. Follow-ups that actually happen. Nothing important disappears."
        intro="This is what email assistance looks like when the assistant knows your priorities and protects your reputation."
      >
        <FeatureGrid items={emailCapabilities} />
      </Section>

      <Section
        eyebrow="Professional use cases"
        title="Email for high-stakes weeks."
        intro="From client threads to clinic coordination — approval-first mail for people whose reputation is on the line."
        className="sectionAlt"
      >
        <UseCaseGrid items={page.useCases} />
      </Section>

      <Section
        eyebrow="Before & after"
        title="From mental inbox to visible plans."
        intro="What changes when mail assistance respects your judgment instead of optimizing for send speed."
      >
        <BeforeAfterPanel before={page.beforeAfter.before} after={page.beforeAfter.after} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="The important ones wait for you."
        intro="Normal stuff moves. Anything sensitive waits until you see it and say yes."
      >
        <DeepPageMoment moment={deepPageMoments.email} />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Email assistant questions"
        intro="Triage, drafts, sensitive mail, and what happens when you reject a plan."
      >
        <FaqList items={page.faqs} labelledBy="faq-heading" />
      </Section>

      <Section eyebrow="Explore further" title="Related capabilities and resources">
        <RelatedLinksRow links={page.relatedLinks} />
      </Section>

      <CTASection />
    </>
  );
}
