import React, { useState } from 'react';
import {
  Eye,
  Maximize2,
  Sparkles,
  Info,
  Layers,
  ZoomIn,
  CheckCircle2,
} from 'lucide-react';
import hookePhoto from '../../../assets/biology/hooke_micrographia_cork_cells_1665.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface HookeHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificProofAr: string;
  scientificProofEn: string;
}

export const HOOKE_HOTSPOTS: HookeHotspot[] = [
  {
    id: 'cork_cellulae',
    xPct: 62.0,
    yPct: 52.0,
    titleAr: 'غرف الفلين المفرغة وصياغة مصطلح الخلية (Cork Cellulae)',
    titleEn: 'Cork Cavities & Coining the Biological "Cell"',
    categoryAr: 'نشأة علم الأحياء الخلوي (Cytology)',
    categoryEn: 'Foundational Cytology & Cell Discovery',
    descAr:
      'أول رصد تاريخي لجدران الخلايا الميتة في نسيج الفلين النباتي؛ حيث شبهها روبرت هوك عام 1665 بحجرات الرهبان الصغيرة في الأديرة وسماها (Cellulae)، لتصبح حجر الزاوية في علم الخلية.',
    descEn:
      'Robert Hooke’s seminal 1665 observation of dead cell walls in oak tree bark (Quercus suber) cork, coining the term "Cellulae" after monastic dormitory chambers.',
    scientificProofAr:
      'ما رآه هوك بالمجهر الضوئي البسيط كان جدران الخلايا السليلوزية المتبقية بعد موت بروتوبلازم خلايا الفلين، وهو ما تأكد لاحقاً بالمجهر الإلكتروني.',
    scientificProofEn:
      'Hooke accurately resolved empty cellulose cell walls preserved post-mortem, foundational to cellular compartmentalization verified by modern electron microscopy.',
  },
  {
    id: 'compound_microscope',
    xPct: 32.0,
    yPct: 45.0,
    titleAr: 'مجهر روبرت هوك المركب بنظام الإضاءة المائي (Compound Microscope)',
    titleEn: 'Hooke’s Dual-Lens Compound Microscope & Water-Flask Condenser',
    categoryAr: 'الأجهزة البصرية والميكروسكوبات',
    categoryEn: 'Optical Instrumentation & Illumination',
    descAr:
      'صمم هوك مجهراً مركباً بعدستين (عينية وشيئية) بقوة تكبير نحو 30x، مزوداً بمصباح زيتي ومقارئ مياه كروية لتكثيف الضوء المركز على العينة وفحص التفاصيل المجهرية.',
    descEn:
      'Hooke engineered a brass dual-lens compound microscope (~30x magnification) coupled with an oil lamp and water-filled glass globe condenser for intense, focused darkfield illumination.',
    scientificProofAr:
      'تطوير العدسات البصرية المحدبة وتكثيف الإضاءة كان الشرط الفيزيائي الأول لتجاوز حدود الرؤية بالعين المجردة (0.1 ملم) ورصد الكائنات الدقيقة.',
    scientificProofEn:
      'Optical lens curvature and focal condensing overcame human optical resolution limits (100 µm) to pioneer empirical micro-histology.',
  },
  {
    id: 'cell_theory_schleiden_schwann',
    xPct: 75.0,
    yPct: 35.0,
    titleAr: 'النظرية الخلوية لشلايدن وشوان (Schleiden & Schwann 1838–1839)',
    titleEn: 'Cell Theory: Schleiden (Botanical) & Schwann (Zoological)',
    categoryAr: 'أركان النظرية الخلوية الكلاسيكية',
    categoryEn: 'Classical Cell Theory Axioms',
    descAr:
      'أثبت العالم الألماني ماتياس شلايدن (1838) أن جميع النباتات تتكون من خلايا، ثم تبعه ثيودور شوان (1839) بأن جميع الحيوانات تتكون من خلايا، لتتحد نتائجها في أن الخلية هي وحدة البناء والوظيفة لجميع الكائنات الحية.',
    descEn:
      'Matthias Schleiden (1838) established that all plant tissues are cellular; Theodor Schwann (1839) expanded this to animal tissues, formulating the universal axiom that the cell is the universal structural and functional unit of life.',
    scientificProofAr:
      'الوحدة التركيبية المشتركة بين الخلايا النباتية والحيوانية (غشاء بلازمي، سيتوبلازم، مادة وراثية DNA) تثبت وحدة الأصل البيولوجي للحياة.',
    scientificProofEn:
      'Biochemical universality of plasma membranes, cytoplasm, ribosomes, and DNA across kingdoms validates unified cellular architecture.',
  },
  {
    id: 'virchow_biogenesis',
    xPct: 75.0,
    yPct: 75.0,
    titleAr: 'مبدأ رودولف فيرشو: نشأة الخلايا (Omnis Cellula e Cellula 1855)',
    titleEn: 'Rudolf Virchow’s Biogenesis: Omnis Cellula e Cellula (1855)',
    categoryAr: 'الانقسام الخلوي والتوالد الحيوي',
    categoryEn: 'Cell Division & Biogenesis',
    descAr:
      'أعلن فيرشو عام 1855 المبدأ الثالث الحاسم للنظرية الخلوية: «الخلايا تنشأ فقط من خلايا سابقة لها نتيجة الانقسام الخلوي (ميتوزي وميوزي)»، داحضاً خرافة التوالد الذاتي.',
    descEn:
      'Rudolf Virchow established the third indispensable tenet in 1855: "All cells arise from pre-existing cells through binary fission or mitosis", permanently refuting spontaneous generation.',
    scientificProofAr:
      'أبحاث لويس باستور وتجارب الدوارق المعوجة وملاحظة أطوار الانقسام الميتوزي أثبتت حتمية التكاثر الخلوي من خلايا حية سابقة.',
    scientificProofEn:
      'Pasteur’s swan-neck flask experiments and cytological tracking of mitotic spindle mechanics proved the impossibility of abiogenesis in modern biology.',
  },
  {
    id: 'microscope_resolution_optics',
    xPct: 22.0,
    yPct: 78.0,
    titleAr: 'حدود التحليل الضوئي والمجهر الإلكتروني (Resolution Limits)',
    titleEn: 'Abbe’s Optical Resolution Limit vs Electron Microscopy',
    categoryAr: 'فيزياء المجاهر والأطوال الموجية',
    categoryEn: 'Biophysical Wave Optics & Resolving Power',
    descAr:
      'الحد النظري للمجهر الضوئي المركب هو 0.2 ميكرومتر (200 نانومتر) بسبب الطول الموجي للضوء المرئي (400-700 نانومتر)، بينما يخترق المجهر الإلكتروني لـ 0.2 نانومتر باستخدام موجات الإلكترونات القصيرة.',
    descEn:
      'Ernst Abbe’s diffraction limit restricts compound optical microscopes to ~200 nm resolution due to light wavelength; transmission electron microscopes (TEM) achieve sub-nanometer (~0.2 nm) resolution using accelerated electron beams.',
    scientificProofAr:
      'معادلة آبي d = λ / (2 NA) توضح أن استبدال الضوء بشعاع إلكتروني بطول موجي 0.005 نانومتر مكّن من رؤية الغشاء الخلوي والرايبوسومات والـ DNA.',
    scientificProofEn:
      'Abbe equation d = λ / (2 NA) dictates that relativistic de Broglie electron wavelengths (~0.005 nm) reveal ribosomes, membrane bilayers, and chromatin.',
  },
];

