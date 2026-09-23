import React, { useState, useEffect } from 'react';
import type { Language } from '../i18n/translations';
import type { ThemeMode, FontSizeMode } from '../types/curriculum';
import { MathRenderer } from './MathRenderer';
import {
  X,
  Sliders,
  Sun,
  Moon,
  Zap,
  Type,
  Maximize2,
  Volume2,
  VolumeX,
  Eye,
  Activity,
  Keyboard,
  RotateCcw,
  Check,
  Sparkles,
  HelpCircle,
  WifiOff,
} from 'lucide-react';

export type MathScaleMode = '100' | '115' | '130' | '150';

interface AccessibilitySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  fontSize: FontSizeMode;
  onFontSizeChange: (size: FontSizeMode) => void;
}

export const AccessibilitySettingsModal: React.FC<AccessibilitySettingsModalProps> = ({
  isOpen,
  onClose,
  lang,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
}) => {
  const isArabic = lang === 'ar';
  const isHighContrast = theme === 'high-contrast';
  const isLight = theme === 'light';

  // Math Magnification State
  const [mathScale, setMathScale] = useState<MathScaleMode>(() => {
    const saved = localStorage.getItem('egbac_math_scale');
    if (saved === '100' || saved === '115' || saved === '130' || saved === '150') {
      return saved;
    }
    return '100';
  });

  // Reduced Motion State
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return localStorage.getItem('egbac_reduced_motion') === 'true';
  });

  // High-Visibility Focus Rings
  const [focusRings, setFocusRings] = useState<boolean>(() => {
    return localStorage.getItem('egbac_focus_rings') === 'true';
  });

  // Audio & Sound Effects
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('egbac_sound') !== 'muted';
  });

  // Reading Guide & Enhanced Line Height
  const [readingGuide, setReadingGuide] = useState<boolean>(() => {
    return localStorage.getItem('egbac_reading_guide') === 'true';
  });

  // Low-Data Mode State (وضع توفير البيانات والسرعة الفائقة)
  const [lowDataMode, setLowDataMode] = useState<boolean>(() => {
    return localStorage.getItem('egbac_low_data') === 'true';
  });

  // Synchronize CSS attributes and localStorage on state change
  useEffect(() => {
    document.documentElement.setAttribute('data-math-scale', mathScale);
    localStorage.setItem('egbac_math_scale', mathScale);
  }, [mathScale]);

  useEffect(() => {
    document.documentElement.setAttribute('data-reduced-motion', String(reducedMotion));
    localStorage.setItem('egbac_reduced_motion', String(reducedMotion));
  }, [reducedMotion]);

  useEffect(() => {
    document.documentElement.setAttribute('data-focus-rings', String(focusRings));
    localStorage.setItem('egbac_focus_rings', String(focusRings));
  }, [focusRings]);

  useEffect(() => {
    localStorage.setItem('egbac_sound', soundEnabled ? 'enabled' : 'muted');
  }, [soundEnabled]);

  useEffect(() => {
    document.documentElement.setAttribute('data-reading-guide', String(readingGuide));
    localStorage.setItem('egbac_reading_guide', String(readingGuide));
  }, [readingGuide]);

  useEffect(() => {
    document.documentElement.setAttribute('data-low-data', String(lowDataMode));
    localStorage.setItem('egbac_low_data', String(lowDataMode));
  }, [lowDataMode]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    onFontSizeChange('normal');
    onThemeChange('dark');
    setMathScale('100');
    setReducedMotion(false);
    setFocusRings(false);
    setSoundEnabled(true);
    setReadingGuide(false);
  };

  const keyboardShortcuts = [
    { key: '⌘K / Ctrl+K', descAr: 'البحث الفوري الشامل في الدروس والمسائل', descEn: 'Universal instantaneous search across units & databank' },
    { key: '⌘J / Ctrl+J', descAr: 'دستور القوانين والمعادلات لجميع الفروع', descEn: 'Official Comprehensive Formula Sheet Handbook' },
    { key: '⌘D / Ctrl+D', descAr: 'حاسبة ديسموس البيانية ثنائية وثلاثية الأبعاد', descEn: 'Desmos 2D/3D Graphing and Function Calculator' },
    { key: '⌘B / Ctrl+B', descAr: 'كتب الوزارة والأدلة الرسمية المعتمدة PDF', descEn: 'Approved official Ministry PDF Textbooks & guides' },
    { key: '⌘O / Ctrl+O', descAr: 'امتحانات الوزارة الرسمية (٢٠٢١ - ٢٠٢٥)', descEn: 'Official MoE Past Papers (2021-2025)' },
    { key: '⌘⇧V / Ctrl+Shift+V', descAr: 'بوابة التحقق الرقمي من شهادات الأداء', descEn: 'Official Performance Certificate Verification Portal' },
    { key: '⌥D / Alt+D', descAr: 'معجم ومفردات اللغة الإنجليزية التفاعلي', descEn: 'English Academic Vocabulary Dictionary & IPA' },
    { key: '⌥P / Alt+P', descAr: 'معمل الصوتيات والنطق الإنجليزي (44 IPA)', descEn: 'English Audio & Phonetics Interactive Lab' },
    { key: '⌥F / Alt+F', descAr: 'استوديو الصوتيات والاستماع الفرنسي', descEn: 'French Audio, Nasal Vowels & Listening Studio' },
    { key: '⌥A / Alt+A', descAr: 'معمل النحو والإعراب والبلاغة والأفخاخ النحوية', descEn: 'Arabic Grammar, I\'rab Tokenizer & Rhetoric Studio' },
    { key: '⌥U / Alt+U', descAr: 'لوحة إعدادات الوصول الشامل والمعايرة الحالية', descEn: 'Open Universal Accessibility & Calibration Suite' },
    { key: '⌥E / Alt+E', descAr: 'قاعة محاكاة الامتحان الوزاري الرسمي (٣ ساعات وبابل شيت)', descEn: 'Official 3-Hour Ministerial Exam Simulation Hall & OMR Sheet' },
    { key: '⌥S / Alt+S', descAr: 'تدريب المسح التشخيصي السريع (١٠ دقائق) لقياس السرعة', descEn: '10-Minute Rapid Diagnostic Sprint Drill' },
    { key: '?', descAr: 'الجولة الإرشادية التفاعلية لشرح المنصة', descEn: 'Interactive Navigation & Feature Quick Tour' },
    { key: 'Esc', descAr: 'إغلاق أي نافذة منبثقة أو عودة للقائمة الرئيسية', descEn: 'Close active modal, palette, or simulation overlay' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] ${
          isHighContrast
            ? 'bg-black border-2 border-cyan-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-indigo-100/50'
            : 'bg-slate-950 border-slate-800 text-slate-100 shadow-black/90'
        }`}
      >
        {/* Header */}
        <div
          className={`px-5 py-4 border-b flex items-center justify-between gap-3 ${
            isHighContrast
              ? 'border-cyan-500/50 bg-zinc-950'
              : isLight
              ? 'border-slate-200 bg-slate-50/80'
              : 'border-slate-800/80 bg-slate-900/60'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl border ${
                isHighContrast
                  ? 'bg-black border-cyan-400 text-cyan-300'
                  : isLight
                  ? 'bg-indigo-100 border-indigo-200 text-indigo-700'
                  : 'bg-indigo-950/70 border-indigo-700/50 text-indigo-400'
              }`}
            >
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 id="accessibility-title" className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'إعدادات الوصول الشامل والمعايرة البصرية' : 'Universal Accessibility & Visual Calibration'}
              </h2>
              <p className="text-xs text-slate-400">
                {isArabic
                  ? 'تخصيص مقاييس العرض والخطوط وتكبير المعادلات وتقليل الحركة لذوي الاحتياجات وشاشات العرض الذكية'
                  : 'Personalize typography, KaTeX formula magnification, high contrast, and reduced motion'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetDefaults}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                isHighContrast
                  ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-950/40'
                  : isLight
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
              title={isArabic ? 'استعادة الإعدادات الافتراضية' : 'Reset all settings to defaults'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isArabic ? 'الوضع الافتراضي' : 'Reset Defaults'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={isArabic ? 'إغلاق' : 'Close'}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isHighContrast
                  ? 'border-cyan-400 text-cyan-300 hover:bg-cyan-950'
                  : isLight
                  ? 'border-slate-200 text-slate-500 hover:bg-slate-100'
                  : 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section 1: Typography & Font Scaling */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-indigo-400" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                {isArabic ? 'حجم الخطوط والنصوص العامة' : 'General Typography Scale'}
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'normal', labelAr: 'عادي (١٠٠٪)', labelEn: 'Normal (100%)', badge: '19.2px', icon: 'A' },
                { id: 'large', labelAr: 'كبير (١١٥٪)', labelEn: 'Large (115%)', badge: '22.2px', icon: 'A+' },
                { id: 'xlarge', labelAr: 'كبير جداً (١٣٠٪)', labelEn: 'X-Large (130%)', badge: '25.2px', icon: 'A++' },
              ].map((opt) => {
                const isSelected = fontSize === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onFontSizeChange(opt.id as FontSizeMode)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? isHighContrast
                          ? 'bg-cyan-950 border-2 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-950/50'
                          : isLight
                          ? 'bg-indigo-50 border-2 border-indigo-600 text-indigo-900 shadow-md shadow-indigo-100'
                          : 'bg-indigo-950/60 border-2 border-indigo-500 text-white shadow-lg shadow-indigo-950/50'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-900 text-slate-300'
                    }`}
                  >
                    <span className="text-xl font-black font-mono mb-1">{opt.icon}</span>
                    <span className="font-bold text-xs">{isArabic ? opt.labelAr : opt.labelEn}</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5">{opt.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: KaTeX Mathematical Formula Magnification */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                  {isArabic ? 'تكبير المعادلات والرموز الرياضية (KaTeX Scale)' : 'Mathematical Formulas Magnification'}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {mathScale}%
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: '100', label: '100%', subAr: 'قياسي', subEn: 'Standard' },
                { id: '115', label: '115%', subAr: 'واضح', subEn: 'Enhanced' },
                { id: '130', label: '130%', subAr: 'مكبّر', subEn: 'Enlarged' },
                { id: '150', label: '150%', subAr: 'عرض شاشة ذكية', subEn: 'Smartboard' },
              ].map((m) => {
                const isSelected = mathScale === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMathScale(m.id as MathScaleMode)}
                    className={`px-3 py-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? isHighContrast
                          ? 'bg-cyan-950 border-2 border-cyan-400 text-cyan-200'
                          : isLight
                          ? 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950'
                          : 'bg-emerald-950/60 border-2 border-emerald-500 text-white'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-900 text-slate-300'
                    }`}
                  >
                    <p className="font-mono font-black text-sm">{m.label}</p>
                    <p className="text-[10px] text-slate-400">{isArabic ? m.subAr : m.subEn}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Theme & High Contrast */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                {isArabic ? 'وضع الألوان ومستوى التباين' : 'Color Palette & High Contrast Mode'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'light',
                  icon: Sun,
                  iconColor: 'text-amber-500',
                  titleAr: 'الوضع النهاري (فاتح)',
                  titleEn: 'Day Mode (Light)',
                  descAr: 'خلفيات بيضاء نقية مع نصوص داكنة عالية الوضوح',
                  descEn: 'Clean bright paper styling for daytime reading',
                },
                {
                  id: 'dark',
                  icon: Moon,
                  iconColor: 'text-indigo-400',
                  titleAr: 'الوضع الليلي (داكن)',
                  titleEn: 'Night Mode (Dark)',
                  descAr: 'خلفية كحلية داكنة مريحة للعين لتقليل إجهاد النظر',
                  descEn: 'Subtle slate midnight colors to minimize eye strain',
                },
                {
                  id: 'high-contrast',
                  icon: Zap,
                  iconColor: 'text-yellow-400',
                  titleAr: 'تباين فائق (AMOLED Cyber)',
                  titleEn: 'High Contrast (AMOLED)',
                  descAr: 'أسود نقي ١٠٠٪ مع إضاءة فسفورية صفراء وسماوية للمكفوفين وضعاف البصر',
                  descEn: 'True black (#000) with glowing cyan & yellow for low vision',
                },
              ].map((th) => {
                const isSelected = theme === th.id;
                const Icon = th.icon;
                return (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => onThemeChange(th.id as ThemeMode)}
                    className={`flex flex-col text-left rtl:text-right p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? isHighContrast
                          ? 'bg-zinc-950 border-2 border-yellow-400 text-yellow-300'
                          : isLight
                          ? 'bg-amber-50 border-2 border-amber-600 text-amber-950 shadow-sm'
                          : 'bg-indigo-950/60 border-2 border-indigo-500 text-white shadow-sm'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-900 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${th.iconColor}`} />
                        <span className="font-bold text-xs">{isArabic ? th.titleAr : th.titleEn}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {isArabic ? th.descAr : th.descEn}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Motor & Cognitive Ergonomics */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                {isArabic ? 'خيارات الحركة والتركيز والسمع' : 'Motor, Cognitive & Audio Ergonomics'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Reduced Motion Toggle */}
              <label
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  reducedMotion
                    ? isHighContrast
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                      : isLight
                      ? 'bg-cyan-50 border-cyan-400 text-cyan-950'
                      : 'bg-cyan-950/40 border-cyan-500 text-cyan-100'
                    : isLight
                    ? 'border-slate-200 hover:bg-slate-50'
                    : 'border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <div className="font-bold text-xs flex items-center gap-1.5">
                    <span>{isArabic ? 'إيقاف الحركات والاهتزازات (Reduce Motion)' : 'Reduced Motion'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {isArabic
                      ? 'إيقاف دوران الدينامو التلقائي والانتقالات السريعة لراحة الدوار الدهليزي وحماية الأجهزة الضعيفة'
                      : 'Disable 3D continuous rotation and bouncy transitions for vestibular comfort'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={(e) => setReducedMotion(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                />
              </label>

              {/* Enhanced Keyboard Focus Rings */}
              <label
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  focusRings
                    ? isHighContrast
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                      : isLight
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-950'
                      : 'bg-indigo-950/40 border-indigo-500 text-indigo-100'
                    : isLight
                    ? 'border-slate-200 hover:bg-slate-50'
                    : 'border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <div className="font-bold text-xs flex items-center gap-1.5">
                    <span>{isArabic ? 'إطار تركيز مضيء للأزرار (Focus Indicators)' : 'High-Visibility Focus Rings'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {isArabic
                      ? 'إبراز العنصر المحدد بلوحة المفاتيح بإطار سماوي مضيء لتسهيل التصفح دون فأرة'
                      : 'Show high-contrast cyan highlight ring on focused controls when navigating via Tab'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={focusRings}
                  onChange={(e) => setFocusRings(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
              </label>

              {/* Audio & Sound Cues */}
              <label
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  soundEnabled
                    ? isHighContrast
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                      : isLight
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                      : 'bg-emerald-950/40 border-emerald-500 text-emerald-100'
                    : isLight
                    ? 'border-slate-200 hover:bg-slate-50'
                    : 'border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <div className="font-bold text-xs flex items-center gap-1.5">
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{isArabic ? 'التنبيهات الصوتية للامتحان والمختبرات' : 'Exam Timer & Laboratory Audio Cues'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {isArabic
                      ? 'تشغيل رنين خفيف عند مرور أوقات التحذير (٣٠، ١٠، ٥ دقائق) ونقرات التجارب'
                      : 'Auditory feedback chimes for ministerial exam time warnings and lab interactions'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
              </label>

              {/* Reading Guide & Extended Line Spacing */}
              <label
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  readingGuide
                    ? isHighContrast
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                      : isLight
                      ? 'bg-violet-50 border-violet-400 text-violet-950'
                      : 'bg-violet-950/40 border-violet-500 text-violet-100'
                    : isLight
                    ? 'border-slate-200 hover:bg-slate-50'
                    : 'border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <div className="font-bold text-xs flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-violet-400" />
                    <span>{isArabic ? 'تباعد الأسطر المعزز (Dyslexia-Friendly Spacing)' : 'Enhanced Line Spacing'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {isArabic
                      ? 'زيادة المسافات بين السطور والحروف لمنع تداخل الكلمات وتسهيل القراءة لذوي عسر القراءة'
                      : 'Increase vertical line-height (1.85) to prevent word clustering for dyslexia readability'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={readingGuide}
                  onChange={(e) => setReadingGuide(e.target.checked)}
                  className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500 cursor-pointer"
                />
              </label>

              {/* Low-Data Mode (وضع توفير البيانات والسرعة الفائقة) */}
              <label
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  lowDataMode
                    ? isHighContrast
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                      : isLight
                      ? 'bg-amber-50 border-amber-400 text-amber-950'
                      : 'bg-amber-950/40 border-amber-500 text-amber-100'
                    : isLight
                    ? 'border-slate-200 hover:bg-slate-50'
                    : 'border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <div className="font-bold text-xs flex items-center gap-1.5">
                    <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isArabic ? 'وضع توفير البيانات والسرعة الفائقة (Low-Data Mode)' : 'Low-Data & Battery Saver Mode'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {isArabic
                      ? 'استخدام خطوط النظام الأساسية واستبدال المحاكيات ثلاثية الأبعاد برسوم بيانية خفيفة لتوفير باقة النت والعمل بسلاسة على الهواتف الضعيفة'
                      : 'Fallback to native system fonts and 2D lightweight schematics for 3D labs to conserve bandwidth on low-end devices'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={lowDataMode}
                  onChange={(e) => setLowDataMode(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Section 5: Real-Time Live Preview Card */}
          <div
            className={`p-4 rounded-xl border ${
              isHighContrast
                ? 'bg-black border-yellow-400'
                : isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold text-xs text-slate-400">
                  {isArabic ? 'معاينة حية للإعدادات الحالية' : 'Live Calibration Preview'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                Font: {fontSize} | Math: {mathScale}% | Motion: {reducedMotion ? 'Off' : 'On'}
              </span>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm">
                {isArabic
                  ? 'قانون فاراداي للحث الكهرومغناطيسي والقوة الدافعة الكهربية اللحظية والعظمى للدينامو:'
                  : 'Faraday’s Law of Induction and instantaneous alternating generator electromotive force:'}
              </p>
              <div className="p-2.5 rounded-lg bg-black/20 dark:bg-black/40 overflow-x-auto text-center">
                <MathRenderer
                  math={`e.m.f._{\\text{inst}} = -N \\frac{\\Delta \\Phi_m}{\\Delta t} = NAB\\omega \\sin(\\omega t) \\implies e.m.f._{\\text{eff}} = \\frac{e.m.f._{\\max}}{\\sqrt{2}} \\approx 0.707 \\, e.m.f._{\\max}`}
                />
              </div>
            </div>
          </div>

          {/* Section 6: Official Keyboard Shortcuts Cheat Sheet */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-amber-400" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                {isArabic ? 'دليل واختصارات لوحة المفاتيح الرسمية' : 'Official Ministerial Keyboard Shortcuts Cheat Sheet'}
              </h3>
            </div>
            <div
              className={`rounded-xl border overflow-hidden ${
                isHighContrast
                  ? 'border-cyan-500/50 bg-black'
                  : isLight
                  ? 'border-slate-200 bg-white'
                  : 'border-slate-800/80 bg-slate-900/40'
              }`}
            >
              <div className="max-h-56 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-800">
                {keyboardShortcuts.map((sc, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2 flex items-center justify-between gap-3 text-xs hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="font-medium text-slate-300">
                      {isArabic ? sc.descAr : sc.descEn}
                    </span>
                    <kbd
                      className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                        isHighContrast
                          ? 'bg-zinc-900 text-yellow-300 border-yellow-400'
                          : isLight
                          ? 'bg-slate-100 text-slate-800 border-slate-300 shadow-xs'
                          : 'bg-black/50 text-indigo-300 border-white/15 shadow-xs'
                      }`}
                    >
                      {sc.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-5 py-3 border-t flex items-center justify-between gap-3 ${
            isHighContrast
              ? 'border-cyan-500/50 bg-zinc-950'
              : isLight
              ? 'border-slate-200 bg-slate-50'
              : 'border-slate-800 bg-slate-900/60'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isArabic ? 'يتم حفظ كافة تفضيلاتك محلياً وتطبيقها تلقائياً على كل الجلسات' : 'All preferences are stored locally and apply across sessions'}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-5 py-2 rounded-xl text-xs font-black shadow-md cursor-pointer transition-all active:scale-95 ${
              isHighContrast
                ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                : isLight
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-950/50'
            }`}
          >
            {isArabic ? 'حفظ وتطبيق التغييرات' : 'Save & Apply'}
          </button>
        </div>
      </div>
    </div>
  );
};
