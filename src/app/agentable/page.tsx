import { PageClient } from "./page-client";

export const metadata = {
    title: 'Agentable | Make Software Legible - AGI Futures',
    description: 'Turns websites and apps into a machine-readable UI map, guides humans in-flow, and lets AI agents complete the same tasks.',
    openGraph: {
        title: 'Agentable | Make Software Legible - AGI Futures',
        description: 'Turns websites and apps into a machine-readable UI map for humans and AI agents.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        images: [heroImage.src],
    }
};

export default function AgentablePage() {
    return <PageClient />;
}
