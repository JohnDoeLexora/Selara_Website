import { getPageMetadata, leadMagnet } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';
import { GuidePageClient } from '@/components/guide-page-client';

export const metadata = getPageMetadata('/guide');

export default function GuidePage() {
  return (
    <>
      <PageHero
        className="pageHeroGuide"
        eyebrow={leadMagnet.eyebrow}
        title={leadMagnet.title}
        intro={leadMagnet.subtitle}
      />

      <Section eyebrow="Unlock" title={leadMagnet.formTitle} intro={leadMagnet.intro}>
        <GuidePageClient />
      </Section>

      <CTASection />
    </>
  );
}
