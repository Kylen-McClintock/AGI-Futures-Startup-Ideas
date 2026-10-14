-- Phase 26: Growth (newsletter subscribers + Founder Fit Matcher)
-- Run in Supabase SQL editor. Idempotent.
-- All three tables have RLS ENABLED with NO anon/auth policies: they are only reachable
-- through server actions using the service-role key (src/utils/supabase/admin.ts).

create extension if not exists pgcrypto;

-- 1. Newsletter subscribers (backup/source-of-truth list; Substack holds the sending list)
create table if not exists public.subscribers (
    id uuid primary key default gen_random_uuid(),
    email text not null unique check (char_length(email) <= 320),
    source text,
    page_path text,
    idea_slug text,
    created_at timestamptz not null default now()
);
alter table public.subscribers enable row level security;

-- 2. Founder Fit Matcher results (share pages read top3 only; inputs/brief/email are never exposed publicly)
create table if not exists public.matches (
    id uuid primary key default gen_random_uuid(),
    inputs jsonb not null,
    top3 jsonb not null,
    brief jsonb,
    email text,
    created_at timestamptz not null default now(),
    unlocked_at timestamptz
);
create index if not exists matches_created_at_idx on public.matches (created_at desc);
alter table public.matches enable row level security;

-- 3. Rate limiting (per hashed IP per day + global daily counter under ip_hash = '__global__')
create table if not exists public.match_rate_limits (
    ip_hash text not null,
    day date not null default (now() at time zone 'utc')::date,
    count int not null default 0,
    primary key (ip_hash, day)
);
alter table public.match_rate_limits enable row level security;

-- Atomically increments the per-IP and global counters; returns false if either limit is exceeded.
create or replace function public.bump_match_rate(p_ip_hash text, p_ip_limit int, p_global_limit int)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
    v_day date := (now() at time zone 'utc')::date;
    v_ip int;
    v_global int;
begin
    insert into public.match_rate_limits (ip_hash, day, count) values ('__global__', v_day, 1)
    on conflict (ip_hash, day) do update set count = public.match_rate_limits.count + 1
    returning count into v_global;

    insert into public.match_rate_limits (ip_hash, day, count) values (p_ip_hash, v_day, 1)
    on conflict (ip_hash, day) do update set count = public.match_rate_limits.count + 1
    returning count into v_ip;

    return v_ip <= p_ip_limit and v_global <= p_global_limit;
end;
$$;

revoke all on function public.bump_match_rate(text, int, int) from public, anon, authenticated;
grant execute on function public.bump_match_rate(text, int, int) to service_role;
