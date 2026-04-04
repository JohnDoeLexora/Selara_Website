import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Selara FAQ — Common Questions Answered',
  description:
    'Everything you need to know about Selara — how it works, privacy, plans, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Selara?',
    answer:
      'Selara is an AI-powered personal assistant that connects to 800+ apps and takes real action on your behalf. Unlike chatbots that just answer questions, Selara can send emails, book flights, manage your calendar, control your smart home, and much more — all from a single conversation.',
  },
  {
    question: 'How is Selara different from ChatGPT or Siri?',
    answer:
      "ChatGPT is excellent for conversation and reasoning, but it doesn't take action in the real world and doesn't remember you between sessions. Siri is action-oriented but limited in intelligence and integration depth. Selara is your executive assistant: it's highly intelligent, deeply integrated with your life, remembers everything, and actually executes tasks — not just suggests them.",
  },
  {
    question: 'What apps does Selara connect to?',
    answer:
      'Selara connects to 800+ apps and services including Gmail, Outlook, Google Calendar, Apple Calendar, iMessage, WhatsApp, Slack, Notion, Spotify, Apple Music, Amazon, Instacart, Uber, Lyft, smart home platforms (HomeKit, Google Home, Alexa), health apps, travel services, and many more. We add new integrations regularly.',
  },
  {
    question: 'Is my data private?',
    answer:
      "Yes. Selara never trains on your personal data. Your conversations, memories, and app content are used only to serve you, not to improve generic models. We use end-to-end encryption for sensitive data, never sell your information, and never share it with advertisers. You can export or delete your data at any time.",
  },
  {
    question: 'What is SpouseConnect?',
    answer:
      "SpouseConnect is a Premium feature that lets you share Selara with your partner. Both people can interact with a shared assistant that understands your household — schedules, preferences, tasks, and more — so coordination happens automatically. SpouseConnect is available on the Premium plan and above.",
  },
  {
    question: 'What is FamilyConnect?',
    answer:
      "FamilyConnect extends the shared assistant concept to your whole household. Multiple family members each have their own Selara voice and memory, but they also share a household context — family calendar, grocery lists, shared tasks, and more. FamilyConnect is exclusive to the Pinnacle plan.",
  },
  {
    question: 'When is Selara launching?',
    answer:
      "Selara is currently in an invite-only beta. We're onboarding users from the waitlist gradually to ensure everyone gets a great experience. Join the waitlist to secure your spot — beta members will receive priority access and early-adopter pricing.",
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel at any time with no cancellation fees. If you cancel, you retain access through the end of your current billing period. Monthly plans renew monthly. Annual plans renew annually.',
  },
  {
    question: "What's your refund policy?",
    answer:
      'We offer a 7-day money-back guarantee. If you try Selara within the first 7 days and it\'s not right for you, contact us at support@selara.app and we\'ll issue a full refund — no questions asked.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-5 tracking-tight">
            Common questions, answered
          </h1>
          <p className="text-[#9999AA] text-lg">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="/contact" className="text-[#8B6FDB] hover:text-[#F8F8FF] transition-colors">
              Contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
