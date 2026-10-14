import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ideas, ideaFallbacks } from "@/data/ideas";

export const OG_SIZE = { width: 1200, height: 630 };

/** Loads a hero (relative to src/app) and normalizes it to a 1200px JPEG data URI (Satori can't decode webp). */
async function loadHeroDataUri(heroPath: string): Promise<string | null> {
    try {
        const buf = await readFile(join(process.cwd(), "src/app", heroPath));
        try {
            const sharp = (await import("sharp")).default;
            const jpg = await sharp(buf).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 80 }).toBuffer();
            return `data:image/jpeg;base64,${jpg.toString("base64")}`;
        } catch {
            const ext = heroPath.split(".").pop()?.toLowerCase();
            if (ext === "webp") return null;
            const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
            return `data:${mime};base64,${buf.toString("base64")}`;
        }
    } catch {
        return null;
    }
}

function Score({ label, value }: { label: string; value: number }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px 22px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(0,0,0,0.45)" }}>
            <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.6)", letterSpacing: 3, textTransform: "uppercase" }}>{label}</div>
            <div style={{ display: "flex", fontSize: 38, color: "#ffffff", fontWeight: 700 }}>{value}</div>
        </div>
    );
}

/** Branded 1200x630 card: hero background, title, one-liner and scores. */
export async function renderIdeaOg(slug: string, heroPath: string) {
    const idea = ideas.find(i => i.slug === slug);
    const fb = ideaFallbacks[slug];
    const hero = await loadHeroDataUri(heroPath);
    const title = idea?.title ?? "AGI Futures";
    const sub = idea?.scoreTitle ?? "";

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#050607", fontFamily: "sans-serif" }}>
                {hero && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={hero} alt="" width={1200} height={630} style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover", opacity: 0.55 }} />
                )}
                <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.25) 100%)" }} />
                <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 64px", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: "#21de9a" }} />
                        <div style={{ display: "flex", fontSize: 22, color: "#21de9a", letterSpacing: 6, textTransform: "uppercase" }}>AGI Futures · Startup Idea</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
                        <div style={{ display: "flex", fontSize: title.length > 18 ? 76 : 96, color: "#ffffff", fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
                        {sub && <div style={{ display: "flex", fontSize: 36, color: "rgba(255,255,255,0.82)", marginTop: 18, lineHeight: 1.25 }}>{sub}</div>}
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                        {fb ? (
                            <div style={{ display: "flex", gap: 14 }}>
                                <Score label="Impact" value={fb.impact} />
                                <Score label="Moat" value={fb.moat} />
                                <Score label="Difficulty" value={fb.difficulty} />
                            </div>
                        ) : <div style={{ display: "flex" }} />}
                        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>agifutures.org</div>
                    </div>
                </div>
            </div>
        ),
        OG_SIZE
    );
}

/** Generic typographic card (hubs, matcher, index pages). */
export function renderTextOg({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 68px", background: "radial-gradient(circle at 15% 10%, rgba(33,222,154,0.28), rgba(5,6,7,1) 60%)", fontFamily: "sans-serif" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: "#21de9a" }} />
                    <div style={{ display: "flex", fontSize: 22, color: "#21de9a", letterSpacing: 6, textTransform: "uppercase" }}>{kicker}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontSize: title.length > 40 ? 64 : 80, color: "#fff", fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>{title}</div>
                    {subtitle && <div style={{ display: "flex", fontSize: 34, color: "rgba(255,255,255,0.75)", marginTop: 20, lineHeight: 1.3 }}>{subtitle}</div>}
                </div>
                <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>agifutures.org</div>
            </div>
        ),
        OG_SIZE
    );
}
