import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!
const MAILGUN_API_URL = process.env.MAILGUN_API_URL || 'https://api.mailgun.net'
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!

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

    const { name, email, company, phone, inquiryType, message } = result.data

    const formData = new URLSearchParams()
    formData.append('from', `Blackwell Digital <noreply@${MAILGUN_DOMAIN}>`)
    formData.append('to', CONTACT_EMAIL)
    formData.append('h:Reply-To', email)
    formData.append('subject', `New Contact: ${inquiryType} — ${name} (${company})`)
    formData.append(
      'text',
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        phone ? `Phone: ${phone}` : null,
        `Inquiry Type: ${inquiryType}`,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join('\n')
    )

    const res = await fetch(
      `${MAILGUN_API_URL}/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
        },
        body: formData,
      }
    )

    if (!res.ok) {
      const text = await res.text()
      console.error('[Contact] Mailgun error:', res.status, text)
      return NextResponse.json(
        { success: false, errors: { _form: ['Failed to send message. Please try again.'] } },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact] Unexpected error:', err)
    return NextResponse.json(
      { success: false, errors: { _form: ['Something went wrong. Please try again.'] } },
      { status: 500 }
    )
  }
}
