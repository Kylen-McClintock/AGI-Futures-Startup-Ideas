-- Phase 18 Migration: Add contact_preference to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS contact_preference text DEFAULT 'nobody';
