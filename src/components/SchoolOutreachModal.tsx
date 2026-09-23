import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  X,
  Share2,
  QrCode,
  FileText,
  Video,
  MessageSquare,
  Sparkles,
  WifiOff,
  GraduationCap,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { EgyptFlag } from './EgyptFlag';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolOutreachModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'flyer' | 'video_ad' | 'whatsapp'>('flyer');

  // Flyer customization states
  const [schoolName, setSchoolName] = useState('مدرسة طه حسين الثانوية بنين');
  const [governorate, setGovernorate] = useState('محافظة سوهاج');

  // Video ad player frame state
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  // Copy notification state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const appUrl = 'https://mohammedamy.github.io/EGBaccalaureate/';

  // 10-Second Ad Storyboards from Section 4 of Strategic Plan
  const adFrames = [
    {
      timeRange: '0:00 - 0:03',
      titleAr: 'المشهد الأول: الطالب والمذاكرة الفردية',
      descriptionAr: 'لقطة مقربة لطالب يحمل هاتفاً بسيطاً في غرفته ليلاً، وشاشة الهاتف تعرض مسألة فيزياء أو استاتيكا مع خطوات الحل بالعربية.',
      voiceoverAr: 'بتذاكر لوحدك؟ خايف من الثانوية ومصاريف الدروس؟',
      voiceoverEn: 'Studying alone? Worried about Thanaweya and tutoring costs?',
      visualMood: 'from-amber-950/40 via-slate-900 to-slate-950',
      tag: 'المشكلة والاحتياج',
    },
    {
      timeRange: '0:03 - 0:06',
      titleAr: 'المشهد الثاني: التشخيص التكيفي الذكي أوفلاين',
      descriptionAr: 'شاشة منقسمة: جانب يظهر قرية مصرية أصيلة، والجانب الآخر يظهر كليبسات وهو يشخص: "نقطة ضعف: عزم الازدواج" ويولّد فوراً ٥ مسائل مخصصة.',
      voiceoverAr: 'كليبسات بيعرف نقطة ضعفك وبيعالجها.. من غير نت، ومن غير دروس خصوصية.',
      voiceoverEn: 'ClipSAT identifies your gaps and repairs them — offline, without private tutoring.',
      visualMood: 'from-indigo-950/40 via-slate-900 to-slate-950',
      tag: 'الحل التكيفي',
    },
    {
      timeRange: '0:06 - 0:09',
      titleAr: 'المشهد الثالث: العمل أوفلاين والمحتوى الرسمي',
      descriptionAr: 'الهاتف الآن في وضع الطيران (أيقونة الطائرة واضحة)، والطالب يحل المسائل وتظهر علامات الصح والشرح بسلاسة تامة دون الحاجة لدروس خصوصية.',
      voiceoverAr: 'كل بنوك الأسئلة الوزارية الرسمية ومختبرات الـ 3D التفاعلية بين إيديك مجاناً.',
      voiceoverEn: 'All official ministry question databanks & interactive 3D labs in your hands for free.',
      visualMood: 'from-emerald-950/40 via-slate-900 to-slate-950',
      tag: 'القوة والعدالة',
    },
    {
      timeRange: '0:09 - 0:10',
      titleAr: 'المشهد الرابع: الشعار والمجانية الكاملة والتحميل',
      descriptionAr: 'ظهور شعار كليبسات مع العلم المصري ورابط المنصة، مع عبارة واضحة: "مجاني تماماً لكل طالب مصري".',
      voiceoverAr: 'امسح الباركود وابدأ فوراً.. مستقبلك يستاهل!',
      voiceoverEn: 'Scan the barcode and start immediately.. your future is worth it!',
      visualMood: 'from-violet-950/40 via-slate-900 to-slate-950',
      tag: 'الدعوة للتحميل',
    },
  ];

  // WhatsApp Templates for Teachers and Parent Groups
  const whatsappTemplates = [
    {
      id: 'parents_reassurance',
      title: 'رسالة طمأنة لأولياء الأمور',
      content: `رسالة طمأنة لأولياء الأمور الكرام في الثانوية العامة 📊
نود طمأنتكم بأن تفوق أبنائكم وبناتكم لا يتطلب إنفاق آلاف الجنيهات على الدروس الخصوصية أو استهلاك باقات الإنترنت المكلفة.
منصة "كليبسات البكالوريا المصرية" مبادرة تعليمية رقمية مجانية ١٠٠٪:
✅ تعمل بالكامل بدون اتصال بالإنترنت (أوفلاين) على أي هاتف أو تابلت مدرسي.
✅ ٧٧,٠٠٠ سؤال رسمي محلول بنماذج الإجابة الرسمية المعتمدة.
✅ روشتة مذاكرة يومية مخصصة تعالج نقاط الضعف وفق منحنى لايتنر.
رابط المنصة المباشر للبدء فوراً:
${appUrl}
معاً لدعم تفوق أبنائنا دون أي أعباء مادية 🇪🇬`,
    },
    {
      id: 'teachers_intro',
      title: 'رسالة لمعلمي وإدارات المدارس',
      content: `السادة الزملاء معلمي وإدارات المدارس الثانوية الأفاضل 🎓
تحية تقدير وإعزاز لجهودكم في بناء أجيال المستقبل،
نضع بين أيديكم أداة رقمية مساعدة معتمدة لطلاب المدرسة تخدم أهداف التطوير التكنولوجي والعدالة التعليمية:
✅ تغطي مناهج الثانوية العامة والبكالوريا بنظام الأسئلة الوزارية الحديثة ومستويات التفكير العليا (HOTS).
✅ ٣٤ معملاً افتراضياً ثلاثي الأبعاد للتجارب المعملية بدون الحاجة لإنترنت.
✅ إمكانية طباعة أوراق تدريب واختبارات قياسية مخصصة لكل فصل.
رابط المنصة لمشاركته مع طلاب المدرسة:
${appUrl}
مع وافر الشكر والتقدير لجهودكم المخلصة 🌟`,
    },
    {
      id: 'student_groups',
      title: 'رسالة لجروبات دفعة الثانوية',
      content: `يا شباب دفعة ثانوية عامة وبكالوريا ٢٠٢٦ 🚀
لو حاسس إنك تايه بين المذكرات أو النت عندك بيقطع ومش عايز تضيع وقت في التنقل بين السناتر:
منصة "كليبسات" اتعملت مخصوص علشانك:
🔥 بتشتغل بالكامل أوفلاين بدون نت.
🔥 روشتة يومية ١٥ دقيقة بتقولك تذاكر إيه بالظبط وتسد نقط ضعفك.
🔥 امتحانات رسمية بنظام البوكليت ومختبرات 3D عملية.
🔥 مجانية ١٠٠٪ لكل طالب مصري بدون أي رسوم أو إعلانات مزعجة.
جرب الرابط دلوقتي وافتحه على موبايلك:
${appUrl}
شيرها لزمايلك والدال على الخير كفاعله 🤝`,
    },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePrintFlyer = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir="rtl"
    >
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-indigo-950/50 via-slate-900 to-violet-950/30 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  حملة المدارس والمطبوعات الميدانية (School Outreach & Media Kit)
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  أدوات نشر مجانية
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                ملصقات قابلة للطباعة لمدارس القرى وستوريبورد إعلان الفيديو ورسائل الواتساب للتواصل مع أولياء الأمور
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

        {/* Navigation Tabs */}
        <div className="px-6 pt-4 border-b border-slate-800/80 bg-slate-950/50 flex gap-2 shrink-0 print:hidden">
          <button
            onClick={() => setActiveTab('flyer')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'flyer'
                ? 'border-indigo-500 text-indigo-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>ملصق المدرسة القابل للطباعة (A4 Flyer)</span>
          </button>

          <button
            onClick={() => setActiveTab('video_ad')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'video_ad'
                ? 'border-indigo-500 text-indigo-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>إعلان الفيديو الترويجي (10s Ad Simulator)</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'whatsapp'
                ? 'border-indigo-500 text-indigo-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>رسائل واتساب لأولياء الأمور</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm print:p-0 print:m-0 print:overflow-visible">
          {/* TAB 1: Printable School QR Flyer */}
          {activeTab === 'flyer' && (
            <div className="space-y-6 print:space-y-0">
              {/* Customization controls */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-4 print:hidden">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    اسم المدرسة الحكومية أو المعهد:
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                    placeholder="مثال: مدرسة المتفوقين للعلوم والتكنولوجيا (STEM)"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    المحافظة / الإدارة التعليمية:
                  </label>
                  <input
                    type="text"
                    value={governorate}
                    onChange={(e) => setGovernorate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                    placeholder="مثال: محافظة سوهاج - إدارة طما التعليمية"
                  />
                </div>
              </div>

              {/* Flyer Preview Document Box */}
              <div className="border-2 border-dashed border-indigo-500/40 rounded-3xl p-6 sm:p-8 bg-white text-slate-950 shadow-2xl space-y-6 print:border-none print:shadow-none print:p-0 print:m-0 print:rounded-none">
                {/* Official Flyer Header */}
                <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      جمهورية مصر العربية — مبادرة التعليم الرقمي العادل
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-indigo-950">
                      {schoolName}
                    </h2>
                    <span className="text-xs font-bold text-slate-600">
                      {governorate}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={clipsatLogo} alt="ClipSAT Logo" className="w-12 h-12 object-contain" />
                    <EgyptFlag className="w-10 h-7 rounded shadow-sm border border-slate-300" />
                  </div>
                </div>

                {/* Hero Announcement */}
                <div className="text-center space-y-2 py-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black">
                    100% مجاني بالكامل بدون أي رسوم أو إعلانات لجميع طلاب الثانوية العامة والبكالوريا المصرية
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    استعد للامتحانات بأقوى نظام مذاكرة ذكي يعمل بالكامل بدون اتصال بالإنترنت!
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    منصة كليبسات التعليمية توفر لك كل ما تحتاجه للتفوق في الثانوية العامة دون الحاجة لدروس خصوصية أو استهلاك باقات النت
                  </p>
                </div>

                {/* 4 Feature Pillars Grid */}
                <div className="grid grid-cols-2 gap-3 text-right">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
                      <WifiOff className="w-4 h-4 text-indigo-600" />
                      <span>يعمل بدون نت (أوفلاين)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      ذاكر في أي وقت ومكان على أي هاتف محمول بسيط حتى مع انقطاع شبكة الإنترنت.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>٧٧,٠٠٠ سؤال وزاري رسمي</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      حل نماذج الوزارة والامتحانات السابقة مع الشرح المفصل خطوة بخطوة بالذكاء الاصطناعي.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-xs text-violet-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-violet-600" />
                      <span>٣٤ معملاً تفاعلياً ثلاثي الأبعاد</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      تجارب محاكاة كاملة لمعامل الفيزياء والكيمياء والأحياء بدقة علمية متناهية.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      <span>روشتة تشخيصية يومية</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      النظام يشخص نقاط ضعفك ويحدد لك يومياً ٥ مسائل لمعالجتها وفق منحنى النسيان.
                    </p>
                  </div>
                </div>

                {/* QR Code and Direct Link Footer Box */}
                <div className="p-5 rounded-2xl bg-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-right">
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                      خطوة واحدة لبدء المذاكرة الآن:
                    </span>
                    <h3 className="text-lg font-black text-white">
                      وجّه كاميرا هاتفك وامسح رمز الاستجابة السريع (QR)
                    </h3>
                    <p className="text-xs text-slate-300 font-mono" dir="ltr">
                      mohammedamy.github.io/EGBaccalaureate/
                    </p>
                    <span className="text-[10px] text-indigo-300 block">
                      يعمل على جميع متصفحات الهواتف وأجهزة التابلت المدرسي مباشرة بدون تحميل تطبيقات ثقيلة
                    </span>
                  </div>

                  {/* QR Code Graphic Box */}
                  <div className="shrink-0 p-3 bg-white rounded-2xl shadow-xl flex flex-col items-center">
                    {/* SVG Clean High-Resolution QR Representation */}
                    <div className="w-32 h-32 bg-slate-100 rounded-xl flex items-center justify-center p-2 border-2 border-slate-900">
                      <QrCode className="w-28 h-28 text-slate-900" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 mt-1 uppercase">
                      Scan to study free
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
                <button
                  onClick={handlePrintFlyer}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة الملصق الآن (A4 Print Ready)</span>
                </button>

                <button
                  onClick={() => handleCopy('flyer_link', appUrl)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border border-slate-700"
                >
                  {copiedKey === 'flyer_link' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>نسخ رابط المنصة لمشاركته مع الطلاب</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Interactive 10s Arabic Video Ad Simulator */}
          {activeTab === 'video_ad' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs space-y-1 text-slate-300">
                <span className="font-bold text-indigo-300 block flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-indigo-400" />
                  <span>مخطط إعلان الفيديو الترويجي الرسمي (10-Second High-Conversion Arabic Video Script):</span>
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  مكتوب بالعامية المصرية السلسة وموجه للطالب العصامي في القرى والمحافظات لإيصال رسالة المنصة في ١٠ ثوانٍ فقط.
                </p>
              </div>

              {/* Storyboard Sequential Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adFrames.map((frame, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveFrameIndex(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      activeFrameIndex === idx
                        ? 'border-indigo-500 bg-gradient-to-br from-indigo-950/60 to-slate-900 ring-2 ring-indigo-500/20 shadow-xl'
                        : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-bold border border-slate-700">
                        {frame.timeRange}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {frame.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-white mb-1.5">
                      {frame.titleAr}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {frame.descriptionAr}
                    </p>

                    {/* Egyptian Voiceover Bubble */}
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-amber-300 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-slate-500 block">الصوت الإعلاني (Voice-over):</span>
                        <span className="font-bold text-sm">"{frame.voiceoverAr}"</span>
                        <span className="text-[10px] text-slate-400 font-mono block italic">({frame.voiceoverEn})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Frame Preview Box */}
              <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-3">
                <span className="text-xs font-bold text-slate-400">
                  المشهد النشط: {adFrames[activeFrameIndex].timeRange}
                </span>
                <div className="text-2xl font-black text-white">
                  "{adFrames[activeFrameIndex].voiceoverAr}"
                </div>
                <p className="text-xs text-slate-400 max-w-xl mx-auto">
                  {adFrames[activeFrameIndex].descriptionAr}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: WhatsApp Parent Broadcast Tool */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300">
                <span className="font-bold text-emerald-300 block mb-1">
                  صيغ رسائل الواتساب للتواصل مع مجموعات أولياء الأمور:
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  صيغ جاهزة ومطمئنة يمكن للمعلمين ومديري المدارس نسخها وإرسالها في مجموعات الواتساب لطمأنة أولياء الأمور وتوجيه الطلاب للمذاكرة السليمة.
                </p>
              </div>

              <div className="space-y-4">
                {whatsappTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm text-white">
                        {template.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(template.content)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-xs font-bold text-white border border-emerald-600 flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>مشاركة عبر واتساب</span>
                        </a>

                        <button
                          onClick={() => handleCopy(template.id, template.content)}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          {copiedKey === template.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">تم النسخ بنجاح!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>نسخ الرسالة</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <pre className="p-4 rounded-xl bg-slate-950/90 text-xs text-slate-200 font-sans whitespace-pre-wrap leading-relaxed border border-slate-800/80 selection:bg-indigo-500/30">
                      {template.content}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0 print:hidden">
          <span className="text-xs text-slate-400">
            كليبسات: منصة مجانية بالكامل للمدارس المصرية والجمعيات الخيرية
          </span>

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
