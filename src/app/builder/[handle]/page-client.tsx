"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineTags } from '@/components/ProjectTags';
import { problems } from '@/data/problem-atlas-data';

import { SubmitArtifactModal } from '@/components/SubmitArtifactModal';
import { PrivateNotesSection } from '@/components/PrivateNotesSection';

export default function BuilderProfileClientPage({ profile, artifacts: initialArtifacts, isOwner, savedIdeas = [], ideaNotes = [] }: { profile: any, artifacts: any[], isOwner?: boolean, savedIdeas?: any[], ideaNotes?: any[] }) {

  const [artifacts, setArtifacts] = React.useState(initialArtifacts);
  const [editingArtifact, setEditingArtifact] = React.useState<any>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = React.useState(false);
  const [editingNoteProjectId, setEditingNoteProjectId] = React.useState<string | null>(null);

  const getProjectUrl = (slug: string) => {
    const isProblem = problems.some(p => p.slug === slug);
    return isProblem ? `/problem-atlas/${slug}` : `/${slug}`;
  };

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
                </div>
                <p className="text-[#10b981] font-mono text-sm tracking-widest uppercase">@{profile.handle}</p>
              </div>

              {profile.headline && (
                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-6">
                      {profile.headline}
                  </p>
              )}

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
                    <h2 className="text-[#10b981] font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-[#10b981]/50 block" /> Startup Artificial Work
                    </h2>

                    {artifacts.filter((a: any) => !problems.some(p => p.slug === a.project?.slug)).length === 0 ? (
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                            <p className="text-white/50 font-light text-sm italic">No startup artifacts published yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {artifacts.filter((a: any) => !problems.some(p => p.slug === a.project?.slug)).map((a: any) => (
                                <div key={a.id} className="p-6 border border-white/10 rounded-2xl bg-[#0a0f14]/50 hover:bg-[#0a0f14] hover:border-[#10b981]/30 transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#10b981] border border-[#10b981]/30 px-2 py-0.5 rounded-full bg-[#10b981]/10">
                                                {a.type}
                                            </span>
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
                                    <h3 className="text-xl font-medium text-white mb-2">{a.title}</h3>
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
                        </div>
                    )}
                </section>

                <section className="mt-12 pt-8 border-t border-white/5">
                    <h2 className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-orange-500/50 block" /> Problem Atlas Artifacts
                    </h2>

                    {artifacts.filter((a: any) => problems.some(p => p.slug === a.project?.slug)).length === 0 ? (
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                            <p className="text-white/50 font-light text-sm italic">No problem artifacts published yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {artifacts.filter((a: any) => problems.some(p => p.slug === a.project?.slug)).map((a: any) => (
                                <div key={a.id} className="p-6 border border-white/10 rounded-2xl bg-[#0a0f14]/50 hover:bg-[#0a0f14] hover:border-orange-500/30 transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded-full bg-orange-500/10">
                                                {a.type}
                                            </span>
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
                                    <h3 className="text-xl font-medium text-white mb-2">{a.title}</h3>
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
                        </div>
                    )}
                </section>
            </div>

            {/* Right Column: Tags & Info */}
            <div className="space-y-8">
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
      </main>
    </div>
  );
}
