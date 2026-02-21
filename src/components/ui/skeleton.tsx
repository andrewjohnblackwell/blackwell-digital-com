import * as React from 'react'
import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-busy="true"
      className={cn(
        'bg-white/[0.06] rounded-lg animate-skeleton-shimmer bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent motion-reduce:animate-none',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
