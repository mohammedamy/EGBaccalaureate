import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  AlertTriangle,
  RotateCcw,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import jurjaniPhoto from '../../../assets/arabic/jurjani_dalail_ijaz_1078.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface JurjaniHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  historicalContextAr: string;
  historicalContextEn: string;
  pedagogicalTakeawayAr: string;
  pedagogicalTakeawayEn: string;
}

const JURJANI_HOTSPOTS: JurjaniHotspot[] = [
  {
    id: 'lapis_lazuli_unwan',
    xPct: 70,
    yPct: 25,
    titleAr: 'ديباجة النظم والزخرفة اللازوردية المذهبة',
    titleEn: 'Lapis Lazuli & Gold-Leaf Unwan (Theory of Nazm)',
    roleAr: 'تأسيس "نظرية النظم" البلاغية عند عبد القاهر الجرجاني',
    roleEn: 'Founding the Rhetorical Theory of Nazm (Syntactic Texture & Eloquence)',
    historicalContextAr:
      'ديباجة الإمام أبي بكر عبد القاهر بن عبد الرحمن الجرجاني (المتوفى 471 هـ / 1078 م) في كتابيه الخالدين: "دلائل الإعجاز" و"أسرار البلاغة". أثبت الجرجاني أن الفصاحة والبلاغة ليست في الكلمات المفردة، بل في "النظم" وتواخي المعاني النحوية في سياق تركيبي فريد.',
    historicalContextEn:
      'The illuminated unwan of Abd al-Qahir al-Jurjani (d. 1078 CE) from "Dala’il al-I’jaz" and "Asrar al-Balagha". He revolutionized literary theory by demonstrating that eloquence does not reside in isolated words, but in "Nazm"—the harmonic synthesis of syntax and semantics.',
    pedagogicalTakeawayAr:
      'سر البلاغة يكمن في ملاءمة اللفظ للمعنى النحوي؛ فلا انفصال بين علم النحو وعلم البيان والمعاني.',
    pedagogicalTakeawayEn:
      'Aesthetic rhetoric and syntactic accuracy are indivisible; eloquence is syntax animated by figurative coherence and intentional context.',
  },
  {
    id: 'metaphor_simile_chapter',
    xPct: 35,
    yPct: 32,
    titleAr: 'باب التشبيه والاستعارة (التصريحية والمكنية)',
    titleEn: 'Metaphor (Isti’arah) & Simile (Tashbih) Foliation',
    roleAr: 'تحليل أركان التصوير البياني وانتقال المعنى بين المشبه والمشبه به',
    roleEn: 'Dissecting figurative imagery transfer between vehicle and tenor',
    historicalContextAr:
      'عرّف الجرجاني الاستعارة بأنها "تشبيه حُذف أحد طرفيه"، فإن حُذف المشبه به ورُمز له بشيء من لوازمه كانت "مكنية" (كـ: عضّنا الدهر بنابه)، وإن صُرّح بالمشبه به وحُذف المشبه كانت "تصريحية" (كـ: رأيتُ بحراً يجود بعلمه).',
    historicalContextEn:
      'Jurjani formalized metaphor as an elided simile: if the vehicle (Mushabbah bih) is implicit and evoked through an attribute, it is "Makniyyah"; if the vehicle is explicitly stated and the tenor suppressed, it is "Tasrihiyyah".',
    pedagogicalTakeawayAr:
      'سر جمال التشبيه والاستعارة ثلاثة: التشخيص (تشبيه غير العاقل بعاقل)، أو التجسيم (تشبيه المعنوي بمادي)، أو التوضيح (تشبيه مادي بمادي أو معنوي بمعنوي).',
    pedagogicalTakeawayEn:
      'The threefold Secret of Beauty: Personification (Tashkhis), Concretization (Tajsim), or Clarification (Tawdih).',
  },
  {
    id: 'kinayah_majaz_scholia',
    xPct: 35,
    yPct: 58,
    titleAr: 'باب الكناية والمجاز المرسل وعلاقاته',
    titleEn: 'Metonymy (Kinayah) & Synecdoche (Majaz Mursal)',
    roleAr: 'التعبير بلفظ أُريد به لازم معناه مع جواز إرادة المعنى الأصلي',
    roleEn: 'Expressing an intended entailment while permitting literal plausibility',
    historicalContextAr:
      'أفرد الجرجاني فصولاً بالغة الدقة للمجاز المرسل مبيناً أنه كلمة استُعملت في غير معناها الأصلي لعلاقة غير المشابهة مع قرينة مانعة، وتفترق عن الكناية التي تصح معها إرادة المعنى الحقيقي.',
    historicalContextEn:
      'Al-Jurjani rigorously separated Majaz Mursal (words used figuratively based on non-similarity relationships like part/whole, cause/effect) from Kinayah, where literal truth remains plausible alongside the metonymic implication.',
    pedagogicalTakeawayAr:
      'سر جمال الكناية ثابت: "الإتيان بالمعنى مصحوباً بالدليل عليه في إيجاز وتجسيم". وسر جمال المجاز المرسل: "الإيجاز والدقة في اختيار العلاقة مع المبالغة المقبولة".',
    pedagogicalTakeawayEn:
      'Kinayah secret: "Delivering meaning backed by concrete evidence with conciseness." Majaz Mursal secret: "Conciseness and precision in relational framing."',
  },
  {
    id: 'marginal_bayan_glosses',
    xPct: 15,
    yPct: 75,
    titleAr: 'حواشي أسرار البلاغة والتذوق الجمالي',
    titleEn: 'Marginal Rhetorical Scholia & Aesthetic Hermeneutics',
    roleAr: 'تطبيقات البلاغة على روائع الذكر الحكيم والشعر العربي الخالد',
    roleEn: 'Applying rhetorical hermeneutics to Qur’anic eloquence and classical poetry',
    historicalContextAr:
      'تضم الحواشي تحليلات تطبيقية شهيرة للجرجاني كقوله تعالى: «وَاشْتَعَلَ الرَّأْسُ شَيْباً» مبيناً عظمة إسناد الاشتعال إلى الرأس بدلاً من الشيب ليدل على عموم الشمول والانتشار.',
    historicalContextEn:
      'The marginal scholia document master textual analyses, notably of the Qur’anic verse "And my head flared with grey hair," elucidating why attributing the flaring directly to the head conveys overwhelming, irreversible radiance.',
    pedagogicalTakeawayAr:
      'في امتحانات الثانوية العامة، يُطلب من الطالب دائماً: تحديد الصورة البيانية، ونوعها، وقرينتها، وسر جمالها، وقيمتها الفنية الإيحائية.',
    pedagogicalTakeawayEn:
      'Thanawya Amma exam rubric always demands: figure identification, sub-type, textual indicator, secret of beauty, and emotional evocative value.',
  },
];

