"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useQueryState, parseAsString, parseAsArrayOf } from "nuqs";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react";

import { Suspense } from "react";
import { useInterest } from "@/components/InterestProvider";
import { InterestedButton } from "@/components/InterestedButton";

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
    expectedValuation2030?: number;
    expectedValuation2035?: number;
    expectedValuation2040?: number;
    timeToUnicorn?: number;
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

function HomeClientInner({ projects }: { projects: ProjectData[] }) {
    const [sortBy, setSortBy] = useQueryState("sort", parseAsString.withDefault("recent").withOptions({ shallow: false, history: 'push' }));
    const [sortDirection, setSortDirection] = useQueryState("dir", parseAsString.withDefault("desc").withOptions({ shallow: false, history: 'push' }));
    const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault("").withOptions({ shallow: false, history: 'push' }));
    const [showSavedOnly, setShowSavedOnly] = useQueryState("saved", parseAsString.withDefault("false").withOptions({ shallow: false, history: 'push' }));

    // New drill-down state
    const [activeTagsRaw, setActiveTagsRaw] = useQueryState("filters", parseAsArrayOf(parseAsString).withDefault([]).withOptions({ shallow: false, history: 'push' }));
    const { savedSlugs } = useInterest();
    
    const activeTags = useMemo(() => {
        return activeTagsRaw.map(str => {
            const [category, ...rest] = str.split(':');
            return { category, tag: rest.join(':') };
        });
    }, [activeTagsRaw]);

    const setActiveTags = (newTags: Array<{ category: string, tag: string }>) => {
        setActiveTagsRaw(newTags.map(t => `${t.category}:${t.tag}`));
    };
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extract all unique tags for each category
    const uniqueTags = useMemo(() => {
        const tags: Record<string, string[]> = {};
        filterCategories.forEach(cat => {
            const allCatTags = projects.flatMap(p => {
                const projectTagsObj = p.tags;
                if (!projectTagsObj) return [];

                // For instance, tags might be undefined or empty
                const val = projectTagsObj[cat.id as keyof typeof projectTagsObj];
                if (Array.isArray(val)) return val;
                if (typeof val === 'string') {
                    try { return JSON.parse(val); } catch { return [val]; }
                }
                return [];
            });
            tags[cat.id] = Array.from(new Set(allCatTags)).filter(Boolean).sort();
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

            if (showSavedOnly === "true") {
                if (!savedSlugs.has(project.slug)) {
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
            } else if (sortBy === "expectedValuation2030") {
                diff = (b.expectedValuation2030 || 0) - (a.expectedValuation2030 || 0);
            } else if (sortBy === "expectedValuation2035") {
                diff = (b.expectedValuation2035 || 0) - (a.expectedValuation2035 || 0);
            } else if (sortBy === "expectedValuation2040") {
                diff = (b.expectedValuation2040 || 0) - (a.expectedValuation2040 || 0);
            } else if (sortBy === "timeToUnicorn") {
                // Smallest time (fastest) is considered "best", so we flip a and b to make desc put smallest first
                diff = (a.timeToUnicorn || Infinity) - (b.timeToUnicorn || Infinity);
            } else {
                // Default: Recent (descending by created_at)
                diff = new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }

            return sortDirection === "desc" ? diff : -diff;
        });

    return (
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <img src="/logo.png" alt="AGI Futures" className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,244,164,0.3)]" />
                <Link href="/problem-atlas" className="inline-block text-xs sm:text-sm font-mono tracking-widest uppercase text-white/70 border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors glass-panel">
                    View Problem Atlas →
                </Link>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[var(--foreground)] leading-[1.2] tracking-tight mb-10">
                <span className="bg-[var(--primary)]/15 text-[var(--primary)] px-4 py-1.5 rounded-2xl inline-block mb-3 border border-[var(--primary)]/30 shadow-[0_0_30px_rgba(59,244,164,0.15)] backdrop-blur-sm">
                    <span className="italic font-light">AI-native</span>&nbsp;
                    <span className="font-medium">startup ideas</span>
                </span> <br />
                for an abundant AGI future
            </h1>

            <div className="flex flex-col gap-4 mb-16 border-b border-white/10 pb-10">
                <p className="text-2xl sm:text-3xl text-white/95 max-w-3xl leading-snug font-medium mb-2">
                    We open-source the high-conviction ideas we want to see built, <span className="text-white/50 italic font-serif tracking-wide block sm:inline mt-2 sm:mt-0">from founders already heads down scaling their own ventures.</span>
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
                                    <option value="difficulty">Difficulty to bring to market</option>
                                    <optgroup label="Valuation Forecasts">
                                        <option value="expectedValuation2030">Expected Val ('30)</option>
                                        <option value="expectedValuation2035">Expected Val ('35)</option>
                                        <option value="expectedValuation2040">Expected Val ('40)</option>
                                        <option value="timeToUnicorn">Time to $1B (Unicorn)</option>
                                    </optgroup>
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
                                <button
                                    onClick={() => setShowSavedOnly(showSavedOnly === "true" ? "false" : "true")}
                                    className={`p-2 rounded-lg border transition-colors flex items-center justify-center shrink-0 ${showSavedOnly === "true" ? 'bg-[var(--primary)]/20 border-[var(--primary)]/50 text-[var(--primary)]' : 'bg-black/50 border-white/20 text-white/50 hover:text-white hover:border-white/40'}`}
                                    aria-label="Toggle saved only"
                                    title="Show Interested Only"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={showSavedOnly === "true" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Row: Active Filters & Drill-down */}
                    <div className="flex flex-col gap-3 min-h-[44px]">
                        {/* Active Filter Badges */}
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs sm:text-sm font-mono text-white/40 uppercase tracking-widest mr-2">Active Filters:</span>
                                {activeTags.map((tagObj, idx) => {
                                    const catLabel = filterCategories.find(c => c.id === tagObj.category)?.label || tagObj.category;
                                    return (
                                        <div key={`${tagObj.category}-${idx}`} className="flex items-center gap-2 bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm sm:text-base font-medium px-4 py-1.5 rounded-full">
                                            <span>{catLabel}: <span className="text-white font-semibold">{tagObj.tag}</span></span>
                                            <button
                                                onClick={() => removeFilter(idx)}
                                                className="hover:bg-[var(--primary)]/20 p-1 rounded-full transition-colors ml-1.5"
                                                aria-label="Remove filter"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Drill-down Selectors */}
                        {activeTags.length < 3 && (
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-xs sm:text-sm font-mono text-white/40 uppercase tracking-widest mr-2">Add Filter:</span>

                                {/* 1. Category Selector */}
                                <select
                                    value={selectedCategory || "default"}
                                    onChange={(e) => setSelectedCategory(e.target.value === "default" ? null : e.target.value)}
                                    className="bg-black/50 border border-white/20 text-white/80 text-sm sm:text-base rounded-full px-5 py-2.5 sm:px-6 sm:py-3 outline-none hover:border-white/40 focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-10"
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
                                    <div className="flex items-center gap-3 transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-white/30" />
                                        <select
                                            value="default"
                                            onChange={(e) => handleAddFilter(selectedCategory, e.target.value)}
                                            className="bg-black/50 border border-[var(--primary)]/50 text-white text-sm sm:text-base rounded-full px-5 py-2.5 sm:px-6 sm:py-3 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300ff00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.75rem center',
                                                backgroundSize: '1em'
                                            }}
                                        >
                                            <option value="default">Select Tag... ({(uniqueTags[selectedCategory] || []).length})</option>
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
                            <Image src={project.image} alt={`${project.title} Hero`} fill quality={100} className="object-cover opacity-[39%] group-hover:opacity-[45%] transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/[0.32] group-hover:bg-black/[0.12] transition-colors duration-500" />
                        </div>
                        {/* The hover gradient is specific to the theme color, and requires raw tailwind string rendering, so we inject a pseudo-color overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`} style={{ background: 'currentColor' }} />

                        {/* Badges */}
                        <div className="absolute top-4 right-3 sm:right-4 z-20 flex flex-col items-end gap-2 max-w-[80%]">
                            <div className="flex flex-wrap justify-end gap-2 items-center">
                                <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'impact' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                    <span className={sortBy === 'impact' ? 'text-white' : 'text-white/60'}>Impact:</span>
                                    <span className={sortBy === 'impact' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.civilizational_impact_score}</span>
                                </div>
                                <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'moat' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                    <span className={sortBy === 'moat' ? 'text-white' : 'text-white/60'}>Moat:</span>
                                    <span className={sortBy === 'moat' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.moat_score}</span>
                                </div>
                                <div className={`glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 backdrop-blur-md transition-colors ${sortBy === 'difficulty' ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
                                    <span className={sortBy === 'difficulty' ? 'text-white' : 'text-white/60'}>Difficulty:</span>
                                    <span className={sortBy === 'difficulty' ? 'text-[var(--primary)] font-semibold' : 'text-white font-medium'}>{project.difficulty_score}</span>
                                </div>
                            </div>
                            
                            {/* Dynamic Outcome Badge */}
                            {activeTags.find(t => t.category === 'outcomes') && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-white/90 font-medium">{activeTags.find(t => t.category === 'outcomes')?.tag}:</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        {project.civilizational_impact_ratings?.[activeTags.find(t => t.category === 'outcomes')!.tag]?.ai_scored || 0}
                                    </span>
                                </div>
                            )}

                            {/* Forecast Badges */}
                            {sortBy === 'expectedValuation2030' && project.expectedValuation2030 !== undefined && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-white/90 font-medium">Expected Val ('30):</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        ${project.expectedValuation2030 >= 1_000_000_000 ? (project.expectedValuation2030 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2030 / 1_000_000).toFixed(1) + 'M'}
                                    </span>
                                </div>
                            )}

                            {sortBy === 'expectedValuation2035' && project.expectedValuation2035 !== undefined && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-white/90 font-medium">Expected Val ('35):</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        ${project.expectedValuation2035 >= 1_000_000_000 ? (project.expectedValuation2035 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2035 / 1_000_000).toFixed(1) + 'M'}
                                    </span>
                                </div>
                            )}

                            {sortBy === 'expectedValuation2040' && project.expectedValuation2040 !== undefined && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-white/90 font-medium">Expected Val ('40):</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        ${project.expectedValuation2040 >= 1_000_000_000 ? (project.expectedValuation2040 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2040 / 1_000_000).toFixed(1) + 'M'}
                                    </span>
                                </div>
                            )}

                            {sortBy === 'timeToUnicorn' && project.timeToUnicorn !== undefined && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-white/90 font-medium">Time to $1B:</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        {project.timeToUnicorn === Infinity ? '>2040' : Math.round(project.timeToUnicorn)}
                                    </span>
                                </div>
                            )}
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
                            <div className="flex items-center justify-between mt-auto pt-4 relative isolate">
                                <span className={`flex items-center text-sm font-mono uppercase tracking-widest text-white/40 min-w-0 pr-2 ${project.hoverTextColor || 'group-hover:text-[var(--primary)]'} transition-colors whitespace-nowrap overflow-hidden text-ellipsis`}>
                                    VIEW IDEA <ArrowRight className="w-4 h-4 ml-2 shrink-0 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div onClick={(e) => e.preventDefault()} className="ml-2 transform scale-90 origin-right shrink-0">
                                    <InterestedButton projectSlug={project.slug} iconOnly={true} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default function HomeClient(props: { projects: ProjectData[] }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[var(--background)]"></div>}>
            <HomeClientInner {...props} />
        </Suspense>
    );
}
