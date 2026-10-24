"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export default function UnitEconomicsWidget() {
    const [annualRevM, setAnnualRevM] = useState<number>(2.0);
    const [baseMarginPct, setBaseMarginPct] = useState<number>(15);
    const [aiEbitdaUpliftPct, setAiEbitdaUpliftPct] = useState<number>(60);

    const entryMultiple = 3.2;
    const exitMultiple = 4.0; // Rerated tech-enabled SMB multiple

    const baseEbitdaK = Math.round(annualRevM * 1000 * (baseMarginPct / 100));
    const purchasePriceK = Math.round(baseEbitdaK * entryMultiple);
    const debtfinancedK = Math.round(purchasePriceK * 0.85); // 75% SBA 7(a) + 10% Seller Note
    const annualDebtServiceK = Math.round(debtfinancedK * 0.148); // ~10-yr SBA 7(a) amortization

    const postAiEbitdaK = Math.round(baseEbitdaK * (1 + aiEbitdaUpliftPct / 100));
    const postAiDscr = (postAiEbitdaK / Math.max(annualDebtServiceK, 1)).toFixed(2);
    const annualFreeCashFlowK = Math.max(0, postAiEbitdaK - annualDebtServiceK - 30); // minus $30k/yr MSL AI OS fee

    const postInstallEnterpriseValueK = Math.round(postAiEbitdaK * exitMultiple);
    const netEquityGainK = Math.max(0, postInstallEnterpriseValueK - purchasePriceK);

    return (
        <div className="bg-stone-900/70 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Acquisition &amp; Syndicate Sandbox
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white">Deal-Level Cashflow &amp; Equity Rerating Math</h3>
                </div>
                <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full shrink-0">
                    {postAiDscr}x Post-AI DSCR
                </span>
            </div>

            {/* 3 Headline Metric Cards (Visible by Default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                        Post-AI Annual EBITDA
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${postAiEbitdaK}k/yr
                    </div>
                    <div className="text-xs text-stone-400 mt-1 leading-snug">
                        Up from ${baseEbitdaK}k baseline (+{aiEbitdaUpliftPct}% lift)
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                        Net Free Cash Flow
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold">
                        ${annualFreeCashFlowK}k/yr
                    </div>
                    <div className="text-xs text-stone-400 mt-1 leading-snug">
                        After ${annualDebtServiceK}k <HoverAcronym acronym="SBA 7(a)" definition="U.S. Small Business Administration acquisition loan program" theme="emerald" /> debt service
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        180-Day Equity Value Gain
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        +${(netEquityGainK / 1000).toFixed(2)}M
                    </div>
                    <div className="text-xs text-stone-300 mt-1 leading-snug">
                        ${(purchasePriceK / 1000).toFixed(2)}M entry -&gt; ${(postInstallEnterpriseValueK / 1000).toFixed(2)}M at 4.0x
                    </div>
                </div>
            </div>

            {/* Expandable Sliders & Underlying Assumptions Drawer */}
            <details className="group bg-stone-950/60 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-300 hover:text-white transition-colors select-none">
                    <span>Stress-Test Deal Sliders &amp; Platform Revenue Streams</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-2.5 py-0.5 rounded-full">
                            ${annualRevM.toFixed(1)}M Rev • {baseMarginPct}% Margin • +{aiEbitdaUpliftPct}% AI Lift
                        </span>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                    </div>
                </summary>
                <div className="p-4 sm:p-5 border-t border-white/10 space-y-5">
                    <div className="space-y-5">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-stone-300">Target SMB Annual Revenue</span>
                                <span className="text-[var(--secondary)] font-semibold">${annualRevM.toFixed(1)}M / yr</span>
                            </div>
                            <input
                                type="range"
                                min={1.0}
                                max={5.0}
                                step={0.2}
                                value={annualRevM}
                                onChange={(e) => setAnnualRevM(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Target SMB Annual Revenue"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1.5">
                                <span>$1.0M (Local Shop)</span>
                                <span>$5.0M (Regional Fleet)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-stone-300">Pre-Acquisition Baseline EBITDA Margin</span>
                                <span className="text-[var(--secondary)] font-semibold">{baseMarginPct}% (${baseEbitdaK}k)</span>
                            </div>
                            <input
                                type="range"
                                min={10}
                                max={22}
                                step={1}
                                value={baseMarginPct}
                                onChange={(e) => setBaseMarginPct(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Pre-Acquisition Baseline EBITDA Margin"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1.5">
                                <span>10% (Unoptimized)</span>
                                <span>22% (High-Margin Niche)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-stone-300">Day-1 AI Playbook EBITDA Uplift (180 Days)</span>
                                <span className="text-[var(--secondary)] font-semibold">+{aiEbitdaUpliftPct}% EBITDA</span>
                            </div>
                            <input
                                type="range"
                                min={20}
                                max={80}
                                step={5}
                                value={aiEbitdaUpliftPct}
                                onChange={(e) => setAiEbitdaUpliftPct(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Day-1 AI Playbook EBITDA Uplift"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1.5">
                                <span>+20% (Voice AI Only)</span>
                                <span>+80% (Full Voice + Dispatch + AR Stack)</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3.5 border-t border-white/10 text-xs sm:text-sm text-stone-300 space-y-2 font-light leading-relaxed">
                        <p className="m-0">
                            • <strong className="text-white">How Main Street Legacy Captures Value:</strong> (1) Selective cohort tuition covers training &amp; sourcing overhead; (2) <strong className="text-[var(--secondary)]">10% to 30% carried interest</strong> on SPVs backing top graduates; (3) <strong className="text-[var(--secondary)]">$2,500/mo AI OS subscription</strong> per acquired firm; and (4) pooled vendor procurement rebates + Uplift Oracle licensing to SBA lenders.
                        </p>
                        <p className="m-0">
                            • <strong className="text-white">Why Lenders &amp; Sellers Win:</strong> Pre-install <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" theme="emerald" /> starts at ~1.35x to 1.45x; capturing 20% to 30% of missed emergency calls plus automated AR collections lifts coverage above 2.1x within two quarters, protecting both the bank note and the retiring seller&apos;s profit-distribution glide.
                        </p>
                    </div>
                </div>
            </details>
        </div>
    );
}
