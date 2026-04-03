import { getIdeaSeed, getIdeaSeedComments } from './actions';
import { notFound } from 'next/navigation';
import { timeAgo } from '@/utils/timeAgo';
import Image from 'next/image';
import { User, Sprout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import UpvotePanel from '../components/UpvotePanel';
import CommentThread from '../components/CommentThread';
import { createClient } from '@/utils/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function IdeaSeedDetailPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const seed = await getIdeaSeed(params.id);
    
    if (!seed) {
        throw new Error(`DEBUG 404 TRACE: Zero rows returned for params.id: '${params.id}'.`);
    }

    // Server-side user fetching for interactive components
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const comments = await getIdeaSeedComments(seed.id);

    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 pb-24 px-6 md:px-12 relative">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-fuchsia-500/5 blur-[250px] rounded-full mix-blend-screen opacity-50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <Link href="/Idea-Seeds" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Idea Seeds
                </Link>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <header className="space-y-6">
                            <div className="flex items-center gap-3 text-xs text-white/40 uppercase tracking-wider font-medium">
                                <Sprout className="w-4 h-4 text-fuchsia-400" />
                                <span>Idea Seed</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span suppressHydrationWarning>{timeAgo(seed.created_at)}</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                                {seed.descriptor}
                            </h1>
                            
                            <Link href={seed.profiles?.handle ? `/builder/${seed.profiles.handle}` : '#'} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                {seed.profiles?.avatar_url ? (
                                    <Image 
                                        src={seed.profiles.avatar_url} 
                                        alt={seed.profiles.name || 'User'} 
                                        width={40} 
                                        height={40} 
                                        className="rounded-full bg-zinc-800"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                                        <User className="w-5 h-5 text-white/40" />
                                    </div>
                                )}
                                <div>
                                    <div className="text-sm font-medium text-white/90">
                                        {seed.profiles?.name || seed.profiles?.handle || 'Anonymous Builder'}
                                    </div>
                                    <div className="text-xs text-white/40">Planted this seed</div>
                                </div>
                            </Link>
                        </header>

                        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                            <h2 className="text-sm font-medium text-white/40 mb-3 tracking-widest uppercase">The One-Liner</h2>
                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                                {seed.one_liner}
                            </p>
                        </section>

                        {(seed.problem || seed.solution_hypothesis) && (
                            <div className="space-y-8">
                                {seed.problem && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-4">Problem Hypothesis</h2>
                                        <div className="prose prose-invert max-w-none text-white/70 leading-relaxed whitespace-pre-wrap">
                                            {seed.problem}
                                        </div>
                                    </section>
                                )}
                                
                                {seed.solution_hypothesis && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-4">Proposed Solution</h2>
                                        <div className="prose prose-invert max-w-none text-white/70 leading-relaxed whitespace-pre-wrap">
                                            {seed.solution_hypothesis}
                                        </div>
                                    </section>
                                )}

                                {seed.custom_sections && seed.custom_sections.map((section: any, index: number) => (
                                    <section key={index}>
                                        <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                                        <div className="prose prose-invert max-w-none text-white/70 leading-relaxed whitespace-pre-wrap">
                                            {section.content}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        )}

                        <hr className="border-white/10" />

                        <CommentThread 
                            seedId={seed.id} 
                            comments={comments} 
                            userId={user?.id}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <UpvotePanel 
                                seedId={seed.id} 
                                initialVotes={seed.idea_seed_votes || []} 
                                userId={user?.id}
                            />
                            
                            <div className="mt-6 p-6 rounded-xl border border-white/10 bg-[var(--background)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                                <h4 className="text-sm font-medium text-white mb-2">Build Together</h4>
                                <p className="text-xs text-white/50 leading-relaxed mb-4">
                                    Idea Seeds thrive on active collaboration. By signaling intent, you help founders find the conviction and talent needed to act.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
