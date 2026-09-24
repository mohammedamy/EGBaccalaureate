import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  Compass,
  Scale,
  Brain,
} from 'lucide-react';
import athensPhoto from '../../../assets/philosophy/school_of_athens_1511.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface PhilosopherHotspot {
  id: string;
  xPct: number;
  yPct: number;
  nameAr: string;
  nameEn: string;
  eraAr: string;
  eraEn: string;
  schoolAr: string;
  schoolEn: string;
  coreDoctrineAr: string;
  coreDoctrineEn: string;
  thanawyaRelevanceAr: string;
  thanawyaRelevanceEn: string;
  dialogueQuoteAr: string;
  dialogueQuoteEn: string;
  examTrapAr: string;
  examTrapEn: string;
}

export const ATHENS_HOTSPOTS: PhilosopherHotspot[] = [
  {
    id: 'plato',
    xPct: 48,
    yPct: 56,
    nameAr: 'أفلاطون (Plato)',
    nameEn: 'Plato',
    eraAr: 'أثينا الكلاسيكية (428 - 348 ق.م)',
    eraEn: 'Classical Athens (428–348 BCE)',
    schoolAr: 'المثالية العقلانية (Rational Idealism)',
    schoolEn: 'Rational Idealism (Theory of Forms)',
    coreDoctrineAr:
      'يشير بيده اليمنى نحو السماء، رمزاً لعالم المُثل الخالد والمتعالي حيث توجد الحقائق والمفاهيم المجردة (الخير والعدالة والجمال)، بينما يعتبر العالم الحسي مجرد ظلال وانعكاسات ناقصة لهذا العالم العقلي الأسمى.',
    coreDoctrineEn:
      'Points upward toward the heavens, symbolizing the transcendent World of Forms/Ideas where immutable truths (Goodness, Justice, Truth) reside, while the sensible world is merely a fleeting shadow of intellectual perfection.',
    thanawyaRelevanceAr:
      'الفصل الثالث (الأخلاق المهنية): نظرية أفلاطون في تقسيم العمل والحاجة الاجتماعية في كتابه (الجمهورية)، ورؤيته لمفهوم العدالة والفضيلة العقلية، والفصل الرابع (التفلسف والقيم).',
    thanawyaRelevanceEn:
      'Chapter 3 (Professional Ethics): Plato’s social division of labor in "The Republic", specialization, and philosophical definition of Justice, paired with Chapter 4 (Values & Axiology).',
    dialogueQuoteAr: '«الخير الأسمى لا يُدرك بالحواس المتغيرة، بل بالبصيرة العقلية المجردة في عالم المُثل.»',
    dialogueQuoteEn: '"The Good is not grasped through changing senses, but through pure intellectual contemplation of the Forms."',
    examTrapAr:
      'فخ وزاري شائع: أفلاطون يرى العمل اليدوي في مدينته الفاضلة من اختصاص العبيد ولا يرتقي لمرتبة المواطن الحر الذي يتفرغ للتفلسف والحكم والبحث الرياضي.',
    examTrapEn:
      'Ministerial Exam Trap: Plato viewed manual labor as the domain of slaves/producers, asserting free citizens should dedicate themselves exclusively to philosophy, statecraft, and intellectual virtues.',
  },
  {
    id: 'aristotle',
    xPct: 52,
    yPct: 56,
    nameAr: 'أرسطو (Aristotle)',
    nameEn: 'Aristotle',
    eraAr: 'المدرسة المشائية (384 - 322 ق.م)',
    eraEn: 'Peripatetic School (384–322 BCE)',
    schoolAr: 'الواقعية التجريبية والمنطق الصوري (Empirical Realism & Logic)',
    schoolEn: 'Empirical Realism & Formal Logic (Organon)',
    coreDoctrineAr:
      'يمد كفه نحو الأرض باعتدال، حاملاً كتابه (الأخلاق النيقوماخية)، مؤكداً أن الجواهر والحقائق لا تفارق المادة المحسوسة، وأن المعرفة تبدأ من الحس والملاحظة المنظمة قبل التجريد الصوري.',
    coreDoctrineEn:
      'Gestures palm-down toward the earth holding his "Nicomachean Ethics", asserting that forms are immanent within physical substance, and that all rational knowledge originates in sensory observation.',
    thanawyaRelevanceAr:
      'الفصل الخامس (الاستقراء الصوري والمنهج الأرسطي): مؤسس علم المنطق، وواضع نظرية القياس الأرسطي (الحدود الثلاثة والقضايا)، والفصل الثالث (أخلاقيات العمل وتقسيمه الطبيعي).',
    thanawyaRelevanceEn:
      'Chapter 5 (Deductive Syllogism & Aristotelian Organon): Founder of formal logic, inventor of the categorical syllogism, and author of Chapter 3 ethical division of labor.',
    dialogueQuoteAr: '«أفلاطون صديق عزيز، ولكن الحقيقة أعز وأقدس من أفلاطون.»',
    dialogueQuoteEn: '"Plato is dear to me, but dearer still is truth."',
    examTrapAr:
      'نقطة وزارية محورية: قياس أرسطو عقيم لا يؤدي إلى معرفة جديدة (المطلوب في النتيجة كامن في المقدمة الكبرى)، مما استدعى ظهور منهج فرانسيس بيكون الاستقرائي.',
    examTrapEn:
      'Ministerial Insight: Aristotelian syllogism is formally valid but sterile/tautological (the conclusion contains nothing not already in the premises), prompting Francis Bacon’s inductive scientific revolution.',
  },
  {
    id: 'socrates',
    xPct: 35,
    yPct: 54,
    nameAr: 'سقراط (Socrates)',
    nameEn: 'Socrates',
    eraAr: 'أثينا الكلاسيكية (470 - 399 ق.م)',
    eraEn: 'Classical Athens (470–399 BCE)',
    schoolAr: 'الفلسفة الأخلاقية والجدل التوليدي (Socratic Method & Ethics)',
    schoolEn: 'Dialectical Inquiry & Virtue Ethics',
    coreDoctrineAr:
      'يتحاور بحرارة مستخدماً أصابعه في العد الجدلي، مجسداً منهج التهكم والتوليد (الديالكتيك) لإسقاط الأوهام والجهل المركب واستخراج الأفكار الفطرية الكامنة في نفوس البشر.',
    coreDoctrineEn:
      'Counts arguments on his fingers, embodying the Socratic elenchus and maieutics (midwifery of thought), interrogating unexamined dogmas to awaken innate philosophical truth.',
    thanawyaRelevanceAr:
      'الفصل الرابع (فلسفة القيم): سقراط رائد القول بأن "الفضيلة علم والرذيلة جهل"، وضرورة التفكير النقدي وفحص الحياة، ومنهج الحوار في الأخلاق التطبيقية.',
    thanawyaRelevanceEn:
      'Chapter 4 (Values & Ethics): Socrates’ foundational axiom "Virtue is Knowledge, Vice is Ignorance", critical inquiry, and dialectical moral examination.',
    dialogueQuoteAr: '«الحياة غير المفحوصة بالتفكير والمساءلة النقدية لا تستحق أن يعيشها إنسان.»',
    dialogueQuoteEn: '"The unexamined life is not worth living for a human being."',
    examTrapAr:
      'التمييز الوزاري: سقراط حارب السوفسطائيين الذين زعموا نسبية الأخلاق والقيم (بروتاجوراس: الإنسان مقياس كل شيء)، وأكد سقراط على موضوعية وثبات الفضيلة.',
    examTrapEn:
      'Exam Trap: Socrates opposed the Sophists (Protagoras: man is the measure of all things) who taught moral relativism, arguing instead for objective, universal ethical standards.',
  },
  {
    id: 'pythagoras',
    xPct: 24,
    yPct: 78,
    nameAr: 'فيثاغورس (Pythagoras)',
    nameEn: 'Pythagoras',
    eraAr: 'ساموس وكروتوني (570 - 495 ق.م)',
    eraEn: 'Samos & Croton (570–495 BCE)',
    schoolAr: 'الفلسفة الرياضية والهارمونية (Mathematical Harmony)',
    schoolEn: 'Mathematical Ontology & Sacred Geometry',
    coreDoctrineAr:
      'يدون في مجلده الهندسي وبجواره لوح الأعداد والهارمونية الموسيقية، مؤكداً أن جوهر الكون كله عدد وتناسب وانسجام رياضي صارم.',
    coreDoctrineEn:
      'Transcribes mathematical theorems next to a slate illustrating musical harmonics, postulating that numbers, ratios, and geometrical symmetry constitute the primordial essence of cosmos.',
    thanawyaRelevanceAr:
      'الفصل السادس (المنطق والرياضيات الصورية): الرياضيات نسق استنباطي يبدأ من مقدمات غير مبرهنة (بديهيات ومسلمات) للوصول إلى مبرهنات رياضية تلهم المنطق الرمزي الحديث.',
    thanawyaRelevanceEn:
      'Chapter 6 (Formal Logic & Axiomatic Systems): Mathematics as an axiomatic-deductive system where postulates and axioms generate necessary theorems, inspiring symbolic logic.',
    dialogueQuoteAr: '«العدد هو المبدأ الأول والجوهر الأبدي الذي يحكم الكون والموسيقى.»',
    dialogueQuoteEn: '"Number is the ruler of forms and ideas, and the cause of gods and daemons."',
    examTrapAr:
      'الربط الاستنباطي: النسق الرياضي عند المناطقة المعاصرين نسق فرضي استنباطي؛ صدق قضاياه نسبي مشروط بصدق المقدمات وعدم تناقضها، وليس صدقاً واقعياً حسياً.',
    examTrapEn:
      'Axiomatic Rule: In mathematical-deductive systems, theorem validity is purely formal and conditional on premise consistency (coherence theory of truth), not empirical correspondence.',
  },
  {
    id: 'averroes',
    xPct: 21,
    yPct: 62,
    nameAr: 'ابن رشد (Averroës / Ibn Rushd)',
    nameEn: 'Averroës (Ibn Rushd)',
    eraAr: 'قرطبة والأندلس (1126 - 1198م)',
    eraEn: 'Cordoba, Al-Andalus (1126–1198 CE)',
    schoolAr: 'العقلانية الفلسفية والتوفيق بين الحكمة والشريعة',
    schoolEn: 'Rational Aristotelianism & Harmonization',
    coreDoctrineAr:
      'يقف بالعمامة الأندلسية الجليلة متطلعاً فوق كتف فيثاغورس، مجسداً "الشارح الأعظم" لأرسطو، وحامل لواء العقلانية النقدية والتأويل البرهاني في الفكر الإسلامي والعالمي.',
    coreDoctrineEn:
      'Depicted in Andalusian turban observing Pythagoras, celebrated as "The Great Commentator" who transmitted Aristotelian logic to the Renaissance and harmonized reason with revelation.',
    thanawyaRelevanceAr:
      'الفصل الرابع (الحرية والمسؤولية والتفلسف): نموذج ابن رشد في كتابه (فصل المقال فيما بين الحكمة والشريعة من الاتصال) ورفض التقليد الأعمى وتأكيد أن الحق لا يضاد الحق.',
    thanawyaRelevanceEn:
      'Chapter 4 (Values, Free Thought & Philosophy): Averroës’ masterpiece "The Decisive Treatise", championing intellectual freedom, demonstration (burhan), and evidence-based reasoning.',
    dialogueQuoteAr: '«الحق لا يضاد الحق، بل يوافقه ويشهد له؛ والنظر العقلي البرهاني لا يتعارض مع الشريعة الصحيحة.»',
    dialogueQuoteEn: '"Truth cannot contradict truth; rather, demonstrated truth accords with and bears witness to revelation."',
    examTrapAr:
      'نقطة امتحانية: ابن رشد ميز بين ثلاثة أصناف من الخطاب: البرهاني (للفلاسفة والمناطقة)، والجدلي (للمتكلمين)، والخطابي (للجمهور)، مؤكداً على أولوية البرهان العقلي.',
    examTrapEn:
      'Ministerial Insight: Averroës distinguished three modes of discourse: Demonstrative (philosophers/logicians), Dialectical (theologians), and Rhetorical (public), prioritizing demonstrative logic.',
  },
  {
    id: 'euclid',
    xPct: 83,
    yPct: 81,
    nameAr: 'إقليدس (Euclid)',
    nameEn: 'Euclid of Alexandria',
    eraAr: 'الإسكندرية البطلمية (300 ق.م)',
    eraEn: 'Alexandrian Ptolemaic Period (c. 300 BCE)',
    schoolAr: 'الهندسة والنسق الاستنباطي الإقليدي (Axiomatic Geometry)',
    schoolEn: 'Axiomatic Geometry & Deductive Rigor',
    coreDoctrineAr:
      'ينحني ممسكاً بالفرجار ليرسم ويشرح مبرهنة هندسية على لوح بازلتي لتلاميذه، واضعاً أول نموذج متكامل للنسق الاستنباطي الهندسي الصارم في كتابه التاريخي (الأصول / العناصر).',
    coreDoctrineEn:
      'Bends over holding a compass measuring geometric figures on a slate, author of "The Elements", the foundational architecture of all formal axiomatic deductive systems.',
    thanawyaRelevanceAr:
      'الفصل السادس (المنطق والرياضيات): المنهج الاستنباطي الرياضي (المعرفات، اللامعرفات، البديهيات، المصادرات أو المسلمات، ثم النظريات أو المبرهنات المستنتجة).',
    thanawyaRelevanceEn:
      'Chapter 6 (Logic and Axiomatic Systems): The anatomy of mathematical deduction (Definitions, Undefined terms, Axioms, Postulates, and Derived Theorems).',
    dialogueQuoteAr: '«لا يوجد طريق ملكي خاص للهندسة؛ المعرفة الرياضية تؤخذ بالبرهان الدقيق خطوة بخطوة.»',
    dialogueQuoteEn: '"There is no royal road to geometry; mathematical truth is won through rigorous demonstration step by step."',
    examTrapAr:
      'الفرق بين البديهية والمسلمة في الامتحان: البديهية قضية واضحة بذاتها يعجز العقل عن إثباتها لبساطتها (الكل أكبر من جزئه)، بينما المسلمة قضية يسلم بها الباحث دون برهان ليتخذها أساساً لنظامه الهندسي.',
    examTrapEn:
      'Critical Thanawya Distinction: An Axiom (بديهية) is self-evident to human intuition (the whole is greater than its part), whereas a Postulate (مسلمة) is posited without proof as a operational building block.',
  },
];

