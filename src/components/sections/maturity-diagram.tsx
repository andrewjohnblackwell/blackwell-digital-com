'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface StageData {
  number: number
  name: string
  characteristics: string[]
  symptoms: string[]
  whatGoodLooksLike: string
  recommendedAction: string
  ctaLabel: string
  ctaHref: string
}

/* ------------------------------------------------------------------ */
/*  Shared detail panel                                                */
/* ------------------------------------------------------------------ */

function StageDetail({ stage }: { stage: StageData }) {
  return (
    <div className="space-y-6">
      <h3 className="font-heading text-xl font-bold text-fg-primary">
        Stage {stage.number}: {stage.name}
      </h3>

      <div>
        <h4 className="text-sm font-semibold text-fg-tertiary uppercase tracking-wider mb-3">
          Characteristics
        </h4>
        <ul className="space-y-2">
          {stage.characteristics.map((item) => (
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
      </div>

      <div>
        <h4 className="text-sm font-semibold text-fg-tertiary uppercase tracking-wider mb-3">
          Business Symptoms
        </h4>
        <ul className="space-y-2">
          {stage.symptoms.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-fg-secondary leading-relaxed"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-fg-secondary leading-relaxed italic">
        {stage.whatGoodLooksLike}
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
        <p className="text-sm text-fg-secondary leading-relaxed flex-1">
          <span className="font-semibold text-fg-primary">Recommended: </span>
          {stage.recommendedAction}
        </p>
        <Link
          href={stage.ctaHref}
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'shrink-0 gap-1.5'
          )}
        >
          {stage.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  MaturityDiagram                                                    */
/* ------------------------------------------------------------------ */

function MaturityDiagram({ stages }: { stages: StageData[] }) {
  return (
    <>
      {/* ---- Desktop: Tabs ---- */}
      <div className="hidden md:block">
        <Tabs defaultValue="stage-1">
          {/* Node progression */}
          <TabsList className="relative flex w-full items-center justify-between border-0 gap-0 mb-8">
            {/* Connector line */}
            <div
              className="absolute top-1/2 left-[28px] right-[28px] h-0.5 -translate-y-1/2 bg-white/[0.10]"
              aria-hidden="true"
            />

            {stages.map((stage) => (
              <TabsTrigger
                key={stage.number}
                value={`stage-${stage.number}`}
                className="group relative z-10 flex flex-col items-center gap-2 border-0 px-0 py-0 data-[state=active]:border-0 data-[state=active]:-mb-0"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-base font-medium transition-all duration-moderate bg-white/[0.06] text-fg-tertiary border border-white/[0.10] group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground group-data-[state=active]:shadow-glow-blue group-data-[state=active]:border-primary">
                  {stage.number}
                </span>
                <span className="text-xs text-fg-tertiary whitespace-nowrap group-data-[state=active]:text-fg-primary">
                  {stage.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {stages.map((stage) => (
            <TabsContent
              key={stage.number}
              value={`stage-${stage.number}`}
              className="rounded-xl border border-border bg-bg-elevated p-6 md:p-8"
            >
              <StageDetail stage={stage} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* ---- Mobile: Accordion ---- */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="border-t border-border">
          {stages.map((stage) => (
            <AccordionItem key={stage.number} value={`stage-${stage.number}`}>
              <AccordionTrigger>
                Stage {stage.number}: {stage.name}
              </AccordionTrigger>
              <AccordionContent>
                <StageDetail stage={stage} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export { MaturityDiagram }
