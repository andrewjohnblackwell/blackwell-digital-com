import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { MaturityDiagram, type StageData } from '@/components/sections/maturity-diagram'
import { RelatedInsights, type InsightCard } from '@/components/sections/framework-page'
import { ServiceFAQ, ServiceCTA } from '@/components/sections/service-page'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = createMetadata({
  title: 'The AI Maturity Framework for SMBs \u2014 Blackwell Digital',
  description:
    'The AI Maturity Framework maps every business to one of four stages \u2014 Manual, Assisted, Automated, or Autonomous. Learn where your company stands and what to do next.',
  path: '/framework',
})

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const STAGES: StageData[] = [
  {
    number: 1,
    name: 'Manual',
    characteristics: [
      'Most workflows depend on individual effort and tribal knowledge',
      'Spreadsheets, email threads, and manual data entry dominate',
      'No marketing automation \u2014 growth depends on referrals and personal networks',
      'Website is a digital brochure, not a business system',
      'Reporting is ad hoc and backward-looking',
    ],
    symptoms: [
      'Your best employee leaving would break critical processes',
      'Onboarding new staff takes months, not weeks',
      'You can\u2019t answer \u201cwhat\u2019s our customer acquisition cost?\u201d without digging through three systems',
      'Growth requires adding headcount proportionally',
    ],
    whatGoodLooksLike:
      'You\u2019re getting work done, and the business is generating revenue. That\u2019s not nothing. The risk: you\u2019re building on a foundation that doesn\u2019t scale.',
    recommendedAction:
      'Start with the Foundation Sprint \u2014 a 4-week diagnostic that identifies your highest-ROI automation opportunities and delivers your first working AI workflows.',
    ctaLabel: 'Learn About the Foundation Sprint',
    ctaHref: '/services/foundation-sprint',
  },
  {
    number: 2,
    name: 'Assisted',
    characteristics: [
      'Some tools are in place \u2014 a CRM, project management software, maybe basic email marketing',
      'These tools operate in silos; data doesn\u2019t flow between them',
      'Some processes have templates or checklists, but execution is still manual',
      'Marketing generates some leads, but follow-up is inconsistent',
      'There\u2019s awareness that \u201cAI could help\u201d but no clear plan',
    ],
    symptoms: [
      'Your CRM has thousands of records but no one trusts the data',
      'Your marketing team and operations team use different tools, different metrics, and different definitions of \u201cqualified\u201d',
      'You\u2019ve tried automating a few things, but they broke or got abandoned',
      'Scaling still means hiring; the systems don\u2019t create leverage',
    ],
    whatGoodLooksLike:
      'You\u2019ve built the raw materials. The tools exist. The data exists. What\u2019s missing is the architecture to connect them.',
    recommendedAction:
      'The AI Growth System connects your existing tools into integrated, AI-driven systems across marketing and operations \u2014 in 90 days.',
    ctaLabel: 'Learn About the AI Growth System',
    ctaHref: '/services/ai-growth-system',
  },
  {
    number: 3,
    name: 'Automated',
    characteristics: [
      'Key workflows run automatically with minimal human intervention',
      'Marketing and operations share data and systems',
      'Lead generation, scoring, and routing are systematized',
      'Reporting is real-time and trusted',
      'Team focuses on exceptions and judgment calls, not process execution',
    ],
    symptoms: [
      'Growth doesn\u2019t require proportional headcount increases',
      'New initiatives can be launched in days, not months',
      'You can measure ROI on individual workflows and campaigns',
      'The business runs when you\u2019re not in the building',
    ],
    whatGoodLooksLike:
      'You\u2019ve built real leverage. The question now is: how far can this go?',
    recommendedAction:
      'The AI-First Operating System expands automated infrastructure to every function and builds the unified command center that turns your business into an adaptive, data-driven organism.',
    ctaLabel: 'Learn About the AI-First OS',
    ctaHref: '/services/ai-first-operating-system',
  },
  {
    number: 4,
    name: 'Autonomous',
    characteristics: [
      'AI-driven systems handle the majority of repeatable decisions and workflows',
      'Human involvement is reserved for strategy, relationships, and exception handling',
      'The business adapts to market changes automatically through connected intelligence',
      'Cross-functional data flows create compounding insights and efficiencies',
      'The operating system itself improves over time',
    ],
    symptoms: [
      'Your team spends 80%+ of their time on high-judgment, high-value work',
      'You can enter new markets, launch new products, or onboard new clients with minimal process ramp-up',
      'Your systems surface opportunities and risks before anyone has to ask',
    ],
    whatGoodLooksLike:
      'This is the end state \u2014 and very few SMBs are here yet. But every step toward autonomous reduces cost, increases speed, and compounds your competitive advantage.',
    recommendedAction:
      'If you\u2019re approaching Stage 4, our quarterly optimization retainer keeps your systems evolving. If you\u2019re not sure where you stand, take the QuickScan.',
    ctaLabel: 'Take the QuickScan',
    ctaHref: '/quickscan',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Is this framework proprietary?',
    answer:
      'Yes. The AI Maturity Framework was developed by Blackwell Digital through direct client work. It\u2019s informed by industry research and maturity models but specifically calibrated for SMBs in the $1M\u2013$25M range.',
  },
  {
    question: 'How is this different from generic AI readiness assessments?',
    answer:
      'Most readiness assessments ask whether you have data and budget. Ours evaluates three specific dimensions \u2014 operations, marketing, and digital \u2014 and maps them to actionable service recommendations, not generic advice.',
  },
  {
    question: 'Can we be at different stages across dimensions?',
    answer:
      'Absolutely. Most businesses are. You might have Stage 2 operations and Stage 1 marketing. The dimension-level breakdown is where the real insight lives.',
  },
  {
    question: 'How long does it take to move from one stage to the next?',
    answer:
      'It depends on your starting point, resources, and commitment. The Foundation Sprint (4 weeks) typically moves businesses from Stage 1 to early Stage 2. The AI Growth System (90 days) bridges Stage 2 to Stage 3. The AI-First Operating System (6 months) can take a business from Stage 2 to solid Stage 3 with elements of Stage 4.',
  },
  {
    question: 'What if we\u2019re already at Stage 3?',
    answer:
      'That\u2019s uncommon for SMBs \u2014 and it\u2019s a strong position. Our quarterly optimization retainer is designed for Stage 3 businesses that want to push toward Stage 4 without hiring a full-time AI team.',
  },
  {
    question: 'Is this relevant for my industry?',
    answer:
      'The framework has been applied in professional services, manufacturing, distribution, home services, construction, and more. The dimensions (operations, marketing, digital) are universal. The specific workflows and benchmarks are calibrated by industry.',
  },
  {
    question: 'Do I need to hire an AI team to move up stages?',
    answer:
      'No. That\u2019s the point. Blackwell provides the AI expertise so you don\u2019t have to build it in-house. Your team focuses on running the business; we build the systems.',
  },
  {
    question: 'How do I know which stage I\u2019m at right now?',
    answer:
      'Take the QuickScan. Ten minutes. Free. You\u2019ll get your stage and a dimension-level breakdown.',
  },
]

