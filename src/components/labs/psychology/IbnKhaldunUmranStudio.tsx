import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  Users,
  Compass,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';
import khaldunPhoto from '../../../assets/psychology/ibn_khaldun_muqaddimah_1377.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface KhaldunHotspot {
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

export const KHALDUN_HOTSPOTS: KhaldunHotspot[] = [
  {
    id: 'umran_title',
    xPct: 45,
    yPct: 30,
    titleAr: 'عنوان الباب الثالث: في العمران البشري',
    titleEn: 'Chapter Title: On Human Civilization (Ilm al-Umran)',
    conceptAr: 'تأسيس علم العمران البشري (علم الاجتماع) كعلم مستقل له موضوع ومنهج وقوانين ثابتة تخضع لها المجتمعات.',
    conceptEn: 'Establishing Human Sociology (Ilm al-Umran) as an independent empirical discipline governed by universal social laws.',
    detailsAr: 'يفتتح ابن خلدون الباب الثالث بالتأكيد على أن الاجتماع الإنساني ضرورة حتمية، وأن دراسة أحوال البشر وعمرانهم ليست مجرد سرد تاريخي، بل علم تحليلي يكشف العلل والأسباب.',
    detailsEn: 'Ibn Khaldun establishes that social association is an absolute human necessity, elevating the study of civilization from chronicle narrative to rigorous analytical science.',
    thanawyaRuleAr: 'النظرية في علم الاجتماع: تحدد اتجاه الباحث وتقدم إطاراً تصورياً يوجه لجمع الوقائع وتنظيمها واستخلاص القوانين، وهو ما ابتكره ابن خلدون بمقدمته.',
    thanawyaRuleEn: 'Sociological Theory Role: Establishes researcher direction, conceptual frameworks, and observational data synthesis.',
  },
  {
    id: 'asabiyyah_line',
    xPct: 44,
    yPct: 47,
    titleAr: 'قضية العصبية الاجتماعية: محرك الملك والتضامن',
    titleEn: 'Asabiyyah: The Engine of Social Cohesion & Statehood',
    conceptAr: 'العصبية الاجتماعية هي رابطة الدم والتضامن والولاء الجمعي التي توحد أفراد الجماعة لتحقيق التعاون والدفاع.',
    conceptEn: 'Asabiyyah represents the vital social solidarity and collective bond that unites tribal and urban cohorts in mutual defense and statehood.',
    detailsAr: 'يرى ابن خلدون أن الدول تنشأ وتزدهر بفضل قوة العصبية والتكافل الاجتماعي، وتنهار عندما يدب الترف والفردية والأنانية فتتحلل الروابط المشتركة.',
    detailsEn: 'Dynasties arise via intense social solidarity, and deteriorate when luxury, individualism, and atomization unravel collective mutual aid.',
    thanawyaRuleAr: 'العمليات الاجتماعية: التفاعل الاجتماعي اليومي بين الأفراد يولد علاقات اجتماعية مستقرة، والتي تتبلور بدورها في "عمليات اجتماعية" كبرى (التعاون، التكيف، التنافس، الصراع).',
    thanawyaRuleEn: 'Social Processes Genesis: Micro-interactions generate stable social relations, which crystallize into macroscopic social processes.',
  },
  {
    id: 'illumination_medallion',
    xPct: 84,
    yPct: 53,
    titleAr: 'شمسية الزخرفة الهندسية والذهب واللازورد',
    titleEn: 'Geometric Illumination Rosette & 24K Gold Leaf',
    conceptAr: 'انتقال المجتمع من خشونة البداوة إلى رقة ورقي العمران الحضري والفنون.',
    conceptEn: 'Evolution from pastoral nomadic austerity to refined urban civilizational architecture and aesthetic arts.',
    detailsAr: 'تجسد الزخرفة الهندسية الدقيقة المذهبة في حواشي المخطوطة قمة التطور الحرفي والثقافي في العصر المملوكي والأندلسي، وهو ما يسميه ابن خلدون "طور كمال العمران والترف".',
    detailsEn: 'The lapis lazuli and 24-karat gold leaf illumination reflects the pinnacle of Mamluk/Andalusian craft guilds, representing mature urban civilizational prosperity.',
    thanawyaRuleAr: 'الثقافة المادية وغير المادية: الزخرفة والمخطوط تمثل ثقافة مادية (تراث ملموس)، بينما النظريات والقيم الأخلاقية تمثل ثقافة غير مادية (معنوية).',
    thanawyaRuleEn: 'Material vs Non-Material Culture: Architectural artifacts embody material culture, whereas philosophical values represent non-material culture.',
  },
  {
    id: 'calligraphy_text',
    xPct: 45,
    yPct: 75,
    titleAr: 'المتن المكتوب بخط الثلث والمغربي الأندلسي',
    titleEn: 'Archival Calligraphy & Historiographical Text',
    conceptAr: 'الملاحظة النقدية والتحقيق التاريخي المقارن لرفض الخرافات والأساطير.',
    conceptEn: 'Critical empirical observation and historiographical scrutiny debunking mythology and hearsay.',
    detailsAr: 'دعا ابن خلدون إلى مطابقة الأخبار المنقولة بقوانين العمران وطبائع البشر قبل تصديقها، مؤسساً بذلك المنهج النقدي الموضوعي في العلوم الإنسانية.',
    detailsEn: 'Ibn Khaldun pioneered historical source criticism, demanding that hearsay be benchmarked against sociological plausibility and empirical realities.',
    thanawyaRuleAr: 'وظائف النظرية الاجتماعية: تلخيص الوقائع، التنبؤ بالظواهر، ترشيد التطبيق العملي، وتحديد أوجه النقص في المعرفة الإنسانية.',
    thanawyaRuleEn: 'Functions of Sociological Theory: Summarizing facts, forecasting social events, guiding pragmatic interventions, and pinpointing knowledge gaps.',
  },
];

