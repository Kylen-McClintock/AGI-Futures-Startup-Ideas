import { CategoryForecast } from '@/types/forecast';
import { inferHeavyTail } from '@/utils/forecastMath';

// Simple deterministic hash for a string to create a pseudo-random seed
const hashSlug = (slug: string) => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = ((hash << 5) - hash) + slug.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

// Returns a multiplier between (1 - maxVariance) and (1 + maxVariance) based on the slug, year, and magnitude
const getJitter = (slug: string, year: number, magnitude: number, maxVariance = 0.60) => {
    const seed = hashSlug(`${slug}-${year}-${magnitude}`);
    const random = (seed % 1000) / 1000; 
    return 1 + (random * 2 - 1) * maxVariance;
};

const generateCurve = (anchors: Record<number, number>, slug: string, year: number) => {
    // Helper to generate a monotonic heavy-tail curve from 1-3 anchors, with deterministic jitter
    const anchorMap: Record<string, number> = {};
    Object.entries(anchors).forEach(([val, prob]) => {
        const jitteredProb = prob * getJitter(slug, year, Number(val));
        // Clamp to valid probability bounds
        anchorMap[String(val)] = Math.max(0.1, Math.min(99.9, jitteredProb));
    });
    return inferHeavyTail(anchorMap);
};

export interface ForecastData {
    forecast: CategoryForecast;
    aiRationale: string;
}

// Factory functions to generate unique curves per startup
const getDeepTechCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_deep_tech`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 20, 1e9: 2, 1e11: 0.1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 40, 1e9: 10, 1e11: 1 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 60, 1e9: 25, 1e11: 5 }, slug, 2040) }
    }
});

const getSaaSMarketCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_saas`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 80, 1e9: 25, 1e11: 1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 90, 1e9: 45, 1e11: 5 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 15 }, slug, 2040) }
    }
});

const getAIEmergenceCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_ai`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 10 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 99, 1e9: 85, 1e11: 30 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 99.9, 1e9: 95, 1e11: 50 }, slug, 2040) }
    }
});

// A curve for capital-intensive niche hardware with long-term upside
const getNicheHardwareCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_niche_hardware`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 10, 1e9: 1, 1e11: 0.05 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 25, 1e9: 5, 1e11: 0.5 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 50, 1e9: 20, 1e11: 3 }, slug, 2040) }
    }
});

