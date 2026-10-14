import type { Metadata } from "next";
import { ideas, ideaFallbacks } from "@/data/ideas";
import MatchClient, { type MatchIdea } from "./match-client";

export const metadata: Metadata = {
    title: "Founder Fit Matcher: Which AGI-Era Startup Should You Build? | AGI Futures",
    description: "Answer six quick questions about your skills, capital and conviction. AI matches you to the open-sourced AGI-era startup ideas you're best positioned to build, with a personalized 30-day plan.",
    alternates: { canonical: "/match" },
    openGraph: {
        title: "Which AGI-era startup should you build?",
        description: "Get matched to the open-sourced startup ideas you're best positioned to build, in about 60 seconds.",
        url: "/match",
    },
};

export default async function MatchPage({ searchParams }: { searchParams: Promise<{ sector?: string }> }) {
    const { sector } = await searchParams;

    const counts = new Map<string, number>();
    for (const fb of Object.values(ideaFallbacks)) for (const s of fb.tags?.sector ?? []) counts.set(s, (counts.get(s) ?? 0) + 1);
    const sectors = [...counts.entries()].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]).map(([s]) => s);

    const matchIdeas: MatchIdea[] = ideas.map(i => ({ slug: i.slug, title: i.title, scoreTitle: i.scoreTitle, href: i.href, image: i.image }));
    const initialSector = sector && sectors.includes(sector) ? sector : undefined;

    return <MatchClient ideas={matchIdeas} sectors={sectors} initialSector={initialSector} />;
}
