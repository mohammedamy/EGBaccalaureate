import React, { useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  drawVolumetricBeam,
  drawMetallicCylinder,
  drawProceduralFlame,
  drawGlowingParticle,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  calculateSnellsLaw,
  wavelengthToRGB,
  calculateThinLens,
  getCauchyRefractiveIndex,
} from '../../core/simulation/OpticsEngine';
import {
  Sun,
  Eye,
  Radio,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type OpticsMode = 'refraction' | 'thin_lens' | 'double_slit';

interface OpticsParams {
  opticsMode: OpticsMode;
  // Mode 1: Refraction & Snell
  n1: number; // Incident medium refractive index
  n2: number; // Refracting medium refractive index
  incidentAngleDeg: number; // 0° to 85°
  refractionWavelengthNm: number; // 380 nm to 750 nm
  // Mode 2: Thin Lens Optical Bench
  focalLengthCm: number; // +10 to +30 cm (convex) or -10 to -30 cm (concave)
  objectDistanceCm: number; // 5 to 60 cm
  objectHeightCm: number; // 5 to 25 cm
  // Mode 3: Young's Double Slit
  wavelengthNm: number; // 380 nm to 750 nm
  slitSeparationUm: number; // 50 to 500 µm
  screenDistanceM: number; // 0.5 to 3.0 m
  slitWidthUm: number; // 10 to 50 µm
}

interface OpticsSimState {
  isTIR: boolean;
  refractedAngleDeg: number;
  criticalAngleDeg: number;
  imageDistanceCm: number;
  magnification: number;
  fringeSpacingMm: number;
  photodiodeCurrentMa: number;
}

// Default initial laboratory parameters
const INITIAL_OPTICS_PARAMS: OpticsParams = {
  opticsMode: 'double_slit',
  n1: 1.0, // Air
  n2: 1.52, // Crown Glass
  incidentAngleDeg: 45,
  refractionWavelengthNm: 550, // Green laser
  focalLengthCm: 15, // Converging lens
  objectDistanceCm: 30, // At 2F
  objectHeightCm: 10,
  wavelengthNm: 632.8, // He-Ne Red Laser
  slitSeparationUm: 250, // 0.25 mm
  screenDistanceM: 1.5,
  slitWidthUm: 25,
};

// Pedagogy POE Prompts for Egyptian Secondary Physics
const OPTICS_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'young_double_slit_wavelength',
    titleEn: "Young's Double-Slit Experiment: Wavelength & Fringe Spacing",
    titleAr: 'تجربة ينج للشق المزدوج: العلاقة بين الطول الموجي وتداخل الهدب',
    scenarioEn:
      'A monochromatic laser beam illuminates two narrow slits separated by distance d = 0.25 mm. An interference pattern of alternating bright and dark fringes is observed on a screen placed at distance D = 1.5 m.',
    scenarioAr:
      'يسقط شعاع ليزر أحادي اللون على شقين ضيقين المسافة بينهما d = 0.25 مم. يتكون نمط تداخل من هدب مضيئة ومظلمة متتالية على حائل يبعد مسافة D = 1.5 م.',
    questionEn:
      'If the laser source is switched from Red light (650 nm) to Violet light (400 nm), what happens to the spacing between consecutive bright fringes (Δy)?',
    questionAr:
      'إذا استُبدل مصدر الليزر من الضوء الأحمر (650 نانومتر) إلى الضوء البنفسجي (400 نانومتر)، ماذا يحدث للمسافة بين كل هدبتين مضيئتين متتاليتين (Δy)؟',
    optionsEn: [
      'Δy increases (fringes spread farther apart across the screen)',
      'Δy decreases (fringes become narrower and packed closer together)',
      'Δy remains unchanged since slit separation d and screen distance D are fixed',
      'The interference fringes completely vanish',
    ],
    optionsAr: [
      'تزداد المسافة Δy وتتباعد الهدب على الحائل',
      'تقل المسافة Δy وتتقارب الهدب وتصبح أضيق',
      'تظل المسافة Δy ثابتة لأن المسافة بين الشقين وبعد الحائل لم يتغيرا',
      'يختفي نمط التداخل تماماً',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      "According to Young's fringe formula: Δy = (λ • D) / d. The fringe spacing Δy is directly proportional to the wavelength (λ). Since violet light has a shorter wavelength than red light (400 nm < 650 nm), Δy must decrease, making the fringes closer together.",
    scientificExplanationAr:
      'طبقاً لقانون ينج للمسافة بين هدبتين متتاليتين من نفس النوع: Δy = (λ • D) / d. تتناسب المسافة Δy طردياً مع الطول الموجي للضوء (λ). وحيث أن الطول الموجي للضوء البنفسجي أقل من الأحمر (400 < 650 نانومتر)، فإن Δy تقل وتتقارب الهدب.',
  },
  {
    id: 'snell_total_internal_reflection',
    titleEn: 'Total Internal Reflection & Critical Angle Condition',
    titleAr: 'شرط الانعكاس الكلي والزاوية الحرجة في الأوساط الشفافة',
    scenarioEn:
      'A light beam travels from an optically denser medium (Crown Glass, n1 = 1.52) towards an optically rarer medium (Air, n2 = 1.00). The angle of incidence θ1 is gradually increased from 0° upwards.',
    scenarioAr:
      'ينتقل شعاع ضوئي من وسط أكبر كثافة ضوئية (زجاج تاج، n1 = 1.52) إلى وسط أقل كثافة ضوئية (الهواء، n2 = 1.00). تزداد زاوية السقوط θ1 تدريجياً بدءاً من الصفر.',
    questionEn:
      'At what threshold does the refracted ray disappear and the light undergo 100% Total Internal Reflection (TIR)?',
    questionAr:
      'متى يختفي الشعاع المنكسر تماماً ويعاني الضوء انعكاساً كلياً بنسبة 100% داخل الوسط الأول؟',
    optionsEn: [
      'When θ1 is less than 30° regardless of refractive indices',
      'When θ1 exceeds the critical angle θc = arcsin(n2 / n1) ≈ 41.1°',
      'Only when light travels from air into glass at grazing incidence (θ1 = 90°)',
      'When the wavelength of the incident light is exactly 500 nm',
    ],
    optionsAr: [
      'عندما تكون زاوية السقوط أقل من 30 درجة بغض النظر عن معاملي الانكسار',
      'عندما تتجاوز زاوية السقوط الزاوية الحرجة θc = arcsin(n2 / n1) ≈ 41.1 درجة',
      'فقط عندما ينتقل الضوء من الهواء إلى الزجاج عند زاوية سقوط 90 درجة',
      'عندما يكون الطول الموجي للضوء الساقط مساوياً لـ 500 نانومتر بالضبط',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Total Internal Reflection requires two mandatory physical conditions: (1) Light must travel from an optically denser medium into a rarer medium (n1 > n2), and (2) The incident angle θ1 must exceed the critical angle: θc = arcsin(n2 / n1). For glass to air: θc = arcsin(1.0 / 1.52) ≈ 41.1°.',
    scientificExplanationAr:
      'يشترط لحدوث الانعكاس الكلي شرطان أساسيان: (1) أن ينتقل الضوء من وسط أكبر كثافة ضوئية إلى وسط أقل كثافة ضوئية (n1 > n2)، و(2) أن تكون زاوية السقوط أكبر من الزاوية الحرجة: θc = arcsin(n2 / n1). وفي حالة الزجاج والهواء: θc = arcsin(1.0 / 1.52) ≈ 41.1 درجة.',
  },
  {
    id: 'thin_lens_2f_conjugate',
    titleEn: 'Convex Thin Lens: Object Placed at Twice the Focal Length (2F)',
    titleAr: 'العدسة المحدبة: وضع الجسم عند ضعف البعد البؤري (2F)',
    scenarioEn:
      'A luminous arrow of height ho = 10 cm is positioned at distance do = 30 cm along the principal axis of a converging convex lens with focal length f = 15 cm (i.e. at the center of curvature 2F).',
    scenarioAr:
      'وُضع سهم مضيء طوله ho = 10 سم على مسافة do = 30 سم على المحور الأصلي لعدسة محدبة مجمعة بعدها البؤري f = 15 سم (أي عند مركز التكور 2F).',
    questionEn:
      'What are the exact position, nature, and magnification of the resulting image?',
    questionAr:
      'ما هي صفات وموضع وتكبير الصورة المتكونة على الحائل بدقة؟',
    optionsEn: [
      'Virtual, erect, enlarged at di = 60 cm (M = +2.0)',
      'Real, inverted, equal in size to the object at di = 30 cm (M = -1.0)',
      'Real, inverted, diminished at di = 15 cm (M = -0.5)',
      'Formed at infinity as a parallel cylinder of light rays',
    ],
    optionsAr: [
      'تقديرية، معتدلة، مكبرة على مسافة di = 60 سم (M = +2.0)',
      'حقيقية، مقلوبة، مساوية للجسم في الحجم على مسافة di = 30 سم (M = -1.0)',
      'حقيقية، مقلوبة، مصغرة على مسافة di = 15 سم (M = -0.5)',
      'تتكون في المالانهاية كحزمة ضوئية متوازية',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'From the Gaussian thin-lens equation: 1/di = 1/f - 1/do = 1/15 - 1/30 = 1/30 ==> di = 30 cm. Since di > 0, the image is real and inverted. Linear magnification M = -di / do = -30 / 30 = -1.0, so the image is equal in height to the object (hi = -10 cm).',
    scientificExplanationAr:
      'من القانون العام للعدسات: 1/di = 1/f - 1/do = 1/15 - 1/30 = 1/30 ==> di = 30 سم. بما أن di موجبة فالصورة حقيقية مقلوبة. والتكبير الخطي M = -di / do = -30 / 30 = -1.0، مما يعني أن الصورة مساوية للجسم تماماً في الطول (hi = -10 سم).',
  },
];

export const OpticsBenchLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const animFrameRef = useRef<number>(0);

  // Define Standardized Virtual Lab Contract
  const labDef: LabDefinition<OpticsParams, OpticsSimState> = {
    id: 'optics-bench-lab',
    subject: 'physics',
    titleEn: 'Virtual Optics Bench & Wave Interference Laboratory',
    titleAr: 'مختبر البصريات الهندسية وتداخل وحيود الأمواج الضوئية',
    subtitleEn:
      'Snell Refraction, Cauchy Dispersion, Gaussian Thin Lens & Young Double-Slit',
    subtitleAr:
      'انكسار سنل، تشتت كوشي، تتبع أشعة العدسات، وتجربة ينج للشق المزدوج',
    chapterRef: 'Chapter 2: Light Waves, Refraction & Optical Instruments',
    objectives: [
      {
        id: 'obj-young-interference',
        textEn: "Determine monochromatic laser wavelength using Young's double slit interference: Δy = λD / d",
        textAr: 'تعيين الطول الموجي للضوء أحادي اللون عملياً باستخدام تجربة الشق المزدوج لتوماس ينج: Δy = λD / d',
      },
      {
        id: 'obj-snell-tir',
        textEn: "Verify Snell's refraction law n₁ sin θ₁ = n₂ sin θ₂ and observe Total Internal Reflection (TIR) at θ₁ > θ_c",
        textAr: 'التحقق عملياً من قانون سنل للانكسار ودراسة ظاهرة الانعكاس الكلي الداخلي عند زوايا سقوط أكبر من الزاوية الحرجة',
      },
      {
        id: 'obj-cauchy-dispersion',
        textEn: "Analyze chromatic dispersion in optical media using Cauchy's empirical equation: n(λ) = A + B / λ²",
        textAr: 'دراسة التشتت اللوني للأطوال الموجية المختلفة في الأوساط البصرية وفق علاقة كوشي التجريبية: n(λ) = A + B / λ²',
      },
      {
        id: 'obj-thin-lens-equation',
        textEn: 'Investigate the Gaussian thin lens equation 1/f = 1/dₒ + 1/dᵢ and verify magnification M = -dᵢ / dₒ',
        textAr: 'دراسة القانون العام للعدسات الرقيقة وتحديد مواضع وصفات وتكبير الصور الحقيقية والتقديرية المتكونة',
      },
    ],
    defaultParams: INITIAL_OPTICS_PARAMS,
    initialState: {
      isTIR: false,
      refractedAngleDeg: 27.7,
      criticalAngleDeg: 41.1,
      imageDistanceCm: 30,
      magnification: -1.0,
      fringeSpacingMm: 3.8,
      photodiodeCurrentMa: 5.0,
    },
    paramSchema: {
      opticsMode: {
        key: 'opticsMode',
        labelEn: 'Optics Mode',
        labelAr: 'نظام التجربة',
        type: 'select',
        defaultValue: 'double_slit',
        options: [
          {
            value: 'refraction',
            labelEn: "Snell's Law & Refraction",
            labelAr: 'انكسار سنل والانعكاس الكلي',
          },
          {
            value: 'thin_lens',
            labelEn: 'Thin Lens Ray Tracing',
            labelAr: 'تتبع أشعة العدسات المحدبة والمقعرة',
          },
          {
            value: 'double_slit',
            labelEn: "Young's Double Slit",
            labelAr: 'تداخل ينج للشق المزدوج',
          },
        ],
      },
      n1: {
        key: 'n1',
        labelEn: 'Medium 1 Refractive Index',
        labelAr: 'معامل انكسار الوسط الأول (n₁)',
        symbolTex: 'n_1',
        type: 'number',
        min: 1.0,
        max: 2.5,
        step: 0.01,
        defaultValue: 1.0,
        precision: 2,
        visibleIf: (p) => p.opticsMode === 'refraction',
      },
      n2: {
        key: 'n2',
        labelEn: 'Medium 2 Refractive Index',
        labelAr: 'معامل انكسار الوسط الثاني (n₂)',
        symbolTex: 'n_2',
        type: 'number',
        min: 1.0,
        max: 2.5,
        step: 0.01,
        defaultValue: 1.52,
        precision: 2,
        visibleIf: (p) => p.opticsMode === 'refraction',
      },
      incidentAngleDeg: {
        key: 'incidentAngleDeg',
        labelEn: 'Angle of Incidence',
        labelAr: 'زاوية السقوط (θ₁)',
        symbolTex: '\\theta_1',
        unit: '°',
        type: 'number',
        min: 0,
        max: 85,
        step: 1,
        defaultValue: 45,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'refraction',
      },
      refractionWavelengthNm: {
        key: 'refractionWavelengthNm',
        labelEn: 'Refraction Beam Wavelength',
        labelAr: 'الطول الموجي لشعاع الانكسار',
        symbolTex: '\\lambda_{\\text{refr}}',
        unit: 'nm',
        type: 'number',
        min: 380,
        max: 750,
        step: 5,
        defaultValue: 550,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'refraction',
      },
      focalLengthCm: {
        key: 'focalLengthCm',
        labelEn: 'Focal Length',
        labelAr: 'البعد البؤري للعدسة (f)',
        symbolTex: 'f',
        unit: 'cm',
        type: 'number',
        min: -30,
        max: 30,
        step: 1,
        defaultValue: 15,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'thin_lens',
      },
      objectDistanceCm: {
        key: 'objectDistanceCm',
        labelEn: 'Object Distance',
        labelAr: 'بعد الجسم عن العدسة (dₒ)',
        symbolTex: 'd_o',
        unit: 'cm',
        type: 'number',
        min: 5,
        max: 60,
        step: 1,
        defaultValue: 30,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'thin_lens',
      },
      objectHeightCm: {
        key: 'objectHeightCm',
        labelEn: 'Object Height',
        labelAr: 'طول الجسم المضيء (hₒ)',
        symbolTex: 'h_o',
        unit: 'cm',
        type: 'number',
        min: 5,
        max: 25,
        step: 1,
        defaultValue: 10,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'thin_lens',
      },
      wavelengthNm: {
        key: 'wavelengthNm',
        labelEn: 'Laser Wavelength',
        labelAr: 'الطول الموجي لليزر (λ)',
        symbolTex: '\\lambda',
        unit: 'nm',
        type: 'number',
        min: 380,
        max: 750,
        step: 1,
        defaultValue: 632.8,
        precision: 1,
        visibleIf: (p) => p.opticsMode === 'double_slit',
      },
      slitSeparationUm: {
        key: 'slitSeparationUm',
        labelEn: 'Slit Separation',
        labelAr: 'المسافة بين الشقين (d)',
        symbolTex: 'd',
        unit: 'µm',
        type: 'number',
        min: 50,
        max: 500,
        step: 10,
        defaultValue: 250,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'double_slit',
      },
      screenDistanceM: {
        key: 'screenDistanceM',
        labelEn: 'Screen Distance',
        labelAr: 'بعد حائل الملاحظة (D)',
        symbolTex: 'D',
        unit: 'm',
        type: 'number',
        min: 0.5,
        max: 3.0,
        step: 0.1,
        defaultValue: 1.5,
        precision: 1,
        visibleIf: (p) => p.opticsMode === 'double_slit',
      },
      slitWidthUm: {
        key: 'slitWidthUm',
        labelEn: 'Individual Slit Width',
        labelAr: 'اتساع الشق الواحد (a)',
        symbolTex: 'a',
        unit: 'µm',
        type: 'number',
        min: 10,
        max: 50,
        step: 5,
        defaultValue: 25,
        precision: 0,
        visibleIf: (p) => p.opticsMode === 'double_slit',
      },
    },
    presets: [
      {
        id: 'young_red_laser',
        nameEn: "Young's He-Ne Red Laser (632.8 nm)",
        nameAr: 'تجربة ينج: ليزر أحادي أحمر (He-Ne)',
        badge: 'λ = 632.8 nm',
        descriptionEn: 'Standard red laser interference with d = 0.25 mm and D = 1.5 m.',
        descriptionAr: 'نمط تداخل الليزر الأحمر القياسي مع شقين d = 0.25 مم وبعد D = 1.5 م.',
        params: {
          opticsMode: 'double_slit',
          wavelengthNm: 632.8,
          slitSeparationUm: 250,
          screenDistanceM: 1.5,
        },
      },
      {
        id: 'young_violet_laser',
        nameEn: "Young's Violet Laser (405 nm)",
        nameAr: 'تجربة ينج: ليزر بنفسجي عالي التردد',
        badge: 'λ = 405 nm',
        descriptionEn: 'Short wavelength violet laser producing narrower fringe spacing.',
        descriptionAr: 'ليزر بنفسجي ذو طول موجي قصير ينتج هدب تداخل متقاربة وأضيق.',
        params: {
          opticsMode: 'double_slit',
          wavelengthNm: 405,
          slitSeparationUm: 250,
          screenDistanceM: 1.5,
        },
      },
      {
        id: 'snell_air_glass',
        nameEn: 'Refraction: Air to Crown Glass',
        nameAr: 'انكسار سنل: من الهواء إلى الزجاج',
        badge: 'n₁ < n₂',
        descriptionEn: 'Light bends towards the normal when entering denser glass.',
        descriptionAr: 'ينكسر الضوء مقترباً من العمود المقام عند الدخول للوسط الأكثف.',
        params: {
          opticsMode: 'refraction',
          n1: 1.0,
          n2: 1.52,
          incidentAngleDeg: 45,
          refractionWavelengthNm: 550,
        },
      },
      {
        id: 'snell_tir',
        nameEn: 'Total Internal Reflection (Glass to Air)',
        nameAr: 'الانعكاس الكلي: من الزجاج إلى الهواء',
        badge: 'θ₁ > θc (41.1°)',
        descriptionEn: 'Light traveling from glass to air at 50° undergoes total internal reflection.',
        descriptionAr: 'سقوط الضوء من الزجاج بزاوية 50° تتجاوز الزاوية الحرجة يعاني انعكاساً كلياً.',
        params: {
          opticsMode: 'refraction',
          n1: 1.52,
          n2: 1.0,
          incidentAngleDeg: 50,
          refractionWavelengthNm: 589,
        },
      },
      {
        id: 'lens_2f_equal',
        nameEn: 'Convex Lens: Real Equal Image at 2F',
        nameAr: 'عدسة محدبة: صورة حقيقية مساوية عند 2F',
        badge: 'dₒ = 2f (30 cm)',
        descriptionEn: 'Object placed at twice the focal length yields equal inverted image at 2F.',
        descriptionAr: 'وضع الجسم عند مركز التكور 2F يعطي صورة حقيقية مقلوبة ومساوية للجسم.',
        params: {
          opticsMode: 'thin_lens',
          focalLengthCm: 15,
          objectDistanceCm: 30,
          objectHeightCm: 10,
        },
      },
      {
        id: 'lens_magnifier',
        nameEn: 'Convex Lens: Magnifying Glass (dₒ < F)',
        nameAr: 'عدسة محدبة: مكبرة للقراءة (dₒ < F)',
        badge: 'Virtual Enlarged',
        descriptionEn: 'Object placed inside focal length yields upright magnified virtual image.',
        descriptionAr: 'وضع الجسم قبل البؤرة يعطي صورة تقديرية معتدلة ومكبرة (المجهر البسيط).',
        params: {
          opticsMode: 'thin_lens',
          focalLengthCm: 15,
          objectDistanceCm: 10,
          objectHeightCm: 8,
        },
      },
    ],
    keyFormulas: [
      {
        id: 'snell_law',
        labelEn: "Snell's Law of Refraction",
        labelAr: 'قانون سنل للانكسار',
        tex: 'n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)',
        descriptionEn: 'Relates angles of incidence and refraction between two media.',
        descriptionAr: 'يربط بين زاوية السقوط وزاوية الانكسار بين وسطين شفافين.',
      },
      {
        id: 'critical_angle',
        labelEn: 'Critical Angle for Total Reflection',
        labelAr: 'الزاوية الحرجة للانعكاس الكلي',
        tex: '\\sin(\\theta_c) = \\frac{n_2}{n_1} \\quad (n_1 > n_2)',
        descriptionEn: 'Incident angle in denser medium that yields 90° refraction.',
        descriptionAr: 'زاوية السقوط في الوسط الأكثف التي تقابلها زاوية انكسار 90° في الوسط الأقل.',
      },
      {
        id: 'thin_lens_eq',
        labelEn: 'Gaussian Thin Lens Equation',
        labelAr: 'القانون العام للعدسات والمرايا',
        tex: '\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad M = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}',
        descriptionEn: 'Relates focal length, object distance, and image distance.',
        descriptionAr: 'يربط البعد البؤري ببعد الجسم وبعد الصورة وقانون التكبير الخطي.',
      },
      {
        id: 'young_fringe',
        labelEn: "Young's Double-Slit Fringe Spacing",
        labelAr: 'قانون ينج للمسافة بين هدب التداخل',
        tex: '\\Delta y = \\frac{\\lambda \\cdot D}{d}',
        descriptionEn: 'Distance between consecutive bright fringes on observation screen.',
        descriptionAr: 'المسافة الفاصلة بين مركزي أي هدبتين متتاليتين من نفس النوع.',
      },
    ],
    poePrompts: OPTICS_POE_PROMPTS,
    supportedInstruments: ['spectrometer', 'multimeter', 'oscilloscope', 'scratchpad'],
    notebookConfig: {
      xLabelEn: "Screen Distance (D) / Angle sin(θ₁)",
      xLabelAr: 'بعد الحائل (D) / جيب زاوية السقوط sin(θ₁)',
      xUnit: 'm / rad',
      yLabelEn: 'Fringe Spacing (Δy) / Angle sin(θ₂)',
      yLabelAr: 'المسافة بين الهدب (Δy) / جيب زاوية الانكسار sin(θ₂)',
      yUnit: 'mm / rad',
      recommendedPointsCount: 5,
    },
  };

  const lab = useVirtualLab({
    definition: labDef,
  });

  const { params } = lab;

  // Physical Simulation State (Memoized)
  const state: OpticsSimState = React.useMemo(() => {
    // 1. Refraction Calculations
    const effN2 = getCauchyRefractiveIndex(params.refractionWavelengthNm, params.n2);
    const incRad = (params.incidentAngleDeg * Math.PI) / 180;
    const snell = calculateSnellsLaw(incRad, params.n1, effN2);
    const isTIR = snell.isTIR;
    const refrDeg = (snell.theta2Rad * 180) / Math.PI;
    const critAngleRad = params.n1 > effN2 ? Math.asin(effN2 / params.n1) : 0;
    const critAngleDeg = (critAngleRad * 180) / Math.PI;

    // 2. Lens Calculations
    const lens = calculateThinLens(
      params.focalLengthCm,
      params.objectDistanceCm,
      params.objectHeightCm
    );

    // 3. Young Double Slit Calculations
    const lambdaM = params.wavelengthNm * 1e-9;
    const slitDistM = params.slitSeparationUm * 1e-6;
    const screenDistM = params.screenDistanceM;
    const deltaYMeters = (lambdaM * screenDistM) / slitDistM;
    const deltaYMm = deltaYMeters * 1e3;

    // Sensor photodiode current
    const photodiodeMa = isTIR && params.opticsMode === 'refraction' ? 0.0 : 4.85;

    return {
      isTIR,
      refractedAngleDeg: refrDeg,
      criticalAngleDeg: critAngleDeg,
      imageDistanceCm: isFinite(lens.imageDistance) ? lens.imageDistance : 999,
      magnification: isFinite(lens.magnification) ? lens.magnification : 0,
      fringeSpacingMm: deltaYMm,
      photodiodeCurrentMa: photodiodeMa,
    };
  }, [params]);

  // Multimeter reading
  const dmmReading: DMMReading = {
    voltageDC:
      params.opticsMode === 'refraction'
        ? (state.isTIR ? 0.0 : 4.81)
        : params.opticsMode === 'thin_lens'
        ? Math.min(10.0, 5.0 / ((Math.abs(state.magnification) || 1.0) * (Math.abs(state.magnification) || 1.0)))
        : 5.0,
    voltageAC: 0.0,
    currentDC: params.opticsMode === 'double_slit' ? state.photodiodeCurrentMa / 1000 : 0.001,
    resistance: 1000,
    continuityBeep: false,
  };

  // Dual Trace Oscilloscope Waveforms
  const oscCh1: WaveformSignal = {
    amplitude: params.opticsMode === 'refraction' ? 2.5 : params.opticsMode === 'thin_lens' ? 3.0 : 4.0,
    frequency: params.opticsMode === 'double_slit' ? 2500 : 1000,
    phaseDeg: 0,
    type: 'sine',
  };

  const oscCh2: WaveformSignal = {
    amplitude: params.opticsMode === 'refraction' ? (state.isTIR ? 0.0 : 2.5 * (params.n1 / params.n2)) : params.opticsMode === 'thin_lens' ? 2.0 : 3.5,
    frequency: params.opticsMode === 'double_slit' ? 1250 : 1000,
    phaseDeg: 90,
    type: 'sine',
  };

  // Telemetry metrics
  const telemetryMetrics: LabTelemetryMetric[] = React.useMemo(() => {
    if (params.opticsMode === 'refraction') {
      return [
        {
          id: 'theta_1',
          labelEn: 'Incident Angle',
          labelAr: 'زاوية السقوط (θ₁)',
          symbolTex: '\\theta_1',
          value: params.incidentAngleDeg,
          unit: '°',
          status: 'normal',
        },
        {
          id: 'theta_2',
          labelEn: 'Refracted Angle',
          labelAr: 'زاوية الانكسار (θ₂)',
          symbolTex: '\\theta_2',
          value: state.isTIR ? 'TIR (انعكاس كلي)' : `${state.refractedAngleDeg.toFixed(1)}°`,
          status: state.isTIR ? 'alert' : 'optimal',
        },
        {
          id: 'theta_c',
          labelEn: 'Critical Angle',
          labelAr: 'الزاوية الحرجة (θc)',
          symbolTex: '\\theta_c',
          value: state.criticalAngleDeg > 0 ? `${state.criticalAngleDeg.toFixed(1)}°` : 'N/A (n₁ < n₂)',
          status: 'normal',
        },
        {
          id: 'tir_status',
          labelEn: 'Total Internal Reflection',
          labelAr: 'حالة الانعكاس الكلي',
          value: state.isTIR ? (isArabic ? 'نشط (100% انعكاس)' : 'ACTIVE (100% TIR)') : (isArabic ? 'انكسار اعتيادي' : 'Refraction Active'),
          status: state.isTIR ? 'alert' : 'optimal',
        },
      ];
    } else if (params.opticsMode === 'thin_lens') {
      const isReal = state.imageDistanceCm > 0;
      return [
        {
          id: 'do',
          labelEn: 'Object Distance',
          labelAr: 'بعد الجسم (dₒ)',
          symbolTex: 'd_o',
          value: params.objectDistanceCm,
          unit: 'cm',
          status: 'normal',
        },
        {
          id: 'di',
          labelEn: 'Image Distance',
          labelAr: 'بعد الصورة (dᵢ)',
          symbolTex: 'd_i',
          value: Math.abs(state.imageDistanceCm) > 500 ? '∞ (Infinity)' : `${state.imageDistanceCm.toFixed(1)} cm`,
          status: isReal ? 'optimal' : 'warning',
        },
        {
          id: 'focal',
          labelEn: 'Focal Length',
          labelAr: 'البعد البؤري (f)',
          symbolTex: 'f',
          value: params.focalLengthCm,
          unit: 'cm',
          status: 'normal',
        },
        {
          id: 'magnification',
          labelEn: 'Magnification',
          labelAr: 'التكبير الخطي (M)',
          symbolTex: 'M',
          value: `${state.magnification.toFixed(2)}x`,
          status: Math.abs(state.magnification) === 1.0 ? 'optimal' : 'normal',
        },
        {
          id: 'image_nature',
          labelEn: 'Image Nature',
          labelAr: 'طبيعة الصورة',
          value: isReal
            ? (isArabic ? 'حقيقية، مقلوبة' : 'Real, Inverted')
            : (isArabic ? 'تقديرية، معتدلة' : 'Virtual, Upright'),
          status: isReal ? 'optimal' : 'warning',
        },
      ];
    } else {
      // Mode 3: Young Double Slit
      return [
        {
          id: 'wavelength',
          labelEn: 'Laser Wavelength',
          labelAr: 'الطول الموجي (λ)',
          symbolTex: '\\lambda',
          value: params.wavelengthNm,
          unit: 'nm',
          status: 'normal',
        },
        {
          id: 'slit_d',
          labelEn: 'Slit Separation',
          labelAr: 'المسافة بين الشقين (d)',
          symbolTex: 'd',
          value: params.slitSeparationUm,
          unit: 'µm',
          status: 'normal',
        },
        {
          id: 'screen_d',
          labelEn: 'Screen Distance',
          labelAr: 'بعد الحائل (D)',
          symbolTex: 'D',
          value: params.screenDistanceM,
          unit: 'm',
          status: 'normal',
        },
        {
          id: 'delta_y',
          labelEn: 'Fringe Spacing (Δy)',
          labelAr: 'المسافة بين الهدب (Δy)',
          symbolTex: '\\Delta y',
          value: `${state.fringeSpacingMm.toFixed(2)} mm`,
          status: 'optimal',
        },
      ];
    }
  }, [params, state, isArabic]);

  // High-DPI Canvas Rendering Engine (Continuous 60 FPS Realistic Rendering)
  const renderSimulation = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    _vState: LabViewportState,
    _dpr: number = 1,
    time: number = 0,
    frame: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    animFrameRef.current = frame || (animFrameRef.current + 1);

    // Background: Optical Bench with subtle ambient vignette
    const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) * 0.75);
    if (isContrast) {
      bgGrad.addColorStop(0, '#000000');
      bgGrad.addColorStop(1, '#000000');
    } else if (isLight) {
      bgGrad.addColorStop(0, '#f8fafc');
      bgGrad.addColorStop(1, '#e2e8f0');
    } else {
      bgGrad.addColorStop(0, '#0a0f1d');
      bgGrad.addColorStop(1, '#020409');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    if (params.opticsMode === 'refraction') {
      // --- MODE A: Snell's Law & Refraction / TIR (Realistic Optical Block) ---
      const cy = height / 2;
      const cx = width / 2;

      // Medium 1 (Top: e.g. Air n1)
      const topGrad = ctx.createLinearGradient(0, 0, 0, cy);
      if (isLight) {
        topGrad.addColorStop(0, 'rgba(241, 245, 249, 0.95)');
        topGrad.addColorStop(1, 'rgba(226, 232, 240, 0.8)');
      } else {
        topGrad.addColorStop(0, 'rgba(10, 20, 42, 0.95)');
        topGrad.addColorStop(1, 'rgba(15, 29, 61, 0.7)');
      }
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, cy);

      // Medium 2 (Bottom: Realistic Borosilicate Glass Slab n2)
      const slabTop = cy;
      const slabH = height - cy - 25;
      const glassGrad = ctx.createLinearGradient(0, slabTop, 0, slabTop + slabH);
      glassGrad.addColorStop(0, 'rgba(14, 116, 144, 0.35)');
      glassGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.75)');
      glassGrad.addColorStop(1, 'rgba(6, 182, 212, 0.25)');
      ctx.fillStyle = glassGrad;
      ctx.fillRect(40, slabTop, width - 80, slabH);

      // Glass bevel borders & polished edges
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, slabTop, width - 80, slabH);

      // Glass internal caustic reflection highlight line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(45, slabTop + 2);
      ctx.lineTo(width - 45, slabTop + 2);
      ctx.stroke();

      // Optical Bench Interface Boundary Line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();

      // Normal Line (dashed with precision glow)
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cx, 30);
      ctx.lineTo(cx, height - 35);
      ctx.stroke();
      ctx.setLineDash([]);

      const incRad = (params.incidentAngleDeg * Math.PI) / 180;
      const beamColor = wavelengthToRGB(params.refractionWavelengthNm);
      const rayLen = Math.min(width, height) * 0.44;

      // Incident ray geometry
      const incStartX = cx - rayLen * Math.sin(incRad);
      const incStartY = cy - rayLen * Math.cos(incRad);

      // Collimated Laser Housing Emitter at (incStartX, incStartY)
      ctx.save();
      ctx.translate(incStartX, incStartY);
      const emitterAngle = Math.atan2(cy - incStartY, cx - incStartX);
      ctx.rotate(emitterAngle);
      drawMetallicCylinder(ctx, -28, -8, 28, 16, 'steel');
      // Laser aperture ring & glow
      ctx.fillStyle = beamColor;
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.ellipse(0, 0, 3, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Volumetric Incident Laser Beam
      drawVolumetricBeam(ctx, incStartX, incStartY, cx, cy, beamColor, 3.5, 14);

      // 60 FPS Traveling Photon Wavepackets along incident beam
      const numPackets = 4;
      for (let i = 0; i < numPackets; i++) {
        const prog = ((t * 1.5 + i / numPackets) % 1);
        const px = incStartX + (cx - incStartX) * prog;
        const py = incStartY + (cy - incStartY) * prog;
        drawGlowingParticle(ctx, px, py, 2.8, beamColor, 10);
      }

      // Incident Spot at Interface
      ctx.save();
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 16;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Reflected ray (Law of Reflection: angle = incidentAngle)
      const refEndX = cx + rayLen * Math.sin(incRad);
      const refEndY = cy - rayLen * Math.cos(incRad);
      const refBeamWidth = state.isTIR ? 3.5 : 1.8;
      const refGlow = state.isTIR ? 16 : 8;
      drawVolumetricBeam(ctx, cx, cy, refEndX, refEndY, beamColor, refBeamWidth, refGlow);

      if (state.isTIR) {
        for (let i = 0; i < numPackets; i++) {
          const prog = ((t * 1.5 + i / numPackets) % 1);
          const px = cx + (refEndX - cx) * prog;
          const py = cy + (refEndY - cy) * prog;
          drawGlowingParticle(ctx, px, py, 2.8, beamColor, 10);
        }
      }

      // Refracted ray (if not TIR)
      if (!state.isTIR) {
        const refrRad = (state.refractedAngleDeg * Math.PI) / 180;
        const refrLen = Math.min(rayLen, slabH / Math.cos(refrRad));
        const refrEndX = cx + refrLen * Math.sin(refrRad);
        const refrEndY = cy + refrLen * Math.cos(refrRad);

        drawVolumetricBeam(ctx, cx, cy, refrEndX, refrEndY, beamColor, 3.2, 12);

        // Wave packets moving at slower speed inside denser medium (v = c / n2)
        const nRel = params.n2 / params.n1;
        for (let i = 0; i < numPackets; i++) {
          const prog = ((t * (1.5 / nRel) + i / numPackets) % 1);
          const px = cx + (refrEndX - cx) * prog;
          const py = cy + (refrEndY - cy) * prog;
          drawGlowingParticle(ctx, px, py, 2.5, beamColor, 8);
        }
      }

      // Labels on media
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText(
        isArabic ? `الوسط ١ (n₁ = ${params.n1.toFixed(2)})` : `Medium 1: Incident (n₁ = ${params.n1.toFixed(2)})`,
        45,
        35
      );
      ctx.fillText(
        isArabic
          ? `الوسط ٢ (قالب الزجاج n₂ = ${params.n2.toFixed(2)})`
          : `Medium 2: Optical Glass (n₂ = ${params.n2.toFixed(2)})`,
        45,
        cy + 35
      );

      // Angle arc indicators with glowing readout
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 38, -Math.PI / 2 - incRad, -Math.PI / 2);
      ctx.stroke();

      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`θ₁ = ${params.incidentAngleDeg}°`, cx - 75, cy - 42);

      if (!state.isTIR) {
        const refrRad = (state.refractedAngleDeg * Math.PI) / 180;
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(cx, cy, 38, Math.PI / 2 - refrRad, Math.PI / 2);
        ctx.stroke();
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`θ₂ = ${state.refractedAngleDeg.toFixed(1)}°`, cx + 25, cy + 52);
      } else {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.fillText(
          isArabic
            ? '⚡ انعكاس كلي تام (TIR: θ₁ > θc)'
            : '⚡ TOTAL INTERNAL REFLECTION (TIR: θ₁ > θc)',
          cx + 25,
          cy - 30
        );
      }
    } else if (params.opticsMode === 'thin_lens') {
      // --- MODE B: Thin Lens Optical Bench with Realistic Glass Lens & Flame ---
      const cy = height / 2 - 20;
      const cx = width / 2;
      const railY = height - 55;

      // 1. Heavy Metallic Optical Bench Rail
      drawMetallicCylinder(ctx, 25, railY, width - 50, 22, 'steel');

      // Rail Metric Scale Marks & Numbers
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '8px monospace';
      ctx.textAlign = 'center';
      for (let markX = 35; markX < width - 35; markX += 20) {
        ctx.beginPath();
        ctx.moveTo(markX, railY);
        ctx.lineTo(markX, railY + 6);
        ctx.stroke();
        if ((markX - 35) % 80 === 0) {
          const cmVal = Math.round((markX - cx) / (Math.min(width, 900) / 120));
          ctx.fillText(`${cmVal}cm`, markX, railY + 16);
        }
      }

      // Principal axis line
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(25, cy);
      ctx.lineTo(width - 25, cy);
      ctx.stroke();

      // Optical Center C
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.fillText('C', cx - 4, cy + 18);

      // 2. Realistic 3D Glass Lens Mount & Glass Body
      const isConvex = params.focalLengthCm > 0;
      const lensH = height - 150;
      const lensTop = cy - lensH / 2;

      // Metallic mounting post to rail
      drawMetallicCylinder(ctx, cx - 4, cy + lensH / 2, 8, railY - (cy + lensH / 2), 'steel');

      // Realistic 3D Glass Lens Profile
      ctx.save();
      const lensHalfW = isConvex ? 18 : 8;
      ctx.beginPath();
      if (isConvex) {
        // Biconvex Lens (curved outward)
        ctx.moveTo(cx, lensTop);
        ctx.quadraticCurveTo(cx + lensHalfW, cy, cx, lensTop + lensH);
        ctx.quadraticCurveTo(cx - lensHalfW, cy, cx, lensTop);
      } else {
        // Biconcave Lens (curved inward)
        ctx.moveTo(cx - 12, lensTop);
        ctx.lineTo(cx + 12, lensTop);
        ctx.quadraticCurveTo(cx + 3, cy, cx + 12, lensTop + lensH);
        ctx.lineTo(cx - 12, lensTop + lensH);
        ctx.quadraticCurveTo(cx - 3, cy, cx - 12, lensTop);
      }
      ctx.closePath();

      // Translucent cyan glass gradient with specular reflection highlight
      const glassGrad = ctx.createLinearGradient(cx - 15, cy, cx + 15, cy);
      glassGrad.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      glassGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.45)');
      glassGrad.addColorStop(1, 'rgba(56, 189, 248, 0.35)');
      ctx.fillStyle = glassGrad;
      ctx.fill();

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Scaling: pixels per centimeter
      const pxPerCm = Math.min(width, 900) / 120;
      const fPx = Math.abs(params.focalLengthCm) * pxPerCm;

      // Draw Focal Points F and 2F
      const drawPoint = (x: number, label: string) => {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(x, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#cbd5e1';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, cy + 16);
      };

      drawPoint(cx - fPx, 'F₁');
      drawPoint(cx + fPx, 'F₂');
      drawPoint(cx - 2 * fPx, '2F₁');
      drawPoint(cx + 2 * fPx, '2F₂');

      // 3. Luminous Laboratory Candle (Object) on Bench Slider
      const objXPx = cx - params.objectDistanceCm * pxPerCm;
      const objHPx = params.objectHeightCm * pxPerCm;
      const objYPx = cy - objHPx;

      // Candle slider mount on rail
      drawMetallicCylinder(ctx, objXPx - 14, railY - 12, 28, 12, 'steel');
      // Candle white wax body
      const candleBaseY = cy;
      const waxH = Math.max(15, objHPx * 0.4);
      const waxW = 10;
      const waxGrad = ctx.createLinearGradient(objXPx - waxW / 2, 0, objXPx + waxW / 2, 0);
      waxGrad.addColorStop(0, '#e2e8f0');
      waxGrad.addColorStop(0.5, '#ffffff');
      waxGrad.addColorStop(1, '#cbd5e1');
      ctx.fillStyle = waxGrad;
      ctx.fillRect(objXPx - waxW / 2, candleBaseY - waxH, waxW, waxH);
      // Wick
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(objXPx, candleBaseY - waxH);
      ctx.lineTo(objXPx, candleBaseY - waxH - 4);
      ctx.stroke();

      // Procedural Flickering Laboratory Candle Flame
      const flameH = Math.max(18, objHPx * 0.6);
      drawProceduralFlame(ctx, objXPx, candleBaseY - waxH - 4, flameH, t, 'yellow');

      // Arrow indicator for quantitative height measurement
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(objXPx, cy);
      ctx.lineTo(objXPx, objYPx);
      ctx.stroke();

      // 4. Image Formation & Ray Tracing
      const di = state.imageDistanceCm;
      const hi = params.objectHeightCm * state.magnification;

      if (Math.abs(di) < 200 && isFinite(di)) {
        const imgXPx = cx + di * pxPerCm;
        const imgHPx = hi * pxPerCm;
        const imgYPx = cy - imgHPx;
        const isReal = di > 0;

        // Parallel Ray (Object Flame Tip -> Lens -> F2)
        drawVolumetricBeam(ctx, objXPx, objYPx, cx, objYPx, '#facc15', 1.8, 8);
        if (isConvex) {
          drawVolumetricBeam(ctx, cx, objYPx, imgXPx, imgYPx, '#facc15', 1.8, 8);
        } else {
          drawVolumetricBeam(ctx, cx, objYPx, width - 25, cy + (objYPx - cy) * 0.5, '#facc15', 1.8, 8);
        }

        // Central Ray (Object Flame Tip -> Optical Center C -> Image)
        drawVolumetricBeam(ctx, objXPx, objYPx, cx, cy, '#f97316', 1.8, 8);
        drawVolumetricBeam(ctx, cx, cy, imgXPx, imgYPx, '#f97316', 1.8, 8);

        // Virtual extensions if virtual image (dashed lines)
        if (!isReal) {
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.7)';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(cx, objYPx);
          ctx.lineTo(imgXPx, imgYPx);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Real Image Projection Screen on Bench Rail
        if (isReal) {
          drawMetallicCylinder(ctx, imgXPx - 12, railY - 12, 24, 12, 'steel');
          // Frosted screen board
          ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(imgXPx - 2, cy - Math.abs(imgHPx) - 15, 4, Math.abs(imgHPx) + 25, 2);
          ctx.fill();
          ctx.stroke();

          // Inverted formed candle flame projected on screen
          ctx.save();
          ctx.translate(imgXPx, cy);
          ctx.scale(1, -1);
          drawProceduralFlame(ctx, 0, 0, Math.abs(imgHPx) * 0.7, t + 1.5, 'yellow');
          ctx.restore();
        } else {
          // Virtual shimmering phantom flame
          ctx.save();
          ctx.globalAlpha = 0.65;
          drawProceduralFlame(ctx, imgXPx, cy, Math.abs(imgHPx) * 0.7, t + 2.0, 'yellow');
          ctx.restore();
        }

        // Image measurement arrow
        ctx.strokeStyle = isReal ? '#ec4899' : '#a855f7';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(imgXPx, cy);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();
      }

      ctx.textAlign = 'left';
    } else {
      // --- MODE C: Young's Double-Slit Wave Interference (Continuous 60 FPS) ---
      const cy = height / 2;
      const slitX = 145;
      const screenX = width - 120;
      const laserColor = wavelengthToRGB(params.wavelengthNm);

      // 1. Photorealistic He-Ne Coherent Laser Tube on Left
      const laserLeft = 15;
      const laserWidth = slitX - 45;
      const laserH = 34;
      const laserTop = cy - laserH / 2;

      // Laser housing
      drawMetallicCylinder(ctx, laserLeft, laserTop, laserWidth, laserH, 'steel');
      // Internal gas discharge bore glow
      ctx.fillStyle = laserColor;
      ctx.shadowColor = laserColor;
      ctx.shadowBlur = 14;
      ctx.fillRect(laserLeft + 8, cy - 2, laserWidth - 12, 4);

      // Collimator lens aperture
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(laserLeft + laserWidth - 4, cy - 6, 4, 12);
      ctx.shadowBlur = 0;

      // 2. Slit Plate Barrier
      drawMetallicCylinder(ctx, slitX - 6, 25, 12, height - 50, 'steel');

      const dPixels = Math.min(45, (params.slitSeparationUm / 500) * 45);
      const slit1Y = cy - dPixels / 2;
      const slit2Y = cy + dPixels / 2;

      // Aperture cutouts
      ctx.clearRect(slitX - 7, slit1Y - 2.5, 14, 5);
      ctx.clearRect(slitX - 7, slit2Y - 2.5, 14, 5);

      // Slit illuminated edges
      ctx.fillStyle = laserColor;
      ctx.shadowColor = laserColor;
      ctx.shadowBlur = 8;
      ctx.fillRect(slitX - 2, slit1Y - 2, 4, 4);
      ctx.fillRect(slitX - 2, slit2Y - 2, 4, 4);
      ctx.shadowBlur = 0;

      // 3. Continuous 60 FPS Planar Wavefronts (Laser to Slits)
      ctx.strokeStyle = laserColor;
      ctx.lineWidth = 2;
      const wavePhase = (t * 50) % 18;
      for (let x = laserLeft + laserWidth + wavePhase; x < slitX; x += 18) {
        ctx.save();
        ctx.shadowColor = laserColor;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(x, cy - 50);
        ctx.lineTo(x, cy + 50);
        ctx.stroke();
        ctx.restore();
      }

      // 4. Circular Wave Interference Ripples from Slit 1 and Slit 2
      ctx.lineWidth = 1.3;
      const maxRadius = screenX - slitX;
      for (let r = wavePhase; r < maxRadius; r += 18) {
        if (r < 8) continue;
        const waveAlpha = Math.max(0.08, 1 - r / maxRadius);
        ctx.strokeStyle = laserColor;
        ctx.globalAlpha = waveAlpha;

        ctx.beginPath();
        ctx.arc(slitX, slit1Y, r, -Math.PI / 3.2, Math.PI / 3.2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(slitX, slit2Y, r, -Math.PI / 3.2, Math.PI / 3.2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // 5. Observation Screen (Phosphor Screen on Right)
      ctx.fillStyle = '#060a12';
      ctx.fillRect(screenX, 25, 85, height - 50);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.strokeRect(screenX, 25, 85, height - 50);

      // High-resolution Interference Fringes on Screen Wall
      const pxPerMm = 38; // Screen magnification scale
      const lambdaM = params.wavelengthNm * 1e-9;
      const dM = params.slitSeparationUm * 1e-6;
      const DM = params.screenDistanceM;

      for (let py = 26; py < height - 26; py++) {
        const yMm = (py - cy) / pxPerMm;
        const yM = yMm * 1e-3;
        // Young Intensity Formula: I = I0 * cos^2(pi * y * d / (lambda * D))
        const phase = (Math.PI * yM * dM) / (lambdaM * DM);
        const intensity = Math.pow(Math.cos(phase), 2);

        ctx.fillStyle = laserColor;
        ctx.globalAlpha = intensity;
        ctx.fillRect(screenX + 2, py, 81, 1);
      }
      ctx.globalAlpha = 1.0;

      // Central Fringe Guide Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(slitX, cy);
      ctx.lineTo(screenX, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Photodiode Optical Sensor Cursor on Screen
      drawMetallicCylinder(ctx, screenX + 35, cy - 8, 16, 16, 'steel');
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(screenX + 43, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <VirtualLabShell
      definition={labDef}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetryMetrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscCh1}
      oscilloscopeCh2={oscCh2}
      currentXValue={
        params.opticsMode === 'double_slit'
          ? params.slitSeparationUm
          : params.opticsMode === 'refraction'
          ? params.incidentAngleDeg
          : params.objectDistanceCm
      }
      currentYValue={
        params.opticsMode === 'double_slit'
          ? state.fringeSpacingMm
          : params.opticsMode === 'refraction'
          ? state.refractedAngleDeg
          : state.imageDistanceCm
      }
      onResetSimulation={() => {
        lab.resetParams();
      }}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Mode Selector Control Card */}
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <label className="text-[11px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" />
              <span>{isArabic ? 'النظام التجريبي البصري' : 'Active Physical Optical Bench'}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => lab.updateParam('opticsMode', 'double_slit')}
                className={`min-h-[44px] py-2.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.opticsMode === 'double_slit'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الشق المزدوج' : "Young's Slit"}</span>
              </button>

              <button
                type="button"
                onClick={() => lab.updateParam('opticsMode', 'refraction')}
                className={`min-h-[44px] py-2.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.opticsMode === 'refraction'
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{isArabic ? 'انكسار سنل' : 'Snell Refraction'}</span>
              </button>

              <button
                type="button"
                onClick={() => lab.updateParam('opticsMode', 'thin_lens')}
                className={`min-h-[44px] py-2.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.opticsMode === 'thin_lens'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isArabic ? 'العدسات الرقيقة' : 'Thin Lens'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="optics-bench-viewport"
        lang={lang ?? 'ar'}
        theme={theme}
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        animated={true}
        onRender={renderSimulation}
      >
        {/* Real-Time Live Status Watermark */}
        <div className={`absolute top-3 right-3 backdrop-blur-md px-3 py-1 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1.5 pointer-events-none select-none ${
          isLight
            ? 'bg-white/80 border-slate-300 text-cyan-800 shadow-xs'
            : 'bg-black/60 border-white/10 text-cyan-300'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>
            {params.opticsMode === 'double_slit'
              ? `Δy = ${state.fringeSpacingMm.toFixed(2)} mm`
              : params.opticsMode === 'refraction'
              ? state.isTIR
                ? 'TIR ACTIVE'
                : `θ₂ = ${state.refractedAngleDeg.toFixed(1)}°`
              : `dᵢ = ${state.imageDistanceCm.toFixed(1)} cm (M = ${state.magnification.toFixed(2)})`}
          </span>
        </div>
      </CanvasSimulationViewport>
    </VirtualLabShell>
  );
};
export default OpticsBenchLab;