// A highly constrained curve for heavily regulated, slow-moving bio/psychedelic SaaS
const getPsychedelicSaaSCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_psychedelic_saas`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 35, 1e9: 3, 1e11: 0.1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 55, 1e9: 12, 1e11: 0.5 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 70, 1e9: 25, 1e11: 2 }, slug, 2040) }
    }
});

// A curve for capital-intensive real-estate/infrastructure with high long-term floor but slower multi-billion scale
const getAgrivoltaicsInfrastructureCurve = (slug: string): CategoryForecast => ({
    id: `fc_${slug}_agrivoltaics`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 60, 1e9: 5, 1e11: 0.1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 80, 1e9: 20, 1e11: 1 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 90, 1e9: 45, 1e11: 5 }, slug, 2040) }
    }
});

export const forecastDatabase: Record<string, ForecastData> = {
    'afl': {
        forecast: getSaaSMarketCurve('afl'),
        aiRationale: "AI Founder Lab operates at the intersection of venture building and operator education. The AGI Futures forecaster model assigns a strong probability of reaching a $1B+ valuation by 2035, driven by the massive demand for AI-native talent and the scalability of a digital-first cohort model."
    },
    'agentable': {
        forecast: getAIEmergenceCurve('agentable'),
        aiRationale: "The AGI Futures forecaster model expects the commoditization of foundational models to rapidly shift value toward specialized context-aware orchestration. Agentable possesses a high probability of yielding a $1B+ category leader quickly (by 2030), given the massive TAM of white-collar task automation and relatively low capital requirements for software deployment."
    },
    'attune': {
        forecast: getSaaSMarketCurve('attune'),
        aiRationale: "Developing an AI relationship coach to make partners feel heard requires a sophisticated blend of emotionally resonant LLMs and consumer trust. While strictly software, the category faces high churn and specialized competition. The AGI Futures forecaster model projects steady growth, with massive upside if the platform achieves global daily active use."
    },
    'aura': {
        forecast: getAIEmergenceCurve('aura'),
        aiRationale: "Providing an SDK and marketplace for dropping lifelike, spatially aware AI companions into AR apps capitalizes on the inevitable convergence of spatial computing and foundational models. The AGI Futures forecaster model weights the probability of a massive outcome heavily by the total addressable market of the next-generation global entertainment software ecosystem."
    },
    'avatarlab': {
        forecast: getDeepTechCurve('avatarlab'),
        aiRationale: "Personalized biology and DNA-based digital twins require massive capital expenditure and face high regulatory hurdles. The AGI Futures forecaster model implies a 'winner-take-most' dynamic, where failure is highly likely, but a breakout success by 2040 could easily exceed $10B as the primary infrastructure for personalized medicine."
    },
    'biowalls': {
        forecast: getNicheHardwareCurve('biowalls'),
        aiRationale: "Building high-design living walls that act as bio-filtration systems and digital twins for real-world ecologies is highly capital intensive. The AGI Futures forecaster model generates a heavily depressed curve for early years due to hardware scaling costs. However, if the platform successfully financializes verifiable biodiversity credits by 2035, the valuation potential scales non-linearly."
    },
    'handraise': {
        forecast: getSaaSMarketCurve('handraise'),
        aiRationale: "A platform allowing users to post tight briefs and only receive answers from verified experts via a bounty system disrupts the traditional expert network. The AGI Futures forecaster model reflects a standard B2B marketplace scaling curve: initially slow to fundamentally alter behavior, but highly defensible and sticky once established."
    },
    'hearth': {
        forecast: getSaaSMarketCurve('hearth'),
        aiRationale: "Next-generation real estate and co-living networks struggle with offline monetization and scaling physical infrastructure. The AGI Futures forecaster model reflects a high likelihood of reaching a $100M+ valuation based on user engagement, but drops off sharply past $1B due to the historical difficulty of scaling asset-heavy community networks."
    },
    'helm': {
        forecast: getAIEmergenceCurve('helm'),
        aiRationale: "The AGI Futures forecaster model expects the commoditization of foundational models to rapidly shift value toward specialized context-aware orchestration and virtual workspaces. Helm possesses a high probability of yielding a $1B+ category leader quickly given the massive TAM of white-collar task automation."
    },
    'homequote': {
        forecast: getSaaSMarketCurve('homequote'),
        aiRationale: "Using computer vision to turn user-filmed walkthroughs into structured job objects and exact quotes removes the primary friction point in local home services. The AGI Futures forecaster model predicts steady adoption, mapping cleanly to a classic aggregator power-law: eventual consolidation into one or two $10B+ national leaders by 2040."
    },
    'main-street-legacy': {
        forecast: getSaaSMarketCurve('main-street-legacy'),
        aiRationale: "Facilitating SaaS-driven rollups of SMBs leverages financial engineering rather than pure fundamental tech breakthroughs. The AGI Futures forecaster model weights the probability curve heavily by macroeconomic interest rates, but assuming normalized capital costs, it shows a highly viable path to creating a $1B+ holding company by 2030."
    },
    'murmuration': {
        forecast: getAIEmergenceCurve('murmuration'),
        aiRationale: "Building an AGI-native strategy and execution engine natively disrupts the traditional consultancy and strategy agency model. The AGI Futures forecaster model reflects high confidence that at least one mega-winner (> $10B) will emerge by 2035 as B2B workflows shift from software-as-a-service to service-as-software."
    },
    'porchfront': {
        forecast: getSaaSMarketCurve('porchfront'),
        aiRationale: "Next-generation real estate and neighborhood social cohesion networks struggle with monetization. The AGI Futures forecaster model reflects a high likelihood of reaching a $100M+ valuation based on user engagement, but drops off sharply past $1B due to the historical difficulty of extracting high LTV from local community networks."
    },
    'deepguide': {
        forecast: getPsychedelicSaaSCurve('deepguide'),
        aiRationale: "Psychedelic therapy copilot SaaS faces profound regulatory friction, FDA scheduling uncertainties, and slow clinical adoption cycles. The AGI Futures forecaster model severely penalizes near-term hyper-growth, capping the valuation trajectory until federal rescheduling unlocks mass market clinical deployment."
    },
    'proofrun': {
        forecast: getSaaSMarketCurve('proofrun'),
        aiRationale: "Allowing companies to turn real backlog work into mini-missions for candidates targets the core bottleneck of tech recruiting. The solution is highly viable but faces intense competition from incumbent applicant tracking systems. The AGI Futures forecaster model projects a historically well-paved path to a $1B+ profitable exit, leading to strong mid-tier probability density."
    },
    'sellcraft': {
        forecast: getSaaSMarketCurve('sellcraft'),
        aiRationale: "Building an AI-native sales mastery platform where humans practice against virtual customers faces skepticism from legacy leadership training incumbents. The AGI Futures forecaster model limits the probability of a $>100B outcome, anticipating rapid feature commoditization. However, the path to a high-margin $1B+ B2B training exit remains highly viable."
    },
    'afterlight': {
        forecast: getSaaSMarketCurve('afterlight'),
        aiRationale: "Afterlight seeks to build a highly defensible trust and data moat in the end-of-life memory preservation space. The AGI Futures forecaster model reflects typical consumer SaaS resistance early on, but projects a highly valuable, sticky consumer-subscription exit if it reaches critical mass as the default generational archive."
    },
    'civicpath': {
        forecast: getSaaSMarketCurve('civicpath'),
        aiRationale: "CivicPath operates at the intersection of GovTech and civic identity. The AGI Futures forecaster model assigns a strong probability of reaching a $1B+ valuation by 2035, driven by the acute political pain of broken immigration systems and the massive TAM of national governments seeking legible, computable standards over rhetoric."
    },
    'biomex': {
        forecast: getDeepTechCurve('biomex'),
        aiRationale: "BiomeX operates at the intersection of elite human biological variation and clinical therapeutics. The AGI Futures forecaster model applies a DeepTech curve, reflecting high early-stage capital requirements and regulatory risk, followed by potentially massive exponential upside if donor-inspired therapeutic transfer is validated in hard endpoints."
    },
    'helioterra': {
        forecast: getAgrivoltaicsInfrastructureCurve('helioterra'),
        aiRationale: "Agrivoltaics represents a highly viable land-use arbitrage, but scaling financing-and-delivery infrastructure for physical projects requires immense capital overhead. The AGI Futures forecaster model reflects high confidence in creating $10M+ regional successes by 2030, but throttles the probability of a $100B+ mega-developer outcome until dual-use policy tailwinds and utility-scale integration compound deeply into the 2040s."
    },
    'easy-exit': {
        forecast: {
            id: `fc_easy-exit_agentic`,
            targetIdeaSlug: 'easy-exit',
            sourceType: "AI",
            updatedAt: new Date().toISOString(),
            curves: {
                '2030-01-01': { horizonDate: '2030-01-01', probabilities: { '10000000': 85, '100000000': 60, '1000000000': 15, '10000000000': 2, '100000000000': 0.1, '1000000000000': 0 } },
                '2035-01-01': { horizonDate: '2035-01-01', probabilities: { '10000000': 95, '100000000': 75, '1000000000': 42, '10000000000': 12, '100000000000': 2, '1000000000000': 0.1 } },
                '2040-01-01': { horizonDate: '2040-01-01', probabilities: { '10000000': 98, '100000000': 85, '1000000000': 68, '10000000000': 35, '100000000000': 8, '1000000000000': 0.5 } }
            }
        },
        aiRationale: "Easy Exit operates as the foundational trust and verification protocol for agentic commerce. The AGI Futures forecaster model projects a high probability of reaching a $100M+ valuation by 2035 as consumer-agent adoption rapidly accelerates merchant compliance to machine-readable revocation standards. However, because the core protocol must remain open-source to succeed as an anti-lock-in standard, extracting a $100B+ hyper-scale outcome is structurally constrained. The primary path to a major venture exit ($1B+) relies on successfully monopolizing the enterprise execution network, verification tooling, and compliance data layer built on top of the free protocol."
    },
    'proxypilot': {
        forecast: getSaaSMarketCurve('proxypilot'),
        aiRationale: "ProxyPilot operates as a human-choice orchestration layer on top of massive capital allocation streams. The AGI Futures forecaster model projects a solid mid-tier outcome based on shifting existing proxy-advice assets, with a significant probability of unlocking a multi-billion dollar platform if creator-led delegation and personalized policy routing become the default behavior across major retail and embedded brokerages."
    },
    'bioark': {
        forecast: getSaaSMarketCurve('bioark'),
        aiRationale: "Building a trust and funding layer for species recovery faces initial friction from deeply risk-averse, grant-based conservation funding models. However, the AGI Futures forecaster model assigns a high probability to reaching a $1B+ network valuation if it successfully acts as the unified proof-of-impact ledger for the global biodiversity funding gap, bridging private capital directly to verified, distributed ecological capacity."
    },
    'ownyourreplacement': {
        forecast: {
            id: `fc_ownyourreplacement`,
            targetIdeaSlug: 'ownyourreplacement',
            sourceType: "AI",
            updatedAt: new Date().toISOString(),
            curves: {
                '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 60, 1e9: 15, 1e11: 0.1 }, 'ownyourreplacement', 2030) },
                '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 85, 1e9: 40, 1e11: 5 }, 'ownyourreplacement', 2035) },
                '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 65, 1e11: 15 }, 'ownyourreplacement', 2040) }
            }
        },
        aiRationale: "As manual and digital tasks are automated, the need for high-quality, verified human workflow data will surge. Market adoption depends heavily on establishing trust and overcoming regulatory hurdles around tokenized worker compensation. The upside is linked to becoming the standard marketplace for machine-teachable labor."
    },
    'thoughtline': {
        forecast: getDeepTechCurve('thoughtline'),
        aiRationale: "Thoughtline represents a highly regulated, capital-intensive DeepTech play with extreme execution risk but paradigm-shifting upside. The AGI Futures forecaster model severely throttles probability of near-term hyperscale due to clinical validation timelines, hardware iteration cycles, and BCI policy uncertainty. However, the curve inflects massively upward by 2040 as the interface generalizes from clinical speech restoration to a mass-market intent router and personalized cognitive engine."
    },
    'signal-house': {
        forecast: getAIEmergenceCurve('signal-house'),
        aiRationale: "Signal House operates at the intersection of AI curation and human presence. The AGI Futures forecaster model assigns a strong probability of reaching a $1B+ valuation by 2035, driven by the acute pain of attention fragmentation and the compounding network effects of canonical virtual rooms for specific niches."
    },
    'skyhold': {
        forecast: getDeepTechCurve('skyhold'),
        aiRationale: "By targeting real estate before autonomous vehicles and eVTOL aircraft completely reprice edge locations, Skyhold executes a capital-intensive physical arbitrage play. While near-term operations involve traditional development friction and significant physical infrastructure costs, the AGI Futures Valuation Forecasting Model predicts outsized exponential scaling potential by 2040, as autonomous networks dissolve legacy commuting distances and redefine what constitutes prime real estate."
    },
    'wild-return': {
        forecast: getAgrivoltaicsInfrastructureCurve('wild-return'),
        aiRationale: "Wild Return requires high upfront capital and land acquisition, similar to infrastructure plays. The AGI Futures forecaster model reflects initial slow growth due to trust-building, regulatory gating, and physical build-out constraints. However, as cultural adoption accelerates and legacy competitors fail to adapt to ecological demands, it achieves a compounding valuation upside through recurring stewardship funds and multi-generational lock-in by 2040."
    },
};

export const getForecastForSlug = (slug: string): ForecastData => {
    // Default to SaaSMarketCurve if a specific forecast isn't found
    const defaultForecast = getSaaSMarketCurve(slug);
    return forecastDatabase[slug] || {
        forecast: defaultForecast,
        aiRationale: "A standard venture probability curve has been applied to this category, anticipating typical software-as-a-service market dynamics and capital requirements."
    };
};
