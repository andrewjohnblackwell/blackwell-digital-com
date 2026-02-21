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
  title: 'AI Growth System — 90-Day Marketing + Operations Integration — Blackwell Digital',
  description:
    'The AI Growth System builds integrated AI-driven marketing and operations infrastructure in 90 days. Systematize lead generation, qualification, and fulfillment.',
  path: '/services/ai-growth-system',
})

const DELIVERABLES = [
  {
    title: 'Marketing Automation System',
    description:
      'Automated lead generation, nurture sequences, and content distribution built on your existing platforms. No new subscriptions required.',
  },
  {
    title: 'Lead Scoring + Routing',
    description:
      'AI-driven scoring model that qualifies leads based on behavior, fit, and intent \u2014 routing hot leads to sales and nurturing the rest automatically.',
  },
  {
    title: 'Operations Workflow Integration',
    description:
      'Connected workflows that move a lead from first touch to closed deal to fulfilled engagement without manual handoffs or data re-entry.',
  },
  {
    title: 'Performance Dashboard',
    description:
      'A single-view dashboard tracking pipeline velocity, conversion rates, marketing ROI, and operational throughput. Built for the metrics that actually matter to your business.',
  },
  {
    title: 'Team Training',
    description:
      'Two structured training sessions to ensure your team can manage, monitor, and adjust the systems we build. Documentation included.',
  },
  {
    title: '30-Day Optimization Period',
    description:
      'After deployment, we monitor performance, adjust scoring models, and optimize workflows based on real data.',
  },
]

const KPIS = [
  { metric: '3.2\u00d7', label: 'average increase in qualified pipeline velocity' },
  { metric: '60%', label: 'reduction in manual lead processing time' },
  { metric: '40%', label: 'improvement in lead-to-close conversion rate' },
  { metric: 'Single-view', label: 'dashboard replacing 4\u20136 disconnected reports' },
  { metric: 'Zero', label: 'manual handoffs between marketing and operations' },
]

const TIMELINE_STEPS = [
  {
    label: 'Weeks 1\u20132: Discovery + Architecture',
    description:
      'We audit your current marketing and operations systems, map data flows, and design the integrated architecture. Strategy call outputs inform scope and priorities.',
  },
  {
    label: 'Weeks 3\u20136: Build + Configure',
    description:
      'Marketing automation, lead scoring, and operations workflows are built and configured in your existing tools. We test every integration before it touches live data.',
  },
  {
    label: 'Weeks 7\u20138: Deploy + Train',
    description:
      'Systems go live. Your team gets structured training sessions with documentation. We\u2019re on standby for questions and adjustments.',
  },
  {
    label: 'Weeks 9\u201312: Optimize + Handoff',
    description:
      'We monitor performance, refine scoring models, and adjust workflows based on real results. Final handoff includes an optimization playbook and clear KPI benchmarks.',
  },
]

const FOR_ITEMS = [
  'You\u2019re doing $3M\u2013$25M in revenue',
  'Your team is 10\u2013150 people',
  'You have a CRM but don\u2019t trust the data in it',
  'Marketing and operations run on separate systems with manual handoffs',
  'You\u2019re ready to invest in infrastructure \u2014 not just another campaign',
]

const NOT_FOR_ITEMS = [
  'You haven\u2019t addressed foundational workflow issues yet (start with the Foundation Sprint)',
  'You need a website redesign before your marketing systems can work (that\u2019s a different engagement)',
  'You\u2019re looking for a one-time campaign, not a system',
]

