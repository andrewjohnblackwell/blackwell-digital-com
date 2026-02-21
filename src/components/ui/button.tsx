import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-normal ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground rounded-lg shadow-glow-blue hover:bg-primary-hover hover:shadow-glow-blue-lg active:bg-primary-active active:scale-[0.98] active:shadow-none disabled:bg-primary-disabled disabled:shadow-none',
        secondary:
          'bg-transparent text-fg-primary border border-strong rounded-lg hover:bg-white/[0.06] hover:border-white/[0.28] active:bg-white/[0.03] active:border-white/[0.10]',
        ghost:
          'bg-transparent text-fg-secondary rounded-lg hover:text-fg-primary hover:underline active:text-fg-tertiary',
        accent:
          'bg-electric-fade text-primary-foreground rounded-lg shadow-[0_0_30px_rgba(14,165,233,0.30)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] active:scale-[0.98] disabled:opacity-40',
        destructive:
          'bg-error text-white rounded-lg hover:bg-[#dc2626] active:bg-error-dark focus-visible:outline-error',
        icon: 'bg-transparent rounded-lg hover:bg-white/[0.06] active:bg-white/[0.10] active:scale-[0.95]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-[52px] px-7 text-lg',
        xl: 'h-14 px-9 text-lg',
      },
    },
    compoundVariants: [
      {
        variant: 'icon',
        size: 'sm',
        class: 'h-9 w-9 p-0',
      },
      {
        variant: 'icon',
        size: 'md',
        class: 'h-11 w-11 p-0',
      },
      {
        variant: 'icon',
        size: 'lg',
        class: 'h-[52px] w-[52px] p-0',
      },
      {
        variant: 'icon',
        size: 'xl',
        class: 'h-14 w-14 p-0',
      },
      {
        variant: 'ghost',
        size: 'sm',
        class: 'text-sm',
      },
      {
        variant: 'ghost',
        size: 'md',
        class: 'text-sm',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={loading || undefined}
        {...props}
      >
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
