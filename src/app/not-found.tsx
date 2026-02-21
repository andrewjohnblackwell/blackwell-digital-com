import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center">
      <div className="container-bd text-center max-w-2xl">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-fg-primary mb-4">
          This page doesn&apos;t exist — but a better path might.
        </h1>
        <p className="text-lg text-fg-secondary mb-10">
          Here&apos;s where you probably want to go:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Framework', href: '/framework' },
            { label: 'QuickScan', href: '/quickscan' },
            { label: 'Insights', href: '/insights' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-center p-4 rounded-xl bg-bg-surface border border-border hover:border-border-accent transition-colors duration-normal text-fg-primary font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-fg-tertiary mb-4">
          Or, take the AI Maturity QuickScan while you&apos;re here.
        </p>
        <Link
          href="/quickscan"
          className={buttonVariants({ variant: 'accent', size: 'lg' })}
        >
          Take the QuickScan
        </Link>
      </div>
    </main>
  )
}
