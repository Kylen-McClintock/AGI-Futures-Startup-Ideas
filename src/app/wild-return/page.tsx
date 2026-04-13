import WildReturnClientPage from './page-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wild Return | AGI Futures',
    description: 'A nature-grounded end-of-life sanctuary that combines natural burial, palliative care partnerships, death doulas, psychologists, ritual design, and optional licensed psychedelic facilitation.',
    openGraph: {
        title: 'Wild Return | AGI Futures',
        description: 'A nature-grounded end-of-life sanctuary to make dying more peaceful and life more meaningful.',
        images: ['/wild-return/assets/hero.png'],
    },
};

export default function WildReturnPage() {
    const initialTags = {
        sector: ['Deathcare', 'Healthcare', 'Community', 'Psychedelics'],
        bottleneck: ['Meaning Crisis', 'Trust', 'Regulatory Friction'],
        customer: ['Families', 'Caregivers'],
        product_type: ['Institution', 'Community'],
        enabling_technology: ['Knowledge Graphs', 'Large Language Models'],
        readiness: ['Build Now'],
        founder_fit: ['Operator-Led', 'Capital Intensive'],
        outcomes: ['Human Flourishing', 'Community Renewal', 'Biodiversity', 'Climate']
    };

    return <WildReturnClientPage initialTags={initialTags} />;
}
