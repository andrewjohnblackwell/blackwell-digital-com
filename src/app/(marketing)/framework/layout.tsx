'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const FRAMEWORK_NAV = [
  { label: 'Overview', href: '/framework' },
  { label: 'Stage 1: Manual', href: '/framework/manual' },
  { label: 'Stage 2: Assisted', href: '/framework/assisted' },
  { label: 'Stage 3: Automated', href: '/framework/automated' },
  { label: 'Stage 4: Autonomous', href: '/framework/autonomous' },
] as const

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <nav
        aria-label="Framework stages"
        className="sticky top-[72px] z-[199] border-b border-border-subtle bg-bg-base/95 backdrop-blur-sm md:top-[72px]"
      >
        <div className="mx-auto w-full max-w-container px-6 md:px-8 lg:px-10">
          <ul className="flex gap-1 overflow-x-auto scrollbar-none -mb-px">
            {FRAMEWORK_NAV.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-block whitespace-nowrap px-3 py-3 text-sm font-medium transition-colors duration-normal',
                      isActive
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-fg-secondary hover:text-fg-primary'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      {children}
    </>
  )
}
