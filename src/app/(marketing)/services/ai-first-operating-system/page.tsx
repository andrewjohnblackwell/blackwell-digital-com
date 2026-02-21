import { Hero } from '@/components/sections/hero'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'
import {
  ServiceHero,
  ProblemStatement,
  DeliverablesList,
  KPIGrid,
  Timeline,
  IdealClientProfile,
  InvestmentBlock,
  CaseStudyCard,
  ServiceFAQ,
  ServiceCTA,
} from '@/components/sections/service-page'

export const metadata = createMetadata({
  title: 'AI-First Operating System — 6-Month Business Transformation — Blackwell Digital',
  description:
    'The AI-First Operating System is a 6-month engagement that rewires your business operations, marketing, and digital infrastructure into a unified, AI-driven system.',
  path: '/services/ai-first-operating-system',
})

const DELIVERABLES = [
  {
    title: 'Full Operational Audit',
    description:
      'Comprehensive assessment of every major workflow, system, and data flow across operations, marketing, and digital. Nothing is assumed.',
  },
  {
    title: 'Cross-Functional AI Architecture',
    description:
      'A unified system design that connects operations, marketing, sales, and fulfillment into a single AI-driven infrastructure. Built on your existing platforms where possible, with strategic additions where necessary.',
  },
  {
    title: 'Phased Implementation',
    description:
      'Automations, integrations, and workflows deployed in priority order across all three dimensions \u2014 operations, marketing, and digital. Each phase is scoped, tested, and measured before moving to the next.',
  },
  {
    title: 'Custom Integrations',
    description:
      'Where your tools don\u2019t natively connect, we build the bridges. API integrations, data pipelines, and automation connectors tailored to your stack.',
  },
  {
    title: 'Organization-Wide Training',
    description:
      'Multiple training sessions across teams \u2014 not just leadership. Your ops team, marketing team, and front-line staff all learn how to use and manage the new systems.',
  },
  {
    title: 'Performance Command Center',
    description:
      'A unified dashboard tracking cross-functional KPIs: operational efficiency, marketing ROI, customer lifecycle metrics, and financial performance.',
  },
  {
    title: 'Ongoing Optimization Framework',
    description:
      'A documented playbook for continuous improvement, including quarterly review cadence, KPI benchmarks, and escalation protocols. Quarterly retainer available for hands-on optimization.',
  },
]

const KPIS = [
  { metric: '$240K+', label: 'average annual operational savings identified and captured' },
  { metric: '47%', label: 'reduction in manual processing time across core workflows' },
  { metric: 'Single-source', label: 'performance visibility replacing 6\u201310 disconnected dashboards' },
  { metric: '85%+', label: 'workflow automation coverage across operations, marketing, and fulfillment' },
  { metric: '3\u20135 FTE', label: 'equivalent capacity reclaimed without layoffs \u2014 redeployed to growth work' },
]

const TIMELINE_STEPS = [
  {
    label: 'Month 1: Discovery + Architecture',
    description:
      'Full operational audit. Stakeholder interviews. Systems mapping. AI maturity reassessment (or initial assessment if new). Unified architecture design and phased implementation plan.',
  },
  {
    label: 'Months 2\u20133: Operations Infrastructure',
    description:
      'Core operational workflows automated. Internal data flows connected. Reporting infrastructure deployed. Operations team training.',
  },
  {
    label: 'Month 4: Marketing + Growth Systems',
    description:
      'Marketing automation, lead infrastructure, and campaign systems built and integrated with operations. Marketing team training.',
  },
  {
    label: 'Month 5: Digital + Integration',
    description:
      'Digital presence systems optimized and connected. Custom integrations deployed. Cross-functional testing. Full-stack validation.',
  },
  {
    label: 'Month 6: Optimization + Handoff',
    description:
      'Performance Command Center finalized. Organization-wide training completed. Optimization playbook delivered. Quarterly retainer scoped (if applicable).',
  },
]

const FOR_ITEMS = [
  'You\u2019re doing $5M\u2013$25M in revenue with 25\u2013150 employees',
  'You have multiple departments running on disconnected systems',
  'You\u2019ve outgrown your current infrastructure and adding people isn\u2019t solving it',
  'Leadership is aligned on the need for a systems-level transformation',
  'You\u2019re willing to invest 6 months of focus and resources to build the foundation for your next growth phase',
]

const NOT_FOR_ITEMS = [
  'You\u2019re looking for a quick fix or a single department solution (start with the Foundation Sprint or AI Growth System)',
  'Your leadership team isn\u2019t aligned on the need for transformation',
  'You\u2019re not willing to dedicate internal resources to the discovery and training process',
]

