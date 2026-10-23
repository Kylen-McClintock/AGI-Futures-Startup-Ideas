"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";

export default function UnitEconomicsWidget() {
    const [monthlyPrice, setMonthlyPrice] = useState<number>(29);
    const [retention12Mo, setRetention12Mo] = useState<number>(64);
    const [viralCoefficient, setViralCoefficient] = useState<number>(0.35);

    // Monthly inference + voice roleplay + encrypted graph storage cost per active couple
    const monthlyInferenceAndStorageCost = 2.15;
    const paymentProcessingPct = 0.045;
    const paidCAC = 48;

    // Effective average lifetime in months modeled from 12-month couple retention rate
    const avgLifetimeMonths = Math.round((8 + (retention12Mo / 100) * 26) * 10) / 10;
    const grossMonthlyMarginPerCouple = monthlyPrice * (1 - paymentProcessingPct) - monthlyInferenceAndStorageCost;
    const netMarginPct = Math.round((grossMonthlyMarginPerCouple / monthlyPrice) * 100);

    // Viral multiplier from woman-to-woman recommendations and premarital / anniversary gifting
    const viralMultiplier = 1 / Math.max(0.25, 1 - viralCoefficient);
    const effectiveCAC = Math.round(paidCAC / viralMultiplier);
    const ltvPerCouple = Math.round(grossMonthlyMarginPerCouple * avgLifetimeMonths);
    const ltvToCac = (ltvPerCouple / Math.max(1, effectiveCAC)).toFixed(1);

    // Annualized Cohort ARR per 10,000 initially acquired couples (including viral expansion & retention)
    const activeCouplesFrom10kCohort = 10000 * viralMultiplier * (retention12Mo / 100);
    const annualizedCohortARR = (activeCouplesFrom10kCohort * monthlyPrice * 12) / 1_000_000;

    return (
        <div className="bg-[#0a0f14]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Unit Economics &amp; Retention Sandbox
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Couple Subscription &amp; Viral Cohort Math
                    </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {netMarginPct}% Net Contribution Margin
                </span>
            </div>

            {/* 3 Full-Width Metric Cards (Visible by Default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        LTV per Couple
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${ltvPerCouple}
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        ~{avgLifetimeMonths} mo avg life • {ltvToCac}x LTV:CAC
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Net Contribution Margin
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold">
                        ${grossMonthlyMarginPerCouple.toFixed(2)}/mo
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        {netMarginPct}% margin after $2.15 AI &amp; voice
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        Annualized Cohort ARR / 10k Couples
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${annualizedCohortARR.toFixed(2)}M
                    </div>
                    <div className="text-xs text-white/60 mt-1 leading-snug">
                        ${effectiveCAC} effective CAC w/ viral loop
                    </div>
                </div>
            </div>

            {/* Expandable Sliders & Underlying Assumptions Drawer */}
            <details className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/65 hover:text-white transition-colors select-none">
                    <span>Stress-Test Model Sliders &amp; Retention Assumptions</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-2.5 py-0.5 rounded-full">
                            ${monthlyPrice}/mo • {retention12Mo}% 12m ret • {viralCoefficient.toFixed(2)}k
                        </span>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                    </div>
                </summary>
                <div className="p-4 sm:p-5 border-t border-white/10 space-y-5">
                    <div className="space-y-5">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Monthly Couple Subscription Price (Full Dyadic Loop + Voice Roleplay)</span>
                                <span className="text-[var(--secondary)] font-semibold">${monthlyPrice}/mo</span>
                            </div>
                            <input
                                type="range"
                                min={19}
                                max={49}
                                step={2}
                                value={monthlyPrice}
                                onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                                className="w-full accent-[#f43f5e] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Monthly Couple Subscription Price"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>$19/mo (Entry Tier)</span>
                                <span>$49/mo (Couple + Unlimited Voice)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">12-Month Couple Retention Rate (Anchored by Sunday Sync Ritual)</span>
                                <span className="text-[var(--secondary)] font-semibold">{retention12Mo}%</span>
                            </div>
                            <input
                                type="range"
                                min={30}
                                max={85}
                                step={2}
                                value={retention12Mo}
                                onChange={(e) => setRetention12Mo(Number(e.target.value))}
                                className="w-full accent-[#f43f5e] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="12-Month Couple Retention Rate"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>30% (Static Quiz Apps)</span>
                                <span>85% (Weekly Ritual + Memory Graph)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Referral &amp; Gift Viral Coefficient (Friend-to-Friend + Anniversary Gifting)</span>
                                <span className="text-[var(--secondary)] font-semibold">{viralCoefficient.toFixed(2)}k</span>
                            </div>
                            <input
                                type="range"
                                min={0.1}
                                max={0.65}
                                step={0.05}
                                value={viralCoefficient}
                                onChange={(e) => setViralCoefficient(Number(e.target.value))}
                                className="w-full accent-[#f43f5e] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Referral and Gift Viral Coefficient"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>0.10 (Paid Acquisition Only)</span>
                                <span>0.65 (High Organic Word-of-Mouth)</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3.5 border-t border-white/10 text-xs sm:text-sm text-white/70 space-y-2 font-light leading-relaxed">
                        <p className="m-0" style={{ textWrap: "pretty" }}>
                            • <strong className="text-white/90">AI Inference &amp; Voice COGS ($2.15/mo per couple):</strong> Covers 4 weekly dyadic sync analyses, daily personalized micro-prompt generation, encrypted vector memory updates, and ~12 minutes/month of sub-second voice roleplay rehearsal.
                        </p>
                        <p className="m-0" style={{ textWrap: "pretty" }}>
                            • <strong className="text-white/90">Why Dyadic Retention Beats Single-Player Wellness Apps:</strong> Single-player meditation or journaling apps suffer high 60-day churn because quitting is invisible. Attune anchors to a shared Sunday couple ritual where both partners see tangible weekly progress, creating bilateral accountability and deep memory lock-in.
                        </p>
                    </div>
                </div>
            </details>
        </div>
    );
}
