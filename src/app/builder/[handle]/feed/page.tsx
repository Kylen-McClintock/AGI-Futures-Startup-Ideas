import { createClient } from '@/utils/supabase/server';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';

export default async function NetworkFeedPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const supabase = await createClient();

  // 1. Fetch Profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, handle, name')
    .eq('handle', handle)
    .single();

  if (!profile) return notFound();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.id !== profile.id) {
    return redirect(`/builder/${handle}`); // Only owner can see their feed
  }

  // 2. Fetch Following IDs
  const { data: follows } = await supabase
    .from('follows')
    .select('following_id')
    .eq('follower_id', profile.id);

  const followingIds = follows?.map(f => f.following_id) || [];

  // 3. Fetch Network Artifacts
  let artifacts: any[] = [];
  if (followingIds.length > 0) {
    const { data: networkArtifacts } = await supabase
      .from('artifacts')
      .select(`
        *,
        project:projects ( slug, name ),
        profile:profiles ( handle, name, avatar_url )
      `)
      .in('profile_id', followingIds)
      .order('created_at', { ascending: false })
      .limit(50);
      
      artifacts = networkArtifacts || [];
  }

  return (
    <div className="min-h-screen bg-[#06090c] text-white">
      <div className="absolute top-0 inset-x-0 h-[30vh] bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
      
      <main className="container mx-auto px-6 py-20 max-w-3xl relative z-10">
        <Link href={`/builder/${profile.handle}`} className="text-[#10b981] font-mono text-xs uppercase tracking-widest hover:underline mb-8 inline-block">
          ← Back to Profile
        </Link>
        <h1 className="text-4xl font-serif mb-4">Network Feed</h1>
        <p className="text-white/50 mb-12">Recent artifacts from builders you follow.</p>

        {artifacts.length === 0 ? (
           <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
             <p className="text-white/50 font-light italic">Your network hasn't published anything recently. Follow more builders!</p>
           </div>
        ) : (
          <div className="space-y-6">
             {artifacts.map(a => (
                <div key={a.id} className="p-6 border border-white/10 rounded-2xl bg-[#0a0f14]/80 hover:border-[#10b981]/30 transition-all">
                   <div className="flex items-center gap-3 mb-4">
                      {a.profile?.avatar_url ? (
                         <img src={a.profile.avatar_url} alt="" className="w-8 h-8 rounded-full border border-white/10 object-cover" />
                      ) : (
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-serif text-xs">{a.profile?.name?.[0]}</div>
                      )}
                      <div>
                        <Link href={`/builder/${a.profile?.handle}`} className="text-sm font-medium hover:text-[#10b981] transition-colors">{a.profile?.name}</Link>
                        <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-0.5">Published an Artifact</p>
                      </div>
                   </div>
                   
                   <h3 className="text-xl font-medium text-white mb-2">{a.title}</h3>
                   <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#10b981] border border-[#10b981]/30 px-2 py-0.5 rounded-full bg-[#10b981]/10 mb-3">
                       {a.type}
                   </span>
                   {a.summary && <p className="text-white/70 text-sm leading-relaxed mb-4">{a.summary}</p>}
                   
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
                                        className="relative h-24 w-auto min-w-[100px] shrink-0 snap-center overflow-hidden rounded-md border border-white/10 group hover:border-[#10b981]/50 transition-colors"
                                        title="Artifact media"
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

                   {a.project && (
                     <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-4">
                       <Link href={`/${a.project.slug}`} className="text-xs font-mono uppercase tracking-widest text-[#10b981] hover:underline">
                         View on {a.project.name} →
                       </Link>
                       <span className="text-xs text-white/40">
                         {new Date(a.created_at).toLocaleDateString()}
                       </span>
                     </div>
                   )}
                </div>
             ))}
          </div>
        )}
      </main>
    </div>
  )
}
