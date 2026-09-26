import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  Scale,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import aristotlePhoto from '../../../assets/philosophy/aristotle_organon_logic_350bc.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface AristotleHotspot {
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

export const ARISTOTLE_HOTSPOTS: AristotleHotspot[] = [
  {
    id: 'categorical_syllogism_structure',
    xPct: 22.0,
    yPct: 40.0,
    titleAr: 'الأركان الصورية للقياس الحملي (Syllogism Structure)',
    titleEn: 'Categorical Syllogism Triple Architecture',
    categoryAr: 'نظرية الاستدلال الصوري',
    categoryEn: 'Formal Deductive Logic',
    descAr:
      'البنية الكلاسيكية للقياس الاستدلالي الذي وضعه أرسطو في كتاب "التحليلات الأولى" (Prior Analytics)؛ حيث يتألف من مقدمتين: مقدمة كبرى تحمل الحد الأكبر (P)، ومقدمة صغرى تحمل الحد الأصغر (S)، وحد أوسط (M) يربط بينهما في المقدمتين ويختفي تماماً في النتيجة (S is P).',
    descEn:
      'The foundational triadic deductive inference formulated in Aristotle’s Prior Analytics: a Major Premise containing the Major Term (P), a Minor Premise containing the Minor Term (S), and a Middle Term (M) that mediates between them and disappears in the Conclusion (S is P).',
    scientificInsightAr:
      'يعد القياس الأرسطي أول نظام صوري في تاريخ الفكر البشري يستخدم المتغيرات الرمزية (A, B, C) بدلاً من الكلمات اللغوية العادية.',
    scientificInsightEn:
      'Aristotle’s syllogism represents the first formal axiomatic system in human history to utilize abstract propositional variables rather than concrete empirical terms.',
  },
  {
    id: 'barbara_first_figure_perfection',
    xPct: 48.0,
    yPct: 32.0,
    titleAr: 'أشكال القياس وكمال ضرب "باربارا" (Barbara / Figure 1)',
    titleEn: 'The Perfect Syllogistic Figure & Barbara Mood',
    categoryAr: 'الأشكال والضروب المنتجة',
    categoryEn: 'Syllogistic Figures & Valid Moods',
    descAr:
      'ضرب "باربارا" (AAA-1) الموضح في منتصف المخطوط: "كل إنسان فانٍ، كل فيلسوف إنسان، إذن كل فيلسوف فانٍ". اعتبر أرسطو الشكل الأول كاملاً وبديهياً بذاته (Perfect Figure) لأن لزوم النتيجة فيه عن المقدمتين واضح مباشر دون حاجة لأي برهان بالخلف أو العكس.',
    descEn:
      'The celebrated "Barbara" (AAA-1) mood prominent on the folio: "All humans are mortal; All philosophers are human; Therefore, all philosophers are mortal." Aristotle deemed the First Figure axiomatically "perfect" because its deductive necessity is self-evident.',
    scientificInsightAr:
      'قام مناطقة العصور الوسطى (بما فيهم ابن سينا والتوماويون) بصياغة أسماء الضروب اللاتينية لتشفير نوع القضايا بحروف العلة (A, E, I, O).',
    scientificInsightEn:
      'Scholastic logicians later codified mnemonic names (Barbara, Celarent, Darii, Ferio) where the vowels designate the categorical proposition types (A, E, I, O).',
  },
  {
    id: 'square_of_opposition_logic',
    xPct: 18.0,
    yPct: 65.0,
    titleAr: 'مربع التقابل بين القضايا (Square of Opposition)',
    titleEn: 'Aristotelian Square of Opposition (A - E - I - O)',
    categoryAr: 'العلاقات المنطقية بين القضايا',
    categoryEn: 'Categorical Propositional Relations',
    descAr:
      'المخطط الهندسي الرباعي الموضح في حاشية الصفحة، والذي يحدد العلاقات الدقيقة بين القضايا الأربع: الكلية الموجبة (A)، الكلية السالبة (E)، الجزئية الموجبة (I)، والجزئية السالبة (O)، محدداً أحكام التناقض (قطرياً)، والتضاد، والدخول تحت التضاد، والتداخل.',
    descEn:
      'The classical geometric diagram illustrated on the folio margins formalizing the logical oppositions between Universal Affirmative (A), Universal Negative (E), Particular Affirmative (I), and Particular Negative (O) across contradictory diagonals and contrary edges.',
    scientificInsightAr:
      'إذا صدقت القضية الكلية الموجبة (A)، كذبت بالضرورة المناقضة لها (O) وكذبت المضادة لها (E)، وصدقت المتداخلة معها (I).',
    scientificInsightEn:
      'Truth tables are fundamentally grounded in the square: if A is true, its contradictory O is necessarily false, contrary E is false, and subaltern I is true.',
  },
  {
    id: 'peripatetic_scroll_calamus',
    xPct: 82.0,
    yPct: 70.0,
    titleAr: 'مخطوط المشائين وقلم القصب السكندري (Lyceum Codex)',
    titleEn: 'Peripatetic Vellum Codex & Hellenistic Calamus',
    categoryAr: 'أدوات التدوين الأرشيفية الكلاسيكية',
    categoryEn: 'Classical Archival Scribal Artifacts',
    descAr:
      'المخطوط الجلدي القديم المدون بالخط اليوناني الأصيل بحبر كربوني متماسك، مع قلم القصب المشذوب (Calamus) والمصباح الزيتي البرونزي الذي أضاء قاعات مدرسة أرسطو الفلسفية (المشائية - Lyceum) في أثينا.',
    descEn:
      'The antique vellum codex written in Hellenistic Greek uncial script, accompanied by a split reed calamus dip pen and cast bronze oil lamp representative of Aristotle’s Lyceum in classical Athens.',
    scientificInsightAr:
      'جمعت مؤلفات أرسطو المنطقية الستة في عمل شامل أطلق عليه اسم "الأورغانون" (Organon) أي "الآلة" أو الأداة المعصومة للعقل.',
    scientificInsightEn:
      'Aristotle’s six logical treatises were collectively titled the "Organon" (The Instrument or Tool of Thought), asserting logic as the universal tool for all sciences.',
  },
  {
    id: 'formal_validity_vs_truth',
    xPct: 70.0,
    yPct: 22.0,
    titleAr: 'التمييز بين الصدق المادي والصحة الصورية (Validity vs Truth)',
    titleEn: 'Distinction Between Formal Validity & Material Truth',
    categoryAr: 'فلسفة المنطق والإبستمولوجيا',
    categoryEn: 'Epistemology & Metalogic',
    descAr:
      'التمثال الحجري لأرسطو المطل على المخطوط يجسد المبدأ الأرسطي الحاسم: المنطق يهتم بصحة الاستدلال الصوري (Validity) أي لزوم النتيجة لزوماً حتمياً عن المقدمات بصرف النظر عن صدق محتواها الواقعي في العالم الخارجي.',
    descEn:
      'The bust of Aristotle presiding over the manuscript reflects his foundational epistemological distinction: deductive logic guarantees formal validity (that the conclusion follows necessarily from premises), independent of material empirical fact.',
    scientificInsightAr:
      'يمكن للقياس أن يكون صحيحاً صورياً 100% مع أن مقدماته ونتيجته كاذبة مادياً، مثل: "كل الطيور ثدييات، كل الأسماك طيور، إذن كل الأسماك ثدييات".',
    scientificInsightEn:
      'A syllogism can be completely formally valid even with factually false premises, e.g., "All birds are mammals; All fish are birds; Therefore all fish are mammals."',
  },
];

