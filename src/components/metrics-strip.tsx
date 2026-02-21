'use client'

import * as React from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface MetricItem {
  value: number
  prefix?: string
  suffix?: string
  label: string
  decimals?: number
}

interface MetricsStripProps {
  metrics: MetricItem[]
  className?: string
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function AnimatedNumber({ metric }: { metric: MetricItem }) {
  const [display, setDisplay] = React.useState('0')
  const ref = React.useRef<HTMLDivElement>(null)
  const hasAnimated = React.useRef(false)
  const prefersReducedMotion = useReducedMotion()

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(metric.value.toFixed(metric.decimals ?? 0))
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutCubic(progress)
            const current = eased * metric.value
            setDisplay(current.toFixed(metric.decimals ?? 0))
            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [metric.value, metric.decimals, prefersReducedMotion])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 py-4">
      <p className="font-mono text-3xl md:text-4xl font-bold text-fg-primary tracking-tight">
        {metric.prefix}
        {display}
        {metric.suffix}
      </p>
      <p className="text-sm text-fg-secondary text-center leading-snug">
        {metric.label}
      </p>
    </div>
  )
}

function MetricsStrip({ metrics, className }: MetricsStripProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8',
        className
      )}
    >
      {metrics.map((metric) => (
        <AnimatedNumber key={metric.label} metric={metric} />
      ))}
    </div>
  )
}

export { MetricsStrip }
