import { MetadataRoute } from 'next'
import { problems } from '@/data/problem-atlas-data'
import { ideas, ideaFallbacks } from '@/data/ideas'
import { getHubSectors } from '@/data/sector-hubs'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL
    const now = new Date().toISOString()

    // Newest idea date drives the homepage + hubs lastModified so Google sees real freshness.
    const ideaDate = (slug: string) => {
        const raw = ideaFallbacks[slug]?.created_at
        const d = raw ? new Date(raw) : null
        return d && !isNaN(d.getTime()) ? d.toISOString() : now
    }
    const latestIdea = ideas.map(i => ideaDate(i.slug)).sort().at(-1) ?? now

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: latestIdea, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/match`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/ideas`, lastModified: latestIdea, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/problem-atlas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/singularity-tracker`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/forecasts/live`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/forecasting`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/Idea-Seeds`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
        { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${baseUrl}/license`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ]

    const ideaEntries: MetadataRoute.Sitemap = ideas.map(idea => ({
        url: `${baseUrl}${idea.href}`,
        lastModified: ideaDate(idea.slug),
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    const hubEntries: MetadataRoute.Sitemap = getHubSectors().map(hub => ({
        url: `${baseUrl}/ideas/${hub.slug}`,
        lastModified: latestIdea,
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const problemEntries: MetadataRoute.Sitemap = problems.map(problem => ({
        url: `${baseUrl}/problem-atlas/${problem.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [...staticPages, ...ideaEntries, ...hubEntries, ...problemEntries]
}
