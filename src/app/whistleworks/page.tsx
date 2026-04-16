import { Metadata } from 'next';
import PageClient from './page-client';

export const metadata: Metadata = {
    title: 'WhistleWorks | Make Identifying Corruption Profitable',
    description: 'A privacy-first whistleblower platform that helps insiders turn fraud evidence into high-merit legal cases, then uses the resulting case data to build better fraud-detection systems.',
    openGraph: {
        title: 'WhistleWorks | Make Identifying Corruption Profitable',
        description: 'A privacy-first whistleblower platform that helps insiders turn fraud evidence into high-merit legal cases, then uses the resulting case data to build better fraud-detection systems.',
        images: [{ url: '/whistleworks/assets/hero_vista.png', width: 2048, height: 2048, alt: 'WhistleWorks Hub' }],
    },
};

export default function WhistleWorksPage() {
    return <PageClient />;
}
