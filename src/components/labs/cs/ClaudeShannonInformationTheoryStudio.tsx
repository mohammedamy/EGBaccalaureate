import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Binary,
  Activity,
  Sliders,
  Radio,
} from 'lucide-react';
import shannonPhoto from '../../../assets/cs/shannon_communication_theory_1948.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface ShannonHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const SHANNON_HOTSPOTS: ShannonHotspot[] = [
  {
    id: 'shannon_communication_system_diagram',
    xPct: 24.0,
    yPct: 45.0,
    titleAr: 'المخطط العام لمنظومة الاتصالات (General Communication System)',
    titleEn: 'Schematic Diagram of a General Communication System',
    categoryAr: 'النموذج البنيوي للاتصالات',
    categoryEn: 'Structural Communication Model',
    descAr:
      'المخطط الكتلي الشهير الذي وضعه شانون في الشكل 1: مصدر المعلومات (Information Source) ← جهاز الإرسال (Transmitter) ← قناة الاتصال مع مصدر الضوضاء (Noise Source) ← جهاز الاستقبال (Receiver) ← وجهة الرسالة (Destination).',
    descEn:
      'Shannon’s seminal Figure 1 block diagram: Information Source → Transmitter → Channel (with additive Noise Source) → Receiver → Destination, standardizing all telecommunication architectures.',
    scientificInsightAr:
      'فصل شانون للمرة الأولى بين المعنى الدلالي للرسالة (Semantics) وبين بنيتها الهندسية الرياضية القابلة للإرسال الرقمي.',
    scientificInsightEn:
      'Shannon explicitly decoupled semantic meaning from engineering transmission, establishing that the fundamental problem of communication is reproducing at one point a message selected at another.',
  },
  {
    id: 'shannon_entropy_formula',
    xPct: 28.0,
    yPct: 65.0,
    titleAr: 'معادلة إنتروبيا المعلومات (Information Entropy H = -Σ p log p)',
    titleEn: 'Information Entropy Formula (H = -Σ p log₂ p)',
    categoryAr: 'القياس الكمي للمعلومة',
    categoryEn: 'Quantification of Information',
    descAr:
      'الصيغة الرياضية التي استعارها شانون من الديناميكا الحرارية لقياس مقدار "اللايقين" (Uncertainty) والمحتوى المعلوماتي لأي مصدر عشوائي بوحدة "البت" (Bit - Binary Digit)، وهي التسمية التي وثقها لأول مرة باقتراح من جون توكي.',
    descEn:
      'The mathematical formula adapted from statistical thermodynamics quantifying the average uncertainty and information content of a probabilistic source in "bits" (binary digits, coined in this paper).',
    scientificInsightAr:
      'تصل الإنتروبيا إلى حدها الأقصى (1 بت/رمز للرمز الثنائي) عندما تكون جميع الاحتمالات متساوية تماماً (أقصى عشوائية).',
    scientificInsightEn:
      'Entropy peaks at exactly 1 bit/symbol for an unbiased binary source (p = 0.5), mathematically defining maximum unpredictability and surprise.',
  },
  {
    id: 'shannon_hartley_channel_capacity',
    xPct: 32.0,
    yPct: 78.0,
    titleAr: 'قانون سعة القناة وسرعة النقل القصوى (C = B log₂(1 + SNR))',
    titleEn: 'Shannon-Hartley Channel Capacity Law (C = B log₂(1 + S/N))',
    categoryAr: 'الحدود الفيزيائية لنقل البيانات',
    categoryEn: 'Physical Limits of Data Transmission',
    descAr:
      'المعادلة التي تحدد الحد الأقصى النظري المطلق لمعدل نقل البيانات الخالية من الأخطاء عبر قناة ذات عرض نطاق ترددي (B) ونسبة إشارة إلى ضوضاء (SNR). أثبت شانون أنه مهما كانت الضوضاء موجودة، يمكن نقل البيانات دون خطأ طالما أن المعدل أقل من C.',
    descEn:
      'The equation defining the theoretical maximum rate of error-free information transfer over a channel of bandwidth B in the presence of noise: C = B log₂(1 + S/N). It proves error-free transmission is physically possible below capacity.',
    scientificInsightAr:
      'أسقطت هذه المعادلة الاعتقاد الهندسي السائد سابقاً بأن زيادة سرعة الإرسال تقتضي حتماً زيادة معدل الأخطاء.',
    scientificInsightEn:
      'Shattered the pre-1948 engineering myth that increasing data rate inevitably increased transmission errors, introducing error-correcting codes.',
  },
  {
    id: 'noisy_channel_coding_theorem',
    xPct: 52.0,
    yPct: 45.0,
    titleAr: 'مبرهنة تشفير القناة ذات الضوضاء (Noisy-Channel Coding Theorem)',
    titleEn: 'Noisy-Channel Coding Theorem & Error Correction',
    categoryAr: 'نظرية التشفير وتصحيح الأخطاء',
    categoryEn: 'Coding Theory & Error Correction',
    descAr:
      'البرهان الرياضي على وجود خوارزميات تشفير (Error-Correcting Codes) قادرة على اكتشاف وتصحيح الأخطاء الناتجة عن التشويش والضوضاء، مما يسمح بنقل موثوق بنسبة 100% عبر وسائط مشوشة (كالفضاء السحيق والإنترنت).',
    descEn:
      'The non-constructive proof that error-correcting codes exist such that information can be transmitted at any rate below channel capacity with an arbitrarily small probability of bit error.',
    scientificInsightAr:
      'فتحت هذه المبرهنة الباب لرموز هامينج، وريد-سولومون، وتوربو كود، وLDPC المستخدمة في هواتف 5G والأقمار الصناعية اليوم.',
    scientificInsightEn:
      'Paved the way for Hamming codes, Reed-Solomon codes, Turbo codes, and LDPC algorithms powering modern 5G cellular modems and deep space probes.',
  },
  {
    id: 'bell_labs_oscilloscope_hardware',
    xPct: 78.0,
    yPct: 48.0,
    titleAr: 'راسم الذبذبات التناظري وصمامات مختبرات بل (Bell Labs Hardware)',
    titleEn: 'Vintage Laboratory Oscilloscope & Vacuum Tubes',
    categoryAr: 'العتاد التجريبي في عصر الصمامات',
    categoryEn: 'Experimental Electronic Telephony Hardware',
    descAr:
      'راسم الإشارة (Oscilloscope) بشاشته الخضراء الفسفورية الموضحة بجانب الورقة والتي ترسم إشارات النبضات المشوشة بالضوضاء الحرارية، مع الصمامات المفرغة الزجاجية (Vacuum Tubes) في مختبرات شركة بل للهواتف في نيوجيرسي.',
    descEn:
      'The glowing green phosphor cathode-ray tube oscilloscope pictured beside the monograph displaying high-frequency Gaussian noise overlaid on binary pulse waveforms, alongside period triode vacuum tubes from Bell Telephone Laboratories.',
    scientificInsightAr:
      'كانت أبحاث شانون استجابة مباشرة لتحديات التشويش في كابلات الهاتف المحيطية وشبكات الرادار خلال الحرب العالمية الثانية.',
    scientificInsightEn:
      'Shannon’s theory directly resolved wartime transatlantic telephone cable noise, secret cryptography, and microwave radar communication bottlenecks.',
  },
];

