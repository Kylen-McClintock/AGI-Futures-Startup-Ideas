-- Execute this in the Supabase SQL Editor
-- This RPC securely allows unsigned users to update the importance ratings dictionary without bypassing all RLS

CREATE OR REPLACE FUNCTION rate_forecast_importance(f_id uuid, session_key text, new_rating numeric)
RETURNS void AS $$
BEGIN
  UPDATE forecasts
  SET user_importance_ratings = jsonb_set(
    COALESCE(user_importance_ratings, '{}'::jsonb),
    array[session_key],
    to_jsonb(new_rating)
  )
  WHERE id = f_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execution to public (unsigned) users
GRANT EXECUTE ON FUNCTION rate_forecast_importance(uuid, text, numeric) TO anon, authenticated;
