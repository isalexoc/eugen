'use client'

import { portableTextComponents, renderContentAsText } from '@/lib/portableText'
import { PortableText } from '@portabletext/react'
import { useEffect, useState } from 'react'

export default function ClientContentRenderer({ content }: { content: any }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering PortableText until mounted
  if (!mounted) {
    return (
      <div className="text-gray-500 italic">Loading content...</div>
    )
  }

  if (!content) {
    return (
      <p className="text-gray-500 italic">No content available for this post.</p>
    )
  }

  try {
    return (
      <PortableText
        value={content}
        components={portableTextComponents}
        onMissingComponent={(message, options) => {
          console.warn('PortableText missing component:', message, options)
          return null
        }}
      />
    )
  } catch (error) {
    console.error('PortableText rendering error:', error)

    // Fallback to plain text rendering
    const textContent = renderContentAsText(content)

    return (
      <div className="text-gray-700 whitespace-pre-wrap">
        <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded">
          <h4 className="font-bold text-red-800 mb-2">⚠️ Content Rendering Issue</h4>
          <p className="text-red-700 text-sm mb-2">
            PortableText failed to render this content. Showing fallback text:
          </p>
        </div>
        {textContent || 'Content could not be rendered.'}
      </div>
    )
  }
}
