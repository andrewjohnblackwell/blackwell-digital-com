export type ServiceTier = 'foundation-sprint' | 'ai-growth-system' | 'ai-first-operating-system'

export type MaturityStage = 'manual' | 'assisted' | 'automated' | 'autonomous'

export type InsightCategory = 'ai-maturity' | 'operations' | 'marketing' | 'digital-transformation'

export type InquiryType = 'general' | 'services' | 'quickscan-followup' | 'partnership'

export interface Metric {
  value: string
  label: string
  context?: string
}

export interface CaseStudy {
  slug: string
  title: string
  industry: string
  serviceTier: ServiceTier
  challengeType: string
  headlineResult: string
  challenge: string
  approach: string
  metrics: Metric[]
  clientQuote?: {
    text: string
    attribution: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: InsightCategory
  date: string
  readTime: string
  author: {
    name: string
    role: string
    avatar?: string
  }
}

export interface TeamMember {
  name: string
  title: string
  bio: string
  headshot?: string
  linkedinUrl?: string
}
