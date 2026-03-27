-- Seed Script V2: Filtering & Rating Supported
-- Copy and paste this entirely into your Supabase SQL Editor.

ALTER TABLE forecasts
ADD COLUMN IF NOT EXISTS sector text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS enabling_technology text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS ai_importance_score integer DEFAULT 50,
ADD COLUMN IF NOT EXISTS user_importance_ratings jsonb DEFAULT '{}';

-- Safely clear previously seeded live forecasts to prevent duplicates
DELETE FROM forecasts WHERE status = 'live';

INSERT INTO forecasts (status, type, condition, question, resolution_criteria, options, sector, enabling_technology, ai_importance_score) VALUES

-- 1. Driverless ridehail and apartment parking
('live', 'bucketed_magnitude', 'fully driverless ridehail is approved for unrestricted commercial operation across Greater Phoenix by 2030', 'How much will average apartment parking ratios in new multifamily developments fall below the 2025 Phoenix baseline over the following 5 years?', NULL, '["less than 5%", "5–15%", "15–30%", "30%+"]'::jsonb, '{"Mobility", "Real Estate"}', '{"Autonomous Vehicles"}', 75),

-- 2. AI tutoring and achievement gaps
('live', 'bucketed_magnitude', 'AI-native tutoring becomes a standard weekly tool for at least 50% of public-school students in 5 or more U.S. states by 2030', 'How will the math achievement gap between top- and bottom-quartile school districts change over the following 5 years?', NULL, '["widens by 10%+", "changes by less than 10%", "narrows by 10–25%", "narrows by 25%+"]'::jsonb, '{"Education"}', '{"LLMs", "Generative AI"}', 85),

-- 3. Humanoid robots and warehouse labor economics
('live', 'bucketed_magnitude', 'humanoid robots are deployed at all-in operating cost below $8/hour in at least 3 major U.S. warehouse networks by 2031', 'How much will labor cost per unit shipped fall in those networks over the following 5 years?', NULL, '["less than 10%", "10–25%", "25–50%", "50%+"]'::jsonb, '{"Logistics", "Robotics"}', '{"Humanoid Robotics"}', 80),

-- 4. Consumer agents and branded-product margins
('live', 'bucketed_magnitude', 'personal shopping agents are built into at least 2 major mobile operating systems by 2030 and are used monthly by at least 100 million consumers globally', 'How will gross margins for leading consumer brands selling mostly commoditized products change over the following 5 years?', NULL, '["expand by more than 2 points", "change by less than 2 points", "compress by 2–8 points", "compress by more than 8 points"]'::jsonb, '{"Consumer", "E-Commerce"}', '{"AI Agents"}', 70),

-- 5. eVTOL commuting and exurban land values
('live', 'bucketed_magnitude', 'private-property eVTOL landings are legalized in Greater Miami by 2030 and commercial eVTOL commuting exceeds 5,000 paid passenger flights per month by 2032', 'How much will land values 20–50 miles from downtown outperform Miami-Dade overall over the following 5 years?', NULL, '["less than 5 points", "5–15 points", "15–30 points", "30+ points"]'::jsonb, '{"Mobility", "Real Estate"}', '{"eVTOL", "Batteries"}', 60),

-- 6. Autonomous labs and biotech cycle time
('live', 'bucketed_magnitude', 'autonomous laboratory systems are running closed-loop experiment cycles with under 10% human intervention in at least 20 venture-backed biotech labs by 2030', 'How much will average preclinical discovery cycle time fall in those labs over the following 5 years?', NULL, '["less than 10%", "10–30%", "30–60%", "60%+"]'::jsonb, '{"Bio", "Healthcare"}', '{"Lab Automation", "AI"}', 88),

-- 7. AR glasses and total screen-mediated attention
('live', 'bucketed_magnitude', 'lightweight AI-native AR glasses with all-day battery life and real-time multimodal assistance reach at least 50 million active users globally by 2031', 'How will total daily screen-mediated attention change among those users over the following 3 years relative to their 2028 baseline?', NULL, '["decreases by more than 20%", "changes by less than 20%", "increases by 20–50%", "increases by more than 50%"]'::jsonb, '{"Consumer Hardware"}', '{"AR/VR", "LLMs"}', 65),

