import Link from 'next/link';
import { betaUrl, createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Download Selara Beta', 'Download the Selara beta and reclaim your time.', '/download');

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download beta"
        title="Built to funnel attention straight into open beta."
        intro="Every major CTA on the site can now point to one beta destination. Replace the beta URL once and the whole site follows it."
      />
      <Section eyebrow="Access" title="The beta page now feels like part of the brand, not an afterthought." intro="This route is designed to handle open beta, capped beta, or invite-only flow without breaking the premium experience.">
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Primary beta action</h3>
            <p>Plug your TestFlight or beta distribution URL into the site config and this becomes your central launch conversion path.</p>
            <a className="primaryButton" href={betaUrl}>Open Beta Access</a>
          </div>
          <div className="contentCard">
            <h3>Secondary path</h3>
            <p>If you cap access, this same page can pivot into a waitlist, invite request, or “beta full” message without requiring a page redesign.</p>
            <Link className="secondaryButton" href="/pricing">See plans first</Link>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
