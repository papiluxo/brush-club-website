import { BlogPost } from './blog';

export function getBlogPostsByTag(tag: string, posts: BlogPost[]): BlogPost[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getPreviewText(content: string, maxLength: number = 150): string {
  // Remove markdown/HTML and get first paragraph or maxLength characters
  const plainText = content.replace(/[#*\[\]()]/g, '').replace(/\n\n/g, ' ').trim();
  const firstParagraph = plainText.split('\n')[0];
  
  if (firstParagraph.length <= maxLength) {
    return firstParagraph;
  }
  
  return plainText.substring(0, maxLength).trim() + '...';
} 