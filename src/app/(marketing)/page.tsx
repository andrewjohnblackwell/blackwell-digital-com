import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricsStrip, type MetricItem } from '@/components/metrics-strip'
import { createMetadata } from '@/lib/metadata'
import { ArrowRight } from 'lucide-react'

export const metadata = createMetadata({
  title: 'AI Transformation for Growth-Stage Businesses',
  description:
    'Blackwell Digital helps $1M–$25M businesses implement AI-driven operations, marketing systems, and growth infrastructure. Take the free AI Maturity QuickScan.',
  path: '/',
})

const METRICS: MetricItem[] = [
  { value: 47, suffix: '%', label: 'average reduction in manual processing time' },
  { value: 3.2, suffix: '×', label: 'marketing pipeline velocity improvement', decimals: 1 },
  { value: 240, prefix: '$', suffix: 'K', label: 'average annual operational savings identified' },
  { value: 90, prefix: '< ', label: 'days to first measurable ROI' },
]

const SERVICE_CARDS = [
  {
    headline: 'Foundation Sprint',
    body: 'A 4-week diagnostic and implementation sprint that maps your current state, identifies high-ROI automation opportunities, and delivers your first working AI workflows.',
    detail: '4 weeks · Assessment + first implementations',
    href: '/services/foundation-sprint',
  },
  {
    headline: 'AI Growth System',
    body: 'A 90-day engagement that builds integrated AI systems across marketing and operations — turning your growth engine from manual to measurable.',
    detail: '90 days · Integrated marketing + ops systems',
    href: '/services/ai-growth-system',
  },
  {
    headline: 'AI-First Operating System',
    body: 'A 6-month transformation that rewires your business infrastructure — operations, marketing, and digital — into a unified AI-driven operating system.',
    detail: '6 months · Full business transformation',
    href: '/services/ai-first-operating-system',
  },
]

const MATURITY_STAGES = [
  { label: 'Manual', stage: 1 },
  { label: 'Assisted', stage: 2 },
  { label: 'Automated', stage: 3 },
  { label: 'Autonomous', stage: 4 },
]

const CASE_STUDIES = [
  {
    labels: ['Distribution', 'Operations'],
    headline: '52% Reduction in Order Processing Time',
    body: 'A 40-person distribution company eliminated manual order routing and cut processing time in half within 60 days.',
    cta: 'Read the Full Story',
  },
  {
    labels: ['Professional Services', 'Marketing'],
    headline: '3.8× Increase in Qualified Pipeline',
    body: 'An 18-person consulting firm replaced its manual outreach process with an AI-driven marketing system that tripled qualified inbound leads.',
    cta: 'Read the Full Story',
  },
  {
    labels: ['Aggregate Results'],
    headline: 'Average Client Outcomes After 90 Days',
    body: '47% less manual processing. 3.2× marketing velocity. $240K in identified savings. These are averages — your numbers depend on where you start.',
    cta: 'See All Results',
  },
]