interface BalaghaFigure {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  definitionAr: string;
  definitionEn: string;
  exampleAr: string;
  exampleEn: string;
  analysisAr: string;
  analysisEn: string;
  secretOfBeautyAr: string;
  secretOfBeautyEn: string;
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
}

const BALAGHA_FIGURES: BalaghaFigure[] = [
  {
    id: 'tashbih_baligh',
    nameAr: 'التشبيه البليغ (أقوى أنواع التشبيه)',
    nameEn: 'Eloquent Simile (Tashbih Baligh)',
    categoryAr: 'علم البيان - مبحث التشبيه',
    definitionAr: 'ما حُذفت منه أداة التشبيه ووجه الشبه معاً، وبقي الطرفان الأساسيان (المشبه والمشبه به).',
    definitionEn: 'Simile in which both the tool of comparison and the aspect of resemblance are omitted, leaving only tenor and vehicle.',
    exampleAr: 'العِلْمُ نُورٌ يَهْدِي الحَيَارَى ... وَالجَهْلُ ظَلامٌ دَامِسٌ',
    exampleEn: 'Knowledge is light guiding the perplexed ... and ignorance is pitch-black darkness.',
    analysisAr: 'المشبه: العلم (معنوي)، المشبه به: نور (مادي)، حُذفت الأداة ووجه الشبه.',
    analysisEn: 'Tenor: Knowledge (abstract); Vehicle: Light (concrete); comparison tool omitted.',
    secretOfBeautyAr: 'التجسيم (تحويل المعنوي المجرد إلى كائن مادي محسوس يُرى)',
    secretOfBeautyEn: 'Concretization (Tajsim: transforming abstract knowledge into tangible light)',
    thanawyaTrapAr:
      'يأتي التشبيه البليغ على صور نحوية شهيرة: المبتدأ والخبر (العلم نور)، الحال وصاحبها (وقف الجندي صخرةً)، المفعول المطلق المبين للنوع (تفوق الطالب تفوق العباقرة)، إضافة المشبه به للمشبه (نور العلم). فاحذر فخ المفعول المطلق!',
    thanawyaTrapEn:
      'Can appear as Subject-Predicate, Circumstantial Adverb, Cognate Accusative, or Genitive Annexation ("Nur al-’Ilm").',
  },
  {
    id: 'istiarah_makniyyah',
    nameAr: 'الاستعارة المكنية (تشبيه حُذف مشبهه به)',
    nameEn: 'Implicit Metaphor (Isti’arah Makniyyah)',
    categoryAr: 'علم البيان - مبحث الاستعارة',
    definitionAr: 'تشبيه حُذف فيه المشبه به ورُمز له بشيء من لوازمه وصفاته تدل عليه.',
    definitionEn: 'Metaphor where the vehicle is suppressed and evoked by an attached attribute or action.',
    exampleAr: 'وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ',
    exampleEn: 'And lower to them the wing of humility out of tenderness.',
    analysisAr: 'شبه الذل بطائر وديع له أجنحة؛ حُذف المشبه به (الطائر) وأُبقي على لازمة من لوازمه (الجناح).',
    analysisEn: 'Humility is likened to a gentle bird; the bird is omitted and its wing (Janah) is preserved.',
    secretOfBeautyAr: 'التجسيم (جسّم الخضوع القلبي في صورة طائر يخفض جناحه)',
    secretOfBeautyEn: 'Concretization (representing internal filial tenderness as a docile folding wing)',
    thanawyaTrapAr:
      'القرينة الدالة على الاستعارة المكنية تكون دائماً فعلاً أو صفة أو مضافاً مستحيلاً عقلاً وحقيقة (كقول الشاعر: وسلا مصر هل سلا القلب عنها، استعارة مكنية للقلب سر جمالها التشخيص).',
    thanawyaTrapEn:
      'Textual indicator is always an impossible literal attribute (e.g. asking whether the heart forgot = personification).',
  },
  {
    id: 'istiarah_tasrihiyyah',
    nameAr: 'الاستعارة التصريحية (صُرِّح فيها بالمشبه به)',
    nameEn: 'Explicit Metaphor (Isti’arah Tasrihiyyah)',
    categoryAr: 'علم البيان - مبحث الاستعارة',
    definitionAr: 'تشبيه حُذف فيه المشبه وصُرّح بلفظ المشبه به مباشرة في سياق يمتنع حمله على الحقيقة.',
    definitionEn: 'Metaphor in which the tenor is eliminated and the vehicle is explicitly stated in a non-literal context.',
    exampleAr: 'كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ',
    exampleEn: 'A Book We revealed to you to lead people out of darknesses into light.',
    analysisAr: 'المشبه: الكفر والضلال (محذوف)، والمشبه به: الظلمات (مذكور صراحة). وكذلك المشبه: الإيمان والهدى، والمشبه به: النور.',
    analysisEn: 'Tenor: Disbelief & ignorance (suppressed); Vehicle: Darknesses (explicit). Tenor: Faith; Vehicle: Light.',
    secretOfBeautyAr: 'التجسيم والتوضيح (إبراز شناعة الضلال في صورة ظلام حالك)',
    secretOfBeautyEn: 'Concretization & Clarification (vividly portraying straying as suffocating darkness)',
    thanawyaTrapAr:
      'تأتي الاستعارة التصريحية غالباً في كلمة واحدة مفردة (اسم ظاهر)، كقول الشاعر: "أقبل البدر علينا" يقصد المعلم أو القائد. ميزها عن الكناية بوجود قرينة تمنع إرادة المعنى الأصلي.',
    thanawyaTrapEn:
      'Often embodied in a single overt noun ("al-Badr" for teacher/hero), distinguished from Kinayah by the impossibility of the literal meaning.',
  },
  {
    id: 'majaz_mursal_relationships',
    nameAr: 'المجاز المرسل وعلاقاته الثمانية',
    nameEn: 'Synecdoche & Figurative Transfer (Majaz Mursal)',
    categoryAr: 'علم البيان - مبحث المجاز',
    definitionAr: 'كلمة استُعملت في غير معناها الأصلي لعلاقة غير المشابهة مع قرينة مانعة من إرادة المعنى الأصلي.',
    definitionEn: 'Figure where a word is used outside its literal denotation based on a non-similarity relationship.',
    exampleAr: 'يَقُولُونَ بِأَفْوَاهِهِم مَّا لَيْسَ فِي قُلُوبِهِمْ (علاقة كلية: أطلق الفم وأراد اللسان)',
    exampleEn: 'They utter with their mouths what is not in their hearts (Whole relationship: stated mouth, meant tongue).',
    analysisAr: 'العلاقة تُحدد بناءً على اللفظ المذكور في النص: إن ذَكر الجزء وأراد الكل فهي (جزئية: فتحرير رقبة)، وإن ذكر السبب فهي (سببية: رعت الماشية الغيث).',
    analysisEn: 'Relationship is defined strictly by the stated word: if part is named for whole = Partitive; if cause named for effect = Causal.',
    secretOfBeautyAr: 'الإيجاز والدقة في اختيار العلاقة مع المبالغة المقبولة',
    secretOfBeautyEn: 'Brevity and utmost relational precision combined with acceptable hyperbole',
    thanawyaTrapAr:
      'فخ تحديد العلاقة: العلاقة تُسمى باسم "المذكور في الكلام" لا المحذوف! إذا قال: "شربتُ ماء النيل"، ذكر الكل (ماء النيل) وأراد البعض (كوباً منه)، فالعلاقة "كلية" وليست جزئية!',
    thanawyaTrapEn:
      'Golden Rule: Name the relationship after what is STATED, not what is omitted. "Drank the Nile" states the whole, so relationship is "Universal/Total", not partial!',
  },
];

