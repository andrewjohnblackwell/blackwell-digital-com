import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getResult } from '@/lib/quickscan/store'
import { ResultsDisplay } from '@/components/quickscan/results-display'

export const dynamic = 'force-dynamic'

export const metadata = createMetadata({
  title: 'Your AI Maturity Results',
  description: 'Your personalized AI Maturity QuickScan results.',
  path: '/quickscan/results',
  noIndex: true,
})

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params
  const result = await getResult(token)

  if (!result) {
    notFound()
  }

  return <ResultsDisplay result={result} />
}
