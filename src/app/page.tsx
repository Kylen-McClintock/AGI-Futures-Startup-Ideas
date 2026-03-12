import { createClient } from "@/utils/supabase/server";
import { getForecastForSlug } from "@/data/forecasts";
import { calculateExpectedValuation, calculateTimeToUnicorn } from "@/utils/forecastMath";
import HomeClient, { ProjectData } from "./page-client";

import murmuration_hero from "./murmuration/assets/hero_strategy_dashboard.png";
import attune_hero from "./attune/assets/attune_hero_vista.png";
import porchfront_hero from "./porchfront/assets/hero_garage_cafe.png";
import homequote_hero from "./homequote/assets/hq_hero_scan_1772949695780.png";
import aura_hero from "./aura/assets/aura_hero_vista.png";
import afl_hero from "./afl/assets/afl_hero_campus.png";
import deepguide_hero from "./deepguide/assets/deepguide_hero.png";
import msl_hero from "./main-street-legacy/assets/hero.png";
import helm_hero from "./helm/assets/helm_hero.png";
import agentable_hero from "./agentable/assets/hero.png";
import avatarlab_hero from "./avatarlab/assets/avatarlab_hero.png";
import proofrun_hero from "./proofrun/assets/proofrun_hero.png";
import handraise_hero from "./handraise/assets/handraise_hero.png";
import hearth_hero from "./hearth/assets/hero.png";
import biophilia_ark_hero from "./biophilia-ark/assets/cloud_forest.png";
import sellcraft_hero from "./sellcraft/assets/sellcraft_hero.png";

