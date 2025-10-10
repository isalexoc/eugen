import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

async function getLatestPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name
    },
    categories[]->{
      title
    }
  }`

  return await client.fetch(query)
}

export default async function BlogPreview() {
  const posts = await getLatestPosts()

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights on coffee, tea, and global trade markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {post.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(200).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.slice(0, 2).map((category: any) => (
                    <span
                      key={category.title}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>By {post.author?.name || 'Red Lotus Team'}</span>
                  {post.publishedAt && (
                    <span className="ml-2">
                      • {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            View All Posts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
