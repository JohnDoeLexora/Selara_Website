import Link from 'next/link';
import { betaUrl, createMetadata, downloadBenefits } from '@/lib/site-data';
import { CTASection, PageHero, ProductRunway, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Download Selara Beta',
  'Try the premium AI assistant that actually respects your time and your reputation. Open beta now available.',
  '/download'
);

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Beta"
        title="See what a real assistant feels like."
        intro="Not another chat toy. Selara is the calm, powerful system you’ve been waiting for — calendar intelligence, voice that works, memory that compounds, and approvals that protect you when it counts."
      />

      <Section
        eyebrow="What you get in the beta"
        title="Real capability from day one. Not a demo with training wheels."
        intro="Everything below is live and useful immediately. This isn’t a waitlist for a future product — it’s the actual thing."
      >
        <div className="featureGrid featureGridExpanded">
          {downloadBenefits.map((benefit, index) => (
            <article key={index} className="featureCard featureCardExpanded">
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The actual product"
        title="This is what you’ll live in every day."
        intro="Navigation, preferences, subscription, chat — all built with the same restraint and craft as the rest of Selara."
      >
        <ProductRunway />
      </Section>

      <Section
        eyebrow="Ready?"
        title="Join the beta and start getting your time back."
        intro="Use the link you have. If you want to compare plans first, pricing is right here."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Start the beta</h3>
            <p>Use your TestFlight link or public beta URL. The assistant is ready for your real calendar and workflows.</p>
            <a className="primaryButton" href={betaUrl}>Open beta access</a>
          </div>
          <div className="contentCard">
            <h3>See the plans</h3>
            <p>Select, Premium, and Pinnacle — clear pricing with no surprises later.</p>
            <Link className="secondaryButton" href="/pricing">View pricing</Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
