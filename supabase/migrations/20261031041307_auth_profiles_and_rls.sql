-- ============================================================================
-- EGBaccalaureate — Supabase Auth Profiles, Least-Privilege Grants, RLS & Indexes
-- Optimized per `supabase` & `supabase-postgres-best-practices` skills:
--   1. Non-exposed `private` schema for SECURITY DEFINER trigger functions
--      with `set search_path = ''` and EXECUTE revoked from public/anon/authenticated.
--   2. Foreign key references ONLY `auth.users (id)` primary key with ON DELETE CASCADE.
--   3. Least-privilege table grants (`anon` revoked; `authenticated` granted SELECT/INSERT/UPDATE).
--   4. Row Level Security enabled with `TO authenticated` + `(select auth.uid()) = id`
--      initPlan caching (evaluated once per statement, never per row).
--   5. Companion SELECT policy + dual USING / WITH CHECK predicates on UPDATE.
--   6. Covering (`INCLUDE`) composite & partial (`WHERE ... IS NOT NULL`) B-tree indexes
--      for Index-Only Scans without heap fetches.
--   7. `fillfactor = 90` for Heap-Only Tuple (HOT) updates + aggressive autovacuum/autoanalyze
--      scale factors (`0.05` / `0.02`) to keep the Visibility Map fresh for Index-Only Scans.
--   8. `IS DISTINCT FROM` guard on `ON CONFLICT DO UPDATE` to eliminate no-op MVCC dead tuples.
-- ============================================================================

-- 0. Ensure query performance telemetry extension is enabled
create schema if not exists extensions;
create extension if not exists pg_stat_statements with schema extensions;

-- 1. Non-exposed schema for internal trigger helpers
create schema if not exists private;

revoke all on schema private from public, anon, authenticated;
grant usage on schema private to postgres, service_role;

-- 2. User profiles table synced with Supabase Auth (`auth.users`)
create table if not exists public.profiles (
  id uuid not null primary key references auth.users (id) on delete cascade,
  email text,
  display_name text not null default 'طالب الثانوية العامة',
  photo_url text,
  avatar_icon text not null default '🎓',
  profile_role text not null default 'student'
    constraint profiles_role_check check (profile_role in ('student', 'teacher')),
  teacher_subject text,
  teacher_school text,
  teacher_bio text,
  academic_track text not null default 'scientific_science'
    constraint profiles_academic_track_check check (
      academic_track in ('scientific_science', 'scientific_math', 'literary', 'stem', 'general')
    ),
  dream_college text not null default 'كلية الطب البشري',
  target_percentage numeric(5, 2) not null default 95.00
    constraint profiles_target_percentage_check check (target_percentage >= 0 and target_percentage <= 100),
  second_language text not null default 'french'
    constraint profiles_second_language_check check (
      second_language in ('french', 'german', 'italian', 'spanish', 'chinese', 'none')
    ),
  governorate text not null default 'cairo',
  daily_practice_goal integer not null default 15
    constraint profiles_daily_practice_goal_check check (daily_practice_goal >= 1 and daily_practice_goal <= 500),
  study_minutes_goal integer not null default 30
    constraint profiles_study_minutes_goal_check check (study_minutes_goal >= 1 and study_minutes_goal <= 1440),
  sound_effects_enabled boolean not null default true,
  last_sync_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
) with (
  -- Reserve 10% page headroom for Heap-Only Tuple (HOT) updates on non-indexed columns
  -- (`last_sync_at`, `dream_college`, `sound_effects_enabled`) and keep Visibility Map
  -- statistics fresh for Index-Only Scans (`monitor-vacuum-analyze.md`).
  fillfactor = 90,
  autovacuum_vacuum_scale_factor = 0.05,
  autovacuum_analyze_scale_factor = 0.02
);

comment on table public.profiles is
  'Authenticated EGBaccalaureate student and teacher academic profiles linked 1:1 with auth.users.';

-- 3. Explicit Data API & least-privilege role grants
revoke all on table public.profiles from public, anon;
grant select, insert, update on table public.profiles to authenticated;
grant select, insert, update, delete on table public.profiles to service_role;

-- 4. Enable Row Level Security (mandatory for all public tables)
alter table public.profiles enable row level security;

-- Companion SELECT policy (also required for UPDATE visibility in Postgres RLS)
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles
  for select
  to authenticated
  using ((select auth.uid()) = id);

-- Self-insert policy (allows client upsert fallback if profile row is initialized from app)
drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles
  for insert
  to authenticated
  with check ((select auth.uid()) = id);

-- Self-update policy with BOTH `using` and `with check` to prevent `id` reassignment
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- 5. Optimized Covering & Partial B-tree Indexes
--    Note: `id` PRIMARY KEY already provides the unique B-tree index for `(select auth.uid()) = id`
--    and `ON DELETE CASCADE` from `auth.users (id)`.

-- Composite + Covering index (`query-composite-indexes.md` + `query-covering-indexes.md`):
-- Equality predicates `(governorate, academic_track)` lead; `include` columns satisfy regional
-- cohort readiness aggregations via Index-Only Scans without heap lookups.
create index if not exists profiles_governorate_track_idx
  on public.profiles (governorate, academic_track)
  include (target_percentage, daily_practice_goal, study_minutes_goal);

-- Partial + Covering index (`query-partial-indexes.md` + `query-covering-indexes.md`):
-- Indexes ONLY non-null teacher rows (5-20x smaller than a full-table index) and covers
-- `display_name` + `teacher_school` for Index-Only Scans.
create index if not exists profiles_teachers_subject_idx
  on public.profiles (teacher_subject)
  include (display_name, teacher_school)
  where profile_role = 'teacher' and teacher_subject is not null;

-- 6. Automatic `updated_at` timestamp maintenance (SECURITY INVOKER)
create or replace function private.touch_profiles_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := pg_catalog.now();
  return new;
end;
$$;

revoke execute on function private.touch_profiles_updated_at() from public, anon;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row
  execute function private.touch_profiles_updated_at();

-- 7. Automatic profile bootstrap when a user signs in via Google OAuth
--    Kept in non-exposed `private` schema because it requires SECURITY DEFINER
--    to insert into `public.profiles` from an `auth.users` trigger context.
create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  resolved_name text;
  resolved_avatar text;
begin
  resolved_name := coalesce(
    nullif(pg_catalog.btrim(new.raw_user_meta_data ->> 'full_name'), ''),
    nullif(pg_catalog.btrim(new.raw_user_meta_data ->> 'name'), ''),
    nullif(pg_catalog.split_part(coalesce(new.email, ''), '@', 1), ''),
    'طالب الثانوية العامة'
  );

  resolved_avatar := coalesce(
    nullif(pg_catalog.btrim(new.raw_user_meta_data ->> 'avatar_url'), ''),
    nullif(pg_catalog.btrim(new.raw_user_meta_data ->> 'picture'), '')
  );

  insert into public.profiles (
    id,
    email,
    display_name,
    photo_url,
    last_sync_at
  )
  values (
    new.id,
    new.email,
    resolved_name,
    resolved_avatar,
    pg_catalog.now()
  )
  on conflict (id) do update
    set email = coalesce(excluded.email, public.profiles.email),
        photo_url = coalesce(excluded.photo_url, public.profiles.photo_url),
        last_sync_at = pg_catalog.now()
    where public.profiles.email is distinct from coalesce(excluded.email, public.profiles.email)
       or public.profiles.photo_url is distinct from coalesce(excluded.photo_url, public.profiles.photo_url);

  return new;
end;
$$;

revoke execute on function private.handle_new_user() from public, anon, authenticated, service_role;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function private.handle_new_user();
