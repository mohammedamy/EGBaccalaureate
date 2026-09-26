import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Palette,
  Layers,
  Compass,
} from 'lucide-react';
import nefertitiPhoto from '../../../assets/fine_arts/thutmose_nefertiti_bust_1345bc.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface NefertitiHotspot {
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

export const NEFERTITI_HOTSPOTS: NefertitiHotspot[] = [
  {
    id: 'amarna_naturalism_revolution',
    xPct: 45.0,
    yPct: 42.0,
    titleAr: 'ثورة الفن العمارني والواقعية الحميمية (Amarna Realism)',
    titleEn: 'Amarna Stylistic Revolution & Naturalistic Intimacy',
    categoryAr: 'فلسفة النحت والمدرسة الفنية',
    categoryEn: 'Sculptural Philosophy & Artistic Movement',
    descAr:
      'تمثل رأس نفرتيتي أوج الثورة الفنية العمارنية في عهد إخناتون (الأسرة الثامنة عشرة c. 1345 ق.م). كسر النحات الملكي تحتمس القواعد الصارمة والجمود المثالي للدولة القديمة والوسطى، متجهاً نحو واقعية مدهشة وحميمية بصرية تنبض بالحياة، مع إبراز عظام الوجنتين المنحوتة بدقة، والرقبة الرشيقة الطويلة، وملامح الوجه المتناسقة التي تجمع بين الوقار الملكي والجمال الإنساني الحي.',
    descEn:
      'The bust of Queen Nefertiti represents the pinnacle of the Amarna artistic revolution under Akhenaten (18th Dynasty, c. 1345 BCE). Royal sculptor Thutmose departed from the rigid, idealized formalism of previous kingdoms, introducing fluid organic naturalism, delicate cheekbone modeling, an elongated graceful neck, and an intimate aesthetic combining sovereign majesty with lifelike human sensitivity.',
    scientificInsightAr:
      'أثبتت المسوح المقطعية الحديثة (CT-Scan) أن تحتمس نحت في البداية قالباً كلسياً داخلياً بملامح واقعية تجريدية، ثم كساها بطبقات متدرجة من الجص الناعم (Stucco) ليصنع أدق التموجات حول العينين والفم.',
    scientificInsightEn:
      'Modern CT-scan radiography reveals that Thutmose first carved an inner limestone core with distinct facial proportions, then sculpted progressive micro-layers of fine gypsum stucco to produce the delicate skin contours around the lips and eyes.',
  },
  {
    id: 'limestone_stucco_pigments',
    xPct: 78.0,
    yPct: 76.0,
    titleAr: 'الطبقات الجصية والأصباغ المعدنية الفرعونية',
    titleEn: 'Stratified Stucco Layers & Ancient Mineral Pigments',
    categoryAr: 'علم المواد الكيميائية والألوان',
    categoryEn: 'Material Science & Mineral Pigments',
    descAr:
      'تتألف التحفة من قلب من الحجر الجيري المغطى بطبقة رقيقة من الجص المصقول، ملونة بأصباغ معدنية طبيعية احتفظت بنضارتها لأكثر من 3300 عام: الأزرق المصري (سيليكات نحاس الكالسيوم CaCuSi4O10) في التاج، والرهج الأصفر (كبريتيد الزرنيخ As2S3)، والمغرة الحمراء (أكسيد الحديد Fe2O3) للبشرة، والملاكيت الأخضر (كربونات النحاس القاعدية).',
    descEn:
      'The masterpiece comprises a dense limestone core enveloped in finely layered gypsum stucco, painted with authentic ancient Egyptian mineral pigments that have retained their brilliance for 3,300 years: synthetic Egyptian Blue (calcium copper silicate CaCuSi4O10) on the crown, golden Orpiment (arsenic trisulfide As2S3), Red Ochre (iron oxide Fe2O3) for skin tone, and green Malachite.',
    scientificInsightAr:
      'يعتبر "الأزرق المصري" أول صبغة صناعية مركبة في التاريخ البشري، تم تصنيعها بصهر الكوارتز والحجر الجيري ومركبات النحاس والرماد القلوي عند حرارة 850-900 درجة مئوية.',
    scientificInsightEn:
      'Egyptian Blue is celebrated as humanity’s first synthetic pigment, produced through pyrochemical calcination of quartz sand, limestone, copper compound, and natron flux at 850-900°C.',
  },
  {
    id: 'sculptors_grid_canon',
    xPct: 72.0,
    yPct: 92.0,
    titleAr: 'شبكة النسب والكانون النحتي (Proportional Canon Grid)',
    titleEn: 'Sculptural Proportions & Ancient Grid Canon',
    categoryAr: 'الهندسة والنسب الرياضية',
    categoryEn: 'Geometry & Proportional Systems',
    descAr:
      'البرديات التحضيرية في محترف تحتمس تعتمد شبكة المربعات المصرية القديمة لتحديد نسب الرأس الإنساني بدقة رياضية متناهية. في العصر العمارني تم تعديل الكانون التقليدي من 18 مربعاً لطول الجسد إلى 20 مربعاً، مما سمح بإطالة الرقبة واستطالة التاج الملكي بنسب ذهبية مريحة بصرياً.',
    descEn:
      'Preparatory papyri in Thutmose’s atelier exhibit the ancient Egyptian grid system used to draft human head proportions with mathematical rigour. During the Amarna period, the canon was expanded from 18 squares to 20 squares for full standing height, accommodating the elegant lengthening of the neck and tall crown silhouette.',
    scientificInsightAr:
      'الخط الوهمي المار من منتصف التاج عبر جسر الأنف ومنتصف الشفتين حتى الذقن يُظهر تماثلاً ثنائياً مذهلاً بانحراف يقل عن 0.8 مليمتر، ما يشهد على دقة هندسية لا تضاهى.',
    scientificInsightEn:
      'The vertical sagittal axis extending from the apex of the crown through the nasal bridge and philtrum reveals bilateral facial symmetry with less than 0.8 mm deviation.',
  },
  {
    id: 'royal_blue_crown_uraeus',
    xPct: 52.0,
    yPct: 18.0,
    titleAr: 'التاج الأزرق الملكي وصل الأورايوس (The Blue Khepresh Crown)',
    titleEn: 'Royal Blue Crown & The Protective Uraeus',
    categoryAr: 'الرموز السيادية والميثولوجيا',
    categoryEn: 'Sovereignty & Royal Iconography',
    descAr:
      'ترتدي الملكة تاجاً أسطوانياً مسطح الرأس ذا حافة علوية مائلة، يتميز بشريط ذهبي محلى بزخارف زهرية وشرائط خلفية تتدلى نحو القفا، وتتصدره حية الكوبرا الملكية (الصل / الأورايوس) كحامية مقدسة للملكية المصرية. صُمم هذا التاج خصيصاً لنفرتيتي كدلالة على مشاركتها الفعلية في الحكم الكهنوتي والسياسي كقرينة وشريكة للملك.',
    descEn:
      'Nefertiti wears a unique tall, flat-topped cylindrical blue crown adorned with a golden diadem ribbon and back ribbons cascading toward the nape, crowned at the forehead by the royal rearing cobra (Uraeus). This iconic headdress was custom-designed for Nefertiti, signifying her active co-regency and divine solar role.',
    scientificInsightAr:
      'التوازن الميكانيكي الرائع بين ارتفاع التاج وميل الرقبة إلى الأمام بمقدار 7 درجات يحقق مركز ثقل متزن تماماً فوق قاعدة النصب، مانعاً تمثال الحجر الجيري من الانقلاب.',
    scientificInsightEn:
      'The forward 7-degree tilt of the neck counterbalances the high rear elevation of the tall crown, aligning the center of gravity directly above the vertical cervical pedestal.',
  },
  {
    id: 'thutmose_workshop_archaeology',
    xPct: 22.0,
    yPct: 78.0,
    titleAr: 'ورشة النحات تحتمس بتل العمارنة (Thutmose Atelier P 47.2)',
    titleEn: 'Archaeology of Thutmose’s Royal Atelier (House P 47.2)',
    categoryAr: 'علم الآثار والتنقيب التاريخي',
    categoryEn: 'Archaeology & Workshop Discovery',
    descAr:
      'اكتشفت البعثة الألمانية برئاسة لودفيج بورشاردت ورشة تحتمس في تل العمارنة في 6 ديسمبر 1912 في المربع السكني P 47.2. وُجدت الرأس على رف خشبي منهار، وعُثر بجوارها على أدوات النحت من الأزاميل البرونزية، وأحجار الحك الرملية، وجماجم وقوالب جبسية للوجوه الملكية، مما أثبت أن التمثال كان نموذجاً استرشادياً رئيسياً (Master Studio Model).',
    descEn:
      'Discovered on December 6, 1912, by Ludwig Borchardt’s excavation team in Tell el-Amarna (House complex P 47.2). The bust rested on a collapsed wooden shelf alongside master bronze chisels, quartzite smoothing blocks, and plaster face casts, establishing that it served as the royal master model for crafting official portraits.',
    scientificInsightAr:
      'العين اليسرى لم تُركب فيها بؤبؤ الكوارتز الأسود عمداً، لأن التمثال كان قالباً تدريبياً وتعليمياً لطلاب ورشة النحت الملكية وليس تمثالاً جنائزياً مخصصاً للمقابر.',
    scientificInsightEn:
      'The missing pupil in the left eye was deliberately omitted; the bust served as a working master model and instructional reference for atelier apprentices rather than a finished tomb idol.',
  },
];

