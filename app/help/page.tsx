import Link from 'next/link';
import { HelpSearch } from '@/components/help-search';
import { CTASection, PageHero, Section } from '@/components/sections';
import { getArticlesByCategory, helpArticles, helpCategories, helpHubIntro } from '@/lib/help-articles';
import { getPageMetadata } from '@/lib/site-data';

export const metadata = getPageMetadata('/help');

export default function HelpPage() {
  return (
    <>
      <PageHero eyebrow={helpHubIntro.eyebrow} title={helpHubIntro.title} intro={helpHubIntro.intro} />

      <Section eyebrow="Search" title="Find an answer" intro="Filter by keyword — no account required.">
        <HelpSearch articles={helpArticles} />
      </Section>

      <Section className="sectionAlt" eyebrow="Categories" title="Browse by topic">
        <div className="helpCategoryGrid">
          {helpCategories.map((category) => {
            const articles = getArticlesByCategory(category.id);
            return (
              <article key={category.id} className="contentCard contentCardPremium">
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <ul className="helpCategoryLinks">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/help/${article.slug}`}>{article.title}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
