import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Selara',
  description: 'How SelarAI LLC collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-[#F8F8FF] mb-3 tracking-tight">Privacy Policy</h1>
        <p className="text-[#9999AA] text-sm mb-12">Effective date: {effectiveDate}</p>

        <div className="prose prose-invert max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">1. Introduction</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              SelarAI LLC (&quot;Selara,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Selara personal
              assistant application and the selara.app website (collectively, the &quot;Service&quot;). This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">2. Information We Collect</h2>
            <div className="space-y-3 text-[#9999AA] text-sm leading-relaxed">
              <p><strong className="text-[#F8F8FF]">Account information:</strong> Name, email address, and payment information when you create an account or subscribe.</p>
              <p><strong className="text-[#F8F8FF]">Usage data:</strong> Conversations with the AI assistant, feature usage, and interaction patterns used to provide the Service.</p>
              <p><strong className="text-[#F8F8FF]">Connected app data:</strong> Data from third-party apps you authorize Selara to access (e.g., email, calendar, contacts). This data is used only to perform actions you request.</p>
              <p><strong className="text-[#F8F8FF]">Device information:</strong> Device type, operating system, and app version for compatibility and support purposes.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-[#9999AA] text-sm leading-relaxed">
              <li>To provide, maintain, and improve the Service</li>
              <li>To personalize your experience and build persistent memory</li>
              <li>To process transactions and manage subscriptions</li>
              <li>To send service-related communications</li>
              <li>To respond to customer support requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">4. We Do Not Train on Your Data</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              Selara does not use your personal conversations, data, or connected app content to
              train AI models — ours or anyone else&apos;s. Your data exists solely to serve you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">5. Information Sharing</h2>
            <div className="space-y-3 text-[#9999AA] text-sm leading-relaxed">
              <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
              <p>We may share data with trusted service providers who assist in operating our Service (e.g., cloud infrastructure, payment processing), under strict confidentiality obligations.</p>
              <p>We may disclose information if required by law or to protect the rights, property, or safety of SelarAI LLC, our users, or others.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">6. Data Security</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              We implement industry-standard security measures including encryption in transit and at
              rest, access controls, and regular security reviews. No method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-[#9999AA] text-sm leading-relaxed">
              <li>Access and export your data at any time</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Revoke connected app permissions</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p className="text-[#9999AA] text-sm leading-relaxed mt-3">
              To exercise these rights, contact us at privacy@selara.app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">8. Data Retention</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide the
              Service. Upon account deletion, we will delete or anonymize your personal data within
              30 days, except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              The Service is not directed to children under 13. We do not knowingly collect personal
              information from children under 13. If we learn we have collected such information, we
              will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">10. Changes to This Policy</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by email or through the Service. Continued use of the Service after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">11. Contact Us</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-[#111118] border border-[#2A2A38] text-sm text-[#9999AA]">
              <p>SelarAI LLC</p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@selara.app" className="text-[#8B6FDB] hover:text-[#F8F8FF] transition-colors">
                  privacy@selara.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
