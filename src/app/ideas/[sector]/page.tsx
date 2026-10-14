import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getHubBySlug, getHubSectors } from "@/data/sector-hubs";
import { problems } from "@/data/problem-atlas-data";
import { IdeaCard } from "@/components/IdeaCard";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
    return getHubSectors().map(h => ({ sector: h.slug }));
}

const year = new Date().getFullYear();

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
    const { sector } = await params;
    const hub = getHubBySlug(sector);
    if (!hub) return {};
    const title = `${hub.ideas.length} AI Startup Ideas in ${hub.label} (${year}) | AGI Futures`;
    return {
        title,
        description: hub.metaDescription,
        alternates: { canonical: `/ideas/${hub.slug}` },
        openGraph: {
            title,
            description: hub.metaDescription,
            url: `/ideas/${hub.slug}`,
        },
    };
}

export default async function SectorHubPage({ params }: { params: Promise<{ sector: string }> }) {
    const { sector } = await params;
    const hub = getHubBySlug(sector);
    if (!hub) notFound();

    const relatedProblems = problems
        .filter(p => p.sector_tags?.includes(hub.sector))
        .sort((a, b) => b.problem_priority - a.problem_priority)
        .slice(0, 6);
    const otherHubs = getHubSectors().filter(h => h.slug !== hub.slug);

    return (
        <main className="min-h-screen bg-[var(--background)] relative overflow-hidden">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: `AI Startup Ideas in ${hub.label}`,
                description: hub.metaDescription,
                url: `${SITE_URL}/ideas/${hub.slug}`,
                isPartOf: { "@type": "WebSite", name: "AGI Futures", url: SITE_URL },
                mainEntity: {
                    "@type": "ItemList",
                    numberOfItems: hub.ideas.length,
                    itemListElement: hub.ideas.map((idea, i) => ({
                        "@type": "ListItem",
                        position: i + 1,
                        url: `${SITE_URL}${idea.href}`,
                        name: idea.title,
                    })),
                },
            }} />
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 lg:px-8">
                <nav className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white">AGI Futures</Link>
                    <span className="mx-2">/</span>
                    <Link href="/ideas" className="hover:text-white">Ideas by sector</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[var(--primary)]">{hub.label}</span>
                </nav>

                <h1 className="text-4xl sm:text-6xl font-serif text-white leading-[1.15] tracking-tight mb-8">
                    <span className="italic font-light text-[var(--primary)]">AI startup ideas</span> in {hub.label}
                </h1>
                <div className="max-w-3xl space-y-5 text-lg text-white/75 font-light leading-relaxed mb-16 border-b border-white/10 pb-12">
                    {hub.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6">
                    {hub.ideas.length} open-sourced theses
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                    {hub.ideas.map(idea => <IdeaCard key={idea.slug} idea={idea} />)}
                </div>

                <div className="glass-panel rounded-3xl border border-[var(--primary)]/30 p-8 sm:p-10 mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">Not sure which one is yours?</h2>
                        <p className="text-white/65 font-light">Answer six questions and get matched to the ideas that fit your skills, capital and conviction.</p>
                    </div>
                    <Link href={`/match?sector=${encodeURIComponent(hub.sector)}`} className="shrink-0 inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-black bg-[var(--primary)] px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold">
                        Find your match <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {relatedProblems.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-serif text-white mb-2">Unsolved {hub.label.toLowerCase()} problems</h2>
                        <p className="text-white/55 font-light mb-8">High-priority gaps from the <Link href="/problem-atlas" className="underline hover:text-white">Problem Atlas</Link> that still need a founder.</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {relatedProblems.map(p => (
                                <Link key={p.slug} href={`/problem-atlas/${p.slug}`} className="group glass-panel rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg text-white font-medium group-hover:text-[var(--primary)] transition-colors">{p.title}</h3>
                                        <span className="text-[10px] font-mono text-white/50 border border-white/10 rounded-full px-2 py-0.5 shrink-0 ml-3">Priority {p.problem_priority}</span>
                                    </div>
                                    <p className="text-sm text-white/60 font-light line-clamp-2">{p.preview_text}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mb-8">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">More sectors</h2>
                    <div className="flex flex-wrap gap-2">
                        {otherHubs.map(h => (
                            <Link key={h.slug} href={`/ideas/${h.slug}`} className="text-sm text-white/70 border border-white/10 rounded-full px-4 py-1.5 hover:border-[var(--primary)]/50 hover:text-white transition-colors">
                                {h.label} <span className="text-white/35">({h.ideas.length})</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
