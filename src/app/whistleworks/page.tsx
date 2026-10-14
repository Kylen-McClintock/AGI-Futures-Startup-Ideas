import { Metadata } from 'next';
import PageClient from './page-client';

export const metadata: Metadata = {
    alternates: { canonical: '/whistleworks' },
    title: 'WhistleWorks | Make Identifying Corruption Profitable',
    description: 'A privacy-first whistleblower platform that helps insiders turn fraud evidence into high-merit legal cases, then uses the resulting case data to build better fraud-detection systems.',
    openGraph: {
        title: 'WhistleWorks | Make Identifying Corruption Profitable',
        description: 'A privacy-first whistleblower platform that helps insiders turn fraud evidence into high-merit legal cases, then uses the resulting case data to build better fraud-detection systems.',
    },
};

export default function WhistleWorksPage() {
    return <PageClient />;
}