const FAQ_ITEMS = [
  {
    question: 'Is this just a bigger version of the AI Growth System?',
    answer:
      'No. The AI Growth System focuses on marketing and operations integration. The AI-First Operating System is a full business transformation \u2014 covering operations, marketing, digital, and the integrations between all three. It also includes custom integrations, organization-wide training, and an ongoing optimization framework.',
  },
  {
    question: 'Do we need to do the Foundation Sprint or AI Growth System first?',
    answer:
      'Not necessarily, but many clients do. The Foundation Sprint gives you clarity, the AI Growth System builds your first integrated systems, and the AI-First Operating System expands that to every function. Your strategy call will determine the right starting point.',
  },
  {
    question: 'How much disruption should we expect?',
    answer:
      'The phased approach is specifically designed to minimize disruption. We implement by function, validate before moving on, and train teams as we go. Most clients experience improvement in daily workflows starting in Month 2.',
  },
  {
    question: 'What does the quarterly retainer include?',
    answer:
      'Performance reviews, KPI tracking, system optimization, and strategic recommendations. It\u2019s designed for companies that want ongoing AI expertise without hiring a full-time AI team.',
  },
  {
    question: 'Can this work for a multi-location business?',
    answer:
      'Yes. Multi-location businesses are often the best fit because the ROI multiplies with every location. We design systems that work consistently across locations while accommodating local variations.',
  },
  {
    question: 'What if we\u2019ve already tried AI tools and they didn\u2019t work?',
    answer:
      'Tools don\u2019t fail \u2014 implementations fail. Most businesses adopt AI tools without a system design. The AI-First Operating System starts with architecture, not features. That\u2019s why it works when individual tools haven\u2019t.',
  },
]

const CASE_STUDY = {
  label: 'Manufacturing \u00b7 Distribution \u00b7 40 Employees',
  headline:
    'How a 40-Person Distribution Company Cut Order Processing Time by 52% and Saved $310K/Year',
  body: 'Manual order routing, disconnected inventory systems, and zero marketing automation. The AI-First Operating System unified operations and marketing into a single infrastructure \u2014 cutting processing time in half and generating $310K in annual savings.',
  cta: 'Read the Full Story',
  href: '/results',
}

export default function AIFirstOperatingSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'AI-First Operating System',
              description:
                'A 6-month transformation that rewires your business infrastructure \u2014 operations, marketing, and digital \u2014 into a unified AI-driven operating system.',
              url: 'https://blackwelldigital.com/services/ai-first-operating-system',
            })
          ),
        }}
      />

      {/* Block 1: Hero */}
      <Hero variant="interior">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'AI-First Operating System' },
          ]}
        />
        <ServiceHero
          title="AI-First Operating System: Rewire Your Business in 6 Months"
          subtitle="A comprehensive 6-month transformation that unifies your operations, marketing, and digital infrastructure into a single AI-driven operating system \u2014 designed to scale without adding complexity."
          detailStrip={[
            { label: '6 Months' },
            { label: 'Full Business Transformation' },
            { label: 'Stage 2\u20133 Businesses' },
          ]}
        />
      </Hero>

      {/* Block 2: Problem Statement */}
      <ProblemStatement
        heading="The Problem This Solves"
        paragraphs={[
          'You\u2019ve grown. Your team has grown. Your tools have grown. But none of them grew together.',
          'Operations runs on one set of systems. Marketing runs on another. Digital is a third silo. Data lives everywhere and nowhere. Every new initiative requires stitching together tools, people, and processes by hand \u2014 and it\u2019s getting harder, not easier.',
          'This isn\u2019t a tool problem. It\u2019s an architecture problem. The AI-First Operating System replaces the patchwork with a unified system \u2014 one that connects every function, automates the repeatable work, and gives your leadership team a single view of business performance.',
          'This is the engagement for companies that are done with incremental fixes and ready for the infrastructure that defines their next $10M.',
        ]}
      />

      {/* Block 3: Deliverables */}
      <DeliverablesList heading="What You Get" items={DELIVERABLES} />

      {/* Block 4: KPIs */}
      <KPIGrid
        heading="What Clients Measure After the AI-First Operating System"
        items={KPIS}
      />

      {/* Block 5: Timeline */}
      <Timeline heading="How the 6 Months Break Down" steps={TIMELINE_STEPS} />

      {/* Block 6: Ideal Client */}
      <IdealClientProfile
        heading="Who This Is For"
        forItems={FOR_ITEMS}
        notForItems={NOT_FOR_ITEMS}
      />

      {/* Block 7: Investment */}
      <InvestmentBlock
        heading="Investment"
        body="The AI-First Operating System is our most comprehensive engagement. Investment is scoped during a strategy call based on company size, number of systems, integration complexity, and transformation goals. Expect an investment that reflects the scope \u2014 this is the engagement that defines your next operating model."
      />

      {/* Block 8: Case Study */}
      <CaseStudyCard
        heading="AI-First Operating System in Action"
        study={CASE_STUDY}
      />

      {/* Block 9: FAQ */}
      <ServiceFAQ
        heading="Common Questions About the AI-First Operating System"
        items={FAQ_ITEMS}
      />

      {/* Block 10: CTA */}
      <ServiceCTA heading="Ready to Build the Operating System Your Business Deserves?" />
    </>
  )
}
