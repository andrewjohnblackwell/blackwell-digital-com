import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'

export const metadata = createMetadata({
  title: 'AI Maturity QuickScan — Free Business Assessment',
  description:
    'Take the free AI Maturity QuickScan to score your business across operations, marketing, and digital. Get your personalized maturity stage and action plan in under 10 minutes.',
  path: '/quickscan',
})

const BENEFITS = [
  {
    title: 'Your AI Maturity Stage',
    body: 'A clear 1-to-4 score that tells you whether your business is Manual, Assisted, Automated, or Autonomous.',
  },
  {
    title: 'Dimension-Level Breakdown',
    body: 'Separate scores for operations, marketing, and digital so you know exactly where the gaps are.',
  },
  {
    title: 'Personalized Recommendations',
    body: 'Specific next steps mapped to your score, your industry, and your company size.',
  },
  {
    title: 'A Clear Starting Point',
    body: 'Whether you need a Foundation Sprint, a Growth System, or a full Operating System transformation, you\u2019ll know which path fits.',
  },
]

const STEPS = [
  {
    number: '1',
    label: 'Answer 10 Questions',
    body: 'Straightforward questions about how your business currently handles operations, marketing, and digital. No technical knowledge required.',
  },
  {
    number: '2',
    label: 'Receive Your Maturity Score',
    body: 'Your responses are scored across three dimensions and mapped to one of four maturity stages. You\u2019ll see exactly where you\u2019re strong and where you\u2019re exposed.',
  },
  {
    number: '3',
    label: 'Get Your Personalized Roadmap',
    body: 'Your results include specific recommendations, relevant resources, and a clear next step \u2014 whether that\u2019s reading a guide, exploring a service, or booking a strategy call.',
  },
]

const AUDIENCE_CHECKS = [
  'You\u2019re growing but operational chaos is eating your margins',
  'You\u2019ve heard AI can help but don\u2019t know where to start',
  'Your marketing runs on gut instinct instead of systems',
  'You need to make a case to your leadership team for AI investment',
  'You want an objective benchmark before talking to any consultant',
]

export default function QuickScanPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="quickscan">
        <ScrollReveal>
          <Badge variant="primary" size="lg" className="mb-6">
            Free Assessment
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-fg-primary mb-6">
            Find Out Where Your Business
            <br className="hidden md:block" /> Actually Stands on AI
          </h1>
          <p className="text-lg md:text-xl text-fg-secondary max-w-3xl mx-auto mb-8">
            The AI Maturity QuickScan scores your operations, marketing, and
            digital presence in under 10 minutes &mdash; and gives you a
            personalized roadmap for what to do next. Free. Confidential. No
            sales call required.
          </p>
          <Link
            href="/quickscan/assessment"
            className={buttonVariants({ variant: 'accent', size: 'xl' })}
          >
            Start the Assessment
          </Link>
          <p className="mt-4 text-sm text-fg-tertiary">
            Taken by 200+ business leaders across 14 industries
          </p>
        </ScrollReveal>
      </Hero>

      {/* Block 2: What You'll Discover */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-fg-primary text-center mb-12">
            What You&apos;ll Get From Your QuickScan
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <Card variant="feature" className="h-full">
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-heading font-semibold text-fg-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-fg-secondary leading-relaxed">
                    {benefit.body}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 3: How It Works */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-fg-primary text-center mb-12">
            Three Steps. Ten Minutes. Total Clarity.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-heading font-semibold text-fg-primary">
                  {step.label}
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 4: Sample Results Preview */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-fg-primary">
              Here&apos;s What Your Results Look Like
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Your QuickScan report includes a visual maturity score,
              dimension-level breakdown, and prioritized recommendations. No
              generic advice &mdash; everything is mapped to your specific
              answers.
            </p>
            <div className="rounded-2xl border border-white/[0.10] bg-bg-surface p-8 md:p-12">
              <div className="space-y-6 opacity-60 blur-[2px] pointer-events-none select-none" aria-hidden="true">
                <div className="h-24 rounded-xl bg-white/[0.04]" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-8 rounded-lg bg-white/[0.04]" />
                  <div className="h-8 rounded-lg bg-white/[0.04]" />
                  <div className="h-8 rounded-lg bg-white/[0.04]" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-white/[0.04]" />
                  <div className="h-4 w-1/2 rounded bg-white/[0.04]" />
                </div>
              </div>
              <p className="mt-6 text-sm font-medium text-primary">
                Your personalized results await
              </p>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 5: Who It's For */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-fg-primary text-center">
              Is the QuickScan Right for You?
            </h2>
            <p className="text-fg-secondary text-center leading-relaxed">
              This assessment is designed for business leaders at companies
              doing $1M&ndash;$25M in annual revenue. Take it if:
            </p>
            <ul className="space-y-3 max-w-xl mx-auto">
              {AUDIENCE_CHECKS.map((check) => (
                <li key={check} className="flex items-start gap-3">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-fg-secondary">{check}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-fg-tertiary text-center">
              If your company has fewer than 5 employees or more than 500, the
              framework may be less applicable &mdash; but the diagnostic is
              still useful.
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 6: Final CTA */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-fg-primary">
              Ready to See Where You Stand?
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Your results are private. We&apos;ll send a copy to your email.
              The whole thing takes less than 10 minutes.
            </p>
            <Link
              href="/quickscan/assessment"
              className={buttonVariants({ variant: 'accent', size: 'xl' })}
            >
              Start Your Free QuickScan
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
