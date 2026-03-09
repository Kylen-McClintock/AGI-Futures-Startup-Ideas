import React from "react";
import { Layers, Crosshair, Zap, Users, Globe, Briefcase } from "lucide-react";

interface TagInfo {
    label: string;
    value: string;
    icon: React.ReactNode;
}

interface ProjectTagsProps {
    tags: {
        sector?: string;
        bottleneck?: string;
        readiness?: string;
        customer?: string;
        outcomes?: string;
        productType?: string;
    }
}

export function ProjectTags({ tags }: ProjectTagsProps) {
    const list: TagInfo[] = [];
    if (tags.sector) list.push({ label: "Sector", value: tags.sector, icon: <Layers className="w-4 h-4" /> });
    if (tags.productType) list.push({ label: "Product Type", value: tags.productType, icon: <Briefcase className="w-4 h-4" /> });
    if (tags.customer) list.push({ label: "Customer", value: tags.customer, icon: <Users className="w-4 h-4" /> });
    if (tags.bottleneck) list.push({ label: "Bottleneck", value: tags.bottleneck, icon: <Crosshair className="w-4 h-4" /> });
    if (tags.readiness) list.push({ label: "Readiness", value: tags.readiness, icon: <Zap className="w-4 h-4" /> });
    if (tags.outcomes) list.push({ label: "Civilizational Outcomes", value: tags.outcomes, icon: <Globe className="w-4 h-4" /> });

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
                            {t.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
