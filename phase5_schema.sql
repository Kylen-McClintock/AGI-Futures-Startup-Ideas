-- Run this in your Supabase SQL Editor to prepare the table for slugs:

ALTER TABLE forecasts ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;
