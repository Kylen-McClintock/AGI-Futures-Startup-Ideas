import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "How we forecast AGI-era startups | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Methodology", title: "How we forecast AGI-era startups", subtitle: "Expected valuation and time-to-unicorn, explained." });
}
