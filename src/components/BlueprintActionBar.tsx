"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Copy, Check, Download, Lock, Terminal, Users, ChevronDown, Sparkles, Bookmark } from "lucide-react";
import { useInterest } from "@/components/InterestProvider";
import { generateAiBuildSpec } from "@/data/buildSpecs";
import { createClient } from "@/utils/supabase/client";
import { trackEvent } from "@/lib/analytics";

const INTENT_OPTIONS = [
    { id: "cofounder_tech", label: "Looking for Technical Co-Founder" },
    { id: "cofounder_gtm", label: "Looking for GTM / Operator Co-Founder" },
    { id: "exploring_mvp", label: "Prototyping / Exploring Space" },
    { id: "angel_partner", label: "Would Angel-Back / Design-Partner" }
] as const;

type PublicBuilder = {
    handle: string | null;
    name: string | null;
    avatar_url: string | null;
};

export function BlueprintActionBar({ projectSlug }: { projectSlug: string }) {
    const { savedSlugs, userEmail, toggleInterest, openAuthModal } = useInterest();
    const [copied, setCopied] = useState(false);
    const [selectedIntent, setSelectedIntent] = useState<string>("exploring_mvp");
    const [builders, setBuilders] = useState<PublicBuilder[]>([]);
    const [totalInterested, setTotalInterested] = useState<number>(0);

    const isInterested = savedSlugs.has(projectSlug);
    const hasEmailAccount = Boolean(userEmail);
    const specMarkdown = generateAiBuildSpec(projectSlug);

    // Load locally saved intent preference & public builder list
    useEffect(() => {
        try {
            const savedIntent = localStorage.getItem(`agif_intent_${projectSlug}`);
            if (savedIntent) setSelectedIntent(savedIntent);
        } catch {}

        let cancelled = false;
        async function fetchPublicBuilders() {
            try {
                const supabase = createClient();
                const { data: project } = await supabase
                    .from("projects")
                    .select("id")
                    .eq("slug", projectSlug)
                    .single();
                if (!project?.id || cancelled) return;

                const { data: rows, count } = await supabase
                    .from("saved_ideas")
                    .select("profile:profiles(handle, name, avatar_url)", { count: "exact" })
                    .eq("project_id", project.id)
                    .limit(6);

                if (cancelled) return;
                if (typeof count === "number") setTotalInterested(count);
                if (rows) {
                    const extracted: PublicBuilder[] = rows
                        .map((r: any) => (Array.isArray(r.profile) ? r.profile[0] : r.profile))
                        .filter((p: any) => p && (p.handle || p.name));
                    setBuilders(extracted);
                }
            } catch {
                // Gracefully degrade if RLS restricts public saved_ideas reads
            }
        }
        fetchPublicBuilders();
        return () => {
            cancelled = true;
        };
    }, [projectSlug, isInterested]);

    const handleCopySpec = async () => {
        if (!hasEmailAccount) {
            openAuthModal({
                headline: "Access the AI Build Spec",
                subline: "Create a free Builder account with your email to copy the full Cursor / Claude Code / Antigravity starter prompt, database schema, and 45-day pilot checklist.",
                pendingAction: { type: "unlock_spec", slug: projectSlug }
            });
            return;
        }

        await navigator.clipboard.writeText(specMarkdown);
        setCopied(true);
        trackEvent("build_spec_copied", { slug: projectSlug });
        setTimeout(() => setCopied(false), 3000);
    };

    const handleDownloadSpec = () => {
        if (!hasEmailAccount) {
            handleCopySpec();
            return;
        }
        const blob = new Blob([specMarkdown], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${projectSlug}-ai-build-spec.md`;
        a.click();
        URL.revokeObjectURL(url);
        trackEvent("build_spec_downloaded", { slug: projectSlug });
    };

    const handleSelectIntent = (intentId: string) => {
        setSelectedIntent(intentId);
        try {
            localStorage.setItem(`agif_intent_${projectSlug}`, intentId);
        } catch {}
        trackEvent("builder_intent_selected", { slug: projectSlug, intent: intentId });
        if (!isInterested) {
            toggleInterest(projectSlug, intentId);
        }
    };

    return (
        <div
            id="builder-launchpad"
            className="scroll-mt-28 max-w-4xl mx-auto mb-16 rounded-3xl border border-[var(--primary,#21de9a)]/30 bg-[#070d0b]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] relative overflow-hidden"
        >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary,#21de9a)]/10 rounded-full blur-[110px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--primary,#21de9a)] mb-2">
                        <Terminal className="w-3.5 h-3.5 shrink-0" />
                        From Blueprint to Running Repo
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2" style={{ textWrap: "balance" }}>
                        Ready to Prototype or Co-Found This Thesis?
                    </h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                        Grab the structured <strong className="text-white font-medium">AI Coding Agent Starter Spec</strong> (MVP architecture, TypeScript schema, and 45-day pilot pass gates for Cursor, Claude Code, or Antigravity), or signal your builder role below.
                    </p>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <button
                        type="button"
                        onClick={handleCopySpec}
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary,#21de9a)] hover:opacity-90 text-stone-950 font-semibold px-5 py-3.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 shrink-0" />
                                Copied Build Spec!
                            </>
                        ) : hasEmailAccount ? (
                            <>
                                <Copy className="w-4 h-4 shrink-0" />
                                Copy AI Build Spec
                            </>
                        ) : (
                            <>
                                <Lock className="w-3.5 h-3.5 shrink-0" />
                                Copy AI Build Spec
                            </>
                        )}
                    </button>

                    {hasEmailAccount && (
                        <button
                            type="button"
                            onClick={handleDownloadSpec}
                            aria-label="Download Markdown Build Spec"
                            title="Download .md spec"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/85 px-3.5 py-3.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                        >
                            <Download className="w-4 h-4 shrink-0" />
                            <span>.MD</span>
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={() => toggleInterest(projectSlug, selectedIntent)}
                        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            isInterested
                                ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-300"
                                : "bg-white/5 hover:bg-white/10 border-white/15 text-white/85"
                        }`}
                    >
                        <Bookmark className={`w-4 h-4 shrink-0 ${isInterested ? "fill-emerald-300 text-emerald-300" : ""}`} />
                        <span>{isInterested ? "Saved to Profile" : "I'd Build / Back This"}</span>
                    </button>
                </div>
            </div>

            {/* Co-Founder / Builder Intent Pills + Cold-Start-Safe Social Signal */}
            <div className="pt-5 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/45 mb-2">
                        Optional Builder Signal (Select to Raise Your Hand):
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {INTENT_OPTIONS.map((opt) => {
                            const active = isInterested && selectedIntent === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => handleSelectIntent(opt.id)}
                                    className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer leading-snug ${
                                        active
                                            ? "bg-[var(--primary,#21de9a)]/20 border-[var(--primary,#21de9a)]/60 text-white font-medium"
                                            : "bg-white/[0.03] border-white/10 text-white/65 hover:border-white/25 hover:text-white"
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Cold-Start-Safe Social Signal: Never show "0 Interested" */}
                <div className="shrink-0 bg-black/45 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <Users className="w-4 h-4 text-[var(--primary,#21de9a)] shrink-0" />
                    {builders.length >= 1 ? (
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <div className="flex -space-x-2">
                                {builders.slice(0, 4).map((b, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 rounded-full bg-stone-800 border border-black overflow-hidden flex items-center justify-center text-[10px] font-mono text-white"
                                        title={b.handle ? `@${b.handle}` : b.name ?? "Builder"}
                                    >
                                        {b.avatar_url ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={b.avatar_url} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            (b.name?.[0] || b.handle?.[0] || "B").toUpperCase()
                                        )}
                                    </div>
                                ))}
                            </div>
                            <span className="text-white/80">
                                {builders[0]?.handle ? (
                                    <Link href={`/builder/${builders[0].handle}`} className="text-white font-medium hover:underline">
                                        @{builders[0].handle}
                                    </Link>
                                ) : (
                                    <span className="text-white font-medium">{builders[0]?.name || "1 builder"}</span>
                                )}
                                {totalInterested > 1 ? ` + ${totalInterested - 1} exploring` : " exploring this thesis"}
                            </span>
                        </div>
                    ) : (
                        <span className="text-xs text-white/75 font-mono">
                            Be a <strong className="text-white">Founding Builder</strong> on this thesis
                        </span>
                    )}
                </div>
            </div>

            {/* Preview Drawer (Shows full spec when signed in, or teaser + access CTA when signed out) */}
            <details className="mt-5 bg-black/50 border border-white/10 rounded-2xl overflow-hidden group [&_summary::-webkit-details-marker]:hidden relative z-10">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between gap-2 text-xs font-mono text-white/65 hover:text-white transition-colors select-none">
                    <span className="inline-flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary,#21de9a)] shrink-0" />
                        {hasEmailAccount
                            ? "Preview Full AI Coding Agent Spec (.MD)"
                            : "Preview What's Inside the AI Build Spec (Free Builder Account Required)"}
                    </span>
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform shrink-0" />
                </summary>
                <div className="p-4 sm:p-5 border-t border-white/10">
                    {hasEmailAccount ? (
                        <pre className="text-xs font-mono text-white/85 whitespace-pre-wrap break-words bg-black/60 p-4 rounded-xl border border-white/5 max-h-80 overflow-y-auto m-0">
                            {specMarkdown}
                        </pre>
                    ) : (
                        <div className="space-y-3">
                            <pre className="text-xs font-mono text-white/55 whitespace-pre-wrap break-words bg-black/60 p-4 rounded-xl border border-white/5 m-0 select-none">
                                {specMarkdown.split("\n").slice(0, 11).join("\n")}
                                {"\n\n[ ... Sign in with email to view full MVP architecture, schema & 45-day pass gates ... ]"}
                            </pre>
                            <button
                                type="button"
                                onClick={handleCopySpec}
                                className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary,#21de9a)] text-stone-950 font-semibold px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer"
                            >
                                <Lock className="w-3.5 h-3.5 shrink-0" />
                                Sign In With Email to Read &amp; Copy Full Spec
                            </button>
                        </div>
                    )}
                </div>
            </details>
        </div>
    );
}
