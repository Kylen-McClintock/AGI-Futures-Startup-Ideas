-- Migration: Phase 16 Multiplayer Engagement (Follows & Comments)
-- Description: Adds tables and RLS policies for following creators and commenting on artifacts.

-- 1. Create Follows Table
CREATE TABLE IF NOT EXISTS public.follows (
  follower_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  following_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (follower_id, following_id)
);

-- Prevent users from following themselves
ALTER TABLE public.follows ADD CONSTRAINT cannot_follow_self CHECK (follower_id != following_id);

-- Enable RLS for follows
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Follows
CREATE POLICY "Allow public read access on follows" ON public.follows FOR SELECT USING (true);
CREATE POLICY "Users can follow others" ON public.follows FOR INSERT WITH CHECK (auth.uid() = follower_id);
CREATE POLICY "Users can unfollow others" ON public.follows FOR DELETE USING (auth.uid() = follower_id);

-- 2. Create Artifact Comments Table
CREATE TABLE IF NOT EXISTS public.artifact_comments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  artifact_id uuid REFERENCES public.artifacts(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for comments
ALTER TABLE public.artifact_comments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Comments
CREATE POLICY "Allow public read access on artifact_comments" ON public.artifact_comments FOR SELECT USING (true);
CREATE POLICY "Users can insert their own comments" ON public.artifact_comments FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can update their own comments" ON public.artifact_comments FOR UPDATE USING (auth.uid() = profile_id);
CREATE POLICY "Users can delete their own comments" ON public.artifact_comments FOR DELETE USING (auth.uid() = profile_id);
