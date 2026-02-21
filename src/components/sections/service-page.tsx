import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { faqSchema } from '@/lib/schema'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface DetailStripItem {
  label: string
}

interface Deliverable {
  title: string
  description: string
}

interface KPI {
  metric: string
  label: string
}

interface TimelineStep {
  label: string
  description: string
}

interface FAQItem {
  question: string
  answer: string
}

interface CaseStudy {
  label: string
  headline: string
  body: string
  cta: string
  href: string
}

/* ------------------------------------------------------------------ */
/*  ServiceHero                                                        */
/* ------------------------------------------------------------------ */

function ServiceHero({
  title,
  subtitle,
  detailStrip,
  ctaLabel = 'Book a Strategy Call',
  ctaHref = '/contact',
}: {
  title: string
  subtitle: string
  detailStrip: DetailStripItem[]
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <>
      <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.75rem] font-bold text-fg-primary tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed mb-6">
        {subtitle}
      </p>
      <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap text-sm text-fg-tertiary mb-8">
        {detailStrip.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2 md:gap-4">
            {i > 0 && <span className="text-border-strong" aria-hidden="true">&middot;</span>}
            {item.label}
          </span>
        ))}
      </div>
      <Link
        href={ctaHref}
        className={buttonVariants({ variant: 'primary', size: 'lg' })}
      >
        {ctaLabel}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  ProblemStatement                                                    */
/* ------------------------------------------------------------------ */

function ProblemStatement({
  heading,
  paragraphs,
}: {
  heading: string
  paragraphs: string[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-8">
          {heading}
        </h2>
        <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  DeliverablesList                                                    */
/* ------------------------------------------------------------------ */

function DeliverablesList({
  heading,
  items,
}: {
  heading: string
  items: Deliverable[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.06}>
            <li className="border-l-2 border-primary/30 pl-5">
              <span className="font-heading font-semibold text-fg-primary">
                {item.title}
              </span>
              <span className="text-fg-tertiary mx-1.5" aria-hidden="true">
                &mdash;
              </span>
              <span className="text-fg-secondary text-base leading-relaxed">
                {item.description}
              </span>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  KPIGrid                                                            */
/* ------------------------------------------------------------------ */

function KPIGrid({
  heading,
  items,
}: {
  heading: string
  items: KPI[]
}) {
  return (
    <SectionContainer>
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((kpi, i) => (
          <ScrollReveal key={kpi.metric} delay={i * 0.06}>
            <Card variant="stat" className="p-6">
              <p className="font-mono text-3xl md:text-4xl font-normal text-primary-hover mb-2">
                {kpi.metric}
              </p>
              <p className="text-sm text-fg-secondary">{kpi.label}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  Timeline                                                           */
/* ------------------------------------------------------------------ */

function Timeline({
  heading,
  steps,
}: {
  heading: string
  steps: TimelineStep[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <div className="relative">
        {/* Connector line */}
        <div
          className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20"
          aria-hidden="true"
        />
        <ol className="space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 0.08}>
              <li className="relative pl-12">
                {/* Numbered dot */}
                <div
                  className="absolute left-0 top-0.5 flex h-[31px] w-[31px] items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-medium"
                  aria-hidden="true"
                >
                  {i + 1}
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
  )
}

/* ------------------------------------------------------------------ */
/*  IdealClientProfile                                                 */
/* ------------------------------------------------------------------ */

function IdealClientProfile({
  heading,
  forItems,
  notForItems,
}: {
  heading: string
  forItems: string[]
  notForItems: string[]
}) {
  return (
    <SectionContainer>
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ScrollReveal>
          <Card className="h-full">
            <CardContent>
              <h3 className="font-heading text-lg font-semibold text-fg-primary mb-4">
                This is for you if:
              </h3>
              <ul className="space-y-3">
                {forItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg-secondary">
                    <Check
                      className="h-5 w-5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <Card className="h-full">
            <CardContent>
              <h3 className="font-heading text-lg font-semibold text-fg-primary mb-4">
                This is NOT for you if:
              </h3>
              <ul className="space-y-3">
                {notForItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg-secondary">
                    <X
                      className="h-5 w-5 shrink-0 text-error"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  InvestmentBlock                                                    */
/* ------------------------------------------------------------------ */

function InvestmentBlock({
  heading,
  body,
  ctaLabel = 'Book a Strategy Call',
  ctaHref = '/contact',
}: {
  heading: string
  body: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-6">
          {heading}
        </h2>
        <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center mb-8">
          {body}
        </p>
        <div className="text-center">
          <Link
            href={ctaHref}
            className={buttonVariants({ variant: 'primary', size: 'lg' })}
          >
            {ctaLabel}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </ScrollReveal>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  CaseStudyCard                                                      */
/* ------------------------------------------------------------------ */

function CaseStudyCard({
  heading,
  study,
}: {
  heading: string
  study: CaseStudy
}) {
  return (
    <SectionContainer>
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
        <Card variant="feature" className="max-w-2xl mx-auto">
          <CardContent>
            <Badge variant="primary" size="sm" className="mb-3">
              {study.label}
            </Badge>
            <h3 className="font-heading text-xl font-bold text-fg-primary mb-3">
              {study.headline}
            </h3>
            <p className="text-fg-secondary text-sm leading-relaxed mb-5">
              {study.body}
            </p>
            <Link
              href={study.href}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'gap-1.5'
              )}
            >
              {study.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </CardContent>
        </Card>
      </ScrollReveal>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  ServiceFAQ                                                         */
/* ------------------------------------------------------------------ */

function ServiceFAQ({
  heading,
  items,
}: {
  heading: string
  items: FAQItem[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <Accordion type="single" collapsible className="border-t border-border">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
      />
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  ServiceCTA                                                         */
/* ------------------------------------------------------------------ */

function ServiceCTA({
  heading,
  body,
  primaryLabel = 'Book Your Strategy Call',
  primaryHref = '/contact',
  secondaryLabel = 'Take the QuickScan First',
  secondaryHref = '/quickscan',
}: {
  heading: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <SectionContainer padding="lg">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-6">
          {heading}
        </h2>
        {body && (
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className={buttonVariants({ variant: 'accent', size: 'lg' })}
          >
            {primaryLabel}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href={secondaryHref}
            className={buttonVariants({ variant: 'secondary', size: 'lg' })}
          >
            {secondaryLabel}
          </Link>
        </div>
      </ScrollReveal>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

export {
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
}

export type {
  DetailStripItem,
  Deliverable,
  KPI,
  TimelineStep,
  FAQItem,
  CaseStudy,
}
