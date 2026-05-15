import { calendarCapabilities, createMetadata } from '@/lib/site-data';
import { CTASection, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Calendar Assistant',
  'Your calendar stops being a second job. Selara protects focus, proposes smarter moves, and makes sure nothing important falls through.',
  '/calendar-assistant'
);

export default function CalendarAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar assistant"
        title="Your calendar stops being a second job."
        intro="Selara sees the real shape of your week — conflicts, energy, travel, priorities — and turns it into something you can actually steer instead of constantly firefight."
      />

      <Section
        eyebrow="What actually changes"
        title="Focus blocks that survive. Follow-ups that don’t vanish. Weeks that feel intentional."
        intro="This is what calendar intelligence looks like when it’s built for people whose time is genuinely expensive."
      >
        <FeatureGrid items={calendarCapabilities} />
      </Section>

      <Section
        eyebrow="The real product"
        title="It doesn’t just move meetings. It protects your reputation and your energy."
        intro="Every reschedule, every external note, every “can we shift this?” carries context about what actually matters to you. You see the plan before anything lands."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>You decide the trade-offs</h3>
            <p>When something wants your best hours, Selara shows you exactly what you’d be giving up — not just a new time slot.</p>
          </div>
          <div className="contentCard">
            <h3>Nothing important gets lost</h3>
            <p>Every “I’ll check my calendar and get back to you” becomes a tracked action with the right people and context attached. You stop being the bottleneck.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
