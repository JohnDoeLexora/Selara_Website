import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://selara.app';
// For launch: set NEXT_PUBLIC_BETA_URL to the real public TestFlight link.
// The site treats this as a direct capstone link (no form or waitlist).
export const betaUrl = process.env.NEXT_PUBLIC_BETA_URL || '/download';
export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@selaraillc.com';
export const feedbackEmail = 'contact@selaraillc.com';

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
  x: process.env.NEXT_PUBLIC_X_URL || 'https://x.com/ZacharyCoh97302',
};

export const navigation = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/future', label: 'Future' },
];

export const heroLead =
  'The premium AI concierge for professionals. Calendar intelligence, approvals, and follow-through—and a bespoke assistant that tailors itself to your life. Available now in open beta.';

/** Reused across page intros, metadata, and plan copy — keep in sync with heroLead themes. */
export const productCapabilityLine =
  'Calendar intelligence, approvals, follow-through, and a bespoke assistant that tailors itself to your life.';

export const planIncludesLine =
  'Calendar intelligence, approvals, follow-through, voice access, and 800+ integrations.';

export const audienceSectionTitle = 'An AI personal assistant for professionals — and an executive AI assistant with guardrails.';

export const audienceSectionIntro =
  'Whether your week runs on court dates, patient schedules, or back-to-back meetings, Selara is calendar intelligence AI that shows you the plan before anything touches your reputation or calendar.';

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

export type PersonaProfile = {
  title: string;
  body: string;
  workflows: string[];
  ctaLabel: string;
  ctaHref: string;
  accent: 'legal' | 'medicine' | 'executive';
};

export const personaProfiles: PersonaProfile[] = [
  {
    title: 'Legal & advisory',
    body: 'Client threads, court calendars, and sensitive follow-ups need visible intent — not surprise sends or silent reschedules.',
    workflows: [
      'Board prep reschedule with client notification drafts for your review',
      'Conflict checks before moving court-adjacent holds',
      'Follow-up threads that wait for approval before anything sends',
    ],
    ctaLabel: 'See calendar intelligence for legal weeks',
    ctaHref: '/calendar-assistant',
    accent: 'legal',
  },
  {
    title: 'Medicine & clinical leadership',
    body: 'Your schedule protects patients and teams. Selara keeps your time free and shows you what changes before anything moves.',
    workflows: [
      'Clinic block protection when emergencies try to steal focus time',
      'Patient follow-up drafts you approve before they leave your name',
      'Team schedule changes with full visibility before anything shifts',
    ],
    ctaLabel: 'See how Selara protects clinical schedules',
    ctaHref: '/calendar-assistant',
    accent: 'medicine',
  },
  {
    title: 'Executives & operators',
    body: 'When your calendar runs everything, you need help that doesn’t create new problems behind your back.',
    workflows: [
      'Cross-functional meeting moves with stakeholder context in the plan',
      'Automated prep and follow-ups across email, calendar, and docs',
      'Delegation chains that pause before touching external accounts',
    ],
    ctaLabel: 'See automations for executive workflows',
    ctaHref: '/ai-automations',
    accent: 'executive',
  },
];

/** @deprecated Use personaProfiles — kept for backward compatibility */
export const audienceProfiles = personaProfiles.map(({ title, body }) => ({ title, body }));

export type Testimonial = {
  quote: string;
  role: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'I stopped dreading Monday mornings. Selara shows me the plan before anything touches my calendar — that alone changed how I delegate.',
    role: 'Managing partner',
    context: 'Mid-size litigation firm',
  },
  {
    quote:
      'The approval step isn’t friction — it’s the feature. I finally have an assistant that respects how high the stakes are in clinical leadership.',
    role: 'Department chair',
    context: 'Academic medical center',
  },
  {
    quote:
      'I tried the fast agents. They’re impressive until something breaks. Selara feels like luxury software — calm, visible, and actually trustworthy.',
    role: 'COO',
    context: 'Growth-stage technology company',
  },
  {
    quote:
      'Voice in the car, plan on screen, approve before it runs. That workflow alone reclaimed hours I was spending on coordination busywork.',
    role: 'Principal',
    context: 'Advisory practice',
  },
];

export type PricingComparisonRow = {
  label: string;
  select: string;
  premium: string;
  pinnacle: string;
};

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    label: 'Voice access',
    select: 'Accessible',
    premium: 'Natural voice',
    pinnacle: 'Premium voice',
  },
  {
    label: 'Memory capacity',
    select: 'Solid personal workload',
    premium: 'Higher limits + shared context',
    pinnacle: 'Unlimited headroom',
  },
  {
    label: 'Integrations',
    select: '800+ tools',
    premium: '800+ tools',
    pinnacle: '800+ tools',
  },
  {
    label: 'AI models',
    select: 'Standard',
    premium: 'Enhanced capacity',
    pinnacle: 'Best models + early access',
  },
  {
    label: 'Shared access / SpouseConnect',
    select: 'Personal use',
    premium: 'Partner or key person',
    pinnacle: 'Team / household access',
  },
  {
    label: 'Approval controls',
    select: 'Full approval-first',
    premium: 'Full approval-first',
    pinnacle: 'Full approval-first',
  },
];

export type HomeSectionNavItem = {
  id: string;
  label: string;
};

