import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/hero'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { NewsletterForm } from '@/components/newsletter-form'

export const metadata = createMetadata({
  title: 'AI Transformation Insights for Business Leaders',
  description:
    'Practical insights on AI maturity, operations automation, marketing systems, and digital transformation for businesses doing $1M\u2013$25M in revenue.',
  path: '/insights',
})

const CATEGORIES = ['All', 'AI Maturity', 'Operations', 'Marketing', 'Digital Transformation']

const PLACEHOLDER_ARTICLES = [
  {
    category: 'AI Maturity',
    title: 'What Is AI Maturity \u2014 And Why Should a $5M Business Care?',
    excerpt: 'A practical breakdown of the four AI maturity stages and what each one means for your bottom line.',
    readTime: '7 min read',
  },
  {
    category: 'Operations',
    title: 'The 5 Workflows Every Growing Business Should Automate First',
    excerpt: 'Where to start when everything feels manual and time is the scarcest resource.',
    readTime: '5 min read',
  },
  {
    category: 'Marketing',
    title: 'Building a Lead Engine That Doesn\u2019t Depend on Referrals',
    excerpt: 'How to move from word-of-mouth growth to systematic inbound pipeline.',
    readTime: '6 min read',
  },
  {
    category: 'Digital Transformation',
    title: 'Your Website Is Not a Brochure \u2014 Here\u2019s What It Should Be',
    excerpt: 'Why your digital presence needs to work as hard as your sales team.',
    readTime: '5 min read',
  },
  {
    category: 'AI Maturity',
    title: 'From Automation to Autonomy: What Comes After the Workflows',
    excerpt: 'Once you\u2019ve automated the obvious, here\u2019s what Stage 3 and 4 businesses do differently.',
    readTime: '8 min read',
  },
  {
    category: 'Operations',
    title: 'The Real Cost of Manual Processes at $10M Revenue',
    excerpt: 'Quantifying the hidden drag that manual operations put on growing businesses.',
    readTime: '6 min read',
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Block 1: Hero */}
      <Hero variant="interior">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-fg-primary mb-4">
            Insights That Move the Needle
          </h1>
          <p className="text-lg md:text-xl text-fg-secondary max-w-3xl mx-auto">
            Practical thinking on AI transformation for business leaders &mdash;
            not vendor hype, not academic theory. Written for the people who sign
            the checks and own the outcomes.
          </p>
        </ScrollReveal>
      </Hero>

      {/* Block 2: Category Filter (decorative) */}
      <SectionContainer padding="none" className="py-6 border-b border-border-subtle">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-default ${
                i === 0
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white/[0.04] text-fg-secondary border border-white/[0.08] hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </SectionContainer>

      {/* Block 3: Article Grid */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_ARTICLES.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 0.08}>
              <Card variant="blog-post" className="h-full flex flex-col">
                <CardHeader>
                  <Badge variant="primary" size="sm">
                    {article.category}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-3">
                  <h3 className="text-lg font-heading font-semibold text-fg-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-fg-secondary leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-fg-tertiary">{article.readTime}</span>
                    <Badge variant="default" size="sm">
                      Coming soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Block 4: Newsletter Signup */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <div className="mx-auto max-w-xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              Get AI Transformation Insights Delivered Monthly
            </h2>
            <p className="text-fg-secondary">
              One email per month. No spam. Practical insights on AI maturity,
              operations, and growth for business leaders.
            </p>
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 5: CTA */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              Not Sure Where to Start?
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              Take the AI Maturity QuickScan to find out where your business
              stands &mdash; and get personalized recommendations in under 10
              minutes.
            </p>
            <Link
              href="/quickscan"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Take the QuickScan
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  )
}
