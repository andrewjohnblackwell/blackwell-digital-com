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
  title: 'Foundation Sprint — 4-Week AI Assessment + Implementation — Blackwell Digital',
  description:
    'The Foundation Sprint is a 4-week engagement that maps your AI maturity, identifies high-ROI automation opportunities, and delivers your first working AI workflows.',
  path: '/services/foundation-sprint',
})

const DELIVERABLES = [
  {
    title: 'AI Maturity Assessment',
    description:
      'A detailed evaluation of your operations, marketing, and digital systems against our four-stage maturity framework. You\u2019ll know exactly where you stand and why.',
  },
  {
    title: 'Workflow Audit',
    description:
      'We map your top 10\u201315 workflows and identify the 3\u20135 with the highest automation ROI based on time cost, error rate, and business impact.',
  },
  {
    title: '2\u20133 Implemented Automations',
    description:
      'Not recommendations. Working automations deployed in your existing tools \u2014 saving measurable hours from week one.',
  },
  {
    title: 'Prioritized Roadmap',
    description:
      'A 90-day action plan showing what to tackle next, in what order, with expected ROI for each initiative. This becomes your playbook whether you continue with us or execute internally.',
  },
  {
    title: 'Executive Summary',
    description:
      'A board-ready document summarizing findings, completed work, and recommended next steps. Built for the person who has to explain this to stakeholders.',
  },
]

const KPIS = [
  { metric: '15\u201325 hrs/wk', label: 'reclaimed from manual processes in the first 30 days' },
  { metric: '3\u20135', label: 'high-ROI opportunities identified and prioritized' },
  { metric: '2\u20133', label: 'automations live and running before the engagement ends' },
  { metric: '100%', label: 'clarity on maturity stage, gaps, and next steps' },
]

const TIMELINE_STEPS = [
  {
    label: 'Week 1: Discovery + Assessment',
    description:
      'Stakeholder interviews, systems audit, and AI maturity evaluation. We map your current state across operations, marketing, and digital.',
  },
  {
    label: 'Week 2: Workflow Mapping + Prioritization',
    description:
      'We document your key workflows, score them for automation potential, and select the 2\u20133 highest-ROI candidates.',
  },
  {
    label: 'Week 3: Implementation',
    description:
      'We build and deploy your first automations in your existing tools. No new platforms. No rip-and-replace.',
  },
  {
    label: 'Week 4: Documentation + Handoff',
    description:
      'Executive summary, prioritized roadmap, and team walkthroughs. You leave with everything documented and a clear plan forward.',
  },
]

const FOR_ITEMS = [
  'You\u2019re doing $1M\u2013$15M in revenue and growing',
  'Your team is 5\u201375 people',
  'You suspect AI can help but don\u2019t know where to start',
  'You want to see results before committing to a larger engagement',
  'You need a clear, documented plan you can take to your leadership team',
]

const NOT_FOR_ITEMS = [
  'You want a year-long consulting engagement before anything gets implemented',
  'You\u2019re looking for someone to build a chatbot',
  'Your company has fewer than 5 employees (the ROI math doesn\u2019t work yet)',
  'You\u2019re not willing to invest time in the discovery process',
]

const FAQ_ITEMS = [
  {
    question: 'How is this different from a consulting audit?',
    answer:
      'Most audits deliver a PDF and a handshake. The Foundation Sprint delivers a PDF, a roadmap, and 2\u20133 working automations running in your systems before we wrap up. Assessment plus implementation, not assessment instead of it.',
  },
  {
    question: 'What tools or platforms do you work with?',
    answer:
      'We work with your existing tools \u2014 CRMs, project management platforms, accounting systems, marketing tools. The Foundation Sprint isn\u2019t about adding new software. It\u2019s about making what you already have work harder.',
  },
  {
    question: 'How much time does my team need to invest?',
    answer:
      'Expect 3\u20135 hours of stakeholder time in Week 1 (interviews and access setup) and 1\u20132 hours in Week 4 (walkthroughs). We do the heavy lifting.',
  },
  {
    question: 'What happens after the Foundation Sprint?',
    answer:
      'You own everything we build and document. The roadmap includes recommendations you can execute internally or with us. Most clients move to the AI Growth System, but there\u2019s no obligation.',
  },
  {
    question: 'Can we start with the QuickScan first?',
    answer:
      'Absolutely. The QuickScan gives you a preview of your maturity stage in 10 minutes. It\u2019s a great way to validate whether the Foundation Sprint is the right entry point before booking a call.',
  },
  {
    question: 'What if we\u2019re not sure we need AI yet?',
    answer:
      'If you have a team of 5+ and you\u2019re doing more than $1M in revenue, you\u2019re already using systems that AI can improve. The Foundation Sprint exists specifically to answer the \u201cdo we need this?\u201d question \u2014 with data, not guesswork.',
  },
]

