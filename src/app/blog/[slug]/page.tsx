import { getPostBySlug } from '@/lib/getPosts'
import markdownToHtml from '@/lib/markdownToHtml'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return (
    <article className="mt-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-400 mb-8">{post.date}</div>
      <div 
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}