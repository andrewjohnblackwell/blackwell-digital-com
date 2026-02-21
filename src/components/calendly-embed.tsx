'use client'

import * as React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL

function CalendlyEmbed() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el || !CALENDLY_URL) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!CALENDLY_URL) {
    return (
      <div className="rounded-xl border border-border bg-bg-surface p-8 text-center">
        <p className="text-fg-secondary mb-4">
          Schedule your 30-minute strategy call directly on our booking page.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
        >
          Book on Calendly
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative min-h-[660px] rounded-xl overflow-hidden">
      {isVisible ? (
        <>
          {!isLoaded && (
            <Skeleton className="absolute inset-0 rounded-xl" />
          )}
          <iframe
            src={CALENDLY_URL}
            title="Schedule a strategy call with Blackwell Digital"
            className="w-full h-[660px] border-0"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <Skeleton className="w-full h-[660px] rounded-xl" />
      )}
    </div>
  )
}

export { CalendlyEmbed }
