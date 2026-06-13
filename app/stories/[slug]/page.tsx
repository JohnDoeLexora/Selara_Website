import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CaseStudyStructuredData } from '@/components/case-study-structured-data';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import { createMetadata, getSeoPage } from '@/lib/site-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const base = getSeoPage('/stories');
  return createMetadata(
    `${study.persona} — Selara success story`,
    `${study.problem.slice(0, 150)}… See how Selara helped with approval-first calendar and follow-through.`,
    `/stories/${slug}`,
    { ogImage: base.ogImage, ogImageAlt: `${study.persona} success story — Selara` },
  );
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyStructuredData study={study} />
      <div className="pageHero pageHeroCompact">
        <div className="shell pageHeroInner">
          <Link href="/stories" className="secondaryButton pageHeroBackLink">
            ← All stories
          </Link>
        </div>
      </div>
      <section className="section">
        <div className="shell">
          <CaseStudyTemplate study={study} />
        </div>
      </section>
    </>
  );
}