const BLOG_POSTS = [
  {
    category: 'AI Maturity',
    title: 'What Is AI Maturity — And Why Should a $5M Business Care?',
    excerpt:
      'Most SMBs don\'t have an AI problem. They have a systems problem that AI can solve — if you know where to start.',
    readTime: '7 min read',
  },
  {
    category: 'Operations',
    title: 'The 5 Workflows Every Growing Business Should Automate First',
    excerpt:
      'Not all automation is equal. These five workflows deliver the fastest payback for companies under $25M.',
    readTime: '5 min read',
  },
  {
    category: 'Digital Transformation',
    title: 'Why Your Website Is a Liability (Not an Asset)',
    excerpt:
      'If your website can\'t qualify leads, answer questions, and drive bookings without your sales team, it\'s costing you money.',
    readTime: '6 min read',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="homepage">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-electric-500 mb-6">
          AI Maturity Consultancy
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-fg-primary tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Your Business Runs on Systems.{' '}
          <span className="text-gradient">We Make Them Intelligent.</span>
        </h1>
        <p className="text-lg md:text-xl text-fg-secondary max-w-prose-hero mx-auto mb-10 leading-relaxed">
          Blackwell Digital is the AI transformation consultancy for growth-stage businesses — $1M
          to $25M in revenue, 5 to 150 employees — who want measurable ROI from AI, not
          experiments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quickscan"
            className={buttonVariants({ variant: 'accent', size: 'lg' })}
          >
            Take the QuickScan
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: 'secondary', size: 'lg' })}
          >
            Book a Strategy Call
          </Link>
        </div>
      </Hero>

      {/* Block 2: Positioning Statement */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-8">
            Built for Businesses Like Yours
          </h2>
          <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed text-center">
            <p>
              You&apos;ve grown past the startup phase but your systems haven&apos;t kept up. Manual
              processes eat your margins. Marketing runs on gut instinct instead of data. Your team
              spends more time on workarounds than actual work.
            </p>
            <p>
              We fix that. Blackwell Digital assesses your AI maturity across operations, marketing,
              and digital — then implements the workflows, automation, and infrastructure that drive
              measurable growth. No science projects. No twelve-month discovery phases. Structured
              engagements with clear KPIs, built for companies doing $1M–$25M in annual revenue.
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 3: Metrics Strip */}
      <SectionContainer className="bg-bg-elevated">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            Results Across Every Engagement
          </h2>
          <MetricsStrip metrics={METRICS} />
        </ScrollReveal>
      </SectionContainer>

      {/* Block 4: Service Cards */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-4">
            Three Tiers. One Clear Path Forward.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {SERVICE_CARDS.map((service, i) => (
            <ScrollReveal key={service.headline} delay={i * 0.1}>
              <Card variant="feature" className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-fg-primary mb-3">
                    {service.headline}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed mb-4">
                    {service.body}
                  </p>
                  <p className="text-xs text-fg-tertiary">{service.detail}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.href}
                    className="text-sm font-medium text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 5: Framework Teaser */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-6">
            Where Does Your Business Fall?
          </h2>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center mb-10">
            Every business sits on a maturity curve: Manual → Assisted → Automated → Autonomous.
            Most companies in the $1M–$25M range are stuck between Manual and Assisted — running on
            spreadsheets, tribal knowledge, and heroic individual effort.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-10">
            {MATURITY_STAGES.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center font-mono text-sm font-bold ${
                      stage.stage <= 2
                        ? 'bg-primary/20 text-primary border border-primary/40'
                        : 'bg-white/[0.06] text-fg-tertiary border border-white/[0.10]'
                    }`}
                  >
                    {stage.stage}
                  </div>
                  <span className="text-xs text-fg-secondary">{stage.label}</span>
                </div>
                {i < MATURITY_STAGES.length - 1 && (
                  <div className="h-px w-6 md:w-10 bg-border-subtle mb-5" />
                )}
              </div>
            ))}
          </div>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center mb-8">
            The AI Maturity Framework gives you a diagnostic lens to understand exactly where you
            are, where you should be, and what it takes to get there — across operations, marketing,
            and digital.
          </p>
          <div className="text-center">
            <Link
              href="/framework"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Discover Your Maturity Stage
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 6: QuickScan Callout */}
      <SectionContainer padding="lg" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-accent-glow pointer-events-none opacity-30"
          aria-hidden="true"
        />
        <ScrollReveal>
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-6">
              Know Your Starting Point in 10 Minutes
            </h2>
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center mb-6 max-w-2xl mx-auto">
              The AI Maturity QuickScan is a free, confidential assessment that scores your business
              across three dimensions — operations, marketing, and digital presence. In under 10
              minutes, you&apos;ll receive:
            </p>
            <ul className="space-y-3 max-w-xl mx-auto mb-8">
              {[
                'Your overall AI maturity stage (1–4)',
                'Dimension-level scores showing where you\'re strong and where you\'re exposed',
                'Personalized recommendations mapped to your specific gaps',
                'A clear next step — whether that\'s a strategy call or a resource to dig deeper',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-fg-secondary text-sm md:text-base"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-fg-tertiary text-sm text-center mb-8">
              No obligation. No sales pitch. Just a clear picture of where you stand.
            </p>
            <div className="text-center">
              <Link
                href="/quickscan"
                className={buttonVariants({ variant: 'accent', size: 'lg' })}
              >
                Take the Free Assessment
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 7: Featured Results */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            What Measurable Looks Like
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.headline} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.labels.map((label) => (
                      <Badge key={label} variant="primary" size="sm">
                        {label}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-fg-primary mb-3">
                    {study.headline}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed">{study.body}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/results"
                    className="text-sm font-medium text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
                  >
                    {study.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 8: Featured Insights */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            Practical AI Intelligence for Business Leaders
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <Badge variant="default" size="sm" className="mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="font-heading text-lg font-bold text-fg-primary mb-3">
                    {post.title}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-fg-tertiary">{post.readTime}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/insights"
                    className="text-sm font-medium text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 9: Final CTA */}
      <SectionContainer padding="lg">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-6">
            Stop Guessing. Start Measuring.
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-4">
              The difference between companies that grow through AI and companies that stall
              isn&apos;t budget or team size — it&apos;s clarity. You need to know where you are,
              what to fix first, and what &quot;done&quot; looks like.
            </p>
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10">
              That starts with a 10-minute assessment or a 30-minute conversation. No obligation
              either way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quickscan"
                className={buttonVariants({ variant: 'accent', size: 'lg' })}
              >
                Take the QuickScan
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
