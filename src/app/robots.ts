import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/login', '/onboarding', '/auth/', '/api/', '/builder/', '/futuregraph/admin'],
            },
            {
                // Explicitly allow live search and AI citation bots with high referral signal
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'Applebot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'PerplexityBot',
                    'Claude-SearchBot',
                    'Claude-User',
                    'Claude-Web',
                    'DuckAssistBot',
                ],
                allow: [
                    '/',
                    '/llms.txt',
                    '/llms-full.txt',
                    '/ideas',
                    '/problem-atlas',
                    '/singularity-tracker',
                    '/glossary',
                    '/futuregraph',
                ],
                disallow: ['/login', '/onboarding', '/auth/', '/api/', '/builder/', '/futuregraph/admin'],
            },
            {
                // Explicitly allow social link-preview crawlers so X, Threads, IG, LinkedIn, Slack & WhatsApp cards always unfurl
                userAgent: [
                    'facebookexternalhit',
                    'Facebot',
                    'FacebookBot',
                    'Twitterbot',
                    'LinkedInBot',
                    'Slackbot',
                    'Discordbot',
                    'WhatsApp',
                ],
                allow: '/',
                disallow: ['/login', '/onboarding', '/auth/', '/api/'],
            },
            {
                // Block aggressive bulk training and commercial scraper bots that waste serverless CPU
                userAgent: [
                    'GPTBot',
                    'ClaudeBot',
                    'anthropic-ai',
                    'Google-Extended',
                    'Bytespider',
                    'CCBot',
                    'AhrefsBot',
                    'SemrushBot',
                    'MJ12bot',
                    'DotBot',
                    'BLEXBot',
                    'DataForSeoBot',
                    'PetalBot',
                    'Barkrowler',
                    'SeekportBot',
                    'Meta-ExternalAgent',
                    'Amazonbot',
                    'cohere-ai',
                    'img2dataset',
                ],
                disallow: '/',
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
