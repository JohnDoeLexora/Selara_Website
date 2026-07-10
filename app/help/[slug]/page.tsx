import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HelpFeedback } from '@/components/help-feedback';
import { getHelpArticle, helpArticles } from '@/lib/help-articles';
import { createMetadata, supportEmail } from '@/lib/site-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) return {};
  return createMetadata(`${article.title} — Selara Help`, article.summary, `/help/${slug}`);
}

export default async function HelpArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();

  return (
    <>
      <div className="pageHero pageHeroCompact">
        <div className="shell pageHeroInner">
          <Link href="/help" className="secondaryButton pageHeroBackLink">
            ← Help center
          </Link>
        </div>
      </div>
      <article className="section">
        <div className="shell helpArticleBody">
          <p className="eyebrow">Help</p>
          <h1>{article.title}</h1>
          <p className="helpArticleSummary">{article.summary}</p>
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          {article.relatedLinks?.length ? (
            <div className="relatedLinksRow helpRelatedLinks">
              {article.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="secondaryButton">
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}

          <HelpFeedback slug={article.slug} />

          <footer className="helpArticleFooter">
            <p>
              Still stuck? Email{' '}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a> or{' '}
              <Link href="/download">download the app</Link>.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
}
