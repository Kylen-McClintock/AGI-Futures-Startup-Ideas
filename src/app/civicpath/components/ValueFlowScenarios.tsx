"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Building, Shield, FileText, BadgeCheck, ArrowRight } from "lucide-react";

const icps = [
    {
        id: "ministry",
        label: "Federal Government",
        icon: Building,
        pain: "Drowning in asylum backlog, rising benefits costs, and massive political backlash over failed integration and no-shows.",
        solution: "A national interior ministry wants a single live view of how immigrants are progressing through the system, which actions predict successful integration, and where the biggest sources of fraud, no-shows, welfare dependence, and delayed enforcement are coming from.",
        flow: [
            "Government gets real-time dashboard of risk and contribution",
            "Government makes standards visible to each immigrant",
            "More compliance, faster work, better integration",
            "More governable, trusted immigration system"
        ]
    },
    {
        id: "municipality",
        label: "Municipality",
        icon: Shield,
        pain: "The national government dumps migrants into the city, leaving them to bear the long-tail housing and language training costs.",
        solution: "A city with high migrant inflows currently lacks a clear way to see which newcomers are on track and which are at risk. CivicPath delivers targeted language, work, and support interventions to bend the curve.",
        flow: [
            "City gets visibility into newcomer's integration status",
            "City delivers targeted language and work interventions",
            "Newcomer gets clearer expectations and next steps",
            "City reduces service burden and lowers social friction"
        ]
    },
    {
        id: "asylum",
        label: "Asylum Seeker",
        icon: FileText,
        pain: "Trapped in opaque processing limbo, unsure what actions actually secure their stay versus risk deportation. Subject to predatory smugglers.",
        solution: "A legitimate asylum applicant who currently faces a confusing system wants to understand where they stand, what evidence matters, and what actions will safely progress their case.",
        flow: [
            "Seeker gets transparency into status, deadlines, and risks",
            "Seeker avoids accidental mistakes and shows compliance",
            "Progress through the system becomes legible",
            "Seeker gets a fairer shot at legal stability"
        ]
    },
    {
        id: "skilled",
        label: "Skilled Immigrant",
        icon: BadgeCheck,
        pain: "Subject to the same hostile administrative friction and lottery-based delays as edge cases, despite representing instant net fiscal gain.",
        solution: "A high-upside engineer or founder wants to know which country offers the clearest and fastest path to residence, and what specific actions will maximize their odds.",
        flow: [
            "Skilled immigrant gets visibility into pathway probabilities",
            "Takes highest-value actions around credentials and language",
            "Reaches productive employment and status faster",
            "Immigrant gets clear path, country gains strong contributor"
        ]
    }
];

export default function ValueFlowScenarios() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full mb-32">
            <div className="mb-12">
                <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                    <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Ideal Customer Profiles
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                    Interactive Value Flows.
                </h2>
                <p className="text-xl text-white/70 font-light mt-6 max-w-3xl">
                    Toggle through the CivicPath personas to see how visible system architecture turns bureaucratic friction into clear, compounded civic value.
                </p>
            </div>

            <div className="glass-panel rounded-3xl border border-[var(--primary)]/20 overflow-hidden bg-[#070b14]/50">
                {/* Navigation Tabs */}
                <div className="flex overflow-x-auto hide-scrollbar border-b border-[var(--primary)]/10">
                    {icps.map((icp, idx) => {
                        const Icon = icp.icon;
                        const isActive = activeIndex === idx;
                        return (
                            <button
                                key={icp.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`flex items-center gap-3 px-8 py-6 text-lg tracking-wide transition-all min-w-max relative
                                    ${isActive ? 'text-[var(--primary)]' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'}`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-[var(--secondary)]' : 'opacity-50'}`} />
                                <span className="font-light">{icp.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="icp-active-tab"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="p-8 sm:p-12 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <div className="grid lg:grid-cols-12 gap-12">
                                {/* Left Column: Context */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#ef4444] font-mono mb-2">Pain Point</h3>
                                        <p className="text-lg text-white/80 font-light leading-relaxed">
                                            {icps[activeIndex].pain}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[var(--secondary)] font-mono mb-2">The CivicPath Solution</h3>
                                        <p className="text-lg text-white/80 font-light leading-relaxed">
                                            {icps[activeIndex].solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Value Flow Diagram */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <h3 className="text-sm uppercase tracking-widest text-[var(--primary)] font-mono mb-6">Interactive Value Flow</h3>
                                    
                                    <div className="space-y-2">
                                        {icps[activeIndex].flow.map((step, idx) => (
                                            <motion.div 
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.15, duration: 0.4 }}
                                                className="flex flex-col"
                                            >
                                                <div className="glass-panel p-6 border border-white/5 rounded-2xl flex items-center bg-white/[0.01]">
                                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--secondary)] flex items-center justify-center font-mono mr-4 shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    <p className="text-lg text-white/90 font-light leading-snug">{step}</p>
                                                </div>
                                                
                                                {idx < icps[activeIndex].flow.length - 1 && (
                                                    <div className="flex justify-center -my-1 py-1 relative z-10 w-8 ml-6">
                                                        <div className="h-6 w-[1px] bg-gradient-to-b from-[var(--primary)]/30 to-[var(--secondary)]/30" />
                                                        <ArrowRight className="w-4 h-4 text-[var(--secondary)]/50 absolute top-1 left-1.5 rotate-90" />
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
