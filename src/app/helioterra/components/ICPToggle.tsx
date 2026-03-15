"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

export interface ICPToggleItem {
    id: string;
    title: string;
    description: React.ReactNode;
    icon: LucideIcon;
    image: StaticImageData;
}

export function ICPToggle({ items }: { items: ICPToggleItem[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {items.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex flex-col items-start gap-4 p-6 rounded-[2rem] border transition-all duration-300 text-left ${isActive ? 'bg-[var(--primary)]/20 border-[var(--primary)]/40 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] text-white' : 'bg-[var(--primary)]/5 border-white/5 hover:bg-[var(--primary)]/10 text-white/50 hover:text-white/80'}`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-[var(--primary)] text-[#06090c]' : 'bg-white/5 text-white/50'}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-medium leading-snug">{item.title}</h4>
                        </button>
                    )
                })}
            </div>

            <div className="relative glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-[var(--primary)]/20 overflow-hidden min-h-[400px] flex items-center bg-white/[0.02]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-12 items-center w-full z-10"
                    >
                        <div>
                            <div className="w-12 h-1 bg-[var(--primary)]/50 mb-8 rounded-full" />
                            <h3 className="text-3xl sm:text-4xl text-white font-light mb-6">
                                {items[activeIndex].title}
                            </h3>
                            <div className="text-xl text-white/70 font-light leading-relaxed">
                                {items[activeIndex].description}
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image 
                                src={items[activeIndex].image} 
                                alt={items[activeIndex].title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
