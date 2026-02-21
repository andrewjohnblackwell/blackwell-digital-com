'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PRIMARY_NAV, type NavItem } from '@/lib/constants'
import { buttonVariants } from '@/components/ui/button'
import { MobileNav } from './mobile-nav'

function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-sticky backdrop-blur-[12px] border-b transition-all duration-moderate',
        scrolled
          ? 'bg-bg-base/[0.97] border-white/[0.10] shadow-[0_4px_24px_rgba(0,0,0,0.40)]'
          : 'bg-bg-base/[0.90] border-border-subtle'
      )}
    >
      <div className="mx-auto flex h-16 md:h-[72px] max-w-container items-center justify-between px-6 md:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg font-bold text-fg-primary tracking-tight"
          aria-label="Blackwell Digital — Home"
        >
          Blackwell Digital
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1"
        >
          {PRIMARY_NAV.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ) : (
              <NavLink key={item.label} item={item} pathname={pathname} />
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/quickscan"
            className={buttonVariants({ variant: 'accent', size: 'sm' })}
          >
            Take the QuickScan
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg-secondary hover:bg-white/[0.04] transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = pathname === item.href
  const isQuickScan = item.href === '/quickscan'

  return (
    <Link
      href={item.href}
      className={cn(
        'px-3.5 py-2 rounded-md text-[15px] font-medium transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover',
        isQuickScan
          ? 'text-primary hover:text-primary-hover'
          : isActive
            ? 'text-fg-primary bg-primary/[0.08]'
            : 'text-fg-secondary hover:text-fg-primary hover:bg-white/[0.04]'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  )
}

function DesktopDropdown({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const isActive =
    pathname === item.href ||
    item.children?.some((c) => pathname === c.href)

  function handleEnter() {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setOpen(true), 100)
  }
  function handleLeave() {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={cn(
          'inline-flex items-center gap-1 px-3.5 py-2 rounded-md text-[15px] font-medium transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover',
          isActive
            ? 'text-fg-primary bg-primary/[0.08]'
            : 'text-fg-secondary hover:text-fg-primary hover:bg-white/[0.04]'
        )}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-normal',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {open && item.children && (
        <div
          className="absolute top-full left-0 mt-1 min-w-[280px] rounded-2xl border border-border bg-bg-elevated shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-150"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className={cn(
                'flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors duration-normal hover:bg-primary/[0.06] hover:border-l-2 hover:border-l-primary hover:pl-[14px]',
                pathname === child.href && 'bg-primary/[0.06]'
              )}
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-fg-primary">
                {child.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export { Header }
