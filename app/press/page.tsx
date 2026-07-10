import Link from 'next/link';
import {
  founderBio,
  getPageMetadata,
  pressAssets,
  pressEmail,
  pressFacts,
  pressMilestones,
  supportEmail,
} from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/press');

export default function PressPage() {
  return (
    <>
      <PageHero
        className="pageHeroPress"
        eyebrow="Press & Media"
        title="Facts, assets, and contact — without the hype."
        intro="Everything journalists and partners need to understand Selara: what it is, who built it, and how to reach us."
      />

      <Section
        eyebrow="Founder"
        title={founderBio.name}
        intro={`${founderBio.role} · ${founderBio.location}`}
      >
        <div className="contentCard contentCardPremium pressFounderCard">
          <div className="pressFounderPhoto" aria-hidden>
            <span className="pressFounderInitials">ZC</span>
          </div>
          <p>{founderBio.summary}</p>
        </div>
      </Section>

      <Section eyebrow="Key facts" title="Selara at a glance." intro="Short, accurate reference points for coverage.">
        <ul className="pressFactsList">
          {pressFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Milestones" title="Where we are." intro="Product progress without overselling the roadmap.">
        <div className="pressMilestonesGrid">
          {pressMilestones.map((item) => (
            <article key={item.label} className="contentCard">
              <p className="pressMilestoneDate">{item.date}</p>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Assets"
        title="Downloadable press kit."
        intro="Logo and one-pager for articles, decks, and partner materials."
      >
        <div className="pressAssetsGrid">
          {pressAssets.map((asset) => (
            <a key={asset.href} className="pressAssetCard" href={asset.href} download>
              <p className="pressAssetFormat">{asset.format}</p>
              <h3>{asset.title}</h3>
              <p>{asset.description}</p>
              <span className="pressAssetDownload">Download</span>
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Press inquiries."
        intro="For interviews, fact-checking, or partnership conversations."
      >
        <div className="contentCard contentCardPremium pressContactCard">
          <p>
            Email{' '}
            <a href={`mailto:${pressEmail}`} className="pressContactLink">
              {pressEmail}
            </a>{' '}
            or{' '}
            <a href={`mailto:${supportEmail}`} className="pressContactLink">
              {supportEmail}
            </a>{' '}
            for general questions.
          </p>
          <Link className="secondaryButton" href="/about">
            About Selara
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
