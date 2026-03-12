import Link from "next/link";
import type { Metadata } from "next";
import { SeesawVisual } from "./components/SeesawVisual";

export const metadata: Metadata = {
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
                        <span className="text-lg text-white/50 not-italic mt-2 block">— Buckminster Fuller</span>
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
                                    ex-engineer, venture, and AI product lead
                                </p>
                            </div>
                            <p className="text-[#3bf4a4] font-mono text-sm tracking-wide mt-3 mb-4">
                                ► AGI Alignment nerd since 2015 
                            </p>
                            <p className="text-white/60 mt-2 m-0 border-t border-white/10 pt-4">
                                Currently <strong className="text-white">Co-Founder & CEO of LEVL</strong>, an AI-enabled longevity therapeutics startup.
                            </p>
                            <p className="border-l-2 border-white/10 italic text-white/60 py-2 pl-4 mt-6">
                                I started LEV to accelerate Longevity Escape Velocity and give people more time. Ironically, building it takes most of mine.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed mt-8">
                                AGI Futures grew out of a simple observation: many of the most important startup opportunities never get built because the founders best positioned to see them are already fully committed to scaling something else.
                            </p>
                            <p className="text-xl leading-relaxed">
                                That is why my team and I are <span className="bg-[#3bf4a4]/20 text-[#3bf4a4] px-2 py-0.5 rounded font-medium">open-sourcing the highest-conviction opportunities</span> I and other founders would pursue ourselves if we weren’t already heads down on our own ventures.
                            </p>
                            <p className="text-xl leading-relaxed">
                                If you want to contribute an idea, or you’re considering building one of these, please reach out.
                                <br/>
                                <span className="text-[#3bf4a4]/80 italic mt-2 inline-block">Time allowing, I plan to advise, support, and sometimes invest alongside the top builders.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