const FAQ_ITEMS = [
  {
    question: 'Do we need to complete a Foundation Sprint first?',
    answer:
      'Not necessarily. If you already have clarity on your maturity stage and workflows, we can start here. The strategy call helps us determine the right entry point.',
  },
  {
    question: 'What if our CRM data is a mess?',
    answer:
      'That\u2019s common and expected. Data cleanup and normalization are part of the engagement. We won\u2019t build on a broken foundation.',
  },
  {
    question: 'Will this replace our existing tools?',
    answer:
      'No. We build on your existing platforms \u2014 HubSpot, Salesforce, ActiveCampaign, whatever you\u2019re using. The goal is to make your current stack work together, not replace it.',
  },
  {
    question: 'How much involvement does my team need?',
    answer:
      'Plan for 5\u20138 hours of stakeholder time in weeks 1\u20132 (discovery), 3\u20134 hours for training in weeks 7\u20138, and occasional check-ins throughout. We manage the build.',
  },
  {
    question: 'What happens after 90 days?',
    answer:
      'You own the systems. The optimization playbook gives you everything you need to manage them. Many clients transition to a quarterly retainer for ongoing optimization, but it\u2019s not required.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We define KPIs together during discovery \u2014 typically pipeline velocity, conversion rate, lead response time, and manual processing hours eliminated. Everything is tracked in your dashboard from day one.',
  },
]

const CASE_STUDY = {
  label: 'Home Services \u00b7 Multi-Location \u00b7 65 Employees',
  headline:
    'How a Multi-Location Home Services Company Increased Qualified Leads by 3.8\u00d7 in 90 Days',
  body: 'Disconnected marketing, inconsistent lead follow-up, and no visibility into pipeline performance. The AI Growth System unified their marketing and ops \u2014 tripling qualified lead volume without adding a single headcount.',
  cta: 'Read the Full Story',
  href: '/results',
}

export default function AIGrowthSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'AI Growth System',
              description:
                'A 90-day engagement that builds integrated AI systems across marketing and operations \u2014 turning your growth engine from manual to measurable.',
              url: 'https://blackwelldigital.com/services/ai-growth-system',
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
            { label: 'AI Growth System' },
          ]}
        />
        <ServiceHero
          title="AI Growth System: Systematize Growth in 90 Days"
          subtitle="A 90-day engagement that connects your marketing engine to your operations backbone \u2014 building AI-driven systems that generate, qualify, and convert leads without adding headcount."
          detailStrip={[
            { label: '90 Days' },
            { label: 'Marketing + Operations Integration' },
            { label: 'Stage 2\u20133 Businesses' },
          ]}
        />
      </Hero>

      {/* Block 2: Problem Statement */}
      <ProblemStatement
        heading="The Problem This Solves"
        paragraphs={[
          'You\u2019re generating leads, but your pipeline leaks. Marketing hands off contacts that ops can\u2019t track. Your CRM has 4,000 records and no one trusts the data. Sales follow-up is manual, inconsistent, and slow.',
          'Or maybe the opposite: your operations are solid but growth has stalled because your marketing runs on referrals and hope. Either way, the problem is the same \u2014 your growth systems don\u2019t talk to each other, and scaling them means adding people instead of infrastructure.',
          'The AI Growth System connects the dots. In 90 days, you\u2019ll have an integrated system that generates leads, scores and routes them automatically, and tracks outcomes end-to-end \u2014 across marketing and operations.',
        ]}
      />

      {/* Block 3: Deliverables */}
      <DeliverablesList heading="What You Get" items={DELIVERABLES} />

      {/* Block 4: KPIs */}
      <KPIGrid
        heading="What Clients Measure After the AI Growth System"
        items={KPIS}
      />

      {/* Block 5: Timeline */}
      <Timeline heading="How the 90 Days Break Down" steps={TIMELINE_STEPS} />

      {/* Block 6: Ideal Client */}
      <IdealClientProfile
        heading="Who This Is For"
        forItems={FOR_ITEMS}
        notForItems={NOT_FOR_ITEMS}
      />

      {/* Block 7: Investment */}
      <InvestmentBlock
        heading="Investment"
        body="AI Growth System pricing is scoped during your strategy call because the number of systems, integrations, and workflows varies by business. What stays constant: you get an integrated marketing + operations system, a live dashboard, team training, and 30 days of post-launch optimization."
      />

      {/* Block 8: Case Study */}
      <CaseStudyCard
        heading="AI Growth System in Action"
        study={CASE_STUDY}
      />

      {/* Block 9: FAQ */}
      <ServiceFAQ
        heading="Common Questions About the AI Growth System"
        items={FAQ_ITEMS}
      />

      {/* Block 10: CTA */}
      <ServiceCTA heading="Ready to Build a Growth Engine That Runs Without You?" />
    </>
  )
}
