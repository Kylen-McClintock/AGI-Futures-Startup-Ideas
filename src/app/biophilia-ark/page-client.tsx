"use client";
import { InterestedButton } from "@/components/InterestedButton";

import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { WellnessMarketChart } from "./components/WellnessMarketChart";
import { Leaf, Activity, Sparkles, Building2, Wind, Shield, Users, Target, MoveUpRight, ChevronDown, Link as LinkIcon, HeartPulse, Globe2 } from "lucide-react";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";

// Assets
import heroImage from './assets/office_lobby_wall_v1.png';
import cloudForestOld from './assets/cloud_forest.png';
import cloudForestPanel from './assets/cloud_forest_v3.png';
import desertMonolith from './assets/desert_monolith_v2.png';
import freshwaterCliff from './assets/freshwater_cliff_v2.png';
import prairieLightwall from './assets/prairie_lightwall_v3.png';
import dartFrog from './assets/macro_frog.png';
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

export default function BiophiliaArkClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Housing', 'Cities', 'Community', 'Science'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Meaning Crisis', 'Social Fragmentation', 'Cultural Resistance'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Enterprises', 'Consumers'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Hardware', 'Platform'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Vision AI', 'Augmented Reality', 'Simulations', 'Knowledge Graphs'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Human Flourishing', 'Biodiversity', 'Community Renewal', 'Air Quality', 'Climate']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Biophilia Ark" theme="emerald" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="biophilia-ark" />
            </div>


            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group"
                    >
                        <Image
                            src={heroImage}
                            alt="Cloud Forest Wall portal flush-integrated into a luxury hallway"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Biophilia Ark
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/80 leading-relaxed font-light mb-8 max-w-3xl">
                            Builds high-design living walls that turn dead interiors into living portals, with optional animals, active biofiltration, and revenue flowing back to the real biome each wall represents.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="emerald" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Subtext and Headline Stat */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[var(--primary)]/30 transition-colors duration-500 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 overflow-hidden">
                                <Leaf className="w-5 h-5 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-xl text-white font-light mb-3">The Corridor</h4>
                            <p className="text-white/60 font-light leading-relaxed">
                                A dead-end hallway becomes a cloud-forest opening with moss, stone, mist, and the flash of a dart frog.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[var(--primary)]/30 transition-colors duration-500 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 overflow-hidden">
                                <Sparkles className="w-5 h-5 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-xl text-white font-light mb-3">The Lobby</h4>
                            <p className="text-white/60 font-light leading-relaxed">
                                A luxury lobby ends in a glowing desert canyon with sculpted rock, sparse planting, and a gecko on a warm ledge.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[var(--primary)]/30 transition-colors duration-500 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 overflow-hidden">
                                <Wind className="w-5 h-5 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-xl text-white font-light mb-3">The Waiting Room</h4>
                            <p className="text-white/60 font-light leading-relaxed">
                                A waiting room gets moving water, schooling fish, and a calm focal point people actually want to watch.
                            </p>
                        </div>
                    </div>
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-transparent text-center">
                        <p className="text-2xl sm:text-3xl text-white leading-relaxed font-light">
                            This is not office greenery. It is a new <strong className="font-medium text-[var(--secondary)]">architectural status symbol</strong>, one that signals taste, calm, and visible care for the living world.
                        </p>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-center p-12 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent relative overflow-hidden">
                        <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[var(--primary)]/20 rounded-full blur-[100px] pointer-events-none" />
                        <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-4 text-center z-10">
                            Wellness real estate reached <strong className="text-[var(--secondary)]">$584 billion</strong> in 2024
                        </h3>
                        <p className="text-xl text-white/60 font-light text-center z-10">
                            and is forecast to reach <strong className="text-white">$1.1 trillion by 2029.</strong>
                        </p>
                    </div>

                    <div className="mt-4 text-right">
                        <ExpandableCitation
                            label="[1]"
                            sourceUrl="https://globalwellnessinstitute.org/industry-research/wellness-real-estate-market/"
                            sourceText="Global Wellness Institute, wellness real estate reached $584 billion in 2024 and is forecast to reach $1.1 trillion by 2029."
                            theme="emerald"
                        />
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Problem Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Urban isolation and <br className="hidden sm:block" />
                            <span className="text-white/50">the loss of living contact.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <p className="text-lg leading-relaxed text-white/80 font-light mb-6">
                                Humanity is becoming more urban just as the natural world is under more pressure. The United Nations projects that <strong className="text-white font-medium">68% of the world will live in urban areas by 2050</strong>
                                <ExpandableCitation
                                    label="[2]"
                                    sourceUrl="https://www.un.org/development/desa/en/news/population/2018-revision-of-world-urbanization-prospects.html"
                                    sourceText="United Nations DESA, 68% of the world population is projected to live in urban areas by 2050."
                                    theme="emerald"
                                />. Around <strong className="text-white font-medium">1 million species are threatened with extinction</strong>
                                <ExpandableCitation
                                    label="[3]"
                                    sourceUrl="https://ipbes.net/global-assessment"
                                    sourceText="IPBES, around 1 million animal and plant species threatened with extinction."
                                    theme="emerald"
                                />, and amphibians are the most threatened vertebrate class, with <strong className="text-white font-medium">40.7% of species globally threatened</strong>
                                <ExpandableCitation
                                    label="[4]"
                                    sourceUrl="https://www.nature.com/articles/s41586-023-06578-4"
                                    sourceText="Luedtke et al., amphibians are the most threatened vertebrate class, with 40.7% of species globally threatened."
                                    theme="emerald"
                                />.
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col h-full">
                            <h3 className="text-2xl font-light text-white mb-6">The Missing Element</h3>
                            <p className="text-lg leading-relaxed text-white/70 font-light mb-8">
                                Urban life removes not just wild landscapes, but daily contact with other forms of life. Plants matter, but so do movement, behavior, and the quiet fascination of watching animals exist.
                            </p>

                            <div className="mt-auto space-y-6">
                                <div className="border-l-2 border-rose-500/50 pl-4 py-1">
                                    <h4 className="text-rose-400 font-medium text-sm mb-1 uppercase tracking-wider">The Current Fix</h4>
                                    <p className="text-white/60 text-sm font-light">Existing living walls usually miss the mark. Many look commercial, stick awkwardly into the room, and are sold as generic wellness décor.</p>
                                </div>
                                <div className="border-l-2 border-[var(--primary)]/50 pl-4 py-1">
                                    <h4 className="text-[var(--primary)] font-medium text-sm mb-1 uppercase tracking-wider">The Real Opportunity</h4>
                                    <p className="text-white/80 text-[15px] font-light leading-relaxed">Make nature a premium architectural element that wealthy homeowners, hotels, offices, and healthcare spaces actively want because it is calming, beautiful, memorable, and status-enhancing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Solution Hypothesis */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Solution Hypothesis
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            Turn dead walls into <span className="text-white/50">living worlds.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/5 order-2 md:order-1">
                            <Image src={cloudForestOld} alt="Original Cloud Forest Wall Concept" fill className="object-cover" />
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col justify-center order-1 md:order-2">
                            <p className="text-xl text-white/90 leading-relaxed font-light mb-8">
                                Start with flush-integrated, modular living walls designed as portals into specific biomes. Win on beauty, calm, social value, and conservation alignment. Then layer in animals and biofiltration where the install, budget, and husbandry standards justify it.
                            </p>

                            <div className="text-lg text-white/70 font-light space-y-4">
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Sculpted rock-like forms in mineral composite or ceramic</div>
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Recessed planting pockets and hidden irrigation</div>
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Selective painted depth where biology should not fill</div>
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Optional water channels or reflective pools</div>
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Concealed lighting and optional microLED horizon/sky panels</div>
                                <div><span className="text-[var(--primary)] font-bold mr-2">✓</span> Quiet fans turning the wall into a working biofilter</div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Specific Ecosystems */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Portals
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                            Specific ecosystems that could actually work well.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Desert Monolith */}
                        <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--primary)]/20 transition-colors group flex flex-col">
                            <div className="relative h-64 w-full">
                                <Image src={desertMonolith} alt="Desert Monolith" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-light text-white mb-3 flex items-center gap-2">Desert Monolith</h3>
                                <p className="text-white/60 font-light leading-relaxed mb-6">Sculpted canyon stone, sparse high-impact planting, warm light gradients, optional microLED horizon, and shallow reflective water if desired. Captures heat, depth, and silence without forcing a humid ecosystem into a dry interior.</p>
                                <details className="mt-auto group/details cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                                    <summary className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <span className="text-sm font-medium text-white/80">Fauna & Mechanics</span>
                                        <ChevronDown className="w-4 h-4 text-white/50 group-open/details:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 text-sm space-y-3 border-t border-white/5 mt-2 bg-black/20">
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Fauna:</strong><span className="text-white/70">Small captive-bred desert reptiles (geckos), hardy invertebrates.</span></p>
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Why it works:</strong><span className="text-white/70">Visually premium, mechanically simpler, and easy to place in luxury homes, offices, and hospitality spaces.</span></p>
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Freshwater Cliff */}
                        <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--primary)]/20 transition-colors group flex flex-col">
                            <div className="relative h-64 w-full">
                                <Image src={freshwaterCliff} alt="Freshwater Cliff" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-light text-white mb-3 flex items-center gap-2">Freshwater Cliff</h3>
                                <p className="text-white/60 font-light leading-relaxed mb-6">Planted ledges, moving water, submerged pockets, and integrated stream or pool sections.</p>
                                <details className="mt-auto group/details cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                                    <summary className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <span className="text-sm font-medium text-white/80">Fauna & Mechanics</span>
                                        <ChevronDown className="w-4 h-4 text-white/50 group-open/details:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 text-sm space-y-3 border-t border-white/5 mt-2 bg-black/20">
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Fauna:</strong><span className="text-white/70">Small schooling fish, shrimp, snails, and other compatible freshwater life.</span></p>
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Why it works:</strong><span className="text-white/70">Fish create immediate emotional pull, especially in waiting rooms, lobbies, pediatric spaces, and hospitality.</span></p>
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Cloud Forest Wall */}
                        <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--primary)]/20 transition-colors group flex flex-col">
                            <div className="relative h-64 w-full">
                                <Image src={cloudForestPanel} alt="Cloud Forest Wall" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-light text-white mb-3 flex items-center gap-2">Cloud Forest Wall</h3>
                                <p className="text-white/60 font-light leading-relaxed mb-6">Dense moss, bark forms, vines, mist, filtered-green light, and hidden perches. Immersive, high-impact vertical forest ecosystem.</p>
                                <details className="mt-auto group/details cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                                    <summary className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <span className="text-sm font-medium text-white/80">Fauna & Mechanics</span>
                                        <ChevronDown className="w-4 h-4 text-white/50 group-open/details:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 text-sm space-y-3 border-t border-white/5 mt-2 bg-black/20">
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Fauna:</strong><span className="text-white/70">Small captive-bred amphibians (dart frogs), tropical invertebrates (walking sticks, display beetles).</span></p>
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Why it works:</strong><span className="text-white/70">Delivers strong visual impact and movement while providing a perfectly controlled humid environment for sensitive species.</span></p>
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Prairie Lightwall */}
                        <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--primary)]/20 transition-colors group flex flex-col">
                            <div className="relative h-64 w-full">
                                <Image src={prairieLightwall} alt="Prairie Lightwall" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-light text-white mb-3 flex items-center gap-2">Prairie Lightwall</h3>
                                <p className="text-white/60 font-light leading-relaxed mb-6">Native grasses, seed heads, mineral earth tones, and seasonal softness.</p>
                                <details className="mt-auto group/details cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                                    <summary className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <span className="text-sm font-medium text-white/80">Fauna & Mechanics</span>
                                        <ChevronDown className="w-4 h-4 text-white/50 group-open/details:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 text-sm space-y-3 border-t border-white/5 mt-2 bg-black/20">
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Fauna:</strong><span className="text-white/70">Usually flora-first. Small insect life could be explored in specialized educational versions.</span></p>
                                        <p><strong className="text-[var(--primary)] font-medium block mb-1">Why it works:</strong><span className="text-white/70">Calm, elegant, robust, and easier to scale across commercial spaces.</span></p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>


                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Why Now */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market & Timing
                        </div>
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                A prestige product with <br className="hidden sm:block" /><span className="text-white/50">real emotional utility.</span>
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags label="Readiness" tags={tags.readiness} theme="emerald" />
                            </div>
                        </div>
                    </div>

                    
                <div className="mb-32">
                    <div className="mb-16">
                        
                        <NeglectednessSlider 
                            score={89} 
                            interpretation="Highly neglected. Consumer hardware intersecting with active bio-filtration and terrariums is a bizarre, high-friction space that software investors avoid entirely. It requires hardware, biological maintenance, and rigorous design expertise."
                        />