export const ThutmoseNefertitiStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<NefertitiHotspot>(NEFERTITI_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Studio Mode: 'proportions_grid' | 'pigment_stratigraphy'
  const [studioMode, setStudioMode] = useState<'proportions_grid' | 'pigment_stratigraphy'>('proportions_grid');

  // Proportions Engine State
  const [gridOverlay, setGridOverlay] = useState<'amarna_20' | 'classical_18' | 'symmetry_axis'>('amarna_20');
  const [crownTiltAngle, setCrownTiltAngle] = useState<number>(7); // Forward neck inclination degrees

  // Pigment Stratigraphy Layer: 1: Core Limestone, 2: Coarse Plaster, 3: Fine Stucco, 4: Mineral Pigments
  const [activeLayer, setActiveLayer] = useState<number>(4);

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: nefertitiPhoto,
      titleAr: 'تمثال رأس نفرتيتي للنحات تحتمس — تل العمارنة c. 1345 ق.م',
      titleEn: 'Nefertiti Portrait Bust by Master Sculptor Thutmose — Amarna c. 1345 BCE',
      subtitleAr: 'حجر جيري مكسو بالجص الملون والأصباغ المعدنية الطبيعية (متحف برلين الجديد)',
      subtitleEn: 'Stucco-coated polychrome limestone with authentic mineral pigments (Neues Museum Berlin)',
      descriptionAr:
        'أعظم أيقونات النحت في تاريخ الفن الإنساني القديم. عثر عليها في ورشة النحات الملكي تحتمس بتل العمارنة. تجسد قمة النضج الفني العمارني الذي زاوج بين الهيبة الملكية والتعبيرية الواقعية الفائقة، مع حفظ الألوان الطبيعية من حجر الملاكيت واللازورد والأزرق المصري لآلاف السنين.',
      descriptionEn:
        'One of the most celebrated masterworks of ancient world sculpture. Discovered in the workshop of royal court sculptor Thutmose at Tell el-Amarna. The bust exemplifies the golden zenith of Amarna naturalism, capturing lifelike anatomical grace with preserved natural Egyptian Blue, orpiment, and red ochre pigments.',
      locationAr: 'ورشة النحات تحتمس، تل العمارنة، مصر (المتحف الجديد، برلين)',
      locationEn: 'Thutmose Atelier P 47.2, Tell el-Amarna, Egypt (Neues Museum, Berlin)',
      dateOrEraAr: 'الأسرة الثامنة عشرة، الدولة الحديثة (حوالي 1345 قبل الميلاد)',
      dateOrEraEn: '18th Dynasty, New Kingdom (c. 1345 BCE)',
    }),
    []
  );

  const containerBg = isLight
    ? 'bg-amber-50/60 border-amber-200 text-slate-900'
    : isContrast
    ? 'bg-black border-amber-400 text-amber-300'
    : 'bg-slate-950 border-amber-900/40 text-slate-100';

  const cardBg = isLight
    ? 'bg-white border-slate-200 shadow-sm'
    : isContrast
    ? 'bg-black border-amber-500'
    : 'bg-slate-900/80 border-amber-500/20 backdrop-blur-sm';

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 space-y-6 ${containerBg}`}>
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-700 text-white shadow-lg shadow-amber-600/20">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                1345 BCE • 18th Dynasty
              </span>
              <span className="text-xs font-mono text-slate-400">Amarna Art Revolution</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'رأس نفرتيتي والنحات تحتمس 4K' : 'Thutmose: Nefertiti Bust & Amarna Canon 4K'}
            </h2>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setStudioMode('proportions_grid')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              studioMode === 'proportions_grid'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'شبكة النسب والتماثل' : 'Proportions & Grid'}
          </button>
          <button
            onClick={() => setStudioMode('pigment_stratigraphy')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              studioMode === 'pigment_stratigraphy'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الطبقات والأصباغ' : 'Pigments & Layers'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={nefertitiPhoto}
          alt="Thutmose Nefertiti Bust 1345 BCE"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {NEFERTITI_HOTSPOTS.map((h, idx) => {
          const isSelected = selectedHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setSelectedHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer group z-20`}
              title={isArabic ? h.titleAr : h.titleEn}
            >
              <span
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 font-mono text-xs font-black transition-all ${
                  isSelected
                    ? 'bg-amber-500 border-white text-black scale-125 shadow-lg shadow-amber-500/50'
                    : 'bg-black/80 border-amber-400 text-amber-300 hover:scale-110 hover:border-white'
                }`}
              >
                {idx + 1}
              </span>
            </button>
          );
        })}

        {/* Fullscreen HD Modal Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/80 hover:bg-black text-amber-300 border border-amber-500/40 text-xs font-semibold backdrop-blur transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص اللوحة الأرشيفية بدقة 4K' : 'Inspect 4K Master Folio'}</span>
        </button>

        {/* Amarna Overlay Badge */}
        <div className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/80 text-amber-300 border border-amber-500/40 text-xs font-mono backdrop-blur flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{isArabic ? 'ورشة تحتمس P 47.2 — تل العمارنة' : 'Thutmose Atelier P 47.2 • Amarna'}</span>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-amber-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs font-mono text-amber-300/90 leading-relaxed">
            <strong className="text-amber-400">
              {isArabic ? 'التحليل الأثري والتشريحي: ' : 'Archaeological & Anatomical Insight: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Dual Interactive Simulator Engine */}
      {studioMode === 'proportions_grid' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'محلل كانون النسب والتماثل الثنائي العمارني' : 'Amarna Proportions Canon & Bilateral Symmetry Analyzer'}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() => setGridOverlay('amarna_20')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  gridOverlay === 'amarna_20'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'كانون العمارنة (20 مربعاً)' : 'Amarna Canon (20)'}
              </button>
              <button
                onClick={() => setGridOverlay('classical_18')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  gridOverlay === 'classical_18'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'الكانون القديم (18 مربعاً)' : 'Old Canon (18)'}
              </button>
              <button
                onClick={() => setGridOverlay('symmetry_axis')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  gridOverlay === 'symmetry_axis'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'محور التماثل الثنائي' : 'Bilateral Axis'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Interactive Vector Grid SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 340 320" className="w-full max-w-[320px] h-auto overflow-visible">
                {/* Background Grid Lines */}
                {Array.from({ length: gridOverlay === 'amarna_20' ? 10 : 8 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="20"
                    y1={30 + i * 28}
                    x2="320"
                    y2={30 + i * 28}
                    stroke="#b45309"
                    strokeWidth="0.8"
                    strokeDasharray={gridOverlay === 'amarna_20' ? 'none' : '3 3'}
                    opacity="0.35"
                  />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={40 + i * 30}
                    y1="20"
                    x2={40 + i * 30}
                    y2="300"
                    stroke="#b45309"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />
                ))}

                {/* Stylized Bust Silhouette */}
                {/* Tall Crown */}
                <polygon
                  points="130,45 210,45 225,120 120,120"
                  fill="#0369a1"
                  fillOpacity="0.35"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                {/* Gold Diadem Band */}
                <line x1="120" y1="120" x2="225" y2="120" stroke="#facc15" strokeWidth="4" />
                {/* Face Contour */}
                <path
                  d="M130,120 Q115,170 145,215 Q170,240 170,240 Q170,240 195,215 Q225,170 210,120 Z"
                  fill="#d97706"
                  fillOpacity="0.25"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                />
                {/* Slender Neck */}
                <path
                  d="M152,225 L145,285 Q170,295 195,285 L188,225 Z"
                  fill="#b45309"
                  fillOpacity="0.35"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                />

                {/* Eyeline & Feature Guidemarks */}
                <line x1="100" y1="165" x2="240" y2="165" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
                <circle cx="145" cy="165" r="4.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="195" cy="165" r="4.5" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />

                {/* Mouth Line */}
                <line x1="130" y1="205" x2="210" y2="205" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" />

                {/* Vertical Sagittal Symmetry Axis */}
                <line
                  x1="170"
                  y1="15"
                  x2="170"
                  y2="305"
                  stroke="#f43f5e"
                  strokeWidth={gridOverlay === 'symmetry_axis' ? '2.5' : '1.5'}
                />
                <circle cx="170" cy="165" r="3" fill="#f43f5e" />

                {/* Angle Deviation Indicator */}
                <g transform="translate(170, 20)">
                  <rect x="-35" y="-12" width="70" height="18" rx="4" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
                  <text x="0" y="0" fill="#fecdd3" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    Tilt: +{crownTiltAngle}°
                  </text>
                </g>
              </svg>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-sky-500" /> Crown Height
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500" /> Amarna Facial Grid
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-rose-500" /> Sagittal Symmetry
                </span>
              </div>
            </div>

            {/* Proportions Metrics & Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'زاوية ميل الرقبة للأمام (Forward Tilt)' : 'Neck Forward Inclination'}</span>
                  <span className="font-mono text-amber-400">{crownTiltAngle}°</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={crownTiltAngle}
                  onChange={(e) => setCrownTiltAngle(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  {isArabic
                    ? 'الميل الأمامي بمقدار 7° يوازن وزن التاج الملكي الخلفي ويمنحه وقاراً استثنائياً.'
                    : 'A 7-degree forward neck tilt counterbalances the heavy rear crown mass over the pedestal.'}
                </p>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'الانحراف عن التماثل' : 'Symmetry Delta'}</div>
                  <div className="text-emerald-400 text-sm font-bold mt-0.5">0.68 mm</div>
                  <div className="text-[10px] text-slate-400">99.3% bilateral accuracy</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'نسبة الوجه / التاج' : 'Face/Crown Ratio'}</div>
                  <div className="text-amber-400 text-sm font-bold mt-0.5">1 : 1.618</div>
                  <div className="text-[10px] text-slate-400">Golden Section Φ match</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Studio Mode 2: Pigment Stratigraphy & Material Peeler */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'المقطع الطبقي لمواد النحت والأصباغ الطبيعية' : 'Sculptural Stratigraphy & Mineral Pigment Analyzer'}
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              {isArabic ? `الطبقة المعروضة: ${activeLayer} من 4` : `Layer ${activeLayer} of 4`}
            </div>
          </div>

          {/* Layer Selector Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 1, nameAr: '1. القلب الكلسي', nameEn: '1. Limestone Core', descAr: 'كتلة الحجر الجيري المنحوتة أولياً', descEn: 'Chiseled sedimentary block' },
              { id: 2, nameAr: '2. الجص التأسيسي', nameEn: '2. Coarse Plaster', descAr: 'تسوية المنحنيات وإخفاء الفجوات', descEn: 'Volume & structural leveling' },
              { id: 3, nameAr: '3. الجص الناعم (Stucco)', nameEn: '3. Fine Gypsum Stucco', descAr: 'نحت تفاصيل البشرة والشفتين', descEn: 'Delicate anatomical contours' },
              { id: 4, nameAr: '4. الأصباغ المعدنية', nameEn: '4. Mineral Pigments', descAr: 'الأزرق والرهج والمغرة والملاكيت', descEn: 'Natural permanent minerals' },
            ].map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeLayer === layer.id
                    ? 'bg-amber-600/30 border-amber-400 text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-amber-300">{isArabic ? layer.nameAr : layer.nameEn}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{isArabic ? layer.descAr : layer.descEn}</div>
              </button>
            ))}
          </div>

          {/* Mineral Chemistry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-950 border border-sky-800/40 space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span>{isArabic ? 'الأزرق المصري' : 'Egyptian Blue'}</span>
              </div>
              <div className="text-slate-200 font-bold text-xs">CaCuSi₄O₁₀</div>
              <p className="text-[10px] text-slate-400 font-sans">
                {isArabic ? 'سيليكات نحاس الكالسيوم المصنعة حرارياً في التاج' : 'Synthetic cuprorivaite on crown'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-yellow-800/40 space-y-1">
              <div className="flex items-center gap-1.5 text-yellow-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span>{isArabic ? 'الرهج الأصفر (Orpiment)' : 'Golden Orpiment'}</span>
              </div>
              <div className="text-slate-200 font-bold text-xs">As₂S₃</div>
              <p className="text-[10px] text-slate-400 font-sans">
                {isArabic ? 'كبريتيد الزرنيخ البلوري في الحلي والتاج' : 'Arsenic trisulfide for gold luster'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-rose-800/40 space-y-1">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>{isArabic ? 'المغرة الحمراء' : 'Red Ochre'}</span>
              </div>
              <div className="text-slate-200 font-bold text-xs">Fe₂O₃</div>
              <p className="text-[10px] text-slate-400 font-sans">
                {isArabic ? 'أكسيد الحديد الطبيعي للون البشرة والشفتين' : 'Hematite iron oxide for warm skin tone'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-800/40 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>{isArabic ? 'الملاكيت الأخضر' : 'Malachite Green'}</span>
              </div>
              <div className="text-slate-200 font-bold text-xs">Cu₂CO₃(OH)₂</div>
              <p className="text-[10px] text-slate-400 font-sans">
                {isArabic ? 'كربونات النحاس القاعدية في شريط القلادة' : 'Basic copper carbonate in diadem ribbons'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hi-Res 4K Modal */}
      {isModalOpen && (
        <HiResImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
          lang={isArabic ? 'ar' : 'en'}
          theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
        />
      )}
    </div>
  );
};
