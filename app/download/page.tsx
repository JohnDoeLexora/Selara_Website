import Link from 'next/link';
import { DownloadSelaraCta } from '@/components/download-cta';
import { createMetadata, downloadBenefits, heroLead, productCapabilityLine } from '@/lib/site-data';
import { CTASection, DownloadPreview, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Download Selara',
  `Download Selara for iOS. Available now in open beta — ${productCapabilityLine}`,
  '/download'
);

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Open beta"
        title="The open beta is live — here is what you get on day one."
        intro={heroLead}
      />

      <Section
        eyebrow="What you get in the beta"
        title="Real capability from day one. Not a demo with training wheels."
        intro="Everything below is live and useful immediately. This is not a waitlist for a future product — it is the actual thing."
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
        eyebrow="A glimpse inside"
        title="This is what you will live in every day."
        intro="One calm surface for plans, follow-through, and approvals — designed to feel finished from the first session."
      >
        <DownloadPreview />
      </Section>

      <Section
        eyebrow="Ready?"
        title="Download Selara"
        intro="Direct access to the premium AI concierge built for professionals—and anyone who values time."
      >
        <div className="twoColumn">
          <div className="contentCard contentCardPremium contentCardPremiumStar">
            <h3>Get the app</h3>
            <p>The link takes you straight into the live open beta. Real capability on day one.</p>
            <DownloadSelaraCta className="primaryButton" />
          </div>
          <div className="contentCard contentCardPremium">
            <h3>Explore further</h3>
            <p>See plans for when you are ready to upgrade, or where Selara is headed next.</p>
            <div className="chipGrid">
              <Link className="secondaryButton" href="/pricing">
                View pricing
              </Link>
              <Link className="secondaryButton" href="/future">
                The future
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