</div>
                </div>
<div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                                <h3 className="text-2xl font-light text-white mb-6">Market</h3>
                                <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                    The biggest early buyers are luxury homes, trophy offices, hotels, high-end multifamily developers, and select healthcare spaces. They want a calming presence, but they also want a new kind of status symbol.
                                </p>
                                <p className="text-lg text-white/70 leading-relaxed font-light">
                                    People know a great biowall is expensive. Unlike a supercar, it signals that the buyer values beauty, nature, and giving back. The company sits inside wellness real estate, luxury interiors, experiential hospitality, workplace design, and conservation-linked brand infrastructure. Those are much larger and better markets than "living walls."
                                </p>
                            </div>

                            <div className="h-[400px]">
                                <WellnessMarketChart />
                            </div>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500 h-full">
                            <h3 className="text-2xl font-light text-white mb-6">Why Now</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The demand is ready because premium real estate, hospitality, and workplace design are moving toward healthier, more memorable environments, and wellness real estate is growing quickly.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                The supply is ready because custom fabrication is cheaper, additive manufacturing makes intricate habitat geometry practical, augmented reality makes client visualization easier, sensor stacks make maintenance measurable, and AI makes custom design faster. The company does not need perfect ecological fidelity to win.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model & GTM */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Who we serve and <br className="hidden sm:block" /><span className="text-white/50">how we grow.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col">
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                                <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                    <Users className="w-6 h-6 text-[var(--secondary)]" /> Ideal Customer Profile
                                </h3>
                                <div className="mt-4 sm:mt-0">
                                    <InlineTags tags={tags.customer} theme="emerald" />
                                </div>
                            </div>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The biggest early buyers are luxury homes, trophy offices, hotels, high-end multifamily developers, and select healthcare spaces.
                            </p>
                            <div className="mt-auto space-y-4">
                                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" /> The Growth Loop is Visual</h4>
                                <p className="text-white/60 font-light">People photograph the install. Designers ask who built it. The venue uses it in marketing. The company publishes every wall as a named world with its biome story, animal life if present, design details, and conservation partner.</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col">
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                                <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                    <Building2 className="w-6 h-6 text-[var(--secondary)]" /> Business Model
                                </h3>
                                <div className="mt-4 sm:mt-0">
                                    <InlineTags tags={tags.product_type} theme="emerald" />
                                </div>
                            </div>
                            <ul className="grid grid-cols-2 gap-4 text-[15px] text-white/80 font-light mb-8">
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5">Upfront design/install fees</li>
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5">Recurring maintenance</li>
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5">Premium biofilter upgrade</li>
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5">Ecosystem monitoring</li>
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5 text-[var(--primary)] font-medium">Biome-linked conservation</li>
                                <li className="bg-white/5 p-3 rounded-xl border border-white/5">Designer collections</li>
                            </ul>
                            <div className="mt-auto">
                                <p className="text-lg text-white/80 leading-relaxed font-light bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong>Value flow is simple:</strong> Buyers get beauty and status. Occupants get a better daily environment. Conservation partners get recurring funds tied to a specific biome. Biophilia Ark gets installation and recurring service revenue.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent mt-8 group flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                <Target className="w-6 h-6 text-[var(--secondary)]" /> Media Wedge
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                <strong className="text-white text-xl block mb-2">Worlds Inside Walls</strong>
                                A short-form video and podcast series showing how each installation is designed, built, maintained, inhabited, and tied back to a real ecosystem.
                            </p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">
                                Content focuses on extreme high-definition macro photography of the micro-ecosystems, showcasing the vividly alive, perfectly controlled miniature worlds just behind the glass.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 transition-colors shadow-2xl shadow-black/50">
                            <Image src={dartFrog} alt="High definition macro photography of a vivid poison dart frog inside a luxury biowall" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>
                </motion.section>

                {/* Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 space-y-8"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Evaluation Metrics
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={74}
                        type="difficulty"
                        defaultVisibleText="Hard, but very buildable if the first phase stays flora-first, flush-integrated, and tightly standardized, with fauna reserved for premium flagship builds."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: High</strong>
                                    Water, leaks, drainage, lighting, and maintenance errors can destroy margins.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with a narrow set of modules and over-instrument every pilot.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: Medium for flora-first, Very High for fauna</strong>
                                    Animal welfare, transport, permitting, and species-specific rules rise fast once reptiles, amphibians, fish, or butterflies are involved.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Keep fauna optional, rare, and tightly controlled. Work only with captive-bred species and expert partners.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: High</strong>
                                    Flagship installs, fabrication, and field service require working capital.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Use paid design deposits, contract manufacturing, and city-by-city rollout.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: Very High</strong>
                                    This business sits at the intersection of design studio, biological systems company, and service operator.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Launch with one city, two core ecosystem lines, and a short approved species and materials list.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={84}
                        type="moat"
                        defaultVisibleText="In an AGI world, anyone can generate pretty renders. Very few can keep real living walls and fauna-enhanced micro-ecosystems beautiful, stable, serviceable, and profitable across hundreds of sites."
                        expandableText={
                            <div className="text-lg bg-[var(--primary)]/20 p-6 rounded-2xl border border-[var(--primary)]/40 leading-relaxed font-light text-[var(--primary)]">
                                <p className="mb-4">The moat is built on:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4 text-white/80">
                                    <li>Proprietary library of biome modules that actually work</li>
                                    <li>Maintenance data by climate, building type, species mix, light profile</li>
                                    <li>Husbandry playbooks for reptiles, amphibians, fish, and insects</li>
                                    <li>Integrated relationships with architects, developers, and premium venues</li>
                                    <li>Service operations and replacement logistics</li>
                                    <li>Trusted biome-matched conservation partnerships</li>
                                </ul>
                                <p>Each install improves the playbook. That compounds.</p>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* AGI Future Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> AGI Future Edge
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Lowering the cost of <br className="hidden sm:block" /><span className="text-white/50">physical complexity.</span>
                        </h2>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500 group">
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                            AGI lowers the cost of custom ecosystem design, maintenance intelligence, and digital-twin planning. Biophilia Ark can use AI to:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 font-light mb-6">
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Generate site-specific concepts fast</li>
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Optimize species and materials selection</li>
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Predict maintenance load</li>
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Monitor wall health with computer vision</li>
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Build digital twins of every installation</li>
                            <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-[var(--primary)]">✦</span> Improve biome-conservation fit over time</li>
                        </ul>
                        <p className="text-xl text-[var(--tertiary)] font-light border-l-2 border-[var(--primary)]/40 pl-6 mt-8">
                            Long term, this becomes an operating system for living architecture.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* First Experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-8">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Validation
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            First Experiment
                        </h2>
                    </div>

                    <details className="glass-panel rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-[var(--secondary)]" /> View Initial Validation Pilot
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-white/5 bg-[var(--primary)]/30">
                            <p className="text-lg text-white/80 font-light leading-relaxed border-l-2 border-[var(--primary)]/40 pl-6 mb-8 mt-6">
                                <strong>Hypothesis:</strong> Premium buyers will pay to reserve a portal-grade living wall before a physical build exists.
                            </p>
                            <div className="space-y-4 text-white/70 font-light ml-6 border-l border-white/10 pl-6">
                                <p><strong className="text-white">Test:</strong> Create three elite concept packages, Desert Monolith, Cloud Forest Wall, and Freshwater Cliff, then pitch 30 target buyers in one city.</p>
                                <p><strong className="text-white">Pass:</strong> 3 or more buyers pay a design deposit of at least $2,500 within 45 days.</p>
                                <p><strong className="text-white">Fail:</strong> Buyers love the concept but reject the price, timeline, or maintenance plan.</p>
                            </div>
                        </div>
                    </details>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & KPIs */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Final Assessment
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.outcomes} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                This company can make cities feel more alive while routing more money and attention toward biodiversity.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6">
                                Its biggest cultural value is keeping the natural world psychologically present inside urban life. Its biodiversity value is even more distinctive: A child who watches fish schooling, a gecko hunting, or leaf-cutter ants carrying leaves is engaging with life in a more direct way than a generic green lobby plant ever provides. This does not replace real conservation. It helps fund it, popularize it, and make it feel immediate.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">78</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Biodiversity</span>
                                            <span className="text-[var(--secondary)] font-mono">91</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Human Flourishing</span>
                                            <span className="text-[var(--secondary)] font-mono">86</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Community Renewal</span>
                                            <span className="text-[var(--secondary)] font-mono">72</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Air Quality</span>
                                            <span className="text-[var(--secondary)] font-mono">41</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Climate</span>
                                            <span className="text-[var(--secondary)] font-mono">82</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Paid design deposits from target buyers</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> 12-month survival and visual-quality score by ecosystem line</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Maintenance labor hours per square foot per month</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Percentage of installs that generate a referral or a second-location sale</li>
                            </ul>
                        </div>
                    </div>

