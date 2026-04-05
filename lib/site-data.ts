import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://selara.app';
export const betaUrl = process.env.NEXT_PUBLIC_BETA_URL || '/download';
export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@selaraillc.com';
export const socialLinks = {
  x: process.env.NEXT_PUBLIC_X_URL || 'https://x.com/selaraapp',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/selaraapp',
};

export const navigation = [
  { href: '/features', label: 'Features' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/vs-openclaw', label: 'Vs OpenClaw' },
  { href: '/download', label: 'Download Beta' },
];

export const proofPoints = [
  'Approval-first actions',
  'Voice, documents, and automations',
  'Calendar-aware by design',
  '800+ integrations and counting',
];

export const heroSignals = [
  'Open beta',
  'iOS-first',
  'Premium assistant',
  'Trustworthy automation',
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
    description: 'Intelligent AI agents across all contexts. 800+ integrations, voice interaction, persistent memory, and large usage limits.',
    monthlyPrice: '$25',
    yearlyPrice: '$250',
    monthlyEquivalent: '$20/mo effective when billed yearly',
    cta: 'Choose Select',
    href: process.env.NEXT_PUBLIC_STRIPE_SELECT_URL || '/download',
    features: ['Voice interaction', 'Persistent memory', 'Large usage limits', '800+ integrations', 'AI agents across contexts'],
  },
  {
    name: 'Premium',
    description: 'All models, all integrations. Intelligent voice synthesis & transcription, expanded memory & higher rate caps, holistic life management features, and SpouseConnect — shared assistant with your partner.',
    monthlyPrice: '$45',
    yearlyPrice: '$450',
    monthlyEquivalent: '$37.50/mo effective when billed yearly',
    cta: 'Choose Premium',
    href: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || '/download',
    featured: true,
    features: ['All models', 'All integrations', 'Voice synthesis & transcription', 'Expanded memory', 'Higher rate caps'],
  },
  {
    name: 'Pinnacle',
    description: "Force Multiplier — link to a team member's account. Premium voice, no rate or memory limits, most powerful models only, early access to new features, and FamilyConnect — your entire household.",
    monthlyPrice: '$110',
    yearlyPrice: '$1,100',
    monthlyEquivalent: '$91.67/mo effective when billed yearly',
    cta: 'Choose Pinnacle',
    href: process.env.NEXT_PUBLIC_STRIPE_PINNACLE_URL || '/download',
    features: ['Premium voice', 'No rate limits', 'No memory limits', 'Most powerful models only', 'Early access to new features'],
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
];

export const seoPages = [
  { slug: '', title: 'Selara | Your Personal Assistant', description: 'Selara is the premium AI personal assistant for professionals who want their time back. Approval-first, calendar-aware, voice-native, and designed to feel luxurious.' },
  { slug: '/features', title: 'Selara Features', description: 'Explore Selara features for calendar planning, voice, memory, documents, and connected automations.' },
  { slug: '/pricing', title: 'Selara Pricing', description: 'Selara Select, Premium, and Pinnacle—simple plans for a premium AI personal assistant.' },
  { slug: '/download', title: 'Download Selara Beta', description: 'Download Selara beta and start using your premium AI personal assistant.' },
  { slug: '/calendar-assistant', title: 'AI Calendar Assistant', description: 'Selara is an AI calendar assistant for professionals who want to reclaim time and schedule with more intention.' },
  { slug: '/email-assistant', title: 'AI Email Assistant', description: 'Use Selara as an AI email assistant for follow-ups, triage, and drafted communication with control.' },
  { slug: '/voice-assistant', title: 'Voice AI Personal Assistant', description: 'Selara is a voice-first AI personal assistant built for natural delegation.' },
  { slug: '/ai-automations', title: 'AI Automations', description: 'Selara delivers connected AI automations with better context and better control.' },
  { slug: '/privacy-first-ai-assistant', title: 'Privacy-First AI Assistant', description: 'Selara is a privacy-first AI assistant built around approval-first behavior and transparent control.' },
  { slug: '/integrations', title: 'Selara Integrations', description: 'See Selara integrations and the 800+ connected tools that extend your assistant.' },
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
