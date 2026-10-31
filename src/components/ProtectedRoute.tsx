import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Globe,
  Lock,
  Moon,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { EgyptFlag } from './EgyptFlag';
import type { Language } from '../i18n/translations';
import type { ThemeMode } from '../types/curriculum';
import type { ProfileRole } from '../types/userProfile';
import {
  buildOAuthRedirectUrl,
  evaluateProtectedRouteAccess,
  extractVerifiedAppRole,
  useSupabaseAuth,
} from '../services/supabaseAuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  lang: Language;
  onLanguageToggle: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  requiredRole?: ProfileRole;
  requestedTab?: string;
  onReturnToDefaultTab?: () => void;
}

const TAB_LABELS: Record<string, { ar: string; en: string }> = {
  overview: { ar: 'خريطة المنهج والوحدات', en: 'Curriculum Overview' },
  equivalency: { ar: 'دليل المعادلة والمسارات', en: 'Track Equivalency' },
  theory: { ar: 'الشرح النظري والقوانين', en: 'Theory & Formulas' },
  solvedExamples: { ar: 'المسائل المحلولة نموذجياً', en: 'Solved Examples' },
  exerciseProblems: { ar: 'التمارين التدريبية', en: 'Practice Exercises' },
  databank: { ar: 'بنك الأسئلة المصنف', en: 'Question Databank' },
  worksheet: { ar: 'أوراق العمل القابلة للطباعة', en: 'Printable Worksheets' },
  interactive: { ar: 'المعامل الافتراضية ثلاثية الأبعاد', en: '3D Virtual Laboratories' },
  lessonPlan: { ar: 'دليل المعلم والتحضير الصفي', en: 'Teacher Lesson Plans' },
  testGenerator: { ar: 'محطة الاختبارات والبابل شيت', en: 'Exam Workstation & OMR' },
  analytics: { ar: 'لوحة التحليلات الأكاديمية وكشكول الأخطاء', en: 'Analytics & Mistake Notebook' },
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  lang,
  onLanguageToggle,
  theme,
  onThemeChange,
  requiredRole,
  requestedTab,
  onReturnToDefaultTab,
}) => {
  const {
    user,
    claims,
    isAuthenticated,
    isLoading,
    isConfigured,
    hasForbiddenSecretKey,
    oauthCallbackUrl,
    authError,
    signInWithGoogle,
    clearAuthError,
  } = useSupabaseAuth();

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const verifiedRole = extractVerifiedAppRole(claims);
  const accessDecision = evaluateProtectedRouteAccess({
    isLoading,
    isConfigured,
    isAuthenticated,
    hasVerifiedClaims: Boolean(claims?.sub && user?.id && claims.sub === user.id),
    requiredRole,
    verifiedRole,
  });

  if (accessDecision === 'allow') {
    return <>{children}</>;
  }

  const currentOrigin =
    typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';
  const returnDestinationUrl =
    typeof window !== 'undefined'
      ? buildOAuthRedirectUrl(window.location.href)
      : currentOrigin;

  const handleCopyText = (key: string, value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleGoogleLogin = async () => {
    clearAuthError();
    setIsRedirecting(true);
    const result = await signInWithGoogle(returnDestinationUrl);
    if (!result.success) {
      setIsRedirecting(false);
    }
  };

  if (accessDecision === 'loading') {
    return (
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className={`min-h-screen w-full flex items-center justify-center p-6 transition-colors ${
          isContrast
            ? 'bg-black text-white'
            : isLight
            ? 'bg-slate-50 text-slate-900'
            : 'bg-slate-950 text-slate-100'
        }`}
      >
        <div
          className={`max-w-md w-full rounded-3xl border p-8 text-center space-y-4 shadow-2xl ${
            isContrast
              ? 'bg-black border-2 border-cyan-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-slate-200/70'
              : 'bg-slate-900/90 border-slate-800 shadow-black/60'
          }`}
        >
          <div className="w-12 h-12 mx-auto rounded-2xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
          <h2 className="text-base font-black">
            {isArabic
              ? 'جاري التحقق من جلسة الدخول عبر Supabase Auth...'
              : 'Verifying your Supabase Auth session...'}
          </h2>
          <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            {isArabic
              ? 'يتم فحص التوقيع الرقمي لرمز الدخول (JWT Claims) وتأمين مسارك الدراسي.'
              : 'Validating cryptographic JWT claims and securing your academic workspace.'}
          </p>
        </div>
      </div>
    );
  }

  if (accessDecision === 'forbidden_role') {
    return (
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className={`min-h-[60vh] w-full flex items-center justify-center p-6 ${
          isContrast
            ? 'bg-black text-white'
            : isLight
            ? 'bg-slate-50 text-slate-900'
            : 'bg-slate-950 text-slate-100'
        }`}
      >
        <div
          className={`max-w-lg w-full rounded-3xl border p-7 space-y-4 text-center shadow-xl ${
            isContrast
              ? 'bg-black border-2 border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <ShieldAlert className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-lg font-black">
            {isArabic
              ? 'هذا القسم مخصص لحسابات المعلمين المعتمدة'
              : 'Verified Educator Role Required'}
          </h2>
          <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'يتطلب هذا المسار صلاحية معلم معتمدة في رموز الجلسة (app_metadata.role) لحماية بيانات الفصول والتصحيح.'
              : 'This route requires a server-verified educator claim (app_metadata.role) to protect classroom and grading records.'}
          </p>
          {onReturnToDefaultTab && (
            <button
              type="button"
              onClick={onReturnToDefaultTab}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer"
            >
              {isArabic ? 'العودة إلى الصفحة الرئيسية' : 'Return to Curriculum Overview'}
            </button>
          )}
        </div>
      </div>
    );
  }

  const targetTabMeta =
    requestedTab && TAB_LABELS[requestedTab] ? TAB_LABELS[requestedTab] : null;

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`min-h-screen w-full flex flex-col justify-between transition-colors ${
        isContrast
          ? 'bg-black text-white'
          : isLight
          ? 'bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-100 text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 text-slate-100'
      }`}
    >
      {/* Top Accessibility & Language Bar */}
      <header
        className={`w-full border-b px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3 ${
          isContrast
            ? 'border-cyan-400/60 bg-black'
            : isLight
            ? 'border-slate-200/80 bg-white/85 backdrop-blur-md'
            : 'border-slate-800/80 bg-slate-950/85 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={clipsatLogo}
            alt="ClipSAT"
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
          />
          <EgyptFlag className="h-5 w-auto rounded-[3px] shrink-0 ring-1 ring-black/15 dark:ring-white/20" />
          <div className="min-w-0">
            <span className="font-black text-sm sm:text-base tracking-tight truncate block">
              ClipSAT EGBaccalaureate
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Cyclers */}
          <div
            className={`inline-flex items-center rounded-full p-0.5 border ${
              isContrast
                ? 'border-yellow-400 bg-black'
                : isLight
                ? 'border-slate-300 bg-slate-100'
                : 'border-slate-800 bg-slate-900'
            }`}
          >
            {[
              { id: 'light' as ThemeMode, icon: Sun, title: 'Light' },
              { id: 'dark' as ThemeMode, icon: Moon, title: 'Dark' },
              { id: 'high-contrast' as ThemeMode, icon: Zap, title: 'High Contrast' },
            ].map((opt) => {
              const Icon = opt.icon;
              const active = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onThemeChange(opt.id)}
                  title={opt.title}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    active
                      ? isContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-indigo-600 text-white shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={onLanguageToggle}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold border transition-all cursor-pointer ${
              isContrast
                ? 'border-cyan-400 text-cyan-300 bg-black hover:bg-cyan-950/50'
                : isLight
                ? 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                : 'border-indigo-800 bg-indigo-950/70 text-indigo-200 hover:bg-indigo-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isArabic ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </header>

      {/* Main Protected Sign-In Gate Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div
          className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 shadow-2xl space-y-6 ${
            isContrast
              ? 'bg-black border-2 border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200/90 shadow-slate-300/50'
              : 'bg-slate-900/90 border-slate-800 shadow-black/70 backdrop-blur-xl'
          }`}
        >
          {/* Badge + Title */}
          <div className="space-y-3 text-center">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ${
                isContrast
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40'
                  : isLight
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>
                {isArabic
                  ? 'بوابة الدخول الموحدة والمحمية عبر Supabase Auth'
                  : 'Protected Academic Workspace • Supabase Auth'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              {isArabic
                ? 'سجّل الدخول للمتابعة إلى منصة البكالوريا المصرية والثانوية العامة'
                : 'Sign in to access ClipSAT EGBaccalaureate'}
            </h1>

            <p
              className={`text-xs sm:text-sm leading-relaxed max-w-lg mx-auto ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {isArabic
                ? 'جميع مسارات الـ ٣٦ مادة، المعامل ثلاثية الأبعاد، محطة الاختبارات، ولوحة التحليلات محمية بحسابك في Google عبر Supabase مع مزامنة سحابية آمنة (RLS).'
                : 'All 36 accredited subjects, 3D virtual laboratories, OMR exam workstations, and analytics routes are protected with Google OAuth via Supabase and Row-Level Security.'}
            </p>

            {targetTabMeta && requestedTab !== 'overview' && (
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border ${
                  isContrast
                    ? 'border-yellow-400 text-yellow-300 bg-zinc-950'
                    : isLight
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-800'
                    : 'border-indigo-500/30 bg-indigo-950/40 text-indigo-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                <span>
                  {isArabic
                    ? `سيتم توجيهك مباشرةً بعد الدخول إلى: ${targetTabMeta.ar}`
                    : `After signing in, you will continue directly to: ${targetTabMeta.en}`}
                </span>
              </div>
            )}
          </div>

          {/* Primary Google OAuth Button */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isRedirecting || !isConfigured}
              className={`w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-black transition-all shadow-lg cursor-pointer active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed ${
                isContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-yellow-200'
                  : isLight
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/15'
                  : 'bg-white hover:bg-slate-100 text-slate-950 shadow-black/40'
              }`}
            >
              {/* Official Multi-Color Google 'G' Icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>
                {isRedirecting
                  ? isArabic
                    ? 'جاري تحويلك بأمان إلى Google...'
                    : 'Redirecting securely to Google...'
                  : isArabic
                  ? 'تسجيل الدخول باستخدام حساب Google'
                  : 'Continue with Google'}
              </span>
            </button>
          </div>

          {/* Forbidden Secret Key Guard Alert */}
          {hasForbiddenSecretKey && (
            <div className="p-4 rounded-2xl border border-red-500/50 bg-red-500/10 text-red-400 text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-black text-red-300">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>
                  {isArabic
                    ? 'تنبيه أمني حرج: تم رصد مفتاح سري (service_role / sb_secret) في متغيرات الواجهة!'
                    : 'Critical Security Guard: Secret / service_role key detected in client env!'}
                </span>
              </div>
              <p className="leading-relaxed">
                {isArabic
                  ? 'تم إيقاف عميل المتصفح تلقائياً لحماية قاعدة بياناتك. استبدل المفتاح بـ VITE_SUPABASE_PUBLISHABLE_KEY فقط.'
                  : 'Browser client initialization was blocked to protect your database. Replace it with VITE_SUPABASE_PUBLISHABLE_KEY only.'}
              </p>
            </div>
          )}

          {/* Setup Guide Card when `.env.local` is not yet populated */}
          {!isConfigured && !hasForbiddenSecretKey && (
            <div
              className={`p-4 rounded-2xl border text-xs space-y-3 ${
                isContrast
                  ? 'border-cyan-400 bg-zinc-950 text-cyan-200'
                  : isLight
                  ? 'border-amber-200 bg-amber-50/90 text-amber-950'
                  : 'border-amber-500/30 bg-amber-950/25 text-amber-200'
              }`}
            >
              <div className="flex items-center gap-2 font-black">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>
                  {isArabic
                    ? 'إعداد مشروع Supabase لتفعيل بوابة الدخول بـ Google'
                    : 'Configure Supabase Environment Keys to Enable Sign-In'}
                </span>
              </div>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed opacity-95">
                <li>
                  {isArabic
                    ? 'أنشئ ملف .env.local في جذر المشروع وأضف متغيرات VITE_SUPABASE_URL و VITE_SUPABASE_PUBLISHABLE_KEY.'
                    : 'Create `.env.local` in the project root with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.'}
                </li>
                <li>
                  {isArabic
                    ? 'في لوحة تحكم Google Cloud (Authorized redirect URIs)، أضف رابط Callback الخاص بمشروعك في Supabase:'
                    : 'In Google Cloud Console (Authorized redirect URIs), add your Supabase OAuth callback URL:'}
                  <div className="mt-1.5 flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg font-mono text-[11px] bg-black/20 border border-white/10">
                    <span className="truncate">{oauthCallbackUrl}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyText('callback', oauthCallbackUrl)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] font-sans font-bold shrink-0 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedKey === 'callback' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </li>
                <li>
                  {isArabic
                    ? 'في لوحة تحكم Supabase (Authentication -> URL Configuration -> Redirect URLs)، أضف رابط التطبيق الحالي:'
                    : 'In Supabase Dashboard (Authentication -> URL Configuration -> Redirect URLs), allow this app origin:'}
                  <div className="mt-1.5 flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg font-mono text-[11px] bg-black/20 border border-white/10">
                    <span className="truncate">{`${currentOrigin}/**`}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyText('origin', `${currentOrigin}/**`)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] font-sans font-bold shrink-0 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedKey === 'origin' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </li>
              </ol>
            </div>
          )}

          {/* Runtime OAuth Error Display */}
          {authError && (
            <div className="p-3.5 rounded-2xl border border-red-500/40 bg-red-500/10 text-red-400 text-xs space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="font-bold leading-relaxed">{authError}</span>
                </div>
                <button
                  type="button"
                  onClick={clearAuthError}
                  className="text-[11px] underline opacity-80 hover:opacity-100 shrink-0 cursor-pointer"
                >
                  {isArabic ? 'إخفاء' : 'Dismiss'}
                </button>
              </div>
              {authError.toLowerCase().includes('provider is not enabled') && (
                <p className="text-[11px] text-amber-300 pt-1 border-t border-red-500/20">
                  {isArabic
                    ? '💡 فعّل موفر Google من لوحة تحكم Supabase: Authentication -> Sign In / Providers -> Google.'
                    : '💡 Enable the Google provider in Supabase Dashboard: Authentication -> Sign In / Providers -> Google.'}
                </p>
              )}
            </div>
          )}

          {/* Security Guarantees Footer Inside Card */}
          <div
            className={`pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] ${
              isLight
                ? 'border-slate-200 text-slate-600'
                : 'border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                {isArabic ? 'تحقق رقمي عبر JWT Claims' : 'Verified JWT Claims'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                {isArabic ? 'عزل بيانات كامل بـ Postgres RLS' : 'Postgres RLS Isolation'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {isArabic ? 'مزامنة سحابية + حفظ محلي' : 'Cloud + Local Sync'}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer
        className={`w-full border-t py-4 px-6 text-center text-[11px] ${
          isContrast
            ? 'border-cyan-500/40 bg-black text-slate-300'
            : isLight
            ? 'border-slate-200 bg-white/80 text-slate-500'
            : 'border-slate-800/80 bg-slate-950 text-slate-500'
        }`}
      >
        ClipSAT EGBaccalaureate 2026 • Thanaweya Amma &amp; EG-Bac STEM
      </footer>
    </div>
  );
};

