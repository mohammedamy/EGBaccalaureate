import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  RotateCcw,
  Play,
  Pause,
  Layers,
  Thermometer,
  Gauge,
  FlaskConical,
  Zap,
  TrendingUp,
  Award,
  Printer,
  Flame,
  Snowflake,
  Minimize2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { playLabClickSound } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { calculateVantHoffK } from '../core/simulation/EquilibriumEngine';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type EquilibriumStudioMode = '3d_reactor' | 'disturbances' | 'exam_solver';

export type GasSystemId = 'no2_dimer' | 'fe_thiocyanate' | 'haber_ammonia' | 'pci5_dissociation';

export interface ReactionSystemDef {
  id: GasSystemId;
  nameEn: string;
  nameAr: string;
  equationKaTeX: string;
  reactantFormula: string;
  productFormula: string;
  reactantNameEn: string;
  reactantNameAr: string;
  productNameEn: string;
  productNameAr: string;
  reactantColorHex: string;
  productColorHex: string;
  deltaH_kJ: number; // Negative = Exothermic, Positive = Endothermic
  isExothermic: boolean;
  standardKc: number; // at 25 °C (298 K)
  stoichReactants: number; // Moles of gas reactants
  stoichProducts: number;  // Moles of gas products
  deltaNg: number; // stoichProducts - stoichReactants
  descriptionEn: string;
  descriptionAr: string;
  examTipEn: string;
  examTipAr: string;
}

export const EQUILIBRIUM_SYSTEMS: ReactionSystemDef[] = [
  {
    id: 'no2_dimer',
    nameEn: 'Nitrogen Dioxide / Dinitrogen Tetroxide',
    nameAr: 'ثاني أكسيد النيتروجين / رابع أكسيد النيتروجين',
    equationKaTeX: '2\\text{NO}_2\\text{ (g, بني محمر)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{ (g, عديم اللون)} + \\text{Heat } (\\Delta H = -57.2\\text{ kJ})',
    reactantFormula: '2\\text{NO}_2',
    productFormula: '\\text{N}_2\\text{O}_4',
    reactantNameEn: 'Nitrogen Dioxide (Reddish-Brown)',
    reactantNameAr: 'ثاني أكسيد النيتروجين (بني محمر)',
    productNameEn: 'Dinitrogen Tetroxide (Colorless)',
    productNameAr: 'رابع أكسيد النيتروجين (عديم اللون)',
    reactantColorHex: '#b45309', // Deep reddish brown
    productColorHex: '#f1f5f9', // Colorless / very pale
    deltaH_kJ: -57.2,
    isExothermic: true,
    standardKc: 170.0,
    stoichReactants: 2,
    stoichProducts: 1,
    deltaNg: -1,
    descriptionEn: 'The flagship Thanawya Amma equilibrium system demonstrating visible thermal shifts (ice bath vs boiling water) and compression shifts in a sealed glass syringe.',
    descriptionAr: 'التجربة النموذجية الأهم في ثانوية عامة: يتغير لون الغاز في المحقنة الزجاجية بالتسخين والتبريد والضغط وفق قاعدة لوشاتيليه.',
    examTipEn: 'Cooling favors the exothermic forward direction (lightens). Compressing favors fewer moles (shifts right).',
    examTipAr: 'التبريد ينشط التفاعل الطردي الطارد (يقل اللون البني). زيادة الضغط (تقليص الحجم) تنشط اتجاه الحجم الأقل (تكوين N2O4).',
  },
  {
    id: 'fe_thiocyanate',
    nameEn: 'Iron(III) Thiocyanate Complex Ion',
    nameAr: 'كلوريد الحديد الثلاثي وثيوسيانات الأمونيوم',
    equationKaTeX: '\\text{Fe}^{3+}\\text{ (أصفر باهت)} + 3\\text{SCN}^- \\rightleftharpoons [\\text{Fe(SCN)}_3]\\text{ (أحمر دموي)}',
    reactantFormula: '\\text{Fe}^{3+} + 3\\text{SCN}^-',
    productFormula: '[\\text{Fe(SCN)}_3]',
    reactantNameEn: 'Iron(III) & Thiocyanate (Pale Yellow)',
    reactantNameAr: 'أيونات الحديد الثلاثي والثيوسيانات (أصفر باهت)',
    productNameEn: 'Iron(III) Thiocyanate (Blood-Red)',
    productNameAr: 'ثيوسيانات الحديد الثلاثي (أحمر دموي)',
    reactantColorHex: '#fef08a', // Pale yellow
    productColorHex: '#991b1b', // Deep blood red
    deltaH_kJ: -24.0,
    isExothermic: true,
    standardKc: 140.0,
    stoichReactants: 4,
    stoichProducts: 1,
    deltaNg: 0, // Solution phase - pressure has negligible effect
    descriptionEn: 'Classic chemical equilibrium in aqueous solution showing the direct effect of changing reagent concentrations on dynamic color intensity.',
    descriptionAr: 'تجربة الاتزان الأيوني في المحاليل: إضافة كلوريد الحديد الثلاثي أو ثيوسيانات الأمونيوم تزيد اللون الأحمر الدموي، بينما إضافة كلوريد الأمونيوم تقلله.',
    examTipEn: 'Adding FeCl3 or NH4SCN increases blood-red color. Pressure has no effect on aqueous solution equilibria!',
    examTipAr: 'إضافة متفاعلات ترجح الطردي فيزداد اللون الأحمر. انتبه: الضغط لا يؤثر إطلاقاً على اتزان المحاليل المائية لأنها سوائل غير قابلة للانضغاط!',
  },
  {
    id: 'haber_ammonia',
    nameEn: 'Haber-Bosch Ammonia Synthesis',
    nameAr: 'تخليق غاز النشادر (طريقة هابر - بوش)',
    equationKaTeX: '\\text{N}_2\\text{ (g)} + 3\\text{H}_2\\text{ (g)} \\rightleftharpoons 2\\text{NH}_3\\text{ (g)} + \\text{Heat } (\\Delta H = -92.4\\text{ kJ})',
    reactantFormula: '\\text{N}_2 + 3\\text{H}_2',
    productFormula: '2\\text{NH}_3',
    reactantNameEn: 'Nitrogen & Hydrogen Gas',
    reactantNameAr: 'غازا النيتروجين والهيدروجين',
    productNameEn: 'Ammonia Gas',
    productNameAr: 'غاز النشادر (الأمونيا)',
    reactantColorHex: '#38bdf8', // Cool cyan
    productColorHex: '#10b981', // Emerald green
    deltaH_kJ: -92.4,
    isExothermic: true,
    standardKc: 450.0,
    stoichReactants: 4,
    stoichProducts: 2,
    deltaNg: -2,
    descriptionEn: 'Industrial synthesis of ammonia demonstrating Le Chatelier optimization: high pressure (200 atm) and catalyst (finely divided iron/molybdenum) at 500 °C.',
    descriptionAr: 'التطبيق الصناعي الأهم لقاعدة لوشاتيليه: زيادة الضغط (٢٠٠ ضغط جوي) مع استخدام عامل حفاز (الحديد المجزأ) ترفع إنتاجية النشادر.',
    examTipEn: 'Catalyst increases forward and reverse rates equally without changing Kc or equilibrium yield!',
    examTipAr: 'العامل الحفاز يقلل طاقة التنشيط ويزيد سرعتي التفاعلين الطردي والعكسي بنفس المقدار دون التأثير على موضع الاتزان أو قيمة Kc!',
  },
  {
    id: 'pci5_dissociation',
    nameEn: 'Phosphorus Pentachloride Dissociation',
    nameAr: 'تفكك خامس كلوريد الفوسفور',
    equationKaTeX: '\\text{PCl}_5\\text{ (g)} \\rightleftharpoons \\text{PCl}_3\\text{ (g)} + \\text{Cl}_2\\text{ (g)} - \\text{Heat } (\\Delta H = +87.9\\text{ kJ})',
    reactantFormula: '\\text{PCl}_5',
    productFormula: '\\text{PCl}_3 + \\text{Cl}_2',
    reactantNameEn: 'Phosphorus Pentachloride',
    reactantNameAr: 'خامس كلوريد الفوسفور',
    productNameEn: 'Trichloride & Chlorine',
    productNameAr: 'ثالث كلوريد الفوسفور وغاز الكلور',
    reactantColorHex: '#a855f7', // Purple
    productColorHex: '#eab308', // Amber yellow
    deltaH_kJ: 87.9,
    isExothermic: false,
    standardKc: 0.042,
    stoichReactants: 1,
    stoichProducts: 2,
    deltaNg: +1,
    descriptionEn: 'Endothermic gas decomposition illustrating temperature increase causing higher Kc and shift towards products.',
    descriptionAr: 'تفاعل ماص للحرارة نموذجي: رفع درجة الحرارة يزيد قيمة ثابت الاتزان Kc ويزيد تفكك الغاز نحو النواتج.',
    examTipEn: 'In endothermic reactions, temperature and Kc are directly proportional (T ↑ => Kc ↑).',
    examTipAr: 'في التفاعلات الماصة للحرارة، العلاقة طردية بين درجة الحرارة وثابت الاتزان (رفع الحرارة يرفع Kc).',
  },
];

