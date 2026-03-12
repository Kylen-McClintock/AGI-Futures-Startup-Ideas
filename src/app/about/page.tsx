import Link from "next/link";
import type { Metadata } from "next";

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
                            <p>
                                I am a <strong>techno-optimist but a political realist</strong>. The path from AGI to ASI guarantees unfathomable abundance—even awakening the light cone with consciousness is possible. But so is chaotic collapse.
                            </p>
                            <p className="text-[#3bf4a4] font-medium text-xl my-6">
                                The next decade of builders possess unprecedented agency over which direction the AGI Future leans.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-4">The Builder</h3>
                            <p className="font-medium text-white m-0 text-xl">
                                Ex-Engineer, Venture, & AI Product Manager.
                            </p>
                            <p className="text-white/60 mt-2 m-0">
                                Currently <strong className="text-white">Co-Founder & CEO of LEVL</strong>, an AI-enabled longevity therapeutics startup.
                            </p>
                        </div>

                        <div>
                            <p>
                                The ratio of things I want to do in this lifetime with the people I love versus the time I have left is tragically lopsided. I started LEVL to accelerate Longevity Escape Velocity and literally give us more time. Ironically, building it takes most of mine.
                            </p>
                            <p>
                                I am launching <strong>AGI Futures</strong> to open source the most impactful startup opportunities I and other founders would build ourselves if we weren't already too busy scaling our own ventures. These ideas are the curated distillation of hundreds of conversations between leading founders and industry insiders operating at the extreme edge of the technological and cultural frontier.
                            </p>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10">
                            <h2 className="text-3xl font-serif text-white mb-6">The Goal</h2>
                            <p className="text-xl leading-relaxed">
                                My hope: this community builds many of these AI-native startups, creates generational wealth, meaningfully improves the world, and—selfishly—ships products I want to use. 
                            </p>
                            <p className="mt-8 text-white/60 italic">
                                I plan to advise or invest alongside the top builders. If you are building one of these, let's talk.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