interface SyllogismFigure {
  id: number;
  nameAr: string;
  nameEn: string;
  majorLayout: string;
  minorLayout: string;
  validMoods: string[];
}

const SYLLOGISM_FIGURES: SyllogismFigure[] = [
  {
    id: 1,
    nameAr: 'الشكل الأول (الحد الأوسط موضوع في الكبرى، محمول في الصغرى)',
    nameEn: 'Figure 1 (M-P, S-M ⊢ S-P) — The Perfect Figure',
    majorLayout: 'M is P',
    minorLayout: 'S is M',
    validMoods: ['AAA (Barbara)', 'EAE (Celarent)', 'AII (Darii)', 'EIO (Ferio)'],
  },
  {
    id: 2,
    nameAr: 'الشكل الثاني (الحد الأوسط محمول في المقدمتين معا)',
    nameEn: 'Figure 2 (P-M, S-M ⊢ S-P) — Exclusively Negative Conclusions',
    majorLayout: 'P is M',
    minorLayout: 'S is M',
    validMoods: ['EAE (Cesare)', 'AEE (Camestres)', 'EIO (Festino)', 'AOO (Baroco)'],
  },
  {
    id: 3,
    nameAr: 'الشكل الثالث (الحد الأوسط موضوع في المقدمتين معا)',
    nameEn: 'Figure 3 (M-P, M-S ⊢ S-P) — Exclusively Particular Conclusions',
    majorLayout: 'M is P',
    minorLayout: 'M is S',
    validMoods: ['AAI (Darapti)', 'IAI (Disamis)', 'AII (Datisi)', 'EAO (Felapton)', 'OAO (Bocardo)', 'EIO (Ferison)'],
  },
  {
    id: 4,
    nameAr: 'الشكل الرابع (الحد الأوسط محمول في الكبرى، موضوع في الصغرى)',
    nameEn: 'Figure 4 (P-M, M-S ⊢ S-P) — The Galenic Figure',
    majorLayout: 'P is M',
    minorLayout: 'M is S',
    validMoods: ['AAI (Bramantip)', 'AEE (Camenes)', 'IAI (Dimaris)', 'EAO (Fesapo)', 'EIO (Fresison)'],
  },
];

