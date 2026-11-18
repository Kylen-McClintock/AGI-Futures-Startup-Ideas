import { ideas, ideaFallbacks } from "./ideas";
import { SITE_URL } from "@/lib/site";

export type BlueprintSpecOverride = {
    wedgeIcp: string;
    dayOneArchitecture: string[];
    coreSchemaSummary: string;
    pilot45DayPassGates: string[];
    monetizationRail: string;
};

const CURATED_SPECS: Record<string, BlueprintSpecOverride> = {
    "homequote": {
        wedgeIcp: "2BR/1BA apartment move-out cleanings, 2-room interior repaints, and under-sink plumbing repairs for urban property managers and busy homeowners.",
        dayOneArchitecture: [
            "Mobile web guided camera capture using WebRTC + Gemini Live voice/video streaming + Apple RoomPlan LiDAR mesh where available.",
            "Deterministic JobObject compiler extracting square footage, surface/stain severity, access constraints, BOM, and predicted crew hours.",
            "Provider auto-bid engine matching compiled JobObjects against local crew calendars, equipment manifests, and route-density gaps."
        ],
        coreSchemaSummary: "JobObject { id, taskType, netSqFt, accessFloor, elevatorVerified, anomalyNodes[], requiredKit[], predictedCrewHours, guaranteedQuoteUsd, varianceBufferPct }",
        pilot45DayPassGates: [
            "Onboard 8 local turnover-cleaning and handyman crews in 1 metro cluster.",
            "Complete 50 guided walkthroughs with <8% variance between predicted and actual crew hours.",
            "Achieve >=38% walkthrough-to-paid-booking conversion with zero in-person estimator visits."
        ],
        monetizationRail: "14% marketplace take rate on guaranteed-scope bookings + $199/mo provider routing & auto-bidding SaaS."
    },
    "main-street-legacy": {
        wedgeIcp: "High-agency GM/operator candidates acquiring $1.5M to $3.0M residential HVAC and plumbing shops from retiring Boomer founders.",
        dayOneArchitecture: [
            "Pre-close AI Uplift Diligence Auditor ingesting 90-day phone logs, ServiceTitan/Housecall Pro exports, and aging AR ledgers.",
            "Day-1 Trades AI OS: sub-second 24/7 voice AI receptionist, SMS seasonal tune-up reactivation, GPS zone dispatch, and 1-tap ACH invoicing.",
            "Lender Uplift Scorecard generating standardized SBA 7(a) DSCR coverage memos + 18-month retiring-seller profit-distribution glides."
        ],
        coreSchemaSummary: "UnderwritingPackage { targetId, trailingRevenue, baseEbitda, missedCallRecoveryEst, dsoReductionDays, preAiDscr, verifiedPostAiDscr, sellerGlideSchedule }",
        pilot45DayPassGates: [
            "Install the Day-1 Voice + SMS AR stack inside 1 operating partner HVAC shop and verify >=15% lift in booked overflow/after-hours jobs.",
            "Reduce average invoice collection cycle by >=10 days DSO within 45 days.",
            "Advance >=2 vetted cohort operators to signed LOIs backed by a Preferred SBA Lender."
        ],
        monetizationRail: "Selective cohort tuition + 15% to 25% SPV carried interest + $2,500/mo AI OS platform fee + pooled vendor rebates."
    },
    "skyhold": {
        wedgeIcp: "Founders, AI executives, and remote-flexible families within 35 to 55 miles of Boulder/Denver, Bay Area North, or West LA.",
        dayOneArchitecture: [
            "Public Access Repricing Index scoring 100 scenic metro-edge ridgelines by current drive penalty, AV/eVTOL time compression, water security, and WUI fire defensibility.",
            "Option-backed pre-sale funnel collecting refundable escrow deposits on 24 to 30 clustered private homesteads before closing land CapEx.",
            "Shared infrastructure masterplan: 200-ft fuel break, islandable solar-battery microgrid, glass winter solarium, thermal spa, and coworking hub."
        ],
        coreSchemaSummary: "ParcelCandidate { parcelId, metroHub, highwayMinutesToday, avFocusMinutes, evtolFlightMinutes, rawAcrePriceUsd, wuiDefensibilityScore, byRightLots }",
        pilot45DayPassGates: [
            "Publish the Access Repricing Index and capture >=500 qualified founder/family waitlist signups.",
            "Secure a 9-month low-cash purchase option (<$75k at risk) on 1 by-right scenic parcel.",
            "Close >=5 refundable escrow lot reservations and 1 anchor real-assets LP term sheet in 60 days."
        ],
        monetizationRail: "Asset-light Parent Co earning development fees, 20% project SPV promote on repriced homestead sales, and $2,800/mo recurring club/microgrid dues."
    },
    "signal-house": {
        wedgeIcp: "Technical founders, ML/physics PhD researchers, and long-form writers seeking distraction-locked deep work plus curated peer serendipity.",
        dayOneArchitecture: [
            "Webapp + lightweight browser/desktop companion enforcing 90-minute Deep Focus locks (pausing feeds/DMs) paired with procedural room soundscapes.",
            "Synchronized 12-minute post-sprint Break Lounge unmasking what co-present peers just shipped for 1-tap warm collaboration.",
            "Non-transferable Sparks ledger tracking verified focus blocks to gate entry into high-signal host-curated canonical rooms."
        ],
        coreSchemaSummary: "FocusSession { roomId, userId, durationMinutes, shieldVerified, artifactShippedSummary, sparksMinted, collisionOptInIntent }",
        pilot45DayPassGates: [
            "Seed 2 flagship host-led rooms (AI Founders & ML Researchers) with 150 vetted practitioners.",
            "Achieve >=30% 14-day repeat attendance (3+ full 90-minute sprints per week).",
            "Verify >=25% of break-window participants initiate at least 1 accepted peer intro."
        ],
        monetizationRail: "$24/mo Pro subscription + 20% marketplace cut on host-curated niche passes + technical recruiting sponsorships."
    },
    "attune": {
        wedgeIcp: "Committed couples where she wants greater emotional presence and proactive ownership, and he wants specific, non-shaming daily reps.",
        dayOneArchitecture: [
            "10-minute guided Sunday Couple Sync with compartmentalized encryption (her raw venting stays private; constructive coaching crosses the bridge).",
            "Bilateral Relationship Memory Graph tracking recurring stress windows, appreciation idioms, repair triggers, and honored commitments.",
            "Timed weekday SMS/app micro-nudges + 90-second private voice roleplay for rehearsing clean impact-first conflict repair."
        ],
        coreSchemaSummary: "WeeklySyncBridge { coupleId, encryptedPartnerShareRef, calendarStressWindows[], translatedActionRep, scheduledNudgeTimes[], nextSyncVerification }",
        pilot45DayPassGates: [
            "Recruit 40 committed couples for a 4-week Sunday Sync + weekday nudge cohort.",
            "Achieve >=75% Week-4 Sunday Sync completion across both partners.",
            "Demonstrate measurable lift in female-reported Perceived Partner Responsiveness (PPR scale)."
        ],
        monetizationRail: "$19/mo solo coaching tier and $29/mo Couple Sync subscription + premarital and post-baby lifecycle tracks."
    },
    "murmuration": {
        wedgeIcp: "Seed-to-Series B AI-native startups running high-velocity GTM, pricing, and workflow experiments with lean headcount.",
        dayOneArchitecture: [
            "Hypothesis-to-Swarm compiler splitting one strategic goal into parallel, budget-capped agent micro-experiments with hard brand/spend guardrails.",
            "Telemetry evaluation harness scoring variants on live conversion/latency metrics and auto-terminating losing branches.",
            "Compounding Playbook Graph storing verified winning prompts, tool chains, and market learnings across runs."
        ],
        coreSchemaSummary: "SwarmExperiment { briefId, hypothesis, maxSpendUsd, guardrailPolicies[], parallelVariants[], statisticalWinnerId, compoundedLessonNode }",
        pilot45DayPassGates: [
            "Deploy inside 5 partner startups running weekly outbound or onboarding experiments.",
            "Increase validated experiment throughput >=4x per operator with zero guardrail breaches.",
            "Produce >=1 statistically significant conversion lift (>15%) per design partner in 30 days."
        ],
        monetizationRail: "Usage-tiered SaaS platform fee ($1,500 to $5,000/mo) + metered swarm compute margin."
    },
    "porchfront": {
        wedgeIcp: "Suburban homeowners, cottage bakers, specialty coffee makers, and makers converting street-facing garages into weekend micro-hubs.",
        dayOneArchitecture: [
            "Municipal cottage-food & home-occupation zoning checker generating instant compliance checklists by ZIP code.",
            "Turnkey Host OS: live neighborhood 'Open Flag' map, SMS drop alerts for regulars, pre-order batching, and tap-to-pay POS.",
            "Modular acoustic/lighting/counter hardware kit spec turning a 2-car garage into a warm third place in 15 minutes."
        ],
        coreSchemaSummary: "MicroHub { hubId, parcelZip, permitClass, openWindowSchedule, batchInventoryCap, neighborSubscriberCount, avgSundayGrossUsd }",
        pilot45DayPassGates: [
            "Launch 10 garage micro-hubs (coffee, sourdough, repair/ceramics) across 2 walkable suburban neighborhoods.",
            "Average >=$450 gross host earnings per 3-hour weekend pop-up window with zero neighbor complaints.",
            "Reach >=40% repeat neighborhood foot-traffic return rate by Weekend 4."
        ],
        monetizationRail: "5% POS & pre-order transaction fee + $39/mo Host OS + margin on modular garage conversion kits."
    },
    "AIFounderLab": {
        wedgeIcp: "Ambitious technical builders and domain operators seeking a high-output alternative to traditional MBAs or solo founder drift.",
        dayOneArchitecture: [
            "12-week live Venture Crucible pairing builders in rotating 2-person pods on real customer-paid sprints.",
            "Behavioral Co-Founder Telemetry scoring execution speed, customer call volume, resilience under pivot stress, and complementary skill fit.",
            "Automated Seed IC Readiness Pack compiling Stripe revenue proof, retention cohorts, and co-founder equity templates."
        ],
        coreSchemaSummary: "BuilderPod { podId, founderIds[], sprintRevenueUsd, customerConversationsLogged, stressCompatibilityScore, icTermSheetUnlocked }",
        pilot45DayPassGates: [
            "Run Cohort 01 with 24 vetted builders across 12 live 2-week customer sprints.",
            "Generate real customer revenue or binding LOIs in >=50% of final matched pods.",
            "Back the top 3 matched teams with studio pre-seed checks and external co-investors."
        ],
        monetizationRail: "Studio equity stake (7% to 12%) in backed spinouts + co-investment SPV carry."
    }
};

