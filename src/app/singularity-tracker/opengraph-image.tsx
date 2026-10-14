import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "How close are we to AGI? | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Singularity Tracker", title: "How close are we to AGI?", subtitle: "A live, sourced dashboard of progress toward AGI and the singularity." });
}
