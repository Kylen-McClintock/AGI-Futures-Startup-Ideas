import { createClient } from "@/utils/supabase/server";
import { getForecastForSlug } from "@/data/forecasts";
import { calculateExpectedValuation, calculateTimeToUnicorn } from "@/utils/forecastMath";
import HomeClient, { ProjectData } from "./page-client";

import murmuration_hero from "./murmuration/assets/hero_strategy_dashboard.png";
import attune_hero from "./attune/assets/attune_hero_vista.png";
import porchfront_hero from "./porchfront/assets/hero_garage_cafe.png";
import homequote_hero from "./homequote/assets/hq_hero_scan_1772949695780.png";
import aura_hero from "./aura/assets/aura_hero_vista.png";
import afl_hero from "./AIFounderLab/assets/afl_hero_campus.png";
import deepguide_hero from "./deepguide/assets/deepguide_hero.png";
import msl_hero from "./main-street-legacy/assets/hero.png";
import helm_hero from "./helm/assets/helm_hero.png";
import agentable_hero from "./agentable/assets/hero.png";
import avatarlab_hero from "./avatarlab/assets/avatarlab_hero.png";
import proofrun_hero from "./proofrun/assets/proofrun_hero.png";
import handraise_hero from "./handraise/assets/handraise_hero.png";
import hearth_hero from "./hearth/assets/hero.png";
import biophilia_ark_hero from "./biowalls/assets/cloud_forest.png";
import sellcraft_hero from "./sellcraft/assets/sellcraft_hero.png";
import afterlight_hero from "./afterlight/assets/afterlight_hero_1773354206295.png";
import civicpath_hero from "./civicpath/assets/hero.png";
import biomex_hero from "./biomex/assets/hero_vista.png";
import helioterra_hero from "./helioterra/assets/hero.png";
import easy_exit_hero from "./easy-exit/assets/easy_exit_hero_1773609319540.png";
import proxypilot_hero from "./proxypilot/assets/proxypilot_hero_1773874900098.png";
import bioark_hero from "./bioark/assets/hero.png";
import ownyourreplacement_hero from "./ownyourreplacement/assets/hero.png";
import thoughtline_hero from "./thoughtline/assets/thoughtline_hero.png";
import signal_house_hero from "./signal-house/assets/hero_v3.png";
import skyhold_hero from "./skyhold/assets/hero.webp";
import wild_return_hero from "./wild-return/assets/hero.png";
import waypoint_hero from "./waypoint/assets/waypoint_hero.png";
import housegraph_hero from "./housegraph/assets/housegraph_hero.png";

