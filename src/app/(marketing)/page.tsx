import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'

export default function HomePage() {
  return (
    <Hero variant="homepage">
      <p className="text-sm font-medium tracking-widest uppercase text-brand-electric-500 mb-6">
        AI Maturity Consultancy
      </p>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-fg-primary tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
        Your Business Runs on Systems.{' '}
        <span className="text-gradient">We Make Them Intelligent.</span>
      </h1>
      <p className="text-lg md:text-xl text-fg-secondary max-w-prose-hero mx-auto mb-10 leading-relaxed">
        Blackwell Digital helps growth-stage businesses turn AI from a buzzword into a
        measurable operating advantage.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/quickscan"
          className={buttonVariants({ variant: 'accent', size: 'lg' })}
        >
          Take the QuickScan
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({ variant: 'secondary', size: 'lg' })}
        >
          Book a Strategy Call
        </Link>
      </div>
    </Hero>
  )
}
