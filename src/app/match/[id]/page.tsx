import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ideas } from "@/data/ideas";
import { IdeaCard } from "@/components/IdeaCard";
import { getPublicMatch } from "@/lib/match/public";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const picks = await getPublicMatch(id);
    const top = picks?.[0] && ideas.find(i => i.slug === picks[0].slug);
    const title = top ? `My AGI-era startup match: ${top.title} (${picks![0].fit}% fit)` : "Founder Fit Matcher | AGI Futures";
    return {
        title,
        description: "Find the open-sourced AGI-era startup you're best positioned to build, in about 60 seconds.",
        robots: { index: false, follow: true }, // personal result pages shouldn't compete with /match in search
        alternates: { canonical: "/match" },
        openGraph: { title, description: "Which AGI-era startup are you built to build? Find yours.", url: `/match/${id}` },
    };
}

export default async function SharedMatchPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const picks = await getPublicMatch(id);
    if (!picks?.length) notFound();

    return (
        <main className="min-h-screen bg-[var(--background)] relative overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 sm:py-32">
                <p className="text-xs font-mono uppercase tracking-widest text-[#21de9a] mb-4">Founder Fit Matcher · Shared result</p>
                <h1 className="text-4xl sm:text-5xl font-serif text-white leading-[1.1] tracking-tight mb-10">
                    Someone&apos;s AGI-era startup matches
                </h1>
                <div className="grid gap-4 sm:grid-cols-3 mb-14">
                    {picks.map((p, idx) => {
                        const idea = ideas.find(i => i.slug === p.slug);
                        if (!idea) return null;
                        return (
                            <IdeaCard
                                key={p.slug}
                                idea={idea}
                                badge={<div className={`px-2.5 py-1 rounded-full text-[10px] font-mono border backdrop-blur-md ${idx === 0 ? "border-[#21de9a] bg-[#21de9a]/20 text-white" : "border-white/20 bg-black/40 text-white/80"}`}>{p.fit}% fit</div>}
                            />
                        );
                    })}
                </div>
                <div className="glass-panel rounded-3xl border border-[#21de9a]/30 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">Which one are you built to build?</h2>
                        <p className="text-white/60 font-light">Six questions. About 60 seconds. A personalized 30-day plan.</p>
                    </div>
                    <Link href="/match" className="shrink-0 inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-black bg-[#21de9a] px-6 py-3 rounded-full hover:opacity-90 font-semibold">
                        Find yours <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
