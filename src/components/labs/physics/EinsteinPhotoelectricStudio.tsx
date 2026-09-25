import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Sun,
  Radio,
} from 'lucide-react';
import einsteinPhoto from '../../../assets/physics/einstein_photoelectric_quanta_1905.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface EinsteinHotspot {
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

export const EINSTEIN_HOTSPOTS: EinsteinHotspot[] = [
  {
    id: 'light_quantum_hypothesis',
    xPct: 24.0,
    yPct: 35.0,
    titleAr: 'فرضية كمات الضوء (الفوتونات): E = h · ν (أينشتاين 1905م)',
    titleEn: 'Light Quanta Hypothesis (Photons): E = h · ν (Einstein 1905)',
    categoryAr: 'ازدواجية الموجة والجسيم والفيزياء الحديثة',
    categoryEn: 'Wave-Particle Duality & Modern Physics',
    descAr:
      'اقترح ألبرت أينشتاين فكرة ثورية بأن طاقة الإشعاع الكهرومغناطيسي ليست موجات متصلة كما زعمت الفيزياء الكلاسيكية، بل تنتشر في الفراغ على شكل حزم كمية مركزة من الطاقة تُسمى "كمات الضوء" أو الفوتونات، طاقة كل منها E = h·ν.',
    descEn:
      'Albert Einstein revolutionized physics by proposing that electromagnetic radiation is not a continuous wave, but consists of localized, discrete packets of energy called light quanta (photons), each bearing energy E = h·ν.',
    scientificProofAr:
      'نال أينشتاين جائزة نوبل في الفيزياء عام 1921 تقديراً لتفسيره للظاهرة الكهروضوئية واكتشاف قانون التأثير الكهروضوئي.',
    scientificProofEn:
      'Earned Albert Einstein the 1921 Nobel Prize in Physics for his discovery of the law of the photoelectric effect.',
  },
  {
    id: 'work_function_threshold',
    xPct: 45.0,
    yPct: 53.0,
    titleAr: 'دالة الشغل لسطح الفلز (E_w) والتردد الحرج (ν₀ = E_w / h)',
    titleEn: 'Cathode Work Function (Φ / E_w) & Critical Threshold Frequency (ν₀)',
    categoryAr: 'خصائص سطح المعدن والانبعاث الكهروضوئي',
    categoryEn: 'Metal Surface Properties & Threshold Barrier',
    descAr:
      'دالة الشغل (E_w أو Φ) هي الحد الأدنى من الطاقة اللازمة لتحرير إلكترون من سطح المعدن دون إكسابه طاقة حركة. وهي صفة مميزة لنوع مادة الفلز، وتحدد التردد الحرج (ν₀) والطول الموجي الحرج (λ₀ = h·c / E_w).',
    descEn:
      'The work function (Φ or E_w) is the minimum energy required to liberate a conduction electron from the metal surface with zero kinetic energy. It is an intrinsic property of the element, defining the threshold frequency (ν₀ = Φ/h) and threshold wavelength (λ₀ = hc/Φ).',
    scientificProofAr:
      'شرط انبعاث الإلكترونات الضوئية في منهج الثانوية العامة: يجب أن يكون تردد الضوء الساقط أكبر من أو يساوي التردد الحرج (ν ≥ ν₀) أو طاقة الفوتون E ≥ E_w.',
    scientificProofEn:
      'Curriculum emission condition: photoelectrons are emitted if and only if incident frequency ν ≥ ν₀ (or incident photon energy E ≥ E_w), independent of intensity.',
  },
  {
    id: 'stopping_potential_equation',
    xPct: 45.0,
    yPct: 35.0,
    titleAr: 'معادلة أينشتاين الكهروضوئية وجهد الإيقاف: K_max = h·ν - E_w = e · V_s',
    titleEn: 'Einstein’s Photoelectric Equation & Stopping Potential (V_s)',
    categoryAr: 'حفظ الطاقة في التفاعل الكهروضوئي',
    categoryEn: 'Energy Conservation in Photoemission',
    descAr:
      'تخضع الظاهرة لمبدأ حفظ الطاقة: طاقة الفوتون الساقط تذهب جزئياً للتغلب على قوى التجاذب داخل المعدن (دالة الشغل)، والباقي يظهر كطاقة حركة عظمى للإلكترون المتحرر (K_max = ½m_e·v_max² = h·ν - E_w = e·V_s).',
    descEn:
      'Strict conservation of energy: incident photon energy is partitioned between overcoming the surface barrier (work function Φ) and the maximum kinetic energy of the freed electron: K_max = ½m_e·v_max² = h·ν - Φ = e·V_s.',
    scientificProofAr:
      'الرسم البياني بين K_max وتردد الضوء ν يعطي خطاً مستقيماً ميله يساوي ثابت بلانك (h) ويقطع محور السينات عند التردد الحرج (ν₀) ومحور الصادات عند (-E_w).',
    scientificProofEn:
      'The linear plot of K_max vs frequency ν has a universal slope equal to Planck’s constant (h), x-intercept at ν₀, and negative y-intercept at -E_w.',
  },
  {
    id: 'instantaneous_emission_zero_lag',
    xPct: 75.0,
    yPct: 45.0,
    titleAr: 'اللحظية التامة للانبعاث ودحض النظرية الموجية الكلاسيكية',
    titleEn: 'Instantaneous Emission (< 10⁻⁹ s) & Classical Wave Theory Demise',
    categoryAr: 'الميكانيكا الكمية ومعدل الانبعاث',
    categoryEn: 'Quantum Collision Dynamics vs Continuous Waves',
    descAr:
      'توقعت النظرية الكلاسيكية أن الضوء الضعيف يحتاج لعدة ساعات أو أيام حتى يجمع الإلكترون الطاقة اللازمة للتحرر. بينما أثبتت التجربة أن الانبعاث يحدث فورياً (خلال أقل من 10⁻⁹ ثانية) بمجرد سقوط الضوء لأن امتصاص الفوتون عملية فردية فورية بين فوتون واحد وإلكترون واحد.',
    descEn:
      'Classical wave mechanics predicted that faint light would require hours for an electron to accumulate sufficient oscillatory energy. Experimentally, emission occurs instantaneously (< 10⁻⁹ s) because absorption is a single one-on-one photon-electron quantum collision.',
    scientificProofAr:
      'زيادة شدة الضوء تزيد عدد الإلكترونات المتحررة في الثانية (شدة تيار التشبع) دون أن تؤثر على طاقة حركة الإلكترون الواحد طالما أن التردد ثابت.',
    scientificProofEn:
      'Increasing light intensity increases photon arrival rate and photocurrent, but has zero effect on the maximum kinetic energy or stopping potential.',
  },
  {
    id: 'photoelectric_cell_apparatus',
    xPct: 76.0,
    yPct: 58.0,
    titleAr: 'أنبوبة الخلية الكهروضوئية المفرغة والتطبيقات التكنولوجية المعاصرة',
    titleEn: 'Evacuated Photocell Tube & Modern Optoelectronic Applications',
    categoryAr: 'الأجهزة الفيزيائية والتطبيقات الحياتية',
    categoryEn: 'Photocell Instrumentation & Modern Applications',
    descAr:
      'الخلية الكهروضوئية تتكون من أنبوبة زجاجية مفرغة بها مهبط مقعر من معدن مناسب ومصعد رفيع لا يحجب الضوء. تستخدم في فتح الأبواب الآلية، إنارة الشوارع التلقائية، خلايا الألواح الشمسية الفولتوضوئية، وأجهزة قراءة الصوت في السينما.',
    descEn:
      'Consists of an evacuated quartz bulb housing a curved concave photocathode and a thin wire anode. Powers automatic elevator doors, dusk-to-dawn streetlighting sensors, sound-on-film audio reproduction, and modern photovoltaic solar cells.',
    scientificProofAr:
      'تطبيق تكنولوجي مباشر في منهج فيزياء الثانوية العامة (الفصل الخامس: ازدواجية الموجة والجسيم).',
    scientificProofEn:
      'Direct curriculum application in Chapter 5: Photocell circuits convert radiation flux into electronic telemetry.',
  },
];

export const EinsteinPhotoelectricStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<EinsteinHotspot>(EINSTEIN_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Photoelectric Effect Work Function & Stopping Potential Engine
  const [selectedMetal, setSelectedMetal] = useState<'Cs' | 'K' | 'Na' | 'Zn' | 'Pt'>('Na');
  const [wavelengthNm, setWavelengthNm] = useState<number>(400); // 200 to 800 nm

  const metalsData = {
    Cs: {
      nameAr: 'السيزيوم (Cesium, Cs)',
      nameEn: 'Cesium (Cs)',
      workFunctionEv: 2.14,
      color: '#eab308',
      descAr: 'فلز قلوي منخفض دالة الشغل، ينبعث حتى في الضوء الأصفر والبرتقالي',
    },
    K: {
      nameAr: 'البوتاسيوم (Potassium, K)',
      nameEn: 'Potassium (K)',
      workFunctionEv: 2.30,
      color: '#a855f7',
      descAr: 'فلز قلوي حساس للأطوال الموجية المرئية حتى اللون الأخضر',
    },
    Na: {
      nameAr: 'الصوديوم (Sodium, Na)',
      nameEn: 'Sodium (Na)',
      workFunctionEv: 2.75,
      color: '#f97316',
      descAr: 'المهبط القياسي لتجارب أينشتاين ومليكان، ينبعث في الضوء الأزرق والبنفسجي',
    },
    Zn: {
      nameAr: 'الزنك / الخارصين (Zinc, Zn)',
      nameEn: 'Zinc (Zn)',
      workFunctionEv: 4.30,
      color: '#06b6d4',
      descAr: 'يتطلب أشعة فوق بنفسجية (UV) للانبعاث، لا يستجيب للضوء المرئي',
    },
    Pt: {
      nameAr: 'البلاتين (Platinum, Pt)',
      nameEn: 'Platinum (Pt)',
      workFunctionEv: 5.65,
      color: '#94a3b8',
      descAr: 'فلز نبيل فائق الاستقرار، يتطلب أشعة فوق بنفسجية قاسية (Deep UV)',
    },
  };

  const currentMetal = metalsData[selectedMetal];
  const hc_eV_nm = 1239.84; // hc constant in eV·nm
  const h_J_s = 6.626e-34; // Planck constant in J·s
  const c_m_s = 3e8; // speed of light
  const e_charge = 1.602e-19; // Coulomb
  const m_e_kg = 9.109e-31; // electron rest mass

  // Incident Photon Energy E = hc / lambda (eV)
  const incidentEnergyEv = Number((hc_eV_nm / wavelengthNm).toFixed(3));
  // Threshold Wavelength lambda_0 = hc / E_w (nm)
  const thresholdWavelengthNm = Number((hc_eV_nm / currentMetal.workFunctionEv).toFixed(1));
  // Threshold Frequency nu_0 = E_w / h (THz)
  const thresholdFreqThz = Number(((currentMetal.workFunctionEv * e_charge) / (h_J_s * 1e12)).toFixed(1));
  // Incident Frequency nu = c / lambda (THz)
  const incidentFreqThz = Number(((c_m_s / (wavelengthNm * 1e-9)) / 1e12).toFixed(1));

  // Emission Condition: E >= E_w
  const isEmitting = incidentEnergyEv >= currentMetal.workFunctionEv;

  // Maximum Kinetic Energy: K_max = E - E_w (eV)
  const kMaxEv = isEmitting ? Number((incidentEnergyEv - currentMetal.workFunctionEv).toFixed(3)) : 0;
  const kMaxJoules = Number((kMaxEv * e_charge).toExponential(3));

  // Stopping Potential: V_s = K_max / e (Volts)
  const stoppingPotentialV = kMaxEv;

  // Maximum Electron Speed: v_max = sqrt(2 * K_max / m_e) (km/s)
  const maxVelocityKmS = isEmitting
    ? Number((Math.sqrt((2 * kMaxEv * e_charge) / m_e_kg) / 1000).toFixed(1))
    : 0;

  // Spectral Color Mapping for Incident Light
  const getLightColor = (wl: number) => {
    if (wl < 380) return { bg: 'bg-violet-950', text: 'text-violet-300', name: 'أشعة فوق بنفسجية (UV)', border: 'border-violet-500' };
    if (wl <= 450) return { bg: 'bg-indigo-900', text: 'text-indigo-200', name: 'ضوء بنفسجي / أزرق', border: 'border-indigo-400' };
    if (wl <= 490) return { bg: 'bg-cyan-900', text: 'text-cyan-200', name: 'ضوء سماوي / نيلي', border: 'border-cyan-400' };
    if (wl <= 560) return { bg: 'bg-emerald-900', text: 'text-emerald-200', name: 'ضوء أخضر', border: 'border-emerald-400' };
    if (wl <= 590) return { bg: 'bg-yellow-900', text: 'text-yellow-200', name: 'ضوء أصفر', border: 'border-yellow-400' };
    if (wl <= 630) return { bg: 'bg-orange-900', text: 'text-orange-200', name: 'ضوء برتقالي', border: 'border-orange-400' };
    if (wl <= 750) return { bg: 'bg-rose-900', text: 'text-rose-200', name: 'ضوء أحمر', border: 'border-rose-400' };
    return { bg: 'bg-red-950', text: 'text-red-300', name: 'أشعة تحت حمراء (IR)', border: 'border-red-600' };
  };

  const lightColor = getLightColor(wavelengthNm);

  const modalData: HiResImageModalData = {
    imageUrl: einsteinPhoto,
    titleAr: 'بحث ألبرت أينشتاين الأصلي حول كمات الضوء والظاهرة الكهروضوئية (1905م)',
    titleEn: 'Albert Einstein’s 1905 Landmark Annalen der Physik Paper on Photoelectric Quanta',
    subtitleAr: 'معادلة أينشتاين الكهروضوئية، دالة الشغل، جهد الإيقاف، وجهاز أنبوبة الكاثود المفرغة',
    subtitleEn: 'Photoelectric Energy Balance, Work Function, Stopping Potential & Evacuated Phototube Apparatus',
    descriptionAr:
      'وثيقة تاريخية غيرت مجرى الفيزياء المعاصرة نُشرت في مجلة "حوليات الفيزياء" (Annalen der Physik) ببرلين عام 1905م. دشنت فكرة كمات الضوء وازدواجية الموجة والجسيم، وحسمت عجز النظرية الموجية الكلاسيكية عن تفسير انبعاث الإلكترونات الفوري وجهد الإيقاف.',
    descriptionEn:
      'An iconic masterpiece of modern science published in Annalen der Physik (Vol. 17, 1905). Einstein introduced the light quanta hypothesis (photons) and established the linear photoelectric equation K_max = hν - Φ, winning him the 1921 Nobel Prize in Physics.',
    dateOrEraAr: 'سنة أينشتاين المعجزة (Annus Mirabilis 1905م)',
    dateOrEraEn: 'Einstein’s Miracle Year (Annus Mirabilis 1905 CE)',
    locationAr: 'المتحف التاريخي ومتحف أينشتاين، برن، سويسرا',
    locationEn: 'Bern Historical Museum & Einstein Museum, Bern, Switzerland',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
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
                ? 'bg-black border-emerald-400 text-emerald-400'
                : 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-emerald-400/40 shadow-emerald-500/20'
            }`}
          >
            <Sun className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو أينشتاين الأرشيفي 1905: الظاهرة الكهروضوئية وكمات الضوء (4K)'
                  : 'Einstein 1905 Photoelectric: Light Quanta & Stopping Potential Studio (4K)'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-emerald-400 text-black border-emerald-300'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                }`}
              >
                1905 CE · Annus Mirabilis 4K
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'فحص المخطوطة الأصلية للبحث وأنبوبة الخلية الكهروضوئية مع محاكي دالة الشغل وجهد الإيقاف وطاقة حركة الإلكترونات'
                : 'Interactive inspection of Einstein’s 1905 paper & phototube with work function, stopping potential & K_max engine'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-emerald-400 text-black border-emerald-300 hover:bg-emerald-300'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500/40'
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
            src={einsteinPhoto}
            alt="Albert Einstein 1905 Photoelectric Effect Apparatus"
            className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Interactive Pulsing Hotspots */}
          {EINSTEIN_HOTSPOTS.map((spot) => {
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
                    : 'bg-emerald-600/90 text-white border-emerald-300 hover:scale-110 hover:bg-emerald-500 shadow-md'
                }`}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {!isSelected && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
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
              {isArabic ? 'انقر على الدوائر التفاعلية لفحص تفاصيل الظاهرة الكهروضوئية' : 'Click pulsing pins for deep historical inspection'}
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
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Radio className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
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
              <h4 className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قوانين ومعادلات منهج الفيزياء (الفصل الخامس):' : 'Egyptian Curriculum Chapter 5 Formulas:'}</span>
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>

          {/* Quick Hotspot Selectors */}
          <div className="flex flex-wrap gap-1.5">
            {EINSTEIN_HOTSPOTS.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  activeHotspot.id === h.id
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {i + 1}. {isArabic ? h.titleAr.split(':')[0] : h.titleEn.split('(')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Photoelectric Work Function & Stopping Potential Engine */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-100">
              {isArabic
                ? 'محاكي معادلة أينشتاين الكهروضوئية وجهد الإيقاف (K_max = h · ν - E_w = e · V_s)'
                : 'Einstein Photoelectric Work Function & Stopping Potential Simulator'}
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'اختر مادة مهبط الخلية الكهروضوئية وغيّر الطول الموجي للفوتونات الساقطة لملاحظة شرط الانبعاث وطاقة حركة الإلكترونات'
                : 'Select photocathode metal and tune incident photon wavelength to test emission threshold and stopping voltage'}
            </p>
          </div>
        </div>

        {/* Cathode Metal Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          {(Object.keys(metalsData) as Array<keyof typeof metalsData>).map((key) => {
            const m = metalsData[key];
            const isSel = selectedMetal === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedMetal(key)}
                className={`p-2.5 rounded-xl border text-xs font-bold text-start transition-all cursor-pointer ${
                  isSel
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                    : isLight
                    ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] text-emerald-300 font-mono mb-0.5">
                  E_w = {m.workFunctionEv.toFixed(2)} eV
                </div>
                <div className="line-clamp-1">{isArabic ? m.nameAr : m.nameEn}</div>
              </button>
            );
          })}
        </div>

        {/* Wavelength Slider with Spectral Beam Visualizer */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
            <span className="flex items-center gap-2">
              <span>{isArabic ? 'الطول الموجي للضوء الساقط (λ):' : 'Incident Photon Wavelength (λ):'}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${lightColor.bg} ${lightColor.text} ${lightColor.border}`}>
                {lightColor.name}
              </span>
            </span>
            <span className="text-emerald-400 font-mono text-sm">{wavelengthNm} nm</span>
          </div>
          <input
            type="range"
            min={200}
            max={800}
            step={5}
            value={wavelengthNm}
            onChange={(e) => setWavelengthNm(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>200 nm (أشعة فوق بنفسجية)</span>
            <span>طول موجي حرج λ₀ = {thresholdWavelengthNm} nm</span>
            <span>800 nm (أشعة تحت حمراء)</span>
          </div>
        </div>

        {/* Real-Time Photoelectric Calculations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'طاقة الفوتون الساقط (E):' : 'Photon Energy (E):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-cyan-400">
              {incidentEnergyEv} eV
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              ν = {incidentFreqThz} THz
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'دالة الشغل للمعدن (E_w):' : 'Work Function (E_w):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-amber-400">
              {currentMetal.workFunctionEv.toFixed(2)} eV
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              ν₀ = {thresholdFreqThz} THz
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'أقصى طاقة حركة (K_max):' : 'Max Kinetic Energy:'}
            </span>
            <span className={`text-base sm:text-lg font-black font-mono ${isEmitting ? 'text-emerald-400' : 'text-slate-500'}`}>
              {kMaxEv.toFixed(3)} eV
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              {isEmitting ? `${kMaxJoules} J` : 'لا انبعاث (E < E_w)'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'جهد الإيقاف (V_s):' : 'Stopping Potential (V_s):'}
            </span>
            <span className={`text-base sm:text-lg font-black font-mono ${isEmitting ? 'text-purple-400' : 'text-slate-500'}`}>
              {stoppingPotentialV.toFixed(3)} V
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              {isEmitting ? `v_max = ${maxVelocityKmS} km/s` : 'V_s = 0.00 V'}
            </span>
          </div>
        </div>

        {/* Emission Status Banner */}
        <div
          className={`p-3 rounded-xl border text-xs flex flex-wrap items-center justify-between gap-3 ${
            isEmitting
              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
              : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">{isEmitting ? '✅' : '⛔'}</span>
            <div>
              <strong className="block">
                {isEmitting
                  ? isArabic
                    ? 'انبعاث كهروضوئي نشط (E > E_w): تتحرر إلكترونات ضوئية فورياً'
                    : 'Photoemission Active (E > E_w): Photoelectrons liberated instantaneously'
                  : isArabic
                  ? 'لا يحدث أي انبعاث كهروضوئي (E < E_w): طاقة الفوتون غير كافية لتحرير الإلكترون'
                  : 'No Photoelectric Emission (E < E_w): Incident photon lacks energy to overcome work function'}
              </strong>
              <span className="text-[11px] opacity-80">
                {isEmitting
                  ? isArabic
                    ? `الإلكترونات تتحرر بسرعة عظمى تصل إلى ${maxVelocityKmS} كم/ثانية، ويتطلب إيقافها جهداً عاكساً قدره ${stoppingPotentialV.toFixed(3)} فولت`
                    : `Electrons ejected with max speed of ${maxVelocityKmS} km/s; stopping potential is ${stoppingPotentialV.toFixed(3)} V`
                  : isArabic
                  ? `يجب تقصير الطول الموجي ليكون أقل من الطول الموجي الحرج (λ ≤ ${thresholdWavelengthNm} nm)`
                  : `Incident wavelength must be shorter than threshold λ ≤ ${thresholdWavelengthNm} nm`}
              </span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
            e·V_s = h·ν - E_w
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
