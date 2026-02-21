import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'w-full bg-bg-inset border border-white/[0.10] text-fg-primary placeholder:text-fg-tertiary font-body transition-colors duration-normal ease-standard focus:border-primary focus:ring-[3px] focus:ring-primary/20 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-bg-base',
  {
    variants: {
      inputSize: {
        sm: 'h-9 px-3 text-sm rounded-md',
        md: 'h-11 px-4 text-base rounded-lg',
        lg: 'h-[52px] px-5 text-base rounded-lg',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ inputSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input, inputVariants }
