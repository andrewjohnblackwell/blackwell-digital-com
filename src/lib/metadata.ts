import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

interface CreateMetadataOptions {
  title: string
  description: string
  path: string
  noIndex?: boolean
  ogImage?: string
}

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
  ogImage,
}: CreateMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const image = ogImage ?? SITE_CONFIG.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
