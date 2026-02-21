'use client'

import { ProgressBar } from '@/components/ui/progress-bar'
import { TOTAL_QUESTIONS } from '@/lib/quickscan/questions'

interface AssessmentProgressProps {
  currentQuestion: number
  step: 'questions' | 'lead-capture' | 'submitting' | 'error'
}

function AssessmentProgress({ currentQuestion, step }: AssessmentProgressProps) {
  const isLeadCapture = step !== 'questions'
  const progress = isLeadCapture
    ? 100
    : Math.round(((currentQuestion + 1) / TOTAL_QUESTIONS) * 100)

  const label = isLeadCapture
    ? 'Final step — enter your details'
    : `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS} — ${progress}% complete`

  return (
    <div className="space-y-2">
      <p className="text-sm text-fg-secondary" aria-live="polite">
        {label}
      </p>
      <ProgressBar value={progress} max={100} label={label} className="h-1.5" />
    </div>
  )
}

export { AssessmentProgress }
