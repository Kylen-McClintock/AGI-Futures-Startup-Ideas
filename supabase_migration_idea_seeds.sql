-- Migration: Idea Seeds
-- Description: Creates tables for the Idea Seeds feature including seeds, votes, and comments.

-- 1. Create idea_seeds table
CREATE TABLE IF NOT EXISTS idea_seeds (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  descriptor text NOT NULL,
  one_liner text NOT NULL,
  problem text,
  solution_hypothesis text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create idea_seed_votes table
CREATE TABLE IF NOT EXISTS idea_seed_votes (
  idea_seed_id uuid REFERENCES idea_seeds(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  vote_type text NOT NULL CHECK (vote_type IN ('world_needs_this', 'id_build_this', 'id_fund_this', 'id_use_this', 'keep_me_updated')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (idea_seed_id, profile_id, vote_type)
);

-- 3. Create idea_seed_comments table
CREATE TABLE IF NOT EXISTS idea_seed_comments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  idea_seed_id uuid REFERENCES idea_seeds(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  parent_id uuid, -- For threaded replies
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security
ALTER TABLE idea_seeds ENABLE ROW LEVEL SECURITY;
ALTER TABLE idea_seed_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE idea_seed_comments ENABLE ROW LEVEL SECURITY;

-- 5. Idea Seeds Policies
CREATE POLICY "Allow public read access on idea_seeds" ON idea_seeds FOR SELECT USING (true);
CREATE POLICY "Users can insert their own idea_seeds" ON idea_seeds FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can update their own idea_seeds" ON idea_seeds FOR UPDATE USING (auth.uid() = profile_id);

-- 6. Idea Seed Votes Policies
CREATE POLICY "Allow public read access on idea_seed_votes" ON idea_seed_votes FOR SELECT USING (true);
CREATE POLICY "Users can insert their own votes" ON idea_seed_votes FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can update their own votes" ON idea_seed_votes FOR UPDATE USING (auth.uid() = profile_id);
CREATE POLICY "Users can delete their own votes" ON idea_seed_votes FOR DELETE USING (auth.uid() = profile_id);

-- 7. Idea Seed Comments Policies
CREATE POLICY "Allow public read access on idea_seed_comments" ON idea_seed_comments FOR SELECT USING (true);
CREATE POLICY "Users can insert their own comments" ON idea_seed_comments FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can update their own comments" ON idea_seed_comments FOR UPDATE USING (auth.uid() = profile_id);
CREATE POLICY "Users can delete their own comments" ON idea_seed_comments FOR DELETE USING (auth.uid() = profile_id);
