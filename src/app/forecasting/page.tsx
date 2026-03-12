import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AGI Futures | Forecasting Methodology",
    description: "The mathematical model and rationale behind the AGI Futures AI-driven evaluation metrics for Expected Valuation and Time to Unicorn.",
};

export default function ForecastingMethodologyPage() {
    return (
        <main className="min-h-screen bg-[#07090A] text-white selection:bg-[#3bf4a4]/30">
            {/* Header / Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="pointer-events-auto group flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                    <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium tracking-wide text-white/70 group-hover:text-white transition-colors">
                        Library
                    </span>
                </Link>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-6 py-32 space-y-16">
                
                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-white glow-text">
                        Forecasting <span className="italic text-[#3bf4a4]">Methodology</span>
                    </h1>
                    <p className="text-xl text-white/70 font-light leading-relaxed">
                        How we derive actionable venture metrics (<strong className="text-white">Expected Valuation</strong> and <strong className="text-white">Time to Unicorn</strong>) from complex probabilistic AI forecasts.
                    </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:font-light prose-p:text-white/70 prose-a:text-[#3bf4a4]">
                    <h2>The Challenge of Probabilistic Forecasting</h2>
                    <p>
                        A single point forecast (e.g., "This startup will be worth $5B in 2035") is often useless for speculative venturing. The AGI transition possesses far too much variance. This is why our AI forecasting engine instead outputs <strong>Probability Distribution Curves</strong>. 
                    </p>
                    <p>
                        However, while curves are statistically rich, they are difficult for humans to intuitively rank and compare. To solve this, we algorithmically collapse the distribution curves back down into two extremely legible heuristics: Expected Valuation, and Time to Unicorn.
                    </p>

                    <h2 className="mt-16">1. Expected Valuation (EV)</h2>
                    <p>
                        Our Expected Valuation metric evaluates the economic value of a startup idea in a specific future year (e.g., 2030, 2035, 2040) by weighting every possible outcome by its probability of occurring.
                    </p>
                    <h3>The Math</h3>
                    <ol>
                        <li><strong>Extract Threshold Probabilities:</strong> We query the forecast curve for the cumulative probability of hitting specific milestones: $0 (Failure), $10M, $100M, $1B, $10B, $100B, and $1T.</li>
                        <li><strong>Calculate Band Margins:</strong> We subtract the cumulative probability of a higher threshold from the next lowest threshold to isolate the discrete probability of the startup landing <em>exactly</em> within that band.</li>
                        <li><strong>Geometric Midpoint Weighting:</strong> We multiply the discrete probability of each band by the logarithmic midpoint of that band's dollar value. For the absolute ceiling ($1T+), we infer a heavy-tailed distribution decay to estimate the remaining probability mass.</li>
                        <li><strong>Summation:</strong> Adding all the weighted band values together yields the exact mathematical Expected Value in dollars.</li>
                    </ol>

                    <h2 className="mt-16">2. Time to Unicorn ($1B+)</h2>
                    <p>
                        The Expected Valuation metric is highly skewed by extreme upside probabilities. To balance this, we also rank ideas by their velocity: the speed at which they cross the 50% likelihood threshold of achieving a $1 Billion valuation.
                    </p>
                    <h3>The Math</h3>
                    <ol>
                        <li><strong>Isolate the $1B Vector:</strong> We extract the probability of reaching $1B across our three distinct forecasting horizons (2030, 2035, 2040).</li>
                        <li><strong>Find the Intersect:</strong> We determine the exact 5-year window where the probability of success crosses the 50% line.</li>
                        <li><strong>Linear Interpolation:</strong> We map the probabilities at the start and end of that window, calculate the rate of change, and interpolate the exact fractional year where the probability hits 0.50. This gives us a highly specific target year (e.g., 2032).</li>
                    </ol>
                    <p>
                        <em>Note: If the $1B probability never crosses 50% by 2040, the Time to Unicorn is rendered as indeterminate.</em>
                    </p>

                    <h2 className="mt-16 text-[#3bf4a4]">Future State: Aggregate Models</h2>
                    <p>
                        Currently, these curves are generated purely by localized sovereign AI models (specifically structured Large Language Models processing our raw thesis parameters). In the future, this data will represent an aggregate blend of our internal AI forecasting engines mixed with real-time prediction market data from human speculators and operators.
                    </p>
                </div>
            </div>
        </main>
    );
}