-- 8. AI companions and loneliness
('live', 'bucketed_magnitude', 'emotionally intelligent AI companions are used weekly by at least 100 million people globally by 2030', 'How will self-reported loneliness change among regular users relative to matched non-users over the following 3 years?', NULL, '["loneliness is higher by 10%+", "changes by less than 10%", "loneliness is lower by 10–25%", "loneliness is lower by 25%+"]'::jsonb, '{"Consumer", "Health"}', '{"LLMs", "Audio Models"}', 72),

-- 9. Token spend relative to developer salary
('live', 'bucketed_magnitude', 'general-purpose software agents can autonomously complete end-to-end pull request workflows in production codebases at near-senior-human quality by 2030', 'What will average annual spend on model/API tokens per software developer at AI-native seed-stage startups be in 2030, relative to that developer’s annual cash compensation?', NULL, '["less than 25%", "25–100%", "100–1000%", "more than 1000%"]'::jsonb, '{"Software Development"}', '{"AI Agents", "LLMs"}', 85),

-- 10. Household robots and time reallocation
('live', 'bucketed_magnitude', 'general-purpose household robots capable of cleaning, laundry, and basic kitchen assistance are adopted by at least 10 million households in advanced economies by 2032', 'How much will weekly household labor time fall for those households over the following 3 years?', NULL, '["less than 10%", "10–25%", "25–50%", "50%+"]'::jsonb, '{"Consumer", "Robotics"}', '{"Humanoid Robotics", "VLM"}', 78),

-- 11. Autonomous freight and startup formation
('live', 'bucketed_magnitude', 'autonomous trucks are allowed to operate without onboard safety drivers on major U.S. freight corridors by 2030', 'How much will the number of venture-backed startups building logistics software, orchestration, security, maintenance, and roadside services for autonomous freight increase over the following 5 years relative to the 2025 baseline?', NULL, '["less than 25%", "25–100%", "100–300%", "300%+"]'::jsonb, '{"Logistics", "Mobility"}', '{"Autonomous Vehicles"}', 60),

-- 12. AI video generation and ad-creative economics
('live', 'bucketed_magnitude', 'text-to-video systems can generate production-ready ad creatives that match top-quartile human agency output for at least 50% of digital campaigns by 2030', 'How much will average creative production cost per campaign fall over the following 3 years?', NULL, '["less than 15%", "15–35%", "35–60%", "60%+"]'::jsonb, '{"Media", "Advertising"}', '{"Generative Video"}', 68),

-- Bitcoin / Satoshi
('live', 'year_or_never', NULL, 'In what year will Satoshi Nakamoto be credibly proven?', NULL, NULL, '{"Crypto"}', '{"Cryptography"}', 20),
('live', 'multiple_choice', NULL, 'Who will prove to be Satoshi Nakamoto?', 'consensus of credible reporting and/or a transfer from Satoshi’s original wallet', '["Hal Finney", "Nick Szabo", "Adam Back", "Len Sassaman", "Peter Todd", "A group / multiple people", "No one / remains unproven", "Other (optional write-in)"]'::jsonb, '{"Crypto"}', '{"Cryptography"}', 20),

-- Longevity
('live', 'year_or_never', NULL, 'What year will the first human celebrate their 130th birthday?', NULL, NULL, '{"Bio", "Health"}', '{"Anti-Aging", "Biotech"}', 80),
('live', 'year_or_never', NULL, 'What year will the first human celebrate their 150th birthday?', NULL, NULL, '{"Bio", "Health"}', '{"Anti-Aging", "Biotech"}', 85),

