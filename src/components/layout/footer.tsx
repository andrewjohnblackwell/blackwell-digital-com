import * as React from 'react'
import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG, FOOTER_NAV, SOCIAL_LINKS } from '@/lib/constants'
import { NewsletterForm } from '@/components/newsletter-form'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-bg-inset border-t border-border-subtle"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-10 pt-20 pb-10 md:pt-20 md:pb-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand + Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-lg font-bold text-fg-primary tracking-tight"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 text-sm text-fg-tertiary leading-relaxed max-w-xs">
              AI transformation consultancy for growth-stage businesses.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-fg-secondary mb-4">
              Services
            </h3>
            <nav aria-label="Footer services navigation">
              <ul className="flex flex-col gap-3">
                {FOOTER_NAV.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-tertiary hover:text-fg-primary transition-colors duration-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-fg-secondary mb-4">
              Company
            </h3>
            <nav aria-label="Footer company navigation">
              <ul className="flex flex-col gap-3">
                {FOOTER_NAV.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-tertiary hover:text-fg-primary transition-colors duration-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-fg-secondary mb-4">
              Legal
            </h3>
            <nav aria-label="Footer legal navigation">
              <ul className="flex flex-col gap-3">
                {FOOTER_NAV.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-tertiary hover:text-fg-primary transition-colors duration-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border-subtle pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-tertiary">
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-tertiary hover:text-fg-secondary transition-colors duration-normal"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {SOCIAL_LINKS.twitter && (
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-tertiary hover:text-fg-secondary transition-colors duration-normal"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
