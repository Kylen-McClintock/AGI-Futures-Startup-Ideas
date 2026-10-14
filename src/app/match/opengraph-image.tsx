import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "Founder Fit Matcher | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({
        kicker: "AGI Futures · Founder Fit Matcher",
        title: "Which AGI-era startup are you built to build?",
        subtitle: "Six questions. About 60 seconds. A personalized 30-day plan.",
    });
}
