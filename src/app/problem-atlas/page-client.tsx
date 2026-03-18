"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useQueryState, parseAsString, parseAsArrayOf } from "nuqs";
import { ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react";
import { ProblemData } from "@/data/problem-atlas-data";
import { ProblemCard } from "./components/ProblemCard";
import { useInterest } from "@/components/InterestProvider";

function ProblemAtlasInner({ problems }: { problems: ProblemData[] }) {
    const [sortBy, setSortBy] = useQueryState("sort", parseAsString.withDefault("priority").withOptions({ shallow: false, history: 'push' }));
    const [sortDirection, setSortDirection] = useQueryState("dir", parseAsString.withDefault("desc").withOptions({ shallow: false, history: 'push' }));
    const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault("").withOptions({ shallow: false, history: 'push' }));
    const [showSavedOnly, setShowSavedOnly] = useQueryState("saved", parseAsString.withDefault("false").withOptions({ shallow: false, history: 'push' }));
    
    // Using nuqs for active tags like the home page
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

    // Filter Categories
    const filterCategories = [
        { id: 'sector', label: 'Sector' },
        { id: 'outcome', label: 'Outcome' }
    ] as const;

    // Extract unique tags
    const uniqueTags = useMemo(() => {
        const tags: Record<string, string[]> = { sector: [], outcome: [] };
        const sectorSet = new Set<string>();
        const outcomeSet = new Set<string>();

        problems.forEach(p => {
            p.sector_tags.forEach(t => sectorSet.add(t));
            p.outcome_tags.forEach(t => outcomeSet.add(t));
        });

        tags.sector = Array.from(sectorSet).sort();
        tags.outcome = Array.from(outcomeSet).sort();
        return tags;
    }, [problems]);

    const handleAddFilter = (category: string, tag: string) => {
        if (tag && tag !== 'default') {
            if (!activeTags.some(t => t.category === category && t.tag === tag)) {
                setActiveTags([...activeTags, { category, tag }]);
            }
        }
        setSelectedCategory(null);
    };

    const removeFilter = (indexToRemove: number) => {
        setActiveTags(activeTags.filter((_, idx) => idx !== indexToRemove));
    };

    const sortedProblems = [...problems]
        .filter((problem) => {
            // Must contain ALL active tags
            for (const activeTag of activeTags) {
                if (activeTag.category === 'sector') {
                    if (!problem.sector_tags.includes(activeTag.tag)) return false;
                } else if (activeTag.category === 'outcome') {
                    if (!problem.outcome_tags.includes(activeTag.tag)) return false;
                }
            }

            // Search Query
            if (searchQuery.trim() !== "") {
                const query = searchQuery.toLowerCase();
                const titleMatch = problem.title.toLowerCase().includes(query);
                const descMatch = problem.short_descriptor.toLowerCase().includes(query);
                const textMatch = problem.preview_text.toLowerCase().includes(query);
                const tagsMatch = [...problem.sector_tags, ...problem.outcome_tags].some(t => t.toLowerCase().includes(query));

                if (!titleMatch && !descMatch && !textMatch && !tagsMatch) return false;
            }

            if (showSavedOnly === "true") {
                if (!savedSlugs.has(problem.slug)) return false;
            }

            return true;
        })
        .sort((a, b) => {
            let diff = 0;
            switch(sortBy) {
                case 'priority':
                    diff = b.problem_priority - a.problem_priority;
                    break;
                case 'importance':
                    diff = b.importance - a.importance;
                    break;
                case 'neglectedness':
                    diff = b.neglectedness - a.neglectedness;
                    break;
                case 'tractability':
                    diff = b.tractability - a.tractability;
                    break;
                case 'rank':
                    // We flip Because rank 1 is "best", so we want ascending by default if desc is selected
                    diff = a.rank - b.rank; 
                    break;
                default:
                    diff = b.problem_priority - a.problem_priority;
            }
            return sortDirection === "desc" ? diff : -diff;
        });

    return (
        <div className="min-h-screen bg-[var(--background)] relative">
            {/* Flawless Pitch Black Header Blend for Problem Atlas */}
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-black via-black via-50% to-transparent pointer-events-none z-0" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 lg:px-8 w-full">
                <Link href="/" className="inline-block mb-10 hover:opacity-80 transition-opacity">
                    <img src="/logo.png" alt="AGI Futures" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
                </Link>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[var(--foreground)] leading-[1.2] tracking-tight mb-6">
                Problem Atlas
            </h1>
            
            <div className="flex flex-col gap-4 mb-16 border-b border-white/10 pb-10">
                <p className="text-xl sm:text-2xl text-white/80 max-w-3xl leading-snug font-medium mb-6">
                    A ranked map of high-priority civilizational bottlenecks for founders, researchers, and builders.
                </p>

                <div className="flex flex-col gap-4">
                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 max-w-2xl">
                            <input
                                type="text"
                                placeholder="Search problems, text, sectors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors w-full"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-white/50 hidden lg:flex items-center gap-2 whitespace-nowrap">
                                <ArrowDownUp className="w-4 h-4" />
                                SORT BY
                            </span>
                            <div className="flex items-center gap-2">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8 min-w-[140px]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.75rem center',
                                        backgroundSize: '1em'
                                    }}
                                >
                                    <option value="priority">Problem Priority</option>
                                    <option value="importance">Importance</option>
                                    <option value="neglectedness">Neglectedness</option>
                                    <option value="tractability">Tractability</option>
                                    <option value="rank">Atlas Rank</option>
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

                    {/* Filters Row */}
                    <div className="flex flex-col gap-3 min-h-[44px]">
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
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-xs sm:text-sm font-mono text-white/40 uppercase tracking-widest mr-2">Add Filter:</span>
                            <select
                                value={selectedCategory || "default"}
                                onChange={(e) => setSelectedCategory(e.target.value === "default" ? null : e.target.value)}
                                className="bg-black/50 border border-white/20 text-white/80 text-sm sm:text-base rounded-full px-5 py-2.5 outline-none hover:border-white/40 focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-10"
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

                            {selectedCategory && (
                                <div className="flex items-center gap-3 transition-all duration-300">
                                    <select
                                        value="default"
                                        onChange={(e) => handleAddFilter(selectedCategory, e.target.value)}
                                        className="bg-black/50 border border-[var(--primary)]/50 text-white text-sm sm:text-base rounded-full px-5 py-2.5 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-10"
                                    >
                                        <option value="default">Select Tag... ({(uniqueTags[selectedCategory as keyof typeof uniqueTags] || []).length})</option>
                                        {(uniqueTags[selectedCategory as keyof typeof uniqueTags] || []).map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="text-white/40 text-sm font-mono mt-2">
                        Showing {sortedProblems.length} {sortedProblems.length === 1 ? 'problem' : 'problems'}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {sortedProblems.map((problem) => (
                    <ProblemCard key={problem.slug} problem={problem} activeSort={sortBy} />
                ))}
                
                {sortedProblems.length === 0 && (
                    <div className="text-center py-20 text-white/50 border border-white/10 rounded-2xl border-dashed">
                        No problems found matching your filters.
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default function ProblemAtlasClient(props: { problems: ProblemData[] }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <ProblemAtlasInner {...props} />
        </Suspense>
    );
}
