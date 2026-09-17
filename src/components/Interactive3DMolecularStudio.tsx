import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  RotateCcw,
  Play,
  Pause,
  Layers,
  Sparkles,
  Info,
  ShieldAlert,
  Sliders,
  Maximize,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Printer,
} from 'lucide-react';
import { playPhotoelectricChirp, isAudioMuted, toggleAudioMuted } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export type MolecularStudioMode = 'vsepr' | 'metallurgy';

export type VseprMoleculeId = 'CH4' | 'NH3' | 'H2O' | 'CO2' | 'BF3' | 'C6H6';
export type MetallurgyAlloyId = 'pure_iron' | 'interstitial_steel' | 'substitutional_stainless' | 'intermetallic_cementite';

interface MoleculeDef {
  id: VseprMoleculeId;
  nameEn: string;
  nameAr: string;
  formula: string;
  geometryEn: string;
  geometryAr: string;
  bondAngle: string;
  hybridization: string;
  bondingPairs: number;
  lonePairs: number;
  polarityEn: string;
  polarityAr: string;
  dipoleMoment: string;
  color: string;
  descriptionEn: string;
  descriptionAr: string;
  thanawyaNoteEn: string;
  thanawyaNoteAr: string;
}

const VSEPR_MOLECULES: MoleculeDef[] = [
  {
    id: 'CH4',
    nameEn: 'Methane',
    nameAr: 'الميثان',
    formula: 'CH_4',
    geometryEn: 'Tetrahedral',
    geometryAr: 'رباعي الأوجه منتظم',
    bondAngle: '109.5°',
    hybridization: 'sp^3',
    bondingPairs: 4,
    lonePairs: 0,
    polarityEn: 'Non-Polar (Dipoles cancel)',
    polarityAr: 'غير قطبي (محصلة العزوم = صفر)',
    dipoleMoment: 'μ = 0 D',
    color: '#10b981',
    descriptionEn: '4 identical C-H sigma bonds symmetrically arranged in 3D space to minimize electron repulsion.',
    descriptionAr: 'أربع روابط سيجما متماثلة بين الكربون والهيدروجين موزعة في الفراغ بأقل تنافر إلكتروني.',
    thanawyaNoteEn: 'Symmetrical tetrahedral distribution ensures net dipole moment is zero. sp³ hybridization.',
    thanawyaNoteAr: 'الشكل الفراغي رباعي الأوجه يجعل محصلة عزم الازدواج القطبي تساوي صفرًا، والتهجين من النوع sp³.',
  },
  {
    id: 'NH3',
    nameEn: 'Ammonia',
    nameAr: 'النشادر (الأمونيا)',
    formula: 'NH_3',
    geometryEn: 'Trigonal Pyramidal',
    geometryAr: 'هرم ثلاثي القاعدة',
    bondAngle: '107°',
    hybridization: 'sp^3',
    bondingPairs: 3,
    lonePairs: 1,
    polarityEn: 'Polar (Net dipole upwards)',
    polarityAr: 'قطبي (محصلة عزم قطبي باتجاه النيتروجين)',
    dipoleMoment: 'μ = 1.47 D',
    color: '#3b82f6',
    descriptionEn: '1 lone electron pair occupies more space than bonding pairs, compressing the H-N-H bond angle from 109.5° down to 107°.',
    descriptionAr: 'زوج الإلكترونات الحر يشغل حيزًا فراغيًا أكبر فيضغط على أزواج الارتباط لتقل الزاوية من 109.5° إلى 107°.',
    thanawyaNoteEn: 'Presence of 1 lone pair reduces bond angle from ideal tetrahedral 109.5° to 107°.',
    thanawyaNoteAr: 'وجود زوج إلكترونات حر واحد يقلل الزاوية بين الروابط من 109.5° إلى 107° نتيجة قوة التنافر العالية.',
  },
  {
    id: 'H2O',
    nameEn: 'Water',
    nameAr: 'الماء',
    formula: 'H_2O',
    geometryEn: 'Bent / Angular',
    geometryAr: 'زاوي (منحنٍ)',
    bondAngle: '104.5°',
    hybridization: 'sp^3',
    bondingPairs: 2,
    lonePairs: 2,
    polarityEn: 'Strongly Polar (Hydrogen bonding)',
    polarityAr: 'شديد القطبية (يكون روابط هيدروجينية)',
    dipoleMoment: 'μ = 1.85 D',
    color: '#06b6d4',
    descriptionEn: '2 lone electron pairs exert strong electrostatic repulsion against bonding pairs, compressing the H-O-H angle down to 104.5°.',
    descriptionAr: 'زوجان من الإلكترونات الحرة يمارسان تنافرًا قويًا على أزواج الارتباط، مما يقلص الزاوية إلى 104.5°.',
    thanawyaNoteEn: '2 lone pairs cause maximum repulsion compression down to 104.5°, giving water its unique dipolar properties.',
    thanawyaNoteAr: 'زوجا الإلكترونات الحرة يحدثان أكبر ضغط تنافري فتهبط الزاوية إلى 104.5°، مسببة القطبية الفائقة للماء.',
  },
  {
    id: 'CO2',
    nameEn: 'Carbon Dioxide',
    nameAr: 'ثاني أكسيد الكربون',
    formula: 'CO_2',
    geometryEn: 'Linear',
    geometryAr: 'خطي مستقيم',
    bondAngle: '180°',
    hybridization: 'sp',
    bondingPairs: 4, // 2 double bonds
    lonePairs: 0,
    polarityEn: 'Non-Polar (Collinear vectors cancel)',
    polarityAr: 'غير قطبي (عزما الرابطتين متعاكسان ويلغيان بعضهما)',
    dipoleMoment: 'μ = 0 D',
    color: '#f59e0b',
    descriptionEn: '2 double bonds (each with 1 sigma and 1 pi bond). 180° linear geometry with sp hybridization.',
    descriptionAr: 'رابطتان مزدوجتان (كل منهما سيجما وباي). الشكل الفراغي خطي 180° والتهجين من النوع sp.',
    thanawyaNoteEn: 'Despite polar C=O bonds, the linear 180° geometry cancels the dipoles completely (μ = 0).',
    thanawyaNoteAr: 'رغم قطبية رابطتي C=O، إلا أن الشكل الخطي (180°) يجعل محصلة عزم الازدواج القطبي تساوي صفرًا.',
  },
  {
    id: 'BF3',
    nameEn: 'Boron Trifluoride',
    nameAr: 'ثالث فلوريد البورون',
    formula: 'BF_3',
    geometryEn: 'Trigonal Planar',
    geometryAr: 'مثلث مستوٍ',
    bondAngle: '120°',
    hybridization: 'sp^2',
    bondingPairs: 3,
    lonePairs: 0,
    polarityEn: 'Non-Polar (Equilateral planar cancellation)',
    polarityAr: 'غير قطبي (تناظر مستوٍ يلغي العزوم)',
    dipoleMoment: 'μ = 0 D',
    color: '#ec4899',
    descriptionEn: 'Planar triangular shape with 120° bond angles and sp² hybridization. Incomplete valence octet (6 electrons around B).',
    descriptionAr: 'شكل مثلث مستوٍ بزوايا 120° وتهجين sp². البورون محاط بستة إلكترونات فقط (قصور نظرية الثمانيات).',
    thanawyaNoteEn: 'Classical example of incomplete octet in Thanawya Amma chemistry (Lewis octet violation).',
    thanawyaNoteAr: 'مثال شهير في المنهج على شذوذ نظرية الثمانيات (محاط بستة إلكترونات فقط بدلاً من ثمانية).',
  },
  {
    id: 'C6H6',
    nameEn: 'Benzene Ring',
    nameAr: 'حلقة البنزين العطري',
    formula: 'C_6H_6',
    geometryEn: 'Planar Hexagonal (Resonant Pi Cloud)',
    geometryAr: 'سداسي حلقي مستوٍ (سحابة باي غير متمركزة)',
    bondAngle: '120°',
    hybridization: 'sp^2',
    bondingPairs: 12,
    lonePairs: 0,
    polarityEn: 'Non-Polar Aromatic',
    polarityAr: 'مركب أروماتي غير قطبي',
    dipoleMoment: 'μ = 0 D',
    color: '#8b5cf6',
    descriptionEn: '6 carbon atoms form a planar hexagonal ring with 120° angles. 6 delocalized π electrons circulate in toroidal clouds above and below the ring.',
    descriptionAr: 'ست ذرات كربون في حلقة سداسية مستوية بزوايا 120°. تتنقل إلكترونات باي الستة في سحابة رنين حلقية فوق وأسفل الحلقة.',
    thanawyaNoteEn: 'Kekulé resonance: All C-C bond lengths are completely identical (intermediate between single and double).',
    thanawyaNoteAr: 'رنين كيكولي: أطوال الروابط بين ذرات الكربون متساوية تمامًا (وسط بين الرابطة الأحادية والمزدوجة).',
  },
];

