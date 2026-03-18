"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { X } from "lucide-react";
import Link from "next/link";

interface FollowListModalProps {
  profileId: string;
  type: "followers" | "following";
  onClose: () => void;
}

export function FollowListModal({ profileId, type, onClose }: FollowListModalProps) {
  const supabase = createClient();
  const [profiles, setProfiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      if (type === "followers") {
        // Fetch people who follow THIS profile
        const { data } = await supabase
          .from("follows")
          .select("follower:profiles!follows_follower_id_fkey(handle, name, avatar_url)")
          .eq("following_id", profileId);
        if (data) setProfiles(data.map((d: any) => d.follower));
      } else {
        // Fetch people THIS profile follows
        const { data } = await supabase
          .from("follows")
          .select("following:profiles!follows_following_id_fkey(handle, name, avatar_url)")
          .eq("follower_id", profileId);
        if (data) setProfiles(data.map((d: any) => d.following));
      }
      setIsLoading(false);
    }
    loadData();
  }, [profileId, type]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0a0f14] border border-white/10 rounded-2xl w-full max-w-sm overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
          <h3 className="text-sm font-mono tracking-widest uppercase text-white">
            {type === "followers" ? "Followers" : "Following"}
          </h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <div className="text-center py-8 text-white/40 font-mono text-xs uppercase tracking-widest">Loading...</div>
          ) : profiles.length === 0 ? (
            <div className="text-center py-8 text-white/40 italic font-light text-sm">
              No {type} yet.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {profiles.map((p, i) => (
                <Link 
                  key={i} 
                  href={`/builder/${p?.handle}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group"
                >
                  <div className="flex items-center gap-3">
                    {p?.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.avatar_url} alt="" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-serif text-sm">
                        {p?.name?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-white font-medium text-sm group-hover:text-[#10b981] transition-colors">{p?.name}</p>
                      <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">@{p?.handle}</p>
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-[#10b981] transition-colors">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
