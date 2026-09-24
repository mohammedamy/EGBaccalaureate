import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Scale,
  Award,
  Shield,
  Brain,
  Sliders,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import freudPhoto from '../../../assets/psychology/freud_psychoanalytic_couch_1900.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface FreudHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  conceptAr: string;
  conceptEn: string;
  detailsAr: string;
  detailsEn: string;
  thanawyaRuleAr: string;
  thanawyaRuleEn: string;
}

export const FREUD_HOTSPOTS: FreudHotspot[] = [
  {
    id: 'couch',
    xPct: 43,
    yPct: 62,
    titleAr: 'أريكة التحليل النفسي المغطاة بالسجاد القاشاني',
    titleEn: 'The Iconic Psychoanalytic Couch',
    conceptAr: 'تقنية التداعي الحر (Free Association) واستدعاء مكنونات اللاشعور المحظورة دون رقابة واعية.',
    conceptEn: 'Free Association methodology eliciting repressed unconscious contents free from conscious censorship.',
    detailsAr: 'يستلقي المسترشد مسترخياً على أريكة مغطاة بسجاد شرقي عتيق لتقليل اليقظة الحركية، مما يتيح للأفكار المكبوتة الانبثاق عفوياً عبر زلات اللسان وتداعي الخواطر.',
    detailsEn: 'The patient reclines on an antique Qashqai rug-draped daybed to diminish muscular tension, allowing repressed desires to emerge via parapraxes and uninhibited associations.',
    thanawyaRuleAr: 'الحيل اللاشعورية: معظم آليات الدفاع تعمل في مستوى "اللاشعور" دون وعي من الفرد لحماية الأنا من القلق وتسكين الصراع النفسي الداخلي.',
    thanawyaRuleEn: 'Unconscious Defense Law: Ego defense mechanisms operate outside conscious awareness to protect the ego from devastating psychic anxiety.',
  },
  {
    id: 'antiquities',
    xPct: 83,
    yPct: 58,
    titleAr: 'مكتب فرويد ومجموعة الآثار المصرية القديمة',
    titleEn: 'Freud’s Antiquities & Archaeopsychology Desk',
    conceptAr: 'تشبيه التحليل النفسي بالتنقيب الأثري: استخراج طبقات اللاشعور العميقة كما تُستخرج الآثار المطمورة.',
    conceptEn: 'Archaeological analogy of psychoanalysis: excavating primordial unconscious strata like buried antiquities.',
    detailsAr: 'احتفظ فرويد بأكثر من 2000 قطعة أثرية من تماثيل أوشابتي مصرية وإغريقية على مكتبه بفيينا، معتبراً أن ذكريات الطفولة المبكرة تشبه الآثار الخالدة تحت تراب اللاشعور.',
    detailsEn: 'Freud surrounded his consulting desk with ancient Egyptian shabtis and classical bronzes, arguing that infantile memories remain indelibly preserved beneath psychic sediment.',
    thanawyaRuleAr: 'خبرات الطفولة المبكرة: تؤكد مدرسة التحليل النفسي أن السنوات الخمس الأولى من حياة الطفل تشكل البنية الأساسية لشخصية الراشد وأساليب توافقه النفسي.',
    thanawyaRuleEn: 'Early Childhood Primacy: Psychoanalysis dictates that the first 5 years of life construct the enduring bedrock of adult personality architecture.',
  },
  {
    id: 'triad',
    xPct: 48,
    yPct: 22,
    titleAr: 'الهيكل الثلاثي للشخصية (الهو — الأنا — الأنا الأعلى)',
    titleEn: 'The Structural Personality Triad (Id - Ego - Superego)',
    conceptAr: 'ديناميكية الصراع بين الغرائز الفطرية (الهو) ومبدأ الواقع (الأنا) والضمير المثالي (الأنا الأعلى).',
    conceptEn: 'Dynamic psychic tension balancing instinctual drives (Id), reality testing (Ego), and moral conscience (Superego).',
    detailsAr: 'يعمل الهو بمبدأ اللذة الفوري، ويسعى الأنا الأعلى للكمال الأخلاقي الصارم، بينما يقف الأنا وسيطاً كادحاً يسعى لتحقيق مطالب الهو بطريقة يرتضيها الواقع والضمير.',
    detailsEn: 'The Id demands instant pleasure, the Superego demands uncompromising perfection, while the Ego serves as the pragmatic mediator navigating external reality.',
    thanawyaRuleAr: 'الأنا القوي والاتزان النفسي: الشخصية السوية هي التي ينجح فيها "الأنا" في قيادة الصراع والتوفيق بين متطلبات الغرائز والضمير دون انهيار عصابي.',
    thanawyaRuleEn: 'Ego Strength & Equilibrium: Healthy adjustment occurs when the Ego successfully reconciles Id drives with Superego mandates.',
  },
  {
    id: 'chair',
    xPct: 18,
    yPct: 65,
    titleAr: 'مقعد المحلل النفسي خلف رأس المريض',
    titleEn: 'The Analyst’s Concealed Listening Armchair',
    conceptAr: 'الحياد العلاجي ومنع تشتت المسترشد بلغة الجسد وانفعالات وجه المعالج.',
    conceptEn: 'Therapeutic neutrality preventing transference distortion from the analyst’s micro-expressions.',
    detailsAr: 'يجلس المحلل خلف رأس المسترشد بحيث لا يراه الأخير، مما يمنع انتقال التوقعات الاجتماعية ويسهل عملية "التحويل" وإسقاط المشاعر القديمة على المعالج.',
    detailsEn: 'Positioned outside the analysand’s line of sight, the analyst maintains objective neutrality, fostering transference without non-verbal cues.',
    thanawyaRuleAr: 'الحيل المباشرة مقابل غير المباشرة: الحيل المباشرة لحل الصراع شعورية عقلانية (بذل الجهد، البحث عن بدائل)، بينما حيل الدفاع لاشعورية تلتف حول المشكلة.',
    thanawyaRuleEn: 'Direct vs Indirect Coping: Direct methods are conscious problem-solving acts; defense mechanisms are indirect unconscious evasions.',
  },
];

