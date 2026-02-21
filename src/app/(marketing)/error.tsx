'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'

export default function MarketingError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container-bd text-center max-w-xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-fg-secondary mb-8">
          We hit an unexpected error. You can try again or navigate to a
          different page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="md" onClick={reset}>
            Try again
          </Button>
          <Link href="/" className={buttonVariants({ variant: 'secondary', size: 'md' })}>
            Go home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: 'ghost', size: 'md' })}>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