const INSIGHT_CARDS: InsightCard[] = [
  {
    category: 'AI Maturity',
    title: 'What Is AI Maturity \u2014 And Why Should a $5M Business Care?',
    href: '/insights',
  },
  {
    category: 'Operations',
    title: 'The 5 Workflows Every Growing Business Should Automate First',
    href: '/insights',
  },
  {
    category: 'Digital Transformation',
    title: 'Stage 2 Is Where Most Businesses Get Stuck. Here\u2019s Why.',
    href: '/insights',
  },
]

const HOW_WE_USE_STEPS = [
  {
    label: 'Assessment',
    description:
      'Every client engagement begins with a maturity assessment. Your QuickScan results (or a more detailed in-person evaluation) determine your stage across operations, marketing, and digital.',
  },
  {
    label: 'Scoping',
    description:
      'Your maturity stage determines which service tier is the right fit. Stage 1 businesses start with the Foundation Sprint. Stage 2\u20133 businesses typically move into the AI Growth System or AI-First Operating System. We never recommend more than what your maturity stage supports.',
  },
  {
    label: 'Measurement',
    description:
      'Your maturity stage becomes the baseline. At the end of every engagement, we reassess \u2014 showing exactly how far you\u2019ve moved and quantifying the business impact.',
  },
  {
    label: 'Ongoing Evolution',
    description:
      'For retainer clients, quarterly maturity reassessments track progression and surface new opportunities as your business evolves.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FrameworkPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
          AI Maturity Framework
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.75rem] font-bold text-fg-primary tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
          The AI Maturity Framework
        </h1>
        <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
          A structured diagnostic model that maps your business to one of four stages &mdash; Manual, Assisted, Automated, or Autonomous &mdash; across operations, marketing, and digital. Built for companies doing $1M&ndash;$25M in revenue who need a clear, actionable path to AI-driven growth.
        </p>
      </Hero>

      {/* Block 2: Framework Overview */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-8">
            Why AI Maturity Matters More Than AI Tools
          </h2>
          <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed">
            <p>
              The AI market is flooded with tools. New platforms launch every week. Vendors promise transformation in a checkbox. And most businesses &mdash; especially in the $1M&ndash;$25M range &mdash; are drowning in options without a framework for deciding what actually matters.
            </p>
            <p>
              AI maturity is the missing diagnostic. It answers three questions that no tool can:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>Where are you now &mdash; across operations, marketing, and digital?</li>
              <li>Where should you be &mdash; based on your size, industry, and growth goals?</li>
              <li>What&apos;s the fastest, highest-ROI path from here to there?</li>
            </ol>
            <p>
              The AI Maturity Framework was developed by Blackwell Digital through direct client work across professional services, manufacturing, home services, and construction. It&apos;s not academic theory. It&apos;s a practitioner&apos;s model &mdash; refined through real engagements with real businesses producing real results.
            </p>
            <p>
              Every Blackwell engagement starts here. It shapes what we recommend, what we build, and how we measure success.
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 3: Maturity Stage Diagram */}
      <SectionContainer>
        <ScrollReveal>
          <MaturityDiagram stages={STAGES} />
        </ScrollReveal>
      </SectionContainer>

      {/* Block 5: QuickScan CTA */}
      <SectionContainer>
        <ScrollReveal>
          <Card variant="feature" className="max-w-2xl mx-auto text-center">
            <CardContent className="py-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-fg-primary mb-4">
                Where Does Your Business Fall?
              </h2>
              <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-lg mx-auto">
                Most businesses in the $1M&ndash;$25M range score between Stage 1 and Stage 2. The QuickScan tells you exactly where you are across operations, marketing, and digital &mdash; in under 10 minutes.
              </p>
              <Link
                href="/quickscan"
                className={buttonVariants({ variant: 'accent', size: 'lg' })}
              >
                Take the Free QuickScan
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 6: How We Use the Framework */}
      <SectionContainer width="narrow">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center mb-4">
            How Blackwell Uses the AI Maturity Framework
          </h2>
          <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-center mb-10">
            The framework isn&apos;t just a diagnostic &mdash; it&apos;s the foundation of every engagement.
          </p>
        </ScrollReveal>
        <div className="space-y-8">
          {HOW_WE_USE_STEPS.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 0.08}>
              <div className="border-l-2 border-primary/30 pl-5">
                <h3 className="font-heading text-lg font-semibold text-fg-primary mb-2">
                  {step.label}
                </h3>
                <p className="text-fg-secondary text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 7: FAQ */}
      <ServiceFAQ
        heading="Frequently Asked Questions About AI Maturity"
        items={FAQ_ITEMS}
      />

      {/* Block 8: Related Insights */}
      <RelatedInsights
        heading="Deeper Reading on AI Maturity"
        cards={INSIGHT_CARDS}
      />

      {/* Block 9: Final CTA */}
      <ServiceCTA
        heading="Stop Guessing Your AI Readiness. Measure It."
        body="The QuickScan gives you a clear maturity score in under 10 minutes. Or, if you&apos;d rather start with a conversation, book a strategy call and we&apos;ll assess your stage together."
        primaryLabel="Take the QuickScan"
        primaryHref="/quickscan"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />
    </>
  )
}