export default async function Home() {
    const supabase = await createClient();

    // Fetch scores and creation dates for all projects
    const { data: dbProjects } = await supabase
        .from('projects')
        .select('slug, created_at, moat_score, difficulty_score, civilizational_impact_score, civilizational_impact_ratings, project_tags(*)');

    // Create a map for quick access
    const projectDataMap = new Map(dbProjects?.map(p => [p.slug, p]) || []);

    const fallbackData: Record<string, { moat: number, difficulty: number, impact: number, created_at: string, tags?: any, civilizational_impact_ratings?: any }> = {
        "murmuration": { moat: 85, difficulty: 70, impact: 92, created_at: "2024-03-09T10:00:00Z", tags: { sector: ['AI', 'Governance', 'Security', 'Existential Risk Mitigation'], bottleneck: ['Coordination', 'Regulatory Friction', 'Trust'], customer: ['Enterprises', 'Governments'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Simulations', 'Knowledge Graphs'], readiness: ['Regulatory Unlocked'], founder_fit: ['Policy Entrepreneur', 'Operator-Led'], outcomes: ['Resilience', 'Better Governance', 'Existential Risk Reduction', 'Differentially Defensive'] }, civilizational_impact_ratings: {'Resilience':{'ai_scored':95},'Better Governance':{'ai_scored':95},'Existential Risk Reduction':{'ai_scored':98},'Differentially Defensive':{'ai_scored':95}} },
        "attune": { moat: 75, difficulty: 82, impact: 88, created_at: "2024-03-08T10:00:00Z", tags: { sector: ['Relationships', 'Community', 'AI'], bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'], customer: ['Couples', 'Consumers'], product_type: ['Consumer App', 'Personalized AI'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Societal Cohesion', 'Social Trust', 'Community Renewal'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':95},'Societal Cohesion':{'ai_scored':90},'Social Trust':{'ai_scored':90},'Community Renewal':{'ai_scored':88}} },
        "porchfront": { moat: 88, difficulty: 75, impact: 82, created_at: "2024-03-07T10:00:00Z", tags: { sector: ['Community', 'Cities', 'Relationships'], bottleneck: ['Loneliness', 'Trust', 'Coordination'], customer: ['Consumers', 'Families'], product_type: ['Marketplace', 'Coordination Infrastructure'], enabling_technology: ['Social Graph', 'Large Language Models'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Social Trust', 'Societal Cohesion', 'Community Renewal'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':95},'Social Trust':{'ai_scored':95},'Societal Cohesion':{'ai_scored':90},'Community Renewal':{'ai_scored':95}} },
        "homequote": { moat: 79, difficulty: 67, impact: 75, created_at: "2024-03-06T10:00:00Z", tags: { sector: ['AI', 'Housing'], bottleneck: ['Trust', 'Coordination'], customer: ['Consumers', 'Enterprises'], product_type: ['Marketplace', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Vision AI', 'Voice AI', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Resilience', 'Social Trust', 'Human Flourishing', 'Scientific Acceleration', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':85},'Resilience':{'ai_scored':80},'Social Trust':{'ai_scored':85},'Human Flourishing':{'ai_scored':90},'Scientific Acceleration':{'ai_scored':75},'Societal Cohesion':{'ai_scored':85}} },
        "aura": { moat: 72, difficulty: 81, impact: 85, created_at: "2024-03-05T10:00:00Z", tags: { sector: ['AI', 'Education', 'Security', 'Existential Risk Mitigation'], bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'], customer: ['Consumers', 'Startups'], product_type: ['Platform', 'Marketplace'], enabling_technology: ['Large Language Models', 'Voice AI', 'Vision AI', 'Spatial Computing', 'Augmented Reality'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Social Trust', 'Ender Prevention', 'Existential Risk Reduction'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':90},'Social Trust':{'ai_scored':85},'Ender Prevention':{'ai_scored':95},'Existential Risk Reduction':{'ai_scored':95}} },
        "hearth": { moat: 78, difficulty: 73, impact: 76, created_at: "2024-03-05T10:00:00Z", tags: { sector: ['Real Estate', 'Community', 'Software'], bottleneck: ['Coordination', 'Financing', 'Trust'], customer: ['Founders', 'Families', 'Digital Nomads'], product_type: ['Platform', 'Marketplace', 'Services'], enabling_technology: ['Large Language Models', 'Knowledge Graphs', 'Autonomous Agents'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Capital Intensive'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Community Renewal'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':68},'Human Flourishing':{'ai_scored':84},'Social Trust':{'ai_scored':79},'Community Renewal':{'ai_scored':88}} },
        "AIFounderLab": { moat: 78, difficulty: 61, impact: 80, created_at: "2024-03-04T10:00:00Z", tags: { sector: ['AI', 'Education', 'Community', 'Media'], bottleneck: ['Talent Matching', 'Trust', 'Cultural Resistance'], customer: ['Founders', 'Consumers'], product_type: ['Institution', 'Platform'], outcomes: ['Abundance', 'Societal Cohesion', 'Scientific Acceleration'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':85},'Societal Cohesion':{'ai_scored':70},'Scientific Acceleration':{'ai_scored':80}} },
        "deepguide": { moat: 78, difficulty: 72, impact: 83, created_at: "2024-03-03T10:00:00Z", tags: { sector: ['AI', 'Healthcare', 'Psychedelics', 'Science'], bottleneck: ['Trust', 'Regulatory Friction', 'Scientific Slowdown'], customer: ['Caregivers', 'Scientists'], product_type: ['SaaS', 'Agent'], enabling_technology: ['Large Language Models', 'Voice AI', 'Knowledge Graphs', 'Autonomous Agents'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Scientific Acceleration', 'Social Trust', 'Resilience'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':82},'Scientific Acceleration':{'ai_scored':74},'Social Trust':{'ai_scored':51},'Resilience':{'ai_scored':46}} },
        "main-street-legacy": { moat: 78, difficulty: 74, impact: 81, created_at: "2024-03-02T10:00:00Z", tags: { sector: ['AI', 'Finance', 'Education'], bottleneck: ['Trust', 'Coordination', 'Talent Matching'], customer: ['Founders', 'Enterprises'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Knowledge Graphs'], readiness: ['Active Incumbents'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Community Renewal', 'Resilience'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':76},'Human Flourishing':{'ai_scored':58},'Community Renewal':{'ai_scored':68},'Resilience':{'ai_scored':54}} },
        "helm": { moat: 78, difficulty: 71, impact: 68, created_at: "2024-03-01T10:00:00Z", tags: { sector: ['AI', 'Community', 'Media'], bottleneck: ['Coordination', 'Trust', 'Talent Matching'], customer: ['Founders', 'Startups'], product_type: ['Platform', 'Agent'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Freedom'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':81},'Human Flourishing':{'ai_scored':66},'Social Trust':{'ai_scored':54},'Freedom':{'ai_scored':71}} },
        "agentable": { moat: 78, difficulty: 71, impact: 74, created_at: "2024-02-28T10:00:00Z", tags: { sector: ['AI', 'Security'], bottleneck: ['Trust', 'Coordination'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Vision AI'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Venture-Scale'], outcomes: ['Abundance', 'Social Trust', 'Alignment', 'Differentially Defensive'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':61},'Social Trust':{'ai_scored':58},'Alignment':{'ai_scored':49},'Differentially Defensive':{'ai_scored':47}} },
        "avatarlab": { moat: 92, difficulty: 89, impact: 78, created_at: "2024-03-10T10:00:00Z", tags: { sector: ['AI', 'Biotech', 'Healthcare', 'Longevity'], bottleneck: ['Aging', 'Disease', 'Scientific Slowdown'], customer: ['Consumers', 'Doctors'], product_type: ['Platform', 'Personalized AI'], enabling_technology: ['Large Language Models', 'Wearables', 'Knowledge Graphs', 'Synthetic Biology', 'Simulations'], readiness: ['Early Research'], founder_fit: ['Technical Founder', 'Capital Intensive'], outcomes: ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience'] }, civilizational_impact_ratings: {'Longevity':{'ai_scored':86},'Human Flourishing':{'ai_scored':73},'Scientific Acceleration':{'ai_scored':84},'Resilience':{'ai_scored':58}} },
        "proofrun": { moat: 78, difficulty: 67, impact: 64, created_at: "2024-03-11T10:00:00Z", tags: { sector: ['AI', 'Education'], bottleneck: ['Talent Matching', 'Trust', 'Coordination'], customer: ['Startups', 'Enterprises'], product_type: ['Platform', 'Marketplace'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':68},'Human Flourishing':{'ai_scored':74},'Social Trust':{'ai_scored':54},'Societal Cohesion':{'ai_scored':58}} },
        "handraise": { moat: 76, difficulty: 63, impact: 65, created_at: "2024-03-12T10:00:00Z", tags: { sector: ['AI', 'Social Media', 'Community'], bottleneck: ['Trust', 'Coordination', 'Talent Matching'], customer: ['Founders', 'Startups'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Social Graph', 'Knowledge Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Social Trust', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':64},'Social Trust':{'ai_scored':82},'Societal Cohesion':{'ai_scored':58}} },
        "biowalls": { moat: 84, difficulty: 74, impact: 78, created_at: "2024-03-13T10:00:00Z", tags: { sector: ['Housing', 'Cities', 'Community', 'Science'], bottleneck: ['Meaning Crisis', 'Social Fragmentation', 'Cultural Resistance'], customer: ['Enterprises', 'Consumers'], product_type: ['Hardware', 'Platform'], enabling_technology: ['Large Language Models', 'Vision AI', 'Augmented Reality', 'Simulations', 'Knowledge Graphs'], readiness: ['Hardware Prototype'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Biodiversity', 'Community Renewal', 'Air Quality', 'Climate'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':86},'Biodiversity':{'ai_scored':91},'Community Renewal':{'ai_scored':72},'Air Quality':{'ai_scored':41},'Climate':{'ai_scored':82}} },
        "sellcraft": { moat: 74, difficulty: 68, impact: 47, created_at: "2026-03-11T10:00:00Z", tags: { sector: ['AI', 'Education', 'Media'], bottleneck: ['Trust', 'Talent Matching'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'SaaS'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Spatial Computing', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':65},'Human Flourishing':{'ai_scored':70},'Social Trust':{'ai_scored':55}} },
        "afterlight": { moat: 72, difficulty: 44, impact: 67, created_at: "2026-03-12T10:00:00Z", tags: { sector: ['Deathcare', 'Relationships', 'Healthcare', 'Community'], bottleneck: ['Trust', 'Meaning Crisis', 'Social Fragmentation'], customer: ['Families', 'Caregivers'], product_type: ['Consumer App', 'Personalized AI'], enabling_technology: ['Large Language Models', 'Voice AI', 'Vision AI', 'Knowledge Graphs', 'Social Graph'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Social Trust', 'Community Renewal', 'Societal Cohesion'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':83},'Social Trust':{'ai_scored':74},'Community Renewal':{'ai_scored':61},'Societal Cohesion':{'ai_scored':52}} },
        "civicpath": { moat: 80, difficulty: 87, impact: 58, created_at: "2026-03-13T10:00:00Z", tags: { sector: ['Governance', 'Democracy', 'AI', 'Security'], bottleneck: ['Trust', 'Regulatory Friction', 'Social Fragmentation'], customer: ['Governments', 'Cities'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Simulations'], readiness: ['Build Now'], founder_fit: ['Policy Entrepreneur', 'Operator-Led'], outcomes: ['Better Governance', 'Social Trust', 'Societal Cohesion', 'Freedom'] }, civilizational_impact_ratings: {'Better Governance':{'ai_scored':78},'Social Trust':{'ai_scored':61},'Societal Cohesion':{'ai_scored':52},'Freedom':{'ai_scored':39}} },
        "biomex": { moat: 85, difficulty: 92, impact: 69, created_at: "2026-03-14T12:00:00Z", tags: { sector: ['Biotech', 'Healthcare', 'Longevity', 'AI'], bottleneck: ['Aging', 'Disease', 'Regulatory Friction'], customer: ['Doctors', 'Enterprises'], product_type: ['Platform', 'Therapeutic'], enabling_technology: ['Knowledge Graphs', 'Wearables', 'Synthetic Biology', 'Large Language Models'], readiness: ['Build Now'], founder_fit: ['Bio Founder', 'Venture-Scale'], outcomes: ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience'] }, civilizational_impact_ratings: {'Longevity':{'ai_scored':80},'Human Flourishing':{'ai_scored':66},'Scientific Acceleration':{'ai_scored':76},'Resilience':{'ai_scored':54}} },
        "helioterra": { moat: 79, difficulty: 84, impact: 80, created_at: "2026-03-15T01:48:18Z", tags: { sector: ['Energy', 'Climate', 'Food'], bottleneck: ['Regulatory Friction', 'Coordination', 'Cultural Resistance'], customer: ['Enterprises', 'Governments'], product_type: ['Platform', 'Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Simulations'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Capital Intensive'], outcomes: ['Abundance', 'Climate', 'Resilience', 'Human Flourishing'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':87},'Climate':{'ai_scored':82},'Resilience':{'ai_scored':79},'Human Flourishing':{'ai_scored':70}} },
        "easy-exit": { moat: 64, difficulty: 63, impact: 46, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Finance', 'Governance'], bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'], customer: ['Enterprises', 'Governments'], product_type: ['Infrastructure', 'Coordination Infrastructure'], enabling_technology: ['Autonomous Agents', 'Large Language Models'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Policy Entrepreneur'], outcomes: ['Social Trust', 'Freedom', 'Better Governance', 'Differentially Defensive'] }, civilizational_impact_ratings: {'Social Trust':{'ai_scored':68},'Freedom':{'ai_scored':58},'Better Governance':{'ai_scored':41},'Differentially Defensive':{'ai_scored':37}} },
        "proxypilot": { moat: 81, difficulty: 69, impact: 72, created_at: new Date().toISOString(), tags: { sector: ['Governance', 'Finance', 'AI'], bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'SaaS', 'Agent'], enabling_technology: ['Large Language Models', 'Autonomous Agents'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Policy Entrepreneur'], outcomes: ['Better Governance', 'Alignment', 'Societal Cohesion', 'Social Trust'] }, civilizational_impact_ratings: {'Better Governance':{'ai_scored':88},'Alignment':{'ai_scored':81},'Societal Cohesion':{'ai_scored':75},'Social Trust':{'ai_scored':68}} },
        "bioark": { moat: 74, difficulty: 86, impact: 85, created_at: new Date().toISOString(), tags: { sector: ['Biotech', 'Climate', 'Finance', 'Science'], bottleneck: ['Trust', 'Coordination', 'Visibility'], customer: ['Enterprises', 'Governments'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Vision AI', 'Knowledge Graphs', 'Simulations'], readiness: ['Requires Coordination Infrastructure'], founder_fit: ['Bio Founder', 'Policy Entrepreneur'], outcomes: ['Biodiversity', 'Resilience', 'Social Trust', 'Scientific Acceleration'] }, civilizational_impact_ratings: {'Biodiversity':{'ai_scored':96},'Resilience':{'ai_scored':80},'Social Trust':{'ai_scored':63},'Scientific Acceleration':{'ai_scored':58}} },
        "ownyourreplacement": { moat: 86, difficulty: 84, impact: 70, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Robotics', 'Finance', 'Governance'], bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'], customer: ['Enterprises', 'Startups'], product_type: ['Marketplace', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Vision AI', 'Voice AI', 'Blockchain', 'Tokenized Assets'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Freedom', 'Social Trust', 'Decentralization'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':77},'Freedom':{'ai_scored':73},'Social Trust':{'ai_scored':58},'Decentralization':{'ai_scored':70}} },
        "thoughtline": { moat: 84, difficulty: 92, impact: 68, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Healthcare', 'Science'], bottleneck: ['Trust', 'Disease', 'Meaning Crisis'], customer: ['Consumers', 'Doctors'], product_type: ['Personalized AI', 'Hardware'], enabling_technology: ['Large Language Models', 'Voice AI', 'Wearables', 'Augmented Reality', 'Autonomous Agents'], readiness: ['Build Soon'], founder_fit: ['Technical Founder', 'Capital Intensive'], outcomes: ['Human Flourishing', 'Freedom', 'Social Trust', 'Alignment'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':88},'Freedom':{'ai_scored':79},'Social Trust':{'ai_scored':41},'Alignment':{'ai_scored':64}} },
        "signal-house": { moat: 74, difficulty: 49, impact: 60, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Education', 'Community', 'Social Media'], bottleneck: ['Loneliness', 'Talent Matching', 'Social Fragmentation'], customer: ['Founders', 'Students'], product_type: ['Platform', 'Consumer App'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Social Graph', 'Spatial Computing'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Human Flourishing', 'Community Renewal', 'Social Trust', 'Abundance'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':70},'Community Renewal':{'ai_scored':68},'Social Trust':{'ai_scored':53},'Abundance':{'ai_scored':41}} },
        "skyhold": { moat: 68, difficulty: 78, impact: 57, created_at: new Date().toISOString(), tags: { sector: ['Housing', 'Transportation', 'Community', 'Cities'], bottleneck: ['Housing Shortage', 'Regulatory Friction', 'Coordination'], customer: ['Founders', 'Families'], product_type: ['Infrastructure', 'Community'], enabling_technology: ['Autonomous Agents', 'Simulations', 'Robotics', 'Charter Cities'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Capital Intensive'], outcomes: ['Resilience', 'Human Flourishing', 'Community Renewal', 'Abundance'] }, civilizational_impact_ratings: {'Resilience':{'ai_scored':72},'Human Flourishing':{'ai_scored':61},'Community Renewal':{'ai_scored':66},'Abundance':{'ai_scored':30}} },
        "wild-return": { moat: 67, difficulty: 81, impact: 69, created_at: new Date().toISOString(), tags: { sector: ['Deathcare', 'Healthcare', 'Community', 'Psychedelics'], bottleneck: ['Meaning Crisis', 'Trust', 'Regulatory Friction'], customer: ['Families', 'Caregivers'], product_type: ['Institution', 'Community'], enabling_technology: ['Knowledge Graphs', 'Large Language Models'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Capital Intensive'], outcomes: ['Human Flourishing', 'Community Renewal', 'Biodiversity', 'Climate'] }, civilizational_impact_ratings: {'Human Flourishing':{'ai_scored':82},'Community Renewal':{'ai_scored':74},'Biodiversity':{'ai_scored':52},'Climate':{'ai_scored':29}} },
        "waypoint": { moat: 91, difficulty: 78, impact: 87, created_at: new Date().toISOString(), tags: { sector: ['AI', 'Water', 'Climate', 'Finance'], bottleneck: ['Coordination', 'Trust', 'Energy Scarcity'], customer: ['Governments', 'Enterprises'], product_type: ['Platform', 'Coordination Infrastructure'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Vision AI', 'Augmented Reality'], readiness: ['Build Now'], founder_fit: ['Operator-Led', 'Venture-Scale'], outcomes: ['Abundance', 'Resilience', 'Human Flourishing', 'Climate'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':88},'Resilience':{'ai_scored':91},'Human Flourishing':{'ai_scored':89},'Climate':{'ai_scored':74}} },
        "housegraph": { moat: 84, difficulty: 81, impact: 44, created_at: "2026-04-13T12:37:11-06:00", tags: { sector: ['AI', 'Housing', 'Finance'], bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'], customer: ['Consumers', 'Enterprises'], product_type: ['Platform', 'Agent'], enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Vision AI', 'Knowledge Graphs'], readiness: ['Build Now'], founder_fit: ['Technical Founder', 'Venture-Scale'], outcomes: ['Abundance', 'Human Flourishing', 'Social Trust'] }, civilizational_impact_ratings: {'Abundance':{'ai_scored':51},'Human Flourishing':{'ai_scored':42},'Social Trust':{'ai_scored':48}} }
    };

    // Helper to merge static data with DB data
    const createProject = (staticData: Omit<ProjectData, 'created_at' | 'moat_score' | 'difficulty_score' | 'civilizational_impact_score'>): ProjectData => {
        const dbData = projectDataMap.get(staticData.slug);
        const fallback = fallbackData[staticData.slug] || { moat: 0, difficulty: 0, impact: 0, created_at: new Date().toISOString(), tags: undefined };

        let moat = fallback.moat;
        if (dbData?.moat_score) moat = typeof dbData.moat_score === 'object' ? (dbData.moat_score as any).ai_scored : dbData.moat_score;

        let difficulty = fallback.difficulty;
        if (dbData?.difficulty_score) difficulty = typeof dbData.difficulty_score === 'object' ? (dbData.difficulty_score as any).ai_scored : dbData.difficulty_score;

        let impact = fallback.impact;
        if (dbData?.civilizational_impact_score) impact = typeof dbData.civilizational_impact_score === 'object' ? (dbData.civilizational_impact_score as any).ai_scored : dbData.civilizational_impact_score;

        // Use DB tags if available, otherwise safely use fallback tags from the static dictionary
        const dbTags = Array.isArray(dbData?.project_tags) ? dbData?.project_tags[0] : (dbData?.project_tags || undefined);
        const tags = dbTags || fallback.tags || undefined;

        const ratings = dbData?.civilizational_impact_ratings || fallback.civilizational_impact_ratings || {};

        const forecastData = getForecastForSlug(staticData.slug).forecast;
        const expectedValuation2030 = calculateExpectedValuation(forecastData.curves['2030-01-01'].probabilities);
        const expectedValuation2035 = calculateExpectedValuation(forecastData.curves['2035-01-01'].probabilities);
        const expectedValuation2040 = calculateExpectedValuation(forecastData.curves['2040-01-01'].probabilities);
        const timeToUnicorn = calculateTimeToUnicorn(forecastData);

        return {
            ...staticData,
            created_at: dbData?.created_at || fallback.created_at,
            moat_score: moat || fallback.moat,
            difficulty_score: difficulty || fallback.difficulty,
            civilizational_impact_score: impact || fallback.impact,
            civilizational_impact_ratings: ratings,
            tags: tags,
            expectedValuation2030,
            expectedValuation2035,
            expectedValuation2040,
            timeToUnicorn
        };
    };

    const projects: ProjectData[] = [
        createProject({
            slug: "waypoint",
            title: "Waypoint",
            scoreTitle: "AI Co-Pilot for Sustainable Development Deployment",
            description: "Turns proven infrastructure designs into financeable, field-executable projects, with capital linked to verified real-world outcomes.",
            image: waypoint_hero,
            href: "/waypoint",
            themeColor: "hover:border-cyan-500/50 text-cyan-400",
            hoverTextColor: "group-hover:text-cyan-400",
        }),
        createProject({
            slug: "skyhold",
            title: "Skyhold",
            scoreTitle: "Thesis-driven real estate for the autonomous age.",
            description: "Autonomous mobility allows us to acquire access-constrained land near major metros before it reprices, compounding the upside with premium resilience and shared luxury infrastructure.",
            image: skyhold_hero,
            href: "/skyhold",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "signal-house",
            title: "Signal House",
            scoreTitle: "Curated Focus Rooms",
            description: "An immersive deep work network where people work and study in beautifully curated virtual rooms, build habitual flow-state spaces, and find aligned collaborators.",
            image: signal_house_hero,
            href: "/signal-house",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "murmuration",
            title: "Murmuration Engine",
            scoreTitle: "AI Agent Swarm Intelligence",
            description: "An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments and compound learnings.",
            image: murmuration_hero,
            href: "/murmuration",
            themeColor: "hover:border-[var(--primary)]/50 text-[var(--primary)]",
            hoverTextColor: "group-hover:text-[var(--primary)]",
        }),
        createProject({
            slug: "attune",
            title: "Attune",
            scoreTitle: "An AI relationship coach",
            description: "An AI relationship coach to make her feel heard, seen, and supported, consistently.",
            image: attune_hero,
            href: "/attune",
            themeColor: "hover:border-rose-500/50 text-rose-400",
            hoverTextColor: "group-hover:text-rose-400",
        }),
        createProject({
            slug: "porchfront",
            title: "Porchfront",
            scoreTitle: "The open-garage culture OS",
            description: "Turn sidewalk-facing garages into community hubs and micro-businesses—with a live neighborhood map and simple tools that reward real-world connection.",
            image: porchfront_hero,
            href: "/porchfront",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "hearth",
            title: "Hearth",
            scoreTitle: "Friend-Native Housing",
            description: "Hearth makes it radically easier to start, join, and operate intentional living communities with people you actually want to share life with.",
            image: hearth_hero,
            href: "/hearth",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "homequote",
            title: "HomeQuote AI",
            scoreTitle: "The Scope-to-Quote Engine",
            description: "Turns a user-filmed walkthrough into a structured job object, an exact quote, and infinitely bookable offers from service providers.",
            image: homequote_hero,
            href: "/homequote",
            themeColor: "hover:border-blue-500/50 text-blue-400",
            hoverTextColor: "group-hover:text-blue-400",
        }),
        createProject({
            slug: "aura",
            title: "AURA",
            scoreTitle: "Marketplace for AR embedded AI Avatars",
            description: "An SDK and marketplace that lets any developer drop lifelike, spatially aware AI companions into AR apps.",
            image: aura_hero,
            href: "/aura",
            themeColor: "hover:border-fuchsia-500/50 text-fuchsia-400",
            hoverTextColor: "group-hover:text-fuchsia-400",
        }),
        createProject({
            slug: "AIFounderLab",
            title: "AI Founder Lab",
            scoreTitle: "The AI-native startup studio",
            description: "Turns ambitious builders into founder-grade operators by having them build, sell, and own real ventures.",
            image: afl_hero,
            href: "/AIFounderLab",
            themeColor: "hover:border-orange-500/50 text-orange-400",
            hoverTextColor: "group-hover:text-orange-400",
        }),
        createProject({
            slug: "deepguide",
            title: "DeepGuide",
            scoreTitle: "AI copilot for psychedelic therapy",
            description: "Keeps facilitators present, captures structured notes, recommends the right exercise at the right moment, and turns outcomes into evolving best practices.",
            image: deepguide_hero,
            href: "/deepguide",
            themeColor: "hover:border-purple-500/50 text-purple-400",
            hoverTextColor: "group-hover:text-purple-400",
        }),
        createProject({
            slug: "main-street-legacy",
            title: "Main Street Legacy",
            scoreTitle: "AI-Native SMB Succession Engine",
            description: "Equipping a new generation of founders with AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses into compounding cash-flow machines.",
            image: msl_hero,
            href: "/main-street-legacy",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "helm",
            title: "Helm",
            scoreTitle: "The playful office OS for solo founders",
            description: "A virtual office where AI teammates, collaborators, and freelancers help you run your company—driving toward increased automation over time.",
            image: helm_hero,
            href: "/helm",
            themeColor: "hover:border-indigo-500/50 text-indigo-400",
            hoverTextColor: "group-hover:text-indigo-400",
        }),
        createProject({
            slug: "agentable",
            title: "Agentable",
            scoreTitle: "Make software legible to people and AI",
            description: "Turns websites and apps into a machine-readable UI map, guides humans in-flow, and lets AI agents complete the same tasks.",
            image: agentable_hero,
            href: "/agentable",
            themeColor: "hover:border-cyan-500/50 text-cyan-400",
            hoverTextColor: "group-hover:text-cyan-400",
        }),
        createProject({
            slug: "avatarlab",
            title: "AvatarLab",
            scoreTitle: "Organoid Avatars for Safe Personalized Therapy Testing",
            description: "Bank your youngest cells. Grow mini-organs from your DNA. Test therapies on your own biology before you try them.",
            image: avatarlab_hero,
            href: "/avatarlab",
            themeColor: "hover:border-teal-500/50 text-teal-400",
            hoverTextColor: "group-hover:text-teal-400",
        }),
        createProject({
            slug: "proofrun",
            title: "ProofRun",
            scoreTitle: "Proof-of-Work Hiring",
            description: "ProofRun lets companies turn real backlog work into mini missions so candidates can prove their resourcefulness and AI-native skills.",
            image: proofrun_hero,
            href: "/proofrun",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "handraise",
            title: "Handraise",
            scoreTitle: "The open-graph braintrust",
            description: "Handraise gives founders the benefits of building in public without being spammy. It turns vague posts, scattered DMs, and awkward favors into structured asks, precise routing, and one clear next move.",
            image: handraise_hero,
            href: "/handraise",
            themeColor: "hover:border-indigo-500/50 text-indigo-400",
            hoverTextColor: "group-hover:text-indigo-400",
        }),
        createProject({
            slug: "biowalls",
            title: "BioWalls",
            scoreTitle: "Luxury Portals to the Natural World",
            description: "Builds high-design living walls that turn dead interiors into luxury portals to the natural world, with optional animals, active biofiltration, and revenue flowing back to the real biome each wall represents.",
            image: biophilia_ark_hero,
            href: "/biowalls",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "sellcraft",
            title: "SellCraft",
            scoreTitle: "The AI-native Sales Mastery platform",
            description: "An AI-native connected Sales Mastery platform where human sales becomes the edge in a commoditized world.",
            image: sellcraft_hero,
            href: "/sellcraft",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "afterlight",
            title: "Afterlight",
            scoreTitle: "End of Life Connection & Memory Preservation",
            description: "Afterlight helps maximize meaning in the last chapter of life, by prompting connection and the preservation of stories for the loved ones they leave behind.",
            image: afterlight_hero,
            href: "/afterlight",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "civicpath",
            title: "CivicPath",
            scoreTitle: "Immigration Dashboard",
            description: "A government and immigrant-facing dashboard that makes immigration earned, legible, and enforceable through live probabilistic outcome mapping.",
            image: civicpath_hero,
            href: "/civicpath",
            themeColor: "hover:border-blue-500/50 text-blue-400",
            hoverTextColor: "group-hover:text-blue-400",
        }),
        createProject({
            slug: "biomex",
            title: "BiomeX",
            scoreTitle: "Elite microbiome therapeutics",
            description: "BiomeX turns elite human microbiomes into a therapeutic platform, compounding toward precision-engineered microbial medicines.",
            image: biomex_hero,
            href: "/biomex",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "helioterra",
            title: "HelioTerra",
            scoreTitle: "Agrivoltaics optimization engine",
            description: "HelioTerra finances, designs, and operates agrivoltaic projects that let the same acre produce farm income and solar revenue, with zero upfront cost to the farmer.",
            image: helioterra_hero,
            href: "/helioterra",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "easy-exit",
            title: "Easy Exit Protocol",
            scoreTitle: "Revocation Protocol for Agentic Commerce",
            description: "If your agent can buy it, your agent must be able to revoke it. A free, open-source standard and API for machine-verifiable cancellation.",
            image: easy_exit_hero,
            href: "/easy-exit",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "proxypilot",
            title: "ProxyPilot",
            scoreTitle: "AI Native Proxy Voting",
            description: "Transforming the $3.5 trillion proxy voting deadlock into an opportunity for retail investors to easily delegate their voting power to trusted creators, subject-matter experts, and bespoke AI pods.",
            image: proxypilot_hero,
            href: "/proxypilot",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "bioark",
            title: "BioArk",
            scoreTitle: "Proof-of-Impact Funding for Species Recovery",
            description: "A trust and funding platform for conservation breeding that routes capital to effective programs and proves positive biological impact.",
            image: bioark_hero,
            href: "/bioark",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "ownyourreplacement",
            title: "Own Your Replacement",
            scoreTitle: "Automation Income Hedge",
            description: "A worker-first marketplace that prices human workflow data in real time and pays contributors in revenue-sharing tokens.",
            image: ownyourreplacement_hero,
            href: "/ownyourreplacement",
            themeColor: "hover:border-amber-500/50 text-amber-400",
            hoverTextColor: "group-hover:text-amber-400",
        }),
        createProject({
            slug: "thoughtline",
            title: "Thoughtline",
            scoreTitle: "Inner Voice AI & Interface",
            description: "A personalized AI and neural-interface platform that helps shape your inner voice toward clarity, courage, calm, and focus, then lets you communicate with that AI at the speed of thought.",
            image: thoughtline_hero,
            href: "/thoughtline",
            themeColor: "hover:border-violet-500/50 text-violet-400",
            hoverTextColor: "group-hover:text-violet-400",
        }),
        createProject({
            slug: "wild-return",
            title: "Wild Return",
            scoreTitle: "Nature-grounded end-of-life sanctuary",
            description: "A nature-grounded end-of-life sanctuary that combines natural burial, palliative care, and ritual design to make dying more peaceful and life more meaningful.",
            image: wild_return_hero,
            href: "/wild-return",
            themeColor: "hover:border-emerald-500/50 text-emerald-400",
            hoverTextColor: "group-hover:text-emerald-400",
        }),
        createProject({
            slug: "housegraph",
            title: "HouseGraph",
            scoreTitle: "Autonomous Home Transaction Layer",
            description: "Turns every home into a verified, queryable AI agent that can tour, explain, negotiate, and coordinate the sale of that property at a fraction of traditional transaction cost.",
            image: housegraph_hero,
            href: "/housegraph",
            themeColor: "hover:border-teal-500/50 text-teal-400",
            hoverTextColor: "group-hover:text-teal-400",
        })
    ];

    return (
        <main className="min-h-screen bg-[var(--background)] overflow-hidden flex flex-col justify-center relative">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
            </div>
            {/* Flawless Pitch Black Header Blend */}
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-black via-black via-50% to-transparent pointer-events-none z-[1]" />


            <HomeClient projects={projects} />
        </main>
    );
}