interface ChannelPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  bandwidthKhz: number;
  snrDb: number;
  descriptionAr: string;
  descriptionEn: string;
}

const CHANNEL_PRESETS: ChannelPreset[] = [
  {
    id: 'telephone_line',
    nameAr: 'خط هاتف تناظري قديم (Voice Telephone Line)',
    nameEn: 'Voice Telephone Line (POTS)',
    bandwidthKhz: 3.4,
    snrDb: 30,
    descriptionAr: 'نطاق هاتف كلاسيكي 3.4 كيلوهرتز مع نسبة إشارة إلى ضوضاء 30 ديسيبل (معدل مودم 56k V.90).',
    descriptionEn: 'Classic 3.4 kHz audio band with 30 dB SNR, yielding the theoretical limit for 56k dial-up modems.',
  },
  {
    id: 'deep_space_probe',
    nameAr: 'مسبار الفضاء السحيق (Voyager Deep Space Link)',
    nameEn: 'Deep Space Probe Link (Voyager)',
    bandwidthKhz: 20,
    snrDb: -2,
    descriptionAr: 'قناة إرسال فضائية ضعيفة جداً تبتلعها الضوضاء الكونية (SNR سالب = -2 dB).',
    descriptionEn: 'Extremely faint deep space signal overwhelmed by cosmic microwave noise (negative SNR of -2 dB).',
  },
  {
    id: 'fiber_optic_channel',
    nameAr: 'الألياف الضوئية المتقدمة (Fiber Optic Segment)',
    nameEn: 'Fiber Optic Sub-band',
    bandwidthKhz: 150,
    snrDb: 35,
    descriptionAr: 'نطاق رقمي فائق العرض مع تشويش حراري منخفض جداً ونسبة إشارة نقية 35 ديسيبل.',
    descriptionEn: 'High-bandwidth digital channel with negligible thermal distortion and crystalline 35 dB SNR.',
  },
];

export const ClaudeShannonInformationTheoryStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<ShannonHotspot>(SHANNON_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Entropy simulator state: binary probability p
  const [probP, setProbP] = useState<number>(0.5);

  // Channel Capacity simulator state
  const [bandwidthKhz, setBandwidthKhz] = useState<number>(50);
  const [snrDb, setSnrDb] = useState<number>(20);

  // Calculations
  const entropyBits = useMemo(() => {
    if (probP <= 0 || probP >= 1) return 0;
    const q = 1 - probP;
    const h = -(probP * Math.log2(probP) + q * Math.log2(q));
    return Number(h.toFixed(4));
  }, [probP]);

  const redundancyPct = useMemo(() => {
    return Number(((1 - entropyBits) * 100).toFixed(1));
  }, [entropyBits]);

  const { snrLinear, capacityKbitSec } = useMemo(() => {
    const linear = Math.pow(10, snrDb / 10);
    // C = B * log2(1 + SNR) in kbit/s (since B is in kHz)
    const cap = bandwidthKhz * Math.log2(1 + linear);
    return {
      snrLinear: Number(linear.toFixed(2)),
      capacityKbitSec: Number(cap.toFixed(2)),
    };
  }, [bandwidthKhz, snrDb]);

  const handleApplyPreset = (preset: ChannelPreset) => {
    setBandwidthKhz(preset.bandwidthKhz);
    setSnrDb(preset.snrDb);
  };

  const handleReset = () => {
    setProbP(0.5);
    setBandwidthKhz(50);
    setSnrDb(20);
  };

  const modalData: HiResImageModalData = {
    imageUrl: shannonPhoto,
    titleAr: 'بحث كلود شانون التأسيسي (1948) — النظرية الرياضية للاتصالات',
    titleEn: 'Claude Shannon’s Foundational 1948 Monograph — A Mathematical Theory of Communication',
    subtitleAr: 'المجلة التقنية لمختبرات بل (The Bell System Technical Journal, Vol. 27)',
    subtitleEn: 'The Magna Carta of the Information Age & Mathematical Digital Theory',
    descriptionAr:
      'صورة أرشيفية نادرة بدقة 4K للمجلد 27 الأصلي الصادر في يوليو وأكتوبر 1948 من مجلة مختبرات بيل للهواتف بنيوجيرسي، متضمناً الورقة البحثية التي أسست العصر الرقمي الحديث. تعرض الصفحة المخطط العام لمنظومة الاتصالات ومعادلة إنتروبيا المعلومات وقانون سعة القناة C، محاطة براسم ذبذبات تناظري أصلي وصمامات إلكترونية مفرغة.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of Claude Shannon’s epochal July 1948 Bell System Technical Journal paper "A Mathematical Theory of Communication". The folio displays the universal communication block model, the logarithmic information entropy formula H = -Σ p log p, and channel capacity C = B log₂(1 + S/N), shown alongside period telecommunications vacuum tubes and a phosphor green cathode ray oscilloscope.',
    locationAr: 'أرشيف مختبرات بل / معهد ماساتشوستس للتكنولوجيا (MIT)',
    locationEn: 'Bell Labs Archives / MIT Institute Archives, Murray Hill, NJ',
    dateOrEraAr: '1948 ميلادية (ميلاد عصر المعلومات)',
    dateOrEraEn: '1948 CE (Birth of the Information Age)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/40 border-emerald-900/40 text-slate-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* 4K Archival Viewer Modal */}
      {isModalOpen && (
        <HiResImageModal
          data={modalData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={isArabic ? 'ar' : 'en'}
          theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
        />
      )}

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 flex items-center justify-center shadow-lg shadow-emerald-600/30 text-white">
            <Radio className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                1948 CE • Bell Labs
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'البت وإنتروبيا المعلومات' : 'The Bit & Information Entropy'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              {isArabic
                ? 'استوديو كلود شانون: نظرية المعلومات، الإنتروبيا، وسعة القناة'
                : 'Claude Shannon & Information Theory: Entropy & Channel Capacity'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص وثيقة شانون بدقة 4K' : 'Inspect 4K Shannon Paper'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={shannonPhoto}
              alt="Claude Shannon 1948 Information Theory Folio"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {SHANNON_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] p-2 flex items-center justify-center cursor-pointer transition-all z-20 group/marker`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <span className="relative flex h-7 w-7 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-black shadow-lg ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125'
                          : 'bg-emerald-700/90 text-white border border-teal-300'
                      }`}
                    >
                      ★
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Badge overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-800/40 text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'انقر على العلامات النجمية لفحص معادلات ومخططات شانون' : 'Click stars to inspect Shannon’s formulas & system diagrams'}
              </span>
              <span className="text-amber-400 font-bold">5 {isArabic ? 'محطات تحليلية' : 'Hotspots'}</span>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Deep Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-emerald-800/30 bg-slate-900/60 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-emerald-800/30 pb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isArabic ? 'مفهوم شانوني' : 'Information Law'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-emerald-200">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-700/30 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Binary className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر التأسيسي في تكنولوجيا الاتصالات الحديثة:' : 'Modern Telecommunications Impact:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-emerald-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Information Entropy & Shannon-Hartley Capacity */}
      <div className="p-5 sm:p-6 rounded-2xl border border-emerald-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-200">
              <Activity className="w-5 h-5 text-teal-400" />
              <span>
                {isArabic
                  ? 'محاكي إنتروبيا المعلومات وسعة القناة (Entropy & Shannon-Hartley Capacity)'
                  : 'Information Entropy & Shannon-Hartley Capacity Engine'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'تحكم باحتمالية الرموز، وعرض النطاق الترددي، ونسبة الإشارة إلى الضوضاء لمشاهدة تأثيرها الحي على سعة القناة'
                : 'Tune source symbol probability, bandwidth, and signal-to-noise ratio to simulate channel limits'}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">{isArabic ? 'قنوات نموذجية:' : 'Presets:'}</span>
            {CHANNEL_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset)}
                className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
              >
                {isArabic ? preset.nameAr : preset.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Engine Grid: Section 1 (Entropy) + Section 2 (Channel Capacity) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section 1: Binary Information Entropy H(p) */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? '1. إنتروبيا المصدر الثنائي H(p)' : '1. Binary Source Entropy H(p)'}</span>
              </h4>
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono text-xs font-bold">
                H = {entropyBits} bit/symbol
              </span>
            </div>

            {/* Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                <span>{isArabic ? 'احتمال الرمز 1 (Probability p):' : 'Symbol 1 Probability (p):'}</span>
                <span className="text-amber-300 font-bold">{probP.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={probP}
                onChange={(e) => setProbP(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer min-h-[44px]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>p = 0.0 (يقين تام)</span>
                <span>p = 0.5 (أقصى عشوائية 1 بت)</span>
                <span>p = 1.0 (يقين تام)</span>
              </div>
            </div>

            {/* SVG Entropy Bell Curve */}
            <div className="w-full py-2">
              <svg viewBox="0 0 320 140" className="w-full h-auto select-none">
                {/* Background grid */}
                <line x1="30" y1="120" x2="300" y2="120" stroke="#334155" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="120" stroke="#334155" strokeWidth="1" />
                <line x1="30" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3 3" />

                {/* Y-axis labels */}
                <text x="25" y="24" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">1.0</text>
                <text x="25" y="72" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="monospace">0.5</text>
                <text x="25" y="122" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="monospace">0.0</text>

                {/* X-axis labels */}
                <text x="30" y="134" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">0</text>
                <text x="165" y="134" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">0.5</text>
                <text x="300" y="134" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">1.0</text>

                {/* Theoretical Shannon Entropy curve H(p) */}
                <path
                  d={`M ${Array.from({ length: 55 })
                    .map((_, i) => {
                      const pVal = 0.01 + (i / 54) * 0.98;
                      const qVal = 1 - pVal;
                      const hVal = -(pVal * Math.log2(pVal) + qVal * Math.log2(qVal));
                      const x = 30 + pVal * 270;
                      const y = 120 - hVal * 100;
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    })
                    .join(' L ')}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />

                {/* Active Operating Point */}
                {(() => {
                  const activeX = 30 + probP * 270;
                  const activeY = 120 - entropyBits * 100;
                  return (
                    <g>
                      <line x1={activeX} y1={activeY} x2={activeX} y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx={activeX} cy={activeY} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Redundancy Metric */}
            <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400">{isArabic ? 'معدل الحشو الإضافي (Redundancy R):' : 'Source Redundancy (R):'}</span>
              <span className="text-cyan-300 font-bold">{redundancyPct}%</span>
            </div>
          </div>

          {/* Section 2: Shannon-Hartley Channel Capacity C = B log2(1 + SNR) */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2">
                <Radio className="w-4 h-4 text-teal-400" />
                <span>{isArabic ? '2. سعة القناة C = B log₂(1 + SNR)' : '2. Shannon-Hartley Capacity'}</span>
              </h4>
              <span className="px-2 py-0.5 rounded bg-teal-950 border border-teal-700 text-teal-300 font-mono text-xs font-bold">
                C = {capacityKbitSec} kbit/s
              </span>
            </div>

            {/* Sliders: Bandwidth & SNR */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>{isArabic ? 'عرض النطاق الترددي (Bandwidth B):' : 'Channel Bandwidth (B):'}</span>
                  <span className="text-teal-300 font-bold">{bandwidthKhz} kHz</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={bandwidthKhz}
                  onChange={(e) => setBandwidthKhz(parseInt(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer min-h-[44px]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>{isArabic ? 'نسبة الإشارة إلى الضوضاء (SNR in dB):' : 'Signal-to-Noise Ratio (SNR):'}</span>
                  <span className="text-amber-300 font-bold">{snrDb} dB (×{snrLinear})</span>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="40"
                  step="1"
                  value={snrDb}
                  onChange={(e) => setSnrDb(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer min-h-[44px]"
                />
              </div>
            </div>

            {/* Oscilloscope Noisy Waveform Visualizer */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{isArabic ? 'محاكاة شاشة راسم الذبذبات (Oscilloscope View):' : 'Oscilloscope Signal & Channel Noise Simulation:'}</span>
                <span className="text-emerald-400 font-bold">50 μs/div</span>
              </div>
              <svg viewBox="0 0 340 70" className="w-full h-auto bg-slate-950 rounded border border-slate-800 select-none">
                {/* Clean TTL clock / data wave (faint dashed cyan) */}
                <path
                  d="M 10,50 L 50,50 L 50,15 L 90,15 L 90,50 L 130,50 L 130,15 L 170,15 L 170,50 L 210,50 L 210,15 L 250,15 L 250,50 L 290,50 L 290,15 L 330,15"
                  fill="none"
                  stroke="#0891b2"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.6"
                />

                {/* Received noisy wave (green phosphor) */}
                {(() => {
                  const noiseScale = Math.max(0.5, 20 / (Math.sqrt(Math.max(1, snrLinear))));
                  const pts: string[] = [];
                  for (let x = 10; x <= 330; x += 3) {
                    const isHigh = Math.floor((x - 10) / 40) % 2 === 1;
                    const baseLevel = isHigh ? 15 : 50;
                    // pseudo-random deterministic noise
                    const rand = (Math.sin(x * 12.9898) * 43758.5453) % 1;
                    const noise = (rand - 0.5) * noiseScale * 2;
                    const y = Math.min(65, Math.max(5, baseLevel + noise));
                    pts.push(`${x},${y.toFixed(1)}`);
                  }
                  return (
                    <path
                      d={`M ${pts.join(' L ')}`}
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1.8"
                    />
                  );
                })()}
              </svg>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end pt-1">
              <button
                onClick={handleReset}
                className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isArabic ? 'إعادة ضبط العوامل' : 'Reset Parameters'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
