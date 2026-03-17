"use client";
import { InterestedButton } from "@/components/InterestedButton";

import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { ICPUseCases } from "./components/ICPUseCases";
import { Users, FileText, Bot, Heart, Sparkles, Clock, Globe, ChevronDown, Link as LinkIcon, Lock, Activity, Shield, TrendingUp, Layers } from "lucide-react";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HoverAcronym } from "@/components/HoverAcronym";
import { themeMap } from "@/utils/themeMap";

// Assets
import heroImage from './assets/afterlight_hero_1773354206295.png';
import timelineImage from './assets/afterlight_timeline_1773354220095.png';
import appImage from './assets/afterlight_app_1773354236688.png';
import closingImage from './assets/afterlight_closing_1773354249527.png';
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

export default function AfterlightClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Deathcare', 'Relationships', 'Healthcare', 'Community'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Meaning Crisis', 'Social Fragmentation'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Families', 'Caregivers'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Consumer App', 'Personalized AI'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Voice AI', 'Vision AI', 'Knowledge Graphs', 'Social Graph'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Human Flourishing', 'Social Trust', 'Community Renewal', 'Societal Cohesion']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['amber'].hexPrimary, "--secondary": themeMap['amber'].hexSecondary, "--tertiary": themeMap['amber'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Afterlight" theme="amber" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="afterlight" />
            </div>


            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group"
                    >
                        <Image
                            src={heroImage}
                            alt="A cinematic, glowing, retro-futurist family room at golden hour"
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
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6 flex flex-col md:flex-row md:items-baseline md:gap-4">
                            Afterlight
                            <span className="mt-2 md:mt-0 text-2xl sm:text-3xl text-white/50 tracking-normal font-serif italic">End of Life Connection & Memory Preservation</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            Afterlight helps maximize meaning in the last chapter of life, by prompting connection and the preservation of stories for the loved ones they leave behind.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="amber" />
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
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light border-l-4 border-[var(--primary)]/30 pl-6 group-hover:border-[var(--primary)]/60 transition-colors">
                            Someone brings up a prompt during a visit, a phone call, or a video chat. A friend shares their version of the story. A daughter uploads the photo that unlocks the memory. The result is <strong className="text-white font-medium">more connection now, and a richer record of a life later.</strong>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-[var(--primary)]/5 p-8 rounded-[2rem] border border-[var(--primary)]/20">
                        <div className="text-center md:text-left flex-shrink-0">
                            <div className="text-5xl sm:text-6xl text-[var(--primary)] font-light tracking-tighter mb-2">47%</div>
                            <div className="text-sm font-mono uppercase tracking-widest text-[var(--primary)]/70">of Americans regret</div>
                        </div>
                        <p className="text-xl text-white/80 font-light leading-relaxed">
                            not recording or documenting a conversation with someone close to them before they died. <strong className="text-white font-medium">While 63 million Americans are now family caregivers.</strong> That is roughly one in four adults, and many are navigating intense, emotionally loaded care situations with little support or structure for meaning-making conversations.
                            <ExpandableCitation label="[1]" sourceUrl="https://www.aarp.org/ppi/info-2020/caregiving-in-the-united-states.html" sourceText="AARP and National Alliance for Caregiving, Caregiving in the US 2025." />
                        </p>
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
                            Preserving both the logistics <br className="hidden sm:block" />
                            <span className="text-white/50">and the emotional texture.</span>
                        </h2>
                        <div className="mt-6 flex gap-4">
                            <InlineTags label="Bottleneck" tags={tags.bottleneck} theme="amber" />
                        </div>
                    </div>

                    <p className="text-xl text-white/80 leading-relaxed font-light mb-12 border-l-2 border-[var(--primary)]/40 pl-6">
                        Families facing decline, serious illness, or hospice are trying to solve two urgent problems at once. First, they want to <strong className="text-[var(--secondary)] font-medium">preserve memories, voice, values, humor, stories, family history, and emotional texture</strong> before those things are lost. Second, they want to <strong className="text-[var(--secondary)] font-medium">make the remaining time count</strong>, with more connection, less regret, and fewer missed conversations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-[var(--secondary)]"/> Fragmented Tools</h3>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                Most products only solve one side. Photo storage preserves artifacts. Estate planning preserves assets. Care coordination tools preserve logistics. None elegantly fuse memory preservation with guided connection in the actual window where it matters most.
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 bg-[var(--primary)]/5 transition-all duration-300 group">
                            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2"><Heart className="w-5 h-5 text-[var(--primary)]"/> The Missing Layer</h3>
                            <p className="text-lg leading-relaxed text-[var(--primary)]/90 font-light">
                                That is the special sauce Afterlight is built around. The need is not just to save what happened. It is to create better moments while there is still time, then preserve them. 
                            </p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                        Research on palliative care shows that earlier values-centered support improves quality of life and mental health, while dignity therapy research shows benefits for both palliative patients and family caregivers, including better quality of life, hope, family cohesion, and reduced distress. Research on intergenerational family stories also links family-history knowledge with positive mental health and wellbeing.<ExpandableCitation label="[2]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/30043329/" sourceText="Masters et al., Providing clarity: communicating the benefits of palliative care beyond end-of-life support." /><ExpandableCitation label="[3]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/22051662/" sourceText="Haneef et al., Effects of Dignity Therapy for Palliative Care Patients and Family Caregivers: A Systematic Review." /><ExpandableCitation label="[4]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/25556488/" sourceText="Elias et al., The role of intergenerational family stories in mental health and wellbeing." />
                    </p>

                    <div className="glass-panel p-8 rounded-[2rem] border border-white/10 bg-white/[0.02]">
                        <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Civilizational Tension</h4>
                        <p className="text-lg text-white/80 font-light leading-relaxed">
                            The broader civilizational tension is clear. In a world with more synthetic content, shallow feeds, and fragmented attention, <strong>authentic human memory becomes more valuable</strong>. Families need better tools to hold onto what is real.
                        </p>
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="amber" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            More connection now. <br className="hidden sm:block" /><span className="text-white/50">More memory later.</span>
                        </h2>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                            <Image src={appImage} alt="Afterlight App UI showing collaborative memory prompts" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <p className="text-xl text-[var(--primary)] font-medium max-w-3xl leading-relaxed mb-6 border-l-2 border-[var(--primary)] pl-6">
                            The mechanism is elegant: put the right prompt in the right relationship context, make contribution collaborative, and let families capture memories in whatever format feels natural.
                        </p>

                        <p className="text-lg text-white/80 max-w-3xl font-light leading-relaxed mb-6">
                            Afterlight is a private family legacy app designed to help people have meaningful conversations now and preserve the best of them for later. Trusted loved ones can share a login and help coordinate prompts over time. Prompts are not pushed in a rigid sequence. They are self-selected based on what is most relevant in the moment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl group">
                            <h4 className="text-lg text-[var(--secondary)] font-medium mb-4 flex items-center gap-2">When to prompt</h4>
                            <ul className="space-y-3 text-white/70 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> an in-person visit</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> a late-night phone call</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> a video chat with grandkids</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> a quiet afternoon with old photos</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> a holiday gathering</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> a final season when energy is limited</li>
                            </ul>
                        </div>
                        <div className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl group">
                            <h4 className="text-lg text-[var(--secondary)] font-medium mb-4 flex items-center gap-2">How to capture</h4>
                            <ul className="space-y-3 text-white/70 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> voice notes</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> short videos</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> text reflections</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> photos with commentary</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> multiple perspectives on the same memory</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-[var(--secondary)]" /> Multi-Perspective Design
                            </h3>
                            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                                Most legacy tools capture one person's answers. Afterlight helps families build the fullest version of a life by collecting stories, photos, videos, and perspectives from multiple loved ones around the same moments.
                            </p>
                            <p className="text-lg text-white/80 font-light leading-relaxed mb-4">
                                The collaborative prompt design matters. Instead of asking, "Do you remember this differently?", the better move is:
                            </p>
                            <div className="p-6 bg-white/[0.03] border-l-4 border-[var(--primary)] text-xl text-white font-medium italic rounded-r-2xl my-6">
                                "Share your perspective so we can capture the fullest version of this memory."
                            </div>
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                That framing invites richness, not contradiction. It turns memory capture into a multi-perspective family process.
                            </p>
                        </div>
                    </div>

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Specific customer examples / ICP Use Cases */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Specific Customer Examples
                        </div>
                        <div className="flex justify-between items-end">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Context-driven <span className="text-white/50">legacy capture.</span>
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags tags={tags.customer} theme="amber" />
                            </div>
                        </div>
                    </div>

                    <ICPUseCases />
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
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            The category is still <span className="text-white/50">underbuilt.</span>
                        </h2>
                    </div>

                    
                <div className="mb-32">
                    <div className="mb-16">
                        
                        <NeglectednessSlider 
                            score={90} 
                            interpretation="Severely neglected. Deathcare is notoriously immune to disruption due to extreme cultural sensitivities and fragmented state laws. An AI-native approach to legacy, grief support, and estate execution is a blue-ocean market for high-empathy founders."
                        />

</div>
                </div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Wedge & Expansion</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The initial wedge is tight and urgent: families facing visible decline, terminal illness, palliative care, hospice, dementia-adjacent transition, or late-life reflection.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The U.S. population age 65 and older reached <strong>61.2 million in 2024</strong>, and that group has grown much faster than the child population in recent years. Hospice is also mainstream enough to matter as a distribution and use-case wedge: <strong>1.72 million Medicare beneficiaries used hospice in 2022, and 49.1% of Medicare decedents received hospice care.</strong><ExpandableCitation label="[5]" sourceUrl="https://www.nhpco.org/hospice-facts-figures/" sourceText="National Alliance for Care at Home, 2024 NHPCO Facts and Figures Report." /><ExpandableCitation label="[6]" sourceUrl="https://www.census.gov/newsroom/press-releases/2024/population-estimates-age-sex-race-hispanic.html" sourceText="U.S. Census Bureau, Older Adults Outnumber Children in 11 States and Nearly Half of U.S. Counties." />
                            </p>
                            <p className="text-lg text-[var(--primary)] leading-relaxed font-light">
                                If Afterlight wins the emotionally urgent wedge, it can expand into a broader family memory infrastructure layer: proactive legacy capture before crisis, dementia planning, and family-history preservation.
                            </p>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Why Now</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Culturally, families are more distributed and more comfortable with async voice, video, and shared media. Technically, transcription, summarization, search, media organization, and secure cloud storage are finally good enough to make this feel lightweight instead of burdensome.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                At the same time, the need is rising. America is aging, caregiving intensity is high, and palliative care is increasingly recognized as a quality-of-life intervention rather than something relevant only in the final days.
                            </p>
                            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl">
                                <span className="font-medium text-white">Insight:</span> The tooling is now ready, but the category is still underbuilt.
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent relative group overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/3 text-center md:text-left">
                                <h3 className="text-2xl font-light text-white flex items-center justify-center md:justify-start gap-3 mb-4">
                                    <Lock className="w-6 h-6 text-[var(--secondary)]" /> Business Model
                                </h3>
                                <InlineTags tags={tags.product_type} theme="amber" />
                            </div>
                            <div className="md:w-2/3 border-l-0 md:border-l-2 border-white/10 md:pl-8 space-y-4">
                                <p className="text-lg text-white/80 font-medium">The core product should be a one-time family purchase.</p>
                                <p className="text-lg text-white/70 font-light leading-relaxed">
                                    That matches the emotional reality of the use case. Families in a vulnerable season do not want another subscription to evaluate. They want one clear decision, one intuitive product, and confidence that the memories will be captured, organized, exportable, and shareable.
                                </p>
                                <ul className="space-y-2 text-white/70 font-light text-[15px] pt-4 border-t border-white/10">
                                    <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">One-time family package</strong> for prompting, capture, and timeline creation.</li>
                                    <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">Premium white-glove <HoverAcronym acronym="setup service" definition="optional hands-on help with setup, interviews, and organization." /></strong> for families who want guided help.</li>
                                    <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">Optional ongoing hosted subscription</strong> paid as a gift for continued archive access and resurfaced moments.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Distribution & Viral Loop */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center group cursor-default">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                            </div>
                            <h3 className="text-4xl font-light text-white mb-6 group-hover:text-[var(--tertiary)] transition-colors">
                                Unique Distribution & <span className="text-white/50 block">Viral Emotion.</span>
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The best early distribution is through trusted intermediaries already present when urgency is obvious: hospice organizations, palliative care professionals, death doulas, grief counselors, elder care communities, and faith leaders.
                            </p>
                            <p className="text-lg text-[var(--secondary)] leading-relaxed font-medium bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20 mb-8">
                                The strongest asset is a simple, beautiful legacy conversation starter kit that these channels can hand to families.
                            </p>
                            
                            <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-[var(--secondary)]"/> Emotional Virality</h4>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Afterlight has real potential for emotionally resonant, opt-in public storytelling. The best stories can be turned into short-form content built for emotional resonance: unforgettable life advice clips, old love stories, hilarious family stories. It does not spread because it is flashy. It spreads because it creates an immediate felt reaction: <br/><br/>
                                <strong className="text-white block italic">"I should ask my dad that tonight."</strong>
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors">
                            <Image src={timelineImage} alt="Beautiful Family Memory Timeline interface floating in a sunlit home" fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

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
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="amber" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={44}
                        type="difficulty"
                        defaultVisibleText="The technology is available now, but winning requires exceptional product taste, emotional design, trust, and channel strategy."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Tech: Medium</strong>
                                    The risk is not model capability. It is making the experience feel warm, intuitive, and low-friction in emotionally difficult moments.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start concierge-first, manually assemble outputs, and learn which prompt types actually get used.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Regulatory: Medium</strong>
                                    This is not a drug or medical device, but it touches privacy, consent, family permissions, and healthcare-adjacent partnerships.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Build robust consent controls, strong privacy defaults, and avoid medical claims.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Capital: Low to Medium</strong>
                                    A strong initial product can be built relatively lean.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Keep the first version narrow, prove usage and referrals, then invest in deeper workflow and distribution.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Execution: High</strong>
                                    This category is emotionally sensitive. Clumsy messaging or bloated UX will kill trust fast.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Focus relentlessly on one wedge, likely adult children of declining parents, and obsess over emotional clarity.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={72}
                        type="moat"
                        defaultVisibleText="The moat is not raw transcription or commodity storage. The moat is trust at a vulnerable life moment, elegant collaborative ritual design, and permissioned, multi-perspective family memory graphs."
                        expandableText={
                            <p className="text-lg bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 leading-relaxed font-light text-white/80">
                                In an AGI world, this becomes more valuable, not less. Most systems will be able to generate generic sentiment. Very few will have access to real, consented, relational memory across generations. That makes Afterlight defensible as a <strong className="text-[var(--primary)] font-medium">trust + workflow + data-density</strong> company.
                            </p>
                        }
                    />
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
                                <InlineTags tags={tags.outcomes} theme="amber" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                Afterlight pushes technology in a healthier direction. Instead of optimizing for engagement, outrage, or passive consumption, it helps people show up for one another in one of the most important transitions in human life.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6 relative">
                                It preserves stories, values, humor, voice, and family context. It also increases the odds that families actually have the conversations they would otherwise postpone. If intelligence becomes abundant, then continuity, memory, and trust become some of the scarcest assets in society. A company that helps families preserve those things moves humanity slightly toward abundance, human flourishing, and social trust.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">67</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Human Flourishing</span>
                                            <span className="text-[var(--secondary)] font-mono">83</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Social Trust</span>
                                            <span className="text-[var(--secondary)] font-mono">74</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Community Renewal</span>
                                            <span className="text-[var(--secondary)] font-mono">61</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Societal Cohesion</span>
                                            <span className="text-[var(--secondary)] font-mono">52</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Prompt completion rate within 7 days</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Percentage of families with 2 or more contributors</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Average number of voice, video, and photo memories per family</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Archive revisit or sharing rate after initial capture</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Referral rate from family members or care-adjacent professionals</li>
                            </ul>
                        </div>
                    </div>

<div className="mb-16">
                    <OpenSourcePriority 
                        civilizationalImpactScore={67}
                        neglectednessScore={90}
                        ideaSpecificText="An open-source Afterlight guarantees that multigenerational family memory graphs remain private and immune to corporate sunsets, protecting humanity's most intimate legacy data."
                    />
                </div>



                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "In intimate human domains, the highest-value use of AI is often not synthetic generation. It is reducing the friction to surface, structure, and preserve what is already real. That principle travels well across healthcare, family coordination, memory, education, and relationships."
                        </p>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mt-16 shadow-2xl shadow-[var(--primary)]/10 border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-1000 group">
                        <Image src={closingImage} alt="Elegant memory core light fixture in a serene, plant-filled bedroom" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-transparent to-transparent pointer-events-none" />
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
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/70 transition-colors outline-none">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References 
                            <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            {/* Definitions */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 md:col-span-2 bg-white/[0.01]">
                                <h4 className="text-white/60 font-mono text-sm uppercase mb-4 tracking-widest">Defined Terms</h4>
                                <ul className="space-y-3 text-sm font-light text-white/60 leading-relaxed">
                                    <li><strong className="text-white/80">Palliative care:</strong> specialized care focused on improving quality of life and relieving symptoms and stress during serious illness.</li>
                                    <li><strong className="text-white/80">Hospice:</strong> care focused on comfort and support for people nearing the end of life.</li>
                                    <li><strong className="text-white/80">White-glove service:</strong> optional hands-on help with setup, interviews, and organization.</li>
                                    <li><strong className="text-white/80">Memory graph:</strong> a structured map of people, stories, media, relationships, and themes connected across a family.</li>
                                </ul>
                            </div>

                            {/* Citations */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    AARP and National Alliance for Caregiving, <em>Caregiving in the US 2025</em>.<br />
                                    <a href="https://www.aarp.org/ppi/info-2020/caregiving-in-the-united-states.html" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Masters et al., <em>Providing clarity: communicating the benefits of palliative care beyond end-of-life support</em>.<br />
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/30043329/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">PubMed &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Haneef et al., <em>Effects of Dignity Therapy for Palliative Care Patients and Family Caregivers: A Systematic Review</em>.<br />
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/22051662/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">PubMed &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Elias et al., <em>The role of intergenerational family stories in mental health and wellbeing</em>.<br />
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/25556488/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">PubMed &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    National Alliance for Care at Home, <em>2024 NHPCO Facts and Figures Report</em>.<br />
                                    <a href="https://www.nhpco.org/hospice-facts-figures/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">NHPCO &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[6]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    U.S. Census Bureau, <em>Older Adults Outnumber Children in 11 States and Nearly Half of U.S. Counties</em>.<br />
                                    <a href="https://www.census.gov/newsroom/press-releases/2024/population-estimates-age-sex-race-hispanic.html" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Census Bureau &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>
        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="afterlight" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="afterlight" />
                </div>
            </main>
    );
}
