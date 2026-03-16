-- Run this script in the Supabase SQL Editor (https://supabase.com/dashboard)
-- Phase 1: Builder Profiles and Artifact Layer Migration

-- 6. Create profiles table (linked to auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  handle text UNIQUE, -- Builder's public handle
  name text,
  avatar_url text,
  headline text,
  thesis text,
  builder_status text[] DEFAULT '{}',
  goals text[] DEFAULT '{}',
  sectors text[] DEFAULT '{}',
  outcomes text[] DEFAULT '{}',
  frontier_tech_familiarity jsonb DEFAULT '{}',
  top_skills text[] DEFAULT '{}',
  open_to text[] DEFAULT '{}',
  provider_links jsonb DEFAULT '{}',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Create artifacts table
CREATE TABLE IF NOT EXISTS artifacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  type text NOT NULL, -- 'prototype', 'design', 'repo', 'video', 'demo', 'visual concept', 'tagline set', 'wedge thesis', 'market insight', 'founder memo', 'policy angle', 'product thesis'
  title text NOT NULL,
  summary text,
  content_url text,
  media_url text,
  likes integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Create idea_notes table (Private)
CREATE TABLE IF NOT EXISTS idea_notes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(project_id, profile_id)
);

-- 9. Enable RLS on new tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE artifacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE idea_notes ENABLE ROW LEVEL SECURITY;

-- 10. Profiles Policies
DO $$ BEGIN
  CREATE POLICY "Allow public read access on profiles" ON profiles FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert their own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 11. Artifacts Policies
DO $$ BEGIN
  CREATE POLICY "Allow public read access on artifacts" ON artifacts FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert their own artifacts" ON artifacts FOR INSERT WITH CHECK (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update their own artifacts" ON artifacts FOR UPDATE USING (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can delete their own artifacts" ON artifacts FOR DELETE USING (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 12. Idea Notes Policies (Strictly Private)
DO $$ BEGIN
  CREATE POLICY "Users can manage their own notes" ON idea_notes 
    USING (auth.uid() = profile_id)
    WITH CHECK (auth.uid() = profile_id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 13. Trigger to create row in profiles on user signup (Optional, but good practice)
-- Note: You have to execute this trigger creation using a superuser database role via the Supabase Dashboard
-- CREATE OR REPLACE FUNCTION public.handle_new_user()
-- RETURNS trigger AS $$
-- BEGIN
--   INSERT INTO public.profiles (id, name, avatar_url)
--   VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
--   RETURN new;
-- END;
-- $$ LANGUAGE plpgsql SECURITY DEFINER;
-- CREATE OR REPLACE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
