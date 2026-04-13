"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ICP {
    id: string;
    title: string;
    description: string;
    image: any;
}

export function ICPSection({ icps }: { icps: ICP[] }) {
    const [activeId, setActiveId] = useState(icps[0].id);
    const activeIcp = icps.find((i) => i.id === activeId) || icps[0];

    return (
        <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-wrap gap-2">
                {icps.map((icp) => (
                    <button
                        key={icp.id}
                        onClick={() => setActiveId(icp.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeId === icp.id
                                ? "bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-[var(--primary)]/20"
                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-transparent"
                        }`}
                    >
                        {icp.title}
                    </button>
                ))}
            </div>

            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10 glass-panel">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        {activeIcp.image && (
                            <Image
                                src={activeIcp.image}
                                alt={activeIcp.title}
                                fill
                                className="object-cover opacity-80"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-10 flex flex-col justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="max-w-2xl"
                        >
                            <h4 className="text-3xl sm:text-4xl font-serif text-white mb-4 drop-shadow-md">
                                {activeIcp.title}
                            </h4>
                            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed drop-shadow-sm">
                                {activeIcp.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
