"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export default function UnitEconomicsWidget() {
    const [kitPrice, setKitPrice] = useState<number>(3450);
    const [weeklySessions, setWeeklySessions] = useState<number>(3);
    const [sessionGrossSpend, setSessionGrossSpend] = useState<number>(380);

    // Underlying unit math
    const weeksPerMonth = 4.33;
    const monthlyGrossReceipts = Math.round(weeklySessions * sessionGrossSpend * weeksPerMonth);
    const platformPosTakeRate = 0.08; // 8% Neighbor POS + compliance escrow + discovery rail
    const studioSaasMonthly = 39; // $39/mo Studio SaaS + PorchHours beacon subscription
    const consumableCostRatio = 0.24; // 24% ingredients / consumables / utilities for host

    const monthlyPosFee = Math.round(monthlyGrossReceipts * platformPosTakeRate);
    const monthlyConsumables = Math.round(monthlyGrossReceipts * consumableCostRatio);
    const hostMonthlyNetIncome = Math.max(
        1,
        monthlyGrossReceipts - monthlyPosFee - monthlyConsumables - studioSaasMonthly
    );

    const hostPaybackMonths = (kitPrice / hostMonthlyNetIncome).toFixed(1);

    // Porchfront Year-1 Node Contribution: 42% hardware kit gross margin + 12 months of POS take & Studio SaaS
    const kitGrossMarginRate = 0.42;
    const kitGrossProfit = Math.round(kitPrice * kitGrossMarginRate);
    const annualSoftwareAndTake = Math.round((monthlyPosFee + studioSaasMonthly) * 12);
    const totalYearOneNodeMargin = kitGrossProfit + annualSoftwareAndTake;
    const blendedPlatformMarginPct = Math.round(
        (totalYearOneNodeMargin / (kitPrice + monthlyGrossReceipts * 12 * platformPosTakeRate + studioSaasMonthly * 12)) * 100
    );

    return (
        <div className="bg-[#0a0f14]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Unit Economics &amp; Host Payback Sandbox
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Neighborhood Node &amp; Platform Math
                    </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {blendedPlatformMarginPct}% Blended Node Margin
                </span>
            </div>

            {/* 3 Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-black/40 p-5 rounded-2xl border border-white/5">
                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Modular Conversion Kit Price</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">
                            ${kitPrice.toLocaleString()}
                        </span>
                    </div>
                    <input
                        type="range"
                        min={2000}
                        max={6000}
                        step={150}
                        value={kitPrice}
                        onChange={(e) => setKitPrice(Number(e.target.value))}
                        className="w-full accent-[#f59e0b] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Modular Conversion Kit Price"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">$2,000 (Social Core)</span>
                        <span className="whitespace-nowrap">$6,000 (Flagship)</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Weekly Open-Door Sessions</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">
                            {weeklySessions} sessions/wk
                        </span>
                    </div>
                    <input
                        type="range"
                        min={1}
                        max={7}
                        step={1}
                        value={weeklySessions}
                        onChange={(e) => setWeeklySessions(Number(e.target.value))}
                        className="w-full accent-[#f59e0b] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Weekly Open-Door Sessions per Host"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">1 / wk (Weekend Drop)</span>
                        <span className="whitespace-nowrap">7 / wk (Daily Club)</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                        <span className="text-white/70">Avg. Neighbor Spend / Session</span>
                        <span className="text-[var(--secondary)] font-semibold whitespace-nowrap">
                            ${sessionGrossSpend}
                        </span>
                    </div>
                    <input
                        type="range"
                        min={180}
                        max={750}
                        step={20}
                        value={sessionGrossSpend}
                        onChange={(e) => setSessionGrossSpend(Number(e.target.value))}
                        className="w-full accent-[#f59e0b] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Average Neighbor Spend or Membership per Session"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                        <span className="whitespace-nowrap">$180 (15 Neighbors)</span>
                        <span className="whitespace-nowrap">$750 (Co-Op / Drops)</span>
                    </div>
                </div>
            </div>

            {/* 3 Full-Width Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Host Monthly Net Income
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold whitespace-nowrap">
                        ${hostMonthlyNetIncome.toLocaleString()}/mo
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                        Net of 24% supplies, 8% POS take &amp; $39 SaaS
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Host Kit Payback Period
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold whitespace-nowrap">
                        {hostPaybackMonths} months
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                        $0 commercial rent vs. $8k/mo storefront lease
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        Platform Take + Kit Margin / Node
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold whitespace-nowrap">
                        ${(totalYearOneNodeMargin / 1000).toFixed(2)}k / yr
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                        ${kitGrossProfit.toLocaleString()} kit GP + ${(annualSoftwareAndTake / 1000).toFixed(2)}k POS/SaaS (<HoverAcronym acronym="LTV:CAC" definition="3-Year Node Lifetime Value to Host Acquisition Cost ratio (~6.4x with block-level viral referrals)" theme="amber" /> 6.4x)
                    </div>
                </div>
            </div>

            {/* Expandable Assumptions */}
            <details className="group border-t border-white/10 pt-3.5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer flex items-center justify-between text-xs font-mono text-white/55 hover:text-white/90 transition-colors">
                    <span>Inspect Underlying Host &amp; Platform Unit Assumptions</span>
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                </summary>
                <div className="pt-3.5 text-xs sm:text-sm text-white/70 space-y-2 font-light leading-relaxed" style={{ overflowWrap: "break-word" }}>
                    <p className="m-0" style={{ textWrap: "pretty" }}>
                        • <strong className="text-white/90">Why Hosts Convert in 1 Weekend:</strong> A residential garage already has paid-for square footage, utilities, and street frontage. At {weeklySessions} open sessions per week (${monthlyGrossReceipts.toLocaleString()}/mo gross receipts), the host clears ${hostMonthlyNetIncome.toLocaleString()}/mo net and pays off their ${kitPrice.toLocaleString()} modular kit in {hostPaybackMonths} months.
                    </p>
                    <p className="m-0" style={{ textWrap: "pretty" }}>
                        • <strong className="text-white/90">Hardware-Enabled SaaS &amp; Marketplace Flywheel:</strong> Porchfront captures a 42% gross margin on the initial flat-pack kit (${kitGrossProfit.toLocaleString()} Day-1 gross profit covers customer acquisition cost on Day 1), plus 8% Neighbor POS take, $39/mo Studio software, and 15% referral commission when visiting neighbors shop a host&apos;s build.
                    </p>
                </div>
            </details>
        </div>
    );
}
