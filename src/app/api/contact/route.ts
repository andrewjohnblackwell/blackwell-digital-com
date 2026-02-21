import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string
        if (!fieldErrors[field]) fieldErrors[field] = []
        fieldErrors[field].push(issue.message)
      }
      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 }
      )
    }

    // TODO: Send email notification
    // TODO: CRM webhook (HubSpot, etc.)
    // TODO: Rate limiting

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ['Something went wrong. Please try again.'] } },
      { status: 500 }
    )
  }
}
