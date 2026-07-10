import { insightPosts } from '@/lib/insights-posts';
import { absoluteUrl } from '@/lib/site-data';

export function GET() {
  const items = insightPosts
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(
      (post) => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${absoluteUrl(`/insights/${post.slug}`)}</link>
    <guid isPermaLink="true">${absoluteUrl(`/insights/${post.slug}`)}</guid>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <description><![CDATA[${post.summary}]]></description>
  </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Selara Insights</title>
    <link>${absoluteUrl('/insights')}</link>
    <description>Calm thinking on AI, calendar, and professional judgment from Selara.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
