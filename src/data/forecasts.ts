import { CategoryForecast } from '@/types/forecast';
import { inferHeavyTail } from '@/utils/forecastMath';

const generateCurve = (anchors: Record<number, number>) => {
    // Helper to generate a monotonic heavy-tail curve from 1-3 anchors
    const anchorMap: Record<string, number> = {};
    Object.entries(anchors).forEach(([val, prob]) => {
        anchorMap[String(val)] = prob;
    });
    return inferHeavyTail(anchorMap);
};

export interface ForecastData {
    forecast: CategoryForecast;
    aiRationale: string;
}

// A generic "high barrier / low probability" curve for very tough deep tech
const DeepTechCurve: CategoryForecast = {
    id: "fc_generic_deep_tech",
    targetIdeaSlug: "generic",
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 20, 1e9: 2, 1e11: 0.1 }) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 40, 1e9: 10, 1e11: 1 }) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 60, 1e9: 25, 1e11: 5 }) }
    }
};

// A generic "high adoption / medium moat" curve for social/consumer/B2B SaaS
const SaaSMarketCurve: CategoryForecast = {
    id: "fc_generic_saas",
    targetIdeaSlug: "generic",
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 80, 1e9: 25, 1e11: 1 }) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 90, 1e9: 45, 1e11: 5 }) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 15 }) }
    }
};

// A highly viable "hyper-growth" curve for structural AI shifts
const AIEmergenceCurve: CategoryForecast = {
    id: "fc_generic_ai",
    targetIdeaSlug: "generic",
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 10 }) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 99, 1e9: 85, 1e11: 30 }) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 99.9, 1e9: 95, 1e11: 50 }) }
    }
};

