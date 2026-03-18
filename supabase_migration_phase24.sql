-- Add slug to artifacts for SEO-friendly URLs
ALTER TABLE artifacts ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;

-- Backfill existing rows securely using deterministic string mapping
DO $$
DECLARE
    r RECORD;
    v_handle TEXT;
    v_project_slug TEXT;
    v_title_slug TEXT;
    v_short_id TEXT;
    v_final_slug TEXT;
BEGIN
    FOR r IN 
        SELECT a.id, a.title, p.handle, pr.slug as project_slug 
        FROM artifacts a
        LEFT JOIN profiles p ON a.profile_id = p.id
        LEFT JOIN projects pr ON a.project_id = pr.id
        WHERE a.slug IS NULL
    LOOP
        v_title_slug := lower(regexp_replace(coalesce(r.title, 'post'), '[^a-zA-Z0-9]+', '-', 'g'));
        v_title_slug := trim(both '-' from v_title_slug);
        v_title_slug := substring(v_title_slug from 1 for 40);
        
        -- Pull extreme prefix hash blocks from native ID mapping
        v_short_id := substring(r.id::text from 1 for 5);
        
        v_final_slug := coalesce(r.handle, 'builder') || '-' || coalesce(r.project_slug, 'idea') || '-' || v_title_slug || '-' || v_short_id;
        
        UPDATE artifacts SET slug = v_final_slug WHERE id = r.id;
    END LOOP;
END $$;

-- Create algorithmic deterministic injection logic for all downstream Inserts
CREATE OR REPLACE FUNCTION generate_artifact_slug()
RETURNS TRIGGER AS $$
DECLARE
    v_handle TEXT;
    v_project_slug TEXT;
    v_title_slug TEXT;
    v_short_id TEXT;
    v_final_slug TEXT;
BEGIN
    SELECT handle INTO v_handle FROM profiles WHERE id = NEW.profile_id;
    IF v_handle IS NULL THEN v_handle := 'builder'; END IF;

    SELECT slug INTO v_project_slug FROM projects WHERE id = NEW.project_id;
    IF v_project_slug IS NULL THEN v_project_slug := 'idea'; END IF;

    v_title_slug := lower(regexp_replace(coalesce(NEW.title, 'post'), '[^a-zA-Z0-9]+', '-', 'g'));
    v_title_slug := trim(both '-' from v_title_slug);
    v_title_slug := substring(v_title_slug from 1 for 40);

    v_short_id := substring(md5(random()::text) from 1 for 5);
    
    v_final_slug := v_handle || '-' || v_project_slug || '-' || v_title_slug || '-' || v_short_id;

    NEW.slug := v_final_slug;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_generate_artifact_slug ON artifacts;
CREATE TRIGGER trg_generate_artifact_slug
BEFORE INSERT ON artifacts
FOR EACH ROW
EXECUTE FUNCTION generate_artifact_slug();
