'use client';

import Link from 'next/link';
import { SlotImage } from '@/components/slot-image';
import type { ImageSlotKey } from '@/lib/site-data';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, useId } from 'react';
import {
  approvalTrustCopy,
  betaUrl,
  comparisonRows,
  editorialStats,
  faqs,
  featureHighlights,
  futureTeaser,
  heroSignals,
  integrationItems,
  isExternalUrl,
  pricingBetaNote,
  pricingBetaUpgradeCopy,
  pricingPlans,
  productScenes,
  proofPoints,
  audienceProfiles,
  storyMoments,
  supportEmail,
  type FeatureItem,
  type DeepPageMomentData,
} from '@/lib/site-data';

function makeFadeVariants(reduce: boolean | null) {
  const off = reduce === true;
  return {
    hidden: { opacity: off ? 1 : 0, y: off ? 0 : 36 },
    show: { opacity: 1, y: 0 },
  };
}

function HeroSignalLink({ label, href }: { label: string; href: string }) {
  const external = isExternalUrl(href);
  const className = 'signalPill';
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

const heroShowcase = {
  // IMAGE SLOT: hero-main-chat.png — replace with real screenshot from /public/images/real-app/
  primary: {
    slot: 'heroMainChat' as const satisfies ImageSlotKey,
    label: 'Voice + approvals',
    title: 'Delegation that stays human all the way through.',
    copy: 'Memory, voice, and follow-through stay in one calm thread—so the assistant feels like a partner, not another inbox.',
    stat: 'Voice, memory, and action',
  },
  // IMAGE SLOT: calendar-intelligence.png — replace with real screenshot from /public/images/real-app/
  secondary: {
    slot: 'calendarIntelligence' as const satisfies ImageSlotKey,
    label: 'Calendar intelligence',
    title: 'A schedule that explains the day, not just lists it.',
    copy: 'Selara layers context, recommendations, and follow-up into the calendar view so your day feels interpreted instead of merely tracked.',
    chips: ['Agenda + day view', 'AI commentary', 'Ask about this day'],
  },
};

const runwayScreenSlots = [
  'sidebarNav',
  'premiumSettings',
  'subscriptionView',
] as const satisfies readonly ImageSlotKey[];

const runwayScreenBadges = ['Navigation', 'Preferences', 'Billing'] as const;

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

// IMAGE SLOT: future-ecosystem.png — replace with real screenshot from /public/images/real-app/
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

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  const heroTitleId = useId();
  return (
    <section className="hero heroExpanded" aria-labelledby={heroTitleId}>
      <div className="heroBackdrop" aria-hidden />
      <div className="heroGridLines" aria-hidden />
      <div className="shell heroGrid heroGridExpanded">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: reduce ? 0 : 0.7 }} className="heroCopy">
          <div className="signalRow">
            {heroSignals.map((item) => (
              <HeroSignalLink key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
          <h1 id={heroTitleId}>
            Selara
            <span>Your Personal Assistant</span>
          </h1>
          <p className="heroLead">
            Say what you need. See the plan. It only moves when you say yes. Live in open beta now.
          </p>
          <div className="ctaRow">
            <a className="primaryButton" href={betaUrl}>Open Beta</a>
            <Link className="secondaryButton" href="/pricing">See Pricing</Link>
          </div>
          <div className="proofRow">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.1 }}
          className="heroStage"
        >
          <div className="heroHalo heroHaloBlue" aria-hidden />
          <div className="heroHalo heroHaloGold" aria-hidden />
          <div className="heroWindow heroWindowPrimary">
            <div className="heroWindowHeader" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <div className="heroWindowBody heroWindowBodyProduct">
              <div className="heroProductHeader">
                <h3 className="heroWindowTitle">{heroShowcase.primary.title}</h3>
                <p className="heroWindowCopy">{heroShowcase.primary.copy}</p>
              </div>
              <div className="productScreenStage productScreenStageHero">
                <div className="productScreenAura productScreenAuraBlue" aria-hidden />
                <div className="productScreenAura productScreenAuraGold" aria-hidden />
                <div className="productScreenFrame productScreenFrameHero">
                  <div className="productScreenNotch" />
                  <div className="productScreenImageWrap">
                    <SlotImage
                      slotKey={heroShowcase.primary.slot}
                      fill
                      priority
                      sizes="(max-width: 760px) 78vw, (max-width: 1180px) 56vw, 29vw"
                      className="productScreenshot"
                    />
                  </div>
                </div>
                <div className="productStageCard">
                  <span>What is live here</span>
                  <strong>{heroShowcase.primary.stat}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="heroWindow heroWindowSecondary">
            <h3>{heroShowcase.secondary.title}</h3>
            <p>{heroShowcase.secondary.copy}</p>
            <div className="productScreenStage productScreenStageSecondary">
              <div className="productScreenAura productScreenAuraBlue" aria-hidden />
              <div className="productScreenFrame productScreenFrameSecondary">
                <div className="productScreenNotch" />
                <div className="productScreenImageWrap">
                  <SlotImage
                    slotKey={heroShowcase.secondary.slot}
                    fill
                    sizes="(max-width: 760px) 70vw, (max-width: 1180px) 42vw, 18vw"
                    className="productScreenshot"
                  />
                </div>
              </div>
            </div>
            <div className="chipGrid">
              {heroShowcase.secondary.chips.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StatRow() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="statRow">
      {editorialStats.map((item, index) => (
        <motion.article
          key={item.label}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : index * 0.08 }}
          className="statCard"
        >
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </motion.article>
      ))}
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