export const forecastDatabase: Record<string, ForecastData> = {
    'afl': {
        forecast: SaaSMarketCurve,
        aiRationale: "AI Founder Lab operates at the intersection of venture building and operator education. The AGI Futures forecaster model assigns a strong probability of reaching a $1B+ valuation by 2035, driven by the massive demand for AI-native talent and the scalability of a digital-first cohort model."
    },
    'agentable': {
        forecast: AIEmergenceCurve,
        aiRationale: "The AGI Futures forecaster model expects the commoditization of foundational models to rapidly shift value toward specialized context-aware orchestration. Agentable possesses a high probability of yielding a $1B+ category leader quickly (by 2030), given the massive TAM of white-collar task automation and relatively low capital requirements for software deployment."
    },
    'attune': {
        forecast: SaaSMarketCurve,
        aiRationale: "Developing an AI relationship coach to make partners feel heard requires a sophisticated blend of emotionally resonant LLMs and consumer trust. While strictly software, the category faces high churn and specialized competition. The AGI Futures forecaster model projects steady growth, with massive upside if the platform achieves global daily active use."
    },
    'aura': {
        forecast: AIEmergenceCurve,
        aiRationale: "Providing an SDK and marketplace for dropping lifelike, spatially aware AI companions into AR apps capitalizes on the inevitable convergence of spatial computing and foundational models. The AGI Futures forecaster model weights the probability of a massive outcome heavily by the total addressable market of the next-generation global entertainment software ecosystem."
    },
    'avatarlab': {
        forecast: DeepTechCurve,
        aiRationale: "Personalized biology and DNA-based digital twins require massive capital expenditure and face high regulatory hurdles. The AGI Futures forecaster model implies a 'winner-take-most' dynamic, where failure is highly likely, but a breakout success by 2040 could easily exceed $10B as the primary infrastructure for personalized medicine."
    },
    'biophilia-ark': {
        forecast: DeepTechCurve,
        aiRationale: "Building high-design living walls that act as bio-filtration systems and digital twins for real-world ecologies is highly capital intensive. The AGI Futures forecaster model generates a heavily depressed curve for early years due to hardware scaling costs. However, if the platform successfully financializes verifiable biodiversity credits by 2035, the valuation potential scales non-linearly."
    },
    'deepguide': {
        forecast: SaaSMarketCurve,
        aiRationale: "Automating knowledge management and session facilitation within existing enterprise silos is a well-understood, high-margin software category. The AGI Futures forecaster model reflects strong baseline confidence in reaching a $1B public market cap, though the ceiling is constrained by fragmentation and competition among incumbents."
    },
    'handraise': {
        forecast: SaaSMarketCurve,
        aiRationale: "A platform allowing users to post tight briefs and only receive answers from verified experts via a bounty system disrupts the traditional expert network. The AGI Futures forecaster model reflects a standard B2B marketplace scaling curve: initially slow to fundamentally alter behavior, but highly defensible and sticky once established."
    },
    'hearth': {
        forecast: SaaSMarketCurve,
        aiRationale: "Next-generation real estate and co-living networks struggle with offline monetization and scaling physical infrastructure. The AGI Futures forecaster model reflects a high likelihood of reaching a $100M+ valuation based on user engagement, but drops off sharply past $1B due to the historical difficulty of scaling asset-heavy community networks."
    },
    'helm': {
        forecast: AIEmergenceCurve,
        aiRationale: "The AGI Futures forecaster model expects the commoditization of foundational models to rapidly shift value toward specialized context-aware orchestration and virtual workspaces. Helm possesses a high probability of yielding a $1B+ category leader quickly given the massive TAM of white-collar task automation."
    },
    'homequote': {
        forecast: SaaSMarketCurve,
        aiRationale: "Using computer vision to turn user-filmed walkthroughs into structured job objects and exact quotes removes the primary friction point in local home services. The AGI Futures forecaster model predicts steady adoption, mapping cleanly to a classic aggregator power-law: eventual consolidation into one or two $10B+ national leaders by 2040."
    },
    'main-street-legacy': {
        forecast: SaaSMarketCurve,
        aiRationale: "Facilitating SaaS-driven rollups of SMBs leverages financial engineering rather than pure fundamental tech breakthroughs. The AGI Futures forecaster model weights the probability curve heavily by macroeconomic interest rates, but assuming normalized capital costs, it shows a highly viable path to creating a $1B+ holding company by 2030."
    },
    'murmuration': {
        forecast: AIEmergenceCurve,
        aiRationale: "Building an AGI-native strategy and execution engine natively disrupts the traditional consultancy and strategy agency model. The AGI Futures forecaster model reflects high confidence that at least one mega-winner (> $10B) will emerge by 2035 as B2B workflows shift from software-as-a-service to service-as-software."
    },
    'porchfront': {
        forecast: SaaSMarketCurve,
        aiRationale: "Next-generation real estate and neighborhood social cohesion networks struggle with monetization. The AGI Futures forecaster model reflects a high likelihood of reaching a $100M+ valuation based on user engagement, but drops off sharply past $1B due to the historical difficulty of extracting high LTV from local community networks."
    },
    'proofrun': {
        forecast: SaaSMarketCurve,
        aiRationale: "Allowing companies to turn real backlog work into mini-missions for candidates targets the core bottleneck of tech recruiting. The solution is highly viable but faces intense competition from incumbent applicant tracking systems. The AGI Futures forecaster model projects a historically well-paved path to a $1B+ profitable exit, leading to strong mid-tier probability density."
    },
    'sellcraft': {
        forecast: SaaSMarketCurve,
        aiRationale: "Building an AI-native sales mastery platform where humans practice against virtual customers faces skepticism from legacy leadership training incumbents. The AGI Futures forecaster model limits the probability of a $>100B outcome, anticipating rapid feature commoditization. However, the path to a high-margin $1B+ B2B training exit remains highly viable."
    },
};

export const getForecastForSlug = (slug: string): ForecastData => {
    return forecastDatabase[slug] || {
        forecast: SaaSMarketCurve,
        aiRationale: "A standard venture probability curve has been applied to this category, anticipating typical software-as-a-service market dynamics and capital requirements."
    };
};
