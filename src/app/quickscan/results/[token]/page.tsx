'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import { ResultsDisplay } from '@/components/quickscan/results-display'
import { SectionContainer } from '@/components/layout/section-container'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import type { QuickScanResult } from '@/lib/quickscan/types'

export default function ResultsPage() {
  const { token } = useParams<{ token: string }>()
  const [result, setResult] = React.useState<QuickScanResult | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Try sessionStorage first (same-session results)
    const cached = sessionStorage.getItem(`qs-result-${token}`)
    if (cached) {
      try {
        setResult(JSON.parse(cached))
        setLoading(false)
        return
      } catch {
        // fall through to API
      }
    }

    // Fallback to API (for shared links, bookmarks, etc.)
    fetch(`/api/quickscan/results/${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.result) {
          setResult(data.result)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [token])

  if (loading) {
    return (
      <SectionContainer padding="lg">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-fg-secondary">Loading your results...</p>
        </div>
      </SectionContainer>
    )
  }

  if (!result) {
    return (
      <SectionContainer padding="lg">
        <div className="mx-auto max-w-xl text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-fg-primary">
            Results Not Found
          </h1>
          <p className="text-fg-secondary leading-relaxed">
            We couldn&apos;t find results for this link. Results may expire after a
            period of time, or the link may be incorrect. Take the QuickScan again
            to get a fresh assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quickscan/assessment"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Retake the QuickScan
            </Link>
            <Link
              href="/quickscan"
              className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            >
              Learn More
            </Link>
          </div>
        </div>
      </SectionContainer>
    )
  }

  return <ResultsDisplay result={result} />
}
