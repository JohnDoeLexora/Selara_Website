import Link from 'next/link';
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
        title="Built for people whose reputation is part of the job."
        intro="An assistant for people whose time and reputation actually matter — not another agent that moves fast and hopes you catch the mistakes later."
      >
        <WhoThisIsFor />
      </Section>
      <Section
        eyebrow="How it works"
        title="Tell Selara what you need. Watch it turn into a plan. Approve what matters."
        intro="Selara takes your message, makes a plan, and only does things after you say yes."
      >
        <StoryGrid />
      </Section>
      <Section
        eyebrow="Trust"
        title="It shows you the plan first."
        intro="When it’s about to touch your calendar or messages, it shows you exactly what it’s going to do."
      >
        <ApprovalShowcase />
      </Section>
      <Section
        eyebrow="What it actually does"
        title="The boring parts stop being your problem."
        intro="It handles your calendar, messages, documents, and the repetitive stuff across your tools — but only after you see the plan and say yes."
      >
        <FeatureCards />
        <div className="chipGrid" style={{ justifyContent: 'center', marginTop: 16 }}>
          <Link href="/features" className="secondaryButton">
            See everything it can do
          </Link>
        </div>
      </Section>
      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple plans. You can start for free."
        intro="The open beta gives you the full thing right now. When you want to keep using it, pick a plan. No tricks."
      >
        <PricingGrid />
      </Section>
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Answers before you need to ask."
        intro="Pricing, behavior, and billing—covered in plain language so you can decide with confidence."
      >
        <FaqList />
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
