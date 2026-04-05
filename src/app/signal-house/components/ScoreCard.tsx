import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScoreCard({
    type,
    title,
    score,
    summary,
    details
}: {
    type: 'moat' | 'difficulty' | 'impact';
    title: string;
    score: number;
    summary: string;
    details: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    // Apply deep theming CSS variables correctly based on type
    const headerColor = type === 'moat' ? 'text-[var(--primary)]' : type === 'difficulty' ? 'text-[var(--secondary)]' : 'text-white';
    const borderColor = type === 'moat' ? 'border-[var(--primary)]/30' : type === 'difficulty' ? 'border-[var(--secondary)]/30' : 'border-white/10';

    return (
        <div className={`glass-panel rounded-3xl border ${borderColor} overflow-hidden transition-colors duration-500`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 sm:p-8 flex items-center justify-between group text-left"
            >
                <div className="flex items-center gap-6">
                    <div className={`text-4xl sm:text-5xl font-light tracking-tighter ${headerColor}`}>
                        {score}
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-white mb-1">{title}</h3>
                        <p className="text-sm text-white/60 font-light pr-8">{summary}</p>
                    </div>
                </div>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10' : 'group-hover:bg-white/5'}`}>
                    <ChevronDown className="w-5 h-5 text-white/50" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 sm:p-8 pt-0 border-t border-white/10 text-white/80 font-light leading-relaxed">
                            {details}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function RiskItem({ level, title, description, mitigation }: { level: string, title: string, description: string, mitigation: string }) {
    return (
        <div className="mb-6 last:mb-0">
            <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${level.includes('High') ? 'text-red-400 border-red-400/30 bg-red-400/10' : level.includes('Medium') ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' : 'text-[var(--primary)] border-[var(--primary)]/30 bg-[var(--primary)]/10'}`}>
                    {level}
                </span>
                <strong className="text-white font-medium">{title}</strong>
            </div>
            <p className="text-sm text-white/70 mb-2 pl-2">Risk: {description}</p>
            <p className="text-sm text-white/90 pl-2 border-l-2 border-[var(--secondary)]/50">Mitigation: {mitigation}</p>
        </div>
    );
}