export interface SocialProcessItem {
  id: string;
  nameAr: string;
  nameEn: string;
  definitionAr: string;
  definitionEn: string;
  drivingFactorsAr: string;
  drivingFactorsEn: string;
  studentExampleAr: string;
  studentExampleEn: string;
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
}

export const SOCIAL_PROCESSES: SocialProcessItem[] = [
  {
    id: 'cooperation',
    nameAr: 'التعاون الاجتماعي (Social Cooperation)',
    nameEn: 'Social Cooperation',
    definitionAr: 'عملية اجتماعية تتضمن قيام فردين أو أكثر بالعمل معاً لتحقيق غاية مشتركة لا يمكن لأحدهم إنجازها منفرداً.',
    definitionEn: 'A collaborative social process wherein individuals pool efforts to achieve shared goals unachievable in isolation.',
    drivingFactorsAr: 'العامل البيئي (المصلحة المشتركة)، العامل العقائدي الروحي (الوازع الديني والأخلاقي)، العامل النفسي (حب الخير للغير مع حب الذات السوي).',
    drivingFactorsEn: 'Environmental catalyst (shared habitat), spiritual factor (altruism & ethics), psychological factor (reconciled self-interest & altruism).',
    studentExampleAr: 'مجموعة طلاب يشتركون في إعداد بحث تطبيقي لمسابقة أو تنظيف وتجميل فناء المدرسة لخدمة الجميع.',
    studentExampleEn: 'Students co-authoring a capstone scientific paper or rehabilitating a communal campus garden.',
    thanawyaTrapAr: 'التعاون لا ينفي المصلحة الشخصية السوية، بل يؤكد أن الفرد يجد سعادته في مساعدة الآخرين وتحقيق الصالح العام.',
    thanawyaTrapEn: 'Cooperation does not erase self-interest; healthy human nature finds fulfillment in reciprocal social synergy.',
  },
  {
    id: 'accommodation',
    nameAr: 'التكيف الاجتماعي (Social Accommodation / Adaptation)',
    nameEn: 'Social Accommodation / Adaptation',
    definitionAr: 'عملية اجتماعية تهدف إلى التوفيق بين الأفراد أو الجماعات بحيث يتعرف كل طرف على أفكار ومشاعره وسلوك الطرف الآخر لإزالة الصراع والاندماج.',
    definitionEn: 'A process of mutual accommodation mitigating discord and facilitating smooth acculturation into novel social settings.',
    drivingFactorsAr: 'تغير البيئة الثقافية، الانتقال لمدينة أو دولة جديدة، الرغبة في خفض وطأة التوتر والشعور بالاغتراب.',
    drivingFactorsEn: 'Cultural transition, relocation to a new society, psychological imperative to alleviate alienating friction.',
    studentExampleAr: 'انتقال طالب من قرية ريفية إلى مدرسة بالعاصمة أو السفر للدراسة بالخارج فيتعلم عادات البيئة الجديدة تدريجياً.',
    studentExampleEn: 'A student migrating abroad adapting smoothly to university campus traditions and foreign norms.',
    thanawyaTrapAr: 'التكيف يهدف لمنع الصراع والتعايش السلمي؛ بينما التنافس يهدف للتفوق؛ أما التعاون فيهتم بالإنتاج المشترك.',
    thanawyaTrapEn: 'Accommodation aims to defuse tension and enable coexistence; competition aims for distinction; cooperation aims for co-production.',
  },
  {
    id: 'competition',
    nameAr: 'التنافس الاجتماعي (Social Competition)',
    nameEn: 'Social Competition',
    definitionAr: 'عملية اجتماعية يقوم فيها طرفان أو أكثر بتوجيه قواهم نحو الوصول إلى هدف واحد تحكمه قواعد وإجراءات مشتركة دون اعتداء.',
    definitionEn: 'A structured vying between parties striving for a shared laurel under mutually binding, equitable rules without violence.',
    drivingFactorsAr: 'الرغبة في التفوق والتميز وإبراز الكفاءة والجدارة، بشرط الالتزام بالأخلاق والقوانين المشروعة.',
    drivingFactorsEn: 'Drive for meritocratic distinction, strictly bounded by ethical codes and regulatory neutrality.',
    studentExampleAr: 'تنافس طالبين على المركز الأول في أوائل الجمهورية في الثانوية العامة بكل نزاهة واجتهاد دون محاولة إيذاء أحدهما للآخر.',
    studentExampleEn: 'Top scholars competing for nation-wide rank #1 with scholarly sportsmanship and mutual respect.',
    thanawyaTrapAr: 'التنافس سيف ذو حدين: يكون إيجابياً إذا التزم بالقواعد ووجه نحو الهدف، ويتحول إلى "صراع هدام" إذا انحرف لإيذاء الخصم وكسر القواعد.',
    thanawyaTrapEn: 'Competition degenerates into destructive conflict the instant competitors target the person rather than the goal.',
  },
  {
    id: 'conflict',
    nameAr: 'الصراع الاجتماعي (Social Conflict)',
    nameEn: 'Social Conflict',
    definitionAr: 'عملية اجتماعية سلبية هدامة، تعبر عن نضال قوى واحتدام قتال نفسي أو مادي بين أطراف تسعى للإضرار ببعضها وتحطيم الخصم.',
    definitionEn: 'A destructive negative social process where opposing factions employ illicit force to subjugate or eliminate adversaries.',
    drivingFactorsAr: 'غياب العدالة في توزيع الثروات، التفاوت الطبقي الحاد، التعصب الأعمى والطائفية، وانحراف التنافس الشريف إلى أساليب غير مشروعة.',
    drivingFactorsEn: 'Severe socio-economic disparity, sectarian fanaticism, and unprincipled subversion of fair play.',
    studentExampleAr: 'نزاع بين شركتين متنافستين تلجأ فيه إحداهما لتخريب منتجات الأخرى أو نشر شائعات مغرضة لتدمير سمعتها.',
    studentExampleEn: 'Hostile corporate sabotage attempting to destroy an opponent through illicit black propaganda.',
    thanawyaTrapAr: 'الصراع ينشأ غالباً عندما يفقد التنافس مشروعيته الأخلاقية، وهو عملية تصادمية هدامة للمجتمعات تلتهم الطاقات الإيجابية.',
    thanawyaTrapEn: 'Conflict is the tragic terminal consequence of unprincipled competition and systemic socio-economic injustice.',
  },
];

