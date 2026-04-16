"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Building2, FileSignature, Newspaper, LucideIcon } from 'lucide-react';

interface ICPData {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    image: StaticImageData;
}

interface TogglableICPProps {
    data: ICPData[];
    themeKey: string;
}

export default function TogglableICP({ data, themeKey }: TogglableICPProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full my-12 bg-black/40 border border-white/10 rounded-3xl overflow-hidden p-6 md:p-10 relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 blur-[120px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                {/* Left Side: Toggles */}
                <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">Select a perspective</h3>
                    <div className="space-y-3">
                        {data.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeIndex === index;
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
                                        isActive 
                                        ? 'bg-[var(--primary)]/10 border-[var(--primary)]/50 shadow-[0_0_20px_var(--primary)]/20' 
                                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-zinc-400'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                        isActive ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-black/50 text-zinc-500'
                                    }`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`font-medium ${isActive ? 'text-white' : ''}`}>
                                        {item.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Content Area */}
                <div className="flex-[1.5] relative min-h-[400px] lg:min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col"
                        >
                            <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 mb-6">
                                <Image 
                                    src={data[activeIndex].image} 
                                    alt={data[activeIndex].title}
                                    fill
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl sticky-description">
                                <p className="text-zinc-300 leading-relaxed font-light text-sm md:text-base">
                                    {data[activeIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
