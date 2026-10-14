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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {hubs.map(h => (
                        <Link key={h.slug} href={`/ideas/${h.slug}`} className="group relative block glass-panel rounded-3xl border border-white/10 p-8 overflow-hidden hover:border-[var(--primary)]/40 transition-colors">
                            <div className="absolute inset-0 z-0">
                                <Image src={h.ideas[0].image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-25 group-hover:opacity-35 transition-opacity" />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-serif text-white mb-1 group-hover:text-[var(--primary)] transition-colors">{h.label}</h2>
                                <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">{h.ideas.length} ideas</p>
                                <p className="text-sm text-white/65 font-light line-clamp-3">{h.metaDescription}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
