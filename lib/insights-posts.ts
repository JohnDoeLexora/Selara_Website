export type InsightCategoryId = 'productivity' | 'ai-ethics' | 'calendar' | 'memory';

export type InsightCategory = {
  id: InsightCategoryId;
  label: string;
};

export type InsightPost = {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategoryId;
  publishedAt: string;
  readingTimeMinutes: number;
  body: string[];
  bullets?: string[];
  relatedLinks: { href: string; label: string }[];
};

export const insightCategories: InsightCategory[] = [
  { id: 'productivity', label: 'Productivity' },
  { id: 'ai-ethics', label: 'AI ethics' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'memory', label: 'Memory' },
];

export const insightsIntro = {
  eyebrow: 'Insights',
  title: 'Calm thinking on AI, calendar, and professional judgment.',
  intro:
    'Short essays on approval-first AI, calendar intelligence, and software that respects high-stakes work. Written for professionals who need control—not another dashboard.',
};

export const insightPosts: InsightPost[] = [
  {
    slug: 'why-approval-first-ai-matters',
    title: 'Why Approval-First AI Matters for High-Stakes Professionals',
    summary:
      'When your calendar and inbox touch clients, patients, or boards, silent automation is a liability. Approval-first AI turns speed into something you can trust.',
    category: 'ai-ethics',
    publishedAt: '2026-06-01',
    readingTimeMinutes: 6,
    body: [
      'Most AI assistants optimize for the demo moment: you ask, they act, the room applauds. Real professional weeks do not work that way. A moved deposition, a patient message sent under the wrong name, or a board email that goes out before you have read it—these are not edge cases. They are the reason high performers hesitate to delegate to software at all.',
      'Approval-first AI inverts the default. Instead of acting and hoping you notice, Selara drafts a plan: what will change, who will see it, which threads need follow-up. You skim, edit, or reject. Nothing external happens until you say so.',
      'That is not slower software—it is software that respects asymmetric risk. A litigation partner loses more from one bad send than they gain from ten perfect automations. A clinical leader cannot treat calendar shuffles as low-stakes optimization. Approval-first design acknowledges that judgment is the scarce resource, not keystrokes.',
      'The pattern also trains trust over time. When rejection is normal, you stop babysitting every output. You learn what the system gets right, where your standards differ, and how to delegate broader chains safely. That is how an executive assistant earns autonomy—through visible plans, not surprise execution.',
    ],
    bullets: [
      'Every meaningful action becomes a reviewable plan before it runs.',
      'Rejection is a feature—it teaches the system your standards without reputation risk.',
      'High-stakes work needs asymmetric safety: one mistake costs more than ten wins save.',
    ],
    relatedLinks: [
      { label: 'Security & Trust', href: '/trust' },
      { label: 'How Selara thinks', href: '/how-selara-thinks' },
      { label: 'Privacy-first AI', href: '/privacy-first-ai-assistant' },
    ],
  },
  {
    slug: 'calendar-intelligence-without-chaos',
    title: 'How Calendar Intelligence Saves Hours Without the Chaos',
    summary:
      'Calendar AI should defend focus and explain tradeoffs—not just find open slots. Here is what calendar intelligence means when your week has real stakes.',
    category: 'calendar',
    publishedAt: '2026-06-04',
    readingTimeMinutes: 5,
    body: [
      'Slot-finding is table stakes. Every calendar tool can move a meeting. What professionals actually need is calendar intelligence: understanding which hours are protected, what a reschedule costs in follow-up, and who must be notified before anything changes.',
      'Chaos arrives when tools optimize locally. An associate moves a hold to free a slot; the partner discovers the conflict from someone else’s assistant. A clinic block erodes one intrusion at a time until the afternoon is reactive scheduling instead of patient care.',
      'Selara treats the calendar as a system of constraints and consequences. When something tries to intrude on a focus block or a client-critical window, you see the full tradeoff—what moves, who is affected, which drafts need attention—before approving.',
      'That turns calendar work from firefighting into delegation. Routine reschedules draft themselves; judgment calls land on your screen once, not across five messages. Hours return not because the AI is faster at clicking, but because you stop being the integration layer between your own schedule and everyone else’s requests.',
    ],
    relatedLinks: [
      { label: 'Calendar assistant', href: '/calendar-assistant' },
      { label: 'Features overview', href: '/features' },
      { label: 'Download Selara', href: '/download' },
    ],
  },
  {
    slug: 'luxury-of-calm-software',
    title: 'The Luxury of Calm Software',
    summary:
      'Premium software is not more features—it is less noise. Why calm hierarchy, restraint, and visible control matter for professionals who already manage enough complexity.',
    category: 'productivity',
    publishedAt: '2026-06-06',
    readingTimeMinutes: 5,
    body: [
      'Luxury in software is often misunderstood as visual polish alone—gold accents, serif headlines, dark mode. Those matter, but they are signals of a deeper choice: does this product respect your attention, or does it demand more of it?',
      'Calm software reduces decisions per minute. It does not flash badges, nag you to check dashboards, or bury the one action you care about under analytics chrome. It presents a plan, waits for judgment, and gets out of the way.',
      'For professionals whose weeks are already cognitively expensive, calm is not aesthetic preference—it is capacity preservation. Every unnecessary animation, ambiguous state, or “smart” action without preview is a micro-tax on focus you cannot afford.',
      'Selara is built around that principle: voice for capture, screen for approval, memory for continuity, and motion restrained enough that the product feels finished rather than performative. If software adds noise, it is not saving you time—no matter how capable the model underneath.',
    ],
    relatedLinks: [
      { label: 'About Selara', href: '/about' },
      { label: 'Features', href: '/features' },
      { label: 'The Approval-First AI Guide', href: '/guide' },
    ],
  },
  {
    slug: 'building-memory-that-works',
    title: 'Building Memory That Actually Works',
    summary:
      'Good AI memory is explicit preferences and people—not mystery context. How to think about memory you would be proud to show someone reviewing your tools.',
    category: 'memory',
    publishedAt: '2026-06-08',
    readingTimeMinutes: 6,
    body: [
      'Memory is where many AI assistants feel magical—and where trust breaks fastest. Opaque context that “just knows” your world is impressive until it knows the wrong thing at the wrong time, and you cannot see why.',
      'Useful memory for professional work looks more like a well-maintained briefing book: who matters, how you like meetings structured, which topics need partner review, what you never want automated. It should be inspectable, editable, and deletable without a support ticket.',
      'Selara’s approach ties memory to visible plans. When context influences a draft or a reschedule, you can see the shape of that influence in what you are asked to approve—not in a hidden system prompt you never review.',
      'That aligns with privacy-first expectations too. Memory you cannot audit is memory you cannot defend to a client, a compliance officer, or your future self. Building memory that actually works means building memory you would be comfortable explaining on a slow Tuesday afternoon—not just marveling at on launch day.',
    ],
    relatedLinks: [
      { label: 'Privacy-first AI assistant', href: '/privacy-first-ai-assistant' },
      { label: 'Security & Trust', href: '/trust' },
      { label: 'How Selara thinks', href: '/how-selara-thinks' },
    ],
  },
  {
    slug: 'voice-as-input-approval-as-action',
    title: 'Voice as Input, Approval as Action',
    summary:
      'Talk between meetings; review on screen. Why the best voice interfaces for professionals separate capture from execution.',
    category: 'productivity',
    publishedAt: '2026-06-10',
    readingTimeMinutes: 4,
    body: [
      'Voice is the right interface for the hallway, the car, the walk between floors—moments when typing is impossible but intent is clear. It is the wrong interface for committing external action without a verification step.',
      'The failure mode of most voice assistants is conflating those two jobs. You speak; something sends, schedules, or buys. Accuracy errors become reputation errors before you have had a chance to correct them.',
      'Selara uses voice for capture and the approval screen for action. You say what you need; Selara structures it into a plan—calendar moves, drafts, follow-ups—and waits. Speech speeds input; judgment stays human and visible.',
      'That division is especially important for legal, clinical, and executive workflows where tone, names, and timing matter. Voice should never be autopilot. It should be the fastest path to a plan you are proud to approve.',
    ],
    relatedLinks: [
      { label: 'Voice assistant', href: '/voice-assistant' },
      { label: 'Calendar assistant', href: '/calendar-assistant' },
      { label: 'Open beta', href: '/download' },
    ],
  },
  {
    slug: 'delegation-without-anxiety',
    title: 'Delegation Without Anxiety',
    summary:
      'High performers want help but fear losing control. A practical framework for delegating to AI without the background dread of silent mistakes.',
    category: 'ai-ethics',
    publishedAt: '2026-06-12',
    readingTimeMinutes: 5,
    body: [
      'Delegation anxiety is rational. You have been burned by assistants—human and digital—who optimized for clearing the queue over protecting your standards. The answer is not to do everything yourself. It is to change what “delegated” means.',
      'Start with visibility: before anything touches your calendar or reputation, ask what will change and who will see it. If the system cannot answer clearly, it is not ready to run unsupervised—no matter how confident the UI sounds.',
      'Treat rejection as training, not failure. Each edit teaches preferences the system should carry forward. Each rejection without consequence builds the muscle that delegation can be safe again.',
      'Choose tools that carry context across the chain—calendar, mail, docs, team chat—so you are not re-explaining the same week in five apps. One coherent plan beats five partial updates every time.',
      'That is the through-line of approval-first AI: delegation without anxiety is not about trusting the model blindly. It is about trusting a process where your judgment stays in the loop until the loop earns more room.',
    ],
    relatedLinks: [
      { label: 'Free Approval-First AI Guide', href: '/guide' },
      { label: 'AI automations', href: '/ai-automations' },
      { label: 'Download Selara', href: '/download' },
    ],
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getInsightCategoryLabel(id: InsightCategoryId) {
  return insightCategories.find((category) => category.id === id)?.label ?? id;
}