export interface EgoDefenseItem {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'conscious_adaptive' | 'unconscious_defensive';
  definitionAr: string;
  definitionEn: string;
  studentExampleAr: string;
  studentExampleEn: string;
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
}

export const EGO_DEFENSES: EgoDefenseItem[] = [
  {
    id: 'sublimation',
    nameAr: 'الإعلاء والتسامي (Sublimation)',
    nameEn: 'Sublimation / Ascendance',
    type: 'unconscious_defensive',
    definitionAr: 'تحويل الدوافع غير المقبولة اجتماعياً وأخلاقياً إلى أهداف وأنشطة إنسانية وإبداعية سامية تحظى برضا المجتمع.',
    definitionEn: 'Channeling unacceptable psychic drives into elevated creative, athletic, or social achievements.',
    studentExampleAr: 'تحويل النزعات العدوانية إلى تفوق رياضي في الملاكمة أو جراحة دقيقة تنقذ الأرواح.',
    studentExampleEn: 'Transforming aggressive impulses into championship boxing or life-saving vascular surgery.',
    thanawyaTrapAr: 'أرقى الحيل الدفاعية إطلاقاً لأنه الوحيد الذي يرضي الدوافع الفطرية ويكسب الفرد احترام وتصفيق المجتمع دون أذى.',
    thanawyaTrapEn: 'The most mature defense mechanism, simultaneously satisfying drives and earning collective social admiration.',
  },
  {
    id: 'repression',
    nameAr: 'الكبت (Repression)',
    nameEn: 'Repression',
    type: 'unconscious_defensive',
    definitionAr: 'طرد لاشعوري للمشاعر والأفكار المؤلمة أو الرغبات غير المشروعة من دائرة الشعور والوعي إلى أعماق اللاشعور.',
    definitionEn: 'Involuntary, unconscious banishment of distressing impulses and traumatic memories into the unconscious.',
    studentExampleAr: 'نسيان موعد طبيب الأسنان غير المريح، أو نسيان تفاصيل حادث صادم لا يريد تذكره.',
    studentExampleEn: 'Forgetting an anxiety-provoking dental surgery or repressing traumatic memories of a catastrophe.',
    thanawyaTrapAr: 'الكبت عملية لاشعورية إجبارية تختلف عن "القمع" الذي هو استبعاد شعوري وإرادي مؤقت للفكرة.',
    thanawyaTrapEn: 'Repression is involuntary and unconscious, whereas suppression is a conscious, voluntary deferral.',
  },
  {
    id: 'compensation',
    nameAr: 'التعويض (Compensation)',
    nameEn: 'Compensation',
    type: 'unconscious_defensive',
    definitionAr: 'محاولة الفرد تغطية شعوره بالنقص أو الفشل في ميدان معين بتحقيق التفوق والتميز في ميدان آخر بديل.',
    definitionEn: 'Counterbalancing perceived weaknesses or failures in one domain by excelling in another.',
    studentExampleAr: 'طالب يعاني من ضعف لياقته البدنية وفشله في الرياضة فيعوض ذلك بالعبقرية البرمجية والمركز الأول علمياً.',
    studentExampleEn: 'A student physically weak compensates by becoming the school’s top programmer and scholar.',
    thanawyaTrapAr: 'التعويض يهدف لحماية تقدير الذات من الانهيار عبر تحويل طاقة الإنجاز إلى ساحة بديلة مضمونة النجاح.',
    thanawyaTrapEn: 'Compensation safeguards self-worth by redirecting striving toward an accessible, rewarding alternative theater.',
  },
  {
    id: 'rationalization',
    nameAr: 'التبرير (Rationalization)',
    nameEn: 'Rationalization',
    type: 'unconscious_defensive',
    definitionAr: 'إعطاء أسباب مقبولة عقلياً واجتماعياً ومبررات منطقية ظاهرياً لسلوك فاشل أو تصرف خاطئ، لتغطية الدوافع الحقيقية.',
    definitionEn: 'Devising plausible, logical justifications to disguise failure or inappropriate behavior.',
    studentExampleAr: 'طالب يرسب في الاختبار فيبرر ذلك بأن الأسئلة كانت تعجيزية وأن المراقب كان يشتت انتباهه.',
    studentExampleEn: 'A student who fails an exam rationalizes that the exam was intentionally impossible and unfair.',
    thanawyaTrapAr: 'التبرير ليس كذباً متعمداً؛ فالشخص يصدق مبرراته اللاشعورية تماماً ليحمي ماء وجهه أمام نفسه.',
    thanawyaTrapEn: 'Rationalization is not conscious lying; the individual genuinely believes their self-serving excuses.',
  },
  {
    id: 'projection',
    nameAr: 'الإسقاط (Projection)',
    nameEn: 'Projection',
    type: 'unconscious_defensive',
    definitionAr: 'إلصاق الفرد عيوبه ونقائصه ورغباته المرفوضة بالآخرين واتهامهم بها لتبرئة نفسه منها.',
    definitionEn: 'Attributing one’s own unacceptable impulses, faults, and insecurities onto other people.',
    studentExampleAr: 'شخص يشعر بالبخل أو الكراهية الشديدة لزميله فيتهم زميله بأنه هو الذي يكرهه ويبخل عليه.',
    studentExampleEn: 'A student with underlying hostility towards a peer insists that the peer is malevolent and hateful.',
    thanawyaTrapAr: 'الإسقاط عكس التقمص؛ الإسقاط يدفع ما بداخلي للآخرين، بينما التقمص يسحب ما في الآخرين لداخلي.',
    thanawyaTrapEn: 'Projection expels internal traits onto others, whereas identification internalizes external traits into oneself.',
  },
  {
    id: 'identification',
    nameAr: 'التقمص / التوحد (Identification)',
    nameEn: 'Identification',
    type: 'unconscious_defensive',
    definitionAr: 'استدماج صفات وسمات شخصية أخرى ناجحة أو مشهورة وتقليدها للشعور بالقوة والقيمة وتجاوز مشاعر النقص.',
    definitionEn: 'Internalizing the traits and successes of a celebrated person to enhance one’s own self-esteem.',
    studentExampleAr: 'طالب ضعيف الشخصية يقلد حركات وأسلوب بطل رياضي أو معلم متميز ليشعر بهيبة الشخصية ونفوذها.',
    studentExampleEn: 'A timid student adopts the posture and vocal cadence of an accomplished leader to feel authoritative.',
    thanawyaTrapAr: 'التقمص سوياً في الطفولة لتعلم المعايير من الوالدين، لكنه يصبح حيلة دفاعية إذا كان هروباً من مواجهة النقص الذاتي.',
    thanawyaTrapEn: 'Identification is healthy during childhood socialization but becomes defensive when masking chronic personal inadequacy.',
  },
];

