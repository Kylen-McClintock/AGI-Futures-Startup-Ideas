"use client";

import { motion } from "framer-motion";
import { Bot, Map, Layers, Fingerprint, LucideIcon } from "lucide-react";

interface StackItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const ITEMS: StackItem[] = [
    {
        id: "1",
        title: "1. AI Listing Agent",
        description: "The home gets its own agent. It knows the documents, the systems, the upgrade history, the risk factors, the neighborhood context, and the common buyer objections.",
        icon: Bot
    },
    {
        id: "2",
        title: "2. Self-Guided and Remote Tours",
        description: "Buyers unlock homes, tour on their own time, and ask questions live by voice or camera. Escalates to a homeowner or licensed agent if unknown.",
        icon: Map
    },
    {
        id: "3",
        title: "3. Transaction Operating System",
        description: "Offers, disclosures, inspection responses, amendments, title coordination, escrow checklists, lender packet assembly, and closing prep move through one workflow.",
        icon: Layers
    },
    {
        id: "4",
        title: "4. Persistent Home Passport",
        description: "After close, the property graph does not disappear. It becomes the canonical system of record for resale, maintenance, warranties, remodels, insurance intake, and future financing.",
        icon: Fingerprint
    }
];

export function InteractiveStackGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-16">
            {ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/50 transition-colors bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 cursor-default"
                    >
                        <div className="w-12 h-12 rounded-full border border-[var(--tertiary)]/30 bg-[var(--primary)]/20 flex items-center justify-center text-[var(--secondary)] mb-6">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-3">{item.title}</h4>
                        <p className="text-white/70 leading-relaxed font-light">{item.description}</p>
                    </motion.div>
                );
            })}
        </div>
    );
}
