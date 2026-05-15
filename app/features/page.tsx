import { createMetadata } from '@/lib/site-data';
import { CTASection, FeatureCards, PageHero, ProductRunway, Section, StoryGrid } from '@/components/sections';

export const metadata = createMetadata(
  'Selara Features',
  'One calm system for your calendar, voice, documents, automations, and memory — with real control when it matters.',
  '/features'
);

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One system. Real breadth. Actual control."
        intro="Selara handles calendar, voice, documents, automations, and memory in one calm surface — without turning your week into a game of whack-a-mole with another AI."
      />

      <Section
        eyebrow="The full surface"
        title="Everything you need to run your life, in one place that doesn’t feel chaotic."
        intro="This is the breadth that matters: not a pile of disconnected tricks, but one assistant that actually knows what’s going on across your tools."
      >
        <FeatureCards />
      </Section>

      <Section
        eyebrow="How it actually works"
        title="Say it. See the plan. Approve what matters. Get your time back."
        intro="The flow is simple and repeatable. Intent becomes visible work. You stay in charge on the things that are worth caring about."
      >
        <StoryGrid />
      </Section>

      <Section
        eyebrow="What you actually live in"
        title="Navigation, settings, subscription — built with the same taste as the rest of the product."
        intro="A serious assistant deserves surfaces that don’t make you feel like you’re babysitting software."
      >
        <ProductRunway />
      </Section>

      <Section
        eyebrow="Go deeper"
        title="Specific surfaces, specific outcomes."
        intro="Some parts of the assistant deserve their own spotlight. Here’s where to go when you want the full story on one capability."
      >
        <div className="chipGrid" style={{ justifyContent: 'center' }}>
          <a className="secondaryButton" href="/calendar-assistant">Calendar</a>
          <a className="secondaryButton" href="/voice-assistant">Voice</a>
          <a className="secondaryButton" href="/email-assistant">Email</a>
          <a className="secondaryButton" href="/ai-automations">Automations</a>
          <a className="secondaryButton" href="/privacy-first-ai-assistant">Privacy &amp; Control</a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
