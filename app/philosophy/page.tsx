import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Philosophy — Why We Built Selara',
  description:
    "We built the assistant we always wanted. Here's why.",
};

const VALUES = [
  'AI should reduce cognitive load — not add to it.',
  'Privacy is not a feature. It&apos;s a right.',
  'The best assistant learns. It doesn&apos;t reset.',
  'Simplicity is harder to build than complexity — and worth it.',
  'The future of human potential is humans + AI, working together.',
];

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <article className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-6">Philosophy</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-12 tracking-tight leading-tight">
            We built the assistant we always wanted.
          </h1>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-4">The broken promise</h2>
            <div className="space-y-4 text-[#9999AA] text-base leading-relaxed">
              <p>
                For decades, the technology industry has promised us a personal assistant. Not just a
                calculator with a voice. An actual assistant — one that knows your life, learns your
                patterns, and handles the thousand small things that eat up your day.
              </p>
              <p>
                What we got instead was chatbots that forget everything the moment you close the window.
                Voice assistants that can set a timer and nothing else. Productivity apps that replace one
                kind of friction with another.
              </p>
              <p>
                The gap between the promise and the reality has been enormous. And the cost — in time,
                in mental energy, in the constant low-grade stress of managing your own life —
                has been real.
              </p>
            </div>
          </section>

          <div className="h-px bg-[#2A2A38] my-10" />

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-6">What we believe</h2>
            <div className="space-y-3">
              {[
                'AI should reduce cognitive load — not add to it.',
                "Privacy is not a feature. It's a right.",
                "The best assistant learns. It doesn't reset.",
                'Simplicity is harder to build than complexity — and worth it.',
                'The future of human potential is humans + AI, working together.',
              ].map((value, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#111118] border border-[#2A2A38]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6B4FBB]/20 flex items-center justify-center text-[#8B6FDB] text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-[#9999AA] text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-[#2A2A38] my-10" />

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-4">Who we are</h2>
            <div className="space-y-4 text-[#9999AA] text-base leading-relaxed">
              <p>
                We&apos;re a small, obsessed team. We use Selara every day — for our own schedules,
                our own inboxes, our own lives. When something doesn&apos;t work, we feel it. When we ship
                an improvement, we use it immediately.
              </p>
              <p>
                We&apos;re not building for press coverage or for the next funding round. We&apos;re
                building for the long run — the kind of product that becomes indispensable because
                it actually earns that place in your life, not because it manufactured a dependency.
              </p>
              <p>
                We believe you deserve an assistant that respects your intelligence, your time, and
                your privacy. That&apos;s what we&apos;re building.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
