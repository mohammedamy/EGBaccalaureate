import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Bone,
  Flame,
} from 'lucide-react';
import vesaliusPhoto from '../../../assets/biology/vesalius_fabrica_skeletal_muscular_1543.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface VesaliusHotspot {
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

export const VESALIUS_HOTSPOTS: VesaliusHotspot[] = [
  {
    id: 'axial_skeleton',
    xPct: 28.0,
    yPct: 22.0,
    titleAr: 'الهيكل المحوري: الجمجمة والقفص الصدري (Axial Skeleton: 80 Bones)',
    titleEn: 'Axial Skeleton: Cranium, Thoracic Cage & Vertebrae (80 Bones)',
    categoryAr: 'الدعامة والحركة في الإنسان (Unit 1)',
    categoryEn: 'Axial Skeletal Biomechanics',
    descAr:
      'الدعامة المركزية للجسم البشري المكونة من 80 عظمة: الجمجمة (عظام مخية مسننة وعظام وجهية)، والقفص الصدري (12 زوجاً من الضلوع متصلة بعظمة القص لحماية القلب والرئتين والمساعدة في التنفس)، والعمود الفقري.',
    descEn:
      'Central structural axis comprising 80 bones: the 22-bone skull with serrated cranial sutures protecting the brain, the 25-bone thoracic cage shielding heart/lungs, and the segmented spine.',
    scientificProofAr:
      'الضلوع العشرة الأولى تتصل بالقص مباشرة أو بغضاريف، بينما الزوجان الأخيران (الضلعان العائمان 11 و12) قصيران ولا يتصلان بالقص لتسهيل تمدد الحجاب الحاجز والبطن.',
    scientificProofEn:
      'Floating ribs 11 and 12 lack anterior sternal cartilaginous attachment, granting essential volumetric flexibility for diaphragmatic respiration and digestion.',
  },
  {
    id: 'appendicular_skeleton',
    xPct: 28.0,
    yPct: 62.0,
    titleAr: 'الهيكل الطرفي: الأحزمة والأطراف (Appendicular Skeleton: 126 Bones)',
    titleEn: 'Appendicular Skeleton: Pectoral & Pelvic Girdles (126 Bones)',
    categoryAr: 'الأحزمة الحركية وعظام الأطراف',
    categoryEn: 'Locomotor Girdles & Limb Mechanics',
    descAr:
      'يشمل 126 عظمة مسؤولة عن الحركة والالتقاط: الحزام الصدري والطرفان العلويان (64 عظمة: لوح الكتف، الترقوة، العضد، الساعد، واليد)، والحزام الحوضي والطرفان السفليان (62 عظمة: الحرقفة، العانة، الورك، الفخذ، الرضفة، الساق، والقدم).',
    descEn:
      '126 locomotor bones: pectoral girdle and upper limbs (64 bones optimized for manipulation and reach), pelvic girdle and lower limbs (62 robust weight-bearing bones engineered for bipedal locomotion).',
    scientificProofAr:
      'التجويف الأروحي في لوح الكتف ضحل مما يمنح مفصل الكتف مدى حركة واسعاً، بينما التجويف الحقي في الحوض عميق جداً ليمنح مفصل الفخذ ثباتاً هائلاً لتحمل وزن الجسم.',
    scientificProofEn:
      'Shallow glenoid fossa affords shoulder articulation maximum circumduction, while deep acetabulum ensures stable bipedal mass support under gravitational shear.',
  },
  {
    id: 'vertebral_column_dynamics',
    xPct: 28.0,
    yPct: 40.0,
    titleAr: 'العمود الفقري وميكانيكا الفقرات (33 Vertebrae Architecture)',
    titleEn: 'Vertebral Column: 33 Vertebrae Biomechanical Articulation',
    categoryAr: 'محور الهيكل العظمي وحماية الحبل الشوكي',
    categoryEn: 'Spinal Biomechanics & Weight Distribution',
    descAr:
      'يتكون من 33 فقرة مرتبة من أعلى لأسفل: 7 عنقية متمفصلة متوسطة الحجم، 12 ظهرية متمفصلة تتصل بالضلوع، 5 قطنية متمفصلة وهي الأكبر حجماً لمواجهة أقصى ضغط، 5 عجزية عريضة مفلطحة ملتحمة، و4 عصعصية صغيرة ملتحمة (إجمالي 26 عظمة في البالغين).',
    descEn:
      '33 vertebrae grouped into 5 morphological zones: 7 cervical, 12 thoracic with costal facets, 5 massive lumbar bearing peak axial load, 5 fused sacral forming the pelvis apex, and 4 fused vestigial coccygeal (26 distinct adult bones).',
    scientificProofAr:
      'الفقرة رقم 17 هي التي تنصف العمود الفقري، والفقرة رقم 20 هي أولى الفقرات القطنية وأكثرها تعرضاً للإجهاد أثناء حمل الأثقال.',
    scientificProofEn:
      'Lumbar vertebrae L4-L5 (vertebrae 23–24) sustain maximum gravitational compressive moments, predisposing intervertebral fibrocartilaginous discs to posterior herniation.',
  },
  {
    id: 'synovial_joints_ligaments',
    xPct: 35.0,
    yPct: 75.0,
    titleAr: 'المفاصل الزلالية والأربطة والأوتار (Synovial Articulations & Ligaments)',
    titleEn: 'Synovial Articulations, Cruciate Ligaments & Achilles Tendon',
    categoryAr: 'مفاصل الحركة والأنسجة الضامة',
    categoryEn: 'Connective Tissues, Tendons & Ligaments',
    descAr:
      'المفاصل الزلالية كفصل الركبة والكتف تغطى بغضاريف ملساء شفافة ويفصل بينها سائل زلالي مصلي يمنع احتكاك العظام. تثبتها الأربطة القوية المرنة (كالرباط الصليبي الأمامي والخلفي والوسطي والجانبي)، وتربط الأوتار العضلات بالعظام (كـوتر أخيل).',
    descEn:
      'Synovial joints feature hyaline articular cartilage and friction-reducing synovial fluid. Dense regular elastic ligaments (anterior/posterior cruciate) dictate joint stabilization; tough collagenous tendons (Achilles) anchor muscles to periosteum.',
    scientificProofAr:
      'تمزق وتر أخيل (Achilles Tendon Rupture) يحدث بسبب الجهد العنيف المفاجئ أو تقلص العضلة التوأمية، ويعالج بالتدخل الجراحي أو الأدوية ومضادات الالتهاب.',
    scientificProofEn:
      'Excessive calcaneal tensile strain ruptures the Achilles tendon connecting gastrocnemius to calcaneus, requiring surgical re-anchoring or immobilization.',
  },
  {
    id: 'muscular_sliding_filament',
    xPct: 72.0,
    yPct: 45.0,
    titleAr: 'العضلات الهيكلية ونظرية الخيوط المنزلقة (Huxley Sliding Filament Theory)',
    titleEn: 'Skeletal Musculature & Huxley Sliding Filament Contraction Engine',
    categoryAr: 'الآلية الجزيئية لانقباض الساركومير',
    categoryEn: 'Molecular Myology & Cross-Bridge Cycling',
    descAr:
      'تتكون العضلة الهيكلية الإرادية من حزم ألياف عضلية وساركوميرات. تنزلق خيوط الأكتين الرفيعة فوق خيوط الميوسين السميكة بواسطة روابط مستعرضة ممتدة من الميوسين بمساعدة أيونات الكالسيوم (Ca²⁺) وطاقة ATP.',
    descEn:
      'Skeletal muscle fibers contract via Andrew Huxley’s sliding filament mechanism: myosin globular heads hydrolyze ATP to form cross-bridges that pull actin microfilaments towards sarcomere center in the presence of sarcoplasmic Ca²⁺.',
    scientificProofAr:
      'أثناء الانقباض: تقترب خطوط Z، ويقل طول المنطقة المضيئة (I)، وتضيق أو تختفي المنطقة شبه المضيئة (H)، بينما يظل طول المنطقة الداكنة (A) ثابتاً.',
    scientificProofEn:
      'During contraction: Z-lines converge, I-bands shorten, H-zones disappear in full isometric tetanus, while A-band length remains completely invariant.',
  },
];

export const VesaliusFabricaAnatomyStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<VesaliusHotspot>(VESALIUS_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Biomechanical Spinal Load & Posture Simulator
  const [postureAngleDeg, setPostureAngleDeg] = useState<number>(0); // 0 = standing upright, 45 = bent, 90 = lifting
  const [loadWeightKg, setLoadWeightKg] = useState<number>(20); // 20 kg weight held

  // Lumbar L4-L5 Compressive Force Calculation (Body mass 70kg)
  // Upright baseline = ~700 N. With bending angle: F = (UpperBodyWeight * sin(θ) * LeverRatio) + LoadWeight * 9.81 * LoadLever
  const upperBodyWeightN = 450; // upper body N
  const angleRad = (postureAngleDeg * Math.PI) / 180;
  const compressiveForceN = Math.round(
    700 + upperBodyWeightN * Math.sin(angleRad) * 4.5 + loadWeightKg * 9.81 * (1 + Math.sin(angleRad) * 3)
  );

  const isHerniationRisk = compressiveForceN > 3000;

  // Sarcomere Contraction Kinematics Simulator (0% to 100%)
  const [contractionPct, setContractionPct] = useState<number>(40);

  const zDistanceUm = (2.5 - (contractionPct / 100) * 0.9).toFixed(2);
  const hZoneUm = Math.max(0, 0.8 - (contractionPct / 100) * 0.8).toFixed(2);
  const iBandUm = Math.max(0, 0.9 - (contractionPct / 100) * 0.8).toFixed(2);
  const aBandUm = '1.60'; // Always invariant!

  const modalData: HiResImageModalData = {
    imageUrl: vesaliusPhoto,
    titleAr: 'مخطوطة أندرياس فيزاليوس الأصلية: بنية الجسم البشري (De Humani Corporis Fabrica 1543 م)',
    titleEn: 'Andreas Vesalius: De Humani Corporis Fabrica Libri Septem (1543 CE)',
    subtitleAr: 'جامعة بادوفا والبندقية - اللوحة الخشبية التشريحية المرجعية للهيكل العظمي والعضلي للإنسان',
    subtitleEn: 'University of Padua & Venice - Historic Renaissance woodcut plates depicting human skeleton and musculature',
    dateOrEraAr: '1543 م (بازل، سويسرا / بادوفا، إيطاليا)',
    dateOrEraEn: '1543 CE (Johannes Oporinus, Basel / University of Padua)',
    locationAr: 'المكتبة الوطنية الطبية ومكتبة جامعة بازل',
    locationEn: 'National Library of Medicine & Basel University Library',
    descriptionAr:
      'صورة متحفية فائقة الجودة (4K) لصفحات كتاب "بنية الجسم البشري في سبعة كتب" (De Humani Corporis Fabrica Libri Septem) للطبيب والتشريحي الفلمنكي أندرياس فيزاليوس المنشور عام 1543. تعد هذه اللوحة الخشبية الرائعة، التي نفذها تلامذة الرسام الإيطالي تيتيان، العمل التأسيسي الأول لعلم التشريح الحديث؛ حيث حطمت أوهام جالينوس بتشريح الجثث الفعلية موثقة الهيكل المحوري والطرفي، المفاصل الزلالية، الأربطة والأوتار، والألياف العضلية الهيكلية المطابقة لمنهج الثانوية العامة.',
    descriptionEn:
      'Museum-grade 4K archival photograph of the paired skeletal and muscular woodcut plates from Andreas Vesalius’s groundbreaking 1543 masterpiece De Humani Corporis Fabrica. Illustrates human axial and appendicular skeletons, synovial articulation mechanics, cruciate ligaments, Achilles tendon, and antagonist muscular kinematics.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-rose-300 border-rose-400'
          : isLight
          ? 'bg-gradient-to-br from-rose-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-rose-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-rose-950/30 text-stone-100 border-rose-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-rose-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500">
            <Bone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                {isArabic ? 'تشريح فيزاليوس 1543 م' : 'Vesalian Anatomy 1543 CE'}
              </span>
              <span className="text-xs text-rose-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو أندرياس فيزاليوس: الدعامة والحركة والتشريح البشري'
                : 'Andreas Vesalius Studio: Skeletal Support, Musculature & Biomechanics'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-rose-500 text-stone-950 hover:bg-rose-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير لوحة فيزاليوس 4K' : 'Inspect 4K Vesalius Plate'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-rose-500/30 shadow-2xl bg-black select-none group">
        <img
          src={vesaliusPhoto}
          alt="Andreas Vesalius De Humani Corporis Fabrica 1543"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.06]"
        />

        {/* Pulsating Interactive Hotspots */}
        {VESALIUS_HOTSPOTS.map((spot) => {
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
                    isActive ? 'bg-rose-400' : 'bg-rose-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-rose-300 bg-rose-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-rose-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-rose-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-rose-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-rose-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-rose-300 border-rose-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-rose-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-rose-300">
            <span>{isArabic ? '🦴 الهيكل البشري: ٢٠٦ عظمة (٨٠ محوري + ١٢٦ طرفي)' : '🦴 Skeleton: 206 Bones (80 Axial + 126 Appendicular)'}</span>
            <span>•</span>
            <span>{isArabic ? '🏛️ العمود الفقري: ٣٣ فقرة (٢٦ عظمة)' : '🏛️ Spine: 33 Vertebrae'}</span>
            <span>•</span>
            <span>{isArabic ? '⚡ انقباض الساركومير: نظرية الخيوط المنزلقة' : '⚡ Sarcomere: Sliding Filaments'}</span>
          </div>
          <span className="text-[11px] font-mono text-rose-400 font-bold">
            HISTORICAL-ANATOMY-ARCHIVE
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-rose-400 text-rose-300'
            : isLight
            ? 'bg-gradient-to-r from-rose-50 via-white to-orange-50/70 border-rose-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-rose-950/40 border-rose-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 border border-rose-500/40 text-rose-400">
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
                    ? 'bg-rose-100/70 border-rose-300 text-stone-950'
                    : 'bg-black/40 border-rose-500/30 text-rose-200'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-rose-500" />
                <span>
                  <strong>{isArabic ? 'البرهان التشريحي والوظيفي: ' : 'Biomechanical Evidence: '}</strong>
                  {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-rose-500">
              {isArabic ? 'محطات التشريح والدعامة:' : 'Anatomical Stations:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {VESALIUS_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-rose-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-rose-100 text-stone-800 hover:bg-rose-200'
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

      {/* Two Biomechanical Interactive Simulators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Simulator A: Spinal Posture & Lumbar Disc Stress */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-rose-200' : 'bg-stone-900/60 border-rose-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-3">
            <Bone className="w-4 h-4" />
            <span>{isArabic ? 'محاكي إجهاد الفقرات القطنية والانزلاق الغضروفي (L4-L5)' : 'Spinal Biomechanics & Disc Pressure'}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span>{isArabic ? 'زاوية انحناء الجذع للأمام:' : 'Trunk Flexion Angle:'}</span>
                <span className="font-mono font-bold text-rose-400">{postureAngleDeg}° ({postureAngleDeg === 0 ? 'استقامة تامة' : postureAngleDeg <= 45 ? 'انحناء معتدل' : 'انحناء شديد'})</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="15"
                value={postureAngleDeg}
                onChange={(e) => setPostureAngleDeg(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>{isArabic ? 'الوزن المحمول في اليدين:' : 'Hand Load Weight:'}</span>
                <span className="font-mono font-bold text-rose-400">{loadWeightKg} kg</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={loadWeightKg}
                onChange={(e) => setLoadWeightKg(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

            <div className={`p-3 rounded-xl border flex items-center justify-between mt-2 ${isHerniationRisk ? 'bg-rose-950/60 border-rose-500 text-rose-200' : 'bg-black/40 border-stone-700 text-stone-300'}`}>
              <div>
                <span className="font-bold block">{isArabic ? 'قوة الضغط على الغضروف القطني (L4-L5):' : 'Lumbar Disc Compression:'}</span>
                <span className="text-[10px] opacity-80">{isHerniationRisk ? (isArabic ? '⚠️ خطر انزلاق غضروفي وضغط على العصب الوركي' : '⚠️ Critical Herniation Risk') : (isArabic ? '✅ ضغط آمن ضمن الحدود الفسيولوجية' : '✅ Physiological Safe Limit')}</span>
              </div>
              <span className="text-base font-mono font-black text-rose-400">
                {compressiveForceN.toLocaleString()} N
              </span>
            </div>
          </div>
        </div>

        {/* Simulator B: Sarcomere Contraction Kinematics */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-rose-200' : 'bg-stone-900/60 border-rose-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4" />
            <span>{isArabic ? 'كينماتيكا انقباض الساركومير وخيوط هكسلي' : 'Sarcomere Contraction Kinematics'}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span>{isArabic ? 'درجة الانقباض العضلي (التنبيه العصبي + ATP):' : 'Contraction State (ATP + Ca²⁺):'}</span>
                <span className="font-mono font-bold text-rose-400">{contractionPct}% ({contractionPct === 0 ? 'انبساط تام' : contractionPct === 100 ? 'انقباض أقصى' : 'انقباض جزئي'})</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={contractionPct}
                onChange={(e) => setContractionPct(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-2.5 rounded-lg bg-black/40 border border-stone-800">
                <span className="text-[10px] text-stone-400 block">{isArabic ? 'المسافة بين خطي Z:' : 'Z-Line Distance:'}</span>
                <span className="font-mono font-bold text-rose-300">{zDistanceUm} µm (تتقارب)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-stone-800">
                <span className="text-[10px] text-stone-400 block">{isArabic ? 'المنطقة شبه المضيئة (H):' : 'H-Zone Width:'}</span>
                <span className="font-mono font-bold text-rose-300">{hZoneUm} µm {Number(hZoneUm) === 0 ? '(تختفي)' : '(تضيق)'}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-stone-800">
                <span className="text-[10px] text-stone-400 block">{isArabic ? 'المنطقة المضيئة (I):' : 'I-Band Width:'}</span>
                <span className="font-mono font-bold text-rose-300">{iBandUm} µm (يقل طولها)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-stone-800">
                <span className="text-[10px] text-stone-400 block">{isArabic ? 'المنطقة الداكنة (A):' : 'A-Band Length:'}</span>
                <span className="font-mono font-bold text-emerald-400">{aBandUm} µm (ثابتة تماماً)</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 mt-1">
              {isArabic
                ? 'وفق كتاب الوزارة: تظل المنطقة الداكنة (A) ثابتة في الطول لأنها تمثل طول خيوط الميوسين السميكة نفسها، بينما تختفي المنطقة شبه المضيئة (H) في الانقباض العضلي التام.'
                : 'MoE Standard: A-band length is invariant as it corresponds to constant myosin thick filament length; H-zone collapses during maximal tetanus.'}
            </p>
          </div>
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

export default VesaliusFabricaAnatomyStudio;
