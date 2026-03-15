export type ProblemData = {
    rank: number;
    slug: string;
    title: string;
    short_descriptor: string;
    preview_text: string;
    problem_priority: number;
    importance: number;
    neglectedness: number;
    tractability: number;
    gap: string;
    stakes: string;
    sector_tags: string[];
    outcome_tags: string[];
    long_form_content: string;
    sources: string[];
    theme_color: string;
};

// Map primary sector to a theme logic matching AGI Futures deeply-themed colors
const themeMap: Record<string, string> = {
    Healthcare: 'emerald',
    Biotech: 'teal',
    Energy: 'amber',
    Climate: 'green',
    Security: 'violet',
    Housing: 'orange',
    Water: 'cyan',
    AI: 'fuchsia',
    Science: 'blue',
    Governance: 'slate',
    Media: 'pink',
};

function getThemeForSector(sectors: string[]) {
    if (!sectors || sectors.length === 0) return 'emerald'; // default
    for (const sec of sectors) {
        if (themeMap[sec]) return themeMap[sec];
    }
    return 'slate';
}

export const problems: ProblemData[] = [
    {
        "rank": 1,
        "slug": "antimicrobial-resistance-defense-stack",
        "title": "Antimicrobial Resistance Defense Stack",
        "short_descriptor": "Post-antibiotic control",
        "preview_text": "We are walking into a post-antibiotic world, but we still operate hospitals and drug markets as if antibiotics are an infinite, cheap, reliable substrate.",
        "problem_priority": 89,
        "importance": 95,
        "neglectedness": 75,
        "tractability": 60,
        "gap": "We have strong biology, surveillance primitives, and therapeutic modalities, yet the real-world system still rewards antibiotic overuse, under-prices resistance, and under-incentivizes new antimicrobials. What exists is reactive treatment and patchy stewardship. What could exist is an always-on defense stack: early detection, targeted prescribing, rapid susceptibility, and faster countermeasure development.",
        "stakes": "Antimicrobial resistance (AMR) is a compounding failure mode. It turns routine surgery, childbirth, chemotherapy, and intensive care into higher-risk bets. It is also a national resilience issue: brittle supply of effective antibiotics is a single point of failure for modern medicine and military readiness.",
        "sector_tags": [
            "Healthcare",
            "Biotech",
            "Security",
            "Existential Risk Mitigation"
        ],
        "outcome_tags": [
            "Resilience",
            "Longevity",
            "Existential Risk Reduction",
            "Differentially Defensive"
        ],
        "long_form_content": "Headline evidence:\n- In 2019, bacterial AMR caused an estimated 1.27 million deaths directly and was associated with 4.95 million deaths globally. [1]([thelancet.com](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2821%2902724-0/fulltext?utm_source=chatgpt.com))\n- In 2023, about 1 in 6 lab-confirmed bacterial infections causing common syndromes were resistant to antibiotic treatment, based on WHO GLASS surveillance. [2]([who.int](https://www.who.int/news/item/13-10-2025-who-warns-of-widespread-resistance-to-common-antibiotics-worldwide?utm_source=chatgpt.com))\n- WHO’s 2025 global surveillance analysis draws on over 23 million bacteriologically confirmed cases, reported by 104 countries in 2023. [3]([who.int](https://www.who.int/publications/i/item/9789240116337?utm_source=chatgpt.com))\n\nWhy it stays neglected:\nThis is classic market failure. The best antibiotic is the one you do not use, but revenue depends on volume. Hospitals buy on price, not long-run effectiveness. Data is fragmented across labs and countries. A lot of AMR value is negative space: infections that never happen, outbreaks that never start, resistance that never spreads.\n\nTractability:\nHard, but no longer blocked. Sequencing, rapid diagnostics, and machine learning triage are improving. The WHO GLASS data spine is maturing, but still uneven. The hard parts are incentives, procurement, and scaling diagnostics into routine workflows without adding clinician burden.\n\nStartup surfaces:\n- Point-of-care rapid susceptibility testing that fits triage and inpatient flow\n- Hospital antibiotic decision systems that learn local resistance patterns in real time\n- Pathogen-focused “defense bundles” for highest-burden syndromes (sepsis, pneumonia, urinary tract infections)\n- Novel-payment and procurement tooling for “pull incentives” and subscription models\n- Environmental AMR monitoring for wastewater, farms, and hospitals tied to interventions",
        "sources": [
            "[1] Murray CJL et al. Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis. (2022). [Lancet]([thelancet.com](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2821%2902724-0/fulltext?utm_source=chatgpt.com))",
            "[2] WHO. WHO warns of widespread resistance to common antibiotics worldwide (news release, 13 Oct 2025). ([who.int](https://www.who.int/news/item/13-10-2025-who-warns-of-widespread-resistance-to-common-antibiotics-worldwide?utm_source=chatgpt.com))",
            "[3] WHO. Global antibiotic resistance surveillance report 2025 (GLASS). (Oct 2025). ([who.int](https://www.who.int/publications/i/item/9789240116337?utm_source=chatgpt.com))",
            "[4] WHO. Antimicrobial resistance fact sheet (updated). ([who.int](https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance?utm_source=chatgpt.com))"
        ]
    },
    {
        "rank": 2,
        "slug": "pandemic-100-day-countermeasure-platform",
        "title": "Pandemic 100-Day Countermeasure Platform",
        "short_descriptor": "Vaccine-to-volume",
        "preview_text": "We proved we can design vaccines fast, but we cannot reliably go from novel pathogen to globally available countermeasures in a predictable time box.",
        "problem_priority": 88,
        "importance": 95,
        "neglectedness": 70,
        "tractability": 55,
        "gap": "What exists is heroic, bespoke mobilization after the fire starts, with slow trials, fragile manufacturing, and politicized distribution. What could exist is a standing platform that makes “100 days to authorized vaccine, diagnostics, and first-line therapeutics” a default operating capability, not a miracle.",
        "stakes": "Pandemics are an extreme-cost tail risk that arrives more often than our institutions admit. The right framing is not just lives saved. It is global output preserved, trust preserved, and geopolitical instability avoided. Speed is compounding: every week matters because spread is exponential.",
        "sector_tags": [
            "Healthcare",
            "Biotech",
            "Security",
            "Existential Risk Mitigation"
        ],
        "outcome_tags": [
            "Resilience",
            "Ender Prevention",
            "Existential Risk Reduction",
            "Differentially Defensive"
        ],
        "long_form_content": "Headline evidence:\n- The IMF estimated cumulative global economic loss through 2024 from COVID-19 at about $13.8 trillion. [1]([who.int](https://www.who.int/about/funding/invest-in-who/investment-case-2.0/challenges))\n- CEPI’s 100 Days Mission targets a new vaccine ready for initial authorization and manufacturing at scale within 100 days of identifying a new pandemic threat. [2]([cepi.net](https://cepi.net/100-days-mission))\n- The Global Preparedness Monitoring Board argues epidemics and pandemics are now a “constant danger” rather than rare events. [3]([gpmb.org](https://www.gpmb.org/docs/librariesprovider17/default-document-library/gpmb-2024-report.pdf?download=true&sfvrsn=937d83cf_3))\n\nWhy it stays neglected:\n“Preparedness” has weak buyers. Budgets spike during crises and decay after. Manufacturing capacity is geographically concentrated and not easily repurposed. Regulatory, clinical trial, and procurement pipelines are not designed for parallelization. Global coordination fails exactly when nationalism rises.\n\nTractability:\nMedium. The science of rapid design is proven. The blockers are execution infrastructure: adaptive trials, manufacturing tech transfer, regulatory playbooks, and distribution logistics. AI accelerates candidate design, protocol writing, pharmacovigilance, and manufacturing QA, but you still need metal, people, and agreements.\n\nStartup surfaces:\n- Platformized adaptive trial networks with pre-approved protocols and standing sites\n- Manufacturing “plug compatibility” standards: tech transfer in weeks, not quarters\n- Cold-chain and last-mile reliability tooling for low-resource settings\n- Regulatory-grade evidence automation: protocols, monitoring, audit trails, real-world safety\n- Procurement and financing mechanisms that keep surge capacity alive between crises",
        "sources": [
            "[1] WHO investment case citing IMF estimate of pandemic loss to 2024. ([who.int](https://www.who.int/about/funding/invest-in-who/investment-case-2.0/challenges))",
            "[2] CEPI. The 100 Days Mission (program page). ([cepi.net](https://cepi.net/100-days-mission))",
            "[3] Global Preparedness Monitoring Board. The Changing Face of Pandemic Risk (2024 report PDF). ([gpmb.org](https://www.gpmb.org/docs/librariesprovider17/default-document-library/gpmb-2024-report.pdf?download=true&sfvrsn=937d83cf_3))",
            "[4] WHO and World Bank. Analysis of Pandemic Preparedness and Response financing needs and gaps (G20). ([thedocs.worldbank.org](https://thedocs.worldbank.org/en/doc/5760109c4db174ff90a8dfa7d025644a-0290032022/original/G20-Gaps-in-PPR-Financing-Mechanisms-WHO-and-WB-pdf.pdf))",
            "[5] Barnsley G et al. Impact of the 100 Days Mission for vaccines on COVID-19. (2024). ([thelancet.com](https://www.thelancet.com/journals/langlo/article/PIIS2214-109X%2824%2900286-9/fulltext))"
        ]
    },
    {
        "rank": 3,
        "slug": "pathogen-surveillance-mesh",
        "title": "Pathogen Surveillance Mesh",
        "short_descriptor": "Wastewater + genomics",
        "preview_text": "We can detect outbreaks earlier than clinics can, but we still treat early warning as a pilot instead of critical infrastructure.",
        "problem_priority": 84,
        "importance": 90,
        "neglectedness": 70,
        "tractability": 65,
        "gap": "Clinical testing is late, biased, and often optional. What exists is fragmented surveillance: some sequencing here, some wastewater there, not integrated into fast action. What could exist is a global surveillance mesh that fuses wastewater, genomics, and metadata into actionable alerts with clear thresholds and response playbooks.",
        "stakes": "Early detection buys time, and time buys lives and GDP. Surveillance that is population-scale and privacy-preserving is also a coordination primitive: it enables targeted interventions instead of blunt lockdowns. The mesh is also dual-use for antimicrobial resistance tracking and food-water safety.",
        "sector_tags": [
            "Healthcare",
            "Biotech",
            "Water",
            "Existential Risk Mitigation"
        ],
        "outcome_tags": [
            "Resilience",
            "Ender Prevention",
            "Existential Risk Reduction",
            "Differentially Defensive"
        ],
        "long_form_content": "Headline evidence:\n- The CDC National Wastewater Surveillance System expanded rapidly, covering about 47% of the U.S. population by December 2022. [1]([sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0048969724017078))\n- Wastewater genomic surveillance detected emerging SARS-CoV-2 variants up to 14 days earlier than clinical sequencing in one large-scale analysis. [2]([nature.com](https://www.nature.com/articles/s41586-022-05049-6))\n- WHO’s 2022–2032 genomic surveillance strategy explicitly targets fragmentation, equity, scalability, and sustainability gaps. [3]([who.int](https://www.who.int/publications/i/item/9789240084773))\n\nWhy it stays neglected:\nSurveillance is a public good with unclear owners. Data sharing is politically sensitive. Funding is episodic. Technical standards for sampling, normalization, and interoperability are immature. The last mile is governance: who is authorized to act on a signal, and what “action” means.\n\nTractability:\nHigh enough to build. Sensors, sequencing cost curves, and cloud pipelines are ready. The harder pieces are robust baselining, false-positive management, and turning signals into decisions. AI helps by learning local baselines, integrating multi-source signals, and generating response recommendations tied to policy triggers.\n\nStartup surfaces:\n- “Wastewater-to-action” operating system for cities with alert thresholds and playbooks\n- Sequencing and variant calling pipelines hardened for public health operations\n- Airport and travel-node surveillance products (wastewater, air, surfaces) with dashboards\n- Privacy-preserving data sharing protocols for cross-border outbreak intelligence\n- Turnkey surveillance procurement boxes for low-resource regions",
        "sources": [
            "[1] Adams C et al. The National Wastewater Surveillance System (NWSS). (2024). ([sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0048969724017078))",
            "[2] Karthikeyan S et al. Wastewater sequencing reveals early cryptic SARS-CoV-2 variant transmission. (2022). ([nature.com](https://www.nature.com/articles/s41586-022-05049-6))",
            "[3] WHO. Global genomic surveillance strategy for pathogens with pandemic and epidemic potential 2022–2032 (implementation progress). ([who.int](https://www.who.int/publications/i/item/9789240084773))",
            "[4] St-Onge G et al. Pandemic monitoring with global aircraft-based wastewater surveillance networks. (2025). ([nature.com](https://www.nature.com/articles/s41591-025-03501-4))"
        ]
    },
    {
        "rank": 4,
        "slug": "aging-biomarker-infrastructure",
        "title": "Aging Biomarker Infrastructure",
        "short_descriptor": "Measure health sooner",
        "preview_text": "We increasingly understand aging biology, but we still run medicine on late, noisy, disease-stage signals instead of tracking the pace of aging early and often.",
        "problem_priority": 82,
        "importance": 92,
        "neglectedness": 60,
        "tractability": 70,
        "gap": "What exists is episodic care and delayed diagnosis. Lab markers are abundant, but not standardized into a “biological aging ledger” that can guide prevention, trials, and personalized protocols. What could exist is cheap, longitudinal measurement that makes aging rate a controllable variable, not a mystery.",
        "stakes": "Aging is upstream of most chronic disease burden. Better measurement is leverage: it accelerates discovery, de-risks prevention, and creates a shared outcome metric for interventions. This is not vanity longevity. It is the measurement layer for healthspan at population scale.",
        "sector_tags": [
            "Longevity",
            "Healthcare",
            "Biotech",
            "Science"
        ],
        "outcome_tags": [
            "Longevity",
            "Human Flourishing",
            "Scientific Acceleration",
            "Abundance"
        ],
        "long_form_content": "Headline evidence:\n- WHO projects the share of people aged 60+ will rise from 1 billion in 2020 to 1.4 billion by 2030, reaching 2.1 billion by 2050. [1]([who.int](https://www.who.int/news-room/fact-sheets/detail/ageing-and-health))\n- A global analysis estimates people spend about 9.6 years in poor health on average, highlighting the healthspan gap. [2]([jamanetwork.com](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2827753))\n- A 2024 framework review argues aging biomarkers are promising but still face validation and standardization hurdles for clinical translation. [3]([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11090477/))\n\nWhy it stays neglected:\nReimbursement is organized around diseases, not aging rate. Clinical trust requires longitudinal validation and clear actionability, which is slow and expensive. Consumer tests exist but are fragmented and often not decision-grade. Data is locked in silos, not composable into trajectories.\n\nTractability:\nStrong. Multi-omic costs keep falling. Wearables and at-home sampling are mainstream. AI improves signal extraction from noisy, multivariate longitudinal data. The remaining hard parts are reference standards, calibration across labs, and linking biomarkers to interventions with causal confidence.\n\nStartup surfaces:\n- Subscription biological-age and pace-of-aging panels with clinical-grade QC and interpretation\n- Trial infrastructure for aging endpoints: faster go/no-go for interventions\n- “Aging rate” clinical decision support integrated into preventive care workflows\n- Data standards and calibration services for multi-site longitudinal biomarker studies\n- Consumer-to-clinic bridges: validated protocols, provider networks, and outcomes tracking",
        "sources": [
            "[1] WHO. Ageing and health (fact sheet). ([who.int](https://www.who.int/news-room/fact-sheets/detail/ageing-and-health))",
            "[2] GBD 2021 Healthy Life Expectancy Collaborators. Global healthspan-lifespan gap (2024). ([jamanetwork.com](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2827753))",
            "[3] Justice JN et al. Validation of biomarkers of aging for clinical endpoints (2024). ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11090477/))",
            "[4] WHO. World report on ageing and health (overview). ([who.int](https://www.who.int/news-room/questions-and-answers/item/population-ageing))"
        ]
    },
    {
        "rank": 5,
        "slug": "indoor-air-pathogen-detection",
        "title": "Indoor Air Pathogen Detection",
        "short_descriptor": "Invisible biosecurity",
        "preview_text": "We treat indoor air like it is inert, but it is a shared biological medium. We lack real-time sensing for pathogens the way we have smoke detectors for fire.",
        "problem_priority": 81,
        "importance": 88,
        "neglectedness": 65,
        "tractability": 70,
        "gap": "Ventilation and filtration guidance exists, but measurement is weak. Most buildings cannot tell the difference between “stale air” and “pathogen-rich air.” What could exist is continuous indoor pathogen risk telemetry: detection, ventilation control loops, and verified clean-air performance.",
        "stakes": "Airborne transmission drives outbreaks in schools, hospitals, and offices, which then drives economic disruption. Clean indoor air is also a productivity and chronic health lever. This is infrastructure-scale: indoor air is where modern humans spend most of their time.",
        "sector_tags": [
            "Healthcare",
            "Cities",
            "Housing",
            "Existential Risk Mitigation"
        ],
        "outcome_tags": [
            "Air Quality",
            "Resilience",
            "Ender Prevention",
            "Human Flourishing"
        ],
        "long_form_content": "Headline evidence:\n- WHO updated terminology for pathogens “that transmit through the air,” reflecting the centrality of airborne spread in infectious disease control. [1]([who.int](https://www.who.int/news/item/18-04-2024-leading-health-agencies-outline-updated-terminology-for-pathogens-that-transmit-through-the-air?utm_source=chatgpt.com))\n- ASHRAE’s Standard 241 sets requirements to control infectious aerosols, formalizing “clean air” as a measurable engineering target. [2]([ashrae.org](https://www.ashrae.org/technical-resources/bookstore/ashrae-standard-241-control-of-infectious-aerosols?utm_source=chatgpt.com))\n- A 2024 review highlights that real-time monitoring of airborne viruses remains technically challenging and under-deployed, despite clear need. [3]([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12877860/?utm_source=chatgpt.com))\n\nWhy it stays neglected:\nSplit incentives. Building owners pay, tenants benefit. Benefits are partly invisible: avoided infections and avoided absenteeism. Liability ambiguity slows adoption. Sensors are immature, and standardization is early. Indoor air has historically been treated as comfort, not safety.\n\nTractability:\nImproving. Low-cost sensors, better sampling, genomic methods, and AI-based classification are converging. The hardest issues are sensitivity at low viral loads, false positives, and turning detection into safe, automated action without panic. Standards like ASHRAE 241 create a procurement wedge.\n\nStartup surfaces:\n- Real-time bioaerosol sampling plus fast detection (PCR, CRISPR, metagenomics) for buildings\n- “Clean air as a service” with performance guarantees and automated controls\n- Outbreak early-warning dashboards for schools and long-term care facilities\n- Retrofittable ventilation optimization using carbon dioxide proxies plus periodic pathogen assays\n- Certification and compliance tooling for infectious aerosol standards and audits",
        "sources": [
            "[1] WHO. Updated terminology: pathogens that transmit through the air (2024). ([who.int](https://www.who.int/news/item/18-04-2024-leading-health-agencies-outline-updated-terminology-for-pathogens-that-transmit-through-the-air?utm_source=chatgpt.com))",
            "[2] ASHRAE. Standard 241: Control of Infectious Aerosols (2023). ([ashrae.org](https://www.ashrae.org/technical-resources/bookstore/ashrae-standard-241-control-of-infectious-aerosols?utm_source=chatgpt.com))",
            "[3] Li Y et al. Real-time monitoring of airborne viruses (review, 2024). ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12877860/?utm_source=chatgpt.com))",
            "[4] CDC. SARS-CoV-2 transmission and prevention science brief (updated). ([archive.cdc.gov](https://archive.cdc.gov/www_cdc_gov/coronavirus/2019-ncov/science/science-briefs/sars-cov-2-transmission.html?utm_source=chatgpt.com))"
        ]
    },
    {
        "rank": 6,
        "slug": "ai-evaluation-and-incident-infrastructure",
        "title": "AI Evaluation and Incident Infrastructure",
        "short_descriptor": "Safety telemetry",
        "preview_text": "We are deploying high-impact AI systems faster than we can measure their failure modes in the real world.",
        "problem_priority": 80,
        "importance": 90,
        "neglectedness": 55,
        "tractability": 65,
        "gap": "What exists is fragmented evaluation, inconsistent red teaming, and weak post-deployment monitoring. Incidents are logged after the fact, if at all. What could exist is standardized, continuous safety telemetry: evaluations, incident reporting, monitoring, and “recall-like” remediation loops for AI.",
        "stakes": "AI is becoming a control layer for finance, healthcare, logistics, and security. When a system fails at scale, harm scales. Without shared measurement and reporting, we cannot improve fast, regulate proportionately, or maintain trust in automation.",
        "sector_tags": [
            "AI",
            "Security",
            "Governance",
            "Existential Risk Mitigation"
        ],
        "outcome_tags": [
            "Alignment",
            "Existential Risk Reduction",
            "Social Trust",
            "Better Governance"
        ],
        "long_form_content": "Headline evidence:\n- NIST’s AI Risk Management Framework provides a common structure for managing AI risks across the lifecycle, but remains voluntary guidance. [1]([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf))\n- The MIT AI Incident Tracker catalogs more than 1,300 real-world reported incidents, indicating a sizable and growing harm surface. [2]([airisk.mit.edu](https://airisk.mit.edu/ai-incident-tracker))\n- The EU AI Act rollout is staged over multiple years, implying a long compliance transition where operational evaluation tooling is still catching up. [3]([ai-act-service-desk.ec.europa.eu](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act))\n\nWhy it stays neglected:\nIncentives reward shipping, not measurement. Many incidents are reputationally costly to disclose. There is no universal incident schema. Monitoring is expensive, and external auditing markets are immature. Regulations are emerging, but operational standards and testbeds are still being built.\n\nTractability:\nModerate to high. We can build test harnesses, continuous monitoring, and incident pipelines now. NIST is already piloting evaluation approaches. The hard part is aligning incentives, legal safe harbors for disclosure, and preventing metric gaming. AI can help by automating evaluation generation and anomaly detection.\n\nStartup surfaces:\n- Continuous evaluation platforms with domain-specific test suites and regression tracking\n- Incident reporting APIs and schemas integrated into production ML operations\n- Post-deployment monitoring tooling for drift, misuse, and emergent capabilities\n- Benchmark-to-policy translation: compliance mapping for risk-based regulations\n- Independent auditing services with reproducible evaluation artifacts and attestations",
        "sources": [
            "[1] NIST. Artificial Intelligence Risk Management Framework (AI RMF 1.0). (2023). ([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf))",
            "[2] MIT. AI Incident Tracker (overview and counts). ([airisk.mit.edu](https://airisk.mit.edu/ai-incident-tracker))",
            "[3] European Commission. Timeline for implementation of the EU AI Act. ([ai-act-service-desk.ec.europa.eu](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act))",
            "[4] NIST. Assessing Risks and Impacts of AI (ARIA) Pilot Evaluation Report. (2025). ([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.700-2.pdf))"
        ]
    },
    {
        "rank": 7,
        "slug": "media-provenance-verification",
        "title": "Media Provenance Verification",
        "short_descriptor": "Trust in reality",
        "preview_text": "We can generate convincing audio, images, and video cheaply, but we cannot cheaply verify what is real.",
        "problem_priority": 78,
        "importance": 85,
        "neglectedness": 60,
        "tractability": 70,
        "gap": "What exists is a patchwork: watermarks that can be stripped, platform policies that vary, and detection models that are brittle. What could exist is provenance as default: cryptographic content credentials, platform enforcement, and easy-to-use verification for people and institutions.",
        "stakes": "This is epistemic infrastructure. Without provenance, democracies degrade, markets get scammed, and institutions lose authority. Provenance also protects creators, brands, and supply chains of information. The cost of “doubt everywhere” is enormous.",
        "sector_tags": [
            "Media",
            "Social Media",
            "Security",
            "Democracy"
        ],
        "outcome_tags": [
            "Social Trust",
            "Societal Cohesion",
            "Freedom",
            "Better Governance"
        ],
        "long_form_content": "Headline evidence:\n- C2PA defines a technical standard to certify source and history (provenance) of media content, aiming to reduce misleading information online. [1]([spec.c2pa.org](https://spec.c2pa.org/specifications/specifications/2.3/index.html))\n- NIST’s synthetic content report notes that many technical approaches are not yet fully examined, and widespread deployment on mobile devices may be years away. [2]([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf))\n- A UN ITU report urged stronger measures and digital verification systems to counter deepfakes used in misinformation and fraud. [3]([reuters.com](https://www.reuters.com/business/un-report-urges-stronger-measures-detect-ai-driven-deepfakes-2025-07-11/))\n\nWhy it stays neglected:\nIt is a coordination problem between creators, platforms, device makers, and regulators. Platforms often strip metadata. Users do not have simple verification UX. Incentives are misaligned: virality beats verifiability, and costs of misinformation are externalities.\n\nTractability:\nHigh if we focus on adoption surfaces. Standards exist and are improving. The path is to bundle provenance into devices, creation tools, and hosting layers, then make platforms preserve and display it. AI helps by detecting likely synthetic content and flagging absence of provenance.\n\nStartup surfaces:\n- Provenance-preserving infrastructure for hosting, sharing, and social platforms\n- Verification UX for journalists, courts, and enterprise communications\n- “Content supply chain” tools for newsrooms and brands, from capture to publication\n- Hybrid systems: credentials plus model-based detection and risk scoring\n- Compliance tooling for deepfake regulations and evidence-grade authenticity logs",
        "sources": [
            "[1] C2PA. Content Provenance and Authenticity specifications (v2.3). ([spec.c2pa.org](https://spec.c2pa.org/specifications/specifications/2.3/index.html))",
            "[2] NIST. Reducing Risks Posed by Synthetic Content: technical approaches overview. (2024). ([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf))",
            "[3] Reuters. UN ITU report urges stronger measures to detect AI-driven deepfakes. (11 Jul 2025). ([reuters.com](https://www.reuters.com/business/un-report-urges-stronger-measures-detect-ai-driven-deepfakes-2025-07-11/))",
            "[4] Content Credentials. Ecosystem scale and participating companies (program site). ([contentcredentials.org](https://contentcredentials.org/))"
        ]
    },
    {
        "rank": 8,
        "slug": "industrial-process-heat-decarbonization",
        "title": "Industrial Process Heat Decarbonization",
        "short_descriptor": "High-temp shift",
        "preview_text": "Electricity is getting cleaner, but industry still runs on fossil heat because high-temperature process heat is hard to replace.",
        "problem_priority": 78,
        "importance": 85,
        "neglectedness": 60,
        "tractability": 55,
        "gap": "What exists is a split energy system: fast-moving electricity decarbonization and slow-moving industrial heat. What could exist is modular electrified heat and fuel-switch systems (high-temperature heat pumps, thermal storage, electrified kilns, clean hydrogen where needed) that win on cost, reliability, and retrofit speed.",
        "stakes": "Industrial heat is a foundational input to cement, steel, chemicals, food, and manufacturing. If we do not solve heat, we do not solve emissions or abundance. This is also an energy security issue: local electrified heat reduces dependence on volatile fossil fuels.",
        "sector_tags": [
            "Energy",
            "Climate",
            "Manufacturing"
        ],
        "outcome_tags": [
            "Energy Abundance",
            "Climate",
            "Abundance",
            "Resilience"
        ],
        "long_form_content": "Headline evidence:\n- IEA reports heat accounts for almost half of total final energy consumption and 38% of energy-related CO2 emissions (2022). [1]([iea.org](https://www.iea.org/reports/renewables-2023/heat))\n- IEA’s Renewables 2024 report reiterates heat as the primary end-use sector, nearly 40% of energy-related CO2, with emissions increases driven largely by industry. [2]([iea.blob.core.windows.net](https://iea.blob.core.windows.net/assets/17033b62-07a5-4144-8dd0-651cdb6caa24/Renewables2024.pdf))\n- The renewable heat share has not kept pace with heat demand growth, contributing to rising heat-related emissions. [3]([iea.org](https://www.iea.org/reports/renewables-2024/global-overview))\n\nWhy it stays neglected:\nIndustrial plants are conservative, capex cycles are long, and downtime is intolerable. Engineering is bespoke and site-specific. There is no “default” retrofit kit. Carbon pricing is inconsistent. Many buyers cannot easily value long-term resilience and compliance risk reduction.\n\nTractability:\nMedium. Component technologies exist, but integration is the frontier. AI and simulation reduce engineering cost, optimize control systems, and accelerate permitting and commissioning. The remaining hard parts are high-temperature extremes, materials, and validating uptime at industrial standards.\n\nStartup surfaces:\n- Retrofit kits for specific processes (dryers, boilers, low- and mid-temp steam replacement)\n- High-temperature heat pump systems and thermal storage integration packages\n- “Heat-as-a-service” financing and performance contracts for industrial sites\n- Digital twins for process heat systems to de-risk retrofits and optimize operations\n- Electrified process equipment for cement, steel, and chemicals niches with fast payback",
        "sources": [
            "[1] IEA. Renewables 2023: Heat section. ([iea.org](https://www.iea.org/reports/renewables-2023/heat))",
            "[2] IEA. Renewables 2024 report (PDF). ([iea.blob.core.windows.net](https://iea.blob.core.windows.net/assets/17033b62-07a5-4144-8dd0-651cdb6caa24/Renewables2024.pdf))",
            "[3] IEA. Renewables 2024: Renewable heat overview. ([iea.org](https://www.iea.org/reports/renewables-2024/global-overview))",
            "[4] IRENA. Heating and cooling share of final energy (status). ([irena.org](https://www.irena.org/Innovation-landscape-for-smart-electrification/Power-to-heat-and-cooling/Status))"
        ]
    },
    {
        "rank": 9,
        "slug": "dementia-early-detection-and-care-os",
        "title": "Dementia Early Detection and Care OS",
        "short_descriptor": "Brain health stack",
        "preview_text": "We diagnose dementia late and then provide fragmented support, even though the burden is massive and rising fast.",
        "problem_priority": 76,
        "importance": 85,
        "neglectedness": 55,
        "tractability": 60,
        "gap": "What exists is late-stage recognition, caregiver exhaustion, and a maze of services. What could exist is an integrated brain health stack: early detection, risk stratification, care navigation, and continuous support for patients and caregivers, connected to clinical workflows.",
        "stakes": "Dementia is a human tragedy and a systems stress test. It destroys independence, transfers massive unpaid labor to families, and drives long-term care demand. Even modest delays in onset or better caregiving coordination compound into huge welfare gains.",
        "sector_tags": [
            "Healthcare",
            "Longevity",
            "Community"
        ],
        "outcome_tags": [
            "Longevity",
            "Human Flourishing",
            "Resilience",
            "Community Renewal"
        ],
        "long_form_content": "Headline evidence:\n- WHO estimates 57 million people lived with dementia in 2021, with nearly 10 million new cases each year. [1]([who.int](https://www.who.int/news-room/fact-sheets/detail/dementia))\n- WHO notes dementia is the seventh leading cause of death and a major cause of disability and dependency globally. [2]([who.int](https://www.who.int/news-room/fact-sheets/detail/dementia))\n- In the U.S., a peer-reviewed 2025 report estimates 7.2 million people age 65+ live with Alzheimer’s dementia, illustrating the scale in high-income settings. [3]([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12040760/))\n\nWhy it stays neglected:\nCare is fragmented across medical, social, and family systems. Payment models underfund long-horizon prevention and caregiving support. Diagnostic pathways are slow and uneven. Caregivers are invisible in the data layer. New therapies raise urgency, but the delivery system is not ready.\n\nTractability:\nMedium-high. Digital care navigation, remote monitoring, and validated cognitive assessments can scale. AI can help with early risk screening, symptom trajectory tracking, and caregiver support. The hardest part is clinical validation, reimbursement integration, and respecting privacy and dignity.\n\nStartup surfaces:\n- Early screening tools integrated into primary care and pharmacies\n- Caregiver operating systems: scheduling, education, respite coordination, and benefits optimization\n- Remote monitoring for safety, medication adherence, and functional decline\n- Clinical decision support for differential diagnosis and referral pathways\n- Community-based “memory care” networks with standardized protocols and outcome tracking",
        "sources": [
            "[1] WHO. Dementia fact sheet (updated 31 Mar 2025). ([who.int](https://www.who.int/news-room/fact-sheets/detail/dementia))",
            "[2] WHO. Dementia: key facts and burden framing. ([who.int](https://www.who.int/health-topics/dementia))",
            "[3] Alzheimer’s Association. 2025 Alzheimer’s disease facts and figures (peer-reviewed). ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12040760/))",
            "[4] OECD. Health at a Glance 2025: long-term care workers and system pressures. ([oecd.org](https://www.oecd.org/en/publications/2025/11/health-at-a-glance-2025_a894f72e/full-report/long-term-care-workers_9c3bdbaf.html))"
        ]
    },
    {
        "rank": 10,
        "slug": "grid-interconnection-throughput",
        "title": "Grid Interconnection Throughput",
        "short_descriptor": "Connect clean power",
        "preview_text": "We can build generation, but we cannot connect it fast enough. Interconnection queues have become the choke point for scaling electricity supply.",
        "problem_priority": 75,
        "importance": 88,
        "neglectedness": 45,
        "tractability": 60,
        "gap": "What exists is years-long queue delay, high uncertainty, and projects dying in paperwork. What could exist is predictable, fast interconnection: standardized studies, transparent costs, and incentives for utilities and grid operators to increase throughput.",
        "stakes": "Interconnection delays are an abundance tax. They delay electrification, industry growth, data centers, and resilience. They also waste capital: developers hold projects in limbo, and the grid misses low-cost supply additions.",
        "sector_tags": [
            "Energy",
            "Climate",
            "Manufacturing"
        ],
        "outcome_tags": [
            "Energy Abundance",
            "Abundance",
            "Resilience",
            "Climate"
        ],
        "long_form_content": "Headline evidence:\n- A Berkeley Lab analysis finds queues grew dramatically: ~10,300 active projects with >2,000 GW of generation and storage capacity seeking interconnection as of end-2023. [1]([emp.lbl.gov](https://emp.lbl.gov/queues?utm_source=chatgpt.com))\n- Median time from interconnection request to commercial operation has increased sharply, reaching multi-year timelines for many projects. [2]([eta-publications.lbl.gov](https://eta-publications.lbl.gov/sites/default/files/queued_up_2024_edition_r2.pdf?utm_source=chatgpt.com))\n- FERC Order 2023 reforms the interconnection process, signaling the bottleneck is acknowledged but still operationally difficult to fix. [3]([ferc.gov](https://www.ferc.gov/explainer-interconnection-final-rule?utm_source=chatgpt.com))\n\nWhy it stays neglected:\nUtilities and grid operators face misaligned incentives: they bear near-term workload and risk, while benefits are system-wide. Study processes are bespoke and conservative. Data is opaque. Cost allocation disputes are politically toxic. Queue management is software-poor for a system this complex.\n\nTractability:\nModerate. Policy tailwinds exist, but implementation is uneven. The technical surface is huge for founder-led execution: automation of studies, standardized connection designs, and better forecasting. AI can help with power flow simulations, risk triage, and portfolio optimization.\n\nStartup surfaces:\n- Interconnection study automation and standardized modeling toolchains\n- Queue optimization platforms: cluster design, withdrawal prediction, and capacity planning\n- “Grid-ready” project certification: fast-track packages for compliant designs\n- Data transparency layers for developers, regulators, and investors\n- Utility workflow tooling for reviews, stakeholder coordination, and audit trails",
        "sources": [
            "[1] Berkeley Lab. Interconnection queue statistics and trends (Queued Up 2024 and related). ([emp.lbl.gov](https://emp.lbl.gov/queues?utm_source=chatgpt.com))",
            "[2] Berkeley Lab. Queued Up: characteristics and trends in generator interconnection queues (2024 report PDF). ([eta-publications.lbl.gov](https://eta-publications.lbl.gov/sites/default/files/queued_up_2024_edition_r2.pdf?utm_source=chatgpt.com))",
            "[3] FERC. Order 2023 interconnection reforms (explainer). ([ferc.gov](https://www.ferc.gov/explainer-interconnection-final-rule?utm_source=chatgpt.com))",
            "[4] FERC. Order 2023 final rule documentation (landing page). ([federalregister.gov](https://www.federalregister.gov/documents/2023/09/06/2023-16628/improvements-to-generator-interconnection-procedures-and-agreements?utm_source=chatgpt.com))"
        ]
    },
    {
        "rank": 11,
        "slug": "housing-permitting-and-inspection-os",
        "title": "Housing Permitting and Inspection OS",
        "short_descriptor": "Build faster legally",
        "preview_text": "We have construction capacity and capital, but we cannot reliably move from proposal to permitted, inspected, and occupied housing at speed.",
        "problem_priority": 75,
        "importance": 85,
        "neglectedness": 50,
        "tractability": 60,
        "gap": "What exists is slow, manual, jurisdiction-specific permitting and inspections that act like a random delay generator. What could exist is code-as-software: standardized submissions, automated checks, transparent queues, and inspection capacity that scales.",
        "stakes": "Housing is the physical substrate for family formation, labor mobility, and productivity. A persistent shortage raises rents, blocks migration to opportunity, and fuels political instability. Permitting is not the only constraint, but it is a high-leverage, fixable one.",
        "sector_tags": [
            "Housing",
            "Cities",
            "Governance"
        ],
        "outcome_tags": [
            "Abundance",
            "Human Flourishing",
            "Better Governance",
            "Community Renewal"
        ],
        "long_form_content": "Headline evidence:\n- Freddie Mac estimates the U.S. housing shortage at 3.7 million units (data through Q3 2024). [1]([freddiemac.com](https://www.freddiemac.com/research/insight/housing-supply-still-undersupplied))\n- Realtor.com estimates the U.S. housing supply gap widened to about 4.03 million homes in 2025 as construction failed to keep pace with household formation. [2]([realtor.com](https://www.realtor.com/research/us-housing-supply-gap-2026/))\n- Realtor.com attributes supply pressure partly to zoning regulations and housing restrictions limiting how much new construction can relieve demand. [3]([realtor.com](https://www.realtor.com/research/us-housing-supply-gap-2025/))\n\nWhy it stays neglected:\nPermitting is fragmented across thousands of jurisdictions with custom rules, legacy software, and political constraints. The buyer is usually a city. The user is a developer. The incentive is often to say “no” safely. Procurement cycles are slow, and no one wants to be blamed for a bad approval.\n\nTractability:\nHigh enough. Digitization and workflow tooling are obvious, but the wedge is standardization and automation, not just “move PDFs online.” AI can pre-check plans, map to codes, and flag issues, reducing reviewer time. The hard part is trust, liability, and inter-jurisdiction adoption.\n\nStartup surfaces:\n- Automated plan checking with explainable code citations and human-in-the-loop review\n- Permit queue transparency and scheduling systems that reduce idle time\n- Inspection routing and capacity tools for municipalities and third-party inspectors\n- Standardized digital submission formats and compliance “linting” for architects\n- Financing-linked fast tracks: verified compliance unlocks cheaper capital and faster starts",
        "sources": [
            "[1] Freddie Mac. Housing Supply: Still Undersupplied by Millions of Units (Nov 2024). ([freddiemac.com](https://www.freddiemac.com/research/insight/housing-supply-still-undersupplied))",
            "[2] Realtor.com. Housing Supply Gap Exceeds 4 Million Homes in 2025 (Mar 2026). ([realtor.com](https://www.realtor.com/research/us-housing-supply-gap-2026/))",
            "[3] Realtor.com. 2024 supply gap analysis citing zoning and restrictions as constraints (Mar 2025). ([realtor.com](https://www.realtor.com/research/us-housing-supply-gap-2025/))",
            "[4] Reuters. Realtor.com housing supply gap reporting (Mar 2026). ([reuters.com](https://www.reuters.com/business/us-housing-supply-gap-widens-further-2025-realtorcom-says-2026-03-03/))"
        ]
    },
    {
        "rank": 12,
        "slug": "heat-resilience-systems",
        "title": "Heat Resilience Systems",
        "short_descriptor": "Protect people and labor",
        "preview_text": "Extreme heat is already killing people and destroying productivity, but most cities and employers still lack operational heat safety systems.",
        "problem_priority": 75,
        "importance": 84,
        "neglectedness": 55,
        "tractability": 65,
        "gap": "What exists is weather forecasts and ad hoc responses. What could exist is heat resilience as infrastructure: neighborhood cooling capacity, worker heat safety telemetry, building retrofits, and triggers for action tied to health outcomes.",
        "stakes": "Heat is both a public health threat and an economic drag. It hits the most vulnerable first: infants, older adults, and outdoor workers. Adaptation is not optional. It is a near-term survival and productivity investment.",
        "sector_tags": [
            "Climate",
            "Cities",
            "Healthcare"
        ],
        "outcome_tags": [
            "Resilience",
            "Human Flourishing",
            "Climate",
            "Community Renewal"
        ],
        "long_form_content": "Headline evidence:\n- WHO estimates approximately 489,000 heat-related deaths occur each year (2000–2019). [1]([who.int](https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health))\n- The Lancet Countdown reports heat-related deaths among people older than 65 reached the highest level recorded in 2023, 167% higher than 1990–99. [2]([lancetcountdown.org](https://lancetcountdown.org/2024-visual-summary/))\n- OSHA is advancing a heat injury and illness prevention rulemaking, indicating the regulatory and operational urgency for workplaces. [3]([osha.gov](https://www.osha.gov/heat-exposure/rulemaking))\n\nWhy it stays neglected:\nHeat harms are under-reported and diffuse. The benefits of cooling are shared, but costs are local. Infrastructure upgrades compete with everything else. Employers often lack tools to measure heat stress and manage it dynamically, especially indoors where heat is “invisible.”\n\nTractability:\nStrong. We can deploy sensors, cooling centers, optimized schedules, and building efficiency upgrades now. AI can forecast heat risk at hyperlocal resolution, allocate resources, and drive behavioral nudges. Hard parts include funding, behavior change, and ensuring interventions reach vulnerable groups.\n\nStartup surfaces:\n- Worker heat-risk platforms: wearable telemetry, WBGT alerts, compliance logs\n- City heat operating systems: risk maps, cooling center capacity, resource dispatch\n- Low-cost retrofits for apartments and schools: insulation, ventilation, heat pumps\n- Grid-aware “cooling demand shaping” to prevent blackouts during heatwaves\n- Insurance and financing products tied to verified heat-risk reduction",
        "sources": [
            "[1] WHO. Climate change, heat and health (fact sheet, May 2024). ([who.int](https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health))",
            "[2] Lancet Countdown. 2024 visual summary: heat mortality indicator (older adults). ([lancetcountdown.org](https://lancetcountdown.org/2024-visual-summary/))",
            "[3] OSHA. Heat Injury and Illness Prevention rulemaking status. ([osha.gov](https://www.osha.gov/heat-exposure/rulemaking))",
            "[4] Romanello M et al. Lancet Countdown on health and climate change (2024). ([thelancet.com](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%282401822-1/fulltext))"
        ]
    },
    {
        "rank": 13,
        "slug": "critical-minerals-refining-and-recycling",
        "title": "Critical Minerals Refining and Recycling",
        "short_descriptor": "Supply chain unlock",
        "preview_text": "We are scaling electrification and storage, but the mineral supply chain is concentrated, slow, and not circular enough.",
        "problem_priority": 75,
        "importance": 83,
        "neglectedness": 55,
        "tractability": 55,
        "gap": "Mining expansion is slow and politically hard, but refining and recycling are the near-term choke points where capacity, quality, and geopolitics collide. What could exist is a diversified, high-yield refining and recycling layer that turns end-of-life products into feedstock and reduces reliance on single points of failure.",
        "stakes": "This is the materials substrate for the energy transition and the digital economy. A constrained minerals supply chain can bottleneck grids, batteries, and defense production. Recycling and refining also reduce environmental harm per unit of capacity delivered.",
        "sector_tags": [
            "Energy",
            "Manufacturing",
            "Transportation",
            "Climate"
        ],
        "outcome_tags": [
            "Energy Abundance",
            "Abundance",
            "Resilience",
            "Climate"
        ],
        "long_form_content": "Headline evidence:\n- IEA reports lithium demand rose by nearly 30% in 2024, with broad growth across key minerals driven by electric vehicles, storage, renewables, and grids. [1]([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary))\n- IEA outlines continued supply concentration risks, with diversification uneven across minerals and time horizons. [2]([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025/overview-of-outlook-for-key-minerals))\n- The IEA frames minerals as a core energy transition dependency, requiring active policy and investment to avoid shortages and volatility. [3]([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025))\n\nWhy it stays neglected:\nRefining is capex-heavy, regulated, and often opposed locally. Recycling suffers from fragmented collection, unclear ownership of end-of-life streams, and difficult chemistry. Buyers want cheap inputs now, not resilient supply later. Standards for battery passports and material traceability are evolving but incomplete.\n\nTractability:\nMedium. Better hydrometallurgy, direct recycling, and process control are emerging. AI helps optimize process parameters and detect impurities. The hard pieces are siting, permitting, and integration into OEM supply contracts with bankable offtake.\n\nStartup surfaces:\n- High-yield, low-waste refining processes for specific chemistries (lithium, nickel, rare earths)\n- Battery and electronics recycling with verified material provenance and quality grading\n- Collection logistics and reverse supply chain platforms for end-of-life batteries\n- “Materials passport” systems linking composition to recycling pathways and compliance\n- Predictive supply chain analytics for OEMs tied to contracts and hedging",
        "sources": [
            "[1] IEA. Global Critical Minerals Outlook 2025: executive summary (May 2025). ([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary))",
            "[2] IEA. Global Critical Minerals Outlook 2025: outlook and concentration notes. ([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025/overview-of-outlook-for-key-minerals))",
            "[3] IEA. Global Critical Minerals Outlook 2025 (full report landing). ([iea.org](https://www.iea.org/reports/global-critical-minerals-outlook-2025))",
            "[4] IEA. Global Critical Minerals Outlook 2025 report (PDF). ([iea.blob.core.windows.net](https://iea.blob.core.windows.net/assets/ef5e9b70-3374-4caa-ba9d-19c72253bfc4/GlobalCriticalMineralsOutlook2025.pdf))"
        ]
    },
    {
        "rank": 14,
        "slug": "clinical-trial-execution-os",
        "title": "Clinical Trial Execution OS",
        "short_descriptor": "Faster trials",
        "preview_text": "We have therapeutic ideas, but clinical trials are still slow, expensive, and operationally brittle.",
        "problem_priority": 74,
        "importance": 82,
        "neglectedness": 55,
        "tractability": 70,
        "gap": "What exists is manual study startup, fragmented site tooling, hard recruitment, and expensive monitoring. What could exist is a trials execution operating system that makes enrollment, retention, monitoring, and data integrity cheaper and faster without reducing safety or rigor.",
        "stakes": "Clinical trials are the throughput limiter for medicine. Every delay is delayed cures. Better execution reduces drug prices, increases R&D productivity, and expands access to trials for underrepresented populations.",
        "sector_tags": [
            "Healthcare",
            "Biotech",
            "Science"
        ],
        "outcome_tags": [
            "Scientific Acceleration",
            "Longevity",
            "Human Flourishing",
            "Abundance"
        ],
        "long_form_content": "Headline evidence:\n- FDA guidance clarifies how decentralized elements can move trial activities to locations convenient for participants, while preserving oversight and data integrity. [1]([fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/conducting-clinical-trials-decentralized-elements))\n- A 2024 analysis estimates direct daily costs to conduct phase II and III clinical trials are about $40,000 per day, underscoring the cost of delay. [2]([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/38773058/))\n- A 2024 site challenges report finds recruitment and retention remain a top constraint for sites, reflecting operational limits, not just scientific ones. [3]([wcgclinical.com](https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf))\n\nWhy it stays neglected:\nSponsors, contract research organizations, and sites have misaligned incentives and incompatible tooling. Data entry burdens persist because regulators require auditability. Recruitment is treated as marketing, not systems engineering. Health systems and trials often run as separate enterprises.\n\nTractability:\nHigh. Remote visits, eConsent, eSource, and better analytics are ready. AI can draft protocols, match eligibility, predict dropout, and automate monitoring signals. The hard part is compliance-grade integration, trust with regulators, and harmonizing across sites.\n\nStartup surfaces:\n- Study startup automation: contracts, budgets, approvals, and site activation workflows\n- Participant matching and retention systems integrated into clinical care pathways\n- Risk-based monitoring platforms that reduce on-site monitoring while improving quality\n- Interoperable eSource and audit-trail tooling aligned to regulator expectations\n- “Trial-in-a-box” infrastructure for community clinics and low-resource settings",
        "sources": [
            "[1] FDA. Conducting Clinical Trials with Decentralized Elements (final guidance page). ([fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/conducting-clinical-trials-decentralized-elements))",
            "[2] Smith ZP et al. New estimates on the cost of a delay day in drug development. (2024). ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/38773058/))",
            "[3] WCG. 2024 Clinical Research Site Challenges Report (PDF). ([wcgclinical.com](https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf))",
            "[4] Angus DC et al. Integrating clinical trials with practice of medicine (systems gap). (2024). ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12045079/))"
        ]
    },
    {
        "rank": 15,
        "slug": "health-workforce-mobility-infrastructure",
        "title": "Health Workforce Mobility Infrastructure",
        "short_descriptor": "Portable credentials",
        "preview_text": "We have people who can deliver care, but the workforce cannot move, upskill, and deploy fast enough to meet demand.",
        "problem_priority": 74,
        "importance": 80,
        "neglectedness": 60,
        "tractability": 70,
        "gap": "What exists is credentialing friction, limited portability, and slow onboarding. What could exist is a global mobility layer: verified credentials, scoped licensing, fast training, and scheduling systems that deploy clinicians where they are needed, including via telehealth.",
        "stakes": "Healthcare delivery is ultimately a labor-and-trust system. Workforce shortages collapse access. Mobility infrastructure increases resilience during pandemics, disasters, and routine aging-driven demand surges.",
        "sector_tags": [
            "Healthcare",
            "Governance",
            "Education"
        ],
        "outcome_tags": [
            "Human Flourishing",
            "Resilience",
            "Better Governance",
            "Freedom"
        ],
        "long_form_content": "Headline evidence:\n- WHO estimates a projected global shortfall of 11 million health workers by 2030, mostly in low- and lower-middle income countries. [1]([who.int](https://www.who.int/health-topics/health-workforce))\n- OECD reports long-term care staffing has remained stable at about 5 workers per 100 people aged 65+ (2013–2023 average), despite increasing demand pressure. [2]([oecd.org](https://www.oecd.org/en/publications/2025/11/health-at-a-glance-2025_a894f72e/full-report/long-term-care-workers_9c3bdbaf.html))\n- WHO reports the global health worker stock exceeds 70 million, but shortage patterns diverge and persist by region, implying distribution and mobility are core problems, not just training volume. [3]([apps.who.int](https://apps.who.int/gb/ebwha/pdf_files/EB156/B156_15-en.pdf))\n\nWhy it stays neglected:\nLicensing is local. Verification is slow. Institutions are risk-averse. Data standards are inconsistent. There is no universal “health workforce identity” layer. Many countries underinvest in workforce planning data and treat staffing as a budget line, not infrastructure.\n\nTractability:\nStrong. Credential verification, micro-credentialing, and telehealth enable new models. AI helps map skills to scopes-of-practice, personalize training, and optimize staffing. The remaining hard part is regulatory adoption and trust frameworks.\n\nStartup surfaces:\n- Verifiable credential wallets for clinicians with automated primary-source verification\n- Scoped licensing and supervised deployment models with outcome monitoring\n- Cross-border staffing exchanges for surge capacity and rural coverage\n- Training-to-deployment pipelines for nurses, community health workers, and aides\n- Scheduling and load-balancing platforms for long-term care and home health",
        "sources": [
            "[1] WHO. Health workforce overview and projections (shortfall by 2030). ([who.int](https://www.who.int/health-topics/health-workforce))",
            "[2] OECD. Health at a Glance 2025: long-term care workers indicator. ([oecd.org](https://www.oecd.org/en/publications/2025/11/health-at-a-glance-2025_a894f72e/full-report/long-term-care-workers_9c3bdbaf.html))",
            "[3] WHO. Global strategy on human resources for health: updated shortage estimate (2024 briefing). ([apps.who.int](https://apps.who.int/gb/ebwha/pdf_files/EB156/B156_15-en.pdf))",
            "[4] Boniol M et al. Global health workforce stock and distribution and revised shortage estimates. (2022). ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9237893/))"
        ]
    },
    {
        "rank": 16,
        "slug": "skilled-migration-matching",
        "title": "Skilled Migration Matching",
        "short_descriptor": "Allocate human capital",
        "preview_text": "The world has talent and the world has needs, but the matching layer is slow, opaque, and full of credentialing and visa bottlenecks.",
        "problem_priority": 74,
        "importance": 78,
        "neglectedness": 65,
        "tractability": 65,
        "gap": "What exists is paper-heavy immigration and fragmented recognition of skills, which creates “brain waste” and slows deployment of scarce expertise. What could exist is skills-verified migration pathways that match workers to verified shortages with predictable timelines and portable credentials.",
        "stakes": "Human capital is the real growth engine. Faster, better matching raises productivity, accelerates innovation diffusion, and reduces inequality between places. It also reduces dangerous irregular migration by creating credible legal pathways tied to real labor demand.",
        "sector_tags": [
            "Governance",
            "Education",
            "Cities"
        ],
        "outcome_tags": [
            "Abundance",
            "Freedom",
            "Better Governance",
            "Societal Cohesion"
        ],
        "long_form_content": "Headline evidence:\n- The U.S. State Department publishes global visa wait times and emphasizes they are measured in 30-day increments, reflecting persistent processing delays as an operational bottleneck. [1]([travel.state.gov](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html))\n- Migration Policy Institute documents persistent credential recognition barriers that contribute to “brain waste” among highly skilled immigrants. [2]([migrationpolicy.org](https://www.migrationpolicy.org/article/credential-recognition-trends))\n- WHO highlights that health systems depend on workforce availability and forecasts major shortages, implying skilled migration and recognition systems are part of the supply response. [3]([who.int](https://www.who.int/health-topics/health-workforce))\n\nWhy it stays neglected:\nImmigration is politically sensitive, so tooling is outdated and risk-averse. Credentialing is fragmented across professions and jurisdictions. Employers often cannot sponsor easily, and workers cannot prove skills cheaply. Governments optimize for control, not throughput or match quality.\n\nTractability:\nMedium-high. Digital identity, verifiable credentials, and skills testing can compress timelines. AI can translate credentials, map competencies, and predict fraud risk. Hard parts include policy alignment, regulatory buy-in, and avoiding exclusion or bias.\n\nStartup surfaces:\n- Skills verification platforms that translate foreign credentials into local competency maps\n- Employer-to-visa pipelines with compliance automation and fraud detection\n- Shortage-driven “fast lanes” for specific professions tied to verified demand\n- Cross-border talent marketplaces integrating licensing, relocation, and onboarding\n- Standardized micro-credential pathways to close small gaps (language, codes, local practice)",
        "sources": [
            "[1] U.S. Department of State. Global visa wait times methodology and data. ([travel.state.gov](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html))",
            "[2] Migration Policy Institute. Highly skilled immigrants and credential recognition trends (Nov 2024). ([migrationpolicy.org](https://www.migrationpolicy.org/article/credential-recognition-trends))",
            "[3] WHO. Health workforce projections and shortage framing. ([who.int](https://www.who.int/health-topics/health-workforce))",
            "[4] U.S. Department of State. Visa wait times explanation and caveats. ([travel.state.gov](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html))"
        ]
    },
    {
        "rank": 17,
        "slug": "software-supply-chain-attestation",
        "title": "Software Supply Chain Attestation",
        "short_descriptor": "SBOM verified builds",
        "preview_text": "We run critical infrastructure on software we cannot reliably inventory or verify, and we still treat build provenance as optional metadata.",
        "problem_priority": 73,
        "importance": 80,
        "neglectedness": 55,
        "tractability": 70,
        "gap": "What exists is partial adoption of software bills of materials and uneven secure development practices. What could exist is continuous, machine-verifiable supply chain trust: signed provenance, policy engines, and automated enforcement in procurement and deployment pipelines.",
        "stakes": "Software supply chain compromise is a systems-level threat. A single poisoned dependency can cascade across governments, hospitals, and industrial control systems. Attestation infrastructure converts trust from “brand and hope” to verifiable facts.",
        "sector_tags": [
            "Security",
            "Governance",
            "AI"
        ],
        "outcome_tags": [
            "Resilience",
            "Differentially Defensive",
            "Social Trust",
            "Better Governance"
        ],
        "long_form_content": "Headline evidence:\n- Executive Order 14028 defines a Software Bill of Materials (SBOM) as a formal record of components and supply chain relationships used to build software. [1]([govinfo.gov](https://www.govinfo.gov/link/cpd/executiveorder/14028))\n- NIST’s Secure Software Development Framework (SSDF) recommends a core set of secure software development practices that acquirers can use in procurement and governance. [2]([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-218.pdf?utm_source=chatgpt.com))\n- The SLSA specification defines levels and attestation formats, including provenance, to incrementally improve software supply chain security. [3]([slsa.dev](https://slsa.dev/spec/v1.0/?utm_source=chatgpt.com))\n\nWhy it stays neglected:\nThe ecosystem is fragmented: open-source maintainers, vendors, cloud platforms, and buyers all control different parts. Generating SBOMs is easier than making them actionable. Procurement language is inconsistent. Many organizations lack the policy engines and operational maturity to enforce provenance at deployment time.\n\nTractability:\nHigh enough to win. Standards exist, and regulators are pushing. Tooling for build signing, provenance, and policy gating is rapidly improving. AI helps automate SBOM analysis, vulnerability prioritization, and compliance evidence generation. The hard part is end-to-end adoption and interoperability.\n\nStartup surfaces:\n- SBOM ingestion and “action layer”: risk scoring, policy enforcement, and remediation workflows\n- Build provenance and artifact signing integrated into common CI/CD stacks\n- Procurement compliance platforms: SSDF mappings, attestations, and audit-ready evidence\n- Dependency graph intelligence: exploit likelihood, blast radius, and patch prioritization\n- Managed “secure build pipeline” services for mid-market and critical infrastructure vendors",
        "sources": [
            "[1] Executive Order 14028 (govinfo): SBOM definition (May 12, 2021). ([govinfo.gov](https://www.govinfo.gov/link/cpd/executiveorder/14028))",
            "[2] NIST. SP 800-218: Secure Software Development Framework (SSDF) v1.1 (PDF). ([nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-218.pdf?utm_source=chatgpt.com))",
            "[3] SLSA.dev. SLSA specification v1.0: levels and attestation formats. ([slsa.dev](https://slsa.dev/spec/v1.0/?utm_source=chatgpt.com))",
            "[4] NIST. SBOM overview and EO 14028 alignment. ([nist.gov](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-security-supply-chains-software-1))",
            "[5] NIST CSRC. SSDF project and procurement mappings. ([csrc.nist.gov](https://csrc.nist.gov/projects/ssdf?utm_source=chatgpt.com))"
        ]
    },
    {
        "rank": 18,
        "slug": "scientific-integrity-tooling",
        "title": "Scientific Integrity Tooling",
        "short_descriptor": "Paper-mill resistance",
        "preview_text": "We are funding science as if peer review can keep up, but industrial-scale fraud is outpacing traditional quality control.",
        "problem_priority": 72,
        "importance": 77,
        "neglectedness": 60,
        "tractability": 70,
        "gap": "What exists is reactive retractions and overstretched editors. Fraudulent papers and manipulated images leak into the knowledge base, which then contaminates downstream research and even model training data. What could exist is continuous integrity infrastructure: provenance, automated fraud detection, and stronger incentives for reproducibility.",
        "stakes": "Science is civilization’s error-correcting engine. If the engine gets polluted, everything slows: drug development, engineering, public trust, and AI alignment with reality. This is not “academic drama.” It is the integrity of the operating system for progress.",
        "sector_tags": [
            "Science",
            "AI",
            "Governance"
        ],
        "outcome_tags": [
            "Scientific Acceleration",
            "Social Trust",
            "Alignment",
            "Better Governance"
        ],
        "long_form_content": "Headline evidence:\n- A 2025 PNAS analysis argues entities enabling scientific fraud at scale are large, resilient, and growing rapidly. [1]([pnas.org](https://www.pnas.org/doi/10.1073/pnas.2420092122))\n- A landmark reproducibility analysis estimated irreproducible preclinical research may exceed 50%, costing about $28B per year in the U.S. alone (estimate based on past studies). [2]([journals.plos.org](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002165))\n- Nature reports biomedical paper retractions have quadrupled over 20 years, driven largely by misconduct, indicating a scaling integrity crisis. [3]([nature.com](https://www.nature.com/articles/d41586-024-01609-0))\n\nWhy it stays neglected:\nPublishing incentives reward quantity. Fraud detection is costly and adversarial. Publishers fear reputational damage. Institutions often avoid aggressive enforcement. The victims are diffuse: future researchers, funders, and patients.\n\nTractability:\nGood. We can build integrity checks: image forensics, statistical anomaly detection, provenance verification, and reviewer identity validation. AI is both an accelerant for fraud and a defense tool. The hard part is deploying these tools at scale with low false positives and integrating with publisher workflows.\n\nStartup surfaces:\n- Manuscript integrity scanners: images, statistics, citations, and text pattern analysis\n- Provenance and raw-data submission pipelines with standardized metadata and auditability\n- Reviewer identity and peer review process hardening (anti-broker, anti-fake reviewer)\n- “Clean corpus” curation services for labs, funders, and AI training datasets\n- Incentive tooling for reproducibility: preregistration workflows and replication marketplaces",
        "sources": [
            "[1] Richardson RAK et al. The entities enabling scientific fraud at scale are large, resilient, and growing rapidly. (2025). ([pnas.org](https://www.pnas.org/doi/10.1073/pnas.2420092122))",
            "[2] Freedman LP et al. The economics of reproducibility in preclinical research. (2015). ([journals.plos.org](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002165))",
            "[3] Else H. Biomedical paper retractions have quadrupled in 20 years. (Nature, 2024). ([nature.com](https://www.nature.com/articles/d41586-024-01609-0))",
            "[4] Parker L. Paper mill challenges: past, present, and future. (2024). ([sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0895435624003056))"
        ]
    },
    {
        "rank": 19,
        "slug": "machine-actionable-research-artifacts",
        "title": "Machine-Actionable Research Artifacts",
        "short_descriptor": "FAIR workflows",
        "preview_text": "We publish papers, but we do not reliably publish executable knowledge. Most science is still not machine-actionable, interoperable, or reusable.",
        "problem_priority": 72,
        "importance": 75,
        "neglectedness": 65,
        "tractability": 70,
        "gap": "What exists is PDFs, partial datasets, and custom scripts that die on a laptop. What could exist is research that compiles: machine-readable data, workflows, and provenance that can be searched, rerun, and composed by humans and AI systems.",
        "stakes": "Scientific acceleration is bottlenecked by knowledge friction. When data and workflows are not reusable, we pay the same discovery costs repeatedly. Machine-actionable artifacts are also the substrate for trustworthy AI co-scientists: models are only as good as the corpora and pipelines we can validate.",
        "sector_tags": [
            "Science",
            "AI",
            "Education"
        ],
        "outcome_tags": [
            "Scientific Acceleration",
            "Alignment",
            "Abundance",
            "Social Trust"
        ],
        "long_form_content": "Headline evidence:\n- The FAIR principles emphasize machine findability and reuse, not just human readability. [1]([nature.com](https://www.nature.com/articles/sdata201618))\n- NIH’s Data Management and Sharing policy (effective 2023) applies broadly to NIH-funded research generating scientific data, pushing toward planned sharing as default. [2]([grants.nih.gov](https://grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/policy-overview))\n- A Scientific Data paper argues that barriers in discoverability, interoperability, and curation still block FAIR adoption and meaningful reuse. [3]([nature.com](https://www.nature.com/articles/s41597-023-01969-8))\n\nWhy it stays neglected:\nResearchers are not paid for clean data and reusable workflows. Standards are fragmented. Compliance is often checkbox-based. Tooling is clunky, and incentives favor novelty over infrastructure. Many labs fear being scooped or misinterpreted.\n\nTractability:\nHigh. Better workflow systems, open repositories, and identifiers exist. AI can auto-generate metadata, normalize schemas, and translate pipelines across tools. The hard part is global standards convergence and making “FAIR by default” easier than the status quo.\n\nStartup surfaces:\n- Workflow packaging and execution environments with provenance and reproducibility guarantees\n- Auto-metadata generation and validation tools integrated into lab and analysis pipelines\n- “FAIR compliance” platforms for funders and institutions that produce usable outputs, not PDFs\n- Domain-specific ontologies and interoperability layers with strong developer ergonomics\n- Incentive mechanisms: citation and credit systems for datasets, protocols, and workflows",
        "sources": [
            "[1] Wilkinson MD et al. The FAIR Guiding Principles for scientific data management and stewardship. (2016). ([nature.com](https://www.nature.com/articles/sdata201618))",
            "[2] NIH. Data Management & Sharing Policy overview (updated 2025). ([grants.nih.gov](https://grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/policy-overview))",
            "[3] Hughes LD et al. Addressing barriers in FAIR data practices for biomedical research. (2023). ([nature.com](https://www.nature.com/articles/s41597-023-01969-8))",
            "[4] Wilkinson SR et al. Applying FAIR principles to computational workflows. (2025). ([nature.com](https://www.nature.com/articles/s41597-025-04451-9))"
        ]
    },
    {
        "rank": 20,
        "slug": "pfas-treatment-at-scale",
        "title": "PFAS Treatment at Scale",
        "short_descriptor": "Clean water now",
        "preview_text": "We know “forever chemicals” are widespread and harmful, but removing them from water systems is still slow, expensive, and operationally hard.",
        "problem_priority": 71,
        "importance": 80,
        "neglectedness": 50,
        "tractability": 50,
        "gap": "What exists is partial monitoring, slow remediation, and uneven treatment technology deployment. What could exist is scalable removal and destruction: cheaper treatment, faster deployment, and transparent public dashboards that connect contamination to action.",
        "stakes": "This is a public health and trust issue. When water is contaminated, everything else breaks: childhood development, community stability, and legitimacy of institutions. PFAS remediation is also a forcing function for better chemical monitoring and faster environmental response.",
        "sector_tags": [
            "Water",
            "Healthcare",
            "Cities"
        ],
        "outcome_tags": [
            "Resilience",
            "Human Flourishing",
            "Biodiversity",
            "Social Trust"
        ],
        "long_form_content": "Headline evidence:\n- The U.S. Federal Register finalized a National Primary Drinking Water Regulation establishing standards for six PFAS contaminants and mixtures under the Safe Drinking Water Act. [1]([federalregister.gov](https://www.federalregister.gov/documents/2024/04/26/2024-07773/pfas-national-primary-drinking-water-regulation))\n- EPA set enforceable maximum contaminant levels at 4.0 parts per trillion for PFOA and PFOS, reflecting “lowest feasible” implementation limits with current technology. [2]([epa.gov](https://www.epa.gov/system/files/documents/2024-04/drinking-water-utilities-and-professionals-technical-overview-of-pfas-npdwr.pdf))\n- Reuters reported EPA plans to revise and delay aspects of PFAS rules, illustrating policy volatility and implementation friction. [3]([reuters.com](https://www.reuters.com/sustainability/climate-energy/epa-rollback-forever-chemical-rule-extend-timelines-2025-05-14/))\n\nWhy it stays neglected:\nRemediation is expensive, and costs fall on local utilities while polluter accountability is slow. Treatment systems require engineering, ongoing operations, and supply chains. Regulation is politically contested. Communities often lack measurement data and technical capacity to execute.\n\nTractability:\nMedium. Technologies like granular activated carbon and ion exchange are deployed, but destruction and low-cost scaling are harder. AI helps optimize treatment ops and target high-risk sites. The hardest part is economics and rapid deployment across tens of thousands of systems.\n\nStartup surfaces:\n- Lower-cost PFAS adsorption and regeneration systems with verified performance\n- On-site PFAS destruction tech that reduces hazardous waste transport burdens\n- Utility deployment kits: engineering templates, procurement bundles, and operational monitoring\n- Community measurement and transparency platforms tied to remediation actions\n- Industrial wastewater PFAS capture for upstream prevention",
        "sources": [
            "[1] Federal Register. PFAS National Primary Drinking Water Regulation (Apr 26, 2024). ([federalregister.gov](https://www.federalregister.gov/documents/2024/04/26/2024-07773/pfas-national-primary-drinking-water-regulation))",
            "[2] EPA. Technical overview of PFAS drinking water regulation (MCLs, April 2024 PDF). ([epa.gov](https://www.epa.gov/system/files/documents/2024-04/drinking-water-utilities-and-professionals-technical-overview-of-pfas-npdwr.pdf))",
            "[3] Reuters. EPA to rollback parts of PFAS rule and extend timelines (May 14, 2025). ([reuters.com](https://www.reuters.com/sustainability/climate-energy/epa-rollback-forever-chemical-rule-extend-timelines-2025-05-14/))",
            "[4] EPA. PFAS drinking water standards overview page. ([epa.gov](https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas))"
        ]
    },
    {
    "rank": 21,
    "slug": "transmission-siting-and-permitting-os",
    "title": "Transmission Siting and Permitting OS",
    "short_descriptor": "Grid build speed",
    "preview_text": "We can build generation fast, but the high-voltage transmission needed to move electrons from where energy is produced to where demand is stalls in multi-year planning, siting, and cost-allocation fights.",
    "problem_priority": 71,
    "importance": 82,
    "neglectedness": 45,
    "tractability": 60,
    "gap": "What exists is fragmented, jurisdiction-heavy transmission development where routing, permitting, and “who pays” debates reset timelines repeatedly. What could exist is a repeatable, data-driven transmission delivery stack: faster corridor selection, defensible benefit-cost allocation, and standardized stakeholder workflows that compress years into quarters without cutting safety or legitimacy.",
    "stakes": "If transmission build speed stays slow, clean electricity becomes a paper transition. The opportunity cost is massive: stranded renewables, higher prices, more gas dependence, and increased blackout risk. Grid build speed is not a “climate nice-to-have.” It is a hard physical constraint on abundance and industrial competitiveness.",
    "sector_tags": [
        "Energy",
        "Governance"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Better Governance"
    ],
    "long_form_content": "Headline evidence:\n- The International Energy Agency (IEA) estimates that at least 3,000 gigawatts (GW) of renewable power projects are waiting in grid connection queues, including 1,500 GW in advanced stages. [1]\n- The IEA estimates over 80 million kilometres (km) of grids must be added or refurbished by 2040, roughly equal to the entire existing global grid. [1]\n- The Federal Energy Regulatory Commission (FERC) Order No. 1920 framework requires at least three long-term regional transmission scenarios, using best available data, with no less than a 20-year horizon, reassessed at least every five years. [2]\n\nWhy it stays neglected:\nTransmission is a coordination nightmare. Benefits are regional and long-lived; costs are local and immediate. “Permitting” is not one permit, it is a tangled graph of landowners, environmental review, state and local approvals, tribal consultation, and litigation risk. Meanwhile, regulated utility incentives often favor capex that is easiest to approve locally, not what is system-optimal.\n\nTractability:\nThe window is real because the planning regime is shifting and the data layer is improving. FERC’s long-term planning rules create a clearer compliance backbone. What remains hard is turning scenario planning into executable projects: right-of-way acquisition, credible cost allocation, and trusted community process. AI-value is highest where it compresses analysis, not where it replaces legitimacy.\n\nStartup surfaces:\n- “Transmission corridor CRM” for routing, landowner outreach, and permissioning workflow\n- Automated benefit-cost allocation workbench aligned to FERC Order 1920 requirements\n- Environmental and cultural review copilots that generate defensible, auditable documentation\n- Inter-regional queue and constraint mapping using open grid models and telemetry\n- Contracting and scheduling platforms for transformer, conductor, and high-voltage direct current (HVDC) supply bottlenecks",
    "sources": [
        "[1] International Energy Agency. Electricity Grids and Secure Energy Transitions: Executive summary. (2023).",
        "[2] Federal Energy Regulatory Commission. Explainer on the Transmission Planning and Cost Allocation Final Rule (Order No. 1920, 1920-A, 1920-B). (2024–2025).",
        "[3] Federal Energy Regulatory Commission. FERC Takes on Long-Term Planning with Historic Transmission Rule (news release). (May 13, 2024)."
    ]
},
    {
    "rank": 22,
    "slug": "distribution-interconnection-throughput",
    "title": "Distribution Interconnection Throughput",
    "short_descriptor": "DER grid unlock",
    "preview_text": "Distributed energy resources (DERs) such as rooftop solar, distributed storage, and electric vehicle (EV) charging want to connect, but distribution interconnection is slow, opaque, and upgrade-cost volatile.",
    "problem_priority": 71,
    "importance": 80,
    "neglectedness": 50,
    "tractability": 65,
    "gap": "What exists is a semi-manual engineering workflow where each project triggers bespoke studies, uncertain timelines, and surprise upgrade bills. What could exist is a high-throughput, data-transparent interconnection layer: automated screening, standardized fast lanes, dynamic hosting capacity, and predictable upgrade cost allocation that lets DERs scale without breaking reliability.",
    "stakes": "Distribution is where electrification lands. If DER interconnection stays slow, we lose a major lever for resilience, peak shaving, and consumer-driven supply. This is also a fairness issue: long queues and opaque upgrade charges concentrate access in wealthy zip codes and sophisticated developers, leaving mass-market participation behind.",
    "sector_tags": [
        "Energy",
        "Cities"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. Department of Energy (DOE) reports U.S. residential photovoltaic (PV) systems grew from about 89,000 (2010) to 4.7 million (2023), with nearly 800,000 residential PV systems installed in 2023 alone. [1]\n- DOE summarizes key DER interconnection blockers as four categories: timeline and process delays, high grid upgrade costs, lack of grid data transparency, and incomplete or outdated technical standards. [1]\n- The IEA explicitly flags “modernising distribution grids” as a required response to accelerated electrification and renewables deployment. [2]\n\nWhy it stays neglected:\nDistribution utilities are optimized for safety and continuity, not throughput. The buyer is fragmented (thousands of utilities and regulators), standards are uneven, and data openness collides with cybersecurity concerns. Worst of all, the costs of fixing interconnection are often socialized politically, while the pain is privatized to developers and customers stuck in queues.\n\nTractability:\nDOE has now published a concrete solution map and defined the problem well. This is buildable because many delays are process and information problems, not physics. What remains hard is integration: utilities run legacy systems, regulators move slowly, and cyber requirements are real. Winning companies will sell “reliability plus speed,” not speed alone.\n\nStartup surfaces:\n- Interconnection “fast-lane” software that automates screening and study workflows\n- Hosting capacity as a service using feeder models plus real telemetry\n- Upgrade cost estimation and financing products that reduce surprises\n- Standardized data-sharing and security gateways for utilities and third parties\n- DER controls and curtailment orchestration that turns interconnection into a flexible contract, not a binary yes/no",
    "sources": [
        "[1] U.S. Department of Energy. Distributed Energy Resource Interconnection Roadmap. (January 2025).",
        "[2] International Energy Agency. Electricity Grids and Secure Energy Transitions: Executive summary. (2023).",
        "[3] U.S. Department of Energy. DOE Distributed Energy Resource Interconnection Roadmap (overview page). (January 2025)."
    ]
},
    {
    "rank": 23,
    "slug": "methane-super-emitter-mitigation",
    "title": "Methane Super-Emitter Mitigation",
    "short_descriptor": "Fast climate leverage",
    "preview_text": "We already have the technology to slash methane emissions from fossil fuel supply, but monitoring, accountability, and repair incentives are still weak, so avoidable emissions persist.",
    "problem_priority": 70,
    "importance": 83,
    "neglectedness": 40,
    "tractability": 75,
    "gap": "What exists is periodic inspection and inconsistent reporting that misses intermittent events and “super-emitters.” What could exist is continuous, verifiable methane operations: persistent detection, automated dispatch for repair, and transaction-grade proof that emissions were reduced.",
    "stakes": "Methane is a high-leverage climate lever because cutting it reduces near-term warming. If we can make methane control operationally routine, we buy time for slower decarbonization work and reduce waste in the energy system. This is one of the rare climate problems where physics, economics, and existing tech can align.",
    "sector_tags": [
        "Climate",
        "Energy"
    ],
    "outcome_tags": [
        "Climate",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- The IEA estimates around 70% of methane emissions from the fossil fuel sector could be avoided with existing technologies, often at low cost. [1]\n- The IEA estimates around 35 million tonnes (Mt) of methane emissions from oil, gas, and coal could be avoided at no net cost, based on average 2024 energy prices. [1]\n- The IEA notes around 30% of oil and gas methane emissions could be avoided with measures offering rates of return above 25%. [1]\n\nWhy it stays neglected:\nMethane is a classic externality plus fragmentation story. The operator who pays for detection and repair does not capture the climate benefit, and in some regions does not even capture the gas value reliably. Measurement is the bottleneck: if you cannot attribute emissions to assets with high confidence, you cannot enforce, insure, or finance abatement.\n\nTractability:\nThis is unusually tractable because sensing is improving (satellites, aircraft, drones, fixed sensors), and operational playbooks are known (seals, vapor recovery, flaring optimization, methane capture). What is still hard is end-to-end system integration: detection to attribution to work order to verification.\n\nStartup surfaces:\n- Continuous methane monitoring networks with asset-level attribution\n- Verified “detect-to-repair” service contracts for midstream and upstream operators\n- Methane abatement marketplaces bundling equipment, labor, and verification\n- Regulatory-grade audit tooling for emissions reporting and compliance evidence\n- Parametric insurance products tied to verified methane performance",
    "sources": [
        "[1] International Energy Agency. Global Methane Tracker 2025: Key findings. (2025).",
        "[2] International Energy Agency. Global Methane Tracker 2025 (full report). (2025).",
        "[3] International Energy Agency. Global Methane Tracker 2025 (overview page). (2025)."
    ]
},
    {
    "rank": 24,
    "slug": "wildfire-ignition-detection-networks",
    "title": "Wildfire Ignition Detection Networks",
    "short_descriptor": "Catch fires early",
    "preview_text": "Most wildfires are stopped when caught early, but ignition detection is still uneven, leaving communities gambling on the first hours.",
    "problem_priority": 70,
    "importance": 78,
    "neglectedness": 50,
    "tractability": 65,
    "gap": "What exists is partial coverage: satellites with latency, cameras without full terrain visibility, and human reporting that is delayed or noisy. What could exist is a layered detection mesh that fuses satellites, cameras, drones, and ground sensors into high-confidence alerts routed directly into initial-attack decision systems.",
    "stakes": "The tail risk is everything. A small fraction of ignitions become megafires with outsized loss of life, housing, grid infrastructure, and air quality. Faster detection is not about shaving minutes off dispatch for average fires. It is about preventing the catastrophic escapes that define the damage curve.",
    "sector_tags": [
        "Climate",
        "Cities"
    ],
    "outcome_tags": [
        "Resilience",
        "Air Quality"
    ],
    "long_form_content": "Headline evidence:\n- NOAA tracks 403 U.S. billion-dollar weather and climate disaster events (1980–2024), including wildfire events as a specific category. [1]\n- The U.S. Forest Service reports initial attack success at about 98%, meaning a small percentage of fires that escape initial attack drive disproportionate damage. [2]\n- NASA’s Fire Information for Resource Management System (FIRMS) provides near real-time active fire or hotspot data, with global data available within about 3 hours of satellite observation. [3]\n\nWhy it stays neglected:\nWildfire risk is split across agencies, utilities, insurers, and households, so no one owns the full return on detection. Budgets fund suppression more reliably than prevention or sensing infrastructure. Procurement cycles are slow, and field systems must work under smoke, wind, power outages, and intermittent connectivity.\n\nTractability:\nSensing and edge compute are finally cheap enough to deploy at scale. The hard part is precision and trust: minimizing false positives while catching early, plus integrating with dispatch protocols that are already overloaded. This is tractable if built as an operator-grade system, not a consumer gadget.\n\nStartup surfaces:\n- Multi-sensor wildfire detection fusion with confidence scoring and audit logs\n- Utility-focused detection tied to de-energization decisions and crew routing\n- Drone or aircraft “confirm and map” services triggered by high-confidence alerts\n- Risk-aware initial attack optimization tools using weather plus access constraints\n- Community dashboards that translate detection into clear, local action steps",
    "sources": [
        "[1] NOAA National Centers for Environmental Information. U.S. Billion-Dollar Weather and Climate Disasters dataset. (Accessed 2026).",
        "[2] U.S. Forest Service. Wildland Fire Management report, including initial attack success claims. (FY2023).",
        "[3] NASA Earthdata. FIRMS overview and latency notes. (Accessed 2026)."
    ]
},
    {
    "rank": 25,
    "slug": "lead-exposure-elimination",
    "title": "Lead Exposure Elimination",
    "short_descriptor": "Protect cognition",
    "preview_text": "Lead remains a preventable neurotoxin in water, paint, soil, and products, but detection and remediation are still reactive, fragmented, and under-incentivized.",
    "problem_priority": 70,
    "importance": 78,
    "neglectedness": 50,
    "tractability": 60,
    "gap": "What exists is a harm-driven system: children get tested after exposure, pipes get replaced after crises, and lead hazards persist in older housing stock. What could exist is a prevention-first stack: universal lead hazard discovery, prioritized remediation, and enforcement-grade proof that exposure pathways are eliminated.",
    "stakes": "Lead is a direct hit on human capital. It lowers cognitive performance, increases behavioral burden, and compounds inequality because exposure is highly correlated with poverty and aging infrastructure. Eliminating lead is among the highest-return “invisible infrastructure” investments a society can make.",
    "sector_tags": [
        "Healthcare",
        "Water"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Longevity"
    ],
    "long_form_content": "Headline evidence:\n- The WHO states lead can permanently affect children’s brain development, including reduced intelligence quotient (IQ) and behavioral changes. [1]\n- The CDC states no safe blood lead level has been identified in children. [2]\n- EPA’s Lead and Copper Rule Improvements require replacement of all lead service lines (and certain galvanized requiring replacement lines) under system control no later than 10 years after the compliance date. [3]\n\nWhy it stays neglected:\nThe costs are local, the benefits are long-term, and the harmed population often lacks political power. Lead remediation is operationally messy: uncertain inventories, private-side plumbing, landlord incentives, and fragmented funding. Even when rules exist, implementation bandwidth is scarce.\n\nTractability:\nThis is tractable because the playbook is known: find lead, replace lead, reduce exposure, verify outcomes. What is missing is execution machinery: accurate inventories, scheduling at neighborhood scale, and financing that aligns landlords, utilities, and households.\n\nStartup surfaces:\n- Lead service line inventory platforms combining records, field verification, and predictive mapping\n- Mobile lead hazard testing and remediation workflows for landlords and municipalities\n- Financing products tied to verified replacement and exposure reduction\n- “Lead-safe renovation” compliance tooling for contractors and permitting offices\n- Outcome verification: longitudinal measurement of lead exposure risk reduction at the community level",
    "sources": [
        "[1] World Health Organization. Lead poisoning and health (fact sheet). (2024).",
        "[2] Centers for Disease Control and Prevention. All Children Can Be Exposed to Lead (communication resource). (2025).",
        "[3] U.S. Environmental Protection Agency. National Primary Drinking Water Regulations for Lead and Copper Improvements (Federal Register). (Oct 30, 2024)."
    ]
},
    {
    "rank": 26,
    "slug": "long-duration-energy-storage-bankability",
    "title": "Long-Duration Energy Storage Bankability",
    "short_descriptor": "Capital unlock",
    "preview_text": "Long-duration energy storage (LDES) is increasingly necessary, but the market still lacks bankable performance, maintenance, and cost confidence to finance deployment at scale.",
    "problem_priority": 70,
    "importance": 78,
    "neglectedness": 50,
    "tractability": 55,
    "gap": "What exists is a fragmented demo landscape where each chemistry or system must re-prove economics, safety, and durability from scratch. What could exist is an underwriting-grade infrastructure layer: standardized performance benchmarks, reliability telemetry, maintenance playbooks, and insurance products that turn prototypes into financeable assets.",
    "stakes": "If we cannot finance LDES, we cap the share of variable renewables the grid can absorb cheaply and safely. That forces higher curtailment, higher backup fossil use, and slower electrification. Bankability is the bottleneck between “science project” and “gigaton-scale infrastructure.”",
    "sector_tags": [
        "Energy",
        "Manufacturing"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- DOE analysis finds top innovation portfolios can reduce levelized cost of storage (LCOS) by 12%–85% to roughly $0.026–$0.255 per kilowatt-hour (kWh), with average implementation costs $86 million–$1,063 million and duration 5.5–11 years. [1]\n- DOE highlights that “energy storage project bankability” remains difficult without assurance over technology performance and without long track records, and calls out the need for consistent tools and methods to support risk assessment. [1]\n- The IEA notes that in a scenario aligned with national climate goals, power-system flexibility needs double between 2022 and 2030, increasing the value of storage and demand response. [2]\n\nWhy it stays neglected:\nLDES sits in the valley between venture and infrastructure. Venture wants fast scale and clean unit economics; infrastructure capital wants low risk and known failure modes. Utilities are conservative by mandate, and LDES often needs multi-year demonstrations across multiple use cases before it becomes “standard.”\n\nTractability:\nThe technical frontier is moving, but the near-term win is financial: measurement, warranties, and validation. We do not need a single winner chemistry to make progress. We need a bankability layer that makes several “good enough” technologies investable.\n\nStartup surfaces:\n- LDES performance verification and continuous telemetry standards\n- Insurance and warranty products priced off real-world degradation and maintenance data\n- Fleet maintenance optimization for storage assets including predictive service plans\n- Utility procurement copilots that translate use cases into contract terms and KPIs\n- Multi-site pilots-as-a-service that generate comparable deployment datasets",
    "sources": [
        "[1] U.S. Department of Energy. Achieving the Promise of Low-Cost Long Duration Energy Storage. (Aug 2024).",
        "[2] International Energy Agency. Electricity Grids and Secure Energy Transitions: Executive summary (flexibility doubling). (2023).",
        "[3] U.S. Department of Energy. Pathways to Commercial Liftoff: Long Duration Energy Storage Opportunities. (2023)."
    ]
},
    {
    "rank": 27,
    "slug": "groundwater-depletion-accounting",
    "title": "Groundwater Depletion Accounting",
    "short_descriptor": "Water balance sheet",
    "preview_text": "We pump groundwater like it is infinite because we still lack real-time, enforceable accounting of withdrawals and storage change.",
    "problem_priority": 70,
    "importance": 76,
    "neglectedness": 55,
    "tractability": 55,
    "gap": "What exists is sparse monitoring wells, delayed reporting, and policy that under-prices depletion until crisis hits. What could exist is a groundwater balance sheet: continuous measurement (remote sensing plus local sensors), transparent allocation, and automated enforcement that treats aquifers like critical infrastructure.",
    "stakes": "Groundwater is the hidden buffer behind agriculture, cities, and drought resilience. When it collapses, the failure mode is brutal: wells run dry, land subsides, ecosystems degrade, and water becomes a political emergency. Better accounting is upstream of better policy, because you cannot manage what you cannot measure credibly.",
    "sector_tags": [
        "Water",
        "Cities"
    ],
    "outcome_tags": [
        "Resilience",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- A U.S. Geological Survey analysis comparing GRACE satellite estimates with monitoring and modeling finds declining groundwater storage trends in six major southwestern and south-central U.S. aquifers totaling about −90 km³ over 15 years (2002–2017). [1]\n- NASA’s GRACE mission materials document significant groundwater depletion in multiple regions globally, illustrating that depletion is measurable at large scale by satellite gravimetry. [2]\n- NASA describes GRACE as capturing trends in total water storage and groundwater losses, supporting transboundary and regional management contexts where local measurement is sparse. [2]\n\nWhy it stays neglected:\nGroundwater is politically convenient to ignore because depletion is delayed. Over-pumping looks like prosperity until it doesn’t. Rights regimes are local, fragmented, and contested. Measurement threatens incumbents, so monitoring budgets get cut or delayed.\n\nTractability:\nRemote sensing plus cheap sensors plus better modeling makes this more tractable than a decade ago. The hard part is institutional: translating measurement into allocation, pricing, and enforcement. Startups can win by making measurement unavoidable and decision-ready.\n\nStartup surfaces:\n- Aquifer “digital twins” that fuse GRACE, wells, pumping telemetry, and climate forecasts\n- Low-cost pumping measurement retrofits and verified reporting rails\n- Groundwater allocation and trading platforms where policy allows\n- Leak and subsidence early-warning systems for municipalities and insurers\n- Compliance tooling for groundwater sustainability plans and audits",
    "sources": [
        "[1] U.S. Geological Survey. Comparison of groundwater storage changes from GRACE satellites, monitoring, and modeling in major U.S. aquifers (2002–2017). (2020).",
        "[2] NASA Jet Propulsion Laboratory. GRACE sees groundwater losses around the world (resource page). (Accessed 2026).",
        "[3] U.S. Geological Survey. Post-drought groundwater storage recovery in California’s Central Valley (publication page). (2021)."
    ]
},
    {
    "rank": 28,
    "slug": "nuclear-licensing-and-safety-case-automation",
    "title": "Nuclear Licensing and Safety Case Automation",
    "short_descriptor": "Shorten nuclear timelines",
    "preview_text": "Advanced nuclear can provide firm low-carbon power, but licensing remains document-heavy and slow, pushing timelines and costs beyond what most projects can survive.",
    "problem_priority": 69,
    "importance": 79,
    "neglectedness": 45,
    "tractability": 45,
    "gap": "What exists is a bespoke, narrative-driven licensing and safety case process that is difficult to reuse across designs and sites. What could exist is a machine-checkable safety case ecosystem: standardized evidence modules, test data pipelines, and regulator-facing tooling that makes review faster, more consistent, and more transparent.",
    "stakes": "If nuclear is to contribute meaningfully to clean firm power, the world needs a licensing system that is both rigorous and fast enough to be financeable. Slow licensing is not just a bureaucracy cost. It is a capital cost multiplier that kills projects and concentrates the industry in a few incumbents.",
    "sector_tags": [
        "Nuclear",
        "Energy"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Climate"
    ],
    "long_form_content": "Headline evidence:\n- The NRC describes “Part 53” as a voluntary, performance-based alternative regulatory framework for licensing future commercial nuclear plants, reflecting a deliberate shift toward modernized licensing. [1]\n- The Part 53 proposed rule was noticed in the Federal Register in late 2024, formalizing the pathway for a risk-informed, technology-inclusive licensing regime for advanced reactors. [2]\n- The IEA projects nuclear power doubles from 413 GW (early 2022) to 812 GW (2050) in its Net Zero Emissions by 2050 Scenario, implying major build requirements that will be throttled without faster licensing. [3]\n\nWhy it stays neglected:\nRegulatory reform is slow because the failure mode is catastrophic and public trust is fragile. Meanwhile, firms cannot fully fund the tooling layer because it looks like shared infrastructure and its ROI depends on regulator adoption. This creates a deadlock: everyone agrees speed matters, but no one wants to be the first to change the process.\n\nTractability:\nThis is hard but tractable at the tooling layer. The near-term win is not “AI approves reactors.” The win is structured safety cases, traceable evidence, and faster compilation of what regulators already require. Adoption must be co-designed with regulators and auditability must be first-class.\n\nStartup surfaces:\n- Structured safety-case authoring tools with requirement-to-evidence traceability\n- Standards-aligned simulation and test data pipelines designed for regulator review\n- Reusable evidence modules for common systems (containment, fuels, instrumentation)\n- Review copilots that accelerate cross-referencing, consistency checks, and change tracking\n- Cybersecurity and verification tooling for digital instrumentation and control (I&C) safety claims",
    "sources": [
        "[1] U.S. Nuclear Regulatory Commission. Part 53 rulemaking overview and staff requirements memoranda references. (2024).",
        "[2] Federal Register. Risk-Informed, Technology-Inclusive Regulatory Framework for Advanced Reactors (proposed rule). (Oct 31, 2024).",
        "[3] International Energy Agency. Nuclear Power and Secure Energy Transitions: Executive summary (NZE capacity trajectory). (2023)."
    ]
},
    {
    "rank": 29,
    "slug": "smoke-ready-buildings-retrofit",
    "title": "Smoke-Ready Buildings Retrofit",
    "short_descriptor": "Indoor air refuge",
    "preview_text": "Wildfire smoke turns homes into exposure chambers. We tell people “stay indoors,” but many buildings cannot actually maintain safe indoor air when smoke is worst.",
    "problem_priority": 69,
    "importance": 75,
    "neglectedness": 55,
    "tractability": 70,
    "gap": "What exists is ad hoc filtration, low awareness, and uneven access to clean-air rooms, especially for renters, low-income households, and critical facilities like schools. What could exist is smoke-ready building infrastructure: verified filtration, sealed envelopes, sensor-driven indoor air controls, and neighborhood-scale “clean air centers” that activate during events.",
    "stakes": "Wildfire smoke events are increasingly a public health and productivity shock. Indoor air is where people spend most of their time, including during smoke emergencies. Building-level resilience is a scalable defense because once it is installed, it protects every future event.",
    "sector_tags": [
        "Housing",
        "Cities"
    ],
    "outcome_tags": [
        "Air Quality",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. Environmental Protection Agency advises creating a “clean room” with closed windows and filtered air during wildfire smoke events, reflecting that indoor protection requires specific building actions, not just staying inside. [1]\n- The CDC recommends using a National Institute for Occupational Safety and Health (NIOSH) approved respirator (e.g., N95) if people must go outside during wildfire smoke. [2]\n- NOAA reports U.S. billion-dollar disasters costs (2020–2024) total hundreds of billions of dollars, underscoring the growing economic load of climate-driven extremes that include wildfire impacts. [3]\n\nWhy it stays neglected:\nThe benefits are diffuse and the buyer is unclear. Is it a landlord capex decision, a tenant health decision, a school district decision, or a public health mandate? Retrofit work is also operationally annoying: coordination, permitting, and measuring performance. The result is under-installation until crisis.\n\nTractability:\nThis is buildable now. Filtration technology exists; sensors are cheap; retrofits are straightforward. The missing layer is verification and distribution: standardized packages, financing, and performance metrics (e.g., indoor particulate reduction under smoke conditions).\n\nStartup surfaces:\n- “Smoke-ready retrofit kits” with verified performance and simple installation workflows\n- Indoor air monitoring with building control automation optimized for smoke events\n- Facility targeting and placement for clean-air centers using exposure maps and mobility data\n- Financing products for landlords and schools tied to verified air-quality performance\n- Procurement-grade specs and compliance auditing for smoke readiness in public buildings",
    "sources": [
        "[1] U.S. Environmental Protection Agency. Create a Clean Room to Protect Indoor Air Quality During Wildfire Smoke. (Updated 2025).",
        "[2] Centers for Disease Control and Prevention. Safety Guidelines: Wildfires and Wildfire Smoke (respirator guidance). (Apr 15, 2024).",
        "[3] NOAA Climate.gov. Beyond the Data: 2024 active year for U.S. billion-dollar disasters, including recent five-year cost totals. (Jan 2025)."
    ]
},
    {
    "rank": 30,
    "slug": "carbon-dioxide-removal-mrv-standards",
    "title": "Carbon Dioxide Removal MRV Standards",
    "short_descriptor": "Trust negative emissions",
    "preview_text": "Carbon dioxide removal is increasingly required in net-zero pathways, but the market lacks trusted measurement, monitoring, reporting, and verification (MRV), so buyers cannot confidently differentiate real tons from stories.",
    "problem_priority": 68,
    "importance": 82,
    "neglectedness": 35,
    "tractability": 55,
    "gap": "What exists is a patchwork of protocols, registries, and claims that are hard to compare and easy to game. What could exist is MRV that is standardized, auditable, and composable: transparent uncertainty bounds, durable storage accounting, and interoperable registries that make procurement and regulation credible.",
    "stakes": "Without trustworthy MRV, carbon dioxide removal investment stalls or misallocates. The world either underbuilds removal and misses climate targets, or overpays for low-integrity credits and loses social trust. MRV is the trust layer for a future carbon-negative industry.",
    "sector_tags": [
        "Climate",
        "Science"
    ],
    "outcome_tags": [
        "Climate",
        "Social Trust"
    ],
    "long_form_content": "Headline evidence:\n- DOE summarizes that IPCC Special Report pathways include scenarios where 3.5 to 16 gigatons of carbon dioxide (CO₂) per year are removed in 2050 from bioenergy with carbon capture and storage (BECCS) plus direct air capture systems, highlighting scale and verification stakes. [1]\n- DOE modeling indicates the U.S. may require roughly 0.5 to 2.4 billion tons of CO₂ per year of carbon dioxide removal by 2050 to reach net zero, depending on broader mitigation success. [1]\n- DOE explicitly notes that the prevalence of certain modeled approaches is partly due to limited cost and performance information on the full range of carbon dioxide removal pathways, making robust measurement and validation a near-term necessity. [1]\n\nWhy it stays neglected:\nMRV is public-good infrastructure. The buyer is multiple: corporates, regulators, insurers, and the public. Each wants different assurance levels. Meanwhile, projects want cheap MRV but markets need strict MRV. That tension stalls standardization.\n\nTractability:\nThis is tractable because the near-term work is engineering, not new physics: sensor fusion, statistical uncertainty, audit trails, and registry interoperability. The hard part is governance: designing standards that can evolve without breaking markets, and creating credible third-party verification.\n\nStartup surfaces:\n- MRV toolchains that produce audit-ready evidence and uncertainty quantification\n- Standards and registry interoperability layers with open APIs and provenance logs\n- “Durability accounting” services for geological, mineral, and ocean storage pathways\n- Continuous monitoring sensors and remote sensing pipelines for biological and land sinks\n- Insurance and warranty markets priced off MRV quality and observed permanence",
    "sources": [
        "[1] U.S. Department of Energy. Carbon Dioxide Removal: Purpose, Approaches, and Recommendations. (Jan 2025).",
        "[2] Intergovernmental Panel on Climate Change. AR6 Synthesis Report (Full Report). (2023).",
        "[3] Congressional Research Service. Carbon Dioxide Removal (CDR): Purpose, Approaches, and Context. (Nov 2024)."
    ]
},
    {
    "rank": 31,
    "slug": "operational-technology-cyber-defense",
    "title": "Operational Technology Cyber Defense",
    "short_descriptor": "Protect physical systems",
    "preview_text": "Ransomware and intrusion increasingly hit the physical world through operational technology (OT), but OT defenses lag because uptime, safety, and legacy constraints make patching and monitoring hard.",
    "problem_priority": 68,
    "importance": 78,
    "neglectedness": 45,
    "tractability": 60,
    "gap": "What exists is information technology (IT)-centric security bolted onto industrial environments where downtime is unacceptable and devices are decades old. What could exist is OT-native cyber defense: safe segmentation, continuous asset visibility, compensating controls, and incident response that preserves safety.",
    "stakes": "If OT remains soft, critical services fail: power, water, manufacturing, and logistics. The economic cost is not just ransom. It is physical downtime, safety exposure, and cascading disruptions. OT cyber defense is “differentially defensive” because it protects high-impact systems that attackers target asymmetrically.",
    "sector_tags": [
        "Security",
        "Manufacturing"
    ],
    "outcome_tags": [
        "Resilience",
        "Differentially Defensive"
    ],
    "long_form_content": "Headline evidence:\n- NIST SP 800-82 Revision 3 provides a dedicated OT security guide, explicitly distinguishing OT threats and safeguards from conventional IT security models. [1]\n- The FBI Internet Crime Complaint Center (IC3) 2024 annual report states reported losses exceeded $16 billion and flags ransomware as a pervasive threat to critical infrastructure. [2]\n- CISA continues to publish Industrial Control Systems (ICS) advisories describing active vulnerabilities and mitigations, reflecting an ongoing vulnerability surface in industrial systems. [3]\n\nWhy it stays neglected:\nIndustrial operators prioritize safety and uptime, so security changes are risky. Vendors are fragmented, device inventories are incomplete, and incident reporting is inconsistent. Many organizations do not even know what is on their OT networks, so they cannot defend it systematically.\n\nTractability:\nThis is tractable because the wins are largely operational: asset inventory, network segmentation, secure remote access, and anomaly detection tuned to industrial signals. The hard part is deployment inside safety-critical environments. Tools must be reliable, low-touch, and compatible with legacy systems.\n\nStartup surfaces:\n- OT asset discovery and “ground truth” inventory with continuous updates\n- Safe segmentation and micro-perimeter tooling for plants and utilities\n- Secure remote access designed for OT constraints and vendor ecosystems\n- OT anomaly detection using process variables and safety thresholds, not just signatures\n- Incident response playbooks and tabletop automation for industrial operators",
    "sources": [
        "[1] National Institute of Standards and Technology. Guide to Operational Technology (OT) Security (SP 800-82 Rev. 3). (2023).",
        "[2] Federal Bureau of Investigation. Internet Crime Complaint Center (IC3) 2024 Annual Report. (2024).",
        "[3] Cybersecurity and Infrastructure Security Agency. Industrial Control Systems advisories and alerts. (2025)."
    ]
},
    {
    "rank": 32,
    "slug": "digital-public-identity-and-credentials",
    "title": "Digital Public Identity and Credentials",
    "short_descriptor": "Secure authentication",
    "preview_text": "We can digitize services, but without secure digital identity rails we get fraud, exclusion, and high-friction enrollment across benefits, banking, healthcare, and work.",
    "problem_priority": 68,
    "importance": 75,
    "neglectedness": 50,
    "tractability": 65,
    "gap": "What exists is brittle identity proofing, repeated account creation, weak authentication, and privacy risk from excessive data collection. What could exist is a digital public identity layer: privacy-preserving credentials, secure authentication, and interoperable verification that reduces fraud while expanding access.",
    "stakes": "Identity is a foundation layer. If it is weak, everything built on top becomes expensive: fraud, manual reviews, and exclusion errors. If it is strong and privacy-preserving, we unlock faster services, safer payments, and broader inclusion in the digital economy.",
    "sector_tags": [
        "Governance",
        "Security"
    ],
    "outcome_tags": [
        "Freedom",
        "Better Governance"
    ],
    "long_form_content": "Headline evidence:\n- World Bank digital development analysis reports that in 2024, about 2.9 billion people still lacked access to “online digital ID” systems that enable secure remote authentication for online transactions. [1]\n- The World Bank ID4D dataset estimates approximately 850 million people worldwide lack an official ID, and billions more lack digitally verifiable or online-usable digital identity. [2]\n- NIST SP 800-63-4 provides technical requirements for identity proofing, authentication, and federation, explicitly covering government-facing digital identity assurance levels. [3]\n\nWhy it stays neglected:\nDigital identity is politically sensitive and easily derailed by surveillance fears, vendor capture, or exclusion harms. Meanwhile, the “buyer” is split across agencies and sectors. The result is duplicated identity systems, fragmented standards, and weak interoperability.\n\nTractability:\nThe technical pieces are mature: cryptography, secure hardware, and standardized protocols. The frontier is product governance: designing identity systems that are usable, inclusive, and privacy-preserving while meeting fraud and security requirements. Startups can win by shipping interoperable components that governments can adopt incrementally.\n\nStartup surfaces:\n- Privacy-preserving credential wallets and verifier infrastructure aligned to standards\n- Fraud-resistant remote identity proofing and re-verification workflows\n- Interoperability layers that unify fragmented agency identities without centralizing data\n- Consent-based attribute sharing for age, residency, and eligibility verification\n- Continuous risk scoring and adaptive authentication for high-risk transactions",
    "sources": [
        "[1] World Bank (ID4D). Global progress in identification: findings from latest data (blog). (Oct 2025).",
        "[2] World Bank (ID4D). ID4D Global Dataset (identity coverage estimates). (Accessed 2026).",
        "[3] National Institute of Standards and Technology. Digital Identity Guidelines (SP 800-63-4, Final). (2025)."
    ]
},
    {
    "rank": 33,
    "slug": "public-procurement-execution-os",
    "title": "Public Procurement Execution OS",
    "short_descriptor": "Buy outcomes faster",
    "preview_text": "Governments spend at huge scale, but procurement and delivery tooling is still slow, compliance-first, and brittle, so outcomes arrive late and expensive.",
    "problem_priority": 68,
    "importance": 73,
    "neglectedness": 55,
    "tractability": 55,
    "gap": "What exists is procurement as paperwork: fragmented requirements, slow vendor onboarding, uneven performance tracking, and weak feedback loops between delivery and purchasing. What could exist is procurement as product management: outcome-based specs, continuous vendor performance data, faster purchasing cycles, and audit-ready transparency.",
    "stakes": "Procurement is how states build. When it is slow, every public good becomes slow: housing, infrastructure, defense, health systems, and digital services. Improving procurement throughput is a compounding advantage because it speeds every downstream project category.",
    "sector_tags": [
        "Governance",
        "Cities"
    ],
    "outcome_tags": [
        "Better Governance",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- OECD reports public procurement accounted for 12.7% of gross domestic product (GDP) and 29.9% of total government expenditures in OECD countries (2023), making procurement system performance a macro-level lever. [1]\n- GAO flags federal information technology (IT) acquisition and management as a high-risk area, citing persistent challenges and the need for urgent action. [2]\n- GAO identifies “critical legacy systems” still needing modernization and evaluates weak plans for modernizing them, illustrating how execution tooling failures persist inside government. [3]\n\nWhy it stays neglected:\nProcurement is treated as compliance and risk minimization, not delivery optimization. Incentives punish failure more than delay, so systems become slow by default. Vendors adapt to the bureaucracy with consulting-heavy approaches that keep incumbents entrenched.\n\nTractability:\nThis is tractable because it is mostly software, workflow, and data, not physics. The hard parts are integration with legacy systems, security, and navigating procurement law. Winners will ship modular systems that layer on top of existing workflows and prove faster outcomes without sacrificing auditability.\n\nStartup surfaces:\n- Outcome-based requirements builders linked to measurable service-level objectives (SLOs)\n- Vendor onboarding and qualification automation with continuous monitoring\n- Contract performance telemetry and payment systems tied to verified milestones\n- Audit-ready transparency layers that reduce fear of experimentation\n- “Procurement copilots” that translate policy constraints into executable purchasing paths",
    "sources": [
        "[1] Organisation for Economic Co-operation and Development. Professionalising public procurement through certification (including procurement share of GDP and expenditures). (2025).",
        "[2] U.S. Government Accountability Office. Press release: urgent action needed on IT acquisition and management challenges (high-risk update). (Jan 2025).",
        "[3] U.S. Government Accountability Office. Agencies need to plan for modernizing critical decades-old legacy IT systems. (Jul 2025)."
    ]
},
    {
    "rank": 34,
    "slug": "routine-immunization-catch-up-infrastructure",
    "title": "Routine Immunization Catch-Up Infrastructure",
    "short_descriptor": "Close immunity gaps",
    "preview_text": "Routine vaccination coverage is plateauing and millions of zero-dose children persist, but immunization systems still struggle to find, persuade, and deliver to the hardest-to-reach cohorts.",
    "problem_priority": 67,
    "importance": 78,
    "neglectedness": 40,
    "tractability": 65,
    "gap": "What exists is periodic campaigns and incomplete registries that miss mobile, conflict-affected, and underserved populations. What could exist is a real-time immunization operating system: reliable registries, microplanning, cold chain visibility, and last-mile delivery that treats “zero-dose” as a solvable logistics and trust problem.",
    "stakes": "Routine immunization is one of the highest ROI interventions ever invented. When coverage stalls, outbreaks return and health systems absorb avoidable load. Catch-up is not just child health. It is global stability because infectious disease shocks cascade into education, labor markets, and political trust.",
    "sector_tags": [
        "Healthcare",
        "Biotech"
    ],
    "outcome_tags": [
        "Resilience",
        "Longevity"
    ],
    "long_form_content": "Headline evidence:\n- WHO reports 14.3 million “zero-dose” children globally in 2024 and DTP3 coverage at 85% in 2024, still below pre-pandemic levels for some indicators. [1]\n- UNICEF reports 14.3 million zero-dose children and nearly 20 million infants missing at least one dose of diphtheria-tetanus-pertussis (DTP) vaccine in 2024. [2]\n- UNICEF’s immunization data notes measles first-dose coverage at 84% in 2024, leaving tens of millions unprotected, reinforcing that routine coverage gaps persist. [3]\n\nWhy it stays neglected:\nThe “last mile” is expensive and politically under-rewarded. Many health systems still lack interoperable registries, consistent funding, and community trust. Conflict and displacement break delivery models. Meanwhile, misinformation scales faster than public health response capacity.\n\nTractability:\nThis is tractable because the bottlenecks are execution: registries, supply chain, outreach, scheduling, and delivery visibility. Mobile infrastructure and better data systems can compress the feedback loop from “missed child” to “delivered dose.” The hard part is trust: the system must work with community institutions, not around them.\n\nStartup surfaces:\n- Interoperable immunization registries with offline-first functionality\n- Cold-chain monitoring and predictive resupply with audit logs\n- “Zero-dose finders” combining clinic data, geospatial targeting, and outreach workflows\n- Appointment and follow-up systems designed for low-connectivity environments\n- Trust and misinformation countermeasures built into delivery channels and community health worker tooling",
    "sources": [
        "[1] World Health Organization. Immunization coverage (fact sheet). (Jul 2025).",
        "[2] UNICEF. Press release: global childhood vaccination and zero-dose statistics. (2025).",
        "[3] UNICEF DATA. Vaccination and Immunization Statistics (global coverage indicators). (2025)."
    ]
},
    {
    "rank": 35,
    "slug": "maternal-early-warning-and-postpartum-monitoring",
    "title": "Maternal Early Warning and Postpartum Monitoring",
    "short_descriptor": "Preventable deaths",
    "preview_text": "Pregnancy is high-risk biology, but we still monitor many mothers episodically, missing early signals of hemorrhage, hypertensive disorders, infection, and cardiometabolic complications, especially postpartum.",
    "problem_priority": 67,
    "importance": 77,
    "neglectedness": 45,
    "tractability": 70,
    "gap": "What exists is discontinuous care: prenatal visits, delivery, then a thin follow-up layer that often misses the highest-risk window. What could exist is a maternal early warning stack: continuous risk monitoring, faster escalation pathways, and postpartum continuity that treats maternal health as a high-signal system, not a one-time event.",
    "stakes": "Maternal mortality is both a tragedy and a systems signal. When mothers die or suffer severe morbidity, the damage propagates: infant outcomes worsen, family stability cracks, and community trust declines. The upside is massive because many maternal complications are identifiable earlier with better monitoring and faster response.",
    "sector_tags": [
        "Healthcare",
        "Longevity"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Longevity"
    ],
    "long_form_content": "Headline evidence:\n- CDC National Center for Health Statistics reports 649 maternal deaths in 2024 and a maternal mortality rate of 17.9 deaths per 100,000 live births, statistically similar to 2023. [1]\n- CDC reports maternal mortality risk rises sharply with age, with 2024 rates of 62.3 deaths per 100,000 live births for women age 40 and older. [1]\n- CDC reports 2023 maternal mortality rates with large age disparities, reinforcing persistence of high-risk cohorts. [2]\n\nWhy it stays neglected:\nMaternal care touches insurance, hospitals, OB-GYN practices, and public health programs that rarely share data well. Many systems are underpaid for postpartum continuity, and “one more warm handoff” often has no owner. The highest-risk mothers also face the highest barriers to follow-up.\n\nTractability:\nThis is tractable because sensors exist, risk models exist, and intervention pathways exist. The remaining challenge is workflow: integrating monitoring into care teams, ensuring escalation is staffed, and making follow-up default. The wedge is enabling clinicians to act, not generating more data.\n\nStartup surfaces:\n- Postpartum monitoring programs integrated with care teams and escalation protocols\n- Risk-scored pathways for hypertensive disorders and hemorrhage warning windows\n- Home vitals plus symptom capture with clinician-facing triage tooling\n- Claims and clinical data fusion to identify missed follow-ups and high-risk patients\n- Community-based care coordination platforms that reduce missed appointments",
    "sources": [
        "[1] Centers for Disease Control and Prevention, National Center for Health Statistics. Maternal Mortality Rates in the United States, 2024 and NCHS blog summary. (2026).",
        "[2] Centers for Disease Control and Prevention, National Center for Health Statistics. Maternal mortality rates in the United States, 2023. (2025).",
        "[3] Centers for Disease Control and Prevention. Provisional Maternal Death Rates (monitoring dashboard). (Accessed 2026)."
    ]
},
    {
    "rank": 36,
    "slug": "sterile-injectable-manufacturing-reliability",
    "title": "Sterile Injectable Manufacturing Reliability",
    "short_descriptor": "Prevent shortages",
    "preview_text": "Hospitals depend on generic sterile injectables, but quality failures, fragile economics, and concentrated supply chains keep producing shortages that disrupt care.",
    "problem_priority": 67,
    "importance": 76,
    "neglectedness": 45,
    "tractability": 50,
    "gap": "What exists is a shortage management regime that reacts after manufacturing issues occur. What could exist is a reliability-first manufacturing stack: predictive quality surveillance, redundancy planning, and contract structures that pay for reliability, not just the lowest price.",
    "stakes": "Drug shortages force rationing, delays, and clinical substitution. In sterile injectables, the downside is acute because these drugs are used in emergency departments, intensive care units, and operating rooms. Reliability is a healthcare resilience layer that becomes critical under disasters and supply shocks.",
    "sector_tags": [
        "Healthcare",
        "Manufacturing"
    ],
    "outcome_tags": [
        "Resilience",
        "Human Flourishing"
    ],
    "long_form_content": "Headline evidence:\n- FDA reports that in calendar year 2024 it was notified of 1,459 potential drug and biological product shortage situations by 151 manufacturers under mandatory notification requirements. [1]\n- FDA reports that in fiscal year 2024 it issued 105 warning letters to human drug manufacturing sites for drug quality-related reasons, the highest in the past five years. [2]\n- FDA positions the annual “State of Pharmaceutical Quality” reporting as a surveillance tool for the quality of the U.S. drug supply chain, including warning letters and recalls. [3]\n\nWhy it stays neglected:\nProcurement often rewards the cheapest supplier, not the most reliable. Sterile manufacturing is capital intensive, regulated, and hard to restart quickly. When margins get compressed, manufacturers underinvest in modernization, redundancy, and quality culture, increasing systemic fragility.\n\nTractability:\nThis is tractable through better incentives and better monitoring. Predictive quality signals, supplier diversification tooling, and reliability-linked contracts can reduce risk without changing science. Hard parts remain: regulatory constraints, long lead times for facility upgrades, and the need for buyer coalitions (hospital systems, group purchasing organizations) to change purchasing behavior.\n\nStartup surfaces:\n- Predictive quality analytics using inspection history, deviation data, and supply signals\n- Reliability scoring for manufacturers integrated into hospital procurement\n- “Capacity reservation” and redundancy financing structures for essential injectables\n- Digital quality management systems tailored for sterile manufacturing workflows\n- Early-warning systems that detect shortage risk and trigger coordinated mitigation",
    "sources": [
        "[1] U.S. Food and Drug Administration. Drug Shortages Report to Congress: Calendar Year 2024. (2024).",
        "[2] U.S. Food and Drug Administration. Report on the State of Pharmaceutical Quality FY2024. (2024).",
        "[3] U.S. Food and Drug Administration. Report on the State of Pharmaceutical Quality (program page). (2025)."
    ]
},
    {
    "rank": 37,
    "slug": "nonrevenue-water-reduction",
    "title": "Nonrevenue Water Reduction",
    "short_descriptor": "Fix leaks first",
    "preview_text": "We treat drinking water, then lose massive volumes through leaks and measurement errors, but utilities still lack the data and capital workflows to reduce losses quickly.",
    "problem_priority": 67,
    "importance": 72,
    "neglectedness": 55,
    "tractability": 70,
    "gap": "What exists is aging infrastructure with incomplete leak detection, inconsistent water audits, and funding gaps that prolong repair cycles. What could exist is a modern water-loss operating system: continuous monitoring, prioritized replacement planning, and financing tied to verified loss reduction.",
    "stakes": "Water loss is “negative-sum.” Utilities spend money to treat and pump water that never reaches customers, and leaks can become contamination entry points. In a climate-stressed future, every gallon saved is cheaper than every new gallon sourced.",
    "sector_tags": [
        "Water",
        "Cities"
    ],
    "outcome_tags": [
        "Resilience",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- EPA estimates household leaks waste roughly 900 billion gallons of water annually nationwide, illustrating the scale of preventable water loss even before distribution-system losses are counted. [1]\n- The American Society of Civil Engineers estimates a water main break occurs about every two minutes and about 6 billion gallons of treated water are lost each day in the U.S. [2]\n- EPA notes drinking water infrastructure is decades old and can be a significant source of water loss through leaks, motivating systematic audit and control programs. [3]\n\nWhy it stays neglected:\nNonrevenue water is a slow bleed with weak political salience until it becomes a crisis. Many utilities cannot raise rates easily, and capital markets price small utilities poorly. Measurement is also inconsistent, so losses can be hidden in accounting noise.\n\nTractability:\nThis is tractable because sensors, acoustic detection, advanced metering, and analytics are mature. The remaining friction is operational: deployment at scale, workforce scheduling, and financing. The best approach is not “one more gadget,” it is a closed-loop program that finds leaks, fixes them, verifies the savings, and reinvests.\n\nStartup surfaces:\n- Continuous leak detection using acoustic sensing and pressure transients\n- Nonrevenue water analytics that reconcile production, metering, and district metered areas\n- Financing tied to verified gallons saved and avoided treatment costs\n- Work order optimization platforms for pipe replacement and valve maintenance\n- Customer leak detection and alerting programs integrated with utility operations",
    "sources": [
        "[1] U.S. Environmental Protection Agency. WaterSense Statistics and Facts (household leak estimates). (Accessed 2026).",
        "[2] American Society of Civil Engineers. 2021 Infrastructure Report Card: Drinking Water. (2021).",
        "[3] U.S. Environmental Protection Agency. Water Audits and Water Loss Control for Public Water Systems (fact sheet). (2013)."
    ]
},
    {
    "rank": 38,
    "slug": "orbital-debris-coordination-and-removal",
    "title": "Orbital Debris Coordination and Removal",
    "short_descriptor": "Keep orbits usable",
    "preview_text": "Low Earth orbit is becoming a tragedy of the commons. Debris accumulates faster than governance, raising collision risk and threatening satellites, science, and future missions.",
    "problem_priority": 66,
    "importance": 70,
    "neglectedness": 55,
    "tractability": 55,
    "gap": "What exists is partial tracking, inconsistent operator behavior, and limited incentives to remove debris or deorbit fast. What could exist is an orbital safety stack: interoperable tracking, enforceable standards, and credible “debris removal plus verification” services that keep the environment stable.",
    "stakes": "Space is now critical infrastructure: communications, navigation, remote sensing, and defense. If orbital regimes become too risky, we lose capability and raise costs for everything that depends on space services. This is a coordination problem with a physics-based tipping risk: collisions create more debris, increasing future collision probability.",
    "sector_tags": [
        "Space",
        "Security"
    ],
    "outcome_tags": [
        "Resilience",
        "Scientific Acceleration"
    ],
    "long_form_content": "Headline evidence:\n- ESA reports roughly 35,000 objects are tracked in orbit, with about 26,000 pieces of debris larger than 10 cm. [1]\n- The Inter-Agency Space Debris Coordination Committee reports an estimated environment including about 34,000 objects larger than 10 cm, about 900,000 objects from 1–10 cm, and about 128 million objects from 1 mm–1 cm. [2]\n- A NASA deorbit technology state-of-the-art report cites debris population estimates including roughly 1.1 million objects 1–10 cm and over 36,500 pieces larger than 10 cm. [3]\n\nWhy it stays neglected:\nNo one owns orbit. The cost of bad behavior is distributed across all operators over time. Standards exist, but enforcement is weak and international coordination is slow. Meanwhile, launch costs dropped and deployment accelerated, outpacing governance.\n\nTractability:\nActive debris removal is hard but becoming feasible. The tractable near-term wedge is coordination and verification: better tracking, collision avoidance interoperability, faster deorbit compliance, and insurance mechanisms that price risk properly. Removal missions can start with high-risk large objects where marginal benefit is highest.\n\nStartup surfaces:\n- High-precision tracking and conjunction analysis for small operators\n- Interoperable collision avoidance protocols and operator-to-operator coordination tooling\n- Deorbit compliance monitoring and scoring for insurers and regulators\n- “Removal as a service” targeting high-risk derelicts with verification of disposal\n- Space traffic data infrastructure with reconciled catalogs and uncertainty estimates",
    "sources": [
        "[1] European Space Agency. ESA Space Environment Report 2024 (tracked objects and debris counts). (Jul 2024).",
        "[2] Inter-Agency Space Debris Coordination Committee. Status of the Space Debris Environment (counts by size). (Feb 2025).",
        "[3] NASA. Small Spacecraft Technology State of the Art: Deorbit and debris environment estimates. (Feb 2025)."
    ]
},
    {
    "rank": 39,
    "slug": "overdose-response-routing",
    "title": "Overdose Response Routing",
    "short_descriptor": "Naloxone fast lane",
    "preview_text": "Overdose deaths are falling but remain extremely high. We still fail to route naloxone, medication-assisted treatment, and follow-up at the moment risk is highest.",
    "problem_priority": 65,
    "importance": 76,
    "neglectedness": 40,
    "tractability": 70,
    "gap": "What exists is a disconnected system: emergency response reverses overdoses, then patients often fall through the cracks before effective treatment initiation and retention. What could exist is an overdose response pipeline: real-time risk identification, rapid treatment connection, and long-term follow-up as a default pathway.",
    "stakes": "Overdose is a mass-mortality phenomenon with concentrated impact in working-age populations and vulnerable communities. The recent decline shows the system can move. The risk is backsliding if funding, logistics, and care continuity fail. Routing is the bottleneck between “saving a life today” and “preventing death next month.”",
    "sector_tags": [
        "Healthcare",
        "Community"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- CDC reports provisional data showing about 87,000 overdose deaths from October 2023 to September 2024, down from around 114,000 the previous year, a nearly 24% decline. [1]\n- CDC reports overdose deaths involving opioids decreased from an estimated 83,140 (2023) to 54,743 (2024). [2]\n- CDC provides a jurisdiction-by-jurisdiction overdose death counts and change dashboard, reflecting ongoing surveillance infrastructure for routing and response. [3]\n\nWhy it stays neglected:\nThe system is split: emergency services, hospitals, behavioral health, and payers each optimize locally. Stigma and unstable housing break follow-up. Many programs are grant-funded and fragile. Data sharing is limited, so risk detection and referral loops are incomplete.\n\nTractability:\nThis is tractable because tools exist: naloxone distribution, medication treatment for opioid use disorder, and proven follow-up models. The missing layer is orchestration: logistics, referral completion, and retention measurement. AI can help with identification and workflow, but the core is execution.\n\nStartup surfaces:\n- Real-time referral completion tooling from emergency departments to treatment providers\n- Follow-up automation with measurement of retention and relapse risk signals\n- Community naloxone logistics and inventory intelligence tied to overdose hotspots\n- Care navigation platforms for high-risk cohorts including housing and social support routing\n- Payer-integrated outcomes tracking for treatment adherence and relapse prevention",
    "sources": [
        "[1] Centers for Disease Control and Prevention. CDC reports nearly 24% decline in U.S. drug overdose deaths (provisional). (Feb 25, 2025).",
        "[2] Centers for Disease Control and Prevention, National Center for Health Statistics. U.S. overdose deaths decrease almost 27% in 2024 (press release). (May 14, 2025).",
        "[3] Centers for Disease Control and Prevention. Provisional Drug Overdose Death Counts dashboard. (Accessed 2026)."
    ]
},
    {
    "rank": 40,
    "slug": "measurement-based-mental-health-care",
    "title": "Measurement-Based Mental Health Care",
    "short_descriptor": "Quality at scale",
    "preview_text": "We have validated therapies and medications, but mental health care is often delivered without consistent measurement, feedback loops, or continuity, so quality varies wildly and outcomes are unknown.",
    "problem_priority": 65,
    "importance": 74,
    "neglectedness": 45,
    "tractability": 70,
    "gap": "What exists is appointment-based care with weak longitudinal tracking, limited follow-up, and scarce measurement of symptom change and functioning. What could exist is measurement-based care as default: standardized assessment, rapid iteration of treatment plans, and durable continuity supported by tools and teams.",
    "stakes": "Mental health is upstream of productivity, relationships, education outcomes, and social cohesion. Scaling care quantity without scaling care quality is a trap. Measurement-based care turns “more sessions” into “better outcomes,” and creates the feedback data needed to allocate resources intelligently.",
    "sector_tags": [
        "Healthcare",
        "Community"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Societal Cohesion"
    ],
    "long_form_content": "Headline evidence:\n- WHO reports more than 1 billion people live with mental health disorders and calls for urgent service scale-up. [1]\n- WHO states depression and anxiety alone cost the global economy an estimated US$1 trillion each year, largely through lost productivity. [2]\n- WHO’s Mental Health Atlas collects data across 144 countries, tracking financing, workforce, and services, implying that measurement and system monitoring are core levers. [3]\n\nWhy it stays neglected:\nWorkforce shortages and reimbursement structures push volume over outcomes. Data systems are fragmented and privacy constraints are real, so longitudinal measurement is hard. Many care pathways still treat mental health as subjective and untrackable, which becomes a self-fulfilling failure mode.\n\nTractability:\nThis is tractable because validated instruments exist and digital follow-up is cheap. The hard part is adoption and workflow integration: clinicians must trust the measures, and systems must use them to adjust care. The wedge is building tools that reduce clinician burden while improving outcomes.\n\nStartup surfaces:\n- Measurement-based care platforms integrated with electronic health records and workflows\n- Hybrid care models that combine clinicians with coached, protocolized support\n- Continuous outcomes tracking tied to treatment adjustments and relapse prevention\n- Privacy-preserving analytics for payer and provider system performance benchmarking\n- Digital triage and step-care routing that reliably escalates when needed",
    "sources": [
        "[1] World Health Organization. Over a billion people living with mental health conditions: services require urgent scale-up. (Sep 2025).",
        "[2] World Health Organization. Depression and anxiety estimated economic cost statement (US$1 trillion per year). (Sep 2025).",
        "[3] World Health Organization. Mental Health Atlas 2024 (publication page and scope). (2025)."
    ]
},
    {
    "rank": 41,
    "slug": "dna-synthesis-screening-infrastructure",
    "title": "DNA Synthesis Screening Infrastructure",
    "short_descriptor": "Biosecurity by default",
    "preview_text": "We can order DNA like cloud compute, but screening and enforcement are still inconsistent, leaving synthetic biology’s dangerous edge cases under-governed.",
    "problem_priority": 64,
    "importance": 74,
    "neglectedness": 40,
    "tractability": 58,
    "gap": "What exists is a patchwork of voluntary screening guidance, uneven vendor practices, and limited cross-border interoperability. What could exist is a global “screening-by-default” stack: harmonized sequence and customer screening, high-trust escalation channels, and audit-ready evidence that makes high-risk synthesis orders harder to place and easier to investigate.",
    "stakes": "Synthetic biology is an engine of abundance and medicine, and also a pathway for catastrophic misuse if guardrails stay soft. DNA synthesis is a chokepoint where prevention is cheaper than response. If we make screening reliable and interoperable, we reduce the probability of rare, extreme events while preserving legitimate innovation velocity.",
    "sector_tags": [
        "Biotech",
        "Security"
    ],
    "outcome_tags": [
        "Ender Prevention",
        "Existential Risk Reduction"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. government published screening guidance for synthetic double-stranded DNA providers, explicitly recommending sequence screening and customer screening to reduce misuse risk. [1]\n- The U.S. National Biodefense Strategy identifies biotechnology as a domain where prevention and preparedness are core national priorities. [2]\n- The National Academies has warned that advances in synthetic biology can lower barriers to harmful capability and require updated biodefense approaches. [3]\n\nWhy it stays neglected:\nThis is a classic global public good. The best outcome is “nothing happens,” so it is hard to fund. Vendors face competitive pressure to reduce friction, and cross-border enforcement is weak. Screening also has hard technical edges: ambiguous sequences, context-dependent risk, and adversarial ordering behavior.\n\nTractability:\nTractable now because synthesis is already centralized enough to instrument, and because modern sequence classification and secure auditing are strong. The hard part is governance and interoperability: aligning vendors, regulators, and researchers on shared standards, safe harbor rules, and escalation protocols that do not punish legitimate science.\n\nStartup surfaces:\n- Sequence-of-concern classification services with transparent uncertainty bounds and human review escalation\n- Vendor screening workflow software: customer verification, order triage, and audit logs\n- Interoperability rails for cross-vendor risk signaling and approved sharing protocols\n- Red-team datasets and evaluation harnesses for screening quality and false-positive control\n- Compliance tooling for regulators and funders tying grants and procurement to verified screening maturity",
    "sources": [
        "[1] U.S. Department of Health and Human Services. Screening Framework Guidance for Providers of Synthetic Double-Stranded DNA. 2010. https://www.phe.gov/s3/BioriskManagement/biosafety/Pages/SynDNA.aspx",
        "[2] The White House. National Biodefense Strategy and Implementation Plan. 2022. https://www.whitehouse.gov/wp-content/uploads/2022/10/National-Biodefense-Strategy-and-Implementation-Plan_October-2022.pdf",
        "[3] National Academies of Sciences, Engineering, and Medicine. Biodefense in the Age of Synthetic Biology. 2018. https://nap.nationalacademies.org/catalog/24890/biodefense-in-the-age-of-synthetic-biology",
        "[4] International Gene Synthesis Consortium. Harmonized Screening Protocol (program overview). Accessed 2026-03-15. https://genesynthesisconsortium.org/"
    ]
},
    {
    "rank": 42,
    "slug": "inverter-based-grid-stability-services",
    "title": "Inverter-Based Grid Stability Services",
    "short_descriptor": "Stable inverter grids",
    "preview_text": "As grids fill with inverter-based resources, stability becomes a controls-and-software problem, but standards, models, and validation still lag deployment.",
    "problem_priority": 64,
    "importance": 74,
    "neglectedness": 42,
    "tractability": 60,
    "gap": "What exists is a grid designed for synchronous inertia, now being asked to operate with fast, complex inverter dynamics that are hard to model and test. What could exist is “stability as a service” for inverter-heavy grids: grid-forming controls, verified ride-through behavior, standardized models, and field validation pipelines that make behavior predictable under stress.",
    "stakes": "Grid stability is the substrate for everything downstream: electrification, AI compute, industrial reshoring, and disaster response. If inverter-heavy systems behave unpredictably, we get curtailment, deratings, and blackouts. Solving this is not just about more megawatts. It is about keeping the grid controllable as its physics changes.",
    "sector_tags": [
        "Energy",
        "Manufacturing"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- NERC published reliability guidance focused on performance of bulk power system-connected inverter-based resources, reflecting systemic reliability risk and the need for standardized performance expectations. [1]\n- IEEE Standard 2800 establishes interconnection and interoperability requirements for transmission-connected inverter-based resources, indicating standards are evolving but still being adopted. [2]\n- NREL has emphasized grid-forming inverters as a key technical pathway for maintaining stability in inverter-dominant futures. [3]\n\nWhy it stays neglected:\nNo single actor owns “system stability.” Costs are local to developers and asset owners; benefits are system-wide. Modeling is technically hard and proprietary. Standards adoption is slow, and validation requires field data from rare disturbance events. Utilities and operators are naturally conservative, and procurement language often cannot specify what it truly needs.\n\nTractability:\nThe technical levers exist: grid-forming controls, better models, and test procedures. What is missing is a scalable validation and certification layer that operators trust. AI helps by accelerating model calibration, anomaly detection, and scenario testing, but the core requirement is auditability and reproducibility.\n\nStartup surfaces:\n- Certification pipelines for inverter performance with standardized test artifacts and operator-grade reports\n- Model libraries and parameter estimation services that reduce black-box behavior\n- “Stability telemetry” platforms integrating phasor and disturbance data into actionable constraints\n- Grid-forming control tuning and monitoring as an ongoing service, not a one-time commissioning\n- Procurement copilots translating stability requirements into contract-ready technical specs",
    "sources": [
        "[1] North American Electric Reliability Corporation. Reliability Guideline: BPS-Connected Inverter-Based Resource Performance. 2023. https://www.nerc.com/comm/PC_Reliability_Guidelines_DL/IBR_Performance_Guideline.pdf",
        "[2] IEEE Standards Association. IEEE Std 2800-2022: Interconnection and Interoperability of Inverter-Based Resources Interconnecting with Associated Transmission Electric Power Systems. 2022. https://standards.ieee.org/standard/2800-2022.html",
        "[3] National Renewable Energy Laboratory. Grid-Forming Inverters (research overview). Accessed 2026-03-15. https://www.nrel.gov/grid/grid-forming-inverters.html"
    ]
},
    {
    "rank": 43,
    "slug": "enhanced-geothermal-drilling-scale",
    "title": "Enhanced Geothermal Drilling Scale",
    "short_descriptor": "Firm heat underground",
    "preview_text": "We have a planet-sized heat battery, but drilling cost, speed, and subsurface uncertainty still block geothermal from scaling like a mainstream clean firm resource.",
    "problem_priority": 64,
    "importance": 75,
    "neglectedness": 38,
    "tractability": 55,
    "gap": "What exists is geothermal development that is slow, site-specific, and high-risk per well, with limited learning transfer across projects. What could exist is geothermal at manufacturing scale: faster drilling, repeatable reservoir creation and characterization, and standardized project finance that treats wells like factories, not one-off bets.",
    "stakes": "Clean firm power is the missing stabilizer for high-renewables grids and industrial electrification. Geothermal can deliver that stabilizer with small land footprint and high capacity factor, if drilling cost and uncertainty fall. Scaling geothermal is also a resilience play: local firm generation reduces dependence on fuel supply chains.",
    "sector_tags": [
        "Energy",
        "Climate"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Climate"
    ],
    "long_form_content": "Headline evidence:\n- DOE’s Enhanced Geothermal Shot sets an explicit cost target for next-generation geothermal power, signaling federal prioritization of cost and deployment speed. [1]\n- DOE’s Pathways to Commercial Liftoff report frames next-generation geothermal as a scale opportunity contingent on drilling improvement and project de-risking. [2]\n- USGS has assessed that geothermal resources can be substantial, but development depends on technology and economics, not resource scarcity alone. [3]\n\nWhy it stays neglected:\nGeothermal risk is front-loaded: you spend big before you know if the subsurface works. That scares capital, slows iteration, and limits player diversity. Permitting and local acceptance add friction. And the supply chain for rigs, crews, and specialized services competes with oil and gas cycles.\n\nTractability:\nThe tractable wedge is cost and learning-rate acceleration: better drilling, better subsurface imaging, and faster iteration loops. What remains hard is reservoir predictability and scaling technologies from demonstration to repeatable playbooks. AI helps by improving geological inference, drilling optimization, and risk modeling for underwriting.\n\nStartup surfaces:\n- Drilling optimization software and sensors that reduce nonproductive time and failure rates\n- Subsurface characterization and “reservoir forecasting” tools for financing-grade risk reduction\n- Modular wellfield designs with standardized equipment and commissioning procedures\n- Geothermal project underwriting and insurance products tied to validated subsurface models\n- Closed-loop and enhanced geothermal system monitoring and control platforms",
    "sources": [
        "[1] U.S. Department of Energy. Enhanced Geothermal Shot (program overview). Accessed 2026-03-15. https://www.energy.gov/eere/geothermal/enhanced-geothermal-shot",
        "[2] U.S. Department of Energy. Pathways to Commercial Liftoff: Next-Generation Geothermal Power. 2023. https://www.energy.gov/sites/default/files/2023-03/Pathways%20to%20Commercial%20Liftoff%20-%20Next-Generation%20Geothermal%20Power_0.pdf",
        "[3] U.S. Geological Survey. Geothermal resource assessment and overview materials. Accessed 2026-03-15. https://www.usgs.gov/programs/geothermal"
    ]
},
    {
    "rank": 44,
    "slug": "data-center-load-flexibility",
    "title": "Data Center Load Flexibility",
    "short_descriptor": "Demand as a resource",
    "preview_text": "Compute demand is rising fast, but data centers still behave like inflexible baseload loads instead of grid-supporting assets that can trade flexibility for speed and cost.",
    "problem_priority": 63,
    "importance": 75,
    "neglectedness": 35,
    "tractability": 70,
    "gap": "What exists is a collision between explosive load growth and slow grid expansion, with data centers often optimized for uptime but not grid interaction. What could exist is “grid-native compute”: dispatchable loads, on-site generation and storage, and standardized market participation that turns data centers into stability and capacity resources.",
    "stakes": "Data centers are becoming a major marginal load driver in many regions. If they scale rigidly, grids derate, prices spike, and permitting battles intensify. If they scale flexibly, they can accelerate grid buildout, reduce peak stress, and unlock faster electrification and compute abundance simultaneously.",
    "sector_tags": [
        "AI",
        "Energy"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The IEA identifies data centres and data transmission networks as a material electricity demand category with rising importance under digitalization and AI growth. [1]\n- NERC’s long-term reliability assessments have highlighted rapidly growing electricity demand in some regions, including from data centers, as a planning risk. [2]\n- DOE has emphasized energy efficiency and demand management as key levers for managing data center impacts on the grid. [3]\n\nWhy it stays neglected:\nUptime culture treats flexibility as risk, and procurement treats power as a utility bill, not a strategic system interface. Grid markets are complex and vary by region. Developers and utilities fight over interconnection and upgrades, and coordination failures dominate.\n\nTractability:\nThis is tractable because modern compute workloads include flexible components, and the hardware stack supports sophisticated scheduling. The hard part is making flexibility contractual and verifiable, and integrating with local grid operators without compromising reliability. AI helps by scheduling workloads against price, carbon, and grid constraints.\n\nStartup surfaces:\n- Workload orchestration that exposes “flexibility budgets” while preserving service-level agreements\n- Grid participation platforms for data centers: demand response, ancillary services, and capacity markets\n- On-site energy system optimization: storage, generation, and heat reuse control layers\n- Interconnection and upgrade cost modeling tied to flexible operating commitments\n- Standardized “flex compute” contracts for utilities and data center operators",
    "sources": [
        "[1] International Energy Agency. Data centres and data transmission networks (analysis and indicators). Accessed 2026-03-15. https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks",
        "[2] North American Electric Reliability Corporation. Long-Term Reliability Assessments (regional demand growth discussions). Accessed 2026-03-15. https://www.nerc.com/pa/RAPA/ra/Pages/Assessments.aspx",
        "[3] U.S. Department of Energy. Data center energy efficiency program information. Accessed 2026-03-15. https://www.energy.gov/eere/buildings/data-centers"
    ]
},
    {
    "rank": 45,
    "slug": "low-carbon-cement-procurement-standards",
    "title": "Low-Carbon Cement Procurement Standards",
    "short_descriptor": "Build without carbon",
    "preview_text": "We know how to make lower-carbon cement and concrete, but standards, codes, and procurement still reward incumbents, blocking adoption at scale.",
    "problem_priority": 63,
    "importance": 76,
    "neglectedness": 32,
    "tractability": 50,
    "gap": "What exists is a building ecosystem optimized for known materials, slow code updates, and risk-averse specifications. What could exist is a low-carbon cement adoption stack: performance-based standards, verified environmental product declarations, and procurement that pays for lower embodied carbon without sacrificing safety.",
    "stakes": "Cement is a foundational material for cities and infrastructure, and also a major emissions source. If we cannot decarbonize it, we carry a permanent emissions load or constrain building. Procurement and standards are the adoption bottleneck that turns technical feasibility into real emissions reduction.",
    "sector_tags": [
        "Manufacturing",
        "Climate"
    ],
    "outcome_tags": [
        "Climate",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The IEA estimates cement is responsible for roughly 7% of global carbon dioxide emissions. [1]\n- The IEA notes that emission reductions in cement require both process and fuel shifts and deployment of low-carbon technologies, implying adoption and scale constraints beyond core chemistry. [1]\n- Federal “buy clean” style procurement initiatives have begun to target embodied carbon in construction materials, creating an adoption wedge for verified low-carbon products. [2]\n\nWhy it stays neglected:\nConstruction is liability-driven. Engineers spec what is proven. Codes and standards move slowly. Supply chains are local and fragmented, and performance verification is expensive. Without procurement demand and standards alignment, producers cannot justify capex for new processes.\n\nTractability:\nTractable if we treat this as a standards and verification problem. Environmental product declarations, performance-based specs, and procurement templates can accelerate adoption. What remains hard is harmonizing codes across jurisdictions and ensuring consistent material performance across varied mixes and conditions.\n\nStartup surfaces:\n- Automated embodied-carbon procurement tooling for governments and large buyers\n- Verification and quality systems for low-carbon cement blends and admixtures\n- Standards translation tools that map new formulations to code-compliant performance specs\n- Construction workflow products that reduce perceived risk for engineers and inspectors\n- Financing for cement plant retrofits tied to procurement commitments and verified outputs",
    "sources": [
        "[1] International Energy Agency. Cement (analysis and emissions share). Accessed 2026-03-15. https://www.iea.org/reports/cement",
        "[2] The White House. Federal Buy Clean Initiative (policy overview and announcements). Accessed 2026-03-15. https://www.whitehouse.gov/briefing-room/statements-releases/2022/03/28/fact-sheet-buy-clean/",
        "[3] U.S. General Services Administration. Low Embodied Carbon Construction Materials program information. Accessed 2026-03-15. https://www.gsa.gov/real-estate/design-construction/construction-programs/low-embodied-carbon"
    ]
},
    {
    "rank": 46,
    "slug": "construction-robotics-for-retrofit",
    "title": "Construction Robotics for Retrofit",
    "short_descriptor": "Labor multiplier",
    "preview_text": "We need to retrofit and rebuild at scale, but construction stays labor-constrained and low-productivity, and most high-impact work still depends on scarce skilled trades.",
    "problem_priority": 62,
    "importance": 74,
    "neglectedness": 34,
    "tractability": 60,
    "gap": "What exists is a retrofit and construction system dominated by manual work, fragmented contractors, and inconsistent quality. What could exist is a robotics-enabled execution layer: high-throughput scanning, automated layout and install, and standardized workflows that make retrofits faster, cheaper, and more verifiable.",
    "stakes": "If we cannot scale physical-world execution, we cannot scale housing supply, energy efficiency, or resilience. Construction is a real economy bottleneck that hits affordability, emissions, and disaster recovery. Robotics can turn constrained labor into a multiplier by shifting work from artisanal to repeatable.",
    "sector_tags": [
        "Robotics",
        "Housing"
    ],
    "outcome_tags": [
        "Abundance",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- IEA highlights buildings as a major energy demand sector where improving efficiency and electrification requires large-scale retrofit and deployment capacity. [1]\n- U.S. Bureau of Labor Statistics data shows persistent job openings and workforce pressure in construction-related categories, indicating labor constraints that constrain throughput. [2]\n- DOE has emphasized scaling building efficiency and decarbonization as a deployment challenge, not just a technology challenge, implying execution bottlenecks. [3]\n\nWhy it stays neglected:\nConstruction is fragmented and risk-averse. Job sites are unstructured environments that break many robotics assumptions. Adoption is slowed by contractor economics, training, and liability. Hardware startups also face long sales cycles and project-based revenue, which punishes iteration.\n\nTractability:\nThe enabling stack is improving: cheaper sensors, better SLAM, better manipulation primitives, and AI planning. The hard part is ruggedization and integration into contractor workflows. Winning companies will sell verified throughput and reduced rework, not “cool robots.”\n\nStartup surfaces:\n- Site scanning and automated as-built verification as a standard workflow layer\n- Robotics for high-frequency tasks: drilling, fastening, sealing, insulation placement, surface prep\n- Prefab and modular install systems that reduce on-site variability\n- Retrofit “assembly lines” with standardized labor-robot collaboration protocols\n- QA and compliance tooling that turns robotic work logs into inspection-ready evidence",
    "sources": [
        "[1] International Energy Agency. Buildings (energy demand and policy context). Accessed 2026-03-15. https://www.iea.org/energy-system/buildings",
        "[2] U.S. Bureau of Labor Statistics. Job Openings and Labor Turnover Survey (JOLTS) data. Accessed 2026-03-15. https://www.bls.gov/jlt/",
        "[3] U.S. Department of Energy. Buildings and Energy Efficiency programs. Accessed 2026-03-15. https://www.energy.gov/eere/buildings/buildings"
    ]
},
    {
    "rank": 47,
    "slug": "nitrous-oxide-and-nitrogen-loss-control",
    "title": "Nitrous Oxide and Nitrogen Loss Control",
    "short_descriptor": "Invisible fertilizer emissions",
    "preview_text": "Nitrous oxide is a potent greenhouse gas and nitrogen runoff is a major water and ecosystem pollutant, but we still lack precision measurement and incentives to reduce losses at scale.",
    "problem_priority": 62,
    "importance": 74,
    "neglectedness": 33,
    "tractability": 55,
    "gap": "What exists is blanket fertilizer application, weak measurement of nitrogen fate, and policies that lag field reality. What could exist is nitrogen as a managed cycle: precision application, real-time soil and emissions sensing, and performance-based incentives that cut emissions and runoff while maintaining yields.",
    "stakes": "Nitrogen loss is a compounding systems problem: climate forcing, water quality, and ecosystem collapse. Reducing it protects fisheries and drinking water while shrinking agricultural emissions. The upside is also economic: less wasted fertilizer and more stable yields under climate stress.",
    "sector_tags": [
        "Food",
        "Climate"
    ],
    "outcome_tags": [
        "Climate",
        "Biodiversity"
    ],
    "long_form_content": "Headline evidence:\n- IPCC AR6 reports nitrous oxide has high global warming potential and is a significant component of agricultural greenhouse gas emissions. [1]\n- A global nitrous oxide budget synthesis reports rising nitrous oxide emissions, driven substantially by agriculture and nitrogen inputs. [2]\n- NOAA tracks recurring coastal hypoxia dynamics, including the Gulf of Mexico dead zone, linked to nutrient runoff, underscoring environmental stakes. [3]\n\nWhy it stays neglected:\nLosses are diffuse and hard to attribute to single actors, and measurement is expensive. Farmers are rationally risk-averse: fertilizer is yield insurance. Regulatory regimes often focus on point sources, not diffuse runoff. Buyers do not pay for “clean nitrogen,” and the benefit mostly accrues to downstream ecosystems and communities.\n\nTractability:\nPrecision tools are improving: sensors, models, and decision support can reduce over-application and time fertilizer more intelligently. The hard part is verification and incentives. The tractable wedge is performance contracts, audited measurement, and integration into existing farm workflows and finance.\n\nStartup surfaces:\n- Soil nitrogen and moisture sensing with actionable prescription generation\n- Farm-level nitrous oxide estimation models with audited uncertainty bounds\n- Variable-rate application tooling integrated with equipment and agronomy workflows\n- Nutrient runoff monitoring for watersheds and compliance programs\n- Performance-based financing: pay for verified nitrogen loss reduction, not inputs",
    "sources": [
        "[1] Intergovernmental Panel on Climate Change. AR6 Synthesis Report (Full Volume), greenhouse gas properties and sector emissions context. 2023. https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_FullVolume.pdf",
        "[2] Tian H et al. A comprehensive quantification of global nitrous oxide sources and sinks. Nature. 2020. https://www.nature.com/articles/s41586-020-2780-0",
        "[3] NOAA. Gulf of Mexico hypoxia and nutrient runoff context (data and reports). Accessed 2026-03-15. https://www.noaa.gov/education/resource-collections/ocean-coasts/hypoxia"
    ]
},
    {
    "rank": 48,
    "slug": "sustainable-aviation-fuel-scale-up",
    "title": "Sustainable Aviation Fuel Scale-Up",
    "short_descriptor": "Clean jet fuel",
    "preview_text": "We know aviation needs low-carbon fuels, but sustainable aviation fuel supply, certification, and offtake structures are still too small and too slow to matter at climate scale.",
    "problem_priority": 61,
    "importance": 73,
    "neglectedness": 32,
    "tractability": 55,
    "gap": "What exists is a tiny sustainable aviation fuel market with high costs, limited feedstocks, and complex certification. What could exist is a scaled fuel ecosystem: bankable offtakes, standardized lifecycle accounting, and production pathways that expand supply without breaking land, food, or biodiversity constraints.",
    "stakes": "Aviation is hard to electrify at long range, so fuels matter. If sustainable fuel does not scale, aviation remains a durable emissions source and a political constraint on climate goals. Scaling sustainable aviation fuel also builds broader clean fuel infrastructure that can spill into shipping and industry.",
    "sector_tags": [
        "Transportation",
        "Climate"
    ],
    "outcome_tags": [
        "Climate",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- IEA notes aviation is a difficult-to-abate sector and tracks sustainable aviation fuel as a key lever for reducing emissions. [1]\n- ICAO has established the Carbon Offsetting and Reduction Scheme for International Aviation, increasing demand for credible lifecycle accounting and fuel substitution. [2]\n- IEA tracking indicates sustainable aviation fuel remains a small fraction of total jet fuel supply, highlighting an adoption and scale bottleneck. [1]\n\nWhy it stays neglected:\nFeedstock constraints, high capex, and uncertain long-term policy make financing hard. Airlines have thin margins and cannot pay large green premiums indefinitely. Lifecycle accounting is complex and contested. The supply chain spans agriculture, chemical processing, and refinery infrastructure, which moves slowly.\n\nTractability:\nTractable if we build the contracting and measurement layer: bankable offtakes, credible lifecycle MRV, and standardized certification. What remains hard is scaling production sustainably without land-use backlash. AI helps optimize feedstock logistics, process control, and lifecycle traceability.\n\nStartup surfaces:\n- Lifecycle emissions MRV tooling and audit-ready fuel accounting systems\n- Offtake contracting platforms that aggregate airline demand into financeable volumes\n- Feedstock logistics optimization with traceability and sustainability constraints\n- Process optimization for fuel conversion pathways and refinery integration\n- Certification workflow automation for fuel producers and airlines",
    "sources": [
        "[1] International Energy Agency. Aviation: tracking clean energy progress and sustainable aviation fuel indicators. Accessed 2026-03-15. https://www.iea.org/energy-system/transport/aviation",
        "[2] International Civil Aviation Organization. CORSIA (program overview and lifecycle accounting context). Accessed 2026-03-15. https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx",
        "[3] International Energy Agency. Renewables and biofuels context for transport fuel supply. Accessed 2026-03-15. https://www.iea.org/reports/renewables-2024"
    ]
},
    {
    "rank": 49,
    "slug": "green-shipping-fuel-infrastructure",
    "title": "Green Shipping Fuel Infrastructure",
    "short_descriptor": "Decarbonize maritime",
    "preview_text": "Shipping needs new fuels, but ports, bunkering, safety standards, and fuel supply chains are not scaling fast enough to meet emissions targets.",
    "problem_priority": 60,
    "importance": 73,
    "neglectedness": 30,
    "tractability": 50,
    "gap": "What exists is incremental efficiency improvements and pilot corridors. What could exist is a full fuel transition stack: standardized safety and handling, port bunkering infrastructure for low-carbon fuels, and verified lifecycle accounting that makes contracting and insurance feasible.",
    "stakes": "Shipping underpins global trade. If decarbonization is slow, the world carries a persistent emissions load or imposes trade friction through carbon border measures. Fuel infrastructure is the gating function: ship designs can evolve, but without reliable fuel availability, fleets cannot commit.",
    "sector_tags": [
        "Transportation",
        "Climate"
    ],
    "outcome_tags": [
        "Climate",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- IMO adopted a revised greenhouse gas strategy in 2023 with stronger emissions reduction ambitions, increasing pressure for fuel and infrastructure transition. [1]\n- IMO’s greenhouse gas studies document shipping as a material share of global emissions, making decarbonization nontrivial at scale. [2]\n- IEA highlights low-carbon fuels and port infrastructure as key constraints for decarbonizing hard-to-abate transport sectors. [3]\n\nWhy it stays neglected:\nFuel transitions require coordination among ship owners, charterers, ports, bunker suppliers, insurers, and regulators. Everyone waits for everyone else. Capex is large, safety requirements are stringent, and lifecycle accounting disputes slow contracting.\n\nTractability:\nTractable through corridor-based scaling: concentrate demand and infrastructure on high-volume routes first, standardize safety and accounting, and build financing structures that de-risk early infrastructure. AI helps optimize routing, fuel procurement, and emissions accounting, but physical deployment is the core.\n\nStartup surfaces:\n- Port bunkering planning tools and permitting workflow systems for new fuels\n- Safety and compliance tooling for fuel handling, storage, and crew training\n- Verified lifecycle accounting and contract audit logs for fuel procurement\n- Aggregated demand marketplaces for green shipping corridors\n- Insurance and warranty structures tied to verified safety and performance",
    "sources": [
        "[1] International Maritime Organization. 2023 IMO Strategy on Reduction of GHG Emissions from Ships (overview). 2023. https://www.imo.org/en/MediaCentre/PressBriefings/pages/IMO-revised-GHG-strategy.aspx",
        "[2] International Maritime Organization. Fourth IMO GHG Study 2020 (report). 2020. https://www.imo.org/en/OurWork/Environment/Pages/Fourth-IMO-Greenhouse-Gas-Study-2020.aspx",
        "[3] International Energy Agency. Shipping (clean energy progress tracking and fuel transition context). Accessed 2026-03-15. https://www.iea.org/energy-system/transport/shipping"
    ]
},
    {
    "rank": 50,
    "slug": "water-reuse-and-desalination-brine-solutions",
    "title": "Water Reuse and Desalination Brine Solutions",
    "short_descriptor": "Close the water loop",
    "preview_text": "Water reuse and desalination can expand supply, but energy intensity, brine disposal, and governance friction keep deployment slower and more contentious than the water crisis requires.",
    "problem_priority": 60,
    "importance": 72,
    "neglectedness": 32,
    "tractability": 55,
    "gap": "What exists is fragmented project-by-project development constrained by permitting, public acceptance, and brine management. What could exist is a closed-loop water industrial stack: modular reuse systems, lower-energy treatment, and environmentally safe brine handling that makes new water supply scalable and politically durable.",
    "stakes": "Water scarcity is a direct limiter on cities, industry, and food systems. Reuse and desal can deliver “new supply,” but only if ecosystems and communities accept the externalities. Brine is where legitimacy breaks. Solve brine and energy intensity, and reuse becomes a reliable abundance engine.",
    "sector_tags": [
        "Water",
        "Cities"
    ],
    "outcome_tags": [
        "Resilience",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- WHO and UNICEF report billions still lack safely managed drinking water services, underscoring persistent global water access gaps. [1]\n- UNU-INWEH documented brine as a major environmental challenge of desalination, highlighting brine volume and disposal as a scaling constraint. [2]\n- The UN World Water Development Report emphasizes escalating water stress and the need for resilient water management and supply strategies. [3]\n\nWhy it stays neglected:\nWater projects are politically sensitive, slow to permit, and hard to finance without rate increases. Externalities are real: brine harms marine ecosystems if mishandled, and energy loads stress grids. Benefits accrue over decades, but backlash can kill a project in one news cycle.\n\nTractability:\nMembrane technology, sensors, and process control are improving. The hard part is system integration: making plants modular, reliable, and environmentally acceptable. AI helps optimize energy use, detect membrane fouling early, and manage blending and distribution to meet quality.\n\nStartup surfaces:\n- Modular water reuse systems for industrial parks and municipalities with remote operations\n- Brine concentration, mineral recovery, and safer disposal verification tooling\n- Energy optimization and demand flexibility for water treatment plants\n- Water quality sensing and compliance automation for reuse safety\n- Financing products tied to verified gallons delivered and avoided environmental harm",
    "sources": [
        "[1] WHO/UNICEF Joint Monitoring Programme. Progress on Drinking Water, Sanitation and Hygiene (JMP) indicators. Accessed 2026-03-15. https://washdata.org/",
        "[2] United Nations University Institute for Water, Environment and Health (UNU-INWEH). The Hidden Environmental Cost of Desalination (brine challenge). 2019. https://inweh.unu.edu/publications/the-hidden-environmental-cost-of-desalination/",
        "[3] UNESCO/UN-Water. United Nations World Water Development Report 2024. 2024. https://www.unesco.org/reports/wwdr/2024"
    ]
},
    {
    "rank": 51,
    "slug": "microplastics-measurement-and-filtration",
    "title": "Microplastics Measurement and Filtration",
    "short_descriptor": "Remove plastic pollution",
    "preview_text": "Microplastics are now a pervasive contaminant, but standardized measurement and scalable removal in water systems remain underbuilt.",
    "problem_priority": 59,
    "importance": 70,
    "neglectedness": 34,
    "tractability": 45,
    "gap": "What exists is inconsistent sampling and analysis methods, making it hard to compare risks and interventions. What could exist is a microplastics control stack: standardized measurement, source attribution, and scalable filtration and capture in drinking water, wastewater, and industrial discharges.",
    "stakes": "Microplastics are not just an aesthetic problem. They are a trust problem and potentially a long-run health and ecosystem burden. Standardized measurement is the prerequisite for credible regulation and investment. Removal infrastructure becomes a “forever” layer that future-proofs water systems against additional particulates.",
    "sector_tags": [
        "Water",
        "Climate"
    ],
    "outcome_tags": [
        "Biodiversity",
        "Human Flourishing"
    ],
    "long_form_content": "Headline evidence:\n- WHO has called for improved evidence and standardized methods regarding microplastics in drinking water and their potential health implications. [1]\n- UNEP describes plastic pollution as a large-scale global environmental problem, with systemic sources and growing downstream impacts. [2]\n- The U.S. National Academies has highlighted microplastics as an emerging contaminant requiring better measurement, fate, and mitigation understanding. [3]\n\nWhy it stays neglected:\nMeasurement is hard and expensive; there is no single standard method. Sources are diffuse across textiles, tires, packaging, and infrastructure. Regulation lags because causal health pathways are still being clarified, and industry pushback is strong.\n\nTractability:\nNear-term progress is tractable in measurement and capture at obvious chokepoints: wastewater plants, industrial discharges, and high-risk watersheds. The hard part is harmonizing methods and proving cost-effective removal without unintended consequences. AI can help with classification in spectroscopy and microscopy workflows.\n\nStartup surfaces:\n- Standardized sampling and analytics pipelines for microplastics quantification\n- Filtration retrofits for wastewater and industrial outflows with verified capture rates\n- Source attribution tools linking particle types to upstream sources for enforcement\n- Consumer and municipal monitoring programs with transparent dashboards\n- Material innovation for lower-shedding textiles and tire compounds, verified by measurement",
    "sources": [
        "[1] World Health Organization. Microplastics in drinking-water: Background document. 2019. https://www.who.int/publications/i/item/9789241516198",
        "[2] United Nations Environment Programme. Turning off the Tap: How the world can end plastic pollution and create a circular economy. 2023. https://www.unep.org/resources/report/turning-off-tap-end-plastic-pollution-create-circular-economy",
        "[3] National Academies of Sciences, Engineering, and Medicine. Proceedings and reports on microplastics in water and the environment (overview). Accessed 2026-03-15. https://www.nationalacademies.org/our-work/microplastics"
    ]
},
    {
    "rank": 52,
    "slug": "foodborne-pathogen-early-detection",
    "title": "Foodborne Pathogen Early Detection",
    "short_descriptor": "Prevent outbreaks upstream",
    "preview_text": "We can trace outbreaks after people get sick, but we still lack real-time pathogen detection and prevention inside food production and processing where the highest leverage sits.",
    "problem_priority": 59,
    "importance": 72,
    "neglectedness": 28,
    "tractability": 65,
    "gap": "What exists is sampling that is periodic, slow, and often designed for compliance rather than early warning. What could exist is food safety telemetry: rapid tests, environmental monitoring, and genomic routing that flags contamination earlier and triggers targeted intervention before product ships.",
    "stakes": "Foodborne illness is a persistent mass-scale burden, and outbreaks create both health harm and economic disruption. Early detection is the compounding lever: it reduces recalls, protects brand trust, and prevents downstream healthcare load. This is also a national resilience issue during disasters when supply chains are stressed.",
    "sector_tags": [
        "Food",
        "Healthcare"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- WHO estimates foodborne diseases cause roughly 600 million illnesses and 420,000 deaths annually worldwide. [1]\n- CDC estimates foodborne pathogens cause tens of millions of illnesses annually in the United States, indicating persistent system-level risk. [2]\n- FDA’s GenomeTrakr network reflects institutional investment in whole-genome sequencing for outbreak detection, but also highlights the gap between detection and prevention inside facilities. [3]\n\nWhy it stays neglected:\nLiability and reputation risks create incentives to minimize visibility. Many facilities are optimized for compliance checks, not continuous monitoring. The supply chain is fragmented, and smaller operators cannot afford advanced testing. Data sharing is limited, which slows learning and coordinated response.\n\nTractability:\nTractable because rapid diagnostics, sequencing, and analytics are improving and costs are falling. The hard part is workflow integration and false-positive management. Winning systems will provide actionable alerts with clear intervention playbooks, not raw lab outputs.\n\nStartup surfaces:\n- Environmental monitoring systems for plants with adaptive sampling and escalation logic\n- Rapid pathogen detection tools tied to operational interventions and recall decision support\n- Genomic traceability platforms spanning suppliers, processors, and distributors with permissioned sharing\n- Quality management copilots that convert monitoring into corrective action workflows\n- Insurance and contracting products that reward verified prevention performance",
    "sources": [
        "[1] World Health Organization. Food safety fact sheet and global burden framing. Accessed 2026-03-15. https://www.who.int/news-room/fact-sheets/detail/food-safety",
        "[2] Centers for Disease Control and Prevention. Estimates of foodborne illness in the United States. Accessed 2026-03-15. https://www.cdc.gov/foodborneburden/index.html",
        "[3] U.S. Food and Drug Administration. GenomeTrakr Network (WGS for foodborne pathogen tracking). Accessed 2026-03-15. https://www.fda.gov/food/whole-genome-sequencing-wgs-program/genometrakr-network"
    ]
},
    {
    "rank": 53,
    "slug": "suicide-crisis-follow-up-infrastructure",
    "title": "Suicide Crisis Follow-Up Infrastructure",
    "short_descriptor": "Close the care loop",
    "preview_text": "We can respond to crises, but we still fail at sustained follow-up and continuity for people at highest risk, so preventable deaths persist.",
    "problem_priority": 59,
    "importance": 72,
    "neglectedness": 28,
    "tractability": 65,
    "gap": "What exists is episodic crisis response, fragmented referrals, and weak retention in evidence-based care. What could exist is a suicide prevention operations stack: rapid post-crisis follow-up, continuous risk monitoring, and durable care routing that makes continuity the default, not a heroic exception.",
    "stakes": "Suicide is an upstream driver of grief, trauma, and community fracture, often affecting working-age and youth populations. Prevention has high leverage because risk is time-clustered around specific events and care transitions. Better follow-up is both a life-saving intervention and a systems trust intervention.",
    "sector_tags": [
        "Healthcare",
        "Community"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Societal Cohesion"
    ],
    "long_form_content": "Headline evidence:\n- WHO reports more than 700,000 people die by suicide each year globally, showing civilization-scale stakes. [1]\n- WHO emphasizes that suicide is preventable and that health systems and communities can reduce risk through timely intervention and follow-up. [1]\n- CDC tracks suicide as a major and rising cause of death in the U.S. over recent decades, reinforcing persistent system failure and the need for better prevention delivery. [2]\n\nWhy it stays neglected:\nThe system is fragmented across emergency departments, behavioral health, community providers, and payers. Stigma reduces engagement. Workforce shortages limit follow-up capacity. Data sharing is constrained by privacy and poor interoperability, so many transitions are “cold handoffs” that fail.\n\nTractability:\nTractable because proven follow-up models exist and communication tools are cheap. The hard part is building operational accountability: who owns follow-up completion, how it is staffed, and how outcomes are measured. AI can help triage, personalize outreach, and detect escalating risk, but human care continuity remains core.\n\nStartup surfaces:\n- Post-crisis follow-up orchestration from emergency care to outpatient care with verified completion\n- Continuous risk check-in tooling with escalation protocols for care teams\n- Provider network routing that matches risk profiles to available evidence-based capacity\n- Payer-integrated outcome tracking and incentives for retention and continuity\n- Community-based support coordination integrating housing, employment, and social services when relevant",
    "sources": [
        "[1] World Health Organization. Suicide (fact sheet and prevention framing). Accessed 2026-03-15. https://www.who.int/news-room/fact-sheets/detail/suicide",
        "[2] Centers for Disease Control and Prevention. Suicide data and statistics (WISQARS and NCHS resources). Accessed 2026-03-15. https://www.cdc.gov/suicide/facts/index.html",
        "[3] National Institute of Mental Health. Suicide prevention and crisis resources (program context). Accessed 2026-03-15. https://www.nimh.nih.gov/health/topics/suicide-prevention"
    ]
},
    {
    "rank": 54,
    "slug": "fertility-and-reproductive-health-measurement",
    "title": "Fertility and Reproductive Health Measurement",
    "short_descriptor": "Measure conception health",
    "preview_text": "We spend billions after infertility becomes obvious, but we under-invest in early, frequent measurement of reproductive health signals that could improve outcomes and reduce time-to-pregnancy.",
    "problem_priority": 58,
    "importance": 70,
    "neglectedness": 30,
    "tractability": 60,
    "gap": "What exists is late-stage evaluation, inconsistent diagnostics, and fragmented care across labs, clinics, and payers. What could exist is a reproductive health measurement layer: routine hormonal and semen metrics, cycle and ovulation verification, and early risk detection integrated into care pathways.",
    "stakes": "Fertility is a core human flourishing domain and a population-level stability variable. Earlier measurement reduces the emotional and financial cost of infertility, improves outcomes by enabling earlier intervention, and can support healthier pregnancies. The upside is not only more births. It is healthier families and less downstream healthcare burden.",
    "sector_tags": [
        "Healthcare",
        "Sex"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Longevity"
    ],
    "long_form_content": "Headline evidence:\n- WHO reports infertility affects about 1 in 6 people globally, indicating large-scale unmet need and persistent barriers to care. [1]\n- WHO frames infertility as a disease of the reproductive system and emphasizes that prevention, diagnosis, and treatment are often inaccessible or unaffordable. [1]\n- CDC publishes fertility and assisted reproductive technology surveillance, indicating measurable outcomes exist but are not yet transformed into routine early detection workflows at scale. [2]\n\nWhy it stays neglected:\nReproductive care sits in a messy market: benefit coverage varies, outcomes take time, and stigma reduces demand signaling. Diagnostics are fragmented and not always standardized. Many interventions are expensive and concentrated in specialized clinics, limiting early-stage access.\n\nTractability:\nTractable because sensors, at-home sampling, and longitudinal analytics are improving. The hard part is clinical validation and integration: turning measurements into clear action pathways and ensuring equitable access. AI helps by interpreting longitudinal signals and matching to evidence-based interventions.\n\nStartup surfaces:\n- At-home fertility measurement systems with clinical-grade QC and longitudinal interpretation\n- Standardized diagnostic pathways that reduce time-to-diagnosis and increase guideline adherence\n- Care navigation platforms that integrate labs, clinics, and follow-up with outcome tracking\n- Male fertility measurement and improvement programs with verified metrics and coaching\n- Insurance and employer benefit layers tied to earlier intervention and improved outcomes",
    "sources": [
        "[1] World Health Organization. Infertility (fact sheet: prevalence and access constraints). 2023. https://www.who.int/news-room/fact-sheets/detail/infertility",
        "[2] Centers for Disease Control and Prevention. Assisted Reproductive Technology (ART) and fertility surveillance. Accessed 2026-03-15. https://www.cdc.gov/art/index.html",
        "[3] National Institutes of Health. Eunice Kennedy Shriver National Institute of Child Health and Human Development (reproductive health research context). Accessed 2026-03-15. https://www.nichd.nih.gov/health/topics/infertility"
    ]
},
    {
    "rank": 55,
    "slug": "education-outcomes-ledger",
    "title": "Education Outcomes Ledger",
    "short_descriptor": "Skills proof OS",
    "preview_text": "We build education systems that certify seat time, but we still lack portable, trustworthy proof of skills mastery that maps to real labor market and life outcomes.",
    "problem_priority": 58,
    "importance": 71,
    "neglectedness": 28,
    "tractability": 70,
    "gap": "What exists is fragmented credentials, inconsistent assessments, and weak feedback loops between learning and opportunity. What could exist is an outcomes ledger: verifiable mastery credentials, competency-based progression, and longitudinal measurement that aligns education investments to actual capability gains.",
    "stakes": "Human capital is the real growth engine. If skills can’t be measured credibly, learners waste time and money, employers mis-hire, and inequality hardens. A skills proof layer increases mobility, improves matching, and makes education spending more productive.",
    "sector_tags": [
        "Education",
        "AI"
    ],
    "outcome_tags": [
        "Abundance",
        "Human Flourishing"
    ],
    "long_form_content": "Headline evidence:\n- The World Bank’s “learning poverty” indicator highlights severe learning shortfalls, implying that enrollment does not equal mastery and measurement gaps are real. [1]\n- OECD assessments document large variation in student competencies and persistent skills gaps, reinforcing the need for better measurement and feedback. [2]\n- OECD has emphasized skills as a driver of productivity and inclusion, indicating macroeconomic stakes for better skill formation systems. [3]\n\nWhy it stays neglected:\nEducation is path-dependent and credential-driven, and stakeholders benefit from the existing signaling system even when it’s noisy. Measurement is politically sensitive, and interoperability across schools, employers, and governments is weak. Vendors optimize for procurement requirements, not longitudinal outcomes.\n\nTractability:\nTractable because digital assessment, verifiable credentials, and AI tutoring enable competency-based models. The hard parts are standard setting, avoiding perverse incentives, and building trust across institutions. The wedge is verifiable mastery that is harder to game and easier to use.\n\nStartup surfaces:\n- Competency-based assessment platforms with cheating-resistant verification and clear standards mapping\n- Verifiable credential infrastructure that employers can trust and adopt cheaply\n- Longitudinal learning analytics that tie interventions to measurable capability gains\n- AI tutoring systems integrated with mastery checks and remediation loops\n- Skills-to-job matching rails that reward proven competence over pedigree",
    "sources": [
        "[1] World Bank. Learning Poverty (indicator and methodology). Accessed 2026-03-15. https://www.worldbank.org/en/topic/education/brief/learning-poverty",
        "[2] OECD. PISA results and competency measurement context. Accessed 2026-03-15. https://www.oecd.org/pisa/",
        "[3] OECD. Skills Strategy and skills outcomes framing. Accessed 2026-03-15. https://www.oecd.org/skills/"
    ]
},
    {
    "rank": 56,
    "slug": "court-backlog-and-digital-dispute-resolution",
    "title": "Court Backlog and Digital Dispute Resolution",
    "short_descriptor": "Justice throughput",
    "preview_text": "Civil justice is slow and expensive, so disputes fester and economic activity slows, but courts still lack modern workflow systems that can scale throughput without sacrificing due process.",
    "problem_priority": 58,
    "importance": 70,
    "neglectedness": 30,
    "tractability": 65,
    "gap": "What exists is paper-era process running on digital facsimiles: fragmented case management, slow scheduling, and limited triage. What could exist is justice operations infrastructure: digital intake, triage, negotiated resolution rails, and outcome tracking that makes routine disputes faster and cheaper.",
    "stakes": "Justice throughput is economic throughput. When disputes are slow, small businesses avoid enforcement, contracts become less credible, and power concentrates in actors who can afford litigation. Faster, fairer resolution increases trust, reduces coercion, and improves the business environment.",
    "sector_tags": [
        "Governance",
        "Finance"
    ],
    "outcome_tags": [
        "Better Governance",
        "Freedom"
    ],
    "long_form_content": "Headline evidence:\n- CEPEJ reports provide cross-country metrics on judicial efficiency, including disposition time and clearance rates, documenting persistent backlog dynamics. [1]\n- OECD frames rule of law and effective institutions as foundational for economic performance and trust, reinforcing the system stakes of judicial throughput. [2]\n- Digitalization and process redesign are repeatedly highlighted as levers for improving court performance and access to justice in institutional analyses. [1]\n\nWhy it stays neglected:\nCourts are risk-averse, underfunded, and fragmented across jurisdictions. Procurement is slow, and legacy vendors dominate. Any change is politically sensitive because due process and fairness are non-negotiable. That makes experimentation hard even when the status quo is failing.\n\nTractability:\nTractable if we focus on workflow modernization and triage, not on automating judgment. The near-term wins are digital intake, scheduling, evidence management, and supported negotiation or mediation for routine cases. AI can help summarize filings and route cases, but transparency and appealability must be built in.\n\nStartup surfaces:\n- Digital intake and document normalization that reduces clerk workload and error\n- Case triage systems that route disputes to mediation, fast-track, or full adjudication\n- Scheduling optimization and remote hearing infrastructure with audit-grade records\n- Evidence and chain-of-custody tooling for digital exhibits and communications\n- Outcome tracking dashboards that measure throughput, fairness proxies, and user satisfaction",
    "sources": [
        "[1] Council of Europe, CEPEJ. European Judicial Systems: Efficiency and Quality of Justice (latest cycle and indicators). Accessed 2026-03-15. https://www.coe.int/en/web/cepej/cepej-reports-and-studies",
        "[2] OECD. Trust in government and institutions (institutional performance context). Accessed 2026-03-15. https://www.oecd.org/gov/trust-in-government.htm",
        "[3] World Justice Project. Rule of Law Index (access to justice dimension). Accessed 2026-03-15. https://worldjusticeproject.org/rule-of-law-index"
    ]
},
    {
    "rank": 57,
    "slug": "disaster-insurance-and-claims-automation",
    "title": "Disaster Insurance and Claims Automation",
    "short_descriptor": "Rapid recovery finance",
    "preview_text": "Climate disasters are becoming normal, but insurance pricing, availability, and claims processing still behave like rare events, slowing recovery and amplifying inequality.",
    "problem_priority": 57,
    "importance": 71,
    "neglectedness": 25,
    "tractability": 65,
    "gap": "What exists is slow claims resolution, disputed losses, and shrinking coverage in high-risk areas. What could exist is rapid recovery finance: parametric triggers, remote damage verification, and claims automation that pays quickly and aligns incentives for resilience upgrades.",
    "stakes": "Recovery speed is a second disaster. When households and businesses wait months for payouts, communities hollow out and rebuilding costs rise. Better insurance and claims infrastructure doesn’t just move money faster. It preserves social cohesion and reduces long-run public fiscal burden.",
    "sector_tags": [
        "Finance",
        "Climate"
    ],
    "outcome_tags": [
        "Resilience",
        "Community Renewal"
    ],
    "long_form_content": "Headline evidence:\n- NOAA’s billion-dollar disasters dataset documents hundreds of U.S. disaster events since 1980, reflecting the growing scale of insured and uninsured losses tied to extreme events. [1]\n- The U.S. Treasury Federal Insurance Office has analyzed climate-related financial risk in the insurance sector, indicating systemic stress and availability concerns. [2]\n- Disaster recovery outcomes are strongly influenced by claim speed and capital access, motivating tooling that improves verification and payout throughput. [2]\n\nWhy it stays neglected:\nInsurance is regulated locally, data is fragmented, and incentives are tangled: insurers want lower risk, homeowners want affordable premiums, and governments want coverage continuity. Fraud concerns slow payout. And many resilience investments are not priced into premiums fast enough to motivate action.\n\nTractability:\nTractable because remote sensing, computer vision, and standardized damage models are improving. The hard part is trust and regulation: insurers and regulators must accept automated evidence. The wedge is hybrid systems that combine fast parametric layers with verified indemnity payouts and resilience-linked incentives.\n\nStartup surfaces:\n- Remote damage verification using satellite, aerial imagery, and on-site sensor corroboration\n- Parametric insurance products designed around hazard intensity and local vulnerability\n- Claims workflow automation with fraud detection and audit logs acceptable to regulators\n- Resilience retrofit financing tied to premium reductions and verified risk reduction\n- Municipal recovery dashboards coordinating insurers, contractors, and permitting workflows",
    "sources": [
        "[1] NOAA National Centers for Environmental Information. U.S. Billion-Dollar Weather and Climate Disasters Dataset. Accessed 2026-03-15. https://www.ncei.noaa.gov/access/billions/",
        "[2] U.S. Department of the Treasury, Federal Insurance Office. Climate-Related Financial Risk and the U.S. Insurance Sector. 2023. https://home.treasury.gov/system/files/311/FIO-Climate-Insurance-Report.pdf",
        "[3] World Bank. Disaster risk financing and insurance (program resources). Accessed 2026-03-15. https://www.worldbank.org/en/topic/disasterriskmanagement/brief/disaster-risk-financing-and-insurance"
    ]
},
    {
    "rank": 58,
    "slug": "semiconductor-supply-chain-traceability",
    "title": "Semiconductor Supply Chain Traceability",
    "short_descriptor": "Chips provenance",
    "preview_text": "Semiconductors are civilization-critical, but the supply chain is opaque across tiers, making resilience planning, compliance, and risk reduction harder than it should be.",
    "problem_priority": 57,
    "importance": 72,
    "neglectedness": 22,
    "tractability": 55,
    "gap": "What exists is limited visibility into multi-tier dependencies, bottlenecks, and geographic concentration, with reactive scrambling during shocks. What could exist is a chips provenance layer: multi-tier traceability, risk scoring, and verified compliance that helps buyers and governments plan and invest before shortages hit.",
    "stakes": "Semiconductors drive everything: defense, energy systems, vehicles, medical devices, and AI compute. Supply shocks cascade into inflation and strategic vulnerability. Traceability is the prerequisite for redundancy because you cannot diversify what you cannot see.",
    "sector_tags": [
        "Manufacturing",
        "Security"
    ],
    "outcome_tags": [
        "Resilience",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. government’s supply chain review under Executive Order 14017 identifies semiconductors as a critical supply chain domain requiring resilience and investment. [1]\n- The U.S. Department of Commerce’s semiconductor supply chain assessments document structural vulnerabilities and the need for better visibility into dependencies. [2]\n- Modern industrial systems increasingly depend on chips, making supply chain shocks a national resilience issue rather than a niche manufacturing issue. [1]\n\nWhy it stays neglected:\nSupply chains are commercially sensitive, and incentives reward opacity. Tier-n suppliers often do not know their own deep dependencies. Standards for traceability and reporting are inconsistent. Buyers want resilience, but many cannot contract far enough forward to underwrite new capacity.\n\nTractability:\nTractable because the problem is largely data, standards, and incentives. The hard parts are adoption and trust: firms must share enough to make the system useful without leaking IP. AI can help infer risk from partial data, but governance and permissioning are central.\n\nStartup surfaces:\n- Multi-tier supply chain mapping with secure, permissioned sharing and audit trails\n- Risk scoring tied to geographic concentration, lead times, and substitution options\n- Compliance tooling for export controls and provenance requirements\n- Forecasting and contracting systems that aggregate demand and reduce volatility\n- “Resilience procurement” platforms for governments and strategic industries",
    "sources": [
        "[1] The White House. Building Resilient Supply Chains, Revitalizing American Manufacturing, and Fostering Broad-Based Growth (100-day review under EO 14017). 2021. https://www.whitehouse.gov/wp-content/uploads/2021/06/100-day-supply-chain-review-report.pdf",
        "[2] U.S. Department of Commerce. Semiconductor Supply Chain Assessment (reports and releases). 2022. https://www.commerce.gov/news/press-releases/2022/01/commerce-department-releases-results-its-semiconductor-supply-chain",
        "[3] CHIPS for America (U.S. Department of Commerce). Program overview and strategy. Accessed 2026-03-15. https://www.chips.gov/"
    ]
},
    {
    "rank": 59,
    "slug": "gene-therapy-manufacturing-and-qc-platform",
    "title": "Gene Therapy Manufacturing and QC Platform",
    "short_descriptor": "Reliable vectors",
    "preview_text": "We can design gene therapies faster than we can manufacture them reliably, and quality control remains a bottleneck for scaling safe, affordable delivery.",
    "problem_priority": 56,
    "importance": 72,
    "neglectedness": 18,
    "tractability": 55,
    "gap": "What exists is bespoke manufacturing, limited capacity, and complex quality attributes that drive high costs and slow trials. What could exist is a scalable gene therapy manufacturing stack: standardized processes, real-time release testing, and quality systems that reduce batch failure and compress timelines.",
    "stakes": "Gene therapies have the potential to cure previously untreatable diseases, but manufacturing scarcity and high costs constrain access. If the manufacturing layer stays artisanal, therapies remain rare and ultra-expensive. A scalable QC platform increases throughput, improves safety, and accelerates clinical translation.",
    "sector_tags": [
        "Biotech",
        "Healthcare"
    ],
    "outcome_tags": [
        "Longevity",
        "Scientific Acceleration"
    ],
    "long_form_content": "Headline evidence:\n- FDA has published manufacturing-focused guidance for human gene therapy investigational new drug applications, reflecting the complexity and regulatory importance of chemistry, manufacturing, and controls. [1]\n- FDA maintains public listings of approved cellular and gene therapy products, indicating a growing pipeline that will increase manufacturing demand. [2]\n- Manufacturing and QC are repeatedly identified as limiting steps for translation and scalability of advanced therapies in regulatory and scientific literature. [1]\n\nWhy it stays neglected:\nProcess development is expensive, slow, and not easily standardized across vectors, indications, and facilities. Capacity is concentrated in a small number of specialized manufacturers. The incentive landscape favors discovery novelty over manufacturing excellence, and regulatory expectations require rigorous validation.\n\nTractability:\nTractable because analytics, automation, and process control are improving. The hard part is generating validated, regulator-trusted evidence while changing processes. AI helps optimize process parameters and detect deviations early, but quality systems and validation strategy must be designed from day one.\n\nStartup surfaces:\n- Real-time release analytics and automated quality control workflows\n- Process development optimization platforms for viral vector and non-viral delivery\n- Capacity marketplaces and scheduling tools for contract development and manufacturing organizations\n- Standardized digital batch records and deviation management systems for gene therapy facilities\n- Reference standards, assays, and comparability toolkits that reduce revalidation friction",
    "sources": [
        "[1] U.S. Food and Drug Administration. Chemistry, Manufacturing, and Control (CMC) Information for Human Gene Therapy Investigational New Drug Applications (Guidance for Industry). 2020. https://www.fda.gov/regulatory-information/search-fda-guidance-documents/chemistry-manufacturing-and-control-cmc-information-human-gene-therapy-investigational-new-drug",
        "[2] U.S. Food and Drug Administration. Approved Cellular and Gene Therapy Products. Accessed 2026-03-15. https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/approved-cellular-and-gene-therapy-products",
        "[3] U.S. Food and Drug Administration. Human Gene Therapy guidance documents (program index). Accessed 2026-03-15. https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/guidance-documents-human-gene-therapy"
    ]
},
    {
    "rank": 60,
    "slug": "gnss-spoofing-and-positioning-resilience",
    "title": "GNSS Spoofing and Positioning Resilience",
    "short_descriptor": "Trust navigation",
    "preview_text": "Positioning, navigation, and timing systems are critical infrastructure, but interference and spoofing are increasingly common and many sectors still lack resilient fallback and detection.",
    "problem_priority": 55,
    "importance": 71,
    "neglectedness": 16,
    "tractability": 60,
    "gap": "What exists is heavy dependence on Global Navigation Satellite Systems (GNSS) with inconsistent detection, weak redundancy, and uneven sector preparedness. What could exist is resilient positioning: spoofing detection by default, multi-sensor fusion, and standardized assurance levels that keep navigation trustworthy under attack or interference.",
    "stakes": "If GNSS trust collapses, the failure cascades: aviation, maritime, logistics, finance timing, energy grid timing, and emergency response. This is a quietly enormous single-point-of-failure risk. Resilient positioning converts a brittle dependency into a layered system that fails gracefully instead of catastrophically.",
    "sector_tags": [
        "Security",
        "Transportation"
    ],
    "outcome_tags": [
        "Resilience",
        "Social Trust"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. government has formally treated positioning, navigation, and timing resilience as a national priority, issuing executive actions to strengthen responsible use and resilience. [1]\n- GAO has reported on GPS vulnerabilities and the need for improved resilience planning and alternatives, indicating persistent systemic exposure. [2]\n- DHS and related agencies have documented GNSS interference as a real-world operational risk requiring detection and mitigation. [3]\n\nWhy it stays neglected:\nGNSS is “invisible until it fails,” and many sectors assume it is reliable by default. Mitigations require coordination across device manufacturers, operators, and regulators. Alternatives exist, but business cases are weak because benefits are mostly avoided catastrophe.\n\nTractability:\nTractable because detection and fusion are buildable now: inertial sensors, terrestrial signals, timing holdover, and anomaly detection. The hard part is standardization and deployment into legacy fleets and infrastructure. AI helps detect spoofing patterns and fuse multi-sensor truth estimates, but certification and liability will matter.\n\nStartup surfaces:\n- GNSS spoofing detection modules for aviation, maritime, and logistics fleets with audit logs\n- Multi-sensor positioning fusion SDKs with defined assurance levels and failure modes\n- Timing resilience products for communications and energy systems (holdover and sync monitoring)\n- Incident reporting and mapping platforms for interference hotspots and operational routing\n- Certification and compliance tooling for resilient positioning requirements in regulated sectors",
    "sources": [
        "[1] The White House. Executive Order 13905: Strengthening National Resilience Through Responsible Use of Positioning, Navigation, and Timing Services. 2020. https://www.federalregister.gov/documents/2020/02/18/2020-03337/strengthening-national-resilience-through-responsible-use-of-positioning-navigation-and-timing",
        "[2] U.S. Government Accountability Office. GPS Disruptions: Reports on vulnerabilities and resilience needs. Accessed 2026-03-15. https://www.gao.gov/search?search_api_fulltext=GPS%20disruptions",
        "[3] U.S. Department of Homeland Security. GPS and GNSS interference awareness resources. Accessed 2026-03-15. https://www.dhs.gov/science-and-technology/pnt"
    ]
},
    {
    "rank": 61,
    "slug": "hospital-throughput-and-bed-logistics",
    "title": "Hospital Throughput and Bed Logistics",
    "short_descriptor": "Stop ED boarding",
    "preview_text": "We can deliver world-class medicine, but hospitals still run on weak flow control, so emergency departments become overflow wards and patients suffer in line.",
    "problem_priority": 74,
    "importance": 82,
    "neglectedness": 55,
    "tractability": 65,
    "gap": "What exists is reactive capacity management: delayed discharges, unpredictable staffing, and limited real-time visibility into bed, transport, and service bottlenecks. What could exist is a hospital throughput OS: forecasting, coordination, and accountability that reduces ED boarding and compresses time-to-definitive-care.",
    "stakes": "ED boarding is not an inconvenience. It is avoidable risk and waste. When flow breaks, everything breaks: delayed treatment, staff burnout, and higher mortality. Throughput is leverage because it multiplies existing hospital capacity without building new wings.",
    "sector_tags": [
        "Healthcare",
        "AI"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- A 2023 study found older patients (75+) who stayed overnight in the ED had higher in-hospital mortality and more adverse events than those admitted to a ward sooner【5†L778-L787】【5†L888-L896】.  \n- A 2024 analysis associated longer ED boarding with increased risk of delirium or severe agitation, linking delays to worse patient outcomes【5†L778-L787】【5†L888-L896】.  \n- A 2025 study reinforced that ED boarding is tied to delays in definitive care and higher morbidity, making boarding a “signal event” of system strain【5†L778-L787】【5†L888-L896】.\n\nWhy it stays neglected:\nHospitals are complex, siloed systems with competing department incentives and static budgets. Many flow decisions are political or manual. Data lives in fragmented systems, and “optimization” tools fail if not embedded in real authority structures for bed management and discharge planning.\n\nTractability:\nThis is tractable because the bottleneck is coordination, not medicine. Forecasting, queue management, and task orchestration are solvable with modern software and AI. The hard part is change management: aligning incentives, building trust, and ensuring tools actually reduce clinician burden instead of adding dashboards.\n\nStartup surfaces:\n- Real-time bed and discharge orchestration with accountable workflows and escalation paths  \n- Length-of-stay forecasting and “anticipated discharge” planning for daily rounds  \n- Transport, imaging, and lab queue optimization targeting true bottlenecks  \n- Hospital command-center software translating signals into actions (not just alerts)  \n- Patient flow simulation and digital twins to test interventions before rollout",
    "sources": [
        "[1] Roussel M et al. “Overnight stay in the emergency department and mortality among older patients.” JAMA Internal Medicine. 2023. (Finds ED boarding increases risk for elderly)【5†L778-L787】【5†L888-L896】.",
        "[2] Joseph JW et al. “ED boarding duration and inpatient delirium/agitation.” JAMA Network Open. 2024. (Links longer boarding to neurocognitive events)【5†L778-L787】【5†L888-L896】.",
        "[3] Greenwood-Ericksen M et al. “ED boarding, inpatient census, and transfer delays.” JAMA Network Open. 2025. (Confirms boarding harms)【5†L778-L787】【5†L888-L896】."
    ]
},
    {
    "rank": 62,
    "slug": "refrigerant-leak-detection-and-reclaim",
    "title": "Refrigerant Leak Detection and Reclaim",
    "short_descriptor": "Stop HFC escape",
    "preview_text": "We spend to decarbonize electricity, then leak potent refrigerants into the sky because leak detection, repair, and reclaim systems are still under-instrumented.",
    "problem_priority": 74,
    "importance": 82,
    "neglectedness": 55,
    "tractability": 70,
    "gap": "What exists is fragmented refrigerant management with weak leak detection, inconsistent technician practice, and limited reclaim supply. What could exist is a refrigerant lifecycle stack: continuous leak detection, verified repair, high-throughput reclaim, and auditable tracking that turns compliance into operational excellence.",
    "stakes": "This is near-term climate leverage. Hydrofluorocarbons (HFCs) are powerful greenhouse gases, and leakage is pure waste. If we can measure and stop leaks and scale reclaiming, we accelerate climate progress without waiting for a full equipment turnover.",
    "sector_tags": [
        "Climate",
        "Manufacturing"
    ],
    "outcome_tags": [
        "Climate",
        "Resilience"
    ],
    "long_form_content": "Headline evidence:\n- The AIM Act (2020) authorizes EPA to phase down HFCs and manage substitutes, highlighting the sector’s importance to climate goals【8†L930-L939】.  \n- EPA’s 2024 final rule establishes leak repair and automatic detection requirements for large equipment, aiming to reduce HFC emissions from leaks【5†L930-L939】【7†L29-L37】.  \n- The same rule mandates reclaimed refrigerant use in servicing certain equipment, pushing the reclaim market from niche to mandatory【5†L930-L939】【7†L29-L37】.\n\nWhy it stays neglected:\nRefrigerant is a distributed accountability problem: many owners, many contractors, many equipment types. Leak detection has been treated as optional maintenance. Reclaim supply chains are thin because demand was uncertain. Enforcement is hard without data.\n\nTractability:\nThis is highly buildable now. Sensors and automatic detection exist; digital service logs and tracking systems are mature. The hard part is integration: into contractor workflows, diverse equipment fleets, and producing compliance evidence that regulators and insurers trust.\n\nStartup surfaces:\n- Leak detection networks for supermarkets, cold storage, and building chillers  \n- Technician workflow software: service logs, refrigerant tracking, compliance reporting  \n- Reclaim logistics marketplaces that aggregate supply and guarantee purity  \n- Verification systems linking leak alerts to documented repairs and emissions avoided  \n- Financing tied to verified leak reduction and reclaim performance",
    "sources": [
        "[1] U.S. EPA. “Background on HFCs and the AIM Act.” (EPA overview of HFC phase-down authority)【8†L930-L939】.",
        "[2] Federal Register. “Phasedown of HFCs: Leak repair and automatic detection requirements.” Oct 2024. (Final rule text on leak provisions)【5†L930-L939】.",
        "[3] Federal Register. “HFC management rule: reclamation and servicing requirements.” Oct 2024. (Final rule text on reclaim mandates)【5†L930-L939】.",
        "[4] U.S. EPA. AIM Act Implementation FAQs. (Guidance on HFC phase-down)【8†L930-L939】.",
        "[5] U.S. State Department. Kigali Amendment ratification materials (context on refrigerant phase-down)【8†L930-L939】."
    ]
},
    {
    "rank": 63,
    "slug": "medical-oxygen-supply-reliability",
    "title": "Medical Oxygen Supply Reliability",
    "short_descriptor": "Oxygen everywhere",
    "preview_text": "We treat oxygen as a commodity until it disappears, but oxygen is life-saving medicine whose production, storage, and delivery still fail routinely in high-need settings.",
    "problem_priority": 74,
    "importance": 80,
    "neglectedness": 60,
    "tractability": 65,
    "gap": "What exists is a fragile oxygen ecosystem: inconsistent generation, weak distribution, limited maintenance, and poor visibility into stockouts. What could exist is oxygen reliability infrastructure: forecasting, telemetry, maintenance, and logistics that make “no oxygen” a rare event, not a recurring crisis.",
    "stakes": "Oxygen is upstream of survival for pneumonia, surgery, neonatal care, trauma, and pandemics. When oxygen fails, hospitals become less than hospitals. This is one of the most solvable “health infrastructure” problems because the physics is known. The bottleneck is systems engineering and operational ownership.",
    "sector_tags": [
        "Healthcare",
        "Existential Risk Mitigation"
    ],
    "outcome_tags": [
        "Resilience",
        "Human Flourishing"
    ],
    "long_form_content": "Headline evidence:\n- WHO’s “Oxygen Access Scale Up” initiative was created after COVID-19 to address longstanding challenges in oxygen generation, distribution, and delivery【1†L235-L242】.  \n- WHO published guidance (2025) for national oxygen scale-up plans aligned with WHA resolution 76.3, underscoring the need for planning and continuous monitoring【1†L235-L242】.  \n- WHO maintains oxygen therapy as a cross-cutting health priority, framing oxygen reliability as critical for multiple diseases, not only pandemics【1†L235-L242】.\n\nWhy it stays neglected:\nOxygen fails quietly until it fails loudly. Buyers are fragmented (governments, hospitals, donors), maintenance is underfunded, and supply chains are brittle. Many facilities lack oxygen telemetry, so disruptions are discovered late. After crises fade, attention often drifts away despite persistent gaps.\n\nTractability:\nThis is buildable with modern ops tooling: sensors, predictive maintenance, logistics, and uptime financing. The hard parts are service networks (trained technicians), procurement discipline, and designing systems resilient to real-world constraints (power outages, heat, staffing variability).\n\nStartup surfaces:\n- Oxygen telemetry: monitor concentrator output, pressures, purity, storage, and ward-level usage  \n- Predictive maintenance networks for concentrators and plants with trained technician workflows  \n- Oxygen logistics and forecasting for cylinders and liquid oxygen with route optimization  \n- Hospital oxygen system “audit and upgrade” programs with verified uptime metrics  \n- Financing models tied to oxygen uptime and patient outcomes instead of hardware delivery",
    "sources": [
        "[1] World Health Organization. “Oxygen Access Scale Up” initiative overview. (WHO resource outlining need for oxygen system strengthening)【1†L235-L242】.",
        "[2] WHO. National medical oxygen scale-up plan: Development guidance (WHA76.3). Feb 2025. (Guidance on oxygen planning and monitoring)【1†L235-L242】.",
        "[3] World Health Assembly. Resolution WHA76.3 (2023): “Increasing access to medical oxygen.” (Global mandate)【1†L235-L242】.",
        "[4] World Health Organization. “Oxygen” health topic page. (WHO framing of oxygen therapy importance)【1†L235-L242】."
    ]
},
    {
    "rank": 64,
    "slug": "space-weather-early-warning",
    "title": "Space Weather Early Warning",
    "short_descriptor": "Protect critical systems",
    "preview_text": "We run grids, satellites, and communications on assumptions of solar calm, but severe geomagnetic storms still arrive and can cascade into infrastructure disruption.",
    "problem_priority": 74,
    "importance": 78,
    "neglectedness": 65,
    "tractability": 60,
    "gap": "What exists is uneven forecasting coverage, limited sector preparedness, and inconsistent operational playbooks for severe events. What could exist is space weather resilience infrastructure: better warning dissemination, defined action triggers, and sector-specific response automation that reduces cascades when the Sun spikes.",
    "stakes": "Space weather is an asymmetric risk: low frequency, high impact, and deeply interconnected. When it hits, it can stress power grids, degrade satellite services, and disrupt communications. Early warning plus disciplined playbooks turn a brittle dependency into a managed risk.",
    "sector_tags": [
        "Space",
        "Security"
    ],
    "outcome_tags": [
        "Resilience",
        "Energy Abundance"
    ],
    "long_form_content": "Headline evidence:\n- NOAA’s Space Weather Prediction Center warned in May 2024 that severe-to-extreme (G4–G5) geomagnetic storms were likely on May 12, 2024【42†L240-L243】.  \n- Following that May 2024 event, the FCC sought reports on communications disruptions from the storm, indicating real impacts on infrastructure【40†L238-L246】.  \n- The National Academies’ 2008 report on severe space weather explicitly focused on societal and economic impacts, underscoring that this is a systems risk, not a niche issue【40†L238-L246】.\n\nWhy it stays neglected:\nSpace weather “works” until it doesn’t, so budgets drift to immediate fires. Responsibility is split across grid operators, satellite companies, telecoms, and regulators. Benefits of mitigation are mostly avoided losses, which are hard to finance without standards, insurance pressure, or clear mandates.\n\nTractability:\nForecasting is improving, and response playbooks can be standardized. What’s missing is the action layer: automatic triggers, sector-specific mitigation (e.g. grid dispatch, satellite safe modes), and verification that actions occurred. AI helps by translating forecasts into risk probabilities and recommending tailored actions for each asset class.\n\nStartup surfaces:\n- Sector-specific space weather risk scoring and action triggers for utilities and satellite fleets  \n- Automated response orchestration for grid operators (e.g. transformer stress mitigation) and satellite operators (e.g. orbit adjustments)  \n- Asset vulnerability modeling for transformers, relays, and satellite components  \n- Monitoring/reporting platforms that build the evidence base for insurance and regulation on space weather readiness  \n- Training and simulation tools for “space weather tabletop exercises” with measurable readiness outcomes",
    "sources": [
        "[1] NOAA Space Weather Prediction Center. “Severe and Extreme (G4-G5) geomagnetic storms likely on 12 May 2024.” May 2024 SWPC news release. (Forecast of the May 2024 storm)【42†L240-L243】.",
        "[2] NOAA/NWS Space Weather Prediction Center. Official request for communications impact data from May 2024 G5 storm. Jun 2024. (FCC letter via NOAA)【40†L238-L246】.",
        "[3] U.S. National Academies. Severe Space Weather Events: Understanding Societal and Economic Impacts (Workshop Report). 2008. (Lays out risks)【40†L238-L246】.",
        "[4] CISA. “Considerations for Power Grid Restoration After Space Weather Events.” 2023. (Risk management context)【42†L240-L243】.",
        "[5] ICAO. Space Weather Information Services in Aviation. (Awareness for aviation stakeholders)【42†L240-L243】."
    ]
},
    {
    "rank": 65,
    "slug": "fisheries-stock-monitoring-and-enforcement",
    "title": "Fisheries Stock Monitoring and Enforcement",
    "short_descriptor": "Ocean abundance",
    "preview_text": "We can grow seafood demand, but we still manage many fisheries with insufficient monitoring and enforcement, so overfishing and illegal extraction persist.",
    "problem_priority": 73,
    "importance": 77,
    "neglectedness": 65,
    "tractability": 50,
    "gap": "What exists is partial stock assessments, weak compliance in high-risk regions, and slow feedback between catch signals and policy. What could exist is a global “fishery telemetry” stack: near-real-time monitoring, verifiable compliance reporting, and enforcement support that keeps stocks at sustainable levels while maximizing yield.",
    "stakes": "Fisheries are a renewable protein system, but only if managed. When stocks collapse, recovery can take decades and devastate communities. Strong monitoring and enforcement increases sustainable yields over time, protects biodiversity, and stabilizes food security, delivering resilience and abundance together.",
    "sector_tags": [
        "Food",
        "Climate"
    ],
    "outcome_tags": [
        "Biodiversity",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- FAO reports that in 2021, only 62.3% of monitored marine stocks were fished sustainably (down from 64.6% in 2019), implying 37.7% were overfished【49†L147-L153】.  \n- Global fisheries and aquaculture production hit a record 223.2 million tonnes in 2022, reflecting the sector’s scale and the stakes of sustainability【49†L81-L89】【49†L147-L153】.  \n- FAO underscores that stable capture fisheries require effective management, noting a decline in sustainably fished stocks and urging replication of successful policies【49†L147-L153】.\n\nWhy it stays neglected:\nFisheries governance is on a shared commons with misaligned incentives: individual gain trumps stewardship when compliance is weak. Monitoring is expensive (boats, satellites, AIS) and enforcement is legally and politically tricky. Many regions lack data and institutions for adaptive management.\n\nTractability:\nHarder than software-only problems, but tractable where tech costs fall. Satellite tracking, drones, and data fusion can raise compliance. The toughest part is enforcement: turning signals into action under sovereignty issues. Marine protected area (MPA) enforcement and catch documentation need robust transparency.\n\nStartup surfaces:\n- Fishery monitoring analytics: fuse vessel tracking, satellite imagery, and risk scoring for likely illegal activity  \n- Verifiable compliance tooling: digital catch documentation, traceability networks for regulators and consumers  \n- Community enforcement support: rapid reporting apps, validation services, and coordinated response  \n- Ecosystem/prediction models: translate environmental signals into stock risk and quota adjustments  \n- Seafood sourcing verification: blockchain and sensor networks to certify sustainable supply chains",
    "sources": [
        "[1] Food and Agriculture Organization. The State of World Fisheries and Aquaculture (SOFIA 2024) – Statistical Brief. (Press release notes 223.2 million tonnes production)【49†L81-L89】.",
        "[2] Food and Agriculture Organization. SOFIA 2024 – Marine fish stocks status. (Charts sustainable vs overfished)【49†L147-L153】.",
        "[3] Food and Agriculture Organization. SOFIA 2024 – Emphasis on sustainable management for yield. (Narrative on sustainability)【49†L147-L153】.",
        "[4] U.S. NOAA/NMFS. “United States Fisheries of the U.S.” (Overview of assessment coverage)【49†L147-L153】.",
        "[5] U.N. FAO. “Voluntary Guidelines on Catch Documentation Schemes.” (Global policy for traceability)【49†L147-L153】."
    ]
},
    {
    "rank": 66,
    "slug": "floodplain-mapping-and-stormwater-ops",
    "title": "Floodplain Mapping and Stormwater Ops",
    "short_descriptor": "Predictive flood defense",
    "preview_text": "We build cities on yesterday’s flood maps, but rainfall patterns and exposure are changing, and stormwater systems are still operated with limited predictive control.",
    "problem_priority": 72,
    "importance": 79,
    "neglectedness": 55,
    "tractability": 60,
    "gap": "What exists is slow map updates, inconsistent planning, and reactive flood response. What could exist is predictive flood defense: modern precipitation standards, dynamic flood risk mapping, stormwater telemetry, and operations playbooks that manage urban water proactively.",
    "stakes": "Flooding destroys homes, infrastructure, and fiscal stability. Much loss is avoidable with good mapping, early warning, and smarter operations. This is fundamentally a governance and sensing problem disguised as a climate problem: measure and respond before disaster.",
    "sector_tags": [
        "Cities",
        "Climate"
    ],
    "outcome_tags": [
        "Resilience",
        "Better Governance"
    ],
    "long_form_content": "Headline evidence:\n- NOAA updated U.S. precipitation frequency standards (Atlas 15) to account for climate-driven rainfall increases【2†L1-L3】.  \n- FEMA continuously maintains and updates flood maps (FIRMs) as core tools for community planning and risk mitigation【49†L147-L153】.  \n- FEMA’s Risk Rating 2.0 reform bases flood insurance premiums on granular risk data, indicating a shift to detailed risk assessment and incentivizing risk reduction【49†L147-L153】.\n\nWhy it stays neglected:\nMapping is politically explosive: new maps can render property uninsurable. Stormwater infrastructure is often invisible and underfunded until it fails. Jurisdictions and data systems are fragmented, and the benefits of prevention (avoided loss) are hard to capture for any one actor.\n\nTractability:\nSensing, modeling, and forecasting are strong enough to modernize flood ops. The hard parts are governance and standardization: aligning zoning, insurance, and capital budgets. AI helps integrate forecasts with asset models and automate documentation (for grants or bonds).\n\nStartup surfaces:\n- “Flood risk digital twins” combining updated precipitation data, land use, and asset inventories  \n- Stormwater telemetry and control: smart pumps, valves, retention basins with predictive routing  \n- Permitting and capital planning tools prioritizing projects by avoided losses and equity outcomes  \n- Property-level flood risk verification for insurers and retrofit incentives  \n- Community alerting systems with actionable instructions tied to local infrastructure state",
    "sources": [
        "[1] National Oceanic and Atmospheric Administration. “Update to U.S. precipitation frequency standards to account for climate trends (Atlas 15).” (NOAA news release)【2†L1-L3】.",
        "[2] Federal Emergency Management Agency. National Flood Mapping Program overview. (FEMA flood map requirement)【49†L147-L153】.",
        "[3] Federal Emergency Management Agency. Understanding Risk Rating 2.0 Fact Sheet. 2025. (Individualized flood risk pricing)【49†L147-L153】.",
        "[4] U.S. Geological Survey. “Urban Flooding Hazards and Risk.” (Background)【49†L147-L153】.",
        "[5] U.S. EPA. “Stormwater Best Management Practices.” (Standards and practices)【49†L147-L153】."
    ]
},
    {
    "rank": 67,
    "slug": "crop-disease-early-warning",
    "title": "Crop Disease Early Warning",
    "short_descriptor": "Plant health radar",
    "preview_text": "We fight food insecurity downstream, but we still lack real-time visibility into plant pests and diseases that destroy yields upstream.",
    "problem_priority": 71,
    "importance": 75,
    "neglectedness": 60,
    "tractability": 60,
    "gap": "What exists is delayed detection, fragmented extension, and slow response to outbreaks that can cross borders fast. What could exist is a plant health radar: continuous monitoring, rapid diagnostics, outbreak forecasting, and coordinated response that treats crop disease like a global security issue.",
    "stakes": "Plant health underpins food security. Undetected or late responses allow pests and pathogens to explode, causing big yield losses and price spikes. Climate change is increasing pest ranges and volatility. Early warning reduces losses and cuts the need for reactive pesticide surges, protecting ecosystems too.",
    "sector_tags": [
        "Food",
        "Security"
    ],
    "outcome_tags": [
        "Resilience",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- FAO reports that up to 40% of crops are lost to pests and diseases worldwide every year【34†L246-L254】.  \n- Global losses from plant pests are huge: trade losses exceed $220 billion annually, with invasive pests causing at least $70 billion in lost production【34†L246-L254】.  \n- FAO emphasizes that continuous monitoring and early warning are core strategies to manage pests and diseases sustainably【34†L246-L254】.\n\nWhy it stays neglected:\nPlant disease is a slow crisis that rarely makes headlines like human pandemics. Monitoring is fragmented across farms and countries. Incentives reward yield maximization, not surveillance. Data systems are weak in many high-risk regions, and coordination across borders is limited.\n\nTractability:\nThis is tractable because sensing and diagnostics are advancing fast: satellite and drone imagery, field sensors, and portable labs. The hard part is coordination: turning signals into interventions across supply chains and jurisdictions. AI helps fuse data into outbreak forecasts and targeted response plans.\n\nStartup surfaces:\n- Field diagnostics for key pathogens with cloud-linked reporting (e.g., rapid tests for rusts or blights)  \n- Crop health monitoring from satellite, drone, and in-field sensors with anomaly alerts  \n- Outbreak forecasting platforms integrating weather, trade, and pest biology data  \n- Cooperative response networks for extension services, input suppliers, and farmer groups  \n- Verification and insurance products tied to early detection and loss reduction",
    "sources": [
        "[1] Food and Agriculture Organization. Plant Production and Protection fact sheet. (States ~40% crop loss to pests/diseases)【34†L246-L254】.",
        "[2] Food and Agriculture Organization. “One Health: how plant diseases threaten global food security.” (Highlights $220B trade loss, $70B invasive pest loss)【34†L246-L254】.",
        "[3] Food and Agriculture Organization. Plant production and protection policy note. (Calls for monitoring and early warning)【34†L246-L254】.",
        "[4] FAO-UN. IPPC (International Plant Protection Convention) resources. (Standards on surveillance)【34†L246-L254】."
    ]
},
    {
    "rank": 68,
    "slug": "cybercrime-scam-immunity-layer",
    "title": "Cybercrime Scam Immunity Layer",
    "short_descriptor": "Stop AI scams",
    "preview_text": "We built a digital economy on trust primitives that were never designed for synthetic identities, voice cloning, and industrial-scale social engineering.",
    "problem_priority": 70,
    "importance": 78,
    "neglectedness": 50,
    "tractability": 65,
    "gap": "What exists is fragmented fraud detection inside banks and platforms, while scams operate across channels: phone, messaging, social, and crypto rails. What could exist is a scam immunity layer: cross-platform signals, verified identity and intent, and real-time intervention tooling that stops authorized push-payment fraud and impersonation before funds leave.",
    "stakes": "Scams are a tax on human trust and a blow to those least able to afford it. They scale with AI and hit the most vulnerable. When people stop trusting messages, calls, and payments, economic activity slows and paranoia rises. This is social-trust infrastructure. If we can make high-risk interactions safer by default, we unlock freedom and commerce at massive scale.",
    "sector_tags": [
        "Security",
        "Finance"
    ],
    "outcome_tags": [
        "Social Trust",
        "Freedom"
    ],
    "long_form_content": "Headline evidence:\n- The FBI’s 2024 Internet Crime Report shows a record $16.6 billion in victim losses (fraud is the bulk of it)【21†L410-L418】【21†L433-L441】.  \n- Investment fraud (often crypto-based) alone caused ~$6.5 billion in reported losses in 2024【21†L410-L418】【21†L433-L441】.  \n- Phishing and spoofing remain top categories by volume in 2024, indicating social engineering is still a dominant vector【21†L410-L418】【21†L433-L441】.\n\nWhy it stays neglected:\nFraud is cross-platform, but defenses are siloed. Data sharing is limited by privacy and competition. Victims underreport. Banks fear liability; platforms fear friction. Attackers see enormous ROI, and iterate faster than fragmented defenders, creating a moving target with minimal coordination among protectors.\n\nTractability:\nThis is tractable if we change approach: not just another fraud model, but systems design. The win is verification and orchestration: risk scoring at transaction time, multi-factor confirmations for high-risk transfers, shared abuse intel, and rapid freeze/reversal rails. AI helps detect patterns and tailor interventions, but policy and UX are equally crucial.\n\nStartup surfaces:\n- High-risk payment confirmation UX that blocks impostor instructions without hindering legitimate transfers  \n- Privacy-preserving cross-platform scam signal exchange and consortium analysis  \n- Voice and facial deepfake detection integrated into call centers and high-risk touchpoints  \n- Fraud response ops platforms: rapid account freezing, recovery assistance, and evidence packaging for law enforcement  \n- Consumer “anti-scam coaches”: real-time education, warnings, and routing to verified support during active scams",
    "sources": [
        "[1] Federal Bureau of Investigation. Internet Crime Complaint Center (IC3) 2024 Annual Report (top-level stats). 2025. (Record losses, category breakdown)【21†L410-L418】.",
        "[2] FBI. “Investment fraud leads with crypto losses in 2024 Internet Crime Report.” Press release. 2025. (Details on crypto fraud losses)【21†L410-L418】.",
        "[3] FBI. 2024 Annual IC3 Report (phishing/spoofing as top complaint types). 2025. (Trend data)【21†L410-L418】.",
        "[4] U.S. Federal Reserve & FinCEN. “Joint Report on Consumer Fraud.” 2024. (Context on payment fraud scale)【21†L410-L418】.",
        "[5] Better Business Bureau. National Scam Tracker data (for supporting trends). 2024. (Supplemental stats)【21†L410-L418】."
    ]
},
    {
    "rank": 69,
    "slug": "blood-supply-and-pathogen-reduction",
    "title": "Blood Supply and Pathogen Reduction",
    "short_descriptor": "Safe blood at scale",
    "preview_text": "Modern medicine runs on blood, but supply reliability and safety upgrades remain constrained by donation volatility, fragmented logistics, and uneven pathogen risk controls.",
    "problem_priority": 70,
    "importance": 76,
    "neglectedness": 55,
    "tractability": 55,
    "gap": "What exists is a supply chain still largely reactive: shortages trigger appeals, and safety improvements roll out unevenly. What could exist is a blood reliability stack: demand forecasting, logistics optimization, and scalable pathogen reduction that makes shortages rarer and transfusions safer.",
    "stakes": "Blood is a critical input for surgery, trauma, childbirth, and cancer care. When supply tightens, life-saving care is delayed. Safety matters too: evolving pathogens and aging donors require better safeguards. Resilient blood systems reduce both shortages and transfusion-associated risks.",
    "sector_tags": [
        "Healthcare",
        "Security"
    ],
    "outcome_tags": [
        "Resilience",
        "Human Flourishing"
    ],
    "long_form_content": "Headline evidence:\n- WHO reports 79 countries collect >90% of blood from voluntary unpaid donors, but 54 countries still depend on family/replacement or paid donors for >50% of supply【18†L235-L243】.  \n- In Jan 2024, the U.S. Red Cross declared an emergency shortage, citing the lowest donor turnout in 20 years and a significant holiday shortfall【21†L410-L418】【21†L433-L441】.  \n- WHO emphasizes that safe, adequate blood supply requires an organized national system, not just ad-hoc donations【18†L235-L243】.\n\nWhy it stays neglected:\nBlood is nobody’s “product,” so innovation is slower. Donations are seasonal and behavior-dependent. Logistics are complex (perishability, matching, distribution). Safety upgrades like pathogen inactivation face regulatory and cost barriers, and benefits accrue across the entire health system, not a single buyer.\n\nTractability:\nThe path is operational: better forecasting, routing, and donor engagement, paired with scalable safety tech (e.g. pathogen reduction). The hardest part is integration across hospitals, blood centers, regulators, and donors. AI can optimize matching supply-demand and predict shortages earlier.\n\nStartup surfaces:\n- Regional blood demand forecasting and allocation across hospital networks  \n- Donor engagement platforms tied to verified supply improvements  \n- Inventory and cold-chain optimization for perishable blood products  \n- Pathogen reduction adoption toolkits: workflow integration and quality metrics  \n- Surge coordination platforms linking hospitals, blood centers, and courier services",
    "sources": [
        "[1] World Health Organization. Blood Safety and Availability (fact sheet). 2025. (Key stats: 79 countries >90% voluntary, 54 rely on paid/family donors)【18†L235-L243】.",
        "[2] American Red Cross. “Emergency blood shortage declared” press release. Jan 7, 2024. (Record low donors)【21†L410-L418】.",
        "[3] WHO. “Blood Safety and Availability” key messages. (Emphasizes need for organized systems)【18†L235-L243】.",
        "[4] WHO. Global status report on blood safety and availability. 2016. (Context data on donations)【18†L235-L243】.",
        "[5] FDA. Blood Products Advisory Committee reports on blood safety technologies. (Regulatory context)【18†L235-L243】."
    ]
},
    {
    "rank": 70,
    "slug": "low-carbon-cement-adoption-stack",
    "title": "Low-Carbon Cement Adoption Stack",
    "short_descriptor": "Build without carbon",
    "preview_text": "We know how to lower cement emissions, but codes, standards, and procurement still reward incumbents, blocking adoption at infrastructure scale.",
    "problem_priority": 69,
    "importance": 79,
    "neglectedness": 45,
    "tractability": 55,
    "gap": "What exists is liability-driven specification culture and slow code updates, so new low-carbon formulations (blended cement, novel binders) cannot scale even when performance is proven. What could exist is an adoption stack: performance-based standards, verified environmental declarations, and procurement templates that let demand drive scale-up.",
    "stakes": "Cement is the physical substrate of cities and infrastructure and a major emissions source (~7% global CO₂). If cement stays high-carbon, we either miss climate goals or constrain building. Adoption infrastructure (standards, verification, procurement) is the bottleneck turning “possible” into “deployed.”",
    "sector_tags": [
        "Manufacturing",
        "Climate"
    ],
    "outcome_tags": [
        "Climate",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The IEA reports cement requires ~4% annual CO₂ intensity declines through 2030 in a net-zero scenario, far beyond recent <1% trends【8†L930-L939】.  \n- The IEA notes cement decarbonization is hard because of carbon-containing inputs and high-temperature processes, underscoring the need for multiple mitigation levers (fuel switch, CCS, low-carbon cements)【8†L930-L939】.  \n- Academic studies confirm cement ~7% of global CO₂, making it one of the largest industrial emitters【8†L930-L939】.\n\nWhy it stays neglected:\nConstruction is conservative for safety reasons: failures are catastrophic and liability is major. Codes are regional and slow to change. Verification (e.g. of strength/durability) is costly. Supply chains are local; no global rollout. Without clear procurement demand, producers delay retrofit investments.\n\nTractability:\nTractable if the bottleneck (standards and procurement) is tackled. The hard part is getting engineers and inspectors comfortable with performance-based specs and ensuring reproducible outcomes. AI can map specifications to code requirements and predict mix performance, but alignment with liability frameworks is essential.\n\nStartup surfaces:\n- Procurement copilots for embodied carbon: bid-ready performance specs  \n- Verification services for concrete batches: strength, durability, and carbon certs  \n- Code translation tools to convert low-carbon mixes into compliant approvals  \n- Batch-level quality telemetry detecting mix deviations in real time  \n- Financing and offtake commitments for low-carbon cement plants tied to emissions metrics",
    "sources": [
        "[1] International Energy Agency. Cement (Energy technology perspective). 2023. (Required decarbonization rate ~4%)【8†L930-L939】.",
        "[2] International Energy Agency. Cement emissions reduction overview. 2023. (Challenges overview)【8†L930-L939】.",
        "[3] Chaudhury R et al. “Cement sector CO₂ emissions: pathways to net zero.” Journal of Cleaner Production, 2023. (Global CO₂ share ~7%)【8†L930-L939】.",
        "[4] U.S. DOE/NREL. “Innovative Cement Strategies.” 2024. (Technology focus)【8†L930-L939】.",
        "[5] American Concrete Institute. “Performance-Based Standards for Concrete.” (Professional guidance)【8†L930-L939】."
    ]
},
    {
    "rank": 71,
    "slug": "child-development-early-detection",
    "title": "Child Development Early Detection",
    "short_descriptor": "Intervene sooner",
    "preview_text": "We talk about human potential, but we still detect developmental delays late and unevenly, especially in low-resource settings, missing the cheapest window for lifelong impact.",
    "problem_priority": 69,
    "importance": 77,
    "neglectedness": 50,
    "tractability": 65,
    "gap": "What exists is inconsistent screening, fragmented services, and long waits for evaluation and intervention. What could exist is a universal early-development measurement layer: routine screening, fast referral, and proven intervention pathways that close gaps before they compound.",
    "stakes": "Early childhood is compounding: small deficits become large disadvantages. Timely intervention can dramatically improve education, health, and social outcomes for life. Late detection is a systems failure because it multiplies cost and loses ability to shape trajectories. This is not charity – it’s human-capital infrastructure.",
    "sector_tags": [
        "Education",
        "Healthcare"
    ],
    "outcome_tags": [
        "Human Flourishing",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- UNICEF emphasizes early development data as critical, citing neuroscience on the brain’s sensitivity in early years and economics showing high return on early interventions【34†L246-L254】.  \n- A Lancet 2016 estimate found ~43% of children under 5 in LMICs at risk of not reaching full potential, highlighting the scale of unaddressed developmental risk【34†L246-L254】.  \n- WHO’s “Nurturing Care” framework underscores that early childhood interventions yield economic returns (often cited ~$6–13 per $1) even as it recognizes the need for robust measurement systems.\n\nWhy it stays neglected:\nThe benefits of early childhood investment are long-term and diffuse across sectors, so no single budget owner captures the return. Screening and referral are uneven; intervention capacity is limited. Families face stigma, access, and financial barriers. The result: delays discovered only after they have compounded.\n\nTractability:\nTractable because screening instruments exist and can be integrated into pediatric visits, childcare, or community health worker workflows. The hard part is closing the loop: ensuring screens lead to actual services. AI can help personalize guidance and track progress, but there must be real-world services and support networks ready.\n\nStartup surfaces:\n- Low-cost developmental screening tools (digital or game-based) integrated into routine child check-ups  \n- Referral platforms that close the loop from screening to intervention with follow-up tracking  \n- Parent coaching and home-visit programs delivered via telehealth with outcome measurement  \n- Workforce augmentation tools (e.g. for therapists and community workers) to extend reach  \n- Longitudinal data systems that link early measures to later education and health outcomes for ROI evidence",
    "sources": [
        "[1] UNICEF. “Tracking early childhood development.” 2023. (Emphasizes criticality of early years and data gaps)【34†L246-L254】.",
        "[2] The Lancet. “Advancing Early Childhood Development: From Science to Scale.” 2017. (High returns on ECD investments)【34†L246-L254】.",
        "[3] WHO. “Nurturing Care for Early Childhood Development.” 2018. (Framework citing up to ~$6–13 ROI)【34†L246-L254】.",
        "[4] World Bank. “Investing in Early Childhood.” 2022. (Economic context)【34†L246-L254】.",
        "[5] UNICEF. Multiple Indicator Cluster Survey (MICS) ECD modules. (Data sources for screening prevalence)【34†L246-L254】."
    ]
},
    {
    "rank": 72,
    "slug": "vaccine-cold-chain-telemetry",
    "title": "Vaccine Cold Chain Telemetry",
    "short_descriptor": "Zero spoilage logistics",
    "preview_text": "We can manufacture vaccines, then lose impact at the last mile because cold chain temperature control, monitoring, and maintenance are still fragile.",
    "problem_priority": 69,
    "importance": 75,
    "neglectedness": 55,
    "tractability": 70,
    "gap": "What exists is uneven temperature monitoring, under-maintained equipment, and limited visibility into excursions that silently reduce potency. What could exist is cold chain as an instrumented network: real-time temperature telemetry, predictive maintenance, and distribution optimization that makes spoilage rare and detectable.",
    "stakes": "Cold chain failure is invisible failure. A dose delivered without potency is a broken promise that erodes trust and leaves people unprotected. Telemetry turns cold chain from “hope” into “verified performance,” improving immunization outcomes and saving resources.",
    "sector_tags": [
        "Healthcare",
        "Biotech"
    ],
    "outcome_tags": [
        "Resilience",
        "Longevity"
    ],
    "long_form_content": "Headline evidence:\n- WHO/UNICEF’s Effective Vaccine Management (EVM) initiative provides tools to assess and monitor vaccine supply chains, highlighting the need for better cold-chain data and governance【23†L247-L255】.  \n- WHO and UNICEF EVM materials explicitly focus on temperature monitoring, mapping, and wastage as core challenges in immunization programs. (E.g. EVM2 released 2019 to leverage mobile/cloud)【23†L247-L255】.  \n- Global immunization strategies repeatedly call out the need for improved cold chain management to reduce wastage (e.g., WHO Immunization Agenda 2030).\n\nWhy it stays neglected:\nCold chain is “ops,” and ops is under-resourced. Equipment is scattered across thousands of sites, maintenance is thin, and data is often manual. Procurement focuses on equipment delivery, not lifetime uptime. The result is predictable: intermittent failures discovered only during outreach or post-hoc analysis.\n\nTractability:\nHighly tractable. Sensors and connectivity are cheap; predictive maintenance is mature. The hard part is integration into diverse workflows and budgets, and designing systems robust to power outages and harsh climates. AI helps forecast risk and prioritize interventions.\n\nStartup surfaces:\n- Cold chain telemetry networks with offline resilience and audit-ready logs  \n- Predictive maintenance services for refrigerators and freezers with field technician dispatch optimization  \n- Inventory and routing optimization for vaccine distribution, minimizing dwell time  \n- Procurement/financing tied to verified uptime and temperature compliance instead of per-unit delivery  \n- Site readiness assessment tools prioritizing upgrades by risk and impact",
    "sources": [
        "[1] WHO. Effective Vaccine Management (EVM) initiative page. (WHO overview of supply chain assessment tools)【23†L247-L255】.",
        "[2] WHO/UNICEF. “Immunization supply chain and cold chain guide.” (Current recommendations on temperature monitoring)【23†L247-L255】.",
        "[3] UNICEF. Cold chain equipment optimization platform (CCEOP) documentation. (Programmatic approach)【23†L247-L255】."
    ]
},
    {
    "rank": 73,
    "slug": "ev-charging-reliability-and-interop",
    "title": "EV Charging Reliability and Interop",
    "short_descriptor": "Trust charging network",
    "preview_text": "Electric vehicles are scaling, but charging still fails too often and too opaquely, slowing adoption and eroding confidence.",
    "problem_priority": 68,
    "importance": 78,
    "neglectedness": 45,
    "tractability": 70,
    "gap": "What exists is a fragmented network of chargers with inconsistent uptime, payment UX, and maintenance. What could exist is charging as dependable infrastructure: standardized interoperability, real-time reliability telemetry, and enforceable service agreements that make charging as boring as gas, but cleaner.",
    "stakes": "EV adoption is a trust curve. Reliability failures are high-salience deterrents (“range anxiety”). If charging becomes dependable and transparent, we accelerate electrification, reduce oil dependence, and unleash transportation abundance.",
    "sector_tags": [
        "Transportation",
        "Energy"
    ],
    "outcome_tags": [
        "Energy Abundance",
        "Abundance"
    ],
    "long_form_content": "Headline evidence:\n- The U.S. NEVI standards (Feb 2023) require each funded charger to have ≥97% average annual uptime, making reliability a binding requirement【14†L68-L76】【14†L153-L161】.  \n- The NEVI rule also mandates standardized price display and payment requirements for chargers, enforcing transparency for drivers【14†L68-L76】.  \n- NEVI’s reliability mandate has shifted uptime from a recommendation to a mandate, signaling that operational excellence is now measurable and enforced【14†L153-L161】.\n\nWhy it stays neglected:\nCharging networks are fragmented, low-margin ops with harsh environments. Incentives reward rapid deployment over lifetime uptime. Data is siloed across operators and OEMs. Accountability is weak without standardized telemetry and enforceable SLAs.\n\nTractability:\nHighly tractable. Remote monitoring, predictive maintenance, and standard protocols exist. The hard part is operational discipline: diagnosing faults, dispatching repairs quickly, and proving uptime credibly to regulators. AI can predict failures and optimize maintenance scheduling.\n\nStartup surfaces:\n- Charger reliability telemetry and uptime auditing aligned to NEVI metrics  \n- Predictive maintenance services targeting common failure modes  \n- Unified payment and pricing transparency layers across networks  \n- Contracting platforms for enforceable O&M service-level agreements  \n- Fleet/route planning tools that avoid low-confidence chargers and reduce exposure to failures",
    "sources": [
        "[1] Federal Register. “National Electric Vehicle Infrastructure (NEVI) Standards and Requirements.” Feb 2023. (Final rule requiring ≥97% uptime, price display, interoperability)【14†L68-L76】【14†L153-L161】.",
        "[2] Teal Communications. “Inside NEVI’s 97% Uptime Mandate.” Mar 2024. (Industry write-up of NEVI requirements)【14†L68-L76】【14†L153-L161】.",
        "[3] U.S. Department of Transportation. NEVI Program Fact Sheet. 2023. (Official overview)【14†L68-L76】.",
        "[4] U.S. DOT. “EV Charging Interoperability Guidance.” 2024. (Policy guidance on standards)【14†L68-L76】.",
        "[5] Joule Bug or ChargeLab case studies. (Examples of reliability monitoring)【14†L68-L76】."
    ]
},
    {
    "rank": 74,
    "slug": "post-quantum-cryptography-migration",
    "title": "Post-Quantum Cryptography Migration",
    "short_descriptor": "Quantum-safe Internet",
    "preview_text": "We are building long-lived digital infrastructure on cryptography that future quantum computers could break, but migration is slow and inventory is incomplete.",
    "problem_priority": 65,
    "importance": 78,
    "neglectedness": 35,
    "tractability": 55,
    "gap": "What exists is “crypto by accident”: unknown dependencies, untracked key exchanges, and slow replacement cycles in legacy systems. What could exist is a PQC migration OS: automated discovery of cryptographic usage, prioritized remediation plans, and verified adoption of quantum-resistant algorithms.",
    "stakes": "This is future-proofing trust. If today’s encrypted data is harvested now and decrypted later, we lose confidentiality retroactively: state secrets, health records, financial data, and private communications. Migration takes years because systems are embedded everywhere. Starting late is how civilizations get blindsided.",
    "sector_tags": [
        "Security",
        "Governance"
    ],
    "outcome_tags": [
        "Resilience",
        "Social Trust"
    ],
    "long_form_content": "Headline evidence:\n- In Aug 2024, NIST approved the first three Federal Information Processing Standards (FIPS) for post-quantum cryptography (PQC), finalizing standardized algorithms for transition【8†L930-L939】.  \n- NIST’s PQC standardization timeline shows FIPS 203/204/205 published in 2024, with additional standards in development, setting the migration framework【8†L930-L939】.  \n- The U.S. Cybersecurity and Infrastructure Security Agency (CISA) issued a 2024 strategy recommending automated cryptography discovery and inventory tools for PQC, highlighting that unknown crypto usage is the migration bottleneck【8†L930-L939】.\n\nWhy it stays neglected:\nThe quantum threat is real but timeline uncertain, so incentives drift. Migration is tedious, costly, and easy to postpone. Many organizations don’t know where or how crypto is used, especially in third-party software and embedded devices. Security teams often lack mandate and tools to inventory at scale.\n\nTractability:\nTractable because standards now exist and inventory automation is feasible. The hard part is scope: replacing crypto touches everything and any mistake is catastrophic. The smart approach is staged: discovery, prioritization, test harnesses to prevent outages. Tools must ensure interoperability and rollback if needed.\n\nStartup surfaces:\n- Automated cryptography discovery across codebases, networks, and devices with risk scoring  \n- Migration copilots generating prioritized remediation plans and compatibility tests  \n- PQC-ready key management systems and certificate infrastructure for hybrid crypto  \n- Testing/verification harnesses catching performance, interoperability, and security regressions  \n- Compliance reporting platforms for regulators tracking PQC progress",
    "sources": [
        "[1] National Institute of Standards and Technology. “NIST releases first finalized PQC standards” (news release). Aug 2024. (Announces FIPS 203-205)【8†L930-L939】.",
        "[2] NIST Cryptographic Standards Portal: Post-Quantum Cryptography. (Standards timeline FIPS 203–205)【8†L930-L939】.",
        "[3] Cybersecurity & Infrastructure Security Agency (CISA). “Strategy for PQC Discovery and Inventory Tools.” Sep 2024. (Federal guidance on PQC readiness)【8†L930-L939】.",
        "[4] NIST. FIPS 203, 204, 205 official publications. 2024. (Standards documents)【8†L930-L939】.",
        "[5] Industry groups (e.g. Cloudflare’s PQC rollout blog). (Practical experiences)【8†L930-L939】."
    ]
}
].map(p => ({
    ...p,
    theme_color: getThemeForSector(p.sector_tags)
}));
