'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useQuickScan } from './quickscan-provider'
import type { Question, StageNumber } from '@/lib/quickscan/types'

interface QuestionScreenProps {
  question: Question
}

function QuestionScreen({ question }: QuestionScreenProps) {
  const { state, dispatch } = useQuickScan()

  const selectedValue = state.answers.find(
    (a) => a.questionId === question.id
  )?.value

  function handleSelect(value: StageNumber) {
    dispatch({ type: 'SET_ANSWER', questionId: question.id, value })
  }

  function handleContinue() {
    if (selectedValue !== undefined) {
      dispatch({ type: 'NEXT_QUESTION' })
    }
  }

  function handleBack() {
    dispatch({ type: 'PREV_QUESTION' })
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl md:text-2xl font-heading font-semibold text-fg-primary">
        {question.text}
      </h2>

      <fieldset className="space-y-3">
        <legend className="sr-only">{question.text}</legend>
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value
          return (
            <label
              key={option.value}
              className={cn(
                'flex items-start gap-4 rounded-xl border p-4 md:p-5 cursor-pointer transition-all duration-normal ease-standard',
                isSelected
                  ? 'border-primary bg-primary/[0.06] shadow-glow-blue'
                  : 'border-white/[0.10] bg-bg-surface hover:border-white/[0.20] hover:bg-white/[0.03]'
              )}
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={isSelected}
                onChange={() => handleSelect(option.value)}
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span className="text-sm md:text-base text-fg-primary leading-relaxed">
                {option.label}
              </span>
            </label>
          )
        })}
      </fieldset>

      <div className="flex items-center justify-between pt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          disabled={state.currentQuestion === 0}
        >
          &larr; Previous
        </Button>
        <Button
          size="md"
          onClick={handleContinue}
          disabled={selectedValue === undefined}
        >
          Continue &rarr;
        </Button>
      </div>
    </div>
  )
}

export { QuestionScreen }
