import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Ship,
  Navigation,
} from 'lucide-react';
import suezPhoto from '../../../assets/historyLab/suez_canal_inauguration_1869.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface SuezHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  geopoliticalLessonAr: string;
  geopoliticalLessonEn: string;
}

export const SUEZ_HOTSPOTS: SuezHotspot[] = [
  {
    id: 'imperial_yacht',
    xPct: 62,
    yPct: 62,
    titleAr: 'اليخت الإمبراطوري "لإيجل" (L\'Aigle) للإمبراطورة أوجيني',
    titleEn: 'Imperial Steam Yacht L\'Aigle (Empress Eugénie)',
    descAr:
      'اليخت الفرنسي الذي قاد الموكب الملكي البحري لافتتاح القناة في 17 نوفمبر 1869، وعلى متنه إمبراطورة فرنسا أوجيني ولفيف من ملوك وأمراء أوروبا.',
    descEn:
      'The French imperial yacht leading the royal naval flotilla into the canal on November 17, 1869, carrying Empress Eugénie and European royalty.',
    geopoliticalLessonAr:
      'جسد الموكب سعي الخديوي إسماعيل لنيل الاعتراف الدولي بمصر كدولة حديثة ("قطعة من أوروبا")، لكنه جلب أعباء ديون ضخمة أضعفت الموقف المالي لمصر.',
    geopoliticalLessonEn:
      'Symbolized Khedive Ismail’s ambition to elevate Egypt to European imperial parity, but incurred crippling foreign debts that precipitated sovereign bankruptcy.',
  },
  {
    id: 'triumphal_arch',
    xPct: 18,
    yPct: 35,
    titleAr: 'قوس النصر التذكاري ومنصة الملوك في بورسعيد',
    titleEn: 'Triumphal Arch & Grand Sovereign Pavilion (Port Said)',
    descAr:
      'شُيدت ثلاث منصات كبرى في بورسعيد: منصة لرجال الدين الإسلامي (المفتي والعلماء)، ومنصة لرجال الدين المسيحي، ومنصة للملوك والأمراء في مشهد تسامح فريد.',
    descEn:
      'Three grand pavilions were constructed at Port Said: one for Islamic scholars, one for Christian prelates, and one for reigning European monarchs.',
    geopoliticalLessonAr:
      'تكلف حفل الافتتاح نحو 1.5 مليون جنيه مصري في وقت كانت الخزانة تعاني، مما دفع إسماعيل للاستدانة بشروط مجحفة.',
    geopoliticalLessonEn:
      'The opening celebrations cost 1.5 million Egyptian pounds at a time of fiscal stress, forcing Ismail into predatory European loan contracts.',
  },
  {
    id: 'egyptian_labor',
    xPct: 88,
    yPct: 75,
    titleAr: 'تضحيات العمالة المصرية (مليون فلاح بالسخرة)',
    titleEn: 'Egyptian Sacrificial Labor (1 Million Conscripted Fellahin)',
    descAr:
      'شارك أكثر من مليون مصري في حفر القناة في ظل نظام السخرة والظروف القاسية ونقص مياه الشرب، واستشهد أكثر من 100 ألف مصري أثناء الحفر.',
    descEn:
      'Over one million Egyptian fellahin dug the canal under brutal forced-labor (corvée) conditions with scarce drinking water; over 100,000 perished.',
    geopoliticalLessonAr:
      'نص امتياز دي ليسبس المجحف على أن تقدم مصر 80% من العمال، وتتنازل عن أراضي المشروع والترعة العذبة مجاناً لشركة القناة دون مقابل!',
    geopoliticalLessonEn:
      'De Lesseps’ concession harshly mandated that Egypt supply 80% of manual labor and forfeit all canal lands and freshwater rights free of charge.',
  },
  {
    id: 'canal_entrance',
    xPct: 75,
    yPct: 40,
    titleAr: 'المدخل الملاحي الشمالي ورابط التجارة العالمية',
    titleEn: 'Northern Maritime Portal Linking Global Commerce',
    descAr:
      'أقصر طريق ملاحي بين الشرق والغرب، وفر 40% من مسافة الإبحار مقارنة بطريق رأس الرجاء الصالح، مما جعل مصر محور ارتكاز الجغرافيا السياسية الدولية.',
    descEn:
      'The shortest maritime route between East and West, shaving 40% of voyage distance compared to Cape of Good Hope, cementing Egypt’s chokepoint supremacy.',
    geopoliticalLessonAr:
      'تحولت قناة السويس إلى الدافع الأكبر لاحتلال بريطانيا لمصر عام 1882 لتأمين طريق مواصلاتها الإمبراطوري إلى الهند.',
    geopoliticalLessonEn:
      'The strategic vitalness of the canal became Britain’s primary pretext for military invasion and occupation of Egypt in 1882.',
  },
];