export interface ExamProblemPreset {
  id: string;
  yearAr: string;
  yearEn: string;
  titleAr: string;
  titleEn: string;
  systemId: GasSystemId;
  questionAr: string;
  questionEn: string;
  givenData: {
    reactantsEqConc?: number;
    productsEqConc?: number;
    kcCalculated: number;
    volumeL: number;
    temperatureC: number;
    deltaH: string;
  };
  solutionStepsAr: string[];
  solutionStepsEn: string[];
  finalAnswerKaTeX: string;
}

export const EXAM_EQUILIBRIUM_PROBLEMS: ExamProblemPreset[] = [
  {
    id: 'exam_2024_no2',
    yearAr: 'امتحان دور أول ٢٠٢٤',
    yearEn: 'MoE Exam 2024 (1st Session)',
    titleAr: 'مسألة حساب ثابت الاتزان Kc وتأثير تقليص حجم الوعاء',
    titleEn: 'Calculating Kc & Effect of Volume Compression',
    systemId: 'no2_dimer',
    questionAr: 'في التفاعل المتزن التالي في إناء مغلق سعته 2.0 لتر: 2NO2 (g) ⇌ N2O4 (g). وجد عند الاتزان أن تركيز [NO2] = 0.04 M وتركيز [N2O4] = 0.32 M. احسب ثابت الاتزان Kc، وماذا يحدث للون الخليط المتزن فور تقليص حجم الوعاء إلى 1.0 لتر ثم بعد استقرار الاتزان الجديد؟',
    questionEn: 'In the equilibrium system: 2NO2(g) ⇌ N2O4(g) in a 2.0 L sealed vessel. At equilibrium, [NO2] = 0.04 M and [N2O4] = 0.32 M. Calculate Kc, and describe what happens to the color intensity immediately upon reducing volume to 1.0 L, and after the new equilibrium is re-established.',
    givenData: {
      reactantsEqConc: 0.04,
      productsEqConc: 0.32,
      kcCalculated: 200.0,
      volumeL: 2.0,
      temperatureC: 25,
      deltaH: '-57.2 kJ/mol (طارد)',
    },
    solutionStepsAr: [
      '١. كتابة قانون فعل الكتلة لثابت الاتزان: $$K_c = \\frac{[\\text{N}_2\\text{O}_4]}{[\\text{NO}_2]^2}$$',
      '٢. التعويض بتركيزات الاتزان المعطاة: $$K_c = \\frac{0.32}{(0.04)^2} = \\frac{0.32}{0.0016} = 200$$',
      '٣. عند تقليص حجم الإناء إلى النصف (مضاعفة الضغط): تزداد تركيزات الغازين لحظياً إلى الضعف فيزداد اللون البني المحمر عتاماً للحظات.',
      '٤. ثم وفق قاعدة لوشاتيليه: ينشط التفاعل في الاتجاه ذي الحجم الأقل (تكوين N2O4 عديم اللون) فيخف اللون تدريجياً حتى يستقر الاتزان الجديد.',
    ],
    solutionStepsEn: [
      '1. Express Law of Mass Action: $$K_c = \\frac{[\\text{N}_2\\text{O}_4]}{[\\text{NO}_2]^2}$$',
      '2. Substitute given equilibrium concentrations: $$K_c = \\frac{0.32}{(0.04)^2} = \\frac{0.32}{0.0016} = 200$$',
      '3. When volume is halved (doubling pressure), concentrations momentarily double causing instant darkening.',
      '4. By Le Chatelier\'s principle, equilibrium shifts toward fewer gas moles (producing colorless N2O4), lightening the color.',
    ],
    finalAnswerKaTeX: 'K_c = 200 \\quad \\text{(بدون تمييز)}',
  },
  {
    id: 'exam_2023_haber',
    yearAr: 'امتحان دور أول ٢٠٢٣',
    yearEn: 'MoE Exam 2023 (1st Session)',
    titleAr: 'حساب ثابت الاتزان بدلالة الضغوط الجزيئية Kp',
    titleEn: 'Partial Pressure Equilibrium Constant Kp',
    systemId: 'haber_ammonia',
    questionAr: 'في التفاعل الغازي المتزن: N2 (g) + 3H2 (g) ⇌ 2NH3 (g). إذا كانت الضغوط الجزئية عند الاتزان هي: P(N2) = 2.0 atm، و P(H2) = 1.0 atm، و P(NH3) = 4.0 atm. احسب قيمة Kp للتفاعل، وبَيّن أثر إضافة عامل حفاز إلى الخليط المتزن.',
    questionEn: 'For the equilibrium gas reaction: N2(g) + 3H2(g) ⇌ 2NH3(g). Given the equilibrium partial pressures: P(N2) = 2.0 atm, P(H2) = 1.0 atm, and P(NH3) = 4.0 atm. Calculate Kp and explain the effect of adding an iron catalyst.',
    givenData: {
      reactantsEqConc: 2.0,
      productsEqConc: 4.0,
      kcCalculated: 8.0,
      volumeL: 5.0,
      temperatureC: 450,
      deltaH: '-92.4 kJ/mol (طارد)',
    },
    solutionStepsAr: [
      '١. كتابة قانون ثابت الاتزان للضغوط الجزئية: $$K_p = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2}) \\cdot (P_{\\text{H}_2})^3}$$',
      '٢. التعويض المباشر بالضغوط الجزئية: $$K_p = \\frac{(4.0)^2}{(2.0) \\cdot (1.0)^3} = \\frac{16}{2.0 \\times 1} = 8.0$$',
      '٣. أثر العامل الحفاز: يزيد من سرعة التفاعلين الطردي والعكسي بنفس المقدار عبر تقليل طاقة التنشيط، وبالتالي لا يغير من قيمة Kp ولا يغير من موضع الاتزان.',
    ],
    solutionStepsEn: [
      '1. Express equilibrium constant in partial pressures: $$K_p = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2}) \\cdot (P_{\\text{H}_2})^3}$$',
      '2. Substitute partial pressure values: $$K_p = \\frac{(4.0)^2}{(2.0) \\cdot (1.0)^3} = \\frac{16}{2} = 8.0$$',
      '3. Catalyst effect: accelerates forward and reverse rates equally without altering Kp or the equilibrium position.',
    ],
    finalAnswerKaTeX: 'K_p = 8.0',
  },
  {
    id: 'exam_2022_thermal',
    yearAr: 'امتحان دور أول ٢٠٢٢',
    yearEn: 'MoE Exam 2022 (1st Session)',
    titleAr: 'تأثير تغير درجة الحرارة وتحديد نوع التفاعل (طارد / ماص)',
    titleEn: 'Temperature Shifts & Determining Exothermic vs Endothermic',
    systemId: 'no2_dimer',
    questionAr: 'تفاعل انعكاسي متزن قيم ثابت اتزانه هي: Kc = 50 عند 300 K، بينما أصبحت Kc = 5.0 عند 450 K. بين مع التعليل نوع التفاعل (طارد أم ماص للحرارة)، وماذا يحدث لكمية النواتج عند خفض درجة الحرارة؟',
    questionEn: 'A reversible equilibrium reaction has Kc = 50 at 300 K, and Kc = 5.0 at 450 K. Determine with reasoning whether the reaction is exothermic or endothermic, and state what happens to product yield when cooling.',
    givenData: {
      kcCalculated: 50.0,
      volumeL: 1.0,
      temperatureC: 27,
      deltaH: 'سالبة (تفاعل طارد للحرارة)',
    },
    solutionStepsAr: [
      '١. بملاحظة تغير درجة الحرارة: عند رفع الحرارة من 300 K إلى 450 K انخفضت قيمة Kc من 50 إلى 5.',
      '٢. بما أن العلاقة بين درجة الحرارة وقيمة ثابت الاتزان Kc علاقة عكسية: إذن التفاعل **طارد للحرارة** (ΔH < 0).',
      '٣. وفق قاعدة لوشاتيليه: خفض درجة الحرارة يسحب الحرارة الناتجة فينشط التفاعل في الاتجاه الطردي وتزداد كمية النواتج.',
    ],
    solutionStepsEn: [
      '1. Temperature increased from 300 K to 450 K while Kc decreased from 50 to 5.0.',
      '2. An inverse relationship between T and Kc signifies an **exothermic reaction** (ΔH < 0).',
      '3. Cooling removes heat, driving equilibrium forward towards products, increasing yield.',
    ],
    finalAnswerKaTeX: '\\Delta H < 0 \\quad (\\text{تفاعل طارد للحرارة})',
  },
];

