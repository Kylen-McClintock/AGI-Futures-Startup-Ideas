import { renderTextOg, OG_SIZE } from "@/lib/og/render";

// Site-wide fallback share card (homepage + any page without its own image).
export const alt = "AGI Futures: AI-native startup ideas for an abundant AGI future";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({
        kicker: "AGI Futures",
        title: "AI-native startup ideas for an abundant AGI future",
        subtitle: "Open-sourced, high-conviction theses, scored on moat, difficulty and civilizational impact.",
    });
}
