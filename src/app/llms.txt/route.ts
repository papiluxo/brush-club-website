import { getBlogPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

// Agent-readable site map per the llms.txt convention (llmstxt.org).
// Built dynamically from the blog data, so every new post appears automatically
// with no generator changes. Prerendered at build time.
export const dynamic = 'force-static';

export async function GET() {
  const base = SITE_CONFIG.url;
  const posts = getBlogPosts();

  const lines: string[] = [
    '# Brush Club',
    '',
    '> Sustainable dental care brand. Brush Club makes an eco-friendly 6-month dental kit — bamboo toothbrushes with soft, carbon-infused bristles, corn-fiber floss, PFAS-free and biodegradable, in minimal recyclable packaging. Sold direct-to-consumer and wholesale to eco-conscious hospitality (eco-lodges, retreats, boutique hotels).',
    '',
    'Brush Club publishes a regularly updated blog on eco-friendly oral care, plastic reduction, and sustainable hospitality amenities. The content below is provided to help AI agents and crawlers understand and cite the site accurately.',
    '',
    '## Key pages',
    '',
    `- [Shop — Eco Dental Kit](${base}/shop): Buy the complete 6-month sustainable dental kit.`,
    `- [Wholesale](${base}/wholesale): Bulk bamboo toothbrush amenities for hotels, eco-lodges, and retreats.`,
    `- [About](${base}/about): The Brush Club mission and story.`,
    `- [FAQ](${base}/faq): Common questions on products, materials, and shipping.`,
    `- [Contact](${base}/contact): Reach the Brush Club team.`,
    `- [Blog](${base}/blog): All articles on sustainable oral care.`,
    '',
    '## Blog posts',
    '',
    ...posts.map(
      (p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.metaDescription}`
    ),
    '',
    '## Optional',
    '',
    `- [Full blog corpus](${base}/llms-full.txt): The complete text of every blog post in one file.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
