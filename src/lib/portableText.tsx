import { projectId } from "@/sanity/env";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-bold text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-2xl font-bold text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-xl font-bold text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 text-lg font-bold text-gray-900">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-green-500 pl-4 text-gray-600 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-700">{children}</li>,
    number: ({ children }) => <li className="text-gray-700">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-brand-success hover:text-brand-success-dark underline"
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      // Handle Sanity image structure - check for asset reference or direct asset
      let imageUrl = null;
      const altText = value?.alt || value?.caption || "";

      // Check if it's a Sanity asset reference
      if (value?.asset?._ref) {
        // This is a Sanity asset reference, we need to construct the URL
        const assetRef = value.asset._ref;
        // Remove 'image-' prefix and split by '-'
        const cleanRef = assetRef.replace("image-", "");
        const parts = cleanRef.split("-");
        const lastPart = parts[parts.length - 1]; // This should be the extension
        const idPart = parts.slice(0, -1).join("-"); // Everything except the last part

        imageUrl = `https://cdn.sanity.io/images/${projectId}/production/${idPart}.${lastPart}`;
      } else if (value?.asset?.url) {
        // Direct asset URL
        imageUrl = value.asset.url;
      } else if (value?.url) {
        // Direct URL
        imageUrl = value.url;
      }

      if (!imageUrl) {
        return null;
      }

      return (
        <div className="relative my-6">
          <Image
            src={imageUrl}
            alt={altText}
            width={800}
            height={400}
            className="h-auto w-full rounded-lg shadow-md"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {value?.caption && (
            <p className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  // Add unknown type handler to prevent errors
  unknownType: () => {
    return null;
  },
  // Add unknown mark handler
  unknownMark: ({ children }) => {
    return <span>{children}</span>;
  },
  // Add hardBreak handler
  hardBreak: () => <br />,
};

// Fallback function to render content as plain text if PortableText fails
export function renderContentAsText(content: any): string {
  if (!content) return "";

  if (typeof content === "string") return content;

  if (Array.isArray(content)) {
    return content.map(renderContentAsText).join("");
  }

  if (typeof content === "object" && content !== null) {
    if (content.children) {
      return renderContentAsText(content.children);
    }
    if (content.text) {
      return content.text;
    }
    if (content._type === "block" && content.children) {
      return renderContentAsText(content.children) + "\n\n";
    }
  }

  return "";
}
