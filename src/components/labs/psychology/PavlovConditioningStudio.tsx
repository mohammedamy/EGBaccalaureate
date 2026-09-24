import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Activity,
  Award,
  AlertTriangle,
  RotateCcw,
  Sliders,
} from 'lucide-react';
import pavlovPhoto from '../../../assets/psychology/pavlov_conditioning_lab_1904.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface PavlovHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  detailsAr: string;
  detailsEn: string;
  thanawyaRuleAr: string;
  thanawyaRuleEn: string;
}

export const PAVLOV_HOTSPOTS: PavlovHotspot[] = [
  {
    id: 'metronome',
    xPct: 54,
    yPct: 48,
    titleAr: 'المثير الشرطي (CS): المترونوم الصوتي والجرس',
    titleEn: 'Conditioned Stimulus (CS): Acoustic Metronome',
    roleAr: 'مثير محايد في الأصل لا يولّد استجابة سيلان اللعاب، ولكنه بعد اقترانه المتكرر بالطعام يكتسب القدرة على إحداث الاستجابة بمفرده.',
    roleEn: 'Originally a neutral stimulus incapable of eliciting salivation, which acquires response-evoking efficacy through repeated temporal pairing with food.',
    detailsAr: 'استخدم بافلوف مترونوماً ميكانيكياً مضبوطاً على إيقاع زمني دقيق في الغرفة المعزولة، لضمان ثبات التردد الصوتي وتفادي التشويش الحسي الخارجي.',
    detailsEn: 'Pavlov utilized an acoustic metronome calibrated at precise ticking cadences to provide invariant auditory cues isolated from extraneous room reverberations.',
    thanawyaRuleAr: 'قانون الاقتران الزمني: يجب أن يسبق المثير الشرطي (الصوت) المثير الطبيعي (مسحوق اللحم) بفاصل زمني وجيز (أجزاء من الثانية) ليحدث الاشتراط بنجاح.',
    thanawyaRuleEn: 'Temporal Contiguity Law: The CS must precede the US by an optimal brief latency (fractions of a second) to establish robust neural association.',
  },
  {
    id: 'kymograph',
    xPct: 71,
    yPct: 68,
    titleAr: 'أسطوانة الكيموجراف المسجلة (Kymograph Drum)',
    titleEn: 'Pneumatic Recording Kymograph Drum',
    roleAr: 'جهاز تسجيل فيزيولوجي دقيق يرسم قطرات اللعاب المتدفقة بيانياً كدالة في الزمن على ورق مدخن بالكربون.',
    roleEn: 'Precision physiological recording cylinder tracing salivation rate against elapsed seconds on smoked carbon paper using a mechanical stylus.',
    detailsAr: 'تتحرك الإبرة الحساسة مع كل قطرة لعاب تسقط في القمع الزجاجي، مما منح بافلوف بيانات كمية وموضوعية حاسمة أهلته لنيل جائزة نوبل في الطب عام 1904م.',
    detailsEn: 'Each saliva drop deflected the pneumatic stylus, granting Pavlov objective, quantitative empirical data that secured his 1904 Nobel Prize in Medicine.',
    thanawyaRuleAr: 'مبدأ القياس الموضوعي في علم النفس: تحويل الاستجابة النفسية الداخلية إلى متغير كمي قابل للقياس والتحليل الإحصائي الدقيق.',
    thanawyaRuleEn: 'Objective Measurement Principle: Converting latent psychic states into quantifiable, verifiable physiological data.',
  },
  {
    id: 'cannula',
    xPct: 37,
    yPct: 52,
    titleAr: 'قنية القناة اللعابية (Salivary Fistula & Tube)',
    titleEn: 'Salivary Duct Cannula & Graduate Collector',
    roleAr: 'تحويلة جراحية دقيقة لقناة الغدة النكفية والفكية توجه اللعاب مباشرة إلى أنبوب زجاجي مدرج.',
    roleEn: 'Surgical exteriorization of the parotid and submandibular duct routing saliva directly into a graduated glass vessel.',
    detailsAr: 'مكنت هذه التحويلة بافلوف من قياس حجم اللعاب ولزوجته ونشاط الإنزيمات دون إلحاق أذى بحيوان التجربة.',
    detailsEn: 'Enabled continuous quantification of salivary volume, viscosity, and enzymatic concentrations in a healthy animal subject.',
    thanawyaRuleAr: 'الاستجابة الطبيعية مقابل الشرطية: سيلان اللعاب عند رؤية الطعام استجابة طبيعية (UR)، بينما سيلانه عند سماع صوت المترونوم وحده استجابة شرطية (CR).',
    thanawyaRuleEn: 'UR vs CR Distinction: Salivation to meat is an unconditioned reflex (UR); salivation to sound alone is a conditioned reflex (CR).',
  },
  {
    id: 'chamber',
    xPct: 29,
    yPct: 35,
    titleAr: 'الغرفة العازلة للصوت والمشتتات (Soundproof Chamber)',
    titleEn: 'Acoustic Isolation Soundproof Chamber',
    roleAr: 'حجرة مبطنة بجدران خشبية مزدوجة وطبقات عازلة تمنع تسرب الأصوات والروائح وحركات الباحث.',
    roleEn: 'Double-walled wooden experimental chamber isolating the subject from external footsteps, odors, and researcher micro-movements.',
    detailsAr: 'أدرك بافلوف أن الكلب قد يستجيب لخطوات الحارس أو رائحة ملابسه (اشتراط عارض)، فبنى "برج الصمت" في معهد كولمياشي للطب التجريبي.',
    detailsEn: 'Pavlov recognized serendipitous secondary conditioning caused by lab-coat footsteps, creating the renowned "Tower of Silence" in St. Petersburg.',
    thanawyaRuleAr: 'ضبط المتغيرات الدخيلة: استبعاد أي مثيرات عشوائية قد تشوش على العلاقة بين المثير الشرطي والمثير الطبيعي لضمان صدق التجربة.',
    thanawyaRuleEn: 'Experimental Control: Eliminating confounding sensory variables to guarantee unpolluted CS-US causal correlation.',
  },
];

