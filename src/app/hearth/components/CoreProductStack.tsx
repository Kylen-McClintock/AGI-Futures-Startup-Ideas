"use client";

import { motion } from "framer-motion";
import { Users, FileText, Search, ShieldCheck, Settings, Globe, Home } from "lucide-react";

const stackItems = [
    {
        title: "1. Cohort Formation Engine",
        icon: Users,
        description: "Hearth helps groups discover whether they should actually live together before money gets wired. It captures values, budget ranges, lifestyle preferences, conflict triggers, and dealbreakers."
    },
    {
        title: "2. Governance & Exit Wizard",
        icon: FileText,
        description: "Every community gets a starter charter: decision rules, chore norms, guest rules, financial contribution logic, conflict escalation, and departure pathways. Hearth productizes the unspoken layer."
    },
    {
        title: "3. Property Search & Feasibility",
        icon: Search,
        description: "AI-assisted search across homes, land, and multifamily, plus a feasibility pass for zoning, renovation needs, density, and shared amenity fit."
    },
    {
        title: "4. Legal & Capital Toolkit",
        icon: ShieldCheck,
        description: "Templates and partner workflows for co-buying, land holding, entity formation, operating agreements, and equity logic to build solid financial foundations."
    },
    {
        title: "5. Community Operating System",
        icon: Settings,
        description: "Shared calendar, expenses, chores, maintenance, votes, community health check-ins, room allocation, and lightweight mediation prompts."
    },
    {
        title: "6. Network Pass",
        icon: Globe,
        description: "The long game is a federation of trusted communities. Members can spend a season in another Hearth community. Vacant rooms monetize cleanly, and friends can travel together."
    },
    {
        title: "7. Supply-Side Services",
        icon: Home,
        description: "For selected markets, Hearth can design, retrofit, or co-develop high-aesthetic intentional communities, then sell, lease, or operate them. The brand becomes physical."
    }
];

export function CoreProductStack() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stackItems.map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`glass-panel p-6 rounded-2xl border border-white/5 hover:border-[var(--primary)]/30 transition-colors flex flex-col group ${i === 6 ? 'sm:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''}`}
                >
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-4 border border-[var(--primary)]/20 group-hover:bg-[var(--primary)]/20 transition-colors">
                        <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-medium mb-3">{item.title}</h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed flex-grow">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
