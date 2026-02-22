'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PRIMARY_NAV } from '@/lib/constants'
import { buttonVariants } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-overlay bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-drawer w-full bg-bg-base data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-250 focus:outline-none"
          aria-label="Mobile navigation"
        >
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/" aria-label="Blackwell Digital — Home" onClick={onClose}>
              <Image
                src="/images/logo-white.png"
                alt="Blackwell Digital"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <DialogPrimitive.Close className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg-secondary hover:bg-white/[0.04] transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
              <X className="h-5 w-5" />
              <span className="sr-only">Close navigation</span>
            </DialogPrimitive.Close>
          </div>

          {/* Nav Links */}
          <nav className="px-6 py-4" aria-label="Mobile navigation">
            {PRIMARY_NAV.map((item) =>
              item.children ? (
                <Accordion type="single" collapsible key={item.label}>
                  <AccordionItem value={item.label} className="border-b-0">
                    <AccordionTrigger className="py-4 text-xl font-heading font-semibold text-fg-primary hover:text-primary">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="flex flex-col gap-0">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-3 pl-4 text-base text-fg-secondary hover:text-fg-primary transition-colors duration-normal"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block py-4 text-xl font-heading font-semibold transition-colors duration-normal',
                    item.href === '/quickscan'
                      ? 'text-primary hover:text-primary-hover'
                      : 'text-fg-primary hover:text-primary'
                  )}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Separator */}
          <div className="mx-6 h-px bg-border-subtle" />

          {/* CTAs */}
          <div className="px-6 py-6 flex flex-col gap-3">
            <Link
              href="/quickscan"
              className={cn(
                buttonVariants({ variant: 'accent', size: 'lg' }),
                'w-full'
              )}
              onClick={onClose}
            >
              Take the QuickScan
            </Link>
            <Link
              href="/contact"
              className="text-center text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors duration-normal"
              onClick={onClose}
            >
              Book a Strategy Call
            </Link>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { MobileNav }
