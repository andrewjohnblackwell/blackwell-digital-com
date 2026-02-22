import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Blackwell Digital\u2019s privacy policy covering data collection, QuickScan data handling, analytics, cookies, and your rights.',
  path: '/privacy-policy',
  noIndex: true,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero variant="interior">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-fg-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-fg-tertiary">Last Updated: February 2026</p>
      </Hero>

      <SectionContainer width="narrow">
        <div className="prose-custom space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Introduction
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Blackwell Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) respects your privacy. This policy explains
              what information we collect, how we use it, and your rights
              regarding that information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Information We Collect
            </h2>
            <h3 className="text-lg font-heading font-medium text-fg-primary">
              Information you provide
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-fg-secondary">
              <li>Contact form submissions (name, email, company, phone, message)</li>
              <li>
                QuickScan assessment responses and lead capture data (name,
                email, company, role, company size)
              </li>
              <li>Strategy call booking details</li>
              <li>Newsletter subscriptions</li>
            </ul>

            <h3 className="text-lg font-heading font-medium text-fg-primary">
              Information collected automatically
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-fg-secondary">
              <li>
                Analytics data (page views, session duration, referral source)
              </li>
              <li>Cookie and tracking data (see Cookie Policy section below)</li>
              <li>Technical data (browser, device, IP address &mdash; anonymized)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-fg-secondary">
              <li>To deliver your QuickScan results and personalized recommendations</li>
              <li>To respond to inquiries and schedule strategy calls</li>
              <li>
                To send occasional insights and updates (with your consent;
                unsubscribe anytime)
              </li>
              <li>To improve our website experience and content</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              QuickScan Data Handling
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Your QuickScan responses are used to generate your maturity score
              and recommendations. Results are stored securely and associated
              with your contact information for follow-up. We do not sell or
              share individual assessment data with third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Cookies
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We use essential cookies to make the site function and optional
              analytics cookies to understand how visitors use the site. You can
              manage your preferences through our cookie consent banner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Third-Party Services
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We use third-party services for analytics, CRM, email, and
              scheduling. Each has its own privacy policy. We share only the data
              necessary for these services to function.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Data Retention
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We retain your data for as long as necessary to fulfill the
              purposes described in this policy, or as required by law. You may
              request deletion at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Your Rights
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              You have the right to access, correct, or delete your personal
              data. To exercise these rights, contact us at the email address
              listed below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Changes to This Policy
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              We may update this policy from time to time. The &ldquo;last
              updated&rdquo; date at the top reflects the most recent version.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-semibold text-fg-primary">
              Contact
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              For privacy-related questions, contact us through our{' '}
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
