"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, MessageSquare, Reply } from 'lucide-react';
import { SendMessageModal } from '@/components/SendMessageModal';
import { problems } from '@/data/problem-atlas-data';

export default function InboxClientPage({ 
  profile, 
  messages, 
  comments 
}: { 
  profile: any, 
  messages: any[], 
  comments: any[] 
}) {
  const [activeReplyUser, setActiveReplyUser] = useState<{id: string, name: string} | null>(null);

  // Merge and sort
  const timeline = [
    ...messages.map(m => ({ ...m, _type: 'message' })),
    ...comments.map(c => ({ ...c, _type: 'comment' }))
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const getThemeColor = (projectSlug?: string) => {
      if (!projectSlug) return '#10b981';
      return problems.some(p => p.slug === projectSlug) ? 'orange-500' : '#10b981';
  };

  return (
    <div className="min-h-screen bg-[#06090c] text-white">
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
      
      <main className="container mx-auto px-6 py-20 max-w-3xl relative z-10">
        
        <div className="mb-12">
            <Link href={`/builder/${profile.handle}`} className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors mb-8">
                <ChevronLeft className="w-4 h-4" /> Back to Profile
            </Link>
            
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/30 text-[#10b981]">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-3xl font-serif">Inbox</h1>
                    <p className="text-white/50 font-mono text-xs tracking-widest uppercase mt-1">Direct Messages & Artifact Context</p>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            {timeline.length === 0 ? (
                <div className="p-12 border border-white/10 rounded-2xl bg-white/5 text-center">
                    <p className="text-white/50 font-light italic">Your inbox is empty.</p>
                </div>
            ) : (
                timeline.map((item) => {
                    const isMessage = item._type === 'message';
                    
                    if (isMessage) {
                        return (
                            <div key={`msg-${item.id}`} className="p-3 rounded-xl border border-white/5 bg-white-[0.02] relative group transition-colors hover:border-white/10">
                                <div className="flex items-start gap-3">
                                    <Link href={`/builder/${item.sender?.handle}`} className="w-6 h-6 rounded-full border border-white/10 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center mt-0.5">
                                        {item.sender?.avatar_url ? (
                                            <Image src={item.sender.avatar_url} alt={item.sender.name || 'User'} width={24} height={24} className="object-cover" />
                                        ) : (
                                            <span className="text-[10px] font-serif text-white/50">{item.sender?.name?.[0]?.toUpperCase()}</span>
                                        )}
                                    </Link>
                                    
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                                            <Link href={`/builder/${item.sender?.handle}`} className="group/link flex items-baseline gap-1.5">
                                                <span className="text-sm font-medium text-white transition-colors group-hover/link:text-[#10b981]">{item.sender?.name || 'Unknown'}</span>
                                                <span className="text-[10px] font-mono tracking-widest text-[#10b981]/70">@{item.sender?.handle}</span>
                                            </Link>
                                            <span className="text-white/30 text-[10px] font-mono">•</span>
                                            <span className="text-[10px] font-mono text-white/30 tracking-widest">{new Date(item.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between items-end gap-4 mt-1">
                                            <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">{item.content}</p>
                                            <button 
                                                onClick={() => setActiveReplyUser({ id: item.sender_id, name: item.sender?.name || 'User' })}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono uppercase tracking-widest text-[#10b981] hover:text-white px-2 py-1 rounded border border-[#10b981]/20"
                                            >
                                                Reply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        // Comment
                        const themeColor = getThemeColor(item.project_slug);
                        const isProblem = themeColor === 'orange-500';
                        const projectUrl = isProblem ? `/problem-atlas/${item.project_slug}` : `/${item.project_slug}`;
                        
                        return (
                            <div key={`cmt-${item.id}`} className="p-3 rounded-xl border border-white/5 bg-white-[0.02] relative transition-colors hover:border-white/10">
                                <div className="flex items-start gap-3">
                                    <Link href={`/builder/${item.profile?.handle}`} className="w-6 h-6 rounded-full border border-white/10 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center mt-0.5">
                                        {item.profile?.avatar_url ? (
                                            <Image src={item.profile.avatar_url} alt={item.profile.name || 'User'} width={24} height={24} className="object-cover" />
                                        ) : (
                                            <span className="text-[10px] font-serif text-white/50">{item.profile?.name?.[0]?.toUpperCase()}</span>
                                        )}
                                    </Link>
                                    
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                                            <Link href={`/builder/${item.profile?.handle}`} className="group/link flex items-baseline gap-1.5">
                                                <span className={`text-sm font-medium text-white transition-colors ${isProblem ? 'group-hover/link:text-orange-500' : 'group-hover/link:text-[#10b981]'}`}>{item.profile?.name || 'Unknown'}</span>
                                                <span className={`text-[10px] font-mono tracking-widest ${isProblem ? 'text-orange-500/70' : 'text-[#10b981]/70'}`}>@{item.profile?.handle}</span>
                                            </Link>
                                            <span className="text-white/30 text-[10px] font-mono">•</span>
                                            <span className="text-[10px] font-mono text-white/30 tracking-widest mr-1">{new Date(item.created_at).toLocaleDateString()}</span>
                                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">commented on:</span>
                                            <Link href={`${projectUrl}#artifact-${item.artifact?.id}`} className={`text-[10px] font-mono uppercase tracking-widest hover:underline ${isProblem ? 'text-orange-500' : 'text-[#10b981]'}`}>
                                                {item.artifact?.title || 'UNKNOWN ARTIFACT'} →
                                            </Link>
                                        </div>
                                        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap mt-1 border-l border-white/10 pl-3 py-0.5">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
            )}
        </div>

      </main>

      {activeReplyUser && (
          <SendMessageModal 
              receiverId={activeReplyUser.id}
              receiverName={activeReplyUser.name}
              onClose={() => setActiveReplyUser(null)}
              onSuccess={() => {
                  setActiveReplyUser(null);
                  alert("Reply sent!");
              }}
          />
      )}
    </div>
  );
}
