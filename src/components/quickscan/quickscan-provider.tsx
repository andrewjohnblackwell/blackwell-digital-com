'use client'

import * as React from 'react'
import type { Answer, StageNumber } from '@/lib/quickscan/types'
import { TOTAL_QUESTIONS } from '@/lib/quickscan/questions'

type Step = 'questions' | 'lead-capture' | 'submitting' | 'error'

interface AssessmentState {
  currentQuestion: number
  answers: Answer[]
  step: Step
  errorMessage: string
}

type Action =
  | { type: 'SET_ANSWER'; questionId: string; value: StageNumber }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'GO_TO_LEAD_CAPTURE' }
  | { type: 'SET_SUBMITTING' }
  | { type: 'SET_ERROR'; message: string }
  | { type: 'RESTORE'; state: AssessmentState }

const STORAGE_KEY = 'quickscan-assessment'

function reducer(state: AssessmentState, action: Action): AssessmentState {
  switch (action.type) {
    case 'SET_ANSWER': {
      const existing = state.answers.findIndex(
        (a) => a.questionId === action.questionId
      )
      const answers =
        existing >= 0
          ? state.answers.map((a, i) =>
              i === existing ? { ...a, value: action.value } : a
            )
          : [...state.answers, { questionId: action.questionId, value: action.value }]
      return { ...state, answers }
    }
    case 'NEXT_QUESTION':
      if (state.currentQuestion < TOTAL_QUESTIONS - 1) {
        return { ...state, currentQuestion: state.currentQuestion + 1 }
      }
      return { ...state, step: 'lead-capture' }
    case 'PREV_QUESTION':
      if (state.step === 'lead-capture') {
        return { ...state, step: 'questions', currentQuestion: TOTAL_QUESTIONS - 1 }
      }
      return {
        ...state,
        currentQuestion: Math.max(0, state.currentQuestion - 1),
      }
    case 'GO_TO_LEAD_CAPTURE':
      return { ...state, step: 'lead-capture' }
    case 'SET_SUBMITTING':
      return { ...state, step: 'submitting', errorMessage: '' }
    case 'SET_ERROR':
      return { ...state, step: 'error', errorMessage: action.message }
    case 'RESTORE':
      return action.state
    default:
      return state
  }
}

const initialState: AssessmentState = {
  currentQuestion: 0,
  answers: [],
  step: 'questions',
  errorMessage: '',
}

interface QuickScanContextValue {
  state: AssessmentState
  dispatch: React.Dispatch<Action>
  currentAnswer: StageNumber | undefined
}

const QuickScanContext = React.createContext<QuickScanContextValue | null>(null)

export function useQuickScan() {
  const ctx = React.useContext(QuickScanContext)
  if (!ctx) {
    throw new Error('useQuickScan must be used within QuickScanProvider')
  }
  return ctx
}

export function QuickScanProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const initialized = React.useRef(false)

  // Restore from sessionStorage on mount
  React.useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as AssessmentState
        // Only restore if still in a resumable state
        if (parsed.step === 'questions' || parsed.step === 'lead-capture') {
          dispatch({ type: 'RESTORE', state: parsed })
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, [])

  // Persist to sessionStorage on state change
  React.useEffect(() => {
    if (!initialized.current) return
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Ignore storage errors
    }
  }, [state])

  const currentAnswer = React.useMemo(() => {
    // This will be used by question-screen to show selected answer
    return undefined // Answer lookup happens in question-screen via answers array
  }, [])

  const value = React.useMemo(
    () => ({ state, dispatch, currentAnswer }),
    [state, currentAnswer]
  )

  return (
    <QuickScanContext.Provider value={value}>
      {children}
    </QuickScanContext.Provider>
  )
}

export function clearAssessmentStorage() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // Ignore
  }
}
