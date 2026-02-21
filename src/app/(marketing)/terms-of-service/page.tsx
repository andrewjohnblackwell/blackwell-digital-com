import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service for using the Blackwell Digital website, including the AI Maturity QuickScan and other online tools.',
  path: '/terms-of-service',
  noIndex: true,
})

export default function TermsOfServicePage() {
  return (
    <>
      <Hero variant="interior">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-fg-primary mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-fg-tertiary">Last Updated: February 2025</p>
      </Hero>

      <SectionContainer width="narrow">
        <div className="prose-custom space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Acceptance of Terms
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              By accessing or using blackwelldigital.com, you agree to these
              terms. If you do not agree, do not use the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Use of the Site
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              This site is provided for informational purposes and to facilitate
              engagement with Blackwell Digital&apos;s services. You agree to use
              the site lawfully and not to interfere with its operation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              AI Maturity QuickScan
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              The QuickScan is a diagnostic tool that provides general
              recommendations based on your responses. Results are not a
              guarantee of specific outcomes. Results are personalized to your
              inputs but should be considered alongside professional
              consultation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Intellectual Property
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              All content on this site &mdash; including text, graphics, the AI
              Maturity Framework, and QuickScan tool &mdash; is owned by
              Blackwell Digital and protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works
              without written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Disclaimers
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              The site and its content are provided &ldquo;as is.&rdquo;
              Blackwell Digital makes no warranties, express or implied,
              regarding the accuracy, completeness, or fitness for a particular
              purpose of any content. Business outcomes described in case studies
              and marketing materials reflect specific client engagements and are
              not guaranteed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Limitation of Liability
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              To the fullest extent permitted by law, Blackwell Digital is not
              liable for any indirect, incidental, or consequential damages
              arising from your use of this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              External Links
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              This site may contain links to third-party websites. We are not
              responsible for the content or practices of those sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Governing Law
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              These terms are governed by the laws of the State of Illinois.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Changes to Terms
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We may update these terms at any time. Continued use of the site
              after changes constitutes acceptance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Contact
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Questions about these terms? Contact us through our{' '}
              <a
                href="/contact"
                className="text-primary hover:text-primary-hover transition-colors underline underline-offset-2"
              >
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </SectionContainer>
    </>
  )
}
