import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://selara.app';
// For launch: set NEXT_PUBLIC_BETA_URL to the real public TestFlight link.
// The site treats this as a direct capstone link (no form or waitlist).
export const betaUrl = process.env.NEXT_PUBLIC_BETA_URL || '/download';
export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@selaraillc.com';

export function isExternalUrl(url: string) {
  return /^https?:\/\//.test(url);
}

/** Real-app screenshot targets + placeholders until files land in public/images/real-app/ */
export const REAL_APP_IMAGES = '/images/real-app';

export const imageSlots = {
  heroMainChat: {
    target: `${REAL_APP_IMAGES}/hero-main-chat.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara chat screen with voice input and calm professional interface.',
  },
  calendarIntelligence: {
    target: `${REAL_APP_IMAGES}/calendar-intelligence.png`,
    placeholder: '/images/selara-schedule.png',
    alt: 'Selara schedule screen showing AI-assisted calendar intelligence.',
  },
  approvalFlow: {
    target: `${REAL_APP_IMAGES}/approval-flow.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara approval flow showing a visible plan before any action runs.',
  },
  futureEcosystem: {
    target: `${REAL_APP_IMAGES}/future-ecosystem.png`,
    placeholder: '/images/main.png',
    alt: 'Conceptual view of Selara across iPhone, Mac, browser, and Watch.',
  },
  sidebarNav: {
    target: `${REAL_APP_IMAGES}/sidebar-nav.png`,
    placeholder: '/images/selara-sidebar.png',
    alt: 'Selara sidebar navigation — calm, organized access to chat, documents, schedule, and settings.',
  },
  premiumSettings: {
    target: `${REAL_APP_IMAGES}/premium-settings.png`,
    placeholder: '/images/selara-settings.svg',
    alt: 'Settings that feel like a control room, not a form dump.',
  },
  subscriptionView: {
    target: `${REAL_APP_IMAGES}/subscription-view.png`,
    placeholder: '/images/selara-subscription.svg',
    alt: 'Subscription status you can actually read — clear and premium.',
  },
  deepCalendar: {
    target: `${REAL_APP_IMAGES}/calendar-intelligence.png`,
    placeholder: '/images/selara-schedule.png',
    alt: 'Selara calendar view with AI-assisted scheduling and visible plan before changes land.',
  },
  deepVoice: {
    target: `${REAL_APP_IMAGES}/voice-in-action.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara voice input turning speech into a reviewable plan before action.',
  },
  deepEmail: {
    target: `${REAL_APP_IMAGES}/documents-hub.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara documents and email workspace with drafts ready for your review.',
  },
  deepAutomations: {
    target: `${REAL_APP_IMAGES}/approval-flow.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara approval flow showing automation plans before they run.',
  },
  deepPrivacy: {
    target: `${REAL_APP_IMAGES}/approval-flow.png`,
    placeholder: '/images/selara-chat.png',
    alt: 'Selara approval summary before anything touches your accounts or calendar.',
  },
  featuresHub: {
    target: `${REAL_APP_IMAGES}/features-hub.png`,
    placeholder: '/images/selara-sidebar.png',
    alt: 'Selara navigation and surfaces — calm, organized access across the app.',
  },
  integrationsList: {
    target: `${REAL_APP_IMAGES}/integrations-list.png`,
    placeholder: '/images/selara-sidebar.png',
    alt: 'Selara integrations hub showing connected services in a calm, organized list.',
  },
  pricingProduct: {
    target: `${REAL_APP_IMAGES}/subscription-view.png`,
    placeholder: '/images/selara-subscription.svg',
    alt: 'Selara subscription and plan status in the app — clear, premium billing surface.',
  },
} as const;

export type ImageSlotKey = keyof typeof imageSlots;

export type DeepPageMomentData = {
  eyebrow: string;
  title: string;
  body: string;
  slot: ImageSlotKey;
  slotFilename: string;
};

export const deepPageMoments = {
  calendar: {
    eyebrow: 'Approval-first calendar',
    title: 'See the reschedule plan before it lands on your calendar.',
    body: 'When a move affects your focus blocks, travel, or external commitments, Selara shows the full sequence — who gets notified, what shifts, and what you give up — before anything changes.',
    slot: 'deepCalendar',
    slotFilename: 'calendar-intelligence.png',
  },
  voice: {
    eyebrow: 'Approval-first voice',
    title: 'Voice becomes a visible plan you approve before action.',
    body: 'Say what you need in plain English. Selara turns it into structured steps — reschedule, draft, follow-up — and pauses on the moments that touch your reputation or calendar.',
    slot: 'deepVoice',
    slotFilename: 'voice-in-action.png',
  },
  email: {
    eyebrow: 'Approval-first email',
    title: 'Drafts and sends pause for review on consequential threads.',
    body: 'Routine triage moves fast. When a message would affect a client, partner, or sensitive thread, you see the draft and intent first — then approve, edit, or hold.',
    slot: 'deepEmail',
    slotFilename: 'documents-hub.png',
  },
  automations: {
    eyebrow: 'Approval-first automation',
    title: 'Automations surface the plan; you stay decider on what matters.',
    body: 'Connected work runs in the background until it would touch your calendar, team, or reputation. Then Selara stops, shows the plan, and waits for your call.',
    slot: 'deepAutomations',
    slotFilename: 'approval-flow.png',
  },
  privacy: {
    eyebrow: 'Approval-first control',
    title: 'Nothing touches your accounts without a clear summary first.',
    body: 'No black-box “I took care of it.” Every consequential step comes with a readable summary of intent — so powerful help feels composed, not reckless.',
    slot: 'deepPrivacy',
    slotFilename: 'approval-flow.png',
  },
  features: {
    eyebrow: 'Approval-first by design',
    title: 'One concierge surface — control when the stakes are real.',
    body: 'Calendar, voice, documents, and memory live in one calm app. When something would touch your reputation or schedule, Selara shows the plan first — then waits for your call.',
    slot: 'featuresHub',
    slotFilename: 'features-hub.png',
  },
  integrations: {
    eyebrow: 'Connected concierge',
    title: '800+ tools — one approval-first layer on top.',
    body: 'Selara does not ask you to abandon Gmail, Outlook, or the calendar you already trust. It acts through them with context, pausing when a step would touch your reputation or schedule.',
    slot: 'integrationsList',
    slotFilename: 'integrations-list.png',
  },
  pricing: {
    eyebrow: 'The product',
    title: 'Plans you can read at a glance — not another billing maze.',
    body: 'Subscription status, renewal, and what you are paying for stay visible in the app. The same calm surface you use for calendar and voice — because billing should not feel like a different product.',
    slot: 'pricingProduct',
    slotFilename: 'subscription-view.png',
  },
} satisfies Record<string, DeepPageMomentData>;
export const socialLinks = {
  x: process.env.NEXT_PUBLIC_X_URL || 'https://x.com/selaraapp',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/selaraapp',
};

export const navigation = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/future', label: 'Future' },
  { href: betaUrl, label: 'Open Beta' },
];

export const proofPoints = [
  'Built for lawyers, doctors, and executives',
  'Protect your reputation with approval-first actions',
  'Reclaim hours without losing control of your calendar',
  '800+ integrations — one calm concierge',
];

export const audienceProfiles = [
  {
    title: 'Legal & advisory',
    body: 'Client threads, court calendars, and sensitive follow-ups need visible intent — not surprise sends or silent reschedules.',
  },
  {
    title: 'Medicine & clinical leadership',
    body: 'Your schedule protects patients and teams. Selara defends focus blocks and surfaces trade-offs before anything moves.',
  },
  {
    title: 'Executives & operators',
    body: 'When your calendar is the company’s bottleneck, you need leverage without the anxiety that something just broke on your behalf.',
  },
];

export const futureTeaser = {
  eyebrow: 'What’s next',
  title: 'One assistant across every surface you work in.',
  body: 'Selara starts on iOS today. Mac, browser, Watch, and deeper ecosystem presence are on the way — without changing what makes it calm.',
  href: '/future',
  linkLabel: 'See the vision',
};

export const approvalTrustCopy =
  'When powerful agents act without visible guardrails, the cost is real — from widely reported incidents like Summer Yue’s deleted inbox and Claire Vo’s wiped calendar. Selara is built so consequential steps stay visible before they run.';

export const openClawIntro =
  'OpenClaw showed what raw agent speed looks like without guardrails. Selara is built for people who cannot afford that kind of surprise — the kind widely reported when Summer Yue lost email and Claire Vo lost a calendar.';

export const pricingBetaNote = 'Full concierge experience available in the open beta today.';

export const pricingBetaUpgradeCopy =
  'Open beta is free and includes the full concierge experience. When you are ready, choose Select, Premium, or Pinnacle — your memory, integrations, and preferences carry forward with no lock-in from trying the beta.';

export const integrationPrinciples = [
  {
    title: 'Context, not connectors',
    body: 'Integrations exist so Selara understands your real week — not so you manage another dashboard of disconnected apps.',
  },
  {
    title: 'Approval when it matters',
    body: 'Connected work runs in the background until it would touch your calendar, inbox, or reputation. Then you see the plan first.',
  },
];

/** Hero “pills”: each maps to a real route (or external beta URL) so they behave as links, not decorative spans. */
export const heroSignals: { label: string; href: string }[] = [
  { label: 'Open beta', href: betaUrl },
  { label: 'Voice + approvals', href: '/features' },
  { label: 'For professionals', href: '/pricing' },
  { label: 'Calm by design', href: '/future' },
];

export const editorialStats = [
  { value: '800+', label: 'connected tools and services' },
  { value: '4', label: 'core trust layers before action' },
  { value: '1', label: 'assistant across calendar, voice, docs, and memory' },
];

export const storyMoments = [
  {
    title: 'Say it naturally',
    body: 'Talk like you already have a chief of staff. Selara understands requests in plain language instead of forcing command syntax.',
  },
  {
    title: 'See the plan',
    body: 'The assistant turns intent into a visible sequence so nothing consequential hides behind an opaque step.',
  },
  {
    title: 'Approve what matters',
    body: 'Selara stops at the moments with real stakes and gives you a clean, premium approval layer.',
  },
  {
    title: 'Get your time back',
    body: 'The result is not just AI output. It is cleaner weeks, fewer dropped follow-ups, and less admin residue.',
  },
];

export const featureHighlights = [
  {
    title: 'Calendar intelligence with taste',
    body: 'Move meetings, protect focus blocks, draft reschedules, and help your week look intentional again.',
    href: '/calendar-assistant',
  },
  {
    title: 'Voice that feels like delegation',
    body: 'Capture intent in motion and let Selara translate spoken requests into plans you can actually review.',
    href: '/voice-assistant',
  },
  {
    title: 'Memory and document context',
    body: 'Selara compounds over time, carrying preferences, files, conversations, and recurring patterns forward.',
    href: '/features',
  },
  {
    title: 'Connected automations, still supervised',
    body: 'Plug into the stack you already use and automate the repetitive parts without losing oversight.',
    href: '/ai-automations',
  },
  {
    title: 'Privacy as product behavior',
    body: 'The trust model is visible in the experience: approvals, transparency, and boundaries you can actually feel.',
    href: '/privacy-first-ai-assistant',
  },
  {
    title: 'Desirable, not just useful',
    body: 'Selara is designed to feel luxurious, calm, and serious enough for people whose time is genuinely expensive.',
    href: '/about',
  },
];

export const integrationItems = [
  'Google Calendar',
  'Gmail',
  'Google Docs',
  'Google Drive',
  'Slack',
  'Notion',
  'Linear',
  'Apple Calendar',
  'Reminders',
  'Maps',
  'Contacts',
  '800+ more',
];

export const productScenes = [
  {
    kicker: 'Navigation',
    title: 'Every surface stays one gesture away',
    copy: 'Chat, conversations, documents, schedule, and settings stay organized in the sidebar instead of buried under tabs.',
  },
  {
    kicker: 'Preferences',
    title: 'Settings that read as a control room, not a form dump',
    copy: 'Profile, appearance, subscription, and voice live in one calm view with clear hierarchy.',
  },
  {
    kicker: 'Billing',
    title: 'Subscription status you can actually read',
    copy: 'Plan, renewal context, and next steps stay visible—without looking like a generic payment page bolted onto the app.',
  },
];

export const comparisonRows = [
  {
    label: 'Operating philosophy',
    selara: 'Deliberate, approval-first, premium craft',
    claw: 'Speed-first automation, minimal guardrails',
  },
  {
    label: 'Before external actions',
    selara: 'Intent and steps shown for review',
    claw: 'Often acts with less up-front visibility',
  },
  {
    label: 'When stakes are real',
    selara: 'You approve calendar, inbox, and workflow changes',
    claw: 'High-profile misfires have erased emails and wiped calendars',
  },
  {
    label: 'Product experience',
    selara: 'Editorial layout, calm motion, tight hierarchy',
    claw: 'Utility-first layout and faster iteration',
  },
  {
    label: 'What each optimizes for',
    selara: 'Trust, legibility, and control under power',
    claw: 'Throughput and capability surfaced quickly',
  },
];

export const pricingPlans = [
  {
    name: 'Select',
    description: 'Protect your focus and reputation with a full concierge on one account — voice, memory, calendar intelligence, and 800+ integrations without the chaos.',
    monthlyPrice: '$25',
    yearlyPrice: '$250',
    monthlyEquivalent: '$20/mo effective when billed yearly',
    annualSavings: 'Save $50/year',
    cta: 'Choose Select',
    href: process.env.NEXT_PUBLIC_STRIPE_SELECT_URL || '/download',
    features: ['Voice interaction', 'Persistent memory', 'Large usage limits', '800+ integrations', 'AI agents across contexts'],
  },
  {
    name: 'Premium',
    description: 'Shared context with a spouse or key team member, plus expanded memory and higher limits — for professionals who need leverage without losing oversight.',
    monthlyPrice: '$45',
    yearlyPrice: '$450',
    monthlyEquivalent: '$37.50/mo effective when billed yearly',
    annualSavings: 'Save $90/year',
    cta: 'Choose Premium',
    href: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || '/download',
    featured: true,
    features: ['All models', 'All integrations', 'Voice synthesis & transcription', 'Expanded memory', 'SpouseConnect'],
  },
  {
    name: 'Pinnacle',
    description: 'Force multiplier for teams and households — unlimited capacity, premium voice, and early access for people whose time is hardest to replace.',
    monthlyPrice: '$110',
    yearlyPrice: '$1,100',
    monthlyEquivalent: '$91.67/mo effective when billed yearly',
    annualSavings: 'Save $220/year',
    cta: 'Choose Pinnacle',
    href: process.env.NEXT_PUBLIC_STRIPE_PINNACLE_URL || '/download',
    features: ['Premium voice', 'No rate limits', 'No memory limits', 'Most powerful models only', 'FamilyConnect'],
  },
];

export const faqs = [
  {
    q: 'What exactly makes Selara feel different?',
    a: 'Selara is built around behavior, not buzzwords. It understands context, shows you the plan before it acts, and asks for approval when something actually matters—so automation feels trustworthy, not reckless.',
  },
  {
    q: 'Are the prices shown here accurate?',
    a: 'Yes. Select, Premium, and Pinnacle match what we publish. When you choose a plan, checkout runs through our secure billing flow.',
  },
  {
    q: 'How do subscriptions and billing work?',
    a: 'You can subscribe monthly or yearly. Manage your plan, renewal, and payment method from your account. If you need help, reach out through the support email in the footer.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. Upgrade or adjust your plan as your needs change—your assistant should grow with your workload, not lock you in.',
  },
  {
    q: 'How does open beta relate to paid plans?',
    a: 'During the open beta you get the full concierge experience at no charge. When you are ready, subscribe to Select, Premium, or Pinnacle — your memory, integrations, and preferences carry forward; there is no lock-in from trying the beta.',
  },
];

/** Outcome-focused capability data for dedicated pages. Lead with what actually changes in the user's week. */

export const calendarCapabilities: FeatureItem[] = [
  {
    title: 'Your calendar stops being a second job',
    body: 'Selara sees conflicts, travel time, and energy levels — then proposes moves that actually protect your real priorities instead of just shifting boxes around.',
  },
  {
    title: 'Focus blocks that survive contact with reality',
    body: 'Deep work gets defended automatically. When something tries to eat your best hours, you see the trade-off and decide — not just react.',
  },
  {
    title: 'Follow-ups that don’t fall through the cracks',
    body: 'Every “let me check my calendar and get back to you” turns into a tracked action with context attached. You stop being the person who forgets.',
  },
];

export const voiceCapabilities: FeatureItem[] = [
  {
    title: 'Talk like a human, get work done like one',
    body: 'Say what you need between meetings, in the car, or while walking. Selara turns natural speech into structured plans you can review — no command syntax required.',
  },
  {
    title: 'Voice that remembers who you are',
    body: 'It knows your preferences, recurring meetings, and how you like things phrased. The more you use it, the less you have to explain.',
  },
  {
    title: 'From voice note to calendar in under a minute',
    body: '“Move the 2pm and tell the team I’ll be five late” becomes a real reschedule + message draft before you’ve even finished your coffee.',
  },
];

export const emailCapabilities: FeatureItem[] = [
  {
    title: 'The inbox stops living in your head',
    body: 'Selara surfaces what actually needs your attention and drafts the rest. You spend time deciding, not digging.',
  },
  {
    title: 'Follow-ups that happen without you chasing them',
    body: '“I’ll send that next week” becomes a real tracked action with the right context attached. Nothing important disappears into the void.',
  },
  {
    title: 'Tone that still sounds like you',
    body: 'Drafts come out in your voice — not generic corporate robot. You edit the substance, not the personality.',
  },
];

export const automationOutcomes: FeatureItem[] = [
  {
    title: 'Repetitive work stops being your problem',
    body: 'Routine updates, status reports, and cross-tool busywork get handled. You only touch the exceptions.',
  },
  {
    title: 'Context travels with the work',
    body: 'Selara knows why something matters, who’s waiting, and what “done well” looks like for you. Automations improve over time instead of staying brittle.',
  },
  {
    title: 'You stay in the loop on the things that matter',
    body: 'When something would affect your calendar, team, or reputation, you see the plan first. Speed without surprise.',
  },
];

export const privacyPositioning: FeatureItem[] = [
  {
    title: 'Power that doesn’t feel like giving up control',
    body: 'Selara is designed for people who need real leverage but can’t afford for something to go wrong without them noticing.',
  },
  {
    title: 'You see what it’s about to do — every time',
    body: 'No black-box “I took care of it.” You get a clear summary of intent before anything touches your real accounts or calendar.',
  },
  {
    title: 'The expensive part of your brain stays protected',
    body: 'Judgment calls, relationship-sensitive messages, and anything with real stakes stay in your hands. Everything else gets lighter.',
  },
];

export const integrationCategories = [
  {
    category: 'Calendar & Time',
    items: ['Google Calendar', 'Apple Calendar', 'Outlook', 'Calendly', 'Reclaim', 'Motion'],
  },
  {
    category: 'Mail & Communication',
    items: ['Gmail', 'Apple Mail', 'Superhuman', 'Slack', 'Linear', 'Notion'],
  },
  {
    category: 'Documents & Knowledge',
    items: ['Google Docs', 'Google Drive', 'Notion', 'Obsidian', 'Dropbox', 'Box'],
  },
  {
    category: 'Everything Else',
    items: ['800+ more via native integrations and APIs — the long tail of tools you actually use.'],
  },
];

export type FeatureItem = {
  title: string;
  body: string;
  href?: string;
};

export const downloadBenefits = [
  'Real calendar intelligence on day one — not just another chat interface bolted onto your schedule',
  'Voice that actually turns into plans you can review and approve',
  'Memory that compounds: the more you use it, the less you repeat yourself',
  'Approval layer that protects your reputation and your relationships without slowing you down',
  'Clean, calm product surface that doesn’t make you feel like you’re babysitting another AI toy',
];

export const seoPages = [
  {
    slug: '',
    title: 'Selara — Premium AI assistant app for iOS',
    description:
      'Selara is the premium AI personal assistant app for iOS—built for professionals who want their time back. Approval-first, calendar-aware, voice-native, and designed to feel trustworthy.',
  },
  { slug: '/features', title: 'Selara Features', description: 'Explore Selara features for calendar planning, voice, memory, documents, and connected automations.' },
  { slug: '/pricing', title: 'Selara Pricing', description: 'Selara Select, Premium, and Pinnacle—simple plans for a premium AI personal assistant.' },
  { slug: '/download', title: 'Open Beta — Selara', description: 'The Selara open beta is live. Voice, approvals, calendar intelligence, and memory — the full concierge experience available today.' },
  { slug: '/future', title: 'The Future of Selara', description: 'Selara is built to be your personal assistant everywhere — starting on iOS today, with Mac, browser, Watch, and deeper surfaces coming soon.' },
  { slug: '/calendar-assistant', title: 'AI Calendar Assistant', description: 'Selara is an AI calendar assistant for professionals who want to reclaim time and schedule with more intention.' },
  { slug: '/email-assistant', title: 'AI Email Assistant', description: 'Use Selara as an AI email assistant for follow-ups, triage, and drafted communication with control.' },
  { slug: '/voice-assistant', title: 'Voice AI Personal Assistant', description: 'Selara is a voice-first AI personal assistant built for natural delegation.' },
  { slug: '/ai-automations', title: 'AI Automations', description: 'Selara delivers connected AI automations with better context and better control.' },
  { slug: '/privacy-first-ai-assistant', title: 'Privacy-First AI Assistant', description: 'Selara is a privacy-first AI assistant built around approval-first behavior and transparent control.' },
  {
    slug: '/integrations',
    title: 'Selara Integrations',
    description:
      '800+ connected tools for professionals — calendar, mail, docs, and more — with approval-first control through one calm AI concierge.',
  },
  { slug: '/vs-openclaw', title: 'Selara vs OpenClaw', description: 'Compare Selara and OpenClaw on trust, control, and day-to-day product experience.' },
  { slug: '/about', title: 'About Selara', description: 'Learn why Selara is building a premium personal assistant instead of just another chatbot.' },
  { slug: '/privacy', title: 'Privacy Policy | Selara', description: 'Read the SelarAI Privacy Policy.' },
  { slug: '/terms', title: 'Terms of Service | Selara', description: 'Read the SelarAI Terms of Service.' },
];

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function createMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: 'Selara',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: absoluteUrl('/images/main.png'),
          width: 1200,
          height: 630,
          alt: 'Selara assistant product preview',
        },
        { url: absoluteUrl('/images/selara-logo.png'), width: 500, height: 500, alt: 'Selara logo' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl('/images/main.png')],
    },
  };
}
