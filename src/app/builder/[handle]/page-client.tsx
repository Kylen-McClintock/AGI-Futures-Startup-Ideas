"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineTags } from '@/components/ProjectTags';
import { problems } from '@/data/problem-atlas-data';

import { SubmitArtifactModal } from '@/components/SubmitArtifactModal';
import { PrivateNotesSection } from '@/components/PrivateNotesSection';
import { FollowListModal } from '@/components/FollowListModal';
import { SendMessageModal } from '@/components/SendMessageModal';
import { createClient } from '@/utils/supabase/client';
import { Star } from "lucide-react";

export default function BuilderProfileClientPage({ 
  profile, 
  artifacts: initialArtifacts, 
  userForecasts = [],
  isOwner, 
  savedIdeas = [], 
  ideaNotes = [], 
  userEmail,
  currentUserId,
  initialFollowerCount = 0,
  initialFollowingCount = 0,
  initialIsFollowing = false,
  isFollowedByOwner = false
}: { 
  profile: any, 
  artifacts: any[], 
  userForecasts?: any[],
  isOwner?: boolean, 
  savedIdeas?: any[], 
  ideaNotes?: any[], 
  userEmail?: string | null,
  currentUserId?: string | null,
  initialFollowerCount?: number,
  initialFollowingCount?: number,
  initialIsFollowing?: boolean,
  isFollowedByOwner?: boolean
}) {

  const supabase = createClient();

  const [artifacts, setArtifacts] = React.useState(initialArtifacts);
  const [editingArtifact, setEditingArtifact] = React.useState<any>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = React.useState(false);
  const [editingNoteProjectId, setEditingNoteProjectId] = React.useState<string | null>(null);

  const [isOptedIn, setIsOptedIn] = React.useState(profile.newsletter_opt_in ?? true);
  const [isTogglingNewsletter, setIsTogglingNewsletter] = React.useState(false);

  const [followerCount, setFollowerCount] = React.useState(initialFollowerCount);
  const [followingCount] = React.useState(initialFollowingCount);
  const [isFollowing, setIsFollowing] = React.useState(initialIsFollowing);
  const [isTogglingFollow, setIsTogglingFollow] = React.useState(false);
  
  const [showFollowersModal, setShowFollowersModal] = React.useState(false);
  const [showFollowingModal, setShowFollowingModal] = React.useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = React.useState(false);

  const [sortBy, setSortBy] = React.useState<'recent' | 'upvoted'>('recent');
  const [displayLimit, setDisplayLimit] = React.useState(5);
  const [forecastLimit, setForecastLimit] = React.useState(5);

  const handleToggleFollow = async () => {
    if (!currentUserId) return;
    setIsTogglingFollow(true);
    
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount(prev => prev - 1);
      await supabase.from('follows').delete().eq('follower_id', currentUserId).eq('following_id', profile.id);
    } else {
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
      await supabase.from('follows').insert({ follower_id: currentUserId, following_id: profile.id });
    }
    
    setIsTogglingFollow(false);
  };

  const handleToggleNewsletter = async () => {
    setIsTogglingNewsletter(true);
    const newVal = !isOptedIn;
    setIsOptedIn(newVal);

    const { error } = await supabase
      .from('profiles')
      .update({ newsletter_opt_in: newVal })
      .eq('id', profile.id);

    if (error) {
        console.error("Failed to update newsletter preference", error);
        // revert optimistic update on failure
        setIsOptedIn(!newVal);
    }
    setIsTogglingNewsletter(false);
  };

  const getProjectUrl = (slug: string) => {
    const isProblem = problems.some(p => p.slug === slug);
    return isProblem ? `/problem-atlas/${slug}` : `/${slug}`;
  };

  React.useEffect(() => {
      if (typeof window !== 'undefined' && window.location.hash.startsWith('#artifact-') && artifacts.length > 0) {
          setDisplayLimit(100);
          setTimeout(() => {
              const element = document.getElementById(window.location.hash.substring(1));
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  element.classList.add('ring-2', 'ring-[#10b981]', 'ring-offset-8', 'ring-offset-[#06090c]', 'transition-all', 'duration-1000');
                  setTimeout(() => element.classList.remove('ring-2', 'ring-[#10b981]', 'ring-offset-8', 'ring-offset-[#06090c]'), 3000);
              }
          }, 500);
      }
  }, [artifacts]);

  const sortedArtifacts = [...artifacts].sort((a, b) => {
      if (sortBy === 'upvoted') return (b.likes || 0) - (a.likes || 0);
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const defaultArtifacts = sortedArtifacts.filter((a: any) => !problems.some(p => p.slug === a.project?.slug));
  const problemArtifacts = sortedArtifacts.filter((a: any) => problems.some(p => p.slug === a.project?.slug));

  const visibleDefaultArtifacts = defaultArtifacts.slice(0, displayLimit);
  const visibleProblemArtifacts = problemArtifacts.slice(0, displayLimit);

  return (
    <div className="min-h-screen bg-[#06090c] text-white">
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[var(--primary)]/10 to-transparent pointer-events-none" style={{ '--primary': '#10b981' } as any} />
      
      <main className="container mx-auto px-6 py-20 max-w-4xl relative z-10">
        
        {/* Profile Header */}
        <section className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 overflow-hidden relative shrink-0 bg-white/5 flex items-center justify-center">
              {profile.avatar_url ? (
                  <Image src={profile.avatar_url} alt={profile.name || "Avatar"} fill className="object-cover" />
              ) : (
                  <span className="text-4xl font-serif text-white/50">{profile.name?.[0]?.toUpperCase()}</span>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
                  <h1 className="text-4xl md:text-5xl font-serif">{profile.name}</h1>
                  {isOwner && (
                    <Link href="/onboarding" className="px-3 py-1 rounded-full border border-[#10b981]/50 text-[#10b981] hover:bg-[#10b981]/10 text-[10px] font-mono uppercase tracking-widest transition-colors flex shrink-0">
                      Edit Profile
                    </Link>
                  )}
                  {!isOwner && currentUserId && (
                    <div className="flex items-center gap-2">
                        <button 
                          onClick={handleToggleFollow}
                          disabled={isTogglingFollow}
                          className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors flex shrink-0 ${
                            isFollowing 
                              ? 'border border-white/20 text-white/50 hover:border-white/40 bg-white/5' 
                              : 'border border-[#10b981] text-[#10b981] hover:bg-[#10b981]/10 bg-transparent'
                          }`}
                        >
                          {isFollowing ? 'Following' : 'Follow'}
                        </button>

                        {(() => {
                            const pref = profile.message_preference || 'following';
                            let canContact = false;
                            let lockReason = '';
                            
                            if (pref === 'anyone') {
                                canContact = true;
                            } else if (pref === 'following' && isFollowedByOwner) {
                                canContact = true;
                            } else if (pref === 'nobody') {
                                canContact = false;
                                lockReason = 'Direct messaging is locked.';
                            } else if (pref === 'following' && !isFollowedByOwner) {
                                canContact = false;
                                lockReason = `${profile.name || 'This builder'} only accepts messages from people they follow.`;
                            }

                            if (!canContact) {
                                return (
                                    <button 
                                      title={lockReason} 
                                      disabled
                                      className="cursor-not-allowed flex items-center justify-center w-8 h-8 rounded-full border border-red-500/20 bg-red-500/5 text-red-500/50 shrink-0"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </button>
                                );
                            }

                            return (
                                <button 
                                  onClick={() => setIsMessageModalOpen(true)}
                                  className="flex items-center justify-center px-4 py-1.5 rounded-full border border-[#10b981] bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20 transition-all text-xs font-mono uppercase tracking-widest cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0"
                                >
                                    Message
                                </button>
                            );
                        })()}
                    </div>
                  )}
                </div>
                <p className="text-[#10b981] font-mono text-sm tracking-widest uppercase">@{profile.handle}</p>
              </div>

              {profile.headline && (
                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-6">
                      {profile.headline}
                  </p>
              )}

              {isOwner && userEmail && (
                 <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit shrink-0">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#10b981]/70 mb-1">Account Email</span>
                        <span className="text-sm font-medium text-white/90">{userEmail}</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10 mx-2 self-center"></div>
                    <div className="flex items-center gap-3 self-center">
                        <span className="text-xs text-white/70">Receive weekly newsletter</span>
                        <button 
                            onClick={handleToggleNewsletter} 
                            disabled={isTogglingNewsletter}
                            className={`w-10 h-5 rounded-full relative transition-colors ${isOptedIn ? 'bg-[#10b981]' : 'bg-white/20'} disabled:opacity-50`}
                        >
                            <div className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white transition-all duration-300 shadow-sm ${isOptedIn ? 'left-[22px]' : 'left-[3px]'}`} />
                        </button>
                    </div>
                 </div>
              )}

              {/* Social Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                  {isOwner && (
                      <div className="flex items-center gap-4 px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono shrink-0">
                          <div className="flex items-center gap-1.5">
                              <span className="text-white/50">DMs:</span> 
                              <span className={`${(profile.message_preference || 'following') === 'nobody' ? 'text-red-500' : 'text-[#10b981]'}`}>
                                  {(profile.message_preference || 'following') === 'nobody' ? 'Locked' : (profile.message_preference || 'following') === 'following' ? 'Following Only' : 'Open'}
                              </span>
                          </div>
                          <div className="w-px h-3 bg-white/10" />
                          <div className="flex items-center gap-1.5">
                              <span className="text-white/50">Email:</span> 
                              <span className={`${(profile.contact_preference || 'nobody') === 'nobody' ? 'text-red-500' : 'text-[#10b981]'}`}>
                                  {(profile.contact_preference || 'nobody') === 'nobody' ? 'Locked' : (profile.contact_preference || 'nobody') === 'following' ? 'Following Only' : 'Open'}
                              </span>
                          </div>
                      </div>
                  )}

                  {profile.provider_links && Object.entries(profile.provider_links).filter(([k,v]) => v).length > 0 && (
                      <>
                      {Object.entries(profile.provider_links).filter(([k,v]) => v).map(([platform, link]) => {
                          let display = platform.toUpperCase();
                          if (platform === 'x') display = 'X (Twitter)';
                          if (platform === 'github') display = 'GitHub';
                          if (platform === 'linkedin') display = 'LinkedIn';
                          if (platform === 'website') display = 'Website';
                          if (platform === 'portfolio') display = 'Portfolio';
                          if (platform === 'substack') display = 'Substack';
                          if (platform === 'huggingface') display = 'HuggingFace';
                          if (platform === 'email') {
                              const pref = profile.contact_preference || 'nobody';

                              let canContact = false;
                              let lockReason = '';
                              
                              if (pref === 'anyone' && currentUserId) {
                                  canContact = true;
                              } else if (pref === 'following' && isFollowedByOwner) {
                                  canContact = true;
                              } else if (pref === 'nobody') {
                                  canContact = false;
                                  lockReason = 'Direct contact is locked.';
                              } else if (pref === 'following' && !isFollowedByOwner) {
                                  canContact = false;
                                  lockReason = `${profile.name || 'This builder'} only accepts messages from people they follow.`;
                              } else if (pref === 'anyone' && !currentUserId) {
                                  canContact = false;
                                  lockReason = 'You must be logged in to see contact info.';
                              }

                              if (!canContact) {
                                  return (
                                      <div key={platform} title={lockReason} className="cursor-not-allowed flex items-center gap-2 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-500/50 text-xs font-mono">
                                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                          Contact Locked
                                      </div>
                                  )
                              }

                              return (
                                  <a key={platform} href={`mailto:${link}`} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20 hover:border-[#10b981]/50 transition-all text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                      Contact Me
                                  </a>
                              )
                          }
                          
                          return (
                              <a key={platform} href={link as string} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#10b981]/50 transition-all text-xs font-mono">
                                  {display} ↗
                              </a>
                          )
                      })}
                      </>
                  )}
              </div>

               <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {profile.builder_status?.map((status: string) => (
                    <span key={status} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
                        {status}
                    </span>
                ))}
              </div>
            </div>
        </section>

        <div className="grid md:grid-cols-[1fr_300px] gap-12">
            
            {/* Left Column: Artifacts & Thesis */}
            <div className="space-y-12">
                
                {profile.thesis && (
                    <section>
                      <h2 className="text-[#10b981] font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
                        <span className="w-6 h-px bg-[#10b981]/50 block" /> Builder Thesis
                      </h2>
                      <div className="prose prose-invert prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed">
                          <p>{profile.thesis}</p>
                      </div>
                    </section>
                )}

                <section>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h2 className="text-[#10b981] font-mono text-sm tracking-widest uppercase flex items-center gap-3">
                            <span className="w-6 h-px bg-[#10b981]/50 block" /> Proof of Work Artifacts
                        </h2>
                        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 shrink-0">
                            <button
                                onClick={() => setSortBy('recent')}
                                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-colors ${sortBy === 'recent' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-white/50 hover:text-white'}`}
                            >
                                Recent
                            </button>
                            <button
                                onClick={() => setSortBy('upvoted')}
                                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-colors ${sortBy === 'upvoted' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-white/50 hover:text-white'}`}
                            >
                                Upvoted
                            </button>
                        </div>
                    </div>

                    {defaultArtifacts.length === 0 ? (
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                            <p className="text-white/50 font-light text-sm italic">No startup artifacts published yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {visibleDefaultArtifacts.map((a: any) => (
                                <div key={a.id} className="p-6 border border-white/10 rounded-2xl bg-[#0a0f14]/50 hover:bg-[#0a0f14] hover:border-[#10b981]/30 transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#10b981] border border-[#10b981]/30 px-3 py-1 rounded-full bg-[#10b981]/10">
                                                {a.type}
                                            </span>
                                            {a.is_editors_pick && (
                                                <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded uppercase flex items-center gap-1.5 shadow-[0_0_10px_rgba(251,191,36,0.15)] ml-1">
                                                    <Star className="w-3 h-3 fill-amber-400" /> High-Signal
                                                </span>
                                            )}
                                            {isOwner && (
                                                <button onClick={() => {
                                                    setEditingArtifact(a);
                                                    setIsSubmitModalOpen(true);
                                                }} className="text-[10px] text-[#10b981]/60 hover:text-[#10b981] font-mono uppercase tracking-widest ml-2">
                                                    Edit
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs text-white/40">{new Date(a.created_at).toLocaleDateString()}</span>
                                            {a.updated_at && <span className="text-[9px] text-white/30 mt-0.5 font-mono uppercase tracking-widest">Edited {new Date(a.updated_at).toLocaleDateString()}</span>}
                                        </div>
                                    </div>
                                    <Link href={`/artifact/${a.slug || a.id}`}>
                                        <h3 className="text-xl font-medium text-white hover:text-[#10b981] transition-colors mb-2 inline-block">{a.title}</h3>
                                    </Link>
                                    {a.summary && <p className="text-white/60 text-sm leading-relaxed mb-4">{a.summary}</p>}

                                    {a.media_urls && a.media_urls.filter((u: string) => u).length > 0 && (
                                        <div className="flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-none snap-x w-full">
                                            {a.media_urls.filter((u: string) => u).map((raw: string, i: number) => {
                                                let url = raw;
                                                let tag = '';
                                                if (raw.startsWith('{')) {
                                                    try {
                                                        const parsed = JSON.parse(raw);
                                                        url = parsed.url;
                                                        tag = parsed.tag;
                                                    } catch {}
                                                }
                                                if (!url) return null;

                                                return (
                                                    <div 
                                                        key={i} 
                                                        className="relative h-24 w-auto min-w-[100px] shrink-0 snap-center overflow-hidden rounded-md border border-white/10 group cursor-pointer hover:border-[#10b981]/50 transition-colors"
                                                        onClick={() => window.open(url, '_blank')}
                                                        title="Click to view full image"
                                                    >
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={url} alt={tag || "Artifact media"} className="h-full w-auto object-cover" />
                                                        {tag && (
                                                            <div className="absolute top-1 left-1 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-mono text-amber-400 uppercase tracking-widest border border-white/10 whitespace-nowrap shadow-xl">
                                                                {tag}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                    
                                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-4 text-white/50">
                                            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                                <span>△</span> {a.likes}
                                            </span>
                                            {a.content_url && (
                                              <a href={a.content_url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 font-mono text-xs uppercase transition-colors">
                                                  [External Link]
                                              </a>
                                            )}
                                        </div>
                                        <Link href={getProjectUrl(a.project?.slug)} className="text-[#10b981]/70 hover:text-[#10b981] font-mono text-xs tracking-widest uppercase transition-colors">
                                            Idea: {a.project?.name} →
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            {defaultArtifacts.length > displayLimit && displayLimit < 20 && (
                                <div className="pt-4 pb-2 text-center">
                                    <button 
                                        onClick={() => setDisplayLimit(d => d + 5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors block w-full bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10"
                                    >
                                        Show More ({defaultArtifacts.length - displayLimit}) ↓
                                    </button>
                                </div>
                            )}

                            {displayLimit > 5 && (
                                <div className="pt-2 pb-2 text-center">
                                    <button 
                                        onClick={() => setDisplayLimit(5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-[#10b981] hover:text-[#10b981]/80 transition-colors block w-full bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl py-3 hover:bg-[#10b981]/20"
                                    >
                                        Collapse Feed ↑
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>

                <section className="mt-12 pt-8 border-t border-white/5">
                    <h2 className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-orange-500/50 block" /> Problem Atlas Artifacts
                    </h2>

                    {problemArtifacts.length === 0 ? (
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                            <p className="text-white/50 font-light text-sm italic">No problem artifacts published yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {visibleProblemArtifacts.map((a: any) => (
                                <div key={a.id} className="p-6 border border-white/10 rounded-2xl bg-[#0a0f14]/50 hover:bg-[#0a0f14] hover:border-orange-500/30 transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 border border-orange-500/30 px-3 py-1 rounded-full bg-orange-500/10">
                                                {a.type}
                                            </span>
                                            {a.is_editors_pick && (
                                                <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded uppercase flex items-center gap-1.5 shadow-[0_0_10px_rgba(251,191,36,0.15)] ml-1">
                                                    <Star className="w-3 h-3 fill-amber-400" /> High-Signal
                                                </span>
                                            )}
                                            {isOwner && (
                                                <button onClick={() => {
                                                    setEditingArtifact(a);
                                                    setIsSubmitModalOpen(true);
                                                }} className="text-[10px] text-orange-500/60 hover:text-orange-500 font-mono uppercase tracking-widest ml-2">
                                                    Edit
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs text-white/40">{new Date(a.created_at).toLocaleDateString()}</span>
                                            {a.updated_at && <span className="text-[9px] text-white/30 mt-0.5 font-mono uppercase tracking-widest">Edited {new Date(a.updated_at).toLocaleDateString()}</span>}
                                        </div>
                                    </div>
                                    <Link href={`/artifact/${a.slug || a.id}`}>
                                        <h3 className="text-xl font-medium text-white hover:text-orange-500 transition-colors mb-2 inline-block">{a.title}</h3>
                                    </Link>
                                    {a.summary && <p className="text-white/60 text-sm leading-relaxed mb-4">{a.summary}</p>}

                                    {a.media_urls && a.media_urls.filter((u: string) => u).length > 0 && (
                                        <div className="flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-none snap-x w-full">
                                            {a.media_urls.filter((u: string) => u).map((raw: string, i: number) => {
                                                let url = raw;
                                                let tag = '';
                                                if (raw.startsWith('{')) {
                                                    try {
                                                        const parsed = JSON.parse(raw);
                                                        url = parsed.url;
                                                        tag = parsed.tag;
                                                    } catch {}
                                                }
                                                if (!url) return null;

                                                return (
                                                    <div 
                                                        key={i} 
                                                        className="relative h-24 w-auto min-w-[100px] shrink-0 snap-center overflow-hidden rounded-md border border-white/10 group cursor-pointer hover:border-orange-500/50 transition-colors"
                                                        onClick={() => window.open(url, '_blank')}
                                                        title="Click to view full image"
                                                    >
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={url} alt={tag || "Artifact media"} className="h-full w-auto object-cover" />
                                                        {tag && (
                                                            <div className="absolute top-1 left-1 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-mono text-amber-400 uppercase tracking-widest border border-white/10 whitespace-nowrap shadow-xl">
                                                                {tag}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                    
                                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-4 text-white/50">
                                            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                                <span>△</span> {a.likes}
                                            </span>
                                            {a.content_url && (
                                              <a href={a.content_url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 font-mono text-xs uppercase transition-colors">
                                                  [External Link]
                                              </a>
                                            )}
                                        </div>
                                        <Link href={getProjectUrl(a.project?.slug)} className="text-orange-500/70 hover:text-orange-500 font-mono text-xs tracking-widest uppercase transition-colors">
                                            Problem: {a.project?.name} →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {problemArtifacts.length > displayLimit && displayLimit < 20 && (
                                <div className="pt-4 pb-2 text-center">
                                    <button 
                                        onClick={() => setDisplayLimit(d => d + 5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors block w-full bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10"
                                    >
                                        Show More ({problemArtifacts.length - displayLimit}) ↓
                                    </button>
                                </div>
                            )}

                            {displayLimit > 5 && (
                                <div className="pt-2 pb-2 text-center">
                                    <button 
                                        onClick={() => setDisplayLimit(5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-orange-500 hover:text-orange-500/80 transition-colors block w-full bg-orange-500/10 border border-orange-500/20 rounded-xl py-3 hover:bg-orange-500/20"
                                    >
                                        Collapse Feed ↑
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>

                <section className="mt-12 pt-8 border-t border-white/5">
                    <h2 className="text-[#3bf4a4] font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-[#3bf4a4]/50 block" /> Submitted Forecasts
                    </h2>

                    {userForecasts.length === 0 ? (
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                            <p className="text-white/50 font-light text-sm italic">No forecasts submitted yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {userForecasts.slice(0, forecastLimit).map((ans: any) => (
                                <Link href="/forecasts/live" key={ans.id} className="block p-5 border border-white/5 rounded-2xl bg-[#0a0f14]/50 hover:bg-[#0a0f14] hover:border-[#3bf4a4]/30 transition-all group">
                                    <div className="flex items-start justify-between mb-3 gap-4">
                                        <h3 className="text-lg font-serif text-white group-hover:text-[#3bf4a4] transition-colors leading-snug">
                                            {ans.forecast?.question}
                                        </h3>
                                        <span className="text-[10px] font-mono text-[#3bf4a4]/60 uppercase tracking-widest shrink-0 mt-1">{new Date(ans.created_at).toLocaleDateString()}</span>
                                    </div>
                                    
                                    <div className="mt-4 p-4 rounded-xl border border-[#3bf4a4]/20 bg-[#3bf4a4]/5 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 group-hover:bg-[#3bf4a4]/10 transition-colors">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#3bf4a4]/60 shrink-0">Predicted</span>
                                        <div className="flex-1">
                                            {ans.answer_mode === 'quick' ? (
                                                <div className="text-lg font-mono text-[#3bf4a4] font-medium tracking-tight">
                                                    {ans.forecast?.type === 'multiple_choice' || ans.forecast?.type === 'company_actor' || ans.forecast?.type === 'cause_mechanism' ? (
                                                        Object.keys(ans.answer_data?.options || {}).filter(k => ans.answer_data.options[k] > 0).map(k => `${k} (${Math.round(ans.answer_data.options[k] * 100)}%)`).join(', ')
                                                    ) : ans.forecast?.type === 'binary' || ans.forecast?.type === 'binary_by_deadline' ? (
                                                        `Yes: ${Math.round((ans.answer_data?.yes || 0) * 100)}%`
                                                    ) : ans.forecast?.type === 'year_or_never' ? (
                                                        `Year Estimate: ${Object.keys(ans.answer_data?.years || {}).length > 0 ? Object.keys(ans.answer_data.years).join(', ') : 'Never'}`
                                                    ) : ans.forecast?.type === 'bucketed_magnitude' ? (
                                                        Object.keys(ans.answer_data?.options || {}).filter(k => ans.answer_data.options[k] > 0).map(k => `${k} (${Math.round(ans.answer_data.options[k] * 100)}%)`).join(', ')
                                                    ) : (
                                                        'Submitted'
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-1.5 w-full mt-2 lg:mt-0 max-w-xs">
                                                    {Object.entries(ans.answer_data?.options || {}).map(([key, value]) => {
                                                        const pct = Math.round((value as number) * 100);
                                                        return (
                                                            <div key={key} className="flex items-center gap-3 text-[10px] font-mono">
                                                                <span className="w-24 truncate text-white/50 text-right uppercase tracking-wider">{key}</span>
                                                                <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden flex items-center border border-white/5">
                                                                    <div className="h-full bg-[#3bf4a4]/80 shadow-[0_0_10px_rgba(59,244,164,0.3)] transition-all duration-1000" style={{ width: `${pct}%` }}></div>
                                                                </div>
                                                                <span className="w-8 text-[#3bf4a4] text-right font-medium">{pct}%</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {ans.reasoning && (
                                        <p className="mt-4 text-sm text-white/50 italic border-l-2 border-white/10 pl-3">"{ans.reasoning}"</p>
                                    )}
                                </Link>
                            ))}

                            {userForecasts.length > forecastLimit && (
                                <div className="pt-4 pb-2 text-center">
                                    <button 
                                        onClick={() => setForecastLimit(l => l + 5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors block w-full bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10"
                                    >
                                        Show More ({userForecasts.length - forecastLimit}) ↓
                                    </button>
                                </div>
                            )}

                            {forecastLimit > 5 && (
                                <div className="pt-2 pb-2 text-center">
                                    <button 
                                        onClick={() => setForecastLimit(5)}
                                        className="text-[10px] font-mono uppercase tracking-widest text-[#3bf4a4] hover:text-[#3bf4a4]/80 transition-colors block w-full bg-[#3bf4a4]/10 border border-[#3bf4a4]/20 rounded-xl py-3 hover:bg-[#3bf4a4]/20"
                                    >
                                        Collapse Feed ↑
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </div>

            {/* Right Column */}
            <div className="space-y-12">

                {isOwner && (
                    <section>
                      <h2 className="text-[#10b981] font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-[#10b981]/50 block" /> My Network
                      </h2>
                      <div className="flex flex-col gap-3">
                          <button onClick={() => setShowFollowersModal(true)} className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#10b981]/30 transition-all flex justify-between items-center group">
                              <span className="text-sm text-white/80 font-medium font-mono uppercase tracking-widest">Followers</span>
                              <div className="flex items-center gap-3">
                                  <span className="text-xl font-serif text-[#10b981]">{followerCount}</span>
                                  <span className="text-white/30 group-hover:text-[#10b981] transition-colors">→</span>
                              </div>
                          </button>
                          
                          <button onClick={() => setShowFollowingModal(true)} className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#10b981]/30 transition-all flex justify-between items-center group">
                              <span className="text-sm text-white/80 font-medium font-mono uppercase tracking-widest">Following</span>
                              <div className="flex items-center gap-3">
                                  <span className="text-xl font-serif text-[#10b981]">{followingCount}</span>
                                  <span className="text-white/30 group-hover:text-[#10b981] transition-colors">→</span>
                              </div>
                          </button>
                          
                          <Link href={`/builder/${profile.handle}/feed`} className="w-full text-center mt-2 p-3 rounded-lg bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 hover:bg-[#10b981]/20 transition-all text-sm font-mono uppercase tracking-widest">
                             Network Update Feed
                          </Link>
                          <Link href={`/builder/${profile.handle}/inbox`} className="w-full text-center p-3 rounded-lg bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-sm font-mono uppercase tracking-widest">
                             Inbox
                          </Link>
                      </div>
                    </section>
                )}
                
                {profile.goals && profile.goals.length > 0 && (
                  <div>
                      <h3 className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-3">Current Goals</h3>
                      <ul className="space-y-2">
                          {profile.goals.map((goal: string) => (
                              <li key={goal} className="text-sm text-white/80 flex items-start gap-2">
                                  <span className="text-[#10b981] mt-0.5">▪</span> {goal}
                              </li>
                          ))}
                      </ul>
                  </div>
                )}

                {profile.sectors && profile.sectors.length > 0 && (
                  <div>
                      <InlineTags label="Sectors" tags={profile.sectors} theme="blue" />
                  </div>
                )}
                
                {profile.top_skills && profile.top_skills.length > 0 && (
                  <div>
                      <h3 className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-3">Top Skills</h3>
                      <div className="flex flex-wrap gap-2">
                          {profile.top_skills.map((skill: string) => (
                              <span key={skill} className="px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs text-amber-500 font-mono">
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </div>
                )}
                
                {profile.outcomes && profile.outcomes.length > 0 && (
                  <div>
                      <h3 className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-3">Targeted Outcomes</h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-white/80 marker:text-purple-400 marker:font-mono">
                          {profile.outcomes.map((outcome: string) => (
                              <li key={outcome} className="pl-2">
                                  {outcome}
                              </li>
                          ))}
                      </ol>
                  </div>
                )}

                {profile.frontier_tech_familiarity && Object.keys(profile.frontier_tech_familiarity).length > 0 && (
                  <div>
                      <h3 className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-3">Frontier Tech</h3>
                      <div className="space-y-2">
                          {Object.entries(profile.frontier_tech_familiarity).map(([tech, level]) => (
                               <div key={tech} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                   <span className="text-white/80">{tech}</span>
                                   <span className="text-amber-500/80 font-mono text-[10px] uppercase">{String(level)}</span>
                               </div>
                          ))}
                      </div>
                  </div>
                )}
            </div>

        </div>

        {/* Private Dashboard Section (Owner Only) */}
        {isOwner && (savedIdeas.length > 0 || ideaNotes.length > 0) && (
            <div className="mt-16 pt-12 border-t border-white/10 space-y-12">
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                        <span className="w-6 h-px bg-amber-500/50 block" /> Private Dashboard
                    </h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        Only visible to you
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Interested Ideas */}
                    {(savedIdeas.length > 0) && (
                        <div className="space-y-8">
                            {savedIdeas.filter(s => !problems.some(p => p.slug === s.project?.slug)).length > 0 && (
                                <section>
                                    <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-6">Startups I'm Interested In</h3>
                                    <div className="space-y-3">
                                        {savedIdeas.filter(s => !problems.some(p => p.slug === s.project?.slug)).map((saved: any, i: number) => (
                                            <Link key={i} href={getProjectUrl(saved.project?.slug)} className="block p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                                                <h4 className="text-white font-medium group-hover:text-[#10b981] transition-colors">{saved.project?.name}</h4>
                                                <div className="text-white/40 text-xs mt-1">Saved on {new Date(saved.created_at).toLocaleDateString()}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                            
                            {savedIdeas.filter(s => problems.some(p => p.slug === s.project?.slug)).length > 0 && (
                                <section>
                                    <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-6">Problems I'm Interested In</h3>
                                    <div className="space-y-3">
                                        {savedIdeas.filter(s => problems.some(p => p.slug === s.project?.slug)).map((saved: any, i: number) => (
                                            <Link key={i} href={getProjectUrl(saved.project?.slug)} className="block p-4 rounded-xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all group" style={{ '--primary': '#fb923c' } as React.CSSProperties}>
                                                <h4 className="text-white font-medium group-hover:text-[var(--primary)] transition-colors">{saved.project?.name}</h4>
                                                <div className="text-white/40 text-xs mt-1">Saved on {new Date(saved.created_at).toLocaleDateString()}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    )}

                    {/* Private Notes */}
                    {(ideaNotes.length > 0) && (
                        <div className="space-y-8">
                            {ideaNotes.filter(n => !problems.some(p => p.slug === n.project?.slug)).length > 0 && (
                                <section>
                                    <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-6">Startup Notes</h3>
                                    <div className="space-y-4">
                                        {ideaNotes.filter(n => !problems.some(p => p.slug === n.project?.slug)).map((note: any, i: number) => (
                                            <div key={i} className="p-5 rounded-xl border border-[#10b981]/10 bg-[#10b981]/5 relative group">
                                                <div className="flex justify-between items-start mb-2 mt-1">
                                                    <Link href={getProjectUrl(note.project?.slug)} className="text-[#10b981]/80 hover:text-[#10b981] font-mono text-[10px] uppercase tracking-widest transition-colors block">
                                                        {note.project?.name} →
                                                    </Link>
                                                    <button 
                                                        onClick={() => {
                                                            setEditingNoteProjectId(note.project_id);
                                                            setIsNotesModalOpen(true);
                                                        }} 
                                                        className="text-[10px] text-[#10b981]/60 hover:text-[#10b981] font-mono uppercase tracking-widest transition-colors"
                                                    >
                                                        Edit Note
                                                    </button>
                                                </div>
                                                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{note.content}</p>
                                                <div className="text-white/30 text-[10px] uppercase tracking-widest mt-4">
                                                    Last edit: {new Date(note.updated_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {ideaNotes.filter(n => problems.some(p => p.slug === n.project?.slug)).length > 0 && (
                                <section>
                                    <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-6">Problem Notes</h3>
                                    <div className="space-y-4">
                                        {ideaNotes.filter(n => problems.some(p => p.slug === n.project?.slug)).map((note: any, i: number) => (
                                            <div key={i} className="p-5 rounded-xl border border-orange-500/10 bg-orange-500/5 relative group">
                                                <div className="flex justify-between items-start mb-2 mt-1">
                                                    <Link href={getProjectUrl(note.project?.slug)} className="text-orange-500/80 hover:text-orange-500 font-mono text-[10px] uppercase tracking-widest transition-colors block">
                                                        {note.project?.name} →
                                                    </Link>
                                                    <button 
                                                        onClick={() => {
                                                            setEditingNoteProjectId(note.project_id);
                                                            setIsNotesModalOpen(true);
                                                        }} 
                                                        className="text-[10px] text-orange-500/60 hover:text-orange-500 font-mono uppercase tracking-widest transition-colors"
                                                    >
                                                        Edit Note
                                                    </button>
                                                </div>
                                                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{note.content}</p>
                                                <div className="text-white/30 text-[10px] uppercase tracking-widest mt-4">
                                                    Last edit: {new Date(note.updated_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )}

        {isSubmitModalOpen && editingArtifact && profile && (
            <SubmitArtifactModal 
                projectId={editingArtifact.project_id} 
                profileId={profile.id} 
                initialData={editingArtifact}
                onClose={() => {
                    setIsSubmitModalOpen(false);
                    setEditingArtifact(null);
                }} 
                onSuccess={() => {
                    // Quick reload of artifacts to reflect changes without full page refresh
                    window.location.reload();
                }}
            />
        )}

        {isNotesModalOpen && editingNoteProjectId && profile && (
            <PrivateNotesSection 
                projectId={editingNoteProjectId} 
                profileId={profile.id} 
                onClose={() => {
                    setIsNotesModalOpen(false);
                    setEditingNoteProjectId(null);
                    window.location.reload(); // Quick refresh to show edited note
                }}
            />
        )}
             
             {showFollowersModal && (
                <FollowListModal profileId={profile.id} type="followers" onClose={() => setShowFollowersModal(false)} />
             )}

             {showFollowingModal && (
                <FollowListModal profileId={profile.id} type="following" onClose={() => setShowFollowingModal(false)} />
             )}

             {isMessageModalOpen && (
                 <SendMessageModal 
                     receiverId={profile.id} 
                     receiverName={profile.name} 
                     onClose={() => setIsMessageModalOpen(false)} 
                     onSuccess={() => {
                         setIsMessageModalOpen(false);
                         alert("Message sent successfully!");
                     }}
                 />
             )}
      </main>
    </div>
  );
}
