import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Brush Club Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.imagePath || '/favicon.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishDate,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.imagePath || '/favicon.png'],
    },
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Split content into paragraphs and format
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      paragraph = paragraph.trim();
      
      // Handle markdown headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      // Check if the entire paragraph is bold text (likely a subtitle)
      const boldParagraphMatch = paragraph.match(/^\*\*(.+)\*\*$/);
      if (boldParagraphMatch) {
        return (
          <h3 key={index} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
            {boldParagraphMatch[1]}
          </h3>
        );
      }

      // Check if paragraph starts with bold text followed by content (section header)
      const boldStartMatch = paragraph.match(/^\*\*([^*]+)\*\*(.*)$/);
      if (boldStartMatch) {
        const [, boldText, remainingText] = boldStartMatch;
        const hasSignificantContent = remainingText.trim().length > 20;
        
        if (!hasSignificantContent) {
          // Treat as a subtitle if there's minimal content after the bold text
          return (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                {boldText}
              </h3>
              {remainingText.trim() && (
                <p className="text-slate-700 leading-relaxed mb-4">
                  {remainingText.trim()}
                </p>
              )}
            </div>
          );
        }
      }

      // Handle lists
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const listItems = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
        if (listItems.length > 0) {
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {item.replace(/^- /, '').trim()}
                </li>
              ))}
            </ul>
          );
        }
      }

      // Handle numbered lists
      if (paragraph.includes('\n1. ') || /^\d+\. /.test(paragraph)) {
        const listItems = paragraph.split('\n').filter(line => /^\d+\. /.test(line.trim()));
        if (listItems.length > 0) {
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-slate-700">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {item.replace(/^\d+\. /, '').trim()}
                </li>
              ))}
            </ol>
          );
        }
      }

      // Handle regular paragraphs with inline formatting
      let formattedParagraph = paragraph;
      
      // Handle bold text (inline, not at paragraph start)
      formattedParagraph = formattedParagraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
      
      // Handle italic text
      formattedParagraph = formattedParagraph.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      
      // Handle internal links
      formattedParagraph = formattedParagraph.replace(/\[([^\]]+)\]\(\/([^)]+)\)/g, 
        '<a href="/$2" class="text-emerald-600 hover:text-emerald-700 font-medium underline">$1</a>'
      );
      
      // Handle external links
      formattedParagraph = formattedParagraph.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, 
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-700 font-medium underline">$1</a>'
      );
      
      return (
        <p 
          key={index} 
          className="text-slate-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link href="/blog" className="text-slate-500 hover:text-slate-700">
              Blog
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-slate-600">
              <time dateTime={post.publishDate} className="text-sm">
                Published on {formatDate(post.publishDate)}
              </time>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-8">
            <Image
              src={post.imagePath || '/favicon.png'}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <div className="text-xl text-slate-600 leading-relaxed mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
            {post.metaDescription}
          </div>
          
          <div className="space-y-4">
            {formatContent(post.content)}
          </div>
        </div>

        {/* Links Section */}
        {(post.externalLinks.length > 0 || post.internalLinks.length > 0) && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              {post.externalLinks.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Sources</h4>
                  <ul className="space-y-3">
                    {post.externalLinks.map((link, index) => {
                      // Parse markdown-style links
                      const linkMatch = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
                      if (linkMatch) {
                        const [, linkText, url] = linkMatch;
                        return (
                          <li key={index} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1">•</span>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                            >
                              {linkText}
                            </a>
                          </li>
                        );
                      } else {
                        // If it's not a markdown link, display as plain text
                        return (
                          <li key={index} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1">•</span>
                            <span className="text-slate-600">{link}</span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
              
              {post.internalLinks.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Related Articles</h4>
                  <ul className="space-y-3">
                    {post.internalLinks.map((link, index) => {
                      // Parse markdown-style links
                      const linkMatch = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
                      if (linkMatch) {
                        const [, linkText, url] = linkMatch;
                        return (
                          <li key={index} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1">•</span>
                            <Link
                              href={url}
                              className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                            >
                              {linkText}
                            </Link>
                          </li>
                        );
                      } else {
                        // If it's not a markdown link, display as plain text
                        return (
                          <li key={index} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1">•</span>
                            <span className="text-slate-600">{link}</span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Start your sustainable oral care journey with our eco-friendly dental kit. 
            Reduce plastic waste while maintaining excellent dental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              Shop Eco Dental Kit
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 border border-emerald-600 text-base font-medium rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
} 