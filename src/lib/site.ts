/**
 * Canonical site-wide constants. Never hard-code the domain elsewhere:
 * a stale `agifutures.co` in sitemap/robots previously sent crawlers to a dead domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agifutures.org").replace(/\/$/, "");
export const SUBSTACK_URL = (process.env.NEXT_PUBLIC_SUBSTACK_URL ?? "https://agifutures.substack.com").replace(/\/$/, "");
export const SITE_NAME = "AGI Futures";
export const SITE_DESCRIPTION =
    "A collection of premium speculative venture theses and product storytelling prototypes exploring the AGI transition.";

export const SOCIAL_LINKS = [
    "https://www.instagram.com/agi_futures/",
    "https://www.threads.com/@agi_futures",
    "https://www.facebook.com/profile.php?id=61595298569347",
    "https://agifutures.substack.com",
];
