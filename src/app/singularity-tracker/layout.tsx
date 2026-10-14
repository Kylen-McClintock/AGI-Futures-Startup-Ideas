import type { Metadata } from "next";

// page.tsx is a client component, so metadata lives here.
export const metadata: Metadata = {
    title: "AGI & Singularity Tracker: Live Progress Toward AGI | AGI Futures",
    description: "A live, sourced dashboard tracking progress toward AGI and the technological singularity across compute, capabilities, robotics, energy and the economy.",
    alternates: { canonical: "/singularity-tracker" },
    openGraph: {
        title: "AGI & Singularity Tracker | AGI Futures",
        description: "A live, sourced dashboard tracking progress toward AGI and the technological singularity.",
        url: "/singularity-tracker",
    },
};

export default function SingularityTrackerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
