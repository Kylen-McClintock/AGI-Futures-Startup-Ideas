import { getIdeaSeeds } from './actions';
import { createClient } from '@/utils/supabase/server';
import IdeaSeedCard from './components/IdeaSeedCard';
import Link from 'next/link';
import { Sprout, Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function IdeaSeedsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const seeds = await getIdeaSeeds();

    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 pb-24 px-6 md:px-12 relative">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                                <Sprout className="w-5 h-5 text-fuchsia-400" />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white">Idea Seeds</h1>
                        </div>
                        <p className="text-lg text-white/60 max-w-2xl">
                            Lightweight, high-signal, AGI-proof startup concepts. Browse raw hypotheses and plant your own. With community traction, seeds can evolve into canonical blueprints.
                        </p>
                    </div>
                    
                    <Link 
                        href="/Idea-Seeds/new"
                        className="inline-flex items-center justify-center gap-2 rounded-md h-10 px-4 py-2 text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                        <Plus className="w-4 h-4" />
                        Plant a Seed
                    </Link>
                </div>

                {seeds.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl bg-white/5">
                        <Sprout className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">The soil is ready</h3>
                        <p className="text-white/50 max-w-md mx-auto mb-6">There are no idea seeds planted yet. Be the first to submit a lightweight startup concept.</p>
                        <Link 
                            href="/Idea-Seeds/new"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-white/10 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        >
                            Plant the first seed
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seeds.map((seed) => (
                            <IdeaSeedCard key={seed.id} seed={seed as any} currentUserId={user?.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
