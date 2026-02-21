import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { CalendlyEmbed } from '@/components/calendly-embed'
import { createMetadata } from '@/lib/metadata'
import { localBusinessSchema } from '@/lib/schema'
import { NAP, SOCIAL_LINKS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export const metadata = createMetadata({
  title: 'Contact Blackwell Digital — Book a Strategy Call',
  description:
    'Book a 30-minute strategy call or send us a message. Blackwell Digital responds within one business day. No obligation. No pitch deck.',
  path: '/contact',
})

const hasNAP = !!(NAP.address.city && NAP.phone && NAP.email)

const ALT_PATHS = [
  {
    label: 'Take the QuickScan',
    body: 'Get your AI maturity score in 10 minutes',
    href: '/quickscan',
  },
  {
    label: 'Read Our Insights',
    body: 'Browse practical AI transformation content',
    href: '/insights',
  },
  {
    label: 'Explore Our Framework',
    body: 'Understand the AI Maturity model',
    href: '/framework',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD for local business */}
      {hasNAP && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      )}

      {/* Block 1: Hero */}
      <Hero variant="interior">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-electric-500 mb-4">
          Contact
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-fg-primary tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Let&apos;s Talk About What&apos;s Possible
        </h1>
        <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
          Book a strategy call or send us a message. We respond within one business day. No pitch
          deck. No obligation. Just a clear conversation about your business and what AI can do for
          it.
        </p>
      </Hero>

      {/* Block 2: Calendly */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-6">
            Book a Strategy Call
          </h2>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-6">
            The strategy call is 30 minutes. Here&apos;s what we&apos;ll cover:
          </p>
          <ul className="space-y-3 max-w-xl mx-auto mb-10">
            {[
              'Your current business challenges and goals',
              'A quick assessment of your AI maturity (or a review of your QuickScan results if you\'ve taken it)',
              'An honest recommendation on whether — and how — Blackwell can help',
              'Clear next steps, no matter what you decide',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-fg-secondary text-sm md:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-fg-tertiary text-sm text-center mb-8">
            <strong className="text-fg-secondary">Who should attend:</strong> The person who owns
            the decision — typically the CEO, COO, or head of the initiative.
          </p>
          <CalendlyEmbed />
        </ScrollReveal>
      </SectionContainer>

      {/* Block 3: Contact Form */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-4">
              Prefer to Send a Message?
            </h2>
            <p className="text-fg-secondary text-center mb-8">
              We&apos;ll respond within one business day.
            </p>
            <ContactForm />
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Block 4: NAP — conditional */}
      {hasNAP && (
        <SectionContainer>
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-8">
              Where to Find Us
            </h2>
            <div className="max-w-md mx-auto text-center text-fg-secondary space-y-1">
              <p className="font-medium text-fg-primary">{NAP.name}</p>
              {NAP.address.street && <p>{NAP.address.street}</p>}
              {NAP.address.city && (
                <p>
                  {NAP.address.city}, {NAP.address.state} {NAP.address.zip}
                </p>
              )}
              {NAP.phone && <p>{NAP.phone}</p>}
              {NAP.email && (
                <p>
                  <a
                    href={`mailto:${NAP.email}`}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    {NAP.email}
                  </a>
                </p>
              )}
            </div>
          </ScrollReveal>
        </SectionContainer>
      )}

      {/* Block 5: Alternative Paths */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg-primary text-center mb-4">
            Not Ready for a Call?
          </h2>
          <p className="text-fg-secondary text-center mb-10">
            No pressure. Here are other ways to start:
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ALT_PATHS.map((path, i) => (
            <ScrollReveal key={path.href} delay={i * 0.1}>
              <Link href={path.href} className="block h-full">
                <Card className="h-full hover:border-primary/40 transition-colors">
                  <CardContent>
                    <h3 className="font-heading text-base font-bold text-fg-primary mb-2">
                      {path.label}
                    </h3>
                    <p className="text-fg-secondary text-sm mb-3">{path.body}</p>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                      Go <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Social links */}
        {(SOCIAL_LINKS.linkedin || SOCIAL_LINKS.twitter) && (
          <div className="flex items-center justify-center gap-6">
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blackwell Digital on LinkedIn"
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                LinkedIn
              </a>
            )}
            {SOCIAL_LINKS.twitter && (
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blackwell Digital on X"
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                X / Twitter
              </a>
            )}
          </div>
        )}
      </SectionContainer>
    </>
  )
}
