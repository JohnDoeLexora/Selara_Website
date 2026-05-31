import { createMetadata } from '@/lib/site-data';
import { CTASection, FutureVisualSlot, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'The Future of Selara',
  'Selara is built to be your personal assistant everywhere — starting on iOS today, with Mac, browser, Watch, and deeper surfaces coming soon.',
  '/future'
);

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

      <CTASection />
    </>
  );
}
