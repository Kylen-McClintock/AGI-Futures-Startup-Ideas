"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ICP {
    title: string;
    description: string;
    useCases: string[];
    image: any;
}

interface ICPGridProps {
    icps: ICP[];
    themeColor: string;
}

export default function ICPGrid({ icps, themeColor }: ICPGridProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto my-16">
            {/* Left side: Selectors */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
                {icps.map((icp, i) => {
                    const isActive = activeIndex === i;
                    return (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 w-full overflow-hidden ${
                                isActive 
                                    ? 'bg-white/[0.04] border-white/20' 
                                    : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                            }`}
                        >
                            {/* Active Indicator Line */}
                            {isActive && (
                                <motion.div
                                    layoutId="icp-active-indicator"
                                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                    style={{ backgroundColor: themeColor }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <h3 className={`text-xl mb-1 transition-colors ${isActive ? 'text-white font-medium' : 'text-white/60 group-hover:text-white/80'}`}>
                                        {icp.title}
                                    </h3>
                                    <p className={`text-sm tracking-wide font-mono uppercase transition-colors ${isActive ? '' : 'text-white/30 group-hover:text-white/50'}`} style={isActive ? { color: themeColor } : {}}>
                                        Use Case Profile
                                    </p>
                                </div>
                                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'}`} style={{ color: themeColor }} />
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Right side: Active Content Display */}
            <div className="w-full lg:w-7/12 relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={icps[activeIndex].image}
                            alt={icps[activeIndex].title}
                            fill
                            quality={100}
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-[#06090c]/80 to-transparent" />
                        
                        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-4">
                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: themeColor }} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-white/80">Active Protocol</span>
                                </div>
                                
                                <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
                                    {icps[activeIndex].title}
                                </h2>
                                
                                <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-xl">
                                    {icps[activeIndex].description}
                                </p>
                                
                                <div className="space-y-4">
                                    {icps[activeIndex].useCases.map((useCase, idx) => (
                                        <div key={idx} className="flex items-center gap-4 py-3 border-t border-white/10">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor, opacity: 0.7 }} />
                                            <span className="text-white/90 tracking-wide">{useCase}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