export const Interactive3DEquilibriumStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // State Management
  const [studioMode, setStudioMode] = useState<EquilibriumStudioMode>('3d_reactor');
  const [selectedSystemId, setSelectedSystemId] = useState<GasSystemId>('no2_dimer');
  const [selectedExamPresetId, setSelectedExamPresetId] = useState<string>('exam_2024_no2');

  // Disturbance & Thermodynamic Parameters
  const [temperatureC, setTemperatureC] = useState<number>(25.0); // 0 °C to 120 °C
  const [vesselVolumeL, setVesselVolumeL] = useState<number>(2.0); // 0.5 L to 4.0 L
  const [reactantMoles, setReactantMoles] = useState<number>(1.0); // Mol
  const [productMoles, setProductMoles] = useState<number>(1.0);   // Mol
  const [hasCatalyst, setHasCatalyst] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Reaction Rate & Kinetics History for Real-time Graphs
  const [history, setHistory] = useState<Array<{
    t: number;
    r1: number;
    r2: number;
    concR: number;
    concP: number;
    qc: number;
  }>>([]);

  const currentSystem = useMemo(() => {
    return EQUILIBRIUM_SYSTEMS.find((s) => s.id === selectedSystemId) || EQUILIBRIUM_SYSTEMS[0];
  }, [selectedSystemId]);

  const activeExamPreset = useMemo(() => {
    return EXAM_EQUILIBRIUM_PROBLEMS.find((p) => p.id === selectedExamPresetId) || EXAM_EQUILIBRIUM_PROBLEMS[0];
  }, [selectedExamPresetId]);

  // Three.js Mount References
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const pistonMeshRef = useRef<THREE.Mesh | null>(null);
  const thermalJacketRef = useRef<THREE.Mesh | null>(null);
  const gasVolumeMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesGroupRef = useRef<THREE.Group | null>(null);

  // Dynamic Kc calculated at current temperature via Van 't Hoff relation
  const currentKc = useMemo(() => {
    const k25 = currentSystem.standardKc;
    const t25 = 25.0;
    return calculateVantHoffK(k25, t25, temperatureC, currentSystem.deltaH_kJ);
  }, [currentSystem, temperatureC]);

  // Current Concentrations in Vessel
  const concReactants = useMemo(() => {
    return reactantMoles / Math.max(0.1, vesselVolumeL);
  }, [reactantMoles, vesselVolumeL]);

  const concProducts = useMemo(() => {
    return productMoles / Math.max(0.1, vesselVolumeL);
  }, [productMoles, vesselVolumeL]);

  // Current Reaction Quotient Qc
  const currentQc = useMemo(() => {
    const pPower = currentSystem.stoichProducts;
    const rPower = currentSystem.stoichReactants;
    const num = Math.pow(Math.max(1e-6, concProducts), pPower);
    const den = Math.pow(Math.max(1e-6, concReactants), rPower);
    return num / Math.max(1e-9, den);
  }, [currentSystem, concProducts, concReactants]);

  // Dynamic Shift Direction Evaluation
  const shiftStatus = useMemo(() => {
    const ratio = currentQc / Math.max(1e-9, currentKc);
    if (Math.abs(ratio - 1.0) < 0.05) {
      return {
        direction: 'equilibrium',
        labelEn: 'Dynamic Equilibrium (r1 = r2)',
        labelAr: 'اتزان ديناميكي مستقر (سرعة الطردي = سرعة العكسي)',
        color: '#10b981',
      };
    } else if (currentQc < currentKc) {
      return {
        direction: 'forward',
        labelEn: 'Shifts Forward (Right → Products)',
        labelAr: 'ينشط في الاتجاه الطردي (نحو النواتج →)',
        color: '#38bdf8',
      };
    } else {
      return {
        direction: 'reverse',
        labelEn: 'Shifts Reverse (Left ← Reactants)',
        labelAr: 'ينشط في الاتجاه العكسي (نحو المتفاعلات ←)',
        color: '#f43f5e',
      };
    }
  }, [currentQc, currentKc]);

  // Optical Density & Colorimetric Gas Blend
  const gasColorBlend = useMemo(() => {
    const fracProduct = concProducts / Math.max(0.001, concReactants + concProducts);
    const reactantCol = new THREE.Color(currentSystem.reactantColorHex);
    const productCol = new THREE.Color(currentSystem.productColorHex);
    const mixed = reactantCol.clone().lerp(productCol, fracProduct);
    return `#${mixed.getHexString()}`;
  }, [concReactants, concProducts, currentSystem]);

  // Real-time Kinetics Simulation Engine (Tick)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setReactantMoles((prevR) => {
        setProductMoles((prevP) => {
          const v = vesselVolumeL;
          const cR = prevR / v;
          const cP = prevP / v;

          // Rate constants adjusted for temperature and catalyst
          const catFactor = hasCatalyst ? 2.5 : 1.0;
          const kForwardBase = 0.08 * catFactor * Math.sqrt((temperatureC + 273.15) / 298.15);
          const kReverseBase = (kForwardBase / Math.max(1e-4, currentKc));

          const rateForward = kForwardBase * Math.pow(Math.max(0, cR), currentSystem.stoichReactants);
          const rateReverse = kReverseBase * Math.pow(Math.max(0, cP), currentSystem.stoichProducts);

          const deltaStep = (rateForward - rateReverse) * 0.05;

          const newR = Math.max(0.05, prevR - deltaStep * currentSystem.stoichReactants);
          const newP = Math.max(0.05, prevP + deltaStep * currentSystem.stoichProducts);

          // Append to kinetics history
          setHistory((prevHist) => {
            const nextT = prevHist.length > 0 ? prevHist[prevHist.length - 1].t + 1 : 0;
            const updated = [
              ...prevHist,
              {
                t: nextT,
                r1: rateForward,
                r2: rateReverse,
                concR: newR / v,
                concP: newP / v,
                qc: Math.pow(newP / v, currentSystem.stoichProducts) / Math.max(1e-6, Math.pow(newR / v, currentSystem.stoichReactants)),
              },
            ];
            return updated.slice(-30); // Keep last 30 frames
          });

          return newP;
        });
        return prevR;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying, vesselVolumeL, hasCatalyst, temperatureC, currentKc, currentSystem]);

  // Three.js 3D Reactor Scene Initialization
  useEffect(() => {
    if (studioMode !== '3d_reactor' || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient and Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-4, -2, -3);
    scene.add(fillLight);

    // Laboratory Stand Platform & Base
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.18, 36);
    const baseMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x94a3b8 : 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -1.4;
    scene.add(baseMesh);

    // Glass Reactor Cylinder Body
    const cylinderHeight = 2.4;
    const cylinderRadius = 0.85;
    const glassGeo = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, cylinderHeight, 36, 1, true);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.5,
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    scene.add(glassMesh);

    // Top and Bottom Flanges (Metallic O-Rings)
    const flangeGeo = new THREE.TorusGeometry(cylinderRadius + 0.02, 0.045, 16, 48);
    const flangeMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85, roughness: 0.2 });
    const topFlange = new THREE.Mesh(flangeGeo, flangeMat);
    topFlange.rotation.x = Math.PI / 2;
    topFlange.position.y = cylinderHeight / 2;
    scene.add(topFlange);

    const botFlange = new THREE.Mesh(flangeGeo, flangeMat);
    botFlange.rotation.x = Math.PI / 2;
    botFlange.position.y = -cylinderHeight / 2;
    scene.add(botFlange);

    // Movable Hermetic Piston Head & Plunger Rod
    const pistonGeo = new THREE.CylinderGeometry(cylinderRadius - 0.02, cylinderRadius - 0.02, 0.12, 36);
    const pistonMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.15,
    });
    const pistonMesh = new THREE.Mesh(pistonGeo, pistonMat);
    pistonMesh.position.y = 0.4;
    scene.add(pistonMesh);
    pistonMeshRef.current = pistonMesh;

    const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 18);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0xcfd8dc, metalness: 0.9, roughness: 0.1 });
    const rodMesh = new THREE.Mesh(rodGeo, rodMat);
    rodMesh.position.y = 0.95;
    pistonMesh.add(rodMesh);

    // Piston Handle
    const handleGeo = new THREE.TorusGeometry(0.22, 0.05, 16, 32);
    const handleMesh = new THREE.Mesh(handleGeo, rodMat);
    handleMesh.position.y = 0.9;
    rodMesh.add(handleMesh);

    // Inner Gas Optical Volume Mesh
    const gasGeo = new THREE.CylinderGeometry(cylinderRadius - 0.04, cylinderRadius - 0.04, 1.0, 32);
    const gasMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(currentSystem.reactantColorHex),
      transparent: true,
      opacity: 0.45,
    });
    const gasMesh = new THREE.Mesh(gasGeo, gasMat);
    gasMesh.position.y = -0.5;
    scene.add(gasMesh);
    gasVolumeMeshRef.current = gasMesh;

    // Thermal Collar / Heating Jacket Base
    const jacketGeo = new THREE.CylinderGeometry(cylinderRadius + 0.12, cylinderRadius + 0.14, 0.5, 36, 1, true);
    const jacketMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.5,
      roughness: 0.4,
      side: THREE.DoubleSide,
    });
    const jacketMesh = new THREE.Mesh(jacketGeo, jacketMat);
    jacketMesh.position.y = -cylinderHeight / 2 + 0.25;
    scene.add(jacketMesh);
    thermalJacketRef.current = jacketMesh;

    // Kinetic Colliding Molecules (Particles Group)
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);
    particlesGroupRef.current = particlesGroup;

    const particleCount = 45;
    const particleSpheres: Array<{
      mesh: THREE.Mesh;
      vel: THREE.Vector3;
      radius: number;
    }> = [];

    const sphereGeo = new THREE.SphereGeometry(0.045, 16, 16);
    for (let i = 0; i < particleCount; i++) {
      const isProduct = i % 3 === 0;
      const pMat = new THREE.MeshStandardMaterial({
        color: isProduct ? new THREE.Color(currentSystem.productColorHex) : new THREE.Color(currentSystem.reactantColorHex),
        metalness: 0.4,
        roughness: 0.2,
      });
      const pMesh = new THREE.Mesh(sphereGeo, pMat);

      // Random position inside initial gas cylinder
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * (cylinderRadius - 0.1);
      pMesh.position.set(
        Math.cos(angle) * r,
        -1.0 + Math.random() * 1.2,
        Math.sin(angle) * r
      );

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      );

      particlesGroup.add(pMesh);
      particleSpheres.push({ mesh: pMesh, vel, radius: 0.045 });
    }

    // Animation Loop
    let clock = 0;
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      clock += 0.016;

      // Gentle orbital sway
      scene.rotation.y = Math.sin(clock * 0.3) * 0.12;

      // Update particle positions based on current temperature velocity
      const tempSpeedMultiplier = Math.sqrt((temperatureC + 273.15) / 298.15);
      const curPistonY = pistonMeshRef.current?.position.y ?? 0.4;
      const bottomY = -1.1;

      particleSpheres.forEach((p) => {
        p.mesh.position.addScaledVector(p.vel, tempSpeedMultiplier);

        // Radial cylinder boundary collision
        const radialDist = Math.sqrt(p.mesh.position.x ** 2 + p.mesh.position.z ** 2);
        if (radialDist > cylinderRadius - 0.08) {
          const dot = (p.vel.x * p.mesh.position.x + p.vel.z * p.mesh.position.z) / (radialDist * radialDist);
          p.vel.x -= 2 * dot * p.mesh.position.x;
          p.vel.z -= 2 * dot * p.mesh.position.z;
        }

        // Top piston and bottom cap collisions
        if (p.mesh.position.y > curPistonY - 0.08) {
          p.mesh.position.y = curPistonY - 0.08;
          p.vel.y = -Math.abs(p.vel.y);
        } else if (p.mesh.position.y < bottomY + 0.08) {
          p.mesh.position.y = bottomY + 0.08;
          p.vel.y = Math.abs(p.vel.y);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      renderer.dispose();
      container.innerHTML = '';
    };
  }, [studioMode, isLight]);

  // Synchronize 3D Piston Height with Vessel Volume Slider
  useEffect(() => {
    if (!pistonMeshRef.current || !gasVolumeMeshRef.current) return;
    // Map vessel volume (0.5L - 4.0L) to cylinder Y height (-0.6 to 1.1)
    const normalizedVol = (vesselVolumeL - 0.5) / (4.0 - 0.5);
    const targetY = -0.4 + normalizedVol * 1.4;
    pistonMeshRef.current.position.y = targetY;

    // Adjust inner gas volume mesh height and center
    const gasHeight = targetY - (-1.1);
    gasVolumeMeshRef.current.scale.set(1, Math.max(0.01, gasHeight), 1);
    gasVolumeMeshRef.current.position.y = -1.1 + gasHeight / 2;
  }, [vesselVolumeL]);

  // Synchronize 3D Thermal Collar Glow with Temperature
  useEffect(() => {
    if (!thermalJacketRef.current) return;
    const mat = thermalJacketRef.current.material as THREE.MeshStandardMaterial;
    if (temperatureC > 30) {
      // Hot plate warming / heating jacket (Warm Amber / Red)
      const heatFrac = Math.min(1.0, (temperatureC - 30) / 70);
      mat.color.set(new THREE.Color(0x334155).lerp(new THREE.Color(0xd97706), heatFrac));
      mat.emissive.set(new THREE.Color(0xe11d48).multiplyScalar(heatFrac * 0.7));
    } else if (temperatureC < 20) {
      // Ice Bath cooling (Frosted Cyan / Cold Blue)
      const coolFrac = Math.min(1.0, (20 - temperatureC) / 20);
      mat.color.set(new THREE.Color(0x334155).lerp(new THREE.Color(0x0284c7), coolFrac));
      mat.emissive.set(new THREE.Color(0x38bdf8).multiplyScalar(coolFrac * 0.6));
    } else {
      mat.color.setHex(0x334155);
      mat.emissive.setHex(0x000000);
    }
  }, [temperatureC]);

  // Synchronize 3D Gas Volumetric Color
  useEffect(() => {
    if (!gasVolumeMeshRef.current) return;
    const mat = gasVolumeMeshRef.current.material as THREE.MeshBasicMaterial;
    mat.color.set(gasColorBlend);
  }, [gasColorBlend]);

  // Disturbance Actions
  const handleApplyDisturbance = (type: 'heat' | 'cool' | 'compress' | 'expand' | 'add_reactant' | 'add_product' | 'catalyst' | 'reset') => {
    playLabClickSound();
    switch (type) {
      case 'heat':
        setTemperatureC((t) => Math.min(100, t + 25));
        break;
      case 'cool':
        setTemperatureC((t) => Math.max(0, t - 25));
        break;
      case 'compress':
        setVesselVolumeL((v) => Math.max(0.5, parseFloat((v - 0.5).toFixed(1))));
        break;
      case 'expand':
        setVesselVolumeL((v) => Math.min(4.0, parseFloat((v + 0.5).toFixed(1))));
        break;
      case 'add_reactant':
        setReactantMoles((m) => parseFloat((m + 0.5).toFixed(2)));
        break;
      case 'add_product':
        setProductMoles((m) => parseFloat((m + 0.5).toFixed(2)));
        break;
      case 'catalyst':
        setHasCatalyst((c) => !c);
        break;
      case 'reset':
        setTemperatureC(25.0);
        setVesselVolumeL(2.0);
        setReactantMoles(1.0);
        setProductMoles(1.0);
        setHasCatalyst(false);
        setHistory([]);
        break;
    }
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 transition-all flex flex-col gap-4 ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-sm'
          : 'bg-[#0D1117] border-[#30363D] text-[#C9D1D9] shadow-xl'
      } ${isFullscreen ? 'min-h-screen' : ''}`}
    >
      {/* Studio Header Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
        isLight ? 'border-slate-200' : isContrast ? 'border-white' : 'border-[#30363D]'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <FlaskConical className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight">
                {isAr
                  ? 'استوديو الاتزان الكيميائي ومبدأ لوشاتيليه 3D'
                  : '3D Chemical Equilibrium & Le Chatelier Studio'}
              </h1>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {isAr ? 'الباب الثالث: الاتزان الكيميائي' : 'Chapter 3: Equilibrium'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isAr
                ? 'محاكاة ديناميكية حية لوعاء التفاعل، ثوابت الاتزان Kc/Kp، ومنحنيات السرعة ومسائل الثانوية العامة'
                : 'Kinetic 3D reactor, Kc/Kp equilibrium constants, Le Chatelier response curves & ministerial exam solver'}
            </p>
          </div>
        </div>

        {/* Global Controls & Mode Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher Tabs */}
          <div className={`flex items-center p-1 rounded-xl border text-xs font-bold ${
            isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'
          }`}>
            <button
              type="button"
              onClick={() => setStudioMode('3d_reactor')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                studioMode === '3d_reactor'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isAr ? 'وعاء التفاعل 3D' : '3D Reactor'}</span>
            </button>
            <button
              type="button"
              onClick={() => setStudioMode('disturbances')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'disturbances'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{isAr ? 'مختبر لوشاتيليه والمنحنيات' : 'Le Chatelier Lab'}</span>
            </button>
            <button
              type="button"
              onClick={() => setStudioMode('exam_solver')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'exam_solver'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isAr ? 'حاسبة مسائل الوزارة Kc/Kp' : 'Ministerial Solver'}</span>
            </button>
          </div>

          {/* Export Lab Report */}
          <button
            type="button"
            onClick={() => setIsReportOpen(true)}
            className="min-h-[36px] px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isAr ? 'تقرير التجربة' : 'Lab Report'}</span>
          </button>
        </div>
      </div>

      {/* Chemical System Selector Ribbon */}
      <div className={`p-2.5 rounded-xl border flex flex-wrap items-center justify-between gap-3 text-xs ${
        isContrast
          ? 'bg-black border-white'
          : isLight
          ? 'bg-white border-slate-200'
          : 'bg-[#161B22] border-[#30363D]'
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-500 dark:text-slate-400">
            {isAr ? 'النظام الكيميائي المتزن:' : 'Equilibrium System:'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {EQUILIBRIUM_SYSTEMS.map((sys) => (
              <button
                key={sys.id}
                type="button"
                onClick={() => {
                  playLabClickSound();
                  setSelectedSystemId(sys.id);
                  setReactantMoles(1.0);
                  setProductMoles(1.0);
                  setHistory([]);
                }}
                className={`px-2.5 py-1 rounded-lg border font-bold transition-all cursor-pointer ${
                  selectedSystemId === sys.id
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                {isAr ? sys.nameAr : sys.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Reaction Equation KaTeX Pill */}
        <div className={`px-3 py-1 rounded-lg border font-mono font-bold text-xs ${
          isLight ? 'bg-slate-100 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-emerald-400'
        }`}>
          <MathRenderer text={`$$${currentSystem.equationKaTeX}$$`} />
        </div>
      </div>

      {/* Main Studio Workspace (Left Panel + Right Canvas/Data) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
        {/* Left Column: Interactive Controls & Telemetry HUD */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {/* Dynamic Shift Status & Balance Beam Gauge */}
          <div className={`p-3.5 rounded-2xl border space-y-2.5 ${
            isContrast
              ? 'bg-black border-white'
              : isLight
              ? 'bg-white border-slate-200'
              : 'bg-[#161B22] border-[#30363D]'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isAr ? 'حالة الاتزان وميزان Qc مقابل Kc:' : 'Equilibrium Status & Qc vs Kc:'}
              </span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full border"
                style={{
                  color: shiftStatus.color,
                  borderColor: `${shiftStatus.color}40`,
                  backgroundColor: `${shiftStatus.color}15`,
                }}
              >
                {isAr ? shiftStatus.labelAr : shiftStatus.labelEn}
              </span>
            </div>

            {/* Numerical Balance Metrics */}
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className={`p-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <span className="text-[10px] text-slate-400 block font-bold">
                  {isAr ? 'حاصل التفاعل الحالي (Qc)' : 'Reaction Quotient (Qc)'}
                </span>
                <span className="text-sm font-mono font-black text-cyan-500">
                  {currentQc < 0.001 || currentQc > 10000 ? currentQc.toExponential(2) : currentQc.toFixed(2)}
                </span>
              </div>
              <div className={`p-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <span className="text-[10px] text-slate-400 block font-bold">
                  {isAr ? 'ثابت الاتزان عند هذه الحرارة (Kc)' : 'Equilibrium Constant (Kc)'}
                </span>
                <span className="text-sm font-mono font-black text-emerald-500">
                  {currentKc < 0.001 || currentKc > 10000 ? currentKc.toExponential(2) : currentKc.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Visual Balance Scale SVG */}
            <div className="pt-1">
              <svg viewBox="0 0 300 50" className="w-full h-10 overflow-visible">
                {/* Scale Base Fulcrum */}
                <polygon points="150,38 140,50 160,50" fill={isLight ? '#64748b' : '#94a3b8'} />
                
                {/* Pivoting Balance Beam */}
                {(() => {
                  const logRatio = Math.log10(Math.max(1e-4, currentQc / Math.max(1e-4, currentKc)));
                  const angleDeg = Math.max(-18, Math.min(18, logRatio * 14));
                  return (
                    <g transform={`rotate(${angleDeg}, 150, 38)`}>
                      <line x1="30" y1="38" x2="270" y2="38" stroke={isLight ? '#334155' : '#cbd5e1'} strokeWidth="3" strokeLinecap="round" />
                      {/* Left Pan (Qc < Kc -> Forward Shift) */}
                      <circle cx="45" cy="42" r="10" fill="#38bdf8" />
                      <text x="45" y="45" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Qc</text>
                      {/* Right Pan (Qc > Kc -> Reverse Shift) */}
                      <circle cx="255" cy="42" r="10" fill="#f43f5e" />
                      <text x="255" y="45" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Kc</text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          </div>

          {/* Real-time Thermodynamic Control Sliders */}
          <div className={`p-3.5 rounded-2xl border space-y-3.5 ${
            isContrast
              ? 'bg-black border-white'
              : isLight
              ? 'bg-white border-slate-200'
              : 'bg-[#161B22] border-[#30363D]'
          }`}>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
              {isAr ? 'عوامل التحكم في الاتزان (مبدأ لوشاتيليه):' : 'Le Chatelier Control Factors:'}
            </span>

            {/* Temperature Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1 font-bold">
                <span className="flex items-center gap-1 text-amber-500">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>{isAr ? 'درجة الحرارة (T):' : 'Temperature (T):'}</span>
                </span>
                <span className="font-mono text-emerald-500">
                  {temperatureC.toFixed(1)} °C ({ (temperatureC + 273.15).toFixed(1) } K)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="1"
                value={temperatureC}
                onChange={(e) => setTemperatureC(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0 °C (حمام جليدي)</span>
                <span>25 °C (قياسي)</span>
                <span>120 °C (تسخين)</span>
              </div>
            </div>

            {/* Vessel Volume / Pressure Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1 font-bold">
                <span className="flex items-center gap-1 text-sky-500">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>{isAr ? 'حجم الوعاء / الضغط (V & P):' : 'Volume / Pressure (V & P):'}</span>
                </span>
                <span className="font-mono text-emerald-500">
                  V = {vesselVolumeL.toFixed(1)} L | P ∝ { (1 / vesselVolumeL).toFixed(2) } atm
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.0"
                step="0.1"
                value={vesselVolumeL}
                onChange={(e) => setVesselVolumeL(parseFloat(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0.5 L (ضغط مرتفع)</span>
                <span>2.0 L</span>
                <span>4.0 L (ضغط منخفض)</span>
              </div>
            </div>

            {/* Concentration Dropper Adjustments */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className={`p-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <div className="flex items-center justify-between mb-1 font-bold">
                  <span className="text-[10px] text-slate-400">{isAr ? 'مولات المتفاعلات:' : 'Reactants (mol):'}</span>
                  <span className="font-mono text-amber-500">{reactantMoles.toFixed(2)}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => handleApplyDisturbance('add_reactant')}
                    className="flex-1 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30"
                  >
                    + 0.5
                  </button>
                  <button
                    type="button"
                    onClick={() => setReactantMoles((m) => Math.max(0.2, parseFloat((m - 0.5).toFixed(2))))}
                    className="flex-1 py-1 rounded bg-slate-500/20 hover:bg-slate-500/30 text-slate-400 font-bold border border-slate-500/30"
                  >
                    - 0.5
                  </button>
                </div>
              </div>

              <div className={`p-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <div className="flex items-center justify-between mb-1 font-bold">
                  <span className="text-[10px] text-slate-400">{isAr ? 'مولات النواتج:' : 'Products (mol):'}</span>
                  <span className="font-mono text-emerald-500">{productMoles.toFixed(2)}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => handleApplyDisturbance('add_product')}
                    className="flex-1 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30"
                  >
                    + 0.5
                  </button>
                  <button
                    type="button"
                    onClick={() => setProductMoles((m) => Math.max(0.2, parseFloat((m - 0.5).toFixed(2))))}
                    className="flex-1 py-1 rounded bg-slate-500/20 hover:bg-slate-500/30 text-slate-400 font-bold border border-slate-500/30"
                  >
                    - 0.5
                  </button>
                </div>
              </div>
            </div>

            {/* Catalyst Toggle */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>{isAr ? 'إضافة عامل حفاز (Catalyst):' : 'Add Catalyst (Fe/Pt):'}</span>
              </span>
              <button
                type="button"
                onClick={() => handleApplyDisturbance('catalyst')}
                className={`px-3 py-1 rounded-xl text-xs font-bold border transition-colors ${
                  hasCatalyst
                    ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/40'
                    : 'bg-slate-500/10 text-slate-400 border-slate-700'
                }`}
              >
                {hasCatalyst ? (isAr ? '✓ نشط (مسرّع)' : 'Active (Fast)') : (isAr ? 'غير مفعل' : 'Inactive')}
              </button>
            </div>
          </div>

          {/* Quick Disturbance Actions Toolbar */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              type="button"
              onClick={() => handleApplyDisturbance('heat')}
              className="p-2 rounded-xl border flex items-center justify-center gap-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30 cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>{isAr ? 'تسخين (+25°C)' : 'Heat (+25°C)'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleApplyDisturbance('cool')}
              className="p-2 rounded-xl border flex items-center justify-center gap-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border-sky-500/30 cursor-pointer"
            >
              <Snowflake className="w-3.5 h-3.5" />
              <span>{isAr ? 'تبريد (-25°C)' : 'Cool (-25°C)'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleApplyDisturbance('compress')}
              className="p-2 rounded-xl border flex items-center justify-center gap-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 cursor-pointer"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'تقليص الحجم (ضغط ↑)' : 'Compress (P ↑)'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleApplyDisturbance('reset')}
              className="p-2 rounded-xl border flex items-center justify-center gap-1.5 bg-slate-500/10 hover:bg-slate-500/20 text-slate-400 border-slate-500/30 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAr ? 'إعادة ضبط' : 'Reset All'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Canvas / Le Chatelier Kinetics / Exam Problem Solver */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          {studioMode === '3d_reactor' && (
            <div className={`relative flex-1 min-h-[460px] rounded-2xl border overflow-hidden flex flex-col ${
              isContrast
                ? 'bg-black border-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-[#161B22] border-[#30363D]'
            }`}>
              {/* 3D WebGL Canvas Viewport */}
              <div ref={mountRef} className="w-full flex-1 min-h-[380px] cursor-grab active:cursor-grabbing" />

              {/* 3D HUD Telemetry Overlay Badges */}
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex flex-col gap-2 pointer-events-none">
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white text-xs font-mono font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: gasColorBlend }} />
                  <span>{isAr ? 'لون الخليط البصري:' : 'Mixture Color Density'}</span>
                  <span className="text-emerald-400 font-black">
                    OD = { ((concReactants * 1.5) / Math.max(0.1, concReactants + concProducts)).toFixed(2) }
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white text-xs font-mono font-bold flex items-center gap-2">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'درجة حرارة الوعاء:' : 'Vessel Temp:'}</span>
                  <span className="text-amber-300">{temperatureC.toFixed(1)} °C</span>
                </div>
              </div>

              {/* Bottom Interactive Guidance Pill */}
              <div className={`p-2.5 border-t flex items-center justify-between text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/80 border-slate-800 text-slate-300'
              }`}>
                <div className="flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isAr ? currentSystem.examTipAr : currentSystem.examTipEn}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-2.5 py-1 rounded-lg border text-xs font-bold flex items-center gap-1 cursor-pointer bg-slate-800 text-slate-200 hover:bg-slate-700"
                >
                  {isPlaying ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                  <span>{isPlaying ? (isAr ? 'إيقاف مؤقت' : 'Pause') : (isAr ? 'استئناف' : 'Resume')}</span>
                </button>
              </div>
            </div>
          )}

          {studioMode === 'disturbances' && (
            <div className={`p-4 rounded-2xl border space-y-4 ${
              isContrast
                ? 'bg-black border-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-[#161B22] border-[#30363D]'
            }`}>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {isAr ? 'منحنيات سرعة التفاعل (r1, r2) والتراكيز عبر الزمن:' : 'Reaction Rates (r1, r2) & Concentration Kinetics Over Time:'}
                </span>
                <span className="text-[11px] font-mono text-emerald-500 font-bold">
                  {isAr ? 'تحديث لحظي بمعدل 5 Hz' : 'Live Dynamic Sampling (5 Hz)'}
                </span>
              </div>

              {/* Real-time SVG Kinetics Chart */}
              <div className="w-full h-56 rounded-xl border bg-slate-950 p-2 relative overflow-hidden">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="40" y2="170" stroke="#334155" strokeWidth="1" />
                  <line x1="40" y1="170" x2="490" y2="170" stroke="#334155" strokeWidth="1" />
                  <line x1="40" y1="95" x2="490" y2="95" stroke="#1e293b" strokeDasharray="3,3" />

                  {/* Y Axis Labels */}
                  <text x="32" y="25" fill="#64748b" fontSize="8" textAnchor="end">Max Rate</text>
                  <text x="32" y="98" fill="#64748b" fontSize="8" textAnchor="end">Equiv</text>
                  <text x="32" y="170" fill="#64748b" fontSize="8" textAnchor="end">0</text>

                  {/* X Axis Label */}
                  <text x="265" y="190" fill="#64748b" fontSize="9" textAnchor="middle">
                    {isAr ? 'الزمن (ثانية) ➔' : 'Time (s) ➔'}
                  </text>

                  {/* Plotted Rate Lines */}
                  {history.length > 1 && (() => {
                    const maxR = Math.max(0.01, ...history.map((h) => Math.max(h.r1, h.r2)));
                    const ptsR1 = history.map((h, idx) => {
                      const x = 40 + (idx / Math.max(1, history.length - 1)) * 440;
                      const y = 170 - (h.r1 / maxR) * 140;
                      return `${x},${y}`;
                    }).join(' ');

                    const ptsR2 = history.map((h, idx) => {
                      const x = 40 + (idx / Math.max(1, history.length - 1)) * 440;
                      const y = 170 - (h.r2 / maxR) * 140;
                      return `${x},${y}`;
                    }).join(' ');

                    return (
                      <>
                        {/* r1 Forward Rate (Cyan) */}
                        <polyline points={ptsR1} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                        {/* r2 Reverse Rate (Magenta) */}
                        <polyline points={ptsR2} fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4,2" />
                      </>
                    );
                  })()}
                </svg>

                {/* Chart Legend */}
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-3 text-[11px] font-bold bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <span className="w-3 h-0.5 bg-sky-400" />
                    <span>{isAr ? 'سرعة التفاعل الطردي (r1)' : 'Forward Rate (r1)'}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-rose-400">
                    <span className="w-3 h-0.5 bg-rose-400 border-dashed" />
                    <span>{isAr ? 'سرعة التفاعل العكسي (r2)' : 'Reverse Rate (r2)'}</span>
                  </span>
                </div>
              </div>

              {/* Explanatory Pedagogical Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-xl border space-y-1.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                  <span className="font-bold text-emerald-500 block flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'قاعدة لوشاتيليه عند الاتزان:' : 'Le Chatelier Principle at Equilibrium:'}</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {isAr
                      ? 'إذا حدث تغير في أحد العوامل المؤثرة على نظام متزن مثل (التركيز أو الضغط أو درجة الحرارة) فإن النظام ينشط في الاتجاه الذي يقلل أو يلغي تأثير هذا التغير.'
                      : 'When a stress is applied to a chemical system at equilibrium, the system readjusts in a direction that counteracts the applied stress.'}
                  </p>
                </div>

                <div className={`p-3 rounded-xl border space-y-1.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                  <span className="font-bold text-amber-500 block flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تأثير الحرارة على قيمة ثابت الاتزان Kc:' : 'Temperature Effect on Constant Kc:'}</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {isAr
                      ? 'درجة الحرارة هي العامل الوحيد الذي يغير من القيمة العددية لثابت الاتزان Kc. التغير في الضغط أو التركيز أو إضافة عامل حفاز لا يغير إطلاقاً من قيمة Kc.'
                      : 'Temperature is the ONLY factor that alters the numerical value of Kc. Pressure, volume, concentration, or catalysts have zero effect on Kc.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {studioMode === 'exam_solver' && (
            <div className={`p-4 rounded-2xl border space-y-3.5 ${
              isContrast
                ? 'bg-black border-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-[#161B22] border-[#30363D]'
            }`}>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-200">
                    {isAr
                      ? 'مسائل امتحانات الثانوية العامة الرسمية وحسابات Kc و Kp'
                      : 'Ministerial Thanawya Amma Equilibrium Exam Problems'}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {isAr ? activeExamPreset.yearAr : activeExamPreset.yearEn}
                </span>
              </div>

              {/* Exam Presets Switcher */}
              <div className="flex flex-wrap gap-2">
                {EXAM_EQUILIBRIUM_PROBLEMS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedExamPresetId(preset.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      selectedExamPresetId === preset.id
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                        : isLight
                        ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {isAr ? preset.yearAr : preset.yearEn}
                  </button>
                ))}
              </div>

              {/* Question Statement Card */}
              <div className={`p-3.5 rounded-xl border space-y-2 text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/80 border-slate-800 text-slate-200'
              }`}>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                  {isAr ? 'نص مسألة الوزارة:' : 'Official Exam Question Stem:'}
                </span>
                <p className="leading-relaxed font-sans">
                  {isAr ? activeExamPreset.questionAr : activeExamPreset.questionEn}
                </p>
              </div>

              {/* Step-by-Step KaTeX Derivation Cards */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                  {isAr ? 'خطوات الحل والنموذج الوزاري المعتمد:' : 'Official Step-by-Step Mathematical Derivation:'}
                </span>
                {(isAr ? activeExamPreset.solutionStepsAr : activeExamPreset.solutionStepsEn).map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-xs leading-relaxed ${
                      isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/60 border-slate-800/80 text-slate-200'
                    }`}
                  >
                    <MathRenderer text={step} />
                  </div>
                ))}
              </div>

              {/* Final Answer Banner */}
              <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-between text-xs font-bold">
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isAr ? 'الناتج النهائي المعتمد:' : 'Accredited Final Result:'}</span>
                </span>
                <div className="font-mono text-sm text-emerald-500 font-black">
                  <MathRenderer text={`$$${activeExamPreset.finalAnswerKaTeX}$$`} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lab Report Generator Slide-over Modal */}
      {isReportOpen && (
        <LabReportGeneratorModal
          isOpen={isReportOpen}
          onClose={() => setIsReportOpen(false)}
          lang={lang}
          theme={theme}
          initialExperimentId="chem-exp-1"
          initialDiscipline="chemistry"
        />
      )}
    </div>
  );
};
