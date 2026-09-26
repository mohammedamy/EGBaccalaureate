import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  BookOpen,
  Brain,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import avicennaPhoto from '../../../assets/philosophy/avicenna_shifa_logic_1027ad.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface AvicennaHotspot {
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

export const AVICENNA_HOTSPOTS: AvicennaHotspot[] = [
  {
    id: 'avicennian_conditional_propositions',
    xPct: 55.0,
    yPct: 52.0,
    titleAr: 'القضايا الشرطية المتصلة والمنفصلة (Conditional Propositions)',
    titleEn: 'Avicennian Hypothetical & Disjunctive Propositions',
    categoryAr: 'تطوير المنطق الشرطي',
    categoryEn: 'Hypothetical Propositional Logic',
    descAr:
      'إسهام ابن سينا الثوري في توسيع المنطق الأرسطي؛ حيث لم يقتصر على القضايا الحملية البسيطة (S is P)، بل أسس منطق القضايا الشرطية المتصلة (إذا كان... فإن...)، والشرطية المنفصلة (إما... وإما...) بأنواعها الثلاثة: مانعة الجمع والخلو معاً (حقيقية)، مانعة الجمع فقط، ومانعة الخلو فقط.',
    descEn:
      'Avicenna’s monumental expansion of Aristotelian syllogistic: formalizing conditional propositions (connective "If P then Q" and disjunctive "Either P or Q"), categorizing disjunctions into strictly exclusive/exhaustive, mutually exclusive only, and exhaustive only.',
    scientificInsightAr:
      'مهدت الشرطيات المنفصلة لابن سينا الطريق مباشرة لعمليات المنطق البوليني الحديث (XOR, OR, NAND) في علوم الحاسوب.',
    scientificInsightEn:
      'Avicenna’s rigorous analysis of exclusive and exhaustive disjunctions directly prefigured modern Boolean logic operations (XOR, OR, NAND) in digital computing.',
  },
  {
    id: 'temporal_modal_syllogism',
    xPct: 22.0,
    yPct: 45.0,
    titleAr: 'المنطق الجهوي الزماني (Temporal Modal Syllogisms)',
    titleEn: 'Temporal Modal Logic & Contingent Necessity',
    categoryAr: 'فلسفة الجهات والزمان',
    categoryEn: 'Modal Logic & Temporal Operators',
    descAr:
      'نظام ابن سينا المبتكر لتقييد القضايا بالجهات الوجودية (الضرورة، الوجود، الإمكان، والامتناع) مع ربطها بأبعاد الزمان والوصف الذاتي (مثل: "بالضرورة ما دام الكاتب يكتب"). فكك هذا النظام مغالطات الضرورة المطلقة وأسس للمنطق الزمني الحديث.',
    descEn:
      'Avicenna’s sophisticated modal system qualifying propositions with ontological modalities (Necessity, Actuality, Possibility, Impossibility) bounded by temporal durations ("necessarily while writing"), pioneering modern temporal and epistemic logic.',
    scientificInsightAr:
      'ميز ابن سينا بدقة متناهية بين الضرورة الذاتية المطلقة (كضرورة كون الله واجب الوجود) والضرورة المشروطة بوصف أو زمان.',
    scientificInsightEn:
      'Distinguished absolute essential necessity from conditional or temporal necessity, a cornerstone of Islamic philosophical theology and modern Kripke semantics.',
  },
  {
    id: 'floating_man_thought_experiment',
    xPct: 35.0,
    yPct: 25.0,
    titleAr: 'برهان الإنسان المعلق في الفضاء (The Floating Man)',
    titleEn: 'The Floating Man Thought Experiment (Al-Insan Al-Mu’allaq)',
    categoryAr: 'فلسفة العقل وإثبات الوعي الذاتي',
    categoryEn: 'Philosophy of Mind & Self-Consciousness',
    descAr:
      'أشهر تجربة فكرية في تاريخ الفلسفة الإسلامية: افترض أن إنساناً خُلق دفعة واحدة سوياً وهو يهوي في هواء طلق معتم، محجوب البصر، مسدود السمع، ومتباعد الأطراف بحيث لا يلمس عضو منه عضواً آخر ولا يشعر بأي مقاومة؛ هل يشك هذا الإنسان في وجود ذاته؟ يبرهن ابن سينا أنه يثبت وجود ذاته قطعاً دون أدنى حاجة لحواسه أو بدنه.',
    descEn:
      'Avicenna’s iconic thought experiment pre-dating Descartes’ Cogito by six centuries: imagine a person created in mid-air in total sensory deprivation (blindfolded, deafened, limbs splayed without tactile feedback). Would he doubt his own existence? Avicenna demonstrates that self-awareness persists unsevered, proving the immateriality of the soul.',
    scientificInsightAr:
      'سبق ابن سينا كوجيتو رينيه ديكارت ("أنا أفكر إذن أنا موجود") بأكثر من ستمائة عام، مقدماً دليلاً حدسياً على جوهرية النفس وتمايزها عن المادة.',
    scientificInsightEn:
      'Preceded René Descartes’ Cogito ergo sum by over 600 years, providing an intuitive epistemological proof of incorporeal consciousness independent of physical organs.',
  },
  {
    id: 'naskh_calligraphy_gold_unwan',
    xPct: 50.0,
    yPct: 15.0,
    titleAr: 'عنوان المخطوط المذهب باللازورد (Gold & Lapis Unwan)',
    titleEn: 'Illuminated Gold & Lapis Lazuli Opening Unwan',
    categoryAr: 'فنون المخطوطات الإسلامية الكلاسيكية',
    categoryEn: 'Classical Islamic Manuscript Illuminations',
    descAr:
      'الإفريز الزخرفي العلوي الرائع المذهب بالذهب الخالص واللازورد الأزرق الملكي، مع خط النسخ المتقن الذي يفتتح به الشيخ الرئيس ابن سينا موسوعة "كتاب الشفاء: المنطق"، موثقاً تصنيف العلوم العقلية.',
    descEn:
      'The resplendent opening headpiece illuminated with pure 24-karat gold leaf and royal lapis lazuli pigment, crowned by elegant Arabic Naskh script introducing Avicenna’s monumental compendium Kitab al-Shifa (Logic section).',
    scientificInsightAr:
      'ألف ابن سينا كتاب الشفاء في خضم أسفاره واضطراباته السياسية بين أصفهان وهمذان، ليكون موسوعة برهانية شاملة للفلسفة والعلوم الطبيعية والرياضيات.',
    scientificInsightEn:
      'Composed across tumultuous political journeys in Isfahan and Hamadan, the Shifa served as the ultimate demonstrative encyclopedia harmonizing logic, physics, and metaphysics.',
  },
  {
    id: 'burhan_demonstrative_epistemology',
    xPct: 82.0,
    yPct: 85.0,
    titleAr: 'الأسطرلاب ونظرية البرهان السببي (Demonstrative Epistemology)',
    titleEn: 'Brass Astrolabe & Causal Demonstrative Syllogism',
    categoryAr: 'الأجهزة العلمية ونظرية المعرفة',
    categoryEn: 'Scientific Instruments & Causal Proof',
    descAr:
      'الأسطرلاب النحاسي المحفور بدقة بجوار المخطوط يرمز للترابط الوثيق عند ابن سينا بين المنطق الصوري والأرصاد الفلكية؛ حيث يعد "البرهان اللمي" (Causal Demonstration) أعلى درجات المعرفة لأن حده الأوسط يعلل النتيجة في الذهن والواقع معاً.',
    descEn:
      'The finely engraved brass astrolabe beside the codex symbolizes the Avicennian synthesis of formal logic and astronomical observation: demonstrative syllogisms provide the highest certainty because the middle term constitutes the true cause in physical reality.',
    scientificInsightAr:
      'طور ابن سينا أرصاداً فلكية رائدة وصنع جهازاً ميكانيكياً شبيهاً بالورنية (Micrometer) لتدقيق قياسات الأجرام السماوية في مرصد همذان.',
    scientificInsightEn:
      'Avicenna engineered precision astronomical vernier scales and observational sighting tubes at the Hamadan observatory, merging formal deduction with experimental instrumentation.',
  },
];

