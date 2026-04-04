import type { MetadataRoute } from 'next';
import { seoPages, siteUrl } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return seoPages.map((page) => ({
    url: `${siteUrl}${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.slug === '' ? 'weekly' : 'monthly',
    priority: page.slug === '' ? 1 : 0.8,
  }));
}
