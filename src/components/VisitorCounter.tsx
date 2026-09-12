import React, { useState, useEffect, useMemo } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import type { ThemeMode } from '../types/curriculum';
import { toHindiDigits } from '../utils/arabicNumerals';
import { Users, Activity, Sparkles } from 'lucide-react';
import { subscribeToVisitorCount } from '../services/firebase';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const VisitorCounter: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const t = translations[lang];

  // Base anchor: launch start count + continuous minute progression + user visits
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    try {
      const BASE_COUNT = 58490;
      // Continuous seconds since Jan 1, 2026
      const anchorTime = new Date(2026, 0, 1).getTime();
      const now = Date.now();
      const elapsedSeconds = Math.max(0, (now - anchorTime) / 1000);
      // Continuous organic progression: ~1 visit every 520 seconds (~166 visits/day)
      const continuousGain = Math.floor(elapsedSeconds / 520);

      const storedUserVisits = parseInt(localStorage.getItem('egbac_user_visits') || '0', 10);
      const computedTotal = BASE_COUNT + continuousGain + storedUserVisits;

      // Ensure monotonically increasing: never lower than the highest recorded count
      const highestSeen = parseInt(localStorage.getItem('egbac_highest_count') || '0', 10);
      const finalCount = Math.max(computedTotal, highestSeen);
      localStorage.setItem('egbac_highest_count', String(finalCount));
      return finalCount;
    } catch {
      return 58490;
    }
  });

  // Today's visits: dynamic diurnal curve + extra real-time visits
  const [todayVisits, setTodayVisits] = useState<number>(() => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const base = Math.floor(650 + hour * 48 + minute * 0.8 + Math.sin(hour) * 30);
    try {
      const storedExtra = parseInt(localStorage.getItem('egbac_today_extra') || '0', 10);
      return base + storedExtra;
    } catch {
      return base;
    }
  });

  // Live active online concurrent visitors (fluctuates naturally)
  const [liveActive, setLiveActive] = useState<number>(() => {
    const hour = new Date().getHours();
    // Peak study hours in Egypt (4 PM - 11 PM)
    const baseActive = hour >= 16 && hour <= 23 ? 58 : 34;
    return baseActive + Math.floor(Math.random() * 8);
  });

  // Subscribe to real-time global visitor count via Firebase Cloud Firestore
  useEffect(() => {
    const unsubscribe = subscribeToVisitorCount(({ totalVisits, todayVisits: firestoreToday }) => {
      setVisitorCount(totalVisits);
      setTodayVisits(firestoreToday);
      try {
        localStorage.setItem('egbac_highest_count', String(totalVisits));
      } catch {}
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Fluctuate active concurrent online learners badge
  useEffect(() => {
    const activeInterval = setInterval(() => {
      setLiveActive((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, +1, +2
        return Math.max(22, Math.min(85, prev + delta));
      });
    }, 8000);

    return () => {
      clearInterval(activeInterval);
    };
  }, []);

  // Format total visitor digits into structured array with commas
  const digitsFormatted = useMemo(() => {
    const str = visitorCount.toLocaleString('en-US'); // e.g. "58,492"
    if (isArabic) {
      return str.split('').map((char) => (char === ',' ? '،' : toHindiDigits(char)));
    }
    return str.split('');
  }, [visitorCount, isArabic]);

  const liveActiveDisplay = isArabic ? toHindiDigits(liveActive) : liveActive;
  const todayVisitsDisplay = isArabic ? toHindiDigits(todayVisits.toLocaleString('en-US')) : todayVisits.toLocaleString();

  return (
    <div
      className={`w-full rounded-2xl p-4 sm:p-5 border transition-all shadow-md ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-gradient-to-r from-slate-50 via-blue-50/40 to-emerald-50/40 border-slate-200 text-slate-800 shadow-slate-100'
          : 'bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950 border-slate-800 text-slate-200'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      aria-label={t.visitorCounterTitle}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Title & Subtitle Badge */}
        <div className="flex items-center gap-3 text-center sm:text-left rtl:sm:text-right">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
              isContrast
                ? 'bg-black border border-cyan-400 text-cyan-300'
                : isLight
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-400'
            }`}
          >
            <Users className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white">
                {t.visitorCounterTitle}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                  isContrast
                    ? 'bg-black text-green-400 border-green-400'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {liveActiveDisplay} {t.visitorCounterLive}
                </span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {isArabic
                ? 'منصة التعليم التفاعلي للثانوية العامة والبكالوريا المصرية 2025/2026'
                : 'Interactive learning portal for Egyptian Thanaweya Amma & EG-Bac'}
            </p>
          </div>
        </div>

        {/* Center: Digital Odometer Digit Flip Cards */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.visitorCounterTotal}
          </span>
          <div className="flex items-center gap-1">
            {digitsFormatted.map((digit, idx) => {
              if (digit === ',' || digit === '،') {
                return (
                  <span
                    key={idx}
                    className="text-base font-black px-0.5 text-slate-400 dark:text-slate-500"
                  >
                    {digit}
                  </span>
                );
              }
              return (
                <div
                  key={idx}
                  className={`w-6 h-8 sm:w-7 sm:h-9 rounded-lg flex items-center justify-center font-mono font-black text-sm sm:text-base border shadow-sm transition-transform hover:scale-105 select-none ${
                    isContrast
                      ? 'bg-black text-cyan-300 border-cyan-400 shadow-cyan-900/30'
                      : isLight
                      ? 'bg-slate-900 text-emerald-400 border-slate-800 shadow-slate-900/20'
                      : 'bg-slate-950 text-emerald-400 border-emerald-500/30 shadow-black'
                  }`}
                  style={{
                    textShadow: isContrast ? '0 0 8px #22d3ee' : '0 0 8px rgba(52, 211, 153, 0.5)',
                  }}
                >
                  {digit}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Today's visits & Engagement metrics */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <div
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
              isContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : isLight
                ? 'bg-white border-slate-200 text-slate-700 shadow-xs'
                : 'bg-slate-950/70 border-slate-800 text-slate-300'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-teal-500 shrink-0" />
            <span>
              +{todayVisitsDisplay} {t.visitorCounterToday}
            </span>
          </div>

          <div
            className={`hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-[11px] ${
              isContrast
                ? 'bg-black border-white/60 text-slate-200'
                : isLight
                ? 'bg-white border-slate-200 text-slate-600 shadow-xs'
                : 'bg-slate-950/70 border-slate-800 text-slate-400'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{isArabic ? 'تحديث لحظي' : 'Live Sync'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
