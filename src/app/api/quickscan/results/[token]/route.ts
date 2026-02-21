import { NextResponse } from 'next/server'
import { getResult } from '@/lib/quickscan/store'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params

    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 400 }
      )
    }

    const result = await getResult(token)

    if (!result) {
      return NextResponse.json(
        { success: false, error: 'Results not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, result })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
