import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

                <div className="grid gap-4 sm:grid-cols-2">
                    {/* Murmuration Engine Card */}
                    <Link
                        href="/murmuration"
                        className="group block glass-panel p-8 rounded-3xl border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-[var(--primary)] transition-colors">Murmuration Engine</h2>
                        <p className="text-white/70 font-light mb-6 line-clamp-2">
                            An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments and compound learnings.
                        </p>
                        <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-[var(--primary)] transition-colors">
                            View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Placeholders for future ideas */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.01] opacity-50 relative overflow-hidden flex flex-col justify-center">
                        <h2 className="text-2xl font-serif text-white/50 mb-3">Attune (Coming Soon)</h2>
                        <p className="text-white/40 font-light line-clamp-2 mb-6">
                            A neural-syncing communication layer for high-leverage teams...
                        </p>
                        <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/30">
                            Locked
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
