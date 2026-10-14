import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "Live startup valuation forecasts | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Live Forecasts", title: "Live startup valuation forecasts", subtitle: "Probabilistic outcomes for every AGI Futures idea." });
}
