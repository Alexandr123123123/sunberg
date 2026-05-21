-- Migration: Create chat_threads table for thread_ts → session_id mapping
-- This replaces the fragile regex-based session extraction from Slack message text

CREATE TABLE IF NOT EXISTS chat_threads (
  thread_ts TEXT PRIMARY KEY,
  session_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for reverse lookups (find all threads for a session)
CREATE INDEX IF NOT EXISTS idx_chat_threads_session ON chat_threads(session_id);

-- Enable RLS (table is accessed by Edge Function via service_role key,
-- so no anon policies are needed)
ALTER TABLE chat_threads ENABLE ROW LEVEL SECURITY;
