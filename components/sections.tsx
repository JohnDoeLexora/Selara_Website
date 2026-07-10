import Link from 'next/link';
import { SlotImage } from '@/components/slot-image';
import { ReactNode, useId } from 'react';
import type { LegalDocument } from '@/lib/legal';
import { DownloadSelaraCta } from '@/components/download-cta';
import { PricingGridWithToggle } from '@/components/pricing-grid';
import {
  comparisonRows,
  faqs,
  futureTeaser,
  integrationItems,
  pricingBetaUpgradeCopy,
  roadmapItems,
  supportEmail,
  glossaryTerms,
  trustPillars,
  trustSignals,
  type ComparisonTableRow,
  type FaqItem,
  type GlossaryTerm,
  type TrustPillar,
  type TrustSignal,
  type TrustSignalIcon,
} from '@/lib/site-data';

export {
  ApprovalShowcase,
  BeforeAfterPanel,
  ComparisonContrastPanels,
  DeepPageMoment,
  FeatureCards,
  FeatureGrid,
  Hero,
  OpenClawContrastVisual,
  StatRow,
  StoryGrid,
  UseCaseGrid,
  WhoThisIsFor,
} from '@/components/sections-motion';

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Optional anchor for in-page links (e.g. pricing#plans). */
  id?: string;
  className?: string;
}) {
  const autoTitleId = useId();
  const titleId = id ? `${id}-heading` : autoTitleId;
  const sectionClass = className ? `section ${className}` : 'section';
  return (
    <section className={sectionClass} id={id} aria-labelledby={titleId}>
      <div className="shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="sectionHeading">
          <h2 id={titleId}>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  className?: string;
}) {
  const titleId = useId();
  return (
    <section className={className ? `pageHero ${className}` : 'pageHero'} aria-labelledby={titleId}>
      <div className="pageHeroAura pageHeroAuraLeft" />
      <div className="pageHeroAura pageHeroAuraRight" />
      <div className="shell pageHeroInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function RoadmapTimeline() {
  const statusOrder: Array<'shipped' | 'in-progress' | 'planned'> = ['shipped', 'in-progress', 'planned'];
  const statusLabels = {
    shipped: 'Shipped',
    'in-progress': 'In progress',
    planned: 'Planned',
  } as const;

  return (
    <div className="roadmapTimeline">
      {statusOrder.map((status) => {
        const group = roadmapItems.filter((item) => item.status === status);
        if (group.length === 0) return null;
        return (
          <div key={status} className="roadmapStatusGroup">
            <p className="roadmapStatusLabel">{statusLabels[status]}</p>
            <div className="roadmapCards">
              {group.map((item) => (
                <article key={item.title} className="contentCard contentCardPremium roadmapCard">
                  <div className="roadmapCardHead">
                    <h3>{item.title}</h3>
                    <span className={`roadmapPill roadmapPill${status.replace('-', '')}`}>{item.surface}</span>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FutureVisualSlot() {
  return (
    <div className="futureVisualSlot">
      <SlotImage
        slotKey="futureEcosystem"
        fill
        sizes="(max-width: 760px) 100vw, 860px"
        className="productScreenshot"
      />
    </div>
  );
}

export function IntegrationTicker() {
  const items = [...integrationItems, ...integrationItems];
  return (
    <div className="tickerWrap tickerWrapLarge" role="region" aria-label="Connected tools and integrations">
      <div className="tickerTrack tickerTrackLarge">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function competitorColumnClass(label: string) {
  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return slug === 'openclaw' ? 'comparisonColOpenClaw' : 'comparisonColCompetitor';
}

export function GenericComparisonTable({
  competitorLabel,
  rows,
  ariaLabel,
}: {
  competitorLabel: string;
  rows: ComparisonTableRow[];
  ariaLabel: string;
}) {
  const competitorClass = competitorColumnClass(competitorLabel);

  return (
    <div className="comparisonSectionFrame">
      <div
        className="comparisonTable comparisonTableExpanded comparisonTableEditorial"
        role="region"
        aria-label={ariaLabel}
      >
        <div className="comparisonHead comparisonRow">
          <span className="comparisonCategoryLabel">Category</span>
          <span className="comparisonColSelara">Selara</span>
          <span className={competitorClass}>{competitorLabel}</span>
        </div>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`comparisonRow comparisonRowInteractive${index % 2 === 1 ? ' comparisonRowZebra' : ''}`}
          >
            <span className="comparisonCategoryLabel">{row.label}</span>
            <span className="comparisonColSelara" data-comparison-col="Selara">
              {row.selara}
            </span>
            <span className={competitorClass} data-comparison-col={competitorLabel}>
              {row.competitor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <GenericComparisonTable
      competitorLabel="OpenClaw"
      rows={comparisonRows.map((row) => ({
        label: row.label,
        selara: row.selara,
        competitor: row.claw,
      }))}
      ariaLabel="Comparison of Selara and OpenClaw"
    />
  );
}

export function PricingGrid() {
  return <PricingGridWithToggle />;
}

export function BetaUpgradeCallout() {
  return <p className="betaUpgradeCallout">{pricingBetaUpgradeCopy}</p>;
}

export function PinnacleCallout() {
  return (
    <p className="pinnacleCallout">
      Pinnacle is for teams and households who need unlimited capacity and shared context.{' '}
      <a href={`mailto:${supportEmail}`}>Talk to us</a> for custom arrangements.
    </p>
  );
}

export function DownloadPreview() {
  return (
    <div className="twoColumn">
      <div className="contentCard">
        <h3>Delegation with follow-through</h3>
        <p>
          The live app turns intent into reviewed plans and real action — approvals and follow-through in one calm thread,
          the same surface you see on the home page.
        </p>
      </div>
      <div className="contentCard">
        <div className="approvalImageSlot" style={{ maxWidth: '100%', marginInline: 'auto' }}>
          <SlotImage
            slotKey="heroMainChat"
            fill
            sizes="(max-width: 760px) 72vw, 280px"
            className="productScreenshot"
          />
        </div>
      </div>
    </div>
  );
}

function TrustSignalIconSvg({ icon }: { icon: TrustSignalIcon }) {
  const common = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true as const };
  switch (icon) {
    case 'shield':
      return (
        <svg {...common}>
          <path
            d="M8 1.5 3 3.5v4.5c0 3 2.2 5.8 5 6.5 2.8-.7 5-3.5 5-6.5V3.5L8 1.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path
            d="M3 8.5 6.5 12 13 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'lock':
      return (
        <svg {...common}>
          <rect x="4" y="7" width="8" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M5.5 7V5.5a2.5 2.5 0 0 1 5 0V7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'roadmap':
      return (
        <svg {...common}>
          <circle cx="4" cy="8" r="1.5" fill="currentColor" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
          <circle cx="12" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M5.5 8h1.5M9.5 8h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function TrustSignalStrip({
  items = trustSignals,
  className,
  compact,
}: {
  items?: TrustSignal[];
  className?: string;
  compact?: boolean;
}) {
  const stripClass = ['trustSignalStrip', compact ? 'trustSignalStripCompact' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={stripClass} role="list" aria-label="Trust and security highlights">
      {items.map((signal) => {
        const content = (
          <>
            <TrustSignalIconSvg icon={signal.icon} />
            <span>{signal.label}</span>
          </>
        );
        if (signal.href) {
          return (
            <Link key={signal.label} href={signal.href} className="trustSignalPill" role="listitem">
              {content}
            </Link>
          );
        }
        return (
          <span key={signal.label} className="trustSignalPill" role="listitem">
            {content}
          </span>
        );
      })}
    </div>
  );
}

export function TrustPillarGrid({ items = trustPillars }: { items?: TrustPillar[] }) {
  return (
    <div className="trustPillarGrid">
      {items.map((pillar) => (
        <article key={pillar.title} className="contentCard contentCardPremium trustPillarCard">
          <h3>{pillar.title}</h3>
          <p>{pillar.body}</p>
          {pillar.href && pillar.linkLabel ? (
            <Link href={pillar.href} className="textLink trustPillarLink">
              {pillar.linkLabel}
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function GlossaryList({ items = glossaryTerms }: { items?: GlossaryTerm[] }) {
  return (
    <dl className="glossaryList">
      {items.map((entry) => (
        <div key={entry.id} id={entry.id} className="glossaryItem">
          <dt className="glossaryTerm">{entry.term}</dt>
          <dd className="glossaryDefinition">
            <p>{entry.definition}</p>
            {entry.href && entry.linkLabel ? (
              <Link href={entry.href} className="textLink">
                {entry.linkLabel}
              </Link>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function RelatedLinksRow({ links }: { links: { label: string; href: string }[] }) {
  return (
    <nav className="relatedLinksRow" aria-label="Related pages">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="secondaryButton">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function FaqList({ items = faqs, labelledBy }: { items?: FaqItem[]; labelledBy?: string }) {
  return (
    <div
      className="faqList faqListExpanded"
      role="region"
      aria-label={labelledBy ? undefined : 'Frequently asked questions'}
      aria-labelledby={labelledBy}
    >
      {items.map((item) => (
        <details key={item.q} className="faqItem faqItemExpanded">
          <summary>
            <span className="faqQuestion">{item.q}</span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FutureTeaser() {
  return (
    <div className="futureTeaser">
      <p className="eyebrow">{futureTeaser.eyebrow}</p>
      <h3 id="future-teaser-heading">{futureTeaser.title}</h3>
      <p>{futureTeaser.body}</p>
      <Link href={futureTeaser.href} className="secondaryButton">
        {futureTeaser.linkLabel}
      </Link>
    </div>
  );
}

export function CTASection({ showTrustSignals = true }: { showTrustSignals?: boolean }) {
  const titleId = useId();
  return (
    <section className="section" id="cta" aria-labelledby={titleId}>
      <div className="shell">
        <div className="ctaPanel ctaPanelExpanded">
          <p className="eyebrow">Open beta</p>
          <h2 id={titleId}>The open beta is live.</h2>
          <p>
            Calendar intelligence, approvals, and follow-through—and a bespoke assistant that tailors itself to your
            life. Available now in open beta for professionals who are tired of their calendar and inbox running their
            week.
          </p>
          {showTrustSignals ? <TrustSignalStrip className="ctaTrustStrip" compact /> : null}
          <div className="ctaRow ctaRowCentered">
            <DownloadSelaraCta className="primaryButton" data-cta="cta-section-download" />
            <Link className="secondaryButton" href="/pricing" data-cta="cta-section-pricing">
              See plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalLinkRow({ current }: { current: 'privacy' | 'terms' }) {
  const links = [
    { href: '/privacy', label: 'Privacy Policy', key: 'privacy' as const },
    { href: '/terms', label: 'Terms of Service', key: 'terms' as const },
    { href: '/trust', label: 'Security & Trust', key: 'trust' as const },
  ];

  return (
    <nav className="legalLinkRow" aria-label="Related legal pages">
      {links.map(({ href, label, key }) =>
        key === current ? (
          <span key={href} className="legalLinkRowCurrent" aria-current="page">
            {label}
          </span>
        ) : (
          <Link key={href} href={href} className="textLink">
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}

function formatLegalSectionTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function LegalBody({ document }: { document: LegalDocument }) {
  return (
    <div className="legalCard">
      <article className="legalArticle" aria-label="Legal document">
        <aside className="legalToc" aria-label="On this page">
          <p className="legalTocLabel">On this page</p>
          <nav>
            <ol className="legalTocList">
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="legalTocLink">
                    {formatLegalSectionTitle(section.title)}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="legalContent legalBodyText">
          <p className="legalLastModified">Last Modified: {document.lastModified}</p>

          <div className="legalPreamble">
            {document.preamble.map((paragraph, index) => (
              <p key={`preamble-${index}`}>{paragraph}</p>
            ))}
          </div>

          {document.sections.map((section) => (
            <section key={section.id} id={section.id} className="legalSection" aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`} className="legalSectionTitle">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
