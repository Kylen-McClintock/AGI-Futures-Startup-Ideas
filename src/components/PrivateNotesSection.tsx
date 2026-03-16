"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { X, Lock } from "lucide-react";

export function PrivateNotesSection({ projectId, profileId, onClose }: { projectId: string, profileId: string, onClose: () => void }) {
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    // Load existing note if any
    useEffect(() => {
        async function loadNote() {
            setLoading(true);
            const { data } = await supabase
                .from('idea_notes')
                .select('content, updated_at')
                .eq('project_id', projectId)
                .eq('profile_id', profileId)
                .single();
            
            if (data) {
                setContent(data.content);
                setLastSaved(new Date(data.updated_at));
            }
            setLoading(false);
        }
        loadNote();
    }, [projectId, profileId, supabase]);

    const handleSave = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('idea_notes')
            .upsert({
                project_id: projectId,
                profile_id: profileId,
                content: content,
                updated_at: new Date().toISOString()
            }, { onConflict: 'project_id,profile_id' })
            .select('updated_at')
            .single();

        if (!error && data) {
            setLastSaved(new Date(data.updated_at));
            
            // Automatically mark this idea as "Interested" since they are keeping notes on it
            await supabase.from('saved_ideas').upsert({
                project_id: projectId,
                profile_id: profileId
            }, { onConflict: 'project_id,profile_id' });
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative glass-panel bg-[#06090c] border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] flex flex-col">
                
                <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5 text-white/50 hover:text-white" />
                </button>

                <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-white/50" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif text-white">Private Notes</h2>
                        <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-1">Only visible to you</p>
                    </div>
                </div>

                <div className="flex-1 min-h-[300px] flex flex-col">
                    <textarea 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Drop research links, strategy thoughts, edge case analysis, or draft memos here. This stays private..."
                        className="w-full flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white/90 leading-relaxed focus:border-white/30 outline-none resize-none font-light"
                    />
                </div>

                <div className="pt-6 flex justify-between items-center mt-auto border-t border-white/10">
                    <div className="text-white/30 text-xs font-mono">
                        {lastSaved ? `Last saved: ${lastSaved.toLocaleTimeString()}` : 'Not saved yet'}
                    </div>
                    <div className="flex gap-3">
                        <button onClick={onClose} className="px-5 py-2 rounded-full text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                            Close
                        </button>
                        <button onClick={handleSave} disabled={loading} className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest transition-colors disabled:opacity-50">
                            {loading ? 'Saving...' : 'Save Draft'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
