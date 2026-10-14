import { Metadata } from 'next';
import ProblemAtlasClient from './page-client';
import { problems } from '@/data/problem-atlas-data';

export const metadata: Metadata = {
    title: 'Problem Atlas | AGI Futures',
    description: 'A ranked map of high-priority civilizational bottlenecks for founders, researchers, and builders.',
    alternates: {
        canonical: '/problem-atlas'
    },
    openGraph: {
        title: 'Problem Atlas | AGI Futures',
        description: 'A ranked map of high-priority civilizational bottlenecks for founders, researchers, and builders.',
        url: '/problem-atlas',
    },
};

export default function ProblemAtlasPage() {
    return (
        <main className="min-h-screen bg-black" style={{"--primary": "#10b981", "--secondary": "#34d399", "--tertiary": "#6ee7b7"} as React.CSSProperties}>
            <ProblemAtlasClient problems={problems} />
        </main>
    );
}
