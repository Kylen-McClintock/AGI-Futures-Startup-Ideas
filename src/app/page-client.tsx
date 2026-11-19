"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useQueryState, parseAsString, parseAsArrayOf } from "nuqs";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, ArrowDownUp, ArrowUp, ArrowDown, Sparkles, SlidersHorizontal, Layers } from "lucide-react";

import { Suspense } from "react";
import { useInterest } from "@/components/InterestProvider";
import { InterestedButton } from "@/components/InterestedButton";
import { trackEvent } from "@/lib/analytics";

const INTERACTIVE_SIMULATOR_SLUGS = new Set([
    "homequote",
    "main-street-legacy",
    "skyhold",
    "signal-house",
    "murmuration",
    "attune",
    "porchfront",
    "AIFounderLab"
]);

const REAL_ASSET_SLUGS = new Set([
    "skyhold",
    "porchfront",
    "signal-house",
    "hearth",
    "waypoint",
    "biowalls",
    "helioterra",
    "bioark",
    "wild-return",
    "housegraph",
    "main-street-legacy"
]);

const QUICK_PRESETS = [
    { id: "all", label: "All 33 Theses" },
    { id: "simulators", label: "Interactive Simulators" },
    { id: "build_now", label: "Build Now" },
    { id: "high_moat", label: "High Moat (80+)" },
    { id: "real_assets", label: "Physical & Real Assets" }
] as const;

