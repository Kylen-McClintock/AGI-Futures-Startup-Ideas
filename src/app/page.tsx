import { createClient } from "@/utils/supabase/server";
import { getForecastForSlug } from "@/data/forecasts";
import { calculateExpectedValuation, calculateTimeToUnicorn } from "@/utils/forecastMath";
import HomeClient, { ProjectData } from "./page-client";
import { ideas, ideaFallbacks } from "@/data/ideas";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

export default async function Home() {
    const supabase = await createClient();

    // Fetch scores and creation dates for all projects
    const { data: dbProjects } = await supabase
        .from('projects')
        .select('slug, created_at, moat_score, difficulty_score, civilizational_impact_score, civilizational_impact_ratings, project_tags(*)');

    // Create a map for quick access
    const projectDataMap = new Map(dbProjects?.map(p => [p.slug, p]) || []);

    const fallbackData = ideaFallbacks;

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

    const projects: ProjectData[] = ideas.map(createProject);

    return (
        <main className="min-h-screen bg-[var(--background)] overflow-hidden flex flex-col justify-center relative">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>
            {/* Flawless Pitch Black Header Blend */}
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-black via-black via-50% to-transparent pointer-events-none z-[1]" />


            <HomeClient projects={projects} />
        </main>
    );
}
