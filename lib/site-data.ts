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
    eyebrow: 'Calendar that doesn’t surprise you',
    title: 'See the full plan before anything hits your calendar.',
    body: 'When it wants to move something that affects travel or other people, you see exactly what changes before it does it.',
    slot: 'deepCalendar',
    slotFilename: 'calendar-intelligence.png',
  },
  voice: {
    eyebrow: 'Voice that actually does things',
    title: 'Say it out loud. See the plan. Approve or change it.',
    body: 'Talk normally. It turns it into real steps — reschedule, message, follow-up — and waits on anything that touches your reputation or schedule.',
    slot: 'deepVoice',
    slotFilename: 'voice-in-action.png',
  },
  email: {
    eyebrow: 'Email that doesn’t blow up on you',
    title: 'Routine stuff moves fast. The important stuff waits for you.',
    body: 'Normal messages get handled. When it would affect a client or something sensitive, you see the draft first and decide.',
    slot: 'deepEmail',
    slotFilename: 'documents-hub.png',
  },
  automations: {
    eyebrow: 'Automations you actually trust',
    title: 'It does the boring work. You stay in charge of the real stuff.',
    body: 'The repetitive things run in the background. The moment it would touch your calendar or your team, it stops and shows you the plan.',
    slot: 'deepAutomations',
    slotFilename: 'approval-flow.png',
  },
  privacy: {
    eyebrow: 'You stay in control',
    title: 'Nothing important happens without you seeing it first.',
    body: 'No mysterious “I handled it.” You get a clear summary before it touches anything that actually matters.',
    slot: 'deepPrivacy',
    slotFilename: 'approval-flow.png',
  },
  features: {
    eyebrow: 'One calm place',
    title: 'Everything in one app. Real control when it matters.',
    body: 'Calendar, email, notes, and the tools you already use — in one calm place. When something would touch your reputation or schedule, it shows you the plan first.',
    slot: 'featuresHub',
    slotFilename: 'features-hub.png',
  },
  integrations: {
    eyebrow: 'Works with what you already use',
    title: '800+ tools, one normal assistant on top.',
    body: 'It works inside Gmail, Calendar, Slack and the rest — with real context, and it pauses before it does anything that affects your reputation or schedule.',
    slot: 'integrationsList',
    slotFilename: 'integrations-list.png',
  },
  pricing: {
    eyebrow: 'Billing that doesn’t feel like a separate job',
    title: 'You can actually understand what you’re paying for.',
    body: 'Your plan, renewal date, and what you get are all visible in the same calm app you use for everything else.',
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
  { href: betaUrl, label: 'Download Selara' },
];

export const heroLead =
  'The premium AI concierge for professionals. Calendar intelligence, approvals, and follow-through—and a bespoke assistant that tailors itself to your life. Available now in open beta.';

/** Reused across page intros, metadata, and plan copy — keep in sync with heroLead themes. */
export const productCapabilityLine =
  'Calendar intelligence, approvals, follow-through, and a bespoke assistant that tailors itself to your life.';

export const planIncludesLine =
  'Calendar intelligence, approvals, follow-through, voice access, and 800+ integrations.';

export const audienceSectionTitle = 'Built for professionals—and anyone who values time.';

export const audienceSectionIntro =
  'Whether your week runs on court dates, patient schedules, or back-to-back meetings, Selara shows you the plan before anything touches your reputation or calendar.';

export const heroValuePoints: { label: string; href?: string }[] = [
  {
    label: 'Reclaim your time without losing control of your calendar',
    href: '/calendar-assistant',
  },
  { label: 'Built for professionals, and anyone who values time' },
  { label: '800+ integrations — one calm concierge', href: '/integrations' },
  {
    label: 'Protect your reputation with approval-first actions',
    href: '/privacy-first-ai-assistant',
  },
];

