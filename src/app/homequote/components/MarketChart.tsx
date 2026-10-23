"use client";

import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const totalMarketData = [
    { year: "2023", value: 520, digital: 95 },
    { year: "2024", value: 580, digital: 112 },
    { year: "2025", value: 645, digital: 132 },
    { year: "2026", value: 715, digital: 155 },
    { year: "2027", value: 785, digital: 181 },
    { year: "2028", value: 865, digital: 210 },
    { year: "2029", value: 945, digital: 242 },
    { year: "2030", value: 1030, digital: 278 }
];

export default function MarketChart() {
    const [viewMode, setViewMode] = useState<"total" | "digital">("total");

    return (
        <div className="w-full mt-10 mb-6 bg-[#0a0f14]/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-serif text-white/95">
                        {viewMode === "total"
                            ? "U.S. Home Services Total Spend ($B)"
                            : "On-Demand Digital & Scoped Booking Wedge ($B)"}
                    </h4>
                    <p className="text-xs font-mono text-[var(--secondary)] mt-1 uppercase tracking-widest opacity-80">
                        {viewMode === "total"
                            ? "Projected $520B (2023) to $1.03T (2030) • ~10.2% CAGR"
                            : "Digital On-Demand Segment Expanding at ~16.5% CAGR"}
                    </p>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 self-start">
                    <button
                        onClick={() => setViewMode("total")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            viewMode === "total"
                                ? "bg-[var(--primary)] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                        Total Market ($1.03T)
                    </button>
                    <button
                        onClick={() => setViewMode("digital")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            viewMode === "digital"
                                ? "bg-[var(--primary)] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                        On-Demand Wedge ($278B)
                    </button>
                </div>
            </div>

            <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={totalMarketData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                        <defs>
                            <linearGradient id="homequoteBlueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "monospace" }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "monospace" }}
                            tickFormatter={(val) => `$${val}B`}
                        />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    const val = payload[0].value;
                                    return (
                                        <div className="bg-[#0a0f14]/95 backdrop-blur-md border border-[var(--primary)]/30 px-4 py-3 rounded-xl shadow-[0_8px_32px_rgba(59,130,246,0.2)]">
                                            <p className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-1">
                                                Year {label}
                                            </p>
                                            <p className="text-[var(--secondary)] font-medium text-xl font-serif">
                                                ${val} Billion
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey={viewMode === "total" ? "value" : "digital"}
                            stroke="#60a5fa"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#homequoteBlueGrad)"
                            animationDuration={800}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
