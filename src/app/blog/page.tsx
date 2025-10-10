import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    excerpt
  }`

  return await client.fetch(query)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Red Lotus International Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights on premium coffee, matcha tea, and global trade markets
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
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
                    {post.categories?.map((category: any) => (
                      <span
                        key={category.title}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    {post.author?.image && (
                      <div className="relative w-8 h-8 mr-3">
                        <Image
                          src={urlFor(post.author.image).width(32).height(32).url()}
                          alt={post.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
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
        )}
      </div>
    </div>
  )
}
