'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  betaUrl,
  comparisonRows,
  editorialStats,
  faqs,
  featureHighlights,
  heroSignals,
  integrationItems,
  pricingPlans,
  productScenes,
  proofPoints,
  storyMoments,
} from '@/lib/site-data';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const heroShowcase = {
  primary: {
    src: '/images/selara-chat.png',
    alt: 'Selara chat screen with the assistant greeting the user and a voice-first composer.',
    label: 'Live conversation',
    title: 'Delegation that stays human all the way through.',
    copy: 'The real chat surface keeps memory, voice, and execution in one calm thread instead of turning the assistant into a generic inbox.',
    stat: 'Voice, memory, and action',
  },
  secondary: {
    src: '/images/selara-schedule.png',
    alt: 'Selara schedule screen showing agenda view with AI commentary for the day.',
    label: 'Calendar intelligence',
    title: 'A schedule that explains the day, not just lists it.',
    copy: 'Selara layers context, recommendations, and follow-up into the calendar view so your day feels interpreted instead of merely tracked.',
    chips: ['Agenda + day view', 'AI commentary', 'Ask about this day'],
  },
};

const runwayScreens = [
  {
    src: '/images/selara-sidebar.png',
    alt: 'Selara sidebar navigation showing chat, conversations, documents, schedule, settings, and recent activity.',
    badge: 'Navigation shell',
  },
  {
    src: '/images/selara-settings.png',
    alt: 'Selara settings screen showing profile completion, subscription plan, appearance controls, and voice toggles.',
    badge: 'Preferences',
  },
  {
    src: '/images/selara-subscription.png',
    alt: 'Selara subscription management screen showing the Pinnacle plan, billing details, and plan controls.',
    badge: 'Billing',
  },
];

