"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { X } from "lucide-react";

export interface ArtifactFormData {
    id?: string;
    type: string;
    title: string;
    summary: string;
    content_url: string;
    media_urls: string[];
}

export function SubmitArtifactModal({ projectId, profileId, onClose, onSuccess, initialData }: { 
    projectId: string, 
    profileId: string, 
    onClose: () => void, 
    onSuccess: () => void,
    initialData?: ArtifactFormData
}) {
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    
    const MEDIA_TAGS = [
        'UI mockups',
        'architecture diagrams',
        'visual concepts',
        'product flows',
        'ad concepts',
        'charts',
        'screenshots of demos',
        'pitch graphics'
    ];

    // Ensure we have 5 slots for URLs, parsing any JSON-stringified URLs with tags
    const getInitialMediaData = () => {
        const urls = initialData?.media_urls || [];
        const parsedUrls = urls.map(u => {
            if (u.startsWith('{')) {
                try {
                    const parsed = JSON.parse(u);
                    return { url: parsed.url || '', tag: parsed.tag || MEDIA_TAGS[0] };
                } catch {
                    return { url: u, tag: MEDIA_TAGS[0] };
                }
            }
            return { url: u, tag: MEDIA_TAGS[0] };
        });
        return [...parsedUrls, 
            {url: '', tag: MEDIA_TAGS[0]}, {url: '', tag: MEDIA_TAGS[0]}, 
            {url: '', tag: MEDIA_TAGS[0]}, {url: '', tag: MEDIA_TAGS[0]}, 
            {url: '', tag: MEDIA_TAGS[0]}
        ].slice(0, 5);
    };

    const [formData, setFormData] = useState({
        type: initialData?.type || 'prototype',
        title: initialData?.title || '',
        summary: initialData?.summary || '',
        content_url: initialData?.content_url || '',
        media_data: getInitialMediaData()
    });

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const newData = [...formData.media_data];
        newData[index].url = 'Uploading...';
        setFormData({ ...formData, media_data: newData });

        const form = new FormData();
        form.append('file', file);

        try {
            const res = await fetch('/api/upload', { method: 'POST', body: form });
            const data = await res.json();
            const finalData = [...formData.media_data];
            if (data.url) {
                finalData[index].url = data.url;
            } else {
                finalData[index].url = '';
                alert('Upload failed: ' + (data.error || 'Unknown error'));
            }
            setFormData({ ...formData, media_data: finalData });
        } catch (err) {
            const finalData = [...formData.media_data];
            finalData[index].url = '';
            setFormData({ ...formData, media_data: finalData });
            alert('Upload failed.');
        }
    };

    const ARTIFACT_TYPES = [
        'prototype', 'design', 'repo', 'video', 'demo', 'visual concept', 
        'tagline set', 'wedge thesis', 'market insight', 'founder memo', 
        'policy angle', 'product thesis'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const cleanMediaUrls = formData.media_data
            .filter(item => item.url.trim() !== '')
            .map(item => JSON.stringify({ url: item.url.trim(), tag: item.tag }));

        const payload = {
            project_id: projectId,
            profile_id: profileId,
            type: formData.type,
            title: formData.title,
            summary: formData.summary,
            content_url: formData.content_url || null,
            media_urls: cleanMediaUrls,
            updated_at: new Date().toISOString()
        };

        let error;
        if (initialData?.id) {
            const updatePayload = {
                type: formData.type,
                title: formData.title,
                summary: formData.summary,
                content_url: formData.content_url || null,
                media_urls: cleanMediaUrls,
                updated_at: new Date().toISOString()
            };
            const { error: updateError } = await supabase.from('artifacts').update(updatePayload).eq('id', initialData.id);
            error = updateError;
        } else {
            const { error: insertError } = await supabase.from('artifacts').insert(payload);
            error = insertError;
        }

        setLoading(false);

        if (!error) {
            onSuccess();
        } else {
            console.error("Error submitting artifact:", error);
            alert("Failed to save artifact: " + error.message);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative glass-panel bg-[#06090c] border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto">
                
                <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5 text-white/50 hover:text-white" />
                </button>

                <h2 className="text-2xl font-serif text-white mb-2">{initialData ? 'Edit Artifact' : 'Add Artifact'}</h2>
                <p className="text-white/50 text-sm mb-8">{initialData ? 'Update your proof-of-work or structural notes.' : 'Attach public proof-of-work or structural notes to this idea.'}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Category</label>
                        <select 
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none appearance-none"
                            required
                        >
                            {ARTIFACT_TYPES.map(t => (
                                <option key={t} value={t} className="bg-black text-white">{t}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Title</label>
                        <input 
                            type="text" 
                            required
                            placeholder="E.g. iOS MVP Demo"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">External Link (Optional)</label>
                        <input 
                            type="url" 
                            placeholder="https://github.com/..."
                            value={formData.content_url}
                            onChange={(e) => setFormData({...formData, content_url: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white/80 text-sm focus:border-[#10b981] outline-none placeholder-white/20"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Summary</label>
                        <textarea 
                            required
                            placeholder="Brief description of what you explored or built..."
                            value={formData.summary}
                            onChange={(e) => setFormData({...formData, summary: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none min-h-[100px]"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Media Files & Tags (Up to 5)</label>
                        <div className="space-y-3">
                            {formData.media_data.map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <div className="flex-1 flex bg-white/5 border border-white/10 rounded-lg overflow-hidden focus-within:border-[#10b981]">
                                            <input 
                                                type="text" 
                                                placeholder={`Image URL ${i + 1}`}
                                                value={item.url}
                                                onChange={(e) => {
                                                    const newData = [...formData.media_data];
                                                    newData[i].url = e.target.value;
                                                    setFormData({...formData, media_data: newData});
                                                }}
                                                className="flex-1 bg-transparent p-3 text-white/80 text-sm outline-none placeholder-white/20"
                                            />
                                            <label className={`cursor-pointer border-l border-white/10 px-3 flex items-center justify-center text-[10px] font-mono uppercase tracking-widest transition-colors ${item.url === 'Uploading...' ? 'text-amber-400 bg-amber-400/10' : item.url ? 'text-[#10b981] bg-[#10b981]/10 hover:bg-[#10b981]/20' : 'text-[#10b981] hover:bg-[#10b981]/10'}`}>
                                                {item.url === 'Uploading...' ? 'Uploading...' : item.url ? '✓ Uploaded (Replace)' : 'Upload File'}
                                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, i)} />
                                            </label>
                                        </div>
                                        {item.url && (
                                            <select
                                                value={item.tag}
                                                onChange={(e) => {
                                                    const newData = [...formData.media_data];
                                                    newData[i].tag = e.target.value;
                                                    setFormData({...formData, media_data: newData});
                                                }}
                                                className="w-1/3 bg-white/5 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-lg p-3 text-amber-400 focus:border-[#10b981] outline-none appearance-none"
                                                required={!!item.url}
                                            >
                                                <option value="" disabled className="text-white/30">Select Tag</option>
                                                {MEDIA_TAGS.map(t => (
                                                    <option key={t} value={t} className="bg-[#06090c] text-white">{t}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                    {item.url && item.url !== 'Uploading...' && (
                                        <div className="w-full h-24 rounded-lg border border-white/10 overflow-hidden relative group">
                                             {/* eslint-disable-next-line @next/next/no-img-element */}
                                             <img src={item.url} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                        <button type="button" onClick={onClose} className="px-5 py-2 rounded-full text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading || formData.media_data.some(m => m.url === 'Uploading...')} className="px-6 py-2 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-mono text-xs uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            {loading ? 'Posting...' : (formData.media_data.some(m => m.url === 'Uploading...') ? 'Uploading...' : 'Publish')}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
