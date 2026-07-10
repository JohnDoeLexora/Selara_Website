import Link from 'next/link';
import { Gift, Sparkles, UserPlus } from 'lucide-react';
import { DownloadSelaraCta } from '@/components/download-cta';
import { referralProgram, supportEmail } from '@/lib/site-data';

const stepIcons = [UserPlus, Gift, Sparkles] as const;

type ReferralSectionProps = {
  variant?: 'full' | 'compact';
  id?: string;
};

export function ReferralSection({ variant = 'full', id = 'invite' }: ReferralSectionProps) {
  if (variant === 'compact') {
    return (
      <div className="contentCard contentCardPremium referralCardCompact" id={id}>
        <p className="eyebrow">{referralProgram.eyebrow}</p>
        <h3>{referralProgram.compactTitle}</h3>
        <p>{referralProgram.compactIntro}</p>
        <div className="chipGrid">
          <DownloadSelaraCta className="primaryButton" data-cta="referral-compact-download" />
          <Link className="secondaryButton" href="/invite" data-cta="referral-how-it-works">
            How invites work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="referralPanel" id={id}>
      <div className="referralPanelIntro contentCard contentCardPremium contentCardPremiumStar">
        <p className="eyebrow">{referralProgram.eyebrow}</p>
        <h3>{referralProgram.title}</h3>
        <p>{referralProgram.intro}</p>
        <ul className="referralBenefits">
          {referralProgram.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <div className="chipGrid">
          <DownloadSelaraCta className="primaryButton" data-cta="referral-download" />
          <a className="secondaryButton" href={referralProgram.secondaryCtaHref} data-cta="referral-questions">
            {referralProgram.secondaryCtaLabel}
          </a>
        </div>
      </div>
      <ol className="referralSteps">
        {referralProgram.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? Sparkles;
          return (
            <li key={step.title} className="contentCard contentCardPremium referralStep">
              <span className="referralStepIcon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div>
                <p className="referralStepNumber">Step {index + 1}</p>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="referralFinePrint">
        Invite links live in the app under Settings → Invite. Questions?{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </div>
  );
}
