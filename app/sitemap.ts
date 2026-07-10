import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';
import { helpArticles } from '@/lib/help-articles';
import { insightPosts } from '@/lib/insights-posts';
import { seoPages, siteUrl, sitemapLastModified } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = seoPages.map((page) => ({
    url: `${siteUrl}${page.slug}`,
    lastModified: sitemapLastModified,
    changeFrequency: page.changeFrequency ?? (page.slug === '' ? 'weekly' : 'monthly'),
    priority: page.priority ?? (page.slug === '' ? 1 : 0.8),
  }));

  const storyPages = caseStudies.map((study) => ({
    url: `${siteUrl}/stories/${study.slug}`,
    lastModified: sitemapLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const helpPages = helpArticles.map((article) => ({
    url: `${siteUrl}/help/${article.slug}`,
    lastModified: sitemapLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.55,
  }));

  const insightPages = insightPosts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...storyPages, ...helpPages, ...insightPages];
}
