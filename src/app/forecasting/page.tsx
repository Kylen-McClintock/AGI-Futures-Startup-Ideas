import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AGI Futures | Forecasting Methodology",
    description: "The structural rationale behind the AGI Futures Live Forecasts feed and our AI-driven venture metrics for Expected Valuation.",
};

export default function ForecastingMethodologyPage() {
    return (
        <main className="min-h-screen bg-[#07090A] text-white selection:bg-[#3bf4a4]/30">
            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-6 py-32 space-y-16">
                
                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-white glow-text">
                        Forecasting <span className="italic text-[#3bf4a4]">Methodology</span>
                    </h1>
                    <p className="text-xl text-white/70 font-light leading-relaxed">
                        The structural architecture behind our <strong className="text-[#3bf4a4]">Live Forecasts Feed</strong> and the generative math powering the <strong className="text-white">Expected Valuation</strong> metrics for Startup Ideas.
                    </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:font-light prose-p:text-white/70 prose-a:text-[#3bf4a4]">
                    <h2 className="text-[#3bf4a4]">Part I: The Live Forecasts Engine</h2>
                    <p>
                        The AGI Futures <Link href="/forecasts/live">Forecasts section</Link> is a high-signal layer for frontier judgment. It structurally moves beyond the short-term mechanics of a typical binary prediction market (which often trends toward casino mechanics) into the multidimensional modeling required to navigate the AGI transition.
                    </p>
                    
                    <h3>Conditions as First-Class Objects</h3>
                    <p>
                        Determining <em>what</em> will happen is often less useful than determining <em>why</em>. In our schema, <strong>Conditions</strong> ("If X occurs by 2030...") are treated as first-class architectural objects explicitly decoupled from the predicted outcome. This forces the isolation of specific variables, enabling forecasters to explicitly model critical dependencies—like geopolitical interventions, specific model scaling capabilities, or compute bottlenecks—without confounding them with the ultimate timeline.
                    </p>

                    <h3>Continuous Probability Distributions</h3>
                    <p>
                        Most prediction interfaces compress reality into simple "Yes/No" binaries. Our architecture is built natively for continuous time horizons and dimensional magnitudes. When estimating the arrival year of a breakthrough, users aren't guessing a single date; they are equipped to draw rich probability distributions across time (e.g., plotting a bell curve that peaks in 2032 but maintains a heavy tail stretching into the 2040s) and bucket their convictions across infinite scenarios.
                    </p>

                    <h3>Algorithmic Curation via Impact Scoring</h3>
                    <p>
                        Pure volume-based sorting in prediction networks naturally favors trivial, high-frequency questions with fast feedback loops. To deliberately maintain a civilization-scale feed, discovery is curated via a compound <strong>Importance Score</strong>. This creates a 50/50 weighted blend between an objective AI assessment of the forecast's macroscopic economic/geopolitical impact, and the decentralized, subjective importance ratings of the human builder network.
                    </p>

                    <hr className="my-16 border-white/10" />

                    <h2 className="text-[#10b981]">Part II: Startup Idea Projections</h2>
                    <p>
                        For specific operational startup ideas within the problem atlas, we algorithmically abstract complex probabilistic forecasts back down into two extremely legible heuristics: <strong>Expected Valuation (EV)</strong> and <strong>Time to Unicorn</strong>.
                    </p>

                    <h3 className="mt-12">1. Expected Valuation (EV)</h3>
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

                    <h3 className="mt-12">2. Time to Unicorn ($1B+)</h3>
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
