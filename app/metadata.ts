import type { Metadata } from 'next'
import { siteMetadata } from '@/lib/seo'

export const metadata: Metadata = {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    keywords: siteMetadata.home.keywords,
    authors: [{ name: 'TSDSI' }],
    creator: 'TSDSI',
    publisher: 'TSDSI',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://tsdsi.vercel.app',
        title: siteMetadata.home.title,
        description: siteMetadata.home.description,
        siteName: 'TSDSI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'TSDSI - Telecommunications Standards Development Society, India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.home.title,
        description: siteMetadata.home.description,
    },
    robots: {
        index: true,
        follow: true,
    },
}