interface SuezMilestone {
  year: string;
  titleAr: string;
  titleEn: string;
  detailsAr: string;
  detailsEn: string;
  statusTagAr: string;
  statusTagEn: string;
}

export const SUEZ_MILESTONES: SuezMilestone[] = [
  {
    year: '1854 - 1856',
    titleAr: 'امتياز حفر القناة المجحف (دي ليسبس ومحمد سعيد باشا)',
    titleEn: 'The Concession Treaty (Ferdinand de Lesseps)',
    detailsAr:
      'مُنحت الشركة الفرنسية امتياز احتكار الملاحة لمدة 99 عاماً، مع إلزام مصر بتقديم 80% من العمالة، والتنازل عن الأراضي مجاناً، وإعفاء الشركة من الضرائب.',
    detailsEn:
      '99-year monopoly concession granted to the French company; Egypt supplied 80% of labor and free land with complete tax exemption.',
    statusTagAr: 'شروط استعمارية مجحفة',
    statusTagEn: 'Exploitative Concession',
  },
  {
    year: '1869',
    titleAr: 'الافتتاح الأسطوري للقناة في عهد الخديوي إسماعيل',
    titleEn: 'Grand Inauguration under Khedive Ismail',
    detailsAr:
      'افتتاح القناة رسمياً بحضور ملوك أوروبا، وتفاقم أزمة الديون الخارجية التي مهدت للتدخل الأجنبي وصندوق الدين (1876م).',
    detailsEn:
      'Official inauguration attended by European royalty, triggering the debt spiral leading to the Caisse de la Dette (1876).',
    statusTagAr: 'ديون وتدخل أجنبي',
    statusTagEn: 'Debt & Foreign Interference',
  },
  {
    year: '1875 & 1880',
    titleAr: 'بيع أسهم مصر (1875) وحصتها في الأرباح (1880)',
    titleEn: 'Sale of Egyptian Shares (1875) & Profits (1880)',
    detailsAr:
      'باع إسماعيل أسهم مصر لبريطانيا (44% من الأسهم بـ 4 ملايين جنيه)، ثم باعت الحكومة حصة الأرباح الـ 15% لاتحاد الماليين بباريس، فخسرت مصر كل عوائد القناة!',
    detailsEn:
      'Egypt sold its 44% equity to Britain (1875) and its 15% profit share to Paris (1880), losing all financial ownership in the canal.',
    statusTagAr: 'تجريد مصر من ملكيتها',
    statusTagEn: 'Total Financial Stripping',
  },
  {
    year: '1956',
    titleAr: 'قرار التأميم التاريخي للرئيس جمال عبد الناصر والعدوان الثلاثي',
    titleEn: 'Nationalization by President Gamal Abdel Nasser',
    detailsAr:
      'في 26 يوليو 1956، أعلن عبد الناصر تأميم شركة قناة السويس شركة مساهمة مصرية لاستخدام عوائدها في تمويل السد العالي، وتصدت مصر للعدوان الثلاثي الغاشم.',
    detailsEn:
      'On July 26, 1956, Nasser nationalized the canal to finance the High Dam, withstanding the Tripartite Aggression and securing sovereign control.',
    statusTagAr: 'استعادة السيادة الوطنية الكاملة',
    statusTagEn: 'Full Sovereign Reclaiming',
  },
  {
    year: '1973 - 1975',
    titleAr: 'ملحمة العبور وإعادة فتح القناة للملاحة العالمية',
    titleEn: 'October Crossing & 1975 Reopening by Sadat',
    detailsAr:
      'تحولت القناة لخط مواجهة ناري بعد 1967، ثم عبرها أبطال أكتوبر في 1973، وأعاد الرئيس السادات افتتاحها للملاحة الدولية في 5 يونيو 1975 بعد تطهيرها من الألغام.',
    detailsEn:
      'Frontline of the War of Attrition, bridged by the 1973 Crossing, and reopened to world shipping by President Sadat on June 5, 1975.',
    statusTagAr: 'نصر عسكري وسلام',
    statusTagEn: 'Military Triumph & Reopening',
  },
  {
    year: '2015',
    titleAr: 'افتتاح قناة السويس الجديدة ومضاعفة الطاقة الاستيعابية',
    titleEn: 'Inauguration of the New Suez Canal (2015)',
    detailsAr:
      'حفر مجرى ملاحي موازٍ بطول 72 كم بتمويل وطني خالص للمصريين، مما اختصر زمن عبور السفن من 22 إلى 11 ساعة وقضى على فترات الانتظار.',
    detailsEn:
      'Construction of a 72 km parallel channel funded solely by Egyptian bonds, reducing ship transit time from 22 to 11 hours.',
    statusTagAr: 'تطوير استراتيجي حديث',
    statusTagEn: 'Modern Mega-Project',
  },
];

