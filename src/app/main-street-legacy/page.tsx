import ClientPage from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: '/main-street-legacy' },
    title: 'Main Street Legacy: SBA 7(a) AI Roll-Up & SMB Acquisition Blueprint | AGI Futures',
    description: 'Startup blueprint + interactive EBITDA simulator: equipping operators with AI-native stacks to acquire, modernize, and scale retiring baby boomer SMBs.',
    openGraph: {
        title: 'Main Street Legacy: SBA 7(a) AI Roll-Up & SMB Acquisition Blueprint',
        description: 'AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    },
    twitter: {
        card: "summary_large_image",
    }
};

export default function MainStreetLegacyPage() {
    return <ClientPage />;
}
