import React, { useState, useEffect } from 'react';
import type { Language } from '../i18n/translations';
import {
  X,
  Download,
  CheckCircle2,
  HardDrive,
  Trash2,
  ShieldCheck,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import {
  SUBJECT_PACKAGES,
  getStorageQuota,
  requestStoragePersistence,
  getDownloadedSubjectPackIds,
  downloadSubjectPack,
  removeSubjectPack,
  clearAllSubjectPacks,
  type StorageQuotaInfo,
  type SubjectPackInfo,
} from '../services/downloadManagerService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const DownloadManagerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [quota, setQuota] = useState<StorageQuotaInfo | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [progressPct, setProgressPct] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'stem' | 'humanities' | 'languages'>('all');
  const [persisting, setPersisting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  const refreshData = async () => {
    const q = await getStorageQuota();
    setQuota(q);
    setDownloadedIds(getDownloadedSubjectPackIds());
  };

  if (!isOpen) return null;

  const handleDownload = async (pack: SubjectPackInfo) => {
    if (downloadingId) return;
    setDownloadingId(pack.id);
    setProgressPct(0);
    setProgressStatus(isAr ? 'جارٍ بدء التحميل...' : 'Starting download...');

    const success = await downloadSubjectPack(pack.id, (pct, status) => {
      setProgressPct(pct);
      setProgressStatus(status);
    });

    if (success) {
      setDownloadedIds(getDownloadedSubjectPackIds());
      await refreshData();
    }
    setDownloadingId(null);
  };

  const handleRemove = async (packId: string) => {
    await removeSubjectPack(packId);
    setDownloadedIds(getDownloadedSubjectPackIds());
    await refreshData();
  };

  const handleClearAll = async () => {
    if (window.confirm(isAr ? 'هل أنت متأكد من رغبتك في حذف جميع المواد المحملة مؤقتاً؟' : 'Are you sure you want to clear all downloaded offline packs?')) {
      await clearAllSubjectPacks();
      setDownloadedIds([]);
      await refreshData();
    }
  };

  const handlePersist = async () => {
    setPersisting(true);
    await requestStoragePersistence();
    await refreshData();
    setPersisting(false);
  };

  const filteredPacks = SUBJECT_PACKAGES.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  const totalDownloadedMB = SUBJECT_PACKAGES
    .filter((p) => downloadedIds.includes(p.id))
    .reduce((sum, p) => sum + p.estimatedSizeMB, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-auto ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : 'bg-slate-900/95 border-emerald-500/30 text-white shadow-emerald-950/50'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b ${
            isLight ? 'bg-emerald-50/70 border-slate-200' : 'bg-slate-800/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isAr ? 'مدير التحميل وحزم المذاكرة بدون إنترنت' : 'Offline Study Pack Manager'}
                </h2>
                <span className="hidden sm:inline-block">
                  <EgyptFlag className="w-5 h-3.5" />
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isAr
                  ? 'حفظ بنوك الأسئلة والشروحات والمختبرات على جهازك للعمل بدون نت 100%'
                  : 'Pre-cache question databanks, labs & textbooks for 100% offline study'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Device Storage Status Bar */}
        <div
          className={`p-4 border-b ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-300">
                {isAr ? 'مساحة الحزم المحفوظة على هذا الجهاز:' : 'Offline Stored Capacity:'}
              </span>
              <span className="px-2 py-0.5 rounded-full font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {Math.round(totalDownloadedMB * 10) / 10} MB
              </span>
              <span className="text-slate-500 text-[11px]">
                ({downloadedIds.length} {isAr ? 'من 11 مادة' : 'of 11 subjects'})
              </span>
            </div>

            {quota && (
              <div className="flex items-center gap-2 text-slate-400">
                <span>
                  {isAr ? 'المستخدم كلياً بالمتصفح:' : 'Total Browser Cache:'}{' '}
                  <strong className="text-slate-200">{quota.usageMB} MB</strong> / {quota.quotaMB} MB
                </span>
                {!quota.isPersisted && (
                  <button
                    onClick={handlePersist}
                    disabled={persisting}
                    className="px-2 py-0.5 rounded border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-colors text-[10px] font-semibold flex items-center gap-1"
                    title={isAr ? 'منع المتصفح من مسح الحزم عند انخفاض مساحة الهاتف' : 'Prevent browser from clearing offline cache'}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    <span>{isAr ? 'حماية من الحذف' : 'Protect Storage'}</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Progress Bar of Storage */}
          {quota && (
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(1, Math.min(100, quota.percentUsed))}%` }}
              />
            </div>
          )}
        </div>

        {/* Filter Navigation */}
        <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'جميع المواد (11)' : 'All Subjects (11)'}
            </button>
            <button
              onClick={() => setSelectedFilter('stem')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'stem'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'القسم العلمي' : 'STEM'}
            </button>
            <button
              onClick={() => setSelectedFilter('humanities')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'humanities'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'القسم الأدبي' : 'Humanities'}
            </button>
            <button
              onClick={() => setSelectedFilter('languages')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'languages'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'اللغات' : 'Languages'}
            </button>
          </div>

          {downloadedIds.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'تفريغ الذاكرة المؤقتة' : 'Clear All'}</span>
            </button>
          )}
        </div>

        {/* Subjects List */}
        <div className="p-5 max-h-[55vh] overflow-y-auto space-y-3">
          {filteredPacks.map((pack) => {
            const isDownloaded = downloadedIds.includes(pack.id);
            const isDownloading = downloadingId === pack.id;

            return (
              <div
                key={pack.id}
                className={`p-4 rounded-xl border transition-all ${
                  isDownloaded
                    ? isLight
                      ? 'bg-emerald-50/50 border-emerald-300'
                      : 'bg-emerald-950/20 border-emerald-700/40 shadow-sm'
                    : isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-slate-800/60 border-slate-700/60 hover:border-slate-600'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-sm sm:text-base text-slate-100">
                        {isAr ? pack.titleAr : pack.titleEn}
                      </h4>
                      {isDownloaded && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isAr ? 'جاهزة أوفلاين' : 'Offline Ready'}</span>
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 font-mono">
                        ~{pack.estimatedSizeMB} MB
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{pack.chapterCount} {isAr ? 'أبواب وفصول' : 'Chapters'}</span>
                      <span>•</span>
                      <span>{pack.problemCount}+ {isAr ? 'مسألة وبنك أسئلة' : 'Problems'}</span>
                      {pack.hasVirtualLab && (
                        <>
                          <span>•</span>
                          <span className="text-amber-400 font-semibold">{isAr ? 'مختبر تفاعلي' : 'Interactive Lab'}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {pack.sampleTopicsAr.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-900/60 border border-slate-700/60 text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {isDownloaded ? (
                      <button
                        onClick={() => handleRemove(pack.id)}
                        className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-rose-950/30 hover:border-rose-700 hover:text-rose-400 text-slate-400 text-xs transition-colors flex items-center gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{isAr ? 'حذف الحزمة' : 'Delete'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownload(pack)}
                        disabled={downloadingId !== null}
                        className="px-4 py-2 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white text-xs transition-all disabled:opacity-50 flex items-center gap-2 shadow-md shadow-emerald-600/20"
                      >
                        <Download className="w-4 h-4" />
                        <span>{isAr ? 'تحميل للمذاكرة بدون نت' : 'Download for Offline'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress bar during active download */}
                {isDownloading && (
                  <div className="mt-3 pt-3 border-t border-slate-700/60 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-emerald-400">
                      <span>{progressStatus}</span>
                      <span className="font-mono font-bold">{progressPct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-200"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