<div className="mb-16">
                    <OpenSourcePriority 
                        civilizationalImpactScore={78}
                        neglectednessScore={89}
                        ideaSpecificText="An open-source hardware blueprint for Biophilia Ark accelerates biological integration into urban environments globally, ensuring climate resilience technology isn't artificially constrained."
                    />
                </div>



                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--primary)]/5 to-transparent mt-12 hover:border-[var(--primary)]/20 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "If you want a mission-driven luxury product to spread, do not lead with guilt. Lead with beauty, identity, fascination, and visible taste, then connect that desire to a real positive externality."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* References */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-4xl"
                >
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/60 transition-colors">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                            <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="space-y-12">
                            <details className=" group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
                                
            <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <h4 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 !mb-0 flex items-center gap-4">
                    <span className="w-8 h-px bg-[var(--primary)]/50 block hidden sm:block"></span>
                    Acronyms
                </h4>
                <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="pt-8">
        
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60 font-light">
                                    <li><strong className="text-white/80">AR:</strong> Augmented reality</li>
                                    <li><strong className="text-white/80">CO2:</strong> Carbon dioxide</li>
                                    <li><strong className="text-white/80">ICP:</strong> Ideal customer profile</li>
                                    <li><strong className="text-white/80">KPI:</strong> Key performance indicator</li>
                                    <li><strong className="text-white/80">LED:</strong> Light-emitting diode</li>
                                    <li><strong className="text-white/80">microLED:</strong> A display made of tiny LEDs</li>
                                    <li><strong className="text-white/80">VOC:</strong> Volatile organic compound</li>
                                </ul>
                            
            </div>
        </details>

                            <details className=" group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                <summary className="list-none flex justify-between items-center outline-none py-4 hover:opacity-80 transition-opacity">
            <h4 className="font-mono uppercase tracking-widest text-xs text-[var(--primary)] mb-0 flex items-center gap-4"><span className="w-8 h-px bg-[var(--primary)]/50 block"></span>References</h4>
            <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
         </summary>
         <div className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Global Wellness Institute, wellness real estate reached $584 billion in 2024 and is forecast to reach $1.1 trillion by 2029.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            United Nations DESA, 68% of the world population is projected to live in urban areas by 2050.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Jimenez et al., review finding associations between nature exposure and improved cognitive function, blood pressure, mental health, physical activity, and sleep.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Gonçalves et al., systematic review on restorative effects of nature exposure and biophilic design during work.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Hähn et al., office planting study reporting gains in perceived attention, creativity, and productivity.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[6]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Vitaliano et al., review of active green systems reporting high VOC reduction, particulate reduction, and modest CO2 reduction under optimal conditions.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[7]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            IPBES, around 1 million animal and plant species threatened with extinction.<br />
                                        </div>
                                    </div>
                                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[8]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            Luedtke et al., amphibians are the most threatened vertebrate class, with 40.7% of species globally threatened.<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
            </details>
                        </div>
                    </details>
                </motion.section>
            </div>
        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="biophilia-ark" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="biophilia-ark" />
                </div>
            </main>
    );
}
