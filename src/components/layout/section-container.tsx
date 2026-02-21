import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div'
  width?: 'default' | 'wide' | 'narrow'
  padding?: 'default' | 'lg' | 'none'
}

function SectionContainer({
  as: Component = 'section',
  width = 'default',
  padding = 'default',
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        padding === 'default' && 'section-padding',
        padding === 'lg' && 'section-padding-lg',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'mx-auto w-full px-6 md:px-8 lg:px-10',
          width === 'default' && 'max-w-container',
          width === 'wide' && 'max-w-container-wide',
          width === 'narrow' && 'max-w-container-narrow'
        )}
      >
        {children}
      </div>
    </Component>
  )
}

export { SectionContainer }