interface AlloyDef {
  id: MetallurgyAlloyId;
  nameEn: string;
  nameAr: string;
  typeEn: string;
  typeAr: string;
  components: string;
  crystalLatticeEn: string;
  crystalLatticeAr: string;
  hardnessScore: number; // 1 to 10
  malleabilityEn: string;
  malleabilityAr: string;
  slipResistanceEn: string;
  slipResistanceAr: string;
  descriptionEn: string;
  descriptionAr: string;
  thanawyaCurriculumEn: string;
  thanawyaCurriculumAr: string;
  accentColor: string;
}

const METALLURGY_ALLOYS: AlloyDef[] = [
  {
    id: 'pure_iron',
    nameEn: 'Pure Iron (Fe)',
    nameAr: 'الحديد النقي (Fe)',
    typeEn: 'Pure Transition Metal Lattice',
    typeAr: 'شبكة فلزية نقية لعنصر انتقالي',
    components: '100% Fe',
    crystalLatticeEn: 'Body-Centered Cubic (BCC)',
    crystalLatticeAr: 'مكعب ممركز الجسم (BCC)',
    hardnessScore: 3,
    malleabilityEn: 'High (Layers slip easily upon impact)',
    malleabilityAr: 'عالية (تنزلق الطبقات الذرية بسهولة عند الطرق)',
    slipResistanceEn: 'Low (Smooth atomic layer gliding)',
    slipResistanceAr: 'منخفضة (انزلاق سلس لطبقات الذرات فوق بعضها)',
    descriptionEn: 'Pure iron is relatively soft and ductile because identical Fe atomic layers slip easily past one another when shear stress or hammering is applied.',
    descriptionAr: 'الحديد النقي لين نسبيًا وليس له استخدامات صناعية مباشرة، لأن طبقات ذرات الحديد المتماثلة تنزلق بسهولة فوق بعضها عند الطرق.',
    thanawyaCurriculumEn: 'Chapter 1: Pure iron lacks industrial utility because it is soft; carbon is introduced to form steel.',
    thanawyaCurriculumAr: 'الباب الأول: الحديد النقي لين نسبيًا قليل الأهمية الصناعية، ولذلك تضاف إليه ذرات الكربون لإنتاج الصلب.',
    accentColor: '#94a3b8',
  },
  {
    id: 'interstitial_steel',
    nameEn: 'Carbon Steel (Fe + C)',
    nameAr: 'الحديد الصلب (سبيكة بينية Fe + C)',
    typeEn: 'Interstitial Alloy',
    typeAr: 'سبيكة بينية',
    components: 'Fe + C (interstitial voids)',
    crystalLatticeEn: 'BCC with Interstitial Solute C',
    crystalLatticeAr: 'شبكة حديد بمواضع بينية يشغلها الكربون',
    hardnessScore: 8,
    malleabilityEn: 'Reduced (High Tensile Strength)',
    malleabilityAr: 'أقل قابلية للطرق (صلابة وصلادة فائقة)',
    slipResistanceEn: 'Extremely High (Carbon atoms block slip planes)',
    slipResistanceAr: 'عالية جدًا (ذرات الكربون تعوق انزلاق الطبقات)',
    descriptionEn: 'Small carbon atoms penetrate the interstitial spaces (voids) between iron atoms. This effectively pins the atomic layers and obstructs their slippage, drastically increasing hardness and tensile strength.',
    descriptionAr: 'تدخل ذرات الكربون صغيرة الحجم في المسافات البينية لذرات الحديد، فتعوق انزلاق الطبقات فوق بعضها، مما يزيد صلادة الحديد وقوة تحمله وخواصه المغناطيسية.',
    thanawyaCurriculumEn: 'Standard Thanawya Amma concept: Interstitial alloys form when smaller solute atoms enter solvent atomic interstices to block layer sliding.',
    thanawyaCurriculumAr: 'مفهوم أساسي بالثانوية: تتكون السبيكة البينية بدخول ذرات فلزية/لافلزية أصغر حجمًا في المسافات البينية لشبكة الفلز الأصلي لإعاقة انزلاق الطبقات.',
    accentColor: '#38bdf8',
  },
  {
    id: 'substitutional_stainless',
    nameEn: 'Stainless Steel / Ferrochrome (Fe + Cr)',
    nameAr: 'الصلب الذي لا يصدأ (سبيكة استبدالية Fe + Cr)',
    typeEn: 'Substitutional Alloy',
    typeAr: 'سبيكة استبدالية',
    components: 'Fe + Cr (Nickel/Chromium)',
    crystalLatticeEn: 'Substituted Regular Lattice Sites',
    crystalLatticeAr: 'إحلال ذرات متقاربة في نصف القطر',
    hardnessScore: 9,
    malleabilityEn: 'Corrosion Resistant & Tough',
    malleabilityAr: 'مقاوم للتآكل وشديد المتانة',
    slipResistanceEn: 'High (Lattice strain distortion)',
    slipResistanceAr: 'عالية (إجهاد موضعي ناتج عن تباين الكتلة)',
    descriptionEn: 'Chromium atoms replace Iron atoms at identical lattice positions. Requires: similar atomic radius, same crystal structure, and similar chemical properties.',
    descriptionAr: 'تستبدل بعض ذرات الحديد بذرات الكروم في نفس المواضع البلورية. شروطها: تقارب نصف القطر الذري، تماثل الشكل البلوري، والخواص الكيميائية.',
    thanawyaCurriculumEn: 'Substitutional alloys require 3 conditions: (1) Close atomic radii, (2) Same crystal shape, (3) Similar chemical properties (e.g., Fe-Cr, Au-Cu, Cu-Zn brass).',
    thanawyaCurriculumAr: 'شروط السبيكة الاستبدالية الثلاثة: (١) تقارب أنصاف الأقطار الذرية، (٢) نفس الشكل البلوري، (٣) تشابه الخواص الكيميائية (مثل الحديد والكروم، والنحاس الأصفر).',
    accentColor: '#e2e8f0',
  },
  {
    id: 'intermetallic_cementite',
    nameEn: 'Cementite (Fe₃C)',
    nameAr: 'السيمنتيت (سبيكة مركبات بينفلزية Fe₃C)',
    typeEn: 'Intermetallic Compound Alloy',
    typeAr: 'سبيكة مركبات بينفلزية',
    components: 'Fe₃C (Definite Chemical Compound)',
    crystalLatticeEn: 'Complex Orthorhombic Fixed Lattice',
    crystalLatticeAr: 'شبكة بلورية معينة مرتبطة كيميائيًا',
    hardnessScore: 10,
    malleabilityEn: 'Brittle & Extremely Hard',
    malleabilityAr: 'هشة وقاسية جدًا (غير قابلة للطرق)',
    slipResistanceEn: 'Absolute (Covalent-metallic directional bonds)',
    slipResistanceAr: 'مطلقة (روابط كيميائية ثابتة تمنع أي انزلاق)',
    descriptionEn: 'Chemical combination between Fe and C yielding a compound that does not obey standard valency rules. Extremely hard and brittle.',
    descriptionAr: 'اتحاد كيميائي بين الحديد والكربون ينتج مركبًا صلبًا لا يخضع لقوانين التكافؤ المعروفة، يتميز بالصلادة الشديدة والهشاشة.',
    thanawyaCurriculumEn: 'Intermetallic alloys (Fe₃C cementite, Al-Ni duralumin, Au₂Pb): Elements unite chemically and do not obey standard valencies.',
    thanawyaCurriculumAr: 'سبائك المركبات البينفلزية (السيمنتيت Fe₃C، الديورألومين Al-Ni، ورصاص-ذهب Au₂Pb): تتحد كيميائيًا ولا تخضع لقوانين التكافؤ المعروفة.',
    accentColor: '#f97316',
  },
];

