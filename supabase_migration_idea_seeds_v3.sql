-- Migration V3: Idea Seeds Slugs and Delete Policy
-- Ensures users can delete their own idea seeds and adds SEO slugs for human-readable URLs

-- 1. Add slug column
ALTER TABLE idea_seeds ADD COLUMN IF NOT EXISTS slug text;

-- 2. Backfill existing seeds (temporary fallback using descriptors or IDs)
UPDATE idea_seeds SET slug = id::text WHERE slug IS NULL;

-- 3. Enforce Unique constraint on slug
ALTER TABLE idea_seeds ADD CONSTRAINT idea_seeds_slug_key UNIQUE (slug);

-- 4. Enable Deletion RLS
ALTER TABLE idea_seeds ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own idea_seeds" ON idea_seeds;
CREATE POLICY "Users can delete their own idea_seeds" ON idea_seeds 
FOR DELETE USING (auth.uid() = profile_id);

NOTIFY pgrst, 'reload schema';
