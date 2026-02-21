import type { Dimension, QuickScanScore, Recommendation } from './types'

const SERVICE_RECS: Record<string, Recommendation> = {
  'foundation-sprint': {
    headline: 'Start With the Foundation Sprint',
    body: 'Based on your scores, a 4-week diagnostic sprint will identify your highest-ROI automation opportunities and deliver your first working AI workflows. This is the fastest path to measurable improvement.',
    cta: 'Explore Foundation Sprint',
    href: '/services/foundation-sprint',
  },
  'ai-growth-system': {
    headline: 'Build Your AI Growth System',
    body: 'Your results suggest significant opportunity in connecting marketing and operations into an integrated growth engine. The AI Growth System builds that infrastructure in 90 days.',
    cta: 'Explore AI Growth System',
    href: '/services/ai-growth-system',
  },
  'ai-first-os': {
    headline: 'Transform With the AI-First Operating System',
    body: 'You\'re ready for full-scale AI transformation. The AI-First Operating System rebuilds your core infrastructure over 6 months — operations, marketing, and digital working as one intelligent system.',
    cta: 'Explore AI-First OS',
    href: '/services/ai-first-operating-system',
  },
  'strategy-call': {
    headline: 'Book a Strategy Call',
    body: 'Your results suggest multiple high-impact opportunities. A 30-minute strategy call will help prioritize them based on your goals, timeline, and budget.',
    cta: 'Book a Strategy Call',
    href: '/contact',
  },
}

function getLowestDimension(score: QuickScanScore): Dimension {
  const sorted = [...score.dimensions].sort((a, b) => a.outOf10 - b.outOf10)
  return sorted[0].dimension
}

export function getRecommendations(score: QuickScanScore): Recommendation[] {
  const stage = score.overall
  const lowestDim = getLowestDimension(score)

  if (stage <= 1) {
    return [
      SERVICE_RECS['foundation-sprint'],
      SERVICE_RECS['strategy-call'],
    ]
  }

  if (stage === 2) {
    const recs: Recommendation[] = [SERVICE_RECS['foundation-sprint']]

    if (lowestDim === 'marketing') {
      recs.push({
        ...SERVICE_RECS['ai-growth-system'],
        body: 'Your marketing dimension scored below your operations — which means your growth engine is leaving money on the table. The AI Growth System builds integrated marketing and operations infrastructure in 90 days.',
      })
    } else {
      recs.push(SERVICE_RECS['ai-growth-system'])
    }

    recs.push(SERVICE_RECS['strategy-call'])
    return recs
  }

  if (stage === 3) {
    return [
      SERVICE_RECS['ai-growth-system'],
      SERVICE_RECS['ai-first-os'],
      SERVICE_RECS['strategy-call'],
    ]
  }

  // Stage 4
  return [
    SERVICE_RECS['ai-first-os'],
    SERVICE_RECS['strategy-call'],
  ]
}