export const homeSectionNavItems: HomeSectionNavItem[] = [
  { id: 'who-its-for', label: "Who it's for" },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'trust', label: 'Trust' },
  { id: 'social-proof', label: 'Social proof' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
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

export type ComparisonTableRow = {
  label: string;
  selara: string;
  competitor: string;
};

export type ComparisonContrastPanel = {
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
};

export type ComparisonPageData = {
  slug: string;
  eyebrow: string;
  heroTitle: string;
  heroIntro: string;
  competitorLabel: string;
  tableAriaLabel: string;
  rows: ComparisonTableRow[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntro: string;
  contrastEyebrow: string;
  contrastTitle: string;
  contrastIntro: string;
  contrast: {
    competitor: ComparisonContrastPanel;
    selara: ComparisonContrastPanel;
  };
};

export const comparisonPages: ComparisonPageData[] = [
  {
    slug: '/vs-generic-ai',
    eyebrow: 'Vs generic AI',
    heroTitle: 'Chat is easy. Delegation is hard.',
    heroIntro:
      'Generic ChatGPT-style assistants are brilliant at answers. Selara is built for the moment an answer needs to become a calendar change, an email, or a follow-up — with your approval first.',
    competitorLabel: 'Generic AI chat',
    tableAriaLabel: 'Comparison of Selara and generic ChatGPT-style assistants',
    sectionEyebrow: 'The real difference',
    sectionTitle: 'Approval-first AI assistant vs generic chat — action with guardrails.',
    sectionIntro:
      'A chat window is great for drafting. Selara is for when the draft touches your calendar, your team, or your reputation — and you need memory, context, and a calm approval step before anything happens.',
    contrastEyebrow: 'What it actually feels like',
    contrastTitle: 'Answers are cheap. Calm follow-through is rare.',
    contrastIntro:
      'Generic assistants optimize for fast replies. Selara optimizes for not surprising you when something important leaves the chat window.',
    rows: [
      {
        label: 'How it acts on your behalf',
        selara: 'Shows the plan and waits for your okay before it touches anything',
        competitor: 'Replies in chat — you copy, paste, and execute everything yourself',
      },
      {
        label: 'Memory across your week',
        selara: 'Remembers context from calendar, email, and connected tools',
        competitor: 'Forgets between sessions unless you re-explain every time',
      },
      {
        label: 'Calendar & follow-through',
        selara: 'Proposes schedule changes and follow-ups you approve first',
        competitor: 'Suggests text; you still run every step in other apps',
      },
      {
        label: 'UX when stakes are high',
        selara: 'Calm thread with visible guardrails before action',
        competitor: 'Fast answers with no accountability layer',
      },
      {
        label: 'Who it’s built for',
        selara: 'Professionals who can’t afford inbox or calendar surprises',
        competitor: 'Anyone experimenting in a chat window',
      },
    ],
    contrast: {
      competitor: {
        eyebrow: 'Generic AI chat',
        title: 'Brilliant answers, manual execution',
        copy: 'You get great drafts — then you’re the project manager moving them into email, calendar, and Slack.',
        bullets: [
          'Context resets unless you keep re-prompting',
          'No approval step before something important sends',
          'Another tab to babysit when your week gets busy',
        ],
      },
      selara: {
        eyebrow: 'Selara',
        title: 'Memory, context, and approval-first action',
        copy: 'Selara remembers your week, connects to your tools, and shows you the plan before anything touches your calendar or reputation.',
        bullets: [
          'Persistent memory across calendar, email, and integrations',
          'You approve or edit before sends and schedule changes',
          'One calm app instead of chat plus five other tabs',
        ],
      },
    },
  },
  {
    slug: '/vs-calendar-ai',
    eyebrow: 'Vs calendar AI',
    heroTitle: 'Your calendar deserves more than slot-finding.',
    heroIntro:
      'Calendar-only AI tools are good at squeezing meetings in. Selara treats your schedule as part of a full week — with memory, follow-through, and approval before anything lands on your calendar.',
    competitorLabel: 'Calendar-only AI',
    tableAriaLabel: 'Comparison of Selara and calendar-only AI tools',
    sectionEyebrow: 'The real difference',
    sectionTitle: 'Scheduling help is not the same as running your week.',
    sectionIntro:
      'Calendar AI can propose times. Selara interprets your day, remembers what you care about, and waits for your okay before changing the schedule that other people see.',
    contrastEyebrow: 'What it actually feels like',
    contrastTitle: 'A smarter calendar widget is not a calm assistant.',
    contrastIntro:
      'Calendar-only tools optimize for finding open slots. Selara optimizes for protecting your focus, your relationships, and your reputation.',
    rows: [
      {
        label: 'Scope beyond scheduling',
        selara: 'Calendar intelligence plus email, voice, and follow-through with memory',
        competitor: 'Mostly schedule suggestions inside one calendar app',
      },
      {
        label: 'Before changing your calendar',
        selara: 'You see the exact change and approve it first',
        competitor: 'Often suggests or applies without full cross-tool context',
      },
      {
        label: 'Cross-tool context',
        selara: 'Pulls from email, docs, and team tools to interpret the day',
        competitor: 'Siloed to your calendar provider',
      },
      {
        label: 'Daily feel',
        selara: 'An interpreted day with calm delegation in one thread',
        competitor: 'Another calendar widget to check and second-guess',
      },
      {
        label: 'Reliability under pressure',
        selara: 'Approval-first before anything affects your reputation',
        competitor: 'Optimized for quick slot-finding, not guardrails',
      },
    ],
    contrast: {
      competitor: {
        eyebrow: 'Calendar-only AI',
        title: 'Smart slots, narrow context',
        copy: 'It knows your calendar — but not the email thread, the doc, or the follow-up that explains why a move matters.',
        bullets: [
          'Changes can land before you see the full picture',
          'No memory of how you like your weeks to feel',
          'You still coordinate everything outside the calendar app',
        ],
      },
      selara: {
        eyebrow: 'Selara',
        title: 'Calendar intelligence with guardrails',
        copy: 'Selara layers context and recommendations into your day — and waits for your approval before a change goes live.',
        bullets: [
          'Memory of preferences, focus blocks, and prior decisions',
          'Visible plan before reschedules and outbound messages',
          'Follow-through stays in one calm thread',
        ],
      },
    },
  },
  {
    slug: '/vs-executive-assistant',
    eyebrow: 'Vs executive assistant',
    heroTitle: 'The best EA is human. The best backup is always on.',
    heroIntro:
      'A great executive assistant is irreplaceable. Selara is for the hours they’re offline, the drafts you want reviewed first, and the calm UX of approving every external action before it happens.',
    competitorLabel: 'Traditional EA',
    tableAriaLabel: 'Comparison of Selara and a traditional executive assistant',
    sectionEyebrow: 'The real difference',
    sectionTitle: 'Executive AI assistant backup — always on, approval-first.',
    sectionIntro:
      'A traditional EA brings relationships and intuition. Selara brings 24/7 availability, persistent memory, and approval-first guardrails — without the drama of wondering what just went out under your name.',
    contrastEyebrow: 'What it actually feels like',
    contrastTitle: 'Trust is everything. Visibility is how you keep it.',
    contrastIntro:
      'Great EAs earn trust over time. Selara earns it every day by showing you the plan before anything touches your calendar, inbox, or team.',
    rows: [
      {
        label: 'Availability',
        selara: '24/7 on your phone with instant draft review',
        competitor: 'Human hours, time zones, and scheduling lag',
      },
      {
        label: 'Consistency & memory',
        selara: 'Same guardrails every time; remembers your preferences',
        competitor: 'Depends on the person; turnover resets context',
      },
      {
        label: 'Before external action',
        selara: 'You approve every send and schedule change in one place',
        competitor: 'Trust-based handoff with less day-to-day visibility',
      },
      {
        label: 'Cost & scale',
        selara: 'Predictable software pricing that scales with you',
        competitor: 'Salary, benefits, and management overhead',
      },
      {
        label: 'Calm UX',
        selara: 'One app, visible plans, no surprises',
        competitor: 'Excellent humans — but still another relationship to manage',
      },
    ],
    contrast: {
      competitor: {
        eyebrow: 'Traditional EA',
        title: 'High judgment, limited bandwidth',
        copy: 'The best EAs read the room. They also have evenings, vacations, and a single pair of hands.',
        bullets: [
          'Coverage gaps when travel or life gets in the way',
          'Less visibility into drafts before they go out',
          'Hard to scale without hiring again',
        ],
      },
      selara: {
        eyebrow: 'Selara',
        title: 'Always-on backup with approval-first control',
        copy: 'Selara doesn’t replace a great EA — it gives you calm, memory-backed delegation when you need speed and guardrails at the same time.',
        bullets: [
          'Review every plan before it affects your calendar or team',
          'Persistent memory of how you like to work',
          'Calm UX that doesn’t add another inbox to manage',
        ],
      },
    },
  },
];

export function getComparisonPage(slug: string): ComparisonPageData {
  const page = comparisonPages.find((entry) => entry.slug === slug);
  if (!page) {
    throw new Error(`Missing comparisonPages entry for slug: ${slug}`);
  }
  return page;
}

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

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: 'What makes Selara different?',
    a: 'It shows you the plan before it does anything important. You approve, change it, or stop it. That’s the whole difference.',
  },
  {
    q: 'What is approval-first AI?',
    a: 'Approval-first AI means Selara turns your request into a visible plan before anything runs — calendar changes, messages, or connected automations. You stay in judgment; the assistant stays accountable. It is the opposite of agents that act first and explain later.',
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
  {
    q: 'What data does Selara store?',
    a: 'Your preferences, memory, connected accounts, and the plans you approve. Nothing important runs without you seeing it first. You can review and delete what Selara remembers from settings.',
  },
  {
    q: 'What happens when I reject a plan?',
    a: 'Nothing runs. Selara stops, keeps your accounts untouched, and you can edit the plan or ask for a different approach. Rejecting is a normal part of the workflow—not a failure state.',
  },
  {
    q: 'How accurate is voice input?',
    a: 'You talk normally—no special commands. Selara turns speech into a written plan you review before anything executes. If it mishears something, you fix it in the plan, not after the damage is done.',
  },
  {
    q: 'Are memory limits different by plan?',
    a: 'Yes. Select covers a solid personal workload. Premium adds more capacity and shared access. Pinnacle is built for teams or households that need serious headroom. Limits are visible in the app so you always know where you stand.',
  },
  {
    q: 'What if an integration fails mid-action?',
    a: 'Selara surfaces the error in the plan before anything partial ships. You decide whether to retry, change tools, or stop. Important actions never silently half-complete.',
  },
  {
    q: 'How do upgrades or downgrades work mid-cycle?',
    a: 'Switch plans from your account. Your data, memory, and settings carry over. Billing adjusts on the next cycle—no lock-in, no starting over.',
  },
  {
    q: 'Can Selara replace my executive assistant?',
    a: 'Selara works as an executive AI assistant for routine calendar, follow-up, and coordination — always with a plan you approve first. For judgment calls that need a human in the room, it shows you the draft and waits. Many professionals use it to reclaim hours their EA shouldn’t spend on busywork.',
  },
  {
    q: 'Is Selara only on iPhone today?',
    a: 'The open beta is iOS-first. Mac, browser, and Watch versions are on the roadmap—see /future for what’s coming. Your account and preferences will carry across surfaces as they ship.',
  },
  {
    q: 'Does Selara train on my data?',
    a: 'Selara is built for professionals who cannot afford surprises. Your conversations and documents are handled for your assistant—not sold or used to train public models. See our Privacy Policy for full detail.',
  },
  {
    q: 'What changes when I move from beta to paid?',
    a: 'Your setup, memory, and integrations stay. You pick Select, Premium, or Pinnacle when you’re ready. Nothing resets—you just unlock paid capacity and billing on your terms.',
  },
  {
    q: 'Is Selara a premium AI concierge for iOS?',
    a: 'Yes. Selara is a premium AI concierge built for iOS — calendar intelligence, voice, mail, and approval-first control in one calm app. Mac and other surfaces are on the public roadmap at /future.',
  },
];

/** Billing-focused subset for the pricing page FAQ block. */
export const pricingFaqs: FaqItem[] = faqs.filter((item) =>
  ['Are the prices real?', 'How does billing work?', 'Can I upgrade or downgrade later?', 'What do I get in the open beta?', 'Are memory limits different by plan?', 'How do upgrades or downgrades work mid-cycle?', 'What changes when I move from beta to paid?'].includes(item.q),
);

/** Alias — billing FAQs for pricing sections (no duplication). */
export const pricingBillingFaqs = pricingFaqs;

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

export type CapabilitySlug =
  | '/calendar-assistant'
  | '/email-assistant'
  | '/voice-assistant'
  | '/ai-automations'
  | '/privacy-first-ai-assistant';

export type CapabilityUseCase = {
  persona: string;
  scenario: string;
  outcome: string;
};

export type CapabilityPageContent = {
  slug: CapabilitySlug;
  useCases: CapabilityUseCase[];
  beforeAfter: { before: string[]; after: string[] };
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const capabilityPages: CapabilityPageContent[] = [
  {
    slug: '/calendar-assistant',
    useCases: [
      {
        persona: 'Legal & advisory',
        scenario: 'A client emergency overlaps with board prep — Selara drafts a reschedule, conflict check, and client notification.',
        outcome: 'You approve one plan instead of juggling three apps and three threads.',
      },
      {
        persona: 'Medicine & clinical leadership',
        scenario: 'An urgent clinic request threatens protected focus blocks for chart review.',
        outcome: 'Selara shows the tradeoff and a patient-safe alternative before anything moves.',
      },
      {
        persona: 'Executive & operator',
        scenario: 'A cross-functional sync needs to shift across time zones with stakeholder context.',
        outcome: 'The full move — calendar, message drafts, prep notes — waits in one approval card.',
      },
      {
        persona: 'Principal & advisor',
        scenario: 'Travel delays cascade into back-to-back meetings you cannot physically make.',
        outcome: 'Selara proposes realistic buffers and follow-ups you can accept or edit in seconds.',
      },
    ],
    beforeAfter: {
      before: [
        'Calendar changes happen while you are in meetings — you find out after the fact.',
        'Rescheduling means opening mail, calendar, and chat separately.',
        'Focus blocks erode silently when “quick” requests stack up.',
        'Follow-ups live in your head until something slips.',
      ],
      after: [
        'Every meaningful calendar change arrives as a visible plan first.',
        'Reschedule + notify + prep land in one approval you can skim on mobile.',
        'Focus time gets defended with context — not guilt.',
        'Follow-ups draft themselves and wait for your OK before sending.',
      ],
    },
    faqs: [
      {
        q: 'Does Selara move meetings without asking?',
        a: 'No. Calendar intelligence proposes moves and drafts messages — you approve before anything changes on your calendar or goes to other people.',
      },
      {
        q: 'How is this different from a smart scheduling link?',
        a: 'Scheduling links optimize slots. Selara understands your week — energy, travel, priorities — and handles the full follow-through chain with approval-first guardrails.',
      },
      {
        q: 'Can it protect focus blocks and deep work?',
        a: 'Yes. When something tries to steal protected time, you see the cost and alternatives instead of silent calendar drift.',
      },
      {
        q: 'Which calendars does Selara work with?',
        a: 'Google Calendar, Apple Calendar, Outlook, and more through our integrations hub — always with visible plans before external changes.',
      },
      {
        q: 'What if I reject a calendar plan?',
        a: 'Nothing changes. You can edit the plan, ask Selara to try another approach, or handle it yourself — rejection is a normal part of the workflow.',
      },
    ],
    relatedLinks: [
      { label: 'Voice assistant', href: '/voice-assistant' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security & Trust', href: '/trust' },
      { label: 'Vs calendar AI', href: '/vs-calendar-ai' },
      { label: 'How Selara thinks', href: '/how-selara-thinks' },
    ],
  },
  {
    slug: '/email-assistant',
    useCases: [
      {
        persona: 'Legal & advisory',
        scenario: 'A client thread needs a careful follow-up after a board prep week — Selara drafts in your voice and waits before anything sends.',
        outcome: 'You approve one draft instead of re-reading the same thread three times.',
      },
      {
        persona: 'Medicine & clinical leadership',
        scenario: 'Referral and clinic coordination emails stack up between sessions.',
        outcome: 'Triage separates what needs you from what can move — sensitive messages still wait for approval.',
      },
      {
        persona: 'Executive & operator',
        scenario: 'After a cross-functional sync, status updates must go to Slack, mail, and Notion without inconsistent context.',
        outcome: 'One plan covers every surface; you skim once before anything external lands.',
      },
      {
        persona: 'Principal & advisor',
        scenario: '“I will send that next week” promises pile up until something slips.',
        outcome: 'Follow-ups draft with context and land on your approval screen — not in mental sticky notes.',
      },
    ],
    beforeAfter: {
      before: [
        'Important threads live in your head until something slips.',
        'Drafts sound generic or need heavy editing before you trust them.',
        'Follow-ups depend on remembering, not a system.',
        'Sensitive sends happen before you have time to re-read.',
      ],
      after: [
        'Triage shows what actually needs you — the rest moves quietly.',
        'Drafts sound like something you would send; you tweak judgment calls only.',
        'Follow-ups queue with context and wait for your OK.',
        'Anything reputation-sensitive stops on your screen first.',
      ],
    },
    faqs: [
      {
        q: 'Does Selara send email without asking?',
        a: 'No. Email assistance drafts and triages — you approve before anything sends under your name.',
      },
      {
        q: 'How is this different from Gmail smart replies?',
        a: 'Smart replies optimize snippets. Selara carries memory across mail, calendar, and tools — with approval-first guardrails on anything external.',
      },
      {
        q: 'Can it handle sensitive professional mail?',
        a: 'Yes — that is exactly when approval-first matters. High-stakes messages wait for you; routine triage can move within your settings.',
      },
      {
        q: 'Which mail providers work?',
        a: 'Gmail, Apple Mail, Outlook, and more through our integrations hub — always with visible plans before sends.',
      },
      {
        q: 'What if I reject an email plan?',
        a: 'Nothing sends. Edit the draft, ask for another approach, or handle it yourself — rejection is normal.',
      },
    ],
    relatedLinks: [
      { label: 'Calendar assistant', href: '/calendar-assistant' },
      { label: 'Voice assistant', href: '/voice-assistant' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Success stories', href: '/stories' },
      { label: 'Approval-first guide', href: '/guide' },
    ],
  },
  {
    slug: '/voice-assistant',
    useCases: [
      {
        persona: 'Between meetings',
        scenario: 'Walking from one floor to another, you say “move tomorrow’s 2pm and tell the team I need ten minutes.”',
        outcome: 'Selara turns speech into a reviewable plan — not a surprise calendar edit.',
      },
      {
        persona: 'In the car',
        scenario: 'Hands-free capture of follow-ups, reminders, and delegation while driving.',
        outcome: 'Voice input becomes structured tasks and drafts waiting for approval when you park.',
      },
      {
        persona: 'Executive assistant replacement',
        scenario: 'Quick verbal delegation that used to require a human to interpret tone and context.',
        outcome: 'Selara learns your people and preferences so you stop repeating the same instructions.',
      },
      {
        persona: 'Clinical & legal professionals',
        scenario: 'Capture sensitive follow-ups without typing patient or client details in a rush.',
        outcome: 'Drafts stay in your control — voice speeds input, approvals protect output.',
      },
    ],
    beforeAfter: {
      before: [
        'Voice memos pile up — transcription without action.',
        'Siri-style assistants act immediately and often get details wrong.',
        'You repeat context every time because nothing remembers your world.',
        'Driving capture means unsafe typing or forgotten tasks.',
      ],
      after: [
        'Speech becomes a structured plan you review in one calm screen.',
        'Nothing runs until you approve — voice is input, not autopilot.',
        'Memory carries your people, preferences, and patterns forward.',
        'Hands-free capture that respects high-stakes professional judgment.',
      ],
    },
    faqs: [
      {
        q: 'How accurate is voice input?',
        a: 'Selara is built for natural speech — not command syntax. You talk normally; it structures intent into a plan you verify before action. Accuracy improves as it learns your vocabulary and context.',
      },
      {
        q: 'Is voice available on every plan?',
        a: 'Voice access is included across tiers with different quality tiers — Natural voice on Premium and Premium voice on Pinnacle. See pricing for details.',
      },
      {
        q: 'Does voice work on iOS only?',
        a: 'The open beta is iOS-first. Voice is designed for mobile moments — between meetings, in transit, away from keyboard.',
      },
      {
        q: 'What happens after I speak?',
        a: 'Selara shows a plan summary — calendar moves, drafts, automations — and waits. You approve, edit, or reject like any other action.',
      },
      {
        q: 'Can Selara send messages from voice alone?',
        a: 'Only after you approve the draft. Voice is how you delegate; approval is how you stay in charge.',
      },
    ],
    relatedLinks: [
      { label: 'Calendar assistant', href: '/calendar-assistant' },
      { label: 'Privacy-first AI', href: '/privacy-first-ai-assistant' },
      { label: 'Download Selara', href: '/download' },
      { label: 'Features overview', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    slug: '/ai-automations',
    useCases: [
      {
        persona: 'Executives & operators',
        scenario: 'Weekly status updates across Slack, email, and Notion — same context, three surfaces.',
        outcome: 'One approved automation chain instead of copy-paste busywork.',
      },
      {
        persona: 'Legal & advisory',
        scenario: 'Client matter updates that must never send without partner review.',
        outcome: 'Automations pause at external touchpoints until you sign off.',
      },
      {
        persona: 'Operations lead',
        scenario: 'Onboarding checklists that span calendar invites, doc shares, and team notifications.',
        outcome: 'Cross-tool workflows with guardrails — not brittle Zapier-style surprises.',
      },
      {
        persona: 'Solo principal',
        scenario: 'Recurring follow-ups after meetings — CRM notes, thank-you drafts, next-step reminders.',
        outcome: 'Routine work runs quietly; judgment calls still land on your screen.',
      },
    ],
    beforeAfter: {
      before: [
        'Automations fire silently — you discover problems after clients or teams see them.',
        'Cross-tool busywork means re-explaining context in every app.',
        '“Smart” agents optimize speed over trust.',
        'Integration failures leave half-finished workflows.',
      ],
      after: [
        'Every automation that touches people or accounts shows a plan first.',
        'Memory carries context across Gmail, Slack, Notion, Linear, and 800+ tools.',
        'Approval-first architecture — speed without reputation risk.',
        'Failed steps surface clearly instead of failing quietly.',
      ],
    },
    faqs: [
      {
        q: 'What if an integration fails mid-action?',
        a: 'Selara surfaces the failure in the plan — nothing partial ships without your visibility. You can retry, edit, or handle manually.',
      },
      {
        q: 'How many integrations are supported?',
        a: '800+ tools across calendar, mail, docs, and team chat. See the integrations directory for categories and examples.',
      },
      {
        q: 'Can automations run without approval?',
        a: 'Low-risk internal steps may proceed within your settings — but anything touching calendar, external mail, or shared accounts waits for you.',
      },
      {
        q: 'Is this like Zapier or Make?',
        a: 'Those connect triggers and actions. Selara adds memory, natural language, and mandatory approval on high-stakes steps — built for professionals, not hobby workflows.',
      },
      {
        q: 'What tools work best together?',
        a: 'Calendar + mail + docs is the core triangle. Most executives start with Google or Microsoft stack plus Slack or Linear — Selara maps context across all of them.',
      },
    ],
    relatedLinks: [
      { label: 'Integrations', href: '/integrations' },
      { label: 'Calendar assistant', href: '/calendar-assistant' },
      { label: 'Email assistant', href: '/email-assistant' },
      { label: 'Vs generic AI', href: '/vs-generic-ai' },
      { label: 'Trust & security', href: '/trust' },
    ],
  },
  {
    slug: '/privacy-first-ai-assistant',
    useCases: [
      {
        persona: 'High-stakes professional',
        scenario: 'You need AI help on client, patient, or board matters — but cannot risk silent sends or mystery actions.',
        outcome: 'Approval-first design means power without the usual “AI oops” headlines.',
      },
      {
        persona: 'Privacy-conscious executive',
        scenario: 'Memory that actually helps — without feeling like you sold your calendar to a training dataset.',
        outcome: 'Transparent data practices, deletion rights, and visible control over what Selara remembers.',
      },
      {
        persona: 'Compliance-aware team lead',
        scenario: 'Evaluating AI assistants for a firm that handles sensitive correspondence.',
        outcome: 'Clear subprocessors, encryption practices, and integration guardrails you can explain to counsel.',
      },
      {
        persona: 'Former “fast agent” user',
        scenario: 'Impressive demos that broke trust when something sent or scheduled incorrectly.',
        outcome: 'Calm software — every external action passes through plan review first.',
      },
    ],
    beforeAfter: {
      before: [
        'AI assistants optimize for speed — you find out what they did later.',
        'Memory feels creepy or forgets what matters at the wrong moment.',
        'Privacy policies are vague; data use is unclear.',
        'One wrong send or calendar move costs real reputation.',
      ],
      after: [
        'Every important action arrives as a readable plan before it runs.',
        'Memory serves your workflow — with transparency and deletion control.',
        'Trust hub, privacy policy, and security practices written in plain language.',
        'Reject a plan anytime — nothing changes until you say so.',
      ],
    },
    faqs: [
      {
        q: 'Is my data used to train AI models?',
        a: 'Selara is built for professional trust. We do not use your personal workflow data to train public models. See our Privacy Policy for full detail.',
      },
      {
        q: 'What data does Selara store?',
        a: 'Memory, preferences, connected tool context, and documents you choose to share — always with visibility into what is remembered and controls to delete.',
      },
      {
        q: 'How do approvals protect me?',
        a: 'Before calendar changes, sends, or cross-tool actions run, you see a summary. Approve, edit, or reject — the default is pause, not proceed.',
      },
      {
        q: 'How is this different from the Trust page?',
        a: 'This page explains privacy-first product philosophy. The Trust page covers security practices, subprocessors, and compliance roadmap in detail.',
      },
      {
        q: 'Can I delete my memory and data?',
        a: 'Yes. You can remove stored context and request account deletion. We document the process in our Privacy Policy and Trust hub.',
      },
    ],
    relatedLinks: [
      { label: 'Security & Trust', href: '/trust' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'How Selara thinks', href: '/how-selara-thinks' },
      { label: 'Vs generic AI', href: '/vs-generic-ai' },
      { label: 'Calendar assistant', href: '/calendar-assistant' },
    ],
  },
];

export function getCapabilityPage(slug: CapabilitySlug): CapabilityPageContent {
  const page = capabilityPages.find((entry) => entry.slug === slug);
  if (!page) throw new Error(`Unknown capability page: ${slug}`);
  return page;
}

export const integrationCategories = [
  {
    category: 'Calendar & Time',
    items: [
      'Google Calendar',
      'Apple Calendar',
      'Outlook',
      'Calendly',
      'Reclaim',
      'Motion',
      'Fantastical',
      'Cron',
    ],
  },
  {
    category: 'Mail & Communication',
    items: [
      'Gmail',
      'Apple Mail',
      'Superhuman',
      'Slack',
      'Linear',
      'Notion',
      'Microsoft Teams',
      'Discord',
      'Zoom',
    ],
  },
  {
    category: 'Documents & Knowledge',
    items: [
      'Google Docs',
      'Google Drive',
      'Notion',
      'Obsidian',
      'Dropbox',
      'Box',
      'OneDrive',
      'Confluence',
      'Airtable',
    ],
  },
  {
    category: 'Everything Else',
    items: [
      'Stripe',
      'GitHub',
      'Asana',
      'Todoist',
      '800+ more via native integrations and APIs — the long tail of tools you actually use.',
    ],
  },
];

export type RoadmapStatus = 'shipped' | 'in-progress' | 'planned';

export type RoadmapItem = {
  title: string;
  status: RoadmapStatus;
  surface: string;
  description: string;
};

export const roadmapItems: RoadmapItem[] = [
  {
    title: 'iOS open beta',
    status: 'shipped',
    surface: 'iPhone',
    description:
      'Native iOS app with calendar intelligence, voice, approvals, email, documents, Studio, and 800+ integrations.',
  },
  {
    title: 'Mac app',
    status: 'in-progress',
    surface: 'Mac',
    description: 'Deeper desktop presence for professionals who live in email, calendar, and documents all day.',
  },
  {
    title: 'Apple Watch',
    status: 'planned',
    surface: 'Watch',
    description: 'Quick voice capture and glanceable plan review when your phone is not in hand.',
  },
  {
    title: 'Browser extension',
    status: 'planned',
    surface: 'Browser',
    description: 'Selara where you already work on the web — with the same approval-first guardrails.',
  },
  {
    title: 'Deeper agentic workflows',
    status: 'planned',
    surface: 'Platform',
    description: 'Multi-step follow-through across tools with visible plans before anything consequential runs.',
  },
  {
    title: 'Expanded integrations',
    status: 'in-progress',
    surface: 'Integrations',
    description: 'Broader coverage of the productivity stack professionals actually use — with approval across tools.',
  },
  {
    title: 'SpouseConnect polish',
    status: 'planned',
    surface: 'iOS',
    description: 'Shared coordination for households without losing individual control or calm.',
  },
];

export const roadmapVoteMailto = `mailto:${supportEmail}?subject=${encodeURIComponent('Feature request')}&body=${encodeURIComponent('I would love to see Selara add:\n\n')}`;

export const conversionBannerCopy = {
  title: 'Start free in open beta',
  body: 'Calendar intelligence, approvals, and follow-through — without the chaos. Available now on iOS.',
  primaryLabel: 'Start free in open beta',
  dismissLabel: 'Not now',
};

export type ReferralStep = {
  title: string;
  body: string;
};

export const referralProgram = {
  eyebrow: 'Invite a colleague',
  title: 'Share Selara. Both of you get more from the beta.',
  intro:
    'Know someone whose calendar runs their week? Invite them — you both receive extended beta access when they join through your link in the app.',
  steps: [
    {
      title: 'Open Invite in Settings',
      body: 'After you download, go to Settings → Invite. Your personal link is ready to share.',
    },
    {
      title: 'Send it to someone you trust',
      body: 'A colleague, partner, or friend who would benefit from calm, approval-first help — not a blast to everyone.',
    },
    {
      title: 'Both get extended beta access',
      body: 'When they join, you both receive extended beta perks. No codes to chase, no awkward follow-ups.',
    },
  ] satisfies ReferralStep[],
  benefits: [
    'Extended beta access for you and your invitee',
    'Help someone you respect try software that shows its work',
    'No spam — one thoughtful invite at a time',
  ],
  primaryCtaLabel: 'Get the app',
  secondaryCtaLabel: 'Questions about invites',
  secondaryCtaHref: `mailto:${supportEmail}?subject=${encodeURIComponent('Referral program question')}`,
  compactTitle: 'Invite a colleague — both get extended beta access',
  compactIntro: 'Share your link from Settings → Invite after you download.',
};

export const referralFaqs: FaqItem[] = [
  {
    q: 'Who should I invite?',
    a: 'Someone whose week looks like yours — a colleague, partner, or friend who would benefit from calm, approval-first help. One thoughtful invite beats a blast to everyone.',
  },
  {
    q: 'When do we both get extended beta access?',
    a: 'When your invitee joins Selara through your personal link in the app. Both of you receive extended beta perks — no codes to chase.',
  },
  {
    q: 'Where is my invite link?',
    a: 'After you download, open Settings → Invite. Your link is ready to share. This page explains the program; the link itself lives in the app.',
  },
];

export type LeadMagnetSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export const leadMagnet = {
  slug: '/guide',
  eyebrow: 'Free guide',
  title: 'The Approval-First AI Guide',
  subtitle: 'How high-performers delegate without losing control — or their calm.',
  intro:
    'A short framework for professionals who need AI help on real work — calendar, mail, follow-through — without the anxiety of silent automation.',
  formTitle: 'Get the guide',
  formIntro: 'Enter your email and the full guide unlocks on this page. We will not spam you.',
  successTitle: 'Your guide is ready',
  successIntro: 'Read below or print for later. We will send occasional updates you can unsubscribe from anytime.',
  sections: [
    {
      title: '1. Start with visibility, not speed',
      body: 'The fastest agent is useless if it sends the wrong thing. Approval-first means every meaningful action becomes a plan you can skim, edit, or reject — before it touches your calendar or reputation.',
      bullets: [
        'Ask: “What will change, and who will see it?” before anything runs.',
        'Treat rejection as normal — it is how you train the system to your standards.',
      ],
    },
    {
      title: '2. Protect focus like a scarce resource',
      body: 'Calendar intelligence is not slot-finding — it is defending the hours that actually matter. Block deep work, travel buffers, and recovery time as constraints, not suggestions.',
      bullets: [
        'When something intrudes, see the tradeoff before you accept it.',
        'Let routine reschedules draft themselves; keep judgment calls on your screen.',
      ],
    },
    {
      title: '3. Delegate the chain, not just the task',
      body: 'Real weeks span calendar, mail, docs, and team chat. A personal assistant worth trusting carries context across tools and shows one coherent plan — not five partial updates.',
    },
    {
      title: '4. Use voice for capture, approval for action',
      body: 'Talk between meetings; review on screen. Speech is input, not autopilot. The plan is where you verify details before anything external happens.',
    },
    {
      title: '5. Build memory you would be proud to show someone',
      body: 'Good memory is explicit preferences and people — not mystery context. Review what your assistant remembers; delete what does not serve you.',
    },
    {
      title: '6. Choose calm software',
      body: 'Premium means it respects your attention. Motion, hierarchy, and restraint beat dashboards that demand babysitting. If software adds noise, it is not saving you time.',
    },
  ] satisfies LeadMagnetSection[],
};

export const pressEmail = 'press@selaraillc.com';

export const founderBio = {
  name: 'Zachary Cohen',
  role: 'Founder, SelarAI LLC',
  location: 'St. Albans',
  summary:
    'Building Selara — a calm, approval-first AI concierge for professionals who cannot afford calendar or inbox surprises. Focused on native craft, visible control, and software that feels like luxury rather than another dashboard to manage.',
};

export const aboutMission = {
  eyebrow: 'About Selara',
  title: 'For people whose time is too expensive to waste on average software.',
  intro:
    'Most AI assistants are built to impress in a demo. Selara is built for people who need it to actually run their weeks without creating new problems.',
};

export type AboutValueKey = 'calm' | 'control' | 'premium' | 'privacy';

export type AboutValue = {
  key: AboutValueKey;
  title: string;
  body: string;
};

export const aboutValues: AboutValue[] = [
  {
    key: 'calm',
    title: 'Calm',
    body: 'Software should reduce noise, not add another system to babysit. Motion, hierarchy, and restraint — so your attention stays on what actually matters.',
  },
  {
    key: 'control',
    title: 'Control',
    body: 'You see what Selara is about to do before it touches your calendar, mail, or team. Approval-first is the architecture — not a feature you toggle on when things go wrong.',
  },
  {
    key: 'premium',
    title: 'Premium',
    body: 'Premium means it respects you. Crafted for people whose attention is genuinely valuable — intentional in every detail, not expensive for its own sake.',
  },
  {
    key: 'privacy',
    title: 'Privacy',
    body: 'Your week is yours. Transparent practices, visible intent, and nothing important without your say — built for professionals who cannot afford surprises.',
  },
];

export const aboutWhyWeBuilt = {
  eyebrow: 'Why we built this',
  title: 'The agent era showed what speed looks like without guardrails.',
  intro:
    'Raw automation impressed in demos — then real calendars and inboxes broke. Selara exists for people who need serious help and cannot afford that kind of surprise.',
  body: 'We watched powerful agents act without showing their work. Schedules moved without context. Messages sent without review. The people who needed help most — lawyers, clinicians, operators — were the ones who could least afford the fallout. Selara is the answer we wanted for ourselves: one calm assistant that knows how you work, shows you the plan, and only does things after you approve.',
};

export type PhilosophySection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  pullQuote?: string;
};

export const philosophyContent = {
  hero: {
    eyebrow: 'Philosophy',
    title: 'Calm assistance for weeks where the stakes are real.',
    intro:
      'Most AI assistants promise speed. Selara is built for professionals who need judgment, visibility, and follow-through — the kind of week where a moved meeting or a sent email can cost trust. This is the philosophy behind approval-first AI.',
  },
  sections: [
    {
      id: 'broken-promise',
      eyebrow: 'The broken promise',
      title: 'Powerful agents keep surprising the people who need them most.',
      body: [
        'The last generation of AI assistants sold a simple story: describe what you want, and it happens. For casual tasks, that story holds. For professionals whose calendars and inboxes touch clients, patients, boards, and teams, it breaks the moment something runs without being seen first.',
        'When an agent reschedules a deposition, sends under your name, or shuffles a clinic day without context, the damage is not theoretical. It shows up as an apology call, a surprised associate, or a patient wondering why their follow-up slipped. The tool was fast. The professional paid for it.',
        'Selara starts from a different assumption: automation is only as good as the plan behind it. Speed without visibility is not a feature — it is a liability when your reputation is on the line.',
      ],
      pullQuote: 'Fast is easy to demo. Calm is what professionals actually need.',
    },
    {
      id: 'calm-over-speed',
      eyebrow: 'Calm over speed',
      title: 'A good week feels organized, not frantic.',
      body: [
        'Calendar intelligence is not about squeezing more into a day. It is about understanding what the day is for — prep time, patient blocks, travel buffers, the meetings that actually need you in the room — and protecting that intent when the week gets reactive.',
        'Selara is deliberately calm. It surfaces tradeoffs instead of hiding them. When something has to move, you see what moves, who is affected, and what still needs follow-through. That takes a few more seconds than blind execution. It saves hours of cleanup.',
        'We optimize for the feeling of control at the end of the day: fewer surprises, fewer mental tabs open, fewer moments wondering what just changed while you were in a meeting.',
      ],
    },
    {
      id: 'approval-as-respect',
      eyebrow: 'Approval as respect',
      title: 'The approval step is not friction. It is the product.',
      body: [
        'Approval-first means Selara turns your request into a visible plan before anything important runs — calendar changes, outbound messages, connected automations. You approve, edit, or reject. Rejecting is normal. Nothing runs until you are ready.',
        'That is not a compromise for people who do not trust AI. It is how high-stakes work should be delegated. You stay in judgment. The assistant stays accountable. Your team sees changes that were intentional, not accidental.',
        'For professionals who have watched agents act first and explain later, approval is not skepticism — it is respect for how much depends on getting the details right.',
      ],
      pullQuote: 'You stay in judgment. The assistant stays accountable.',
    },
    {
      id: 'memory-compounding',
      eyebrow: 'Memory that compounds',
      title: 'Context should accumulate, not evaporate every Monday.',
      body: [
        'A useful assistant remembers how you work — which clients need careful wording, which clinic blocks are non-negotiable, which standing meetings can flex and which cannot. Without memory, you repeat yourself. With shallow memory, you get confident mistakes.',
        'Selara retains preferences and context so plans get sharper over time. You can review and delete what it remembers. Memory is a tool for accuracy, not a black box you have to trust blindly.',
        'The compounding effect is practical: fewer corrections, better drafts, scheduling that reflects your real priorities instead of generic optimization. The assistant learns your week; you never lose sight of what it is about to do.',
      ],
    },
    {
      id: 'premium-craft',
      eyebrow: 'Premium craft',
      title: 'Luxury software is visible, considered, and built to last.',
      body: [
        'Selara is a premium product for people who already pay for quality in every other part of their professional life — counsel, clinical systems, executive support. The interface should feel as considered as the judgment behind it: clear typography, readable plans, voice that turns into text you can verify before action.',
        'Premium does not mean flashy. It means nothing important happens in a hidden layer. Integrations, automations, and follow-through chains all surface in the plan. If something fails, you see it before anything partial ships.',
        'We are building for longevity: an assistant you can rely on across years of practice, leadership, and growth — not a demo that impresses for a week and erodes trust the first time it moves your calendar without asking.',
      ],
    },
    {
      id: 'who-this-is-for',
      eyebrow: 'Who this is for',
      title: 'Built for professionals who cannot afford surprises.',
      body: [
        'Selara is for litigation partners protecting client relationships, clinical leaders guarding patient time, executives running boards and investor weeks, and anyone whose calendar is not a personal hobby — it is how other people experience your reliability.',
        'If your week is mostly low-stakes tasks, a fast generic assistant may be enough. If a wrong send or a silent reschedule would matter, you need memory, context, and approval before action.',
        'That is the bar we hold ourselves to: not the broadest possible audience, but the professionals who need calm delegation when the stakes are highest and the details are theirs to own.',
      ],
    },
  ] as PhilosophySection[],
  closingCta: {
    title: 'See the philosophy in practice.',
    intro:
      'Definitions, trust details, and real anonymized stories — so you know what approval-first means before you trust Selara with your week.',
  },
};

/**
 * Demo video strategy: film 60-second clips for (1) voice → plan → approve,
 * (2) calendar intelligence tradeoffs, (3) memory-informed follow-through.
 * Set `videoUrl` on each entry when assets are ready; placeholders stay live until then.
 */
export type DemoVideo = {
  id: string;
  title: string;
  durationLabel: string;
  description: string;
  posterSlot: ImageSlotKey;
  transcript: string;
  videoUrl?: string;
};

export const demoVideos: DemoVideo[] = [
  {
    id: 'overview',
    title: 'Voice, plan, approve — in sixty seconds',
    durationLabel: '60 seconds',
    description:
      'Watch how Selara turns a spoken request into a visible plan you can approve, edit, or reject before anything runs.',
    posterSlot: 'approvalFlow',
    transcript:
      'Narrator: You ask Selara to move your afternoon and draft a client update. Selara shows a plan: which meetings shift, who gets notified, and the draft message waiting for your review. You edit one line, approve, and only then does the calendar update. Nothing sends under your name until you say so. That is approval-first AI — speed with visibility, built for weeks where the details matter.',
  },
  {
    id: 'calendar',
    title: 'Calendar intelligence with tradeoffs',
    durationLabel: '45 seconds',
    description: 'See how Selara protects focus blocks and surfaces what moves when the week gets reactive.',
    posterSlot: 'calendarIntelligence',
    transcript:
      'Narrator: A protected clinic block gets an emergency request. Selara does not silently double-book. It proposes a tradeoff: what moves, who is affected, and which follow-ups still need same-day attention. You approve the swap or reject and keep the block. Calendar intelligence means seeing the whole tradeoff — not discovering the conflict in the hallway.',
  },
  {
    id: 'memory',
    title: 'Memory that sharpens every plan',
    durationLabel: '45 seconds',
    description: 'Context accumulates so drafts and scheduling reflect how you actually work.',
    posterSlot: 'deepVoice',
    transcript:
      'Narrator: Selara remembers which clients need formal tone, which blocks are non-negotiable, and how you prefer follow-ups queued. The next plan is sharper because the last ones taught it — and you can always review or delete what it remembers. Memory compounds accuracy; approval keeps you in control.',
  },
];

export const pressFacts = [
  'Approval-first AI concierge for iOS — visible plans before consequential actions run.',
  '800+ integrations across calendar, mail, documents, and productivity tools.',
  'Open beta live for professionals who value time, control, and calm software.',
  'Built by SelarAI LLC — privacy-forward practices with transparent legal pages.',
];

export const pressMilestones = [
  { date: '2026', label: 'iOS open beta launch with calendar intelligence, voice, and approvals.' },
  { date: '2026', label: 'Core surfaces shipped: email, documents, Studio, and integrations hub.' },
  { date: 'Next', label: 'Mac, Watch, and browser extension on the public roadmap.' },
];

export const pressAssets = [
  {
    title: 'Selara logo',
    description: 'Primary brand mark for light and dark backgrounds.',
    href: '/press/selara-logo.svg',
    format: 'SVG',
  },
  {
    title: 'Brand one-pager',
    description: 'Key facts, positioning, and contact for quick reference.',
    href: '/press/selara-one-pager.txt',
    format: 'TXT',
  },
];

export type TrustPillar = {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

export type TrustSignalIcon = 'shield' | 'check' | 'lock' | 'roadmap';

export type TrustSignal = {
  label: string;
  href?: string;
  icon: TrustSignalIcon;
};

/** Honest trust copy for footer strips and CTA adjacency — no unearned certification badges. */
export const trustSignals: TrustSignal[] = [
  {
    label: 'Privacy-first by design',
    href: '/privacy-first-ai-assistant',
    icon: 'shield',
  },
  {
    label: 'Approval-first architecture',
    href: '/how-selara-thinks#approval-first',
    icon: 'check',
  },
  {
    label: 'Your data stays yours',
    href: '/privacy',
    icon: 'lock',
  },
  {
    label: 'Security program in development',
    href: '/trust',
    icon: 'roadmap',
  },
];

export const trustPillars: TrustPillar[] = [
  {
    title: 'Privacy by design',
    body: 'Selara is built approval-first: you see what will happen before anything touches your calendar, inbox, or connected tools. That visibility is the product — not an afterthought.',
    href: '/privacy-first-ai-assistant',
    linkLabel: 'How approval-first works',
  },
  {
    title: 'What we store',
    body: 'Your account details, preferences, voice recordings and transcripts when you use voice, connected integrations, and the content you submit — collectively Your Content under our Terms. You retain ownership. Memory and preferences can be reviewed from settings.',
    href: '/privacy',
    linkLabel: 'Full Privacy Policy',
  },
  {
    title: 'How approvals protect you',
    body: 'Important actions wait for your review. Reject a plan and nothing runs — your accounts stay untouched. The boring stuff can move faster; anything that would affect your reputation waits for you.',
    href: '/how-selara-thinks#approval-first',
    linkLabel: 'See approval-first explained',
  },
  {
    title: 'Security practices',
    body: 'We use security technologies and procedures to protect Personal Data on controlled servers with appropriate physical, technical, and organizational measures. We do not claim certifications we have not earned — see our Privacy Policy for the full picture.',
    href: '/privacy',
    linkLabel: 'Privacy Policy — security section',
  },
  {
    title: 'Your rights',
    body: 'You can request access, correction, updates, or deletion of your Personal Data, object to processing, request portability, or withdraw consent where applicable. Contact privacy@selaraillc.com or use in-app support channels.',
    href: '/privacy',
    linkLabel: 'Your privacy rights',
  },
  {
    title: 'Subprocessors & partners',
    body: 'We use third-party service providers for hosting, payment processing, and application development. Stripe processes subscriptions. Third-party integrations you connect are governed by their own terms — Selara does not control external platforms.',
    href: '/integrations',
    linkLabel: 'How integrations work',
  },
];

export const trustFaqs: FaqItem[] = [
  {
    q: 'Does Selara train on my data?',
    a: 'SelarAI does not sell or share Your Content with third-party model providers for independent training, and does not retrain models on Your Content unless you expressly authorize it. See our Privacy Policy for full detail.',
  },
  {
    q: 'Can I delete what Selara remembers?',
    a: 'Yes. You can review and delete memory and preferences from settings. You may also request deletion of Personal Data as described in our Privacy Policy.',
  },
  {
    q: 'What happens if I reject a plan?',
    a: 'Nothing runs. Your calendar, inbox, and connected accounts stay as they were. Rejecting is a normal part of the workflow.',
  },
  {
    q: 'Where is my data stored?',
    a: 'As of our current Privacy Policy, SelarAI conducts business within the United States. Personal Data is stored on controlled, secure servers. We will update our policies if operations expand internationally.',
  },
];

export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  href?: string;
  linkLabel?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'approval-first',
    term: 'Approval-first',
    definition:
      'Selara shows you a clear plan before anything important runs. You approve, edit, or reject — so powerful automation stays under your judgment.',
    href: '/privacy-first-ai-assistant',
    linkLabel: 'Privacy-first AI assistant',
  },
  {
    id: 'memory',
    term: 'Memory',
    definition:
      'Context and preferences Selara retains so you stop repeating yourself. Limits vary by plan tier. You can review and delete memory from settings.',
  },
  {
    id: 'calendar-intelligence',
    term: 'Calendar intelligence',
    definition:
      'Selara interprets your schedule — not just listing events, but layering context, recommendations, and follow-up so your day feels understood.',
    href: '/calendar-assistant',
    linkLabel: 'Calendar assistant',
  },
  {
    id: 'plan-review',
    term: 'Plan review',
    definition:
      'The step where Selara turns your request into visible steps — what will change, what will be sent, and what tools are involved — before anything executes.',
  },
  {
    id: 'connected-automations',
    term: 'Connected automations',
    definition:
      'Workflows that span your tools — calendar, mail, documents, and 800+ integrations — with approval guardrails when the stakes are real.',
    href: '/ai-automations',
    linkLabel: 'AI automations',
  },
  {
    id: 'your-content',
    term: 'Your Content',
    definition:
      'User Input you submit plus AI Output generated in response. You retain ownership. SelarAI processes it to provide the Services under a limited license described in our Terms.',
    href: '/privacy',
    linkLabel: 'Privacy Policy',
  },
  {
    id: 'integration-guardrails',
    term: 'Integration guardrails',
    definition:
      'Rules that keep connected tools useful without surprises — especially approval before actions that touch your calendar, reputation, or sensitive communication.',
    href: '/integrations',
    linkLabel: 'Integrations',
  },
  {
    id: 'usage-data',
    term: 'Usage Data',
    definition:
      'Technical logs, performance metrics, and interaction metadata SelarAI uses to improve the Services. It does not include Your Content in identifiable form when shared externally.',
    href: '/privacy',
    linkLabel: 'Privacy Policy',
  },
];

export type BuiltWithItem = {
  label: string;
  detail: string;
};

export const builtWithIntro =
  'Built with care, not hype. Selara is a native iOS experience first — engineered for calm, control, and follow-through.';

export const builtWithItems: BuiltWithItem[] = [
  {
    label: 'SwiftUI',
    detail: 'Native iOS craft — motion, hierarchy, and restraint designed for professionals who live on their phones.',
  },
  {
    label: 'Firebase',
    detail: 'Infrastructure for auth, hosting, and the services that keep Selara reliable as it scales.',
  },
  {
    label: 'Grok / xAI',
    detail: 'Intelligence layer for generative and agentic assistance — always behind approval-first guardrails.',
  },
  {
    label: 'Approval-first architecture',
    detail: 'A design principle, not a feature flag. Visibility before action is how the product is structured.',
  },
  {
    label: 'On-device where it matters',
    detail: 'Sensitive flows stay close to you when the platform allows — so control feels immediate, not abstract.',
  },
  {
    label: 'Stripe',
    detail: 'Subscription billing through a trusted payment processor, with terms governed by Stripe’s policies.',
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

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  ogImage?: string;
  priority?: number;
  changeFrequency?: 'weekly' | 'monthly' | 'yearly';
};

export const seoPages: SeoPage[] = [
  {
    slug: '',
    title: 'Selara — Premium AI personal assistant for professionals',
    description:
      'Selara is the approval-first AI assistant and premium AI concierge for iOS — calendar intelligence AI, voice access, and follow-through for professionals who need control. Available now in open beta.',
    ogImage: '/images/main.png',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    slug: '/features',
    title: 'Selara Features — Calendar, voice, and approval-first AI',
    description:
      'Explore Selara features: calendar intelligence AI, email and voice access, connected automations, and approval-first control—one premium AI personal assistant for professionals.',
    ogImage: imageSlots.featuresHub.placeholder,
    priority: 0.8,
  },
  {
    slug: '/pricing',
    title: 'Selara Pricing — Select, Premium, and Pinnacle',
    description:
      'Simple pricing for a premium AI personal assistant. Selara Select, Premium, and Pinnacle—calendar intelligence, voice, memory, and 800+ integrations with no lock-in.',
    ogImage: imageSlots.pricingProduct.placeholder,
    priority: 0.8,
  },
  {
    slug: '/download',
    title: 'Download Selara — Open beta for iOS',
    description: `Download Selara for iOS — the premium AI concierge open beta. Approval-first AI personal assistant with ${productCapabilityLine}`,
    ogImage: '/images/main.png',
    priority: 0.9,
  },
  {
    slug: '/future',
    title: 'The Future of Selara — Public roadmap',
    description:
      'See what Selara has shipped and what is next — Mac, Watch, browser extension, deeper agentic workflows, and expanded integrations. Vote on features.',
    ogImage: imageSlots.futureEcosystem.placeholder,
  },
  {
    slug: '/press',
    title: 'Press & Media — Selara by SelarAI',
    description:
      'Press kit for Selara: founder bio, key facts, product milestones, downloadable assets, and press contact for journalists and partners.',
    ogImage: '/images/selara-logo.png',
    priority: 0.6,
  },
  {
    slug: '/calendar-assistant',
    title: 'AI Calendar Assistant — Calendar intelligence for professionals',
    description:
      'Selara is calendar intelligence AI for professionals—reclaim time, protect focus blocks, and approve schedule changes before they land on your calendar.',
    ogImage: imageSlots.deepCalendar.placeholder,
  },
  {
    slug: '/email-assistant',
    title: 'AI Email Assistant — Drafts and follow-through with approval-first control',
    description:
      'Selara is an AI email assistant for professionals — triage, follow-ups, and drafts in your voice with approval-first control before anything sends. Part of a premium AI personal assistant for iOS.',
    ogImage: imageSlots.deepEmail.placeholder,
  },
  {
    slug: '/voice-assistant',
    title: 'Voice AI Personal Assistant — Natural delegation on iOS',
    description:
      'Selara is a voice-first AI personal assistant for iOS. Talk normally, review the plan, approve or change it—no special commands required.',
    ogImage: imageSlots.deepVoice.placeholder,
  },
  {
    slug: '/ai-automations',
    title: 'AI Automations — Connected workflows with approval-first control',
    description:
      'Selara delivers connected AI automations across 800+ tools—with context, memory, and approval-first control before anything touches your calendar or reputation.',
    ogImage: imageSlots.deepAutomations.placeholder,
  },
  {
    slug: '/privacy-first-ai-assistant',
    title: 'Privacy-First AI Assistant — Approval before action',
    description:
      'Selara is a privacy-first AI assistant built for high-stakes professionals—transparent control, visible plans, and nothing important without your approval.',
    ogImage: imageSlots.deepPrivacy.placeholder,
  },
  {
    slug: '/integrations',
    title: 'Selara Integrations — 800+ connected tools',
    description:
      '800+ integrations for calendar, mail, docs, and productivity—one calm AI concierge with approval-first control through Gmail, Slack, Notion, and more.',
    ogImage: imageSlots.integrationsList.placeholder,
  },
  {
    slug: '/vs-openclaw',
    title: 'Selara vs OpenClaw — Trust and control compared',
    description:
      'Compare Selara and OpenClaw on approval-first behavior, calendar safety, and day-to-day product experience for professionals who cannot afford surprises.',
    ogImage: '/images/main.png',
  },
  {
    slug: '/vs-generic-ai',
    title: 'Selara vs Generic AI — Delegation with approval-first control',
    description:
      'Compare Selara to generic ChatGPT-style assistants on memory, calendar follow-through, and calm approval-first UX for professionals who need action — not just answers.',
    ogImage: '/images/main.png',
  },
  {
    slug: '/vs-calendar-ai',
    title: 'Selara vs Calendar AI — Full-week intelligence compared',
    description:
      'Compare Selara to calendar-only AI tools on cross-tool memory, approval before schedule changes, and calm delegation beyond slot-finding.',
    ogImage: imageSlots.deepCalendar.placeholder,
  },
  {
    slug: '/vs-executive-assistant',
    title: 'Selara vs Executive Assistant — Always-on backup with guardrails',
    description:
      'Compare Selara to a traditional executive assistant on 24/7 availability, persistent memory, visible plans, and approval-first control before external action.',
    ogImage: '/images/main.png',
  },
  {
    slug: '/about',
    title: 'About Selara — Premium AI concierge by SelarAI',
    description:
      'Meet SelarAI and founder Zachary Cohen. Learn why Selara exists — calm, control, premium craft, and privacy-forward AI for professionals who need approval-first help with calendar, mail, and follow-through.',
    ogImage: '/images/selara-logo.png',
  },
  {
    slug: '/trust',
    title: 'Security & Trust — How Selara protects your data',
    description:
      'Learn how Selara handles your data, approvals, encryption practices, deletion rights, and subprocessors — built for high-stakes professionals.',
    ogImage: imageSlots.deepPrivacy.placeholder,
    priority: 0.7,
  },
  {
    slug: '/how-selara-thinks',
    title: 'How Selara Thinks — Glossary of approval-first AI',
    description:
      'Definitions for approval-first AI, calendar intelligence, memory, plan review, and integration guardrails — Selara’s philosophy in plain language.',
    ogImage: imageSlots.approvalFlow.placeholder,
    priority: 0.7,
  },
  {
    slug: '/philosophy',
    title: 'Philosophy — The luxury of calm software',
    description:
      'Why Selara chooses calm over speed, approval as respect, and memory that compounds — the philosophy behind approval-first AI for high-stakes professionals.',
    ogImage: imageSlots.approvalFlow.placeholder,
    priority: 0.7,
  },
  {
    slug: '/stories',
    title: 'Success Stories — How professionals use Selara',
    description:
      'Anonymized beta success stories: how lawyers, physicians, and executives use approval-first AI for calendar intelligence and follow-through.',
    ogImage: '/images/main.png',
    priority: 0.6,
  },
  {
    slug: '/invite',
    title: 'Invite a Colleague — Extended beta access for both',
    description:
      'Share Selara with someone you trust. Invite a colleague through Settings → Invite — both of you receive extended beta access when they join.',
    ogImage: '/images/main.png',
    priority: 0.7,
  },
  {
    slug: '/guide',
    title: 'The Approval-First AI Guide — Free for professionals',
    description:
      'Free guide: how high-performers delegate with approval-first AI — protect focus, delegate without anxiety, and keep control of calendar and mail.',
    ogImage: '/images/main.png',
    priority: 0.65,
  },
  {
    slug: '/insights',
    title: 'Selara Insights — Productivity, AI ethics, and calm software',
    description:
      'Essays on approval-first AI, calendar intelligence, professional memory, and calm software for high-stakes work. Thought leadership from Selara.',
    ogImage: '/images/main.png',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/help',
    title: 'Help Center — Selara support and guides',
    description:
      'Searchable help for Selara: getting started, voice, calendar, approvals, billing, and troubleshooting — with paths to email support.',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/privacy',
    title: 'Privacy Policy | Selara',
    description: 'Read the SelarAI Privacy Policy for Selara—the approval-first AI personal assistant for iOS.',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    slug: '/terms',
    title: 'Terms of Service | Selara',
    description: 'Read the SelarAI Terms of Service for Selara—the premium AI concierge for professionals.',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
];

/** Stable sitemap timestamp — update when SEO content materially changes. */
export const sitemapLastModified = new Date('2026-06-12T21:30:00.000Z');

export function getSeoPage(slug: string): SeoPage {
  const normalized = slug === '/' ? '' : slug;
  const page = seoPages.find((entry) => entry.slug === normalized);
  if (!page) {
    throw new Error(`Missing seoPages entry for slug: ${slug}`);
  }
  return page;
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === '' ? '' : path}`;
}

export function createMetadata(
  title: string,
  description: string,
  path: string,
  options?: { ogImage?: string; ogImageAlt?: string },
): Metadata {
  const canonicalPath = path === '' ? '/' : path;
  const ogImage = options?.ogImage ?? '/images/main.png';
  const ogImageAlt = options?.ogImageAlt ?? 'Selara assistant product preview';

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath === '/' ? '' : canonicalPath),
      siteName: 'Selara',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
        { url: absoluteUrl('/images/selara-logo.png'), width: 500, height: 500, alt: 'Selara logo' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function getPageMetadata(slug: string): Metadata {
  const page = getSeoPage(slug);
  const path = page.slug === '' ? '/' : page.slug;
  return createMetadata(page.title, page.description, path, {
    ogImage: page.ogImage,
    ogImageAlt: `${page.title} — Selara`,
  });
}

export function buildFaqStructuredData(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
