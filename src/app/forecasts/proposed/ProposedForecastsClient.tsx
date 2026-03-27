"use client";

import { Forecast } from "@/types/forecasting";
import { useState } from "react";
import ForecastCard from "../components/ForecastCard";
import ProposeForecastModal from "../components/ProposeForecastModal";

interface Props {
    initialForecasts: Forecast[];
}

export default function ProposedForecastsClient({ initialForecasts }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // We can add logic to optimistically update or re-fetch on close if needed.
    // For now, refreshing the page pulls the newest submitted proposals since it's a Server Component layout.

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-between items-center mb-8">
                <p className="text-white/60">Help refine these proposals before they go live.</p>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-white/90 transition"
                >
                    Propose Forecast
                </button>
            </div>
            
            {(!initialForecasts || initialForecasts.length === 0) ? (
                <div className="p-8 border border-white/10 border-dashed rounded-xl flex items-center justify-center text-white/40 italic">
                    No forecast proposals right now. Be the first to suggest one!
                </div>
            ) : null}

            {initialForecasts?.map(forecast => (
                <ForecastCard key={forecast.id} forecast={forecast} mode="proposed" />
            ))}

            <ProposeForecastModal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    // Force a simple page reload to pull the new SSR data
                    window.location.reload();
                }} 
            />
        </div>
    );
}
