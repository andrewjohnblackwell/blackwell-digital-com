'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

export interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string
}

const ProgressBar = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressBarProps
>(({ className, value, max = 100, label, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-1 w-full overflow-hidden rounded-full bg-white/[0.08]', className)}
    value={value}
    max={max}
    aria-label={label}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full rounded-full bg-electric-fade transition-[width] duration-slow ease-decelerate"
      style={{ width: `${((value ?? 0) / max) * 100}%` }}
    />
  </ProgressPrimitive.Root>
))
ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }
