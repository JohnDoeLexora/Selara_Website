import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-data';

const productionSiteUrl = 'https://selara.app';

function isProductionSite() {
  return siteUrl === productionSiteUrl || process.env.VERCEL_ENV === 'production';
}

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
