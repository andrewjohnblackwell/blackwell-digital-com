import Link from 'next/link'
import { SectionContainer } from '@/components/layout/section-container'
import { buttonVariants } from '@/components/ui/button'

export default function QuickScanNotFound() {
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
