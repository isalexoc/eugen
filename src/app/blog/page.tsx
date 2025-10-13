import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";
import Link from "next/link";

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
  }`;

  const result = await sanityFetch({ query, tags: ["post"] });
  return result.data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Red Lotus International Blog
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Discover the latest insights on premium coffee, matcha tea, and
            global trade markets
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
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

                  <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>

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
                      <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-medium text-white">
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
        )}
      </div>
    </div>
  );
}
