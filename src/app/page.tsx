import { createClient } from "@/utils/supabase/server";
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

export default async function Home() {
    const supabase = await createClient();

    // Fetch scores and creation dates for all projects
    const { data: dbProjects } = await supabase
        .from('projects')
        .select('slug, created_at, moat_score, difficulty_score, civilizational_impact_score');

    // Create a map for quick access
    const projectDataMap = new Map(dbProjects?.map(p => [p.slug, p]) || []);

    const fallbackScores: Record<string, { moat: number, difficulty: number, impact: number, created_at: string }> = {
        "murmuration": { moat: 85, difficulty: 70, impact: 92, created_at: "2024-03-09T10:00:00Z" },
        "attune": { moat: 75, difficulty: 82, impact: 88, created_at: "2024-03-08T10:00:00Z" },
        "porchfront": { moat: 88, difficulty: 75, impact: 82, created_at: "2024-03-07T10:00:00Z" },
        "homequote": { moat: 79, difficulty: 67, impact: 75, created_at: "2024-03-06T10:00:00Z" },
        "aura": { moat: 72, difficulty: 81, impact: 85, created_at: "2024-03-05T10:00:00Z" },
        "afl": { moat: 78, difficulty: 61, impact: 80, created_at: "2024-03-04T10:00:00Z" },
        "deepguide": { moat: 78, difficulty: 72, impact: 83, created_at: "2024-03-03T10:00:00Z" },
        "main-street-legacy": { moat: 78, difficulty: 74, impact: 81, created_at: "2024-03-02T10:00:00Z" },
        "helm": { moat: 78, difficulty: 71, impact: 68, created_at: "2024-03-01T10:00:00Z" },
        "agentable": { moat: 78, difficulty: 71, impact: 74, created_at: "2024-02-28T10:00:00Z" },
        "avatarlab": { moat: 92, difficulty: 89, impact: 78, created_at: "2024-03-10T10:00:00Z" },
        "proofrun": { moat: 78, difficulty: 67, impact: 64, created_at: "2024-03-11T10:00:00Z" }
    };

    // Helper to merge static data with DB data
    const createProject = (staticData: Omit<ProjectData, 'created_at' | 'moat_score' | 'difficulty_score' | 'civilizational_impact_score'>): ProjectData => {
        const dbData = projectDataMap.get(staticData.slug);
        const fallback = fallbackScores[staticData.slug] || { moat: 0, difficulty: 0, impact: 0, created_at: new Date().toISOString() };

        let moat = fallback.moat;
        if (dbData?.moat_score) moat = typeof dbData.moat_score === 'object' ? (dbData.moat_score as any).ai_scored : dbData.moat_score;

        let difficulty = fallback.difficulty;
        if (dbData?.difficulty_score) difficulty = typeof dbData.difficulty_score === 'object' ? (dbData.difficulty_score as any).ai_scored : dbData.difficulty_score;

        let impact = fallback.impact;
        if (dbData?.civilizational_impact_score) impact = typeof dbData.civilizational_impact_score === 'object' ? (dbData.civilizational_impact_score as any).ai_scored : dbData.civilizational_impact_score;

        return {
            ...staticData,
            created_at: dbData?.created_at || fallback.created_at,
            moat_score: moat || fallback.moat,
            difficulty_score: difficulty || fallback.difficulty,
            civilizational_impact_score: impact || fallback.impact,
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
