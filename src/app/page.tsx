import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import murmuration_hero from "./murmuration/assets/hero_strategy_dashboard.png";
import attune_hero from "./attune/assets/attune_hero_vista.png";
import porchfront_hero from "./porchfront/assets/hero_garage_cafe.png";

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--background)] overflow-hidden flex flex-col justify-center relative">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:px-8 w-full">

                <div className="inline-block mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 glass-panel">
                    AGI Futures
                </div>
                <h1 className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-[1.1] tracking-tight mb-8">
                    Startup Ideas <br />
                    <span className="italic text-white/70">Library</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mb-16">
                    A collection of premium speculative venture theses and product storytelling prototypes.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Murmuration Engine Card */}
                    <Link
                        href="/murmuration"
                        className="group block glass-panel p-8 rounded-3xl border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden"
                    >
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image src={murmuration_hero} alt="Murmuration Hero" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <div className="relative z-10 flex flex-col h-full">
                            <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-[var(--primary)] transition-colors">Murmuration Engine</h2>
                            <p className="text-white/70 font-light mb-6 line-clamp-none">
                                An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments and compound learnings.
                            </p>
                            <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-[var(--primary)] transition-colors mt-auto pt-4">
                                View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* Attune Card */}
                    <Link
                        href="/attune"
                        className="group block glass-panel p-8 rounded-3xl border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden"
                    >
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image src={attune_hero} alt="Attune Hero" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <div className="relative z-10 flex flex-col h-full">
                            <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-[var(--primary)] transition-colors">Attune</h2>
                            <p className="text-white/70 font-light mb-6 line-clamp-none">
                                A neural-syncing communication layer for high-leverage teams.
                            </p>
                            <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-[var(--primary)] transition-colors mt-auto pt-4">
                                View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                    {/* Porchfront Card */}
                    <Link
                        href="/porchfront"
                        className="group block glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden"
                    >
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image src={porchfront_hero} alt="Porchfront Hero" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <div className="relative z-10 flex flex-col h-full">
                            <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-emerald-400 transition-colors">Porchfront</h2>
                            <p className="text-white/70 font-light mb-6 line-clamp-none">
                                Turn sidewalk-facing garages into community hubs and micro-businesses—with a live neighborhood map and simple tools that reward real-world connection.
                            </p>
                            <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-emerald-400 transition-colors mt-auto pt-4">
                                View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
