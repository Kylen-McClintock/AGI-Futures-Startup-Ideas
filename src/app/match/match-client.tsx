"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Copy, Loader2, Lock, RotateCcw, Sparkles } from "lucide-react";
import { runMatch, unlockBrief, type MatchBrief, type MatchPick } from "./actions";
import { ROLES, EXPERIENCE, CAPITAL, COMMITMENT, type RoleId, type ExperienceId, type CapitalId, type CommitmentId } from "@/lib/match/score";
import { SubscribeCTA } from "@/components/SubscribeCTA";
import { SITE_URL } from "@/lib/site";

export type MatchIdea = { slug: string; title: string; scoreTitle: string; href: string; image: StaticImageData };

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${active ? "bg-[#21de9a]/15 border-[#21de9a]/60 text-white shadow-[0_0_12px_rgba(33,222,154,0.15)]" : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"}`}
        >
            {children}
        </button>
    );
}

function Question({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
    return (
        <fieldset className="border-t border-white/10 pt-8">
            <legend className="sr-only">{title}</legend>
            <div className="flex items-baseline gap-3 mb-1">
                <span className="text-xs font-mono text-[#21de9a]">0{n}</span>
                <h2 className="text-xl sm:text-2xl font-serif text-white">{title}</h2>
            </div>
            {hint && <p className="text-sm text-white/45 font-light mb-4 ml-7">{hint}</p>}
            <div className="flex flex-wrap gap-2 ml-7 mt-3">{children}</div>
        </fieldset>
    );
}

export default function MatchClient({ ideas, sectors, initialSector }: { ideas: MatchIdea[]; sectors: string[]; initialSector?: string }) {
    const [roles, setRoles] = useState<RoleId[]>([]);
    const [experience, setExperience] = useState<ExperienceId | null>(null);
    const [capital, setCapital] = useState<CapitalId | null>(null);
    const [commitment, setCommitment] = useState<CommitmentId | null>(null);
    const [picked, setPicked] = useState<string[]>(initialSector ? [initialSector] : []);
    const [advantage, setAdvantage] = useState("");

    const [phase, setPhase] = useState<"form" | "loading" | "results">("form");
    const [error, setError] = useState("");
    const [matchId, setMatchId] = useState<string | null>(null);
    const [picks, setPicks] = useState<MatchPick[]>([]);
    const [brief, setBrief] = useState<MatchBrief | null>(null);
    const [briefState, setBriefState] = useState<"locked" | "loading" | "ready" | "error">("locked");
    const [briefError, setBriefError] = useState("");
    const [copied, setCopied] = useState(false);

    const toggle = <T,>(list: T[], v: T, set: (x: T[]) => void, max = 99) =>
        set(list.includes(v) ? list.filter(x => x !== v) : list.length >= max ? list : [...list, v]);
    const ready = roles.length > 0 && experience && capital && commitment;
    const byslug = (s: string) => ideas.find(i => i.slug === s);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ready) { setError("Answer questions 1–4 to get your match."); return; }
        setError("");
        setPhase("loading");
        window.scrollTo({ top: 0, behavior: "smooth" });
        const res = await runMatch({ roles, experience, capital, commitment, sectors: picked, advantage });
        if (!res.ok) { setError(res.error); setPhase("form"); return; }
        setMatchId(res.id);
        setPicks(res.picks);
        setBrief(null);
        setBriefState("locked");
        setPhase("results");
    };

    const onSubscribed = async (email: string) => {
        if (!matchId) return;
        setBriefState("loading");
        const res = await unlockBrief(matchId, email);
        if (res.ok) { setBrief(res.brief); setBriefState("ready"); }
        else { setBriefError(res.error); setBriefState("error"); }
    };

    const shareUrl = matchId ? `${SITE_URL}/match/${matchId}` : `${SITE_URL}/match`;
    const top = picks[0] ? byslug(picks[0].slug) : undefined;
    const shareText = top ? `My AGI-era startup match: ${top.title} (${picks[0].fit}% fit). Find yours:` : "Find the AGI-era startup you're built to build:";

    return (
        <main className="min-h-screen bg-[var(--background)] relative overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#21de9a]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 sm:py-32">
                <p className="text-xs font-mono uppercase tracking-widest text-[#21de9a] mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Founder Fit Matcher</p>
                <h1 className="text-4xl sm:text-6xl font-serif text-white leading-[1.1] tracking-tight mb-5">
                    Which AGI-era startup are <span className="italic font-light text-[#21de9a]">you</span> built to build?
                </h1>
                <p className="text-lg text-white/65 font-light max-w-2xl mb-12">
                    Six questions, about 60 seconds. We match your skills, capital and conviction against {ideas.length} open-sourced theses and show you where you have an unfair advantage.
                </p>

                {phase === "loading" && (
                    <div className="glass-panel rounded-3xl border border-white/10 p-12 flex flex-col items-center text-center gap-4" role="status">
                        <Loader2 className="w-8 h-8 text-[#21de9a] animate-spin" />
                        <p className="text-white text-lg">Scoring {ideas.length} ideas against your profile…</p>
                        <p className="text-white/45 text-sm font-light">Weighing founder fit, capital intensity, difficulty and your unfair advantage.</p>
                    </div>
                )}

                {phase === "form" && (
                    <form onSubmit={submit} className="space-y-8">
                        <Question n={1} title="What do you bring?" hint="Pick up to three.">
                            {ROLES.map(r => <Chip key={r.id} active={roles.includes(r.id)} onClick={() => toggle(roles, r.id, setRoles, 3)}>{r.label}</Chip>)}
                        </Question>
                        <Question n={2} title="How experienced are you?">
                            {EXPERIENCE.map(x => <Chip key={x.id} active={experience === x.id} onClick={() => setExperience(x.id)}>{x.label}</Chip>)}
                        </Question>
                        <Question n={3} title="How would you fund it?">
                            {CAPITAL.map(x => <Chip key={x.id} active={capital === x.id} onClick={() => setCapital(x.id)}>{x.label}</Chip>)}
                        </Question>
                        <Question n={4} title="How committed are you?">
                            {COMMITMENT.map(x => <Chip key={x.id} active={commitment === x.id} onClick={() => setCommitment(x.id)}>{x.label}</Chip>)}
                        </Question>
                        <Question n={5} title="Which sectors pull at you?" hint="Optional. Skip it to stay open to anything.">
                            {sectors.map(s => <Chip key={s} active={picked.includes(s)} onClick={() => toggle(picked, s, setPicked, 6)}>{s}</Chip>)}
                        </Question>
                        <fieldset className="border-t border-white/10 pt-8">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-xs font-mono text-[#21de9a]">06</span>
                                <label htmlFor="advantage" className="text-xl sm:text-2xl font-serif text-white">What&apos;s your unfair advantage?</label>
                            </div>
                            <p className="text-sm text-white/45 font-light mb-4 ml-7">Optional, but this is what makes the match personal. Industry access, rare skills, an obsession, a network.</p>
                            <div className="ml-7">
                                <textarea
                                    id="advantage"
                                    value={advantage}
                                    onChange={e => setAdvantage(e.target.value.slice(0, 500))}
                                    rows={3}
                                    placeholder="e.g. 8 years running ops at a water utility in East Africa; I know every procurement officer in the region."
                                    className="w-full bg-black/50 border border-white/15 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#21de9a] transition-colors placeholder:text-white/25 font-light"
                                />
                                <p className="text-right text-xs text-white/30 mt-1">{advantage.length}/500</p>
                            </div>
                        </fieldset>

                        {error && <p className="text-red-400 ml-7" role="alert">{error}</p>}
                        <div className="ml-7">
                            <button type="submit" disabled={!ready} className="inline-flex items-center gap-2 rounded-full bg-[#21de9a] text-black font-semibold px-8 py-4 text-sm font-mono uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed">
                                Find my match <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                )}

                {phase === "results" && (
                    <div className="space-y-10">
                        <div className="space-y-4">
                            {picks.map((p, idx) => {
                                const idea = byslug(p.slug);
                                if (!idea) return null;
                                return (
                                    <Link key={p.slug} href={idea.href} className={`group relative block glass-panel rounded-3xl border overflow-hidden transition-colors ${idx === 0 ? "border-[#21de9a]/50" : "border-white/10 hover:border-white/30"}`}>
                                        <div className="absolute inset-0 z-0">
                                            <Image src={idea.image} alt="" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
                                        </div>
                                        <div className="relative z-10 p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-5">
                                            <div className="shrink-0 w-20 h-20 rounded-full border-2 border-[#21de9a]/60 flex flex-col items-center justify-center bg-black/50">
                                                <span className="text-2xl font-semibold text-white leading-none">{p.fit}%</span>
                                                <span className="text-[9px] font-mono uppercase tracking-widest text-[#21de9a]">fit</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">{idx === 0 ? "Your #1 match" : `Match #${idx + 1}`}</p>
                                                <h2 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-[#21de9a] transition-colors">{idea.title}</h2>
                                                <p className="text-white/70 font-medium mb-2">{idea.scoreTitle}</p>
                                                <p className="text-white/60 font-light text-sm leading-relaxed">{p.why}</p>
                                            </div>
                                            <ArrowRight className="hidden sm:block w-5 h-5 text-white/40 group-hover:text-[#21de9a] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Share */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/40 mr-2">Share your match</span>
                            <a className="text-sm border border-white/15 rounded-full px-4 py-2 text-white/75 hover:text-white hover:border-white/40" target="_blank" rel="noopener noreferrer" href={`https://x.com/intent/post?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}>X</a>
                            <a className="text-sm border border-white/15 rounded-full px-4 py-2 text-white/75 hover:text-white hover:border-white/40" target="_blank" rel="noopener noreferrer" href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}>Threads</a>
                            <a className="text-sm border border-white/15 rounded-full px-4 py-2 text-white/75 hover:text-white hover:border-white/40" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}>LinkedIn</a>
                            <button type="button" onClick={async () => { await navigator.clipboard.writeText(`${shareText} ${shareUrl}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="inline-flex items-center gap-1.5 text-sm border border-white/15 rounded-full px-4 py-2 text-white/75 hover:text-white hover:border-white/40">
                                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />} {copied ? "Copied" : "Copy link"}
                            </button>
                        </div>

                        {/* Brief (soft email gate) */}
                        {top && briefState !== "ready" && (
                            <div className="glass-panel rounded-3xl border border-[#21de9a]/30 p-8 sm:p-10">
                                <div className="flex items-center gap-2 text-[#21de9a] text-xs font-mono uppercase tracking-widest mb-3"><Lock className="w-4 h-4" /> Personalized founder brief</div>
                                <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">Your plan for building {top.title}</h2>
                                <p className="text-white/60 font-light mb-6">Why you specifically, a sequenced first 30 days, a two-week kill-or-commit experiment, and the risks unique to you. Free. You&apos;ll also get one new AGI-era idea every week.</p>
                                {briefState === "loading" ? (
                                    <div className="flex items-center gap-3 text-white/70" role="status"><Loader2 className="w-5 h-5 animate-spin text-[#21de9a]" /> Writing your brief…</div>
                                ) : matchId ? (
                                    <SubscribeCTA variant="compact" source="match" ideaSlug={top.slug} buttonLabel="Unlock brief" onSubscribed={onSubscribed} />
                                ) : (
                                    <SubscribeCTA variant="compact" source="match" ideaSlug={top.slug} />
                                )}
                                {briefState === "error" && <p className="text-red-400 text-sm mt-3">{briefError} <button className="underline" onClick={() => setBriefState("locked")}>Try again</button></p>}
                            </div>
                        )}

                        {brief && top && (
                            <article className="glass-panel rounded-3xl border border-[#21de9a]/30 p-8 sm:p-10 space-y-8">
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-widest text-[#21de9a] mb-2">Founder brief · {top.title}</p>
                                    <h2 className="text-3xl font-serif text-white mb-4">{brief.headline}</h2>
                                    <p className="text-white/75 font-light leading-relaxed">{brief.whyYou}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-3">Your first 30 days</h3>
                                    <ol className="space-y-3">
                                        {brief.first30Days.map((s, i) => (
                                            <li key={i} className="flex gap-4 text-white/80 font-light"><span className="shrink-0 w-6 h-6 rounded-full border border-[#21de9a]/50 text-[#21de9a] text-xs flex items-center justify-center">{i + 1}</span>{s}</li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="border-l-2 border-[#21de9a] pl-5">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-2">Two-week experiment</h3>
                                    <p className="text-white/80 font-light">{brief.firstExperiment}</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-3">Risks specific to you</h3>
                                        <ul className="space-y-2 text-white/75 font-light list-disc ml-5">{brief.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-3">Talk to these people first</h3>
                                        <ul className="space-y-2 text-white/75 font-light list-disc ml-5">{brief.whoToTalkTo.map((r, i) => <li key={i}>{r}</li>)}</ul>
                                    </div>
                                </div>
                                <Link href={top.href} className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#21de9a] hover:underline">Read the full {top.title} thesis <ArrowRight className="w-4 h-4" /></Link>
                            </article>
                        )}

                        <button type="button" onClick={() => { setPhase("form"); setPicks([]); setMatchId(null); }} className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
                            <RotateCcw className="w-4 h-4" /> Adjust my answers
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
