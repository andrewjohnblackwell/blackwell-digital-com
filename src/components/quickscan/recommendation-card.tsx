import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import type { Recommendation } from '@/lib/quickscan/types'

interface RecommendationCardProps {
  recommendation: Recommendation
}

function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card variant="feature">
      <CardContent className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-fg-primary">
          {recommendation.headline}
        </h3>
        <p className="text-sm text-fg-secondary leading-relaxed">
          {recommendation.body}
        </p>
        <Link
          href={recommendation.href}
          className={buttonVariants({ variant: 'secondary', size: 'sm' })}
        >
          {recommendation.cta} &rarr;
        </Link>
      </CardContent>
    </Card>
  )
}

export { RecommendationCard }