export const FreudPsychoanalyticStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeHotspot, setActiveHotspot] = useState<FreudHotspot>(FREUD_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Lewin Conflict Simulator State
  const [conflictType, setConflictType] = useState<'approach_approach' | 'avoidance_avoidance' | 'approach_avoidance'>('approach_approach');
  const [anxietyScore, setAnxietyScore] = useState<number>(45); // 0-100 Yerkes-Dodson

  // Active Defense Selection
  const [selectedDefense, setSelectedDefense] = useState<EgoDefenseItem>(EGO_DEFENSES[0]);

  const openFullModal = () => {
    setModalData({
      imageUrl: freudPhoto,
      titleAr: 'غرفة التحليل النفسي والأريكة الشهيرة لسيجموند فرويد (فيينا، 1900م)',
      titleEn: 'Sigmund Freud’s Psychoanalytic Consulting Room & Couch (Vienna, 1900 CE)',
      subtitleAr: 'الشارع رقم 19 في بيرغاسه — مهد التداعي الحر وميكانيزمات الدفاع عن الأنا',
      subtitleEn: 'Berggasse 19, Vienna — Cradle of Free Association and Structural Ego Defenses',
      dateOrEraAr: '1900م (تاريخ نشر كتاب تفسير الأحلام وتأسيس نظرية التحليل النفسي)',
      dateOrEraEn: '1900 CE (Publication of The Interpretation of Dreams)',
      locationAr: 'بيرغاسه 19، فيينا — متحف سيجموند فرويد النمساوي',
      locationEn: 'Berggasse 19, Vienna — Freud Museum Austria',
      descriptionAr:
        'صورة أرشيفية فوتوغرافية رائعة بدقة 4K للمكتب الاستشاري الأصلي لسيجموند فرويد في فيينا. تعرض الأريكة القاشانية الفاخرة المخصصة للاستلقاء والتداعي الحر، ومقعد المحلل النفسي الخفي خلف رأس المريض، ومكتب فرويد المحاط بأكثر من ألفي قطعة أثرية فرعونية وإغريقية رمزية تعبر عن طبقات اللاشعور الإنساني السحيقة.',
      descriptionEn:
        'A museum-grade 4K archival photograph of Sigmund Freud’s consulting office at Berggasse 19 in Vienna. Features the Qashqai rug-covered analysis couch designed for free association, the analyst’s armchair positioned to avoid visual interference, and Freud’s desk adorned with classical Egyptian and Greco-Roman antiquities symbolizing deep unconscious strata.',
    });
  };

  // Yerkes-Dodson curve: Performance as quadratic function of Anxiety
  // Peak performance occurs at moderate anxiety (~50)
  const computeYerkesDodsonPerformance = (anxiety: number): { score: number; zoneAr: string; zoneEn: string; color: string } => {
    // Parabola opening downward with peak at anxiety = 50, peak score = 95
    const score = Math.max(15, Math.round(95 - 0.032 * Math.pow(anxiety - 50, 2)));
    if (anxiety < 30) {
      return { score, zoneAr: 'قلق منخفض (لامبالاة وفتور يعطل الإنجاز)', zoneEn: 'Low Anxiety (Apathy & Hypo-arousal)', color: 'text-sky-400' };
    } else if (anxiety <= 70) {
      return { score, zoneAr: 'قلق معتدل (دافع وميسر لأعلى مستويات التفوق)', zoneEn: 'Moderate Anxiety (Optimal Drive & Focus)', color: 'text-emerald-400' };
    } else {
      return { score, zoneAr: 'قلق مرتفع (معطل ومربك للعمليات المعرفية والذاكرة)', zoneEn: 'High Anxiety (Debilitating Hyper-arousal)', color: 'text-rose-400' };
    }
  };

  const performanceMetrics = computeYerkesDodsonPerformance(anxietyScore);

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
            <Brain className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-black tracking-wide flex items-center gap-2">
              <span>{isArabic ? 'غرفة التحليل النفسي لفرويد ومصفوفة حيل الدفاع (1900م)' : 'Freud Consulting Room & Ego Defense Matrix (1900 CE)'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isArabic ? 'مدرسة التحليل النفسي' : 'Psychoanalysis'}
              </span>
            </h3>
            <p className="text-xs text-stone-400">
              {isArabic
                ? 'استكشف أريكة فرويد، صراعات كورت ليفين، حيل الدفاع الثمانية، وقانون يركيز-دودسون للقلق'
                : 'Explore Freud’s couch, Lewin’s conflict typology, 8 ego defenses, and the Yerkes-Dodson curve'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-600/80 hover:bg-amber-500 text-white shadow-md active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'عرض الأريكة 4K' : '4K Archival Zoom'}</span>
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5">
        {/* Left / Top: 4K Photographic Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-black aspect-[16/9] group select-none">
            <img
              src={freudPhoto}
              alt="Freud Psychoanalytic Consulting Room 1900"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspots */}
            {FREUD_HOTSPOTS.map((hotspot) => {
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
                      isActive ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                  />
                  <div
                    className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500 border-white text-stone-950 scale-125 ring-4 ring-amber-400/40'
                        : 'bg-stone-900/90 border-amber-400 text-amber-300 hover:scale-110 hover:bg-amber-900/80'
                    }`}
                  >
                    <Brain className="w-4 h-4" />
                  </div>
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/85 backdrop-blur-md text-[11px] font-semibold text-amber-200 px-2 py-0.5 rounded border border-amber-500/30 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split('(')[0]}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20 font-medium">
                {isArabic ? 'انقر لفحص أريكة فرويد، الآثار المصرية، ومقعد المحلل' : 'Click markers to inspect Freud’s couch & desk'}
              </span>
              <span className="hidden sm:inline bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-500/30">
                {isArabic ? 'فيينا 1900م' : 'Vienna 1900'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FREUD_HOTSPOTS.map((h) => {
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
                  <span className="line-clamp-1">{isArabic ? h.titleAr.split('(')[0] : h.titleEn.split('(')[0]}</span>
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

            <div className="space-y-1">
              <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'المفهوم السيكولوجي المقترن:' : 'Associated Psychological Paradigm:'}
              </span>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-stone-800/60">
                {isArabic ? activeHotspot.conceptAr : activeHotspot.conceptEn}
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isArabic ? activeHotspot.detailsAr : activeHotspot.detailsEn}
            </p>

            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 استنتاج واضع الامتحان الوزاري (ثانوية عامة):' : '🎯 Thanawya Amma Exam Takeaway:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeHotspot.thanawyaRuleAr : activeHotspot.thanawyaRuleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Kurt Lewin Conflict Typology & Ego Defense Explorer */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Lewin Conflict Simulator */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800 pb-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'أنماط الصراع النفسي عند كورت ليفين' : 'Kurt Lewin Conflict Typology'}</span>
            </h4>

            {/* 3 Conflict Mode Buttons */}
            <div className="grid grid-cols-3 gap-1.5 text-xs font-bold">
              {[
                { id: 'approach_approach', labelAr: 'إقدام — إقدام (+/+)', labelEn: 'Approach-App (+/+)' },
                { id: 'avoidance_avoidance', labelAr: 'إحجام — إحجام (-/-)', labelEn: 'Avoid-Avoid (-/-)' },
                { id: 'approach_avoidance', labelAr: 'إقدام — إحجام (+/-)', labelEn: 'Approach-Av (+/-)' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setConflictType(c.id as any)}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    conflictType === c.id
                      ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-md'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                  }`}
                >
                  {isArabic ? c.labelAr : c.labelEn}
                </button>
              ))}
            </div>

            {/* Dynamic Conflict Breakdown Box */}
            <div className="p-3 bg-black/40 rounded-xl border border-stone-800 space-y-1.5 text-xs">
              {conflictType === 'approach_approach' && (
                <>
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>{isArabic ? 'صراع إقدام — إقدام (+/+):' : 'Approach-Approach Conflict (+/+):'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">{isArabic ? 'أيسر أنواع الصراع حلاً' : 'Easiest to resolve'}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    {isArabic
                      ? 'حيرة بين هدفين كلاهما جذاب ومرغوب فيه (مثل: الاختيار بين كليتين قمتين مرموقتين أو وظيفتين ممتازتين). ينتهي الصراع بمجرد الإقدام واختيار أحدهما.'
                      : 'Torn between two highly appealing positive goals. Easily resolved because stepping toward either increases its relative attraction.'}
                  </p>
                </>
              )}

              {conflictType === 'avoidance_avoidance' && (
                <>
                  <div className="font-bold text-rose-400 flex items-center gap-1.5">
                    <span>{isArabic ? 'صراع إحجام — إحجام (-/-):' : 'Avoidance-Avoidance Conflict (-/-):'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">{isArabic ? 'صعب وأكثر إيلاماً' : 'Highly distressing'}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    {isArabic
                      ? 'حيرة بين خيارين كلاهما منفر ومؤلم (مثل: قبول وظيفة مهينة أو المعاناة من الفقر والبطالة، أو تحمل ألم الأسنان أو الذهاب لطبيب الأسنان).'
                      : 'Trapped between two equally repellent alternatives. Highly distressing, frequently inducing paralysis or psychological escape.'}
                  </p>
                </>
              )}

              {conflictType === 'approach_avoidance' && (
                <>
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <span>{isArabic ? 'صراع إقدام — إحجام (+/-):' : 'Approach-Avoidance Conflict (+/-):'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">{isArabic ? 'هدف واحد ذو جاذبية وتنفير' : 'Single ambivalent goal'}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    {isArabic
                      ? 'الهدف نفسه جذاب ومنفر في آن واحد (مثل: الرغبة في تناول الحلوى اللذيذة مع الخوف من السمنة أو ألم السكر). يتردد الشخص كلما اقترب من الهدف.'
                      : 'A single goal possesses both alluring benefits and severe costs (e.g. delicious dessert vs diabetes/obesity risk).'}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Yerkes-Dodson Law of Anxiety & Performance */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-3">
            <div className="flex justify-between items-center border-b border-stone-800 pb-2">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>{isArabic ? 'قانون يركيز-دودسون (القلق ومستوى الأداء)' : 'Yerkes-Dodson Law (Anxiety & Performance)'}</span>
              </h4>
              <span className={`text-xs font-bold font-mono ${performanceMetrics.color}`}>
                {performanceMetrics.score}% {isArabic ? 'كفاءة' : 'Efficiency'}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-stone-300">{isArabic ? 'مستوى القلق والدافعية:' : 'Anxiety / Arousal Level:'}</span>
                <span className="font-mono text-amber-400 font-bold">{anxietyScore} / 100</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={2}
                value={anxietyScore}
                onChange={(e) => setAnxietyScore(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="text-[10px] text-stone-400 flex justify-between font-mono">
                <span>0 {isArabic ? '(لامبالاة)' : '(Apathy)'}</span>
                <span className="text-emerald-400 font-bold">50 {isArabic ? '(معتدل - أمثل)' : '(Optimal)'}</span>
                <span>100 {isArabic ? '(ذعر)' : '(Panic)'}</span>
              </div>
            </div>

            <div className={`p-2.5 rounded-lg border text-xs leading-relaxed bg-black/40 border-stone-800 ${performanceMetrics.color}`}>
              <div className="font-bold flex items-center gap-1.5 mb-0.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{isArabic ? performanceMetrics.zoneAr : performanceMetrics.zoneEn}</span>
              </div>
              <p className="text-[11px] text-stone-300 leading-normal">
                {isArabic
                  ? 'العلاقة بين القلق والأداء منحنية (على شكل مقلوب حرف U)؛ القلق المعتدل يرفع كفاءة الطالب، بينما الإفراط أو التفريط يدمر التحصيل الدراسي.'
                  : 'An inverted-U curve: Moderate anxiety enhances cognitive stamina, while excessive or zero anxiety impairs academic recall.'}
              </p>
            </div>
          </div>

          {/* Ego Defense Mechanism Selector Drawer */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800 pb-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'مستودع حيل الدفاع اللاشعورية (8 آليات)' : 'Ego Defense Mechanisms Repository'}</span>
            </h4>

            {/* Quick Defense Badges */}
            <div className="flex flex-wrap gap-1.5">
              {EGO_DEFENSES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDefense(d)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDefense.id === d.id
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                      : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/40'
                  }`}
                >
                  {isArabic ? d.nameAr.split('(')[0] : d.nameEn.split('/')[0]}
                </button>
              ))}
            </div>

            {/* Selected Defense Details */}
            <div className="p-3 bg-black/40 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-amber-300">{isArabic ? selectedDefense.nameAr : selectedDefense.nameEn}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  {selectedDefense.id}
                </span>
              </div>

              <p className="text-stone-300 leading-relaxed text-[11px]">
                {isArabic ? selectedDefense.definitionAr : selectedDefense.definitionEn}
              </p>

              <div className="p-2 rounded bg-stone-900/80 border border-stone-800 text-[11px] text-stone-300 space-y-1">
                <span className="font-bold text-amber-400/90 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3" />
                  {isArabic ? 'مثال واقعي تطبيقي:' : 'Applied Real-world Example:'}
                </span>
                <p className="italic text-stone-300">{isArabic ? selectedDefense.studentExampleAr : selectedDefense.studentExampleEn}</p>
              </div>

              <p className="text-[10px] text-amber-400 font-semibold bg-amber-500/10 p-2 rounded border border-amber-500/20">
                💡 {isArabic ? selectedDefense.thanawyaTrapAr : selectedDefense.thanawyaTrapEn}
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
