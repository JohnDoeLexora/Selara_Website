import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, EyeOff, AlertCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Selara is the Safer AI Assistant',
  description:
    'Safety and privacy at the core — no training on your data, no selling information, no hallucinations.',
};

const SECTIONS = [
  {
    icon: Lock,
    title: 'Your data stays yours',
    body: "Selara never trains on your personal data. Your conversations, memories, and connected app content exist to serve you — not to improve a generic model. Your data is yours, period. You can export or delete it at any time.",
  },
  {
    icon: EyeOff,
    title: 'No selling information',
    body: "We don't sell your data. We don't share it with advertisers. We don't use it to profile you for third parties. Our business model is simple: you pay for a great product, we build one. That's it.",
  },
  {
    icon: AlertCircle,
    title: 'Transparent about limitations',
    body: "When Selara doesn't know something, it says so. We've built explicit guardrails against confident-sounding hallucination. Selara will tell you it's unsure rather than making something up and presenting it as fact.",
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    body: "End-to-end encryption for sensitive data. Secure credential storage for connected apps. SOC 2 compliance in progress. Regular security audits. We treat your information with the same care you'd expect from your bank.",
  },
];

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#6B4FBB]/15 flex items-center justify-center mx-auto mb-8">
            <Shield size={28} className="text-[#8B6FDB]" />
          </div>
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Safety</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-6 tracking-tight">
            Safety You Can Actually Trust
          </h1>
          <p className="text-[#9999AA] text-lg leading-relaxed">
            Not safety theater. Not a marketing promise. Actual, deliberate decisions about how we build,
            store, and use your information.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {SECTIONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-6 p-8 rounded-2xl bg-[#111118] border border-[#2A2A38]"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6B4FBB]/15 flex items-center justify-center">
                <Icon size={22} className="text-[#8B6FDB]" />
              </div>
              <div>
                <h2 className="text-[#F8F8FF] font-semibold text-lg mb-3">{title}</h2>
                <p className="text-[#9999AA] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OpenClaw section */}
      <section className="py-16 px-4 sm:px-6 border-t border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-[#111118] border border-[#2A2A38]">
            <p className="text-[#8B6FDB] text-xs font-semibold uppercase tracking-widest mb-4">
              A note on OpenClaw
            </p>
            <p className="text-[#9999AA] text-sm leading-loose">
              You may have heard of a certain other AI company that promised safety was its
              &quot;core mission&quot; — right up until it launched products that make things up with great
              confidence, scraped the entire internet without asking, and is now in a race to
              release things faster than they can be evaluated. We won&apos;t name names. (It rhymes with
              OpenClaw.)
            </p>
            <p className="text-[#9999AA] text-sm leading-loose mt-4">
              At Selara, we believe the safest AI is one that&apos;s honest about what it is: a powerful
              tool, built with care, by a team that actually uses it every day. We don&apos;t have a
              &quot;core mission&quot; poster on the wall. We have a product that we&apos;d trust with our
              own lives — and we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 pb-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Still have questions?</h2>
          <p className="text-[#9999AA] text-sm mb-8">
            Read our full Privacy Policy or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="px-6 py-3 rounded-xl border border-[#2A2A38] hover:border-[#6B4FBB] text-[#9999AA] hover:text-[#F8F8FF] text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] text-sm font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
