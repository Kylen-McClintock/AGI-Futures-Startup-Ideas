import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHubSectors } from "@/data/sector-hubs";

export const metadata: Metadata = {
    title: "AI Startup Ideas by Sector | AGI Futures",
    description: "Browse open-sourced, AGI-native startup ideas by sector: AI, governance, healthcare, climate, housing, education, biotech and more.",
    alternates: { canonical: "/ideas" },
    openGraph: {
        title: "AI Startup Ideas by Sector | AGI Futures",
        description: "Browse open-sourced, AGI-native startup ideas by sector.",
        url: "/ideas",
    },
};

export default function IdeasIndexPage() {
    const hubs = getHubSectors();
    return (
        <main className="min-h-screen bg-[var(--background)] relative overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 lg:px-8">
                <h1 className="text-4xl sm:text-6xl font-serif text-white leading-[1.15] tracking-tight mb-6">
                    <span className="italic font-light text-[var(--primary)]">AI startup ideas</span> by sector
                </h1>
                <p className="max-w-2xl text-lg text-white/70 font-light mb-14">
                    Every thesis in the library is tagged by sector. Pick the industry you know best, or the one you want to transform.
                </p>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {hubs.map(h => (
                        <Link key={h.slug} href={`/ideas/${h.slug}`} className="group block h-full focus-visible:outline-none">
                            <article className="flex flex-col h-full glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-[var(--primary)]/40 transition-colors group-focus-visible:ring-2 group-focus-visible:ring-[var(--primary)]">
                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40 shrink-0">
                                    <Image src={h.ideas[0].image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" quality={90} className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" />
                                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
                                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white bg-black/70 border border-white/15 backdrop-blur-md">
                                        {h.ideas.length} ideas
                                    </span>
                                </div>
                                <div className="flex flex-col flex-1 p-6 bg-[#070b0f]/90">
                                    <h2 className="text-2xl font-serif text-white mb-2 group-hover:text-[var(--primary)] transition-colors">{h.label}</h2>
                                    <p className="text-sm text-white/65 font-light line-clamp-3 leading-relaxed">{h.metaDescription}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
