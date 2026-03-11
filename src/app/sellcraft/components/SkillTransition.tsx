"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const practiceSkills = [
    "diagnosis",
    "listening",
    "persuasion",
    "emotional regulation",
    "trust building",
    "consensus building",
    "adaptive communication",
    "judgment under pressure"
];

const transferableOccupations = [
    "recruiting",
    "fundraising",
    "partnerships",
    "customer success",
    "management",
    "leadership",
    "politics",
    "community building",
    "entrepreneurship"
];

export function SkillTransition() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Smooth the scroll progress to avoid jitteriness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Stage 1: Initial Skills Visibility (Fades out extremely early)
    const skillsOpacity = useTransform(smoothProgress, [0, 0.15, 0.3], [1, 1, 0]);
    const skillsY = useTransform(smoothProgress, [0, 0.15, 0.3], [0, 0, -50]);
    const skillsScale = useTransform(smoothProgress, [0, 0.15, 0.3], [1, 1, 0.95]);

    // Stage 2: The Transition Graphic (Lines converging/diverging)
    const linesOpacity = useTransform(smoothProgress, [0.15, 0.35, 0.55], [0, 1, 0]);
    const linesScale = useTransform(smoothProgress, [0.15, 0.35, 0.55], [0.8, 1, 0.8]);

    // Stage 3: Occupations Visibility (Fades in very early and holds through the bottom)
    const occupationsOpacity = useTransform(smoothProgress, [0.35, 0.6], [0, 1]);
    const occupationsY = useTransform(smoothProgress, [0.35, 0.6], [50, 0]);
    const occupationsScale = useTransform(smoothProgress, [0.35, 0.6], [0.95, 1]);

    return (
        <section ref={containerRef} className="py-24 relative min-h-[150vh] flex flex-col justify-center border-t border-white/10 mt-32">
            
            {/* Sticky Container holds the actual text while the parent scrolls to drive the animation */}
            <div className="sticky top-1/4 h-[60vh] flex flex-col items-center justify-center -mt-24">
                
                {/* Intro Text - Static but drives the premise */}
                <div className="text-center max-w-3xl mb-16 z-20">
                    <h3 className="text-2xl md:text-4xl text-white font-serif font-medium mb-6 leading-tight">
                        Selling is one of the best training grounds for <br />
                        <span className="text-[var(--primary)] italic text-3xl md:text-5xl">AI-resilient human skill.</span>
                    </h3>
                    <p className="text-xl text-neutral-400 font-light">
                        Because when someone sells well, they are really practicing:
                    </p>
                </div>

                {/* The Core Animation Area */}
                <div className="relative w-full max-w-4xl h-80 flex items-center justify-center">
                    
                    {/* State 1: Skills */}
                    <motion.div 
                        style={{ opacity: skillsOpacity, y: skillsY, scale: skillsScale }}
                        className="absolute inset-0 flex flex-wrap justify-center content-center gap-3 z-20 pointer-events-none"
                    >
                        {practiceSkills.map((skill, i) => (
                            <span key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white shadow-lg backdrop-blur-sm text-lg font-medium tracking-wide">
                                {skill}
                            </span>
                        ))}
                    </motion.div>

                    {/* State 2: Visual Transition (Data Flow Lines) */}
                    <motion.div 
                        style={{ opacity: linesOpacity, scale: linesScale }}
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    >
                         <div className="w-full h-full relative">
                            {/* Animated converging lines effect */}
                            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
                            <div className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 rounded-full border border-[var(--primary)]/30 animate-[spin_4s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 rounded-full border border-[var(--primary)]/10 animate-[spin_6s_linear_infinite_reverse]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#06090c] border border-[var(--primary)] text-[var(--primary)] rounded-full text-sm font-mono tracking-widest uppercase shadow-[0_0_30px_var(--primary)]">
                                Transferring
                            </div>
                         </div>
                    </motion.div>

                    {/* State 3: Occupations */}
                    <motion.div 
                        style={{ opacity: occupationsOpacity, y: occupationsY, scale: occupationsScale }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
                    >
                        <p className="text-xl text-[var(--secondary)] font-light mb-8 italic">
                            Those are transferable to:
                        </p>
                        <div className="flex flex-wrap justify-center content-center gap-4">
                            {transferableOccupations.map((occ, i) => (
                                <span key={occ} className="px-6 py-3 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] shadow-[var(--primary)]/10 backdrop-blur-sm text-xl font-bold tracking-tight">
                                    {occ}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Closing text placed entirely after the sticky scroll finishes */}
            <div className="relative z-30 max-w-4xl mx-auto text-center mt-32 px-6">
                <p className="text-2xl text-neutral-300 font-light leading-relaxed mb-6">
                    SellCraft is not just “sales training.”
                </p>
                <p className="text-3xl md:text-5xl text-white font-medium leading-tight">
                    It is really a simulation platform for <br />
                    <span className="text-[var(--primary)]">high-value human coordination skills</span>,
                </p>
                <p className="text-xl text-neutral-400 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
                    with sales as the wedge because sales is measurable, urgent, and tied directly to revenue.
                </p>
            </div>
            
        </section>
    );
}
