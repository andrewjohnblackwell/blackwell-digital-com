import type { Question } from './types'

export const QUICKSCAN_QUESTIONS: Question[] = [
  // Operations (4 questions)
  {
    id: 'ops-1',
    dimension: 'operations',
    text: 'How does your team currently handle repetitive operational tasks?',
    options: [
      { label: 'Manually — most tasks require human effort every time', value: 1 },
      { label: 'Some templates or checklists exist, but execution is still manual', value: 2 },
      { label: 'Key workflows are automated with tools or scripts', value: 3 },
      { label: 'Operations run autonomously with minimal human intervention', value: 4 },
    ],
  },
  {
    id: 'ops-2',
    dimension: 'operations',
    text: 'How does your business manage customer data and CRM?',
    options: [
      { label: 'Spreadsheets, email threads, or no central system', value: 1 },
      { label: 'We have a CRM but data entry is mostly manual and inconsistent', value: 2 },
      { label: 'CRM is integrated with key tools and automates routine data capture', value: 3 },
      { label: 'CRM is the hub — AI enriches records, triggers actions, and surfaces insights automatically', value: 4 },
    ],
  },
  {
    id: 'ops-3',
    dimension: 'operations',
    text: 'How are internal communications and project handoffs managed?',
    options: [
      { label: 'Mostly ad hoc — verbal updates, email chains, people asking "where is this?"', value: 1 },
      { label: 'We use a project tool but handoffs still require manual follow-up', value: 2 },
      { label: 'Automated notifications and status updates keep most work on track', value: 3 },
      { label: 'Systems route work, flag blockers, and escalate issues without human oversight', value: 4 },
    ],
  },
  {
    id: 'ops-4',
    dimension: 'operations',
    text: 'How does your team track performance and make data-driven decisions?',
    options: [
      { label: 'We rarely look at metrics — decisions are based on instinct and experience', value: 1 },
      { label: 'We have some dashboards but pulling reports is manual and time-consuming', value: 2 },
      { label: 'Key metrics auto-update and inform regular planning discussions', value: 3 },
      { label: 'AI monitors KPIs in real time and flags anomalies or opportunities proactively', value: 4 },
    ],
  },

  // Marketing (3 questions)
  {
    id: 'mktg-1',
    dimension: 'marketing',
    text: 'How does your business generate and qualify new leads?',
    options: [
      { label: 'Mostly referrals and outbound — no systematic inbound process', value: 1 },
      { label: 'We have a website and some content, but lead flow is inconsistent', value: 2 },
      { label: 'Marketing systems generate leads automatically, and we score/route them', value: 3 },
      { label: 'AI-driven systems handle targeting, qualification, and nurture with minimal manual input', value: 4 },
    ],
  },
  {
    id: 'mktg-2',
    dimension: 'marketing',
    text: 'How does your team create and distribute marketing content?',
    options: [
      { label: 'No consistent content — we post when we remember or have time', value: 1 },
      { label: 'We create content regularly but distribution is manual across channels', value: 2 },
      { label: 'Content calendar is systemized with automated publishing and repurposing', value: 3 },
      { label: 'AI generates, optimizes, and distributes content based on audience signals', value: 4 },
    ],
  },
  {
    id: 'mktg-3',
    dimension: 'marketing',
    text: 'How do you measure marketing performance and ROI?',
    options: [
      { label: 'We don\'t really track it — "more leads" is the goal', value: 1 },
      { label: 'We track some metrics (traffic, leads) but attribution is unclear', value: 2 },
      { label: 'Full-funnel tracking with clear attribution from channel to closed deal', value: 3 },
      { label: 'AI continuously optimizes spend and messaging based on real-time performance data', value: 4 },
    ],
  },

  // Digital (3 questions)
  {
    id: 'dgtl-1',
    dimension: 'digital',
    text: 'What role does your website play in your business?',
    options: [
      { label: 'It\'s a brochure — basic info, rarely updated', value: 1 },
      { label: 'It generates some leads but isn\'t a primary growth driver', value: 2 },
      { label: 'It\'s a core channel — optimized for conversion with clear user journeys', value: 3 },
      { label: 'It\'s a dynamic platform that personalizes content and adapts based on visitor behavior', value: 4 },
    ],
  },
  {
    id: 'dgtl-2',
    dimension: 'digital',
    text: 'How does your business handle online customer interactions?',
    options: [
      { label: 'Customers call or email — no digital self-service options', value: 1 },
      { label: 'Some online forms or chat but responses are manual and slow', value: 2 },
      { label: 'Automated responses handle routine inquiries; humans handle complex ones', value: 3 },
      { label: 'AI handles most interactions end-to-end — booking, quoting, support, follow-up', value: 4 },
    ],
  },
  {
    id: 'dgtl-3',
    dimension: 'digital',
    text: 'How well do your digital tools and platforms work together?',
    options: [
      { label: 'Tools are siloed — nothing talks to anything else', value: 1 },
      { label: 'A few integrations exist but most data transfer is manual (export/import)', value: 2 },
      { label: 'Core systems are connected and data flows between them automatically', value: 3 },
      { label: 'Fully integrated ecosystem where AI orchestrates data and actions across all platforms', value: 4 },
    ],
  },
]

export const TOTAL_QUESTIONS = QUICKSCAN_QUESTIONS.length