-- AGI / ASI
('live', 'cause_mechanism', 'ASI is not developed by 2050', 'what will be the primary reason?', NULL, '["Capabilities plateaued below ASI", "Compute / energy / hardware bottlenecks", "Data bottlenecks", "Economics / incentives were insufficient", "Regulation / governance / geopolitical restrictions slowed development", "Alignment / safety concerns forced a sustained slowdown", "Civilizational disruption, war, or collapse prevented progress", "ASI effectively arrived, but not in a way people agreed to call ''ASI''", "Other (optional write-in)"]'::jsonb, '{"Artificial Intelligence"}', '{"AGI", "Compute"}', 98),
('live', 'cause_mechanism', 'alignment gets solved', 'What will be the primary mechanism that made it work?', NULL, '["Mechanistic interpretability / transparency", "Scalable oversight using stronger AI systems", "Adversarial training / robustness / red-teaming", "Constitutional / preference-learning / reward-modeling methods", "Formal verification / theorem-proving / provable guarantees", "Limiting agent architectures and keeping systems bounded / tool-like", "A broader systems-engineering stack rather than any single breakthrough", "Other (optional write-in)"]'::jsonb, '{"Artificial Intelligence", "Safety"}', '{"Alignment", "Interpretability"}', 95),

-- Robotics
('live', 'year_or_never', NULL, 'In what year will the first company sell 100,000 humanoid robots that can cook, clean, and perform basic household chores?', NULL, NULL, '{"Robotics", "Consumer"}', '{"Humanoid Robotics"}', 80),
('live', 'company_actor', NULL, 'What company will be the first to sell 100,000 humanoid robots that can cook, clean, and perform basic household chores?', NULL, '["Figure", "1X", "Tesla", "Apptronik", "Unitree", "Sanctuary AI", "AgiBot", "UBTech", "Other (optional write-in)"]'::jsonb, '{"Robotics", "Consumer"}', '{"Humanoid Robotics"}', 75),
('live', 'year_or_never', NULL, 'In what year will there be 1 billion humanoid robots on Earth?', NULL, NULL, '{"Robotics", "Manufacturing"}', '{"Humanoid Robotics"}', 85),
('live', 'company_actor', NULL, 'What company will have the largest market share when there are 1 billion humanoid robots on Earth?', NULL, '["Tesla", "Figure", "1X", "Apptronik", "Unitree", "AgiBot", "UBTech", "Xiaomi", "Other (optional write-in)"]'::jsonb, '{"Robotics", "Manufacturing"}', '{"Humanoid Robotics"}', 75),
('live', 'year_or_never', NULL, 'In what year will there be 10 billion humanoid robots in the solar system?', NULL, NULL, '{"Robotics", "Space"}', '{"Humanoid Robotics", "Space Tech"}', 60),

-- Energy
('live', 'year_or_never', NULL, 'In what year will the first company provide economically viable net-positive commercial nuclear fusion power to the grid?', NULL, NULL, '{"Energy"}', '{"Fusion"}', 90),
('live', 'company_actor', NULL, 'What company will be the first to provide economically viable net-positive commercial nuclear fusion power to the grid?', NULL, '["Helion", "Commonwealth Fusion Systems", "TAE Technologies", "General Fusion", "Tokamak Energy", "Zap Energy", "Type One Energy", "Other (optional write-in)"]'::jsonb, '{"Energy"}', '{"Fusion"}', 85),

-- AR Glasses
('live', 'year_or_never', NULL, 'In what year will the first company sell 100,000,000 augmented reality glasses?', NULL, NULL, '{"Consumer Hardware"}', '{"AR/VR"}', 60),
('live', 'company_actor', NULL, 'What company will be the first to sell 100,000,000 augmented reality glasses?', NULL, '["Meta / EssilorLuxottica", "Apple", "Google / Warby Parker", "Samsung / Android XR partner ecosystem", "Snap", "XREAL", "Rokid", "VITURE", "Other (optional write-in)"]'::jsonb, '{"Consumer Hardware"}', '{"AR/VR"}', 55),

