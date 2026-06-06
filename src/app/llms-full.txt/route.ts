import { getBlogPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

// Full blog corpus for deep crawling — every post's complete text in one fetch.
// Built dynamically from the blog data; new posts are included automatically.
export const dynamic = 'force-static';

export async function GET() {
  const base = SITE_CONFIG.url;
  const posts = getBlogPosts();

  const parts: string[] = [
    '# Brush Club — Full Blog Corpus',
    '',
    `> The complete text of all Brush Club blog articles on sustainable oral care, eco-friendly dental products, and plastic reduction. Source: ${base}/blog`,
    '',
  ];

  for (const p of posts) {
    parts.push(
      '---',
      '',
      `# ${p.title}`,
      '',
      `URL: ${base}/blog/${p.slug}`,
      `Published: ${p.publishDate}`,
      `Tags: ${p.tags.join(', ')}`,
      '',
      `> ${p.metaDescription}`,
      '',
      p.content,
      ''
    );
  }

  return new Response(parts.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
