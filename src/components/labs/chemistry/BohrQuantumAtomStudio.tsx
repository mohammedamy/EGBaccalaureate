import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  CircleDot,
  Radio,
} from 'lucide-react';
import bohrPhoto from '../../../assets/chemistry/bohr_quantum_atom_1913.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface BohrHotspot {
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

export const BOHR_HOTSPOTS: BohrHotspot[] = [
  {
    id: 'bohr_quantum_postulates',
    xPct: 52.0,
    yPct: 35.0,
    titleAr: 'فرضيات بور المدارية وتكميم كمية التحرك الزاوي (L = n · h/2π)',
    titleEn: 'Bohr’s Stationary Orbits & Angular Momentum Quantization',
    categoryAr: 'الفيزياء الذرية الكمية',
    categoryEn: 'Quantum Atomic Postulates',
    descAr:
      'افترض نيلز بور أن الإلكترون يدور حول النواة في مدارات دائرية ثابتة ومحددة لا يشع فيها أي طاقة (مدارات مستقرة). وتكون كمية التحرك الزاوي للإلكترون مكممة وتساوي مضاعفات صحيحة لثابت بلانك مقسوماً على 2π.',
    descEn:
      'Niels Bohr postulated that electrons circulate the atomic nucleus in fixed, stationary circular orbits without radiating energy. The orbital angular momentum is strictly quantized in integer multiples of h/2π (L = m_e · v · r = n · ħ).',
    scientificProofAr:
      'حل هذا الفرض معضلة الفيزياء الكلاسيكية (معادلات ماكسويل) التي كانت تتنبأ بسقوط الإلكترون حلزونياً في النواة خلال 10⁻¹¹ ثانية وانهيار الذرة كلياً.',
    scientificProofEn:
      'Overcame classical electrodynamics catastrophe where accelerated orbiting charges were predicted to radiate continuously and spiral into the nucleus within 10⁻¹¹ seconds.',
  },
  {
    id: 'balmer_visible_series',
    xPct: 60.0,
    yPct: 88.0,
    titleAr: 'سلسلة بالمر الطيفية المرئية لذرة الهيدروجين (Balmer Visible Series)',
    titleEn: 'Balmer Visible Spectral Series (n_f = 2, Hα, Hβ, Hγ, Hδ)',
    categoryAr: 'الأطياف الذرية الخطية',
    categoryEn: 'Atomic Emission Spectroscopy',
    descAr:
      'مخطط الخطوط الأربعة المرئية لطيف انبعاث ذرة الهيدروجين الناتجة عن عودة الإلكترون من المدارات العليا إلى المدار الثاني (n=2): الأحمر Hα (656.3 نانومتر)، السيان Hβ (486.1 نانومتر)، الأزرق Hγ (434.0 نانومتر)، والبنفسجي Hδ (410.2 نانومتر).',
    descEn:
      'The four visible lines of the hydrogen atomic emission spectrum produced by electronic de-excitation to the n=2 principal level: red Hα (656.3 nm), cyan Hβ (486.1 nm), blue Hγ (434.0 nm), and violet Hδ (410.2 nm).',
    scientificProofAr:
      'طيف الانبعاث الخطي خاصية مميزة وفريدة لكل عنصر كيميائي كبصمة الإصبع، مكنت من الكشف عن تركيب النجوم والمجرات وتحديد نوع الغازات المتوهجة في الفضاء.',
    scientificProofEn:
      'Line emission spectra serve as unequivocal elemental atomic fingerprints, enabling astrophysical determination of stellar chemical compositions.',
  },
  {
    id: 'orbital_radii_quantization',
    xPct: 48.0,
    yPct: 22.0,
    titleAr: 'تكميم نصف قطر المدارات ونصف قطر بور (rₙ = n² · a₀)',
    titleEn: 'Orbital Radii Quantization & First Bohr Radius (a₀ = 0.529 Å)',
    categoryAr: 'الأبعاد الذرية والمستويات',
    categoryEn: 'Atomic Dimensions & Orbit Radii',
    descAr:
      'أثبت بور أن أنصاف أقطار المدارات تتناسب مع مربع العدد الكمي الرئيسي (n²). نصف قطر المدار الأول للهيدروجين a₀ يساوي 0.529 أنجستروم (5.29 × 10⁻¹¹ م)، بينما المدار الرابع يتسع لـ 16 ضعفاً.',
    descEn:
      'Demonstrated atomic radii scale with the square of the principal quantum number (r_n = n² · a₀). The ground state radius a₀ = 0.529 Å (0.0529 nm), expanding 16-fold by the n=4 shell.',
    scientificProofAr:
      'تكميم المدارات يُفسر الحجم الحقيقي المستقر للذرات وتفسير أطوال الروابط الكيميائية والتآصل في شبكات المعادن والمركبات في منهج الكيمياء للثانوية العامة.',
    scientificProofEn:
      'Directly explains empirical interatomic distances, covalent bond lengths, and microscopic crystal cell dimensions.',
  },
  {
    id: 'photon_energy_frequency',
    xPct: 62.0,
    yPct: 28.0,
    titleAr: 'شرط بلانك-أينشتاين لانبعاث الفوتون (ΔE = hν = E₂ - E₁)',
    titleEn: 'Planck-Einstein Photon Emission Condition (ΔE = hν = E_upper - E_lower)',
    categoryAr: 'ميكانيكا الكم وإشعاع الفوتون',
    categoryEn: 'Quantum Photonic Transitions',
    descAr:
      'عندما يهبط الإلكترون من مستوى طاقة أعلى E₂ إلى مستوى أدنى E₁، تشع الذرة فوتوناً يحمل طاقة مكافئة تماماً لفارق الطاقتين: ΔE = hν = hc/λ، حيث h هو ثابت بلانك و c سرعة الضوء.',
    descEn:
      'When an electron drops from a higher shell E_upper to a lower shell E_lower, the atom releases a discrete photon carrying exact quantum difference: ΔE = hν = hc/λ.',
    scientificProofAr:
      'معادلة رادبرج 1/λ = R_H (1/n₁² - 1/n₂²) تشتق رياضياً من ثوابت كولوم والكتلة وشحنة الإلكترون، متوافقة بدقة 99.99% مع القياسات المعملية المطيافية.',
    scientificProofEn:
      'Rydberg equation 1/λ = R_H (1/n_f² - 1/n_i²) derived rigorously from first principles (electron mass, charge, permittivity, Planck constant) matches experimental lines to 5 decimal places.',
  },
  {
    id: 'heisenberg_schrodinger_quantum_mechanics',
    xPct: 40.0,
    yPct: 60.0,
    titleAr: 'تطور النموذج إلى الميكانيكا الموجية والسحابة الإلكترونية',
    titleEn: 'Evolution to Wave Mechanics, Orbitals & Heisenberg Uncertainty',
    categoryAr: 'النظرية الذرية الحديثة',
    categoryEn: 'Modern Wave-Mechanical Orbitals',
    descAr:
      'رغم عبقرية بور، عجز نموذجه عن تفسير طيف الذرات عديدة الإلكترونات وتأثير زيمان المغناطيسي. طور دي بروي وشرودنجر وهايزنبرج مفهوم "الأوربيتال الذري" كمنطقة فراغية ثلاثية الأبعاد حول النواة يزداد فيها احتمال تواجد الإلكترون.',
    descEn:
      'While groundbreaking, Bohr’s 2D planetary model could not explain multi-electron spectra or Zeeman magnetic splitting. De Broglie, Schrödinger, and Heisenberg evolved it into 3D quantum mechanical orbitals (s, p, d, f) and probability density clouds.',
    scientificProofAr:
      'مبدأ عدم التأكد لهايزنبرج (Δx · Δp ≥ h/4π) أثبت استحالة تحديد موقع وسرعة الإلكترون بدقة معاً في نفس الوقت، مستبدلاً فكرة المدار الدائري الثابت بالسحابة الإلكترونية الحديثة.',
    scientificProofEn:
      'Heisenberg Uncertainty Principle (Δx · Δp ≥ ℏ/2) proved exact simultaneous determination of electron position and velocity is physically impossible, replacing fixed orbits with probability wavefunctions.',
  },
];

