import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const heroVariants = cva('relative overflow-hidden', {
  variants: {
    variant: {
      homepage:
        'min-h-svh bg-bg-base flex items-center',
      interior:
        'min-h-[280px] bg-bg-elevated border-b border-border-subtle',
      quickscan:
        'bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.08)_0%,transparent_60%)] bg-bg-base border-b border-primary/[0.15]',
    },
  },
  defaultVariants: {
    variant: 'interior',
  },
})

export interface HeroProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants> {
  centered?: boolean
}

function Hero({
  variant,
  centered = true,
  className,
  children,
  ...props
}: HeroProps) {
  return (
    <section className={cn(heroVariants({ variant, className }))} {...props}>
      {variant === 'homepage' && (
        <>
          <div
            className="absolute inset-0 bg-[url('/images/hero-bg.jpeg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-hero-overlay opacity-70 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-accent-glow pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}
      <div
        className={cn(
          'relative mx-auto w-full max-w-container px-6 md:px-8 lg:px-10',
          variant === 'homepage'
            ? 'py-20 md:py-26 lg:py-30'
            : variant === 'quickscan'
              ? 'py-20 md:py-26'
              : 'py-16 md:py-20',
          centered && 'text-center'
        )}
      >
        {children}
      </div>
    </section>
  )
}

export { Hero, heroVariants }
