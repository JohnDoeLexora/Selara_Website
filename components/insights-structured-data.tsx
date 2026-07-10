import { absoluteUrl, founderBio } from '@/lib/site-data';
import type { InsightPost } from '@/lib/insights-posts';

export function InsightStructuredData({ post }: { post: InsightPost }) {
  const url = absoluteUrl(`/insights/${post.slug}`);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: founderBio.name,
      jobTitle: founderBio.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Selara',
      url: absoluteUrl(''),
    },
    mainEntityOfPage: url,
    url,
    articleSection: post.category,
    keywords: post.category,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
