import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function InteractiveSection({
    title,
    defaultVisibleText,
    expandableText
}: {
    title: string;
    defaultVisibleText: string;
    expandableText: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors duration-500">
            <h3 className="text-xl font-serif text-[var(--primary)] mb-6">{title}</h3>
            
            <p className="text-white/80 font-light leading-relaxed mb-6">
                {defaultVisibleText}
            </p>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 border-t border-white/10 text-white/70 font-light leading-relaxed">
                            {expandableText}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors"
            >
                {isOpen ? 'Close details' : 'Expand details'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
