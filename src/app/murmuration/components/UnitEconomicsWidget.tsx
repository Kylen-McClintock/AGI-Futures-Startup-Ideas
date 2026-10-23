"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export default function UnitEconomicsWidget() {
    const [activePods, setActivePods] = useState<number>(6);
    const [upliftPerPod, setUpliftPerPod] = useState<number>(18000);
    const [performanceTakePct, setPerformanceTakePct] = useState<number>(18);

    const saasTelemetryBase = 1500; // Monthly sandbox & telemetry node infrastructure fee
    const computeCostPerPod = 420; // Sandbox replay + multi-agent inference tokens per active pod

    const totalMonthlyClientUplift = activePods * upliftPerPod;
    const grossPerformanceFee = Math.round(totalMonthlyClientUplift * (performanceTakePct / 100));
    const totalMonthlyRevenuePerStartup = grossPerformanceFee + saasTelemetryBase;
    const totalComputeCost = activePods * computeCostPerPod;
    const netContribution = totalMonthlyRevenuePerStartup - totalComputeCost;
    const grossMarginPct = Math.round((netContribution / totalMonthlyRevenuePerStartup) * 100);

    const netClientRetainedMonthly = totalMonthlyClientUplift - totalMonthlyRevenuePerStartup;
    const clientRoiMultiple = (totalMonthlyClientUplift / totalMonthlyRevenuePerStartup).toFixed(1);
    const annualizedPlatformArrPerClient = Math.round(totalMonthlyRevenuePerStartup * 12);

    return (
        <div className="bg-[#0a0f14]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Unit Economics &amp; ROI Sandbox
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Performance-Aligned Swarm Math
                    </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {grossMarginPct}% Net Platform Margin
                </span>
            </div>

            {/* 3 Computed Metrics (Visible by Default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Net Client Retained Lift
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        +${(netClientRetainedMonthly / 1000).toFixed(1)}k/mo
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        {clientRoiMultiple}x net ROI after platform share
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Net Contribution / Mo
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--primary)] font-semibold">
                        ${(netContribution / 1000).toFixed(1)}k/mo
                    </div>
                    <div className="text-xs text-white/50 mt-1 leading-snug">
                        After ${(totalComputeCost / 1000).toFixed(1)}k sandbox compute
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--primary)] mb-1.5">
                        Annualized Client ACV
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${(annualizedPlatformArrPerClient / 1000).toFixed(0)}k/yr
                    </div>
                    <div className="text-xs text-white/60 mt-1 leading-snug">
                        Base + Uplift (<HoverAcronym acronym="NRR" definition="Net Revenue Retention: expands automatically as startups deploy additional experiment pods" theme="primary" /> 145%+)
                    </div>
                </div>
            </div>

            {/* Expandable Sliders & Underlying Assumptions Drawer */}
            <details className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/65 hover:text-white transition-colors select-none">
                    <span>Stress-Test Model Sliders &amp; Attribution Assumptions</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-2.5 py-0.5 rounded-full">
                            {activePods} pods • ${(upliftPerPod / 1000).toFixed(0)}k lift • {performanceTakePct}% share
                        </span>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                    </div>
                </summary>
                <div className="p-4 sm:p-5 border-t border-white/10 space-y-5">
                    <div className="space-y-5">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Monthly Active Experiment Pods per Startup</span>
                                <span className="text-[var(--primary)] font-semibold">{activePods} pods</span>
                            </div>
                            <input
                                type="range"
                                min={2}
                                max={15}
                                step={1}
                                value={activePods}
                                onChange={(e) => setActivePods(Number(e.target.value))}
                                className="w-full accent-[#21de9a] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Monthly Active Experiment Pods"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>2 Pods (Seed Startup)</span>
                                <span>15 Pods (Series B+ Scaleup)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Verified Revenue / Cost-Saved Uplift per Active Pod</span>
                                <span className="text-[var(--primary)] font-semibold">
                                    ${(upliftPerPod / 1000).toFixed(0)}k/mo
                                </span>
                            </div>
                            <input
                                type="range"
                                min={6000}
                                max={45000}
                                step={2000}
                                value={upliftPerPod}
                                onChange={(e) => setUpliftPerPod(Number(e.target.value))}
                                className="w-full accent-[#21de9a] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Verified Revenue or Cost-Saved Uplift per Pod"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>$6k/mo (Single Funnel)</span>
                                <span>$45k/mo (Core Revenue Loop)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Performance Take Tier (Discounted for Network Graph Contributors)</span>
                                <span className="text-[var(--primary)] font-semibold">{performanceTakePct}% share</span>
                            </div>
                            <input
                                type="range"
                                min={10}
                                max={25}
                                step={1}
                                value={performanceTakePct}
                                onChange={(e) => setPerformanceTakePct(Number(e.target.value))}
                                className="w-full accent-[#21de9a] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Performance Take Percentage"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/35 mt-1">
                                <span>10% (Full Network Contributor)</span>
                                <span>25% (Isolated Instance)</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="pt-3.5 border-t border-white/10 text-xs sm:text-sm text-white/70 space-y-2 font-light leading-relaxed"
                        style={{ overflowWrap: "break-word" }}
                    >
                        <p className="m-0" style={{ textWrap: "pretty" }}>
                            • <strong className="text-white/90">Counterfactual Holdout Attribution:</strong> Every deployed swarm pod maintains a 10% to 15% randomized control holdout against the pre-existing human or legacy workflow, ensuring incremental cash-flow lift is statistically verified before performance fees accrue.
                        </p>
                        <p className="m-0" style={{ textWrap: "pretty" }}>
                            • <strong className="text-white/90">Network Contributor Discount:</strong> Startups that opt into sharing redacted execution traces and winning weights into the Murmuration Graph qualify for the 10% to 14% take tier (down from 25% for isolated instances) plus equity participation in the network pool.
                        </p>
                    </div>
                </div>
            </details>
        </div>
    );
}