export const audienceProfiles = [
  {
    title: 'Legal & advisory',
    body: 'Client threads, court calendars, and sensitive follow-ups need visible intent — not surprise sends or silent reschedules.',
  },
  {
    title: 'Medicine & clinical leadership',
    body: 'Your schedule protects patients and teams. Selara keeps your time free and shows you what changes before anything moves.',
  },
  {
    title: 'Executives & operators',
    body: 'When your calendar runs everything, you need help that doesn’t create new problems behind your back.',
  },
];

export const futureTeaser = {
  eyebrow: 'What’s next',
  title: 'One assistant that works wherever you do.',
  body: 'It starts on your iPhone. Mac, browser, and Watch versions are coming soon — so it can actually be there when you need it.',
  href: '/future',
  linkLabel: 'See what’s coming',
};

export const approvalTrustCopy =
  'When powerful agents act without showing their work, things go wrong — like the cases where inboxes and calendars got wrecked. Selara shows you the plan first.';

export const openClawIntro =
  'OpenClaw showed what raw agent speed looks like without guardrails. Selara is built for people who cannot afford that kind of surprise — the kind widely reported when Summer Yue lost email and Claire Vo lost a calendar.';

export const pricingBetaNote = 'You get the full thing in the open beta right now.';

export const pricingBetaUpgradeCopy =
  'The open beta is free and gives you everything. When you want to keep going, pick a plan. Everything you’ve set up comes with you.';

export const integrationPrinciples = [
  {
    title: 'It works with what you already use',
    body: 'It connects to your email, calendar, and tools so it actually knows what’s going on in your week.',
  },
  {
    title: 'You see it before it touches anything important',
    body: 'The boring stuff can run. Anything that would mess with your calendar or your reputation waits until you approve it.',
  },
];

/** Hero “pills”: each maps to a real route (or external beta URL) so they behave as links, not decorative spans. */
export const heroSignals: { label: string; href: string }[] = [
  { label: 'Intelligence', href: '/features' },
  { label: 'Calendar', href: '/calendar-assistant' },
  { label: 'Emails', href: '/email-assistant' },
  { label: 'Notes', href: '/features' },
  { label: 'Voice accessible', href: '/voice-assistant' },
  { label: 'Your approval, always', href: '/privacy-first-ai-assistant' },
];

export const editorialStats = [
  { value: '800+', label: 'connected tools and services' },
  { value: '4', label: 'core trust layers before action' },
  { value: '1', label: 'assistant across calendar, follow-through, and integrations' },
];

export const storyMoments = [
  {
    title: 'Tell it what you need',
    body: 'Just say it in normal words. No special commands.',
  },
  {
    title: 'See the plan first',
    body: 'Selara turns it into clear steps and shows you exactly what it’s going to do.',
  },
  {
    title: 'Approve before it acts',
    body: 'You look at the plan and say yes, make changes, or tell it to stop.',
  },
  {
    title: 'Get your time back',
    body: 'The stuff that used to eat your day actually gets done — without you babysitting it.',
  },
];

export const featureHighlights = [
  {
    title: 'Your calendar stops running your life',
    body: 'It moves meetings, handles the back and forth, and keeps your time free instead of just shuffling boxes around.',
    href: '/calendar-assistant',
  },
  {
    title: 'Talk to it like a normal person',
    body: 'Say what you need out loud or in a message. It turns it into a plan you can actually review and approve.',
    href: '/voice-assistant',
  },
  {
    title: 'An assistant that fits your life',
    body: 'Over time it learns how you work, your people, and what you prefer — a bespoke assistant that tailors itself to you.',
    href: '/features',
  },
  {
    title: 'It works across the tools you already use',
    body: 'It handles repetitive stuff in Gmail, Calendar, Slack, and the rest — but only after you see the plan and say yes.',
    href: '/ai-automations',
  },
  {
    title: 'You stay in charge',
    body: 'Anything that actually matters waits for your approval. No surprises that blow up your week.',
    href: '/privacy-first-ai-assistant',
  },
  {
    title: 'Built for professionals, and anyone who values time',
    body: 'Calm, serious, and actually useful — not another toy that makes more work than it saves.',
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
    title: 'Everything is easy to find',
    copy: 'Chat, your schedule, documents, and settings are all right there. No digging through menus.',
  },
  {
    kicker: 'Preferences',
    title: 'Settings that make sense',
    copy: 'Change how it looks, how it sounds, and your plan in one place that doesn’t feel like a spreadsheet.',
  },
  {
    kicker: 'Billing',
    title: 'You can actually understand your bill',
    copy: 'Your plan, when it renews, and what you’re paying for are all clear. No surprise charges.',
  },
];

