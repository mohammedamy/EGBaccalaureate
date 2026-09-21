import React, { useState, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import { MathRenderer } from '../MathRenderer';
import {
  type LabReportData,
  type LabDiscipline,
  loadLabReportDraft,
  saveLabReportDraft,
  resetLabReportDraft,
  exportReportToMarkdown,
  computeTotalRubricMarks,
  getLabReportTemplate,
  formatPlainMathTitle,
  EXPERIMENT_CONFIGS,
} from '../../services/labReportService';
import {
  X,
  FileSpreadsheet,
  Printer,
  Copy,
  Save,
  RotateCcw,
  Sparkles,
  Award,
  BookOpen,
  Plus,
  Trash2,
  CheckCircle2,
  Edit3,
  Eye,
  Check,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  initialExperimentId?: string;
  initialDiscipline?: LabDiscipline;
}

const DISCIPLINE_ORDER: Record<string, number> = {
  physics: 1,
  chemistry: 2,
  biology: 3,
  math: 4,
};

const ALL_EXPERIMENTS = Object.values(EXPERIMENT_CONFIGS).sort((a, b) => {
  const discA = DISCIPLINE_ORDER[a.discipline] || 99;
  const discB = DISCIPLINE_ORDER[b.discipline] || 99;
  if (discA !== discB) return discA - discB;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});

export const LabReportGeneratorModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  initialExperimentId = 'phys-exp-1',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const inputClass = isLight
    ? 'w-full text-xs p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-hidden'
    : 'w-full text-xs p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden';

  const tableHeaderClass = isLight
    ? 'bg-slate-100 border-b border-slate-300 text-slate-800'
    : 'bg-slate-950/80 border-b border-slate-800 text-slate-300';

  const tableInputClass = isLight
    ? 'w-full text-center p-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-mono text-xs focus:border-indigo-600 outline-hidden'
    : 'w-full text-center p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs focus:border-indigo-500 outline-hidden';

  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [selectedExpId, setSelectedExpId] = useState<string>(initialExperimentId);
  const [report, setReport] = useState<LabReportData>(() => loadLabReportDraft(initialExperimentId));
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [savedToast, setSavedToast] = useState<boolean>(false);

  // Sync when initialExperimentId changes or selectedExpId changes or modal opens
  useEffect(() => {
    if (isOpen) {
      const targetId = initialExperimentId || selectedExpId;
      if (initialExperimentId && initialExperimentId !== selectedExpId) {
        setSelectedExpId(initialExperimentId);
      }
      setReport(loadLabReportDraft(targetId));
    }
  }, [isOpen, initialExperimentId]);

  useEffect(() => {
    setReport(loadLabReportDraft(selectedExpId));
  }, [selectedExpId]);

  if (!isOpen) return null;

  // Header and Student Metadata Persistence Helper
  const handleMetadataChange = (field: keyof LabReportData, value: string) => {
    setReport((prev) => {
      const updated = { ...prev, [field]: value };
      saveLabReportDraft(updated);
      return updated;
    });
  };

  // Data Table cell change
  const handleTableCellChange = (rowIndex: number, colKey: string, value: string) => {
    setReport((prev) => {
      const newRows = [...prev.dataTableRows];
      newRows[rowIndex] = { ...newRows[rowIndex], [colKey]: value };
      const updated = { ...prev, dataTableRows: newRows };
      saveLabReportDraft(updated);
      return updated;
    });
  };

  // Add Row
  const handleAddRow = () => {
    setReport((prev) => {
      const newRow: Record<string, string> = { trial: `${prev.dataTableRows.length + 1}` };
      for (const col of prev.dataTableColumns) {
        if (col.key !== 'trial') newRow[col.key] = '';
      }
      const updated = { ...prev, dataTableRows: [...prev.dataTableRows, newRow] };
      saveLabReportDraft(updated);
      return updated;
    });
  };

  // Remove Row
  const handleRemoveRow = (idx: number) => {
    setReport((prev) => {
      if (prev.dataTableRows.length <= 1) return prev;
      const newRows = prev.dataTableRows.filter((_, i) => i !== idx);
      const updated = { ...prev, dataTableRows: newRows };
      saveLabReportDraft(updated);
      return updated;
    });
  };

  // Quick fill sample data
  const handleFillSampleData = () => {
    const template = getLabReportTemplate(selectedExpId);
    setReport((prev) => {
      const updated = {
        ...prev,
        dataTableRows: template.dataTableRows.map((r) => ({ ...r })),
        observationsAr: template.observationsAr,
        observationsEn: template.observationsEn,
        errorAnalysisAr: template.errorAnalysisAr,
        errorAnalysisEn: template.errorAnalysisEn,
      };
      saveLabReportDraft(updated);
      return updated;
    });
  };

  // Reset to default
  const handleResetToDefault = () => {
    if (window.confirm(isArabic ? 'هل تريد استعادة النموذج الأصلي للتجربة وحذف التعديلات؟' : 'Reset report to default template?')) {
      resetLabReportDraft(selectedExpId);
      setReport(getLabReportTemplate(selectedExpId));
    }
  };

  // Save draft
  const handleSaveDraft = () => {
    saveLabReportDraft(report);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  // Copy to Markdown
  const handleCopyMarkdown = async () => {
    const md = exportReportToMarkdown(report, lang);
    try {
      await navigator.clipboard.writeText(md);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  // Print Report
  const handlePrint = () => {
    setActiveTab('preview');
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const rubricScore = computeTotalRubricMarks(report.rubricCriteria);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className={`relative w-full max-w-6xl h-[94vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300'
            : 'bg-slate-950 border-slate-800 text-slate-100'
        }`}
      >
        {/* Top Header Bar */}
        <div
          className={`p-4 sm:p-5 border-b flex items-center justify-between gap-4 shrink-0 ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  {isArabic ? 'استمارة تقرير التجربة المعملية الرسمية' : 'Official Laboratory Practical Examination Report'}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  MoE 12-Mark Practical
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'تدوين القراءات العملية، جداول البيانات، صياغة الفرضيات، وتصدير ورقة التقرير المعتمدة A4'
                  : 'Empirical data logging, hypothesis verification, quantitative analysis & official A4 export'}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Tab Switcher */}
            <div className="flex rounded-xl p-1 bg-slate-800/80 border border-slate-700">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'editor'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'التحرير والتدوين' : 'Editor'}</span>
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isArabic ? 'معاينة A4' : 'A4 Preview'}</span>
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isArabic ? 'طباعة استمارة التقرير المعملي A4' : 'Print A4 Laboratory Report'}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{isArabic ? 'طباعة A4' : 'Print A4'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isArabic ? 'نسخ التقرير بتنسيق Markdown' : 'Copy Report Markdown'}
            >
              {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{copiedToast ? (isArabic ? 'تم النسخ!' : 'Copied!') : (isArabic ? 'نسخ Markdown' : 'Copy MD')}</span>
            </button>

            <button
              onClick={handleSaveDraft}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isArabic ? 'حفظ المسودة محلياً' : 'Save Draft Locally'}
            >
              {savedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Save className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{savedToast ? (isArabic ? 'تم الحفظ!' : 'Saved!') : (isArabic ? 'حفظ' : 'Save')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experiment Switcher Bar */}
        <div
          className={`px-4 sm:px-6 py-2.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs font-bold text-slate-400">
              {isArabic ? 'اختر التجربة العملية لتوليد تقريرها:' : 'Select Lab Experiment:'}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-1 sm:max-w-xl">
            <select
              value={selectedExpId}
              onChange={(e) => setSelectedExpId(e.target.value)}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                isLight ? 'bg-white border-slate-300 text-slate-800' : 'bg-slate-950 border-slate-700 text-slate-100'
              }`}
            >
              {ALL_EXPERIMENTS.map((exp) => {
                const badge =
                  exp.discipline === 'physics'
                    ? '⚡ فيزياء'
                    : exp.discipline === 'chemistry'
                    ? '🧪 كيمياء'
                    : exp.discipline === 'biology'
                    ? '🧬 أحياء'
                    : '📐 رياضيات';
                return (
                  <option key={exp.id} value={exp.id} className="bg-slate-900 text-white">
                    [{badge}] {formatPlainMathTitle(isArabic ? exp.titleAr : exp.titleEn)}
                  </option>
                );
              })}
            </select>

            <button
              onClick={handleResetToDefault}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold border border-slate-700 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              title={isArabic ? 'استعادة النموذج الافتراضي' : 'Reset to Default Template'}
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">{isArabic ? 'إعادة تعيين' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {/* Modal Body: Editor Tab vs A4 Printable Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'editor' ? (
            /* TAB 1: INTERACTIVE EDITOR */
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Student and Institution Identity Drawer */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border ${
                  isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{isArabic ? 'بيانات الطالب والجهة التعليمية' : 'Student & Institutional Metadata'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div>
                    <label className={`block text-[11px] font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                      {isArabic ? 'اسم الطالب:' : 'Student Name:'}
                    </label>
                    <input
                      type="text"
                      value={report.studentName}
                      onChange={(e) => handleMetadataChange('studentName', e.target.value)}
                      placeholder={isArabic ? 'أدخل اسمك ثلاثياً' : 'Full Student Name'}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-[11px] font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                      {isArabic ? 'رقم الجلوس / الكود:' : 'Seat / Student ID:'}
                    </label>
                    <input
                      type="text"
                      value={report.seatNumber}
                      onChange={(e) => handleMetadataChange('seatNumber', e.target.value)}
                      placeholder={isArabic ? 'مثال: ٥٤١٢٠' : 'e.g. 54120'}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-[11px] font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                      {isArabic ? 'المدرسة / السنتر:' : 'School / Center:'}
                    </label>
                    <input
                      type="text"
                      value={report.schoolName}
                      onChange={(e) => handleMetadataChange('schoolName', e.target.value)}
                      placeholder={isArabic ? 'مدرسة المتفوقين / الثانوية' : 'STEM Academy / School'}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-[11px] font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                      {isArabic ? 'معلم المادة / المشرف:' : 'Instructor / Teacher:'}
                    </label>
                    <input
                      type="text"
                      value={report.instructorName}
                      onChange={(e) => handleMetadataChange('instructorName', e.target.value)}
                      placeholder={isArabic ? 'أستاذ المادة' : 'Lab Instructor'}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-[11px] font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                      {isArabic ? 'تاريخ إجراء التجربة:' : 'Experiment Date:'}
                    </label>
                    <input
                      type="date"
                      value={report.date}
                      onChange={(e) => handleMetadataChange('date', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Hypothesis & Governing Model */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>{isArabic ? '1. الفرضية العلمية وصياغة الهدف' : '1. Scientific Hypothesis'}</span>
                  </h4>
                  <textarea
                    rows={3}
                    value={isArabic ? report.hypothesisAr : report.hypothesisEn}
                    onChange={(e) =>
                      handleMetadataChange(isArabic ? 'hypothesisAr' : 'hypothesisEn', e.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>{isArabic ? '2. القانون والنموذج الرياضي الحاكم' : '2. Governing Formula'}</span>
                  </h4>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-cyan-300 overflow-x-auto text-center flex items-center justify-center min-h-[72px]">
                    <MathRenderer
                      math={report.governingEquation}
                      block={true}
                      lang={lang}
                      className="no-box !my-0 !py-0 !border-0 !bg-transparent text-cyan-300"
                    />
                  </div>
                </div>
              </div>

              {/* Apparatus Checklist */}
              <div
                className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isArabic ? '3. الأدوات والمواد المعملية المستخدمة' : '3. Apparatus & Materials'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {(isArabic ? report.apparatusAr : report.apparatusEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="flex-1">
                        <MathRenderer text={item} lang={lang} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Observation Table */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>{isArabic ? '4. جدول القراءات والبيانات الكمية التجريبية' : '4. Empirical Data Table'}</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {isArabic
                        ? 'سجّل قراءات كل محاولة؛ يمكنك إضافة صفوف أو ملء البيانات النموذجية فوراً'
                        : 'Log trial data points; add rows or click fill sample data for quick preview'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleFillSampleData}
                      className="px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'تعبئة بيانات تجريبية نموذجية' : 'Fill Sample Data'}</span>
                    </button>
                    <button
                      onClick={handleAddRow}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'إضافة محاولة' : 'Add Trial'}</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className={tableHeaderClass}>
                        {report.dataTableColumns.map((col) => (
                          <th key={col.key} className="p-3 text-center font-bold">
                            <div>{isArabic ? col.labelAr : col.labelEn}</div>
                            {col.unit && <div className="text-[10px] text-indigo-400 font-mono font-normal">({col.unit})</div>}
                          </th>
                        ))}
                        <th className="p-3 text-center w-12">{isArabic ? 'حذف' : 'Del'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {report.dataTableRows.map((row, rIdx) => (
                        <tr key={rIdx} className={isLight ? 'hover:bg-slate-50 transition-colors' : 'hover:bg-slate-900/40 transition-colors'}>
                          {report.dataTableColumns.map((col) => (
                            <td key={col.key} className="p-2 text-center">
                              <input
                                type="text"
                                value={row[col.key] || ''}
                                onChange={(e) => handleTableCellChange(rIdx, col.key, e.target.value)}
                                className={tableInputClass}
                              />
                            </td>
                          ))}
                          <td className="p-2 text-center">
                            <button
                              onClick={() => handleRemoveRow(rIdx)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors cursor-pointer"
                              title={isArabic ? 'حذف هذه المحاولة' : 'Delete trial'}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Observations & Conclusion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>{isArabic ? '5. الملاحظات والتحليل النوعي للظاهرة' : '5. Observations & Qualitative Findings'}</span>
                  </h4>
                  <textarea
                    rows={3}
                    value={isArabic ? report.observationsAr : report.observationsEn}
                    onChange={(e) =>
                      handleMetadataChange(isArabic ? 'observationsAr' : 'observationsEn', e.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{isArabic ? '6. الاستنتاج العلمي النهائي' : '6. Scientific Conclusion'}</span>
                  </h4>
                  <textarea
                    rows={3}
                    value={isArabic ? report.conclusionAr : report.conclusionEn}
                    onChange={(e) =>
                      handleMetadataChange(isArabic ? 'conclusionAr' : 'conclusionEn', e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Error Analysis & Rubric Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>{isArabic ? '7. مناقشة مصادر الخطأ التجريبي والاحتياطات' : '7. Error Analysis & Precautions'}</span>
                  </h4>
                  <textarea
                    rows={3}
                    value={isArabic ? report.errorAnalysisAr : report.errorAnalysisEn}
                    onChange={(e) =>
                      handleMetadataChange(isArabic ? 'errorAnalysisAr' : 'errorAnalysisEn', e.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                {/* 12-Mark Evaluation Rubric */}
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>{isArabic ? '8. مصفوفة التقييم المعملي (١٢ درجة)' : '8. Evaluation Rubric (12 Marks)'}</span>
                    </h4>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {rubricScore.earned} / {rubricScore.max} {isArabic ? 'درجة' : 'Marks'}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {report.rubricCriteria.map((c) => (
                      <div
                        key={c.id}
                        className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] flex items-center justify-between gap-2"
                      >
                        <span className="text-slate-300">{isArabic ? c.categoryAr : c.categoryEn}</span>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono font-bold">
                          {c.earnedMarks ?? c.maxMarks} / {c.maxMarks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* TAB 2: OFFICIAL A4 PRINTABLE PREVIEW */
            <div className="max-w-4xl mx-auto">
              <div className="print-lab-report bg-white text-black p-6 sm:p-8 rounded-2xl shadow-xl border-4 border-double border-slate-900 font-serif">
                {/* Official Ministry Header */}
                <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center">
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <div className="text-right rtl:text-right ltr:text-left">
                      <p>جمهورية مصر العربية</p>
                      <p>وزارة التربية والتعليم والتعليم الفني</p>
                      <p>قطاع التعليم العام - التوجيه الفني للعلوم</p>
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center font-black text-xs text-slate-800 bg-slate-100">
                      ختم المدرسة
                    </div>
                    <div className="text-left rtl:text-left ltr:text-right">
                      <p>المرحلة: {report.gradeAr}</p>
                      <p>العام الدراسي: 2025 - 2026</p>
                      <p>استمارة الامتحان العملي</p>
                    </div>
                  </div>

                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 tracking-tight">
                    استمارة تقرير التجربة المعملية العملية الرسمية
                  </h1>
                  <h2 className="text-sm font-bold text-slate-700 mt-1">
                    <MathRenderer text={`${report.titleAr} (${report.titleEn})`} inline={true} lang={lang} />
                  </h2>
                </div>

                {/* Student Info Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs border border-slate-800 p-2.5 rounded-lg mb-4 bg-slate-50">
                  <div>
                    <span className="font-bold">اسم الطالب: </span>
                    <span>{report.studentName || '................................'}</span>
                  </div>
                  <div>
                    <span className="font-bold">رقم الجلوس: </span>
                    <span>{report.seatNumber || '................'}</span>
                  </div>
                  <div>
                    <span className="font-bold">المدرسة: </span>
                    <span>{report.schoolName || '................................'}</span>
                  </div>
                  <div>
                    <span className="font-bold">التاريخ: </span>
                    <span>{report.date}</span>
                  </div>
                </div>

                {/* Section 1 & 2: Hypothesis & Formula */}
                <div className="space-y-3 mb-4 text-xs">
                  <div className="p-2.5 border border-slate-800 rounded-lg">
                    <h3 className="font-black text-slate-900 mb-1">١. الفرضية والهدف العلمي:</h3>
                    <div className="leading-relaxed text-slate-800">
                      <MathRenderer text={report.hypothesisAr} inline={true} lang={lang} />
                    </div>
                  </div>

                  <div className="p-2.5 border border-slate-800 rounded-lg">
                    <h3 className="font-black text-slate-900 mb-1">٢. القانون والنموذج الرياضي الحاكم:</h3>
                    <div className="text-center py-1">
                      <MathRenderer math={report.governingEquation} block={true} lang={lang} className="no-box !text-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Apparatus */}
                <div className="p-2.5 border border-slate-800 rounded-lg mb-4 text-xs">
                  <h3 className="font-black text-slate-900 mb-1.5">٣. الأدوات والمواد المعملية:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {report.apparatusAr.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                        <span className="flex-1">
                          <MathRenderer text={item} inline={true} lang={lang} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Quantitative Observation Table */}
                <div className="mb-4">
                  <h3 className="font-black text-slate-900 text-xs mb-1.5">٤. جدول القراءات والنتائج الكمية:</h3>
                  <table className="print-lab-table text-xs border border-slate-900 w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-200 border-b border-slate-900">
                        {report.dataTableColumns.map((col) => (
                          <th key={col.key} className="p-2 border border-slate-900 text-center font-black">
                            <MathRenderer text={`${col.labelAr} ${col.unit ? `(${col.unit})` : ''}`} inline={true} lang={lang} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {report.dataTableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-800 text-center">
                          {report.dataTableColumns.map((col) => (
                            <td key={col.key} className="p-1.5 border border-slate-800 font-mono font-bold">
                              {row[col.key] || '-'}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5 & 6: Observations & Conclusion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="p-2.5 border border-slate-800 rounded-lg">
                    <h3 className="font-black text-slate-900 mb-1">٥. الملاحظات والتحليل النوعي:</h3>
                    <div className="leading-relaxed text-slate-800">
                      <MathRenderer text={report.observationsAr} inline={true} lang={lang} />
                    </div>
                  </div>
                  <div className="p-2.5 border border-slate-800 rounded-lg">
                    <h3 className="font-black text-slate-900 mb-1">٦. الاستنتاج العلمي المعتمد:</h3>
                    <div className="leading-relaxed text-slate-800">
                      <MathRenderer text={report.conclusionAr} inline={true} lang={lang} />
                    </div>
                  </div>
                </div>

                {/* Section 7: Error Sources */}
                <div className="p-2.5 border border-slate-800 rounded-lg mb-4 text-xs">
                  <h3 className="font-black text-slate-900 mb-1">٧. مناقشة مصادر الخطأ والاحتياطات المعملية:</h3>
                  <div className="leading-relaxed text-slate-800">
                    <MathRenderer text={report.errorAnalysisAr} inline={true} lang={lang} />
                  </div>
                </div>

                {/* Section 8: Official Evaluation Rubric Matrix */}
                <div className="print-rubric-matrix border-2 border-slate-900 p-3 rounded-lg text-xs bg-slate-50 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-slate-900">
                      مصفوفة تقييم الامتحان العملي (التوجيه الفني - الدرجة العظمى: ١٢ درجة):
                    </h3>
                    <span className="font-black text-sm text-slate-900">
                      الدرجة المستحقة: {rubricScore.earned} / {rubricScore.max} درجة
                    </span>
                  </div>

                  <table className="w-full border-collapse border border-slate-900 text-center text-[11px]">
                    <thead>
                      <tr className="bg-slate-200 font-bold border-b border-slate-900">
                        <th className="p-1 border border-slate-900">معيار التقييم</th>
                        <th className="p-1 border border-slate-900">صياغة الفرضية</th>
                        <th className="p-1 border border-slate-900">تجهيز الأدوات والسلامة</th>
                        <th className="p-1 border border-slate-900">جمع البيانات ودقة الجدول</th>
                        <th className="p-1 border border-slate-900">الحسابات والميل والوحدات</th>
                        <th className="p-1 border border-slate-900">الاستنتاج ومصادر الخطأ</th>
                        <th className="p-1 border border-slate-900 bg-slate-300 font-black">المجموع الكلي</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-1 border border-slate-900 font-bold bg-slate-100">الدرجة العظمى</td>
                        <td className="p-1 border border-slate-900">٢</td>
                        <td className="p-1 border border-slate-900">٢</td>
                        <td className="p-1 border border-slate-900">٣</td>
                        <td className="p-1 border border-slate-900">٣</td>
                        <td className="p-1 border border-slate-900">٢</td>
                        <td className="p-1 border border-slate-900 font-black bg-slate-200">١٢ درجة</td>
                      </tr>
                      <tr>
                        <td className="p-1 border border-slate-900 font-bold bg-slate-100">درجة الطالب</td>
                        {report.rubricCriteria.map((c) => (
                          <td key={c.id} className="p-1 border border-slate-900 font-black font-mono">
                            {c.earnedMarks ?? c.maxMarks}
                          </td>
                        ))}
                        <td className="p-1 border border-slate-900 font-black text-sm bg-slate-200 font-mono">
                          {rubricScore.earned}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Signatures */}
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800 font-bold text-slate-800">
                  <div>توقيع الطالب: .......................................</div>
                  <div>المعلم المشرف: {report.instructorName || '.......................................'}</div>
                  <div>توقيع الموجه الفني: .......................................</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
