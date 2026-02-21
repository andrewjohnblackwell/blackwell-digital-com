import { Hero } from '@/components/sections/hero'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { createMetadata } from '@/lib/metadata'
import {
  StageHero,
  CharacteristicsList,
  SymptomsList,
  WhatGoodLooksLike,
  RecommendedActions,
  RelatedInsights,
  StageCTA,
} from '@/components/sections/framework-page'

export const metadata = createMetadata({
  title: 'AI Maturity Stage 4: Autonomous \u2014 Blackwell Digital',
  description:
    'Autonomous is stage 4 of the AI Maturity Framework. Learn the characteristics, business symptoms, and recommended actions for businesses at this stage.',
  path: '/framework/autonomous',
})

const CHARACTERISTICS = [
  'AI-driven systems handle the majority of repeatable decisions and workflows',
  'Human involvement is reserved for strategy, relationships, and exception handling',
  'The business adapts to market changes automatically through connected intelligence',
  'Cross-functional data flows create compounding insights and efficiencies',
  'The operating system itself improves over time \u2014 learning from outcomes and optimizing continuously',
]

const SYMPTOMS = [
  'Your team spends 80%+ of their time on high-judgment, high-value work \u2014 not process execution',
  'You can enter new markets, launch new products, or onboard new clients with minimal process ramp-up',
  'Your systems surface opportunities and risks before anyone has to ask \u2014 proactive, not reactive',
]

const INSIGHT_CARDS = [
  {
    category: 'AI Maturity',
    title: 'What Stage 4 Looks Like in Practice \u2014 Lessons from Early Adopters',
    href: '/insights',
  },
  {
    category: 'Strategy',
    title: 'The Compounding Advantage: Why AI-First Businesses Pull Away',
    href: '/insights',
  },
  {
    category: 'Operations',
    title: 'Autonomous Operations: When Your Business Runs Itself',
    href: '/insights',
  },
]

export default function AutonomousStagePage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Framework', href: '/framework' },
            { label: 'Stage 4: Autonomous' },
          ]}
        />
        <StageHero
          stageNumber={4}
          title="Stage 4: Autonomous"
          subtitle="AI handles repeatable decisions. Humans focus on strategy, relationships, and judgment. The business adapts and improves automatically."
        />
      </Hero>

      {/* Block 2: Characteristics */}
      <CharacteristicsList
        heading="What Stage 4 Looks Like"
        items={CHARACTERISTICS}
      />

      {/* Block 3: Symptoms */}
      <SymptomsList items={SYMPTOMS} />

      {/* Block 4: What Good Looks Like */}
      <WhatGoodLooksLike
        stageNumber={4}
        paragraphs={[
          'This is the end state \u2014 and very few SMBs are here yet. But every step toward autonomous reduces cost, increases speed, and compounds your competitive advantage.',
          'At Stage 4, your business isn\u2019t just using AI tools \u2014 it\u2019s operating as an AI-driven organism. Systems learn from outcomes, adapt to market changes, and surface insights that would take a human team weeks to uncover.',
          'If you\u2019re approaching this stage, the focus shifts from building systems to evolving them \u2014 ensuring they continue to improve, adapt, and compound their value as your business grows.',
        ]}
      />

      {/* Block 5: Recommended Actions */}
      <RecommendedActions
        description="If you\u2019re approaching Stage 4, our quarterly optimization retainer keeps your systems evolving. Here\u2019s what it delivers:"
        bullets={[
          'Quarterly maturity reassessments that track progression and surface new opportunities',
          'Continuous optimization of existing automated systems based on performance data',
          'Strategic guidance on emerging AI capabilities that align with your business goals',
        ]}
        ctaLabel="Take the QuickScan"
        ctaHref="/quickscan"
      />

      {/* Block 6: Related Insights */}
      <RelatedInsights cards={INSIGHT_CARDS} />

      {/* Block 7: Final CTA */}
      <StageCTA />
    </>
  )
}
