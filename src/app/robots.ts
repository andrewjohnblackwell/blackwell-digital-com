import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production'

  if (!isProduction) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/quickscan/assessment',
        '/quickscan/results/',
        '/api/',
      ],
    },
    sitemap: 'https://blackwelldigital.com/sitemap.xml',
  }
}
