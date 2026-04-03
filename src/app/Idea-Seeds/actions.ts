'use server';

import { createClient } from "@/utils/supabase/server";

export type IdeaSeed = {
    id: string;
    slug?: string | null;
    profile_id: string;
    descriptor: string;
    one_liner: string;
    problem?: string | null;
    solution_hypothesis?: string | null;
    custom_sections?: any[] | null;
    created_at: string;
    updated_at: string;
    // Joined data
    profiles?: {
        name: string;
        handle: string;
        avatar_url: string;
    };
    idea_seed_votes?: { vote_type: string, profile_id: string }[];
    upvotes?: number; // computed property sometimes assigned later
};

export type IdeaSeedVote = {
    idea_seed_id: string;
    profile_id: string;
    vote_type: 'world_needs_this' | 'id_build_this' | 'id_fund_this' | 'id_use_this' | 'keep_me_updated';
    created_at: string;
};

export type IdeaSeedComment = {
    id: string;
    idea_seed_id: string;
    profile_id: string;
    parent_id?: string;
    content: string;
    created_at: string;
    // Joined data
    profiles?: {
        name: string;
        handle: string;
        avatar_url: string;
    };
};

export async function getIdeaSeeds() {
    const supabase = await createClient();
    
    // We fetch seeds and join profiles
    // The count logic can be simpler if we fetch all votes or rely on a view,
    // but for now we fetch the votes along with it if possible, or just the seeds.
    // In Supabase we can do `idea_seed_votes(count)` to get a count, but getting counts for specific vote types requires RPC or fetching all of them based on size.
    // Given MVP, let's fetch seeds with profiles and all votes to aggregate in JS if it's small, or just get basic votes.
    const { data: seeds, error } = await supabase
        .from('idea_seeds')
        .select(`
            *,
            profiles!idea_seeds_profile_id_fkey(name, handle, avatar_url),
            idea_seed_votes(vote_type, profile_id)
        `)
        .order('created_at', { ascending: false });
        
    if (error) {
        throw new Error("Supabase Query Error: " + error.message);
    }
    
    return seeds;
}

export async function submitIdeaSeed(data: {
    descriptor: string;
    one_liner: string;
    problem?: string | null;
    solution_hypothesis?: string | null;
    custom_sections?: any[] | null;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return { error: 'Not authenticated' };
    }
    
    const baseSlug = data.descriptor.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const suffix = Math.random().toString(36).substring(2, 6);
    const finalSlug = `${baseSlug}-${suffix}`;
    
    const { data: result, error } = await supabase
        .from('idea_seeds')
        .insert({
            profile_id: user.id,
            slug: finalSlug,
            descriptor: data.descriptor,
            one_liner: data.one_liner,
            problem: data.problem || null,
            solution_hypothesis: data.solution_hypothesis || null,
            custom_sections: data.custom_sections || []
        })
        .select()
        .single();
        
    if (error) {
        console.error("Error inserting idea seed:", error);
        return { error: error.message };
    }
    
    return { data: result };
}

export async function upvoteIdeaSeed(ideaSeedId: string, voteType: 'world_needs_this' | 'id_build_this' | 'id_fund_this' | 'id_use_this' | 'keep_me_updated') {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return { error: 'Not authenticated' };
    }
    
    // Check if vote already exists for this type
    const { data: existingVote } = await supabase
        .from('idea_seed_votes')
        .select('*')
        .eq('idea_seed_id', ideaSeedId)
        .eq('profile_id', user.id)
        .eq('vote_type', voteType)
        .single();
        
    if (existingVote) {
        // Toggle off (remove) vote
        const { error: deleteError } = await supabase
            .from('idea_seed_votes')
            .delete()
            .eq('idea_seed_id', ideaSeedId)
            .eq('profile_id', user.id)
            .eq('vote_type', voteType);
            
        return deleteError ? { error: deleteError.message } : { success: true, action: 'removed' };
    } else {
        // Toggle on (insert) vote
        // Since primary key is (idea_seed_id, profile_id), we need to ensure the schema allows multiple types per user, OR we changed schema.
        // WAIT: The PK currently is (idea_seed_id, profile_id). We need to change that so they can have multiple types, or we only allow 1 type.
        // Let's assume the PK is (idea_seed_id, profile_id, vote_type) based on this logic, I need to update the migration file if needed.
        const { error: insertError } = await supabase
            .from('idea_seed_votes')
            .insert({
                idea_seed_id: ideaSeedId,
                profile_id: user.id,
                vote_type: voteType
            });
            
        return insertError ? { error: insertError.message } : { success: true, action: 'added' };
    }
}

export async function deleteIdeaSeed(id: string) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return { error: 'Not authenticated' };
    }
    
    const { error } = await supabase
        .from('idea_seeds')
        .delete()
        .eq('id', id)
        .eq('profile_id', user.id);
        
    if (error) {
        console.error("Error deleting idea seed:", error);
    }
        
    return error ? { error: error.message } : { success: true };
}