export const PavlovConditioningStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeHotspot, setActiveHotspot] = useState<PavlovHotspot>(PAVLOV_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Dynamic Conditioning Simulation States
  const [trialsCount, setTrialsCount] = useState<number>(8);
  const [pairingLatencyMs, setPairingLatencyMs] = useState<number>(350); // 100 - 1500 ms
  const [regime, setRegime] = useState<'acquisition' | 'extinction' | 'spontaneous_recovery' | 'generalization'>('acquisition');
  const [restPeriodHours, setRestPeriodHours] = useState<number>(24);

  const openFullModal = () => {
    setModalData({
      imageUrl: pavlovPhoto,
      titleAr: 'مختبر إيفان بافلوف الفسيولوجي (سان بطرسبرغ، 1904م) — تأسيس نظرية التعلم الشرطي الكلاسيكي',
      titleEn: 'Ivan Pavlov’s Physiological Laboratory (St. Petersburg, 1904 CE) — Classical Conditioning',
      subtitleAr: 'محطة أسطوانة الكيموجراف والمترونوم الصوتي وغرفة العزل التجريبي',
      subtitleEn: 'Kymograph Recording Drum, Acoustic Metronome, and Acoustic Isolation Chamber',
      dateOrEraAr: '1904م (العصر الذهبي للفيزيولوجيا التجريبية ونيل جائزة نوبل في الطب)',
      dateOrEraEn: '1904 CE (Nobel Prize in Physiology & Medicine)',
      locationAr: 'معهد الطب التجريبي — سان بطرسبرغ، روسيا القيصرية',
      locationEn: 'Institute of Experimental Medicine — St. Petersburg, Imperial Russia',
      descriptionAr:
        'صورة أرشيفية وثائقية نادرة بدقة فائقة لمختبر العالم الروسي إيفان بافلوف، تعرض المحطة التجريبية المتكاملة التي صممها لدراسة ردود الفعل الانعكاسية الشرطية. تظهر أسطوانة الكيموجراف المزودة بورق مدخن لتسجيل قطرات اللعاب مع الزمن، والمترونوم الميكانيكي المستخدم كمثير شرطي، وقنية تصريف الغدة اللعابية، والغرفة الخشبية العازلة للصوت لضبط كافة المتغيرات الدخيلة.',
      descriptionEn:
        'A rare museum-grade archival documentary photograph of Ivan Pavlov’s experimental physiology laboratory in St. Petersburg. Features the pneumatic kymograph recording drum with carbon-smoked paper, the acoustic metronome conditioned stimulus apparatus, the surgically exteriorized salivary cannula, and the sound-attenuated experimental chamber engineered to eliminate all extraneous sensory confounds.',
    });
  };

  // Compute conditioned response strength (0 - 100 drops/min)
  const computeSalivationRate = (): { drops: number; latencyScore: number; efficiencyPct: number } => {
    // Optimal latency is around 250 - 500 ms
    const latencyFactor = Math.max(0.2, 1 - Math.abs(pairingLatencyMs - 400) / 1200);

    if (regime === 'extinction') {
      const remainingStrength = Math.max(4, Math.round(75 * Math.exp(-0.45 * trialsCount)));
      return { drops: remainingStrength, latencyScore: latencyFactor, efficiencyPct: Math.round(remainingStrength * 1.1) };
    }

    if (regime === 'spontaneous_recovery') {
      // Rest period restores response partially (around 40-60% of original acquisition)
      const baseRecovery = 45 * (1 - Math.exp(-restPeriodHours / 18));
      const drops = Math.min(65, Math.max(15, Math.round(baseRecovery)));
      return { drops, latencyScore: latencyFactor, efficiencyPct: drops + 5 };
    }

    if (regime === 'generalization') {
      // Stimulus generalization gives ~70% response to nearby frequencies
      const drops = Math.min(85, Math.max(20, Math.round(55 * latencyFactor + trialsCount * 2.5)));
      return { drops, latencyScore: latencyFactor, efficiencyPct: drops };
    }

    // Default: Acquisition
    const rawAcquisition = (1 - Math.exp(-0.28 * trialsCount)) * 95 * latencyFactor;
    const drops = Math.min(98, Math.max(5, Math.round(rawAcquisition)));
    return { drops, latencyScore: latencyFactor, efficiencyPct: Math.round(drops) };
  };

  const { drops, latencyScore, efficiencyPct } = computeSalivationRate();

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
        isLight
          ? 'bg-stone-50/95 border-amber-200 text-stone-900'
          : isContrast
          ? 'bg-black border-yellow-400 text-white'
          : 'bg-stone-950/95 border-amber-900/40 text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div
        className={`px-5 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
          isLight
            ? 'bg-amber-100/60 border-amber-200 text-amber-950'
            : isContrast
            ? 'bg-yellow-950/40 border-yellow-500 text-yellow-300'
            : 'bg-amber-950/30 border-amber-900/40 text-amber-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shadow-inner">
            <Activity className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-black tracking-wide flex items-center gap-2">
              <span>{isArabic ? 'مختبر بافلوف للاشتراط الكلاسيكي (1904م)' : 'Pavlov Classical Conditioning Lab (1904 CE)'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isArabic ? 'نوبل في الطب 1904' : 'Nobel Prize 1904'}
              </span>
            </h3>
            <p className="text-xs text-stone-400">
              {isArabic
                ? 'استكشف أجهزة بافلوف الأصلية، قوانين الاكتساب والانطفاء والاسترجاع التلقائي والتمييز'
                : 'Inspect Pavlov’s original laboratory apparatus and simulate classical conditioning laws'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-600/80 hover:bg-amber-500 text-white shadow-md active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير فوتوغرافي 4K' : '4K Archival Zoom'}</span>
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5">
        {/* Left / Top: 4K Interactive Photographic Canvas with Pulsating Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-black aspect-[16/9] group select-none">
            <img
              src={pavlovPhoto}
              alt="Ivan Pavlov Laboratory 1904"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspots */}
            {PAVLOV_HOTSPOTS.map((hotspot) => {
              const isActive = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ left: `${hotspot.xPct}%`, top: `${hotspot.yPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin focus:outline-none"
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <span
                    className={`absolute -inset-2 rounded-full animate-ping opacity-60 pointer-events-none ${
                      isActive ? 'bg-amber-400' : 'bg-rose-400'
                    }`}
                  />
                  <div
                    className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500 border-white text-stone-950 scale-125 ring-4 ring-amber-400/40'
                        : 'bg-stone-900/90 border-amber-400 text-amber-300 hover:scale-110 hover:bg-amber-900/80'
                    }`}
                  >
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/85 backdrop-blur-md text-[11px] font-semibold text-amber-200 px-2 py-0.5 rounded border border-amber-500/30 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                    {isArabic ? hotspot.titleAr.split(':')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Canvas Bottom Legend */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20 font-medium">
                {isArabic ? 'انقر على الدوائر الذهبية لفحص أدوات بافلوف وقوانينها' : 'Click markers to inspect Pavlov’s experimental apparatus'}
              </span>
              <span className="hidden sm:inline bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-500/30">
                {isArabic ? 'سان بطرسبرغ 1904م' : 'St. Petersburg 1904'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons for 4 Hotspots */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PAVLOV_HOTSPOTS.map((h) => {
              const isSelected = activeHotspot.id === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-start flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
                      : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:border-amber-500/40 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] text-amber-400/80 uppercase font-mono tracking-wider">
                    {h.id.toUpperCase()}
                  </span>
                  <span className="line-clamp-1">{isArabic ? h.titleAr.split(':')[0] : h.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Deep Inspection Drawer */}
          <div className="p-4 rounded-xl border border-amber-500/20 bg-stone-900/60 backdrop-blur-sm space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-amber-200">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h4>
              </div>
              <span className="text-xs font-mono text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded">
                {activeHotspot.id}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'الدور الوظيفي في التجربة الفسيولوجية:' : 'Role in Experimental Protocol:'}
              </span>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-stone-800/60">
                {isArabic ? activeHotspot.roleAr : activeHotspot.roleEn}
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isArabic ? activeHotspot.detailsAr : activeHotspot.detailsEn}
            </p>

            {/* Ministerial HOTS Exam Rule */}
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 القاعدة الامتحانية الوزارية (ثانوية عامة):' : '🎯 Ministerial Exam Rule:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeHotspot.thanawyaRuleAr : activeHotspot.thanawyaRuleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Interactive Pavlovian Law Simulator & Reflex Curve */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>{isArabic ? 'محاكي قوانين بافلوف الخمسة' : 'Pavlov’s 5 Conditioning Laws'}</span>
              </h4>
              <button
                onClick={() => {
                  setTrialsCount(8);
                  setPairingLatencyMs(350);
                  setRegime('acquisition');
                  setRestPeriodHours(24);
                }}
                className="text-[11px] text-stone-400 hover:text-amber-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            {/* Conditioning Regime Selector */}
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              {[
                { id: 'acquisition', labelAr: '1. قانون التدعيم (الاكتساب)', labelEn: '1. Acquisition / Reinforcement' },
                { id: 'extinction', labelAr: '2. قانون الانطفاء (دون معزز)', labelEn: '2. Extinction (No US)' },
                { id: 'spontaneous_recovery', labelAr: '3. الاسترجاع التلقائي', labelEn: '3. Spontaneous Recovery' },
                { id: 'generalization', labelAr: '4. قانون التعميم والتمييز', labelEn: '4. Generalization & Discrim.' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setRegime(m.id as any)}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    regime === m.id
                      ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-md'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                  }`}
                >
                  {isArabic ? m.labelAr : m.labelEn}
                </button>
              ))}
            </div>

            {/* Controls based on regime */}
            <div className="space-y-3 bg-black/40 p-3.5 rounded-xl border border-stone-800">
              {regime === 'acquisition' && (
                <>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-300">{isArabic ? 'عدد محاولات الاقتران (N):' : 'Pairing Trials (N):'}</span>
                      <span className="font-mono text-amber-400 font-bold">{trialsCount} {isArabic ? 'محاولات' : 'trials'}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      value={trialsCount}
                      onChange={(e) => setTrialsCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-300">{isArabic ? 'الفاصل الزمني بين الصوت والطعام:' : 'CS-US Latency Gap:'}</span>
                      <span className="font-mono text-amber-400 font-bold">{pairingLatencyMs} ms</span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={1500}
                      step={50}
                      value={pairingLatencyMs}
                      onChange={(e) => setPairingLatencyMs(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400 flex justify-between">
                      <span>{isArabic ? 'مثالي (300-500ms)' : 'Optimal (300-500ms)'}</span>
                      <span>{isArabic ? 'تأخير طويل (>1000ms)' : 'Long delay (>1s)'}</span>
                    </div>
                  </div>
                </>
              )}

              {regime === 'extinction' && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300">{isArabic ? 'محاولات تقديم الصوت وحده دون طعام:' : 'Unreinforced CS Presentations:'}</span>
                    <span className="font-mono text-rose-400 font-bold">{trialsCount} {isArabic ? 'مرات' : 'times'}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={trialsCount}
                    onChange={(e) => setTrialsCount(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-rose-300/80 leading-relaxed pt-1">
                    {isArabic
                      ? 'قانون الانطفاء: تكرار تقديم المثير الشرطي دون تعزيز يؤدي لتضاؤل الاستجابة الشرطية تدريجياً حتى تتلاشى.'
                      : 'Extinction Law: Repeatedly presenting the CS without the unconditioned reinforcer causes gradual reflex decay.'}
                  </p>
                </div>
              )}

              {regime === 'spontaneous_recovery' && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300">{isArabic ? 'فترة الراحة بعد الانطفاء:' : 'Post-Extinction Rest Period:'}</span>
                    <span className="font-mono text-emerald-400 font-bold">{restPeriodHours} {isArabic ? 'ساعة' : 'hours'}</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={72}
                    step={2}
                    value={restPeriodHours}
                    onChange={(e) => setRestPeriodHours(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-emerald-300/80 leading-relaxed pt-1">
                    {isArabic
                      ? 'قانون الاسترجاع التلقائي: بعد فترة راحة، يعود اللعاب للسيلان تلقائياً بمجرد سماع الصوت ولكن بقوة أقل من قوة التعلم الأصلية.'
                      : 'Spontaneous Recovery: After a rest period, presenting the CS temporarily elicits the conditioned response, albeit at reduced vigor.'}
                  </p>
                </div>
              )}

              {regime === 'generalization' && (
                <div className="space-y-2">
                  <p className="text-xs text-amber-200 leading-relaxed">
                    {isArabic
                      ? 'التعميم: سيلان اللعاب لأصوات مشابهة (جرس بـ 800Hz بدلاً من 1000Hz). التمييز: يتعلم الكائن الاستجابة للصوت المعزز فقط دون الأصوات القريبة.'
                      : 'Generalization: Responding to similar auditory pitches (800Hz instead of 1000Hz). Discrimination: Learning to respond only to the reinforced pitch.'}
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[11px] px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                      {isArabic ? 'التعميم يسبق التمييز نموياً' : 'Generalization precedes Discrimination'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Calculated Physiological Reflex Output */}
            <div className="p-3.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-300 font-bold">{isArabic ? 'معدل سيلان اللعاب المسجل:' : 'Recorded Salivary Influx:'}</span>
                <span className="text-lg font-black font-mono text-amber-400">{drops} {isArabic ? 'قطرة / دقيقة' : 'drops/min'}</span>
              </div>

              {/* Graphical Progress Bar */}
              <div className="w-full h-3 bg-stone-900 rounded-full overflow-hidden border border-amber-500/30 p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    regime === 'extinction'
                      ? 'bg-rose-500'
                      : regime === 'spontaneous_recovery'
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-amber-500 to-yellow-300'
                  }`}
                  style={{ width: `${Math.min(100, drops)}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-stone-400 font-mono">
                <span>{isArabic ? `كفاءة الرابطة العصبية: ${efficiencyPct}%` : `Synaptic Association: ${efficiencyPct}%`}</span>
                <span>{isArabic ? `معامل التزامن الزمني: ${(latencyScore * 100).toFixed(0)}%` : `Temporal Score: ${(latencyScore * 100).toFixed(0)}%`}</span>
              </div>
            </div>

            {/* Ministerial HOTS Trap Card */}
            <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/5 text-xs text-rose-200 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-rose-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{isArabic ? 'فخ أسئلة ثانوية عامة متكرر في بافلوف:' : 'Thanawya Amma Classic Exam Trap:'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isArabic
                  ? 'إذا انطفأت الاستجابة الشرطية وقدمنا المثير الشرطي بعد فترة راحة، فإن الاستجابة تعود "تلقائياً وبنفس المثير" ولكن "ليس بنفس القوة السابقة"، ويسمى ذلك استرجاعاً تلقائياً وليس اكتساباً جديداً.'
                  : 'If the CR is extinguished and the CS is presented after a rest period, salivation recurs spontaneously with the SAME stimulus but at REDUCED amplitude—this is spontaneous recovery, not novel acquisition.'}
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
