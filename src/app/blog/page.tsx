import Link from 'next/link';
import { getBlogPosts, getAllTags } from '@/lib/blog';
import BlogFilter from './BlogFilter';

export default function BlogPage() {
  const posts = getBlogPosts();
  const tags = getAllTags();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Discover sustainable oral care tips, eco-friendly living advice, and the latest insights 
        on creating a healthier planet through conscious choices.
      </p>
      
      <BlogFilter posts={posts} tags={tags} />
    </div>
  );
} 