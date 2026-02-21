import * as React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn('mb-5', className)}>
        <ol className="flex items-center flex-wrap gap-0">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.label} className="flex items-center">
                {i > 0 && (
                  <ChevronRight
                    className="mx-2 h-4 w-4 text-fg-disabled shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-xs text-fg-secondary"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xs text-fg-tertiary transition-colors duration-normal hover:text-fg-secondary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.label,
              ...(item.href ? { item: `https://blackwelldigital.com${item.href}` } : {}),
            })),
          }),
        }}
      />
    </>
  )
}

export { Breadcrumb }
