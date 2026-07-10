import { getPageMetadata, roadmapVoteMailto } from '@/lib/site-data';
import { CTASection, FutureVisualSlot, PageHero, RoadmapTimeline, Section } from '@/components/sections';

export const metadata = getPageMetadata('/future');

export default function FuturePage() {
  return (
    <>
      <PageHero
        className="pageHeroFuture"
        eyebrow="Future"
        title="One assistant. Everywhere you are."
        intro="Selara is built to be your personal assistant across the devices and contexts that actually matter — starting on iOS, with Mac, browser, Watch, and deeper ecosystem surfaces coming soon."
      />

      <Section
        eyebrow="The vision"
        title="Your concierge, wherever the work happens."
        intro="Most assistants are trapped in one app. Selara is designed to be there when you need it — on your phone, your computer, your watch — without creating more work for you to manage."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Today</h3>
            <p>
              Native iOS app with calendar intelligence, email, notes, voice access, approvals, follow-through, travel,
              documents, and Studio. The foundation is live in the open beta.
            </p>
          </div>
          <div className="contentCard">
            <h3>Coming soon</h3>
            <p>
              Deeper presence on Mac, browser, Watch, and across the surfaces professionals actually live in. One calm
              assistant that understands your world no matter which device you are on.
            </p>
          </div>
        </div>
        <FutureVisualSlot />
      </Section>

      <Section
        eyebrow="Public roadmap"
        title="What we are building — and what is already here."
        intro="A simple view of shipped work, active development, and what is planned next. We would rather be transparent than overpromise."
      >
        <RoadmapTimeline />
      </Section>

      <Section
        eyebrow="Your voice"
        title="Vote on what matters to you."
        intro="The roadmap reflects real professional workflows. Tell us what would make Selara indispensable in your week."
      >
        <div className="contentCard contentCardPremium roadmapVoteCard">
          <p>
            Feature requests help us prioritize Mac, Watch, browser, and integration depth — without losing the calm,
            approval-first core.
          </p>
          <a className="primaryButton" href={roadmapVoteMailto}>
            Vote on features
          </a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
