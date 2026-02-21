import { NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY!
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = newsletterSchema.safeParse(body)

    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as string
        if (!fieldErrors[field]) fieldErrors[field] = []
        fieldErrors[field].push(issue.message)
      }
      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 }
      )
    }

    const { email } = parsed.data

    const res = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    )

    if (!res.ok) {
      const data = await res.json()
      if (data.title === 'Member Exists') {
        return NextResponse.json({ success: true })
      }
      console.error('[Newsletter] Mailchimp error:', data)
      return NextResponse.json(
        { success: false, errors: { _form: ['Subscription failed. Please try again.'] } },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ['Something went wrong. Please try again.'] } },
      { status: 500 }
    )
  }
}
