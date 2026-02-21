import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'w-full min-h-[120px] max-h-[320px] resize-y bg-bg-inset border border-white/[0.10] rounded-lg px-4 py-3 text-base text-fg-primary placeholder:text-fg-tertiary font-body transition-colors duration-normal ease-standard focus:border-primary focus:ring-[3px] focus:ring-primary/20 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-bg-base',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
