import { motion } from "framer-motion";

export function AttentionChart({ inView }: { inView: boolean }) {
    return (
        <div className="w-full max-w-4xl mx-auto mt-16 p-8 sm:p-12 glass-panel border border-[var(--primary)]/20 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
            
            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-12 flex items-center">
                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Global Attention Degradation
            </h3>

            <div className="relative h-64 sm:h-80 w-full flex items-end justify-between pb-12 pt-20 px-8 sm:px-24">
                {/* Y-Axis lines */}
                <div className="absolute inset-x-8 sm:inset-x-24 bottom-12 border-b border-white/5" />
                <div className="absolute inset-x-8 sm:inset-x-24 top-1/2 border-b border-white/5 border-dashed" />
                <div className="absolute inset-x-8 sm:inset-x-24 top-20 border-b border-white/5 border-dashed" />

                {/* 2004 Bar */}
                <div className="relative flex flex-col justify-end items-center h-full z-20 w-32">
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={inView ? { height: '100%', opacity: 1 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-16 sm:w-24 bg-gradient-to-t from-[var(--primary)]/40 to-[var(--primary)]/5 rounded-t-xl relative border-t-2 border-[var(--primary)]"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl font-light text-white">150s</div>
                    </motion.div>
                    <div className="mt-4 text-sm font-mono text-white/50 tracking-widest">2004</div>
                </div>

                {/* Trend line SVG */}
                <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : {}}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            d="M 25% 20% L 75% 70%"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            fill="none"
                            className="opacity-40"
                        />
                    </svg>
                </div>

                {/* 2020 Bar */}
                <div className="relative flex flex-col justify-end items-center h-full z-20 w-32">
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={inView ? { height: '31.3%', opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="w-16 sm:w-24 bg-gradient-to-t from-[var(--secondary)]/40 to-[var(--secondary)]/5 rounded-t-xl relative border-t-2 border-[var(--secondary)]"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl font-semibold text-[var(--secondary)]">47s</div>
                    </motion.div>
                    <div className="mt-4 text-sm font-mono text-[var(--secondary)] tracking-widest">2020</div>
                </div>
            </div>

            <div className="text-center mt-6 text-sm font-light text-white/50 leading-relaxed max-w-2xl mx-auto">
                Attention on a single screen fell dramatically as software optimized for engagement feeds over deep focus.
            </div>
        </div>
    );
}
