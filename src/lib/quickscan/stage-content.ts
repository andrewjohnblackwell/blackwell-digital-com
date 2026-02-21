import type { Dimension, StageName, StageNumber } from './types'

export const STAGE_NAMES: Record<StageNumber, StageName> = {
  1: 'Manual',
  2: 'Assisted',
  3: 'Automated',
  4: 'Autonomous',
}

export const STAGE_SUMMARIES: Record<StageNumber, string> = {
  1: 'Your business relies heavily on manual processes across operations, marketing, and digital. Most tasks require human effort every time, and there are few systems in place to capture, route, or act on information automatically. This is common for early-stage businesses or companies that have grown through sheer effort and personal relationships. The upside: there is massive low-hanging fruit. Even basic automation can reclaim dozens of hours per week and create immediate ROI.',
  2: 'Your business has started adopting tools and templates to reduce manual effort, but most processes still depend on human judgment and intervention at every step. You likely have some marketing automation, a few operational checklists, and a functional website — but none of these systems talk to each other, and scaling them requires adding headcount, not infrastructure. This is the most common stage for businesses in the $3M–$15M range. The good news: you\'ve already built the foundation. The opportunity is connecting these isolated tools into integrated systems that compound.',
  3: 'Your business has meaningful automation in place. Key workflows run without manual intervention, marketing systems generate and route leads, and your digital presence actively drives revenue. The challenge at this stage is integration and intelligence — your systems work but they don\'t learn, adapt, or optimize on their own. The opportunity is moving from automation to autonomy: letting AI handle not just execution but decision-making, optimization, and continuous improvement.',
  4: 'Your business operates with AI-driven systems across most functions. Operations, marketing, and digital work as an integrated ecosystem that learns, adapts, and optimizes with minimal human oversight. You\'re in rare company — fewer than 5% of businesses at your scale reach this stage. The focus now is continuous optimization, expanding AI capabilities to new domains, and building competitive moats through proprietary data and intelligence.',
}

export const DIMENSION_INTERPRETATIONS: Record<
  StageNumber,
  Record<Dimension, string>
> = {
  1: {
    operations:
      'Your operations are fully manual. Most tasks require direct human effort, and there are no systems capturing or routing work automatically. Start by documenting your top 5 repetitive workflows — these are your first automation candidates.',
    marketing:
      'Your marketing runs on effort, not systems. Lead generation is ad hoc, content is inconsistent, and there\'s no measurement framework in place. The first step is building a repeatable inbound engine.',
    digital:
      'Your digital presence is a static brochure. It doesn\'t generate leads, serve customers, or integrate with your business systems. A modern digital foundation is the fastest path to visibility and conversion.',
  },
  2: {
    operations:
      'Your operations use some tools and templates, but execution still requires constant human oversight. The opportunity is connecting these isolated tools so data flows between them automatically.',
    marketing:
      'Your marketing has basic infrastructure but lead flow is inconsistent and attribution is unclear. Building systematic lead capture and nurture sequences will stabilize your pipeline.',
    digital:
      'Your digital presence generates some activity but isn\'t a reliable growth driver. Optimizing for conversion and integrating with your CRM will turn traffic into measurable pipeline.',
  },
  3: {
    operations:
      'Your operations have solid automation in place. The next step is adding intelligence — letting systems learn from patterns, flag anomalies, and make routine decisions autonomously.',
    marketing:
      'Your marketing systems are generating and routing leads effectively. The opportunity is AI-driven optimization — dynamic content, predictive scoring, and automated spend allocation.',
    digital:
      'Your digital platform actively drives revenue with clear user journeys and conversion optimization. Adding personalization and AI-driven interactions will push conversion rates higher.',
  },
  4: {
    operations:
      'Your operations run with minimal human intervention. Focus on expanding AI capabilities to edge cases, building proprietary data moats, and continuous optimization of existing systems.',
    marketing:
      'Your marketing is AI-driven across targeting, content, and measurement. The focus now is competitive differentiation through proprietary audience intelligence and creative optimization.',
    digital:
      'Your digital ecosystem is fully integrated and adaptive. Continue investing in personalization depth, real-time optimization, and expanding self-service capabilities.',
  },
}

export const RELATED_INSIGHTS: Record<
  StageNumber,
  { category: string; title: string; href: string }[]
> = {
  1: [
    {
      category: 'AI Maturity',
      title: 'What Is AI Maturity — And Why Should a $5M Business Care?',
      href: '/insights',
    },
    {
      category: 'Operations',
      title: 'The 5 Workflows Every Growing Business Should Automate First',
      href: '/insights',
    },
  ],
  2: [
    {
      category: 'AI Maturity',
      title: 'What Is AI Maturity — And Why Should a $5M Business Care?',
      href: '/insights',
    },
    {
      category: 'Operations',
      title: 'The 5 Workflows Every Growing Business Should Automate First',
      href: '/insights',
    },
    {
      category: 'Marketing',
      title: 'Building a Lead Engine That Doesn\'t Depend on Referrals',
      href: '/insights',
    },
  ],
  3: [
    {
      category: 'Digital',
      title: 'From Automation to Autonomy: What Comes After the Workflows',
      href: '/insights',
    },
    {
      category: 'Marketing',
      title: 'AI-Driven Marketing: Beyond Basic Automation',
      href: '/insights',
    },
  ],
  4: [
    {
      category: 'AI Maturity',
      title: 'Staying Ahead: Continuous Optimization for AI-First Businesses',
      href: '/insights',
    },
    {
      category: 'Digital',
      title: 'Building Competitive Moats Through Proprietary AI',
      href: '/insights',
    },
  ],
}
