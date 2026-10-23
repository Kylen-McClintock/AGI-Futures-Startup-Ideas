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
        <div className="bg-[#0a0f14]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Wedge Economics
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white">Day-1 Unit &amp; Crew Math</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {netMarginPct}% Net Take Margin
                </span>
            </div>

            {/* 3 Computed Metrics (Visible by Default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Net Take / Job
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${netContributionPerJob.toFixed(2)}
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        14% take minus $2.45 AI &amp; escrow
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Crew Time Saved
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold">
                        {reclaimedEstimatorHours} hrs/mo
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        Zero dead-drive estimates
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        Annualized Provider ARR
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${(annualizedRevenuePerProvider / 1000).toFixed(1)}k
                    </div>
                    <div className="text-xs text-white/60 mt-1 leading-snug">
                        SaaS + Take (<HoverAcronym acronym="LTV:CAC" definition="Lifetime Value to Customer Acquisition Cost ratio (~7.8x at $2.2k provider acquisition cost)" theme="blue" /> 7.8x)
                    </div>
                </div>
            </div>

            {/* Expandable Sliders & Underlying Assumptions Drawer */}
            <details className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/65 hover:text-white transition-colors select-none">
                    <span>Stress-Test Model Sliders &amp; Underlying Assumptions</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-2.5 py-0.5 rounded-full">
                            ${avgTicket} ticket • {monthlyJobs} jobs/mo
                        </span>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                    </div>
                </summary>
                <div className="p-4 sm:p-5 border-t border-white/10 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/70">Avg. Scoped Job Ticket</span>
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
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                                <span>$160 (Clean)</span>
                                <span>$650 (Paint / Repair)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/70">Booked Jobs / Mo per Crew</span>
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
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1.5">
                                <span>10 / mo</span>
                                <span>80 / mo</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3.5 border-t border-white/10 text-xs sm:text-sm text-white/70 space-y-2 font-light leading-relaxed">
                        <p className="m-0">
                            • <strong className="text-white/90">Inference + LiDAR Cost:</strong> ~90s streaming multimodal video + RoomPlan processing costs ~$0.09 per walkthrough (~$0.22 per booked job at 42% conversion), plus $2.23 payment &amp; variance-buffer reserve.
                        </p>
                        <p className="m-0">
                            • <strong className="text-white/90">Why Providers Gladly Pay 14% + $199/mo:</strong> Traditional contractors close ~1 in 3.5 in-person estimates, burning 1.75 hours of truck fuel and estimator labor per booked job (~$95 hidden cost). Pre-scoped instant booking expands crew billable utilization by 22%+.
                        </p>
                    </div>
                </div>
            </details>
        </div>
    );
}
