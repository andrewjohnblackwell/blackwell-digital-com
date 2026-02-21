import type { MetadataRoute } from 'next'

const BASE_URL = 'https://blackwelldigital.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/quickscan`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/framework`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/framework/manual`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/framework/assisted`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/framework/automated`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/framework/autonomous`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/foundation-sprint`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/ai-growth-system`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/ai-first-operating-system`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/results`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/insights`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/terms-of-service`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/accessibility-statement`, priority: 0.3, changeFrequency: 'yearly' },
  ]

  // TODO: Add dynamic pages from CMS (blog posts, case studies) when WordPress is wired up

  return staticPages
}
