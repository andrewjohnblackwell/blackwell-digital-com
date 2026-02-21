import type { Answer, Dimension, DimensionScore, QuickScanScore, StageNumber } from './types'
import { QUICKSCAN_QUESTIONS } from './questions'

function clampStage(n: number): StageNumber {
  return Math.max(1, Math.min(4, Math.round(n))) as StageNumber
}

function computeDimensionScore(
  answers: Answer[],
  dimension: Dimension
): DimensionScore {
  const relevant = QUICKSCAN_QUESTIONS.filter((q) => q.dimension === dimension)
  const dimensionAnswers = answers.filter((a) =>
    relevant.some((q) => q.id === a.questionId)
  )

  if (dimensionAnswers.length === 0) {
    return { dimension, average: 1, outOf10: 0 }
  }

  const sum = dimensionAnswers.reduce((acc, a) => acc + a.value, 0)
  const average = sum / dimensionAnswers.length
  const outOf10 = Math.round(((average - 1) / 3) * 10 * 10) / 10 // one decimal

  return { dimension, average, outOf10 }
}

export function scoreAnswers(answers: Answer[]): QuickScanScore {
  const dimensions: [DimensionScore, DimensionScore, DimensionScore] = [
    computeDimensionScore(answers, 'operations'),
    computeDimensionScore(answers, 'marketing'),
    computeDimensionScore(answers, 'digital'),
  ]

  const overallAverage =
    dimensions.reduce((acc, d) => acc + d.average, 0) / dimensions.length

  return {
    overall: clampStage(overallAverage),
    overallAverage: Math.round(overallAverage * 100) / 100,
    dimensions,
  }
}
