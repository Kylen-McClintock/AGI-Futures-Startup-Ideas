"use client";

import { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { HoverAcronym } from "@/components/HoverAcronym";

export default function ParcelEconomicsWidget() {
    const [homesteads, setHomesteads] = useState<number>(28);
    const [rawLandCostM, setRawLandCostM] = useState<number>(12);
    const [lotSalePriceM, setLotSalePriceM] = useState<number>(1.85);

    // Shared core: $4.5M solarium + thermal spa + coworking + microgrid + fire perimeter + road/pad
    const sharedInfraAndCoreM = 14.0;
    const totalSiteCostM = rawLandCostM + sharedInfraAndCoreM;
    const sharedCorePerHomeK = Math.round((4500) / homesteads); // $4.5M luxury amenity core split across homesteads

    const grossLotRevenueM = homesteads * lotSalePriceM;
    const spvNetProfitM = Math.max(0, grossLotRevenueM - totalSiteCostM);
    const spvGrossMarginPct = Math.round((spvNetProfitM / Math.max(grossLotRevenueM, 1)) * 100);

    // Recurring club, microgrid, resilience & mobility concierge dues ($2,800/mo per household)
    const annualRecurringClubK = Math.round(homesteads * 2.8 * 12);

    return (
        <div className="bg-[#091015]/90 border border-[var(--primary)]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5 text-[var(--primary)]" />
                        The Decisive Real-Asset Equation
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white">Flagship Site SPV &amp; Shared-Core Math</h3>
                </div>
                <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full shrink-0">
                    {spvGrossMarginPct}% Site SPV Gross Margin
                </span>
            </div>

            {/* 3 Headline Metrics (Visible by Default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Luxury Core Cost / Home
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${sharedCorePerHomeK}k
                    </div>
                    <div className="text-xs text-white/55 mt-1 leading-snug">
                        For a $4.5M solarium, thermal spa &amp; coworking core (96% cheaper than solo)
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/45 mb-1.5">
                        Site SPV Development Spread
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-[var(--secondary)] font-semibold">
                        +${spvNetProfitM.toFixed(1)}M
                    </div>
                    <div className="text-xs text-white/55 mt-1 leading-snug">
                        ${grossLotRevenueM.toFixed(1)}M improved homestead sales on ${totalSiteCostM.toFixed(1)}M basis
                    </div>
                </div>

                <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl p-4 sm:p-5 overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--tertiary)] mb-1.5">
                        Recurring Community ARR
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono text-white font-semibold">
                        ${annualRecurringClubK}k/yr
                    </div>
                    <div className="text-xs text-white/65 mt-1 leading-snug">
                        Per site club, microgrid &amp; AV shuttle dues + Parent-Co <HoverAcronym acronym="SPV" definition="special purpose vehicle, a separate legal entity holding one parcel" theme="emerald" /> carry
                    </div>
                </div>
            </div>

            {/* Expandable Sliders & Downside-Protection Structure */}
            <details className="group bg-black/45 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors select-none">
                    <span>Stress-Test Parcel Basis, Density &amp; Downside Protection</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-2.5 py-0.5 rounded-full">
                            {homesteads} homes • ${rawLandCostM}M land • ${lotSalePriceM.toFixed(2)}M/lot
                        </span>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                    </div>
                </summary>

                <div className="p-4 sm:p-5 border-t border-white/10 space-y-5">
                    <div className="space-y-5">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Homesteads Sharing the Communal Core</span>
                                <span className="text-[var(--secondary)] font-semibold">{homesteads} homesteads</span>
                            </div>
                            <input
                                type="range"
                                min={16}
                                max={45}
                                step={2}
                                value={homesteads}
                                onChange={(e) => setHomesteads(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Homesteads Sharing the Communal Core"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1.5">
                                <span>16 (Boutique Enclave)</span>
                                <span>45 (Full Hamlet)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Raw Scenic Parcel Acquisition Cost (300 Acres)</span>
                                <span className="text-[var(--secondary)] font-semibold">${rawLandCostM}M (${Math.round((rawLandCostM * 1000) / 300)}k/acre)</span>
                            </div>
                            <input
                                type="range"
                                min={6}
                                max={22}
                                step={1}
                                value={rawLandCostM}
                                onChange={(e) => setRawLandCostM(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Raw Scenic Parcel Acquisition Cost"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1.5">
                                <span>$6M ($20k/ac Foothills)</span>
                                <span>$22M ($73k/ac Coastal Ridge)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono mb-2">
                                <span className="text-white/75">Improved Fire-Hardened Pad + Core Membership Price</span>
                                <span className="text-[var(--secondary)] font-semibold">${lotSalePriceM.toFixed(2)}M / pad</span>
                            </div>
                            <input
                                type="range"
                                min={1.2}
                                max={3.0}
                                step={0.05}
                                value={lotSalePriceM}
                                onChange={(e) => setLotSalePriceM(Number(e.target.value))}
                                className="w-full accent-[#10b981] cursor-pointer h-1.5 bg-white/10 rounded-lg"
                                aria-label="Improved Pad Price"
                            />
                            <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1.5">
                                <span>$1.20M (Pre-AV Entry)</span>
                                <span>$3.00M (Repriced Coastal Node)</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3.5 border-t border-white/10 text-xs sm:text-sm text-white/75 space-y-2 font-light leading-relaxed">
                        <p className="m-0">
                            • <strong className="text-white">Asymmetric Downside Protection:</strong> Every parcel is underwritten on Day-1 road access + founding lot pre-sales (~$14M civil, microgrid, wildfire &amp; solarium budget). Even if eVTOL corridors take 5 extra years, buyers already own an insurable, off-grid luxury hamlet at a discount to solo custom estates.
                        </p>
                        <p className="m-0">
                            • <strong className="text-white">Parent Co vs. Site SPVs:</strong> The Skyhold Parent Co stays asset-light, owning the site-selection engine, architectural IP, brand, and club operating software while earning development fees, 20% SPV promote, and recurring hospitality/mobility margin across sites.
                        </p>
                    </div>
                </div>
            </details>
        </div>
    );
}
