"use client";

import { Forecast } from "@/types/forecasting";

interface Props {
    forecast: Forecast;
}

export default function AggregateDisplay({ forecast }: Props) {
    if (forecast.type === "multiple_choice" || forecast.type === "bucketed_magnitude" || forecast.type === "cause_mechanism" || forecast.type === "company_actor") {
        // Mock distributions
        const mockData = forecast.options?.map(opt => ({
            label: opt,
            value: Math.floor(Math.random() * 60) + 5
        })) || [];
        
        // Normalize
        const total = mockData.reduce((acc, curr) => acc + curr.value, 0);

        return (
            <div className="space-y-3 mt-4">
                <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">Crowd Consensus</h4>
                {mockData.sort((a,b) => b.value - a.value).map((item, i) => {
                    const pct = Math.round((item.value / total) * 100);
                    return (
                        <div key={i} className="relative h-8 bg-white/5 rounded-md overflow-hidden flex items-center px-3 border border-white/5">
                            <div 
                                className="absolute left-0 top-0 bottom-0 bg-[#3bf4a4]/20 border-r border-[#3bf4a4]/40" 
                                style={{ width: `${pct}%` }} 
                            />
                            <div className="relative z-10 flex justify-between w-full text-sm">
                                <span className="text-white/80 truncate pr-4">{item.label}</span>
                                <span className="text-white font-medium">{pct}%</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    if (forecast.type === "binary" || forecast.type === "binary_by_deadline") {
        const yesPct = 73; // mock
        const noPct = 100 - yesPct;
        return (
            <div className="mt-4">
                <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">Crowd Consensus</h4>
                <div className="flex h-10 rounded-md overflow-hidden border border-white/10">
                    <div className="bg-[#3bf4a4]/20 border-r border-[#3bf4a4]/40 flex items-center justify-center text-white text-sm font-medium" style={{ width: `${yesPct}%` }}>
                        {yesPct}% Yes
                    </div>
                    <div className="bg-white/5 flex items-center justify-center text-white/60 text-sm font-medium" style={{ width: `${noPct}%` }}>
                        {noPct}% No
                    </div>
                </div>
            </div>
        );
    }

    if (forecast.type === "year_or_never") {
        return (
            <div className="mt-4">
                <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">Crowd Consensus</h4>
                <div className="p-4 border border-white/10 border-dashed rounded-lg flex items-center justify-center text-white/40 text-sm">
                    [Distribution Curve Visualization: Median Year 2034, 15% Never]
                </div>
            </div>
        );
    }

    return null;
}
