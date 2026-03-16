-- Phase 2: Engagement & Content Expansion Migration

-- 1. Create saved_ideas table for "Interested In" tracking
CREATE TABLE IF NOT EXISTS saved_ideas (
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (project_id, profile_id)
);

ALTER TABLE saved_ideas ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can manage their own saved ideas" ON saved_ideas 
    USING (auth.uid() = profile_id)
    WITH CHECK (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 2. Create artifact_likes table to enforce 1 vote per user
CREATE TABLE IF NOT EXISTS artifact_likes (
  artifact_id uuid REFERENCES artifacts(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (artifact_id, profile_id)
);

ALTER TABLE artifact_likes ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Allow public read access on artifact_likes" ON artifact_likes FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert their own artifact likes" ON artifact_likes FOR INSERT WITH CHECK (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can delete their own artifact likes" ON artifact_likes FOR DELETE USING (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 3. Update artifacts table for edits and multiple media URLs
ALTER TABLE artifacts ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone;
-- Note: media_url already exists, we will migrate data if needed, but first we add the new array column
ALTER TABLE artifacts ADD COLUMN IF NOT EXISTS media_urls text[] DEFAULT '{}';
