"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react";

export type ProjectData = {
    slug: string;
    title: string;
    description: string;
    image: StaticImageData;
    href: string;
    themeColor: string; // Tailwind class name or custom logic
    scoreTitle: string;
    created_at: string;
    moat_score: number;
    difficulty_score: number;
    civilizational_impact_score: number;
};

export default function HomeClient({ projects }: { projects: ProjectData[] }) {
    const [sortBy, setSortBy] = useState<"recent" | "impact" | "moat" | "difficulty">("recent");
    const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");

    const sortedProjects = [...projects].sort((a, b) => {
        let diff = 0;
        if (sortBy === "impact") {
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
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-6">
                <p className="text-xl sm:text-2xl text-white/80 max-w-xl leading-relaxed font-light">
                    A collection of premium speculative venture theses and product storytelling prototypes.
                </p>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-white/50 flex items-center gap-2">
                        <ArrowDownUp className="w-4 h-4" />
                        SORT BY
                    </span>
                    <div className="flex items-center gap-2">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[var(--primary)] transition-colors cursor-pointer appearance-none pr-8 relative"
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
                        </select>
                        <button 
                            onClick={() => setSortDirection(d => d === "desc" ? "asc" : "desc")}
                            className="bg-black/50 border border-white/20 text-white p-2 rounded-lg hover:border-[var(--primary)] transition-colors flex items-center justify-center"
                            aria-label={`Sort ${sortDirection === 'desc' ? 'Ascending' : 'Descending'}`}
                        >
                            {sortDirection === "desc" ? <ArrowDown className="w-5 h-5" /> : <ArrowUp className="w-5 h-5" />}
                        </button>
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
                            <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-currentColor transition-colors">{project.title}</h2>
                            <div className="relative mb-6 flex-1">
                                <p className="text-white/80 font-medium absolute top-0 left-0 w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                                    {project.scoreTitle}
                                </p>
                                <p className="text-white/70 font-light transition-opacity duration-500 opacity-0 group-hover:opacity-100 line-clamp-none">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-currentColor transition-colors mt-auto pt-4 relative isolate">
                                View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
