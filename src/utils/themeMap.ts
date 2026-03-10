export type ThemeColor = 'emerald' | 'amber' | 'primary' | 'blue' | 'indigo' | 'rose' | 'zinc' | 'purple' | 'fuchsia' | 'teal' | 'violet' | 'orange' | 'cyan' | 'default';

export interface ThemeConfig {
    // Shared Colors (Hex codes for SVGs and inline styles)
    hexPrimary: string;
    hexSecondary: string;
    hexTertiary: string;

    // Tags `<InlineTags>`
    tagClass: string;

    // Hover Acronym `<HoverAcronym>`
    acronymText: string;
    acronymPopupBorder: string;
    acronymPopupLabel: string;
    acronymTriangle: string;

    // Expandable Citation `<ExpandableCitation>`
    citationButton: string;
    citationPopupLabel: string;
    citationLink: string;
}

export const themeMap: Record<ThemeColor, ThemeConfig> = {
    emerald: {
        hexPrimary: "#10b981", // emerald-500
        hexSecondary: "#34d399", // emerald-400
        hexTertiary: "#6ee7b7", // emerald-300
        tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        acronymText: "text-emerald-300 border-b border-emerald-500/30 group-hover:border-emerald-400 group-hover:text-emerald-200",
        acronymPopupBorder: "border-emerald-500/20",
        acronymPopupLabel: "text-emerald-300",
        acronymTriangle: "border-emerald-500/20",
        citationButton: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/30 focus:ring-emerald-500/50",
        citationPopupLabel: "text-emerald-400",
        citationLink: "hover:text-emerald-400"
    },
    amber: {
        hexPrimary: "#f59e0b", // amber-500
        hexSecondary: "#fbbf24", // amber-400
        hexTertiary: "#fcd34d", // amber-300
        tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
        acronymText: "text-amber-300 border-b border-amber-500/30 group-hover:border-amber-400 group-hover:text-amber-200",
        acronymPopupBorder: "border-amber-500/20",
        acronymPopupLabel: "text-amber-300",
        acronymTriangle: "border-amber-500/20",
        citationButton: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/30 focus:ring-amber-500/50",
        citationPopupLabel: "text-amber-400",
        citationLink: "hover:text-amber-400"
    },
    primary: { // Mint Green
        hexPrimary: "#2dd4bf", // teal-400 (Mintish)
        hexSecondary: "#5eead4", // teal-300
        hexTertiary: "#99f6e4", // teal-200
        tagClass: "border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]",
        acronymText: "text-[var(--primary)] border-b border-[var(--primary)]/30 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] opacity-80 hover:opacity-100",
        acronymPopupBorder: "border-[var(--primary)]/20",
        acronymPopupLabel: "text-[var(--primary)]",
        acronymTriangle: "border-[var(--primary)]/20",
        citationButton: "bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 border-[var(--primary)]/30 focus:ring-[var(--primary)]/50",
        citationPopupLabel: "text-[var(--primary)]",
        citationLink: "hover:text-[var(--primary)]"
    },
    blue: {
        hexPrimary: "#3b82f6", // blue-500
        hexSecondary: "#60a5fa", // blue-400
        hexTertiary: "#93c5fd", // blue-300
        tagClass: "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400",
        acronymText: "text-blue-300 border-b border-blue-500/30 group-hover:border-blue-400 group-hover:text-blue-200",
        acronymPopupBorder: "border-blue-500/20",
        acronymPopupLabel: "text-blue-300",
        acronymTriangle: "border-blue-500/20",
        citationButton: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/30 focus:ring-blue-500/50",
        citationPopupLabel: "text-blue-400",
        citationLink: "hover:text-blue-400"
    },
    indigo: {
        hexPrimary: "#6366f1", // indigo-500
        hexSecondary: "#818cf8", // indigo-400
        hexTertiary: "#a5b4fc", // indigo-300
        tagClass: "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
        acronymText: "text-indigo-300 border-b border-indigo-500/30 group-hover:border-indigo-400 group-hover:text-indigo-200",
        acronymPopupBorder: "border-indigo-500/20",
        acronymPopupLabel: "text-indigo-300",
        acronymTriangle: "border-indigo-500/20",
        citationButton: "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-indigo-500/30 focus:ring-indigo-500/50",
        citationPopupLabel: "text-indigo-400",
        citationLink: "hover:text-indigo-400"
    },
    rose: {
        hexPrimary: "#f43f5e", // rose-500
        hexSecondary: "#fb7185", // rose-400
        hexTertiary: "#fda4af", // rose-300
        tagClass: "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-400",
        acronymText: "text-rose-300 border-b border-rose-500/30 group-hover:border-rose-400 group-hover:text-rose-200",
        acronymPopupBorder: "border-rose-500/20",
        acronymPopupLabel: "text-rose-300",
        acronymTriangle: "border-rose-500/20",
        citationButton: "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border-rose-500/30 focus:ring-rose-500/50",
        citationPopupLabel: "text-rose-400",
        citationLink: "hover:text-rose-400"
    },
    zinc: {
        hexPrimary: "#71717a", // zinc-500
        hexSecondary: "#a1a1aa", // zinc-400
        hexTertiary: "#d4d4d8", // zinc-300
        tagClass: "border-zinc-500/20 bg-zinc-500/10 text-zinc-700 dark:text-zinc-400",
        acronymText: "text-zinc-300 border-b border-zinc-500/30 group-hover:border-zinc-400 group-hover:text-zinc-200",
        acronymPopupBorder: "border-zinc-500/20",
        acronymPopupLabel: "text-zinc-300",
        acronymTriangle: "border-zinc-500/20",
        citationButton: "bg-zinc-500/10 text-zinc-500 hover:bg-zinc-500/20 border-zinc-500/30 focus:ring-zinc-500/50",
        citationPopupLabel: "text-zinc-400",
        citationLink: "hover:text-zinc-400"
    },
    purple: {
        hexPrimary: "#a855f7", // purple-500
        hexSecondary: "#c084fc", // purple-400
        hexTertiary: "#d8b4fe", // purple-300
        tagClass: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400",
        acronymText: "text-purple-300 border-b border-purple-500/30 group-hover:border-purple-400 group-hover:text-purple-200",
        acronymPopupBorder: "border-purple-500/20",
        acronymPopupLabel: "text-purple-300",
        acronymTriangle: "border-purple-500/20",
        citationButton: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/30 focus:ring-purple-500/50",
        citationPopupLabel: "text-purple-400",
        citationLink: "hover:text-purple-400"
    },
    fuchsia: {
        hexPrimary: "#d946ef", // fuchsia-500
        hexSecondary: "#e879f9", // fuchsia-400
        hexTertiary: "#f0abfc", // fuchsia-300
        tagClass: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400",
        acronymText: "text-fuchsia-300 border-b border-fuchsia-500/30 group-hover:border-fuchsia-400 group-hover:text-fuchsia-200",
        acronymPopupBorder: "border-fuchsia-500/20",
        acronymPopupLabel: "text-fuchsia-300",
        acronymTriangle: "border-fuchsia-500/20",
        citationButton: "bg-fuchsia-500/10 text-fuchsia-500 hover:bg-fuchsia-500/20 border-fuchsia-500/30 focus:ring-fuchsia-500/50",
        citationPopupLabel: "text-fuchsia-400",
        citationLink: "hover:text-fuchsia-400"
    },
    teal: {
        hexPrimary: "#14b8a6", // teal-500
        hexSecondary: "#2dd4bf", // teal-400
        hexTertiary: "#5eead4", // teal-300
        tagClass: "border-teal-500/20 bg-teal-500/10 text-teal-700 dark:text-teal-400",
        acronymText: "text-teal-300 border-b border-teal-500/30 group-hover:border-teal-400 group-hover:text-teal-200",
        acronymPopupBorder: "border-teal-500/20",
        acronymPopupLabel: "text-teal-300",
        acronymTriangle: "border-teal-500/20",
        citationButton: "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 border-teal-500/30 focus:ring-teal-500/50",
        citationPopupLabel: "text-teal-400",
        citationLink: "hover:text-teal-400"
    },
    violet: {
        hexPrimary: "#8b5cf6", // violet-500
        hexSecondary: "#a78bfa", // violet-400
        hexTertiary: "#c4b5fd", // violet-300
        tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-400",
        acronymText: "text-violet-300 border-b border-violet-500/30 group-hover:border-violet-400 group-hover:text-violet-200",
        acronymPopupBorder: "border-violet-500/20",
        acronymPopupLabel: "text-violet-300",
        acronymTriangle: "border-violet-500/20",
        citationButton: "bg-violet-500/10 text-violet-500 hover:bg-violet-500/20 border-violet-500/30 focus:ring-violet-500/50",
        citationPopupLabel: "text-violet-400",
        citationLink: "hover:text-violet-400"
    },
    orange: {
        hexPrimary: "#f97316", // orange-500
        hexSecondary: "#fb923c", // orange-400
        hexTertiary: "#fdba74", // orange-300
        tagClass: "border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-400",
        acronymText: "text-orange-300 border-b border-orange-500/30 group-hover:border-orange-400 group-hover:text-orange-200",
        acronymPopupBorder: "border-orange-500/20",
        acronymPopupLabel: "text-orange-300",
        acronymTriangle: "border-orange-500/20",
        citationButton: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/30 focus:ring-orange-500/50",
        citationPopupLabel: "text-orange-400",
        citationLink: "hover:text-orange-400"
    },
    cyan: {
        hexPrimary: "#06b6d4", // cyan-500
        hexSecondary: "#22d3ee", // cyan-400
        hexTertiary: "#67e8f9", // cyan-300
        tagClass: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
        acronymText: "text-cyan-300 border-b border-cyan-500/30 group-hover:border-cyan-400 group-hover:text-cyan-200",
        acronymPopupBorder: "border-cyan-500/20",
        acronymPopupLabel: "text-cyan-300",
        acronymTriangle: "border-cyan-500/20",
        citationButton: "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/30 focus:ring-cyan-500/50",
        citationPopupLabel: "text-cyan-400",
        citationLink: "hover:text-cyan-400"
    },
    default: {
        hexPrimary: "#52525b", // zinc-600
        hexSecondary: "#71717a", // zinc-500
        hexTertiary: "#a1a1aa", // zinc-400
        tagClass: "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-200",
        acronymText: "text-zinc-400 border-b border-zinc-500/30 group-hover:border-zinc-300 group-hover:text-zinc-300",
        acronymPopupBorder: "border-zinc-500/20",
        acronymPopupLabel: "text-zinc-400",
        acronymTriangle: "border-zinc-500/20",
        citationButton: "bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20 border-zinc-500/30 focus:ring-zinc-500/50",
        citationPopupLabel: "text-zinc-400",
        citationLink: "hover:text-zinc-300"
    }
};
