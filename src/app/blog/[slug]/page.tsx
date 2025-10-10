import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContentRenderer from './ContentRenderer'

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title
    },
    body
  }`

  return await client.fetch(query, { slug })
}

async function getRelatedPosts(currentSlug: string) {
  const query = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name
    }
  }`

  return await client.fetch(query, { slug: currentSlug })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  const relatedPosts = await getRelatedPosts(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            ← Back to Blog
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories?.map((category: any) => (
                <span
                  key={category.title}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600">
              {post.author?.image && (
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">By {post.author?.name || 'Red Lotus Team'}</p>
                {post.publishedAt && (
                  <p className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.mainImage && (
            <div className="relative h-96 w-full">
              <Image
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="px-8 py-8">
            <div className="prose prose-lg max-w-none">
              {post.body ? (
                <div>

                  <ContentRenderer content={post.body} />
                </div>
              ) : (
                <p className="text-gray-500 italic">No content available for this post.</p>
              )}
            </div>
          </div>

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-start">
                {post.author.image && (
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(64).height(64).url()}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About {post.author.name}
                  </h3>
                  <div className="text-gray-600">
                    <ContentRenderer content={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {relatedPost.mainImage && (
                    <div className="relative h-32 w-full">
                      <Image
                        src={urlFor(relatedPost.mainImage).width(300).height(150).url()}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      By {relatedPost.author?.name || 'Red Lotus Team'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
