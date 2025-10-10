'use client'

import dynamic from 'next/dynamic'

// Dynamic import for client-side only rendering
const ClientContentRenderer = dynamic(
  () => import('./ClientContentRenderer'),
  {
    ssr: false,
    loading: () => (
      <div className="text-gray-500 italic">Loading content...</div>
    )
  }
) as React.ComponentType<{ content: any }>

// Safe content renderer with fallback
export default function ContentRenderer({ content }: { content: any }) {
  // Use client-side only rendering to avoid hydration issues
  return <ClientContentRenderer content={content} />
}
