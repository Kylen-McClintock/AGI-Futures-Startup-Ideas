"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export default function UnitEconomicsWidget() {
    const [avgTicket, setAvgTicket] = useState<number>(280);
    const [monthlyJobs, setMonthlyJobs] = useState<number>(35);

    const takeRate = 0.14;
    const saasFee = 199;
    const inferenceAndEscrowCostPerJob = 2.45;

    const monthlyGMV = avgTicket * monthlyJobs;
    const grossTakePerJob = avgTicket * takeRate;
    const netContributionPerJob = grossTakePerJob - inferenceAndEscrowCostPerJob;
    const netMarginPct = Math.round((netContributionPerJob / grossTakePerJob) * 100);

    // Traditional contractor wastes ~1.75 hrs per closed job on unclosed in-person estimates & phone tag
    const reclaimedEstimatorHours = Math.round(monthlyJobs * 1.75);
    const annualizedRevenuePerProvider = Math.round((monthlyGMV * takeRate + saasFee) * 12);

    return (
        <div className="bg-[#0a0f14]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-7 backdrop-blur-md mt-6">
            <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Wedge Economics
                    </div>
                    <h3 className="text-xl font-serif text-white">Day-1 Unit &amp; Crew Math</h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {netMarginPct}% Net Take Margin
                </span>
            </div>

            {/* Sliders */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5 bg-black/40 p-4 rounded-2xl border border-white/5">
                <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-white/60">Avg. Scoped Job Ticket</span>
                        <span className="text-[var(--secondary)] font-semibold">${avgTicket}</span>
                    </div>
                    <input
                        type="range"
                        min={160}
                        max={650}
                        step={10}
                        value={avgTicket}
                        onChange={(e) => setAvgTicket(Number(e.target.value))}
                        className="w-full accent-[#3b82f6] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Average Scoped Job Ticket"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-white/30 mt-1">
                        <span>$160 (Clean)</span>
                        <span>$650 (Paint/Repair)</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-white/60">Booked Jobs / Mo per Crew</span>
                        <span className="text-[var(--secondary)] font-semibold">{monthlyJobs} jobs</span>
                    </div>
                    <input
                        type="range"
                        min={10}
                        max={80}
                        step={5}
                        value={monthlyJobs}
                        onChange={(e) => setMonthlyJobs(Number(e.target.value))}
                        className="w-full accent-[#3b82f6] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                        aria-label="Booked Jobs Per Month Per Crew"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-white/30 mt-1">
                        <span>10 / mo</span>
                        <span>80 / mo</span>
                    </div>
                </div>
            </div>

            {/* 3 Computed Metrics */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                        Net Take / Job
                    </div>
                    <div className="text-lg sm:text-xl font-mono text-white font-semibold">
                        ${netContributionPerJob.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-white/50 mt-0.5">
                        14% take minus $2.45 AI/escrow
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                        Crew Time Saved
                    </div>
                    <div className="text-lg sm:text-xl font-mono text-[var(--secondary)] font-semibold">
                        {reclaimedEstimatorHours} hrs/mo
                    </div>
                    <div className="text-[10px] text-white/50 mt-0.5">
                        Zero dead-drive estimates
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1">
                        Provider ARR
                    </div>
                    <div className="text-lg sm:text-xl font-mono text-white font-semibold">
                        ${(annualizedRevenuePerProvider / 1000).toFixed(1)}k
                    </div>
                    <div className="text-[10px] text-white/60 mt-0.5">
                        SaaS + Take (<HoverAcronym acronym="LTV:CAC" definition="Lifetime Value to Customer Acquisition Cost ratio (~7.8x at $2.2k provider acquisition cost)" theme="blue" /> 7.8x)
                    </div>
                </div>
            </div>

            {/* Expandable Assumptions */}
            <details className="group border-t border-white/10 pt-3 [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer flex items-center justify-between text-xs font-mono text-white/50 hover:text-white/80 transition-colors">
                    <span>Inspect Underlying Unit Assumptions</span>
                    <ChevronDown className="w-3.5 h-3.5 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="pt-3 text-xs text-white/65 space-y-1.5 font-light leading-relaxed">
                    <p>
                        • <strong className="text-white/90">Inference + LiDAR Cost:</strong> ~90s streaming multimodal video + RoomPlan processing costs ~$0.09 per walkthrough (~$0.22 per booked job at 42% conversion), plus $2.23 payment &amp; variance-buffer reserve.
                    </p>
                    <p>
                        • <strong className="text-white/90">Why Providers gladly pay 14% + $199/mo:</strong> Traditional contractors close ~1 in 3.5 in-person estimates, burning 1.75 hours of truck fuel and estimator labor per booked job (~$95 hidden cost). Pre-scoped instant booking expands crew billable utilization by 22%+.
                    </p>
                </div>
            </details>
        </div>
    );
}