const MATCH_ROLE_SHORTCUTS = [
    { id: "engineer", label: "Engineer / ML" },
    { id: "operator", label: "Operator / GM" },
    { id: "bio", label: "Bio & Science" },
    { id: "policy", label: "Policy & Gov" }
] as const;

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
    const [preset, setPreset] = useQueryState("preset", parseAsString.withDefault("all").withOptions({ shallow: false, history: 'push' }));
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

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
            if (preset === "simulators" && !INTERACTIVE_SIMULATOR_SLUGS.has(project.slug)) {
                return false;
            }
            if (preset === "build_now") {
                const readiness = project.tags?.readiness || [];
                if (!readiness.includes("Build Now")) return false;
            }
            if (preset === "high_moat" && project.moat_score < 80) {
                return false;
            }
            if (preset === "real_assets" && !REAL_ASSET_SLUGS.has(project.slug)) {
                return false;
            }

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
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pt-4 relative z-20">
                <img src="/logo.png" alt="AGI Futures" className="h-16 sm:h-20 md:h-28 w-auto object-contain" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link href="/singularity-tracker" className="inline-block text-xs sm:text-sm font-mono tracking-widest uppercase text-[#21de9a] border border-[#21de9a]/30 bg-[#21de9a]/10 px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#21de9a]/20 transition-all font-medium whitespace-nowrap shadow-[0_0_15px_rgba(33,222,154,0.15)]">
                        SINGULARITY TRACKER &rarr;
                    </Link>
                    <Link href="/problem-atlas" className="inline-block text-xs sm:text-sm font-mono tracking-widest uppercase text-white/40 border border-white/10 px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-white/5 hover:text-white hover:border-white/30 transition-all font-medium whitespace-nowrap">
                        VIEW PROBLEM ATLAS &rarr;
                    </Link>
                    <Link href="/match" className="inline-block text-xs sm:text-sm font-mono tracking-widest uppercase text-white/40 border border-white/10 px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-white/5 hover:text-white hover:border-white/30 transition-all font-medium whitespace-nowrap">
                        FIND YOUR MATCH &rarr;
                    </Link>
                </div>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[var(--foreground)] leading-[1.2] tracking-tight mb-10">
                <span className="bg-[var(--primary)]/15 text-[var(--primary)] px-4 py-1.5 rounded-2xl inline-block mb-3 border border-[var(--primary)]/30 shadow-[0_0_30px_rgba(59,244,164,0.15)] backdrop-blur-sm">
                    <span className="italic font-light">AI-native</span>&nbsp;
                    <span className="font-medium">startup ideas</span>
                </span> <br />
                for an abundant AGI future
            </h1>

            <div className="flex flex-col gap-5 mb-14 border-b border-white/10 pb-10">
                <p className="text-2xl sm:text-3xl text-white/95 max-w-3xl leading-snug font-medium">
                    We open-source the high-conviction ideas we want to see built, <span className="text-white/50 italic font-serif tracking-wide block sm:inline mt-2 sm:mt-0">from founders already heads down scaling their own ventures.</span>
                </p>

                {/* 60-Second Founder Fit Launchpad Banner */}
                <div className="glass-panel rounded-2xl border border-[#21de9a]/30 bg-[#08120e]/85 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#21de9a] mb-1.5">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            60-Second Founder Fit Matcher
                        </div>
                        <p className="text-base sm:text-lg font-serif text-white mb-1">
                            Not sure where to start across {projects.length} open-sourced theses?
                        </p>
                        <p className="text-xs sm:text-sm text-white/65 font-light">
                            Tap what you bring to pre-fill your founder profile and rank your highest-conviction startup matches + 30-day plan:
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {MATCH_ROLE_SHORTCUTS.map((role) => (
                            <Link
                                key={role.id}
                                href={`/match?role=${role.id}`}
                                onClick={() => trackEvent("match_launchpad_clicked", { role: role.id })}
                                className="text-xs font-mono px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-[#21de9a]/15 hover:border-[#21de9a]/50 text-white/85 hover:text-white transition-all"
                            >
                                {role.label}
                            </Link>
                        ))}
                        <Link
                            href="/match"
                            onClick={() => trackEvent("match_launchpad_clicked", { role: "all" })}
                            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full bg-[#21de9a] text-stone-950 font-semibold hover:opacity-90 transition-opacity"
                        >
                            Find My Match <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                    </div>
                </div>

                {/* 1-Tap Quick-Filter Presets */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                    <div className="flex flex-wrap items-center gap-2">
                        {QUICK_PRESETS.map((item) => {
                            const isActive = preset === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => {
                                        setPreset(item.id);
                                        trackEvent("homepage_preset_clicked", { preset: item.id });
                                    }}
                                    className={`text-xs font-mono px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                                        isActive
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)]/60 text-white font-semibold shadow-[0_0_15px_rgba(33,222,154,0.15)]"
                                            : "bg-black/45 border-white/15 text-white/65 hover:border-white/35 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowAdvancedFilters((v) => !v)}
                        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-full border transition-colors cursor-pointer ${
                            showAdvancedFilters || activeTags.length > 0
                                ? "border-[var(--primary)]/50 text-[var(--primary)] bg-[var(--primary)]/10"
                                : "border-white/15 text-white/60 hover:text-white bg-black/40"
                        }`}
                    >
                        <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
                        <span>More Filters{activeTags.length > 0 ? ` (${activeTags.length})` : ""}</span>
                    </button>
                </div>

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
                                className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[var(--primary)] transition-colors w-full"
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
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8 min-w-[140px]"
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
                                    className="bg-black/50 border border-white/20 text-white p-2.5 rounded-lg hover:border-[var(--primary)] transition-colors flex items-center justify-center shrink-0"
                                    aria-label={`Sort ${sortDirection === 'desc' ? 'Ascending' : 'Descending'}`}
                                >
                                    {sortDirection === "desc" ? <ArrowDown className="w-5 h-5" /> : <ArrowUp className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={() => setShowSavedOnly(showSavedOnly === "true" ? "false" : "true")}
                                    className={`p-2.5 rounded-lg border transition-colors flex items-center justify-center shrink-0 ${showSavedOnly === "true" ? 'bg-[var(--primary)]/20 border-[var(--primary)]/50 text-[var(--primary)]' : 'bg-black/50 border-white/20 text-white/50 hover:text-white hover:border-white/40'}`}
                                    aria-label="Toggle saved only"
                                    title="Show Interested Only"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={showSavedOnly === "true" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Row: Active Filters & Drill-down */}
                    {(showAdvancedFilters || activeTags.length > 0) && (
                        <div className="flex flex-col gap-3 pt-1">
                            {/* Active Filter Badges */}
                            {activeTags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs sm:text-sm font-mono text-white/40 uppercase tracking-widest mr-2">Active Filters:</span>
                                    {activeTags.map((tagObj, idx) => {
                                        const catLabel = filterCategories.find(c => c.id === tagObj.category)?.label || tagObj.category;
                                        return (
                                            <div key={`${tagObj.category}-${idx}`} className="flex items-center gap-2 bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full">
                                                <span>{catLabel}: <span className="text-white font-semibold">{tagObj.tag}</span></span>
                                                <button
                                                    onClick={() => removeFilter(idx)}
                                                    className="hover:bg-[var(--primary)]/20 p-1 rounded-full transition-colors ml-1"
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
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest mr-1">Filter by Tag:</span>

                                    {/* 1. Category Selector */}
                                    <select
                                        value={selectedCategory || "default"}
                                        onChange={(e) => setSelectedCategory(e.target.value === "default" ? null : e.target.value)}
                                        className="bg-black/50 border border-white/20 text-white/80 text-sm rounded-full px-4 py-2 outline-none hover:border-white/40 focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-9"
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
                                        <div className="flex items-center gap-2 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4 text-white/30" />
                                            <select
                                                value="default"
                                                onChange={(e) => handleAddFilter(selectedCategory, e.target.value)}
                                                className="bg-black/50 border border-[var(--primary)]/50 text-white text-sm rounded-full px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-9"
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
                    )}
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProjects.map((project, index) => (
                    <article
                        key={project.slug}
                        className={`group relative flex flex-col glass-panel rounded-3xl border border-white/10 ${project.themeColor} transition-all duration-300 hover:bg-white/[0.04] hover:border-white/25 overflow-hidden focus-within:ring-2 focus-within:ring-[var(--primary)]`}
                    >
                        {/* Top Media: Full-Brightness 16:9 Hero Window */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40 shrink-0">
                            <Image
                                src={project.image}
                                alt={`${project.title} Hero`}
                                fill
                                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                                quality={90}
                                priority={index < 2}
                                fetchPriority={index < 2 ? "high" : undefined}
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

                            {/* Frosted Score Badges (compact, high-contrast over sunlit imagery) */}
                            <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1.5 max-w-[calc(100%-1.5rem)] pointer-events-none">
                                <div className="flex flex-wrap justify-end gap-1 sm:gap-1.5 items-center">
                                    <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono border flex items-center gap-1 backdrop-blur-md transition-colors ${sortBy === 'impact' ? 'border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.15)]' : 'border-white/15 bg-black/70'}`}>
                                        <span className={sortBy === 'impact' ? 'text-white' : 'text-white/75'}>Impact:</span>
                                        <span className={sortBy === 'impact' ? 'text-[var(--primary)] font-semibold' : 'text-white font-semibold'}>{project.civilizational_impact_score}</span>
                                    </div>
                                    <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono border flex items-center gap-1 backdrop-blur-md transition-colors ${sortBy === 'moat' ? 'border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.15)]' : 'border-white/15 bg-black/70'}`}>
                                        <span className={sortBy === 'moat' ? 'text-white' : 'text-white/75'}>Moat:</span>
                                        <span className={sortBy === 'moat' ? 'text-[var(--primary)] font-semibold' : 'text-white font-semibold'}>{project.moat_score}</span>
                                    </div>
                                    <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono border flex items-center gap-1 backdrop-blur-md transition-colors ${sortBy === 'difficulty' ? 'border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.15)]' : 'border-white/15 bg-black/70'}`}>
                                        <span className={sortBy === 'difficulty' ? 'text-white' : 'text-white/75'}>Diff:</span>
                                        <span className={sortBy === 'difficulty' ? 'text-[var(--primary)] font-semibold' : 'text-white font-semibold'}>{project.difficulty_score}</span>
                                    </div>
                                </div>

                                {/* Dynamic Outcome Badge */}
                                {activeTags.find(t => t.category === 'outcomes') && (
                                    <div className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="text-white/90 font-medium">{activeTags.find(t => t.category === 'outcomes')?.tag}:</span>
                                        <span className="text-[var(--primary)] font-bold bg-black/50 px-1.5 py-0.5 rounded-full leading-none">
                                            {project.civilizational_impact_ratings?.[activeTags.find(t => t.category === 'outcomes')!.tag]?.ai_scored || 0}
                                        </span>
                                    </div>
                                )}

                                {/* Forecast Badges */}
                                {sortBy === 'expectedValuation2030' && project.expectedValuation2030 !== undefined && (
                                    <div className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="text-white/90 font-medium">Expected Val ('30):</span>
                                        <span className="text-[var(--primary)] font-bold bg-black/50 px-1.5 py-0.5 rounded-full leading-none">
                                            ${project.expectedValuation2030 >= 1_000_000_000 ? (project.expectedValuation2030 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2030 / 1_000_000).toFixed(1) + 'M'}
                                        </span>
                                    </div>
                                )}

                                {sortBy === 'expectedValuation2035' && project.expectedValuation2035 !== undefined && (
                                    <div className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="text-white/90 font-medium">Expected Val ('35):</span>
                                        <span className="text-[var(--primary)] font-bold bg-black/50 px-1.5 py-0.5 rounded-full leading-none">
                                            ${project.expectedValuation2035 >= 1_000_000_000 ? (project.expectedValuation2035 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2035 / 1_000_000).toFixed(1) + 'M'}
                                        </span>
                                    </div>
                                )}

                                {sortBy === 'expectedValuation2040' && project.expectedValuation2040 !== undefined && (
                                    <div className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="text-white/90 font-medium">Expected Val ('40):</span>
                                        <span className="text-[var(--primary)] font-bold bg-black/50 px-1.5 py-0.5 rounded-full leading-none">
                                            ${project.expectedValuation2040 >= 1_000_000_000 ? (project.expectedValuation2040 / 1_000_000_000).toFixed(1) + 'B' : (project.expectedValuation2040 / 1_000_000).toFixed(1) + 'M'}
                                        </span>
                                    </div>
                                )}

                                {sortBy === 'timeToUnicorn' && project.timeToUnicorn !== undefined && (
                                    <div className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="text-white/90 font-medium">Time to $1B:</span>
                                        <span className="text-[var(--primary)] font-bold bg-black/50 px-1.5 py-0.5 rounded-full leading-none">
                                            {project.timeToUnicorn === Infinity ? '>2040' : Math.round(project.timeToUnicorn)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card Body: Clean Editorial Surface */}
                        <div className="flex flex-col flex-1 p-6 bg-[#070b0f]/90">
                            {INTERACTIVE_SIMULATOR_SLUGS.has(project.slug) && (
                                <div className="mb-2.5">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#21de9a]/15 border border-[#21de9a]/40 text-[#21de9a] leading-snug">
                                        <Layers className="w-3 h-3 shrink-0" />
                                        Interactive Simulator
                                    </span>
                                </div>
                            )}
                            <h2 className={`text-2xl font-serif text-white mb-1.5 ${project.hoverTextColor || 'group-hover:text-[var(--primary)]'} transition-colors`}>
                                <Link href={project.href} className="after:content-[''] after:absolute after:inset-0 focus-visible:outline-none">
                                    {project.title}
                                </Link>
                            </h2>
                            <div className="mb-5 flex-1 flex flex-col gap-2">
                                <p className="text-sm text-white/90 font-medium leading-snug">
                                    {project.scoreTitle}
                                </p>
                                <p className="text-sm text-white/65 font-light line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <footer className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                                <span className={`inline-flex items-center text-xs font-mono uppercase tracking-widest text-white/60 min-w-0 pr-2 ${project.hoverTextColor || 'group-hover:text-[var(--primary)]'} transition-colors`}>
                                    Read Blueprint <ArrowRight className="w-4 h-4 ml-2 shrink-0 group-hover:translate-x-1.5 transition-transform" />
                                </span>
                                <div className="relative z-10 ml-2 transform scale-90 origin-right shrink-0">
                                    <InterestedButton projectSlug={project.slug} iconOnly={true} />
                                </div>
                            </footer>
                        </div>
                    </article>
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
