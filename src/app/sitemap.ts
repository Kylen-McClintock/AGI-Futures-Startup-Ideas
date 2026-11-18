import { MetadataRoute } from 'next'
import { problems } from '@/data/problem-atlas-data'
import { ideas, ideaFallbacks } from '@/data/ideas'
import { getHubSectors } from '@/data/sector-hubs'
import { glossaryData, slugifyGlossaryTerm } from '@/data/glossary'
import { SITE_URL } from '@/lib/site'

// Verified git commit timestamps for deterministic, honest <lastmod> values
const COMMIT_DATES = {
    coreStatic: '2026-11-17T20:45:00-07:00',
    singularityTracker: '2026-11-06T16:37:42-07:00',
    futureGraphHub: '2026-11-05T17:47:09-07:00',
    futureGraphScenarios: '2026-11-04T09:54:41-07:00',
    problemAtlasData: '2026-03-15T14:52:14-06:00',
    glossaryData: '2026-03-27T11:47:07-06:00',
}

const UPDATED_IDEA_DATES: Record<string, string> = {
    homequote: '2026-11-17T20:45:00-07:00',
    'main-street-legacy': '2026-11-17T20:45:00-07:00',
    skyhold: '2026-11-17T20:45:00-07:00',
    'signal-house': '2026-11-17T20:45:00-07:00',
    murmuration: '2026-11-17T20:45:00-07:00',
    attune: '2026-11-17T20:45:00-07:00',
    porchfront: '2026-11-17T20:45:00-07:00',
    AIFounderLab: '2026-11-17T20:45:00-07:00',
    'easy-exit': '2026-11-17T20:45:00-07:00',
    sellcraft: '2026-11-17T20:45:00-07:00',
    'public-ai': '2026-11-17T20:45:00-07:00',
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL

    // Newest idea date drives the homepage + hubs lastModified so Google sees real freshness.
    const ideaDate = (slug: string) => {
        if (UPDATED_IDEA_DATES[slug]) return new Date(UPDATED_IDEA_DATES[slug]).toISOString()
        const raw = ideaFallbacks[slug]?.created_at
        const d = raw ? new Date(raw) : null
        return d && !isNaN(d.getTime()) ? d.toISOString() : COMMIT_DATES.coreStatic
    }
    const latestIdea = ideas.map(i => ideaDate(i.slug)).sort().at(-1) ?? COMMIT_DATES.coreStatic

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: latestIdea, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/match`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/ideas`, lastModified: latestIdea, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/problem-atlas`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/singularity-tracker`, lastModified: COMMIT_DATES.singularityTracker, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/forecasts/live`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/forecasts/proposed`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'weekly', priority: 0.6 },
        { url: `${baseUrl}/forecasting`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${baseUrl}/glossary`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/Idea-Seeds`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'weekly', priority: 0.5 },
        { url: `${baseUrl}/about`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/license`, lastModified: COMMIT_DATES.coreStatic, changeFrequency: 'yearly', priority: 0.2 },
        { url: `${baseUrl}/llms.txt`, lastModified: COMMIT_DATES.singularityTracker, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/llms-full.txt`, lastModified: COMMIT_DATES.singularityTracker, changeFrequency: 'weekly', priority: 0.7 },
    ]

    const futureGraphEntries: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/futuregraph`, lastModified: COMMIT_DATES.futureGraphHub, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/futuregraph/lev`, lastModified: COMMIT_DATES.futureGraphHub, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/futuregraph/fairmarkets/ai-governance`, lastModified: COMMIT_DATES.futureGraphScenarios, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/futuregraph/scenarios/ai-2027`, lastModified: COMMIT_DATES.futureGraphScenarios, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/futuregraph/scenarios/ai-2040`, lastModified: COMMIT_DATES.futureGraphScenarios, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/futuregraph/scenarios/ai-2050`, lastModified: COMMIT_DATES.futureGraphScenarios, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/futuregraph/scenarios/nature-of-reality`, lastModified: COMMIT_DATES.futureGraphScenarios, changeFrequency: 'monthly', priority: 0.75 },
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
        lastModified: COMMIT_DATES.problemAtlasData,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const glossaryEntries: MetadataRoute.Sitemap = glossaryData.map(item => ({
        url: `${baseUrl}/glossary/${slugifyGlossaryTerm(item.term)}`,
        lastModified: COMMIT_DATES.glossaryData,
        changeFrequency: 'monthly',
        priority: 0.65,
    }))

    return [
        ...staticPages,
        ...futureGraphEntries,
        ...ideaEntries,
        ...hubEntries,
        ...problemEntries,
        ...glossaryEntries,
    ]
}
