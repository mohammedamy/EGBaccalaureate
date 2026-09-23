import React, { useState, useMemo } from 'react';
import {
  MapPin,
  TrendingUp,
  Download,
  WifiOff,
  CheckCircle2,
  BarChart3,
  X,
  Compass,
} from 'lucide-react';
import {
  getAllGovernorates,
  getRegionalZoneSummaries,
  getRuralUrbanParityReport,
  getUserGovernorate,
  setUserGovernorate,
  exportGovernorateReportCSV,
} from '../services/governorateAnalyticsService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GovernorateAnalyticsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [myGovernorate, setMyGovernorateState] = useState<string>(() => getUserGovernorate());

  const allGovernorates = useMemo(() => getAllGovernorates(), []);
  const zoneSummaries = useMemo(() => getRegionalZoneSummaries(), []);
  const parityReport = useMemo(() => getRuralUrbanParityReport(), []);

  const filteredGovernorates = useMemo(() => {
    if (selectedZone === 'all') return allGovernorates;
    return allGovernorates.filter((g) => g.zone === selectedZone);
  }, [allGovernorates, selectedZone]);

  const handleSetMyGov = (govId: string) => {
    setUserGovernorate(govId);
    setMyGovernorateState(govId);
  };

  const handleExportCSV = () => {
    const csvContent = exportGovernorateReportCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ClipSAT_Egypt_Governorates_Equity_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir="rtl"
    >
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  تحليلات المحافظات وتكافؤ الفرص التعليمية
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  ٢٧ محافظة مصرية
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                مؤشرات الجاهزية الإقليمية ومعدل التدريب غير المتصل بالإنترنت وتقليص الفجوة بين الريف والحضر
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
          {/* Hero: Rural vs Urban Parity Index (Equity Target from Strategic Plan) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 space-y-4 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                  ⚖️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">مؤشر تكافؤ الفرص التعليمية بين الريف والحضر</h4>
                  <span className="text-xs text-emerald-300 font-semibold">
                    المستهدف الاستراتيجي لكليبسات: تقليص فجوة الأداء لتكون أقل من ١٠٪
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>المستهدف محقق: الفجوة {parityReport.parityGapPercentage}٪ فقط</span>
                </span>
              </div>
            </div>

            {/* Parity Triad Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-center space-y-1">
                <span className="text-xs text-slate-400">متوسط جاهزية الحضر (Urban)</span>
                <div className="text-xl font-bold font-mono text-cyan-400">
                  {parityReport.urbanAverageReadiness}%
                </div>
                <span className="text-[10px] text-slate-500">القاهرة، الإسكندرية، بورسعيد، السويس</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-center space-y-1">
                <span className="text-xs text-slate-400">متوسط جاهزية الريف (Rural)</span>
                <div className="text-xl font-bold font-mono text-emerald-400">
                  {parityReport.ruralAverageReadiness}%
                </div>
                <span className="text-[10px] text-slate-500">قرى الصعيد، الدلتا، القليوبية، البحيرة</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-center space-y-1">
                <span className="text-xs text-slate-400">المحافظات الحدودية (Frontier)</span>
                <div className="text-xl font-bold font-mono text-amber-400">
                  {parityReport.frontierAverageReadiness}%
                </div>
                <span className="text-[10px] text-slate-500">سيناء، مطروح، الوادي الجديد، البحر الأحمر</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800 leading-relaxed">
              {parityReport.evaluationAr}
            </p>
          </div>

          {/* Regional Zones Bar Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
              <span>معدلات الجاهزية والاعتماد على الأوفلاين حسب الأقاليم التخطيطية:</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {zoneSummaries.map((z) => (
                <div key={z.zone} className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5">
                  <div className="text-xs font-bold text-slate-200 line-clamp-1">{z.nameAr}</div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">الجاهزية:</span>
                    <span className="font-mono font-bold text-cyan-300">{z.averageReadiness}%</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">أوفلاين:</span>
                    <span className="font-mono font-bold text-emerald-400">{z.averageOfflineRatio}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Section 2: Governorate Grid & Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>دليل المحافظات المصرية ({filteredGovernorates.length} محافظة)</span>
                </h4>
                <p className="text-xs text-slate-400">
                  حدد محافظتك لتخصيص محتوى المقارنة والتحليلات الإقليمية
                </p>
              </div>

              {/* Zone Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-xl border border-slate-700 overflow-x-auto max-w-full">
                <button
                  onClick={() => setSelectedZone('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'all'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setSelectedZone('upper_egypt')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'upper_egypt'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  الصعيد
                </button>
                <button
                  onClick={() => setSelectedZone('nile_delta')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'nile_delta'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  الدلتا
                </button>
                <button
                  onClick={() => setSelectedZone('greater_cairo')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'greater_cairo'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  القاهرة الكبرى
                </button>
                <button
                  onClick={() => setSelectedZone('canal')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'canal'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  القناة
                </button>
                <button
                  onClick={() => setSelectedZone('frontier')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedZone === 'frontier'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  الحدودية وسيناء
                </button>
              </div>
            </div>

            {/* Governorates Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredGovernorates.map((gov) => {
                const isSelected = myGovernorate === gov.id;
                return (
                  <div
                    key={gov.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-cyan-950/30 border-cyan-400 shadow-md ring-1 ring-cyan-500/30'
                        : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-white text-sm">{gov.nameAr}</h5>
                          <span className="text-[10px] text-slate-500 font-mono">{gov.nameEn}</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            gov.classification === 'urban'
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                              : gov.classification === 'rural'
                              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                              : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          }`}
                        >
                          {gov.classification === 'urban'
                            ? 'حضري'
                            : gov.classification === 'rural'
                            ? 'ريفي'
                            : 'حدودي'}
                        </span>
                      </div>

                      {/* Readiness Progress Bar */}
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">مؤشر الجاهزية العام:</span>
                          <span className="font-mono font-bold text-cyan-300">{gov.averageReadinessIndex}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-700/60 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                            style={{ width: `${gov.averageReadinessIndex}%` }}
                          />
                        </div>
                      </div>

                      {/* Details Meta */}
                      <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-slate-300">
                        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-900/50">
                          <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
                          <span>أوفلاين: <strong>{gov.offlinePracticeRatio}%</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-900/50">
                          <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                          <span>تفكير عليا: <strong>{gov.averageHotsAccuracy}%</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        الأكثر تدريباً: <strong className="text-slate-200">{gov.topPracticedSubjectAr}</strong>
                      </span>

                      <button
                        onClick={() => handleSetMyGov(gov.id)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-600 text-white'
                            : 'bg-slate-700/60 text-slate-300 hover:bg-cyan-600 hover:text-white'
                        }`}
                      >
                        {isSelected ? 'محافظتي ✓' : 'تعيين كمحافظتي'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 hover:bg-cyan-950/30 border border-cyan-800/40 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>تصدير تقرير المحافظات للمشرفين التربويين (CSV)</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
