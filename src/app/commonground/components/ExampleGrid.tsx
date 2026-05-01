"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Users, FileText, CheckCircle2 } from 'lucide-react';

interface ExampleProps {
    title: string;
    description: string;
    scenario: string;
    icon: any;
    image: StaticImageData;
}

interface ExampleGridProps {
    examples: ExampleProps[];
}

export function ExampleGrid({ examples }: ExampleGridProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {examples.map((ex, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="rounded-[2.5rem] bg-[#080d12] border border-white/5 overflow-hidden flex flex-col group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                        
                        <div className="w-full aspect-square relative z-10 border-b border-white/5 bg-black">
                            <Image
                                src={ex.image}
                                alt={ex.title}
                                fill
                                quality={100}
                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent" />
                            
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4">
                                    <ex.icon className="w-6 h-6 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-2xl text-white font-light m-0">{ex.title}</h3>
                            </div>
                        </div>
                        
                        <div className="p-8 relative z-10 flex flex-col grow">
                            <p className="text-white/80 leading-relaxed font-light mb-6">
                                {ex.scenario}
                            </p>
                            <div className="mt-auto bg-black/30 p-5 rounded-2xl border border-white/5">
                                <p className="text-sm font-light text-[var(--primary)]/90 leading-relaxed m-0 italic">
                                    "{ex.description}"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-4">
                <div className="flex gap-2 overflow-x-auto pb-4 snap-x">
                    {examples.map((ex, i) => {
                        const Icon = ex.icon;
                        const isActive = activeTab === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium transition-all whitespace-nowrap snap-start ${isActive
                                    ? "bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/50"
                                    : "bg-white/5 text-slate-400 border border-white/5"
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                {ex.title}
                            </button>
                        )
                    })}
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[2.5rem] bg-[#080d12] border border-white/5 overflow-hidden flex flex-col mt-2 shadow-2xl shadow-black"
                    >
                        <div className="w-full aspect-[4/3] relative z-10 border-b border-white/5 bg-black">
                            <Image
                                src={examples[activeTab].image}
                                alt={examples[activeTab].title}
                                fill
                                quality={100}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent" />
                        </div>
                        <div className="p-8 relative z-10 flex flex-col grow">
                            <h3 className="text-2xl text-white font-light m-0 mb-4">{examples[activeTab].title}</h3>
                            <p className="text-white/80 leading-relaxed font-light mb-6">
                                {examples[activeTab].scenario}
                            </p>
                            <div className="mt-auto bg-black/30 p-5 rounded-2xl border border-white/5">
                                <p className="text-sm font-light text-[var(--primary)]/90 leading-relaxed m-0 italic">
                                    "{examples[activeTab].description}"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
