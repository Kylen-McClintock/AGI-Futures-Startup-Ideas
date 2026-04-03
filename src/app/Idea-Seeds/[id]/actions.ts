'use server';

import { createClient } from "@/utils/supabase/server";

export async function getIdeaSeed(id: string) {
    const supabase = await createClient();
    
    // Fetch specifically the seed + votes + comments
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
    
    let query = supabase
        .from('idea_seeds')
        .select(`
            *,
            profiles!idea_seeds_profile_id_fkey(name, handle, avatar_url),
            idea_seed_votes(vote_type, profile_id)
        `);
        
    if (isUuid) {
        query = query.eq('id', id);
    } else {
        query = query.eq('slug', id);
    }
    
    const { data: seed, error } = await query.maybeSingle();
        
    if (error) {
        throw new Error("Supabase Detail Query Error: " + error.message);
    }
    
    return seed;
}

export async function getIdeaSeedComments(id: string) {
    const supabase = await createClient();
    
    const { data: comments, error } = await supabase
        .from('idea_seed_comments')
        .select(`
            *,
            profiles(name, handle, avatar_url)
        `)
        .eq('idea_seed_id', id)
        .order('created_at', { ascending: true });
        
    if (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
    
    return comments;
}

export async function addSeedComment(ideaSeedId: string, content: string, parentId?: string) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return { error: 'Not authenticated' };
    }
    
    const { error } = await supabase
        .from('idea_seed_comments')
        .insert({
            idea_seed_id: ideaSeedId,
            profile_id: user.id,
            content,
            parent_id: parentId
        });
        
    return error ? { error: error.message } : { success: true };
}