export function generateAiBuildSpec(slug: string): string {
    const idea = ideas.find((i) => i.slug === slug);
    const fb = ideaFallbacks[slug];
    const curated = CURATED_SPECS[slug];

    const title = idea?.title ?? slug;
    const subtitle = idea?.scoreTitle ?? "AI-Native Venture Thesis";
    const description = idea?.description ?? "";
    const sectors = fb?.tags?.sector?.join(", ") || "AI, Frontier";
    const bottlenecks = fb?.tags?.bottleneck?.join(", ") || "Coordination, Trust";
    const customers = fb?.tags?.customer?.join(", ") || "Founders, Enterprises";
    const tech = fb?.tags?.enabling_technology?.join(", ") || "Large Language Models, Autonomous Agents";
    const canonicalUrl = `${SITE_URL}${idea?.href ?? `/${slug}`}`;

    const wedge =
        curated?.wedgeIcp ??
        `Start with the highest-urgency ${customers.toLowerCase()} segment experiencing acute ${bottlenecks.toLowerCase()} friction, delivering a narrow Day-1 workflow before expanding into a full platform.`;

    const archSteps = curated?.dayOneArchitecture ?? [
        `Ingestion & Context Layer: Capture structured domain inputs using ${tech} with zero manual re-entry.`,
        `Core Decision / Execution Engine: Compile raw inputs into deterministic, auditable outputs tailored for ${customers}.`,
        `Compounding Data Flywheel: Log verified real-world outcomes back into a proprietary benchmark graph (Moat target: ${fb?.moat ?? 78}/100).`
    ];

    const schemaLine =
        curated?.coreSchemaSummary ??
        `CoreEntity { id: uuid, tenantId: uuid, inputContext: jsonb, compiledActionPlan: jsonb, verificationStatus: enum, outcomeDelta: numeric, createdAt: timestamptz }`;

    const pilotGates = curated?.pilot45DayPassGates ?? [
        `Onboard 5 to 10 high-intent design partners in the narrowest ${sectors} wedge within 14 days.`,
        `Deliver a measurable >=20% improvement in speed, cost, or conversion on one core workflow within 45 days.`,
        `Convert >=3 pilot users into paid recurring contracts or binding letters of intent.`
    ];

    const monetization =
        curated?.monetizationRail ??
        `Outcome-aligned ${fb?.tags?.product_type?.join(" + ") || "Platform"} pricing combining a predictable base subscription with value-linked transaction or expansion margin.`;

    return `# ${title}: ${subtitle} (AI Coding Agent Starter Spec)
Source Blueprint: ${canonicalUrl}
Open-Licensed via AGI Futures (CC BY-NC-SA 4.0)

## 1. System Prompt Instruction (Paste into Cursor, Claude Code, or Antigravity)
You are a principal full-stack engineer and product architect building the MVP for **${title}** (${subtitle}).
Core Thesis: ${description}
Prioritize shipping the narrowest Day-1 wedge below as a clean, production-grade Next.js + TypeScript + Supabase + Tailwind application with strict type safety, zero mock dead-ends, and measurable pilot telemetry.

## 2. Narrow Day-1 ICP Wedge
- **Target Customer:** ${wedge}
- **Primary Bottleneck Broken:** ${bottlenecks}
- **Enabling Stack:** ${tech}

## 3. MVP Architecture (3 Core Modules)
${archSteps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## 4. Initial Database & Domain Schema
\`\`\`ts
${schemaLine}
\`\`\`

## 5. Monetization & Unit Economics Rail
- ${monetization}

## 6. 45-Day Falsifiable Pilot Pass Gates
${pilotGates.map((g, i) => `- [ ] Gate 0${i + 1}: ${g}`).join("\n")}

## 7. Recommended Build Sequence for Your Coding Agent
1. Scaffold the core database schema and typed server actions for the primary entity above.
2. Build the single-screen Day-1 intake-to-outcome workflow before adding secondary settings or dashboards.
3. Instrument funnel telemetry for each of the 3 Pilot Pass Gates above so week-1 user testing produces hard falsifiable data.
`;
}
