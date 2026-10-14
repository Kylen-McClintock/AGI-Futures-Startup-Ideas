// Run: node --test scripts/score.test.ts   (Node >= 22.6 strips TS types natively)
import { test } from "node:test";
import assert from "node:assert/strict";
import { rankIdeas, sanitizeInputs, toFitPercent, type MatchInputs } from "../src/lib/match/score.ts";

const img = { src: "", width: 1, height: 1 };
const ideas = [
    { slug: "bio", title: "BiomeX", scoreTitle: "Microbiome therapeutics", description: "precision microbial medicines", image: img, href: "/bio", themeColor: "" },
    { slug: "gov", title: "Public AI", scoreTitle: "Sovereign AI", description: "AI control plane for governments", image: img, href: "/gov", themeColor: "" },
    { slug: "ops", title: "HomeQuote", scoreTitle: "Scope to quote", description: "home services marketplace", image: img, href: "/ops", themeColor: "" },
];
const fallbacks = {
    bio: { moat: 85, difficulty: 92, impact: 69, created_at: "", tags: { sector: ["Biotech", "Healthcare"], founder_fit: ["Bio Founder", "Capital Intensive"], readiness: ["Build Now"] } },
    gov: { moat: 88, difficulty: 76, impact: 89, created_at: "", tags: { sector: ["Governance", "AI"], founder_fit: ["Policy Entrepreneur", "Venture-Scale"], readiness: ["Build Now"] } },
    ops: { moat: 79, difficulty: 67, impact: 75, created_at: "", tags: { sector: ["Housing", "AI"], founder_fit: ["Operator-Led", "Venture-Scale"], readiness: ["Build Now"] } },
};
const base: MatchInputs = { roles: ["operator"], experience: "early", capital: "angel", commitment: "fulltime", sectors: [], advantage: "" };

test("bio founder with deep capital ranks the biotech idea first", () => {
    const r = rankIdeas(ideas, fallbacks, { ...base, roles: ["bio", "researcher"], experience: "founder", capital: "deep", sectors: ["Biotech"] });
    assert.equal(r[0].slug, "bio");
});

test("policy person interested in governance gets the governance idea", () => {
    const r = rankIdeas(ideas, fallbacks, { ...base, roles: ["policy"], experience: "senior", capital: "vc", sectors: ["Governance"] });
    assert.equal(r[0].slug, "gov");
});

test("bootstrapped early-career operator avoids the capital-intensive, very hard idea", () => {
    const r = rankIdeas(ideas, fallbacks, { ...base, capital: "bootstrap", experience: "student" });
    assert.equal(r[0].slug, "ops");
    assert.equal(r.at(-1)!.slug, "bio");
});

test("free-text advantage keywords boost matching ideas", () => {
    const without = rankIdeas(ideas, fallbacks, base).find(x => x.slug === "gov")!.score;
    const withAdv = rankIdeas(ideas, fallbacks, { ...base, advantage: "I advised governments on sovereign AI procurement" }).find(x => x.slug === "gov")!.score;
    assert.ok(withAdv > without);
});

test("sanitizeInputs rejects incomplete input and strips unknown values", () => {
    assert.equal(sanitizeInputs({ roles: [] }, ["AI"]), null);
    const s = sanitizeInputs({ roles: ["engineer", "hacker"], experience: "early", capital: "vc", commitment: "side", sectors: ["AI", "Nope"], advantage: "x".repeat(900) }, ["AI"]);
    assert.deepEqual(s!.roles, ["engineer"]);
    assert.deepEqual(s!.sectors, ["AI"]);
    assert.equal(s!.advantage.length, 500);
});

test("toFitPercent maps into the 62-96 band, best first", () => {
    const f = toFitPercent([50, 40, 30]);
    assert.deepEqual([f[0], f[2]], [96, 62]);
    assert.deepEqual(toFitPercent([10]), [88]);
});
