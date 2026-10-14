/**
 * Founder Fit Matcher: deterministic pre-scoring.
 * Pure functions (no I/O) so they are unit-testable and provide a fallback when the LLM is unavailable.
 */
import type { IdeaFallback, IdeaStatic } from "@/data/ideas";

export const ROLES = [
    { id: "engineer", label: "Engineer / ML" },
    { id: "designer", label: "Product / Design" },
    { id: "operator", label: "Operator / GM" },
    { id: "gtm", label: "Sales / Growth" },
    { id: "researcher", label: "Researcher / Scientist" },
    { id: "bio", label: "Bio / Medical" },
    { id: "policy", label: "Policy / Legal / Gov" },
    { id: "finance", label: "Finance / Investing" },
] as const;
export const EXPERIENCE = [
    { id: "student", label: "Student / early career" },
    { id: "early", label: "3–7 years in industry" },
    { id: "senior", label: "Senior leader / domain expert" },
    { id: "founder", label: "Have founded before" },
] as const;
export const CAPITAL = [
    { id: "bootstrap", label: "Bootstrap it" },
    { id: "angel", label: "Friends, family & angels" },
    { id: "vc", label: "Raise venture capital" },
    { id: "deep", label: "Capital-intensive is fine" },
] as const;
export const COMMITMENT = [
    { id: "exploring", label: "Just exploring" },
    { id: "side", label: "Nights & weekends" },
    { id: "fulltime", label: "Ready to go full-time" },
] as const;

export type RoleId = (typeof ROLES)[number]["id"];
export type ExperienceId = (typeof EXPERIENCE)[number]["id"];
export type CapitalId = (typeof CAPITAL)[number]["id"];
export type CommitmentId = (typeof COMMITMENT)[number]["id"];

export type MatchInputs = {
    roles: RoleId[];
    experience: ExperienceId;
    capital: CapitalId;
    commitment: CommitmentId;
    sectors: string[];
    advantage: string;
};

export type ScoredIdea = { slug: string; score: number; reasons: string[] };

const ROLE_TO_FIT: Record<RoleId, string[]> = {
    engineer: ["Technical Founder"],
    designer: ["Operator-Led", "Technical Founder"],
    operator: ["Operator-Led"],
    gtm: ["Operator-Led"],
    researcher: ["Technical Founder", "Bio Founder"],
    bio: ["Bio Founder"],
    policy: ["Policy Entrepreneur"],
    finance: ["Operator-Led", "Capital Intensive"],
};
const EXPERIENCE_DIFFICULTY_CAP: Record<ExperienceId, number> = { student: 62, early: 72, senior: 84, founder: 95 };
const STOPWORDS = new Set("the a an and or of to for in on with my i am have has at by from is are be as it this that we our you your".split(" "));

export function sanitizeInputs(raw: unknown, allowedSectors: string[]): MatchInputs | null {
    if (!raw || typeof raw !== "object") return null;
    const r = raw as Record<string, unknown>;
    const pick = <T extends string>(v: unknown, allowed: readonly { id: T }[]): T | null =>
        typeof v === "string" && allowed.some(a => a.id === v) ? (v as T) : null;
    const roles = Array.isArray(r.roles) ? (r.roles.filter(x => ROLES.some(a => a.id === x)) as RoleId[]).slice(0, 4) : [];
    const sectors = Array.isArray(r.sectors) ? (r.sectors.filter(x => typeof x === "string" && allowedSectors.includes(x)) as string[]).slice(0, 6) : [];
    const experience = pick(r.experience, EXPERIENCE);
    const capital = pick(r.capital, CAPITAL);
    const commitment = pick(r.commitment, COMMITMENT);
    const advantage = typeof r.advantage === "string" ? r.advantage.replace(/\s+/g, " ").trim().slice(0, 500) : "";
    if (!roles.length || !experience || !capital || !commitment) return null;
    return { roles, experience, capital, commitment, sectors, advantage };
}

function tokens(s: string): string[] {
    return s.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOPWORDS.has(w));
}

export function scoreIdea(idea: IdeaStatic, fb: IdeaFallback | undefined, inp: MatchInputs): ScoredIdea {
    const reasons: string[] = [];
    let s = 0;
    const tags = fb?.tags ?? {};
    const sectors = tags.sector ?? [];
    const fits = tags.founder_fit ?? [];

    // Sector interest (strongest signal when provided)
    const overlap = sectors.filter(x => inp.sectors.includes(x));
    if (inp.sectors.length) {
        if (overlap.length) { s += 30 + Math.min(overlap.length - 1, 2) * 6; reasons.push(`sector: ${overlap.join(", ")}`); }
        else s -= 8;
    } else s += 12;

    // Founder-fit tags vs roles
    const wanted = new Set(inp.roles.flatMap(r => ROLE_TO_FIT[r]));
    const fitHits = fits.filter(f => wanted.has(f));
    if (fitHits.length) { s += 18 + (fitHits.length - 1) * 6; reasons.push(`founder fit: ${fitHits.join(", ")}`); }

    // Capital profile
    const capIntensive = fits.includes("Capital Intensive");
    const ventureScale = fits.includes("Venture-Scale");
    const capDelta: Record<CapitalId, number> = { bootstrap: capIntensive ? -22 : ventureScale ? -4 : 8, angel: capIntensive ? -10 : 4, vc: capIntensive ? 4 : ventureScale ? 10 : 2, deep: capIntensive ? 14 : 6 };
    s += capDelta[inp.capital];
    if (capDelta[inp.capital] > 5) reasons.push("capital profile fits");

    // Execution difficulty vs experience
    const difficulty = fb?.difficulty ?? 70;
    const over = difficulty - EXPERIENCE_DIFFICULTY_CAP[inp.experience];
    if (over > 0) s -= over * 0.7; else { s += 6; reasons.push("difficulty within reach"); }

    // Readiness vs commitment / background
    const readiness = tags.readiness ?? [];
    if (readiness.includes("Early Research") && !inp.roles.some(r => r === "researcher" || r === "bio")) s -= 10;
    if (readiness.includes("Build Now") && inp.commitment !== "exploring") s += 5;
    if (inp.commitment === "side" && difficulty > 80) s -= 6;

    // Free-text advantage keyword overlap
    if (inp.advantage) {
        const hay = new Set(tokens([idea.title, idea.scoreTitle, idea.description, ...Object.values(tags).flat()].join(" ")));
        const hits = [...new Set(tokens(inp.advantage))].filter(w => hay.has(w));
        if (hits.length) { s += Math.min(hits.length * 3, 12); reasons.push(`mentions: ${hits.slice(0, 3).join(", ")}`); }
    }

    // Light tie-breaker on impact
    s += (fb?.impact ?? 60) * 0.08;
    return { slug: idea.slug, score: Math.round(s * 10) / 10, reasons };
}

export function rankIdeas(ideas: IdeaStatic[], fallbacks: Record<string, IdeaFallback>, inp: MatchInputs): ScoredIdea[] {
    return ideas.map(i => scoreIdea(i, fallbacks[i.slug], inp)).sort((a, b) => b.score - a.score);
}

/** Maps raw scores of the top candidates onto a believable 62-96% "fit" band. */
export function toFitPercent(scores: number[]): number[] {
    if (!scores.length) return [];
    const max = Math.max(...scores), min = Math.min(...scores);
    return scores.map(sc => Math.round(max === min ? 88 : 62 + ((sc - min) / (max - min)) * 34));
}
