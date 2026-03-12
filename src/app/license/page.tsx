import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AGI Futures | Open License",
    description: "AGI Futures startup idea writeups are licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.",
};

export default function LicensePage() {
    return (
        <main className="min-h-screen bg-[#07090A] text-white selection:bg-[#3bf4a4]/30">
            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-6 py-32 space-y-16">
                
                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-white glow-text">
                        Open <span className="italic text-[#3bf4a4]">License</span>
                    </h1>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:text-white/70 prose-a:text-[#3bf4a4]">
                    <p className="lead text-xl text-white font-medium mb-12">
                        AGI Futures startup idea writeups are licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).
                    </p>

                    <p>
                        We open source these ideas because the world needs more people building toward a better AGI future. Our goal is to increase the odds that advanced AI leads to mutual abundance, stronger institutions, scientific progress, and human flourishing, not existential chaos. If an idea here sparks a company, project, research effort, or movement, that is the point.
                    </p>

                    <p>
                        You are free to share, discuss, and adapt this content for noncommercial use, as long as you credit AGI Futures, link to the original page when practical, note whether you made changes, and license adaptations under the same terms.
                    </p>

                    <p className="p-6 border-l-2 border-[#3bf4a4] bg-white/[0.02] rounded-r-lg text-white font-medium">
                        You are also free to build companies, products, research, and projects inspired by these ideas. You do not need permission to build from an idea.
                    </p>

                    <p>
                        This license applies to the written content, research, curation, structure, and presentation of the AGI Futures library. It does not give you the right to scrape, clone, mirror, republish, or commercially package substantial portions of the database, or to remove attribution and present it as your own.
                    </p>

                    <p>
                        We protect the library from bulk copying so we can keep doing the hard work of finding, refining, and open sourcing the highest-quality, most impactful AI-native startup ideas.
                    </p>

                    <p className="text-white/50 text-base mt-12 italic border-t border-white/10 pt-8">
                        This license does not grant rights to the AGI Futures name, logo, or brand. For commercial licensing, syndication, or bulk reuse requests, contact <a href="mailto:kylen.mcclintock@gmail.com" className="!text-[#3bf4a4] hover:underline">kylen.mcclintock@gmail.com</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
