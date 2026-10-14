import Link from "next/link";
import type { Metadata } from "next";
import { SeesawVisual } from "./components/SeesawVisual";
import { Instagram, Facebook } from "lucide-react";

function ThreadsIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 192 192" fill="currentColor" className={className}>
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4184 44.7441 97.2749 44.7441 97.1314 44.745C73.3409 44.745 56.4024 61.9427 56.4024 86.8529C56.4024 111.763 73.3409 128.961 97.1314 128.961C114.735 128.961 127.348 119.827 132.88 102.825C133.565 100.718 132.41 98.4552 130.303 97.7705C128.196 97.0858 125.933 98.2407 125.249 100.348C120.732 114.218 110.158 121.281 97.1314 121.281C77.4042 121.281 64.0824 107.247 64.0824 86.8529C64.0824 66.4589 77.4042 52.4249 97.1314 52.4249C97.2343 52.4242 97.3371 52.4242 97.44 52.4249C117.481 52.5529 129.832 65.5034 131.258 88.2163C122.253 85.3406 111.455 84.8697 99.8804 86.8045C78.4751 90.3813 65.7324 102.946 65.7324 118.069C65.7324 132.186 76.8124 142.065 92.4042 142.065C108.625 142.065 122.062 133.722 127.067 120.457C133.456 128.877 142.274 133.87 153.228 133.87C168.04 133.87 179.351 123.085 179.351 106.883C179.351 86.1102 163.674 72.8227 141.537 88.9883ZM92.4042 134.385C81.3324 134.385 73.4124 127.525 73.4124 118.069C73.4124 107.039 82.5273 97.8087 98.6184 95.1202C107.822 93.5824 116.539 93.8967 124.086 95.9616C120.354 122.38 107.785 134.385 92.4042 134.385Z" />
        </svg>
    );
}

export const metadata: Metadata = {
    alternates: { canonical: "/about" },
    openGraph: { title: "AGI Futures | About", description: "Doing what I can to build a maximally beneficial AGI Future.", url: "/about" },
    title: "AGI Futures | About",
    description: "Doing what I can to build a maximally beneficial AGI Future.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#07090A] text-white selection:bg-[#3bf4a4]/30 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3bf4a4]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-6 py-32 space-y-16 relative z-10">
                
                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-white glow-text">
                        About <span className="italic text-[#3bf4a4]">AGI Futures</span>
                    </h1>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:text-white/80 prose-strong:text-white prose-strong:font-medium">
                    
                    <p className="lead text-2xl text-white font-serif italic mb-12 leading-relaxed border-l-4 border-[#3bf4a4] pl-6 py-2 bg-white/[0.02] rounded-r-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                        “Whether it is to be Utopia or Oblivion will be a touch-and-go relay race right up to the final moment.”<br />
                        <span className="text-lg text-white/50 not-italic mt-2 block">- Buckminster Fuller</span>
                    </p>

                    <div className="space-y-8">
                        <div>
                            <div className="space-y-4">
                                <p className="text-xl leading-relaxed">
                                    Ours is a time of unusual agency. The next decade of builders will help decide whether the AGI future bends toward abundance or collapse.
                                </p>
                            </div>
                            
                            <SeesawVisual />

                            <p className="text-xl leading-relaxed mt-12">
                                <strong>AGI Futures</strong> is a curated library of high-conviction startup blueprints drawn from hundreds of conversations with founders, operators, and industry insiders working at the frontier of technology, science, and culture.
                            </p>
                            <p className="text-xl leading-relaxed mt-6">
                                This is not a generic startup ideas database. It is a vetted build list for people who see startups, decentralized protocols, and new institutions as core to an abundant future.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-16">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-4">About the Lead Curator</h3>
                            <div className="font-medium m-0 text-xl space-y-1">
                                <a 
                                    href="https://www.linkedin.com/in/kylenmcclintock/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#3bf4a4] transition-colors inline-block"
                                >
                                    Kylen McClintock
                                </a>
                                <p className="text-white/80 text-lg m-0">
                                    founder, angel investor, ex-venture and AI product lead
                                </p>
                            </div>
                            <p className="text-[#3bf4a4] font-mono text-sm tracking-wide mt-3 mb-4">
                                ► AGI Alignment nerd since 2015 
                            </p>
                            <p className="text-white/60 mt-2 m-0 border-t border-white/10 pt-4">
                                Currently <strong className="text-white">Co-Founder & CEO of LEVL</strong>, an AI-enabled longevity therapeutics startup.
                            </p>
                            <p className="border-l-2 border-white/10 italic text-white/60 py-2 pl-4 mt-6">
                                I started LEVL to accelerate Longevity Escape Velocity and give people more time. Ironically, building it takes most of mine.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed mt-8">
                                AGI Futures grew out of a simple observation: many of the most important startup opportunities never get built because the founders best positioned to see them are already fully committed to scaling something else.
                            </p>
                            <p className="text-xl leading-relaxed">
                                That is why my team and I are <span className="bg-[#3bf4a4]/20 text-[#3bf4a4] px-2 py-0.5 rounded font-medium">open-sourcing the highest-conviction opportunities</span> I and other founders would pursue ourselves if we weren’t already heads down on our own ventures.
                            </p>
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <p className="text-xl leading-relaxed">
                                    As an angel investor, I back relentlessly high-agency teams building AI-native startups. The opportunity to invest into the singularity only comes around once in human history, and I want to put conviction and capital behind the builders steering it toward abundance.
                                </p>
                                <p className="text-xl leading-relaxed">
                                    If you’re a founder building at this frontier,{" "}
                                    <a 
                                        href="https://www.linkedin.com/in/kylenmcclintock/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-[#3bf4a4] underline underline-offset-4 hover:text-[#3bf4a4]/80 transition-colors"
                                    >
                                        please reach out
                                    </a>.
                                </p>

                                <div className="pt-4 flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-mono text-white/50 uppercase tracking-wider">Follow AGI Futures:</span>
                                    <a 
                                        href="https://www.instagram.com/agi_futures/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="AGI Futures on Instagram"
                                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-xs font-mono text-white/80 hover:text-white transition-all duration-200"
                                    >
                                        <Instagram className="w-3.5 h-3.5 text-[#3bf4a4]" />
                                        <span>Instagram</span>
                                    </a>
                                    <a 
                                        href="https://www.threads.com/@agi_futures" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="AGI Futures on Threads"
                                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-xs font-mono text-white/80 hover:text-white transition-all duration-200"
                                    >
                                        <ThreadsIcon className="w-3.5 h-3.5 fill-[#3bf4a4]" />
                                        <span>Threads</span>
                                    </a>
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=61595298569347" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="AGI Futures on Facebook"
                                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-xs font-mono text-white/80 hover:text-white transition-all duration-200"
                                    >
                                        <Facebook className="w-3.5 h-3.5 text-[#3bf4a4]" />
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
