/**
 * Sector hub pages (/ideas/[sector]). Each hub targets "AI startup ideas in <sector>" search intent.
 * Hubs are only generated for sectors with >= MIN_IDEAS_PER_HUB ideas, so no thin pages are indexed.
 * Intro copy must stay unique per hub (150-250 words) to avoid duplicate-content penalties.
 */
import { ideas, ideaFallbacks, type IdeaStatic } from "@/data/ideas";

export const MIN_IDEAS_PER_HUB = 3;

export type SectorHubCopy = {
    sector: string;        // exact tag value used in ideaFallbacks[slug].tags.sector
    slug: string;          // URL segment
    label: string;         // human label used in titles
    metaDescription: string;
    intro: string[];       // paragraphs
};

export const sectorHubCopy: SectorHubCopy[] = [
    {
        sector: "AI",
        slug: "ai",
        label: "AI",
        metaDescription: "AGI-native startup ideas: agent infrastructure, AI coordination tools and products that only become possible once models can reason, act and verify.",
        intro: [
            "Most \"AI startups\" bolt a chat box onto an existing workflow. The ideas below assume something stronger: models that can plan, act, negotiate and verify on our behalf, and the new bottlenecks that creates in trust, coordination, revocation and alignment.",
            "Each thesis is scored on moat, execution difficulty and civilizational impact, and is mapped to the outcome it pushes the world toward. Some are build-now wedges. Others are infrastructure the AGI transition will need whether or not anyone is ready for it. All of them are open-sourced so the right founder can take them and run.",
        ],
    },
    {
        sector: "Community",
        slug: "community",
        label: "Community",
        metaDescription: "Startup ideas that use AI to rebuild community, belonging and real-world connection, from neighborhood hubs to friend-native housing.",
        intro: [
            "Loneliness is now a public-health crisis, and the default trajectory of AI points toward more isolation: synthetic companions, frictionless feeds, fewer reasons to leave the house. These ideas bet on the opposite. They use intelligence as connective tissue that brings people physically and socially closer together.",
            "You'll find coordination tools for neighborhoods, intentional living, end-of-life connection and creative collaboration. Each is designed so the AI does the logistics and humans get the relationship. As automation frees up time, the communities people choose to belong to may become the most valuable thing they own.",
        ],
    },
    {
        sector: "Governance",
        slug: "governance",
        label: "Governance",
        metaDescription: "AI startup ideas for better governance: sovereign AI, fair dispute resolution, proxy voting and anti-corruption infrastructure for the AGI era.",
        intro: [
            "Institutions built for paper-speed decision making are about to meet machine-speed change. Whether the AGI transition strengthens or hollows out self-government depends on infrastructure that barely exists yet: transparent public AI, legible preference aggregation, verifiable dispute resolution and incentives that make corruption unprofitable.",
            "These theses treat governance as a product surface rather than a policy afterthought. Many sell to governments or enterprises today while laying the rails for the coordination problems of tomorrow. Several score among the highest civilizational impact in the library, and among the most neglected.",
        ],
    },
    {
        sector: "Finance",
        slug: "finance",
        label: "Finance",
        metaDescription: "Fintech startup ideas for the AGI transition: outcome-linked capital, automation income hedges, proxy voting and new ownership models.",
        intro: [
            "When labor stops being the main way people capture value, the financial system has to answer new questions. Who owns the automation? How does capital find outcomes it can verify? How do ordinary people keep a stake in a rapidly compounding economy?",
            "The ideas here range from outcome-verified infrastructure finance and conservation funding to worker-owned data markets, SMB succession and retail governance power. Each pairs a near-term business model with a longer bet on how ownership and accountability should work once AI agents are economic actors in their own right.",
        ],
    },
    {
        sector: "Healthcare",
        slug: "healthcare",
        label: "Healthcare",
        metaDescription: "AI healthcare startup ideas: personalized therapy testing, microbiome therapeutics, psychedelic care copilots and end-of-life innovation.",
        intro: [
            "AI is about to make medicine radically more personal and radically more scalable. The binding constraints are trust, regulation and the slow loop between evidence and practice. These ideas aim at the places where better intelligence changes outcomes, not just paperwork.",
            "Expect organoid avatars that test therapies on your own biology, microbiome-derived medicines, clinical copilots that keep practitioners present, and new models for dying with dignity. Each thesis spells out the regulatory path, the wedge customer and why the timing works now rather than in ten years.",
        ],
    },
    {
        sector: "Education",
        slug: "education",
        label: "Education",
        metaDescription: "AI education startup ideas: proof-of-work hiring, founder studios, AI-native skills training and learning communities for the post-AGI economy.",
        intro: [
            "If AI can do most of what credentials certify, what is education for? The ideas in this hub bet that the future of learning is apprenticeship-shaped: doing real work, alongside real people, with AI as both tutor and multiplier.",
            "They include startup studios that turn builders into operators, hiring that measures proof of work instead of résumés, sales mastery for a world where human trust is the scarce input, and focus communities that make deep work social again. Each one treats learning as a means to agency rather than an end in itself.",
        ],
    },
    {
        sector: "Security",
        slug: "security",
        label: "Security",
        metaDescription: "Defensive AI startup ideas: differentially defensive infrastructure, whistleblower platforms, agent legibility and AGI safety-aligned products.",
        intro: [
            "Powerful AI raises the ceiling on what attackers, fraudsters and careless systems can do. The most valuable security companies of the next decade will be differentially defensive: they make the world harder to break faster than they make it easier to attack.",
            "This hub collects ideas aimed at that frontier, including machine-readable software surfaces that keep agents accountable, whistleblower infrastructure that makes fraud detection profitable, safety-first AR companions and immigration systems that are both humane and enforceable. Each thesis states how it reduces catastrophic risk, not just how it captures revenue.",
        ],
    },
    {
        sector: "Science",
        slug: "science",
        label: "Science",
        metaDescription: "AI-for-science startup ideas: accelerated discovery, conservation science, neural interfaces and turning research into deployable outcomes.",
        intro: [
            "Scientific progress has been getting slower and more expensive per breakthrough. AI is the first tool in generations that could reverse that curve, but only if it is wired into experiments, field data and the institutions that fund and verify research.",
            "These ideas push on that loop. They cover proof-of-impact funding for species recovery, practice-based evidence in psychedelic therapy, inner-voice neural interfaces and living biofiltration walls that double as research instruments. Each is scored on how much it could accelerate discovery and how directly that discovery reaches people.",
        ],
    },
    {
        sector: "Housing",
        slug: "housing",
        label: "Housing",
        metaDescription: "AI housing and real-estate startup ideas: autonomous home transactions, instant scope-to-quote, biophilic interiors and thesis-driven land.",
        intro: [
            "Housing is where the cost of coordination is most visible. Buying, renovating or simply maintaining a home still means weeks of calls, quotes and negotiation. AI agents can collapse that friction, and autonomous mobility could redraw which land is valuable in the first place.",
            "The theses here include homes that sell themselves through verified AI agents, video walkthroughs that become exact quotes, interiors that reconnect people with living ecosystems and land strategies built for the autonomous age. Each one aims to make shelter more abundant, more beautiful or more humane.",
        ],
    },
    {
        sector: "Cities",
        slug: "cities",
        label: "Cities",
        metaDescription: "AI startup ideas for cities: civic AI, neighborhood revival, autonomous-age urban planning and community infrastructure.",
        intro: [
            "Cities are humanity's oldest coordination technology, and they are about to be rewired by autonomous vehicles, AI-run public services and shifting patterns of remote work. The question is whether that rewiring produces more vibrant streets or emptier ones.",
            "These ideas bet on vibrancy. They turn sidewalk-facing garages into micro-businesses, give city governments sovereign AI they can actually trust, bring living ecosystems into dead interiors and rethink where people live when commutes become rest time. Each thesis maps its effect on community renewal and resilience.",
        ],
    },
    {
        sector: "Relationships",
        slug: "relationships",
        label: "Relationships",
        metaDescription: "AI startup ideas that strengthen human relationships: relationship coaching, neighborhood connection and memory preservation.",
        intro: [
            "The most important thing AI could do for most people is help their closest relationships work better. The most likely thing it does instead is replace them. These ideas are deliberately designed for the first outcome.",
            "They include a coach that helps partners feel consistently heard, a neighborhood OS that rewards real-world connection, and an end-of-life companion that prompts the conversations and stories families wish they'd captured. Each is evaluated on whether it deepens human bonds rather than substituting for them, a test that will matter more as companion AI gets better.",
        ],
    },
    {
        sector: "Media",
        slug: "media",
        label: "Media",
        metaDescription: "AI media and creator startup ideas: founder studios, playful AI office tools and AI-native sales mastery.",
        intro: [
            "When content becomes infinite and nearly free, attention and trust become the scarce inputs. The media ideas in this hub are less about producing more content and more about turning creative and professional work into durable, compounding businesses.",
            "They include a startup studio where builders learn by shipping, a playful virtual office where AI teammates and human collaborators work side by side, and a sales mastery platform built on the bet that human persuasion becomes more valuable, not less, in a world of commoditized AI output.",
        ],
    },
    {
        sector: "Climate",
        slug: "climate",
        label: "Climate",
        metaDescription: "AI climate startup ideas: agrivoltaics, outcome-verified infrastructure finance, biodiversity funding and natural burial.",
        intro: [
            "The climate transition is no longer mainly blocked by missing technology. It's blocked by deployment: financing, permitting, field execution and proof that projects worked. That is exactly where AI agents and verification systems can compound.",
            "The theses here include agrivoltaic projects that let one acre earn twice, an AI copilot that turns proven infrastructure designs into financeable, verified projects, conservation funding that pays for measured biological recovery, and land-restoring end-of-life sanctuaries. Each is scored on climate and biodiversity outcomes alongside moat and difficulty.",
        ],
    },
    {
        sector: "Biotech",
        slug: "biotech",
        label: "Biotech",
        metaDescription: "AI biotech startup ideas: organoid avatars, elite microbiome therapeutics and proof-of-impact species recovery.",
        intro: [
            "Biology is becoming programmable at the same moment AI is becoming capable of reasoning about it. The combination is one of the most powerful levers in the AGI transition, and one of the most dangerous if it's built carelessly.",
            "This hub collects biotech theses with a defensive, human-centered bent. They include banking your youngest cells to test therapies on mini-organs grown from your own DNA, turning elite microbiomes into precision medicines, and funding conservation breeding programs that prove they are actually saving species. Each idea covers capital intensity, regulatory path and long-term civilizational upside.",
        ],
    },
];

export type SectorHub = SectorHubCopy & { ideas: IdeaStatic[] };

export function getIdeasForSector(sector: string): IdeaStatic[] {
    return ideas.filter(i => ideaFallbacks[i.slug]?.tags?.sector?.includes(sector));
}

/** Hubs that clear the minimum-idea threshold, sorted by idea count (desc). */
export function getHubSectors(minCount = MIN_IDEAS_PER_HUB): SectorHub[] {
    return sectorHubCopy
        .map(c => ({ ...c, ideas: getIdeasForSector(c.sector) }))
        .filter(h => h.ideas.length >= minCount)
        .sort((a, b) => b.ideas.length - a.ideas.length);
}

export function getHubBySlug(slug: string): SectorHub | undefined {
    return getHubSectors().find(h => h.slug === slug);
}

/** Maps a sector tag to its hub URL, or undefined if no hub exists for it. */
export function hubHrefForSector(sector: string): string | undefined {
    const copy = sectorHubCopy.find(c => c.sector === sector);
    if (!copy) return undefined;
    return getIdeasForSector(sector).length >= MIN_IDEAS_PER_HUB ? `/ideas/${copy.slug}` : undefined;
}
