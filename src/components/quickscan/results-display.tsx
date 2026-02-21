'use client'

import Link from 'next/link'
import { SectionContainer } from '@/components/layout/section-container'
import { ScrollReveal } from '@/components/sections/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { MaturityGauge } from './maturity-gauge'
import { DimensionScoreBar } from './dimension-score-bar'
import { RecommendationCard } from './recommendation-card'
import type { QuickScanResult } from '@/lib/quickscan/types'

interface ResultsDisplayProps {
  result: QuickScanResult
}

function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { score, stageName, stageSummary, recommendations, dimensionInterpretations, relatedInsights } = result

  return (
    <>
      {/* Block 1: Score Visualization */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-fg-primary">
              Your AI Maturity Stage: {stageName}
            </h1>
            <MaturityGauge
              stage={score.overall}
              stageName={stageName}
              overallAverage={score.overallAverage}
            />
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 2: Stage Summary */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              What Stage {score.overall} Means for Your Business
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              {stageSummary}
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 3: Personalized Recommendations */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              Your Recommended Next Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, i) => (
                <ScrollReveal key={rec.href + i} delay={i * 0.1}>
                  <RecommendationCard recommendation={rec} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 4: Dimension Breakdown */}
      <SectionContainer className="bg-bg-elevated border-y border-border-subtle">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              Your Scores by Dimension
            </h2>
            <div className="space-y-8">
              {score.dimensions.map((dim, i) => (
                <ScrollReveal key={dim.dimension} delay={i * 0.1}>
                  <DimensionScoreBar
                    dimension={dim.dimension}
                    score={dim.outOf10}
                    interpretation={dimensionInterpretations[dim.dimension]}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 5: Next Steps CTA */}
      <SectionContainer>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
              What Happens Next
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              You have your score. Now you have a choice: dig deeper on your own
              with our framework and insights, or get on a 30-minute call where
              we&apos;ll walk through your results and map out a specific action
              plan. No pitch. No pressure. Just a conversation about what&apos;s
              possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                Book Your Strategy Call
              </Link>
              <Link
                href="/quickscan"
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                Retake the QuickScan
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Block 6: Related Insights */}
      {relatedInsights.length > 0 && (
        <SectionContainer className="bg-bg-elevated border-t border-border-subtle">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl space-y-8">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-fg-primary">
                Recommended Reading for Stage {score.overall}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedInsights.map((insight, i) => (
                  <ScrollReveal key={insight.title} delay={i * 0.1}>
                    <Card>
                      <CardContent className="space-y-3">
                        <Badge variant="primary" size="sm">
                          {insight.category}
                        </Badge>
                        <h3 className="text-base font-heading font-semibold text-fg-primary">
                          {insight.title}
                        </h3>
                        <Link
                          href={insight.href}
                          className="text-sm text-primary hover:text-primary-hover transition-colors"
                        >
                          Read Article &rarr;
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </SectionContainer>
      )}
    </>
  )
}

export { ResultsDisplay }
