import React from "react";
import { Layers, Crosshair, Zap, Users, Globe, Briefcase } from "lucide-react";

interface TagInfo {
    label: string;
    value: string[];
    icon: React.ReactNode;
}

export interface ProjectTagsProps {
    tags: {
        sector?: string[];
        bottleneck?: string[];
        readiness?: string[];
        customer?: string[];
        outcomes?: string[];
        product_type?: string[];
        enabling_technology?: string[];
        founder_fit?: string[];
    } | null
}

export function ProjectTags({ tags }: ProjectTagsProps) {
    if (!tags) return null;

    const list: TagInfo[] = [];
    if (tags.sector && tags.sector.length > 0) list.push({ label: "Sector", value: tags.sector, icon: <Layers className="w-4 h-4" /> });
    if (tags.product_type && tags.product_type.length > 0) list.push({ label: "Product Type", value: tags.product_type, icon: <Briefcase className="w-4 h-4" /> });
    if (tags.customer && tags.customer.length > 0) list.push({ label: "Customer", value: tags.customer, icon: <Users className="w-4 h-4" /> });
    if (tags.bottleneck && tags.bottleneck.length > 0) list.push({ label: "Bottleneck", value: tags.bottleneck, icon: <Crosshair className="w-4 h-4" /> });
    if (tags.readiness && tags.readiness.length > 0) list.push({ label: "Readiness", value: tags.readiness, icon: <Zap className="w-4 h-4" /> });
    if (tags.enabling_technology && tags.enabling_technology.length > 0) list.push({ label: "Enabling Technology", value: tags.enabling_technology, icon: <Zap className="w-4 h-4" /> });
    if (tags.founder_fit && tags.founder_fit.length > 0) list.push({ label: "Founder Fit", value: tags.founder_fit, icon: <Users className="w-4 h-4" /> });
    if (tags.outcomes && tags.outcomes.length > 0) list.push({ label: "Civilizational Outcomes", value: tags.outcomes, icon: <Globe className="w-4 h-4" /> });

    if (list.length === 0) return null;

    return (
        <section className="mb-24 max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-6 flex items-center">
                <span className="w-8 h-px bg-white/20 mr-4" /> Core Thesis Tags
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {list.map((t, idx) => (
                    <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-2 text-[var(--primary)] font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-3 opacity-80">
                            {t.icon}
                            <span>{t.label}</span>
                        </div>
                        <div className="text-white/90 font-light text-sm leading-relaxed">
                            {t.value.join(', ')}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function InlineTags({ label, tags, theme = 'default' }: { label?: string, tags?: string[], theme?: "amber" | "emerald" | "blue" | "purple" | "cyan" | "indigo" | "orange" | "zinc" | "rose" | "primary" | "fuchsia" | "teal" | "violet" | "default" }) {
    if (!tags || tags.length === 0) return null;

    const themeMap: Record<string, string> = {
        emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        amber: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
        primary: "border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]",
        blue: "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400",
        indigo: "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
        rose: "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-400",
        zinc: "border-zinc-500/20 bg-zinc-500/10 text-zinc-700 dark:text-zinc-400",
        purple: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400",
        fuchsia: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400",
        teal: "border-teal-500/20 bg-teal-500/10 text-teal-700 dark:text-teal-400",
        violet: "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-400",
        orange: "border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-400",
        cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
        default: "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-200"
    };

    const themeClass = themeMap[theme] || themeMap['default'];

    return (
        <span className="my-6 block">
            {label && (
                <span className="block text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                    {label}
                </span>
            )}
            <span className="inline-flex flex-wrap gap-1.5 items-center">
                {tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-1 rounded-full border text-[10px] sm:text-xs backdrop-blur-md ${themeClass}`}>
                        {tag}
                    </span>
                ))}
            </span>
        </span>
    );
}
