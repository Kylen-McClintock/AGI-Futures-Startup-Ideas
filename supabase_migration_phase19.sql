-- Phase 19 Migration: Native Messages
CREATE TABLE IF NOT EXISTS messages (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    sender_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    receiver_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    content text NOT NULL,
    is_read boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);

-- RLS
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Users can read their own received or sent messages
CREATE POLICY "Users can read their own received or sent messages"
    ON messages FOR SELECT
    USING (auth.uid() = receiver_id OR auth.uid() = sender_id);
    
-- Users can insert messages if they are the sender
CREATE POLICY "Users can insert messages"
    ON messages FOR INSERT
    WITH CHECK (auth.uid() = sender_id);
