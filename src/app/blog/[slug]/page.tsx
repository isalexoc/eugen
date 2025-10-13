import { portableTextComponents } from "@/lib/portableText";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentRenderer from "./ContentRenderer";

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
  }`;

  const result = await sanityFetch({ query, params: { slug }, tags: ["post"] });
  return result.data;
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
  }`;

  const result = await sanityFetch({
    query,
    params: { slug: currentSlug },
    tags: ["post"],
  });
  return result.data;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const relatedPosts = await getRelatedPosts(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-brand-success hover:text-brand-success-dark"
          >
            ← Back to Blog
          </Link>
        </nav>

        <article className="overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Header */}
          <div className="border-b border-gray-200 px-8 py-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories?.map((category: any) => (
                <span
                  key={category.title}
                  className="rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600">
              {post.author?.image && (
                <div className="relative mr-4 h-12 w-12">
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">
                  By {post.author?.name || "Red Lotus Team"}
                </p>
                {post.publishedAt && (
                  <p className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
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
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-gray-500 italic">
                  No content available for this post.
                </p>
              )}
            </div>
          </div>

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
              <div className="flex items-start">
                {post.author.image && (
                  <div className="relative mr-4 h-16 w-16 flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(64).height(64).url()}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  {relatedPost.mainImage && (
                    <div className="relative h-32 w-full">
                      <Image
                        src={urlFor(relatedPost.mainImage)
                          .width(300)
                          .height(150)
                          .url()}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      By {relatedPost.author?.name || "Red Lotus Team"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
