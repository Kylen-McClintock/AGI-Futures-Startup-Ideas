-- Migration: Separate Platform Messages Preference from Contact Email Preference
-- This allows builders to lock their email string entirely, but leave platform DMs open to Mutuals.

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS message_preference text DEFAULT 'following';
