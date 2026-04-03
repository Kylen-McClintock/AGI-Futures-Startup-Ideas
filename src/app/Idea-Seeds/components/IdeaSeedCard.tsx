'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { IdeaSeed } from '../actions';
import { deleteIdeaSeed } from '../actions';
import Link from 'next/link';
import { timeAgo } from '@/utils/timeAgo';
import { ArrowUpRight, Flame, Droplet, User, Sprout, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface IdeaSeedCardProps {
    seed: IdeaSeed;
    currentUserId?: string;
}

export default function IdeaSeedCard({ seed, currentUserId }: IdeaSeedCardProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    
    // Process votes. Normally we'd do this in the SQL View, but for the MVP we count them in JS
    const votes = seed.idea_seed_votes || [];
    const totalVotes = votes.length;
    
    // Determine the most popular vote type as a signal
    const voteCounts = {
        world_needs_this: votes.filter(v => v.vote_type === 'world_needs_this').length,
        id_build_this: votes.filter(v => v.vote_type === 'id_build_this').length,
        id_fund_this: votes.filter(v => v.vote_type === 'id_fund_this').length,
        id_use_this: votes.filter(v => v.vote_type === 'id_use_this').length,
    };
    
    return (
        <Link 
            href={`/Idea-Seeds/${seed.slug || seed.id}`}
            className="group block rounded-xl border border-white/10 bg-black/40 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-[var(--primary)]/50 relative overflow-hidden"
        >
            {/* Ambient hover glow */}
            <div className="absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-[var(--primary)] via-fuchsia-500 to-purple-600 rounded-xl blur-xl" />
            
            <div className="relative z-10 w-full">
                <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-medium text-white group-hover:text-[var(--primary)] transition-colors pr-8">
                        {seed.descriptor}
                    </h3>
                    
                    {currentUserId === seed.profile_id && (
                        <button 
                            disabled={isDeleting}
                            className="absolute top-0 right-0 p-1.5 rounded-md hover:bg-red-500/20 text-white/20 hover:text-red-400 transition-colors z-20 group/btn"
                            onClick={async (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (confirm("Delete this idea seed?")) {
                                    setIsDeleting(true);
                                    await deleteIdeaSeed(seed.id);
                                    router.refresh();
                                    setIsDeleting(false);
                                }
                            }}
                            title="Delete your idea seed"
                        >
                            <Trash2 className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                    )}
                    
                    {totalVotes > 0 && currentUserId !== seed.profile_id && (
                        <div className="flex items-center gap-1.5 text-xs font-medium bg-white/5 border border-white/10 px-2 py-1 rounded-full text-white/70">
                            <Flame className="w-3.5 h-3.5 text-orange-400" />
                            <span>{totalVotes}</span>
                        </div>
                    )}
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {seed.one_liner}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                    <div 
                        className="flex items-center gap-2 group/profile cursor-pointer z-20 relative p-1 -ml-1 rounded-md hover:bg-white/5 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (seed.profiles?.handle) {
                                router.push(`/builder/${seed.profiles.handle}`);
                            }
                        }}
                    >
                        {seed.profiles?.avatar_url ? (
                            <Image 
                                src={seed.profiles.avatar_url} 
                                alt={seed.profiles.name || 'User'} 
                                width={24} 
                                height={24} 
                                className="rounded-full bg-zinc-800"
                            />
                        ) : (
                            <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                                <User className="w-3 h-3 text-white/40" />
                            </div>
                        )}
                        <span className="text-xs text-white/50 truncate max-w-[120px] group-hover/profile:text-white/80 transition-colors">
                            {seed.profiles?.name || seed.profiles?.handle || 'Anonymous Builder'}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-white/40">
                        <span suppressHydrationWarning>{timeAgo(seed.created_at)}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--primary)]" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
