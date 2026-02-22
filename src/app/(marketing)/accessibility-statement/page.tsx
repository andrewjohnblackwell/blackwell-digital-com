import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'

export const metadata = createMetadata({
  title: 'Accessibility Statement',
  description:
    'Blackwell Digital\u2019s commitment to web accessibility, conformance with WCAG 2.1 AA, and how to request accommodations.',
  path: '/accessibility-statement',
  noIndex: true,
})

export default function AccessibilityStatementPage() {
  return (
    <>
      <Hero variant="interior">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-fg-primary mb-2">
          Accessibility Statement
        </h1>
      </Hero>

      <SectionContainer width="narrow">
        <div className="prose-custom space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Our Commitment
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Blackwell Digital is committed to making our website accessible to all visitors,
              including people with disabilities. We target conformance with the Web Content
              Accessibility Guidelines (WCAG) 2.1 at the AA level.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              What We&apos;ve Done
            </h2>
            <ul className="space-y-2 text-fg-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Semantic HTML structure throughout the site
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Keyboard navigation support for all interactive elements
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Sufficient color contrast ratios meeting WCAG 2.1 AA standards
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Descriptive alt text on all meaningful images
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Focus indicators on all interactive elements
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Skip-to-content link on every page
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                ARIA attributes where native HTML is insufficient
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Accessible forms with visible labels, error identification, and clear instructions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Responsive design that functions at 200% zoom without content loss
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Known Limitations
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We continuously test and improve our site. If you encounter an accessibility
              barrier, please let us know — we&apos;re committed to addressing it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Third-Party Content
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Some embedded content is provided by third parties. While we advocate for
              accessibility in our vendor selections, we cannot guarantee full conformance
              of third-party tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Contact Us
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              If you experience difficulty accessing any part of this site or need content in
              an alternative format, please contact us:
            </p>
            <p className="text-fg-secondary leading-relaxed">
              Email:{' '}
              <a
                href="mailto:contact@blackwelldigital.com"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                contact@blackwelldigital.com
              </a>
              <br />
              Phone:{' '}
              <a
                href="tel:+13148731603"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                (314) 873-1603
              </a>
            </p>
            <p className="text-fg-secondary leading-relaxed">
              We will respond within 2 business days and work to resolve the issue.
            </p>
          </section>
        </div>
      </SectionContainer>
    </>
  )
}
