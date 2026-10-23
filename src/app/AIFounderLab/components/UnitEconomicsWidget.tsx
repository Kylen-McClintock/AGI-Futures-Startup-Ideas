"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export function UnitEconomicsWidget() {
    const [fellowsPerCohort, setFellowsPerCohort] = useState<number>(120);
    const [studioEquityPct, setStudioEquityPct] = useState<number>(16);
    const [breakevenPodPct, setBreakevenPodPct] = useState<number>(30);

    // 2.5 fellows per Venture Pod on average across 2-3 person squads
    const totalPods = Math.round(fellowsPerCohort / 2.5);
    const viablePods = Math.max(1, Math.round(totalPods * (breakevenPodPct / 100)));

    // Fellow debt saved vs. $210k 4-year university tuition + foregone earnings
    const cohortDebtSavedM = ((fellowsPerCohort * 210000) / 1000000).toFixed(1);

    // Annual Cash-Flow + Sponsor/Tuition Revenue per Cohort:
    // $14.5k avg sponsor prototype brief & residency revenue per fellow + $62k/yr HoldCo micro-SaaS cash share per viable pod
    const grossCohortCashM = (fellowsPerCohort * 14500 + viablePods * 62000) / 1000000;
    const campusAndComputeCostM = (fellowsPerCohort * 9200) / 1000000;
    const netCashMarginPct = Math.round(((grossCohortCashM - campusAndComputeCostM) / grossCohortCashM) * 100);

    // Expected Studio Portfolio Carry Value:
    // Blended power-law expected enterprise value of $16.5M per graduated Seed/HoldCo pod * Studio Equity %
    const expectedCarryValueM = (viablePods * 16.5 * (studioEquityPct / 100)).toFixed(1);

    return (
        <div className="bg-neutral-900/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Studio &amp; Campus Unit Economics Sandbox
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Cohort Cash-Flow &amp; Venture Carry Math
                    </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {netCashMarginPct}% Operating Cash Margin
                </span>
            </div>

            {/* 3 Interactive Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-black/40 p-5 rounded-2xl border border-white/5">
                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Fellows per Annual Cohort</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">{fellowsPerCohort} fellows</span>
                    </div>
                    <input
                        type="range"
                        min={60}
                        max={300}
                        step={20}
                        value={fellowsPerCohort}
                        onChange={(e) => setFellowsPerCohort(Number(e.target.value))}
                        className="w-full accent-[#f97316] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Fellows per Annual Cohort"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">60 (1 Campus)</span>
                        <span className="whitespace-nowrap">{totalPods} Venture Pods</span>
                        <span className="whitespace-nowrap">300 (Multi-Hub)</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Studio Equity Stake %</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">{studioEquityPct}% stake</span>
                    </div>
                    <input
                        type="range"
                        min={10}
                        max={25}
                        step={1}
                        value={studioEquityPct}
                        onChange={(e) => setStudioEquityPct(Number(e.target.value))}
                        className="w-full accent-[#f97316] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Studio Equity Stake Percentage in Spinouts"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">10% (Light)</span>
                        <span className="whitespace-nowrap">25% (Full Co-Build)</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Pods Reaching Seed / Cash-Flow</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">{breakevenPodPct}% ({viablePods} pods)</span>
                    </div>
                    <input
                        type="range"
                        min={15}
                        max={50}
                        step={5}
                        value={breakevenPodPct}
                        onChange={(e) => setBreakevenPodPct(Number(e.target.value))}
                        className="w-full accent-[#f97316] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Percent of Pods Reaching Seed or Cash-Flow Breakeven"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">15% (Conservative)</span>
                        <span className="whitespace-nowrap">50% (High Hit-Rate)</span>
                    </div>
                </div>
            </div>

            {/* 3 Full-Width Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Fellow Debt vs. University
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-emerald-400 font-semibold whitespace-nowrap">
                        $0 Debt
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                        Saves <span className="text-white/80 font-mono whitespace-nowrap">${cohortDebtSavedM}M</span> vs. 4-yr degree debt
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Annual Cash-Flow + Tuition Rev
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold whitespace-nowrap">
                        ${grossCohortCashM.toFixed(2)}M / yr
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                        HoldCo rev-share + enterprise briefs
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        Expected Studio Carry Value
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold whitespace-nowrap">
                        ${expectedCarryValueM}M
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                        Across <span className="whitespace-nowrap">{viablePods} spinouts</span> (<HoverAcronym acronym="MOIC" definition="Multiple on Invested Capital across studio seed checks and campus operating costs" theme="orange" /> ~5.4x)
                    </div>
                </div>
            </div>

            {/* Expandable Underlying Studio Assumptions */}
            <details className="group border-t border-white/10 pt-3.5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer flex items-center justify-between text-xs font-mono text-white/55 hover:text-white/90 transition-colors">
                    <span>Inspect Underlying Campus &amp; Spinout Unit Assumptions</span>
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                </summary>
                <div
                    className="pt-3.5 text-xs sm:text-sm text-white/70 space-y-2 font-light leading-relaxed"
                    style={{ overflowWrap: "break-word" }}
                >
                    <p className="m-0" style={{ textWrap: "pretty" }}>
                        • <strong className="text-white/90">Downside Protection via Operating Cash Flow:</strong> Unlike pure pre-seed funds that wait 8 to 10 years for liquidity, AI Founder Lab covers campus lease blocks (~$550/mo off-season university dorm wholesale rate) and inference compute from day one through enterprise prototype sponsorships, premium residency tiers, and cash-flowing micro-SaaS pods inside the studio HoldCo.
                    </p>
                    <p className="m-0" style={{ textWrap: "pretty" }}>
                        • <strong className="text-white/90">Power-Law Upside via Pre-Negotiated Spinout Equity:</strong> Because AFL provides co-founder matching, agentic build harnesses, initial B2B design partners, and the first $250k to $500k seed check, the studio earns a 12% to 20% common-equivalent stake at formation cost rather than competing in priced Series A auctions.
                    </p>
                </div>
            </details>
        </div>
    );
}

export default UnitEconomicsWidget;
