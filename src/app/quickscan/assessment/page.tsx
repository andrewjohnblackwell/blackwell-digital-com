import { createMetadata } from '@/lib/metadata'
import { SectionContainer } from '@/components/layout/section-container'
import { AssessmentFlow } from '@/components/quickscan/assessment-flow'

export const metadata = createMetadata({
  title: 'AI Maturity QuickScan — Assessment',
  description:
    'Complete your AI Maturity QuickScan assessment. Answer 10 questions about your business operations, marketing, and digital presence.',
  path: '/quickscan/assessment',
  noIndex: true,
})

export default function AssessmentPage() {
  return (
    <SectionContainer padding="lg">
      <AssessmentFlow />
    </SectionContainer>
  )
}
