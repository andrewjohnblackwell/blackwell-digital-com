import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ComparisonTable } from '@/components/sections/comparison-table'
import type { ComparisonRow } from '@/components/sections/comparison-table'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'AI Transformation Services for SMBs — Blackwell Digital',
  description:
    'Three structured service tiers for businesses ready to implement AI — from a 4-week Foundation Sprint to a full AI-First Operating System. See which fits your stage.',
  path: '/services',
})

const TIERS = [
  {
    step: 1,
    name: 'Foundation Sprint',
    outcome:
      'Map your current state and implement your first AI-powered workflows in 4 weeks.',
    timeline: '4 weeks',
    idealFor:
      'Businesses at Stage 1–2 who need clarity and quick wins before committing to a larger engagement.',
    deliverables:
      'AI maturity assessment, workflow audit, 2–3 implemented automations, prioritized roadmap',
    href: '/services/foundation-sprint',
  },
  {
    step: 2,
    name: 'AI Growth System',
    outcome:
      'Build integrated AI systems across marketing and operations that generate and convert leads without adding headcount.',
    timeline: '90 days',
    idealFor:
      'Businesses at Stage 2–3 ready to systematize growth and eliminate manual bottlenecks across departments.',
    deliverables:
      'Marketing automation system, lead scoring and routing, operations workflow integration, performance dashboard, team training',
    href: '/services/ai-growth-system',
  },
  {
    step: 3,
    name: 'AI-First Operating System',
    outcome:
      'Rewire your business infrastructure into a unified, AI-driven operating system across operations, marketing, and digital.',
    timeline: '6 months',
    idealFor:
      'Businesses at Stage 2–3 committed to a full transformation — ready to invest in the systems that will define their next phase of growth.',
    deliverables:
      'Full operational audit, cross-functional AI implementation, custom integrations, org-wide training, ongoing optimization framework',
    href: '/services/ai-first-operating-system',
  },
] as const

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: 'Duration',
    cells: ['4 weeks', '90 days', '6 months'],
  },
  {
    label: 'Focus',
    cells: [
      'Assessment + quick wins',
      'Marketing + operations integration',
      'Full business transformation',
    ],
  },
  {
    label: 'Deliverables',
    cells: [
      'Maturity audit, 2–3 automations, roadmap',
      'Marketing system, lead infrastructure, ops workflows',
      'Cross-functional AI infrastructure, custom integrations, training',
    ],
  },
  {
    label: 'Ideal Maturity Stage',
    cells: ['Stage 1–2', 'Stage 2–3', 'Stage 2–3'],
  },
  {
    label: 'Best For',
    cells: [
      'Clarity seekers; first-time AI adopters',
      'Growth-focused operators ready to systematize',
      'Companies committed to an AI-first operating model',
    ],
  },
  {
    label: 'Ongoing Support',
    cells: [
      'Roadmap handoff',
      '30-day optimization period',
      'Quarterly optimization retainer available',
    ],
  },
  {
    label: 'Investment',
    cells: [
      'Discussed on strategy call',
      'Discussed on strategy call',
      'Discussed on strategy call',
    ],
  },
]

const PROCESS_STEPS = [
  {
    step: 1,
    label: 'Discovery',
    description:
      'We start with a strategy call to understand your goals, pain points, and current state. If you\u2019ve taken the QuickScan, we\u2019ll use your results as a starting point.',
  },
  {
    step: 2,
    label: 'Assessment',
    description:
      'We conduct a structured assessment of your operations, marketing, and digital presence \u2014 identifying the highest-ROI opportunities based on your maturity stage.',
  },
  {
    step: 3,
    label: 'Implementation',
    description:
      'We build and deploy the systems, workflows, and automations scoped for your engagement tier. Everything is documented, tested, and tied to measurable KPIs.',
  },
  {
    step: 4,
    label: 'Optimization',
    description:
      'We measure results against your KPIs, refine what\u2019s working, and hand off a clear playbook for ongoing management \u2014 or transition into a retainer for continued optimization.',
  },
] as const

