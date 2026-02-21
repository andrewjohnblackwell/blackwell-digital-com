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

    // Email notification to internal team
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
    const MAILGUN_API_URL = process.env.MAILGUN_API_URL || 'https://api.mailgun.net'
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL

    if (MAILGUN_API_KEY && MAILGUN_DOMAIN && CONTACT_EMAIL) {
      const dims = score.dimensions
        .map((d) => `  ${d.dimension}: ${d.outOf10}/10`)
        .join('\n')

      const recs = recommendations
        .map((r) => `  - ${r.headline}: ${r.body}`)
        .join('\n')

      const formData = new URLSearchParams()
      formData.append('from', `Blackwell Digital <noreply@${MAILGUN_DOMAIN}>`)
      formData.append('to', CONTACT_EMAIL)
      formData.append('h:Reply-To', lead.email)
      formData.append(
        'subject',
        `New QuickScan: ${lead.name} (${lead.company}) — Stage ${score.overall}: ${result.stageName}`
      )
      formData.append(
        'text',
        [
          `New QuickScan Submission`,
          ``,
          `Lead Info:`,
          `  Name: ${lead.name}`,
          `  Email: ${lead.email}`,
          `  Company: ${lead.company}`,
          `  Role: ${lead.role}`,
          `  Company Size: ${lead.companySize}`,
          ``,
          `Results:`,
          `  Overall Stage: ${score.overall} — ${result.stageName}`,
          `  Overall Average: ${score.overallAverage.toFixed(2)}`,
          ``,
          `Dimension Scores:`,
          dims,
          ``,
          `Recommendations:`,
          recs,
          ``,
          `Results URL: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://blackwelldigital.com'}/quickscan/results/${token}`,
        ].join('\n')
      )

      try {
        await fetch(`${MAILGUN_API_URL}/v3/${MAILGUN_DOMAIN}/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          },
          body: formData,
        })
      } catch (err) {
        console.error('[QuickScan] Email notification failed:', err)
      }
    }

    return NextResponse.json({ success: true, token })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ['Something went wrong. Please try again.'] } },
      { status: 500 }
    )
  }
}
