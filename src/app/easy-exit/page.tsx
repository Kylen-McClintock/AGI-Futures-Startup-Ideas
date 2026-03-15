import { Metadata } from 'next';
import EasyExitClient from './page-client';

export const metadata: Metadata = {
    title: "Easy Exit - Revocation Protocol for Agentic Commerce",
    description: "A free, open-source standard and API for machine-verifiable cancellation, downgrade, pause, and permission revocation.",
    openGraph: {
        title: "Easy Exit - Protocol for Agentic Commerce",
        description: "If your agent can buy it, your agent must be able to revoke it.",
    }
};

export default function EasyExit() {
    return <EasyExitClient />;
}
