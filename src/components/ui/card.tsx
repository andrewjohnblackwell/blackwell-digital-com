import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'border transition-all duration-moderate ease-standard',
  {
    variants: {
      variant: {
        default:
          'bg-bg-surface border-border rounded-xl shadow-card hover:border-border-accent hover:shadow-card-hover hover:-translate-y-0.5',
        feature:
          'bg-gradient-to-br from-bg-elevated to-bg-surface border-primary/20 rounded-2xl shadow-lg relative before:absolute before:top-0 before:left-6 before:h-1 before:w-8 before:bg-primary before:rounded-b-sm hover:border-primary/40 hover:shadow-glow-blue hover:-translate-y-1 hover:before:w-12',
        testimonial:
          'bg-bg-elevated border-white/[0.06] rounded-xl border-l-[3px] border-l-primary',
        stat:
          'bg-bg-elevated border-primary/[0.15] rounded-xl text-center',
        'blog-post':
          'bg-bg-elevated border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-card-hover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, className }))} {...props} />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pb-0', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardContent, CardFooter, cardVariants }
