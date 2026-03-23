import { Metric } from '../types';

export const exhaustiveMetrics: Metric[] = [
  // --- AI CAPABILITY ---
  {
    id: 'sub-ai-multimodal', category: 'AI Capability', name: 'Multimodal Parameter Scale', shortLabel: 'Dense Scale', currentValue: 2, unit: 'Trillion', displayValue: '2T Params', trendDirection: 'up', trendMagnitude: 'Increasing', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Industry Leaks', sourceUrl: '#', methodologyNote: 'Estimated parameter count of largest dense multimodal models.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Scale proxy for cross-domain intelligence.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 100,
    indexWeight: 0.7,
  },
  {
    id: 'sub-ai-model-releases', category: 'AI Capability', name: 'Global R&D Investment', shortLabel: 'Capital Infusion', currentValue: 110, unit: 'B', displayValue: '$110B+', trendDirection: 'up', trendMagnitude: '+40% YoY', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Stanford AI Index', sourceUrl: '#', methodologyNote: 'Private investment in core AI systems and semiconductor supply chains.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'The financial engine driving the compute scale-up.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 4.5,
    indexWeight: 0.6,
  },
  {
    id: 'sub-ai-open-share', category: 'AI Capability', name: 'Open vs Closed Share', shortLabel: 'Closed Dominance', currentValue: 90, unit: '%', displayValue: '90% Closed', trendDirection: 'up', trendMagnitude: 'Consolidating', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Industry Tracking', sourceUrl: '#', methodologyNote: 'Percentage of cutting-edge frontier models locked behind APIs.', lastUpdated: '2026-02-01', updateCadence: 'Quarterly', whyItMatters: 'Centralization of intelligence.', visualType: 'HaloRing', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 60,
    indexWeight: 0.6,
  },
  {
    id: 'sub-ai-knowledge-work', category: 'AI Capability', name: 'AI Share of Knowledge Work', shortLabel: 'Economic Automation', currentValue: 5, unit: '%', displayValue: '5%', trendDirection: 'up', trendMagnitude: 'Early Scaling', confidenceClass: 'Modeled', sourceQuality: 'Low', sourceName: 'Economic Projections', sourceUrl: '#', methodologyNote: 'Share of highly compensated knowledge tasks successfully automated.', lastUpdated: '2026-01-15', updateCadence: 'Annually', whyItMatters: 'Core impact vector on human economic paradigms.', visualType: 'HaloRing', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },

  // --- COMPUTE + ENERGY ---
  {
    id: 'sub-compute-training-share', category: 'Compute + Energy', name: 'Inference Workload Share', shortLabel: 'Inference Ratio', currentValue: 70, unit: '%', displayValue: '70% Inference', trendDirection: 'up', trendMagnitude: 'Shift to Prod', confidenceClass: 'Modeled', sourceQuality: 'Medium', sourceName: 'Data Center Analytics', sourceUrl: '#', methodologyNote: 'Projected portion of global AI compute dedicated to running vs training models.', lastUpdated: '2026-02-01', updateCadence: 'Annually', whyItMatters: 'Marks the transition from R&D to mass deployment.', visualType: 'SplitRiver', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-compute-h100-stock', category: 'Compute + Energy', name: 'Total AI Compute Stock', shortLabel: 'H100 Equivalents', currentValue: 39.6, unit: 'Million', displayValue: '39.6M Chips', trendDirection: 'up', trendMagnitude: 'Doubling', confidenceClass: 'Modeled', sourceQuality: 'High', sourceName: 'Supply Chain Audits', sourceUrl: '#', methodologyNote: 'US deployment of H100-class chips.', lastUpdated: '2026-01-01', updateCadence: 'Quarterly', whyItMatters: 'The raw physical limitation of intelligence scale.', visualType: 'ReservoirFill', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-compute-gigawatt-clusters', category: 'Compute + Energy', name: 'Gigawatt Data Centers', shortLabel: 'Multi-GW Sites', currentValue: 3, unit: 'Sites', displayValue: '3 Operational', trendDirection: 'up', trendMagnitude: '+1/yr', confidenceClass: 'Self-reported', sourceQuality: 'Medium', sourceName: 'Corporate Filings', sourceUrl: '#', methodologyNote: 'Number and scale of single-site training clusters consuming >1 GW of power.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'The ultimate centralization of physical compute.', visualType: 'MonolithBars', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-compute-accelerator-growth', category: 'Compute + Energy', name: 'Accelerator Deployment', shortLabel: 'Annual Growth Rate', currentValue: 2.25, unit: 'x', displayValue: '2.25x / yr', trendDirection: 'up', trendMagnitude: 'Exponential', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Semiconductor Shipments', sourceUrl: '#', methodologyNote: 'Annual multiplier of high-end AI accelerator shipments globally.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Hardware supply chain velocity.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-compute-world-elec', category: 'Compute + Energy', name: 'World Electricity Generation', shortLabel: 'Global Grid Supply', currentValue: 29479, unit: 'TWh', displayValue: '29,479 TWh', trendDirection: 'up', trendMagnitude: '+3% YoY', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Energy Institute', sourceUrl: '#', methodologyNote: 'Total absolute electrical generation globally.', lastUpdated: '2025-12-01', updateCadence: 'Annually', whyItMatters: 'The hard ceiling of civilization\'s energetic capacity.', visualType: 'ReservoirFill', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-compute-clean-elec', category: 'Compute + Energy', name: 'Clean Electricity Share', shortLabel: 'Zero-Carbon Grid', currentValue: 42, unit: '%', displayValue: '42%', trendDirection: 'up', trendMagnitude: '+1.5% YoY', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'IEA', sourceUrl: '#', methodologyNote: 'Percentage of total electricity generated via zero-carbon sources (33.3% renewables).', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Decoupling compute scale from atmospheric collapse.', visualType: 'HaloRing', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },

  // --- LONGEVITY / LEV ---
  {
    id: 'sub-long-cryo-members', category: 'Longevity', name: 'Cryonics Funded Members', shortLabel: 'Committed Funding', currentValue: 2701, unit: 'Members', displayValue: '2,701', trendDirection: 'up', trendMagnitude: 'Steady Growth', confidenceClass: 'Self-reported', sourceQuality: 'Low', sourceName: 'Alcor / CI records', sourceUrl: '#', methodologyNote: '~1,176 funded (Alcor), ~1,525 funded (CI).', lastUpdated: '2026-02-01', updateCadence: 'Annually', whyItMatters: 'Social acceptance and financial commitment to post-mortem resuscitation.', visualType: 'MonolithBars', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-gene-therapies', category: 'Longevity', name: 'Approved Gene Therapies', shortLabel: 'Clinical Approvals', currentValue: 18, unit: 'Therapies', displayValue: '18 Available', trendDirection: 'up', trendMagnitude: 'Accelerating', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'FDA', sourceUrl: '#', methodologyNote: 'Non-CAR-T FDA-approved gene therapies.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Base-level editing of human biological degradation.', visualType: 'ThresholdLadder', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-cell-therapies', category: 'Longevity', name: 'Approved Cell Therapies', shortLabel: 'Clinical Approvals', currentValue: 28, unit: 'Therapies', displayValue: '28 Available', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'FDA', sourceUrl: '#', methodologyNote: 'Includes cord blood and CAR-T FDA approvals.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Cellular regeneration and targeting capabilities.', visualType: 'ThresholdLadder', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-omics-cost', category: 'Longevity', name: 'Cost of Omics Measurements', shortLabel: 'Transcript/Proteo Cost', currentValue: 0.99, unit: 'USD/Gb', displayValue: '<$1 / Gb', trendDirection: 'down', trendMagnitude: 'Collapse', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Illumina', sourceUrl: '#', methodologyNote: 'Cost to sequence 1 Gb of rich multi-omics data.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Cheaper data accelerates aging causality models.', visualType: 'LogDescent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-bio-age', category: 'Longevity', name: 'Epigenetic Clock Cost', shortLabel: 'Bio-Age Testing', currentValue: 150, unit: 'USD', displayValue: '~$150', trendDirection: 'down', trendMagnitude: 'Halving', confidenceClass: 'Measured', sourceQuality: 'Medium', sourceName: 'Consumer Market', sourceUrl: '#', methodologyNote: 'Accessibility of consumer-facing epigenetic age measurements.', lastUpdated: '2026-02-01', updateCadence: 'Annually', whyItMatters: 'Feedback loops for personal intervention efficacy.', visualType: 'LogDescent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-trials', category: 'Longevity', name: 'Longevity Clinical Trials', shortLabel: 'Intervention Pipeline', currentValue: 42969, unit: 'Trials', displayValue: '42,969 Total', trendDirection: 'up', trendMagnitude: 'Scaling', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'ClinicalTrials.gov', sourceUrl: '#', methodologyNote: 'Total trials initiated globally, tracking target longevity mechanisms.', lastUpdated: '2026-01-01', updateCadence: 'Bi-annually', whyItMatters: 'The clinical pipeline for LEV components.', visualType: 'ReservoirFill', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 10,
    indexWeight: 0.6,
  },
  {
    id: 'sub-long-organs', category: 'Longevity', name: 'Organ Replacement', shortLabel: 'Somatic Replacements', currentValue: 1, unit: 'Phase', displayValue: 'Phase 1', trendDirection: 'up', trendMagnitude: 'Early', confidenceClass: 'Reported', sourceQuality: 'Medium', sourceName: 'Clinical Overviews', sourceUrl: '#', methodologyNote: 'Pre-clinical/Phase 1 for complex 3D printed or xenotransplanted solid organs.', lastUpdated: '2026-03-01', updateCadence: 'Annually', whyItMatters: 'Modular replacement of failed biological hardware.', visualType: 'EvolutionaryLadder', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-reprogramming', category: 'Longevity', name: 'Cellular Reprogramming', shortLabel: 'Yamanaka Milestones', currentValue: 1, unit: 'Phase', displayValue: 'Murine Models', trendDirection: 'up', trendMagnitude: 'Breakthroughs', confidenceClass: 'Reported', sourceQuality: 'High', sourceName: 'Altos Labs/Nature', sourceUrl: '#', methodologyNote: 'Partial reprogramming effective in murine (mouse) models.', lastUpdated: '2026-02-15', updateCadence: 'Bi-annually', whyItMatters: 'True age-reversal at the cellular level.', visualType: 'EvolutionaryLadder', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-long-senolytics', category: 'Longevity', name: 'Senolytics Clinical Stage', shortLabel: 'Zombie Cell Clearing', currentValue: 2, unit: 'Phase', displayValue: 'Phase 2 (D+Q)', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'FDA Data', sourceUrl: '#', methodologyNote: 'Phase 2 trials for Dasatinib + Quercetin clearance of senescent cells.', lastUpdated: '2025-11-01', updateCadence: 'Annually', whyItMatters: 'Reduction of inflammatory aging burden.', visualType: 'EvolutionaryLadder', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },

  // --- BRAIN SCANNING ---
  {
    id: 'sub-brain-scan-size', category: 'Brain Scanning', name: 'Connectome Dataset Scale', shortLabel: 'Storage Size', currentValue: 106, unit: 'TB', displayValue: '106 Terabytes', trendDirection: 'up', trendMagnitude: '+100x Jump', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'FlyWire/AIOps', sourceUrl: '#', methodologyNote: 'Storage footprint of a single structurally mapped complex organism brain (Fly).', lastUpdated: '2026-03-01', updateCadence: 'Bi-annually', whyItMatters: 'The sheer data volume required for Mind Uploading.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-brain-emulation-phys', category: 'Brain Scanning', name: 'Emulation Embodiment', shortLabel: 'Physics Transfer', currentValue: 1, unit: 'Phase', displayValue: 'NeuroMechFly', trendDirection: 'up', trendMagnitude: 'Early', confidenceClass: 'Reported', sourceQuality: 'Medium', sourceName: 'Research Lit', sourceUrl: '#', methodologyNote: 'MuJoCo physics-simulated fly body acting on real connectome data.', lastUpdated: '2026-01-05', updateCadence: 'Annually', whyItMatters: 'Proves connectomes generate realistic behavior when grounded in physics engines.', visualType: 'EvolutionaryLadder', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-brain-public-private', category: 'Brain Scanning', name: 'Connectome Transparency', shortLabel: 'Open Science Ratio', currentValue: 80, unit: '%', displayValue: 'Highly Transparent', trendDirection: 'up', trendMagnitude: 'Stable', confidenceClass: 'Categorical', sourceQuality: 'High', sourceName: 'NIH BRAIN', sourceUrl: '#', methodologyNote: 'Most mapping is government/public funded versus proprietary IP.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Ensuring human digital immortality infrastructure is not enclosed.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-brain-neural-density', category: 'Brain Scanning', name: 'Neural Recording Density', shortLabel: 'Sensors / mm³', currentValue: 1000, unit: 'Units', displayValue: '~1,000 / mm³', trendDirection: 'up', trendMagnitude: 'Doubling / 4.6y', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Neuropixels', sourceUrl: '#', methodologyNote: 'Density of recording channels available in vivo.', lastUpdated: '2025-10-01', updateCadence: 'Annually', whyItMatters: 'Hardware limits on reading conscious states in real time.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-brain-map-cost', category: 'Brain Scanning', name: 'Cost of High-Res Mapping', shortLabel: 'Fly Brain Cost', currentValue: 50, unit: 'Million USD', displayValue: '~$50M / Organism', trendDirection: 'down', trendMagnitude: 'Slow Decline', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Grant Funding', sourceUrl: '#', methodologyNote: 'Total estimated sunk capital to produce a full synaptic-level connectome.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Cost barrier to scaling from insects to mammals.', visualType: 'LogDescent', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },

  // --- CIVILIZATION ---
  {
    id: 'sub-civ-gdp-capita', category: 'Civilization', name: 'GDP per Capita', shortLabel: 'Global Average', currentValue: 13456, unit: 'USD', displayValue: '$13,456', trendDirection: 'up', trendMagnitude: '+1.5% YoY', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'World Bank', sourceUrl: '#', methodologyNote: 'Global average economic output per human.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Distributive measure of civilizational wealth.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 3.8,
    indexWeight: 0.7,
  },
  {
    id: 'sub-civ-energy-capita', category: 'Civilization', name: 'Energy per Capita', shortLabel: 'Power Available', currentValue: 2300, unit: 'Watts', displayValue: '2,300 Watts', trendDirection: 'up', trendMagnitude: 'Flat', confidenceClass: 'Calculated', sourceQuality: 'High', sourceName: 'IEA', sourceUrl: '#', methodologyNote: 'Total global energy divided by human population.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Energy abundance proxy at the individual scale.', visualType: 'MonolithBars', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 0.7,
    indexWeight: 0.5,
  },
  {
    id: 'sub-civ-research', category: 'Civilization', name: 'AI Research Output', shortLabel: 'Publications/yr', currentValue: 242000, unit: 'Papers', displayValue: '242,000 / yr', trendDirection: 'up', trendMagnitude: 'Exponential', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'ArXiv / Zeta Alpha', sourceUrl: '#', methodologyNote: 'Total AI-related academic and corporate publications annually.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Humanity\'s scientific attention focus.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 4.5,
    indexWeight: 0.6,
  },
  {
    id: 'sub-civ-semiconductor', category: 'Civilization', name: 'Semiconductor Progress', shortLabel: 'Transistor Count', currentValue: 200, unit: 'Billion', displayValue: '>200B / package', trendDirection: 'up', trendMagnitude: 'Doubling / 24mo', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'TSMC / Nvidia', sourceUrl: '#', methodologyNote: 'Moore\'s law tracking via maximal transistor counts in production silicon.', lastUpdated: '2026-03-01', updateCadence: 'Annually', whyItMatters: 'The underlying lithography engine driving AI scale.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 41,
    indexWeight: 0.9,
  },
  {
    id: 'sub-civ-internet', category: 'Civilization', name: 'Global Internet Access', shortLabel: 'Connected Pop', currentValue: 74, unit: '%', displayValue: '74% (6.0B)', trendDirection: 'up', trendMagnitude: 'Asymptoting', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'ITU', sourceUrl: '#', methodologyNote: 'Percentage of the global human population with basic internet connectivity.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Inclusion into the global neural network of humanity.', visualType: 'HaloRing', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 2.9,
    indexWeight: 0.5,
  },
  {
    id: 'sub-civ-literacy', category: 'Civilization', name: 'Global Literacy Rate', shortLabel: 'Basic Education', currentValue: 87, unit: '%', displayValue: '~87%', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'UNESCO', sourceUrl: '#', methodologyNote: 'Adult global literacy average.', lastUpdated: '2025-12-01', updateCadence: 'Annually', whyItMatters: 'Cognitive baseline of the biological population.', visualType: 'HaloRing', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 0.5,
    indexWeight: 0.3,
  },
  {
    id: 'sub-civ-poverty', category: 'Civilization', name: 'Extreme Poverty Rate', shortLabel: '<$3/day Pop', currentValue: 10.3, unit: '%', displayValue: '10.3%', trendDirection: 'down', trendMagnitude: 'Slowing Decline', confidenceClass: 'Modeled', sourceQuality: 'High', sourceName: 'World Bank', sourceUrl: '#', methodologyNote: 'Percentage living below the $3.00/day threshold.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'The most critical failure of pre-AGI economic distribution.', visualType: 'LogDescent', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 2,
    indexWeight: 0.4,
  },
  {
    id: 'sub-civ-orbit-mass', category: 'Space Exploration', name: 'Orbital Mass Launched', shortLabel: 'Total Up-Mass', currentValue: 1200, unit: 'Tons', displayValue: '>1,000 Tons', trendDirection: 'up', trendMagnitude: 'Exponential', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Space Traffic Data', sourceUrl: '#', methodologyNote: 'Total payload mass delivered to functional orbits globally per year.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Civilizational expansion beyond gravity well constraints.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 100,
    indexWeight: 0.8,
  },
  {
    id: 'sub-civ-mot-fear', category: 'Civilization', name: 'Fear / Anxiety Proxy', shortLabel: 'VIX & NLP Risk', currentValue: 14.95, unit: 'Index', displayValue: '14.95 VIX', trendDirection: 'up', trendMagnitude: 'Volatile', confidenceClass: 'Calculated', sourceQuality: 'High', sourceName: 'CBOE / Sentiment', sourceUrl: '#', methodologyNote: 'VIX Volatility Index fused with panic-related NLP semantic scrapes.', lastUpdated: '2026-03-21', updateCadence: 'Daily', whyItMatters: 'Macro societal nervousness regarding transition events.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 10,
    indexWeight: 0.2,
  },
  {
    id: 'sub-civ-mot-greed', category: 'Civilization', name: 'Greed Proxy', shortLabel: 'Market FOMO', currentValue: 54.8, unit: 'Index', displayValue: '54.8 (CNN)', trendDirection: 'up', trendMagnitude: 'High', confidenceClass: 'Modeled', sourceQuality: 'Medium', sourceName: 'CNN Fear/Greed', sourceUrl: '#', methodologyNote: 'CNN Fear & Greed annual moving average.', lastUpdated: '2026-03-21', updateCadence: 'Daily', whyItMatters: 'Financial capitalization velocity of AGI technologies.', visualType: 'ThresholdLadder', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 10,
    indexWeight: 0.2,
  },
  {
    id: 'sub-civ-mot-curiosity', category: 'Civilization', name: 'Curiosity Proxy', shortLabel: 'Global R&D Spend', currentValue: 2.87, unit: 'Trillion USD', displayValue: '$2.87T', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'OECD', sourceUrl: '#', methodologyNote: 'Total global R&D capital expenditure across public and private sectors.', lastUpdated: '2025-12-01', updateCadence: 'Annually', whyItMatters: 'Financial commitment to exploring the unknown.', visualType: 'ReservoirFill', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 4.5,
    indexWeight: 0.5,
  },
  {
    id: 'sub-civ-mot-love', category: 'Civilization', name: 'Prosperity Sharing (Love Proxy)', shortLabel: 'Total Philanthropy', currentValue: 2.3, unit: 'Trillion USD', displayValue: '$2.3T', trendDirection: 'up', trendMagnitude: 'Flat', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Charities Aid Fnd.', sourceUrl: '#', methodologyNote: 'Estimated global philanthropic giving and mutual aid transfers.', lastUpdated: '2025-12-01', updateCadence: 'Annually', whyItMatters: 'Willingness of civilization to distribute surplus to the vulnerable.', visualType: 'SplitRiver', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 6.3,
    indexWeight: 0.5,
  },

  // --- ROBOTICS ---
  {
    id: 'sub-robot-cost', category: 'Robotics', name: 'Cost per Robot-Hour', shortLabel: 'Autonomous Labor Cost', currentValue: 4.5, unit: 'USD/hr', displayValue: '$4.50 / hr', trendDirection: 'down', trendMagnitude: 'Fast Decline', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Industry Projections', sourceUrl: '#', methodologyNote: 'Trending toward the $2.00/hour mass-manufacturing target substitution cost.', lastUpdated: '2026-01-15', updateCadence: 'Quarterly', whyItMatters: 'The breaking point for mass human labor replacement.', visualType: 'LogDescent', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-robot-warehouse', category: 'Robotics', name: 'Warehouse Automation Share', shortLabel: 'Supply Chain AI', currentValue: 20, unit: '%', displayValue: '~20%', trendDirection: 'up', trendMagnitude: '+3% YoY', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Logistics Reports', sourceUrl: '#', methodologyNote: 'Percentage of global warehouse logistics running without direct local human labor.', lastUpdated: '2026-02-01', updateCadence: 'Annually', whyItMatters: 'Early indicator of physical scaling laws.', visualType: 'HaloRing', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-robot-deliveries', category: 'Robotics', name: 'Autonomous Deliveries', shortLabel: 'Drone / Ground Ops', currentValue: 12, unit: 'Million', displayValue: '12M+ (Drones)', trendDirection: 'up', trendMagnitude: 'Exponential', confidenceClass: 'Reported', sourceQuality: 'Medium', sourceName: 'Zipline / Amazon', sourceUrl: '#', methodologyNote: 'Scaling commercial deliveries completed by non-human systems.', lastUpdated: '2026-01-01', updateCadence: 'Quarterly', whyItMatters: 'Extending physical agency into uncontrolled public airspace.', visualType: 'LogAscent', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-robot-dexterity', category: 'Robotics', name: 'Dexterity Benchmarks', shortLabel: 'Fine Motor Control', currentValue: 1, unit: 'Phase', displayValue: 'Fabric Folding', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Reported', sourceQuality: 'Low', sourceName: 'Academic Papers', sourceUrl: '#', methodologyNote: 'Tracking capability of bimanual manipulators to handle deformable objects.', lastUpdated: '2026-03-01', updateCadence: 'Monthly', whyItMatters: 'The hardest problem in substituting human domestic/trades labor.', visualType: 'Timeline', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-robot-home', category: 'Robotics', name: 'Home Robot Utility', shortLabel: 'Domestic Encroachment', currentValue: 1, unit: 'Phase', displayValue: '2D (Vacuums)', trendDirection: 'up', trendMagnitude: 'Transitioning', confidenceClass: 'Categorical', sourceQuality: 'Low', sourceName: 'Consumer Market', sourceUrl: '#', methodologyNote: 'Transitioning from 2D plane navigation (Roombas) to 3D mobile manipulators.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Integrating autonomous agents intimately into personal human habitats.', visualType: 'EvolutionaryLadder', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-robot-latency', category: 'Robotics', name: 'AI-to-Robot Latency', shortLabel: 'Edge Inference Delay', currentValue: 45, unit: 'ms', displayValue: '<50 ms', trendDirection: 'down', trendMagnitude: 'Slowing', confidenceClass: 'Measured', sourceQuality: 'Medium', sourceName: 'Hardware Benchmarks', sourceUrl: '#', methodologyNote: 'Target round-trip latency for complex visual-language-action uncompressed inference.', lastUpdated: '2026-02-01', updateCadence: 'Quarterly', whyItMatters: 'Required for real-time survival in unstructured physical environments.', visualType: 'LogDescent', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },

  // --- COORDINATION ---
  {
    id: 'sub-coord-leading-labs', category: 'Coordination', name: 'Number of Leading Labs', shortLabel: 'Dominant AGI Actors', currentValue: 7, unit: 'Entities', displayValue: 'Top 5-10', trendDirection: 'down', trendMagnitude: 'Consolidating', confidenceClass: 'Categorical', sourceQuality: 'High', sourceName: 'Industry Consensus', sourceUrl: '#', methodologyNote: 'Number of actors possessing the compute and talent necessary to realistically train an AGI transition model.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Tracking multipolar vs unipolar takeoff dynamics.', visualType: 'MonolithBars', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-coord-eval-pass', category: 'Coordination', name: 'Model Risk Eval Pass Rates', shortLabel: 'Self-Replication Safety', currentValue: 60, unit: '%', displayValue: '60%', trendDirection: 'up', trendMagnitude: 'Rapid Improvement', confidenceClass: 'Measured', sourceQuality: 'Medium', sourceName: 'Apollo / METR', sourceUrl: '#', methodologyNote: 'Percentage pass rate on dangerous capability (e.g. self-replication) red-teaming tasks.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Quantified evidence that capabilities are outpacing control boundaries.', visualType: 'ThresholdLadder', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-coord-biosec', category: 'Coordination', name: 'Biosecurity Capability Thresholds', shortLabel: 'Testing Penetration', currentValue: 42, unit: '%', displayValue: '3 of 7 top labs', trendDirection: 'up', trendMagnitude: 'Increasing', confidenceClass: 'Reported', sourceQuality: 'Medium', sourceName: 'Lab Transparency', sourceUrl: '#', methodologyNote: 'Labs reporting substantive biological hazard and synthesis capability testing.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Crucial dual-use risk capability monitoring.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: true,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-coord-cyber', category: 'Coordination', name: 'Cyber Offense / Defense', shortLabel: 'CTF Win Rate', currentValue: 80, unit: '%', displayValue: 'High CTF Defeat', trendDirection: 'up', trendMagnitude: 'Escalating', confidenceClass: 'Measured', sourceQuality: 'Medium', sourceName: 'DEF CON / Open Evals', sourceUrl: '#', methodologyNote: 'Average percentile models score on standardized Capture The Flag cyber challenges.', lastUpdated: '2026-01-01', updateCadence: 'Bi-annually', whyItMatters: 'AI\'s capacity to compromise critical human infrastructure autonomously.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 100,
    indexWeight: 0.8,
  },
  {
    id: 'sub-coord-watermark', category: 'Coordination', name: 'Provenance / Watermark Adoption', shortLabel: 'Output Tracing', currentValue: 15, unit: '%', displayValue: '~15% (Fragmented)', trendDirection: 'up', trendMagnitude: 'Slow Growth', confidenceClass: 'Estimated', sourceQuality: 'Low', sourceName: 'C2PA Tracker', sourceUrl: '#', methodologyNote: 'Percentage of major platforms enforcing verifiable cryptographic watermarks on synthetic outputs.', lastUpdated: '2026-02-01', updateCadence: 'Quarterly', whyItMatters: 'Protects the epistemic integrity of human reality.', visualType: 'HaloRing', isHero: false, isModeled: true, isSelfReported: false,
    annualVelocityPct: 15,
    indexWeight: 0.5,
  },
  {
    id: 'sub-coord-intl', category: 'Coordination', name: 'International AI Coordination', shortLabel: 'Global Frameworks', currentValue: 3, unit: 'Agreements', displayValue: 'OECD, UN, AU', trendDirection: 'up', trendMagnitude: 'Steady', confidenceClass: 'Categorical', sourceQuality: 'High', sourceName: 'Global AI Observatory', sourceUrl: '#', methodologyNote: 'Number of binding or heavily adopted unipolar/multipolar international treaties on frontier AI scaling.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'Humanity\'s ability to coordinate a safe transition.', visualType: 'Timeline', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 10,
    indexWeight: 0.4,
  },
  {
    id: 'sub-coord-alignment-funding', category: 'Coordination', name: 'Alignment vs Capabilities Funding', shortLabel: 'Safety Focus', currentValue: 2.4, unit: '%', displayValue: '2.4% ratio', trendDirection: 'down', trendMagnitude: 'Neglected', confidenceClass: 'Estimated', sourceQuality: 'Medium', sourceName: 'Institute for AI Policy', sourceUrl: '#', methodologyNote: 'Tracks private capital accelerating raw scale vs explicitly funding mechanical alignment and safety research.', lastUpdated: '2026-01-01', updateCadence: 'Annually', whyItMatters: 'The existential drag—if intelligence outpaces control by 50:1, outcomes are structurally hazardous.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 5,
    indexWeight: 1,
  },
  {
    id: 'sub-coord-open-share', category: 'Coordination', name: 'Share of Open Weights', shortLabel: 'Proliferation Risk', currentValue: 10, unit: '%', displayValue: '~10% Open', trendDirection: 'down', trendMagnitude: 'Shrinking', confidenceClass: 'Measured', sourceQuality: 'High', sourceName: 'Hugging Face / Epoch', sourceUrl: '#', methodologyNote: 'Percentage of frontier (GPT-4 class or higher) capabilities released as open-weights.', lastUpdated: '2026-03-01', updateCadence: 'Quarterly', whyItMatters: 'Security vs democratization tradeoff limit.', visualType: 'SplitRiver', isHero: false, isModeled: false, isSelfReported: false,
    annualVelocityPct: 60,
    indexWeight: 0.5,
  }
];
