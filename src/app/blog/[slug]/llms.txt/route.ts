import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

// Per-post clean-markdown endpoint at /blog/<slug>/llms.txt — the gold-standard
// representation for AI agents (no nav, ads, or markup). One is prerendered for
// every post via generateStaticParams, so existing and future posts are covered.
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const base = SITE_CONFIG.url;
  const out = [
    `# ${post.title}`,
    '',
    `URL: ${base}/blog/${post.slug}`,
    `Published: ${post.publishDate}`,
    `Tags: ${post.tags.join(', ')}`,
    '',
    `> ${post.metaDescription}`,
    '',
    post.content,
    '',
  ].join('\n');

  return new Response(out, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
