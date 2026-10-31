-- ============================================================================
-- EGBaccalaureate — Supabase Postgres Query & Index Performance Audit Suite
-- Run via Supabase SQL Editor or `supabase db query -f supabase/diagnostics/postgres_performance_audit.sql`
-- Aligned with `supabase-postgres-best-practices` across Query, RLS, Schema & Vacuum rules.
-- ============================================================================

-- 1. Top 10 Slowest & Highest-Total-Time Queries (`monitor-pg-stat-statements.md`)
select
  calls,
  round(total_exec_time::numeric, 2) as total_time_ms,
  round(mean_exec_time::numeric, 2) as mean_time_ms,
  rows,
  left(query, 180) as query_preview
from extensions.pg_stat_statements
where userid = (select usesysid from pg_user where usename = 'authenticator')
   or query ilike '%public.profiles%'
order by total_exec_time desc
limit 10;

-- 2. Detect Unindexed Foreign Keys Across Public Schema (`schema-foreign-key-indexes.md`)
select
  c.conrelid::regclass as table_name,
  c.conname as constraint_name,
  a.attname as unindexed_fk_column
from pg_constraint c
join pg_namespace n on n.oid = c.connamespace
join pg_attribute a on a.attrelid = c.conrelid and a.attnum = any(c.conkey)
where c.contype = 'f'
  and n.nspname = 'public'
  and not exists (
    select 1
    from pg_index i
    where i.indrelid = c.conrelid
      and i.indisvalid
      and i.indkey[0] = a.attnum
  );

-- 3. Detect RLS Policies Calling `auth.uid()` or `auth.jwt()` Per Row Without `(select ...)` InitPlan (`security-rls-performance.md`)
select
  schemaname,
  tablename,
  policyname,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
  and (
    (qual ~* 'auth\.(uid|jwt)\(\)' and qual !~* '\(\s*select\s+auth\.(uid|jwt)\(\)\s*\)')
    or (with_check ~* 'auth\.(uid|jwt)\(\)' and with_check !~* '\(\s*select\s+auth\.(uid|jwt)\(\)\s*\)')
  );

-- 4. Table Sequential Scan Ratio, Dead Tuple Bloat & Vacuum Freshness (`monitor-vacuum-analyze.md`)
select
  relname as table_name,
  n_live_tup as live_rows,
  n_dead_tup as dead_rows,
  round(100.0 * n_dead_tup / greatest(n_live_tup + n_dead_tup, 1), 2) as dead_tuple_pct,
  seq_scan,
  idx_scan,
  n_tup_hot_upd as hot_updates,
  last_autovacuum,
  last_autoanalyze
from pg_stat_user_tables
where schemaname = 'public'
order by n_dead_tup desc, seq_scan desc;

-- 5. Unused Non-Unique Indexes Candidate Review
select
  schemaname,
  relname as table_name,
  indexrelname as index_name,
  idx_scan,
  pg_size_pretty(pg_relation_size(indexrelid)) as index_size
from pg_stat_user_indexes
where schemaname = 'public'
  and idx_scan = 0
  and indexrelname not like '%_pkey';

-- 6. EXPLAIN (ANALYZE, BUFFERS) Plan Templates (`monitor-explain-analyze.md`)
-- Verify PK + `(select auth.uid())` InitPlan Lookup:
explain (analyze, buffers, format text)
select
  id, email, display_name, photo_url, avatar_icon, profile_role,
  academic_track, dream_college, target_percentage, second_language,
  governorate, daily_practice_goal, study_minutes_goal, sound_effects_enabled, last_sync_at
from public.profiles
where id = (select auth.uid());

-- Verify Covering Composite Index-Only Scan (`profiles_governorate_track_idx`):
explain (analyze, buffers, format text)
select
  governorate,
  academic_track,
  avg(target_percentage) as avg_target_pct,
  avg(daily_practice_goal) as avg_daily_questions
from public.profiles
where governorate = 'cairo'
  and academic_track = 'scientific_math'
group by governorate, academic_track;

-- Verify Partial + Covering Index-Only Scan (`profiles_teachers_subject_idx`):
explain (analyze, buffers, format text)
select
  teacher_subject,
  display_name,
  teacher_school
from public.profiles
where profile_role = 'teacher'
  and teacher_subject = 'الفيزياء';

