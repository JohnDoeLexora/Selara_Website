import Link from 'next/link';
import { audienceSectionIntro, audienceSectionTitle } from '@/lib/site-data';
import {
  ApprovalShowcase,
  CTASection,
  FaqList,
  FeatureCards,
  FutureTeaser,
  Hero,
  PricingGrid,
  Section,
  StoryGrid,
  WhoThisIsFor,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Who it's for"
        title={audienceSectionTitle}
        intro={audienceSectionIntro}
      >
        <WhoThisIsFor />
      </Section>
      <Section
        eyebrow="How it works"
        title="Tell Selara what you need. Watch it turn into a plan. Approve what matters."
        intro="Selara takes your message, makes a plan, and only does things after you say yes."
      >
        <StoryGrid />
        <div className="chipGrid chipGridCentered">
          <Link href="/stories" className="secondaryButton">
            Day-in-the-life stories
          </Link>
        </div>
      </Section>
      <Section
        className="sectionAlt"
        eyebrow="Trust"
        title="Approval-first AI — it shows you the plan first."
        intro="Before anything touches your calendar or messages, you see exactly what will happen."
      >
        <ApprovalShowcase />
      </Section>
      <Section
        eyebrow="What it actually does"
        title="Calendar intelligence AI — the boring parts stop being your problem."
        intro="Calendar, messages, documents, and repetitive work across your tools — always with a plan you approve first."
      >
        <FeatureCards />
        <div className="chipGrid chipGridCentered">
          <Link href="/features" className="secondaryButton">
            See everything it can do
          </Link>
        </div>
      </Section>
      <Section
        eyebrow="Pricing"
        title="Simple plans. You can start for free."
        intro="The open beta gives you the full thing right now. When you want to keep using it, pick a plan. No tricks."
      >
        <PricingGrid />
      </Section>
      <Section
        className="sectionAlt"
        eyebrow="FAQ"
        title="Answers before you need to ask."
        intro="Pricing, behavior, and billing — covered in plain language."
      >
        <FaqList labelledBy="faq-heading" />
      </Section>
      <section className="section sectionCompact" aria-labelledby="future-teaser-heading">
        <div className="shell">
          <FutureTeaser />
        </div>
      </section>
      <CTASection />
    </>
  );
}