export const BohrQuantumAtomStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<BohrHotspot>(BOHR_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Quantum Transition & Spectral Simulator
  const [initialN, setInitialN] = useState<number>(3); // n_initial (upper): 2 to 7
  const [finalN, setFinalN] = useState<number>(2); // n_final (lower): 1 to 6 (must be < initialN)

  // Energy levels: E_n = -13.6 / n^2 eV
  const eInitial = -13.6 / (initialN * initialN);
  const eFinal = -13.6 / (finalN * finalN);
  const deltaE_eV = eInitial - eFinal; // positive for emission

  // Wavelength: lambda = hc / deltaE
  // hc = 1239.84 eV * nm
  const wavelength_nm = deltaE_eV > 0 ? Number((1239.84 / deltaE_eV).toFixed(1)) : 0;
  // Frequency: nu = deltaE / h
  // 1 eV = 1.60218e-19 J, h = 6.62607e-34 J*s => nu = deltaE_eV * 2.41799e14 Hz
  const frequency_THz = deltaE_eV > 0 ? Number((deltaE_eV * 241.799).toFixed(1)) : 0;

  // Determine Series Name
  const getSeriesInfo = (nf: number) => {
    switch (nf) {
      case 1:
        return { nameAr: 'سلسلة ليمان (Lyman)', nameEn: 'Lyman Series', regionAr: 'فوق بنفسجية (UV)', regionEn: 'Ultraviolet (UV)' };
      case 2:
        return { nameAr: 'سلسلة بالمر (Balmer)', nameEn: 'Balmer Series', regionAr: 'طيف مرئي (Visible)', regionEn: 'Visible Spectrum' };
      case 3:
        return { nameAr: 'سلسلة باشن (Paschen)', nameEn: 'Paschen Series', regionAr: 'تحت حمراء قريبة (Near IR)', regionEn: 'Near Infrared (IR)' };
      case 4:
        return { nameAr: 'سلسلة براكت (Brackett)', nameEn: 'Brackett Series', regionAr: 'تحت حمراء متوسطة (Mid IR)', regionEn: 'Mid Infrared (IR)' };
      case 5:
        return { nameAr: 'سلسلة فوند (Pfund)', nameEn: 'Pfund Series', regionAr: 'تحت حمراء بعيدة (Far IR)', regionEn: 'Far Infrared (IR)' };
      default:
        return { nameAr: 'سلسلة هومفريز (Humphreys)', nameEn: 'Humphreys Series', regionAr: 'تحت حمراء أقصى (Far IR)', regionEn: 'Far Infrared (IR)' };
    }
  };

  const seriesInfo = getSeriesInfo(finalN);

  // Spectral line color mapping
  const getSpectralColor = (wl: number) => {
    if (wl < 380) return { bg: 'bg-violet-950', text: 'text-violet-300', hex: '#6366f1' };
    if (wl <= 420) return { bg: 'bg-purple-600', text: 'text-purple-100', hex: '#9333ea' }; // H-delta 410.2 nm
    if (wl <= 450) return { bg: 'bg-blue-600', text: 'text-blue-100', hex: '#2563eb' }; // H-gamma 434.0 nm
    if (wl <= 500) return { bg: 'bg-cyan-500', text: 'text-cyan-950', hex: '#06b6d4' }; // H-beta 486.1 nm
    if (wl <= 580) return { bg: 'bg-emerald-500', text: 'text-emerald-950', hex: '#10b981' };
    if (wl <= 620) return { bg: 'bg-amber-500', text: 'text-amber-950', hex: '#f59e0b' };
    if (wl <= 750) return { bg: 'bg-rose-600', text: 'text-white', hex: '#e11d48' }; // H-alpha 656.3 nm
    return { bg: 'bg-red-950', text: 'text-rose-300', hex: '#881337' }; // IR
  };

  const spectralColor = getSpectralColor(wavelength_nm);

  const modalData: HiResImageModalData = {
    imageUrl: bohrPhoto,
    titleAr: 'بحث نيلز بور الأصلي: حول تركيب الذرات والجزيئات (1913م)',
    titleEn: 'Niels Bohr’s 1913 Philosophical Magazine Paper: On the Constitution of Atoms',
    subtitleAr: 'المدارات المستقرة المكممة، انبعاث الفوتونات، وسلسلة بالمر المرئية للهيدروجين',
    subtitleEn: 'Quantized Stationary Orbits, Photon Radiation (hν = E₂ - E₁), and Balmer Visible Spectrum',
    descriptionAr:
      'نشر هذا البحث الثوري في المجلة الفلسفية (Philosophical Magazine) بلندن عام 1913 بتوصية من إرنست روثرفورد، وأسس للفيزياء والكيمياء الكمية الحديثة عبر ربط ثوابت بلانك وأينشتاين ببنية الذرة المادية.',
    descriptionEn:
      'Published in the Philosophical Magazine in 1913 with sponsorship from Ernest Rutherford, Bohr’s trilogy unraveled atomic structure by blending Planck’s quantum of action with classical orbital mechanics.',
    dateOrEraAr: 'عصر ميكانيكا الكم والفيزياء الذرية الحديثة (1913م)',
    dateOrEraEn: 'Dawn of Quantum Mechanics & Atomic Physics (1913 CE)',
    locationAr: 'معهد نيلز بور وجامعة كوبنهاغن، الدنمارك',
    locationEn: 'Niels Bohr Institute, University of Copenhagen, Denmark',
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
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
            <CircleDot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                1913 CE • Quantum Atom
              </span>
              <span className="text-xs text-emerald-500/80 font-mono">4K Archival Paper</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو نيلز بور ونموذج الذرة الكمي وأطياف الهيدروجين (1913م)'
                : 'Bohr 1913: Quantum Atomic Model & Hydrogen Spectroscopy'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير وثيقة بور 4K' : 'Inspect 4K Paper'}</span>
        </button>
      </div>

      {/* 4K Archival Canvas with Hotspot Markers */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={bohrPhoto}
          alt="Niels Bohr 1913 Quantum Atom Paper"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Pulsing Hotspots */}
        {BOHR_HOTSPOTS.map((h) => {
          const isActive = activeHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-transform ${
                isActive ? 'scale-125' : 'hover:scale-110'
              }`}
              title={isArabic ? h.titleAr : h.titleEn}
              aria-label={isArabic ? h.titleAr : h.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-emerald-400' : 'bg-emerald-500/50'
                  }`}
                />
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-emerald-400 border-white text-black'
                      : 'bg-black/80 border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                </span>
              </div>
            </button>
          );
        })}

        {/* Bottom Metadata Ribbon */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-300">
            <span>{isArabic ? '📜 الورقة العلمية الأصلية: Philosophical Magazine (1913)' : '📜 Original Landmark Paper: Philosophical Magazine (1913)'}</span>
            <span>•</span>
            <span>{isArabic ? '⚛️ المدارات المكممة L = n·h/2π • سلسلة بالمر Hα 656.3nm' : '⚛️ Quantized Orbits L = n·h/2π • Balmer Hα 656.3nm'}</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            {isArabic ? 'انقر على النقاط الذهبية للفحص' : 'Click pulsing markers for deep analysis'}
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-emerald-50/60 border-emerald-200 shadow-xs'
            : 'bg-emerald-950/20 border-emerald-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block font-mono">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-emerald-400">
                {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
              </h3>
            </div>
          </div>
        </div>

        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
        </p>

        <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
          <span className="font-black text-emerald-400 flex items-center gap-1.5 mb-1">
            <Info className="w-4 h-4 shrink-0" />
            <span>{isArabic ? 'البرهان الكمي والاستنتاج الوزاري:' : 'Quantum Spectral Proof & MoE Focus:'}</span>
          </span>
          <p className={isLight ? 'text-slate-800 font-medium' : 'text-slate-200'}>
            {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
          </p>
        </div>
      </div>

      {/* Interactive Hydrogen Spectral Emission & Quantum Transition Simulator */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-white border-slate-200 shadow-sm'
            : 'bg-slate-900/90 border-slate-800 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-emerald-500/20 flex-wrap">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-emerald-400">
              {isArabic
                ? 'محاكي قفزات الإلكترون وانبعاث خطوط طيف الهيدروجين (Quantum Transitions)'
                : 'Hydrogen Quantum Transition & Spectral Emission Simulator'}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            ΔE = E_initial - E_final = hc / λ
          </span>
        </div>

        {/* Orbit Selection Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-slate-300">
                {isArabic ? 'المدار الابتدائي الأعلى (n_initial):' : 'Initial Higher Orbit (n_initial):'}
              </span>
              <span className="text-amber-400 font-mono text-sm">n = {initialN} ({eInitial.toFixed(2)} eV)</span>
            </div>
            <input
              type="range"
              min="2"
              max="7"
              step="1"
              value={initialN}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setInitialN(val);
                if (finalN >= val) setFinalN(val - 1);
              }}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-slate-300">
                {isArabic ? 'المدار النهائي الأدنى (n_final):' : 'Final Lower Orbit (n_final):'}
              </span>
              <span className="text-emerald-400 font-mono text-sm">n = {finalN} ({eFinal.toFixed(2)} eV)</span>
            </div>
            <input
              type="range"
              min="1"
              max={Math.max(1, initialN - 1)}
              step="1"
              value={finalN}
              onChange={(e) => setFinalN(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Quantum Emission Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'طاقة الفوتون المنبعث (ΔE):' : 'Emitted Photon Energy (ΔE):'}
            </span>
            <span className="text-lg font-black text-amber-400">{deltaE_eV.toFixed(3)} eV</span>
            <span className="text-[10px] text-slate-500 mt-1 font-sans">
              {isArabic ? `قفزة: n=${initialN} → n=${finalN}` : `Leap: n=${initialN} → n=${finalN}`}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'الطول الموجي للفوتون (λ):' : 'Photon Wavelength (λ):'}
            </span>
            <span className="text-lg font-black text-emerald-400">{wavelength_nm} nm</span>
            <span className="text-[10px] text-slate-500 mt-1">{(wavelength_nm * 10).toFixed(1)} Å</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'تردد الإشعاع (ν):' : 'Radiation Frequency (ν):'}
            </span>
            <span className="text-lg font-black text-cyan-400">{frequency_THz} THz</span>
            <span className="text-[10px] text-slate-500 mt-1 font-mono">
              {(frequency_THz * 1e12).toExponential(3)} Hz
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'السلسلة الطيفية التابعة لها:' : 'Spectroscopic Series:'}
            </span>
            <span className="text-sm font-sans font-bold text-white">
              {isArabic ? seriesInfo.nameAr : seriesInfo.nameEn}
            </span>
            <span className="text-[10px] text-emerald-400 mt-1 font-sans">
              {isArabic ? seriesInfo.regionAr : seriesInfo.regionEn}
            </span>
          </div>
        </div>

        {/* Visual Spectral Line Bar */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-300">
              {isArabic ? 'التمثيل اللوني لخط الطيف المنبعث:' : 'Visual Spectral Line Representation:'}
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-200">
              λ = {wavelength_nm} nm
            </span>
          </div>

          <div
            className={`w-full h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-inner transition-colors duration-500 ${spectralColor.bg} ${spectralColor.text}`}
          >
            <span>
              {isArabic
                ? `خط الطيف: ${wavelength_nm} nm (${seriesInfo.regionAr})`
                : `Spectral Line: ${wavelength_nm} nm (${seriesInfo.regionEn})`}
            </span>
          </div>
        </div>
      </div>

      {/* 4K Modal Integration */}
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
