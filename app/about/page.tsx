import Link from 'next/link';
import {
  aboutMission,
  aboutValues,
  aboutWhyWeBuilt,
  builtWithIntro,
  builtWithItems,
  founderBio,
  getPageMetadata,
  pressEmail,
  supportEmail,
} from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/about');

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutMission.eyebrow}
        title={aboutMission.title}
        intro={aboutMission.intro}
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
        className="sectionAlt"
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

      <Section
        eyebrow={aboutWhyWeBuilt.eyebrow}
        title={aboutWhyWeBuilt.title}
        intro={aboutWhyWeBuilt.intro}
      >
        <div className="contentCard contentCardPremium">
          <p>{aboutWhyWeBuilt.body}</p>
        </div>
      </Section>

      <Section
        className="sectionAlt"
        eyebrow="Values"
        title="What we optimize for."
        intro="Four principles that show up in the product, the policies, and every decision about what Selara should and should not do."
      >
        <div className="storyGrid storyGridExpanded">
          {aboutValues.map((value) => (
            <article key={value.key} className="contentCard contentCardPremium">
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
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

      <Section
        className="sectionAlt"
        eyebrow="Built with"
        title="Built with care, not hype."
        intro={builtWithIntro}
      >
        <div className="builtWithGrid">
          {builtWithItems.map((item) => (
            <article key={item.label} className="builtWithCard">
              <p className="builtWithLabel">{item.label}</p>
              <p className="builtWithDetail">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="sectionInlineLink">
          <Link href="/trust" className="textLink">
            Security &amp; Trust
          </Link>
          <Link href="/how-selara-thinks" className="textLink">
            How Selara thinks
          </Link>
        </p>
      </Section>

      <Section
        eyebrow="Contact"
        title="Get in touch."
        intro="Press inquiries, partnerships, or questions about Selara."
      >
        <div className="contentCard contentCardPremium pressContactCard">
          <p>
            Email{' '}
            <a href={`mailto:${pressEmail}`} className="pressContactLink">
              {pressEmail}
            </a>{' '}
            for press and media, or{' '}
            <a href={`mailto:${supportEmail}`} className="pressContactLink">
              {supportEmail}
            </a>{' '}
            for product support.
          </p>
          <Link className="secondaryButton" href="/press">
            Press kit
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
