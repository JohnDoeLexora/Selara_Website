import { getComparisonPage, getPageMetadata } from '@/lib/site-data';
import {
  CTASection,
  ComparisonContrastPanels,
  GenericComparisonTable,
  PageHero,
  Section,
} from '@/components/sections';

const page = getComparisonPage('/vs-executive-assistant');

export const metadata = getPageMetadata('/vs-executive-assistant');

export default function VsExecutiveAssistantPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.heroTitle} intro={page.heroIntro} />

      <Section eyebrow={page.sectionEyebrow} title={page.sectionTitle} intro={page.sectionIntro}>
        <GenericComparisonTable
          competitorLabel={page.competitorLabel}
          rows={page.rows}
          ariaLabel={page.tableAriaLabel}
        />
      </Section>

      <Section eyebrow={page.contrastEyebrow} title={page.contrastTitle} intro={page.contrastIntro}>
        <ComparisonContrastPanels competitor={page.contrast.competitor} selara={page.contrast.selara} />
      </Section>

      <CTASection />
    </>
  );
}
