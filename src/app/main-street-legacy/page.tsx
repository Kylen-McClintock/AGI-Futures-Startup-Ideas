import ClientPage from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: '/main-street-legacy' },
    title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
    description: 'Equipping a new generation of founders with AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    openGraph: {
        title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
        description: 'AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    },
    twitter: {
        card: "summary_large_image",
    }
};

export default function MainStreetLegacyPage() {
    return <ClientPage />;
}
