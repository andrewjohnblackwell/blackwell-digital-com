import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface InsightCard {
  category: string
  title: string
  href: string
}

/* ------------------------------------------------------------------ */
/*  StageHero                                                          */
/* ------------------------------------------------------------------ */

function StageHero({
  stageNumber,
  title,
  subtitle,
}: {
  stageNumber: number
  title: string
  subtitle: string
}) {
  return (
    <>
      <Badge variant="primary" size="lg" className="mb-4">
        Stage {stageNumber}
      </Badge>
      <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.75rem] font-bold text-fg-primary tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  CharacteristicsList                                                */
/* ------------------------------------------------------------------ */

function CharacteristicsList({
  heading,
  items,
}: {
  heading: string
  items: string[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <ScrollReveal key={item} delay={i * 0.06}>
            <li className="border-l-2 border-primary/30 pl-5 text-fg-secondary text-base leading-relaxed">
              {item}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  SymptomsList                                                       */
/* ------------------------------------------------------------------ */

function SymptomsList({
  items,
}: {
  items: string[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          Signs You&apos;re at This Stage
        </h2>
      </ScrollReveal>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <ScrollReveal key={item} delay={i * 0.06}>
            <li className="border-l-2 border-accent/30 pl-5 text-fg-secondary text-base leading-relaxed">
              {item}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  WhatGoodLooksLike                                                  */
/* ------------------------------------------------------------------ */

function WhatGoodLooksLike({
  stageNumber,
  paragraphs,
}: {
  stageNumber: number
  paragraphs: string[]
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-8">
          What Good Looks Like at Stage {stageNumber}
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
/*  RecommendedActions                                                 */
/* ------------------------------------------------------------------ */

function RecommendedActions({
  description,
  bullets,
  ctaLabel,
  ctaHref,
}: {
  description: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <SectionContainer width="narrow">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-8">
          Your Next Move
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <Card variant="feature" className="max-w-2xl mx-auto">
          <CardContent>
            <p className="text-fg-secondary text-base leading-relaxed mb-5">
              {description}
            </p>
            <ul className="space-y-3 mb-6">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-fg-secondary leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={ctaHref}
              className={buttonVariants({ variant: 'primary', size: 'md' })}
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </CardContent>
        </Card>
      </ScrollReveal>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  RelatedInsights                                                    */
/* ------------------------------------------------------------------ */

function RelatedInsights({
  heading = 'Recommended Reading',
  cards,
}: {
  heading?: string
  cards: InsightCard[]
}) {
  return (
    <SectionContainer>
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-10">
          {heading}
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.06}>
            <Card variant="blog-post" className="h-full flex flex-col">
              <CardContent className="flex-1 flex flex-col">
                <Badge variant="default" size="sm" className="mb-3 self-start">
                  {card.category}
                </Badge>
                <h3 className="font-heading text-base font-semibold text-fg-primary mb-4 flex-1">
                  {card.title}
                </h3>
                <Link
                  href={card.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'gap-1.5 self-start p-0 h-auto'
                  )}
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  StageCTA                                                           */
/* ------------------------------------------------------------------ */

function StageCTA({
  heading = 'Find Out Exactly Where You Stand',
  body = 'The QuickScan gives you a dimension-level breakdown \u2014 not just the stage, but where you\u2019re strong and where you\u2019re exposed across operations, marketing, and digital.',
  primaryLabel = 'Take the QuickScan',
  primaryHref = '/quickscan',
  secondaryLabel = 'Book a Strategy Call',
  secondaryHref = '/contact',
}: {
  heading?: string
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
  StageHero,
  CharacteristicsList,
  SymptomsList,
  WhatGoodLooksLike,
  RecommendedActions,
  RelatedInsights,
  StageCTA,
}
