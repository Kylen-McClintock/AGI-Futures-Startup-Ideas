-- Phase 23: The High-Status Contribution Layer
-- Adds an authoritative boolean to enable sparse editorial recognition on exceptionally high-signal Proof of Work submissions.

ALTER TABLE artifacts 
ADD COLUMN IF NOT EXISTS is_editors_pick boolean DEFAULT false;
