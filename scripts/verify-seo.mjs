// SEO smoke test against a running server.
// Usage: node scripts/verify-seo.mjs [baseUrl]   (default http://localhost:3000)
import { readFileSync } from "node:fs";

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.agifutures.org";
const fails = [];
const ok = (cond, msg) => { if (!cond) fails.push(msg); };
const get = async (p) => { const r = await fetch(BASE + p, { redirect: "manual" }); return { status: r.status, text: await r.text(), type: r.headers.get("content-type") || "" }; };

const registry = readFileSync(new URL("../src/data/ideas.ts", import.meta.url), "utf8");
const ideaRoutes = [...registry.matchAll(/href: "(\/[^"]+)"/g)].map(m => m[1]);
const hubLinks = [...readFileSync(new URL("../src/data/hub-links.ts", import.meta.url), "utf8").matchAll(/"(\/ideas\/[^"]+)"/g)].map(m => m[1]);

// robots
const robots = await get("/robots.txt");
ok(robots.text.includes(`Sitemap: ${SITE}/sitemap.xml`), "robots.txt sitemap line wrong");
ok(!/agifutures\.co(m)?\b(?!\.)/.test(robots.text.replace(/agifutures\.org/g, "")), "robots.txt references wrong domain");

// sitemap
const sm = await get("/sitemap.xml");
const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
ok(locs.length > 0, "sitemap empty");
ok(locs.every(l => l.startsWith(SITE)), `sitemap has off-domain URLs: ${locs.filter(l => !l.startsWith(SITE)).slice(0, 3)}`);
for (const r of ideaRoutes) ok(locs.includes(SITE + r), `sitemap missing idea ${r}`);
const smHubs = locs.filter(l => /\/ideas\/[^/]+$/.test(l)).map(l => l.replace(SITE, "")).sort();
ok(JSON.stringify(smHubs) === JSON.stringify([...hubLinks].sort()), `hub-links.ts out of sync with sitemap hubs: sitemap=${smHubs} map=${hubLinks}`);

// per-page metadata
const pages = [...ideaRoutes, ...hubLinks, "/", "/ideas", "/match", "/problem-atlas", "/glossary", "/singularity-tracker"];
for (const p of pages) {
    const r = await get(p);
    if (r.status !== 200) { fails.push(`${p} -> HTTP ${r.status}`); continue; }
    const canon = r.text.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    ok(canon === SITE + (p === "/" ? "" : p) || canon === SITE + p, `${p} canonical=${canon}`);
    const og = r.text.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    ok(og && og.startsWith(SITE) && /opengraph-image/.test(og), `${p} og:image=${og}`);
    ok(!/<meta name="twitter:title" content="AGI Futures Startup Ideas Library"/.test(r.text) || p === "/", `${p} still inherits generic twitter:title`);
}

// OG image actually renders for a sample idea
const sample = await get("/waypoint");
const ogUrl = sample.text.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
if (ogUrl) {
    const img = await fetch(ogUrl.replace(SITE, BASE));
    ok(img.ok && (img.headers.get("content-type") || "").startsWith("image/png"), `og image for /waypoint not served (${img.status})`);
}

console.log(`Checked ${pages.length} pages, ${locs.length} sitemap URLs, ${ideaRoutes.length} ideas, ${hubLinks.length} hubs.`);
if (fails.length) { console.error(`\n✖ ${fails.length} problems:\n- ` + fails.join("\n- ")); process.exit(1); }
console.log("✔ SEO checks passed");
