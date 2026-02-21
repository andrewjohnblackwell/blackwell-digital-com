import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'

export const metadata = createMetadata({
  title: 'Client Results \u2014 Measurable AI Transformation Outcomes',
  description:
    'See how Blackwell Digital clients measure AI transformation success \u2014 real case studies, real KPIs, real business outcomes for companies like yours.',
  path: '/results',
})

const METRICS = [
  { value: '47%', label: 'average reduction in manual processing time' },
  { value: '3.2\u00d7', label: 'average marketing pipeline velocity improvement' },
  { value: '$240K', label: 'average annual operational savings identified' },
  { value: '< 90 days', label: 'average time to first measurable ROI' },
  { value: '22 hrs/wk', label: 'average capacity reclaimed per engagement' },
]

const FILTER_BADGES = [
  'All',
  'Professional Services',
  'Manufacturing',
  'Home Services',
  'Distribution',
]

const CASE_STUDIES = [
  {
    industry: 'Distribution',
    tier: 'AI-First Operating System',
    headline: '52% Reduction in Order Processing Time',
    body: 'A 40-person distribution company eliminated manual order routing and unified operations with marketing.',
    metric: '$310K annual savings',
  },
  {
    industry: 'Professional Services',
    tier: 'Foundation Sprint',
    headline: '22 Hours/Week Reclaimed in 4 Weeks',
    body: 'An 18-person professional services firm automated client onboarding and project tracking workflows.',
    metric: '5 high-ROI workflows identified',
  },
  {
    industry: 'Home Services',
    tier: 'AI Growth System',
    headline: '3.8\u00d7 Increase in Qualified Leads',
    body: 'A multi-location home services company unified marketing and ops \u2014 tripling qualified pipeline without adding headcount.',
    metric: '60% reduction in lead processing time',
  },
]

export default function ResultsPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-fg-primary mb-4">
            Results You Can Measure
          </h1>
          <p className="text-lg md:text-xl text-fg-secondary max-w-3xl mx-auto">
            We tie every engagement to specific KPIs &mdash; because &ldquo;it
            feels better&rdquo; isn&apos;t a business case. Here&apos;s what
            measurable AI transformation looks like for companies in the
            $1M&ndash;$25M range.
          </p>
        </ScrollReveal>
      </Hero>

      {/* Block 2: Aggregated Metrics */}
      <SectionContainer className="bg-bg-elevated border-b border-border-subtle">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary text-center mb-10">
            Across All Client Engagements
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.08}>
              <Card variant="stat" className="h-full">
                <CardContent className="space-y-2 py-6">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-xs text-fg-secondary leading-relaxed">
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 3: Filter Controls (decorative) */}
      <SectionContainer padding="none" className="py-6 border-b border-border-subtle">
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_BADGES.map((badge, i) => (
            <span
              key={badge}
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium cursor-default ${
                i === 0
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white/[0.04] text-fg-secondary border border-white/[0.08] hover:bg-white/[0.06]'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </SectionContainer>

      {/* Block 4: Case Study Grid */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.headline} delay={i * 0.1}>
              <Card variant="feature" className="h-full flex flex-col">
                <CardHeader className="flex flex-row flex-wrap gap-2">
                  <Badge variant="primary" size="sm">
                    {study.industry}
                  </Badge>
                  <Badge variant="default" size="sm">
                    {study.tier}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-3">
                  <h3 className="text-lg font-heading font-semibold text-fg-primary">
                    {study.headline}
                  </h3>
                  <p className="text-sm text-fg-secondary leading-relaxed flex-1">
                    {study.body}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {study.metric}
                  </p>
                  <Badge variant="default" size="sm" className="self-start">
                    Coming soon
                  </Badge>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 5: Fallback */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              We&apos;re Capturing Results for Publication
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Our client engagements are producing measurable results across
              industries. We&apos;re currently documenting these outcomes for
              publication with client approval. In the meantime, every Blackwell
              engagement includes defined KPIs, baseline measurement, and
              documented outcomes. We&apos;ll walk you through real client
              results on your strategy call.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Book a Strategy Call to See Real Results
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 6: CTA */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              Ready to Add Your Name to These Results?
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Every case study started with the same thing: a 30-minute
              conversation about what&apos;s possible. Yours starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/quickscan"
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                Take the QuickScan
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
