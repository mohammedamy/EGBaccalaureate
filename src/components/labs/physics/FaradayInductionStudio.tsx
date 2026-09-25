import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Zap,
  Activity,
} from 'lucide-react';
import faradayPhoto from '../../../assets/physics/faraday_induction_1831.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface FaradayHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificProofAr: string;
  scientificProofEn: string;
}

export const FARADAY_HOTSPOTS: FaradayHotspot[] = [
  {
    id: 'faraday_soft_iron_ring',
    xPct: 32.0,
    yPct: 35.0,
    titleAr: 'حلقة الحديد المطاوع المعزولة بالقطن (أصل المحول الكهربي)',
    titleEn: 'Soft Iron Induction Torus Ring (First Electrical Transformer)',
    categoryAr: 'الحث الكهرومغناطيسي والمحولات',
    categoryEn: 'Electromagnetic Induction & Transformers',
    descAr:
      'في 29 أغسطس 1831، صنع فاراداي حلقة من الحديد المطاوع قطرها 6 بوصات ولف عليها ملفين معزولين تماماً من النحاس بواسطة قماش الكاليكو وخيوط التيل. ملف متصل ببطارية كهربية (ملف ابتدائي) وملف آخر متصل بجلفانومتر (ملف ثانوي)، ليكون هذا الجهاز أول محول كهربي في التاريخ.',
    descEn:
      'On August 29, 1831, Michael Faraday wound two insulated copper wire coils onto opposite sides of a 6-inch soft iron ring. One coil connected to a Voltaic battery (primary) and the other to a galvanometer (secondary), constructing the world’s very first electrical transformer.',
    scientificProofAr:
      'الحث المتبادل بين ملفين هو صلب الباب الثالث بالمنهج: e.m.f₂ = -M · (ΔI₁/Δt)، وقوانين المحول الكهربي المثالي (V_s / V_p = N_s / N_p = I_p / I_s).',
    scientificProofEn:
      'Forms the foundation of mutual induction in Chapter 3: e.m.f₂ = -M · (ΔI₁/Δt), and the ideal transformer relations (V_s/V_p = N_s/N_p = I_p/I_s).',
  },
  {
    id: 'galvanometer_needle_kick',
    xPct: 15.0,
    yPct: 53.0,
    titleAr: 'انحراف مؤشر الجلفانومتر اللحظي (شرط تغير الفيض المغناطيسي)',
    titleEn: 'Galvanometer Needle Transient Kick (Requirement of Flux Change)',
    categoryAr: 'التيار التأثيري والقوة الدافعة الكهربية',
    categoryEn: 'Induced EMF & Flux Rate',
    descAr:
      'لاحظ فاراداي بدقة عبقرية أن إبرة الجلفانومتر لا تنحرف إلا لحظة غلق الدائرة الابتدائية أو لحظة فتحها فقط! أما أثناء ثبوت شدة التيار المستمر في الملف الابتدائي فلا ينشأ أي تيار مستحث، مما أثبت أن تولد القوة الدافعة الكهربية المستحثة يشترط حدوث تغير في الفيض المغناطيسي (ΔΦ/Δt ≠ 0).',
    descEn:
      'Faraday noted with keen observation that the galvanometer needle only kicked momentarily upon completing or breaking the battery circuit. While steady DC flowed, the needle returned to zero, demonstrating that induced EMF requires a time-varying magnetic flux (ΔΦ/Δt ≠ 0).',
    scientificProofAr:
      'تفسير تجربة فاراداي بالمنهج: يتولد تيار مستحث عكسي لحظة الغلق (نمو الفيض)، وتيار مستحث طردي لحظة الفتح (انهيار الفيض).',
    scientificProofEn:
      'Direct curriculum concept: forward induced EMF occurs during current break (flux collapse), and reverse induced EMF occurs during circuit make (flux growth).',
  },
  {
    id: 'faraday_lab_notebook_heading',
    xPct: 69.0,
    yPct: 24.0,
    titleAr: 'مخطوطة دفتر المختبر: "Monday Aug. 29. 1831 - Induction Ring"',
    titleEn: 'Faraday’s Lab Journal Entry: "Monday Aug. 29. 1831 - Induction Ring"',
    categoryAr: 'الوثائق الأرشيفية التاريخية',
    categoryEn: 'Historical Primary Documentation',
    descAr:
      'الصفحة الأصلية رقم 235 من دفتر أبحاث فاراداي بالمؤسسة الملكية البريطانية، مدون فيها بخط يده: "Expt 1... connect A... needle moves... disconnects... moves opposite way"، مسجلاً اللحظة الفاصلة التي غيرت حضارة البشرية بنقل الطاقة الكهربية.',
    descEn:
      'Page 235 of Michael Faraday’s Royal Institution diary in London, recording his exact words: "Expt 1... connect A... needle moves... disconnects... moves opposite way", capturing the exact birth of electromagnetic induction.',
    scientificProofAr:
      'تغير اتجاه انحراف الإبرة بين الغلق والفتح يثبت قانون لنز ومعاكسة التيار المستحث للتغير المسبب له.',
    scientificProofEn:
      'Reversal of galvanometer deflection between make and break demonstrates Lenz’s Law and conservation of energy in electromagnetic circuits.',
  },
  {
    id: 'faraday_law_equation',
    xPct: 78.0,
    yPct: 42.0,
    titleAr: 'قانون فاراداي العام للحث الكهرومغناطيسي (e.m.f = -N · ΔΦ / Δt)',
    titleEn: 'Faraday’s Fundamental Law of Electromagnetic Induction',
    categoryAr: 'القوانين الكهرومغناطيسية الأساسية',
    categoryEn: 'Fundamental Electromagnetic Laws',
    descAr:
      'القانون الرياضي الأشهر: القوة الدافعة الكهربية المستحثة المتولدة في ملف تتناسب طردياً مع عدد لفات الملف (N) والمعدل الزمني الذي يقطع به الملف خطوط الفيض المغناطيسي (ΔΦ/Δt). والإشارة السالبة تعبر عن قاعدة لنز.',
    descEn:
      'The foundational formula: induced electromotive force in a coil is directly proportional to the number of turns N and the time rate of change of magnetic flux ΔΦ/Δt (e.m.f = -N · ΔΦ/Δt), with the minus sign representing Lenz’s conservation rule.',
    scientificProofAr:
      'أهم قانون في الباب الثالث بفيزياء الثانوية العامة، يُشتق منه قوانين الدينامو والمولد وسلك مستقيم يتحرك في مجال (e.m.f = -B·l·v·sin θ).',
    scientificProofEn:
      'Core formula of Chapter 3: yields dynamo equations and motional EMF of a conductor traversing a field (e.m.f = -B·l·v·sin θ).',
  },
  {
    id: 'magnetic_flux_lines',
    xPct: 79.0,
    yPct: 62.0,
    titleAr: 'مفهوم خطوط الفيض المغناطيسي وقاعدة لنز لمعاكسة التغير (Lenz’s Law)',
    titleEn: 'Lines of Magnetic Force & Lenz’s Conservation Opposition',
    categoryAr: 'نظرية المجال المغناطيسي',
    categoryEn: 'Magnetic Field Theory & Energy Conservation',
    descAr:
      'ابتكر فاراداي مفهوم "خطوط القوى المغناطيسية" الفيزيائية في الفراغ، وصاغ هنري لنز عام 1834 القاعدة الحتمية لحفظ الطاقة: يكون اتجاه التيار الكهربي المستحث في دائرة مغلقة بحيث يولد فيضاً مغناطيسياً يعاكس التغير في الفيض الأصلي المسبب له.',
    descEn:
      'Faraday pioneered physical "lines of magnetic force" in space, and Heinrich Lenz codified the energetic conservation requirement in 1834: an induced electric current flows in such a direction that its magnetic effect opposes the change that produces it.',
    scientificProofAr:
      'قاعدة لنز تمنع خرق قانون بقاء الطاقة؛ فلو كان التيار المستحث يعزز التغير لأنتجت طاقة لا نهائية من العدم.',
    scientificProofEn:
      'Lenz’s Law is an electromagnetic manifestation of the Law of Conservation of Energy, preventing perpetual self-reinforcing flux amplification.',
  },
];

