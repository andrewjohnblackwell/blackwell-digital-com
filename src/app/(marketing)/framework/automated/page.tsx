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
  title: 'AI Maturity Stage 3: Automated \u2014 Blackwell Digital',
  description:
    'Automated is stage 3 of the AI Maturity Framework. Learn the characteristics, business symptoms, and recommended actions for businesses at this stage.',
  path: '/framework/automated',
})

const CHARACTERISTICS = [
  'Key workflows run automatically with minimal human intervention',
  'Marketing and operations share data and systems \u2014 no more silos',
  'Lead generation, scoring, and routing are systematized and measurable',
  'Reporting is real-time and trusted by leadership for decision-making',
  'Your team focuses on exceptions and judgment calls, not process execution',
]

const SYMPTOMS = [
  'Growth doesn\u2019t require proportional headcount increases \u2014 your systems create leverage',
  'New initiatives can be launched in days, not months, because the infrastructure supports iteration',
  'You can measure ROI on individual workflows and campaigns with confidence',
  'The business runs when you\u2019re not in the building \u2014 systems don\u2019t depend on any single person',
]

const INSIGHT_CARDS = [
  {
    category: 'Strategy',
    title: 'From Automated to Autonomous: The Next Frontier for SMBs',
    href: '/insights',
  },
  {
    category: 'Operations',
    title: 'Building the Command Center: Unified Dashboards for AI-Driven Businesses',
    href: '/insights',
  },
  {
    category: 'AI Maturity',
    title: 'What Stage 3 Companies Do Differently \u2014 And What It Means for ROI',
    href: '/insights',
  },
]

export default function AutomatedStagePage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Framework', href: '/framework' },
            { label: 'Stage 3: Automated' },
          ]}
        />
        <StageHero
          stageNumber={3}
          title="Stage 3: Automated"
          subtitle="Your systems run themselves. Your team focuses on strategy and judgment calls while automated workflows handle execution."
        />
      </Hero>

      {/* Block 2: Characteristics */}
      <CharacteristicsList
        heading="What Stage 3 Looks Like"
        items={CHARACTERISTICS}
      />

      {/* Block 3: Symptoms */}
      <SymptomsList items={SYMPTOMS} />

      {/* Block 4: What Good Looks Like */}
      <WhatGoodLooksLike
        stageNumber={3}
        paragraphs={[
          'You\u2019ve built real leverage. Your business can grow without proportionally scaling headcount. Systems handle execution while your team handles strategy.',
          'The question now is: how far can this go? Stage 3 is a strong position \u2014 uncommon for SMBs and a genuine competitive advantage. But there\u2019s still room to push further.',
          'The opportunity at this stage is expanding automated infrastructure to every function and building the unified command center that turns your business into an adaptive, data-driven organism that improves over time.',
        ]}
      />

      {/* Block 5: Recommended Actions */}
      <RecommendedActions
        description="Based on your stage, the recommended next step is the AI-First Operating System. Here\u2019s why:"
        bullets={[
          'Expands automated infrastructure beyond marketing and operations to every business function',
          'Builds a unified command center with cross-functional intelligence and predictive capabilities',
          'Positions your business for Stage 4 \u2014 where AI systems adapt and improve autonomously',
        ]}
        ctaLabel="Learn About the AI-First OS"
        ctaHref="/services/ai-first-operating-system"
      />

      {/* Block 6: Related Insights */}
      <RelatedInsights cards={INSIGHT_CARDS} />

      {/* Block 7: Final CTA */}
      <StageCTA />
    </>
  )
}
