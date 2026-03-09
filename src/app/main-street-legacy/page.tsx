import ClientPage from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
    description: 'Equipping a new generation of founders with AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    openGraph: {
        title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
        description: 'AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    }
};

export default function MainStreetLegacyPage() {
    return <ClientPage />;
}
