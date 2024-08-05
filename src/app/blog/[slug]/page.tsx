import { getAllPosts, getPostBySlug } from '@/lib/getPosts';
import markdownToHtml from '@/lib/markdownToHtml';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">{post.date}</div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}