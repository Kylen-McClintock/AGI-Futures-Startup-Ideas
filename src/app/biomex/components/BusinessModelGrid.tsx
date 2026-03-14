"use client";

import { motion } from "framer-motion";
import { Activity, Beaker, Database, Users, LineChart } from "lucide-react";

export function BusinessModelGrid() {
    const models = [
        {
            title: "Donor Intelligence & Sourcing",
            description: "Charge clinics and research partners for donor recruitment, screening, phenotyping, matching, and standardized processing.",
            icon: Users
        },
        {
            title: "Premium Phenotype Pools",
            description: "Offer access to phenotype-specific donor classes (recovery, sleep, metabolic resilience, healthy aging) first in clinician-led and research settings.",
            icon: Activity
        },
        {
            title: "Data & Trial Platform",
            description: "Sell donor-response maps, engraftment analytics, and trial support to biotech and pharma.",
            icon: Database
        },
        {
            title: "Proprietary Therapeutics",
            description: "Turn the best donor-inspired biology into defined microbial consortia and live biotherapeutic products.",
            icon: Beaker
        },
        {
            title: "Donor Economics",
            description: "Top donors get paid for qualified material, adherence to protocol, and upside tied to validated donor lines. An entirely new biological asset class.",
            icon: LineChart
        }
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model, i) => {
                const Icon = model.icon;
                return (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="glass-panel p-6 rounded-3xl border border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-serif text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{model.title}</h4>
                            <p className="text-white/70 font-light leading-relaxed text-sm">
                                {model.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