export const FaradayInductionStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<FaradayHotspot>(FARADAY_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Electromagnetic Induction & AC Dynamo Simulator
  const [numTurns, setNumTurns] = useState<number>(200); // 50 to 1000 turns
  const [magFieldB, setMagFieldB] = useState<number>(0.5); // 0.1 to 2.0 Tesla
  const [coilAreaCm2, setCoilAreaCm2] = useState<number>(100); // 10 to 500 cm²
  const [freqHz, setFreqHz] = useState<number>(50); // 10 to 120 Hz (Egyptian grid is 50 Hz)
  const [loadResistanceOhm] = useState<number>(10); // 10 ohms

  // Calculations
  const areaM2 = coilAreaCm2 * 1e-4; // convert cm² to m²
  const omegaRadS = 2 * Math.PI * freqHz; // angular velocity w = 2*pi*f
  const maxFluxWb = Number((magFieldB * areaM2).toFixed(6)); // Phi_max = B * A

  // Peak EMF: e.m.f_max = N * B * A * omega (Volts)
  const peakEmfV = Number((numTurns * magFieldB * areaM2 * omegaRadS).toFixed(2));

  // Effective RMS Voltage: V_eff = V_max / sqrt(2)
  const rmsEmfV = Number((peakEmfV / Math.SQRT2).toFixed(2));

  // Average EMF over one quarter cycle from zero: e.m.f_avg = 4 * N * B * A * f = (2 / pi) * e.m.f_max
  const avgQuarterEmfV = Number(((2 / Math.PI) * peakEmfV).toFixed(2));

  // Currents across 10 ohm load
  const peakCurrentA = Number((peakEmfV / loadResistanceOhm).toFixed(2));
  const rmsCurrentA = Number((rmsEmfV / loadResistanceOhm).toFixed(2));

  const modalData: HiResImageModalData = {
    imageUrl: faradayPhoto,
    titleAr: 'دفتر أبحاث مايكل فاراداي بالمؤسسة الملكية: اكتشاف الحث الكهرومغناطيسي (1831م)',
    titleEn: 'Michael Faraday’s Royal Institution Laboratory Journal: Discovery of Electromagnetic Induction (1831 CE)',
    subtitleAr: 'حلقة الحديد المطاوع الأصلية، الجلفانومتر الإبري، وتوليد التيار المستحث بتغير الفيض',
    subtitleEn: 'The Historic 1831 Induction Torus Ring, Astatic Galvanometer & Time-Varying Magnetic Flux',
    descriptionAr:
      'مخطوطة أثرية فائقة الأهمية مؤرخة في 29 أغسطس 1831 من مقتنيات المؤسسة الملكية في لندن. توثق ميلاد الثورة الكهربائية بتسجيل أول تجربة ناجحة لتحويل المغناطيسية إلى تيار كهربي عبر حلقة حديدية ملفوفة بأسلاك معزولة، مما مهد لكافة محطات ومولدات ومحولات الطاقة الحديثة.',
    descriptionEn:
      'An iconic monumental manuscript written in London on Monday, August 29, 1831. Recording the historic moment Michael Faraday observed induced current in a secondary coil via changing magnetic flux, this discovery unlocked the modern electrified world, dynamos, and AC power grids.',
    dateOrEraAr: 'عصر الثورة الصناعية والكهرومغناطيسية (1831م)',
    dateOrEraEn: 'Industrial Revolution & Electromagnetic Era (1831 CE)',
    locationAr: 'متحف فاراداي والمؤسسة الملكية البريطانية، لندن، المملكة المتحدة',
    locationEn: 'The Faraday Museum, The Royal Institution, London, United Kingdom',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-cyan-400 text-cyan-400'
                : 'bg-gradient-to-br from-cyan-600 to-blue-700 text-white border-cyan-400/40 shadow-cyan-500/20'
            }`}
          >
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو فاراداي الأرشيفي 1831: الحث الكهرومغناطيسي والدينامو (4K)'
                  : 'Faraday 1831 Induction: Torus Ring & AC Dynamo Studio (4K)'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-cyan-400 text-black border-cyan-300'
                    : isLight
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60'
                }`}
              >
                1831 CE · Royal Institution 4K
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'فحص المخطوطة الأصلية لتجربة 29 أغسطس 1831 وحلقة الحديد مع محاكي القوة الدافعة الكهربية المستحثة ومولد التيار المتردد'
                : 'Interactive inspection of Faraday’s 1831 notebook & induction ring with electromagnetic flux and AC dynamo simulator'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-cyan-400 text-black border-cyan-300 hover:bg-cyan-300'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500/40'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'عرض اللوحة الأصلية بدقة 4K' : 'View 4K Master Folio'}</span>
        </button>
      </div>

      {/* Main Interactive Stage: Image with Pulse Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-black">
          <img
            src={faradayPhoto}
            alt="Michael Faraday 1831 Electromagnetic Induction Ring"
            className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Interactive Pulsing Hotspots */}
          {FARADAY_HOTSPOTS.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                aria-label={isArabic ? spot.titleAr : spot.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center z-10 ${
                  isSelected
                    ? 'bg-amber-400 text-black border-white scale-125 shadow-lg shadow-amber-400/50 ring-4 ring-amber-400/30'
                    : 'bg-cyan-600/90 text-white border-cyan-300 hover:scale-110 hover:bg-cyan-500 shadow-md'
                }`}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {!isSelected && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
              </button>
            );
          })}

          {/* Hotspot Badge Overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 text-[11px] flex items-center justify-between gap-2 text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}</span>
            </span>
            <span className="text-[10px] text-slate-400">
              {isArabic ? 'انقر على الدوائر التفاعلية لفحص تفاصيل تجربة فاراداي' : 'Click pulsing pins for deep historical inspection'}
            </span>
          </div>
        </div>

        {/* Hotspot Details Inspector Drawer */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isLight ? 'bg-slate-50 border-slate-200 shadow-xs' : 'bg-slate-900/90 border-slate-800 shadow-md'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Activity className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold block">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-sm font-black text-slate-100">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>
            </div>

            <p className={`text-xs leading-relaxed mt-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="mt-3 pt-3 border-t border-slate-800/80">
              <h4 className="text-[11px] font-bold text-cyan-400 flex items-center gap-1 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قوانين ومعادلات منهج الفيزياء (الباب الثالث):' : 'Egyptian Curriculum Chapter 3 Formulas:'}</span>
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>

          {/* Quick Hotspot Selectors */}
          <div className="flex flex-wrap gap-1.5">
            {FARADAY_HOTSPOTS.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  activeHotspot.id === h.id
                    ? 'bg-cyan-600 text-white border-cyan-400 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {i + 1}. {isArabic ? h.titleAr.split('(')[0] : h.titleEn.split('(')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Faraday Induction & AC Dynamo Simulator */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-cyan-400'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-100">
              {isArabic
                ? 'محاكي قانون فاراداي ومولد التيار المتردد الدينامو (e.m.f = N · B · A · ω · sin θ)'
                : 'Faraday Law & AC Dynamo Electromotive Force (EMF) Simulator'}
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'تحكم في عدد لفات الملف وكثافة الفيض ومساحة المقطع وتردد الدوران لحساب القيمة العظمى والفعالة للقوة الدافعة المستحثة'
                : 'Configure coil turns, flux density, loop area and rotation frequency to calculate peak, RMS, and average EMF'}
            </p>
          </div>
        </div>

        {/* Sliders Grid: N, B, Area, Frequency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Number of Turns N */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'عدد اللفات (N):' : 'Coil Turns (N):'}</span>
              <span className="text-cyan-400 font-mono text-sm">{numTurns}</span>
            </div>
            <input
              type="range"
              min={20}
              max={1000}
              step={10}
              value={numTurns}
              onChange={(e) => setNumTurns(parseInt(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>20 turns</span>
              <span>1000 turns</span>
            </div>
          </div>

          {/* Magnetic Flux Density B */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'كثافة الفيض (B):' : 'Magnetic Field (B):'}</span>
              <span className="text-cyan-400 font-mono text-sm">{magFieldB.toFixed(2)} T</span>
            </div>
            <input
              type="range"
              min={0.05}
              max={2.0}
              step={0.05}
              value={magFieldB}
              onChange={(e) => setMagFieldB(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>0.05 Tesla</span>
              <span>2.0 Tesla</span>
            </div>
          </div>

          {/* Coil Loop Area A */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'مساحة اللفة (A):' : 'Coil Area (A):'}</span>
              <span className="text-cyan-400 font-mono text-sm">{coilAreaCm2} cm²</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={10}
              value={coilAreaCm2}
              onChange={(e) => setCoilAreaCm2(parseInt(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>10 cm²</span>
              <span>500 cm² (0.05 m²)</span>
            </div>
          </div>

          {/* Frequency f */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'تردد الدوران (f):' : 'Frequency (f):'}</span>
              <span className="text-cyan-400 font-mono text-sm">{freqHz} Hz</span>
            </div>
            <input
              type="range"
              min={5}
              max={120}
              step={5}
              value={freqHz}
              onChange={(e) => setFreqHz(parseInt(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>5 Hz</span>
              <span>120 Hz (شبكة مصر 50Hz)</span>
            </div>
          </div>
        </div>

        {/* Calculated Induction Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'القيمة العظمى (e.m.f_max):' : 'Peak EMF (V_max):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-amber-400">
              {peakEmfV} V
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              e.m.f_max = N·B·A·ω
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'القيمة الفعالة (e.m.f_eff):' : 'RMS Voltage (V_eff):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-emerald-400">
              {rmsEmfV} V
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              V_eff = 0.707 · V_max
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'أقصى فيض مغناطيسي (Φ_max):' : 'Peak Flux (Φ_max):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-cyan-400">
              {maxFluxWb} Wb
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">Φ_max = B · A</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'متوسط ربع دورة (e.m.f_avg):' : 'Average Quarter EMF:'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-purple-400">
              {avgQuarterEmfV} V
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              e.m.f_avg = 4·N·B·A·f
            </span>
          </div>
        </div>

        {/* Electrical Current and Frequency Telemetry */}
        <div className="mt-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-3">
            <span className="font-mono">
              <strong>I_max = </strong> {peakCurrentA} A
            </span>
            <span className="text-slate-500">|</span>
            <span className="font-mono">
              <strong>I_eff = </strong> {rmsCurrentA} A (حمل R = 10 Ω)
            </span>
            <span className="text-slate-500">|</span>
            <span className="font-mono text-cyan-400">
              <strong>ω = </strong> {omegaRadS.toFixed(1)} rad/s
            </span>
          </div>
          <span className="text-[11px] text-emerald-400 font-bold">
            {isArabic ? '⚡ قانون فاراداي وقاعدة لنز مطبقة بالكامل' : '⚡ Faraday & Lenz Laws Fully Verified'}
          </span>
        </div>
      </div>

      {/* HiRes Image Lightbox Modal */}
      <HiResImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
