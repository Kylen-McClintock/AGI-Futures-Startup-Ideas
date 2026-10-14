/**
 * Lightweight sector -> hub URL map for client components (avoids bundling the full idea registry).
 * Must match getHubSectors() in sector-hubs.ts; `scripts/verify-seo.ts` fails the check if they drift.
 */
export const HUB_LINKS: Record<string, string> = {
    "AI": "/ideas/ai",
    "Community": "/ideas/community",
    "Governance": "/ideas/governance",
    "Finance": "/ideas/finance",
    "Healthcare": "/ideas/healthcare",
    "Education": "/ideas/education",
    "Security": "/ideas/security",
    "Science": "/ideas/science",
    "Housing": "/ideas/housing",
    "Cities": "/ideas/cities",
    "Relationships": "/ideas/relationships",
    "Media": "/ideas/media",
    "Climate": "/ideas/climate",
    "Biotech": "/ideas/biotech",
};
