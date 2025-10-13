import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";
import Link from "next/link";

async function getLatestPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
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
    }
  }`;

  const result = await sanityFetch({ query, tags: ["post"] });
  return result.data;
}

export default async function BlogPreview() {
  const posts = await getLatestPosts();

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Latest from Our Blog
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay updated with the latest insights on coffee, tea, and global
            trade markets
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post._id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
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
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.categories?.slice(0, 2).map((category: any) => (
                    <span
                      key={category.title}
                      className="rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>

                <div className="mb-4 flex items-center text-sm text-gray-500">
                  {post.author?.image ? (
                    <div className="relative mr-3 h-8 w-8 flex-shrink-0">
                      <Image
                        src={urlFor(post.author.image)
                          .width(32)
                          .height(32)
                          .url()}
                        alt={post.author.name || "Author"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-brand-success mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-white">
                      {post.author?.name?.charAt(0) || "R"}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700">
                      {post.author?.name || "Red Lotus Team"}
                    </span>
                    {post.publishedAt && (
                      <span className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-brand-success hover:text-brand-success-dark inline-flex items-center font-medium"
                >
                  Read More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="bg-brand-success hover:bg-brand-success-dark inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white transition-colors"
          >
            View All Posts
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
