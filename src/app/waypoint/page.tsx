import { Metadata } from 'next';
import WaypointClient from './page-client';

export const metadata: Metadata = {
    alternates: { canonical: '/waypoint' },
    title: 'Waypoint ─ AGI Futures',
    description: 'Turns proven infrastructure designs into financeable, field-executable projects, with capital linked to verified real-world outcomes.',
    openGraph: {
        title: 'Waypoint ─ AGI Futures',
        description: 'Turns proven infrastructure designs into financeable, field-executable projects, with capital linked to verified real-world outcomes.',
    }
};

export default function WaypointPage() {
    return <WaypointClient />;
}
