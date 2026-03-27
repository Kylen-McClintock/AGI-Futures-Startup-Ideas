-- Run this script in the Supabase SQL Editor to prepare the database for Phase 4: Forecast Theses & Discussions

-- 1. Add Premium Tier to Profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS is_premium boolean DEFAULT false;

-- 2. Add Threading and Answer-Targeting to Comments
ALTER TABLE forecast_comments 
ADD COLUMN IF NOT EXISTS parent_id uuid REFERENCES forecast_comments(id) ON DELETE CASCADE,
ADD COLUMN IF NOT EXISTS target_answer_id uuid REFERENCES forecast_answers(id) ON DELETE CASCADE;

-- 3. Create Upvote Tables for Answers (Theses) and Comments
CREATE TABLE IF NOT EXISTS forecast_answer_votes (
  answer_id uuid REFERENCES forecast_answers(id) ON DELETE CASCADE,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (answer_id, profile_id)
);

CREATE TABLE IF NOT EXISTS forecast_comment_votes (
  comment_id uuid REFERENCES forecast_comments(id) ON DELETE CASCADE,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (comment_id, profile_id)
);

-- 4. Enable Row Level Security (RLS) on new tables
ALTER TABLE forecast_answer_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE forecast_comment_votes ENABLE ROW LEVEL SECURITY;

-- 5. Add RLS Policies allowing public read and authenticated modification
CREATE POLICY "Allow public read access on forecast_answer_votes" ON forecast_answer_votes FOR SELECT USING (true);
CREATE POLICY "Users can insert their own answer votes" ON forecast_answer_votes FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can delete their own answer votes" ON forecast_answer_votes FOR DELETE USING (auth.uid() = profile_id);

CREATE POLICY "Allow public read access on forecast_comment_votes" ON forecast_comment_votes FOR SELECT USING (true);
CREATE POLICY "Users can insert their own comment votes" ON forecast_comment_votes FOR INSERT WITH CHECK (auth.uid() = profile_id);
CREATE POLICY "Users can delete their own comment votes" ON forecast_comment_votes FOR DELETE USING (auth.uid() = profile_id);