export const HookeCellTheoryStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<HookeHotspot>(HOOKE_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Optical Magnification & Resolving Power Simulator
  const [magnificationLevel, setMagnificationLevel] = useState<number>(1); // Index 0..4

  const magnificationModes = [
    {
      labelAr: 'مجهر روبرت هوك (30x)',
      labelEn: 'Hooke Compound (30x, 1665)',
      mag: 30,
      wavelengthNm: 550,
      na: 0.1,
      visibleOrganellesAr: 'جدران الخلايا السميكة في الفلين، مسام الأنسجة الخشبية الكبيرة.',
      visibleOrganellesEn: 'Thick cork cell walls, macroscopic plant tissue cavities.',
    },
    {
      labelAr: 'مجهر ليفنهوك أحادي العدسة (200x)',
      labelEn: 'Leeuwenhoek Bead (200x, 1674)',
      mag: 200,
      wavelengthNm: 550,
      na: 0.25,
      visibleOrganellesAr: 'البكتيريا والبراميسيوم وخلايا الدم الحمراء والحيوانات المنوية (الحُييوينات).',
      visibleOrganellesEn: 'Free-living bacteria, Paramecium, erythrocyte discs, spermatozoa.',
    },
    {
      labelAr: 'مجهر ضوئي مركب معاصر (1000x بالزيت)',
      labelEn: 'Modern Compound Light (1000x Oil)',
      mag: 1000,
      wavelengthNm: 500,
      na: 1.25,
      visibleOrganellesAr: 'النواة، الكروموسومات أثناء الانقسام، الغشاء البلازمي، البلاستيدات الخضراء.',
      visibleOrganellesEn: 'Nucleus, mitotic chromosomes, plasma membrane outline, chloroplasts.',
    },
    {
      labelAr: 'مجهر إلكتروني نافذ TEM (100,000x)',
      labelEn: 'Transmission Electron TEM (100,000x)',
      mag: 100000,
      wavelengthNm: 0.004,
      na: 0.01,
      visibleOrganellesAr: 'الميتوكوندريا، الغشاء المزدوج، الرايبوسومات، الشبكة الإندوبلازمية، خيوط الساركومير.',
      visibleOrganellesEn: 'Mitochondrial cristae, nuclear envelope pores, ribosomes, sarcomere myofilaments.',
    },
    {
      labelAr: 'المجهر الإلكتروني فائق الدقة (1,000,000x)',
      labelEn: 'Cryo-EM / Atomic Resolution (1,000,000x)',
      mag: 1000000,
      wavelengthNm: 0.002,
      na: 0.02,
      visibleOrganellesAr: 'اللولب المزدوج لـ DNA، القنوات الأيونية، الإنزيمات والأجسام المضادة IgG بدقة الذرة.',
      visibleOrganellesEn: 'DNA double-helix pitch, membrane ion channel gates, atomic-scale IgG antibodies.',
    },
  ];

  const currentMag = magnificationModes[magnificationLevel];
  const resolutionLimitUm =
    currentMag.wavelengthNm > 1
      ? ((0.61 * currentMag.wavelengthNm) / (currentMag.na * 1000)).toFixed(2)
      : (0.61 * currentMag.wavelengthNm / currentMag.na).toFixed(3);

  const modalData: HiResImageModalData = {
    imageUrl: hookePhoto,
    titleAr: 'مخطوطة روبرت هوك الأصلية: ميكروجرافيا واكتشاف الخلية (1665 م)',
    titleEn: 'Robert Hooke’s Micrographia: Scheme XIII Cork Cells & Microscope (1665 CE)',
    subtitleAr: 'الجمعية الملكية البريطانية بلندن - أول رسم تاريخي لحجرات الفلين المجهرية (Cellulae)',
    subtitleEn: 'Royal Society of London - First historical illustration of microscopic cork cells & compound optics',
    dateOrEraAr: '1665 م (لندن، دار النشر التابعة للجمعية الملكية)',
    dateOrEraEn: '1665 CE (London, Royal Society Archive)',
    locationAr: 'متحف العلوم ومكتبة الجمعية الملكية، لندن',
    locationEn: 'Science Museum & Royal Society Archives, London',
    descriptionAr:
      'لوحة تاريخية أصلية بدقة 4K من كتاب "ميكروجرافيا" (Micrographia) للعالم الإنجليزي روبرت هوك، المنشور عام 1665. تجمع اللوحة بين المجهر المركب الذي صممه هوك بعدستين ومصباح ماء زيتي لتكثيف الضوء، والقرص الدائري المجهري الذي يوضح الفحص الدقيق لشريحة رقيقة من فلين نبات السنديان، حيث صاغ هوك لأول مرة في تاريخ العلوم مصطلح "الخلية" (Cellulae).',
    descriptionEn:
      'Museum-grade 4K archival engraving photograph of Scheme XIII from Robert Hooke’s 1665 Micrographia. Illustrates Hooke’s compound microscope with oil lamp and spherical water flask illumination alongside the microscopic view of cork tissue, where the word "cell" was first coined.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-emerald-300 border-emerald-400'
          : isLight
          ? 'bg-gradient-to-br from-emerald-50/70 via-stone-50 to-teal-50/50 text-stone-900 border-emerald-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-emerald-950/30 text-stone-100 border-emerald-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {isArabic ? 'تاريخ علم الخلية 1665 م' : 'History of Cytology 1665 CE'}
              </span>
              <span className="text-xs text-emerald-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو روبرت هوك: ميكروجرافيا واكتشاف الخلية والنظرية الخلوية'
                : 'Robert Hooke Studio: Micrographia, Cork Cells & Cell Theory'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 text-stone-950 hover:bg-emerald-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير مخطوطة هوك 4K' : 'Inspect 4K Hooke Plate'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={hookePhoto}
          alt="Robert Hooke Micrographia 1665 Cork Cells"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.97] contrast-[1.05]"
        />

        {/* Pulsating Interactive Hotspots */}
        {HOOKE_HOTSPOTS.map((spot) => {
          const isActive = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-emerald-400' : 'bg-emerald-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-emerald-300 bg-emerald-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-emerald-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-emerald-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-emerald-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-emerald-300 border-emerald-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-300">
            <span>{isArabic ? '🔬 المرجع: ميكروجرافيا روبرت هوك (1665)' : '🔬 Source: Hooke’s Micrographia (1665)'}</span>
            <span>•</span>
            <span>{isArabic ? '🧫 تسمية الخلية: Cellulae' : '🧫 Coined Term: Cellulae'}</span>
            <span>•</span>
            <span>{isArabic ? '📜 المبدأ: النظرية الخلوية (شلايدن وشوان وفيرشو)' : '📜 Cell Theory (1838–1855)'}</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            HISTORICAL-CYTOLOGY-ARCHIVE
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-emerald-400 text-emerald-300'
            : isLight
            ? 'bg-gradient-to-r from-emerald-50 via-white to-teal-50/70 border-emerald-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-emerald-950/40 border-emerald-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>

              <p className="text-xs sm:text-sm mt-2 leading-relaxed opacity-90">
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-3 rounded-xl border text-xs font-medium flex items-center gap-2.5 ${
                  isLight
                    ? 'bg-emerald-100/70 border-emerald-300 text-stone-950'
                    : 'bg-black/40 border-emerald-500/30 text-emerald-200'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>
                  <strong>{isArabic ? 'البرهان البيولوجي والتاريخي: ' : 'Biological Evidence: '}</strong>
                  {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-emerald-500">
              {isArabic ? 'شواهد الخلية والمجهر:' : 'Cytology Milestones:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {HOOKE_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-emerald-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-emerald-100 text-stone-800 hover:bg-emerald-200'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] + ' ' + (s.titleAr.split(' ')[1] || '') : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Microscope Optics & Resolution Simulator */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-emerald-200' : 'bg-stone-900/60 border-emerald-900/40'
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-emerald-500" />
            <h4 className="text-sm font-bold">
              {isArabic
                ? 'محاكي قوة التكبير البصري وحدود الرؤية من مجهر هوك إلى المجهر الإلكتروني'
                : 'Microscopic Magnification & Resolving Power Spectrum (1665–Present)'}
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400">
            {currentMag.mag.toLocaleString()}x Power
          </span>
        </div>

        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={magnificationLevel}
            onChange={(e) => setMagnificationLevel(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-mono font-bold text-stone-400 mt-2">
            <span>30x (هوك 1665)</span>
            <span>200x (ليفنهوك 1674)</span>
            <span>1,000x (ضوئي مركب)</span>
            <span>100,000x (إلكتروني نافذ)</span>
            <span>1,000,000x (Cryo-EM)</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'المجهر المحدد:' : 'Instrument:'}</span>
            <span className="text-xs font-bold text-emerald-400">
              {isArabic ? currentMag.labelAr : currentMag.labelEn}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'حد الرؤية والتمييز (Resolution Limit d):' : 'Resolving Limit (d):'}</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {resolutionLimitUm} {currentMag.wavelengthNm > 1 ? 'µm (ميكرومتر)' : 'nm (نانومتر)'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'الطول الموجي للشعاع المستخدم (λ):' : 'Wavelength (λ):'}</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {currentMag.wavelengthNm} nm
            </span>
          </div>
        </div>

        <div className="mt-3 p-3 rounded-xl bg-black/40 border border-emerald-500/20 text-xs">
          <strong className="text-emerald-400">{isArabic ? 'العضيات والتراكيب المرئية: ' : 'Resolvable Organelles: '}</strong>
          <span className="text-stone-300">
            {isArabic ? currentMag.visibleOrganellesAr : currentMag.visibleOrganellesEn}
          </span>
        </div>
      </div>

      {/* Classical Cell Theory 3 Axioms Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-emerald-200' : 'bg-stone-900/60 border-emerald-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isArabic ? 'المبدأ الأول (شلايدن وشوان):' : 'Axiom 1 (Structural):'}</span>
          </div>
          <p className="text-xs leading-relaxed text-stone-300">
            {isArabic
              ? 'جميع الكائنات الحية تتكون من خلية واحدة أو خلايا متعددة تنتظم في أنسجة وأعضاء.'
              : 'All living organisms are composed of one or more fundamental cells.'}
          </p>
        </div>

        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-emerald-200' : 'bg-stone-900/60 border-emerald-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isArabic ? 'المبدأ الثاني (الوظيفي):' : 'Axiom 2 (Functional Unit):'}</span>
          </div>
          <p className="text-xs leading-relaxed text-stone-300">
            {isArabic
              ? 'الخلية هي الوحدة الوظيفية الأساسية والتركيبية التي تجري فيها كافة التفاعلات الكيميائية الحيوية.'
              : 'The cell is the basic structural and physiological functional unit of all living organisms.'}
          </p>
        </div>

        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-emerald-200' : 'bg-stone-900/60 border-emerald-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isArabic ? 'المبدأ الثالث (فيرشو 1855):' : 'Axiom 3 (Biogenesis):'}</span>
          </div>
          <p className="text-xs leading-relaxed text-stone-300">
            {isArabic
              ? 'تنشأ جميع الخلايا الجديدة فقط من خلايا حية كانت موجودة من قبل نتيجة الانقسام الخلوي.'
              : 'All cells arise exclusively from pre-existing living cells via cellular division (Omnis cellula e cellula).'}
          </p>
        </div>
      </div>

      {/* 4K Modal */}
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

export default HookeCellTheoryStudio;