export const comparisonRows = [
  {
    label: 'How it thinks',
    selara: 'Shows you the plan and waits for your okay',
    claw: 'Moves fast and hopes for the best',
  },
  {
    label: 'Before it does something big',
    selara: 'You see exactly what will happen',
    claw: 'Often just does it',
  },
  {
    label: 'When it goes wrong',
    selara: 'You catch it before it affects your calendar or your team',
    claw: 'People have had inboxes and calendars wrecked',
  },
  {
    label: 'How it feels to use',
    selara: 'Calm and straightforward',
    claw: 'Fast but chaotic',
  },
  {
    label: 'Who it’s built for',
    selara: 'People who can’t afford surprises',
    claw: 'People who want maximum speed no matter what',
  },
];

export const pricingPlans = [
  {
    name: 'Select',
    description: 'A solid assistant for calendar intelligence, approvals, follow-through, and the tools you use — without creating chaos.',
    monthlyPrice: '$25',
    yearlyPrice: '$250',
    monthlyEquivalent: '$20/mo effective when billed yearly',
    annualSavings: 'Save $50/year',
    cta: 'Choose Select',
    href: process.env.NEXT_PUBLIC_STRIPE_SELECT_URL || '/download',
    features: ['Calendar intelligence', 'Approvals & follow-through', 'Voice accessible', '800+ tools'],
  },
  {
    name: 'Premium',
    description: 'More power and shared access (for a partner or key person) plus higher limits. Good when one person’s time isn’t enough.',
    monthlyPrice: '$45',
    yearlyPrice: '$450',
    monthlyEquivalent: '$37.50/mo effective when billed yearly',
    annualSavings: 'Save $90/year',
    cta: 'Choose Premium',
    href: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || '/download',
    featured: true,
    features: ['Everything in Select', 'More capacity', 'Voice that sounds natural', 'Shared access'],
  },
  {
    name: 'Pinnacle',
    description: 'For teams or households that need serious capacity. No limits, best models, early access to new stuff.',
    monthlyPrice: '$110',
    yearlyPrice: '$1,100',
    monthlyEquivalent: '$91.67/mo effective when billed yearly',
    annualSavings: 'Save $220/year',
    cta: 'Choose Pinnacle',
    href: process.env.NEXT_PUBLIC_STRIPE_PINNACLE_URL || '/download',
    features: ['No limits', 'Best models', 'Premium voice', 'Team/household access'],
  },
];

export const faqs = [
  {
    q: 'What makes Selara different?',
    a: 'It shows you the plan before it does anything important. You approve, change it, or stop it. That’s the whole difference.',
  },
  {
    q: 'Are the prices real?',
    a: 'Yes. What you see is what you pay. You can start with the free open beta and upgrade later.',
  },
  {
    q: 'How does billing work?',
    a: 'Monthly or yearly. You can change or cancel anytime from your account.',
  },
  {
    q: 'Can I upgrade or downgrade later?',
    a: 'Yes. Your data and settings move with you.',
  },
  {
    q: 'What do I get in the open beta?',
    a: 'The full experience for free right now. When you’re ready to pay, your stuff carries over.',
  },
];

/** Outcome-focused capability data for dedicated pages. Lead with what actually changes in the user's week. */

