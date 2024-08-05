import Link from 'next/link';
import { getAllPosts } from '@/lib/getPosts';
import Header from '@/components/Header';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto text-white min-h-screen p-8">
      <Header />
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