export const JurjaniRhetoricStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<JurjaniHotspot>(JURJANI_HOTSPOTS[0]);
  const [activeFigureIndex, setActiveFigureIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentFigure = BALAGHA_FIGURES[activeFigureIndex];

  const modalData: HiResImageModalData = {
    imageUrl: jurjaniPhoto,
    titleAr: 'مخطوط دلائل الإعجاز للجرجاني (1078 م) — روائع علم البيان والبلاغة',
    titleEn: 'Al-Jurjani’s Dala’il al-I’jaz Manuscript (1078 CE) — Masterpieces of Arabic Rhetoric',
    subtitleAr: 'نظرية النظم وأسرار التشبيه والاستعارة والكناية والمجاز المرسل',
    subtitleEn: 'The Theory of Nazm and secrets of metaphor, metonymy and synecdoche',
    dateOrEraAr: 'القرن الخامس الهجري / 1078 م (جرجان، العصر السلجوقي)',
    dateOrEraEn: '5th Century AH / 1078 CE (Gorgan, Seljuk Golden Era)',
    locationAr: 'متحف المخطوطات الإسلامية / دار الكتب المصرية',
    locationEn: 'Museum of Islamic Manuscripts / Egyptian National Library',
    descriptionAr:
      'صورة فائقة الدقة (4K) لصفحة افتتاحية مذهبة من كتاب "دلائل الإعجاز" للشيخ عبد القاهر الجرجاني. تتميز بتوريق نباتي أندلسي/سلجوقي باللازورد الملكي والذهب الخالص، مع شروح نادرة في المتن والحواشي لأسرار الاستعارة والتشبيه.',
    descriptionEn:
      'Museum-grade 4K archival scan of an illuminated folio from "Dala’il al-I’jaz" by Abd al-Qahir al-Jurjani. Embellished with lapis lazuli ultramarine borders, gold-leaf illumination, and intricate annotations examining metaphor and syntactic textures.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-amber-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950/30 text-stone-100 border-amber-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'دلائل الإعجاز 1078 م' : 'Rhetoric & Metaphor 1078 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Codex</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو الجرجاني: دلائل الإعجاز وبلاغة البيان'
                : 'Jurjani Rhetoric Studio: Figurative Imagery & Balagha Matrix'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/30'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير المخطوط 4K' : 'Expand 4K Codex'}</span>
        </button>
      </div>

      {/* Main Stage: 4K Photographic Canvas + Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-[16/9] group shadow-inner">
            <img
              src={jurjaniPhoto}
              alt="Al-Jurjani Dalail al-Ijaz Manuscript 1078 CE"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Hotspots */}
            {JURJANI_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-10 focus:outline-none"
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="relative flex h-7 w-7">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-blue-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-amber-500 text-black scale-125 ring-2 ring-white'
                          : 'bg-stone-900/90 text-amber-300 border border-amber-400/60 hover:scale-110'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-amber-200">
              <span className="truncate">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <span className="text-amber-400 font-mono text-[10px] ml-2 shrink-0">
                {isArabic ? 'انقر على العلامات التفاعلية' : 'Click interactive pins'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {JURJANI_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-medium text-right transition-all truncate border ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-100 hover:bg-stone-200/80 border-stone-300 text-stone-700'
                      : 'bg-stone-900/60 hover:bg-stone-800/80 border-stone-800 text-stone-300'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Hotspot Deep Inspection Drawer */}
        <div
          className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-amber-400 text-amber-300'
              : isLight
              ? 'bg-white/90 border-amber-200/80 shadow-sm'
              : 'bg-stone-900/80 border-amber-900/40 text-stone-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {isArabic ? 'تحقيق نظرية النظم والبلاغة' : 'Rhetorical Theory & Analysis'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {isArabic ? 'الجرجاني (471 هـ)' : 'Al-Jurjani (471 AH)'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-amber-400 mt-3">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
            <p className="text-xs text-amber-500 font-medium mt-0.5">
              {isArabic ? selectedHotspot.roleAr : selectedHotspot.roleEn}
            </p>

            <div className="mt-3.5 space-y-3 text-xs leading-relaxed">
              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-amber-50/60 border-amber-200 text-stone-800' : 'bg-stone-950/60 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'السياق التراثي والبلاغي:' : 'Heritage & Rhetorical Context:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.historicalContextAr : selectedHotspot.historicalContextEn}</p>
              </div>

              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                }`}
              >
                <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'مستخلص أسئلة البلاغة والنصوص:' : 'Rhetorical Exam Blueprint Insight:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.pedagogicalTakeawayAr : selectedHotspot.pedagogicalTakeawayEn}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
            <span>{isArabic ? 'المرجع: "دلائل الإعجاز" و"أسرار البلاغة" للإمام الجرجاني' : 'Ref: Dala’il al-I’jaz & Asrar al-Balagha'}</span>
            <span className="font-mono text-amber-400">Balagha Codex</span>
          </div>
        </div>
      </div>

      {/* Section 2: Balagha Figures & Secret of Beauty Matrix */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'منظومة البيان: التشبيه، الاستعارة، الكناية، والمجاز المرسل' : 'Bayan Matrix: Simile, Metaphor, Metonymy & Synecdoche'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'استكشف أسرار الجمال البلاغي وضوابط العلاقات وفخاخ أسئلة الثانوية العامة'
                : 'Explore secrets of aesthetic beauty, figurative relationships, and ministerial exam traps'}
            </p>
          </div>

          {/* Figure Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/60 border border-stone-800 self-stretch sm:self-auto overflow-x-auto">
            {BALAGHA_FIGURES.map((figure, idx) => (
              <button
                key={figure.id}
                onClick={() => setActiveFigureIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFigureIndex === idx
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isArabic ? figure.nameAr.split(' ')[0] + ' ' + (figure.nameAr.split(' ')[1] || '') : figure.nameEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Figure Card */}
        <div
          className={`rounded-2xl p-5 border transition-all ${
            isContrast
              ? 'bg-black border-amber-400'
              : isLight
              ? 'bg-white border-amber-200 shadow-sm'
              : 'bg-stone-900/90 border-stone-800'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono text-amber-500">
                {isArabic ? currentFigure.categoryAr : 'Rhetorical Bayan Branch:'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-amber-400">
                {isArabic ? currentFigure.nameAr : currentFigure.nameEn}
              </h4>
            </div>

            <div className="px-3.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
              <span>{isArabic ? 'سر الجمال: ' : 'Secret of Beauty: '}</span>
              <span>{isArabic ? currentFigure.secretOfBeautyAr : currentFigure.secretOfBeautyEn}</span>
            </div>
          </div>

          {/* Figure Dissection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Definition & Classical Example */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div>
                <span className="text-[11px] text-amber-500 font-semibold block mb-1">
                  {isArabic ? 'التعريف البلاغي الدقيق:' : 'Precise Rhetorical Definition:'}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {isArabic ? currentFigure.definitionAr : currentFigure.definitionEn}
                </p>

                <span className="text-[11px] text-emerald-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isArabic ? 'الشاهد البلاغي والنموذج التطبيقي:' : 'Attested Classical Example:'}</span>
                </span>
                <p className="font-serif text-sm sm:text-base text-amber-300 font-bold mb-2">
                  {isArabic ? currentFigure.exampleAr : currentFigure.exampleEn}
                </p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {isArabic ? currentFigure.analysisAr : currentFigure.analysisEn}
                </p>
              </div>
            </div>

            {/* Thanawya Exam Trap */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-rose-50/60 border-rose-200 text-rose-950' : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
              }`}
            >
              <div>
                <span className="text-[11px] text-rose-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isArabic ? 'فخ امتحان الثانوية العامة الحاسم:' : 'Crucial Thanawya Amma Trap:'}</span>
                </span>
                <p className="text-xs leading-relaxed">
                  {isArabic ? currentFigure.thanawyaTrapAr : currentFigure.thanawyaTrapEn}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-rose-500/20 flex items-center justify-between text-xs text-stone-400">
                <span>{isArabic ? 'القيمة الفنية:' : 'Artistic Value:'}</span>
                <span className="text-amber-300 font-semibold">
                  {isArabic ? 'الإيحاء بعمق المعنى والبراعة التصويرية' : 'Evocative psychological resonance'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HiRes Modal */}
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
