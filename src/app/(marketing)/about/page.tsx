import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'About Blackwell Digital',
  description:
    'Blackwell Digital is the AI transformation consultancy for businesses doing $1M–$25M. Measurable outcomes. Practitioner-led execution. No hype.',
  path: '/about',
})

const PHILOSOPHY = [
  {
    title: 'Measurable Over Aspirational',
    body: 'Every engagement is tied to specific KPIs. If we can\'t measure it, we don\'t recommend it. "Digital transformation" means nothing without numbers attached.',
  },
  {
    title: 'Practitioner-Led, Not Presentation-Led',
    body: 'We don\'t hand you a strategy deck and wish you luck. Our team builds, deploys, and optimizes the systems we recommend. Strategy plus implementation, under one roof.',
  },
  {
    title: 'Built for the Middle Market',
    body: 'Enterprise consultancies are built for Fortune 500 companies. We\'re built for the companies that will become Fortune 500 companies — if they get the systems right now.',
  },
  {
    title: 'No Hype. No Buzzwords. No Experiments.',
    body: 'We won\'t tell you AI will "revolutionize everything." We\'ll tell you which 5 workflows to automate first, how much it\'ll save, and how long it\'ll take. Then we\'ll build it.',
  },
]

const VALUES = [
  {
    title: 'Clarity First',
    body: 'We won\'t move forward until you understand exactly what we\'re building, why, and what you\'ll measure. Confusion is a red flag, not a feature.',
  },
  {
    title: 'Speed to Value',
    body: 'The fastest way to build trust is to deliver results. Every engagement is designed to produce measurable outcomes as early as possible — not at the end of a 6-month runway.',
  },
  {
    title: 'Your Systems, Not Ours',
    body: 'We build on your platforms, train your team, and hand over everything documented. Vendor lock-in is a business model. It\'s not ours.',
  },
  {
    title: 'Honest Scoping',
    body: 'If the Foundation Sprint is all you need, we\'ll tell you. We\'d rather earn your trust on a 4-week engagement than oversell a 6-month one. Repeat clients come from honesty, not upsells.',
  },
  {
    title: 'Outcomes Own the Room',
    body: 'We measure success by your KPIs, not our deliverables. Shipped features don\'t matter if the numbers don\'t move.',
  },
]

// TODO: Replace with real team data
const TEAM = [
  { initials: 'AB', name: '[Name]', title: '[Title]' },
]

// Populate when credentials/recognition are available
const TRUST_SIGNALS: { label: string; description: string }[] = []

export default function AboutPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-electric-500 mb-4">
          About Us
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-fg-primary tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          We Exist Because Growing Businesses Deserve Better Than Hype
        </h1>
        <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
          Blackwell Digital is an AI-driven digital transformation consultancy — built to serve
          companies in the $1M–$25M range who need measurable results, not science projects.
        </p>
      </Hero>

      {/* Block 2: Company Story */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-8">
            How We Got Here
          </h2>
          <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed">
            <p>The AI revolution has a problem: it&apos;s being sold by people who&apos;ve never run a business.</p>
            <p>
              Enterprise consultancies sell transformation programs that cost more than your annual
              revenue. Marketing agencies bolt &quot;AI-powered&quot; onto the same services
              they&apos;ve been selling for a decade. Tool vendors promise that their platform will
              fix everything — if you just buy the enterprise plan.
            </p>
            <p>
              Meanwhile, companies in the $1M–$25M range — the businesses that actually power the
              economy — are left to figure it out themselves. And most of them are stuck. Not because
              they lack ambition, but because no one has given them a clear, structured, measurable
              path from where they are to where AI can take them.
            </p>
            <p>
              Blackwell Digital was built to fill that gap. We developed the AI Maturity Framework to
              give business leaders an honest assessment of where they stand. We structured our
              services into clear tiers — Foundation Sprint, AI Growth System, and AI-First Operating
              System — so every engagement has a defined scope, timeline, and set of measurable
              outcomes. We&apos;re not trying to be Deloitte. We&apos;re trying to be the
              consultancy that Deloitte&apos;s clients wish existed when they were doing $5M in
              revenue.
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 3: Philosophy */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            What We Stand For
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHY.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <Card variant="feature" className="h-full">
                <CardContent>
                  <h3 className="font-heading text-lg font-bold text-fg-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 4: Team */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            The People Behind the Systems
          </h2>
        </ScrollReveal>
        {/* TODO: Replace placeholder data with real team bios and photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {TEAM.map((member) => (
            <ScrollReveal key={member.initials}>
              <Card className="text-center">
                <CardContent>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <span className="font-mono text-xl font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-fg-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-fg-secondary">{member.title}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 5: Values */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
            How Our Values Show Up in Your Engagement
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent>
                  <h3 className="font-heading text-base font-bold text-fg-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed">{value.body}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 6: Trust Signals — omitted when empty */}
      {TRUST_SIGNALS.length > 0 && (
        <SectionContainer>
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-10">
              Credentials and Recognition
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_SIGNALS.map((signal) => (
              <Card key={signal.label}>
                <CardContent>
                  <h3 className="font-heading text-base font-bold text-fg-primary mb-2">
                    {signal.label}
                  </h3>
                  <p className="text-fg-secondary text-sm">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Block 7: CTA */}
      <SectionContainer padding="lg">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-6">
            Want to Work With a Team Like This?
          </h2>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Start with a 30-minute strategy call. We&apos;ll listen to what you&apos;re dealing
            with, assess whether we can help, and tell you honestly what we&apos;d recommend.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className={buttonVariants({ variant: 'accent', size: 'lg' })}
            >
              Book a Strategy Call
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
