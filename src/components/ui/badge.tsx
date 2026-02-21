import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-medium font-body',
  {
    variants: {
      variant: {
        default:
          'bg-white/[0.06] text-fg-secondary border border-white/[0.10]',
        primary:
          'bg-primary/10 text-primary-hover border border-primary/20',
        accent:
          'bg-accent/10 text-accent border border-accent/20',
        success:
          'bg-success-bg text-success border border-success-border',
        warning:
          'bg-warning-bg text-warning border border-warning-border',
        error:
          'bg-error-bg text-error border border-error-border',
      },
      size: {
        sm: 'px-2 py-0.5 text-[11px]',
        md: 'px-2.5 py-[3px] text-xs',
        lg: 'px-3.5 py-1 text-[13px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
