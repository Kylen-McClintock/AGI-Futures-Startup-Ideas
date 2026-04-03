'use client';

import { useState } from 'react';
import { submitIdeaSeed } from '../actions';
import { useRouter } from 'next/navigation';
import { ChevronDown, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type SectionType = 'target_audience' | 'market' | 'business_model' | 'why_now' | 'why_you' | 'competitors' | 'civilizational_impact' | 'first_experiment' | 'valuation_forecast' | 'proof_of_work' | 'acronyms' | 'custom';

interface CustomSection {
  id: string;
  type: SectionType;
  title: string;
  content: string;
}

const SECTION_TEMPLATES: Record<SectionType, { label: string; defaultTitle: string; placeholder: string }> = {
    target_audience: { label: 'Ideal Customer Profile (ICP)', defaultTitle: 'Ideal Customer Profile (ICP)', placeholder: 'Who is the precise primary user for this right now?' },
    market: { label: 'Market', defaultTitle: 'Market', placeholder: 'What does the market landscape look like? Is it expanding?' },
    business_model: { label: 'Business Model', defaultTitle: 'Business Model', placeholder: 'How does value capture scale? Flat SaaS, take rate, usage-based?' },
    why_now: { label: 'Why Now?', defaultTitle: 'Why Now?', placeholder: 'What new API, model, or demographic shift makes this suddenly possible today?' },
    why_you: { label: 'Why You?', defaultTitle: 'Why You?', placeholder: 'What is your unfair advantage in building this?' },
    competitors: { label: 'Competitors', defaultTitle: 'Competitive Landscape', placeholder: 'Who else is doing this and why are they dead/wrong?' },
    civilizational_impact: { label: 'Civilizational Impact', defaultTitle: 'Civilizational Impact', placeholder: 'How does this project impact civilizational trajectory if successful?' },
    first_experiment: { label: 'First Experiment', defaultTitle: 'First Experiment', placeholder: 'What is the fastest, cheapest way to validate the core mechanism?' },
    valuation_forecast: { label: 'Valuation Forecast', defaultTitle: 'Valuation Forecast', placeholder: 'What could this realistically be worth at maturity?' },
    proof_of_work: { label: 'Proof of Work', defaultTitle: 'Proof of Work', placeholder: 'Links to prototypes, GitHub repos, or early validation.' },
    acronyms: { label: 'Acronyms & References', defaultTitle: 'Acronyms & References', placeholder: 'Define any domain-specific terms or reference materials.' },
    custom: { label: 'Custom Section (Write Your Own)', defaultTitle: '', placeholder: 'Share your additional thoughts...' },
};

export default function IdeaSeedForm() {
    const [descriptor, setDescriptor] = useState('');
    const [oneLiner, setOneLiner] = useState('');
    const [problem, setProblem] = useState('');
    const [solution, setSolution] = useState('');
    const [customSections, setCustomSections] = useState<CustomSection[]>([]);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showOptional, setShowOptional] = useState(false);
    const router = useRouter();

    const addSection = () => {
        setCustomSections([
            ...customSections, 
            { id: Math.random().toString(36).substring(7), type: 'target_audience', title: SECTION_TEMPLATES.target_audience.defaultTitle, content: '' }
        ]);
        if (!showOptional) setShowOptional(true);
    };

    const updateSection = (id: string, updates: Partial<CustomSection>) => {
        setCustomSections(customSections.map(s => {
            if (s.id !== id) return s;
            const updated = { ...s, ...updates };
            if (updates.type && updates.type !== 'custom') {
                updated.title = SECTION_TEMPLATES[updates.type as SectionType].defaultTitle;
            }
            return updated;
        }));
    };

    const removeSection = (id: string) => {
        setCustomSections(customSections.filter(s => s.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Map custom sections to strip 'id' before saving to DB
        const cleanSections = customSections.map(({ type, title, content }) => ({ type, title, content }));

        try {
            const result = await submitIdeaSeed({
                descriptor,
                one_liner: oneLiner,
                problem: problem || null,
                solution_hypothesis: solution || null,
                custom_sections: cleanSections.length > 0 ? cleanSections : null,
            });

            if (result?.error) {
                alert("Server Error: " + JSON.stringify(result.error));
                setError(result.error);
            } else if (result?.data) {
                window.location.href = `/Idea-Seeds`;
            } else {
                alert("Unexpected response missing data/error!");
                setError("An unexpected error occurred. Please try again.");
            }
        } catch (err: any) {
            alert("Exception caught: " + err.message);
            setError(err.message || "Failed to plant seed. Check your connection or constraints.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto rounded-xl bg-black border border-white/10 shadow-2xl overflow-hidden">
            <form onSubmit={handleSubmit}>
                <div className="space-y-1.5 p-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">Plant an Idea Seed</h2>
                    <p className="text-sm text-white/60">
                        Submit a lightweight, AI-native or AGI Proof startup idea that you think should exist. High potential ideas as determined by community response and editorial selection will be recognized and developed as full AGI Futures Startup Ideas.
                    </p>
                </div>
                <div className="p-6 pt-0 space-y-6">
                    {error && (
                        <div className="p-4 text-sm text-red-400 bg-red-400/10 rounded-md border border-red-500/20 break-words whitespace-pre-wrap">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <label htmlFor="descriptor" className="text-sm font-medium leading-none text-white/80">Descriptor <span className="text-red-500">*</span></label>
                        <input 
                            id="descriptor"
                            placeholder="e.g. AI-Native Sales Mastery Platform"
                            value={descriptor}
                            onChange={(e) => setDescriptor(e.target.value)}
                            required
                            className="flex h-10 w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                            maxLength={80}
                        />
                        <p className="text-xs text-white/40">A quick 2-5 word label for the idea.</p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="oneLiner" className="text-sm font-medium leading-none text-white/80">One-Liner <span className="text-red-500">*</span></label>
                        <textarea 
                            id="oneLiner"
                            placeholder="An AI-native connected Sales Mastery platform where human sales becomes the edge in a commoditized world."
                            value={oneLiner}
                            onChange={(e) => setOneLiner(e.target.value)}
                            required
                            className="flex w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px] resize-none transition-colors"
                            maxLength={280}
                        />
                    </div>

                    {!showOptional && problem === '' && solution === '' && customSections.length === 0 ? (
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                            <button 
                                type="button" 
                                onClick={() => setShowOptional(true)}
                                className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" /> Expand Core Details
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                            
                            {/* Standard Core Section */}
                            {(showOptional || problem !== '' || solution !== '') && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="problem" className="text-sm font-medium leading-none text-white/80">Problem (Optional)</label>
                                        <textarea 
                                            id="problem"
                                            placeholder="What specific coordination failure or bottleneck does this solve?"
                                            value={problem}
                                            onChange={(e) => setProblem(e.target.value)}
                                            className="flex w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 min-h-[100px] transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="solution" className="text-sm font-medium leading-none text-white/80">Solution Hypothesis (Optional)</label>
                                        <textarea 
                                            id="solution"
                                            placeholder="How does this realistically start, and how does it compound?"
                                            value={solution}
                                            onChange={(e) => setSolution(e.target.value)}
                                            className="flex w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 min-h-[100px] transition-colors"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Dynamically added custom sections */}
                            {customSections.map((section, index) => (
                                <div key={section.id} className="p-5 border border-white/10 rounded-xl bg-white/5 space-y-4 relative group">
                                    <button 
                                        type="button" 
                                        onClick={() => removeSection(section.id)}
                                        className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-white/60">Section Type</label>
                                            <div className="relative">
                                                <select 
                                                    value={section.type}
                                                    onChange={(e) => updateSection(section.id, { type: e.target.value as SectionType })}
                                                    className="w-full h-9 rounded-md border border-white/10 bg-zinc-800 px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 appearance-none"
                                                >
                                                    {Object.entries(SECTION_TEMPLATES).map(([key, info]) => (
                                                        <option key={key} value={key}>{info.label}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-white/40 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-white/60">Section Title</label>
                                            <input 
                                                value={section.title}
                                                onChange={(e) => updateSection(section.id, { title: e.target.value })}
                                                disabled={section.type !== 'custom'}
                                                placeholder={section.type === 'custom' ? "E.g. Technical Feasibility" : ""}
                                                className="w-full h-9 rounded-md border border-white/10 bg-zinc-900 px-3 py-1 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 disabled:opacity-50 disabled:bg-zinc-800"
                                            />
                                        </div>
                                    </div>

                                    <textarea 
                                        value={section.content}
                                        onChange={(e) => updateSection(section.id, { content: e.target.value })}
                                        placeholder={SECTION_TEMPLATES[section.type].placeholder}
                                        className="flex w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 min-h-[90px] transition-colors"
                                    />
                                </div>
                            ))}

                            <div className="pt-2 flex justify-center">
                                <button 
                                    type="button" 
                                    onClick={addSection}
                                    className="inline-flex items-center gap-2 text-sm font-medium h-9 px-4 rounded-full border border-dashed border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                                >
                                    <Plus className="w-4 h-4" /> Add Section
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-end p-6 pt-0 mt-6 border-t border-white/5 gap-3">
                    <button 
                        type="button" 
                        onClick={() => router.back()}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 text-white/60 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        disabled={isSubmitting || !descriptor || !oneLiner}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white min-w-[120px] shadow-[0_0_15px_rgba(192,38,211,0.4)] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
                    >
                        {isSubmitting ? 'Planting...' : 'Plant Seed'}
                    </button>
                </div>
            </form>
        </div>
    );
}