const CASE_STUDY = {
  label: 'Professional Services \u00b7 18 Employees',
  headline: 'How a Professional Services Firm Reclaimed 22 Hours/Week in 4 Weeks',
  body: 'Manual client onboarding, fragmented project tracking, and ad-hoc reporting were consuming the team. The Foundation Sprint identified 5 high-ROI workflows and automated 3 \u2014 saving 22 hours/week before the engagement ended.',
  cta: 'Read the Full Story',
  href: '/results',
}

export default function FoundationSprintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Foundation Sprint',
              description:
                'A 4-week AI assessment and implementation sprint that maps your current state, identifies high-ROI automation opportunities, and delivers your first working AI workflows.',
              url: 'https://blackwelldigital.com/services/foundation-sprint',
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
            { label: 'Foundation Sprint' },
          ]}
        />
        <ServiceHero
          title="Foundation Sprint: Clarity and Quick Wins in 4 Weeks"
          subtitle="A structured 4-week engagement that assesses your AI maturity, identifies the workflows costing you the most time and money, and implements your first AI-powered automations \u2014 so you see results before the invoice lands."
          detailStrip={[
            { label: '4 Weeks' },
            { label: 'Assessment + Implementation' },
            { label: 'Stage 1\u20132 Businesses' },
          ]}
        />
      </Hero>

      {/* Block 2: Problem Statement */}
      <ProblemStatement
        heading="The Problem This Solves"
        paragraphs={[
          'You know AI can help your business. You\u2019ve read the articles, sat through the webinars, maybe even tried a tool or two. But you still don\u2019t have a clear picture of where to start, what to prioritize, or what \u201cgood\u201d actually looks like for a company your size.',
          'Meanwhile, your team is spending 15\u201325 hours per week on tasks that should take minutes. Your customer data lives in three different places. Your marketing runs on manual outreach and hope.',
          'The Foundation Sprint fixes the clarity problem first \u2014 then proves the value with real implementations you can measure.',
        ]}
      />

      {/* Block 3: Deliverables */}
      <DeliverablesList heading="What You Get" items={DELIVERABLES} />

      {/* Block 4: KPIs */}
      <KPIGrid
        heading="What Clients Measure After a Foundation Sprint"
        items={KPIS}
      />

      {/* Block 5: Timeline */}
      <Timeline heading="How the 4 Weeks Break Down" steps={TIMELINE_STEPS} />

      {/* Block 6: Ideal Client */}
      <IdealClientProfile
        heading="Who This Is For"
        forItems={FOR_ITEMS}
        notForItems={NOT_FOR_ITEMS}
      />

      {/* Block 7: Investment */}
      <InvestmentBlock
        heading="Investment"
        body="Foundation Sprint pricing is discussed on your strategy call because scope varies by company complexity, number of locations, and systems in play. What doesn\u2019t vary: every Sprint includes the full assessment, 2\u20133 live automations, and a documented roadmap. We respect your time. You\u2019ll know the investment before you commit."
      />

      {/* Block 8: Case Study */}
      <CaseStudyCard
        heading="Foundation Sprint in Action"
        study={CASE_STUDY}
      />

      {/* Block 9: FAQ */}
      <ServiceFAQ
        heading="Common Questions About the Foundation Sprint"
        items={FAQ_ITEMS}
      />

      {/* Block 10: CTA */}
      <ServiceCTA
        heading="Ready to Get Clear on What AI Can Do for Your Business?"
        body="The strategy call is 30 minutes. We\u2019ll review your situation, answer your questions, and tell you honestly whether the Foundation Sprint is the right fit. No pitch deck. No pressure."
      />
    </>
  )
}
