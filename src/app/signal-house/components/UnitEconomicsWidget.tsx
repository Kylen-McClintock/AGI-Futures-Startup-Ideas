"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function UnitEconomicsWidget() {
    const [activeMembersPerRoom, setActiveMembersPerRoom] = useState(250);
    const [proPrice, setProPrice] = useState(24);
    const [hostPassPrice, setHostPassPrice] = useState(45);

    // Calculations
    // Assume 35% of room members upgrade to Signal House Pro ($proPrice/mo)
    // Assume 25% of room members pay for the Host's Credentialed Niche Pass ($hostPassPrice/mo), with 20% platform take
    const proSubscribers = Math.round(activeMembersPerRoom * 0.35);
    const nichePassHolders = Math.round(activeMembersPerRoom * 0.25);

    const monthlyProRevenue = proSubscribers * proPrice;
    const grossHostPassVolume = nichePassHolders * hostPassPrice;
    const hostNetMonthlyPayout = Math.round(grossHostPassVolume * 0.8);
    const platformTakeOnHostPass = Math.round(grossHostPassVolume * 0.2);

    // Audio/WebRTC presence & AI room asset caching cost (~$0.35 per active member/mo)
    const infraCostPerRoom = Math.round(activeMembersPerRoom * 0.35);
    const platformNetPerRoom = monthlyProRevenue + platformTakeOnHostPass - infraCostPerRoom;
    const grossMarginPct = Math.round((platformNetPerRoom / (monthlyProRevenue + platformTakeOnHostPass)) * 100);
    const annualPlatformARR1000Rooms = ((platformNetPerRoom * 12 * 1000) / 1_000_000).toFixed(1);

    return (
        <div className="my-10 bg-[#090712]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Calculator className="w-3.5 h-3.5" />
                        Interactive Unit Economics Sandbox
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Per-Room &amp; Host Flywheel Economics
                    </h3>
                </div>
                <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap">
                    {grossMarginPct}% Net Room Contribution Margin
                </span>
            </div>

            <div className="space-y-5 mb-8">
                <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-2 gap-2">
                        <span className="text-white/75">Active Monthly Practitioners per Canonical Niche Room</span>
                        <span className="font-mono text-[var(--secondary)] font-semibold whitespace-nowrap">
                            {activeMembersPerRoom} members
                        </span>
                    </div>
                    <input
                        type="range"
                        min={50}
                        max={1000}
                        step={25}
                        value={activeMembersPerRoom}
                        onChange={(e) => setActiveMembersPerRoom(Number(e.target.value))}
                        className="w-full accent-[var(--primary)] bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-2 gap-2">
                        <span className="text-white/75">Signal House Pro Subscription (Cross-Device Shield + Personal Room)</span>
                        <span className="font-mono text-[var(--secondary)] font-semibold whitespace-nowrap">
                            ${proPrice}/mo
                        </span>
                    </div>
                    <input
                        type="range"
                        min={12}
                        max={49}
                        step={1}
                        value={proPrice}
                        onChange={(e) => setProPrice(Number(e.target.value))}
                        className="w-full accent-[var(--primary)] bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-2 gap-2">
                        <span className="text-white/75">Host Curated Tribe Pass (80% to Host / 20% Platform Take)</span>
                        <span className="font-mono text-[var(--secondary)] font-semibold whitespace-nowrap">
                            ${hostPassPrice}/mo
                        </span>
                    </div>
                    <input
                        type="range"
                        min={15}
                        max={120}
                        step={5}
                        value={hostPassPrice}
                        onChange={(e) => setHostPassPrice(Number(e.target.value))}
                        className="w-full accent-[var(--primary)] bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">
                        Platform Net Rev / Room
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif text-white whitespace-nowrap">
                        ${platformNetPerRoom.toLocaleString()}/mo
                    </div>
                    <div className="text-[11px] text-white/50 mt-1">
                        After ${infraCostPerRoom}/mo presence &amp; audio infra
                    </div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">
                        Host Monthly Payout
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif text-[var(--secondary)] whitespace-nowrap">
                        ${hostNetMonthlyPayout.toLocaleString()}/mo
                    </div>
                    <div className="text-[11px] text-white/50 mt-1">
                        From {nichePassHolders} credentialed tribe members
                    </div>
                </div>

                <div className="bg-[var(--primary)]/15 border border-[var(--primary)]/35 rounded-2xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        Net ARR @ 1,000 Niche Rooms
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif text-emerald-300 whitespace-nowrap">
                        ${annualPlatformARR1000Rooms}M/yr
                    </div>
                    <div className="text-[11px] text-white/70 mt-1">
                        Zero paid CAC via host-led organic distribution
                    </div>
                </div>
            </div>
        </div>
    );
}
