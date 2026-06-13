export type TimelineMoment = {
  time: string;
  title: string;
  narrative: string;
  selaraAction?: string;
};

export type CaseStudy = {
  slug: string;
  persona: string;
  industry: string;
  problem: string;
  solution: string;
  results: string[];
  quote: string;
  format?: 'case-study' | 'day-in-the-life';
  timeline?: TimelineMoment[];
  timeSaved?: string;
  anonymized: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'litigation-partner-board-prep',
    persona: 'Litigation partner',
    industry: 'Legal',
    format: 'day-in-the-life',
    problem:
      'Board prep week meant constant calendar shuffles — associate holds moved without visibility, client callbacks slipped, and every reschedule risked a surprise for opposing counsel timelines.',
    solution:
      'Selara drafted a full reschedule plan before touching the calendar: which holds moved, who got notified, and which client threads needed follow-up. The partner approved or edited once instead of chasing five separate changes.',
    results: [
      'Board prep week completed without a client-facing calendar surprise',
      'Associate coordination handled in one approval instead of a chain of texts',
      'Follow-up drafts ready for review before anything sent under the partner’s name',
    ],
    quote:
      'I stopped being the person who finds out about a moved depo from someone else’s assistant. I see the whole plan first.',
    timeline: [
      {
        time: '6:45 AM',
        title: 'Monday inbox scan before the office',
        narrative:
          'Overnight threads included a client asking about deposition timing and an associate proposing three hold moves for board prep. Normally this becomes a mental list before coffee.',
        selaraAction:
          'Selara grouped the threads by urgency, flagged the depo conflict against Thursday’s prep block, and queued a single morning summary — no calendar or mail changes yet.',
      },
      {
        time: '8:10 AM',
        title: 'Associate holds need to shift',
        narrative:
          'Board prep consumed Tuesday afternoon. Three internal holds and one client check-in needed to move, each with different stakeholders and notice expectations.',
        selaraAction:
          'Selara drafted a reschedule plan: new slots, who would be notified, and which messages needed partner tone versus associate send. The partner reviewed once and approved with two edits.',
      },
      {
        time: '11:30 AM',
        title: 'Client callback between hearings',
        narrative:
          'A ten-minute window between matters. The client expected confirmation on deposition timing, not a vague “we’re working on it.”',
        selaraAction:
          'Selara prepared a reply in the partner’s voice with the approved schedule, flagged one sentence for tone, and waited. Nothing sent until the partner tapped approve from the car.',
      },
      {
        time: '4:50 PM',
        title: 'End-of-day calendar integrity check',
        narrative:
          'Prep week calendars often drift by Friday. The partner wanted to know nothing moved externally without being seen first.',
        selaraAction:
          'Selara showed a day recap: every approved change, every pending draft, and one associate hold still waiting on counter-proposal. No surprises left for Tuesday morning.',
      },
    ],
    timeSaved: 'Roughly 4 hours reclaimed during a single high-stakes prep week',
    anonymized: true,
  },
  {
    slug: 'clinical-leader-clinic-blocks',
    persona: 'Clinical department leader',
    industry: 'Medicine',
    format: 'day-in-the-life',
    problem:
      'Clinic days were protected on paper but not in practice — emergencies, admin requests, and double-booked follow-ups eroded focus blocks without a clear record of what changed or why.',
    solution:
      'Selara treated focus blocks as constraints, not suggestions. When something tried to intrude, the leader saw the tradeoff — what would move, who was affected, and which patient follow-ups needed attention — before approving.',
    results: [
      'Protected clinic blocks held through a month of reactive scheduling pressure',
      'Patient follow-up drafts queued for approval instead of living in mental sticky notes',
      'Team schedule changes documented in the plan, not scattered across messages',
    ],
    quote:
      'It feels like having someone who understands that my calendar is patient care — not just boxes to optimize.',
    timeline: [
      {
        time: '7:00 AM',
        title: 'Clinic day begins with a protected block',
        narrative:
          'Morning focus time was reserved for complex follow-ups and resident teaching. Admin and the OR desk both had standing permission to request changes — which meant it was never truly protected.',
        selaraAction:
          'Selara marked the block as non-negotiable unless the leader explicitly approved a tradeoff, and surfaced overnight requests ranked by patient impact.',
      },
      {
        time: '9:15 AM',
        title: 'Emergency add-on request',
        narrative:
          'A same-day consult threatened to split the focus block. The leader needed to see patient impact, not just an open slot on a grid.',
        selaraAction:
          'Selara proposed moving a lower-acuity admin check-in to late afternoon, showed who would be notified, and listed two patient callbacks that still needed same-day attention. The leader approved the swap with one adjustment.',
      },
      {
        time: '12:40 PM',
        title: 'Double-booked follow-up discovered at lunch',
        narrative:
          'A scheduler error stacked two post-op follow-ups in the same window. Fixing it usually meant phone tag across three people.',
        selaraAction:
          'Selara drafted patient-safe reschedule options, noted which slot respected travel time, and prepared clinic staff notification text for review — no messages sent until approved.',
      },
      {
        time: '5:30 PM',
        title: 'Closing the day without loose ends',
        narrative:
          'Patient follow-ups often lived as mental notes after back-to-back clinic hours. The leader wanted documentation, not memory.',
        selaraAction:
          'Selara queued three follow-up drafts tied to the day’s approved changes, with a short recap of what moved and why. The leader approved two drafts for morning send and edited the third.',
      },
    ],
    timeSaved: 'About 90 minutes back on typical clinic days',
    anonymized: true,
  },
  {
    slug: 'executive-board-week-prep',
    persona: 'Chief operating officer',
    industry: 'Technology',
    format: 'day-in-the-life',
    problem:
      'Board week compressed investor prep, leadership offsites, and customer escalations into one calendar. Assistants were offline after hours, and ad-hoc reschedules rippled to the exec team without a single source of truth.',
    solution:
      'Selara held board-week constraints as hard boundaries, drafted stakeholder communications before calendar moves, and gave the COO one approval surface for cross-functional changes — including late-night voice requests turned into reviewable plans.',
    results: [
      'Board week ran without an external calendar surprise to the leadership team or board observers',
      'After-hours reschedule requests handled as plans, not midnight text chains',
      'Investor and customer follow-ups drafted for approval instead of living in fragmented notes',
    ],
    quote:
      'Board week used to mean guessing what moved while I was in session. Now I see the whole tradeoff before anyone else’s calendar changes.',
    timeline: [
      {
        time: '6:30 AM',
        title: 'Tuesday — board prep morning',
        narrative:
          'An investor diligence call overlapped with the final deck review block. The EA was en route to the office; the COO needed a decision before the first meeting.',
        selaraAction:
          'Selara proposed shifting the diligence call by forty minutes, showed impact on three attendees in other time zones, and drafted a brief reschedule note for the COO’s voice and tone.',
      },
      {
        time: '1:15 PM',
        title: 'Customer escalation during lunch',
        narrative:
          'A key account issue needed executive attention the same afternoon board materials were due. Sacrificing prep time had downstream cost for the whole leadership team.',
        selaraAction:
          'Selara surfaced a tradeoff: shorten an internal sync, protect the deck block, and queue a customer call-back draft. The COO approved the plan and delegated the customer note with one edit.',
      },
      {
        time: '9:40 PM',
        title: 'Wednesday night — schedule shift from the car',
        narrative:
          'Thursday’s board dinner ran long in rehearsal. The COO needed Thursday morning reshuffled before the team woke up to stale invites.',
        selaraAction:
          'Voice input became a written plan: new morning sequence, which meetings moved to virtual, and draft texts for chief of staff and board coordinator. Nothing changed until the COO reviewed on screen at home.',
      },
      {
        time: '7:45 AM',
        title: 'Thursday — board day integrity check',
        narrative:
          'The highest-risk moment was discovering a conflict in the green room, not in the plan. The COO wanted confirmation that every external move had been intentional.',
        selaraAction:
          'Selara delivered a board-day brief: approved changes since Tuesday, pending drafts, and one optional buffer insertion before the closed session. The COO walked in knowing the calendar matched the plan.',
      },
    ],
    timeSaved: 'Roughly 6 hours reclaimed across a four-day board week',
    anonymized: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getDayInLifeStudies() {
  return caseStudies.filter((study) => study.format === 'day-in-the-life');
}

export const caseStudiesIntro = {
  eyebrow: 'Success stories',
  title: 'How professionals use Selara when the stakes are real.',
  intro:
    'Anonymized early beta examples — day-in-the-life narratives and problem → solution → results stories. More as users share them.',
};

export const caseStudyCollectionProcess = {
  title: 'Share your story',
  intro:
    'Using Selara in a high-stakes role? We would love to hear how approval-first AI changed your week — with your permission before we publish anything.',
  questions: [
    'What was your week like before Selara — where did calendar or inbox work leak into your head?',
    'Describe a specific moment Selara showed you a plan before acting. What would have gone wrong without that step?',
    'What results can you point to — time saved, fewer surprises, calmer delegation?',
    'May we quote you anonymously or with attribution? Any industries or details to omit?',
    'Optional: a photo or logo we may use with permission (see our press guidelines).',
  ],
  mailtoSubject: 'Case study interest',
};