export const IbnKhaldunUmranStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeHotspot, setActiveHotspot] = useState<KhaldunHotspot>(KHALDUN_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Ibn Khaldun 5-Stage Dynasty Simulator State
  const [dynastyStage, setDynastyStage] = useState<number>(1);

  // Selected Social Process
  const [selectedProcess, setSelectedProcess] = useState<SocialProcessItem>(SOCIAL_PROCESSES[0]);

  const openFullModal = () => {
    setModalData({
      imageUrl: khaldunPhoto,
      titleAr: 'مخطوطة مقدمة ابن خلدون (1377م) — وثيقة تأسيس علم العمران البشري والاجتماع',
      titleEn: 'Manuscript Folio of Ibn Khaldun’s Muqaddimah (1377 CE) — Foundation of Sociology',
      subtitleAr: 'الباب الثالث: في أحوال العمران البشري والعصبية الموجبة للملك والتضامن الاجتماعي',
      subtitleEn: 'Chapter 3: On Human Civilization, Social Solidarity (Asabiyyah), and Dynastic Life-Cycles',
      dateOrEraAr: '1377م (العصر المملوكي / قلعة بني سلامة بالجزائر وتونس والقاهرة)',
      dateOrEraEn: '1377 CE (Mamluk Era / North African & Cairo Scriptoriums)',
      locationAr: 'دار الكتب والوثائق القومية بالقاهرة / مكتبة السليمانية بإسطنبول',
      locationEn: 'National Library of Egypt (Cairo) / Süleymaniye Library (Istanbul)',
      descriptionAr:
        'صورة أرشيفية ماكرو فائقة الدقة 4K لمخطوطة أصلية من مقدمة ابن خلدون في علم العمران البشري. يظهر في الصفحة الخط الثلث العربي المتقن بالحبر الكربوني، والعناوين المكتوبة بالحبر القرمزي (الشنجرفي)، والشمسية المزخرفة بالذهب الخالص واللازورد في الهامش، موثقة نص ابن خلدون الرائد في التكافل الاجتماعي وأطوار الحضارات.',
      descriptionEn:
        'A magnificent museum-grade 4K macro archival photograph of an authentic 14th-century folio of Ibn Khaldun’s Muqaddimah. Exhibits exquisite Andalusian/Maghrebi calligraphy in carbon black ink, cinnabar chapter titles, and an intricate 24-karat gold-leaf and lapis lazuli geometric illumination rosette in the margin, codifying the inaugural foundations of human sociology.',
    });
  };

  const DYNASTY_STAGES = [
    {
      num: 1,
      titleAr: 'طور الظفر والاستيلاء',
      titleEn: 'Stage 1: Conquest & Inception',
      descAr: 'تأسيس الدولة بفضل قوة العصبية والتكافل والتواضع والمشاركة بين القائد وجماعته.',
      descEn: 'State establishment driven by uncorrupted Asabiyyah, communal humility, and collective purpose.',
      asabiyyahPct: 100,
      luxuryPct: 10,
    },
    {
      num: 2,
      titleAr: 'طور الاستبداد والانفراد',
      titleEn: 'Stage 2: Autocracy & Consolidation',
      descAr: 'انفراد الحاكم بالملك وإقصاء العصبية القبلية والاستعانة بالمرتزقة والبيروقراطية.',
      descEn: 'Monarch consolidates absolute authority, distancing tribal kinsmen and relying on professional bureaucracy.',
      asabiyyahPct: 75,
      luxuryPct: 35,
    },
    {
      num: 3,
      titleAr: 'طور الفراغ والدعة',
      titleEn: 'Stage 3: Prosperity & Leisure',
      descAr: 'أوج الازدهار العمراني وبناء القصور والمنشآت وتشييد المدن وتخليد الآثار.',
      descEn: 'Pinnacle of civilizational grandeur, monumental architecture, artistic refinement, and municipal glory.',
      asabiyyahPct: 55,
      luxuryPct: 70,
    },
    {
      num: 4,
      titleAr: 'طور القنوع والمسالمة',
      titleEn: 'Stage 4: Contentment & Stagnation',
      descAr: 'الجمود وتقليد الأجداد والاكتفاء بحفظ ما تركه السابقون دون ابتكار أو تجديد.',
      descEn: 'Epistemic complacency, slavish emulation of ancestors, and loss of creative initiative.',
      asabiyyahPct: 30,
      luxuryPct: 85,
    },
    {
      num: 5,
      titleAr: 'طور الإسراف والانحلال',
      titleEn: 'Stage 5: Extravagance & Collapse',
      descAr: 'تبديد أموال الدولة في الملذات، فساد الجيش، انهيار الجباية، وزوال الدولة.',
      descEn: 'Fiscal exhaustion, squandering of public treasure on hedonism, military decay, and unavoidable collapse.',
      asabiyyahPct: 5,
      luxuryPct: 100,
    },
  ];

  const currentStage = DYNASTY_STAGES[dynastyStage - 1];

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
            <BookOpen className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-black tracking-wide flex items-center gap-2">
              <span>{isArabic ? 'مخطوطة مقدمة ابن خلدون وعلم العمران البشري (1377م)' : 'Ibn Khaldun’s Muqaddimah & Umran Sociology (1377 CE)'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isArabic ? 'مؤسس علم الاجتماع' : 'Father of Sociology'}
              </span>
            </h3>
            <p className="text-xs text-stone-400">
              {isArabic
                ? 'استكشف المخطوطة الأصلية، دورة حياة الحضارات الخمس، والعمليات الاجتماعية الأربعة'
                : 'Inspect the original manuscript, the 5 stages of civilization, and the 4 fundamental social processes'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-600/80 hover:bg-amber-500 text-white shadow-md active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير المخطوطة 4K' : '4K Archival Zoom'}</span>
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5">
        {/* Left / Top: 4K Manuscript Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-black aspect-[16/9] group select-none">
            <img
              src={khaldunPhoto}
              alt="Ibn Khaldun Muqaddimah Manuscript 1377"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspots */}
            {KHALDUN_HOTSPOTS.map((hotspot) => {
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
                      isActive ? 'bg-amber-400' : 'bg-cyan-400'
                    }`}
                  />
                  <div
                    className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500 border-white text-stone-950 scale-125 ring-4 ring-amber-400/40'
                        : 'bg-stone-900/90 border-amber-400 text-amber-300 hover:scale-110 hover:bg-amber-900/80'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/85 backdrop-blur-md text-[11px] font-semibold text-amber-200 px-2 py-0.5 rounded border border-amber-500/30 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                    {isArabic ? hotspot.titleAr.split(':')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20 font-medium">
                {isArabic ? 'انقر لفحص نصوص ابن خلدون في علم العمران والعصبية' : 'Click markers to inspect Ibn Khaldun’s sociology text'}
              </span>
              <span className="hidden sm:inline bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-500/30">
                {isArabic ? 'مخطوطة 1377م' : 'Folio 1377 CE'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {KHALDUN_HOTSPOTS.map((h) => {
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
                  <span className="line-clamp-1">{isArabic ? h.titleAr.split(':')[0] : h.titleEn.split(':')[0]}</span>
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
                {isArabic ? 'المفهوم السوسيولوجي التأسيسي:' : 'Foundational Sociological Concept:'}
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
                <span>{isArabic ? '🎯 استنتاج واضع الامتحان الوزاري في علم الاجتماع:' : '🎯 Ministerial Exam Rule:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeHotspot.thanawyaRuleAr : activeHotspot.thanawyaRuleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right / Bottom: 4 Social Processes & Ibn Khaldun Civilizational Cycle */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Social Processes Explorer */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800 pb-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'العمليات الاجتماعية الكبرى (4 عمليات)' : 'The 4 Core Social Processes'}</span>
            </h4>

            {/* 4 Process Buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              {SOCIAL_PROCESSES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProcess(p)}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    selectedProcess.id === p.id
                      ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-md'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                  }`}
                >
                  {isArabic ? p.nameAr.split('(')[0] : p.nameEn.split('(')[0]}
                </button>
              ))}
            </div>

            {/* Selected Process Detail Card */}
            <div className="p-3 bg-black/40 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-amber-300">{isArabic ? selectedProcess.nameAr : selectedProcess.nameEn}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  {selectedProcess.id}
                </span>
              </div>

              <p className="text-stone-300 leading-relaxed text-[11px]">
                {isArabic ? selectedProcess.definitionAr : selectedProcess.definitionEn}
              </p>

              <div className="space-y-1 bg-stone-900/80 p-2 rounded border border-stone-800 text-[11px]">
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  {isArabic ? 'العوامل والدوافع المؤدية إليها:' : 'Driving Factors:'}
                </span>
                <p className="text-stone-300">{isArabic ? selectedProcess.drivingFactorsAr : selectedProcess.drivingFactorsEn}</p>
              </div>

              <div className="space-y-1 bg-stone-900/80 p-2 rounded border border-stone-800 text-[11px]">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  {isArabic ? 'مثال واقعي من بيئة الطالب:' : 'Real-world Example:'}
                </span>
                <p className="text-stone-300 italic">{isArabic ? selectedProcess.studentExampleAr : selectedProcess.studentExampleEn}</p>
              </div>

              <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300">
                🎯 {isArabic ? selectedProcess.thanawyaTrapAr : selectedProcess.thanawyaTrapEn}
              </div>
            </div>
          </div>

          {/* Ibn Khaldun 5-Stage Civilizational Cycle Simulator */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-3">
            <div className="flex justify-between items-center border-b border-stone-800 pb-2">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>{isArabic ? 'أطوار الدولة الخمسة عند ابن خلدون' : 'Ibn Khaldun 5 Stages of Dynasties'}</span>
              </h4>
              <button
                onClick={() => setDynastyStage(1)}
                className="text-[11px] text-stone-400 hover:text-amber-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'طور التأسيس' : 'Stage 1'}</span>
              </button>
            </div>

            {/* Stage Selector Buttons (1 to 5) */}
            <div className="grid grid-cols-5 gap-1.5 text-xs font-bold">
              {[1, 2, 3, 4, 5].map((st) => (
                <button
                  key={st}
                  onClick={() => setDynastyStage(st)}
                  className={`py-1.5 rounded-lg border text-center transition-all ${
                    dynastyStage === st
                      ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-md'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                  }`}
                >
                  {isArabic ? `الطور ${st}` : `St ${st}`}
                </button>
              ))}
            </div>

            {/* Current Stage Deep Breakdown */}
            <div className="p-3 bg-black/40 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-amber-300">{isArabic ? currentStage.titleAr : currentStage.titleEn}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  {isArabic ? `المرحلة ${currentStage.num} من 5` : `Stage ${currentStage.num} / 5`}
                </span>
              </div>

              <p className="text-stone-300 leading-relaxed text-[11px]">
                {isArabic ? currentStage.descAr : currentStage.descEn}
              </p>

              {/* Progress bars: Asabiyyah vs Luxury */}
              <div className="space-y-1.5 pt-1">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-emerald-400 mb-0.5">
                    <span>{isArabic ? 'قوة العصبية والتكافل الاجتماعي:' : 'Asabiyyah Social Solidarity:'}</span>
                    <span>{currentStage.asabiyyahPct}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden border border-emerald-500/30">
                    <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${currentStage.asabiyyahPct}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-rose-400 mb-0.5">
                    <span>{isArabic ? 'مستوى الترف والانغماس الفردي:' : 'Luxury & Atomization:'}</span>
                    <span>{currentStage.luxuryPct}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden border border-rose-500/30">
                    <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: `${currentStage.luxuryPct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Sociological Conclusion */}
            <div className="p-2.5 rounded-lg border border-amber-500/20 bg-amber-500/5 text-[11px] text-amber-300 leading-relaxed">
              💡 {isArabic
                ? 'قانون ابن خلدون التاريخي: «الهرم إذا نزل بالدولة لا يرتفع»، وأن قوة العصبية هي العامل الحاسم في صعود الأمم، بينما الترف يفكك التضامن ويفضي حتماً إلى السقوط.'
                : 'Khaldunian Historiographical Law: "Senescence, once it befalls an empire, is irreversible." Asabiyyah drives civilizational ascent; luxury unweaves cohesion.'}
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
