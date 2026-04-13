"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { themeMap } from "@/utils/themeMap";
import { Trees, HeartHandshake, Flame, MountainSnow, Stethoscope, Droplets, Leaf } from "lucide-react";

// Global Components
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProjectTags, InlineTags } from "@/components/ProjectTags";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { HoverAcronym } from "@/components/HoverAcronym";

// Local Components
import { ExpandableCitation, CitationSection } from "./components/ExpandableCitation";
import { InteractiveSection } from "./components/InteractiveSection";
import { ScoreCard, RiskItem } from "./components/ScoreCard";
import { ICPSection } from "./components/ICPSection";

// Assets
import heroImage from "./assets/hero.png";
import sanctuaryImage from "./assets/sanctuary.png";
import ritualImage from "./assets/ritual.png";
import palliativeImage from "./assets/palliative.png";
import landImage from "./assets/land.png";

// Acronyms
// GBC: Green Burial Council
// NFDA: National Funeral Directors Association
// ICP: Ideal Customer Profile

const citations = [
    { number: 1, source: "NFDA", title: "2025 Consumer Awareness and Preferences figures", url: "https://nfda.org/news/statistics" },
    { number: 2, source: "NFDA", title: "U.S. funeral-industry scale figures", url: "https://nfda.org/news/statistics" },
    { number: 3, source: "Green Burial Council", title: "Green Burial Standards & Provider Count", url: "https://www.greenburialcouncil.org/" },
    { number: 4, source: "The Lancet", title: "Commission on the Value of Death (2022)", url: "https://www.thelancet.com/commissions/value-of-death" },
    { number: 5, source: "Research", title: "Evidence on integrated palliative care in advanced cancer", url: "https://pubmed.ncbi.nlm.nih.gov/32420485/" },
    { number: 6, source: "Research", title: "Systematic review evidence on end-of-life doula roles", url: "https://pubmed.ncbi.nlm.nih.gov/" },
    { number: 7, source: "Research", title: "Meaning-centered psychotherapy evidence in advanced cancer", url: "https://pubmed.ncbi.nlm.nih.gov/" },
    { number: 8, source: "Research", title: "Psilocybin-assisted cancer-distress trials", url: "https://pubmed.ncbi.nlm.nih.gov/" },
    { number: 9, source: "State of Colorado", title: "Natural-medicine licensing framework", url: "https://dpo.colorado.gov/NaturalMedicine" },
    { number: 10, source: "NFDA", title: "2025 cremation and burial projections", url: "https://nfda.org" },
];

