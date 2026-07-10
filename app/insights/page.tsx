import Link from 'next/link';
import { CTASection, PageHero, Section } from '@/components/sections';
import { InsightsCategoryFilter } from '@/components/insights-category-filter';
import { insightsIntro } from '@/lib/insights-posts';
import { getPageMetadata } from '@/lib/site-data';

export const metadata = getPageMetadata('/insights');

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow={insightsIntro.eyebrow} title={insightsIntro.title} intro={insightsIntro.intro} />

      <Section
        eyebrow="Articles"
        title="Latest insights"
        intro="SEO-friendly essays on professional productivity, calendar intelligence, and approval-first AI."
      >
        <InsightsCategoryFilter />
        <p className="insightRssLink">
          <Link href="/insights/rss.xml" className="secondaryButton">
            RSS feed
          </Link>
        </p>
      </Section>

      <CTASection />
    </>
  );
}