export function Section({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="sectionHeading">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="pageHero">
      <div className="pageHeroAura pageHeroAuraLeft" />
      <div className="pageHeroAura pageHeroAuraRight" />
      <div className="shell pageHeroInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="hero heroExpanded">
      <div className="heroBackdrop" />
      <div className="heroGridLines" />
      <div className="shell heroGrid heroGridExpanded">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }} className="heroCopy">
          <div className="signalRow">
            {heroSignals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <h1>
            Selara
            <span>Your Personal Assistant</span>
          </h1>
          <p className="heroLead">
            Your time, finally yours. Selara is the premium AI assistant built to reclaim hours, reduce drag,
            and make powerful automation feel trustworthy.
          </p>
          <div className="ctaRow">
            <a className="primaryButton" href={betaUrl}>Download Beta</a>
            <Link className="secondaryButton" href="/pricing">See Pricing</Link>
          </div>
          <div className="proofRow">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="heroStage"
        >
          <div className="heroHalo heroHaloBlue" />
          <div className="heroHalo heroHaloGold" />
          <div className="heroWindow heroWindowPrimary">
            <div className="heroWindowHeader">
              <span />
              <span />
              <span />
            </div>
            <div className="heroWindowBody heroWindowBodyProduct">
              <div className="heroProductHeader">
                <p className="windowLabel">{heroShowcase.primary.label}</p>
                <h3 className="heroWindowTitle">{heroShowcase.primary.title}</h3>
                <p className="heroWindowCopy">{heroShowcase.primary.copy}</p>
              </div>
              <div className="productScreenStage productScreenStageHero">
                <div className="productScreenAura productScreenAuraBlue" />
                <div className="productScreenAura productScreenAuraGold" />
                <div className="productStagePill">{heroShowcase.primary.label}</div>
                <div className="productScreenFrame productScreenFrameHero">
                  <div className="productScreenNotch" />
                  <div className="productScreenImageWrap">
                    <Image
                      src={heroShowcase.primary.src}
                      alt={heroShowcase.primary.alt}
                      fill
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
            <p className="windowLabel">{heroShowcase.secondary.label}</p>
            <h3>{heroShowcase.secondary.title}</h3>
            <p>{heroShowcase.secondary.copy}</p>
            <div className="productScreenStage productScreenStageSecondary">
              <div className="productScreenAura productScreenAuraBlue" />
              <div className="productScreenFrame productScreenFrameSecondary">
                <div className="productScreenNotch" />
                <div className="productScreenImageWrap">
                  <Image
                    src={heroShowcase.secondary.src}
                    alt={heroShowcase.secondary.alt}
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
  return (
    <div className="statRow">
      {editorialStats.map((item, index) => (
        <motion.article
          key={item.label}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: index * 0.08 }}
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
    <div className="tickerWrap tickerWrapLarge">
      <div className="tickerTrack tickerTrackLarge">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function StoryGrid() {
  return (
    <div className="storyGrid storyGridExpanded">
      {storyMoments.map((item, index) => (
        <motion.article
          key={item.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: index * 0.08 }}
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
  return (
    <div className="approvalShowcase">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="showcaseNarrative">
        <p className="eyebrow">Approval-first</p>
        <h2>The conversation and approval concept, finally executed like it belongs in a premium product.</h2>
        <p>
          You liked the old concept, not the old execution. So this version makes the approval model feel cinematic,
          trustworthy, and expensive instead of merely explanatory.
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
            <span>Selara proposes the reschedule, drafts the note, and shows each external action before execution.</span>
          </div>
          <div className="sequenceStep">
            <p>Control</p>
            <span>You approve, edit, or reject with full visibility into what changes next.</span>
          </div>
        </div>
        <div className="approvalGhostCard">
          <p className="windowLabel">Why it matters</p>
          <h3>Luxury is not just visual polish. It is being powerful without making people nervous.</h3>
        </div>
      </div>
    </div>
  );
}

export function FeatureCards() {
  return (
    <div className="featureGrid featureGridExpanded">
      {featureHighlights.map((item, index) => (
        <motion.article
          key={item.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: index * 0.05 }}
          className="featureCard featureCardExpanded"
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <Link href={item.href}>Explore this angle</Link>
        </motion.article>
      ))}
    </div>
  );
}

export function ProductRunway() {
  return (
    <div className="runwayGrid">
      {productScenes.map((scene, index) => {
        const screenshot = runwayScreens[index];

        return (
        <motion.article
          key={scene.title}
          initial={{ opacity: 0, y: 40, rotate: index === 1 ? 0 : index === 0 ? -3 : 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 0 : index === 0 ? -3 : 3 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          className="runwayCard"
        >
          <div className="runwayChrome">
            <span />
            <span />
            <span />
          </div>
          <div className="runwayBody">
            <p className="windowLabel">{scene.kicker}</p>
            <h3>{scene.title}</h3>
            <p>{scene.copy}</p>
            <div className="runwayAssetStage">
              <div className="assetPlaceholderGlow" />
              <div className="productStagePill runwayStagePill">{screenshot.badge}</div>
              <div className="productScreenFrame productScreenFrameRunway">
                <div className="productScreenNotch" />
                <div className="productScreenImageWrap">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
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
    <div className="comparisonTable comparisonTableExpanded">
      <div className="comparisonHead comparisonRow">
        <span>Category</span>
        <span>Selara</span>
        <span>OpenClaw</span>
      </div>
      {comparisonRows.map((row) => (
        <div key={row.label} className="comparisonRow">
          <span>{row.label}</span>
          <span>{row.selara}</span>
          <span>{row.claw}</span>
        </div>
      ))}
    </div>
  );
}

export function PricingGrid() {
  return (
    <div className="pricingGrid pricingGridExpanded">
      {pricingPlans.map((plan) => (
        <article key={plan.name} className={`pricingCard pricingCardExpanded${plan.featured ? ' featured' : ''}`}>
          <div className="pricingTopline">
            <p className="eyebrow">{plan.name}</p>
            <span className="productIdTag">{plan.productId}</span>
          </div>
          <h3>{plan.monthlyPrice}<span>/mo</span></h3>
          <p className="annualHeadline">{plan.yearlyPrice}/year</p>
          <p className="annualNote">{plan.monthlyEquivalent}</p>
          <p>{plan.description}</p>
          <ul>
            {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="stripeIdStack">
            <span>Monthly price ID: {plan.monthlyPriceId}</span>
            <span>Yearly price ID: {plan.yearlyPriceId}</span>
          </div>
          <Link href={plan.href} className={plan.featured ? 'primaryButton' : 'secondaryButton'}>{plan.cta}</Link>
        </article>
      ))}
    </div>
  );
}

export function FaqList() {
  return (
    <div className="faqList faqListExpanded">
      {faqs.map((item) => (
        <details key={item.q} className="faqItem faqItemExpanded">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="ctaPanel ctaPanelExpanded">
          <p className="eyebrow">Open beta</p>
          <h2>Reclaim your time with an assistant people will actually want to trust.</h2>
          <p>
            The site is now set up to feel premium before the final asset pass. Plug in your beta link, drop in final
            visuals, and it is ready to sell Selara like a serious product.
          </p>
          <div className="ctaRow ctaRowCentered">
            <a className="primaryButton" href={betaUrl}>Download Beta</a>
            <Link className="secondaryButton" href="/download">See beta flow</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalBody({ text }: { text: string }) {
  return <div className="legalCard legalBodyText">{text}</div>;
}
