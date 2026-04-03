import { Metadata } from 'next';
import HandraiseClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Handraise | The Social Graph Braintrust - AGI Futures',
    description: 'Handraise gives founders the benefits of building in public without being spammy. It turns vague posts, scattered DMs, and awkward favors into structured asks, precise routing, and one clear next move.',
    openGraph: {
        title: 'Handraise | The Social Graph Braintrust - AGI Futures',
        description: 'Handraise gives founders the benefits of building in public without being spammy. It turns vague posts, scattered DMs, and awkward favors into structured asks, precise routing, and one clear next move.',
    },
};

export default function HandraisePage() {
    return <HandraiseClientPage />;
}
