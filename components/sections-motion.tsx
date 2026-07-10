'use client';

import Link from 'next/link';
import { SlotImage } from '@/components/slot-image';
import type { ImageSlotKey } from '@/lib/site-data';
import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';
import { HeroCtaExperiment, HeroLeadExperiment } from '@/components/hero-experiments';
import {
  approvalTrustCopy,
  editorialStats,
  featureHighlights,
  heroSignals,
  heroValuePoints,
  isExternalUrl,
  personaProfiles,
  storyMoments,
  type ComparisonContrastPanel,
  type CapabilityUseCase,
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

function HeroValuePoint({ label, href }: { label: string; href?: string }) {
  if (!href) {
    return <span>{label}</span>;
  }
  const external = isExternalUrl(href);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return <Link href={href}>{label}</Link>;
}

const heroShowcase = {
  primary: {
    slot: 'calendarIntelligence' as const satisfies ImageSlotKey,
    label: 'Calendar intelligence',
    title: 'A schedule that explains the day, not just lists it.',
    copy: 'Selara layers context, recommendations, and follow-up into the calendar view so your day feels interpreted instead of merely tracked.',
    chips: ['Agenda + day view', 'AI commentary', 'Ask about this day'],
  },
  secondary: {
    slot: 'heroMainChat' as const satisfies ImageSlotKey,
    label: 'Delegation',
    title: 'Delegation that stays human all the way through.',
    copy: 'Approvals and follow-through stay in one calm thread—and a bespoke assistant that tailors itself to your life—so it feels like a partner, not another inbox.',
    stat: 'Follow-through, context, and action',
  },
};

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
          <HeroLeadExperiment />
          <div className="proofRow">
            {heroValuePoints.map((item) => (
              <HeroValuePoint key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
          <div className="heroActionRow">
            <HeroCtaExperiment />
            <Link className="secondaryButton" href="/pricing" data-cta="hero-pricing">
              See pricing
            </Link>
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
            <h3>{heroShowcase.primary.title}</h3>
            <p>{heroShowcase.primary.copy}</p>
            <div className="productScreenStage productScreenStageHero">
              <div className="productScreenAura productScreenAuraBlue" aria-hidden />
              <div className="productScreenFrame productScreenFrameHero">
                <div className="productScreenNotch" />
                <div className="productScreenImageWrap">
                  <SlotImage
                    slotKey={heroShowcase.primary.slot}
                    fill
                    sizes="(max-width: 760px) 78vw, (max-width: 1180px) 56vw, 29vw"
                    className="productScreenshot"
                  />
                </div>
              </div>
            </div>
            <div className="chipGrid">
              {heroShowcase.primary.chips.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="heroWindow heroWindowSecondary">
            <div className="heroWindowHeader" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <div className="heroWindowBody heroWindowBodyProduct">
              <div className="heroProductHeader">
                <h3 className="heroWindowTitle">{heroShowcase.secondary.title}</h3>
                <p className="heroWindowCopy">{heroShowcase.secondary.copy}</p>
              </div>
              <div className="productScreenStage productScreenStageSecondary">
                <div className="productScreenAura productScreenAuraBlue" aria-hidden />
                <div className="productScreenAura productScreenAuraGold" aria-hidden />
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
                <div className="productStageCard">
                  <span>What is live here</span>
                  <strong>{heroShowcase.secondary.stat}</strong>
                </div>
              </div>
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

export function StoryGrid() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="storyGrid storyGridExpanded storyGridConnected">
      {storyMoments.map((item, index) => (
        <motion.article
          key={item.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : index * 0.08 }}
          className="storyCard storyCardExpanded storyCardInteractive"
          whileHover={reduce ? undefined : { y: -2 }}
        >
          <p className="storyIndex">0{index + 1}</p>
          {index < storyMoments.length - 1 ? (
            <span className="storyConnector" aria-hidden="true" />
          ) : null}
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
        <p className="showcaseNarrativeLink">
          <Link href="/how-selara-thinks" className="secondaryButton">
            Learn how Selara thinks
          </Link>
          <Link href="/trust" className="textLink">
            Security &amp; Trust
          </Link>
        </p>
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
          <div className="approvalImageSlot">
            <SlotImage slotKey="approvalFlow" fill sizes="220px" className="productScreenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeepPageMoment({ moment }: { moment: DeepPageMomentData }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);

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

export function WhoThisIsFor() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="audienceGrid personaGrid">
      {personaProfiles.map((profile, index) => (
        <motion.article
          key={profile.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : index * 0.06 }}
          className={`audienceCard personaCard personaCard--${profile.accent}`}
          whileHover={reduce ? undefined : { y: -3 }}
        >
          <h3>{profile.title}</h3>
          <p>{profile.body}</p>
          <ul className="personaWorkflows">
            {profile.workflows.map((workflow) => (
              <li key={workflow}>{workflow}</li>
            ))}
          </ul>
          <Link href={profile.ctaHref} className="personaCta">
            {profile.ctaLabel}
          </Link>
        </motion.article>
      ))}
    </div>
  );
}

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

export function FeatureCards() {
  return <FeatureGrid items={featureHighlights} />;
}

export function UseCaseGrid({ items }: { items: CapabilityUseCase[] }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="useCaseGrid">
      {items.map((item, index) => (
        <motion.article
          key={`${item.persona}-${item.scenario.slice(0, 32)}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : index * 0.05 }}
          className="useCaseCard contentCard"
        >
          <p className="useCaseCardPersona">{item.persona}</p>
          <h3>{item.scenario}</h3>
          <p className="useCaseCardOutcome">{item.outcome}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function BeforeAfterPanel({ before, after }: { before: string[]; after: string[] }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  return (
    <div className="beforeAfterPanel">
      <motion.div
        className="beforeAfterColumn beforeAfterColumnBefore"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.5 }}
      >
        <p className="beforeAfterLabel">Before Selara</p>
        <ul className="beforeAfterList">
          {before.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="beforeAfterColumn beforeAfterColumnAfter"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.08 }}
      >
        <p className="beforeAfterLabel">After Selara</p>
        <ul className="beforeAfterList">
          {after.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function ComparisonContrastPanels({
  competitor,
  selara,
}: {
  competitor: ComparisonContrastPanel;
  selara: ComparisonContrastPanel;
}) {
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
        <p className="eyebrow">{competitor.eyebrow}</p>
        <h3>{competitor.title}</h3>
        <p>{competitor.copy}</p>
        <ul className="contrastChaosList">
          {competitor.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
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
        <p className="eyebrow">{selara.eyebrow}</p>
        <h3>{selara.title}</h3>
        <p>{selara.copy}</p>
        <ul className="contrastChaosList">
          {selara.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
}

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
        <div className="pageImageSlot">
          <SlotImage slotKey="approvalFlow" fill sizes="(max-width: 760px) 72vw, 280px" className="productScreenshot" />
        </div>
      </motion.article>
    </div>
  );
}
