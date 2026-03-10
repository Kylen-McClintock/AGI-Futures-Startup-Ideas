import { Metadata } from 'next';
import HandraiseClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Handraise | AGI Futures',
    description: 'Ask once. Route precisely. Compound trust. Leverage your network for the benefits of building in public without being spammy.',
    openGraph: {
        title: 'Handraise | AGI Futures',
        description: 'Leverage your network for the benefits of building in public without being spammy: you post a tight brief, only volunteers in that specialty respond, answers line up side by side, and contributors earn portable credit.',
    },
};

export default function HandraisePage() {
    return <HandraiseClientPage />;
}
