import { Metadata } from 'next'

interface SEOConfig {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
}

export function generateMetadata(config: SEOConfig): Metadata {
    const baseUrl = 'https://tsdsi.vercel.app'
    const defaultImage = `${baseUrl}/og-image.png`

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        authors: [{ name: 'TSDSI' }],
        creator: 'TSDSI',
        publisher: 'TSDSI',
        openGraph: {
            type: 'website',
            locale: 'en_IN',
            url: baseUrl,
            title: config.title,
            description: config.description,
            siteName: 'TSDSI - Telecommunications Standards Development Society, India',
            images: [
                {
                    url: config.ogImage || defaultImage,
                    width: 1200,
                    height: 630,
                    alt: config.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: config.title,
            description: config.description,
            images: [config.ogImage || defaultImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export const siteMetadata = {
    home: {
        title: 'TSDSI - India\'s Premier Telecom Standards Organization',
        description: 'TSDSI develops India-specific telecommunications and ICT standards while contributing to global standardization efforts including 5G, 6G, and beyond.',
        keywords: ['TSDSI', 'telecommunications', 'standards', 'India', '5G', '6G', 'ICT', 'telecom standards', '3GPP', 'ITU'],
    },
    about: {
        title: 'About TSDSI - Mission, Vision & Achievements',
        description: 'Learn about TSDSI\'s mission to develop India-specific telecom standards, our vision for global leadership, and achievements in telecommunications standardization.',
        keywords: ['TSDSI about', 'telecom standards India', 'TSDSI mission', 'TSDSI vision', 'telecommunications organization'],
    },
    membership: {
        title: 'TSDSI Membership - Join India\'s Standards Community',
        description: 'Become a TSDSI member and contribute to shaping telecommunications standards. Choose from Promoter, Ordinary, or Associate membership tiers.',
        keywords: ['TSDSI membership', 'join TSDSI', 'telecom membership', 'standards development', 'member benefits'],
    },
    standards: {
        title: 'TSDSI Standards & Technical Reports',
        description: 'Access TSDSI published standards, transposed international standards, and technical reports for telecommunications and ICT.',
        keywords: ['TSDSI standards', 'telecom standards', 'technical reports', '5G standards', 'ICT standards', 'published standards'],
    },
    governance: {
        title: 'TSDSI Governance Structure & Leadership',
        description: 'Explore TSDSI\'s governance framework, organizational structure, and leadership guiding India\'s telecommunications standardization efforts.',
        keywords: ['TSDSI governance', 'governing council', 'organizational structure', 'telecom leadership'],
    },
    contact: {
        title: 'Contact TSDSI - Get in Touch',
        description: 'Contact TSDSI for membership inquiries, technical questions, or partnership opportunities. Reach out to India\'s premier telecom standards organization.',
        keywords: ['contact TSDSI', 'TSDSI email', 'TSDSI address', 'telecom standards inquiry'],
    },
    news: {
        title: 'TSDSI News & Updates - Latest Announcements',
        description: 'Stay updated with latest news, announcements, and developments from TSDSI in telecommunications standardization.',
        keywords: ['TSDSI news', 'telecom news India', 'standards updates', 'TSDSI announcements'],
    },
    events: {
        title: 'TSDSI Events Calendar - Workshops & Webinars',
        description: 'Discover upcoming TSDSI events, standards workshops, expert webinars, and technical seminars on telecommunications.',
        keywords: ['TSDSI events', 'telecom workshops', 'standards webinars', 'technical seminars'],
    },
    careers: {
        title: 'Careers at TSDSI - Join Our Team',
        description: 'Explore career opportunities at TSDSI and contribute to India\'s telecommunications standardization ecosystem.',
        keywords: ['TSDSI careers', 'telecom jobs', 'standards jobs India', 'TSDSI opportunities'],
    },
    faq: {
        title: 'TSDSI FAQ - Frequently Asked Questions',
        description: 'Find answers to common questions about TSDSI membership, standards development, technical activities, and participation.',
        keywords: ['TSDSI FAQ', 'TSDSI questions', 'telecom standards FAQ', 'membership FAQ'],
    },
}
