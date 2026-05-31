import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'About Selara',
  'Why we’re building a premium personal assistant instead of another chatbot that makes your life noisier.',
  '/about'
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Selara"
        title="For people whose time is too expensive to waste on average software."
        intro="Most AI assistants are built to impress in a demo. Selara is built for people who need it to actually run their weeks without creating new problems."
      />

      <Section
        eyebrow="The belief"
        title="The future of personal assistance should feel luxurious, not chaotic."
        intro="Your calendar, your inbox, your documents, your automations — they should feel like they work for you, not like another system you have to babysit."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>What we reject</h3>
            <p>Black-box automation that surprises you. Shallow “AI magic” that falls apart the moment your real life touches it. Tools that feel powerful only because they hide what they’re about to do.</p>
          </div>
          <div className="contentCard">
            <h3>What we’re building toward</h3>
            <p>One calm assistant that knows how you actually work, shows you the plan, and only does things after you approve.</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The standard"
        title="Premium doesn’t mean expensive. It means it respects you."
        intro="The product should feel like it was made for someone whose attention is genuinely valuable. That shows up in the motion, the hierarchy, the restraint, and the places where we deliberately slow down so you can stay in control."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Visible intent</h3>
            <p>You see what Selara is about to do before it touches your real calendar, mail, or team. No surprises that cost you reputation or relationships.</p>
          </div>
          <div className="contentCard">
            <h3>Real follow-through</h3>
            <p>
              This isn’t a chat that forgets what you said five minutes ago. Context compounds. Preferences travel. The
              bespoke assistant gets better the more you use it.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
