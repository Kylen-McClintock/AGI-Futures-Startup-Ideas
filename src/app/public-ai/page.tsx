import { Metadata } from 'next';
import PublicAIClient from './page-client';

export const metadata: Metadata = {
    title: 'Public AI ─ AGI Futures',
    description: 'An open-source, scalable AI architecture enabling sovereign governments to securely execute public tasks while protecting citizen data and preventing corporate capture.',
    openGraph: {
        title: 'Public AI ─ AGI Futures',
        description: 'An open-source, scalable AI architecture enabling sovereign governments to securely execute public tasks while protecting citizen data and preventing corporate capture.',
        images: ['/assets/hero.png'],
    }
};

export default function PublicAIPage() {
    return <PublicAIClient />;
}
