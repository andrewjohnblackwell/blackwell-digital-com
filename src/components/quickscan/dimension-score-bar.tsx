'use client'

import { ProgressBar } from '@/components/ui/progress-bar'
import type { Dimension } from '@/lib/quickscan/types'

const DIMENSION_LABELS: Record<Dimension, string> = {
  operations: 'Operations',
  marketing: 'Marketing',
  digital: 'Digital',
}

interface DimensionScoreBarProps {
  dimension: Dimension
  score: number
  interpretation: string
}

function DimensionScoreBar({
  dimension,
  score,
  interpretation,
}: DimensionScoreBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-fg-primary">
          {DIMENSION_LABELS[dimension]}
        </span>
        <span className="text-sm font-semibold text-primary">
          {score}/10
        </span>
      </div>
      <ProgressBar
        value={score}
        max={10}
        label={`${DIMENSION_LABELS[dimension]} score: ${score} out of 10`}
        className="h-2"
      />
      <p className="text-sm text-fg-secondary leading-relaxed">
        {interpretation}
      </p>
    </div>
  )
}

export { DimensionScoreBar }