export const AristotleOrganonStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<AristotleHotspot>(ARISTOTLE_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Syllogism Engine State
  const [selectedFigureId, setSelectedFigureId] = useState<number>(1);
  const [majorType, setMajorType] = useState<'A' | 'E' | 'I' | 'O'>('A');
  const [minorType, setMinorType] = useState<'A' | 'E' | 'I' | 'O'>('A');
  const [conclusionType, setConclusionType] = useState<'A' | 'E' | 'I' | 'O'>('A');

  const currentFigure = useMemo(() => {
    return SYLLOGISM_FIGURES.find((f) => f.id === selectedFigureId) ?? SYLLOGISM_FIGURES[0];
  }, [selectedFigureId]);

  const currentMoodStr = `${majorType}${minorType}${conclusionType}`;

  // Evaluate validity of the chosen mood in the chosen figure
  const validityResult = useMemo(() => {
    const validFound = currentFigure.validMoods.find((m) => m.startsWith(currentMoodStr));
    if (validFound) {
      return {
        isValid: true,
        mnemonicName: validFound,
        reasonAr: `ضرب منتج صحيح وصوري وفق قواعد الشكل ${selectedFigureId} الأرسطي (${validFound}). النتيجة تلزم حتماً عن المقدمتين.`,
        reasonEn: `Valid productive mood in Aristotelian Figure ${selectedFigureId} (${validFound}). The conclusion follows with formal deductive necessity.`,
      };
    }

    // Identify fallacy
    let fallacyAr = 'ضرب غير منتج لا يلزم عنه نتيجة صحيحة.';
    let fallacyEn = 'Invalid mood; conclusion does not follow necessarily.';

    if ((majorType === 'E' || majorType === 'O') && (minorType === 'E' || minorType === 'O')) {
      fallacyAr = 'مغالطة المقدمتين السالبتين (Fallacy of Exclusive Premises): لا إنتاج من سالبتين في المنطق الأرسطي.';
      fallacyEn = 'Fallacy of Exclusive Premises: No conclusion can be drawn from two negative premises.';
    } else if ((majorType === 'I' || majorType === 'O') && (minorType === 'I' || minorType === 'O')) {
      fallacyAr = 'مغالطة المقدمتين الجزئيتين (Fallacy of Two Particular Premises): لا إنتاج من جزئيتين.';
      fallacyEn = 'Fallacy of Particular Premises: No conclusion can follow from two particular premises.';
    } else if (majorType === 'A' && minorType === 'A' && conclusionType === 'E') {
      fallacyAr = 'مغالطة استخلاص نتيجة سالبة من مقدمتين موجبتين (Affirmative Premises with Negative Conclusion).';
      fallacyEn = 'Fallacy of Drawing a Negative Conclusion from Affirmative Premises.';
    }

    return {
      isValid: false,
      mnemonicName: 'INVALID',
      reasonAr: fallacyAr,
      reasonEn: fallacyEn,
    };
  }, [currentFigure, currentMoodStr, majorType, minorType, conclusionType, selectedFigureId]);

  const handleApplyPresetBarbara = () => {
    setSelectedFigureId(1);
    setMajorType('A');
    setMinorType('A');
    setConclusionType('A');
  };

  const handleApplyPresetCelarent = () => {
    setSelectedFigureId(1);
    setMajorType('E');
    setMinorType('A');
    setConclusionType('E');
  };

  const handleApplyPresetCamestres = () => {
    setSelectedFigureId(2);
    setMajorType('A');
    setMinorType('E');
    setConclusionType('E');
  };

  const handleApplyPresetBocardo = () => {
    setSelectedFigureId(3);
    setMajorType('O');
    setMinorType('A');
    setConclusionType('O');
  };

  const modalData: HiResImageModalData = {
    imageUrl: aristotlePhoto,
    titleAr: 'مخطوطة أرسطو الأصلية — الأورغانون والتحليلات الأولى (Prior Analytics)',
    titleEn: 'Aristotle’s Organon Master Folio — Prior Analytics & Syllogistic Deduction',
    subtitleAr: 'مجموعة مؤلفات المنطق الصوري وميلاد الاستدلال البرهاني القياسي',
    subtitleEn: 'The Birth of Formal Axiomatic Logic & Categorical Syllogisms',
    descriptionAr:
      'صورة أرشيفية نادرة بدقة 4K لمخطوط بيزنطي إغريقي عريق من كتاب "التحليلات الأولى" لأرسطو طاليس. تعرض الصفحة أشكال القياس الحملي الكلاسيكي وضروبه الكاملة (باربارا، كيلارنت، داريي، وفيريو)، مع مربع التقابل الأرسطي في الحاشية، وقلم القصب السكندري ومصباح الزيت البرونزي وتمثال المعلم الأول أرسطو في خلفية المشهد.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of an ancient Byzantine Greek vellum manuscript of Aristotle’s Prior Analytics (Analytica Priora). The folio features the classical categorical syllogism moods (Barbara, Celarent, Darii, Ferio), the geometric Square of Opposition, a period reed calamus, and an antique stone bust of Aristotle presiding over the study.',
    locationAr: 'مكتبة الفاتيكان / متحف اللوفر الأثري',
    locationEn: 'Vatican Apostolic Library / Musée du Louvre Classical Antiquities',
    dateOrEraAr: 'القرن الرابع قبل الميلاد (العصر الإغريقي الكلاسيكي)',
    dateOrEraEn: 'c. 350 BCE (Classical Greek Antiquity)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/40 border-amber-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-600 to-stone-700 flex items-center justify-center shadow-lg shadow-amber-600/30 text-white">
            <Scale className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                c. 350 BCE • Athens
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'الأورغانون • التحليلات الأولى' : 'Organon • Prior Analytics'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-stone-200">
              {isArabic
                ? 'استوديو أرسطو طاليس: القياس الحملي الصوري ومربع التقابل'
                : 'Aristotle & The Organon: Categorical Syllogisms & Square of Opposition'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-lg shadow-amber-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص مخطوط أرسطو بدقة 4K' : 'Inspect 4K Aristotle Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={aristotlePhoto}
              alt="Aristotle 350 BC Organon Folio"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {ARISTOTLE_HOTSPOTS.map((hotspot) => {
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
                        isSelected ? 'bg-amber-400' : 'bg-yellow-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-black shadow-lg ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125'
                          : 'bg-amber-700/90 text-white border border-yellow-300'
                      }`}
                    >
                      ★
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Badge overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-800/40 text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'انقر على العلامات النجمية لاستكشاف بنية المنطق الصوري' : 'Click stars to inspect syllogistic figures & square'}
              </span>
              <span className="text-amber-400 font-bold">5 {isArabic ? 'محطات تحليلية' : 'Hotspots'}</span>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Deep Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-amber-800/30 bg-slate-900/60 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-amber-800/30 pb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isArabic ? 'قاعدة منطقية' : 'Logical Foundation'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-amber-200">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-700/30 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر الفلسفي والبرهاني الخالد:' : 'Permanent Epistemological Legacy:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-amber-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-amber-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Categorical Syllogism Engine & Euler/Venn Overlap */}
      <div className="p-5 sm:p-6 rounded-2xl border border-amber-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-amber-200">
              <Scale className="w-5 h-5 text-yellow-400" />
              <span>
                {isArabic
                  ? 'محاكي القياس الأرسطي الصوري ومختبر فحص الإنتاج (Syllogism Engine)'
                  : 'Aristotelian Categorical Syllogism Validity Engine'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'حدد شكل القياس ونوع المقدمتين والنتيجة لاختبار صحة الاستدلال الصوري ومطابقته لضروب أرسطو الـ 19'
                : 'Configure figure and proposition modes (A, E, I, O) to verify deductive validity against the 19 valid moods'}
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">{isArabic ? 'ضروب كلاسيكية:' : 'Classic Moods:'}</span>
            <button
              onClick={handleApplyPresetBarbara}
              className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-950/80 border border-amber-600 text-amber-300 hover:bg-amber-900 transition-all cursor-pointer"
            >
              Barbara (AAA-1)
            </button>
            <button
              onClick={handleApplyPresetCelarent}
              className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
            >
              Celarent (EAE-1)
            </button>
            <button
              onClick={handleApplyPresetCamestres}
              className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
            >
              Camestres (AEE-2)
            </button>
            <button
              onClick={handleApplyPresetBocardo}
              className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
            >
              Bocardo (OAO-3)
            </button>
          </div>
        </div>

        {/* Syllogism Controls & Live Premise Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Figure Selector */}
            <div>
              <label className="text-xs font-mono text-slate-300 mb-1.5 block">
                {isArabic ? 'اختر شكل القياس الأرسطي (Figure 1-4):' : 'Select Syllogistic Figure:'}
              </label>
              <select
                value={selectedFigureId}
                onChange={(e) => setSelectedFigureId(parseInt(e.target.value))}
                className="w-full bg-slate-950 border border-amber-700/60 rounded-xl p-2.5 text-xs font-mono text-amber-200 focus:outline-none focus:border-amber-400 cursor-pointer min-h-[44px]"
              >
                {SYLLOGISM_FIGURES.map((f) => (
                  <option key={f.id} value={f.id}>
                    {isArabic ? f.nameAr : f.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Premise Type Selectors */}
            <div className="grid grid-cols-3 gap-3">
              {/* Major Premise */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {isArabic ? 'المقدمة الكبرى:' : 'Major Premise:'}
                </span>
                <select
                  value={majorType}
                  onChange={(e) => setMajorType(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono font-bold text-amber-300 cursor-pointer min-h-[44px]"
                >
                  <option value="A">A: كلية موجبة (All M are P)</option>
                  <option value="E">E: كلية سالبة (No M are P)</option>
                  <option value="I">I: جزئية موجبة (Some M are P)</option>
                  <option value="O">O: جزئية سالبة (Some M not P)</option>
                </select>
              </div>

              {/* Minor Premise */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {isArabic ? 'المقدمة الصغرى:' : 'Minor Premise:'}
                </span>
                <select
                  value={minorType}
                  onChange={(e) => setMinorType(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono font-bold text-cyan-300 cursor-pointer min-h-[44px]"
                >
                  <option value="A">A: كلية موجبة (All S are M)</option>
                  <option value="E">E: كلية سالبة (No S are M)</option>
                  <option value="I">I: جزئية موجبة (Some S are M)</option>
                  <option value="O">O: جزئية سالبة (Some S not M)</option>
                </select>
              </div>

              {/* Conclusion */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {isArabic ? 'النتيجة المستخلصة:' : 'Conclusion:'}
                </span>
                <select
                  value={conclusionType}
                  onChange={(e) => setConclusionType(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono font-bold text-emerald-300 cursor-pointer min-h-[44px]"
                >
                  <option value="A">A: كلية موجبة (All S are P)</option>
                  <option value="E">E: كلية سالبة (No S are P)</option>
                  <option value="I">I: جزئية موجبة (Some S are P)</option>
                  <option value="O">O: جزئية سالبة (Some S not P)</option>
                </select>
              </div>
            </div>

            {/* Validity Evaluation Card */}
            <div
              className={`p-4 rounded-xl border space-y-2 ${
                validityResult.isValid
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold flex items-center gap-2">
                  {validityResult.isValid ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  )}
                  {validityResult.isValid
                    ? isArabic
                      ? `قياس صحيح ومنتج: ${validityResult.mnemonicName}`
                      : `Valid Syllogism: ${validityResult.mnemonicName}`
                    : isArabic
                    ? 'قياس فاسد صورياً (غير صحيح)'
                    : 'Invalid Syllogism'}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/40 border border-white/10 font-bold">
                  Mood: {currentMoodStr}-{selectedFigureId}
                </span>
              </div>
              <p className="text-xs leading-relaxed">
                {isArabic ? validityResult.reasonAr : validityResult.reasonEn}
              </p>
            </div>
          </div>

          {/* SVG Vector Euler Rings / Set Containment Visualizer */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="font-bold text-amber-300">
                {isArabic ? 'مخطط دوائر أويلر لتداخل الحدود (Euler Set Representation)' : 'Euler Circles Set Overlap'}
              </span>
              <span className="text-slate-400">
                S = الأصغر | M = الأوسط | P = الأكبر
              </span>
            </div>

            <div className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-center">
              <svg viewBox="0 0 340 220" className="w-full max-w-[320px] h-auto select-none">
                {/* Outer set boundary */}
                <rect x="5" y="5" width="330" height="210" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="1.5" />

                {validityResult.isValid && currentMoodStr.startsWith('AAA') ? (
                  // Concentric inclusion: S inside M inside P (Barbara)
                  <g>
                    {/* Circle P (Major) */}
                    <circle cx="170" cy="110" r="90" fill="#78350f" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
                    <text x="170" y="42" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      P (الكبرى: الكائنات الفانية)
                    </text>

                    {/* Circle M (Middle) */}
                    <circle cx="170" cy="125" r="60" fill="#0891b2" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
                    <text x="170" y="85" fill="#67e8f9" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      M (الأوسط: الإنسان)
                    </text>

                    {/* Circle S (Minor) */}
                    <circle cx="170" cy="145" r="30" fill="#059669" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" />
                    <text x="170" y="150" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      S (الفلاسفة)
                    </text>
                  </g>
                ) : validityResult.isValid && currentMoodStr.startsWith('EAE') ? (
                  // Celarent: M and P disjoint; S inside M -> S disjoint from P
                  <g>
                    {/* Circle P (Disjoint) */}
                    <circle cx="85" cy="110" r="65" fill="#be123c" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="2" />
                    <text x="85" y="115" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      P (الأكبر)
                    </text>

                    {/* Circle M (Disjoint from P) */}
                    <circle cx="235" cy="110" r="65" fill="#0891b2" fillOpacity="0.25" stroke="#06b6d4" strokeWidth="2" />
                    <text x="235" y="75" fill="#67e8f9" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      M (الأوسط)
                    </text>

                    {/* Circle S (Inside M) */}
                    <circle cx="235" cy="130" r="30" fill="#059669" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" />
                    <text x="235" y="135" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      S (الأصغر)
                    </text>
                  </g>
                ) : (
                  // General Venn Intersecting Circles
                  <g>
                    <circle cx="130" cy="95" r="55" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx="210" cy="95" r="55" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1.5" />
                    <circle cx="170" cy="145" r="55" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
                    <text x="95" y="85" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">P</text>
                    <text x="235" y="85" fill="#67e8f9" fontSize="11" fontWeight="bold" fontFamily="monospace">M</text>
                    <text x="170" y="195" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">S</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Syllogistic Figure Rules Hint */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="text-amber-400 font-bold">{isArabic ? 'قاعدة الشكل الأرسطي الأول:' : 'Figure 1 Master Rule:'} </span>
              {isArabic
                ? 'يجب أن تكون المقدمة الكبرى كلية، والمقدمة الصغرى موجبة لضمان استغراق الحد الأوسط ولزوم النتيجة.'
                : 'Major premise must be universal, minor premise must be affirmative to distribute the middle term.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
