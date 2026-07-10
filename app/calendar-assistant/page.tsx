import {
  calendarCapabilities,
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

const page = getCapabilityPage('/calendar-assistant');

export const metadata = getPageMetadata('/calendar-assistant');

export default function CalendarAssistantPage() {
  return (
    <>
      <CapabilityFaqStructuredData items={page.faqs} />
      <PageHero
        className="pageHeroCapability"
        eyebrow="AI calendar assistant"
        title="Your calendar stops being a second job."
        intro="Selara brings calendar intelligence to professionals whose time is genuinely expensive — conflicts, energy, travel, and priorities turned into plans you approve before anything moves."
      />

      <Section
        eyebrow="What actually changes"
        title="Focus blocks that survive. Follow-ups that don’t vanish. Weeks that feel intentional."
        intro="This is what calendar intelligence looks like when it’s built for people whose time is genuinely expensive."
      >
        <FeatureGrid items={calendarCapabilities} />
      </Section>

      <Section
        eyebrow="Professional use cases"
        title="Calendar intelligence for high-stakes weeks."
        intro="From board prep to patient follow-ups — specific scenarios where approval-first scheduling earns trust."
        className="sectionAlt"
      >
        <UseCaseGrid items={page.useCases} />
      </Section>

      <Section
        eyebrow="Before & after"
        title="From reactive firefighting to intentional weeks."
        intro="What changes when calendar intelligence respects your judgment instead of optimizing for speed alone."
      >
        <BeforeAfterPanel before={page.beforeAfter.before} after={page.beforeAfter.after} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="You see every important calendar change before it happens."
        intro="It handles rescheduling and messages — and shows you the plan before anything goes out."
      >
        <DeepPageMoment moment={deepPageMoments.calendar} />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Calendar assistant questions"
        intro="Scheduling, focus time, integrations, and what happens when you reject a plan."
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