export default async function Home() {
    const supabase = await createClient();

    // Fetch scores and creation dates for all projects
    const { data: dbProjects } = await supabase
        .from('projects')
        .select('slug, created_at, moat_score, difficulty_score, civilizational_impact_score, civilizational_impact_ratings, project_tags(*)');

    // Create a map for quick access
    const projectDataMap = new Map(dbProjects?.map(p => [p.slug, p]) || []);

    const fallbackData: Record<string, { moat: number, difficulty: number, impact: number, created_at: string, tags?: any, civilizational_impact_ratings?: any }> = {
        "murmuration": { moat: 85, difficulty: 70, impact: 92, created_at: "2024-03-09T10:00:00Z", tags: { sector: ['AI', 'Governance', 'Security', 'Existential Risk Mitigation'], bottleneck: ['Coordination', 'Regulatory Friction', 'Trust'], customer: ['Enterprises', 'Governments'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Simulations', 'Knowledge Graphs'], readiness: ['Build Now'], founder_fit: ['Policy Entrepreneur', 'Operator-Led'], outcomes: ['Resilience', 'Better Governance', 'Existential Risk Reduction', 'Differentially Defensive'] }, civilizational_impact_ratings: {'Resilience':{'ai_scored':95},'Better Governance':{'ai_scored':95},'Existential Risk Reduction':{'ai_scored':98},'Differentially Defensive':{'ai_scored':95}} },
        "attune": { moat: 75, difficulty: 82, impact: 88, created_at: "2024-03-08T10:00:00Z", tags: { sector: ['Relationships', 'Community', 'AI'], bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'], customer: ['Couples', 'Consumers'], product_type: ['Consumer App', 'Personalized AI'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Societal Cohesion', 'Social Trust', 'Community Renewal'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':95},'Societal Cohesion':{'ai_scored':90},'Social Trust':{'ai_scored':90},'Community Renewal':{'ai_scored':88}} },
        "porchfront": { moat: 88, difficulty: 75, impact: 82, created_at: "2024-03-07T10:00:00Z", tags: { sector: ['Community', 'Cities', 'Relationships'], bottleneck: ['Loneliness', 'Trust', 'Coordination'], customer: ['Consumers', 'Families'], product_type: ['Marketplace', 'Coordination Infrastructure'], enabling_technology: ['Social Graph', 'Large Language Models'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Social Trust', 'Societal Cohesion', 'Community Renewal'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':95},'Social Trust':{'ai_scored':95},'Societal Cohesion':{'ai_scored':90},'Community Renewal':{'ai_scored':95}} },
        "homequote": { moat: 79, difficulty: 67, impact: 75, created_at: "2024-03-06T10:00:00Z", tags: { sector: ['AI', 'Housing'], bottleneck: ['Trust', 'Coordination'], customer: ['Consumers', 'Enterprises'], product_type: ['Marketplace', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Vision AI', 'Voice AI', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Resilience', 'Social Trust', 'Human Flourishing', 'Scientific Acceleration', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':85},'Resilience':{'ai_scored':80},'Social Trust':{'ai_scored':85},'Human Flourishing':{'ai_scored':90},'Scientific Acceleration':{'ai_scored':75},'Societal Cohesion':{'ai_scored':85}} },
        "aura": { moat: 72, difficulty: 81, impact: 85, created_at: "2024-03-05T10:00:00Z", tags: { sector: ['AI', 'Education', 'Security', 'Existential Risk Mitigation'], bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'], customer: ['Consumers', 'Startups'], product_type: ['Platform', 'Marketplace'], enabling_technology: ['Large Language Models', 'Voice AI', 'Vision AI', 'Spatial Computing', 'Augmented Reality'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Social Trust', 'Ender Prevention', 'Existential Risk Reduction'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':90},'Social Trust':{'ai_scored':85},'Ender Prevention':{'ai_scored':95},'Existential Risk Reduction':{'ai_scored':95}} },
        "hearth": { moat: 78, difficulty: 73, impact: 76, created_at: "2024-03-05T10:00:00Z", tags: { sector: ['Real Estate', 'Community', 'Software'], bottleneck: ['Coordination', 'Financing', 'Trust'], customer: ['Founders', 'Families', 'Digital Nomads'], product_type: ['Platform', 'Marketplace', 'Services'], enabling_technology: ['Large Language Models', 'Knowledge Graphs', 'Autonomous Agents'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Capital Intensive'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Community Renewal'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':68},'Human Flourishing':{'ai_scored':84},'Social Trust':{'ai_scored':79},'Community Renewal':{'ai_scored':88}} },
        "afl": { moat: 78, difficulty: 61, impact: 80, created_at: "2024-03-04T10:00:00Z", tags: { sector: ['AI', 'Education', 'Community', 'Media'], bottleneck: ['Talent Matching', 'Trust', 'Cultural Resistance'], customer: ['Founders', 'Consumers'], product_type: ['Institution', 'Platform'], outcomes: ['Abundance', 'Societal Cohesion', 'Scientific Acceleration'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':85},'Societal Cohesion':{'ai_scored':70},'Scientific Acceleration':{'ai_scored':80}} },
        "deepguide": { moat: 78, difficulty: 72, impact: 83, created_at: "2024-03-03T10:00:00Z", tags: { sector: ['AI', 'Healthcare', 'Psychedelics', 'Science'], bottleneck: ['Trust', 'Regulatory Friction', 'Scientific Slowdown'], customer: ['Caregivers', 'Scientists'], product_type: ['SaaS', 'Agent'], enabling_technology: ['Large Language Models', 'Voice AI', 'Knowledge Graphs', 'Autonomous Agents'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Scientific Acceleration', 'Social Trust', 'Resilience'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':82},'Scientific Acceleration':{'ai_scored':74},'Social Trust':{'ai_scored':51},'Resilience':{'ai_scored':46}} },
        "main-street-legacy": { moat: 78, difficulty: 74, impact: 81, created_at: "2024-03-02T10:00:00Z", tags: { sector: ['AI', 'Finance', 'Education'], bottleneck: ['Trust', 'Coordination', 'Talent Matching'], customer: ['Founders', 'Enterprises'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Knowledge Graphs'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Community Renewal', 'Resilience'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':76},'Human Flourishing':{'ai_scored':58},'Community Renewal':{'ai_scored':68},'Resilience':{'ai_scored':54}} },
        "helm": { moat: 78, difficulty: 71, impact: 68, created_at: "2024-03-01T10:00:00Z", tags: { sector: ['AI', 'Community', 'Media'], bottleneck: ['Coordination', 'Trust', 'Talent Matching'], customer: ['Founders', 'Startups'], product_type: ['Platform', 'Agent'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Freedom'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':81},'Human Flourishing':{'ai_scored':66},'Social Trust':{'ai_scored':54},'Freedom':{'ai_scored':71}} },
        "agentable": { moat: 78, difficulty: 71, impact: 74, created_at: "2024-02-28T10:00:00Z", tags: { sector: ['AI', 'Security'], bottleneck: ['Trust', 'Coordination'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Vision AI'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Venture-Scale'], outcomes: ['Abundance', 'Social Trust', 'Alignment', 'Differentially Defensive'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':61},'Social Trust':{'ai_scored':58},'Alignment':{'ai_scored':49},'Differentially Defensive':{'ai_scored':47}} },
        "avatarlab": { moat: 92, difficulty: 89, impact: 78, created_at: "2024-03-10T10:00:00Z", tags: { sector: ['AI', 'Biotech', 'Healthcare', 'Longevity'], bottleneck: ['Aging', 'Disease', 'Scientific Slowdown'], customer: ['Consumers', 'Doctors'], product_type: ['Platform', 'Personalized AI'], enabling_technology: ['Large Language Models', 'Wearables', 'Knowledge Graphs', 'Synthetic Biology', 'Simulations'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Capital Intensive'], outcomes: ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience'] }, civilizational_impact_ratings: {'Longevity':{'ai_scored':86},'Human Flourishing':{'ai_scored':73},'Scientific Acceleration':{'ai_scored':84},'Resilience':{'ai_scored':58}} },
        "proofrun": { moat: 78, difficulty: 67, impact: 64, created_at: "2024-03-11T10:00:00Z", tags: { sector: ['AI', 'Education'], bottleneck: ['Talent Matching', 'Trust', 'Coordination'], customer: ['Startups', 'Enterprises'], product_type: ['Platform', 'Marketplace'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':68},'Human Flourishing':{'ai_scored':74},'Social Trust':{'ai_scored':54},'Societal Cohesion':{'ai_scored':58}} },
        "handraise": { moat: 76, difficulty: 63, impact: 65, created_at: "2024-03-12T10:00:00Z", tags: { sector: ['AI', 'Social Media', 'Community'], bottleneck: ['Trust', 'Coordination', 'Talent Matching'], customer: ['Founders', 'Startups'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Social Graph', 'Knowledge Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Social Trust', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':64},'Social Trust':{'ai_scored':82},'Societal Cohesion':{'ai_scored':58}} },
        "biophilia-ark": { moat: 84, difficulty: 74, impact: 78, created_at: "2024-03-13T10:00:00Z", tags: { sector: ['Housing', 'Cities', 'Community', 'Science'], bottleneck: ['Meaning Crisis', 'Social Fragmentation', 'Cultural Resistance'], customer: ['Enterprises', 'Consumers'], product_type: ['Hardware', 'Platform'], enabling_technology: ['Large Language Models', 'Vision AI', 'Augmented Reality', 'Simulations', 'Knowledge Graphs'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Biodiversity', 'Community Renewal', 'Air Quality', 'Climate'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':86},'Biodiversity':{'ai_scored':91},'Community Renewal':{'ai_scored':72},'Air Quality':{'ai_scored':41},'Climate':{'ai_scored':82}} },
        "sellcraft": { moat: 74, difficulty: 68, impact: 47, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Education', 'Media'], bottleneck: ['Trust', 'Talent Matching'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'SaaS'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Spatial Computing', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':65},'Human Flourishing':{'ai_scored':70},'Social Trust':{'ai_scored':55}} }
    };

    // Helper to merge static data with DB data
    const createProject = (staticData: Omit<ProjectData, 'created_at' | 'moat_score' | 'difficulty_score' | 'civilizational_impact_score'>): ProjectData => {
        const dbData = projectDataMap.get(staticData.slug);
        const fallback = fallbackData[staticData.slug] || { moat: 0, difficulty: 0, impact: 0, created_at: new Date().toISOString(), tags: undefined };

        let moat = fallback.moat;
        if (dbData?.moat_score) moat = typeof dbData.moat_score === 'object' ? (dbData.moat_score as any).ai_scored : dbData.moat_score;

        let difficulty = fallback.difficulty;
        if (dbData?.difficulty_score) difficulty = typeof dbData.difficulty_score === 'object' ? (dbData.difficulty_score as any).ai_scored : dbData.difficulty_score;

        let impact = fallback.impact;
        if (dbData?.civilizational_impact_score) impact = typeof dbData.civilizational_impact_score === 'object' ? (dbData.civilizational_impact_score as any).ai_scored : dbData.civilizational_impact_score;

        // Use DB tags if available, otherwise safely use fallback tags from the static dictionary
        const dbTags = Array.isArray(dbData?.project_tags) ? dbData?.project_tags[0] : (dbData?.project_tags || undefined);
        const tags = dbTags || fallback.tags || undefined;

        const ratings = dbData?.civilizational_impact_ratings || fallback.civilizational_impact_ratings || {};

        const forecastData = getForecastForSlug(staticData.slug).forecast;
        const expectedValuation2030 = calculateExpectedValuation(forecastData.curves['2030-01-01'].probabilities);
        const expectedValuation2035 = calculateExpectedValuation(forecastData.curves['2035-01-01'].probabilities);
        const expectedValuation2040 = calculateExpectedValuation(forecastData.curves['2040-01-01'].probabilities);
        const timeToUnicorn = calculateTimeToUnicorn(forecastData);

        return {
            ...staticData,
            created_at: dbData?.created_at || fallback.created_at,
            moat_score: moat || fallback.moat,
            difficulty_score: difficulty || fallback.difficulty,
            civilizational_impact_score: impact || fallback.impact,
            civilizational_impact_ratings: ratings,
            tags: tags,
            expectedValuation2030,
            expectedValuation2035,
            expectedValuation2040,
            timeToUnicorn
        };
    };

    const projects: ProjectData[] = [
        createProject({
            slug: "murmuration",
            title: "Murmuration Engine",
            scoreTitle: "AI Agent Swarm Intelligence",
            description: "An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments and compound learnings.",
            image: murmuration_hero,
            href: "/murmuration",
            themeColor: "hover:border-[var(--primary)]/50 text-[var(--primary)]",
            hoverTextColor: "group-hover:text-[var(--primary)]",
        }),
        createProject({
            slug: "attune",
            title: "Attune",
            scoreTitle: "An AI relationship coach",
            description: "An AI relationship coach to make her feel heard, seen, and supported, consistently.",
            image: attune_hero,
            href: "/attune",
            themeColor: "hover:border-rose-500/50 text-rose-400",
            hoverTextColor: "group-hover:text-rose-400",
        }),
        createProject({
            slug: "porchfront",
            title: "Porchfront",
            scoreTitle: "The open-garage culture OS",
            description: "Turn sidewalk-facing garages into community hubs and micro-businesses—with a live neighborhood map and simple tools that reward real-world connection.",
            image: porchfront_hero,
            href: "/porchfront",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "hearth",
            title: "Hearth",
            scoreTitle: "Friend-Native Housing",
            description: "Hearth makes it radically easier to start, join, and operate intentional living communities with people you actually want to share life with.",
            image: hearth_hero,
            href: "/hearth",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "homequote",
            title: "HomeQuote AI",
            scoreTitle: "The Scope-to-Quote Engine",
            description: "Turns a user-filmed walkthrough into a structured job object, an exact quote, and infinitely bookable offers from service providers.",
            image: homequote_hero,
            href: "/homequote",
            themeColor: "hover:border-blue-500/50 text-blue-400",
            hoverTextColor: "group-hover:text-blue-400",
        }),
        createProject({
            slug: "aura",
            title: "AURA",
            scoreTitle: "Marketplace for AR embedded AI Avatars",
            description: "An SDK and marketplace that lets any developer drop lifelike, spatially aware AI companions into AR apps.",
            image: aura_hero,
            href: "/aura",
            themeColor: "hover:border-fuchsia-500/50 text-fuchsia-400",
            hoverTextColor: "group-hover:text-fuchsia-400",
        }),
        createProject({
            slug: "afl",
            title: "AI Founder Lab",
            scoreTitle: "The AI-native startup studio",
            description: "Turns ambitious builders into founder-grade operators by having them build, sell, and own real ventures.",
            image: afl_hero,
            href: "/afl",
            themeColor: "hover:border-orange-500/50 text-orange-400",
            hoverTextColor: "group-hover:text-orange-400",
        }),
        createProject({
            slug: "deepguide",
            title: "DeepGuide",
            scoreTitle: "AI copilot for psychedelic therapy",
            description: "Keeps facilitators present, captures structured notes, recommends the right exercise at the right moment, and turns outcomes into evolving best practices.",
            image: deepguide_hero,
            href: "/deepguide",
            themeColor: "hover:border-purple-500/50 text-purple-400",
            hoverTextColor: "group-hover:text-purple-400",
        }),
        createProject({
            slug: "main-street-legacy",
            title: "Main Street Legacy",
            scoreTitle: "AI-Native SMB Succession Engine",
            description: "Equipping a new generation of founders with AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses into compounding cash-flow machines.",
            image: msl_hero,
            href: "/main-street-legacy",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "helm",
            title: "Helm",
            scoreTitle: "The playful office OS for solo founders",
            description: "A virtual office where AI teammates, collaborators, and freelancers help you run your company—driving toward increased automation over time.",
            image: helm_hero,
            href: "/helm",
            themeColor: "hover:border-indigo-500/50 text-indigo-400",
            hoverTextColor: "group-hover:text-indigo-400",
        }),
        createProject({
            slug: "agentable",
            title: "Agentable",
            scoreTitle: "Make software legible to people and AI",
            description: "Turns websites and apps into a machine-readable UI map, guides humans in-flow, and lets AI agents complete the same tasks.",
            image: agentable_hero,
            href: "/agentable",
            themeColor: "hover:border-cyan-500/50 text-cyan-400",
            hoverTextColor: "group-hover:text-cyan-400",
        }),
        createProject({
            slug: "avatarlab",
            title: "AvatarLab",
            scoreTitle: "Organoid Avatars for Safe Personalized Therapy Testing",
            description: "Bank your youngest cells. Grow mini-organs from your DNA. Test therapies on your own biology before you try them.",
            image: avatarlab_hero,
            href: "/avatarlab",
            themeColor: "hover:border-teal-500/50 text-teal-400",
            hoverTextColor: "group-hover:text-teal-400",
        }),
        createProject({
            slug: "proofrun",
            title: "ProofRun",
            scoreTitle: "Proof-of-Work Hiring",
            description: "ProofRun lets companies turn real backlog work into mini missions so candidates can prove their resourcefulness and AI-native skills.",
            image: proofrun_hero,
            href: "/proofrun",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "handraise",
            title: "Handraise",
            scoreTitle: "The open-graph braintrust",
            description: "Leverage your network for the benefits of building in public without being spammy: you post a tight brief, only volunteers in that specialty respond, answers line up side by side, and contributors earn portable credit.",
            image: handraise_hero,
            href: "/handraise",
            themeColor: "hover:border-indigo-500/50 text-indigo-400",
            hoverTextColor: "group-hover:text-indigo-400",
        }),
        createProject({
            slug: "biophilia-ark",
            title: "Biophilia Ark",
            scoreTitle: "Living portals for dead interiors",
            description: "Builds high-design living walls that turn dead interiors into living portals, with optional animals, active biofiltration, and revenue flowing back to the real biome each wall represents.",
            image: biophilia_ark_hero,
            href: "/biophilia-ark",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "sellcraft",
            title: "SellCraft",
            scoreTitle: "The AI-native Sales Mastery platform",
            description: "An AI-native connected Sales Mastery platform where human sales becomes the edge in a commoditized world.",
            image: sellcraft_hero,
            href: "/sellcraft",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        })
    ];

    return (
        <main className="min-h-screen bg-[var(--background)] overflow-hidden flex flex-col justify-center relative">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>

            <HomeClient projects={projects} />
        </main>
    );
}