export const Interactive3DMolecularStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeStudioMode, setActiveStudioMode] = useState<MolecularStudioMode>('vsepr');
  const [selectedMolecule, setSelectedMolecule] = useState<VseprMoleculeId>('CH4');
  const [selectedAlloy, setSelectedAlloy] = useState<MetallurgyAlloyId>('pure_iron');

  // Animation and Display toggles
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [showLonePairs, setShowLonePairs] = useState<boolean>(true);
  const [showBondAngles, setShowBondAngles] = useState<boolean>(true);
  const [showDipoleVector, setShowDipoleVector] = useState<boolean>(true);
  const [isShearStressApplied, setIsShearStressApplied] = useState<boolean>(false);
  const [audioActive, setAudioActive] = useState<boolean>(!isAudioMuted());

  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const handleOpenOfficialReportModal = () => {
    const draft = loadLabReportDraft('chem-exp-5');
    if (activeStudioMode === 'vsepr') {
      const curMol = activeMolDef;
      const liveRow = {
        compound: isAr ? `${curMol.nameAr} (${curMol.formula})` : `${curMol.nameEn} (${curMol.formula})`,
        vsepr_type: isAr ? `${curMol.geometryAr} (${curMol.hybridization})` : `${curMol.geometryEn} (${curMol.hybridization})`,
        lone_pairs: `${curMol.lonePairs}`,
        measured_angle: `${curMol.bondAngle.replace('°', '')}`,
        mechanical_state: isAr ? curMol.polarityAr : curMol.polarityEn,
      };
      const existing = draft.dataTableRows.filter(
        (r) => !r.compound.includes(curMol.formula)
      );
      draft.dataTableRows = [liveRow, ...existing];
      draft.conclusionAr = `تم إثبات أن التنافر بين أزواج الإلكترونات الحرة يقلص زوايا الروابط، حيث سجل جزيء ${curMol.nameAr} زاوية ${curMol.bondAngle} بشكل هندسي ${curMol.geometryAr}.`;
      draft.conclusionEn = `Empirically demonstrated that electron lone pair repulsion compresses bond angles, with ${curMol.nameEn} exhibiting ${curMol.bondAngle} bond angle in a ${curMol.geometryEn} geometry.`;
    } else {
      const curAlloy = activeAlloyDef;
      const liveRow = {
        compound: isAr ? curAlloy.nameAr : curAlloy.nameEn,
        vsepr_type: isAr ? curAlloy.typeAr : curAlloy.typeEn,
        lone_pairs: '-',
        measured_angle: '-',
        mechanical_state: isAr ? `صلادة: ${curAlloy.hardnessScore}/10` : `Hardness: ${curAlloy.hardnessScore}/10`,
      };
      draft.dataTableRows = [liveRow, ...draft.dataTableRows.slice(1)];
      draft.conclusionAr = `أثبتت دراسة السبائك المجهرية أن إعاقة انزلاق الطبقات البلورية ترفع صلادة السبيكة إلى ${curAlloy.hardnessScore}/10 في ${curAlloy.nameAr} (${isAr ? curAlloy.slipResistanceAr : curAlloy.slipResistanceEn}).`;
      draft.conclusionEn = `Microscopic metallurgical inspection verified that dislocation pinning increases hardness to ${curAlloy.hardnessScore}/10 for ${curAlloy.nameEn} (${curAlloy.slipResistanceEn}).`;
    }
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  // Three.js refs
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);
  const shearGroupTopRef = useRef<THREE.Group | null>(null);

  // Interaction tracking
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const activeMolDef = VSEPR_MOLECULES.find((m) => m.id === selectedMolecule) || VSEPR_MOLECULES[0];
  const activeAlloyDef = METALLURGY_ALLOYS.find((a) => a.id === selectedAlloy) || METALLURGY_ALLOYS[0];

  // --------------------------------------------------------------------------
  // Helper: Create a cylindrical bond between two 3D points
  // --------------------------------------------------------------------------
  const createCylinderBond = (
    start: THREE.Vector3,
    end: THREE.Vector3,
    radius: number = 0.08,
    color: number = 0x94a3b8,
    opacity: number = 1.0
  ): THREE.Mesh => {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    const geom = new THREE.CylinderGeometry(radius, radius, length, 16);
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.3,
      metalness: 0.2,
      transparent: opacity < 1.0,
      opacity,
    });
    const cylinder = new THREE.Mesh(geom, mat);

    // Orientation
    const midpoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    cylinder.position.copy(midpoint);
    cylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    cylinder.castShadow = true;
    return cylinder;
  };

  // --------------------------------------------------------------------------
  // Helper: Create an atom sphere
  // --------------------------------------------------------------------------
  const createAtomSphere = (
    pos: THREE.Vector3,
    radius: number,
    color: number,
    roughness: number = 0.2,
    metalness: number = 0.3
  ): THREE.Mesh => {
    const geom = new THREE.SphereGeometry(radius, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness,
    });
    const sphere = new THREE.Mesh(geom, mat);
    sphere.position.copy(pos);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    return sphere;
  };

  // --------------------------------------------------------------------------
  // Helper: Create a translucent lone-pair lobe
  // --------------------------------------------------------------------------
  const createLonePairLobe = (
    basePos: THREE.Vector3,
    dir: THREE.Vector3,
    length: number = 1.2,
    color: number = 0x38bdf8
  ): THREE.Group => {
    const group = new THREE.Group();
    // Teardrop / ellipsoid approximation
    const geom = new THREE.SphereGeometry(0.42, 24, 24);
    geom.scale(0.8, 1.6, 0.8);
    const mat = new THREE.MeshPhysicalMaterial({
      color,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.3,
      emissive: color,
      emissiveIntensity: 0.2,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(0, length * 0.5, 0);
    group.add(mesh);

    // Two small dots representing the 2 paired electrons inside the lobe
    const eGeom = new THREE.SphereGeometry(0.09, 12, 12);
    const eMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const e1 = new THREE.Mesh(eGeom, eMat);
    e1.position.set(-0.14, length * 0.55, 0);
    const e2 = new THREE.Mesh(eGeom, eMat);
    e2.position.set(0.14, length * 0.55, 0);
    group.add(e1, e2);

    // Align group with dir
    group.position.copy(basePos);
    group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    return group;
  };

  // --------------------------------------------------------------------------
  // Initialize Three.js Scene and Camera
  // --------------------------------------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isContrast ? 0x000000 : isLight ? 0xf8fafc : 0x020617);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 8.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient and Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(6, 10, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-6, -4, -6);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xa855f7, 0.8, 15);
    rimLight.position.set(0, 6, -5);
    scene.add(rimLight);

    // Dynamic object holder group
    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (dynamicGroupRef.current) {
        // Auto-rotation if enabled and user is not currently dragging
        if (isRotating && !isDraggingRef.current) {
          dynamicGroupRef.current.rotation.y += delta * 0.45;
        }

        // Apply drag inertia / damping
        if (!isDraggingRef.current) {
          dynamicGroupRef.current.rotation.y += rotationVelocityRef.current.y;
          dynamicGroupRef.current.rotation.x += rotationVelocityRef.current.x;
          rotationVelocityRef.current.x *= 0.92;
          rotationVelocityRef.current.y *= 0.92;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, [isLight, isContrast]);

  // --------------------------------------------------------------------------
  // Build 3D Molecular / Metallurgy Model when selection changes
  // --------------------------------------------------------------------------
  useEffect(() => {
    const dynamicGroup = dynamicGroupRef.current;
    if (!dynamicGroup) return;

    // Clean up previous children and dispose their geometries and materials
    while (dynamicGroup.children.length > 0) {
      const child = dynamicGroup.children[0];
      dynamicGroup.remove(child);
      child.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });
    }

    shearGroupTopRef.current = null;

    // ========================================================================
    // MODE 1: VSEPR MOLECULAR GEOMETRIES
    // ========================================================================
    if (activeStudioMode === 'vsepr') {
      const molGroup = new THREE.Group();

      if (selectedMolecule === 'CH4') {
        // Central Carbon (Dark Charcoal)
        const C = new THREE.Vector3(0, 0, 0);
        molGroup.add(createAtomSphere(C, 0.65, 0x334155, 0.2, 0.3));

        // 4 Tetrahedral Hydrogens (Off-white)
        const d = 1.65;
        const hPositions = [
          new THREE.Vector3(d, d, d).normalize().multiplyScalar(1.9),
          new THREE.Vector3(-d, -d, d).normalize().multiplyScalar(1.9),
          new THREE.Vector3(-d, d, -d).normalize().multiplyScalar(1.9),
          new THREE.Vector3(d, -d, -d).normalize().multiplyScalar(1.9),
        ];

        hPositions.forEach((pos) => {
          molGroup.add(createAtomSphere(pos, 0.38, 0xf1f5f9, 0.3, 0.1));
          molGroup.add(createCylinderBond(C, pos, 0.08, 0x94a3b8));
        });

        // Tetrahedral outline cage (subtle dashed/thin wireframe)
        const wireGeom = new THREE.BufferGeometry();
        const wireVertices: number[] = [];
        for (let i = 0; i < 4; i++) {
          for (let j = i + 1; j < 4; j++) {
            wireVertices.push(hPositions[i].x, hPositions[i].y, hPositions[i].z);
            wireVertices.push(hPositions[j].x, hPositions[j].y, hPositions[j].z);
          }
        }
        wireGeom.setAttribute('position', new THREE.Float32BufferAttribute(wireVertices, 3));
        const wireMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.35 });
        const wireframe = new THREE.LineSegments(wireGeom, wireMat);
        molGroup.add(wireframe);
      } else if (selectedMolecule === 'NH3') {
        // Central Nitrogen (Royal Blue)
        const N = new THREE.Vector3(0, 0.3, 0);
        molGroup.add(createAtomSphere(N, 0.62, 0x1d4ed8, 0.2, 0.3));

        // 3 Hydrogens forming trigonal pyramid (107° bond angle)
        const rBase = 1.7;
        const yBase = -0.75;
        const hAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

        hAngles.forEach((ang) => {
          const hPos = new THREE.Vector3(rBase * Math.cos(ang), yBase, rBase * Math.sin(ang));
          molGroup.add(createAtomSphere(hPos, 0.38, 0xf1f5f9, 0.3, 0.1));
          molGroup.add(createCylinderBond(N, hPos, 0.08, 0x94a3b8));
        });

        // 1 Lone Pair Lobe pointing upward
        if (showLonePairs) {
          const lonePair = createLonePairLobe(N, new THREE.Vector3(0, 1, 0), 1.35, 0x38bdf8);
          molGroup.add(lonePair);
        }

        // Polarity Dipole Arrow pointing along +Y
        if (showDipoleVector) {
          const arrow = new THREE.ArrowHelper(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 1.2, 0),
            1.8,
            0x22c55e,
            0.4,
            0.25
          );
          molGroup.add(arrow);
        }
      } else if (selectedMolecule === 'H2O') {
        // Central Oxygen (Crimson Red)
        const O = new THREE.Vector3(0, 0, 0);
        molGroup.add(createAtomSphere(O, 0.65, 0xdc2626, 0.2, 0.3));

        // 2 Hydrogens at 104.5° angle in XY plane
        const halfAngleRad = (104.5 / 2) * (Math.PI / 180);
        const bondDist = 1.85;

        const h1 = new THREE.Vector3(bondDist * Math.sin(halfAngleRad), -bondDist * Math.cos(halfAngleRad), 0);
        const h2 = new THREE.Vector3(-bondDist * Math.sin(halfAngleRad), -bondDist * Math.cos(halfAngleRad), 0);

        molGroup.add(createAtomSphere(h1, 0.38, 0xf1f5f9, 0.3, 0.1));
        molGroup.add(createAtomSphere(h2, 0.38, 0xf1f5f9, 0.3, 0.1));
        molGroup.add(createCylinderBond(O, h1, 0.08, 0x94a3b8));
        molGroup.add(createCylinderBond(O, h2, 0.08, 0x94a3b8));

        // 2 Lone Pair Lobes pointing upwards and outward along Z axis (approx tetrahedral angle)
        if (showLonePairs) {
          const lpAngleZ = 0.85;
          const lp1 = createLonePairLobe(O, new THREE.Vector3(0, 1, lpAngleZ).normalize(), 1.3, 0x38bdf8);
          const lp2 = createLonePairLobe(O, new THREE.Vector3(0, 1, -lpAngleZ).normalize(), 1.3, 0x38bdf8);
          molGroup.add(lp1, lp2);
        }

        // Polarity Dipole vector pointing towards Oxygen (+Y)
        if (showDipoleVector) {
          const arrow = new THREE.ArrowHelper(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 0.7, 0),
            2.0,
            0x22c55e,
            0.45,
            0.28
          );
          molGroup.add(arrow);
        }
      } else if (selectedMolecule === 'CO2') {
        // Central Carbon (Charcoal)
        const C = new THREE.Vector3(0, 0, 0);
        molGroup.add(createAtomSphere(C, 0.62, 0x334155, 0.2, 0.3));

        // 2 Oxygens (Red) along X axis (180° linear)
        const dist = 2.2;
        const o1 = new THREE.Vector3(-dist, 0, 0);
        const o2 = new THREE.Vector3(dist, 0, 0);

        molGroup.add(createAtomSphere(o1, 0.65, 0xdc2626, 0.2, 0.3));
        molGroup.add(createAtomSphere(o2, 0.65, 0xdc2626, 0.2, 0.3));

        // Dual bonds (C=O) represented by 2 parallel cylinders on each side
        const offsetZ = 0.12;
        molGroup.add(createCylinderBond(new THREE.Vector3(-dist, 0, offsetZ), new THREE.Vector3(0, 0, offsetZ), 0.05, 0x94a3b8));
        molGroup.add(createCylinderBond(new THREE.Vector3(-dist, 0, -offsetZ), new THREE.Vector3(0, 0, -offsetZ), 0.05, 0x94a3b8));
        molGroup.add(createCylinderBond(new THREE.Vector3(0, 0, offsetZ), new THREE.Vector3(dist, 0, offsetZ), 0.05, 0x94a3b8));
        molGroup.add(createCylinderBond(new THREE.Vector3(0, 0, -offsetZ), new THREE.Vector3(dist, 0, -offsetZ), 0.05, 0x94a3b8));

        // Two opposing dipole arrows showing exact cancellation
        if (showDipoleVector) {
          const arrowLeft = new THREE.ArrowHelper(
            new THREE.Vector3(-1, 0, 0),
            new THREE.Vector3(-0.6, 0.7, 0),
            1.4,
            0xf59e0b,
            0.3,
            0.2
          );
          const arrowRight = new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0.6, 0.7, 0),
            1.4,
            0xf59e0b,
            0.3,
            0.2
          );
          molGroup.add(arrowLeft, arrowRight);
        }
      } else if (selectedMolecule === 'BF3') {
        // Central Boron (Amber / Rose)
        const B = new THREE.Vector3(0, 0, 0);
        molGroup.add(createAtomSphere(B, 0.58, 0xd97706, 0.2, 0.3));

        // 3 Fluorines (Bright Emerald Green) in equilateral planar arrangement
        const dist = 2.1;
        const angles = [Math.PI / 2, Math.PI / 2 + (2 * Math.PI) / 3, Math.PI / 2 + (4 * Math.PI) / 3];

        angles.forEach((ang) => {
          const fPos = new THREE.Vector3(dist * Math.cos(ang), dist * Math.sin(ang), 0);
          molGroup.add(createAtomSphere(fPos, 0.52, 0x10b981, 0.2, 0.3));
          molGroup.add(createCylinderBond(B, fPos, 0.08, 0x94a3b8));
        });

        // Equilateral triangle boundary line
        const triGeom = new THREE.BufferGeometry();
        const triVertices: number[] = [];
        for (let i = 0; i < 3; i++) {
          const ang1 = angles[i];
          const ang2 = angles[(i + 1) % 3];
          triVertices.push(dist * Math.cos(ang1), dist * Math.sin(ang1), 0);
          triVertices.push(dist * Math.cos(ang2), dist * Math.sin(ang2), 0);
        }
        triGeom.setAttribute('position', new THREE.Float32BufferAttribute(triVertices, 3));
        const triMat = new THREE.LineBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.4 });
        molGroup.add(new THREE.LineSegments(triGeom, triMat));
      } else if (selectedMolecule === 'C6H6') {
        // Planar Benzene Hexagon in XY plane
        const ringRadius = 2.0;
        const hRadius = 3.1;
        const cCoords: THREE.Vector3[] = [];

        for (let i = 0; i < 6; i++) {
          const ang = (i * Math.PI) / 3;
          const cPos = new THREE.Vector3(ringRadius * Math.cos(ang), ringRadius * Math.sin(ang), 0);
          const hPos = new THREE.Vector3(hRadius * Math.cos(ang), hRadius * Math.sin(ang), 0);
          cCoords.push(cPos);

          // Carbon (Charcoal) and Hydrogen (White)
          molGroup.add(createAtomSphere(cPos, 0.5, 0x334155, 0.2, 0.3));
          molGroup.add(createAtomSphere(hPos, 0.35, 0xf1f5f9, 0.3, 0.1));

          // C-H bond
          molGroup.add(createCylinderBond(cPos, hPos, 0.07, 0x94a3b8));
        }

        // C-C aromatic bonds forming the hexagon
        for (let i = 0; i < 6; i++) {
          const start = cCoords[i];
          const end = cCoords[(i + 1) % 6];
          molGroup.add(createCylinderBond(start, end, 0.08, 0xa855f7));
        }

        // Delocalized Pi electron ring clouds above and below the hexagon
        if (showLonePairs) {
          const torusGeom = new THREE.TorusGeometry(ringRadius * 0.95, 0.35, 16, 64);
          const torusMat = new THREE.MeshPhysicalMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.38,
            roughness: 0.2,
            transmission: 0.4,
            emissive: 0x8b5cf6,
            emissiveIntensity: 0.3,
            depthWrite: false,
          });

          const topCloud = new THREE.Mesh(torusGeom, torusMat);
          topCloud.position.set(0, 0, 0.7);
          const bottomCloud = new THREE.Mesh(torusGeom, torusMat);
          bottomCloud.position.set(0, 0, -0.7);

          molGroup.add(topCloud, bottomCloud);
        }
      }

      dynamicGroup.add(molGroup);
    }

    // ========================================================================
    // MODE 2: METALLURGY & ALLOY CRYSTAL LATTICES
    // ========================================================================
    else if (activeStudioMode === 'metallurgy') {
      const metalGroup = new THREE.Group();

      // We render a 3x3x2 lattice or 2x2x2 unit cell stack
      // Top layer can shift along X when shear stress is applied!
      const bottomLayerGroup = new THREE.Group();
      const topLayerGroup = new THREE.Group();
      shearGroupTopRef.current = topLayerGroup;

      const spacing = 1.35; // atomic center-to-center spacing
      const feRadius = 0.52;
      const carbonRadius = 0.26;
      const subRadius = 0.51; // Cr or Ni atomic radius

      const feColor = 0x94a3b8; // Slate silver
      const cColor = 0x0f172a; // Dark carbon
      const subColor = 0xf59e0b; // Amber-gold for Cr/Ni or Zn solute
      const cementiteFeColor = 0x64748b;

      // Generate a 3-layer atomic plane structure
      // Layer 0: Y = -spacing
      // Layer 1: Y = 0 (Middle)
      // Layer 2: Y = +spacing (Top layer - subjected to shear stress)

      for (let layer = 0; layer < 3; layer++) {
        const y = (layer - 1) * spacing;
        const targetGroup = layer === 2 ? topLayerGroup : bottomLayerGroup;

        for (let ix = -1; ix <= 1; ix++) {
          for (let iz = -1; iz <= 1; iz++) {
            const x = ix * spacing + (layer % 2 === 1 ? spacing * 0.5 : 0);
            const z = iz * spacing + (layer % 2 === 1 ? spacing * 0.5 : 0);
            const pos = new THREE.Vector3(x, y, z);

            if (selectedAlloy === 'pure_iron') {
              // All identical Fe atoms
              targetGroup.add(createAtomSphere(pos, feRadius, feColor, 0.25, 0.65));
            } else if (selectedAlloy === 'interstitial_steel') {
              // Base Fe lattice
              targetGroup.add(createAtomSphere(pos, feRadius, feColor, 0.25, 0.65));

              // Interstitial Carbon atoms lodged in octahedral / tetrahedral voids between layers
              if (layer === 1 && (ix === 0 || iz === 0)) {
                // In between layer 1 and layer 2
                const voidPos = new THREE.Vector3(x + spacing * 0.5, y + spacing * 0.5, z + spacing * 0.5);
                // Attach to bottom group so it blocks top layer
                bottomLayerGroup.add(createAtomSphere(voidPos, carbonRadius, cColor, 0.4, 0.1));

                // Glowing barrier ring around the carbon interstitial atom
                const ringGeom = new THREE.RingGeometry(carbonRadius * 1.2, carbonRadius * 1.6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
                const ringMesh = new THREE.Mesh(ringGeom, ringMat);
                ringMesh.position.copy(voidPos);
                ringMesh.rotation.x = Math.PI / 2;
                bottomLayerGroup.add(ringMesh);
              }
            } else if (selectedAlloy === 'substitutional_stainless') {
              // Substitute some Fe atoms with Cr (amber/chrome)
              const isSubstituted = (ix === 0 && iz === 0 && layer === 1) || (ix === 1 && iz === -1 && layer === 2);
              if (isSubstituted) {
                targetGroup.add(createAtomSphere(pos, subRadius, subColor, 0.15, 0.85));
              } else {
                targetGroup.add(createAtomSphere(pos, feRadius, feColor, 0.25, 0.65));
              }
            } else if (selectedAlloy === 'intermetallic_cementite') {
              // Alternating rigid stoichiometric unit (Fe3C)
              const isCarbon = (ix + iz + layer) % 4 === 0;
              if (isCarbon) {
                targetGroup.add(createAtomSphere(pos, carbonRadius * 1.3, 0xf97316, 0.2, 0.3));
              } else {
                targetGroup.add(createAtomSphere(pos, feRadius * 0.95, cementiteFeColor, 0.3, 0.7));
              }
            }
          }
        }
      }

      // Connecting lattice wireframe bounds
      const boxHelperGeom = new THREE.BoxGeometry(spacing * 3.2, spacing * 3.2, spacing * 3.2);
      const wireMat = new THREE.LineBasicMaterial({
        color: activeAlloyDef.id === 'interstitial_steel' ? 0x38bdf8 : 0x64748b,
        transparent: true,
        opacity: 0.3,
      });
      const boxEdges = new THREE.EdgesGeometry(boxHelperGeom);
      const wireBox = new THREE.LineSegments(boxEdges, wireMat);
      metalGroup.add(wireBox);

      // Apply initial shear position based on state
      if (isShearStressApplied) {
        if (selectedAlloy === 'pure_iron') {
          // Pure iron layers slip easily (shift by 0.9 units!)
          topLayerGroup.position.x = 0.95;
        } else if (selectedAlloy === 'interstitial_steel') {
          // Interstitial carbon blocks slip (very tiny strain < 0.12 units!)
          topLayerGroup.position.x = 0.12;
        } else if (selectedAlloy === 'substitutional_stainless') {
          // Strained lattice resists slip (slight 0.25 shift)
          topLayerGroup.position.x = 0.25;
        } else if (selectedAlloy === 'intermetallic_cementite') {
          // Completely rigid compound: zero slip
          topLayerGroup.position.x = 0.0;
        }
      } else {
        topLayerGroup.position.x = 0.0;
      }

      metalGroup.add(bottomLayerGroup);
      metalGroup.add(topLayerGroup);
      dynamicGroup.add(metalGroup);
    }
  }, [
    activeStudioMode,
    selectedMolecule,
    selectedAlloy,
    showLonePairs,
    showBondAngles,
    showDipoleVector,
    isShearStressApplied,
    activeAlloyDef.id,
  ]);

  // --------------------------------------------------------------------------
  // Shear stress animation toggle
  // --------------------------------------------------------------------------
  const handleToggleShearStress = () => {
    if (audioActive) {
      playPhotoelectricChirp(selectedAlloy === 'pure_iron' ? 320 : 640);
    }
    setIsShearStressApplied((prev) => !prev);
  };

  // --------------------------------------------------------------------------
  // Pointer / Drag Controls for 3D Camera Orbit
  // --------------------------------------------------------------------------
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !dynamicGroupRef.current) return;

    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;

    rotationVelocityRef.current = {
      x: deltaY * 0.005,
      y: deltaX * 0.005,
    };

    dynamicGroupRef.current.rotation.y += deltaX * 0.008;
    dynamicGroupRef.current.rotation.x += deltaY * 0.008;

    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleResetCamera = () => {
    if (dynamicGroupRef.current) {
      dynamicGroupRef.current.rotation.set(0, 0, 0);
      rotationVelocityRef.current = { x: 0, y: 0 };
    }
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 2.5, 8.5);
      cameraRef.current.lookAt(0, 0, 0);
    }
    setIsShearStressApplied(false);
  };

  return (
    <div
      className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 flex flex-col ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-slate-50 border-slate-200 text-slate-900'
          : 'bg-slate-950 border-slate-800 text-slate-100'
      }`}
    >
      {/* ==================================================================== */}
      {/* Studio Header Bar */}
      {/* ==================================================================== */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-slate-900/50 backdrop-blur-md">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-600/30 border border-emerald-400/30 shrink-0">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {isAr ? 'كيمياء الثانوية العامة • نماذج 3D فراغية' : 'Thanawya Chemistry • 3D Spatial Models'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">WebGL Three.js Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isAr
                ? 'استوديو الأشكال الجزيئية وسبائك الفلزات 3D'
                : '3D Molecular Geometry & Metallurgy Alloys Studio'}
            </h2>
          </div>
        </div>

        {/* Studio Primary Mode Selector (VSEPR vs Metallurgy) */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <button
            onClick={() => {
              setActiveStudioMode('vsepr');
              if (audioActive) playPhotoelectricChirp(520);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeStudioMode === 'vsepr'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>{isAr ? 'الأشكال الفراغية (VSEPR)' : 'Molecular Geometries (VSEPR)'}</span>
          </button>

          <button
            onClick={() => {
              setActiveStudioMode('metallurgy');
              if (audioActive) playPhotoelectricChirp(680);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeStudioMode === 'metallurgy'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-cyan-300" />
            <span>{isAr ? 'بلورات السبائك والصلب' : 'Crystal Alloys & Steel'}</span>
          </button>

          <button
            onClick={() => {
              toggleAudioMuted();
              setAudioActive(!isAudioMuted());
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-200 border border-slate-800"
            title={audioActive ? 'Mute audio' : 'Unmute audio'}
          >
            {audioActive ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            type="button"
            onClick={handleOpenOfficialReportModal}
            className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20"
            title={isAr ? 'معاينة وطباعة تقرير المعمل الوزاري A4' : 'Official MoE A4 Lab Report'}
          >
            <Printer className="w-4 h-4 text-emerald-200" />
            <span>{isAr ? 'تقرير معملي A4' : 'Lab Report A4'}</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* Secondary Selection Pills */}
      {/* ==================================================================== */}
      <div className="px-4 py-3 border-b border-slate-800/80 bg-slate-900/30 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {activeStudioMode === 'vsepr' ? (
          VSEPR_MOLECULES.map((mol) => {
            const isSelected = selectedMolecule === mol.id;
            return (
              <button
                key={mol.id}
                onClick={() => {
                  setSelectedMolecule(mol.id);
                  if (audioActive) playPhotoelectricChirp(580);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                <span className="font-mono">{mol.formula}</span> • {isAr ? mol.nameAr : mol.nameEn}
              </button>
            );
          })
        ) : (
          METALLURGY_ALLOYS.map((alloy) => {
            const isSelected = selectedAlloy === alloy.id;
            return (
              <button
                key={alloy.id}
                onClick={() => {
                  setSelectedAlloy(alloy.id);
                  setIsShearStressApplied(false);
                  if (audioActive) playPhotoelectricChirp(580);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                {isAr ? alloy.nameAr : alloy.nameEn}
              </button>
            );
          })
        )}
      </div>

      {/* ==================================================================== */}
      {/* Main Interactive Work Area: 3D Canvas + Live Control / HUD Drawer */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative min-h-[560px]">
        {/* Left / Center 3D WebGL Canvas (Col 8) */}
        <div className="lg:col-span-8 relative flex flex-col bg-radial from-slate-900 via-slate-950 to-black min-h-[440px] lg:min-h-[560px]">
          {/* WebGL Canvas Container */}
          <div
            ref={mountRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="w-full h-full cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: 'none' }}
          />

          {/* Floating 3D Interaction Toolbar */}
          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-xl">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`p-2 rounded-xl transition-all ${
                isRotating ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title={isRotating ? 'Pause rotation' : 'Start auto-rotation'}
            >
              {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleResetCamera}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              title="Reset 3D View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {activeStudioMode === 'vsepr' && (
              <>
                <button
                  onClick={() => setShowLonePairs(!showLonePairs)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    showLonePairs ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-400/40' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Toggle lone pair lobes"
                >
                  {showLonePairs ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isAr ? 'الأزواج الحرة' : 'Lone Pairs'}</span>
                </button>

                <button
                  onClick={() => setShowDipoleVector(!showDipoleVector)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    showDipoleVector ? 'bg-amber-600/30 text-amber-300 border border-amber-400/40' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Toggle dipole moment vectors"
                >
                  <Maximize className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isAr ? 'عزم القطبية' : 'Dipole'}</span>
                </button>

                <button
                  onClick={() => setShowBondAngles(!showBondAngles)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    showBondAngles ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-400/40' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Toggle bond angles"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isAr ? 'زوايا الروابط' : 'Bond Angles'}</span>
                </button>
              </>
            )}

            {activeStudioMode === 'metallurgy' && (
              <button
                onClick={handleToggleShearStress}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isShearStressApplied
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {isShearStressApplied
                    ? isAr ? 'إلغاء إجهاد القص (طرق)' : 'Release Shear Force'
                    : isAr ? 'تطبيق إجهاد القص (طرق)' : 'Apply Shear Hammering'}
                </span>
              </button>
            )}
          </div>

          {/* Quick HUD Metrics Overlay (Bottom-left) */}
          <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-xl max-w-sm pointer-events-none">
            {activeStudioMode === 'vsepr' ? (
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">{activeMolDef.formula}</span>
                  <span className="text-xs text-slate-400">• {isAr ? activeMolDef.geometryAr : activeMolDef.geometryEn}</span>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-3">
                  <span>
                    {isAr ? 'الزاوية:' : 'Angle:'}{' '}
                    <strong className="text-amber-400 font-mono">{activeMolDef.bondAngle}</strong>
                  </span>
                  <span>
                    {isAr ? 'التهجين:' : 'Hybrid:'}{' '}
                    <strong className="text-cyan-400 font-mono">{activeMolDef.hybridization}</strong>
                  </span>
                  <span>
                    {isAr ? 'أزواج حرة:' : 'Lone pairs:'}{' '}
                    <strong className="text-rose-400 font-mono">{activeMolDef.lonePairs}</strong>
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-400">{isAr ? activeAlloyDef.nameAr : activeAlloyDef.nameEn}</span>
                  <span className="text-xs text-slate-400">• {isAr ? activeAlloyDef.typeAr : activeAlloyDef.typeEn}</span>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-3">
                  <span>
                    {isAr ? 'مقاومة الانزلاق:' : 'Slip Resistance:'}{' '}
                    <strong className="text-emerald-400">{activeAlloyDef.hardnessScore}/10</strong>
                  </span>
                  <span>
                    {isAr ? 'المكونات:' : 'Constituents:'}{' '}
                    <strong className="text-slate-200 font-mono">{activeAlloyDef.components}</strong>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Details / Curriculum Analysis Column (Col 4) */}
        <div className="lg:col-span-4 p-5 sm:p-6 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-slate-800 bg-slate-900/30 flex flex-col justify-between space-y-5 overflow-y-auto">
          {activeStudioMode === 'vsepr' ? (
            <div className="space-y-4">
              {/* Molecule Profile Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                      {isAr ? 'الشكل الفراغي والتنافر الإلكتروني' : 'VSEPR Stereochemistry'}
                    </span>
                    <h3 className="text-lg font-black text-white mt-0.5">
                      {isAr ? activeMolDef.nameAr : activeMolDef.nameEn}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 font-mono font-black text-base text-emerald-400">
                    <MathRenderer math={activeMolDef.formula} />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr ? activeMolDef.descriptionAr : activeMolDef.descriptionEn}
                </p>
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    {isAr ? 'الزاوية بين الروابط' : 'Bond Angle'}
                  </span>
                  <span className="text-base font-black font-mono text-amber-400">{activeMolDef.bondAngle}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    {isAr ? 'نوع التهجين' : 'Hybridization'}
                  </span>
                  <span className="text-base font-black font-mono text-cyan-400">
                    <MathRenderer math={activeMolDef.hybridization} />
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    {isAr ? 'أزواج الارتباط' : 'Bonding Pairs'}
                  </span>
                  <span className="text-base font-black font-mono text-emerald-400">{activeMolDef.bondingPairs}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    {isAr ? 'أزواج حرة' : 'Lone Pairs'}
                  </span>
                  <span className="text-base font-black font-mono text-rose-400">{activeMolDef.lonePairs}</span>
                </div>
              </div>

              {/* Polarity and Dipole Analysis */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400">{isAr ? 'عزم الازدواج القطبي:' : 'Dipole Moment:'}</span>
                  <span className="font-mono text-cyan-300">{activeMolDef.dipoleMoment}</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {isAr ? activeMolDef.polarityAr : activeMolDef.polarityEn}
                </p>
              </div>

              {/* Thanawya Amma Direct Exam Takeaway */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'ملحوظة امتحانية هامة (ثانوية عامة):' : 'Key Thanawya Exam Tip:'}</span>
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  {isAr ? activeMolDef.thanawyaNoteAr : activeMolDef.thanawyaNoteEn}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Alloy Profile Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                    {isAr ? 'الباب الأول • العناصر الانتقالية والسبائك' : 'Transition Metals & Crystal Metallurgy'}
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    {isAr ? activeAlloyDef.nameAr : activeAlloyDef.nameEn}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 mt-0.5">
                    {isAr ? activeAlloyDef.typeAr : activeAlloyDef.typeEn}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr ? activeAlloyDef.descriptionAr : activeAlloyDef.descriptionEn}
                </p>
              </div>

              {/* Crystal Lattice Hardness Gauge */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-400">{isAr ? 'مقياس مقاومة انزلاق الطبقات الذرية:' : 'Atomic Slip Resistance Score:'}</span>
                  <span className="font-mono text-amber-400">{activeAlloyDef.hardnessScore} / 10</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 transition-all duration-500"
                    style={{ width: `${(activeAlloyDef.hardnessScore / 10) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>{isAr ? 'لين (انزلاق سهل)' : 'Soft / Ductile'}</span>
                  <span>{isAr ? 'صلادة فائقة (منع الانزلاق)' : 'High Hardness / Pinned'}</span>
                </div>
              </div>

              {/* Structural Comparison Table */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{isAr ? 'التركيب البلوري:' : 'Lattice Structure:'}</span>
                  <span className="font-bold text-slate-200">
                    {isAr ? activeAlloyDef.crystalLatticeAr : activeAlloyDef.crystalLatticeEn}
                  </span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{isAr ? 'القابلية للطرق والسحب:' : 'Malleability & Ductility:'}</span>
                  <span className="font-bold text-slate-200">
                    {isAr ? activeAlloyDef.malleabilityAr : activeAlloyDef.malleabilityEn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isAr ? 'سلوك الانزلاق:' : 'Slip Mechanics:'}</span>
                  <span className="font-bold text-cyan-300">
                    {isAr ? activeAlloyDef.slipResistanceAr : activeAlloyDef.slipResistanceEn}
                  </span>
                </div>
              </div>

              {/* Thanawya Concept Alert */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'الأساس العلمي في امتحان الثانوية:' : 'Core Thanawya Concept:'}</span>
                </div>
                <p className="text-xs text-cyan-200/90 leading-relaxed">
                  {isAr ? activeAlloyDef.thanawyaCurriculumAr : activeAlloyDef.thanawyaCurriculumEn}
                </p>
              </div>
            </div>
          )}

          {/* Interactive Advice Footer */}
          <div className="text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2">
            <RotateCcw className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>
              {isAr
                ? 'اسحب بإصبعك أو بالفأرة لتدوير النموذج في أي اتجاه ثلاثي الأبعاد.'
                : 'Click and drag on the 3D viewport to orbit and inspect bond angles from any perspective.'}
            </span>
          </div>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId="chem-exp-5"
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
