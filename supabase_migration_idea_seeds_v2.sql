-- Migration V2: Idea Seeds Custom Sections
-- Enables the dynamic custom form JSONB payload 

ALTER TABLE idea_seeds ADD COLUMN IF NOT EXISTS custom_sections JSONB DEFAULT '[]'::jsonb;
