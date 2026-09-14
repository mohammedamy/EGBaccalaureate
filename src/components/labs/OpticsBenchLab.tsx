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
    supportedInstruments: ['multimeter', 'oscilloscope', 'scratchpad'],
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

  // High-DPI Canvas Rendering Engine (60–120 FPS)
  const renderSimulation = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    _vState: LabViewportState
  ) => {
    animFrameRef.current += 1;

    // Background: Dark Optical Bench
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, width, height);

    if (params.opticsMode === 'refraction') {
      // --- MODE A: Snell's Law & Refraction / TIR ---
      const cy = height / 2;
      const cx = width / 2;

      // Medium 1 (Top)
      ctx.fillStyle = '#0a1329';
      ctx.fillRect(0, 0, width, cy);

      // Medium 2 (Bottom)
      ctx.fillStyle = '#0f274a';
      ctx.fillRect(0, cy, width, height - cy);

      // Interface boundary
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();

      // Normal line (dashed)
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 5]);
      ctx.beginPath();
      ctx.moveTo(cx, 25);
      ctx.lineTo(cx, height - 25);
      ctx.stroke();
      ctx.setLineDash([]);

      const incRad = (params.incidentAngleDeg * Math.PI) / 180;
      const beamColor = wavelengthToRGB(params.refractionWavelengthNm);
      const rayLen = Math.min(width, height) * 0.44;

      // Incident ray (from top-left towards center)
      const incStartX = cx - rayLen * Math.sin(incRad);
      const incStartY = cy - rayLen * Math.cos(incRad);

      ctx.strokeStyle = beamColor;
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(incStartX, incStartY);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      // Arrow on incident ray
      const midIncX = (incStartX + cx) / 2;
      const midIncY = (incStartY + cy) / 2;
      ctx.fillStyle = beamColor;
      ctx.beginPath();
      ctx.arc(midIncX, midIncY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Reflected ray (Law of Reflection: angle = incidentAngle)
      const refEndX = cx + rayLen * Math.sin(incRad);
      const refEndY = cy - rayLen * Math.cos(incRad);
      ctx.strokeStyle = state.isTIR ? beamColor : 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = state.isTIR ? 3.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(refEndX, refEndY);
      ctx.stroke();

      // Refracted ray (if not TIR)
      if (!state.isTIR) {
        const refrRad = (state.refractedAngleDeg * Math.PI) / 180;
        const refrEndX = cx + rayLen * Math.sin(refrRad);
        const refrEndY = cy + rayLen * Math.cos(refrRad);

        ctx.strokeStyle = beamColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(refrEndX, refrEndY);
        ctx.stroke();

        // Arrow on refracted ray
        const midRefrX = (cx + refrEndX) / 2;
        const midRefrY = (cy + refrEndY) / 2;
        ctx.fillStyle = beamColor;
        ctx.beginPath();
        ctx.arc(midRefrX, midRefrY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      // Labels on media
      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText(
        isArabic ? `الوسط 1 (n₁ = ${params.n1.toFixed(2)})` : `Medium 1 (n₁ = ${params.n1.toFixed(2)})`,
        25,
        35
      );
      ctx.fillText(
        isArabic
          ? `الوسط 2 (n₂ = ${params.n2.toFixed(2)})`
          : `Medium 2 (n₂ = ${params.n2.toFixed(2)})`,
        25,
        cy + 35
      );

      // Angle arc indicators
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 35, -Math.PI / 2 - incRad, -Math.PI / 2);
      ctx.stroke();

      ctx.fillStyle = '#facc15';
      ctx.font = '11px monospace';
      ctx.fillText(`θ₁=${params.incidentAngleDeg}°`, cx - 65, cy - 40);

      if (!state.isTIR) {
        const refrRad = (state.refractedAngleDeg * Math.PI) / 180;
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(cx, cy, 35, Math.PI / 2 - refrRad, Math.PI / 2);
        ctx.stroke();
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`θ₂=${state.refractedAngleDeg.toFixed(1)}°`, cx + 25, cy + 50);
      } else {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'black 14px Inter, sans-serif';
        ctx.fillText(
          isArabic
            ? '⚡ انعكاس كلي تام (TIR: θ₁ > θc)'
            : '⚡ TOTAL INTERNAL REFLECTION (TIR: θ₁ > θc)',
          cx + 20,
          cy - 30
        );
      }
    } else if (params.opticsMode === 'thin_lens') {
      // --- MODE B: Thin Lens Optical Bench ---
      const cy = height / 2;
      const cx = width / 2;

      // Principal axis
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(25, cy);
      ctx.lineTo(width - 25, cy);
      ctx.stroke();

      // Optical Center C
      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('C', cx - 4, cy + 18);

      // Lens vertical body
      const isConvex = params.focalLengthCm > 0;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(cx, 40);
      ctx.lineTo(cx, height - 40);
      ctx.stroke();

      // Lens arrowheads (Outward arrows for convex, inverted inward for concave)
      ctx.fillStyle = '#38bdf8';
      if (isConvex) {
        // Top arrowhead pointing up
        ctx.beginPath();
        ctx.moveTo(cx, 28);
        ctx.lineTo(cx - 9, 44);
        ctx.lineTo(cx + 9, 44);
        ctx.closePath();
        ctx.fill();
        // Bottom arrowhead pointing down
        ctx.beginPath();
        ctx.moveTo(cx, height - 28);
        ctx.lineTo(cx - 9, height - 44);
        ctx.lineTo(cx + 9, height - 44);
        ctx.closePath();
        ctx.fill();
      } else {
        // Concave inward arrows
        ctx.beginPath();
        ctx.moveTo(cx - 9, 28);
        ctx.lineTo(cx, 44);
        ctx.lineTo(cx + 9, 28);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(cx - 9, height - 28);
        ctx.lineTo(cx, height - 44);
        ctx.lineTo(cx + 9, height - 28);
        ctx.closePath();
        ctx.fill();
      }

      // Scaling: pixels per centimeter
      const pxPerCm = Math.min(width, 900) / 120;
      const fPx = Math.abs(params.focalLengthCm) * pxPerCm;

      // Draw Focal Points F and 2F
      const drawPoint = (x: number, label: string) => {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(x, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, cy + 16);
      };

      drawPoint(cx - fPx, 'F₁');
      drawPoint(cx + fPx, 'F₂');
      drawPoint(cx - 2 * fPx, '2F₁');
      drawPoint(cx + 2 * fPx, '2F₂');

      // Object Luminous Arrow (Green)
      const objXPx = cx - params.objectDistanceCm * pxPerCm;
      const objHPx = params.objectHeightCm * pxPerCm;
      const objYPx = cy - objHPx;

      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(objXPx, cy);
      ctx.lineTo(objXPx, objYPx);
      ctx.stroke();

      // Object Arrowhead
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.moveTo(objXPx, objYPx - 5);
      ctx.lineTo(objXPx - 5, objYPx + 6);
      ctx.lineTo(objXPx + 5, objYPx + 6);
      ctx.closePath();
      ctx.fill();

      // Image Luminous Arrow
      const di = state.imageDistanceCm;
      const hi = params.objectHeightCm * state.magnification;

      if (Math.abs(di) < 200 && isFinite(di)) {
        const imgXPx = cx + di * pxPerCm;
        const imgHPx = hi * pxPerCm;
        const imgYPx = cy - imgHPx;
        const isReal = di > 0;

        // 1. Parallel Ray (Object tip -> Lens -> F2)
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(objXPx, objYPx);
        ctx.lineTo(cx, objYPx);
        if (isConvex) {
          ctx.lineTo(imgXPx, imgYPx);
        } else {
          // Diverging ray
          ctx.lineTo(width - 25, cy + (objYPx - cy) * 0.5);
        }
        ctx.stroke();

        // 2. Central Ray (Object tip -> Optical Center C -> Image)
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.85)';
        ctx.beginPath();
        ctx.moveTo(objXPx, objYPx);
        ctx.lineTo(cx, cy);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();

        // Virtual extensions if virtual image (dashed lines)
        if (!isReal) {
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(cx, objYPx);
          ctx.lineTo(imgXPx, imgYPx);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Draw Image Arrow (Magenta if real, Violet if virtual)
        ctx.strokeStyle = isReal ? '#ec4899' : '#a855f7';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(imgXPx, cy);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();

        // Image Arrowhead
        ctx.fillStyle = isReal ? '#ec4899' : '#a855f7';
        const arrowDir = imgHPx < 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(imgXPx, imgYPx - arrowDir * 5);
        ctx.lineTo(imgXPx - 5, imgYPx + arrowDir * 6);
        ctx.lineTo(imgXPx + 5, imgYPx + arrowDir * 6);
        ctx.closePath();
        ctx.fill();
      }

      ctx.textAlign = 'left';
    } else {
      // --- MODE C: Young's Double-Slit Interference ---
      const cy = height / 2;
      const slitX = 130;
      const screenX = width - 110;
      const laserColor = wavelengthToRGB(params.wavelengthNm);

      // Slit plate barrier
      ctx.fillStyle = '#334155';
      ctx.fillRect(slitX - 5, 25, 10, height - 50);

      const dPixels = Math.min(45, (params.slitSeparationUm / 500) * 45);
      const slit1Y = cy - dPixels / 2;
      const slit2Y = cy + dPixels / 2;

      // Aperture cutouts
      ctx.clearRect(slitX - 6, slit1Y - 2.5, 12, 5);
      ctx.clearRect(slitX - 6, slit2Y - 2.5, 12, 5);

      // Coherent Laser Source & Planar Wavefronts
      ctx.strokeStyle = laserColor;
      ctx.shadowColor = laserColor;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2;

      // Planar waves moving left to right
      const wavePhase = (animFrameRef.current * 0.8) % 18;
      for (let x = 25 + wavePhase; x < slitX; x += 18) {
        ctx.beginPath();
        ctx.moveTo(x, cy - 65);
        ctx.lineTo(x, cy + 65);
        ctx.stroke();
      }

      // Circular Interference Wave Ripples from Slit 1 and Slit 2
      ctx.lineWidth = 1.2;
      const maxRadius = screenX - slitX;
      for (let r = wavePhase; r < maxRadius; r += 20) {
        if (r < 10) continue;
        ctx.beginPath();
        ctx.arc(slitX, slit1Y, r, -Math.PI / 3.2, Math.PI / 3.2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(slitX, slit2Y, r, -Math.PI / 3.2, Math.PI / 3.2);
        ctx.stroke();
      }

      // Observation Screen (Right Wall)
      ctx.fillStyle = '#090d16';
      ctx.fillRect(screenX, 25, 80, height - 50);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(screenX, 25, 80, height - 50);

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
        ctx.fillRect(screenX + 2, py, 76, 1);
      }
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Central Fringe Marker & Line
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(slitX, cy);
      ctx.lineTo(screenX, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Photodiode Probe Cursor on Screen
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(screenX + 40, cy, 5, 0, Math.PI * 2);
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
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => lab.updateParam('opticsMode', 'double_slit')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
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
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
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
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
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
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        onRender={renderSimulation}
      >
        {/* Real-Time Live Status Watermark */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 pointer-events-none select-none">
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
