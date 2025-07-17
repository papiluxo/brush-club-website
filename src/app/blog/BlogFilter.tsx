'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  imagePath: string;
  tags: string[];
  content: string;
}

interface BlogFilterProps {
  posts: BlogPost[];
  tags: string[];
}

export default function BlogFilter({ posts, tags }: BlogFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter posts based on selected tag and search term
  const filteredPosts = posts.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.metaDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
      </div>

      {/* Tag Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => handleTagFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTag === 'all'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Posts ({posts.length})
        </button>
        {tags.slice(0, 12).map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag} ({posts.filter((post: BlogPost) => post.tags.includes(tag)).length})
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-600">
        {filteredPosts.length === 0 ? 'No posts found' : `Showing ${filteredPosts.length} post${filteredPosts.length !== 1 ? 's' : ''}`}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.metaDescription}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-emerald-600 font-medium">Read more →</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or selected tags to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedTag('all');
              setSearchTerm('');
            }}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
} 