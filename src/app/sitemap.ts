import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://agifutures.co' // Replace with your actual production domain when available.

    // Calculate dates
    const date = new Date().toISOString()

    return [
        {
            url: baseUrl,
            lastModified: date,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/helm`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/attune`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/porchfront`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/homequote`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/aura`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/afl`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/deepguide`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/main-street-legacy`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/agentable`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/murmuration`,
            lastModified: date,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
