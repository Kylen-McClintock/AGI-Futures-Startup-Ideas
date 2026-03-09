-- Run this script in the Supabase SQL Editor (https://supabase.com/dashboard)

-- 1. Create the projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create the project_tags table
CREATE TABLE IF NOT EXISTS project_tags (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  sector text[] DEFAULT '{}',
  bottleneck text[] DEFAULT '{}',
  readiness text[] DEFAULT '{}',
  customer text[] DEFAULT '{}',
  outcomes text[] DEFAULT '{}',
  product_type text[] DEFAULT '{}',
  enabling_technology text[] DEFAULT '{}',
  founder_fit text[] DEFAULT '{}',
  UNIQUE(project_id)
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tags ENABLE ROW LEVEL SECURITY;

-- 4. Create public read policies so our Next.js frontend can query the data securely
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on project_tags" ON project_tags FOR SELECT USING (true);
