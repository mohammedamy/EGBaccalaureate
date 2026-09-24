import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Cpu,
  Binary,
  Layers,
  Award,
  Sliders,
  Zap,
} from 'lucide-react';
import babbagePhoto from '../../../assets/philosophy/cybernetic_babbage_engine_1843.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export const CyberneticsFuzzyLogicStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Fuzzy Logic Temperature Simulation
  const [temperature, setTemperature] = useState<number>(25); // Celsius

  // Triangular / Trapezoidal Membership functions:
  // Cold: 0 to 18 C
  // Comfortable / Moderate: 16 to 28 C
  // Hot: 24 to 45 C
  const fuzzyMemberships = useMemo(() => {
    // Cold mu
    let muCold = 0;
    if (temperature <= 10) muCold = 1;
    else if (temperature > 10 && temperature < 20) {
      muCold = (20 - temperature) / 10;
    } else {
      muCold = 0;
    }

    // Moderate mu
    let muMod = 0;
    if (temperature >= 15 && temperature <= 22) {
      muMod = (temperature - 15) / 7;
    } else if (temperature > 22 && temperature <= 30) {
      muMod = (30 - temperature) / 8;
    } else {
      muMod = 0;
    }

    // Hot mu
    let muHot = 0;
    if (temperature <= 22) muHot = 0;
    else if (temperature > 22 && temperature < 35) {
      muHot = (temperature - 22) / 13;
    } else {
      muHot = 1;
    }

    return {
      cold: Number(Math.max(0, Math.min(1, muCold)).toFixed(2)),
      moderate: Number(Math.max(0, Math.min(1, muMod)).toFixed(2)),
      hot: Number(Math.max(0, Math.min(1, muHot)).toFixed(2)),
    };
  }, [temperature]);

  // Cybernetic Feedback Loop State
  const [feedbackActive, setFeedbackActive] = useState<boolean>(true);
  const targetSetpoint = 22; // C
  const errorDelta = temperature - targetSetpoint;
  const cyberneticCorrection = feedbackActive
    ? errorDelta > 0
      ? isArabic
        ? 'تشغيل مبرد الهواء لخفض الحرارة (تغذية راجعة سالبة)'
        : 'Activating cooling compressor (Negative Feedback)'
      : errorDelta < 0
      ? isArabic
        ? 'تشغيل السخان لرفع الحرارة (تغذية راجعة سالبة)'
        : 'Activating heating elements (Negative Feedback)'
      : isArabic
        ? 'حالة الاستقرار والتوازن السيبرنطيقي (Equilibrium)'
        : 'Cybernetic Homeostasis / Equilibrium Achieved'
    : isArabic
    ? 'الحلقة مفتوحة (دون تغذية راجعة) — خلل في الضبط'
    : 'Open loop (Feedback disabled) — System uncontrolled';

  const openFullModal = () => {
    setModalData({
      imageUrl: babbagePhoto,
      titleAr: 'الآلة التحليلية ودوائر المنطق والسيبرنطيقا (1843م) — فجر الذكاء الاصطناعي',
      titleEn: 'The Analytical Engine & Early Cybernetic Schematics (1843 CE) — Dawn of AI',
      subtitleAr: 'من تروس باباج وخوارزميات لوفليس إلى دوائر شانون المنطقية وثورة نوربرت فينر',
      subtitleEn: 'From Babbage’s Gears & Lovelace Algorithms to Shannon’s Relays & Wiener Cybernetics',
      dateOrEraAr: 'الثورة الصناعية والمعلوماتية (1843م - 1948م) — تأسيس الحوسبة والمنطق',
      dateOrEraEn: 'Industrial & Cybernetic Eras (1843–1948 CE) — Birth of Computer Science & Symbolic Logic',
      locationAr: 'متحف العلوم، لندن (المملكة المتحدة) — مكتبة براءات الاختراع البريطانية',
      locationEn: 'Science Museum & British Patent Archives, London (UK)',
      descriptionAr:
        'لوحة براءة اختراع تقنية تاريخية نادرة ترصد الآلة التحليلية الميكانيكية للعبقري تشارلز باباج ومخطوطات رائدة البرمجة الأولى في التاريخ آدا لوفليس، بجوار دوائر التبديل المنطقي لكلود شانون ومخططات التغذية الراجعة لنوربرت فينر مؤسس السيبرنطيقا. تُجسد هذه اللوحة جوهر الفصل الثامن من منهج المنطق للثانوية العامة: المنطق وتكنولوجيا الاتصال، والربط العضوي بين المنطق الرمزي الصوري وتصميم الحواسيب الرقمية والمنطق المرن (Fuzzy Logic).',
      descriptionEn:
        'Historic patent plate and architectural blueprint featuring Charles Babbage and Ada Lovelace’s 1843 Analytical Engine alongside Claude Shannon’s 1948 boolean relay circuits and Norbert Wiener’s cybernetic feedback loops. Symbolizes Chapter 8 of the Egyptian Thanaweya Amma logic curriculum: Logic, Cybernetics, and Artificial Intelligence.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-blue-50/50 via-slate-50 to-stone-100 border-blue-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-900 border-blue-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                {isArabic ? 'المنطق وتكنولوجيا الاتصال والذكاء الاصطناعي 4K' : '4K Logic, Cybernetics & AI Studio'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Chapter 8 Logic
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-blue-300">
              {isArabic ? 'الآلة التحليلية والسيبرنطيقا والمنطق المرن' : 'The Analytical Engine, Cybernetics & Fuzzy Logic'}
            </h3>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص اللوحة الأرشيفية بدقة 4K' : 'Inspect 4K Technical Plate'}</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 4K Patent Canvas (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 bg-black shadow-2xl group aspect-[16/9]">
            <img
              src={babbagePhoto}
              alt="Charles Babbage and Ada Lovelace Analytical Engine and Cybernetic Circuits"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-blue-500/30 text-xs text-blue-200">
              <div className="font-bold flex items-center gap-1.5 mb-0.5">
                <Binary className="w-4 h-4 text-blue-400" />
                <span>Babbage (1843) & Shannon (1948)</span>
              </div>
              <p className="text-[11px] text-stone-300 line-clamp-2">
                {isArabic
                  ? 'العلاقة العضوية بين المنطق والكمبيوتر: تحويل المنطق الرمزي إلى دوائر كهربائية مادية ثم ذكاء اصطناعي.'
                  : 'Mapping symbolic logic into electrical relay switching, laying the foundations of modern AI.'}
              </p>
            </div>
          </div>

          {/* Historical Thinkers Grid */}
          <div
            className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${
              isLight ? 'bg-blue-50 border-blue-200 text-blue-950' : 'bg-black/40 border-blue-500/30 text-blue-200'
            }`}
          >
            <div className="font-bold text-blue-400 flex items-center gap-1.5 text-sm">
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'رواد الفصل الثامن في المنهج الوزاري:' : 'Pioneers of Chapter 8 in Curriculum:'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-black/30 border border-blue-500/20">
                <span className="font-bold text-sky-400 block">نوربرت فينر (Norbert Wiener)</span>
                {isArabic ? 'مؤسس السيبرنطيقا (علم التحكم والاتصال والتغذية الراجعة).' : 'Father of Cybernetics & Feedback Systems.'}
              </div>
              <div className="p-2 rounded-lg bg-black/30 border border-blue-500/20">
                <span className="font-bold text-sky-400 block">كلود شانون (Claude Shannon)</span>
                {isArabic ? 'ربط المنطق الرمزي لجورج بول بالدوائر الكهربائية.' : 'Unified Boolean logic with electric relay circuits.'}
              </div>
              <div className="p-2 rounded-lg bg-black/30 border border-blue-500/20">
                <span className="font-bold text-sky-400 block">لطفي زادة (Lotfi Zadeh)</span>
                {isArabic ? 'مبتكر المنطق المرن (Fuzzy Logic) متعدد القيم.' : 'Pioneered continuous multi-valued Fuzzy Logic.'}
              </div>
              <div className="p-2 rounded-lg bg-black/30 border border-blue-500/20">
                <span className="font-bold text-sky-400 block">جون مكارثي ومارفن مينسكي</span>
                {isArabic ? 'رواد برامج الذكاء الاصطناعي وهندسة المعرفة.' : 'Pioneers of Artificial Intelligence & LISP.'}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Fuzzy Logic & Cybernetic Simulator (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Fuzzy Logic Interactive Simulator Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-stone-900/60 border-blue-500/20'
            }`}
          >
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-400" />
                <h4 className="text-base font-black text-blue-300">
                  {isArabic ? 'محاكي درجات الانتماء في المنطق المرن (Lotfi Zadeh):' : 'Fuzzy Logic Membership Function Engine:'}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                μ(x) ∈ [0, 1]
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300 font-medium">
                  {isArabic ? 'درجة الحرارة المقاسة (Input Variable x):' : 'Observed Temperature Variable x:'}
                </span>
                <span className="font-mono font-bold text-blue-300 text-sm">
                  {temperature} °C
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="45"
                step="1"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Continuous Multi-Valued Fuzzy Memberships */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              {/* Cold */}
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                <span className="text-[11px] font-bold text-cyan-400 block mb-1">
                  {isArabic ? 'بارد (Cold)' : 'Cold Degree'}
                </span>
                <span className="font-mono text-lg font-black text-cyan-300">
                  {fuzzyMemberships.cold}
                </span>
                <div className="w-full bg-cyan-950 rounded-full h-1.5 mt-2 overflow-hidden border border-cyan-500/30">
                  <div
                    className="bg-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${fuzzyMemberships.cold * 100}%` }}
                  />
                </div>
              </div>

              {/* Moderate */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-[11px] font-bold text-emerald-400 block mb-1">
                  {isArabic ? 'معتدل (Moderate)' : 'Moderate Degree'}
                </span>
                <span className="font-mono text-lg font-black text-emerald-300">
                  {fuzzyMemberships.moderate}
                </span>
                <div className="w-full bg-emerald-950 rounded-full h-1.5 mt-2 overflow-hidden border border-emerald-500/30">
                  <div
                    className="bg-emerald-400 h-full transition-all duration-300"
                    style={{ width: `${fuzzyMemberships.moderate * 100}%` }}
                  />
                </div>
              </div>

              {/* Hot */}
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30">
                <span className="text-[11px] font-bold text-rose-400 block mb-1">
                  {isArabic ? 'حار (Hot)' : 'Hot Degree'}
                </span>
                <span className="font-mono text-lg font-black text-rose-300">
                  {fuzzyMemberships.hot}
                </span>
                <div className="w-full bg-rose-950 rounded-full h-1.5 mt-2 overflow-hidden border border-rose-500/30">
                  <div
                    className="bg-rose-400 h-full transition-all duration-300"
                    style={{ width: `${fuzzyMemberships.hot * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Classical Aristotelian vs Fuzzy Contrast Note */}
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-black/40 border-blue-500/20 text-stone-300'
              }`}
            >
              <span className="font-bold text-blue-400 block mb-1">
                {isArabic ? '💡 المفارقة الامتحانية بين المنطقين:' : '💡 Philosophical Contrast:'}
              </span>
              {isArabic
                ? 'المنطق الأرسطي الصوري ثنائي القيم (إما صادق 1 أو كاذب 0)، ويعجز عن تمثيل صفات الحياة الواقعية كـ"الطول والذكاء والدفء". المنطق المرن عند لطفي زادة يسمح بتمثيل درجات الحقيقة بين (0 و 1)، مما مكن أجهزة التكييف والغسالات الذكية والسيارات ذاتية القيادة من محاكاة العقل البشري بدقة.'
                : 'Aristotelian logic is bivalent (strictly 1 or 0), incapable of modeling graduated real-world qualities like "tall" or "warm". Fuzzy logic enables continuous degrees of truth in [0, 1], powering intelligent control systems.'}
            </div>

            {/* Cybernetic Feedback Loop Interactive Module */}
            <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-blue-300">
                    {isArabic ? 'حلقة التغذية الراجعة السيبرنطيقية (Norbert Wiener):' : 'Cybernetic Feedback Loop:'}
                  </span>
                </div>
                <button
                  onClick={() => setFeedbackActive(!feedbackActive)}
                  className={`px-2.5 py-1 text-[11px] rounded font-bold transition-all cursor-pointer ${
                    feedbackActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-700 text-stone-300'
                  }`}
                >
                  {feedbackActive
                    ? isArabic ? 'التغذية الراجعة مفعلة ✓' : 'Feedback Loop ON'
                    : isArabic ? 'الحلقة مغلقة ✕' : 'Feedback Loop OFF'}
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-blue-500/20 text-xs text-stone-200">
                <span className="font-mono text-blue-400 block mb-0.5">
                  Target: {targetSetpoint} °C | Current: {temperature} °C | Error: {errorDelta > 0 ? `+${errorDelta}` : errorDelta} °C
                </span>
                <span className="font-bold text-amber-300">{cyberneticCorrection}</span>
              </div>
            </div>

            {/* Ministerial Exam Takeaway */}
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 استنتاج واضع الامتحان الوزاري:' : '🎯 Ministerial Exam Insight:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic
                  ? 'يؤكد منهج الثانوية العامة أن الذكاء الاصطناعي المعاصر مدين للمنطق الرمزي في مرحلتين: (1) مرحلة البناء الصلب للعتاد باستخدام دوائر شانون المنطقية البوليانية، و(2) مرحلة البرمجة الذكية باستخدام المنطق المرن لتجاوز عيوب المنطق الأرسطي الجامد.'
                  : 'The Thanawya curriculum stresses AI’s dual debt to logic: (1) Hardware design via Shannon’s Boolean switching, and (2) Intelligent software via Zadeh’s Fuzzy Logic to transcend rigid Aristotelian bivalence.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={!!modalData}
        data={modalData}
        onClose={() => setModalData(null)}
        lang={isArabic ? 'ar' : 'en'}
        theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
      />
    </div>
  );
};