export function StoryGrid() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="storyGrid storyGridExpanded">
      {storyMoments.map((item, index) => (
        <motion.article
          key={item.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : index * 0.08 }}
          className="storyCard storyCardExpanded"
        >
          <p className="storyIndex">0{index + 1}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function ApprovalShowcase() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="approvalShowcase">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.55 }}
        className="showcaseNarrative"
      >
        <p className="eyebrow">Approval-first</p>
        <h3>Approval-first automation, designed for high-stakes weeks.</h3>
        <p>
          Selara shows a clear plan before anything touches your calendar, inbox, or connected tools—so powerful help
          feels composed and intentional, not rushed or opaque.
        </p>
        <p>{approvalTrustCopy}</p>
      </motion.div>
      <div className="approvalColumn">
        <div className="approvalSequenceCard">
          <div className="sequenceStep">
            <p>Request</p>
            <span>“Push the board prep to Monday and notify everyone.”</span>
          </div>
          <div className="sequenceStep emphasis">
            <p>Plan</p>
            <span>Selara proposes the reschedule, drafts the note, and shows each external step before anything is sent.</span>
          </div>
          <div className="sequenceStep">
            <p>Control</p>
            <span>You approve, edit, or reject with full visibility into what changes next.</span>
          </div>
        </div>
        <div className="approvalGhostCard">
          <p className="windowLabel">Why it matters</p>
          <h3>Real luxury is power without the anxiety that usually comes with it.</h3>
          {/* IMAGE SLOT: approval-flow.png — replace with real screenshot from /public/images/real-app/ */}
          <div className="approvalImageSlot">
            <SlotImage slotKey="approvalFlow" fill sizes="220px" className="productScreenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Lighter approval-first moment for deep pages — narrative + one image slot. */
export function DeepPageMoment({ moment }: { moment: DeepPageMomentData }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  // IMAGE SLOT — see moment.slotFilename in deepPageMoments; replace with real screenshot from /public/images/real-app/

  return (
    <div className="deepPageMoment">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.55 }}
        className="deepPageMomentCopy"
      >
        <p className="eyebrow">{moment.eyebrow}</p>
        <h3>{moment.title}</h3>
        <p>{moment.body}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.08 }}
        className="deepPageMomentVisual"
      >
        {/* IMAGE SLOT — see deepPageMoments.slotFilename — replace with real screenshot from /public/images/real-app/ */}
        <div className="deepPageImageSlot">
          <SlotImage
            slotKey={moment.slot}
            fill
            sizes="(max-width: 760px) 72vw, 320px"
            className="productScreenshot"
          />
        </div>
      </motion.div>
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

