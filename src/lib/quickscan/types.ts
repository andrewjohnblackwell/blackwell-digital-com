export type Dimension = 'operations' | 'marketing' | 'digital'

export type StageNumber = 1 | 2 | 3 | 4

export type StageName = 'Manual' | 'Assisted' | 'Automated' | 'Autonomous'

export interface Option {
  label: string
  value: StageNumber
}

export interface Question {
  id: string
  dimension: Dimension
  text: string
  options: [Option, Option, Option, Option]
  /** Reserved for future branching logic */
  condition?: { questionId: string; value: StageNumber }
}

export interface Answer {
  questionId: string
  value: StageNumber
}

export interface DimensionScore {
  dimension: Dimension
  average: number
  outOf10: number
}

export interface QuickScanScore {
  overall: StageNumber
  overallAverage: number
  dimensions: [DimensionScore, DimensionScore, DimensionScore]
}

export interface LeadData {
  name: string
  email: string
  company: string
  role: string
  companySize: string
}

export interface Recommendation {
  headline: string
  body: string
  cta: string
  href: string
}

export interface QuickScanResult {
  token: string
  score: QuickScanScore
  lead: LeadData
  recommendations: Recommendation[]
  stageName: StageName
  stageSummary: string
  dimensionInterpretations: Record<Dimension, string>
  relatedInsights: { category: string; title: string; href: string }[]
  createdAt: string
}
