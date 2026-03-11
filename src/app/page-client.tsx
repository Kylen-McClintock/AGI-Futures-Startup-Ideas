"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react";

export type ProjectData = {
    slug: string;
    title: string;
    description: string;
    image: StaticImageData;
    href: string;
    themeColor: string; // Tailwind class name for borders
    hoverTextColor?: string; // Tailwind class name for hover text
    scoreTitle: string;
    created_at: string;
    moat_score: number;
    difficulty_score: number;
    civilizational_impact_score: number;
    civilizational_impact_ratings?: Record<string, { ai_scored: number }>;
    tags?: {
        sector?: string[];
        bottleneck?: string[];
        readiness?: string[];
        customer?: string[];
        outcomes?: string[];
        product_type?: string[];
        enabling_technology?: string[];
        founder_fit?: string[];
    };
};

const filterCategories = [
    { id: 'sector', label: 'Sector' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'customer', label: 'Customer' },
    { id: 'bottleneck', label: 'Bottleneck' },
    { id: 'readiness', label: 'Readiness' },
    { id: 'product_type', label: 'Product Type' },
    { id: 'enabling_technology', label: 'Technology' },
    { id: 'founder_fit', label: 'Founder Fit' }
] as const;

export default function HomeClient({ projects }: { projects: ProjectData[] }) {
    const [sortBy, setSortBy] = useState<"recent" | "impact" | "moat" | "difficulty" | string>("recent");
    const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");
    const [searchQuery, setSearchQuery] = useState("");

    // New drill-down state
    const [activeTags, setActiveTags] = useState<Array<{ category: string, tag: string }>>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extract all unique tags for each category
    const uniqueTags = useMemo(() => {
        const tags: Record<string, string[]> = {};
        filterCategories.forEach(cat => {
            tags[cat.id] = Array.from(new Set(
                projects.flatMap(p => p.tags?.[cat.id as keyof typeof p.tags] || [])
            )).sort();
        });
        return tags;
    }, [projects]);

    const handleAddFilter = (category: string, tag: string) => {
        if (activeTags.length < 3 && tag && tag !== 'all') {
            // Check if exact filter already exists to prevent duplicates
            if (!activeTags.some(t => t.category === category && t.tag === tag)) {
                setActiveTags([...activeTags, { category, tag }]);
            }
        }
        setSelectedCategory(null);
    };

    const removeFilter = (indexToRemove: number) => {
        setActiveTags(activeTags.filter((_, idx) => idx !== indexToRemove));

        // If sorting by an outcome that was just removed, reset sort
        const removedTag = activeTags[indexToRemove];
        if (removedTag.category === "outcomes" && sortBy === `outcome_${removedTag.tag}`) {
            setSortBy("recent");
        }
    };

    const sortedProjects = [...projects]
        .filter((project) => {
            // Must contain ALL active tags
            for (const activeTag of activeTags) {
                const projectTags = project.tags?.[activeTag.category as keyof typeof project.tags] || [];
                if (!projectTags.includes(activeTag.tag)) {
                    return false;
                }
            }

            // Check Search Query
            if (searchQuery.trim() !== "") {
                const query = searchQuery.toLowerCase();
                const titleMatch = project.title.toLowerCase().includes(query);
                const descMatch = project.description.toLowerCase().includes(query);
                const scoreTitleMatch = project.scoreTitle.toLowerCase().includes(query);

                // Also search in tags
                let tagMatch = false;
                if (project.tags) {
                    const allTags = Object.values(project.tags).flat().filter(Boolean) as string[];
                    tagMatch = allTags.some(tag => tag.toLowerCase().includes(query));
                }

                if (!titleMatch && !descMatch && !scoreTitleMatch && !tagMatch) {
                    return false;
                }
            }

            return true;
        })
        .sort((a, b) => {
            let diff = 0;

            // Check if sorting by a specific outcome
            if (sortBy.startsWith("outcome_")) {
                const outcomeName = sortBy.replace("outcome_", "");
                const scoreA = a.civilizational_impact_ratings?.[outcomeName]?.ai_scored || 0;
                const scoreB = b.civilizational_impact_ratings?.[outcomeName]?.ai_scored || 0;
                diff = scoreB - scoreA;
            } else if (sortBy === "impact") {
                diff = b.civilizational_impact_score - a.civilizational_impact_score;
            } else if (sortBy === "moat") {
                diff = b.moat_score - a.moat_score;
            } else if (sortBy === "difficulty") {
                diff = b.difficulty_score - a.difficulty_score;
            } else {
                // Default: Recent (descending by created_at)
                diff = new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }

            return sortDirection === "desc" ? diff : -diff;
        });

    return (
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="inline-block mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 glass-panel">
                AGI Futures
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-[1.1] tracking-tight mb-8">
                Startup Ideas <br />
                <span className="italic text-white/70">Library</span>
            </h1>

            <div className="flex flex-col gap-4 mb-12 border-b border-white/10 pb-6">
                <p className="text-xl sm:text-2xl text-white/80 max-w-xl leading-relaxed font-light mb-2">
                    A collection of premium speculative venture theses and product storytelling prototypes.
                </p>
                <div className="flex flex-col gap-4">
                    {/* Primary Row: Search and Sorting */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="flex-1 max-w-2xl">
                            <input
                                type="text"
                                placeholder="Search ideas, tags, sectors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors w-full"
                            />
                        </div>

                        {/* Sorting */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-white/50 hidden lg:flex items-center gap-2 whitespace-nowrap">
                                <ArrowDownUp className="w-4 h-4" />
                                SORT BY
                            </span>
                            <div className="flex items-center gap-2">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8 min-w-[140px]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.75rem center',
                                        backgroundSize: '1em'
                                    }}
                                >
                                    <option value="recent">Recently Added</option>
                                    <option value="impact">Civilizational Impact</option>
                                    <option value="moat">Moat Potential</option>
                                    <option value="difficulty">Difficulty to Build</option>
                                    {/* Dynamically add sorting options for selected Outcomes */}
                                    {activeTags.filter(t => t.category === 'outcomes').map(t => (
                                        <option key={`sort-outcome-${t.tag}`} value={`outcome_${t.tag}`}>
                                            ↳ Rank by {t.tag} Score
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => setSortDirection(d => d === "desc" ? "asc" : "desc")}
                                    className="bg-black/50 border border-white/20 text-white p-2 rounded-lg hover:border-[var(--primary)] transition-colors flex items-center justify-center shrink-0"
                                    aria-label={`Sort ${sortDirection === 'desc' ? 'Ascending' : 'Descending'}`}
                                >
                                    {sortDirection === "desc" ? <ArrowDown className="w-5 h-5" /> : <ArrowUp className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Row: Active Filters & Drill-down */}
                    <div className="flex flex-col gap-3 min-h-[44px]">
                        {/* Active Filter Badges */}
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mr-1">Active Filters:</span>
                                {activeTags.map((tagObj, idx) => {
                                    const catLabel = filterCategories.find(c => c.id === tagObj.category)?.label || tagObj.category;
                                    return (
                                        <div key={`${tagObj.category}-${idx}`} className="flex items-center gap-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-medium px-3 py-1 rounded-full">
                                            <span>{catLabel}: <span className="text-white font-semibold">{tagObj.tag}</span></span>
                                            <button
                                                onClick={() => removeFilter(idx)}
                                                className="hover:bg-[var(--primary)]/20 p-0.5 rounded-full transition-colors ml-1"
                                                aria-label="Remove filter"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Drill-down Selectors */}
                        {activeTags.length < 3 && (
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mr-1">Add Filter:</span>

                                {/* 1. Category Selector */}
                                <select
                                    value={selectedCategory || "default"}
                                    onChange={(e) => setSelectedCategory(e.target.value === "default" ? null : e.target.value)}
                                    className="bg-black/50 border border-white/20 text-white/80 text-xs sm:text-sm rounded-full px-4 py-1.5 outline-none hover:border-white/40 focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.75rem center',
                                        backgroundSize: '1em'
                                    }}
                                >
                                    <option value="default">Select Category...</option>
                                    {filterCategories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>

                                {/* 2. Tag Selector (Visible only if category is selected) */}
                                {selectedCategory && (
                                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                                        <ArrowRight className="w-3 h-3 text-white/30" />
                                        <select
                                            value="default"
                                            onChange={(e) => handleAddFilter(selectedCategory, e.target.value)}
                                            className="bg-black/50 border border-[var(--primary)]/50 text-white text-xs sm:text-sm rounded-full px-4 py-1.5 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8 shadow-[0_0_10px_rgba(var(--primary-rgb),0.1)]"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300ff00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.75rem center',
                                                backgroundSize: '1em'
                                            }}
                                        >
                                            <option value="default">Select Tag...</option>
                                            {(uniqueTags[selectedCategory] || []).map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProjects.map((project) => (
                    <Link
                        key={project.slug}
                        href={project.href}
                        className={`group block glass-panel p-8 pt-16 rounded-3xl border border-white/10 ${project.themeColor} transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden`}
                    >
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image src={project.image} alt={`${project.title} Hero`} fill quality={100} className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                        {/* The hover gradient is specific to the theme color, and requires raw tailwind string rendering, so we inject a pseudo-color overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`} style={{ background: 'currentColor' }} />

                        {/* Badges */}
                        <div className="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-2">
                            <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'impact' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                <span className={sortBy === 'impact' ? 'text-white' : 'text-white/60'}>Impact:</span>
                                <span className={sortBy === 'impact' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.civilizational_impact_score}</span>
                            </div>
                            <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'moat' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                <span className={sortBy === 'moat' ? 'text-white' : 'text-white/60'}>Moat:</span>
                                <span className={sortBy === 'moat' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.moat_score}</span>
                            </div>
                            <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'difficulty' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                <span className={sortBy === 'difficulty' ? 'text-white' : 'text-white/60'}>Diff:</span>
                                <span className={sortBy === 'difficulty' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.difficulty_score}</span>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col h-full mt-2">
                            <h2 className={`text-2xl font-serif text-white mb-3 ${project.hoverTextColor || 'group-hover:text-[var(--primary)]'} transition-colors`}>{project.title}</h2>
                            <div className="relative mb-6 flex-1">
                                <p className="text-white/80 font-medium absolute top-0 left-0 w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                                    {project.scoreTitle}
                                </p>
                                <p className="text-white/70 font-light transition-opacity duration-500 opacity-0 group-hover:opacity-100 line-clamp-none">
                                    {project.description}
                                </p>
                            </div>
                            <div className={`flex items-center text-sm font-mono uppercase tracking-widest text-white/40 ${project.hoverTextColor || 'group-hover:text-[var(--primary)]'} transition-colors mt-auto pt-4 relative isolate`}>
                                View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