export const SchoolOfAthensStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeHotspot, setActiveHotspot] = useState<PhilosopherHotspot>(ATHENS_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const openFullModal = () => {
    setModalData({
      imageUrl: athensPhoto,
      titleAr: 'مدرسة أثينا — جدارية رافائيل الخالدة (قصر الفاتيكان 1511م)',
      titleEn: 'The School of Athens — Raphael’s Masterpiece Fresco (Vatican Palace 1511 CE)',
      subtitleAr: 'ملتقى عباقرة الفلسفة والعلم عبر العصور وتجسيد الصراع الخالد بين المثالية والتجريبية',
      subtitleEn: 'The Eternal Gathering of Philosophers & Dialectic Synthesis of Rationalism and Empiricism',
      dateOrEraAr: 'عصر النهضة الإيطالي (1509 - 1511م) — عصر الفلسفة والعلوم الإنسانية',
      dateOrEraEn: 'High Italian Renaissance (1509–1511 CE) — Golden Age of Classical Philosophy',
      locationAr: 'قاعة التوقيع (Stanza della Segnatura)، قصر الفاتيكان، روما (إيطاليا)',
      locationEn: 'Apostolic Palace, Stanza della Segnatura, Vatican City (Rome)',
      descriptionAr:
        'جدارية فريسك بمقاييس متحفية مذهلة (500 سم × 770 سم) أبدعها العبقري رافائيل سانزيو لتزين مقر البابا يوليوس الثاني. تُجسد الجدارية ذروة الفكر الإنساني وتضم أعظم فلاسفة وعلماء الحضارات اليونانية والهلينستية والإسلامية. يقف في مركز التكوين المعماري أفلاطون (بملامح ليوناردو دافنشي) مشيراً للسماء، وبجواره تلميذه أرسطو مادا كفه للأرض، محاطين بسقراط وفيثاغورس وابن رشد وإقليدس وبطليموس تحت أقواس رومانية مهيبة.',
      descriptionEn:
        'A monumental Renaissance fresco (500 cm × 770 cm) by Raphael Sanzio in the Papal Palace. Depicts the pantheon of classical philosophy under majestic Roman coffered vaults. Plato (modeled on Leonardo da Vinci) points to the celestial realm of ideal forms, while Aristotle extends his hand toward the terrestrial world of empirical observation, encircled by Socrates, Pythagoras, Averroës, and Euclid.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-purple-50/60 via-slate-50 to-stone-100 border-purple-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-900 border-purple-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                {isArabic ? 'المتحف الفلسفي التفاعلي 4K' : '4K Philosophical Museum'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                1511 CE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-purple-300">
              {isArabic ? 'جدارية مدرسة أثينا وملتقى أقطاب الفلسفة' : 'The School of Athens & Classical Philosophy'}
            </h3>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-md transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'استكشاف اللوحة بدقة 4K كاملة' : 'Inspect 4K Masterpiece'}</span>
        </button>
      </div>

      {/* Main interactive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column (7 cols): 4K Canvas with interactive hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black shadow-2xl group aspect-[16/9]">
            <img
              src={athensPhoto}
              alt="The School of Athens by Raphael 1511"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsating Hotspot Pins */}
            {ATHENS_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-500 text-white ring-4 ring-purple-300/60 scale-125 z-20 shadow-lg'
                      : 'bg-black/70 text-purple-300 border border-purple-400 hover:scale-110 z-10'
                  }`}
                  title={isArabic ? spot.nameAr : spot.nameEn}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-60 absolute" />
                  <Sparkles className="w-4 h-4" />
                </button>
              );
            })}

            {/* Bottom info pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-purple-500/30 flex items-center justify-between text-xs text-purple-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="line-clamp-1 font-semibold">
                  {isArabic ? activeHotspot.nameAr : activeHotspot.nameEn}
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30 text-purple-300 shrink-0">
                {isArabic ? activeHotspot.schoolAr.split('(')[0] : activeHotspot.schoolEn.split('(')[0]}
              </span>
            </div>
          </div>

          {/* Philosopher Selector Carousel Pills */}
          <div className="flex flex-wrap gap-1.5">
            {ATHENS_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                      : 'bg-black/30 border-purple-500/20 text-purple-200/80 hover:bg-purple-900/20'
                  }`}
                >
                  {isArabic ? spot.nameAr.split('(')[0] : spot.nameEn.split('(')[0]}
                </button>
              );
            })}
          </div>

          {/* Dialectic Synthesis Box: Plato vs Aristotle */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-purple-50/70 border-purple-200 text-purple-950' : 'bg-black/40 border-purple-500/30 text-purple-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs text-purple-400 mb-2">
              <Scale className="w-4 h-4" />
              <span>
                {isArabic
                  ? 'الصراع الجدلي المحوري في منهج الثانوية العامة:'
                  : 'Core Dialectical Tension in Curriculum:'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="p-2.5 rounded-lg bg-black/30 border border-purple-500/20">
                <span className="font-bold text-amber-300 block mb-1">
                  {isArabic ? '👆 أفلاطون (المثالية العقلية):' : '👆 Plato (Idealism):'}
                </span>
                {isArabic
                  ? 'المعرفة الحقة سابقة على التجربة الحسية؛ الاستنباط الرياضي وتأمل المُثل الأزلية هما طريق اليقين والفضيلة.'
                  : 'True knowledge precedes sensation; mathematical deduction and contemplation of immutable Forms yield certainty.'}
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-purple-500/20">
                <span className="font-bold text-emerald-300 block mb-1">
                  {isArabic ? '👇 أرسطو (الواقعية والمنطق الصوري):' : '👇 Aristotle (Empiricism & Logic):'}
                </span>
                {isArabic
                  ? 'لا يوجد في العقل شيء لم يمر بالحس أولاً؛ الاستقراء ينطلق من الجزئيات المحسوسة ليصعد إلى الكليات والقوانين العامة.'
                  : 'Nothing exists in the intellect that was not first in the senses; scientific inquiry ascends from particulars to universals.'}
              </div>
            </div>
          </div>
        </div>

        {/* Right column (5 cols): Deep Philosopher profile & Thanawya Amma HOTS */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Active Philosopher Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-stone-900/60 border-purple-500/20'
            }`}
          >
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {isArabic ? activeHotspot.eraAr : activeHotspot.eraEn}
                </span>
                <h4 className="text-lg font-black text-purple-300 mt-1">
                  {isArabic ? activeHotspot.nameAr : activeHotspot.nameEn}
                </h4>
              </div>
              <span className="text-xs text-purple-400 font-bold px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40">
                {isArabic ? activeHotspot.schoolAr : activeHotspot.schoolEn}
              </span>
            </div>

            {/* Core Doctrine */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {isArabic ? 'المبدأ الفلسفي والرمزية في اللوحة:' : 'Philosophical Principle & Symbolism:'}
              </span>
              <p className="text-xs leading-relaxed text-stone-200 bg-black/30 p-3 rounded-xl border border-purple-500/15">
                {isArabic ? activeHotspot.coreDoctrineAr : activeHotspot.coreDoctrineEn}
              </p>
            </div>

            {/* Famous Quote */}
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/25 italic text-xs text-purple-200 leading-relaxed">
              {isArabic ? activeHotspot.dialogueQuoteAr : activeHotspot.dialogueQuoteEn}
            </div>

            {/* Thanawya Amma Curriculum Placement */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {isArabic ? 'الموقع في منهج الثانوية العامة:' : 'Thanawya Amma Curriculum Position:'}
              </span>
              <p className="text-xs leading-relaxed text-stone-300 font-medium">
                {isArabic ? activeHotspot.thanawyaRelevanceAr : activeHotspot.thanawyaRelevanceEn}
              </p>
            </div>

            {/* Ministerial Exam Trap */}
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 فخ واضع الامتحان الوزاري (HOTS):' : '🎯 Ministerial Exam Insight (HOTS):'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeHotspot.examTrapAr : activeHotspot.examTrapEn}
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
