import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Users,
  Brain,
  Sparkles,
  Activity,
  Shield,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Zap,
  BookOpen,
  Scale,
  Compass,
  TrendingUp,
  Sliders,
  Award,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'learning_theories' | 'memory_retention' | 'conflict_matrix' | 'social_processes' | 'culture_extremism';
}

export type PsychologyStudioMode =
  | 'learning_theories'
  | 'memory_retention'
  | 'conflict_matrix'
  | 'social_processes'
  | 'culture_extremism';

export const PsychologyStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'learning_theories',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<PsychologyStudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: Learning Theories Simulator (Pavlov / Thorndike / Gestalt / Norman)
  // -------------------------------------------------------------
  type LearningParadigm = 'pavlov' | 'thorndike' | 'gestalt' | 'norman';
  const [selectedParadigm, setSelectedParadigm] = useState<LearningParadigm>('pavlov');

  // Pavlov states
  const [pavlovTrials, setPavlovTrials] = useState<number>(6);
  const [isStimulusPaired, setIsStimulusPaired] = useState<boolean>(true);
  const [extinctionActive, setExtinctionActive] = useState<boolean>(false);
  const [spontaneousRecovery, setSpontaneousRecovery] = useState<boolean>(false);

  // Thorndike states
  const [thorndikeTrial, setThorndikeTrial] = useState<number>(1);
  const [lawOfEffectActive, setLawOfEffectActive] = useState<boolean>(true);

  // Gestalt states
  const [gestaltInsightUnlocked, setGestaltInsightUnlocked] = useState<boolean>(false);

  // Compute Pavlov conditioned response strength (0 - 100%)
  const computePavlovSalivation = (): number => {
    if (extinctionActive) {
      return spontaneousRecovery ? 35 : 5;
    }
    if (!isStimulusPaired) return 10;
    return Math.min(100, Math.round(15 + pavlovTrials * 14));
  };

  // Compute Thorndike escape time (seconds)
  const computeThorndikeEscapeTime = (trial: number): number => {
    if (!lawOfEffectActive) return 150;
    return Math.max(8, Math.round(180 * Math.exp(-0.35 * trial)));
  };

  // -------------------------------------------------------------
  // Mode 2: Ebbinghaus Forgetting Curve & Spaced Repetition
  // -------------------------------------------------------------
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [isMeaningfulLearning, setIsMeaningfulLearning] = useState<boolean>(true);
  const [practiceType, setPracticeType] = useState<'spaced' | 'massed'>('spaced');
  const [elapsedDays, setElapsedDays] = useState<number>(7);

  // Ebbinghaus formula: R(t) = e^(-t / S)
  const computeRetentionRate = (days: number, reviews: number): number => {
    const s0 = isMeaningfulLearning ? 2.8 : 1.1;
    if (practiceType === 'spaced') {
      const reviewMilestones = [1, 3, 7, 16];
      const activeMilestones = reviewMilestones.slice(0, reviews);
      let lastTime = 0;
      let k = 0;
      for (let i = 0; i < activeMilestones.length; i++) {
        if (days >= activeMilestones[i]) {
          lastTime = activeMilestones[i];
          k = i + 1;
        } else {
          break;
        }
      }
      const sk = s0 * Math.pow(2.15, k);
      const ret = Math.exp(-(days - lastTime) / sk) * 100;
      return Math.min(100, Math.max(5, Math.round(ret)));
    } else {
      // Massed practice: crammed on day 0, minimal stability growth
      const effectiveStability = s0 * Math.pow(1.14, reviews);
      const ret = Math.exp(-days / effectiveStability) * 100;
      return Math.min(100, Math.max(5, Math.round(ret)));
    }
  };

  // -------------------------------------------------------------
  // Mode 3: Lewin Conflict Typology & Ego Defense Matrix
  // -------------------------------------------------------------
  type ConflictType = 'approach_approach' | 'avoidance_avoidance' | 'approach_avoidance';
  const [selectedConflict, setSelectedConflict] = useState<ConflictType>('approach_approach');
  const [anxietyLevel, setAnxietyLevel] = useState<number>(45); // 0-100 scale

  type DefenseMechanismKey =
    | 'repression'
    | 'sublimation'
    | 'compensation'
    | 'rationalization'
    | 'projection'
    | 'identification'
    | 'regression'
    | 'denial';

  const [activeDefense, setActiveDefense] = useState<DefenseMechanismKey>('sublimation');

  const defenseMechanisms: Record<
    DefenseMechanismKey,
    {
      titleAr: string;
      titleEn: string;
      type: 'direct' | 'unconscious';
      descAr: string;
      descEn: string;
      exampleAr: string;
      exampleEn: string;
      psychicPurposeAr: string;
      psychicPurposeEn: string;
    }
  > = {
    sublimation: {
      titleAr: 'الإعلاء والتسامي (Sublimation)',
      titleEn: 'Sublimation / Ascendance',
      type: 'unconscious',
      descAr: 'تحويل الدوافع والغرائز غير المقبولة اجتماعياً إلى أنشطة إبداعية واجتماعية راقية.',
      descEn: 'Channeling unacceptable psychic drives into elevated creative, athletic, or social achievements.',
      exampleAr: 'تحويل النزعات العدوانية إلى تفوق رياضي في الملاكمة أو جراحة دقيقة تنقذ الأرواح.',
      exampleEn: 'Transforming aggressive impulses into championship boxing or life-saving vascular surgery.',
      psychicPurposeAr: 'أرقى الحيل الدفاعية، يحمي الأنا ويحقق القبول المجتمعي الكامل.',
      psychicPurposeEn: 'Highest developmental ego defense, preserving psychic equilibrium while earning social praise.',
    },
    repression: {
      titleAr: 'الكبت (Repression)',
      titleEn: 'Repression',
      type: 'unconscious',
      descAr: 'طرد الأفكار والدوافع والذكريات المؤلمة والمثيرة للقلق لاشعورياً من دائرة الوعي إلى اللاشعور.',
      descEn: 'Involuntary, unconscious banishment of distressing impulses and traumatic memories into the unconscious.',
      exampleAr: 'نسيان موعد طبيب الأسنان غير المريح أو محو تفاصيل حادث أليم من الذاكرة الواعية.',
      exampleEn: 'Forgetting an unpleasant dental appointment or repressing traumatic memories of a past catastrophe.',
      psychicPurposeAr: 'تجنب الألم والتوتر المؤقت، لكنه يستهلك طاقة نفسية مستمرة.',
      psychicPurposeEn: 'Shields consciousness from acute anguish, but demands continuous psychic energy maintenance.',
    },
    compensation: {
      titleAr: 'التعويض (Compensation)',
      titleEn: 'Compensation',
      type: 'unconscious',
      descAr: 'محاولة الفرد تغطية شعوره بالنقص أو الفشل في مجال معين بتحقيق التفوق في مجال بديل.',
      descEn: 'Counterbalancing perceived weaknesses or failures in one domain by excelling in another.',
      exampleAr: 'طالب يعاني من ضعف في الأنشطة الرياضية فيعوض ذلك بالتفوق الأكاديمي والبرمجي.',
      exampleEn: 'A student who struggles in physical athletics compensates by becoming a top coder and scholar.',
      psychicPurposeAr: 'إعادة التوازن لتقدير الذات ومحو مرارة العجز في ميدان معين.',
      psychicPurposeEn: 'Restores wounded self-esteem and mitigates feelings of inadequacy.',
    },
    rationalization: {
      titleAr: 'التبرير (Rationalization)',
      titleEn: 'Rationalization',
      type: 'unconscious',
      descAr: 'إعطاء أسباب مقبولة عقلياً ومنطقية ظاهرياً لسلوك غير مقبول أو فشل، دون أن تكون الأسباب الحقيقية.',
      descEn: 'Devising plausible, logical justifications to disguise failure or inappropriate behavior.',
      exampleAr: 'طالب يرسب في الامتحان فيبرر ذلك بأن أسئلة الاختبار كانت تعجيزية وغير مفهومة.',
      exampleEn: 'A student who fails an exam rationalizes that the exam was intentionally impossible and unfair.',
      psychicPurposeAr: 'حماية الأنا من الاعتراف بالتقصير وتسكين وخز الضمير مؤقتاً.',
      psychicPurposeEn: 'Guards the ego from owning incompetence and temporarily eases guilt.',
    },
    projection: {
      titleAr: 'الإسقاط (Projection)',
      titleEn: 'Projection',
      type: 'unconscious',
      descAr: 'إلصاق الفرد عيوبه ونقائصه ورغباته المرفوضة بالآخرين وتبرئة نفسه تماماً منها.',
      descEn: 'Attributing one\'s own unacceptable traits, hostile urges, or faults onto others.',
      exampleAr: 'شخص يتسم بالبخل الشديد فيتهم أصدقاءه وأسرته بالشح والإمساك.',
      exampleEn: 'A miserly individual accusing all family members and colleagues of being stingy.',
      psychicPurposeAr: 'التبرؤ من الصفات المؤلمة للذات وتوجيه اللوم للخارج.',
      psychicPurposeEn: 'Disavowing toxic self-traits by projecting the blameworthy shadow outward.',
    },
    identification: {
      titleAr: 'التقمص أو التوحد (Identification)',
      titleEn: 'Identification / Introjection',
      type: 'unconscious',
      descAr: 'اكتساب الفرد لصفات وخصائص شخصية أخرى مرموقة ليشعر بالقوة والمكانة.',
      descEn: 'Adopting the demeanor, achievements, or persona of an admired figure to bolster identity.',
      exampleAr: 'شاب يقلد بطلاً رياضياً عالمياً في زيه وحديثه ليشعر بالفخر والتميز.',
      exampleEn: 'A teenager mimicking the speech patterns and attire of an Olympian to feel powerful.',
      psychicPurposeAr: 'تعويض الضعف الفردي بالاختباء وراء هيبة الشخصية المرموقة.',
      psychicPurposeEn: 'Masks personal vulnerability behind the aura of an established role model.',
    },
    regression: {
      titleAr: 'النكوص (Regression)',
      titleEn: 'Regression',
      type: 'unconscious',
      descAr: 'الارتداد والرجوع إلى أساليب توافقية وسلوكية طفلية بدائية لا تناسب مرحلة النضج الحالية.',
      descEn: 'Reverting to immature, infantile developmental behaviors under acute stress.',
      exampleAr: 'طالب في الثانوية العامة ينهار في البكاء ونوبات الغضب الحادة عند مواجهة ضغط الاختبارات.',
      exampleEn: 'An adolescent resorting to temper tantrums and thumb-sucking during exam stress.',
      psychicPurposeAr: 'محاولة لاشعورية لاستجداء عطف الوالدين والهروب من مسؤوليات النضج.',
      psychicPurposeEn: 'An unconscious bid to solicit parental care and escape adult accountability.',
    },
    denial: {
      titleAr: 'الإنكار (Denial)',
      titleEn: 'Denial',
      type: 'unconscious',
      descAr: 'رفض الفرد الواعي واللاشعوري الاعتراف بوجود واقع أليم أو صدمة قاسية لعدم تحمله.',
      descEn: 'Refusing to acknowledge the existence of an agonizing, intolerable objective reality.',
      exampleAr: 'رفض تصديق وفاة شخص عزيز أو استمرار التدخين بدعوى أن التدخين لا يضر بالصحة إطلاقاً.',
      exampleEn: 'Refusing to accept a tragic diagnosis or insisting cigarettes pose zero health hazard.',
      psychicPurposeAr: 'جدار صد نفسي يحمي الفرد من الانهيار الفوري في اللحظات الأولى للصدمة.',
      psychicPurposeEn: 'Emergency psychological barrier preventing catastrophic ego shatter upon trauma.',
    },
  };

  // -------------------------------------------------------------
  // Mode 4: Sociological Processes Simulator (Cooperation, Accommodation, Competition, Conflict)
  // -------------------------------------------------------------
  const [envFactor, setEnvFactor] = useState<number>(65); // Environmental/Resource interdependence
  const [normativeFactor, setNormativeFactor] = useState<number>(75); // Shared values & ethics
  const [egocentricFactor, setEgocentricFactor] = useState<number>(30); // Self-interest vs group welfare

  // Calculate sociological process balances (0 - 100)
  const cooperationScore = Math.min(
    100,
    Math.round(0.5 * envFactor + 0.5 * normativeFactor - 0.3 * egocentricFactor + 15)
  );
  const accommodationScore = Math.min(
    100,
    Math.round(0.4 * normativeFactor + 0.3 * envFactor + (100 - egocentricFactor) * 0.3)
  );
  const competitionScore = Math.min(
    100,
    Math.round(0.4 * envFactor + 0.6 * egocentricFactor)
  );
  const conflictScore = Math.min(
    100,
    Math.max(0, Math.round(1.1 * egocentricFactor - 0.4 * normativeFactor + 25))
  );

  // -------------------------------------------------------------
  // Mode 5: Culture, Entrepreneurship & Extremism Matrix
  // -------------------------------------------------------------
  type CultureComponent = 'universals' | 'specialties' | 'alternatives';
  const [selectedCultureComponent, setSelectedCultureComponent] = useState<CultureComponent>('universals');

  type FreeEnterpriseModel = 'blue' | 'davidson';
  const [selectedWorkModel, setSelectedWorkModel] = useState<FreeEnterpriseModel>('blue');

  type ExtremismDimension = 'cognitive' | 'affective' | 'behavioral';
  const [selectedExtremismDim, setSelectedExtremismDim] = useState<ExtremismDimension>('cognitive');

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-xl'
          : 'bg-slate-900/95 border-slate-800 text-slate-100 shadow-2xl backdrop-blur-xl'
      } ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none p-6 sm:p-8' : 'p-4 sm:p-6'}`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Studio Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-600 via-rose-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 ring-2 ring-pink-400/30">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {isArabic ? 'استوديو علم النفس والاجتماع التفاعلي' : 'Psychology & Sociology Interactive Studio'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">
                {isArabic ? 'المنهج الوزاري المعتمد' : 'MOE Standard'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'مختبر رقمي تجريبي لنظريات التعلم، استبقاء الذاكرة، مصفوفة ليفين، وديناميات التفاعل الجمعي'
                : 'Experimental laboratory for learning paradigms, memory retention, Lewin conflict matrix & collective dynamics'}
            </p>
          </div>
        </div>

        {/* Global Reset / Presets */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-pink-400" />}
            <span>{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
          <button
            onClick={() => {
              setPavlovTrials(6);
              setIsStimulusPaired(true);
              setExtinctionActive(false);
              setSpontaneousRecovery(false);
              setThorndikeTrial(1);
              setReviewCount(0);
              setAnxietyLevel(45);
              setEgocentricFactor(30);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {isArabic ? 'إعادة ضبط المحاكي' : 'Reset Simulator'}
          </button>
        </div>
      </div>

      {/* Navigation Modes Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-5">
        {[
          {
            id: 'learning_theories' as const,
            labelAr: 'نظريات التعلم الكبرى',
            labelEn: 'Learning Theories',
            icon: Brain,
            color: 'from-pink-500 to-rose-600',
          },
          {
            id: 'memory_retention' as const,
            labelAr: 'منحنى النسيان والذاكرة',
            labelEn: 'Memory & Retention',
            icon: TrendingUp,
            color: 'from-purple-500 to-indigo-600',
          },
          {
            id: 'conflict_matrix' as const,
            labelAr: 'الصراع والحيل الدفاعية',
            labelEn: 'Conflict & Defense',
            icon: Shield,
            color: 'from-amber-500 to-orange-600',
          },
          {
            id: 'social_processes' as const,
            labelAr: 'العمليات الاجتماعية',
            labelEn: 'Social Processes',
            icon: Activity,
            color: 'from-emerald-500 to-teal-600',
          },
          {
            id: 'culture_extremism' as const,
            labelAr: 'الثقافة والتطرف والعمل',
            labelEn: 'Culture & Extremism',
            icon: Scale,
            color: 'from-cyan-500 to-blue-600',
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMode === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMode(tab.id)}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                isActive
                  ? `bg-gradient-to-r ${tab.color} text-white border-transparent shadow-lg shadow-pink-500/20 scale-[1.02]`
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700/60'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODE 1: LEARNING THEORIES PARADIGMS                           */}
      {/* ------------------------------------------------------------- */}
      {activeMode === 'learning_theories' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Theory Sub-Selector */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
            {[
              { id: 'pavlov' as const, nameAr: 'الاشتراط الكلاسيكي (بافلوف)', nameEn: 'Classical Conditioning (Pavlov)' },
              { id: 'thorndike' as const, nameAr: 'المحاولة والخطأ (ثورندايك)', nameEn: 'Trial & Error (Thorndike)' },
              { id: 'gestalt' as const, nameAr: 'الفهم والاستبصار (الجشتالت)', nameEn: 'Gestalt Insight (Kohler)' },
              { id: 'norman' as const, nameAr: 'معالجة المعلومات (نورمان)', nameEn: 'Information Processing (Norman)' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedParadigm(p.id)}
                className={`flex-1 min-w-[140px] py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  selectedParadigm === p.id
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'
                }`}
              >
                {isArabic ? p.nameAr : p.nameEn}
              </button>
            ))}
          </div>

          {/* PARADIGM 1: PAVLOV */}
          {selectedParadigm === 'pavlov' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-pink-400 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      {isArabic ? 'محاكي الاقتران والتدعيم الشرطي' : 'Conditioning & Reinforcement Simulator'}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 font-mono">
                      {isArabic ? `عدد المحاولات: ${pavlovTrials}` : `Trials: ${pavlovTrials}`}
                    </span>
                  </div>

                  {/* Stimulus Pipeline Diagram */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-2xl mb-1">🔔</div>
                      <div className="font-bold text-xs text-slate-300">
                        {isArabic ? 'مثير شرطي (CS)' : 'Conditioned (CS)'}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {isArabic ? 'صوت الجرس' : 'Bell sound'}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-pink-400">
                        {isStimulusPaired ? (isArabic ? 'اقتران زمني فوري' : 'Paired') : (isArabic ? 'انفصال' : 'Unpaired')}
                      </span>
                      <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded my-2" />
                      <span className="text-[10px] text-slate-400">
                        {extinctionActive
                          ? (isArabic ? 'غياب المثير الطبيعي' : 'Extinction phase')
                          : (isArabic ? 'تدعيم بالمثير الطبيعي' : 'Reinforced with UCS')}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-2xl mb-1">🥩</div>
                      <div className="font-bold text-xs text-slate-300">
                        {isArabic ? 'مثير طبيعي (UCS)' : 'Unconditioned (UCS)'}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {isArabic ? 'مسحوق اللحم' : 'Meat powder'}
                      </div>
                    </div>
                  </div>

                  {/* Control Sliders & Toggles */}
                  <div className="space-y-4 mt-5">
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium">
                        <span>{isArabic ? 'تكرار محاولات التدعيم (Trials):' : 'Reinforcement Trials:'}</span>
                        <span className="font-bold text-pink-400">{pavlovTrials}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={pavlovTrials}
                        onChange={(e) => setPavlovTrials(parseInt(e.target.value))}
                        className="w-full accent-pink-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => {
                          setExtinctionActive(!extinctionActive);
                          setSpontaneousRecovery(false);
                        }}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-all ${
                          extinctionActive
                            ? 'bg-rose-600/30 text-rose-300 border-rose-500'
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {isArabic ? 'قانون الانطفاء (Extinction)' : 'Trigger Extinction'}
                      </button>

                      <button
                        disabled={!extinctionActive}
                        onClick={() => setSpontaneousRecovery(!spontaneousRecovery)}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-all ${
                          spontaneousRecovery
                            ? 'bg-amber-600/30 text-amber-300 border-amber-500'
                            : 'bg-slate-800 text-slate-400 border-slate-700 disabled:opacity-40'
                        }`}
                      >
                        {isArabic ? 'الاسترجاع التلقائي (Recovery)' : 'Spontaneous Recovery'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output & Educational Synthesis */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-pink-400" />
                      {isArabic ? 'شدة الاستجابة الشرطية (سيلان اللعاب CR)' : 'Conditioned Response Amplitude (CR)'}
                    </h4>

                    {/* Gauge Meter */}
                    <div className="relative pt-2 pb-4">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'مستوى الاستجابة:' : 'Response Level:'}</span>
                        <span className="text-pink-400 font-mono text-base">{computePavlovSalivation()}%</span>
                      </div>
                      <div className="h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500"
                          style={{ width: `${computePavlovSalivation()}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-2 mt-2">
                      <div className="font-bold text-pink-300">
                        {isArabic ? 'التفسير العلمي المعتمد:' : 'MOE Theoretical Analysis:'}
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {extinctionActive
                          ? spontaneousRecovery
                            ? isArabic
                              ? 'حدث استرجاع تلقائي للاستجابة الشرطية بقوة أقل بعد فترة راحة رغم حدوث الانطفاء سابقاً.'
                              : 'Spontaneous recovery observed at attenuated strength following rest interval despite previous extinction.'
                            : isArabic
                            ? 'تلاشي الاستجابة تدريجياً نتيجة تقديم المثير الشرطي منفرداً وتكرار ذلك دون تعزيزه بالمثير الطبيعي.'
                            : 'Gradual decay of conditioned response resulting from repeated unreinforced CS presentations.'
                          : isArabic
                          ? 'تكون رابطة عصبية شرطية قوية بين المثير الشرطي والاستجابة بفعل التدعيم والاقتران الزمني الفوري.'
                          : 'Conditioned neural pathway firmly established through systematic temporal pairing and UCS reinforcement.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300">
                      {isArabic ? 'التطبيقات التربوية: ' : 'Educational Applications: '}
                    </span>
                    {isArabic
                      ? 'تعديل الاتجاهات السالبة نحو المدرسة، إطفاء المخاوف المرضية عبر الاشتراط المضاد، وتعليم القراءة بالاقتران الصوري.'
                      : 'Remediating school phobias via counter-conditioning, forming positive attitudes, and associative reading.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PARADIGM 2: THORNDIKE */}
          {selectedParadigm === 'thorndike' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      {isArabic ? 'قفص المشكلات وقانون الأثر (ثورندايك)' : 'Puzzle Box & Law of Effect'}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono">
                      {isArabic ? `المحاولة رقم: ${thorndikeTrial}` : `Trial #${thorndikeTrial}`}
                    </span>
                  </div>

                  {/* Latency Simulator Chart */}
                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-slate-400">
                        {isArabic ? 'الزمن المستغرق للخروج (ثوانٍ):' : 'Escape Latency (seconds):'}
                      </span>
                      <span className="font-mono font-bold text-amber-400">
                        {computeThorndikeEscapeTime(thorndikeTrial)} ثانية
                      </span>
                    </div>

                    {/* Step indicator */}
                    <div className="grid grid-cols-8 gap-1.5 my-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => {
                        const time = computeThorndikeEscapeTime(step);
                        const isCurrent = thorndikeTrial === step;
                        return (
                          <div
                            key={step}
                            onClick={() => setThorndikeTrial(step)}
                            className={`p-2 rounded cursor-pointer text-center transition-all border ${
                              isCurrent
                                ? 'bg-amber-600/30 border-amber-400 text-amber-300 scale-105'
                                : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                            }`}
                          >
                            <div className="text-[10px] font-bold">#{step}</div>
                            <div className="text-[10px] font-mono mt-0.5">{time}s</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Laws of Learning Toggles */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div
                      onClick={() => setLawOfEffectActive(!lawOfEffectActive)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        lawOfEffectActive
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-slate-800/40 border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="font-bold text-xs">{isArabic ? 'قانون الأثر' : 'Law of Effect'}</div>
                      <div className="text-[10px] mt-1 text-slate-300">
                        {isArabic ? 'حالة الارتياح تقوي الرابطة' : 'Satisfaction strengthens bond'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg border bg-slate-800/40 border-slate-700 text-slate-300">
                      <div className="font-bold text-xs">{isArabic ? 'قانون التمرين' : 'Law of Exercise'}</div>
                      <div className="text-[10px] mt-1 text-slate-400">
                        {isArabic ? 'الاستعمال والإهمال' : 'Use vs Disuse'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg border bg-slate-800/40 border-slate-700 text-slate-300">
                      <div className="font-bold text-xs">{isArabic ? 'قانون الاستعداد' : 'Law of Readiness'}</div>
                      <div className="text-[10px] mt-1 text-slate-400">
                        {isArabic ? 'الأساس الفسيولوجي للأثر' : 'Physiological readiness'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theoretical Analysis */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      {isArabic ? 'مفهوم التعلم عند ثورندايك' : 'Thorndike Behavioral Postulate'}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {isArabic
                        ? 'التعلم عملية تدريجية عمياء تعتمد على انتقاء الاستجابات الصحيحة وربطها بالمثيرات عبر المحاولة والخطأ، مع تناقص زمن الهرب كدليل موضوعي على حدوث التعلم.'
                        : 'Learning is an incremental, blind process of selecting successful responses and connecting them to stimuli via trial and error; latency decrease is the objective metric of learning.'}
                    </p>

                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/50 text-xs space-y-1.5 text-amber-200">
                      <div className="font-bold">{isArabic ? 'حالات الاستعداد والارتياح:' : 'Readiness States:'}</div>
                      <div className="text-[11px] leading-relaxed">
                        {isArabic
                          ? '١. مستعد ومهيأ + أتيحت له الفرصة = شعور بالارتياح والرضا.\n٢. مستعد ومهيأ + أُجبر على عدم العمل = شعور بالضيق.\n٣. غير مستعد + أُجبر على العمل = شعور بالضيق الشديد.'
                          : '1. Prepared + Acts = Satisfaction.\n2. Prepared + Prevented = Frustration.\n3. Unprepared + Forced = Acute distress.'}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300">{isArabic ? 'التطبيق التربوي: ' : 'Application: '}</span>
                    {isArabic
                      ? 'التهيئة والتمهيد للدرس، إتاحة فرص الممارسة النشطة، والتعزيز الفوري بالأثر الطيب.'
                      : 'Lesson priming, active practice opportunities, and immediate satisfying feedback.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PARADIGM 3: GESTALT */}
          {selectedParadigm === 'gestalt' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {isArabic ? 'تجربة كوهلر والاستبصار المفاجئ' : 'Kohler Chimpanzee Insight Lab'}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono">
                      {gestaltInsightUnlocked
                        ? isArabic
                          ? 'لحظة الإشراق (Aha!)'
                          : 'Insight Reached'
                        : isArabic
                        ? 'مرحلة التأمل والتنظيم'
                        : 'Pre-Solution Phase'}
                    </span>
                  </div>

                  {/* Visual Simulation of Perceptual Restructuring */}
                  <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
                    <div className="flex items-center justify-center gap-8 py-3">
                      <div className="text-center">
                        <div className="text-3xl mb-1">🍌</div>
                        <div className="text-xs font-bold text-slate-300">{isArabic ? 'الهدف (الموز المعلق)' : 'Suspended Goal'}</div>
                      </div>

                      <div className="text-2xl text-purple-400 font-black">
                        {gestaltInsightUnlocked ? '➔' : '...'}
                      </div>

                      <div className="text-center">
                        <div className="text-3xl mb-1">📦 🦯</div>
                        <div className="text-xs font-bold text-slate-300">
                          {isArabic ? 'الوسائل (الصناديق والعصي)' : 'Boxes & Canes'}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
                      {gestaltInsightUnlocked
                        ? isArabic
                          ? 'تم إدراك الصندوق والعصا ليس كأشياء منفصلة بل كوسائل مباشرة للوصول إلى الهدف عبر إعادة تنظيم المجال الإدراكي كلياً.'
                          : 'Tools perceived holistically as functional extensions to reach the goal through complete perceptual field restructuring.'
                        : isArabic
                        ? 'الشمبانزي في مرحلة سكون وتأمل يفحص المجال الإدراكي بحثاً عن العلاقات المنطقية الكامنة.'
                        : 'The organism observes the perceptual field, discerning latent spatial and functional relations.'}
                    </div>

                    <button
                      onClick={() => setGestaltInsightUnlocked(!gestaltInsightUnlocked)}
                      className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/30 transition-all"
                    >
                      {gestaltInsightUnlocked
                        ? isArabic
                          ? 'إعادة الموقف الإشكالي'
                          : 'Reset Problem Scenario'
                        : isArabic
                        ? 'تفعيل لحظة الاستبصار (Aha!)'
                        : 'Trigger Sudden Insight (Aha!)'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Gestalt Characteristics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {isArabic ? 'خصائص التعلم بالاستبصار (الجشتالت)' : 'Gestalt Insight Characteristics'}
                    </h4>
                    <ul className="text-xs space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>
                          {isArabic
                            ? 'الانتقال من مرحلة ما قبل الحل إلى الحل يحدث فجأة (لحظة استبصار).'
                            : 'Sudden transition from pre-solution to full solution.'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>
                          {isArabic
                            ? 'أداء خالٍ تماماً من الأخطاء بمجرد التوصل للحل.'
                            : 'Errorless execution once insight is attained.'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>
                          {isArabic
                            ? 'حل المشكلة بالاستبصار يظل عالقاً في الذاكرة لفترة طويلة ولا ينطفئ سريعاً.'
                            : 'Superior temporal retention without rapid extinction.'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>
                          {isArabic
                            ? 'سهولة انتقال أثر التعلم وتطبيقه في المواقف المشابهة.'
                            : 'Effortless transfer of learning to isomorphic problem contexts.'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300">{isArabic ? 'القاعدة الذهبية: ' : 'Core Axiom: '}</span>
                    {isArabic
                      ? '«الكل أكبر من مجموع أجزائه»، والفهم يسبق الحفظ الآلي.'
                      : '"The whole is greater than the sum of its parts", and comprehension precedes rote drill.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PARADIGM 4: NORMAN */}
          {selectedParadigm === 'norman' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-cyan-400 flex items-center gap-2">
                      <Sliders className="w-5 h-5" />
                      {isArabic ? 'نموذج نورمان لمعالجة وتجهيز المعلومات' : 'Norman Information Processing Architecture'}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                      {isArabic ? '٤ شروط رئيسية' : '4 Core Operations'}
                    </span>
                  </div>

                  {/* Pipeline */}
                  <div className="space-y-3">
                    {[
                      {
                        num: 1,
                        nameAr: 'الاستقبال (Reception)',
                        nameEn: 'Sensory Reception',
                        descAr: 'استقبال المنبهات عبر الحواس من العالم الخارجي.',
                        descEn: 'Capturing raw environmental data via sensory receptors.',
                      },
                      {
                        num: 2,
                        nameAr: 'الترميز (Encoding)',
                        nameEn: 'Encoding',
                        descAr: 'إعطاء معنى ودلالة معرفية خاصة للمعلومات المستقبلة.',
                        descEn: 'Assigning cognitive meaning and semantic tags.',
                      },
                      {
                        num: 3,
                        nameAr: 'الاحتفاظ والتخزين (Storage)',
                        nameEn: 'Storage',
                        descAr: 'حفظ المعلومات في الذاكرة طويلة المدى وفق مستوى المعالجة.',
                        descEn: 'Consolidating data into long-term memory schemas.',
                      },
                      {
                        num: 4,
                        nameAr: 'الاسترجاع (Retrieval)',
                        nameEn: 'Retrieval',
                        descAr: 'استدعاء المعلومات والخبرات عند الحاجة لحل مشكلة.',
                        descEn: 'Accessing and rendering stored information when prompted.',
                      },
                    ].map((step) => (
                      <div
                        key={step.num}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800"
                      >
                        <div className="w-7 h-7 rounded-full bg-cyan-600/30 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-cyan-500/40">
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-200">
                            {isArabic ? step.nameAr : step.nameEn}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {isArabic ? step.descAr : step.descEn}
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Norman Laws of Learning */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {isArabic ? 'قوانين التعلم عند دونالد نورمان' : 'Norman Pedagogical Laws'}
                    </h4>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                        <div className="font-bold text-cyan-400 mb-1">
                          {isArabic ? '١. قانون العلاقة السببية:' : '1. Law of Causal Relationship:'}
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          {isArabic
                            ? 'يتعلم الفرد العلاقة بين الفعل والنتيجة إذا كانت هناك صلة سببية واضحة بينهما.'
                            : 'Learning occurs when an explicit causal linkage connects action and outcome.'}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                        <div className="font-bold text-cyan-400 mb-1">
                          {isArabic ? '٢. قانون التعلم السببي:' : '2. Law of Causal Learning:'}
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          {isArabic
                            ? 'يميل الفرد لتكرار السلوك المرغوب ذي النتائج الإيجابية ويتجنب السلوك المؤلم.'
                            : 'Behavior is repeated when associated with desirable, constructive utility.'}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                        <div className="font-bold text-cyan-400 mb-1">
                          {isArabic ? '٣. قانون التغذية الراجعة المعلوماتية:' : '3. Informational Feedback Law:'}
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          {isArabic
                            ? 'المعلومات الناتجة عن أي فعل تساعد الفرد في تصحيح المسار وتعديل أخطائه المعرفية.'
                            : 'Feedback data provides corrective cues to calibrate cognitive strategies.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 2: EBBINGHAUS FORGETTING CURVE & SPATIAL RETENTION      */}
      {/* ------------------------------------------------------------- */}
      {activeMode === 'memory_retention' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {isArabic ? 'منحنى هيرمان إبنجهاوس للنسيان والتكرار المتباعد' : 'Ebbinghaus Forgetting Curve & Spaced Repetition'}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono">
                    {isArabic ? `معدل الاستبقاء: ${computeRetentionRate(elapsedDays, reviewCount)}%` : `Retention: ${computeRetentionRate(elapsedDays, reviewCount)}%`}
                  </span>
                </div>

                {/* SVG Forgetting Curve Display */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 relative">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-2 font-mono">
                    <span>{isArabic ? 'نسبة الاستبقاء في الذاكرة (Retention %)' : 'Memory Retention Rate (%)'}</span>
                    <span>{isArabic ? 'الزمن المنقضي (أيام) [Hermann Ebbinghaus]' : 'Time Elapsed (Days) [Hermann Ebbinghaus]'}</span>
                  </div>

                  <svg viewBox="0 0 540 230" className="w-full h-56 overflow-visible">
                    <defs>
                      <linearGradient id="consolidationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#6366f1" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                      </linearGradient>
                      <linearGradient id="rawDecayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.02" />
                      </linearGradient>
                      <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Grid lines & Y-Axis percentages */}
                    {[
                      { pct: 100, y: 25 },
                      { pct: 80, y: 58 },
                      { pct: 60, y: 91 },
                      { pct: 40, y: 124 },
                      { pct: 20, y: 157 },
                      { pct: 0, y: 190 },
                    ].map((grid) => (
                      <g key={grid.pct}>
                        <line
                          x1="55"
                          y1={grid.y}
                          x2="520"
                          y2={grid.y}
                          stroke={grid.pct === 0 ? '#475569' : '#1e293b'}
                          strokeWidth={grid.pct === 0 ? 1.5 : 1}
                          strokeDasharray={grid.pct === 0 ? undefined : '3 3'}
                        />
                        <text
                          x="46"
                          y={grid.y + 3.5}
                          fill={grid.pct === 100 ? '#a855f7' : '#64748b'}
                          fontSize="9"
                          fontFamily="monospace"
                          textAnchor="end"
                          fontWeight={grid.pct === 100 || grid.pct === 0 ? 'bold' : 'normal'}
                        >
                          {grid.pct}%
                        </text>
                      </g>
                    ))}

                    {/* Y-Axis vertical line */}
                    <line x1="55" y1="25" x2="55" y2="190" stroke="#475569" strokeWidth="1.5" />

                    {/* X-Axis day markers */}
                    {[0, 1, 3, 7, 14, 21, 30].map((d) => {
                      const dx = 55 + (d / 30) * 465;
                      return (
                        <g key={d}>
                          <line x1={dx} y1="190" x2={dx} y2="195" stroke="#475569" strokeWidth="1" />
                          <text
                            x={dx}
                            y="208"
                            fill="#64748b"
                            fontSize="8.5"
                            fontFamily="monospace"
                            textAnchor="middle"
                          >
                            {d === 0 ? (isArabic ? 'البداية' : '0d') : `${d}${isArabic ? 'ي' : 'd'}`}
                          </text>
                        </g>
                      );
                    })}

                    {/* Theoretical Raw Ebbinghaus Baseline Curve (0 reviews) */}
                    {(() => {
                      const s0 = isMeaningfulLearning ? 2.8 : 1.1;
                      const rawPoints: string[] = [];
                      const rawAreaPts: string[] = ['55,190'];
                      for (let d = 0; d <= 30; d += 0.25) {
                        const x = 55 + (d / 30) * 465;
                        const r = Math.min(100, Math.max(5, Math.exp(-d / s0) * 100));
                        const y = 190 - (r / 100) * 165;
                        rawPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                        rawAreaPts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                      }
                      rawAreaPts.push(`520,190`);
                      const rawPath = `M ${rawPoints.join(' L ')}`;
                      const rawAreaPath = `M ${rawAreaPts.join(' L ')} Z`;

                      const xDay1 = 55 + (1 / 30) * 465;
                      const rDay1 = Math.round(Math.exp(-1 / s0) * 100);
                      const yDay1 = 190 - (rDay1 / 100) * 165;

                      return (
                        <g>
                          <path d={rawAreaPath} fill="url(#rawDecayGrad)" opacity="0.4" />
                          <path
                            d={rawPath}
                            fill="none"
                            stroke="#f43f5e"
                            strokeWidth="1.8"
                            strokeDasharray="5 3"
                            opacity="0.75"
                          />
                          {/* 24-hour Ebbinghaus landmark callout */}
                          <circle cx={xDay1} cy={yDay1} r="3" fill="#f43f5e" />
                          <line
                            x1={xDay1}
                            y1={yDay1}
                            x2={xDay1 + 35}
                            y2={yDay1 - 18}
                            stroke="#f43f5e"
                            strokeWidth="0.8"
                            strokeDasharray="2 2"
                          />
                          <text
                            x={xDay1 + 40}
                            y={yDay1 - 15}
                            fill="#f43f5e"
                            fontSize="7.5"
                            fontFamily="monospace"
                          >
                            {isArabic ? `تضاؤل بعد ٢٤ ساعة (~${rDay1}%)` : `24h drop (~${rDay1}%)`}
                          </text>
                        </g>
                      );
                    })()}

                    {/* Active Spaced Repetition Sawtooth Curve & Neural Consolidation Shading */}
                    {(() => {
                      const s0 = isMeaningfulLearning ? 2.8 : 1.1;
                      const activeCurvePts: string[] = [];
                      const activeAreaPts: string[] = ['55,190'];

                      if (practiceType === 'spaced') {
                        const milestones = [1, 3, 7, 16].slice(0, reviewCount);
                        const schedule = [0, ...milestones, 30];

                        for (let seg = 0; seg < schedule.length - 1; seg++) {
                          const tStart = schedule[seg];
                          const tEnd = schedule[seg + 1];
                          const sk = s0 * Math.pow(2.15, seg);

                          // Starting point of segment (at tStart, jump to 100% if seg > 0)
                          const xStart = 55 + (tStart / 30) * 465;
                          const rStart = seg === 0 ? 100 : 100;
                          const yStart = 190 - (rStart / 100) * 165;
                          activeCurvePts.push(`${xStart.toFixed(1)},${yStart.toFixed(1)}`);
                          activeAreaPts.push(`${xStart.toFixed(1)},${yStart.toFixed(1)}`);

                          // Sample decay along segment
                          const step = 0.2;
                          for (let d = tStart + step; d < tEnd; d += step) {
                            const x = 55 + (d / 30) * 465;
                            const r = Math.min(100, Math.max(5, Math.exp(-(d - tStart) / sk) * 100));
                            const y = 190 - (r / 100) * 165;
                            activeCurvePts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                            activeAreaPts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                          }

                          // Point right before the jump at tEnd
                          const xEnd = 55 + (tEnd / 30) * 465;
                          const rEnd = Math.min(100, Math.max(5, Math.exp(-(tEnd - tStart) / sk) * 100));
                          const yEnd = 190 - (rEnd / 100) * 165;
                          activeCurvePts.push(`${xEnd.toFixed(1)},${yEnd.toFixed(1)}`);
                          activeAreaPts.push(`${xEnd.toFixed(1)},${yEnd.toFixed(1)}`);
                        }
                      } else {
                        // Massed practice (smooth decay, low stability growth)
                        const effectiveStability = s0 * Math.pow(1.14, reviewCount);
                        for (let d = 0; d <= 30; d += 0.2) {
                          const x = 55 + (d / 30) * 465;
                          const r = Math.min(100, Math.max(5, Math.exp(-d / effectiveStability) * 100));
                          const y = 190 - (r / 100) * 165;
                          activeCurvePts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                          activeAreaPts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                        }
                      }

                      activeAreaPts.push(`520,190`);
                      const activeCurvePath = `M ${activeCurvePts.join(' L ')}`;
                      const activeAreaPath = `M ${activeAreaPts.join(' L ')} Z`;

                      return (
                        <g>
                          {/* Synaptic consolidation polygon */}
                          <path d={activeAreaPath} fill="url(#consolidationGrad)" />

                          {/* Sawtooth / active curve */}
                          <path
                            d={activeCurvePath}
                            fill="none"
                            stroke="#c084fc"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#purpleGlow)"
                          />
                          <path
                            d={activeCurvePath}
                            fill="none"
                            stroke="#f3e8ff"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      );
                    })()}

                    {/* Spaced Review Milestone Pins & Reinforcement Spikes */}
                    {practiceType === 'spaced' &&
                      [1, 3, 7, 16].slice(0, reviewCount).map((m, idx) => {
                        const mx = 55 + (m / 30) * 465;
                        return (
                          <g key={m}>
                            <line
                              x1={mx}
                              y1="25"
                              x2={mx}
                              y2="190"
                              stroke="#a855f7"
                              strokeWidth="1.2"
                              strokeDasharray="3 3"
                            />
                            {/* Upward spike boost indicator */}
                            <path
                              d={`M ${mx - 4} 42 L ${mx} 34 L ${mx + 4} 42 Z`}
                              fill="#10b981"
                            />
                            <g transform={`translate(${mx}, 16)`}>
                              <rect
                                x="-18"
                                y="-10"
                                width="36"
                                height="14"
                                rx="3"
                                fill="#581c87"
                                stroke="#c084fc"
                                strokeWidth="0.8"
                              />
                              <text
                                x="0"
                                y="0"
                                fill="#f3e8ff"
                                fontSize="7.5"
                                fontFamily="monospace"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                R{idx + 1} ({m}{isArabic ? 'ي' : 'd'})
                              </text>
                            </g>
                          </g>
                        );
                      })}

                    {/* Current day cursor & Telemetry Badge */}
                    {(() => {
                      const cx = 55 + (elapsedDays / 30) * 465;
                      const currentRet = computeRetentionRate(elapsedDays, reviewCount);
                      const cy = 190 - (currentRet / 100) * 165;

                      const statusColor =
                        currentRet >= 75 ? '#10b981' : currentRet >= 40 ? '#f59e0b' : '#ef4444';

                      return (
                        <g>
                          <line
                            x1={cx}
                            y1="25"
                            x2={cx}
                            y2="190"
                            stroke="#ec4899"
                            strokeWidth="1.6"
                            strokeDasharray="3 2"
                          />
                          <circle cx={cx} cy={cy} r="7" fill={statusColor} opacity="0.3" className="animate-ping" />
                          <circle cx={cx} cy={cy} r="5" fill={statusColor} stroke="#ffffff" strokeWidth="1.5" />

                          {/* Floating Telemetry Pill */}
                          <g transform={`translate(${Math.max(85, Math.min(460, cx))}, ${Math.max(22, cy - 22)})`}>
                            <rect
                              x="-55"
                              y="-12"
                              width="110"
                              height="18"
                              rx="4"
                              fill="#0f172a"
                              stroke={statusColor}
                              strokeWidth="1"
                            />
                            <text
                              x="0"
                              y="1"
                              fill={statusColor}
                              fontSize="8"
                              fontFamily="monospace"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              {isArabic ? `يوم ${elapsedDays}: استبقاء ${currentRet}%` : `Day ${elapsedDays}: Ret ${currentRet}%`}
                            </text>
                          </g>
                        </g>
                      );
                    })()}
                  </svg>

                  {/* Legend & Theoretical Laws */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pt-3 border-t border-slate-800 text-xs">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-rose-500 border-b border-dashed" />
                        <span className="text-slate-400">
                          {isArabic ? 'منحنى النسيان الطبيعي (التضاؤل دون مراجعة)' : 'Raw Ebbinghaus Rapid Decay'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-purple-500 rounded" />
                        <span className="text-purple-300 font-bold">
                          {isArabic ? 'المنحنى الفعلي المعزز بالتكرار المتباعد (SRS)' : 'Spaced Consolidation Curve (SRS)'}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-purple-400">
                      R(t) = e^{`{-t / S}`} • {isArabic ? `استقرار الذاكرة S = ${( (isMeaningfulLearning ? 2.8 : 1.1) * (practiceType === 'spaced' ? Math.pow(2.15, reviewCount) : Math.pow(1.14, reviewCount)) ).toFixed(1)} يوم` : `Memory Stability S = ${( (isMeaningfulLearning ? 2.8 : 1.1) * (practiceType === 'spaced' ? Math.pow(2.15, reviewCount) : Math.pow(1.14, reviewCount)) ).toFixed(1)}d`}
                    </div>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>{isArabic ? 'الزمن المنقضي (أيام):' : 'Elapsed Time (Days):'}</span>
                      <span className="font-bold text-purple-400">{elapsedDays} {isArabic ? 'يوم' : 'days'}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={elapsedDays}
                      onChange={(e) => setElapsedDays(parseInt(e.target.value))}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>{isArabic ? 'عدد جلسات المراجعة المتباعدة:' : 'Spaced Reviews Sessions:'}</span>
                      <span className="font-bold text-purple-400">{reviewCount}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[0, 1, 2, 3, 4].map((cnt) => (
                        <button
                          key={cnt}
                          onClick={() => setReviewCount(cnt)}
                          className={`flex-1 py-1 rounded text-xs font-bold border transition-all ${
                            reviewCount === cnt
                              ? 'bg-purple-600 text-white border-purple-400'
                              : 'bg-slate-800 text-slate-400 border-slate-700'
                          }`}
                        >
                          {cnt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Factors Affecting Retention */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-700/60">
                  <div
                    onClick={() => setIsMeaningfulLearning(!isMeaningfulLearning)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      isMeaningfulLearning
                        ? 'bg-purple-600/20 border-purple-400 text-purple-300'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-xs">{isArabic ? 'المعنى والدلالة (Meaningful)' : 'Meaningful Material'}</div>
                    <div className="text-[10px] mt-0.5 text-slate-300">
                      {isArabic ? 'المادة ذات المعنى تقاوم النسيان' : 'High resistance to decay'}
                    </div>
                  </div>

                  <div
                    onClick={() => setPracticeType(practiceType === 'spaced' ? 'massed' : 'spaced')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      practiceType === 'spaced'
                        ? 'bg-indigo-600/20 border-indigo-400 text-indigo-300'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-xs">
                      {practiceType === 'spaced'
                        ? (isArabic ? 'الممارسة الموزعة (Spaced)' : 'Distributed Practice')
                        : (isArabic ? 'الممارسة المركزة (Massed)' : 'Massed Cramming')}
                    </div>
                    <div className="text-[10px] mt-0.5 text-slate-300">
                      {practiceType === 'spaced'
                        ? (isArabic ? 'فترات راحة تمنع التعب والتشويش' : 'Optimal intervals mitigate fatigue')
                        : (isArabic ? 'حشو مستمر يرفع التداخل' : 'Continuous mass causes interference')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Recommendations */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {isArabic ? 'أسباب النسيان وفق المنهج الوزاري' : 'Causes of Forgetting (MOE)'}
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                      <div className="font-bold text-purple-400 mb-0.5">{isArabic ? '١. التضاؤل (Decay):' : '1. Decay:'}</div>
                      <div className="text-[11px] text-slate-400">
                        {isArabic ? 'عدم استخدام المعلومات والخبرات مع مرور الوقت.' : 'Disuse of encoded material over extended durations.'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                      <div className="font-bold text-purple-400 mb-0.5">{isArabic ? '٢. التداخل والتشويه (Interference):' : '2. Interference:'}</div>
                      <div className="text-[11px] text-slate-400">
                        {isArabic ? 'تداخل المعلومات القديمة مع الجديدة (كف رجعي أو بعدي).' : 'Retroactive and proactive mnemonic collision.'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                      <div className="font-bold text-purple-400 mb-0.5">{isArabic ? '٣. الكبت اللاشعوري (Repression):' : '3. Repression:'}</div>
                      <div className="text-[11px] text-slate-400">
                        {isArabic ? 'طرد الذكريات المؤلمة المرتبطة بالفشل إلى اللاشعور.' : 'Motivated forgetting of ego-threatening memories.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                  <span className="font-bold text-slate-300">{isArabic ? 'نصيحة للمذاكرة: ' : 'Study Guideline: '}</span>
                  {isArabic
                    ? 'طبق الممارسة الموزعة بمراجعة بعد يوم، ثم أسبوع، ثم شهر لضمان الانتقال للذاكرة الدائمة.'
                    : 'Execute spaced repetition at 1 day, 1 week, and 1 month to ensure permanent semantic transfer.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 3: CONFLICT MATRIX & DEFENSE MECHANISMS                 */}
      {/* ------------------------------------------------------------- */}
      {activeMode === 'conflict_matrix' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lewin Conflict Simulator */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    {isArabic ? 'صراعات كيرت ليفين ومستويات القلق' : 'Kurt Lewin Conflict Typology & Anxiety'}
                  </h3>
                </div>

                {/* Conflict Type Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { id: 'approach_approach' as const, labelAr: 'إقدام - إقدام', labelEn: 'Approach-Approach' },
                    { id: 'avoidance_avoidance' as const, labelAr: 'إحجام - إحجام', labelEn: 'Avoidance-Avoidance' },
                    { id: 'approach_avoidance' as const, labelAr: 'إقدام - إحجام', labelEn: 'Approach-Avoidance' },
                  ].map((ct) => (
                    <button
                      key={ct.id}
                      onClick={() => setSelectedConflict(ct.id)}
                      className={`p-2 rounded-lg text-xs font-bold border transition-all ${
                        selectedConflict === ct.id
                          ? 'bg-amber-600/30 text-amber-300 border-amber-500 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? ct.labelAr : ct.labelEn}
                    </button>
                  ))}
                </div>

                {/* Dynamic Conflict Visualizer: Kurt Lewin Life Space Vector Field */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300 text-center">
                    {selectedConflict === 'approach_approach' &&
                      (isArabic ? 'حيرة بين هدفين مرغوبين وجذابين معاً (أسهل أنواع الصراع حسماً)' : 'Torn between two highly desirable goals (easiest to resolve)')}
                    {selectedConflict === 'avoidance_avoidance' &&
                      (isArabic ? 'حيرة بين خيارين غير مرغوبين وكلاهما مر (شديد التوتر ويستغرق وقتاً طويلاً)' : 'Trapped between two repellent alternatives (agonizing & protracted)')}
                    {selectedConflict === 'approach_avoidance' &&
                      (isArabic ? 'هدف واحد يحمل جانباً جذاباً وجانباً منفراً معاً (تذبذب وتردد مستمر)' : 'Single goal encompasses both positive allure and negative aversion')}
                  </div>

                  {/* SVG Life Space Vector Field */}
                  <div className="h-44 w-full bg-slate-950/90 rounded-xl border border-slate-800/80 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 500 160" className="w-full h-full">
                      <defs>
                        <linearGradient id="lewinPositiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
                        </linearGradient>
                        <linearGradient id="lewinNegativeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.08" />
                        </linearGradient>
                        <marker id="lewinGreenArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                          <path d="M 0 1 L 7 4 L 0 7 Z" fill="#10b981" />
                        </marker>
                        <marker id="lewinRedArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                          <path d="M 0 1 L 7 4 L 0 7 Z" fill="#ef4444" />
                        </marker>
                        <marker id="lewinYellowArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                          <path d="M 0 1 L 7 4 L 0 7 Z" fill="#f59e0b" />
                        </marker>
                      </defs>

                      {/* Topological Life Space Boundary (Jordan Curve) */}
                      <rect
                        x="15"
                        y="12"
                        width="470"
                        height="136"
                        rx="20"
                        fill="#090d16"
                        stroke="#334155"
                        strokeWidth="1.5"
                        strokeDasharray="5 3"
                      />
                      <text
                        x="30"
                        y="26"
                        fill="#64748b"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {isArabic ? 'مجال الحياة النفسي (Life Space L = P + E)' : 'Kurt Lewin Topological Life Space (L = P + E)'}
                      </text>

                      {/* MODE 1: APPROACH - APPROACH (++) */}
                      {selectedConflict === 'approach_approach' && (
                        <g>
                          {/* Goal 1 Region (Left) */}
                          <g transform="translate(85, 80)">
                            <rect x="-60" y="-40" width="120" height="80" rx="12" fill="url(#lewinPositiveGrad)" stroke="#10b981" strokeWidth="1.5" />
                            <circle cx="45" cy="-25" r="11" fill="#10b981" />
                            <text x="45" y="-21" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">+</text>
                            <text x="0" y="-8" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'كلية الطب' : 'Medical College'}
                            </text>
                            <text x="0" y="10" fill="#6ee7b7" fontSize="8" textAnchor="middle">
                              {isArabic ? 'تكافؤ موجب (+Val)' : 'Positive Valence'}
                            </text>
                          </g>

                          {/* Goal 2 Region (Right) */}
                          <g transform="translate(415, 80)">
                            <rect x="-60" y="-40" width="120" height="80" rx="12" fill="url(#lewinPositiveGrad)" stroke="#10b981" strokeWidth="1.5" />
                            <circle cx="45" cy="-25" r="11" fill="#10b981" />
                            <text x="45" y="-21" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">+</text>
                            <text x="0" y="-8" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'كلية الهندسة' : 'Engineering'}
                            </text>
                            <text x="0" y="10" fill="#6ee7b7" fontSize="8" textAnchor="middle">
                              {isArabic ? 'تكافؤ موجب (+Val)' : 'Positive Valence'}
                            </text>
                          </g>

                          {/* Person P (Center) */}
                          <g transform="translate(250, 80)">
                            <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                            <circle cx="0" cy="0" r="15" fill="#f59e0b" opacity="0.25" />
                            <text x="0" y="4" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'الأنا (P)' : 'Ego (P)'}
                            </text>
                          </g>

                          {/* Opposing Attraction Force Vectors */}
                          <line x1="225" y1="80" x2="150" y2="80" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#lewinGreenArrow)" />
                          <text x="188" y="70" fill="#10b981" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            +F_G1
                          </text>

                          <line x1="275" y1="80" x2="350" y2="80" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#lewinGreenArrow)" />
                          <text x="312" y="70" fill="#10b981" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            +F_G2
                          </text>

                          <text x="250" y="132" fill="#94a3b8" fontSize="8" textAnchor="middle">
                            {isArabic ? 'توازن ديناميكي مستقر • يُحسم بسهولة بمجرد الميل لأحدهما' : 'Stable Equilibrium • Easily resolved upon minimal approach'}
                          </text>
                        </g>
                      )}

                      {/* MODE 2: AVOIDANCE - AVOIDANCE (--) */}
                      {selectedConflict === 'avoidance_avoidance' && (
                        <g>
                          {/* Goal 1 Repellent Region (Left) */}
                          <g transform="translate(85, 80)">
                            <rect x="-60" y="-40" width="120" height="80" rx="12" fill="url(#lewinNegativeGrad)" stroke="#ef4444" strokeWidth="1.5" />
                            <circle cx="45" cy="-25" r="11" fill="#ef4444" />
                            <text x="45" y="-21" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">-</text>
                            <text x="0" y="-8" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'مرض مؤلم' : 'Severe Illness'}
                            </text>
                            <text x="0" y="10" fill="#f87171" fontSize="8" textAnchor="middle">
                              {isArabic ? 'تكافؤ سالب (-Val)' : 'Negative Valence'}
                            </text>
                          </g>

                          {/* Goal 2 Repellent Region (Right) */}
                          <g transform="translate(415, 80)">
                            <rect x="-60" y="-40" width="120" height="80" rx="12" fill="url(#lewinNegativeGrad)" stroke="#ef4444" strokeWidth="1.5" />
                            <circle cx="45" cy="-25" r="11" fill="#ef4444" />
                            <text x="45" y="-21" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">-</text>
                            <text x="0" y="-8" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'جراحة خطيرة' : 'Risky Surgery'}
                            </text>
                            <text x="0" y="10" fill="#f87171" fontSize="8" textAnchor="middle">
                              {isArabic ? 'تكافؤ سالب (-Val)' : 'Negative Valence'}
                            </text>
                          </g>

                          {/* Person P (Confined in Middle) */}
                          <g transform="translate(250, 80)">
                            <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                            <circle cx="0" cy="0" r="15" fill="#ef4444" opacity="0.3" className="animate-ping" />
                            <text x="0" y="4" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'الأنا (P)' : 'Ego (P)'}
                            </text>
                          </g>

                          {/* Compressive Repellent Force Vectors */}
                          <line x1="150" y1="80" x2="222" y2="80" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#lewinRedArrow)" />
                          <text x="188" y="70" fill="#ef4444" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            -F_rep1
                          </text>

                          <line x1="350" y1="80" x2="278" y2="80" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#lewinRedArrow)" />
                          <text x="312" y="70" fill="#ef4444" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            -F_rep2
                          </text>

                          {/* Upward Escape Vector (Leaving the Field) */}
                          <line x1="250" y1="56" x2="250" y2="28" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#lewinYellowArrow)" />
                          <text x="250" y="24" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                            {isArabic ? 'محاولة الهروب من المجال (Leaving the Field)' : 'Escape Vector (Leaving the Field)'}
                          </text>

                          <text x="250" y="132" fill="#ef4444" fontSize="8" textAnchor="middle">
                            {isArabic ? 'حصار نفسي شديد وتوتر انفعالي حاد • يستغرق وقتاً طويلاً ومؤلماً للحسم' : 'Confined Psychological Trap • Agonizing, protracted tension'}
                          </text>
                        </g>
                      )}

                      {/* MODE 3: APPROACH - AVOIDANCE (+-) */}
                      {selectedConflict === 'approach_avoidance' && (
                        <g>
                          {/* Single Ambivalent Goal Region (Right) */}
                          <g transform="translate(390, 80)">
                            <rect x="-75" y="-45" width="150" height="90" rx="14" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
                            {/* Dual valence pill badges */}
                            <g transform="translate(-40, -25)">
                              <circle cx="0" cy="0" r="10" fill="#10b981" />
                              <text x="0" y="4" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
                            </g>
                            <g transform="translate(40, -25)">
                              <circle cx="0" cy="0" r="10" fill="#ef4444" />
                              <text x="0" y="4" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>
                            </g>
                            <text x="0" y="0" fill="#fde047" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'تناول الحلوى / السمنة' : 'Sweet Pastry / Obesity'}
                            </text>
                            <text x="0" y="18" fill="#94a3b8" fontSize="8" textAnchor="middle">
                              {isArabic ? 'جاذبية اللذة ⇄ خطر المرض' : 'Sensory Reward ⇄ Health Threat'}
                            </text>
                          </g>

                          {/* Person P (Left) */}
                          <g transform="translate(140, 80)">
                            <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                            <text x="0" y="4" fill="#fde047" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'الأنا (P)' : 'Ego (P)'}
                            </text>
                          </g>

                          {/* Competing Approach and Avoidance Gradients */}
                          <path
                            d="M 165 70 L 290 70"
                            stroke="#10b981"
                            strokeWidth="2.5"
                            markerEnd="url(#lewinGreenArrow)"
                          />
                          <text x="228" y="62" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            +F_approach (إقدام)
                          </text>

                          <path
                            d="M 310 90 L 168 90"
                            stroke="#ef4444"
                            strokeWidth="3"
                            markerEnd="url(#lewinRedArrow)"
                          />
                          <text x="238" y="104" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                            -F_avoidance (انحدار إحجام أشد)
                          </text>

                          {/* Hesitation & Oscillation Landmark */}
                          <line x1="250" y1="45" x2="250" y2="115" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
                          <text x="250" y="128" fill="#eab308" fontSize="8" fontWeight="bold" textAnchor="middle">
                            {isArabic ? 'نقطة التذبذب والتردد (Oscillation Equilibrium)' : 'Oscillation & Hesitation Equilibrium Point'}
                          </text>
                        </g>
                      )}
                    </svg>
                  </div>
                </div>

                {/* Yerkes-Dodson Anxiety Spectrum */}
                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{isArabic ? 'مستوى القلق (قانون يركيز-دودسون):' : 'Anxiety Arousal Level:'}</span>
                    <span className="font-bold text-amber-400 font-mono">{anxietyLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={anxietyLevel}
                    onChange={(e) => setAnxietyLevel(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                    {anxietyLevel < 35 && (
                      <div className="text-slate-400">
                        <span className="font-bold text-blue-400">{isArabic ? 'قلق منخفض: ' : 'Low Anxiety: '}</span>
                        {isArabic ? 'يقترن باللامبالاة، الكسل، والتراخي وتدني الدافعية للإنجاز.' : 'Associated with lethargy, procrastination, and minimal academic drive.'}
                      </div>
                    )}
                    {anxietyLevel >= 35 && anxietyLevel <= 65 && (
                      <div className="text-slate-300">
                        <span className="font-bold text-emerald-400">{isArabic ? 'قلق معتدل (مثالي): ' : 'Moderate (Optimal): '}</span>
                        {isArabic ? 'محفز ومنشط للتفكير والتفوق وتحقيق التكيف والإنتاجية العالية.' : 'Optimal peak: promotes focus, motivation, and problem-solving yield.'}
                      </div>
                    )}
                    {anxietyLevel > 65 && (
                      <div className="text-slate-300">
                        <span className="font-bold text-rose-400">{isArabic ? 'قلق مرتفع (معطل): ' : 'High Anxiety: '}</span>
                        {isArabic ? 'شلل للتفكير، تشتت الذهن، التردد، والعجز عن اتخاذ القرارات السليمة.' : 'Debilitating: cognitive tunnel vision, exam paralysis, and panic.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Ego Defense Mechanisms Matrix */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <h3 className="text-base font-bold text-rose-400 flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5" />
                  {isArabic ? 'مصفوفة الحيل الدفاعية اللاشعورية الثمانية' : 'Eight Ego Defense Mechanisms Matrix'}
                </h3>

                {/* Grid of 8 Mechanisms */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
                  {(Object.keys(defenseMechanisms) as DefenseMechanismKey[]).map((key) => {
                    const mech = defenseMechanisms[key];
                    const isSelected = activeDefense === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveDefense(key)}
                        className={`p-2 rounded-lg text-center text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-rose-600/30 text-rose-200 border-rose-500 shadow-sm scale-102'
                            : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="truncate">{isArabic ? mech.titleAr.split(' ')[0] : mech.titleEn.split(' ')[0]}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Mechanism Detail Card */}
                {(() => {
                  const current = defenseMechanisms[activeDefense];
                  return (
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-rose-300">
                          {isArabic ? current.titleAr : current.titleEn}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-medium">
                          {isArabic ? 'حيلة لاشعورية غير مباشرة' : 'Unconscious Defense'}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {isArabic ? current.descAr : current.descEn}
                      </p>

                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
                        <span className="font-bold text-amber-400">{isArabic ? 'مثال واقعي: ' : 'Real Scenario: '}</span>
                        <span className="text-slate-300">{isArabic ? current.exampleAr : current.exampleEn}</span>
                      </div>

                      <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                        <span className="font-bold text-slate-300">{isArabic ? 'الوظيفة النفسية: ' : 'Psychic Function: '}</span>
                        {isArabic ? current.psychicPurposeAr : current.psychicPurposeEn}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 4: SOCIOLOGICAL PROCESSES SIMULATOR                      */}
      {/* ------------------------------------------------------------- */}
      {activeMode === 'social_processes' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Drivers & Sliders */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5" />
                  {isArabic ? 'محددات التفاعل والعمليات الاجتماعية' : 'Social Interaction Determinants & Processes'}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>{isArabic ? 'العامل البيئي والمصالح المشتركة:' : 'Environmental & Resource Interdependence:'}</span>
                      <span className="font-bold text-emerald-400">{envFactor}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={envFactor}
                      onChange={(e) => setEnvFactor(parseInt(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>{isArabic ? 'العامل الروحي والقيمي (الأخلاقي):' : 'Spiritual, Moral & Value Integration:'}</span>
                      <span className="font-bold text-emerald-400">{normativeFactor}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={normativeFactor}
                      onChange={(e) => setNormativeFactor(parseInt(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>{isArabic ? 'العامل النفسي الأناني والتعصب الفردي:' : 'Egocentric Self-Interest & Hostility:'}</span>
                      <span className="font-bold text-rose-400">{egocentricFactor}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={egocentricFactor}
                      onChange={(e) => setEgocentricFactor(parseInt(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs mt-5 text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'العمليات الاجتماعية هي النماذج الدينامية التي تتشكل عبر حركة التفاعل المستمرة. يؤدي التوازن القيمي والبيئي إلى سيادة التعاون والتكيف والتنافس الشريف، بينما يشعل التعصب الأناني شرارة الصراع الهدام.'
                    : 'Social processes represent the structural trajectories through which continuous interactions evolve. High normative unity fosters cooperation and fair competition, whereas egocentric dominance drives destructive social conflict.'}
                </div>
              </div>
            </div>

            {/* Live Process Equilibrium Dashboard */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700 space-y-4">
                <h4 className="text-sm font-bold text-slate-200">
                  {isArabic ? 'مؤشرات العمليات الاجتماعية الأربع في المجتمع' : 'Four Core Sociological Processes Gauge'}
                </h4>

                {/* 1. Cooperation */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-emerald-400">{isArabic ? '١. التعاون الاجتماعي (Cooperation)' : '1. Social Cooperation'}</span>
                    <span className="font-mono text-emerald-300">{cooperationScore}%</span>
                  </div>
                  <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${cooperationScore}%` }}
                    />
                  </div>
                </div>

                {/* 2. Accommodation */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-cyan-400">{isArabic ? '٢. التكيف الاجتماعي (Accommodation)' : '2. Social Accommodation'}</span>
                    <span className="font-mono text-cyan-300">{accommodationScore}%</span>
                  </div>
                  <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                      style={{ width: `${accommodationScore}%` }}
                    />
                  </div>
                </div>

                {/* 3. Competition */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">{isArabic ? '٣. التنافس البناء (Constructive Competition)' : '3. Social Competition'}</span>
                    <span className="font-mono text-amber-300">{competitionScore}%</span>
                  </div>
                  <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${competitionScore}%` }}
                    />
                  </div>
                </div>

                {/* 4. Conflict */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-rose-400">{isArabic ? '٤. الصراع الاجتماعي (Social Conflict)' : '4. Destructive Conflict'}</span>
                    <span className="font-mono text-rose-300">{conflictScore}%</span>
                  </div>
                  <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-300"
                      style={{ width: `${conflictScore}%` }}
                    />
                  </div>
                </div>

                {/* Distinction Box */}
                <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200">
                  <div className="font-bold mb-1">
                    {isArabic ? 'الفارق المنهجي بين التنافس والصراع:' : 'Competition vs Conflict Differential:'}
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    {isArabic
                      ? 'التنافس عملية منشطة تستهدف الهدف المشروع عبر قواعد متفق عليها، بينما الصراع عملية هدامة يوجه فيها المتصارعون قواهم لتحطيم الخصم مباشرة عند غياب العدالة وتفشي المصالح الفردية غير المشروعة.'
                      : 'Competition channels energy toward legitimate goals under agreed rules; conflict is destructive antagonism aimed at crushing the opponent when equitable justice fails.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 5: CULTURE, ENTREPRENEURSHIP & EXTREMISM MATRIX         */}
      {/* ------------------------------------------------------------- */}
      {activeMode === 'culture_extremism' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Culture Taxonomy */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <h3 className="text-base font-bold text-cyan-400 flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5" />
                  {isArabic ? 'عناصر الثقافة وموديلات العمل الحر' : 'Cultural Elements & Free Enterprise'}
                </h3>

                {/* Cultural 3 Components */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { id: 'universals' as const, labelAr: 'العموميات', labelEn: 'Universals' },
                    { id: 'specialties' as const, labelAr: 'الخصوصيات', labelEn: 'Specialties' },
                    { id: 'alternatives' as const, labelAr: 'المتغيرات البديلة', labelEn: 'Alternatives' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCultureComponent(c.id)}
                      className={`p-2 rounded-lg text-xs font-bold border transition-all ${
                        selectedCultureComponent === c.id
                          ? 'bg-cyan-600/30 text-cyan-200 border-cyan-500 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? c.labelAr : c.labelEn}
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                  <div className="font-bold text-cyan-300">
                    {selectedCultureComponent === 'universals' && (isArabic ? 'عموميات الثقافة:' : 'Cultural Universals:')}
                    {selectedCultureComponent === 'specialties' && (isArabic ? 'خصوصيات الثقافة:' : 'Cultural Specialties:')}
                    {selectedCultureComponent === 'alternatives' && (isArabic ? 'المتغيرات البديلة:' : 'Alternative Inventions:')}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedCultureComponent === 'universals' &&
                      (isArabic
                        ? 'يشترك فيها غالبية أفراد المجتمع (كاللغة، الزي القومي، وأسلوب التحية)، وهي التي تمنح المجتمع طابعه العام وتنمي روح الولاء والانتماء.'
                        : 'Shared by the overwhelming majority (language, national attire, core mores); fosters national identity and cohesive solidarity.')}
                    {selectedCultureComponent === 'specialties' &&
                      (isArabic
                        ? 'تختص بها جماعة معينة أو مهنة معينة (كأخلاقيات مهنة الطب، لغة المهندسين)، مع بقية أفراد المجتمع لديهم فكرة عامة عنها.'
                        : 'Practiced by specialized occupational or sub-cultural segments (medical ethics, engineering terminology) while acknowledged by society.')}
                    {selectedCultureComponent === 'alternatives' &&
                      (isArabic
                        ? 'تجديدات واختراعات تظهر لأول مرة؛ إما أن تندمج في الخصوصيات أو العموميات، أو تبقى منعزلة أو تختفي تماماً.'
                        : 'Novel inventions and temporary cultural mutations; either incorporated into specialties/universals, or eventually discarded.')}
                  </p>
                </div>

                {/* Work Models (Blue vs Davidson) */}
                <div className="mt-4 pt-4 border-t border-slate-700/60">
                  <div className="text-xs font-bold text-slate-300 mb-2">
                    {isArabic ? 'بيئة العمل الحر (Blue vs Davidson):' : 'Free Enterprise Environmental Models:'}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedWorkModel('blue')}
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all ${
                        selectedWorkModel === 'blue'
                          ? 'bg-blue-600/30 text-blue-200 border-blue-500'
                          : 'bg-slate-800/40 text-slate-400 border-slate-700'
                      }`}
                    >
                      {isArabic ? 'نموذج بلو (العوامل المجتمعية)' : "Blue's Structural Model"}
                    </button>
                    <button
                      onClick={() => setSelectedWorkModel('davidson')}
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all ${
                        selectedWorkModel === 'davidson'
                          ? 'bg-blue-600/30 text-blue-200 border-blue-500'
                          : 'bg-slate-800/40 text-slate-400 border-slate-700'
                      }`}
                    >
                      {isArabic ? 'نموذج دافيدسون (القيم الفردية)' : "Davidson's Individual Model"}
                    </button>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 mt-2">
                    {selectedWorkModel === 'blue'
                      ? isArabic
                        ? 'يركز بلو على العوامل الاقتصادية الكلية وفرص السوق ونموذج الشرعية الاجتماعية.'
                        : 'Blue emphasizes macroeconomic opportunity structures, market conditions, and cultural legitimacy.'
                      : isArabic
                      ? 'يركز دافيدسون على السمات النفسية الشخصية، ودافع الإنجاز الفردي، وحب المخاطرة المحسوبة.'
                      : 'Davidson highlights individual achievement drive, personal risk tolerance, and psychological mindset.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Extremism Spectrum & Dimensions */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <h3 className="text-base font-bold text-rose-400 flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5" />
                  {isArabic ? 'الأبعاد الثلاثة للتطرف واستراتيجيات المواجهة' : 'Tripartite Dimensions of Extremism'}
                </h3>

                {/* 3 Dimensions Selector */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { id: 'cognitive' as const, labelAr: 'المكون المعرفي', labelEn: 'Cognitive' },
                    { id: 'affective' as const, labelAr: 'المكون الوجداني', labelEn: 'Affective' },
                    { id: 'behavioral' as const, labelAr: 'المكون السلوكي', labelEn: 'Behavioral' },
                  ].map((dim) => (
                    <button
                      key={dim.id}
                      onClick={() => setSelectedExtremismDim(dim.id)}
                      className={`p-2 rounded-lg text-xs font-bold border transition-all ${
                        selectedExtremismDim === dim.id
                          ? 'bg-rose-600/30 text-rose-200 border-rose-500 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? dim.labelAr : dim.labelEn}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-rose-300">
                    {selectedExtremismDim === 'cognitive' &&
                      (isArabic ? 'المكون المعرفي (جمود الفكر):' : 'Cognitive Dimension (Dogmatism):')}
                    {selectedExtremismDim === 'affective' &&
                      (isArabic ? 'المكون الوجداني الانفعالي (الكراهية):' : 'Affective Dimension (Fanaticism):')}
                    {selectedExtremismDim === 'behavioral' &&
                      (isArabic ? 'المكون السلوكي (العنف):' : 'Behavioral Dimension (Aggression):')}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedExtremismDim === 'cognitive' &&
                      (isArabic
                        ? 'انعدام القدرة على التأمل والتفكير الناقد، الجمود العقلي، وعجز العقل عن استيعاب الرأي المخالف أو مراجعة المعتقدات دوجماتياً.'
                        : 'Inability to engage in critical reflection, dogmatic mental rigidity, and total refusal to acknowledge counter-evidence.')}
                    {selectedExtremismDim === 'affective' &&
                      (isArabic
                        ? 'شحنات انفعالية عارمة من الغضب والكراهية المطلقة تجاه المخالف، واندفاع عاطفي أعمى يلغي العقلانية والتعاطف الإنساني.'
                        : 'Intense affective hostility, blind emotional fanaticism, and unbridled hatred toward dissenting groups.')}
                    {selectedExtremismDim === 'behavioral' &&
                      (isArabic
                        ? 'ترجمة الجمود والكراهية إلى ممارسات عنيفة وتدميرية، والتعدي على سلامة الأفراد ومؤسسات المجتمع لفرض الرأي بالقوة.'
                        : 'Translating cognitive rigidity and hatred into violent, destructive action and aggressive assault on societal integrity.')}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs mt-3">
                    <span className="font-bold text-emerald-400">
                      {isArabic ? 'استراتيجية المواجهة والتحصين الوزارية: ' : 'Ministry Counter-Strategy: '}
                    </span>
                    <span className="text-slate-300">
                      {isArabic
                        ? 'تجديد الخطاب الفكري، تدريب الطلاب على التفكير الناقد وحل المشكلات، إشاعة ثقافة الحوار وقبول الآخر، وتوفير منافذ إبداعية ورياضية لطاقات الشباب.'
                        : 'Fostering critical thinking, civic dialogue curricula, inclusive cultural platforms, and productive creative avenues for youth.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
