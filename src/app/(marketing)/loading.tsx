import { Skeleton } from '@/components/ui/skeleton'

export default function MarketingLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="container-bd py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Skeleton className="h-5 w-32 mx-auto" />
          <Skeleton className="h-12 w-full max-w-xl mx-auto" />
          <Skeleton className="h-12 w-full max-w-md mx-auto" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          <Skeleton className="h-6 w-full max-w-sm mx-auto" />
          <div className="flex gap-4 justify-center pt-4">
            <Skeleton className="h-11 w-36 rounded-lg" />
            <Skeleton className="h-11 w-36 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content blocks skeleton */}
      <div className="container-bd py-16 space-y-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4 max-w-4xl mx-auto">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}
