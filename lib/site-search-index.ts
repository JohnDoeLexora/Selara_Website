import { helpArticles } from '@/lib/help-articles';
import { insightPosts } from '@/lib/insights-posts';
import { seoPages } from '@/lib/site-data';

export type SiteSearchCategory = 'Help' | 'Insights' | 'Pages';

export type SiteSearchResult = {
  title: string;
  summary: string;
  href: string;
  category: SiteSearchCategory;
  keywords?: string[];
};

const PAGE_SLUGS = new Set([
  '',
  '/features',
  '/pricing',
  '/download',
  '/about',
  '/trust',
  '/how-selara-thinks',
  '/philosophy',
  '/future',
  '/integrations',
  '/calendar-assistant',
  '/email-assistant',
  '/voice-assistant',
  '/ai-automations',
  '/privacy-first-ai-assistant',
  '/vs-openclaw',
  '/vs-generic-ai',
  '/vs-calendar-ai',
  '/vs-executive-assistant',
  '/insights',
  '/help',
  '/stories',
  '/guide',
  '/invite',
  '/press',
]);

function helpResults(): SiteSearchResult[] {
  return helpArticles.map((article) => ({
    title: article.title,
    summary: article.summary,
    href: `/help/${article.slug}`,
    category: 'Help' as const,
    keywords: [article.category, ...article.body.join(' ').split(/\s+/).slice(0, 40)],
  }));
}

function insightResults(): SiteSearchResult[] {
  return insightPosts.map((post) => ({
    title: post.title,
    summary: post.summary,
    href: `/insights/${post.slug}`,
    category: 'Insights' as const,
    keywords: [post.category, ...(post.bullets ?? [])],
  }));
}

function pageResults(): SiteSearchResult[] {
  return seoPages
    .filter((page) => PAGE_SLUGS.has(page.slug))
    .map((page) => ({
      title: page.title.replace(/\s*\|.*$/, '').replace(/^Selara\s*—\s*/, 'Selara — '),
      summary: page.description,
      href: page.slug || '/',
      category: 'Pages' as const,
    }));
}

export const siteSearchIndex: SiteSearchResult[] = [
  ...pageResults(),
  ...helpResults(),
  ...insightResults(),
];

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function scoreResult(result: SiteSearchResult, query: string) {
  const haystack = normalize(
    [result.title, result.summary, result.category, ...(result.keywords ?? [])].join(' '),
  );
  const terms = query.split(/\s+/).filter(Boolean);
  if (terms.length === 0) return 0;

  let score = 0;
  for (const term of terms) {
    if (normalize(result.title).includes(term)) score += 4;
    if (normalize(result.summary).includes(term)) score += 2;
    if (haystack.includes(term)) score += 1;
  }
  return score;
}

export function searchSiteIndex(query: string, limit = 12): SiteSearchResult[] {
  const normalized = normalize(query);
  if (!normalized) return [];

  return siteSearchIndex
    .map((result) => ({ result, score: scoreResult(result, normalized) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ result }) => result);
}

export const siteSearchSuggestions = ['calendar', 'approval', 'billing', 'voice', 'pricing'];
