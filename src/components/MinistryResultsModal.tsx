import React, { useState, useEffect, useMemo } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Save,
  RotateCcw,
  Lock,
  Compass,
  X,
  GraduationCap,
} from 'lucide-react';
import type { AcademicTrack, OfficialSubjectScore } from '../types/ministryResults';
import {
  OFFICIAL_PORTALS,
  getInitialSubjectScoresForTrack,
  calculateResultsSummary,
  loadSavedOfficialResults,
  saveOfficialResults,
  clearSavedOfficialResults,
  computeScoreCalibration,
} from '../services/ministryResultsService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  predictedPercentage?: number;
  onResultsSaved?: () => void;
}

export const MinistryResultsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  predictedPercentage = 75,
  onResultsSaved,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<AcademicTrack>('scientific_math');
  const [seatNumber, setSeatNumber] = useState<string>('');
  const [governorate, setGovernorate] = useState<string>('القاهرة');
  const [subjectScores, setSubjectScores] = useState<OfficialSubjectScore[]>(() =>
    getInitialSubjectScoresForTrack('scientific_math')
  );
  const [savedSuccessMessage, setSavedSuccessMessage] = useState<string | null>(null);

  // Load existing saved records on open
  useEffect(() => {
    if (isOpen) {
      const existing = loadSavedOfficialResults();
      if (existing) {
        setSelectedTrack(existing.academicTrack);
        setSeatNumber(existing.seatNumber || '');
        setGovernorate(existing.governorate || 'القاهرة');
        setSubjectScores(existing.subjects);
      } else {
        setSubjectScores(getInitialSubjectScoresForTrack(selectedTrack));
      }
      setSavedSuccessMessage(null);
    }
  }, [isOpen]);

  // When track changes, update subjects if not previously populated
  const handleTrackChange = (newTrack: AcademicTrack) => {
    setSelectedTrack(newTrack);
    setSubjectScores(getInitialSubjectScoresForTrack(newTrack));
    setSavedSuccessMessage(null);
  };

  const { totalMarks, maxTotalMarks, percentage } = useMemo(
    () => calculateResultsSummary(subjectScores),
    [subjectScores]
  );

  const calibration = useMemo(() => {
    if (percentage > 0 && predictedPercentage > 0) {
      return computeScoreCalibration(predictedPercentage, percentage);
    }
    return null;
  }, [predictedPercentage, percentage]);

  const handleScoreChange = (subjectId: string, val: string) => {
    const num = Math.max(0, parseFloat(val) || 0);
    setSubjectScores((prev) =>
      prev.map((s) => {
        if (s.subjectId === subjectId) {
          const clamped = Math.min(s.maxMarks, num);
          return { ...s, studentMarks: clamped };
        }
        return s;
      })
    );
    setSavedSuccessMessage(null);
  };

  const handleSave = () => {
    saveOfficialResults(selectedTrack, subjectScores, seatNumber, governorate);
    setSavedSuccessMessage('تم حفظ واعتماد النتيجة الرسمية محليًا وضبط معايرة التنبؤ بنجاح!');
    if (onResultsSaved) {
      onResultsSaved();
    }
  };

  const handleReset = () => {
    if (window.confirm('هل تريد مسح النتيجة الرسمية المحفوظة وإعادة التعيين؟')) {
      clearSavedOfficialResults();
      setSubjectScores(getInitialSubjectScoresForTrack(selectedTrack));
      setSeatNumber('');
      setSavedSuccessMessage(null);
      if (onResultsSaved) {
        onResultsSaved();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir="rtl"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="بوابة نتائج الثانوية العامة والمعايرة الرسمية"
        data-preserve-dark="true"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  بوابة نتائج الثانوية العامة والمعايرة الرسمية
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  وزارة التربية والتعليم
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                الربط الآمن المباشر مع سيرفرات النتائج الرسمية ومعايرة تنبؤ الجاهزية بدقة متناهية
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Privacy Guarantee Alert */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3 text-xs leading-relaxed text-indigo-200">
            <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-indigo-300 block mb-0.5">
                حماية الخصوصية المطلقة (قانون حماية البيانات الشخصية رقم ١٥١ لسنة ٢٠٢٠):
              </span>
              رقم جلوسك ودرجاتك لا يتم إرسالها إلى أي خادم على الإطلاق. الاستعلام يتم مباشرة بين متصفحك وبوابات
              الوزارة، وتُحفظ الدرجات محلياً داخل جهازك فقط لمعايرة دقة تنبؤ كليبسات.
            </div>
          </div>

          {/* Section 1: Official Portal Quick Links */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>روابط بوابات النتائج الرسمية المعتمدة (استعلام برقم الجلوس)</span>
              </h4>
              <span className="text-[11px] text-slate-400">سيرفرات سريعة تعمل بالتوازي</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(e.target.value)}
                  placeholder="أدخل رقم الجلوس (مثال: 124589)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-mono text-center tracking-widest"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {OFFICIAL_PORTALS.map((portal) => {
                const targetUrl = portal.buildQueryUrl(seatNumber);
                return (
                  <a
                    key={portal.id}
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>{portal.nameAr}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{portal.descriptionAr}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Section 2: Academic Track & Subject Score Input */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  <span>تسجيل واعتماد درجات المواد الرسمية</span>
                </h4>
                <p className="text-xs text-slate-400">سجل درجاتك الفعلية لمعايرة نموذج التنبؤ الخاص بك</p>
              </div>

              {/* Track selector */}
              <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-xl border border-slate-700">
                <button
                  onClick={() => handleTrackChange('scientific_math')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedTrack === 'scientific_math'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  علمي رياضة
                </button>
                <button
                  onClick={() => handleTrackChange('scientific_science')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedTrack === 'scientific_science'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  علمي علوم
                </button>
                <button
                  onClick={() => handleTrackChange('literary')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedTrack === 'literary'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  أدبي
                </button>
              </div>
            </div>

            {/* Subject Inputs Table */}
            <div className="border border-slate-700/80 rounded-2xl overflow-hidden bg-slate-900/60">
              <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-800/80 text-[11px] font-bold text-slate-400 border-b border-slate-700/80">
                <span className="col-span-6 sm:col-span-7">المادة الدراسية الرسمية</span>
                <span className="col-span-2 text-center">الدرجة العظمى</span>
                <span className="col-span-4 sm:col-span-3 text-center">درجتك المحققة</span>
              </div>

              <div className="divide-y divide-slate-800">
                {subjectScores.map((sub) => (
                  <div key={sub.subjectId} className="grid grid-cols-12 px-4 py-2.5 items-center hover:bg-slate-800/30">
                    <div className="col-span-6 sm:col-span-7">
                      <span className="font-semibold text-slate-200 text-xs sm:text-sm">{sub.nameAr}</span>
                      <span className="block text-[10px] text-slate-500 font-mono">{sub.nameEn}</span>
                    </div>

                    <div className="col-span-2 text-center text-xs font-bold text-slate-400">
                      {sub.maxMarks}
                    </div>

                    <div className="col-span-4 sm:col-span-3 flex items-center justify-center gap-1.5">
                      <input
                        type="number"
                        min="0"
                        max={sub.maxMarks}
                        step="0.5"
                        value={sub.studentMarks === 0 ? '' : sub.studentMarks}
                        onChange={(e) => handleScoreChange(sub.subjectId, e.target.value)}
                        placeholder="0"
                        className="w-20 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-center font-bold text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                      <span className="text-[11px] text-slate-400">/ {sub.maxMarks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Score Summary Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-800/90 to-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-2xl font-mono text-emerald-400 shadow-md">
                  {percentage}%
                </div>
                <div>
                  <div className="text-xs text-slate-400">المجموع الكلي المعتمد:</div>
                  <div className="text-lg font-bold text-white">
                    <span className="font-mono text-emerald-300">{totalMarks}</span>
                    <span className="text-xs text-slate-400 mx-1.5">من إجمالي</span>
                    <span className="font-mono text-slate-300">{maxTotalMarks}</span>
                  </div>
                </div>
              </div>

              {/* Calibration Delta Insight */}
              {calibration && (
                <div className="text-xs max-w-sm p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>مقارنة التنبؤ مع الواقع:</span>
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    الدرجة التنبؤية: <span className="font-mono font-bold text-amber-300">{predictedPercentage}%</span>{' '}
                    | الدرجة الفعلية: <span className="font-mono font-bold text-emerald-300">{percentage}%</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{calibration.insightAr}</p>
                </div>
              )}
            </div>

            {/* Saved Notification */}
            {savedSuccessMessage && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{savedSuccessMessage}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 border border-rose-900/30 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>مسح الدرجات المحفوظة</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              إغلاق
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>حفظ واعتماد النتيجة للمعايرة</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
