"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { X, Send } from "lucide-react";

export function SendMessageModal({ 
    receiverId, 
    receiverName, 
    onClose, 
    onSuccess 
}: { 
    receiverId: string, 
    receiverName: string, 
    onClose: () => void, 
    onSuccess: () => void 
}) {
    const supabase = createClient();
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;
        
        setLoading(true);
        setErrorMsg("");

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setErrorMsg("You must be logged in to send messages.");
            setLoading(false);
            return;
        }

        const { error } = await supabase.from('messages').insert({
            sender_id: user.id,
            receiver_id: receiverId,
            content: content.trim()
        });

        setLoading(false);

        if (error) {
            setErrorMsg(error.message);
        } else {
            onSuccess();
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative glass-panel bg-[#06090c] border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                
                <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5 text-white/50 hover:text-white" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/30">
                        <Send className="w-4 h-4 text-[#10b981]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-serif text-white">Message {receiverName}</h2>
                        <p className="text-[#10b981]/70 text-[10px] font-mono tracking-widest uppercase">Direct Message Protocol</p>
                    </div>
                </div>

                {errorMsg && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-xs font-mono tracking-wide">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea 
                        required
                        autoFocus
                        placeholder="Write your message..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-[#10b981] outline-none min-h-[150px] leading-relaxed resize-none shadow-inner"
                    />

                    <div className="flex justify-between items-center pt-2">
                        <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                            {content.length} chars
                        </span>
                        <div className="flex gap-3">
                            <button type="button" onClick={onClose} className="px-5 py-2 rounded-full text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                                Cancel
                            </button>
                            <button type="submit" disabled={loading || !content.trim()} className="px-6 py-2 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-mono text-xs uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                                {loading ? 'Sending...' : 'Send'}
                                {!loading && <Send className="w-3 h-3" />}
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}