export const SuezCanalGeopoliticsViewer: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<SuezHotspot>(SUEZ_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<SuezMilestone>(SUEZ_MILESTONES[3]); // Nationalization 1956 by default

  const openFullModal = () => {
    setModalData({
      imageUrl: suezPhoto,
      titleAr: 'حفل افتتاح قناة السويس الأسطوري (17 نوفمبر 1869م) — لوحة كلاسيكية متحفية',
      titleEn: 'Grand Inauguration Ceremony of the Suez Canal (Nov 17, 1869) — Masterpiece Painting',
      subtitleAr: 'لوحة زيتية ملكية كلاسيكية تجسد الموكب الإمبراطوري لافتتاح القناة في بورسعيد',
      subtitleEn: 'Classical Oil Painting of the Imperial Opening Flotilla at Port Said',
      dateOrEraAr: 'عهد الخديوي إسماعيل (1863 - 1879م) — عصر النهضة المعمارية وتراكم الديون',
      dateOrEraEn: 'Reign of Khedive Ismail (1863–1879 CE) — Architectural Modernity & Debt Spiral',
      locationAr: 'المدخل الشمالي لقناة السويس في بورسعيد (مصر)',
      locationEn: 'Northern Entrance of the Suez Canal, Port Said (Egypt)',
      descriptionAr:
        'لوحة زيتية كلاسيكية متحفية ترصد الموكب الإمبراطوري لافتتاح قناة السويس في 17 نوفمبر 1869م بحضور الخديوي إسماعيل وإمبراطورة فرنسا أوجيني ونخبة ملوك أوروبا. تُظهر اللوحة المجرى المائي العظيم، الأساطيل والسفن الملكية البخارية المزينة بالأعلام، أقواس النصر والمنصات الاحتفالية الكبرى على شواطئ بورسعيد.',
      descriptionEn:
        'Museum-grade classical oil painting depicting the imperial flotilla opening the Suez Canal on November 17, 1869, attended by Khedive Ismail, French Empress Eugénie, and European heads of state. Highlights the deep blue waterway, ornate steamships, grand triumphal pavilions, and cheering crowds at Port Said.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-sky-50 via-blue-50/20 to-slate-100 border-blue-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-900 border-blue-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-blue-500/20 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-sky-800 to-stone-900 flex items-center justify-center text-white shadow-lg border border-blue-500/30">
            <Ship className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-black tracking-tight">
                {isArabic ? 'استوديو جيوسياسية قناة السويس وشريان الملاحة العالمي' : 'Suez Canal Geopolitics & Global Navigation Studio'}
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                🚢 1854 - 2026
              </span>
            </div>
            <p className="text-xs text-blue-400/80">
              {isArabic
                ? 'فحص لوحة الافتتاح الأسطورية بدقة 4K والمسار الجيوسياسي من الامتياز حتى التأميم وقناة السويس الجديدة'
                : 'Interactive 4K painting viewer and geopolitical evolution from concession to nationalization'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="min-h-[44px] flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs shadow-md transition-all border border-blue-400/30"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'لوحة الافتتاح الأصلية 4K' : 'Original 4K Painting'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Classical Painting with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl bg-black group max-h-[480px]">
            <img
              src={suezPhoto}
              alt="Suez Canal Inauguration 1869"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pulsing Hotspots */}
            {SUEZ_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-blue-500 text-white scale-125 ring-4 ring-blue-300/60 shadow-lg shadow-blue-500/50 z-20'
                      : 'bg-stone-900/80 text-blue-300 hover:bg-blue-500 hover:text-white border border-blue-400/60 shadow-md z-10'
                  }`}
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-60 absolute" />
                  <Sparkles className="w-4 h-4" />
                </button>
              );
            })}

            {/* Bottom Overlay Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-blue-500/30 flex items-center justify-between text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="line-clamp-1 font-semibold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-950 border border-blue-500/30 text-blue-300 shrink-0">
                17 Nov 1869
              </span>
            </div>
          </div>

          {/* Hotspots Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            {SUEZ_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  className={`p-2 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                      : 'bg-black/30 border-blue-500/20 text-blue-200/80 hover:bg-blue-900/20'
                  }`}
                >
                  <span className="line-clamp-1">{isArabic ? spot.titleAr.split('(')[0] : spot.titleEn.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Deep Inspection */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-blue-200 shadow-sm' : 'bg-stone-900/60 border-blue-500/20'
            }`}
          >
            <h4 className="text-base font-black mb-1.5 text-blue-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h4>
            <p className="text-xs leading-relaxed mb-3 text-stone-300">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
            <div
              className={`p-3 rounded-lg border text-xs leading-relaxed ${
                isLight ? 'bg-blue-50 border-blue-200 text-blue-950' : 'bg-black/40 border-blue-500/30 text-blue-200'
              }`}
            >
              <span className="font-bold block mb-1 text-blue-400">
                {isArabic ? '🌐 البعد الجيوسياسي والتاريخي في منهج الثانوية العامة:' : '🌐 Curriculum Geopolitical Impact:'}
              </span>
              {isArabic ? activeHotspot.geopoliticalLessonAr : activeHotspot.geopoliticalLessonEn}
            </div>
          </div>
        </div>

        {/* Right Column: Strategic Milestones from Concession to New Canal */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 mb-1">
            <Navigation className="w-4 h-4" />
            <span>{isArabic ? 'محطات تطور سيادة قناة السويس:' : 'Suez Canal Sovereignty Milestones:'}</span>
          </div>

          <div className="flex flex-col gap-2 max-h-[580px] overflow-y-auto pr-1">
            {SUEZ_MILESTONES.map((m) => {
              const isSelected = selectedMilestone.year === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m)}
                  className={`w-full flex flex-col p-3 rounded-xl text-start transition-all border ${
                    isSelected
                      ? isLight
                        ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                        : 'bg-blue-900/50 border-blue-400 text-white shadow-md'
                      : isLight
                      ? 'bg-white border-slate-200 text-slate-800 hover:bg-blue-50/70 shadow-xs'
                      : 'bg-black/30 border-blue-500/10 text-stone-300 hover:bg-blue-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {m.year}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white text-blue-900'
                          : 'bg-blue-950/60 border border-blue-500/30 text-blue-300'
                      }`}
                    >
                      {isArabic ? m.statusTagAr : m.statusTagEn}
                    </span>
                  </div>
                  <h5 className="font-bold text-xs mb-1">
                    {isArabic ? m.titleAr : m.titleEn}
                  </h5>
                  <p
                    className={`text-[11px] leading-relaxed line-clamp-2 ${
                      isSelected ? 'text-blue-100' : 'text-stone-400'
                    }`}
                  >
                    {isArabic ? m.detailsAr : m.detailsEn}
                  </p>
                </button>
              );
            })}
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