/** Early home signal: who Selara is built for — editorial, not persona marketing. */
export function WhoThisIsFor() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="audienceGrid">
      {audienceProfiles.map((profile, index) => (
        <motion.article
          key={profile.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : index * 0.06 }}
          className="audienceCard"
        >
          <h3>{profile.title}</h3>
          <p>{profile.body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function FeatureCards() {
  // Delegate to the reusable grid so we have one rendering implementation
  return <FeatureGrid items={featureHighlights} />;
}

/** Reusable outcome-focused feature grid. Use this on dedicated pages instead of hand-writing repetitive 3-card blocks. */
export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="featureGrid featureGridExpanded">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : index * 0.05 }}
          className="featureCard featureCardExpanded"
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          {item.href ? (
            <Link href={item.href} aria-label={`Learn more about ${item.title}`}>
              Learn more
            </Link>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}

export function ProductRunway() {
  const reduce = useReducedMotion();
  return (
    <div className="runwayGrid">
      {productScenes.map((scene, index) => {
        const slotKey = runwayScreenSlots[index];
        const badge = runwayScreenBadges[index];
        const tilt = index === 1 ? 0 : index === 0 ? -3 : 3;

        return (
        <motion.article
          key={scene.title}
          initial={
            reduce
              ? { opacity: 1, y: 0, rotate: tilt }
              : { opacity: 0, y: 40, rotate: tilt }
          }
          whileInView={{ opacity: 1, y: 0, rotate: tilt }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : index * 0.08 }}
          className="runwayCard"
        >
          <div className="runwayChrome" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="runwayBody">
            <p className="windowLabel">{scene.kicker}</p>
            <h3>{scene.title}</h3>
            <p>{scene.copy}</p>
            <div className="runwayAssetStage">
              <div className="assetPlaceholderGlow" aria-hidden />
              <div className="productStagePill runwayStagePill">{badge}</div>
              <div className="productScreenFrame productScreenFrameRunway">
                <div className="productScreenNotch" />
                <div className="productScreenImageWrap">
                  <SlotImage
                    slotKey={slotKey}
                    fill
                    sizes="(max-width: 760px) 72vw, (max-width: 1180px) 40vw, 21vw"
                    className="productScreenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.article>
        );
      })}
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div className="comparisonSectionFrame">
      <div
        className="comparisonTable comparisonTableExpanded comparisonTableEditorial"
        role="region"
        aria-label="Comparison of Selara and OpenClaw"
      >
        <div className="comparisonHead comparisonRow">
          <span className="comparisonCategoryLabel">Category</span>
          <span className="comparisonColSelara">Selara</span>
          <span className="comparisonColOpenClaw">OpenClaw</span>
        </div>
        {comparisonRows.map((row, index) => (
          <div
            key={row.label}
            className={`comparisonRow${index % 2 === 1 ? ' comparisonRowZebra' : ''}`}
          >
            <span className="comparisonCategoryLabel">{row.label}</span>
            <span className="comparisonColSelara" data-comparison-col="Selara">
              {row.selara}
            </span>
            <span className="comparisonColOpenClaw" data-comparison-col="OpenClaw">
              {row.claw}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Calm vs chaotic contrast for /vs-openclaw — editorial two-panel moment. */
export function OpenClawContrastVisual() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="openClawContrast">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.55 }}
        className="openClawContrastPanel openClawContrastPanel--chaotic contrastCard--chaotic"
      >
        <p className="eyebrow">Powerful agents</p>
        <h3>Throughput without guardrails</h3>
        <p>
          Fast loops, opaque steps, and the mental tax of wondering what just changed in your inbox or calendar.
        </p>
        <ul className="contrastChaosList">
          <li>Actions can run before you see the full plan</li>
          <li>High-profile misfires are part of the category story</li>
          <li>You clean up more than you delegate</li>
        </ul>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.08 }}
        className="openClawContrastPanel openClawContrastPanel--calm contrastCard--calm"
      >
        <p className="eyebrow">Selara</p>
        <h3>It shows you the plan first</h3>
        <p>
          You see exactly what it’s about to do. You approve, change it, or tell it to stop.
        </p>
        {/* IMAGE SLOT: approval-flow.png — replace with real screenshot from /public/images/real-app/ */}
        <div className="pageImageSlot">
          <SlotImage slotKey="approvalFlow" fill sizes="(max-width: 760px) 72vw, 280px" className="productScreenshot" />
        </div>
      </motion.article>
    </div>
  );
}

export function PricingGrid() {
  return (
    <div className="pricingSectionFrame">
      <div className="pricingGrid pricingGridExpanded">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={`pricingCard pricingCardExpanded${plan.featured ? ' featured' : ''}`}>
            <div className="pricingTopline">
              <p className="eyebrow">{plan.name}</p>
              {plan.featured ? <span className="planBadge">Recommended</span> : null}
            </div>
            <h3>
              {plan.monthlyPrice}
              <span>/mo</span>
            </h3>
            <p className="annualHeadline">{plan.yearlyPrice}/year</p>
            {'annualSavings' in plan && plan.annualSavings ? (
              <p className="annualSavings">{plan.annualSavings}</p>
            ) : null}
            <p className="annualNote">{plan.monthlyEquivalent}</p>
            <p className="pricingBetaNote">{pricingBetaNote}</p>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link href={plan.href} className={plan.featured ? 'primaryButton' : 'secondaryButton'}>
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
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

/** Single product preview for /download — lighter than the full ProductRunway. */
export function DownloadPreview() {
  return (
    <div className="twoColumn">
      <div className="contentCard">
        <h3>Voice + approvals in one thread</h3>
        <p>The live app turns spoken intent into reviewed plans — the same calm surface you see on the home page.</p>
      </div>
      <div className="contentCard">
        {/* IMAGE SLOT: hero-main-chat.png — replace with real screenshot from /public/images/real-app/ */}
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

export function FaqList() {
  return (
    <div className="faqList faqListExpanded" role="region" aria-label="Frequently asked questions">
      {faqs.map((item) => (
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

export function CTASection() {
  const titleId = useId();
  return (
    <section className="section" id="cta" aria-labelledby={titleId}>
      <div className="shell">
        <div className="ctaPanel ctaPanelExpanded">
          <p className="eyebrow">Open beta</p>
          <h2 id={titleId}>The open beta is live.</h2>
          <p>
            Say what you need. See the plan. It only does things after you say yes. 
            Built for people who are tired of their calendar and inbox running their life.
          </p>
          <div className="ctaRow ctaRowCentered">
            <a className="primaryButton" href={betaUrl}>Open Beta</a>
            <Link className="secondaryButton" href="/pricing">See plans</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalBody({ text }: { text: string }) {
  return <div className="legalCard legalBodyText">{text}</div>;
}
