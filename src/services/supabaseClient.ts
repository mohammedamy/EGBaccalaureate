import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { AcademicTrack, ProfileRole, SecondLanguage } from '../types/userProfile';

export type ProfileRow = {
  id: string;
  email: string | null;
  display_name: string;
  photo_url: string | null;
  avatar_icon: string;
  profile_role: ProfileRole;
  teacher_subject: string | null;
  teacher_school: string | null;
  teacher_bio: string | null;
  academic_track: AcademicTrack;
  dream_college: string;
  target_percentage: number;
  second_language: SecondLanguage;
  governorate: string;
  daily_practice_goal: number;
  study_minutes_goal: number;
  sound_effects_enabled: boolean;
  last_sync_at: string;
  created_at: string;
  updated_at: string;
};

export type ProfileInsert = {
  id: string;
  email?: string | null;
  display_name?: string;
  photo_url?: string | null;
  avatar_icon?: string;
  profile_role?: ProfileRole;
  teacher_subject?: string | null;
  teacher_school?: string | null;
  teacher_bio?: string | null;
  academic_track?: AcademicTrack;
  dream_college?: string;
  target_percentage?: number;
  second_language?: SecondLanguage;
  governorate?: string;
  daily_practice_goal?: number;
  study_minutes_goal?: number;
  sound_effects_enabled?: boolean;
  last_sync_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type ProfileUpdate = Partial<Omit<ProfileInsert, 'id'>>;

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

export interface SupabaseAuthConfig {
  url: string;
  publishableKey: string;
  isConfigured: boolean;
  hasForbiddenSecretKey: boolean;
  oauthCallbackUrl: string;
}

export const SUPABASE_AUTH_STORAGE_KEY = 'egbac_supabase_auth_v1';

/**
 * Detects if someone accidentally placed a privileged Supabase `sb_secret_*`
 * or `service_role` JWT in a public `VITE_*` browser environment variable.
 */
export function isForbiddenClientSecretKey(rawKey: string): boolean {
  const trimmed = rawKey.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('sb_secret_')) return true;

  // Check standard 3-segment JWT payload for `"role":"service_role"`
  const parts = trimmed.split('.');
  if (parts.length === 3) {
    try {
      const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
      const decoded = globalThis.atob(padded);
      const payload = JSON.parse(decoded) as { role?: string };
      if (payload.role === 'service_role') {
        return true;
      }
    } catch {
      // Malformed base64/JSON is not a valid service_role JWT
    }
  }

  return false;
}

function isPlaceholderConfigValue(value: string): boolean {
  const lower = value.trim().toLowerCase();
  return (
    !lower ||
    lower.includes('your-project-ref') ||
    lower.includes('your-supabase-') ||
    lower.includes('example.supabase.co') ||
    lower === 'placeholder'
  );
}

/**
 * Safely resolves Supabase URL and Publishable/Anon key across both Vite browser
 * bundles and Node.js `tsx` verification scripts.
 *
 * Prefers `VITE_SUPABASE_PUBLISHABLE_KEY` and falls back to `VITE_SUPABASE_ANON_KEY`.
 */
export function resolveSupabaseAuthConfig(
  envOverride?: Record<string, string | undefined>
): SupabaseAuthConfig {
  const viteEnv =
    envOverride ??
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env ??
    {};

  const rawUrl = (viteEnv.VITE_SUPABASE_URL ?? '').trim().replace(/\/+$/, '');
  const rawKey = (
    viteEnv.VITE_SUPABASE_PUBLISHABLE_KEY ??
    viteEnv.VITE_SUPABASE_ANON_KEY ??
    ''
  ).trim();

  const hasForbiddenSecretKey = isForbiddenClientSecretKey(rawKey);
  if (hasForbiddenSecretKey) {
    console.error(
      '[Supabase Security Guard] Refusing to initialize browser client with a secret / service_role key! Use VITE_SUPABASE_PUBLISHABLE_KEY instead.'
    );
  }

  const validUrl =
    !isPlaceholderConfigValue(rawUrl) &&
    (rawUrl.startsWith('https://') || rawUrl.startsWith('http://localhost') || rawUrl.startsWith('http://127.0.0.1'));

  const validKey = !isPlaceholderConfigValue(rawKey) && !hasForbiddenSecretKey;
  const isConfigured = validUrl && validKey;

  const oauthCallbackUrl = validUrl
    ? `${rawUrl}/auth/v1/callback`
    : 'https://<your-project-ref>.supabase.co/auth/v1/callback';

  return {
    url: validUrl ? rawUrl : '',
    publishableKey: validKey ? rawKey : '',
    isConfigured,
    hasForbiddenSecretKey,
    oauthCallbackUrl,
  };
}

export const supabaseAuthConfig: SupabaseAuthConfig = resolveSupabaseAuthConfig();
export const isSupabaseConfigured: boolean = supabaseAuthConfig.isConfigured;

export const supabase: SupabaseClient<Database> | null = supabaseAuthConfig.isConfigured
  ? createClient<Database>(supabaseAuthConfig.url, supabaseAuthConfig.publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: SUPABASE_AUTH_STORAGE_KEY,
      },
    })
  : null;

