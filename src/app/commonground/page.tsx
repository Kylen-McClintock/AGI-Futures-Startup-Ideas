import { Metadata } from 'next';
import CommonGroundClient from './page-client';

export const metadata: Metadata = {
    title: 'CommonGround AI ─ AGI Futures',
    description: 'A provably fair dispute resolution system that learns from precedent, expert judgment, and each party’s true priorities to compute outcomes humans can actually converge on.',
    openGraph: {
        title: 'CommonGround AI ─ AGI Futures',
        description: 'A provably fair dispute resolution system that learns from precedent, expert judgment, and each party’s true priorities to compute outcomes humans can actually converge on.',
        // TODO: We need absolute path or relative? Typical projects use '/assets/hero.png' relative to their URL or global. 
        // We will stick to the format used in other pages like public-ai which is '/assets/hero.png' assuming it's mapping to their specific route hero.
        images: ['/assets/hero.png'],
    }
};

export default function CommonGroundPage() {
    return <CommonGroundClient />;
}
