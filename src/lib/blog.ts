import fs from 'fs';
import path from 'path';

export interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  imagePath: string;
  tags: string[];
  metaDescription: string;
  content: string;
  externalLinks: string[];
  internalLinks: string[];
}

export function getBlogPosts(): BlogPost[] {
  try {
    const filePath = path.join(process.cwd(), 'public', 'blogs', 'brush-club-seo-blogs.txt');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    console.log('Blog file loaded, size:', fileContent.length);
    
    // Split by the separator
    const rawSections = fileContent.split('==========================================');
    console.log('Found', rawSections.length, 'raw sections after splitting');
    
    // Debug: Show first few sections
    rawSections.slice(0, 5).forEach((section, index) => {
      const preview = section.substring(0, 100).replace(/\n/g, ' ');
      console.log(`Section ${index} preview:`, preview);
      console.log(`Section ${index} includes BLOG POST #:`, section.includes('BLOG POST #'));
    });
    
    const posts: BlogPost[] = [];
    
    // Look for sections that contain "BLOG POST #" and combine with next section
    for (let i = 0; i < rawSections.length - 1; i++) {
      const currentSection = rawSections[i];
      const nextSection = rawSections[i + 1];
      
      if (currentSection.includes('BLOG POST #')) {
        console.log(`Found blog post in section ${i}`);
        console.log('Section preview:', currentSection.substring(0, 50));
        
        // Combine the header section with the content section
        const fullContent = currentSection + '==========================================' + nextSection;
        
        const post = parseBlogPost(fullContent);
        if (post) {
          console.log('Parsed blog post:', {
            title: post.title ? 'present' : 'missing',
            slug: post.slug ? 'present' : 'missing',
            hasContent: post.content.length > 0,
            tagsCount: post.tags.length
          });
          
          if (post.title && post.slug) {
            posts.push(post);
            console.log('Successfully added post:', post.title);
          } else {
            console.log('Missing required fields:', {
              title: !!post.title,
              slug: !!post.slug
            });
            console.log('Failed to parse post in section');
          }
        } else {
          console.log('Failed to parse post - null returned');
        }
      }
    }
    
    console.log('Total blog posts parsed:', posts.length);
    return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  } catch (error) {
    console.error('Error reading blog file:', error);
    return [];
  }
}

function parseBlogPost(content: string): BlogPost | null {
  const lines = content.split('\n');
  
  let title = '';
  let slug = '';
  let publishDate = '';
  let imagePath = '';
  let tags: string[] = [];
  let metaDescription = '';
  let postContent = '';
  const externalLinks: string[] = [];
  const internalLinks: string[] = [];
  
  let contentStart = false;
  let inExternalLinksSection = false;
  let inInternalLinksSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('Title:')) {
      title = line.replace('Title:', '').trim();
    } else if (line.startsWith('Slug:')) {
      slug = line.replace('Slug:', '').trim();
    } else if (line.startsWith('Publish Date:')) {
      publishDate = line.replace('Publish Date:', '').trim();
    } else if (line.startsWith('Image Path:')) {
      imagePath = line.replace('Image Path:', '').trim();
    } else if (line.startsWith('Tags:')) {
      const tagsLine = line.replace('Tags:', '').trim();
      tags = tagsLine.split(',').map(tag => tag.trim());
    } else if (line.startsWith('Meta Description:')) {
      metaDescription = line.replace('Meta Description:', '').trim();
    } else if (line === '' && metaDescription && !contentStart) {
      contentStart = true;
    } else if (contentStart) {
      // Stop parsing content when we hit meta sections that shouldn't be displayed
      if (line.includes('[Due to space constraints,') || 
          line.includes('External Sources Referenced Throughout:') ||
          line.includes('Internal Links Throughout:') ||
          line.includes('This completes the foundation for')) {
        break;
      }
      
      // Handle External Links section
      if (line.startsWith('External Links:')) {
        inExternalLinksSection = true;
        inInternalLinksSection = false;
        continue;
      }
      
      // Handle Internal Links section
      if (line.startsWith('Internal Links:')) {
        inInternalLinksSection = true;
        inExternalLinksSection = false;
        continue;
      }
      
      // Reset sections when we hit an empty line after links
      if (line === '' && (inExternalLinksSection || inInternalLinksSection)) {
        inExternalLinksSection = false;
        inInternalLinksSection = false;
        continue;
      }
      
      // Process links in their respective sections
      if (inExternalLinksSection && line.startsWith('-')) {
        const linkText = line.replace(/^-\s*/, '').trim();
        if (linkText) {
          externalLinks.push(linkText);
        }
        continue;
      }
      
      if (inInternalLinksSection && line.startsWith('-')) {
        const linkText = line.replace(/^-\s*/, '').trim();
        if (linkText) {
          internalLinks.push(linkText);
        }
        continue;
      }
      
      // Only add to content if we're not in a links section
      if (!inExternalLinksSection && !inInternalLinksSection) {
        postContent += line + '\n';
      }
    }
  }
  
  // Clean up content
  postContent = postContent.trim();
  
  // Additional cleanup: remove any remaining meta-content patterns
  postContent = postContent.replace(/\[Due to space constraints,[\s\S]*$/m, '');
  postContent = postContent.replace(/External Sources Referenced Throughout:[\s\S]*$/m, '');
  postContent = postContent.replace(/Internal Links Throughout:[\s\S]*$/m, '');
  postContent = postContent.replace(/This completes the foundation for[\s\S]*$/m, '');
  
  // Clean up any trailing whitespace after removals
  postContent = postContent.trim();
  
  // Validate required fields
  if (!title || !slug || !publishDate) {
    return null;
  }
  
  return {
    slug,
    title,
    content: postContent,
    publishDate,
    imagePath: imagePath ? imagePath.replace('/blog_images/', '/blogs/blog_images/') : '/favicon.png',
    tags,
    metaDescription: metaDescription || '',
    externalLinks,
    internalLinks
  };
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getAllTags(): string[] {
  const posts = getBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return Array.from(new Set(allTags)).sort();
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
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