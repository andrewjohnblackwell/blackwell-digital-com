import { NextResponse } from 'next/server'
import { quickscanSubmitSchema } from '@/lib/validations'
import { scoreAnswers } from '@/lib/quickscan/scoring'
import { getRecommendations } from '@/lib/quickscan/recommendations'
import {
  STAGE_NAMES,
  STAGE_SUMMARIES,
  DIMENSION_INTERPRETATIONS,
  RELATED_INSIGHTS,
} from '@/lib/quickscan/stage-content'
import { saveResult } from '@/lib/quickscan/store'
import type { QuickScanResult } from '@/lib/quickscan/types'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = quickscanSubmitSchema.safeParse(body)

    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path.join('.')
        if (!fieldErrors[field]) fieldErrors[field] = []
        fieldErrors[field].push(issue.message)
      }
      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 }
      )
    }

    const { answers, lead } = parsed.data
    const score = scoreAnswers(answers)
    const recommendations = getRecommendations(score)
    const token = crypto.randomUUID()

    const result: QuickScanResult = {
      token,
      score,
      lead,
      recommendations,
      stageName: STAGE_NAMES[score.overall],
      stageSummary: STAGE_SUMMARIES[score.overall],
      dimensionInterpretations: DIMENSION_INTERPRETATIONS[score.overall],
      relatedInsights: RELATED_INSIGHTS[score.overall],
      createdAt: new Date().toISOString(),
    }

    await saveResult(result)

    // TODO: CRM integration (stub)
    console.log('[QuickScan] New submission:', {
      token,
      stage: score.overall,
      lead: { email: lead.email, company: lead.company },
    })

    // TODO: Email results to lead (stub)
    console.log('[QuickScan] Would email results to:', lead.email)

    return NextResponse.json({ success: true, token })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ['Something went wrong. Please try again.'] } },
      { status: 500 }
    )
  }
}