-- Terrorism
('live', 'binary', NULL, 'Will there be a terrorist attack materially aided by AI that kills 1,000+ people by 2030?', NULL, NULL, '{"Security", "Defense"}', '{"Biotech", "Cybersecurity", "Drones"}', 85),
('live', 'cause_mechanism', 'there is a terrorist attack materially aided by AI that kills 1,000+ people by 2030', 'What will be the primary threat vector used?', NULL, '["Engineered pathogen / bioterror", "Cyberattack causing physical infrastructure failure", "Autonomous drones / robotic weapons", "Chemical weapon", "Radiological / nuclear attack", "Coordinated conventional mass-casualty attack significantly enabled by AI", "AI-enabled misinformation / manipulation leading directly to mass casualties", "Other (optional write-in)"]'::jsonb, '{"Security", "Defense"}', '{"Biotech", "Cybersecurity", "Drones"}', 80),
('live', 'binary', NULL, 'Will there be a terrorist attack materially aided by AI that kills 1,000,000+ people by 2040?', NULL, NULL, '{"Security", "Defense"}', '{"Biotech", "Cybersecurity", "Drones"}', 90),
('live', 'cause_mechanism', 'there is a terrorist attack materially aided by AI that kills 1,000,000+ people by 2040', 'What will be the primary threat vector used?', NULL, '["Engineered pathogen / bioterror", "Cyberattack causing physical infrastructure failure", "Autonomous drones / robotic weapons", "Chemical weapon", "Radiological / nuclear attack", "Coordinated conventional mass-casualty attack significantly enabled by AI", "AI-enabled misinformation / manipulation leading directly to mass casualties", "Other (optional write-in)"]'::jsonb, '{"Security", "Defense"}', '{"Biotech", "Cybersecurity", "Drones"}', 90),

-- Bio-defense
('live', 'year_or_never', NULL, 'In what year will AI-native bio-defense systems be able to identify, characterize, and generate a viable countermeasure candidate for a novel pandemic-capable pathogen within 14 days of first public detection?', NULL, NULL, '{"Bio", "Security"}', '{"Biotech", "AI"}', 85),
('live', 'cause_mechanism', NULL, 'What will be the primary mechanism that makes this 14-day bio-defense timeline possible?', NULL, '["Foundation-model-driven protein / drug / vaccine design", "Automated wet labs and closed-loop experimentation", "Better pathogen surveillance and early detection", "Compute / simulation breakthroughs", "Regulatory / manufacturing acceleration", "A combined stack rather than any single breakthrough", "Other (optional write-in)"]'::jsonb, '{"Bio", "Security"}', '{"Biotech", "AI"}', 80),

-- Drones
('live', 'year_or_never', NULL, 'In what year will autonomous defensive drone systems become standard protection for critical infrastructure in at least 10 major countries?', NULL, NULL, '{"Defense", "Security"}', '{"Drones", "AI"}', 75),
('live', 'cause_mechanism', NULL, 'What will be the primary adoption driver for autonomous defensive drone systems at infrastructure sites?', NULL, '["Drone and missile threat escalation", "Falling hardware costs", "Better on-device AI / autonomy", "Battlefield proof in interstate conflict", "Domestic terrorism / infrastructure sabotage risk", "Government subsidy / procurement push", "Other (optional write-in)"]'::jsonb, '{"Defense", "Security"}', '{"Drones", "AI"}', 70),

-- Media Verification
('live', 'year_or_never', NULL, 'In what year will cryptographic provenance and authenticity verification become a default standard for most high-trust digital media consumed online?', NULL, NULL, '{"Media", "Security"}', '{"Cryptography", "Blockchain"}', 65),
('live', 'cause_mechanism', NULL, 'What will be the primary adoption driver for digital media verification?', NULL, '["Election-related synthetic media crises", "Platform regulation", "OS / browser-level support", "Camera / device-level signing by default", "Enterprise / news-industry standards", "Consumer demand for trust and verification", "Other (optional write-in)"]'::jsonb, '{"Media", "Security"}', '{"Cryptography", "Blockchain"}', 60),

-- Microgrids
('live', 'year_or_never', NULL, 'In what year will local microgrids plus home or building-scale storage provide majority-backup resilience for more than 100 million people globally?', NULL, NULL, '{"Energy"}', '{"Solar", "Batteries"}', 75),
('live', 'cause_mechanism', NULL, 'What will be the primary driver of adoption for local microgrid resilience?', NULL, '["Grid instability / climate shocks", "Falling storage costs", "Solar + storage economics", "Geopolitical / war-related resilience demand", "Policy / subsidy support", "AI-optimized energy management", "Other (optional write-in)"]'::jsonb, '{"Energy"}', '{"Solar", "Batteries"}', 70);
