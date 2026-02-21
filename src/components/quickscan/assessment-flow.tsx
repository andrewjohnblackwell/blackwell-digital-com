'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { QuickScanProvider, useQuickScan, clearAssessmentStorage } from './quickscan-provider'
import { AssessmentProgress } from './assessment-progress'
import { QuestionScreen } from './question-screen'
import { LeadCaptureForm } from './lead-capture-form'
import { QUICKSCAN_QUESTIONS } from '@/lib/quickscan/questions'
import type { LeadCaptureData } from '@/lib/validations'

function AssessmentFlowInner() {
  const router = useRouter()
  const { state, dispatch } = useQuickScan()
  const [submitError, setSubmitError] = React.useState('')

  async function handleLeadSubmit(lead: LeadCaptureData) {
    dispatch({ type: 'SET_SUBMITTING' })
    setSubmitError('')

    try {
      const res = await fetch('/api/quickscan/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: state.answers, lead }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.errors?._form?.[0] ?? 'Submission failed')
      }

      clearAssessmentStorage()
      router.push(`/quickscan/results/${data.token}`)
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.',
      })
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

  function handleBack() {
    dispatch({ type: 'PREV_QUESTION' })
    setSubmitError('')
  }

  const isSubmitting = state.step === 'submitting'

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <AssessmentProgress
        currentQuestion={state.currentQuestion}
        step={state.step}
      />

      {state.step === 'questions' && (
        <QuestionScreen question={QUICKSCAN_QUESTIONS[state.currentQuestion]} />
      )}

      {(state.step === 'lead-capture' ||
        state.step === 'submitting' ||
        state.step === 'error') && (
        <LeadCaptureForm
          onSubmit={handleLeadSubmit}
          onBack={handleBack}
          loading={isSubmitting}
          error={submitError}
        />
      )}
    </div>
  )
}

function AssessmentFlow() {
  return (
    <QuickScanProvider>
      <AssessmentFlowInner />
    </QuickScanProvider>
  )
}

export { AssessmentFlow }
