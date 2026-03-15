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
    }
].map(p => ({
    ...p,
    theme_color: getThemeForSector(p.sector_tags)
}));