export const AvicennaShifaLogicStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<AvicennaHotspot>(AVICENNA_HOTSPOTS[2]); // Floating Man
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Studio Mode: 'floating_man' vs 'conditional_matrix'
  const [engineMode, setEngineMode] = useState<'floating_man' | 'conditional_matrix'>('floating_man');

  // Floating Man Experiment Sensor Toggles
  const [sightActive, setSightActive] = useState<boolean>(false);
  const [hearingActive, setHearingActive] = useState<boolean>(false);
  const [touchActive, setTouchActive] = useState<boolean>(false);
  const [gravityActive, setGravityActive] = useState<boolean>(false);

  // Conditional Proposition Selection
  const [condType, setCondType] = useState<'connective' | 'disjunctive_exclusive' | 'disjunctive_exhaustive'>('connective');

  const modalData: HiResImageModalData = {
    imageUrl: avicennaPhoto,
    titleAr: 'مخطوطة ابن سينا الأصلية — كتاب الشفاء: المنطق (1027 م)',
    titleEn: 'Avicenna’s Master Folio — Kitab al-Shifa: Logic (The Book of Healing, 1027 CE)',
    subtitleAr: 'موسوعة الفلسفة البرهانية والمنطق الشرطي وتجربة الإنسان المعلق',
    subtitleEn: 'Classical Islamic Demonstrative Logic, Conditionals & The Floating Man Thought Experiment',
    descriptionAr:
      'نسخة أرشيفية نادرة بدقة 4K لمخطوط عريق من "كتاب الشفاء: المنطق" للشيخ الرئيس أبو علي الحسين بن عبد الله بن سينا (المتوفى 428 هـ / 1037 م). يظهر المخطوط بخط النسخ الكلاسيكي المتقن مع إفريز علوي مزخرف بماء الذهب الخالص واللازورد الأزرق، مع شروح وحواشٍ دقيقة بالقضايا الشرطية والمنطق الزماني، ومحاطاً بمحبرة فضية وقلم قصب وأسطرلاب نحاسي تراثي.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of an authentic 11th-century manuscript folio from Avicenna’s (Ibn Sina) magnum opus Kitab al-Shifa (The Book of Healing / Logic). The folio exhibits the gold-and-lapis illuminated opening unwan, elegant Arabic calligraphy formalizing conditional and temporal modal syllogisms, alongside an antique silver inkwell, reed pen, and brass astrolabe.',
    locationAr: 'مكتبة السليمانية، إسطنبول / دار الكتب والوثائق القومية بالقاهرة',
    locationEn: 'Süleymaniye Manuscript Library, Istanbul / National Library of Egypt, Cairo',
    dateOrEraAr: '1027 ميلادية / القرن الخامس الهجري (العصر الذهبي للحضارة الإسلامية)',
    dateOrEraEn: '1027 CE / 5th Century AH (Islamic Golden Age of Science)',
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-700 via-teal-600 to-amber-500 flex items-center justify-center shadow-lg shadow-emerald-700/30 text-white">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                1027 CE • Isfahan
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'الشيخ الرئيس ابن سينا • كتاب الشفاء' : 'Avicenna (Ibn Sina) • Kitab al-Shifa'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              {isArabic
                ? 'استوديو ابن سينا: المنطق الشرطي وتجربة الإنسان المعلق في الفضاء'
                : 'Avicenna & The Shifa: Conditional Logic & The Floating Man'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص مخطوط الشفاء بدقة 4K' : 'Inspect 4K Shifa Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={avicennaPhoto}
              alt="Avicenna 1027 Kitab al-Shifa Logic Folio"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {AVICENNA_HOTSPOTS.map((hotspot) => {
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
                {isArabic ? 'انقر على العلامات النجمية لفحص منطق ابن سينا وبرهان النفس' : 'Click stars to inspect Avicenna’s conditionals & soul theory'}
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
                {isArabic ? 'أصل برهاني' : 'Demonstrative Principle'}
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
                <Brain className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر التأسيسي في الفلسفة وعلم النفس المعرفي:' : 'Permanent Philosophical & Cognitive Impact:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-amber-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Avicenna Dual Simulator (Floating Man & Conditionals) */}
      <div className="p-5 sm:p-6 rounded-2xl border border-emerald-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-200">
              <Brain className="w-5 h-5 text-teal-400" />
              <span>
                {isArabic
                  ? 'مختبر ابن سينا الفكري: تجربة الإنسان المعلق والقضايا الشرطية'
                  : 'Avicennian Thought Lab: The Floating Man & Conditionals Engine'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'اختبر عزل الحواس خطوة بخطوة للتحقق من بقاء الوعي الذاتي، واستكشف بنية القضايا الشرطية المتصلة والمنفصلة'
                : 'Strip sensory inputs to test incorporeal self-awareness, and explore connective vs disjunctive conditionals'}
            </p>
          </div>

          {/* Engine Mode Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setEngineMode('floating_man')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                engineMode === 'floating_man'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isArabic ? 'برهان الإنسان المعلق' : 'Floating Man Experiment'}
            </button>
            <button
              onClick={() => setEngineMode('conditional_matrix')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                engineMode === 'conditional_matrix'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isArabic ? 'القضايا الشرطية' : 'Conditional Matrix'}
            </button>
          </div>
        </div>

        {/* Engine 1: Floating Man Thought Experiment */}
        {engineMode === 'floating_man' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sensory Isolation Controls */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono text-slate-400 block font-bold">
                {isArabic ? 'عزل الحواس المادية بالتتابع (Sensory Deprivation):' : 'Sensory Deprivation Toggles:'}
              </span>

              {/* Sight */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono flex items-center gap-2">
                  {sightActive ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                  <span>{isArabic ? 'حاسة البصر (Sight):' : 'Visual Perception:'}</span>
                </span>
                <button
                  onClick={() => setSightActive(!sightActive)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    sightActive ? 'bg-emerald-600 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {sightActive ? (isArabic ? 'مفعل (يرى)' : 'Active') : (isArabic ? 'محجوب (ظلام تام)' : 'Deprived')}
                </button>
              </div>

              {/* Hearing */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono flex items-center gap-2">
                  {hearingActive ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
                  <span>{isArabic ? 'حاسة السمع (Hearing):' : 'Auditory Input:'}</span>
                </span>
                <button
                  onClick={() => setHearingActive(!hearingActive)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    hearingActive ? 'bg-emerald-600 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {hearingActive ? (isArabic ? 'مفعل (يسمع)' : 'Active') : (isArabic ? 'معزول (صمت مطلق)' : 'Deprived')}
                </button>
              </div>

              {/* Touch & Proprioception */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>{isArabic ? 'اللمس وتماس الأعضاء (Touch):' : 'Tactile Feedback:'}</span>
                </span>
                <button
                  onClick={() => setTouchActive(!touchActive)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    touchActive ? 'bg-emerald-600 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {touchActive ? (isArabic ? 'أعضاء متلامسة' : 'Contact') : (isArabic ? 'أطراف متباعدة في الفراغ' : 'Splayed Void')}
                </button>
              </div>

              {/* Gravity & Resistance */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>{isArabic ? 'الجاذبية ومقاومة الهواء (Gravity):' : 'Gravitational Weight:'}</span>
                </span>
                <button
                  onClick={() => setGravityActive(!gravityActive)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    gravityActive ? 'bg-emerald-600 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {gravityActive ? (isArabic ? 'وزن مادي' : 'Weighted') : (isArabic ? 'سقوط حر طليق' : 'Zero Gravity')}
                </button>
              </div>

              <button
                onClick={() => {
                  setSightActive(false);
                  setHearingActive(false);
                  setTouchActive(false);
                  setGravityActive(false);
                }}
                className="min-h-[44px] w-full px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isArabic ? 'استعادة حالة ابن سينا: عزل تام 100%' : 'Reset to Full Avicennian Sensory Void'}</span>
              </button>
            </div>

            {/* Visualizer: The Floating Soul & Philosophical Revelation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-xl bg-slate-950 border border-emerald-800/40 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-300 font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    {isArabic ? 'حالة الوعي الذاتي للروح الإنسانية (Self-Consciousness)' : 'Soul Self-Awareness State:'}
                  </span>
                  <span className="text-amber-400 font-bold">
                    {!sightActive && !hearingActive && !touchActive && !gravityActive ? '100% PURE CONSCIOUSNESS' : 'Sensory Connected'}
                  </span>
                </div>

                {/* SVG Visual Metaphor: Floating Figure in Lapis Void */}
                <div className="w-full flex justify-center py-2">
                  <svg viewBox="0 0 340 180" className="w-full max-w-[320px] h-auto select-none">
                    <rect x="0" y="0" width="340" height="180" rx="12" fill="#022c22" fillOpacity="0.4" stroke="#065f46" strokeWidth="1.5" />

                    {/* Concentric aura waves representing pure self-awareness */}
                    <circle cx="170" cy="90" r="70" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="170" cy="90" r="50" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
                    <circle cx="170" cy="90" r="30" fill="#047857" fillOpacity="0.3" stroke="#6ee7b7" strokeWidth="1.5" />

                    {/* Glowing Core / Self (Ana) */}
                    <circle cx="170" cy="90" r="14" fill="#f59e0b" filter="drop-shadow(0 0 8px #fbbf24)" />
                    <text x="170" y="94" fill="#0f172a" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">
                      أنا
                    </text>

                    {/* Floating Limbs Silhouette (dashed if no touch) */}
                    <path
                      d="M 170,76 L 170,55 M 170,104 L 170,135 M 156,90 L 125,75 M 184,90 L 215,75 M 170,135 L 145,160 M 170,135 L 195,160"
                      stroke={touchActive ? '#38bdf8' : '#64748b'}
                      strokeWidth="2"
                      strokeDasharray={touchActive ? 'none' : '4 3'}
                    />

                    {/* Inscription text */}
                    <text x="170" y="24" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      {isArabic ? '«يُثبت ذاته ولا يُثبت عضواً من أعضائه»' : '"Affirms his existence without physical organs"'}
                    </text>
                  </svg>
                </div>

                {/* Conclusion Callout */}
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-600/40 space-y-1.5">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isArabic ? 'النتيجة البرهانية لابن سينا في الشفاء:' : 'Avicenna’s Epistemological Proof:'}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {isArabic
                      ? 'إنك إذا جردت الإنسان من جميع حواسه وبدنه، وجدته عالماً بذاته غير غافل عنها؛ وما يثبته الإنسان غير ما ينفيه، فالذات الإنسانية العارفة مغايرة للبدن المادي المجهول، وهي جوهر روحاني مجرد قائم بذاته.'
                      : 'When a human is abstracted from all sensory perceptions and bodily feedback, self-awareness persists undefeated. What is affirmed (the Self) is distinct from what is absent (the body), logically demonstrating that consciousness is an incorporeal essence.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Engine 2: Avicennian Conditional Propositions Matrix */}
        {engineMode === 'conditional_matrix' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setCondType('connective')}
                className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                  condType === 'connective'
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-200 shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-xs font-bold text-emerald-300 mb-1">
                  1. الشرطية المتصلة (Connective)
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'لزوم المقدم للتالي: «إذا كانت الشمس طالعة فالنهار موجود»' : 'Implication: "If the sun rises, daylight is present"'}
                </div>
              </button>

              <button
                onClick={() => setCondType('disjunctive_exclusive')}
                className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                  condType === 'disjunctive_exclusive'
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-200 shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-xs font-bold text-amber-300 mb-1">
                  2. مانعة الجمع والخلو معاً (حقيقية)
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'تنافٍ كلي في الصدق والكذب: «العدد إما زوج أو فرد»' : 'Strict XOR: "A number is either even or odd"'}
                </div>
              </button>

              <button
                onClick={() => setCondType('disjunctive_exhaustive')}
                className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                  condType === 'disjunctive_exhaustive'
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-200 shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-xs font-bold text-cyan-300 mb-1">
                  3. مانعة الجمع فقط (تضاد)
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'يمتنع اجتماعهما ويمكن ارتفاعهما: «الشيء إما شجر أو حجر»' : 'Mutually exclusive: "Either a tree or a stone"'}
                </div>
              </button>
            </div>

            {/* Proposition Detailed Breakdown Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-amber-400 font-bold">
                {condType === 'connective' && (isArabic ? 'التحليل المنطقي للشرطية المتصلة:' : 'Connective Conditional Structure:')}
                {condType === 'disjunctive_exclusive' && (isArabic ? 'التحليل المنطقي للمنفصلة الحقيقية (Strict Disjunction):' : 'Strict Exclusive Disjunction:')}
                {condType === 'disjunctive_exhaustive' && (isArabic ? 'التحليل المنطقي لمانعة الجمع فقط:' : 'Mutually Exclusive Non-Exhaustive:')}
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 space-y-2">
                {condType === 'connective' && (
                  <>
                    <div>{isArabic ? '• المقدم (Antecedent): طلوع الشمس' : '• Antecedent: Sun rises'}</div>
                    <div>{isArabic ? '• التالي (Consequent): وجود النهار' : '• Consequent: Daylight is present'}</div>
                    <div className="text-emerald-400 font-bold">
                      {isArabic ? 'القاعدة: صدق المقدم يقتضي صدق التالي حتماً (Modus Ponens).' : 'Rule: True antecedent strictly implies true consequent (Modus Ponens).'}
                    </div>
                  </>
                )}

                {condType === 'disjunctive_exclusive' && (
                  <>
                    <div>{isArabic ? '• القضية الأولى: P (العدد زوج)' : '• Term P: Number is even'}</div>
                    <div>{isArabic ? '• القضية الثانية: Q (العدد فرد)' : '• Term Q: Number is odd'}</div>
                    <div className="text-amber-400 font-bold">
                      {isArabic ? 'القاعدة: لا يصدقان معاً ولا يكذبان معاً (P ⊕ Q = True).' : 'Rule: Cannot both be true, cannot both be false (Strict XOR: P ⊕ Q).'}
                    </div>
                  </>
                )}

                {condType === 'disjunctive_exhaustive' && (
                  <>
                    <div>{isArabic ? '• الطرف الأول: هذا الجسم شجر' : '• Term 1: Object is tree'}</div>
                    <div>{isArabic ? '• الطرف الثاني: هذا الجسم حجر' : '• Term 2: Object is stone'}</div>
                    <div className="text-cyan-400 font-bold">
                      {isArabic ? 'القاعدة: يمتنع صدقهما معاً (لا يمكن أن يكون شجراً وحجراً في آن واحد)، لكن يمكن أن يكون إنساناً.' : 'Rule: Cannot both be true, but both can be false if it is a human.'}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