export default function WildReturnClientPage({ initialTags }: { initialTags: any }) {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden selection:bg-[var(--primary)] selection:text-white pb-32" style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Wild Return" theme="emerald" />

            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="wild-return" />
            </div>

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            <article className="relative z-10 pt-32 lg:pt-48">
                {/* HERO SECTION */}
                <header className="max-w-4xl mx-auto px-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block mb-8 text-xs font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-full bg-[var(--primary)]/5">
                            Startup Idea Prototype
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
                            Wild Return <br />
                            <span className="italic text-white/70">Nature-grounded end-of-life sanctuary</span>
                        </h1>
                        <p className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl">
                            A nature-grounded end-of-life sanctuary that combines natural burial, palliative care partnerships, death doulas, psychologists, ritual design, and optional licensed psychedelic facilitation to make dying more peaceful and life more meaningful.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags tags={initialTags?.sector} theme="primary" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10 mt-8"
                    >
                        <Image
                            src={heroImage}
                            alt="Wild Return Sanctuary"
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 text-lg sm:text-xl text-white/70 leading-relaxed font-light italic pl-6 border-l pointer-events-none border-[var(--primary)]/30 max-w-2xl"
                    >
                        Wild Return is the kind of place many families immediately understand once they see it. Not a funeral home with better branding. Not another sterile handoff between hospital, hospice, and logistics. A real landscape, protected land, quiet architecture, human guidance, and rituals that help people face death with less denial and more dignity.
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                {/* THESIS CONTENT MAX WIDTH */}
                <div className="max-w-3xl mx-auto px-6 space-y-32">

                    {/* HEADLINE STAT */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> Demand vs. Infrastructure
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8 items-start mb-10">
                            <div>
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2">61.4%</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">Americans interested in<br />green funeral options</p>
                            </div>
                            <div>
                                <p className="text-5xl font-light text-[var(--secondary)] tracking-tighter mb-2">&lt; 1%</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">Infrastructure supply<br />built for this demand</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            61.4% of Americans say they are interested in green funeral options, yet the latest public <HoverAcronym acronym="GBC" definition="Green Burial Council" theme="emerald" /> category breakdown still listed only <strong className="font-medium text-white">179 certified funeral homes</strong> and <strong className="font-medium text-white">9 certified conservation cemeteries</strong>, while <HoverAcronym acronym="NFDA" definition="National Funeral Directors Association" theme="emerald" /> says the U.S. has more than 15,401 funeral homes overall. Demand is mainstream. Integrated, high-trust supply is still tiny.
                            <ExpandableCitation number={1} source="NFDA 2025" title="Consumer Awareness and Preferences" url="https://nfda.org/news/statistics" />
                            <ExpandableCitation number={2} source="NFDA" title="U.S. funeral-industry scale figures" url="https://nfda.org/news/statistics" />
                            <ExpandableCitation number={3} source="Green Burial Council" title="Provider category count" url="https://www.greenburialcouncil.org/" />
                        </p>
                    </section>

                    {/* THE PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Problem</h2>
                        <p className="text-xl text-[var(--primary)] leading-relaxed font-light mb-8 italic">
                            Modern deathcare is optimized for containment, throughput, and liability. It is not optimized for truth.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                            The dominant menu is industrial burial on one side and cremation on the other. Conventional burial still typically means embalming, resource-intensive caskets, and vault-based cemetery infrastructure. Green burial standards were created in direct opposition to that model, emphasizing unembalmed remains, biodegradable materials, and land practices that reduce environmental harm and can support habitat protection.
                            <ExpandableCitation number={2} source="NFDA" title="U.S. funeral-industry scale figures" url="https://nfda.org/news/statistics" />
                            <ExpandableCitation number={3} source="Green Burial Council" title="Green Burial Standards" url="https://www.greenburialcouncil.org/" />
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            Cremation solves some of the machinery problem, but it often dissolves place, continuity, and ecology at the exact moment families most need them. Meanwhile, the broader medical system still tends to push death out of communal life and into institutional pipelines. The 2022 Lancet Commission on the Value of Death argued that modern societies have over-medicalized death and neglected its social and relational dimensions.
                            <ExpandableCitation number={4} source="The Lancet" title="Commission on the Value of Death" url="https://www.thelancet.com/commissions/value-of-death" />
                        </p>
                    </section>

                    {/* SOLUTION HYPOTHESIS */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Solution Hypothesis</h2>
                        <InlineTags tags={initialTags?.enabling_technology} theme="primary" />
                        
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 mb-12">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-4">Tagline</h3>
                            <p className="text-2xl font-serif text-white/90">Build the place people wish existed when cure is no longer the point.</p>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            The mechanism is straightforward. When death is made less industrial, more local, and more embodied, families get more agency, more coherence, and a better container for grief. When burial is tied to protected land and ecological stewardship, the disposition itself becomes restorative rather than extractive. 
                        </p>

                        <h3 className="text-2xl font-serif text-white mt-12 mb-8">The Five Layers</h3>
                        <div className="space-y-6">
                            {[
                                { title: "Protected Land", desc: "For natural burial, memorial groves, walking paths, native ecology, and simple markers mapping systems aligned with conservation principles.", c: [2, 3], icon: <Leaf className="w-6 h-6 text-[var(--primary)]" /> },
                                { title: "In-Person Support", desc: "Integrated palliative care to improve quality of life, alongside end-of-life doulas as a nonmedical layer of practical, emotional, and existential support.", c: [5, 6], icon: <HeartHandshake className="w-6 h-6 text-[var(--secondary)]" /> },
                                { title: "Ritual Design", desc: "Structured meaning-making inspired by meaning-centered psychotherapy, offering profound spiritual well-being near the end of life.", c: [7], icon: <Flame className="w-6 h-6 text-[var(--primary)]" /> },
                                { title: "Quiet Architecture", desc: "A common house. Quiet rooms. Covered porches. Firelight. Natural materials that feel like they belong to mortality and memory, not a transactions team.", c: [], icon: <MountainSnow className="w-6 h-6 text-[var(--secondary)]" /> },
                                { title: "Licensed Facilitation", desc: "Optional licensed psychedelic facilitation where legal and clinically appropriate, to sustain reductions in anxiety and depression.", c: [8, 9], icon: <Droplets className="w-6 h-6 text-[var(--primary)]" /> }
                            ].map((layer, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.01 }} className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-6 items-start">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10 shrink-0">
                                        {layer.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-2">{layer.title}</h4>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">
                                            {layer.desc}
                                            {layer.c.map(num => (
                                                <ExpandableCitation key={num} number={num} source={citations.find(x => x.number === num)?.source || ""} title={citations.find(x => x.number === num)?.title || ""} url={citations.find(x => x.number === num)?.url || ""} />
                                            ))}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ICP EXPERIMENT */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Specific Example per <HoverAcronym acronym="ICP" definition="Ideal Customer Profile" theme="emerald" /></h2>
                        <InlineTags tags={initialTags?.customer} theme="primary" />
                        
                        <ICPSection 
                            icps={[
                                {
                                    id: "terminal",
                                    title: "Facing terminal illness",
                                    description: "Do not want the last chapter to feel like a procedural handoff between fluorescent rooms and generic vendors. They want trees, family, air, ritual, and a body returning to the earth in a way that preserves living land over polished boxes underground.",
                                    image: palliativeImage
                                },
                                {
                                    id: "children",
                                    title: "Children planning for parent",
                                    description: "They do not want grief converted into paperwork and upsells. They want a place where burial planning, family support, vigil design, remembrance, and return visits all happen in one coherent setting.",
                                    image: sanctuaryImage
                                },
                                {
                                    id: "couple",
                                    title: "Couple pre-planning",
                                    description: "They know they do not want embalming, vaults, or industrial machinery. They want an end that reflects how they actually lived, with more nature, more honesty, and less industrial theater.",
                                    image: icpCoupleImage
                                }
                            ]}
                        />
                    </section>

                    {/* NEGLECTEDNESS */}
                    <div className="mb-16">
                        <NeglectednessSlider 
                            score={85} 
                            interpretation="This category is underbuilt in exactly the way founders should care about. The current category is best described as crowded in legacy infrastructure, sparse in coherent alternatives. What remains missing is a flagship institution that combines them into a trusted, beautiful, repeat-visited place."
                        />
                    </div>

                    {/* MARKET */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Market & Why Now</h2>
                        <InlineTags tags={initialTags?.readiness} theme="primary" />
                        
                        <div className="my-12 space-y-10">
                            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20 shadow-2xl">
                                <Image src={landImage} alt="Protected Land" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-xl text-white/80 leading-relaxed font-light">
                                    NFDA says funeral homes generate <strong className="font-medium text-white">$16.3 billion</strong> in U.S. revenue, while crematories and cemeteries generate another <strong className="font-medium text-white">$4.274 billion</strong>. The national cremation rate is projected at 63.4% in 2025, reaching 82.3% by 2045. The obvious read is that burial is dying. The better read is that people are abandoning old burial forms faster than better replacements are being built.
                                    <ExpandableCitation number={2} source="NFDA" title="U.S. funeral-industry scale figures" url="https://nfda.org/news/statistics" />
                                    <ExpandableCitation number={10} source="NFDA" title="2025 cremation and burial projections" url="https://nfda.org/news/statistics" />
                                </p>
                                <p className="text-xl text-[var(--primary)] italic font-light border-l border-[var(--primary)]/30 pl-6">
                                    Wild Return does not need to win mass commodity burial volume. It can build a premium, trust-heavy category around burial rights, family support, and land stewardship.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* BUSINESS MODEL */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Business Model</h2>
                        <InlineTags tags={initialTags?.product_type} theme="primary" />
                        
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-10">
                            Wild Return should be structured as a <strong className="font-medium text-white">place-first institution with aligned service revenue</strong>, not as a funeral home with prettier copy. The core revenue streams are burial plot sales, pre-need planning, family coordination, memorial packages, and stewardship contributions.
                        </p>

                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--primary)]/30">
                                <h3 className="text-white font-medium mb-2">Land & Cemetery Entity</h3>
                                <p className="text-white/60 text-sm font-light">Controls protected land, perpetual care, conservation obligations, and burial operations.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-white font-medium mb-2">Operating Entity</h3>
                                <p className="text-white/60 text-sm font-light">Handles rituals, planning, grief support coordination, hospitality, and annual remembrance programming.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--secondary)]/30">
                                <h3 className="text-white font-medium mb-2">Optional Licensed Affiliate</h3>
                                <p className="text-white/60 text-sm font-light">Provides psychedelic facilitation under state laws (e.g. Colorado) where applicable and structurally distinct.</p>
                            </div>
                        </div>
                    </section>

                    {/* SCORES AND RISKS */}
                    <section className="space-y-8">
                        <InlineTags tags={initialTags?.founder_fit} theme="primary" />
                        <ScoreCard
                            type="moat"
                            title="Moat Potential"
                            score={67}
                            summary="Built on place, trust, permissions, and memory."
                            details={
                                <div>
                                    <p className="mb-4">Four compounding assets form the moat:</p>
                                    <ul className="space-y-4 list-disc list-inside mb-6">
                                        <li><strong className="text-white">Unique land:</strong> Geographic lock-in for pristine sanctuaries.</li>
                                        <li><strong className="text-white">Regulatory approvals:</strong> Hard-won cemetery rules and local zoning permissions.</li>
                                        <li><strong className="text-white">Referral trust:</strong> Earned network from hospices, clinicians, doulas, and therapists.</li>
                                        <li><strong className="text-white">Data moat:</strong> Consented knowledge graph around ritual preferences, family planning patterns, and referral flows.</li>
                                    </ul>
                                </div>
                            }
                        />

                        <ScoreCard
                            type="difficulty"
                            title="Difficulty to Bring to Market"
                            score={81}
                            summary="Demand is massive, but executing land-intensive, highly-regulated real infrastructure is extremely difficult."
                            details={
                                <div>
                                    <RiskItem
                                        level="Very High"
                                        title="Capital"
                                        description="Land, buildout, staffing, and long trust-building cycles make this much heavier than a normal services startup."
                                        mitigation="Use pre-need deposits and donor-backed conservation commitments to validate demand."
                                    />
                                    <RiskItem
                                        level="High"
                                        title="Regulatory"
                                        description="Cemetery rules, land-use approvals, perpetual-care obligations, and natural-medicine compliance are severe constraints."
                                        mitigation="Isolate clinical compliance in affiliate entities and focus first on burial logic rather than full therapeutic integration."
                                    />
                                    <RiskItem
                                        level="Medium"
                                        title="Market"
                                        description="Category adoption is slowed by taboo and incumbent defaults."
                                        mitigation="Founder-led storytelling, viral aesthetics, and public narrative momentum."
                                    />
                                </div>
                            }
                        />
                    </section>

                    {/* EXPERIMENTS */}
                    <section>
                        <InteractiveSection
                            title="First Experiment"
                            defaultVisibleText="In one target geography, test if families and partners will place refundable deposits before the sanctuary exists."
                            expandableText={
                                <div>
                                    <p className="mb-4">Smallest serious test: <strong className="text-white">One exceptional landing page</strong>, a founder essay, and thirty interviews across palliative care and families.</p>
                                    <p className="mb-4">Pass condition: <strong className="text-white">25 qualified deposits</strong> and <strong className="text-white">5 referral partners</strong> within 60 days.</p>
                                    <p>If that does not happen, the idea may be emotionally resonant but not yet urgent enough in that geography.</p>
                                </div>
                            }
                        />
                    </section>

                    {/* CIVILIZATIONAL IMPACT */}
                    <section className="pt-12 border-t border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-4xl font-serif text-white">Civilizational Impact</h2>
                        </div>
                        <InlineTags tags={initialTags?.outcomes} theme="primary" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8 mt-6">
                            A society that turns death into sterile logistics eventually hollows out life too. Wild Return pushes in the opposite direction. It makes mortality more visible, care more communal, burial more ecologically coherent, and grief less outsourced.
                        </p>

                        <div className="my-12 space-y-10">
                            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-xl">
                                <Image src={ritualImage} alt="Quiet Room Architecture" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-serif text-[var(--primary)] mb-4">AGI Future Edge</h3>
                                <p className="text-xl text-white/80 leading-relaxed font-light">
                                    Most founders assume every winning institution becomes more digital. Some become more human. As synthetic media proliferates and cognition gets cheaper, scarce physical goods—trust, place, witness, ritual—rise in value. Software should support the sanctuary, not replace it.
                                </p>
                            </div>
                        </div>

                        {/* Open Source / Priority */}
                        <div className="mb-16">
                            <OpenSourcePriority 
                                civilizationalImpactScore={69}
                                neglectednessScore={85}
                                ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective. Wild Return stops short of Very High only because it is heavily reliant on physical land acquisition."
                            />
                        </div>
                    </section>

                    {/* Transferable Insight */}
                    <section className="pt-12">
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
                            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-6 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                            </h3>
                            <p className="text-xl leading-relaxed text-white/90 font-light mb-6">
                                When a category is emotionally central and institutionally broken, the opportunity is rarely a better transaction. It is a better ritual container.
                            </p>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                The best companies in those categories do not just provide a service. They redesign the emotional architecture around the moment.
                            </p>
                        </div>
                    </section>

                    {/* Citations Section */}
                    <div className="pt-12">
                        <CitationSection citations={citations} />
                    </div>
                </div>
            </article>
        
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="wild-return" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="wild-return" />
            </div>
        </main>
    );
}