export default function ServicesOverviewPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-electric-500 mb-4">
          Services
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.75rem] font-bold text-fg-primary tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
          Structured AI Engagements. Measurable Outcomes.
        </h1>
        <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
          We don&apos;t sell hours. We sell outcomes &mdash; scoped into three
          service tiers designed to meet your business where it is and move it
          where it needs to go. Every engagement includes clear deliverables,
          timelines, and KPIs.
        </p>
      </Hero>

      {/* Block 2: Offer Ladder */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-4">
            One Path. Three Entry Points.
          </h2>
          <p className="text-fg-secondary text-base md:text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Most businesses don&apos;t need a twelve-month transformation plan.
            They need the right intervention at the right stage. Our offer ladder
            gives you a clear entry point based on your AI maturity, your goals,
            and your appetite for change.
          </p>
        </ScrollReveal>

        {/* Visual progression */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
          {TIERS.map((tier, i) => (
            <ScrollReveal
              key={tier.name}
              delay={i * 0.1}
              className="flex-1"
            >
              <div className="relative h-full flex flex-col items-center text-center bg-bg-elevated border border-border rounded-2xl p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-medium mb-4">
                  {tier.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-fg-primary mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-fg-tertiary mb-3">{tier.timeline}</p>
                <p className="text-sm text-fg-secondary leading-relaxed">
                  {tier.outcome}
                </p>
                {/* Connector arrow (hidden on last) */}
                {i < TIERS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary/40">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 3: Service Tier Cards */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08}>
              <Card variant="feature" className="h-full flex flex-col">
                <CardContent className="flex flex-col flex-1">
                  <Badge variant="primary" size="sm" className="mb-4 w-fit">
                    Tier {tier.step}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold text-fg-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-fg-tertiary mb-3">
                    {tier.timeline}
                  </p>
                  <p className="text-fg-secondary text-sm leading-relaxed mb-4">
                    {tier.outcome}
                  </p>
                  <p className="text-xs text-fg-tertiary mb-2">
                    <span className="font-medium text-fg-secondary">
                      Ideal for:
                    </span>{' '}
                    {tier.idealFor}
                  </p>
                  <p className="text-xs text-fg-tertiary mb-6">
                    <span className="font-medium text-fg-secondary">
                      Deliverables:
                    </span>{' '}
                    {tier.deliverables}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={tier.href}
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      View Full Details
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 4: Comparison Table */}
      <SectionContainer>
        <ScrollReveal>
          <ComparisonTable
            heading="Side-by-Side: Which Tier Fits?"
            columns={['Foundation Sprint', 'AI Growth System', 'AI-First Operating System']}
            rows={COMPARISON_ROWS}
            recommendedIndex={1}
          />
        </ScrollReveal>
      </SectionContainer>

      {/* Block 5: Engagement Process */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            How Every Engagement Works
          </h2>
        </ScrollReveal>
        <div className="relative">
          <div
            className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20"
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.08}>
                <li className="relative pl-12">
                  <div
                    className="absolute left-0 top-0.5 flex h-[31px] w-[31px] items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-medium"
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-fg-primary mb-1">
                    {step.label}
                  </h3>
                  <p className="text-fg-secondary text-base leading-relaxed">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </SectionContainer>

      {/* Block 6: CTA */}
      <SectionContainer padding="lg">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-6">
            Not Sure Which Tier Fits?
          </h2>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            The QuickScan gives you a maturity score and a recommendation in
            under 10 minutes. Or, if you&apos;d rather talk it through, book a
            30-minute strategy call and we&apos;ll map it out together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/quickscan"
              className={buttonVariants({ variant: 'accent', size: 'lg' })}
            >
              Take the QuickScan
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
              })}
            >
              Book a Strategy Call
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
