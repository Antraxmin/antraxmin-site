import Link from 'next/link';
import { getAllPosts } from '@/lib/getPosts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="text-gray-800">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}