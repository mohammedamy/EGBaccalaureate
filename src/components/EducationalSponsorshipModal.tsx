import React, { useState } from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Send,
  X,
} from 'lucide-react';
import type { SponsorGrantApplication } from '../services/sponsorshipModelService';
import {
  ACCREDITED_SPONSORS,
  getCorePlatformCharter,
  submitSponsorGrantApplication,
} from '../services/sponsorshipModelService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EducationalSponsorshipModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'charter' | 'sponsors' | 'grant_apply'>('charter');

  // Form states for school grant application
  const [schoolName, setSchoolName] = useState('');
  const [governorate, setGovernorate] = useState('سوهاج');
  const [studentCount, setStudentCount] = useState<number>(120);
  const [contactPerson, setContactPerson] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submittedApplication, setSubmittedApplication] = useState<SponsorGrantApplication | null>(null);

  const charter = getCorePlatformCharter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolName.trim() || !contactPerson.trim() || !contactEmail.trim()) {
      alert('يرجى ملء جميع الحقول الإلزامية لتقديم طلب المنحة المدرسية.');
      return;
    }
    const app = submitSponsorGrantApplication(
      schoolName,
      governorate,
      studentCount,
      contactPerson,
      contactEmail
    );
    setSubmittedApplication(app);
    setSchoolName('');
    setContactPerson('');
    setContactEmail('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir="rtl"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-amber-950/40 via-slate-900 to-rose-950/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  ميثاق مجانية المنصة والرعاية التعليمية المجتمعية
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  مجاني ١٠٠٪ للأبد
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                نموذج الاستدامة الأكاديمية والشراكة مع مؤسسات المجتمع المدني لدعم تكافؤ الفرص في مصر
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

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 shrink-0 bg-slate-900/60">
          <button
            onClick={() => setActiveTab('charter')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative cursor-pointer ${
              activeTab === 'charter'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ميثاق المجانية الدائم
          </button>
          <button
            onClick={() => setActiveTab('sponsors')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative cursor-pointer ${
              activeTab === 'sponsors'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            المؤسسات والشركاء الرعاة ({ACCREDITED_SPONSORS.length})
          </button>
          <button
            onClick={() => setActiveTab('grant_apply')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative cursor-pointer ${
              activeTab === 'grant_apply'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            طلب رعاية لمدرسة أو إدارة تعليمية
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Tab 1: Charter */}
          {activeTab === 'charter' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>ميثاق كليبسات التعليمي (تعهد لا رجعة فيه):</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-200">{charter.manifestoAr}</p>
                <p className="text-[11px] leading-relaxed text-slate-400 font-sans">{charter.manifestoEn}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  المميزات المضمونة بالمجان بنسبة ١٠٠٪ لجميع الطلاب دون أي قيود:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {charter.guaranteedFreeFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Sponsors Showcase */}
          {activeTab === 'sponsors' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                تتعاون كليبسات مع كبرى المؤسسات الأهلية والتحالفات التنموية لتمويل خوادم التوزيع الطرفي (Edge Servers)
                وتوفير وسائط التخزين المحملة مسبقاً للمدارس في المناطق الأكثر احتياجاً دون تحميل الطلاب أي أعباء.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACCREDITED_SPONSORS.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/70 hover:border-amber-500/40 transition-all space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {sponsor.category.toUpperCase()}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          +{sponsor.activeScholarshipsCount.toLocaleString('ar-EG')} طالب مستفيد
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm">{sponsor.nameAr}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{sponsor.descriptionAr}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-700/50 text-[11px] text-slate-400 flex flex-wrap gap-1">
                      <span>المحافظات المدعومة:</span>
                      {sponsor.sponsoredGovernorates.map((gov) => (
                        <span key={gov} className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px]">
                          {gov}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Grant Application */}
          {activeTab === 'grant_apply' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-300 leading-relaxed space-y-1">
                <span className="font-bold text-white block">هل أنت مدير مدرسة حكومية أو مشرف تعليمي؟</span>
                يمكنك التقديم لتزويد معمل مدرستك أو طلابك بحزم كليبسات المسبقة التحميل (Offline Flash Packs) بدعم من
                شركائنا الرعاة لضمان عمل المنظومة بالكامل دون حاجة لاتصال بالإنترنت داخل الفصول.
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">اسم المدرسة أو المعهد التعليمي:</label>
                    <input
                      type="text"
                      required
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="مثال: مدرسة طه حسين الثانوية بنين"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">المحافظة:</label>
                    <select
                      value={governorate}
                      onChange={(e) => setGovernorate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="سوهاج">سوهاج</option>
                      <option value="أسيوط">أسيوط</option>
                      <option value="قنا">قنا</option>
                      <option value="الأقصر">الأقصر</option>
                      <option value="أسوان">أسوان</option>
                      <option value="المنيا">المنيا</option>
                      <option value="بني سويف">بني سويف</option>
                      <option value="الفيوم">الفيوم</option>
                      <option value="شمال سيناء">شمال سيناء</option>
                      <option value="مطروح">مطروح</option>
                      <option value="الوادي الجديد">الوادي الجديد</option>
                      <option value="أخرى">محافظة أخرى</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">عدد طلاب الصف الثالث المستهدفين:</label>
                    <input
                      type="number"
                      required
                      min={10}
                      max={2000}
                      value={studentCount}
                      onChange={(e) => setStudentCount(parseInt(e.target.value) || 0)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">اسم المسؤول للتواصل:</label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="أ/ أحمد محمد"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني أو الهاتف:</label>
                    <input
                      type="text"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="teacher@example.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-lg shadow-amber-950/40 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب الرعاية والتزويد بالأوفلاين</span>
                </button>
              </form>

              {submittedApplication && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    تم تسجيل طلب مدرستك بنجاح بكود: <strong>{submittedApplication.id}</strong>. سيتم مراجعة الطلب مع
                    المؤسسات الراعية الميدانية لتنسيق الدعم.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end shrink-0">
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
