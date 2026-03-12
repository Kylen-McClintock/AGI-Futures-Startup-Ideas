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
                        "Doing what I can to build a maximally beneficial AGI Future."
                    </p>

                    <div className="space-y-8">
                        <div>
                            <div className="space-y-4">
                                <p>
                                    I am a <strong>techno-optimist but a political realist</strong>. 
                                </p>
                                <p className="text-2xl font-medium tracking-wide flex items-center flex-wrap gap-3">
                                    <span>AGI</span>
                                    <span className="text-white/40">→</span>
                                    <span>ASI</span>
                                    <span className="text-white/40">→</span>
                                    <span>Unfathomable abundance <span className="text-sm text-white/40 uppercase tracking-widest font-mono ml-2">(not guaranteed!)</span></span>
                                </p>
                                <p>
                                    Even <span className="text-[#3bf4a4] font-medium">Awakening the light cone</span> with consciousness is possible. But so is <span className="text-red-500 font-medium">chaotic collapse</span>.
                                </p>
                            </div>
                            
                            <SeesawVisual />

                            <p className="text-white italic text-3xl font-serif my-12 leading-relaxed">
                                The next decade of builders possess unprecedented agency over which direction the AGI Future leans.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-4">The Builder</h3>
                            <p className="font-medium text-white m-0 text-xl">
                                Ex-Engineer, Venture, & AI Product Manager.
                            </p>
                            <p className="text-[#3bf4a4] font-mono text-sm tracking-wide mt-3 mb-4">
                                ► AGI Alignment nerd since 2015 
                            </p>
                            <p className="text-white/60 mt-2 m-0 border-t border-white/10 pt-4">
                                Currently <strong className="text-white">Co-Founder & CEO of LEVL</strong>, an AI-enabled longevity therapeutics startup.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p>
                                The ratio of things I want to do in this lifetime with the people I love versus the time I have left is tragically lopsided. 
                            </p>
                            <p className="pl-6 border-l-2 border-white/10 italic text-white/60 bg-white/[0.01] py-2 rounded-r-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
                                I started LEVL to accelerate Longevity Escape Velocity and literally give us more time. Ironically, building it takes most of mine.
                            </p>
                            <p>
                                I am launching <strong>AGI Futures</strong> to open source the most impactful startup opportunities I and other founders would build ourselves if we weren't already too busy scaling our own ventures. 
                            </p>
                            <p>
                                These ideas are the <span className="bg-[#3bf4a4]/20 text-[#3bf4a4] px-2 py-0.5 rounded font-medium">curated distillation of hundreds of conversations</span> between leading founders and industry insiders operating at the extreme edge of the technological and cultural frontier.
                            </p>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10">
                            <h2 className="text-3xl font-serif text-white mb-6">The Goal</h2>
                            <p className="text-xl leading-relaxed">
                                This community builds many of these AI-native startups, creates generational wealth, meaningfully improves the world, and—selfishly—ships products I want to use. 
                            </p>
                            <p className="mt-8 text-[#3bf4a4]/80 italic">
                                I plan to advise or invest alongside the top builders. If you are building one of these, let's talk.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
