"use client";

import { Forecast } from "@/types/forecasting";
import { useState, useMemo } from "react";
import { useQueryState, parseAsString, parseAsArrayOf } from "nuqs";
import { ArrowRight, ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react";
import ForecastCard from "../components/ForecastCard";

interface ExtendedForecast extends Forecast {
    forecast_answers?: [{ count: number }];
}

interface Props {
    initialForecasts: ExtendedForecast[];
    userId?: string;
}

const filterCategories = [
    { id: 'sector', label: 'Sector' },
    { id: 'enabling_technology', label: 'Technology' },
] as const;

export default function LiveForecastsClient({ initialForecasts, userId }: Props) {
    const [sortBy, setSortBy] = useQueryState("sort", parseAsString.withDefault("important").withOptions({ shallow: false, history: 'push' }));
    const [sortDirection, setSortDirection] = useQueryState("dir", parseAsString.withDefault("desc").withOptions({ shallow: false, history: 'push' }));
    
    const [activeTagsRaw, setActiveTagsRaw] = useQueryState("filters", parseAsArrayOf(parseAsString).withDefault([]).withOptions({ shallow: false, history: 'push' }));
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [displayLimit, setDisplayLimit] = useState(10);

    const activeTags = useMemo(() => {
        return activeTagsRaw.map(str => {
            const [category, ...rest] = str.split(':');
            return { category, tag: rest.join(':') };
        });
    }, [activeTagsRaw]);

    const setActiveTags = (newTags: Array<{ category: string, tag: string }>) => {
        setActiveTagsRaw(newTags.map(t => `${t.category}:${t.tag}`));
    };

    // Extract all unique tags for each category
    const uniqueTags = useMemo(() => {
        const tags: Record<string, string[]> = {};
        filterCategories.forEach(cat => {
            const allCatTags = initialForecasts.flatMap(p => {
                const val = p[cat.id as keyof Forecast];
                if (Array.isArray(val)) return val;
                return [];
            });
            tags[cat.id] = Array.from(new Set(allCatTags)).filter(Boolean).sort();
        });
        return tags;
    }, [initialForecasts]);

    const handleAddFilter = (category: string, tag: string) => {
        if (activeTags.length < 3 && tag && tag !== 'all') {
            if (!activeTags.some(t => t.category === category && t.tag === tag)) {
                setActiveTags([...activeTags, { category, tag }]);
            }
        }
        setSelectedCategory(null);
    };

    const removeFilter = (indexToRemove: number) => {
        setActiveTags(activeTags.filter((_, idx) => idx !== indexToRemove));
    };

    const getImportanceScore = (f: ExtendedForecast) => {
        const aiScore = f.ai_importance_score || 0;
        let userAvg = 0;
        
        if (f.user_importance_ratings && Object.keys(f.user_importance_ratings).length > 0) {
            const values = Object.values(f.user_importance_ratings);
            userAvg = values.reduce((a,b) => a+b, 0) / values.length;
            return (aiScore * 0.5) + (userAvg * 0.5);
        }
        return aiScore;
    };

    const sortedForecasts = [...initialForecasts]
        .filter((f) => {
            // Must contain ALL active tags
            for (const activeTag of activeTags) {
                const projectTags = (f[activeTag.category as keyof Forecast] as string[]) || [];
                if (!projectTags.includes(activeTag.tag)) {
                    return false;
                }
            }
            return true;
        })
        .sort((a, b) => {
            let diff = 0;
            if (sortBy === "important") {
                diff = getImportanceScore(b) - getImportanceScore(a);
            } else if (sortBy === "popular") {
                const countA = a.forecast_answers?.[0]?.count || 0;
                const countB = b.forecast_answers?.[0]?.count || 0;
                diff = countB - countA;
            } else {
                diff = new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }
            return sortDirection === "desc" ? diff : -diff;
        });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Filter and Sort Toolbar */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Active Filters & Drill-down */}
                    <div className="flex flex-col gap-3 flex-1">
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest mr-2">Filters:</span>
                                {activeTags.map((tagObj, idx) => {
                                    const catLabel = filterCategories.find(c => c.id === tagObj.category)?.label || tagObj.category;
                                    return (
                                        <div key={idx} className="flex items-center gap-2 bg-[#3bf4a4]/10 border border-[#3bf4a4]/30 text-[#3bf4a4] text-xs font-medium px-3 py-1 rounded-full">
                                            <span>{catLabel}: <span className="text-white font-semibold">{tagObj.tag}</span></span>
                                            <button
                                                onClick={() => removeFilter(idx)}
                                                className="hover:bg-[#3bf4a4]/20 p-0.5 rounded-full transition-colors ml-1"
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {activeTags.length < 3 && (
                            <div className="flex flex-wrap items-center gap-3">
                                <select
                                    value={selectedCategory || "default"}
                                    onChange={(e) => setSelectedCategory(e.target.value === "default" ? null : e.target.value)}
                                    className="bg-black/50 border border-white/20 text-white/80 text-sm rounded-full px-4 py-2 outline-none hover:border-white/40 focus:border-[#3bf4a4] transition-colors cursor-pointer appearance-none pr-8"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.5rem center',
                                        backgroundSize: '1em'
                                    }}
                                >
                                    <option value="default">+ Add Filter</option>
                                    {filterCategories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>

                                {selectedCategory && (
                                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                                        <ArrowRight className="w-4 h-4 text-white/30" />
                                        <select
                                            value="default"
                                            onChange={(e) => handleAddFilter(selectedCategory, e.target.value)}
                                            className="bg-black/50 border border-[#3bf4a4]/50 text-white text-sm rounded-full px-4 py-2 outline-none focus:border-[#3bf4a4] transition-colors cursor-pointer appearance-none pr-8 shadow-[0_0_15px_rgba(59,244,164,0.15)]"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233bf4a4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.5rem center',
                                                backgroundSize: '1em'
                                            }}
                                        >
                                            <option value="default">Select...</option>
                                            {(uniqueTags[selectedCategory] || []).map((opt: string) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sorting */}
                    <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-white/50 hidden lg:flex items-center gap-1.5 whitespace-nowrap">
                            <ArrowDownUp className="w-3.5 h-3.5" />
                        </span>
                        <div className="flex flex-nowrap items-center gap-1.5">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-3 py-1.5 outline-none focus:border-[#3bf4a4] transition-colors cursor-pointer appearance-none pr-7 min-w-[140px]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.5rem center',
                                    backgroundSize: '1em'
                                }}
                            >
                                <option value="important">Most Important</option>
                                <option value="popular">Most Popular</option>
                                <option value="recent">Recently Added</option>
                            </select>
                            <button
                                onClick={() => setSortDirection(d => d === "desc" ? "asc" : "desc")}
                                className="bg-black/50 border border-white/20 text-white p-1.5 rounded-lg hover:border-[#3bf4a4] transition-colors flex items-center justify-center shrink-0"
                            >
                                {sortDirection === "desc" ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {(!sortedForecasts || sortedForecasts.length === 0) ? (
                <div className="p-8 border border-white/10 border-dashed rounded-xl flex items-center justify-center text-white/40 italic">
                    No live forecasts matching your filters.
                </div>
            ) : null}
            
            {/* Sub-Feed of Forecast Cards */}
            <div className="flex flex-col space-y-px">
                {sortedForecasts.slice(0, displayLimit).map((f, i) => (
                    <ForecastCard 
                        key={f.id} 
                        forecast={f} 
                        answerCount={f.forecast_answers?.[0]?.count || 0}
                        userId={userId}
                        isGroupedWithPrev={i !== 0}
                        isGroupedWithNext={i !== sortedForecasts.length - 1}
                    />
                ))}
            </div>

            {sortedForecasts.length > displayLimit && (
                <div className="pt-8 pb-12 flex justify-center w-full">
                    <button 
                        onClick={() => setDisplayLimit(d => d + 10)}
                        className="px-6 py-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-white transition tracking-widest uppercase font-mono text-sm w-full max-w-md shadow-lg"
                    >
                        Load More Forecasts ↓
                    </button>
                </div>
            )}
        </div>
    );
}
