export const SITE_CONFIG = {
  name: 'Blackwell Digital',
  description:
    'Blackwell Digital helps $1M–$25M businesses implement AI-driven operations, marketing systems, and growth infrastructure. Take the free AI Maturity QuickScan.',
  url: 'https://blackwelldigital.com',
  ogImage: 'https://blackwelldigital.com/og-default.jpg',
} as const

export const NAP = {
  name: 'Blackwell Digital',
  address: {
    street: '', // TODO: Add street address
    city: '', // TODO: Add city
    state: 'IL',
    zip: '', // TODO: Add zip
    country: 'US',
  },
  phone: '', // TODO: Add phone
  email: '', // TODO: Add email
} as const

export const SOCIAL_LINKS = {
  linkedin: '', // TODO: Add LinkedIn URL
  twitter: '', // TODO: Add X/Twitter URL
} as const

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Foundation Sprint', href: '/services/foundation-sprint' },
      { label: 'AI Growth System', href: '/services/ai-growth-system' },
      { label: 'AI-First Operating System', href: '/services/ai-first-operating-system' },
    ],
  },
  { label: 'Framework', href: '/framework' },
  { label: 'QuickScan', href: '/quickscan' },
  { label: 'Results', href: '/results' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
] as const

export const FOOTER_NAV = {
  services: [
    { label: 'Services Overview', href: '/services' },
    { label: 'Foundation Sprint', href: '/services/foundation-sprint' },
    { label: 'AI Growth System', href: '/services/ai-growth-system' },
    { label: 'AI-First Operating System', href: '/services/ai-first-operating-system' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'AI Maturity Framework', href: '/framework' },
    { label: 'Results', href: '/results' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Accessibility', href: '/accessibility-statement' },
  ],
} as const