export const calendarCapabilities: FeatureItem[] = [
  {
    title: 'Your calendar stops eating your day',
    body: 'It sees the real constraints — travel, energy, other people — and suggests moves that actually work instead of just moving boxes around.',
  },
  {
    title: 'Time you actually get to keep',
    body: 'When something tries to steal your focus time, you see what it would cost and decide — instead of just reacting all day.',
  },
  {
    title: 'You stop being the one who forgets',
    body: '“Let me check my calendar and get back to you” turns into something that actually happens, with the right context, without you chasing it.',
  },
];

export const voiceCapabilities: FeatureItem[] = [
  {
    title: 'Just say what you need',
    body: 'Talk normally — in the car, between meetings, walking. It turns it into a plan you can look at and approve. No special commands.',
  },
  {
    title: 'It knows how you actually work',
    body: 'Over time it learns your preferences and your people, so you stop having to explain the same things over and over.',
  },
  {
    title: 'Say it once, it actually happens',
    body: '“Move the 2pm and let the team know I’ll be late” turns into the real reschedule and the real message — before you finish your coffee.',
  },
];

export const emailCapabilities: FeatureItem[] = [
  {
    title: 'Your inbox stops living in your head',
    body: 'It figures out what actually needs you and drafts the rest. You decide instead of digging through noise.',
  },
  {
    title: 'Things actually get followed up on',
    body: '“I’ll send that next week” turns into something that really happens, with the right context, without you having to remember.',
  },
  {
    title: 'It still sounds like you',
    body: 'The drafts sound like something you would actually send. You tweak the important parts, not the whole thing.',
  },
];

export const automationOutcomes: FeatureItem[] = [
  {
    title: 'The boring stuff stops being your problem',
    body: 'Routine updates and cross-tool busywork just happen. You only deal with the things that actually need your judgment.',
  },
  {
    title: 'It knows the context so you don’t have to repeat it',
    body: 'It understands why things matter to you and who’s waiting. The more you use it, the less you have to explain.',
  },
  {
    title: 'Nothing important happens without you seeing it',
    body: 'When it would touch your calendar, your team, or your reputation, you see the plan first. Speed without the usual disasters.',
  },
];

export const privacyPositioning: FeatureItem[] = [
  {
    title: 'Real power without the usual disasters',
    body: 'It’s built for people who need serious help but can’t afford for something to blow up without them knowing.',
  },
  {
    title: 'You always see what it’s about to do',
    body: 'No mysterious “I took care of it.” You get a clear summary before it touches anything important.',
  },
  {
    title: 'The important stuff stays in your hands',
    body: 'Anything that actually matters — the judgment calls, the sensitive messages — waits for you. The rest gets lighter.',
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
  'Real calendar help from day one — not another chat that just adds to your to-do list',
  'Say what you need out loud and get back a plan you can actually approve or change',
  'A bespoke assistant that learns how you work — so you stop explaining the same things over and over',
  'Anything important waits for you to look at it first — no surprises that ruin your week',
  'A calm app that doesn’t make you feel like you’re managing yet another piece of software',
];

export const seoPages = [
  {
    slug: '',
    title: 'Selara — Premium AI assistant app for iOS',
    description:
      'Selara is the premium AI personal assistant app for iOS—built for professionals who want their time back. Calendar intelligence, approvals, follow-through, and a bespoke assistant available now in open beta.',
  },
  {
    slug: '/features',
    title: 'Selara Features',
    description:
      'Explore Selara for calendar, email, notes, voice access, and connected automations—with approval-first control and follow-through.',
  },
  { slug: '/pricing', title: 'Selara Pricing', description: 'Selara Select, Premium, and Pinnacle—simple plans for a premium AI personal assistant.' },
  {
    slug: '/download',
    title: 'Download Selara',
    description: `Download Selara for iOS. The open beta is live with the full concierge experience—${productCapabilityLine}`,
  },
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
