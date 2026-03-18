-- Phase 25: Nested Media Notes
ALTER TABLE artifact_comments 
ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES artifact_comments(id) ON DELETE CASCADE,
ADD COLUMN IF NOT EXISTS media_urls JSONB DEFAULT '[]'::jsonb;

-- Index for rapidly resolving deeply nested recursive reply streams
CREATE INDEX IF NOT EXISTS idx_artifact_comments_parent_id ON artifact_comments(parent_id);
