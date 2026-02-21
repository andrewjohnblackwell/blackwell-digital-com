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
  title: 'AI Maturity Stage 1: Manual \u2014 Blackwell Digital',
  description:
    'Manual is stage 1 of the AI Maturity Framework. Learn the characteristics, business symptoms, and recommended actions for businesses at this stage.',
  path: '/framework/manual',
})

const CHARACTERISTICS = [
  'Most workflows depend on individual effort and tribal knowledge',
  'Spreadsheets, email threads, and manual data entry dominate day-to-day operations',
  'No marketing automation \u2014 growth depends on referrals and personal networks',
  'Your website is a digital brochure, not a business system that generates and captures demand',
  'Reporting is ad hoc and backward-looking \u2014 you\u2019re making decisions on gut feel, not data',
]

const SYMPTOMS = [
  'Your best employee leaving would break critical processes \u2014 because they\u2019re the process',
  'Onboarding new staff takes months, not weeks, because nothing is documented or systematized',
  'You can\u2019t answer \u201cwhat\u2019s our customer acquisition cost?\u201d without digging through three systems and a spreadsheet',
  'Growth requires adding headcount proportionally \u2014 you can\u2019t scale without scaling people',
]

const INSIGHT_CARDS = [
  {
    category: 'AI Maturity',
    title: 'What Is AI Maturity \u2014 And Why Should a $5M Business Care?',
    href: '/insights',
  },
  {
    category: 'Operations',
    title: 'The 5 Workflows Every Growing Business Should Automate First',
    href: '/insights',
  },
  {
    category: 'Getting Started',
    title: 'Your First 30 Days of AI: A Practical Guide for Business Owners',
    href: '/insights',
  },
]

export default function ManualStagePage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Framework', href: '/framework' },
            { label: 'Stage 1: Manual' },
          ]}
        />
        <StageHero
          stageNumber={1}
          title="Stage 1: Manual"
          subtitle="Your business runs on individual effort and tribal knowledge. Work gets done, but nothing scales without adding more people."
        />
      </Hero>

      {/* Block 2: Characteristics */}
      <CharacteristicsList
        heading="What Stage 1 Looks Like"
        items={CHARACTERISTICS}
      />

      {/* Block 3: Symptoms */}
      <SymptomsList items={SYMPTOMS} />

      {/* Block 4: What Good Looks Like */}
      <WhatGoodLooksLike
        stageNumber={1}
        paragraphs={[
          'You\u2019re getting work done, and the business is generating revenue. That\u2019s not nothing. Many successful businesses operate at this stage for years.',
          'The risk: you\u2019re building on a foundation that doesn\u2019t scale. Every new customer, every new hire, every new initiative adds complexity that your current systems can\u2019t absorb efficiently. The gap between where you are and where you need to be widens every quarter.',
          'The opportunity: Stage 1 businesses often see the fastest ROI from AI and automation because there\u2019s so much low-hanging fruit. The first wins come quickly and compound from there.',
        ]}
      />

      {/* Block 5: Recommended Actions */}
      <RecommendedActions
        description="Based on your stage, the recommended starting point is the Foundation Sprint. Here\u2019s why:"
        bullets={[
          'Identifies the 3\u20135 highest-ROI automation opportunities in your current workflows',
          'Delivers 2\u20133 working AI automations in your existing tools within 4 weeks',
          'Gives you a documented roadmap for moving from Stage 1 to Stage 2',
        ]}
        ctaLabel="Learn About the Foundation Sprint"
        ctaHref="/services/foundation-sprint"
      />

      {/* Block 6: Related Insights */}
      <RelatedInsights cards={INSIGHT_CARDS} />

      {/* Block 7: Final CTA */}
      <StageCTA />
    </>
  )
}
