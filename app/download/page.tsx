import Link from 'next/link';
import { betaUrl, createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Download Selara Beta', 'Download the Selara beta and reclaim your time.', '/download');

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Beta"
        title="Get the Selara beta."
        intro="Join the open beta and try the assistant on your real calendar, mail, and workflows—with approvals and guardrails built in from day one."
      />
      <Section
        eyebrow="Access"
        title="Start with beta access"
        intro="Use your beta link below. Prefer to review plans first? Pricing is one tap away."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Download</h3>
            <p>Use your TestFlight link, public beta URL, or waitlist—whatever you have set in the site environment.</p>
            <a className="primaryButton" href={betaUrl}>Open beta access</a>
          </div>
          <div className="contentCard">
            <h3>Compare plans</h3>
            <p>See Select, Premium, and Pinnacle side by side before you commit.</p>
            <Link className="secondaryButton" href="/pricing">View pricing</Link>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
