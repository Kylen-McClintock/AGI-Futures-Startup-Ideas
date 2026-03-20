"use client";

import { motion } from "framer-motion";
import { Smartphone, Building2, ShoppingCart, ShieldCheck } from "lucide-react";

export default function ProductStackGrid() {
    return (
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Smartphone className="w-10 h-10 text-[var(--secondary)] mb-6" />
                <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Contributor App</h4>
                <p className="text-white/70 font-light leading-relaxed">
                    A mobile interface with an earn toggle, payout breakdown, quality feedback, and tailored coaching. Built for tradespeople and domain experts capturing hand-camera or screen workflow traces.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Building2 className="w-10 h-10 text-[var(--secondary)] mb-6" />
                <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Enterprise Console</h4>
                <p className="text-white/70 font-light leading-relaxed">
                    Designed for employers to set permissions, define privacy settings on recorded workflows, and negotiate employee-employer value splits. Turns automation threats into shared revenue streams.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShoppingCart className="w-10 h-10 text-[var(--secondary)] mb-6" />
                <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Buyer Marketplace & API</h4>
                <p className="text-white/70 font-light leading-relaxed">
                    A software interface for connecting AI labs, robotics firms, and automation teams requesting and purchasing high-signal workflow datasets. Prices dynamically based on immediate demand.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-300 relative group overflow-hidden shadow-[0_0_30px_rgba(var(--primary),0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShieldCheck className="w-10 h-10 text-[var(--tertiary)] mb-6" />
                <h4 className="text-xl font-medium text-[var(--tertiary)] mb-3 tracking-tight">Rights Layer</h4>
                <p className="text-white/70 font-light leading-relaxed">
                    Offers multiple access tiers: secure time-bounded training access, premium downloadable dataset licenses for approved use cases, and enterprise-private modes where sensitive data never leaves the boundary.
                </p>
            </motion.div>
        </div>
    );
}
