import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InsightStructuredData } from '@/components/insights-structured-data';
import {
  getInsightCategoryLabel,
  getInsightPost,
  insightPosts,
} from '@/lib/insights-posts';
import { createMetadata, founderBio, getSeoPage } from '@/lib/site-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) return {};
  const base = getSeoPage('/insights');
  return createMetadata(post.title, post.summary, `/insights/${slug}`, {
    ogImage: base.ogImage,
    ogImageAlt: `${post.title} — Selara Insights`,
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) notFound();

  return (
    <>
      <InsightStructuredData post={post} />
      <div className="pageHero pageHeroCompact">
        <div className="shell pageHeroInner">
          <Link href="/insights" className="secondaryButton pageHeroBackLink">
            ← All insights
          </Link>
        </div>
      </div>
      <article className="section">
        <div className="shell insightArticleBody">
          <p className="eyebrow">{getInsightCategoryLabel(post.category)}</p>
          <h1>{post.title}</h1>
          <p className="insightArticleMeta">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            · {post.readingTimeMinutes} min read
          </p>
          <p className="insightArticleSummary">{post.summary}</p>
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {post.bullets?.length ? (
            <ul className="insightArticleBullets">
              {post.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          <div className="relatedLinksRow helpRelatedLinks">
            {post.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="secondaryButton">
                {link.label}
              </Link>
            ))}
          </div>
          <footer className="insightAuthorCard contentCard contentCardPremium">
            <p className="eyebrow">Author</p>
            <h2>{founderBio.name}</h2>
            <p className="insightAuthorRole">{founderBio.role}</p>
            <p>{founderBio.summary}</p>
          </footer>
        </div>
      </article>
    </>
  );
}
