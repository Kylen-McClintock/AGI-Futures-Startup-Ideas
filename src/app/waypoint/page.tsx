import { Metadata } from 'next';
import WaypointClient from './page-client';

export const metadata: Metadata = {
    title: 'Waypoint ─ AGI Futures',
    description: 'Turns proven infrastructure designs into financeable, field-executable projects, with capital linked to verified real-world outcomes.',
    openGraph: {
        title: 'Waypoint ─ AGI Futures',
        description: 'Turns proven infrastructure designs into financeable, field-executable projects, with capital linked to verified real-world outcomes.',
        images: ['/assets/hero.png'],
    }
};

export default function WaypointPage() {
    return <WaypointClient />;
}
