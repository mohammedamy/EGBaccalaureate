import React, { useState, useEffect, useRef } from 'react';
import type { ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import type { 
  UserProfile, 
  AcademicTrack, 
  SecondLanguage, 
  LocalDeviceDataSummary 
} from '../types/userProfile';
import { 
  loadLocalUserProfile, 
  saveLocalUserProfile, 
  signInWithGoogle, 
  signOutGoogleUser, 
  getLocalDeviceDataSummary, 
  exportLocalDataBackup, 
  importLocalDataBackup, 
  resetLocalDeviceData 
} from '../services/userProfileService';
import { getAllGovernorates } from '../services/governorateAnalyticsService';
import { toHindiDigits } from '../utils/arabicNumerals';
import { 
  User, 
  X, 
  LogOut, 
  Save, 
  Download, 
  Upload, 
  ShieldCheck, 
  GraduationCap, 
  Target, 
  HardDrive, 
  AlertCircle, 
  Trash2, 
  Check 
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  theme?: ThemeMode;
  onProfileUpdated?: (profile: UserProfile) => void;
}

const AVATAR_OPTIONS = [
  { id: 'grad_cap', icon: '🎓', labelAr: 'طالب متفوق', labelEn: 'Honor Student' },
  { id: 'doctor', icon: '👨‍⚕️', labelAr: 'طبيب بشري', labelEn: 'Medical Doctor' },
  { id: 'scientist', icon: '👩‍🔬', labelAr: 'عالمة أبحاث', labelEn: 'Scientist' },
  { id: 'engineer', icon: '📐', labelAr: 'مهندس تطبيقي', labelEn: 'Engineer' },
  { id: 'ai_tech', icon: '👨‍💻', labelAr: 'مهندس ذكاء اصطناعي', labelEn: 'AI & Software' },
  { id: 'diplomat', icon: '🏛️', labelAr: 'دبلوماسي وسياسي', labelEn: 'Diplomat' },
  { id: 'artist', icon: '🎨', labelAr: 'فنون وتصميم', labelEn: 'Fine Arts' },
  { id: 'astronomer', icon: '🚀', labelAr: 'علوم الفضاء والطيران', labelEn: 'Space Scientist' },
];

const DREAM_FACULTIES = [
  { titleAr: 'كلية الطب البشري', titleEn: 'Faculty of Medicine', icon: '🩺' },
  { titleAr: 'كلية الهندسة', titleEn: 'Faculty of Engineering', icon: '📐' },
  { titleAr: 'كلية الحاسبات والذكاء الاصطناعي', titleEn: 'Faculty of Computers & AI', icon: '💻' },
  { titleAr: 'كلية الصيدلة', titleEn: 'Faculty of Pharmacy', icon: '💊' },
  { titleAr: 'كلية الاقتصاد والعلوم السياسية', titleEn: 'Economics & Political Science', icon: '🏛️' },
  { titleAr: 'كلية الألسن واللغات والترجمة', titleEn: 'Faculty of Alsun & Languages', icon: '🌐' },
  { titleAr: 'كلية العلاج الطبيعي', titleEn: 'Physical Therapy', icon: '🦴' },
  { titleAr: 'كلية طب الأسنان', titleEn: 'Faculty of Dentistry', icon: '🦷' },
  { titleAr: 'كلية الفنون الجميلة والتطبيقية', titleEn: 'Faculty of Fine & Applied Arts', icon: '🎨' },
  { titleAr: 'كلية الإعلام والاتصال', titleEn: 'Mass Communication & Media', icon: '🎙️' },
];

export const UserProfileModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang = 'ar',
  theme = 'dark',
  onProfileUpdated,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<'profile' | 'goals' | 'storage'>('profile');
  const [profile, setProfile] = useState<UserProfile>(loadLocalUserProfile);
  const [deviceSummary, setDeviceSummary] = useState<LocalDeviceDataSummary>(getLocalDeviceDataSummary);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<boolean>(false);
  const [importMessage, setImportMessage] = useState<{ text: string; success: boolean } | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      const current = loadLocalUserProfile();
      setProfile(current);
      setDeviceSummary(getLocalDeviceDataSummary());
      setSaveSuccessNotice(false);
      setSignInError(null);
      setImportMessage(null);
      setShowResetConfirm(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const governorates = getAllGovernorates();

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    setSignInError(null);
    try {
      const res = await signInWithGoogle();
      if (res.success && res.profile) {
        setProfile(res.profile);
        onProfileUpdated?.(res.profile);
      } else if (res.error) {
        setSignInError(res.error);
      }
    } catch (err) {
      setSignInError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignOut = async () => {
    await signOutGoogleUser();
    const updated = loadLocalUserProfile();
    setProfile(updated);
    onProfileUpdated?.(updated);
  };

  const handleSaveProfile = () => {
    const updated = saveLocalUserProfile(profile);
    setProfile(updated);
    setDeviceSummary(getLocalDeviceDataSummary());
    setSaveSuccessNotice(true);
    onProfileUpdated?.(updated);
    setTimeout(() => {
      setSaveSuccessNotice(false);
    }, 3500);
  };

  const handleImportFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const result = importLocalDataBackup(content);
        setImportMessage({ text: result.message, success: result.success });
        if (result.success) {
          const fresh = loadLocalUserProfile();
          setProfile(fresh);
          setDeviceSummary(getLocalDeviceDataSummary());
          onProfileUpdated?.(fresh);
        }
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleResetData = () => {
    resetLocalDeviceData();
    const fresh = loadLocalUserProfile();
    setProfile(fresh);
    setDeviceSummary(getLocalDeviceDataSummary());
    setShowResetConfirm(false);
    onProfileUpdated?.(fresh);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border transition-all overflow-hidden ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-slate-300/60'
            : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className={`flex items-center justify-between px-5 py-3.5 border-b shrink-0 ${
          isContrast
            ? 'border-yellow-400/60 bg-zinc-950'
            : isLight
            ? 'border-slate-200 bg-slate-50/80'
            : 'border-slate-800/80 bg-slate-900/60'
        }`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`p-2 rounded-xl text-white shadow-sm shrink-0 ${
              isContrast ? 'bg-yellow-400 text-black' : 'bg-gradient-to-tr from-indigo-600 to-sky-500'
            }`}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className={`text-base font-black truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {isArabic ? 'الملف الشخصي وهوية الطالب الأكاديمية' : 'Student Identity & Local Profile'}
              </h3>
              <p className={`text-[11px] font-medium truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isArabic
                  ? 'تسجيل الدخول، تخصيص الشعبة والأهداف، وحفظ البيانات محلياً على جهازك'
                  : 'Google sign-in, track goals & offline-first device storage'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              isContrast
                ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                : isLight
                ? 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                : 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
            title={isArabic ? 'إغلاق' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={`flex items-center border-b px-3 pt-2 gap-1.5 shrink-0 overflow-x-auto no-scrollbar ${
          isLight ? 'border-slate-200 bg-slate-50/50' : 'border-slate-800/80 bg-slate-900/40'
        }`}>
          {[
            { id: 'profile', labelAr: '👤 الحساب والملف', labelEn: '👤 Account & Profile' },
            { id: 'goals', labelAr: '🎯 الشعبة والهدف', labelEn: '🎯 Goals & Track' },
            { id: 'storage', labelAr: '💾 بيانات جهازي', labelEn: '💾 Device Data' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all border-b-2 cursor-pointer shrink-0 ${
                  isSelected
                    ? isContrast
                      ? 'border-yellow-400 text-yellow-300 bg-black'
                      : isLight
                      ? 'border-indigo-600 text-indigo-700 bg-white shadow-2xs font-black'
                      : 'border-indigo-400 text-indigo-300 bg-slate-950/80 font-black'
                    : isLight
                    ? 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {isArabic ? tab.labelAr : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* TAB 1: Profile & Account */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              {/* Google Authentication Box */}
              <div className={`p-4 rounded-xl border transition-all ${
                profile.isGoogleUser
                  ? isContrast
                    ? 'border-cyan-400 bg-black text-cyan-300'
                    : isLight
                    ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950'
                    : 'border-emerald-800/60 bg-emerald-950/20 text-emerald-200'
                  : isContrast
                  ? 'border-yellow-400 bg-black text-yellow-300'
                  : isLight
                  ? 'border-slate-200 bg-slate-50 text-slate-800'
                  : 'border-slate-800 bg-slate-900/60 text-slate-200'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {profile.photoURL ? (
                      <img
                        src={profile.photoURL}
                        alt={profile.displayName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 shadow-md shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 border-indigo-400/50 bg-indigo-500/10 shrink-0">
                        {profile.avatarIcon || '🎓'}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-extrabold text-sm">{profile.displayName}</p>
                        {profile.isGoogleUser && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            isLight ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-emerald-900/50 text-emerald-300 border-emerald-700/60'
                          }`}>
                            ✓ {isArabic ? 'حساب Google موثق' : 'Verified Google'}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {profile.email || (isArabic ? 'حساب محلي غير مقترن ببريد' : 'Local device account')}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {profile.isGoogleUser ? (
                      <button
                        onClick={handleGoogleSignOut}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          isContrast
                            ? 'bg-black border-red-400 text-red-300 hover:bg-red-950'
                            : isLight
                            ? 'bg-white border-slate-300 text-slate-700 hover:bg-red-50 hover:text-red-700 hover:border-red-300'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-red-950/50 hover:text-red-300 hover:border-red-800'
                        }`}
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'تسجيل الخروج' : 'Sign Out'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleGoogleSignIn}
                        disabled={isSigningIn}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black shadow-md transition-all active:scale-95 cursor-pointer ${
                          isContrast
                            ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                            : isLight
                            ? 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm'
                            : 'bg-white text-slate-900 hover:bg-slate-100 font-extrabold'
                        }`}
                      >
                        {/* Google 'G' SVG Logo */}
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
                          {isSigningIn
                            ? isArabic ? 'جاري الاتصال بـ Google...' : 'Connecting to Google...'
                            : isArabic ? 'تسجيل الدخول بـ Google' : 'Sign in with Google'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {signInError && (
                  <div className="mt-3 p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{signInError}</span>
                  </div>
                )}
              </div>

              {/* Student Display Name */}
              <div className="space-y-1.5">
                <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? 'اسم الطالب / اللقب الأكاديمي' : 'Student Display Name'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={profile.displayName}
                    onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                    placeholder={isArabic ? 'اكتب اسمك الثلاثي أو لقبك...' : 'Enter your name...'}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-bold border transition-all outline-none ${
                      isContrast
                        ? 'bg-black border-yellow-400 text-white focus:border-cyan-400'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:bg-white'
                        : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-400 focus:bg-slate-950'
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              {/* Academic Avatar Selector */}
              <div className="space-y-2">
                <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? 'الرمز التعبيري للأيقونة الشخصية' : 'Academic Avatar & Mascot'}
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {AVATAR_OPTIONS.map((av) => {
                    const isSelected = profile.avatarIcon === av.icon;
                    return (
                      <button
                        key={av.id}
                        type="button"
                        onClick={() => setProfile({ ...profile, avatarIcon: av.icon })}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? isContrast
                              ? 'border-yellow-400 bg-yellow-400/20 shadow-md'
                              : isLight
                              ? 'border-indigo-500 bg-indigo-50 shadow-md ring-2 ring-indigo-500/20'
                              : 'border-indigo-400 bg-indigo-950/60 shadow-md ring-2 ring-indigo-400/30'
                            : isLight
                            ? 'border-slate-200 hover:bg-slate-50'
                            : 'border-slate-800 hover:bg-slate-900'
                        }`}
                        title={isArabic ? av.labelAr : av.labelEn}
                      >
                        <span className="text-2xl mb-1">{av.icon}</span>
                        <span className={`text-[9px] font-bold truncate max-w-full text-center ${
                          isSelected
                            ? isLight ? 'text-indigo-700' : 'text-indigo-300'
                            : isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {isArabic ? av.labelAr : av.labelEn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Offline Assurance Box */}
              <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                isLight ? 'bg-sky-50 border-sky-200 text-sky-900' : 'bg-sky-950/20 border-sky-800/60 text-sky-300'
              }`}>
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold">
                    {isArabic ? 'ضمان الخصوصية والعمل المحلي التام' : 'Offline Privacy & Local Device Guarantee'}
                  </p>
                  <p className="text-[11px] opacity-90 leading-relaxed">
                    {isArabic
                      ? 'جميع التعديلات والمسائل المحلولة وكشكول الأخطاء تُحفظ فوراً على ذاكرة متصفح جهازك الحالي دون اشتراط اتصال بالإنترنت.'
                      : 'All customizations, quiz attempts, and mistake notebooks are saved locally on your device storage without requiring an internet connection.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Academic Goals & Track */}
          {activeTab === 'goals' && (
            <div className="space-y-4">
              {/* Academic Track Selection */}
              <div className="space-y-2">
                <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? 'الشعبة الأكاديمية بالثانوية العامة' : 'Thanaweya Amma Academic Track'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'scientific_science', titleAr: 'علمي علوم', titleEn: 'Scientific (Science)', icon: '🔬', descAr: 'الأحياء والجيولوجيا والفيزياء والكيمياء' },
                    { id: 'scientific_math', titleAr: 'علمي رياضة', titleEn: 'Scientific (Math)', icon: '📐', descAr: 'التفاضل والهندسة الفراغية والاستاتيكا والديناميكا' },
                    { id: 'literary', titleAr: 'الشعبة الأدبية', titleEn: 'Literary Track', icon: '🏛️', descAr: 'التاريخ والجغرافيا والفلسفة والمنطق وعلم النفس' },
                  ].map((tr) => {
                    const isSelected = profile.academicTrack === tr.id;
                    return (
                      <button
                        key={tr.id}
                        type="button"
                        onClick={() => setProfile({ ...profile, academicTrack: tr.id as AcademicTrack })}
                        className={`p-3 rounded-xl border text-right rtl:text-right ltr:text-left transition-all cursor-pointer ${
                          isSelected
                            ? isContrast
                              ? 'border-yellow-400 bg-yellow-400/20 text-white shadow-md'
                              : isLight
                              ? 'border-indigo-500 bg-indigo-50/80 text-indigo-950 shadow-md ring-2 ring-indigo-500/20'
                              : 'border-indigo-400 bg-indigo-950/50 text-white shadow-md ring-2 ring-indigo-400/30'
                            : isLight
                            ? 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                            : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xl">{tr.icon}</span>
                          {isSelected && <Check className="w-4 h-4 text-indigo-500" />}
                        </div>
                        <p className="font-black text-xs">{isArabic ? tr.titleAr : tr.titleEn}</p>
                        <p className={`text-[10px] mt-0.5 line-clamp-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                          {tr.descAr}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dream College / Faculty */}
              <div className="space-y-2">
                <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? 'الكلية المستهدفة (حلم الثانوية العامة)' : 'Target / Dream Faculty'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={profile.dreamCollege}
                    onChange={(e) => setProfile({ ...profile, dreamCollege: e.target.value })}
                    placeholder={isArabic ? 'اكتب اسم كليتك المنشودة...' : 'Target college...'}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-bold border transition-all outline-none ${
                      isContrast
                        ? 'bg-black border-yellow-400 text-white focus:border-cyan-400'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:bg-white'
                        : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-400 focus:bg-slate-950'
                    }`}
                  />
                  <Target className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-2.5 pointer-events-none" />
                </div>

                {/* Quick Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {DREAM_FACULTIES.slice(0, 6).map((fac) => (
                    <button
                      key={fac.titleAr}
                      type="button"
                      onClick={() => setProfile({ ...profile, dreamCollege: fac.titleAr })}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                        profile.dreamCollege === fac.titleAr
                          ? isLight
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-indigo-500 text-white border-indigo-500'
                          : isLight
                          ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span>{fac.icon}</span>
                      <span>{isArabic ? fac.titleAr : fac.titleEn}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Percentage & Daily Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Target Percentage */}
                <div className={`p-3.5 rounded-xl border space-y-2 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{isArabic ? 'النسبة المستهدفة' : 'Target %'}</span>
                    <span className="text-sm font-black text-indigo-500">
                      {isArabic ? `${toHindiDigits(profile.targetPercentage.toFixed(1))}٪` : `${profile.targetPercentage.toFixed(1)}%`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="75"
                    max="100"
                    step="0.5"
                    value={profile.targetPercentage}
                    onChange={(e) => setProfile({ ...profile, targetPercentage: parseFloat(e.target.value) })}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>{isArabic ? '٧٥٪' : '75%'}</span>
                    <span>{isArabic ? '٨٥٪' : '85%'}</span>
                    <span>{isArabic ? '٩٥٪' : '95%'}</span>
                    <span>{isArabic ? '١٠٠٪' : '100%'}</span>
                  </div>
                </div>

                {/* Daily Questions Target */}
                <div className={`p-3.5 rounded-xl border space-y-2 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{isArabic ? 'هدف المسائل اليومي' : 'Daily Drill Goal'}</span>
                    <span className="text-sm font-black text-emerald-500">
                      {isArabic ? `${toHindiDigits(profile.dailyPracticeGoal)} سؤال/يوم` : `${profile.dailyPracticeGoal} Q/day`}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[10, 15, 25, 40].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setProfile({ ...profile, dailyPracticeGoal: num })}
                        className={`py-1 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${
                          profile.dailyPracticeGoal === num
                            ? isLight
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-emerald-500 text-white border-emerald-500'
                            : isLight
                            ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {isArabic ? toHindiDigits(num) : num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Language & Governorate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Second Language */}
                <div className="space-y-1.5">
                  <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isArabic ? 'اللغة الأجنبية الثانية' : 'Second Foreign Language'}
                  </label>
                  <select
                    value={profile.secondLanguage}
                    onChange={(e) => setProfile({ ...profile, secondLanguage: e.target.value as SecondLanguage })}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition-all outline-none ${
                      isContrast
                        ? 'bg-black border-yellow-400 text-white'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900'
                        : 'bg-slate-900 border-slate-700 text-slate-100'
                    }`}
                  >
                    <option value="french">🇫🇷 {isArabic ? 'اللغة الفرنسية (Français)' : 'French'}</option>
                    <option value="german">🇩🇪 {isArabic ? 'اللغة الألمانية (Deutsch)' : 'German'}</option>
                    <option value="italian">🇮🇹 {isArabic ? 'اللغة الإيطالية (Italiano)' : 'Italian'}</option>
                    <option value="spanish">🇪🇸 {isArabic ? 'اللغة الإسبانية (Español)' : 'Spanish'}</option>
                    <option value="chinese">🇨🇳 {isArabic ? 'اللغة الصينية (Chinese)' : 'Chinese'}</option>
                  </select>
                </div>

                {/* Egyptian Governorate */}
                <div className="space-y-1.5">
                  <label className={`text-xs font-bold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isArabic ? 'المحافظة التعليمية' : 'Educational Governorate'}
                  </label>
                  <select
                    value={profile.governorate}
                    onChange={(e) => setProfile({ ...profile, governorate: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition-all outline-none ${
                      isContrast
                        ? 'bg-black border-yellow-400 text-white'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900'
                        : 'bg-slate-900 border-slate-700 text-slate-100'
                    }`}
                  >
                    {governorates.map((gov) => (
                      <option key={gov.id} value={gov.id}>
                        {isArabic ? gov.nameAr : gov.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Device Storage & Local Backup */}
          {activeTab === 'storage' && (
            <div className="space-y-4">
              {/* Telemetry Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <p className="text-[10px] text-slate-400 font-bold">{isArabic ? 'المسائل المحلولة' : 'Solved Drills'}</p>
                  <p className="text-lg font-black text-indigo-400 mt-0.5">
                    {isArabic ? toHindiDigits(deviceSummary.solvedQuestionsCount) : deviceSummary.solvedQuestionsCount}
                  </p>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <p className="text-[10px] text-slate-400 font-bold">{isArabic ? 'كشكول الأخطاء' : 'Mistakes Log'}</p>
                  <p className="text-lg font-black text-amber-400 mt-0.5">
                    {isArabic ? toHindiDigits(deviceSummary.mistakesCount) : deviceSummary.mistakesCount}
                  </p>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <p className="text-[10px] text-slate-400 font-bold">{isArabic ? 'الأوسمة المكتسبة' : 'Badges'}</p>
                  <p className="text-lg font-black text-emerald-400 mt-0.5">
                    {isArabic ? toHindiDigits(deviceSummary.earnedBadgesCount) : deviceSummary.earnedBadgesCount}
                  </p>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <p className="text-[10px] text-slate-400 font-bold">{isArabic ? 'حزم دون إنترنت' : 'Offline Packs'}</p>
                  <p className="text-lg font-black text-cyan-400 mt-0.5">
                    {isArabic ? toHindiDigits(deviceSummary.downloadedPacksCount) : deviceSummary.downloadedPacksCount}
                  </p>
                </div>
              </div>

              {/* Backup & Export Actions */}
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}>
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-400" />
                  <h4 className="font-extrabold text-xs">
                    {isArabic ? 'إدارة النسخ الاحتياطي ونقل البيانات بين الأجهزة' : 'Backup & Device Data Migration'}
                  </h4>
                </div>
                <p className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isArabic
                    ? 'يمكنك تصدير كامل بيانات دراستك وكشكول أخطائك في ملف JSON ونقله إلى هاتفك أو حاسوب آخر واستعادته بضغطة زر دون حاجة لأي خادم.'
                    : 'Export your entire learning history and mistakes into a JSON file to transfer between devices without requiring a backend server.'}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={exportLocalDataBackup}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs active:scale-95 ${
                      isContrast
                        ? 'bg-black border-cyan-400 text-cyan-300 hover:bg-cyan-950'
                        : isLight
                        ? 'bg-white hover:bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-indigo-300 border-slate-700'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'تصدير نسخة احتياطية (JSON)' : 'Export Backup File'}</span>
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs active:scale-95 ${
                      isContrast
                        ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-950'
                        : isLight
                        ? 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-200 shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border-slate-700'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'استيراد نسخة من ملف (JSON)' : 'Import Backup File'}</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json,application/json"
                    onChange={handleImportFileChange}
                    className="hidden"
                  />
                </div>

                {importMessage && (
                  <div className={`p-2.5 rounded-lg text-xs font-bold flex items-center gap-2 border ${
                    importMessage.success
                      ? isLight ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-emerald-950/40 text-emerald-300 border-emerald-800'
                      : isLight ? 'bg-red-50 text-red-800 border-red-200' : 'bg-red-950/40 text-red-300 border-red-800'
                  }`}>
                    {importMessage.success ? <Check className="w-4 h-4 text-emerald-500" /> : <AlertCircle className="w-4 h-4 text-red-400" />}
                    <span>{importMessage.text}</span>
                  </div>
                )}
              </div>

              {/* Danger Zone: Reset Data */}
              <div className={`p-4 rounded-xl border space-y-2.5 ${
                isLight ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-900/40'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400">
                    <Trash2 className="w-4 h-4" />
                    <span className="font-extrabold text-xs">{isArabic ? 'إعادة ضبط وحذف بيانات الجهاز' : 'Reset Local Device Data'}</span>
                  </div>
                  {!showResetConfirm ? (
                    <button
                      onClick={() => setShowResetConfirm(true)}
                      className="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-red-400/40 text-red-400 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                    >
                      {isArabic ? 'مسح البيانات' : 'Clear Data'}
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleResetData}
                        className="px-2.5 py-1 text-[11px] font-black rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all cursor-pointer"
                      >
                        {isArabic ? 'تأكيد الحذف' : 'Confirm'}
                      </button>
                      <button
                        onClick={() => setShowResetConfirm(false)}
                        className="px-2 py-1 text-[11px] font-bold rounded-lg border border-slate-400 text-slate-400 hover:bg-slate-800 transition-all cursor-pointer"
                      >
                        {isArabic ? 'إلغاء' : 'Cancel'}
                      </button>
                    </div>
                  )}
                </div>
                <p className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isArabic
                    ? 'سيتم حذف الأسئلة المحلولة وكشكول الأخطاء على هذا المتصفح وإرجاع الملف الشخصي للإعدادات الافتراضية.'
                    : 'Wipes local test attempts and notebook on this browser, resetting your profile to defaults.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className={`px-5 py-3.5 border-t shrink-0 flex items-center justify-between gap-3 ${
          isContrast
            ? 'border-yellow-400/60 bg-zinc-950'
            : isLight
            ? 'border-slate-200 bg-slate-50/80'
            : 'border-slate-800/80 bg-slate-900/60'
        }`}>
          <div className="flex items-center gap-2">
            {saveSuccessNotice && (
              <span className={`inline-flex items-center gap-1 text-xs font-black animate-in fade-in duration-200 ${
                isLight ? 'text-emerald-700' : 'text-emerald-400'
              }`}>
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{isArabic ? 'تم حفظ بياناتك محلياً على جهازك بنجاح!' : 'Saved locally on device!'}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isContrast
                  ? 'border-yellow-400 text-yellow-300 hover:bg-zinc-900'
                  : isLight
                  ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {isArabic ? 'إغلاق' : 'Close'}
            </button>

            <button
              onClick={handleSaveProfile}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all shadow-md active:scale-95 cursor-pointer ${
                isContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : isLight
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-950'
              }`}
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isArabic ? 'حفظ وتثبيت التعديلات محلياً' : 'Save Locally on Device'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
