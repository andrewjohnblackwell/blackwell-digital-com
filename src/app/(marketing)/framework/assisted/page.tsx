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
  title: 'AI Maturity Stage 2: Assisted \u2014 Blackwell Digital',
  description:
    'Assisted is stage 2 of the AI Maturity Framework. Learn the characteristics, business symptoms, and recommended actions for businesses at this stage.',
  path: '/framework/assisted',
})

const CHARACTERISTICS = [
  'Some tools are in place \u2014 a CRM, project management software, maybe basic email marketing',
  'These tools operate in silos; data doesn\u2019t flow between them',
  'Some processes have templates or checklists, but execution is still manual',
  'Marketing generates some leads, but follow-up is inconsistent and untracked',
  'There\u2019s awareness that \u201cAI could help\u201d but no clear plan for where or how',
]

const SYMPTOMS = [
  'Your CRM has thousands of records but no one trusts the data \u2014 duplicates, missing fields, outdated contacts',
  'Your marketing team and operations team use different tools, different metrics, and different definitions of \u201cqualified\u201d',
  'You\u2019ve tried automating a few things, but they broke or got abandoned within weeks',
  'Scaling still means hiring; the systems don\u2019t create leverage on their own',
]

const INSIGHT_CARDS = [
  {
    category: 'Digital Transformation',
    title: 'Stage 2 Is Where Most Businesses Get Stuck. Here\u2019s Why.',
    href: '/insights',
  },
  {
    category: 'Operations',
    title: 'The 5 Workflows Every Growing Business Should Automate First',
    href: '/insights',
  },
  {
    category: 'Strategy',
    title: 'Connected Systems vs. More Tools: Why Architecture Beats Features',
    href: '/insights',
  },
]

export default function AssistedStagePage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Framework', href: '/framework' },
            { label: 'Stage 2: Assisted' },
          ]}
        />
        <StageHero
          stageNumber={2}
          title="Stage 2: Assisted"
          subtitle="You have tools in place, but they operate in silos. The raw materials exist \u2014 what\u2019s missing is the architecture to connect them."
        />
      </Hero>

      {/* Block 2: Characteristics */}
      <CharacteristicsList
        heading="What Stage 2 Looks Like"
        items={CHARACTERISTICS}
      />

      {/* Block 3: Symptoms */}
      <SymptomsList items={SYMPTOMS} />

      {/* Block 4: What Good Looks Like */}
      <WhatGoodLooksLike
        stageNumber={2}
        paragraphs={[
          'You\u2019ve built the raw materials. The tools exist. The data exists. What\u2019s missing is the architecture to connect them into systems that create real leverage.',
          'Stage 2 is where most businesses in the $1M\u2013$25M range sit \u2014 and it\u2019s where most get stuck. The tools feel like progress, but without integration, they create as many problems as they solve.',
          'The good news: you\u2019re closer than you think. The foundation is there. The next step isn\u2019t buying more tools \u2014 it\u2019s connecting the ones you already have into integrated, AI-driven systems.',
        ]}
      />

      {/* Block 5: Recommended Actions */}
      <RecommendedActions
        description="Based on your stage, the recommended next step is the AI Growth System. Here\u2019s why:"
        bullets={[
          'Connects your existing tools into integrated, AI-driven systems across marketing and operations',
          'Eliminates data silos by building automated workflows that move information where it needs to go',
          'Delivers measurable results within 90 days \u2014 not a roadmap, but working systems',
        ]}
        ctaLabel="Learn About the AI Growth System"
        ctaHref="/services/ai-growth-system"
      />

      {/* Block 6: Related Insights */}
      <RelatedInsights cards={INSIGHT_CARDS} />

      {/* Block 7: Final CTA */}
      <StageCTA />
    </>
  )
}
