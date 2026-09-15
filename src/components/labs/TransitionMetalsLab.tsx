import React, { useCallback, useMemo, useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Layers,
  ChevronDown,
  CheckCircle2,
  Lightbulb,
  Atom,
  Activity,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type TransitionModule =
  | 'orbital_studio'
  | 'gouy_balance'
  | 'color_spectroscopy'
  | 'iron_metallurgy';

export type TransitionMetalKey =
  | 'Sc'
  | 'Ti'
  | 'V'
  | 'Cr'
  | 'Mn'
  | 'Fe'
  | 'Co'
  | 'Ni'
  | 'Cu'
  | 'Zn';

export type FurnaceType = 'blast_furnace' | 'midrex';
export type AlloyType = 'interstitial' | 'substitutional' | 'intermetallic';

export interface TransitionParams {
  module: TransitionModule;
  metalKey: TransitionMetalKey;
  oxidationState: number;
  electromagnetFieldT: number; // 0.0 to 2.0 T
  sampleInitialMassG: number; // 1.0 to 10.0 g
  spectroWavelengthNm: number; // 380 to 750 nm
  furnaceType: FurnaceType;
  furnaceTempC: number; // 200 to 1200 °C
  selectedAlloy: AlloyType;
  isCokePresent: boolean;
  isLimestonePresent: boolean;
}

export interface HydratedIonData {
  oxState: number;
  nameEn: string;
  nameAr: string;
  unpairedElectrons: number;
  colorEn: string;
  colorAr: string;
  colorHex: string;
  absorbedColorEn: string;
  absorbedColorAr: string;
  absorbedWavelengthNm: number;
  transmittedHex: string;
  isColorless: boolean;
}

export interface TransitionElementData {
  z: number;
  symbol: TransitionMetalKey;
  nameEn: string;
  nameAr: string;
  electronConfig: string;
  anomalous: boolean;
  anomalyRationaleEn?: string;
  anomalyRationaleAr?: string;
  period: number;
  densityGcm3: number;
  atomicRadiusPm: number;
  meltingPointC: number;
  neutral4s: number;
  neutral3d: number;
  neutralUnpaired: number;
  availableOxStates: number[];
  defaultOxState: number;
  hydratedIons: Record<number, HydratedIonData>;
  isIupacTransition: boolean;
  iupacRationaleEn: string;
  iupacRationaleAr: string;
  curriculumUsesEn: string[];
  curriculumUsesAr: string[];
}

export const TRANSITION_ELEMENTS: Record<TransitionMetalKey, TransitionElementData> = {
  Sc: {
    z: 21,
    symbol: 'Sc',
    nameEn: 'Scandium',
    nameAr: 'السكانديوم',
    electronConfig: '[Ar] 4s² 3d¹',
    anomalous: false,
    period: 4,
    densityGcm3: 2.99,
    atomicRadiusPm: 162,
    meltingPointC: 1541,
    neutral4s: 2,
    neutral3d: 1,
    neutralUnpaired: 1,
    availableOxStates: [0, 3],
    defaultOxState: 3,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element because 3d subshell is partially filled (3d¹) in the elemental state.',
    iupacRationaleAr: 'عنصر انتقالي لأن المستوى الفرعي 3d غير ممتلئ تماماً (3d¹) في حالته الذرية.',
    curriculumUsesEn: [
      'Added to Aluminum (Al-Sc alloy) for lightweight, high-hardness MiG fighter jets.',
      'Added to Mercury vapor lamps to produce high-intensity daylight-like stadium lighting.',
    ],
    curriculumUsesAr: [
      'يضاف إلى الألومنيوم لتكوين سبيكة طائرات الميج المقاتلة (تتميز بخفتها وشديدة صلابتها).',
      'يضاف إلى مصابيح أبخرة الزئبق لإنتاج ضوء عالي الكفاءة يشبه ضوء الشمس للتصوير التلفزيوني الليلي.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Sc⁰ (Metallic Atom)',
        nameAr: 'Sc⁰ (ذرة فلزية)',
        unpairedElectrons: 1,
        colorEn: 'Silver Grey',
        colorAr: 'فضي رمادي',
        colorHex: '#94a3b8',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#94a3b8',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Sc³⁺ ([Ar] 4s⁰ 3d⁰)',
        nameAr: 'Sc³⁺ ([Ar] 4s⁰ 3d⁰)',
        unpairedElectrons: 0,
        colorEn: 'Colorless (3d⁰)',
        colorAr: 'عديم اللون (3d⁰)',
        colorHex: '#f1f5f9',
        absorbedColorEn: 'None (UV only)',
        absorbedColorAr: 'لا يمتص ضوءاً مرئياً',
        absorbedWavelengthNm: 0,
        transmittedHex: '#ffffff',
        isColorless: true,
      },
    },
  },
  Ti: {
    z: 22,
    symbol: 'Ti',
    nameEn: 'Titanium',
    nameAr: 'التيتانيوم',
    electronConfig: '[Ar] 4s² 3d²',
    anomalous: false,
    period: 4,
    densityGcm3: 4.51,
    atomicRadiusPm: 147,
    meltingPointC: 1668,
    neutral4s: 2,
    neutral3d: 2,
    neutralUnpaired: 2,
    availableOxStates: [0, 2, 3, 4],
    defaultOxState: 3,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element with partially filled 3d in 0, +2, and +3 states.',
    iupacRationaleAr: 'عنصر انتقالي لامتلاك المستوى 3d إلكترونات مفردة في الحالة الذرية والتأكسدية (+2، +3).',
    curriculumUsesEn: [
      'Artificial joints & dental implants (biocompatible; not rejected or poisoned by the body).',
      'Spacecraft and aircraft alloyed with Al (maintains structural strength at elevated temperatures).',
      'TiO₂ nanoparticles in sunscreens (blocks UV rays without dermal penetration).',
    ],
    curriculumUsesAr: [
      'زراعة الأسنان والمفاصل الصناعية (لأن الجسم لا يلفظه ولا يسبب أي تسمم).',
      'سبائك الطائرات والمركبات الفضائية مع الألومنيوم (يحافظ على متانته في درجات الحرارة العالية حيث تنخفض متانة الألومنيوم).',
      'ثاني أكسيد التيتانيوم النانوي (TiO₂) في مستحضرات الوقاية من أشعة الشمس.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Ti⁰ (Metallic Atom)',
        nameAr: 'Ti⁰ (ذرة فلزية)',
        unpairedElectrons: 2,
        colorEn: 'Metallic Silver',
        colorAr: 'فضي فلزي',
        colorHex: '#cbd5e1',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#cbd5e1',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Ti²⁺ ([Ar] 3d²)',
        nameAr: 'Ti²⁺ ([Ar] 3d²)',
        unpairedElectrons: 2,
        colorEn: 'Black / Violet',
        colorAr: 'أسود / بنفسجي',
        colorHex: '#581c87',
        absorbedColorEn: 'Yellow-Green',
        absorbedColorAr: 'أصفر مخضر',
        absorbedWavelengthNm: 560,
        transmittedHex: '#7e22ce',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Ti³⁺ ([Ar] 3d¹)',
        nameAr: 'Ti³⁺ ([Ar] 3d¹)',
        unpairedElectrons: 1,
        colorEn: 'Purple / Violet (3d¹)',
        colorAr: 'بنفسجي (3d¹)',
        colorHex: '#c084fc',
        absorbedColorEn: 'Yellow (~580 nm)',
        absorbedColorAr: 'أصفر (~٥٨٠ نانومتر)',
        absorbedWavelengthNm: 580,
        transmittedHex: '#c084fc',
        isColorless: false,
      },
      4: {
        oxState: 4,
        nameEn: 'Ti⁴⁺ ([Ar] 3d⁰)',
        nameAr: 'Ti⁴⁺ ([Ar] 3d⁰)',
        unpairedElectrons: 0,
        colorEn: 'Colorless (3d⁰)',
        colorAr: 'عديم اللون (3d⁰)',
        colorHex: '#f8fafc',
        absorbedColorEn: 'None (UV only)',
        absorbedColorAr: 'لا يمتص ضوءاً مرئياً',
        absorbedWavelengthNm: 0,
        transmittedHex: '#ffffff',
        isColorless: true,
      },
    },
  },
  V: {
    z: 23,
    symbol: 'V',
    nameEn: 'Vanadium',
    nameAr: 'الفاناديوم',
    electronConfig: '[Ar] 4s² 3d³',
    anomalous: false,
    period: 4,
    densityGcm3: 6.11,
    atomicRadiusPm: 134,
    meltingPointC: 1910,
    neutral4s: 2,
    neutral3d: 3,
    neutralUnpaired: 3,
    availableOxStates: [0, 2, 3, 4, 5],
    defaultOxState: 4,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element with partially filled d-orbitals in +2, +3, +4 states.',
    iupacRationaleAr: 'عنصر انتقالي لاحتواء المستوى 3d على إلكترونات مفردة في الحالات +2، +3، +4.',
    curriculumUsesEn: [
      'Vanadium-steel alloys for automobile shock absorber springs (extraordinary hardness & fatigue resistance).',
      'V₂O₅ catalyst in the Contact Process for making concentrated H₂SO₄.',
      'V₂O₅ dye in glass and ceramic industries and catalyst in benzoic acid synthesis.',
    ],
    curriculumUsesAr: [
      'سبائك الفاناديوم مع الصلب لزمبركات السيارات (قساوة عالية وقدرة فائقة على مقاومة التآكل).',
      'خامس أكسيد الفاناديوم (V₂O₅) كعامل حفاز في طريقة التلامس لتحضير حمض الكبريتيك.',
      'صبغة لتلوين السيراميك والزجاج وعامل حفاز في تحضير حمض البنزويك والمغناطيسات فائقة التوصيل.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'V⁰ (Metallic Atom)',
        nameAr: 'V⁰ (ذرة فلزية)',
        unpairedElectrons: 3,
        colorEn: 'Steel Grey',
        colorAr: 'رمادي صلب',
        colorHex: '#64748b',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#64748b',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'V²⁺ ([Ar] 3d³)',
        nameAr: 'V²⁺ ([Ar] 3d³)',
        unpairedElectrons: 3,
        colorEn: 'Violet',
        colorAr: 'بنفسجي',
        colorHex: '#7c3aed',
        absorbedColorEn: 'Yellow',
        absorbedColorAr: 'أصفر',
        absorbedWavelengthNm: 570,
        transmittedHex: '#7c3aed',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'V³⁺ ([Ar] 3d²)',
        nameAr: 'V³⁺ ([Ar] 3d²)',
        unpairedElectrons: 2,
        colorEn: 'Green',
        colorAr: 'أخضر',
        colorHex: '#16a34a',
        absorbedColorEn: 'Red',
        absorbedColorAr: 'أحمر',
        absorbedWavelengthNm: 680,
        transmittedHex: '#16a34a',
        isColorless: false,
      },
      4: {
        oxState: 4,
        nameEn: 'VO²⁺ / V⁴⁺ ([Ar] 3d¹)',
        nameAr: 'VO²⁺ / V⁴⁺ ([Ar] 3d¹)',
        unpairedElectrons: 1,
        colorEn: 'Blue (VO²⁺, 3d¹)',
        colorAr: 'أزرق (3d¹)',
        colorHex: '#38bdf8',
        absorbedColorEn: 'Orange (~610 nm)',
        absorbedColorAr: 'برتقالي (~٦١٠ نانومتر)',
        absorbedWavelengthNm: 610,
        transmittedHex: '#38bdf8',
        isColorless: false,
      },
      5: {
        oxState: 5,
        nameEn: 'VO₃⁻ / V⁵⁺ ([Ar] 3d⁰)',
        nameAr: 'VO₃⁻ / V⁵⁺ ([Ar] 3d⁰)',
        unpairedElectrons: 0,
        colorEn: 'Yellow / Orange (Charge Transfer)',
        colorAr: 'أصفر / برتقالي (انتقال شحنة)',
        colorHex: '#f59e0b',
        absorbedColorEn: 'Violet',
        absorbedColorAr: 'بنفسجي',
        absorbedWavelengthNm: 420,
        transmittedHex: '#f59e0b',
        isColorless: false,
      },
    },
  },
  Cr: {
    z: 24,
    symbol: 'Cr',
    nameEn: 'Chromium',
    nameAr: 'الكروم',
    electronConfig: '[Ar] 4s¹ 3d⁵ (Anomalous / شاذ)',
    anomalous: true,
    anomalyRationaleEn:
      'Electron promotes from 4s to 3d to achieve half-filled 4s¹ and 3d⁵ subshells, which lowers electron repulsion and stabilizes the atom.',
    anomalyRationaleAr:
      'ينتقل إلكترون من 4s إلى 3d ليصبح كلا المستويين 4s¹ و 3d⁵ نصف ممتلئ، مما يعطي الذرة استقراراً وطاقة أقل.',
    period: 4,
    densityGcm3: 7.19,
    atomicRadiusPm: 128,
    meltingPointC: 1857,
    neutral4s: 1,
    neutral3d: 5,
    neutralUnpaired: 6, // 1 in 4s + 5 in 3d = 6! Maximum in 3d series
    availableOxStates: [0, 2, 3, 6],
    defaultOxState: 3,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element with maximum unpaired electrons (n=6) in elemental state.',
    iupacRationaleAr: 'عنصر انتقالي يمتلك أكبر عدد إلكترونات مفردة (n=6) في الحالة الذرية.',
    curriculumUsesEn: [
      'Chrome electroplating and leather tanning.',
      'Forms a non-porous, cohesive oxide layer (passivation) protecting the metal against atmospheric air.',
      'Nichrome alloy (Ni-Cr) for high-temperature electrical heating elements.',
      'Potassium dichromate (K₂Cr₂O₇) as orange oxidizing agent in alcohol detection.',
    ],
    curriculumUsesAr: [
      'طلاء المعادن ودباغة الجلود.',
      'يقاوم فعل العوامل الجوية لتكون طبقة غير مسامية من الأكسيد على سطحه حجم جزيئاتها أكبر من حجم ذرات الفلز نفسه.',
      'سبيكة النيكل-كروم في ملفات التسخين والأفران الكهربية.',
      'ثاني كرومات البوتاسيوم البرتقالية (K₂Cr₂O₇) كمادة مؤكسدة ومعامل الكشف عن الكحولات.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Cr⁰ (Metallic Atom - n=6)',
        nameAr: 'Cr⁰ (ذرة فلزية - n=6)',
        unpairedElectrons: 6,
        colorEn: 'Silver Chrome',
        colorAr: 'كروم فضي براق',
        colorHex: '#94a3b8',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#94a3b8',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Cr²⁺ ([Ar] 3d⁴)',
        nameAr: 'Cr²⁺ ([Ar] 3d⁴)',
        unpairedElectrons: 4,
        colorEn: 'Bright Blue',
        colorAr: 'أزرق ساطع',
        colorHex: '#0284c7',
        absorbedColorEn: 'Orange',
        absorbedColorAr: 'برتقالي',
        absorbedWavelengthNm: 600,
        transmittedHex: '#0284c7',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Cr³⁺ ([Ar] 3d³)',
        nameAr: 'Cr³⁺ ([Ar] 3d³)',
        unpairedElectrons: 3,
        colorEn: 'Emerald Green (3d³)',
        colorAr: 'أخضر زمردي (3d³)',
        colorHex: '#15803d',
        absorbedColorEn: 'Red (~680 nm)',
        absorbedColorAr: 'أحمر (~٦٨٠ نانومتر)',
        absorbedWavelengthNm: 680,
        transmittedHex: '#22c55e',
        isColorless: false,
      },
      6: {
        oxState: 6,
        nameEn: 'Cr₂O₇²⁻ / Cr⁶⁺ ([Ar] 3d⁰)',
        nameAr: 'Cr₂O₇²⁻ / Cr⁶⁺ ([Ar] 3d⁰)',
        unpairedElectrons: 0,
        colorEn: 'Orange Dichromate',
        colorAr: 'برتقالي ديكرومات',
        colorHex: '#ea580c',
        absorbedColorEn: 'Cyan-Blue',
        absorbedColorAr: 'أزرق سماوي',
        absorbedWavelengthNm: 480,
        transmittedHex: '#ea580c',
        isColorless: false,
      },
    },
  },
  Mn: {
    z: 25,
    symbol: 'Mn',
    nameEn: 'Manganese',
    nameAr: 'المنجنيز',
    electronConfig: '[Ar] 4s² 3d⁵',
    anomalous: false,
    period: 4,
    densityGcm3: 7.21,
    atomicRadiusPm: 127,
    meltingPointC: 1246,
    neutral4s: 2,
    neutral3d: 5,
    neutralUnpaired: 5,
    availableOxStates: [0, 2, 3, 4, 6, 7],
    defaultOxState: 2,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element with widest oxidation range (+2 to +7) in 3d series.',
    iupacRationaleAr: 'عنصر انتقالي يمتلك أكبر تنوع في حالات التأكسد من +2 إلى +7 بخروج جميع إلكترونات 4s و 3d.',
    curriculumUsesEn: [
      'Ferromanganese alloy for railroad tracks (harder and tougher than high-carbon steel).',
      'Al-Mn alloy for beverage cans (exceptional resistance to acid and atmospheric corrosion).',
      'MnO₂ as depolarizer in dry cells and catalyst for H₂O₂ catalytic decomposition.',
      'KMnO₄ purple crystals as powerful antiseptic and oxidizing agent.',
    ],
    curriculumUsesAr: [
      'سبيكة الحديد مع المنجنيز لخطوط السكك الحديدية (لأنها أصلب من الصلب).',
      'سبيكة الألومنيوم مع المنجنيز لعبوات المشروبات الغازية لمقاومتها العالية للتآكل.',
      'ثاني أكسيد المنجنيز (MnO₂) في العمود الجاف وعامل حفاز لانحلال فوق أكسيد الهيدروجين.',
      'برمنجنات البوتاسيوم البنفسجية (KMnO₄) كمادة مؤكسدة ومطهرة.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Mn⁰ (Metallic Atom)',
        nameAr: 'Mn⁰ (ذرة فلزية)',
        unpairedElectrons: 5,
        colorEn: 'Silver Grey',
        colorAr: 'فضي رمادي',
        colorHex: '#94a3b8',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#94a3b8',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Mn²⁺ ([Ar] 3d⁵)',
        nameAr: 'Mn²⁺ ([Ar] 3d⁵)',
        unpairedElectrons: 5,
        colorEn: 'Pale Pink / Flesh (3d⁵)',
        colorAr: 'وردي باهت (3d⁵)',
        colorHex: '#fbcfe8',
        absorbedColorEn: 'Pale Green (Spin-forbidden)',
        absorbedColorAr: 'أخضر باهت (انتقال ممنوع غزل)',
        absorbedWavelengthNm: 520,
        transmittedHex: '#fbcfe8',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Mn³⁺ ([Ar] 3d⁴)',
        nameAr: 'Mn³⁺ ([Ar] 3d⁴)',
        unpairedElectrons: 4,
        colorEn: 'Red / Violet',
        colorAr: 'أحمر بنفسجي',
        colorHex: '#be185d',
        absorbedColorEn: 'Green',
        absorbedColorAr: 'أخضر',
        absorbedWavelengthNm: 510,
        transmittedHex: '#be185d',
        isColorless: false,
      },
      4: {
        oxState: 4,
        nameEn: 'MnO₂ / Mn⁴⁺ ([Ar] 3d³)',
        nameAr: 'MnO₂ / Mn⁴⁺ ([Ar] 3d³)',
        unpairedElectrons: 3,
        colorEn: 'Dark Brown / Black',
        colorAr: 'بني داكن / أسود',
        colorHex: '#451a03',
        absorbedColorEn: 'Broad Visible',
        absorbedColorAr: 'يمتص معظم الطيف',
        absorbedWavelengthNm: 550,
        transmittedHex: '#78350f',
        isColorless: false,
      },
      7: {
        oxState: 7,
        nameEn: 'MnO₄⁻ / Mn⁷⁺ ([Ar] 3d⁰)',
        nameAr: 'MnO₄⁻ / Mn⁷⁺ ([Ar] 3d⁰)',
        unpairedElectrons: 0,
        colorEn: 'Intense Purple Permanganate',
        colorAr: 'بنفسجي برمنجنات داكن',
        colorHex: '#86198f',
        absorbedColorEn: 'Yellow-Green (~540 nm)',
        absorbedColorAr: 'أصفر مخضر (~٥٤٠ نانومتر)',
        absorbedWavelengthNm: 540,
        transmittedHex: '#a21caf',
        isColorless: false,
      },
    },
  },
  Fe: {
    z: 26,
    symbol: 'Fe',
    nameEn: 'Iron',
    nameAr: 'الحديد',
    electronConfig: '[Ar] 4s² 3d⁶',
    anomalous: false,
    period: 4,
    densityGcm3: 7.87,
    atomicRadiusPm: 126,
    meltingPointC: 1538,
    neutral4s: 2,
    neutral3d: 6,
    neutralUnpaired: 4,
    availableOxStates: [0, 2, 3],
    defaultOxState: 3,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition element; Fe³⁺ is extra stable due to half-filled 3d⁵ subshell.',
    iupacRationaleAr: 'عنصر انتقالي؛ أيون Fe³⁺ أكثر استقراراً لكون المستوى الفرعي 3d نصف ممتلئ (3d⁵).',
    curriculumUsesEn: [
      'Reinforced concrete, electricity pylons, gun barrels, and surgical knives.',
      'Finely divided catalyst in Haber-Bosch ammonia synthesis (N₂ + 3H₂ ⇌ 2NH₃).',
      'Fischer-Tropsch catalyst converting water gas (CO + H₂) into liquid fuels.',
    ],
    curriculumUsesAr: [
      'الخرسانة المسلحة، أبراج الكهرباء، مواسير البنادق، والأدوات الجراحية.',
      'عامل حفاز مجزأ في صناعة غاز النشادر بطريقة هابر-بوش.',
      'عامل حفاز في تحويل الغاز المائي إلى وقود سائل مخلق بطريقة فيشر-تروبش.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Fe⁰ (Metallic Atom)',
        nameAr: 'Fe⁰ (ذرة فلزية)',
        unpairedElectrons: 4,
        colorEn: 'Steel Grey',
        colorAr: 'رمادي صلب',
        colorHex: '#64748b',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#64748b',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Fe²⁺ ([Ar] 3d⁶)',
        nameAr: 'Fe²⁺ ([Ar] 3d⁶)',
        unpairedElectrons: 4,
        colorEn: 'Pale Green (3d⁶)',
        colorAr: 'أخضر باهت (3d⁶)',
        colorHex: '#86efac',
        absorbedColorEn: 'Red / Violet',
        absorbedColorAr: 'أحمر / بنفسجي',
        absorbedWavelengthNm: 720,
        transmittedHex: '#4ade80',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Fe³⁺ ([Ar] 3d⁵)',
        nameAr: 'Fe³⁺ ([Ar] 3d⁵)',
        unpairedElectrons: 5,
        colorEn: 'Yellowish Brown (3d⁵)',
        colorAr: 'أصفر باهت / بني محمر (3d⁵)',
        colorHex: '#fef08a',
        absorbedColorEn: 'Violet (~400 nm)',
        absorbedColorAr: 'بنفسجي (~٤٠٠ نانومتر)',
        absorbedWavelengthNm: 400,
        transmittedHex: '#eab308',
        isColorless: false,
      },
    },
  },
  Co: {
    z: 27,
    symbol: 'Co',
    nameEn: 'Cobalt',
    nameAr: 'الكوبالت',
    electronConfig: '[Ar] 4s² 3d⁷',
    anomalous: false,
    period: 4,
    densityGcm3: 8.90,
    atomicRadiusPm: 125,
    meltingPointC: 1495,
    neutral4s: 2,
    neutral3d: 7,
    neutralUnpaired: 3,
    availableOxStates: [0, 2, 3],
    defaultOxState: 2,
    isIupacTransition: true,
    iupacRationaleEn: 'Ferromagnetic transition element with 3 unpaired electrons in 3d.',
    iupacRationaleAr: 'عنصر انتقالي قابل للمغنطة يمتلك 3 إلكترونات مفردة في المستوى 3d.',
    curriculumUsesEn: [
      'Manufacture of permanent magnets and modern dry lithium rechargeable batteries.',
      'Cobalt-60 radioactive isotope: emits penetrating gamma rays for food preservation, tumor detection, and industrial weld quality testing.',
    ],
    curriculumUsesAr: [
      'صناعة المغناطيسات الدائمة والبطاريات الجافة الحديثة في السيارات الكهربائية.',
      'الكوبالت-60 المشع: يصدر أشعة جاما ذات النفاذية العالية لحفظ الأغذية والكشف عن الأورام الخبيثة وعيوب لحام المعادن.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Co⁰ (Metallic Atom)',
        nameAr: 'Co⁰ (ذرة فلزية)',
        unpairedElectrons: 3,
        colorEn: 'Silver Grey',
        colorAr: 'فضي رمادي',
        colorHex: '#64748b',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#64748b',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Co²⁺ ([Ar] 3d⁷)',
        nameAr: 'Co²⁺ ([Ar] 3d⁷)',
        unpairedElectrons: 3,
        colorEn: 'Pink / Red (3d⁷)',
        colorAr: 'وردي / أحمر (3d⁷)',
        colorHex: '#fda4af',
        absorbedColorEn: 'Green (~520 nm)',
        absorbedColorAr: 'أخضر (~٥٢٠ نانومتر)',
        absorbedWavelengthNm: 520,
        transmittedHex: '#f43f5e',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Co³⁺ ([Ar] 3d⁶)',
        nameAr: 'Co³⁺ ([Ar] 3d⁶)',
        unpairedElectrons: 0,
        colorEn: 'Dark Blue / Green',
        colorAr: 'أزرق داكن / مخضر',
        colorHex: '#1e3a8a',
        absorbedColorEn: 'Yellow-Orange',
        absorbedColorAr: 'أصفر برتقالي',
        absorbedWavelengthNm: 590,
        transmittedHex: '#2563eb',
        isColorless: false,
      },
    },
  },
  Ni: {
    z: 28,
    symbol: 'Ni',
    nameEn: 'Nickel',
    nameAr: 'النيكل',
    electronConfig: '[Ar] 4s² 3d⁸',
    anomalous: false,
    period: 4,
    densityGcm3: 8.91,
    atomicRadiusPm: 125,
    meltingPointC: 1455,
    neutral4s: 2,
    neutral3d: 8,
    neutralUnpaired: 2,
    availableOxStates: [0, 2, 3],
    defaultOxState: 2,
    isIupacTransition: true,
    iupacRationaleEn: 'Transition metal with partially filled d-orbitals in +2 state (3d⁸).',
    iupacRationaleAr: 'عنصر انتقالي لاحتواء المستوى 3d على إلكترونين مفردين في الحالة +2 (3d⁸).',
    curriculumUsesEn: [
      'Rechargeable Nickel-Cadmium (Ni-Cd) alkaline storage batteries.',
      'Finely divided nickel catalyst for hydrogenation of vegetable oils (making margarine).',
      'Electroplating other metals to protect them from oxidation and corrosion and impart an attractive shine.',
      'Nickel-Steel alloy: withstands acids and exhibits high hardness.',
    ],
    curriculumUsesAr: [
      'بطاريات النيكل-كادميوم القابلة لإعادة الشحن.',
      'النيكل المجزأ كعامل حفاز في هدرجة الزيوت النباتية لتحويلها لمسلى صناعي.',
      'طلاء المعادن لحمايتها من الصدأ والتآكل وإعطائها مظهراً لامعاً.',
      'سبيكة النيكل مع الصلب لمقاومة الأحماض وصلابتها الشديدة.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Ni⁰ (Metallic Atom)',
        nameAr: 'Ni⁰ (ذرة فلزية)',
        unpairedElectrons: 2,
        colorEn: 'Silver White',
        colorAr: 'فضي أبيض',
        colorHex: '#e2e8f0',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#e2e8f0',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Ni²⁺ ([Ar] 3d⁸)',
        nameAr: 'Ni²⁺ ([Ar] 3d⁸)',
        unpairedElectrons: 2,
        colorEn: 'Emerald Green (3d⁸)',
        colorAr: 'أخضر زمردي (3d⁸)',
        colorHex: '#22c55e',
        absorbedColorEn: 'Red (~680 nm)',
        absorbedColorAr: 'أحمر (~٦٨٠ نانومتر)',
        absorbedWavelengthNm: 680,
        transmittedHex: '#16a34a',
        isColorless: false,
      },
      3: {
        oxState: 3,
        nameEn: 'Ni³⁺ ([Ar] 3d⁷)',
        nameAr: 'Ni³⁺ ([Ar] 3d⁷)',
        unpairedElectrons: 1,
        colorEn: 'Brownish Black',
        colorAr: 'بني مسود',
        colorHex: '#3f2e18',
        absorbedColorEn: 'Blue-Green',
        absorbedColorAr: 'أزرق مخضر',
        absorbedWavelengthNm: 500,
        transmittedHex: '#713f12',
        isColorless: false,
      },
    },
  },
  Cu: {
    z: 29,
    symbol: 'Cu',
    nameEn: 'Copper',
    nameAr: 'النحاس',
    electronConfig: '[Ar] 4s¹ 3d¹⁰ (Anomalous / شاذ)',
    anomalous: true,
    anomalyRationaleEn:
      'Electron promotes from 4s to 3d to achieve completely filled 3d¹⁰ subshell, granting exceptional electronic stability.',
    anomalyRationaleAr:
      'ينتقل إلكترون من 4s إلى 3d ليمتلئ المستوى الفرعي 3d تماماً (3d¹⁰)، مما يعطي الذرة أقصى درجات الاستقرار.',
    period: 4,
    densityGcm3: 8.96,
    atomicRadiusPm: 128,
    meltingPointC: 1083,
    neutral4s: 1,
    neutral3d: 10,
    neutralUnpaired: 1, // 1 in 4s!
    availableOxStates: [0, 1, 2],
    defaultOxState: 2,
    isIupacTransition: true,
    iupacRationaleEn:
      'Considered a transition element because in the +2 oxidation state, its 3d subshell is incompletely filled (3d⁹, n=1).',
    iupacRationaleAr:
      'يعتبر عنصراً انتقالياً لأنه في حالة التأكسد +2 يكون المستوى 3d غير مكتمل الامتلاء (3d⁹ ويحتوي على إلكترون مفرد).',
    curriculumUsesEn: [
      'High-conductivity electrical transmission cables (copper wires).',
      'Bronze alloy (Cu + Sn) and Brass alloy (Cu + Zn) used in musical instruments and door fixtures.',
      'CuSO₄ as agricultural fungicide and drinking water algicide.',
      'Fehling’s solution (alkaline cupric tartrate) for glucose detection (turns deep blue to orange Cu₂O ppt).',
    ],
    curriculumUsesAr: [
      'صناعة الكابلات الكهربائية لكفاءة التوصيل الكهربي الفائقة.',
      'سبيكة البرونز (نحاس + قصدير) وسبيكة النحاس الأصفر (نحاس + خارصين) للأواني النحاسية ومقابض الأبواب.',
      'كبريتات النحاس (CuSO₄) كمبيد للفطريات ومطهر لمياه الشرب.',
      'محلول فهلنج للكشف عن سكر الجلوكوز (يتحول لونه من الأزرق إلى البرتقالي بتكوين Cu₂O).',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Cu⁰ (Metallic Atom)',
        nameAr: 'Cu⁰ (ذرة فلزية)',
        unpairedElectrons: 1,
        colorEn: 'Reddish Bronze Copper',
        colorAr: 'أحمر نحاسي براق',
        colorHex: '#ea580c',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#ea580c',
        isColorless: false,
      },
      1: {
        oxState: 1,
        nameEn: 'Cu⁺ ([Ar] 3d¹⁰)',
        nameAr: 'Cu⁺ ([Ar] 3d¹⁰)',
        unpairedElectrons: 0,
        colorEn: 'Colorless (3d¹⁰)',
        colorAr: 'عديم اللون (3d¹⁰)',
        colorHex: '#f1f5f9',
        absorbedColorEn: 'None (UV only)',
        absorbedColorAr: 'لا يمتص ضوءاً مرئياً',
        absorbedWavelengthNm: 0,
        transmittedHex: '#ffffff',
        isColorless: true,
      },
      2: {
        oxState: 2,
        nameEn: 'Cu²⁺ ([Ar] 3d⁹)',
        nameAr: 'Cu²⁺ ([Ar] 3d⁹)',
        unpairedElectrons: 1,
        colorEn: 'Deep Blue (3d⁹)',
        colorAr: 'أزرق داكن كبريتات (3d⁹)',
        colorHex: '#0284c7',
        absorbedColorEn: 'Orange (~600 nm)',
        absorbedColorAr: 'برتقالي (~٦٠٠ نانومتر)',
        absorbedWavelengthNm: 600,
        transmittedHex: '#0284c7',
        isColorless: false,
      },
    },
  },
  Zn: {
    z: 30,
    symbol: 'Zn',
    nameEn: 'Zinc',
    nameAr: 'الخارصين (الزنك)',
    electronConfig: '[Ar] 4s² 3d¹⁰',
    anomalous: false,
    period: 4,
    densityGcm3: 7.14,
    atomicRadiusPm: 133,
    meltingPointC: 419.5,
    neutral4s: 2,
    neutral3d: 10,
    neutralUnpaired: 0,
    availableOxStates: [0, 2],
    defaultOxState: 2,
    isIupacTransition: false,
    iupacRationaleEn:
      'NOT considered a transition element under the IUPAC definition because its d-orbitals are completely filled (3d¹⁰) in both the elemental state and its only oxidation state (+2).',
    iupacRationaleAr:
      'لا يعتبر عنصراً انتقالياً وفق التعريف العلمي لأن المستوى 3d ممتلئ تماماً (3d¹⁰) في كل من الحالة الذرية وحالة التأكسد الوحيدة له (+2).',
    curriculumUsesEn: [
      'Galvanization of steel and iron sheets to prevent rust and electrochemical corrosion.',
      'Zinc Oxide (ZnO) in rubber vulcanization, paints, and cosmetic sunscreens.',
      'Zinc Sulfide (ZnS) in phosphorescent luminous dials and medical X-ray imaging screens.',
    ],
    curriculumUsesAr: [
      'جلفنة باقي الفلزات كالحديد لحمايتها من الصدأ والتآكل.',
      'أكسيد الخارصين (ZnO) في صناعة الدهانات والمطاط ومستحضرات التجميل.',
      'كبريتيد الخارصين (ZnS) في صناعة شاشات الأشعة السينية والطلائات المضيئة.',
    ],
    hydratedIons: {
      0: {
        oxState: 0,
        nameEn: 'Zn⁰ (Metallic Atom)',
        nameAr: 'Zn⁰ (ذرة فلزية)',
        unpairedElectrons: 0,
        colorEn: 'Bluish Silver Grey',
        colorAr: 'رمادي فضي مزرق',
        colorHex: '#94a3b8',
        absorbedColorEn: 'None',
        absorbedColorAr: 'لا يوجد',
        absorbedWavelengthNm: 0,
        transmittedHex: '#94a3b8',
        isColorless: false,
      },
      2: {
        oxState: 2,
        nameEn: 'Zn²⁺ ([Ar] 3d¹⁰)',
        nameAr: 'Zn²⁺ ([Ar] 3d¹⁰)',
        unpairedElectrons: 0,
        colorEn: 'Colorless (3d¹⁰)',
        colorAr: 'عديم اللون (3d¹⁰)',
        colorHex: '#f8fafc',
        absorbedColorEn: 'None (UV only)',
        absorbedColorAr: 'لا يمتص ضوءاً مرئياً',
        absorbedWavelengthNm: 0,
        transmittedHex: '#ffffff',
        isColorless: true,
      },
    },
  },
};

const DEFAULT_PARAMS: TransitionParams = {
  module: 'orbital_studio',
  metalKey: 'Fe',
  oxidationState: 3,
  electromagnetFieldT: 1.2,
  sampleInitialMassG: 5.0,
  spectroWavelengthNm: 400,
  furnaceType: 'blast_furnace',
  furnaceTempC: 750,
  selectedAlloy: 'interstitial',
  isCokePresent: true,
  isLimestonePresent: true,
};

export const TRANSITION_PARAM_SCHEMA: LabParameterSchema<TransitionParams> = {
  module: {
    key: 'module',
    type: 'select',
    labelEn: 'Laboratory Module',
    labelAr: 'موديول المعمل',
    defaultValue: 'orbital_studio',
    options: [
      { value: 'orbital_studio', labelEn: '3d Electronic Orbitals Studio', labelAr: 'استوديو الأوربيتالات والتوزيع الإلكتروني' },
      { value: 'gouy_balance', labelEn: 'Gouy Magnetic Balance', labelAr: 'ميزان جوي والعزم المغناطيسي' },
      { value: 'color_spectroscopy', labelEn: 'Color Spectrophotometry', labelAr: 'طيف امتصاص الأيونات والألوان المتممة' },
      { value: 'iron_metallurgy', labelEn: 'Blast & Midrex Metallurgy', labelAr: 'أفران استخلاص وتعدين الحديد' },
    ],
  },
  metalKey: {
    key: 'metalKey',
    type: 'select',
    labelEn: '3d Element Selection',
    labelAr: 'عنصر السلسلة الانتقالية الأولى',
    defaultValue: 'Fe',
    visibleIf: (p: TransitionParams) => p.module !== 'iron_metallurgy',
    options: [
      { value: 'Sc', labelEn: 'Scandium (Sc, Z=21)', labelAr: 'السكانديوم (Sc)' },
      { value: 'Ti', labelEn: 'Titanium (Ti, Z=22)', labelAr: 'التيتانيوم (Ti)' },
      { value: 'V', labelEn: 'Vanadium (V, Z=23)', labelAr: 'الفاناديوم (V)' },
      { value: 'Cr', labelEn: 'Chromium (Cr, Z=24)', labelAr: 'الكروم (Cr)' },
      { value: 'Mn', labelEn: 'Manganese (Mn, Z=25)', labelAr: 'المنجنيز (Mn)' },
      { value: 'Fe', labelEn: 'Iron (Fe, Z=26)', labelAr: 'الحديد (Fe)' },
      { value: 'Co', labelEn: 'Cobalt (Co, Z=27)', labelAr: 'الكوبالت (Co)' },
      { value: 'Ni', labelEn: 'Nickel (Ni, Z=28)', labelAr: 'النيكل (Ni)' },
      { value: 'Cu', labelEn: 'Copper (Cu, Z=29)', labelAr: 'النحاس (Cu)' },
      { value: 'Zn', labelEn: 'Zinc (Zn, Z=30)', labelAr: 'الخارصين (Zn)' },
    ],
  },
  oxidationState: {
    key: 'oxidationState',
    type: 'number',
    labelEn: 'Oxidation State',
    labelAr: 'حالة التأكسد',
    defaultValue: 3,
    min: 0,
    max: 7,
    step: 1,
    visibleIf: (p: TransitionParams) => p.module !== 'iron_metallurgy',
  },
  electromagnetFieldT: {
    key: 'electromagnetFieldT',
    type: 'number',
    labelEn: 'Electromagnet Field B',
    labelAr: 'شدة المجال الكهرومغناطيسي B',
    defaultValue: 1.2,
    min: 0.0,
    max: 2.0,
    step: 0.1,
    unit: 'T',
    visibleIf: (p: TransitionParams) => p.module === 'gouy_balance',
  },
  sampleInitialMassG: {
    key: 'sampleInitialMassG',
    type: 'number',
    labelEn: 'Initial Sample Mass m₀',
    labelAr: 'كتلة العينة الابتدائية m₀',
    defaultValue: 5.0,
    min: 1.0,
    max: 10.0,
    step: 0.5,
    unit: 'g',
    visibleIf: (p: TransitionParams) => p.module === 'gouy_balance',
  },
  spectroWavelengthNm: {
    key: 'spectroWavelengthNm',
    type: 'number',
    labelEn: 'Incident Light Wavelength λ',
    labelAr: 'طول موجة الضوء الساقط λ',
    defaultValue: 400,
    min: 380,
    max: 750,
    step: 5,
    unit: 'nm',
    visibleIf: (p: TransitionParams) => p.module === 'color_spectroscopy',
  },
  furnaceType: {
    key: 'furnaceType',
    type: 'select',
    labelEn: 'Furnace Type',
    labelAr: 'نوع الفرن الصناعي',
    defaultValue: 'blast_furnace',
    visibleIf: (p: TransitionParams) => p.module === 'iron_metallurgy',
    options: [
      { value: 'blast_furnace', labelEn: 'Blast Furnace (CO)', labelAr: 'الفرن العالي' },
      { value: 'midrex', labelEn: 'Midrex Furnace (Water Gas)', labelAr: 'فرن مدركس' },
    ],
  },
  furnaceTempC: {
    key: 'furnaceTempC',
    type: 'number',
    labelEn: 'Operating Temperature T',
    labelAr: 'درجة الحرارة T',
    defaultValue: 750,
    min: 200,
    max: 1200,
    step: 25,
    unit: '°C',
    visibleIf: (p: TransitionParams) => p.module === 'iron_metallurgy',
  },
  selectedAlloy: {
    key: 'selectedAlloy',
    type: 'select',
    labelEn: 'Alloy Classification',
    labelAr: 'تصنيف السبيكة',
    defaultValue: 'interstitial',
    visibleIf: (p: TransitionParams) => p.module === 'iron_metallurgy',
    options: [
      { value: 'interstitial', labelEn: 'Interstitial (Carbon Steel)', labelAr: 'سبيكة بينية' },
      { value: 'substitutional', labelEn: 'Substitutional (Stainless Steel)', labelAr: 'سبيكة استبدالية' },
      { value: 'intermetallic', labelEn: 'Intermetallic (Cementite)', labelAr: 'سبيكة بينفلزية' },
    ],
  },
  isCokePresent: {
    key: 'isCokePresent',
    type: 'boolean',
    labelEn: 'Coke Carbon Present',
    labelAr: 'وجود فحم الكوك',
    defaultValue: true,
  },
  isLimestonePresent: {
    key: 'isLimestonePresent',
    type: 'boolean',
    labelEn: 'Limestone CaCO₃ Added',
    labelAr: 'إضافة الحجر الجيري',
    defaultValue: true,
  },
};

export const TRANSITION_PRESETS: LabPreset<TransitionParams>[] = [
  {
    id: 'chromium_anomaly',
    nameEn: 'Chromium Electronic Anomaly & Paramagnetism',
    nameAr: 'شذوذ التوزيع الإلكتروني للكروم وعزمه المغناطيسي',
    descriptionEn: 'Inspect Cr 4s¹ 3d⁵ half-filled stability and maximum unpaired spins (n=6).',
    descriptionAr: 'فحص استقرار المستوى نصف الممتلئ للكروم وعزمه المغناطيسي الأكبر (n=6).',
    params: {
      ...DEFAULT_PARAMS,
      module: 'orbital_studio',
      metalKey: 'Cr',
      oxidationState: 0,
    },
  },
  {
    id: 'gouy_fe3_vs_zn2',
    nameEn: 'Gouy Balance: Fe³⁺ (Paramagnetic) vs Zn²⁺ (Diamagnetic)',
    nameAr: 'ميزان جوي: مقارنة كلوريد الحديد الثلاثي بكبريتات الخارصين',
    descriptionEn: 'Demonstrate apparent weight gain for Fe³⁺ (n=5) and neutral/repulsion for Zn²⁺ (n=0).',
    descriptionAr: 'إثبات زيادة الوزن الظاهري لـ Fe³⁺ وتنافر/ثبات Zn²⁺ الدايامغناطيسي.',
    params: {
      ...DEFAULT_PARAMS,
      module: 'gouy_balance',
      metalKey: 'Fe',
      oxidationState: 3,
      electromagnetFieldT: 1.5,
    },
  },
  {
    id: 'blast_furnace_sponge',
    nameEn: 'Blast Furnace: Selective Temperature Reduction of Hematite',
    nameAr: 'الفرن العالي: اختزال الهيماتيت عند درجات الحرارة المختلفة',
    descriptionEn: 'Track progressive reduction: Fe₂O₃ → Fe₃O₄ (250°C) → FeO (500°C) → Molten Fe (>700°C).',
    descriptionAr: 'تتبع الاختزال التدريجي للهيماتيت وصولاً للحديد المنصهر والخَبث.',
    params: {
      ...DEFAULT_PARAMS,
      module: 'iron_metallurgy',
      furnaceType: 'blast_furnace',
      furnaceTempC: 850,
      isCokePresent: true,
      isLimestonePresent: true,
    },
  },
  {
    id: 'copper_complementary_blue',
    nameEn: 'Cu²⁺ Spectroscopy & Complementary Orange Absorption',
    nameAr: 'طيف النحاس الثنائي وامتصاص اللون البرتقالي المتمم',
    descriptionEn: 'Examine Cu²⁺ (3d⁹) absorbing orange (~600 nm) to display vibrant deep blue.',
    descriptionAr: 'دراسة امتصاص Cu²⁺ للون البرتقالي المتمم للون الأزرق المائي المشاهد.',
    params: {
      ...DEFAULT_PARAMS,
      module: 'color_spectroscopy',
      metalKey: 'Cu',
      oxidationState: 2,
      spectroWavelengthNm: 600,
    },
  },
];

export const TRANSITION_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_scandium_magnetism',
    titleEn: 'Challenge 1: Scandium Metal vs Scandium Compounds',
    titleAr: 'تحدي ١: بارامغناطيسية السكانديوم ودايامغناطيسية مركباته',
    scenarioEn: 'Metallic Scandium has configuration [Ar] 4s² 3d¹. An investigator measures its magnetic moment and tests its aqueous compounds ScCl₃ and Sc₂O₃ in a spectrophotometer.',
    scenarioAr: 'عنصر السكانديوم تركيبه [Ar] 4s² 3d¹. قام باحث بقياس عزمه المغناطيسي وفحص محاليل مركباته ScCl₃ و Sc₂O₃ في جهاز قياس الطيف.',
    questionEn:
      'Why is metallic Scandium attracted to a magnetic field, while all its common compounds (e.g. ScCl₃, Sc₂O₃) are diamagnetic and completely colorless?',
    questionAr:
      'علل: عنصر السكانديوم فلز بارامغناطيسي ينجذب للمجال المغناطيسي، بينما جميع مركباته (مثل ScCl₃ و Sc₂O₃) مواد دايامغناطيسية وغير ملونة؟',
    optionsEn: [
      'Sc³⁺ loses its 3d electron, leaving an empty 3d⁰ subshell with 0 unpaired electrons, preventing magnetism and d-d transitions.',
      'Sc³⁺ pairs up all 3d electrons into a stable 3d² configuration.',
      'Scandium is an s-block metal so it has no d-electrons at all in any state.',
      'Chlorine and oxygen neutralize the magnetic field of Scandium.',
    ],
    optionsAr: [
      'لأن أيون Sc³⁺ يفقد إلكتروني 4s وإلكترون 3d ليصبح المستوى 3d فارغاً تماماً (3d⁰)، فلا توجد إلكترونات مفردة ولا يمكن حدوث انتقالات إلكترونية.',
      'لأن إلكترونات 3d تزدوج مع بعضها في أيون Sc³⁺ مكونة زوجاً مستقراً.',
      'لأن السكانديوم عنصر من الفئة s ولا يحتوي على إلكترونات في المستوى d.',
      'لأن أيونات الكلور والأكسجين تعاكس المجال المغناطيسي للسكانديوم.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Metallic Scandium has configuration [Ar] 4s² 3d¹, with n=1 unpaired electron in 3d (paramagnetic, μ = 1.73 BM). In its only stable oxidation state (+3), Scandium loses its two 4s electrons and its single 3d electron, giving [Ar] 4s⁰ 3d⁰. With n=0 unpaired electrons, it is diamagnetic (μ = 0 BM) and colorless because no d-d electron transitions can be stimulated by visible light photons.',
    scientificExplanationAr:
      'عنصر السكانديوم تركيبه [Ar] 4s² 3d¹ ويمتلك إلكتروناً مفرداً واحداً في 3d (بارامغناطيسي، عزم = ١.٧٣ ب.م). في جميع مركباته يوجد بحالة التأكسد الوحيدة (+3) بفقد إلكتروني 4s وإلكترون 3d ليصبح [Ar] 4s⁰ 3d⁰، وحيث أن المستوى 3d فارغ تماماً من الإلكترونات (n=0)، تصبح مركباته دايامغناطيسية وعديمة اللون لعدم إمكانية حدوث انتقالات إلكترونية d-d ممتصة للضوء المرئي.',
  },
  {
    id: 'poe_chromium_moment',
    titleEn: 'Challenge 2: Anomalous Chromium Electronic Configuration',
    titleAr: 'تحدي ٢: شذوذ التركيب الإلكتروني وعزم ذرة الكروم',
    scenarioEn: 'Chromium has atomic number Z=24. Comparing its Aufbau configuration 4s² 3d⁴ against spectroscopic measurements reveals an anomaly.',
    scenarioAr: 'عنصر الكروم عدده الذري Z=24. مقارنة توزيعه وفق مبدأ البناء التصاعدي 4s² 3d⁴ بالقياسات الطيفية والمغناطيسية تكشف شذوذاً واضحاً.',
    questionEn:
      'Why does Chromium (Z=24) adopt the configuration [Ar] 4s¹ 3d⁵ rather than 4s² 3d⁴, and what is its spin-only magnetic moment in the metallic atom state?',
    questionAr:
      'لماذا يشذ التوزيع الإلكتروني لذرة الكروم (Cr₂₄) ليكون [Ar] 4s¹ 3d⁵ بدلاً من 4s² 3d⁴، وكم يبلغ عزمه المغناطيسي في حالته الذرية؟',
    optionsEn: [
      'Half-filled 4s¹ and 3d⁵ give extra electronic stability; μ = √(6×8) = 6.93 BM (6 unpaired electrons).',
      'It has 4 unpaired electrons and magnetic moment μ = 4.90 BM.',
      'All 3d electrons are paired, making it completely diamagnetic.',
      'Chromium promotes an electron to 4p to bond with non-metals.',
    ],
    optionsAr: [
      'لأن جعل المستويين 4s و 3d نصف ممتلئين يعطي الذرة استقراراً وثباتاً أكبر؛ وعزمه المغناطيسي μ = √(٦×٨) = ٦.٩٣ ب.م (٦ إلكترونات مفردة).',
      'لأنه يحتوي على ٤ إلكترونات مفردة وعزمه المغناطيسي ٤.٩٠ ب.م.',
      'لأن جميع إلكترونات 3d تزدوج فيصبح دايامغناطيسياً تماماً.',
      'لأن الكروم يرقي إلكتروناً إلى المستوى 4p ليتمكن من تكوين روابط.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'In Chromium, transferring one electron from 4s to 3d creates two half-filled subshells: 4s¹ and 3d⁵. This state minimizes inter-electronic repulsions and maximizes exchange energy, providing enhanced structural stability. Consequently, the neutral Chromium atom boasts 6 unpaired electrons (one in 4s and five in 3d), giving it the highest magnetic moment in the entire 3d series: μ = √(6(6+2)) = √48 ≈ 6.93 BM.',
    scientificExplanationAr:
      'في ذرة الكروم، يؤدي انتقال إلكترون من 4s إلى 3d إلى جعل كلا المستويين 4s و 3d نصف ممتلئين (4s¹ 3d⁵)، مما يقلل قوى التنافر بين الإلكترونات ويزيد طاقة التبادل، محققاً أقصى استقرار للذرة. وبذلك تمتلك ذرة الكروم ٦ إلكترونات مفردة (واحد في 4s وخمسة في 3d)، وهو أكبر عدد إلكترونات مفردة وأكبر عزم مغناطيسي بين جميع عناصر السلسلة الانتقالية الأولى: μ = √(٦×٨) ≈ ٦.٩٣ ب.م.',
  },
  {
    id: 'poe_furnace_temperatures',
    titleEn: 'Challenge 3: Temperature-Selective Iron Reduction',
    titleAr: 'تحدي ٣: الاختزال الحراري التمييزي لخامات الحديد',
    scenarioEn: 'In iron metallurgy, hematite ore (Fe₂O₃) is fed into the top of the Blast Furnace and descends through varying thermal zones while CO gas ascends.',
    scenarioAr: 'في تعدين الحديد، تُشحن خامات الهيماتيت (Fe₂O₃) من أعلى الفرن العالي وتهبط عبر نطاقات حرارية متزايدة بينما يصعد غاز CO المختزل.',
    questionEn:
      'When Hematite (Fe₂O₃) is reduced by CO inside the Blast Furnace at 250°C, 550°C, and 850°C respectively, what are the primary iron products formed at each temperature?',
    questionAr:
      'عند اختزال الهيماتيت (Fe₂O₃) بواسطة غاز CO في الفرن العالي عند درجات الحرارة ٢٥٠°س، و ٥٥٠°س، و ٨٥٠°س على الترتيب، ما هي النواتج الرئيسية المتكونة؟',
    optionsEn: [
      '250°C → Fe₃O₄ (Black Magnetite); 550°C → FeO (Iron II oxide); 850°C → Molten Pig Iron (Fe).',
      'All temperatures yield molten metallic Iron directly.',
      '250°C → Fe; 550°C → Fe₂O₃; 850°C → Fe₃O₄.',
      '250°C → FeCO₃; 550°C → FeSO₄; 850°C → Fe₂O₃.',
    ],
    optionsAr: [
      'عند ٢٥٠°س: Fe₃O₄ (ماجنتيت أسود)؛ عند ٥٥٠°س: FeO (أكسيد حديد ثنائي)؛ عند ٨٥٠°س: حديد منصهر غفل (Fe).',
      'جميع درجات الحرارة تنتج حديداً فلزياً منصخراً بشكل مباشر.',
      'عند ٢٥٠°س: Fe؛ عند ٥٥٠°س: Fe₂O₃؛ عند ٨٥٠°س: Fe₃O₄.',
      'عند ٢٥٠°س: FeCO₃؛ عند ٥٥٠°س: FeSO₄؛ عند ٨٥٠°س: Fe₂O₃.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'In the Blast Furnace, the reduction of hematite by CO is strictly temperature-dependent: (1) In the upper stack at 230–300°C: 3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂; (2) In the middle stack at 400–700°C: Fe₃O₄ + CO → 3FeO + CO₂; (3) In the lower hearth above 700°C: FeO + CO → Fe + CO₂, yielding molten pig iron alongside molten calcium silicate slag (CaSiO₃) formed from limestone decomposition.',
    scientificExplanationAr:
      'في الفرن العالي، يعتمد ناتج اختزال الهيماتيت بواسطة CO تماماً على درجة الحرارة: (١) أعلى الفرن (٢٣٠-٣٠٠°س): يُختزل الهيماتيت إلى ماجنتيت 3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂؛ (٢) وسط الفرن (٤٠٠-٧٠٠°س): يُختزل الماجنتيت إلى أكسيد حديد ثنائي Fe₃O₄ + CO → 3FeO + CO₂؛ (٣) قاع الفرن (أعلى من ٧٠٠°س): يُختزل FeO تماماً إلى حديد منصهر FeO + CO → Fe + CO₂، متزامناً مع تكوين الخَبث المنصهر CaSiO₃ من تحلل الحجر الجيري وتفاعله مع شوائب السيليكا.',
  },
];

export const TRANSITION_LAB_DEF: LabDefinition<TransitionParams, any> = {
  id: 'transition_metals_metallurgy',
  subject: 'chemistry',
  chapterRef: 'Chapter 1',
  titleEn: 'First Transition Series & Iron Metallurgy Virtual Lab',
  titleAr: 'مختبر عناصر السلسلة الانتقالية الأولى وتعدين الحديد التفاعلي',
  subtitleEn: '3d Electronic Configurations, Gouy Magnetic Balance, Spectrophotometry & Industrial Blast Furnace',
  subtitleAr: 'التوزيع الإلكتروني للمستوى 3d، ميزان جوي المغناطيسي، ألوان الأيونات وأفران استخلاص الحديد',
  objectives: [
    {
      id: 'obj_orbitals',
      textEn: "Apply Hund's rule and outer 4s-first ionization to 3d transition metals.",
      textAr: 'تطبيق قاعدة هوند وقاعدة خروج إلكترونات 4s أولاً على عناصر السلسلة الانتقالية الأولى.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj_gouy',
      textEn: 'Calculate spin-only magnetic moments μ = √(n(n+2)) BM and observe Gouy balance apparent mass deflection.',
      textAr: 'حساب العزم المغناطيسي μ = √(n(n+2)) وملاحظة انحراف ميزان جوي للوزن الظاهري.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_colors',
      textEn: 'Explain hydrated ion colors through d-d electron transitions and identify complementary transmitted colors.',
      textAr: 'تفسير ألوان الأيونات المائية عبر انتقالات إلكترونات d وتحديد الألوان المتممة المشاهدة.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj_metallurgy',
      textEn: 'Analyze the temperature-dependent reduction stages of iron ores in the Blast Furnace and Midrex reactor.',
      textAr: 'تحليل مراحل الاختزال المعتمدة على الحرارة لخامات الحديد في الفرن العالي وفرن مدركس.',
      bloomLevel: 'evaluate',
    },
  ],
  keyFormulas: [
    {
      id: 'formula_magnetic_moment',
      labelEn: 'Spin-Only Magnetic Moment',
      labelAr: 'العزم المغناطيسي الفعال',
      tex: '\\mu = \\sqrt{n(n+2)}\\,\\text{BM}',
      descriptionEn: 'Spin-only formula where n is the number of unpaired electrons.',
      descriptionAr: 'قانون العزم المغناطيسي بدلالة عدد الإلكترونات المفردة n مقاساً بوحدة بور مغنيتون.',
    },
    {
      id: 'formula_blast_reduction',
      labelEn: 'Blast Furnace Total Reduction',
      labelAr: 'معادلة الاختزال التام في الفرن العالي',
      tex: '\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{>700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2',
      descriptionEn: 'Reduction of hematite by coke-derived CO at high temperature.',
      descriptionAr: 'اختزال الهيماتيت بأول أكسيد الكربون الناتج عن فحم الكوك عند أعلى من 700°س.',
    },
    {
      id: 'formula_slag_formation',
      labelEn: 'Slag Formation Reaction',
      labelAr: 'معادلة تكوين الخَبَث المنصهر',
      tex: '\\text{CaO} + \\text{SiO}_2 \\to \\text{CaSiO}_3 \\quad (\\text{Slag / الخَبَث})',
      descriptionEn: 'Reaction of quicklime with silica gangue to yield calcium silicate slag.',
      descriptionAr: 'تفاعل أكسيد الكالسيوم مع شوائب السيليكا لتكوين خَبَث سيليكات الكالسيوم الطافي.',
    },
    {
      id: 'formula_midrex_reduction',
      labelEn: 'Midrex Direct Reduction with Water Gas',
      labelAr: 'معادلة اختزال مدركس بالغاز المائي',
      tex: '2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\to 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}',
      descriptionEn: 'Reduction of hematite by water gas reformed from natural gas.',
      descriptionAr: 'اختزال الهيماتيت بالغاز المائي المحضر من الغاز الطبيعي لإنتاج الحديد الإسفنجي.',
    },
  ],
  defaultParams: DEFAULT_PARAMS,
  paramSchema: TRANSITION_PARAM_SCHEMA,
  presets: TRANSITION_PRESETS,
  poePrompts: TRANSITION_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Operating Temperature / Magnetic Field',
    xLabelAr: 'درجة الحرارة / شدة المجال',
    xUnit: '°C / T',
    yLabelEn: 'Apparent Mass / Magnetic Moment',
    yLabelAr: 'الوزن الظاهري / العزم المغناطيسي',
    yUnit: 'g / BM',
  },
};

export const TransitionMetalsLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [dmmMode, setDmmMode] = useState<'apparent_mass' | 'mass_delta' | 'magnetic_moment' | 'susceptibility'>('apparent_mass');
  const [animTick, setAnimTick] = useState(0);

  // Active animation loop for particle and balance dynamics
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      setAnimTick((prev) => (prev + 1) % 10000);
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const lab = useVirtualLab<TransitionParams, Record<string, any>>({
    definition: TRANSITION_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const currentMetal = TRANSITION_ELEMENTS[params.metalKey] || TRANSITION_ELEMENTS.Fe;

  // Active oxidation state calculation
  const safeOxState = currentMetal.availableOxStates.includes(params.oxidationState)
    ? params.oxidationState
    : currentMetal.defaultOxState;

  const currentIon = currentMetal.hydratedIons[safeOxState] || currentMetal.hydratedIons[currentMetal.defaultOxState];

  // Calculation of electronic occupancy and Hund's rule:
  // Rule: Electrons leave 4s FIRST before leaving 3d!
  const computedOccupancy = useMemo(() => {
    const neutral4s = currentMetal.neutral4s;
    const neutral3d = currentMetal.neutral3d;
    const ox = safeOxState;

    let rem4s = neutral4s;
    let rem3d = neutral3d;

    if (ox > 0) {
      if (ox <= neutral4s) {
        rem4s = neutral4s - ox;
      } else {
        const excess = ox - neutral4s;
        rem4s = 0;
        rem3d = Math.max(0, neutral3d - excess);
      }
    }

    // Hund's rule for 3d: 5 boxes
    // single fill first, then pair
    let unpaired = 0;
    const boxes3d: { up: boolean; down: boolean }[] = [];
    for (let i = 0; i < 5; i++) {
      const up = rem3d > i;
      const down = rem3d > i + 5;
      if (up && !down) unpaired++;
      boxes3d.push({ up, down });
    }

    // If neutral atom with 4s¹ (Cr or Cu), count 4s unpaired electron too
    let totalUnpaired = unpaired;
    if (rem4s === 1) {
      totalUnpaired += 1;
    }

    return {
      rem4s,
      rem3d,
      boxes3d,
      unpaired: totalUnpaired,
      box4s: { up: rem4s >= 1, down: rem4s >= 2 },
    };
  }, [currentMetal, safeOxState]);

  // Magnetic Moment: μ = sqrt(n*(n+2)) BM
  const n = computedOccupancy.unpaired;
  const magneticMomentBM = Math.sqrt(n * (n + 2));
  const isParamagnetic = n > 0;

  // Gouy Balance Physics Model:
  // Magnetic susceptibility: χ_M (approximate in 10^-6 cm^3/mol)
  const molarSusceptibility = useMemo(() => {
    if (n === 0) return -25.0; // small diamagnetic negative susceptibility
    return Math.round((n * (n + 2) * 1250) + (safeOxState * 40));
  }, [n, safeOxState]);

  // Apparent mass deflection:
  // Δm = k * χ * B^2 (mg)
  const massDeltaMg = useMemo(() => {
    const B = params.electromagnetFieldT;
    if (n === 0) {
      // Weak diamagnetic repulsion
      return -0.8 * B * B;
    }
    // Paramagnetic attraction: pulls downward into magnetic field, increasing apparent mass
    return (molarSusceptibility / 85) * B * B;
  }, [molarSusceptibility, params.electromagnetFieldT, n]);

  const apparentMassG = useMemo(() => {
    return params.sampleInitialMassG + massDeltaMg / 1000;
  }, [params.sampleInitialMassG, massDeltaMg]);

  // Blast Furnace Zone Reduction Status
  const metallurgyStatus = useMemo(() => {
    const T = params.furnaceTempC;
    let stageEn = '';
    let stageAr = '';
    let productEn = '';
    let productAr = '';
    let eqEn = '';
    let eqAr = '';
    let color = '#f97316';

    if (params.furnaceType === 'blast_furnace') {
      if (T < 400) {
        stageEn = 'Upper Stack (230-300°C): Hematite reduction to Magnetite';
        stageAr = 'أعلى الفرن (٢٣٠-٣٠٠°س): اختزال الهيماتيت إلى الماجنتيت الأسود';
        productEn = 'Fe₃O₄ (Black Magnetic Oxide)';
        productAr = 'Fe₃O₄ (أكسيد الحديد المغناطيسي الأسود)';
        eqEn = '3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂';
        eqAr = '3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂';
        color = '#334155';
      } else if (T <= 700) {
        stageEn = 'Middle Stack (400-700°C): Reduction to Iron(II) Oxide';
        stageAr = 'وسط الفرن (٤٠٠-٧٠٠°س): اختزال الماجنتيت إلى أكسيد الحديد الثنائي';
        productEn = 'FeO (Iron(II) Oxide)';
        productAr = 'FeO (أكسيد الحديد الثنائي)';
        eqEn = 'Fe₃O₄ + CO → 3FeO + CO₂';
        eqAr = 'Fe₃O₄ + CO → 3FeO + CO₂';
        color = '#475569';
      } else {
        stageEn = 'Lower Hearth (>700°C): Total reduction to Molten Pig Iron & Slag';
        stageAr = 'قاع الفرن (>٧٠٠°س): اختزال تام إلى حديد غفل منصهر وخَبَث الكالسيوم';
        productEn = 'Molten Pig Iron (Fe) + Slag (CaSiO₃)';
        productAr = 'حديد غفل منصهر (Fe) + خَبَث السيليكات (CaSiO₃)';
        eqEn = 'FeO + CO → Fe + CO₂  &  CaO + SiO₂ → CaSiO₃';
        eqAr = 'FeO + CO → Fe + CO₂  مع  CaO + SiO₂ → CaSiO₃';
        color = '#ea580c';
      }
    } else {
      // Midrex furnace
      stageEn = 'Midrex Direct Reduction: Sponge Iron with Water Gas (CO + H₂)';
      stageAr = 'فرن مدركس للاختزال المباشر: إنتاج الحديد الإسفنجي بالغاز المائي';
      productEn = 'High-Purity Sponge Iron (الحديد الإسفنجي)';
      productAr = 'حديد إسفنجي عالي النقاوة';
      eqEn = '2Fe₂O₃ + 3CO + 3H₂ → 4Fe + 3CO₂ + 3H₂O';
      eqAr = '2Fe₂O₃ + 3CO + 3H₂ → 4Fe + 3CO₂ + 3H₂O';
      color = '#e11d48';
    }

    return { stageEn, stageAr, productEn, productAr, eqEn, eqAr, color };
  }, [params.furnaceTempC, params.furnaceType]);

  // Spectrophotometer Absorbance & Transmittance curve
  const spectroData = useMemo(() => {
    const lambda = params.spectroWavelengthNm;
    const peakLambda = currentIon.absorbedWavelengthNm;
    if (currentIon.isColorless || peakLambda === 0) {
      return { absorbance: 0.01, transmittance: 98.5 };
    }
    // Gaussian absorption curve around peak wavelength
    const sigma = 45;
    const diff = lambda - peakLambda;
    const absorbance = Math.max(0.01, 1.45 * Math.exp(-(diff * diff) / (2 * sigma * sigma)));
    const transmittance = Math.max(1.0, 100 * Math.pow(10, -absorbance));
    return { absorbance, transmittance };
  }, [params.spectroWavelengthNm, currentIon]);

  // Telemetry Metrics
  const metrics: LabTelemetryMetric[] = useMemo(() => {
    return [
      {
        id: 'unpaired_electrons',
        labelEn: 'Unpaired Electrons (n)',
        labelAr: 'الإلكترونات المفردة (n)',
        value: n,
        unit: 'e⁻',
        status: n > 0 ? 'optimal' : 'normal',
      },
      {
        id: 'magnetic_moment',
        labelEn: 'Magnetic Moment (μ)',
        labelAr: 'العزم المغناطيسي (μ)',
        value: magneticMomentBM.toFixed(2),
        unit: 'BM',
        status: isParamagnetic ? 'optimal' : 'normal',
      },
      {
        id: 'mass_deflection',
        labelEn: 'Gouy Deflection (Δm)',
        labelAr: 'انحراف الوزن الظاهري (Δm)',
        value: massDeltaMg >= 0 ? `+${massDeltaMg.toFixed(2)}` : massDeltaMg.toFixed(2),
        unit: 'mg',
        status: massDeltaMg > 0 ? 'optimal' : massDeltaMg < 0 ? 'warning' : 'normal',
      },
      {
        id: 'furnace_temp',
        labelEn: 'Furnace Temp (T)',
        labelAr: 'حرارة الفرن الصناعي (T)',
        value: params.furnaceTempC,
        unit: '°C',
        status: params.furnaceTempC >= 700 ? 'warning' : 'normal',
      },
    ];
  }, [n, magneticMomentBM, isParamagnetic, massDeltaMg, params.furnaceTempC]);

  // Multimeter Reading
  const dmmReading: DMMReading = useMemo(() => {
    let displayString = '';
    let secondaryString = '';
    let unit = '';
    let val = 0;

    switch (dmmMode) {
      case 'apparent_mass':
        val = apparentMassG;
        displayString = apparentMassG.toFixed(4);
        unit = 'g';
        secondaryString = isArabic ? 'الكتلة الكلية الظاهرية' : 'APPARENT MASS';
        break;
      case 'mass_delta':
        val = massDeltaMg;
        displayString = massDeltaMg >= 0 ? `+${massDeltaMg.toFixed(2)}` : massDeltaMg.toFixed(2);
        unit = 'mg';
        secondaryString = massDeltaMg >= 0 ? 'PARAMAGNETIC' : 'DIAMAGNETIC';
        break;
      case 'magnetic_moment':
        val = magneticMomentBM;
        displayString = magneticMomentBM.toFixed(2);
        unit = 'BM';
        secondaryString = isArabic ? `إلكترونات مفردة n=${n}` : `UNPAIRED n=${n}`;
        break;
      case 'susceptibility':
        val = molarSusceptibility;
        displayString = molarSusceptibility.toString();
        unit = '10⁻⁶';
        secondaryString = 'MOLAR SUSCEPTIBILITY';
        break;
    }

    return {
      mode: 'voltage_dc',
      value: val,
      displayString,
      secondaryString,
      unit,
      voltageDC: val,
      voltageAC: 0,
      currentDC: massDeltaMg,
      resistance: molarSusceptibility,
      continuityBeep: false,
      isOverload: false,
    };
  }, [dmmMode, apparentMassG, massDeltaMg, magneticMomentBM, molarSusceptibility, isArabic, n]);

  // Dual-Trace Oscilloscope
  const oscilloscopeSignals: [WaveformSignal, WaveformSignal] = useMemo(() => {
    const B = params.electromagnetFieldT;
    const mu = magneticMomentBM;

    const ch1: WaveformSignal = {
      amplitude: B * 1.5,
      frequency: 1.0,
      phaseDeg: 0,
      type: 'sine',
    };

    const ch2: WaveformSignal = {
      amplitude: Math.min(4.5, mu * B * 0.8),
      frequency: 1.0,
      phaseDeg: 30,
      type: 'sine',
    };

    return [ch1, ch2];
  }, [params.electromagnetFieldT, magneticMomentBM]);

  // Canvas Viewport Rendering Handler
  const handleRenderViewport = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      if (isLight) {
        grad.addColorStop(0, '#f8fafc');
        grad.addColorStop(1, '#e2e8f0');
      } else {
        grad.addColorStop(0, '#090d16');
        grad.addColorStop(1, '#020617');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.15)' : 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ==========================================
      // MODULE 1: ORBITAL BOX FILLING & HUND'S RULE
      // ==========================================
      if (params.module === 'orbital_studio') {
        const cx = width / 2;
        const cy = height / 2;

        // Title header
        ctx.save();
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `استوديو الأوربيتالات والتوزيع الإلكتروني: ${currentMetal.nameAr} (${currentMetal.symbol}) - حالة التأكسد (${safeOxState > 0 ? `+${safeOxState}` : '٠'})`
            : `Orbital Studio & Hund's Rule: ${currentMetal.nameEn} (${currentMetal.symbol}) - State (${safeOxState > 0 ? `+${safeOxState}` : '0'})`,
          cx,
          32
        );

        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#10b981';
        ctx.fillText(
          `${currentMetal.electronConfig}  →  [Ar] 4s${computedOccupancy.rem4s} 3d${computedOccupancy.rem3d}`,
          cx,
          54
        );
        ctx.restore();

        // 4s Subshell Box
        const box4sX = cx - 210;
        const boxY = cy - 25;
        const boxSize = 50;

        ctx.save();
        ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(box4sX, boxY, boxSize, boxSize, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#06b6d4';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('4s', box4sX + boxSize / 2, boxY + boxSize + 20);

        // Arrows in 4s
        const drawArrow = (x: number, y1: number, y2: number, color: string) => {
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          ctx.stroke();
          // Arrow head
          ctx.beginPath();
          const headDir = y2 < y1 ? -1 : 1;
          ctx.moveTo(x, y2);
          ctx.lineTo(x - 4, y2 - headDir * 6);
          ctx.lineTo(x + 4, y2 - headDir * 6);
          ctx.closePath();
          ctx.fill();
        };

        if (computedOccupancy.box4s.up) {
          drawArrow(box4sX + 16, boxY + 38, boxY + 12, '#38bdf8');
        }
        if (computedOccupancy.box4s.down) {
          drawArrow(box4sX + 34, boxY + 12, boxY + 38, '#f43f5e');
        }

        // 3d Subshell (5 boxes)
        const start3dX = cx - 110;
        const gap = 10;
        const orbitalNames = ['dxy', 'dyz', 'dxz', 'dx²-y²', 'dz²'];

        for (let i = 0; i < 5; i++) {
          const bx = start3dX + i * (boxSize + gap);
          ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.roundRect(bx, boxY, boxSize, boxSize, 8);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(orbitalNames[i], bx + boxSize / 2, boxY + boxSize + 20);

          const boxData = computedOccupancy.boxes3d[i];
          if (boxData.up) {
            drawArrow(bx + 16, boxY + 38, boxY + 12, '#4ade80');
          }
          if (boxData.down) {
            drawArrow(bx + 34, boxY + 12, boxY + 38, '#f43f5e');
          }
        }

        // Ionization 4s rule banner
        if (safeOxState > 0) {
          ctx.fillStyle = '#eab308';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? '⚡ قاعدة التأين: تخرج إلكترونات المستوى الخارجي 4s أولاً لكبر بعده عن النواة قبل إلكترونات 3d'
              : '⚡ 4s-First Ionization: Outer 4s electrons are removed before 3d electrons.',
            cx,
            cy + 85
          );
        }

        // Anomaly badge
        if (currentMetal.anomalous && safeOxState === 0) {
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? `⭐ توزيع شاذ: انتقال إلكترون من 4s إلى 3d يحقق نصف الامتلاء والاستقرار (طاقة أقل)`
              : `⭐ Anomalous Configuration: Half-filled / completely filled 3d stability maximized.`,
            cx,
            cy + 115
          );
        }

        // Summary Statistics Box
        ctx.fillStyle = isLight ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,42,0.8)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        const statW = Math.min(520, width - 40);
        ctx.beginPath();
        ctx.roundRect(cx - statW / 2, height - 70, statW, 55, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#1e293b' : '#e2e8f0';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `الإلكترونات المفردة n = ${n}  |  العزم المغناطيسي μ = ${magneticMomentBM.toFixed(2)} BM  |  ${isParamagnetic ? '🟢 مادة بارامغناطيسية (تنجذب للمجال)' : '⚪ مادة دايامغناطيسية (تتنافر)'}`
            : `Unpaired Electrons n = ${n}  |  Magnetic Moment μ = ${magneticMomentBM.toFixed(2)} BM  |  ${isParamagnetic ? '🟢 Paramagnetic (Attracted)' : '⚪ Diamagnetic (Repelled)'}`,
          cx,
          height - 40
        );

        ctx.restore();
      }

      // ==========================================
      // MODULE 2: GOUY MAGNETIC BALANCE SIMULATOR
      // ==========================================
      else if (params.module === 'gouy_balance') {
        const cx = width / 2;

        ctx.save();
        // Title
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `محاكي ميزان جوي المغناطيسي (Gouy Magnetic Balance) - قياس القابلية المغناطيسية`
            : `Historic Gouy Magnetic Balance Simulation - Magnetic Susceptibility Measurement`,
          cx,
          28
        );

        // Balance fulcrum and beam
        const fulcrumX = cx;
        const fulcrumY = 90;
        const beamLen = Math.min(220, width * 0.35);

        // Beam deflection angle proportional to mass delta
        // Max deflection ± 0.12 radians
        const angle = Math.max(-0.12, Math.min(0.12, (massDeltaMg / 60) * 0.08));

        ctx.save();
        ctx.translate(fulcrumX, fulcrumY);
        ctx.rotate(angle);

        // Balance Beam
        ctx.strokeStyle = isLight ? '#475569' : '#94a3b8';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(-beamLen, 0);
        ctx.lineTo(beamLen, 0);
        ctx.stroke();

        // Pointer Needle
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 65);
        ctx.stroke();

        // Pointer tip circle
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(0, 65, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Fulcrum Stand
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.moveTo(fulcrumX, fulcrumY);
        ctx.lineTo(fulcrumX - 14, fulcrumY + 50);
        ctx.lineTo(fulcrumX + 14, fulcrumY + 50);
        ctx.closePath();
        ctx.fill();

        // Scale behind pointer needle
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(fulcrumX, fulcrumY, 65, Math.PI * 0.4, Math.PI * 0.6);
        ctx.stroke();

        // Left Pan (Counterweights)
        const leftArmX = fulcrumX - beamLen * Math.cos(angle);
        const leftArmY = fulcrumY - beamLen * Math.sin(angle);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(leftArmX, leftArmY);
        ctx.lineTo(leftArmX, leftArmY + 90);
        ctx.stroke();

        // Pan plate
        ctx.fillStyle = isLight ? '#94a3b8' : '#475569';
        ctx.beginPath();
        ctx.roundRect(leftArmX - 25, leftArmY + 90, 50, 6, 3);
        ctx.fill();

        // Tare weights on pan
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.roundRect(leftArmX - 12, leftArmY + 76, 24, 14, 2);
        ctx.fill();

        // Right Arm (Suspension wire to sample tube in magnet gap)
        const rightArmX = fulcrumX + beamLen * Math.cos(angle);
        const rightArmY = fulcrumY + beamLen * Math.sin(angle);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(rightArmX, rightArmY);
        ctx.lineTo(rightArmX, rightArmY + 110);
        ctx.stroke();

        // Glass sample cylinder tube
        const tubeX = rightArmX - 10;
        const tubeY = rightArmY + 110;
        const tubeW = 20;
        const tubeH = 75;

        // Sample substance filling inside tube
        ctx.fillStyle = currentIon.colorHex;
        ctx.beginPath();
        ctx.roundRect(tubeX + 2, tubeY + 15, tubeW - 4, tubeH - 17, 4);
        ctx.fill();

        // Glass outline
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 2;
        ctx.strokeRect(tubeX, tubeY, tubeW, tubeH);

        // Electromagnet Pole Pieces (N & S)
        const magW = 60;
        const magH = 50;
        const magGap = 35;
        const magCenterY = tubeY + 45;

        // North Pole (Left)
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.roundRect(rightArmX - magGap - magW, magCenterY - magH / 2, magW, magH, 6);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('N', rightArmX - magGap - magW / 2, magCenterY + 6);

        // South Pole (Right)
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.roundRect(rightArmX + magGap, magCenterY - magH / 2, magW, magH, 6);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('S', rightArmX + magGap + magW / 2, magCenterY + 6);

        // Magnetic flux lines if B > 0
        if (params.electromagnetFieldT > 0.05) {
          ctx.strokeStyle = 'rgba(234, 179, 8, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          for (let dy = -16; dy <= 16; dy += 8) {
            ctx.beginPath();
            ctx.moveTo(rightArmX - magGap, magCenterY + dy);
            ctx.lineTo(rightArmX + magGap, magCenterY + dy);
            ctx.stroke();
          }
          ctx.setLineDash([]);
        }

        // Live Readout Dashboard
        ctx.fillStyle = isLight ? 'rgba(255,255,255,0.9)' : 'rgba(15,23,42,0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(20, height - 70, width - 40, 56, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `العينة: ${currentMetal.nameAr} (${safeOxState > 0 ? `+${safeOxState}` : '٠'}) | المجال B = ${params.electromagnetFieldT.toFixed(1)} تسلا | Δm = ${massDeltaMg >= 0 ? `+${massDeltaMg.toFixed(2)}` : massDeltaMg.toFixed(2)} مجم | الكتلة الظاهرية = ${apparentMassG.toFixed(4)} جم`
            : `Sample: ${currentMetal.nameEn} (${safeOxState > 0 ? `+${safeOxState}` : '0'}) | Field B = ${params.electromagnetFieldT.toFixed(1)} T | Δm = ${massDeltaMg >= 0 ? `+${massDeltaMg.toFixed(2)}` : massDeltaMg.toFixed(2)} mg | Apparent Mass = ${apparentMassG.toFixed(4)} g`,
          cx,
          height - 38
        );

        ctx.restore();
      }

      // ==========================================
      // MODULE 3: SPECTROPHOTOMETRY & COMPLEMENTARY COLORS
      // ==========================================
      else if (params.module === 'color_spectroscopy') {
        const cx = width / 2;
        const cy = height / 2;

        ctx.save();
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `استوديو قياس الطيف والألوان المتممة لأيونات العناصر الانتقالية المائية`
            : `Spectrophotometry & Complementary Colors Studio for Hydrated 3d Ions`,
          cx,
          28
        );

        // Light Source (Lamp)
        const lampX = 60;
        const lampY = cy - 30;

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(lampX, lampY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('White Light', lampX, lampY + 34);

        // Incident Polychromatic Beam
        const cuvetteX = cx - 70;
        const cuvetteY = cy - 70;
        const cuvetteW = 55;
        const cuvetteH = 90;

        const beamGrad = ctx.createLinearGradient(lampX + 20, lampY, cuvetteX, lampY);
        beamGrad.addColorStop(0, '#ffffff');
        beamGrad.addColorStop(0.2, '#f43f5e');
        beamGrad.addColorStop(0.4, '#eab308');
        beamGrad.addColorStop(0.6, '#22c55e');
        beamGrad.addColorStop(0.8, '#3b82f6');
        beamGrad.addColorStop(1, '#a855f7');

        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(lampX + 20, lampY);
        ctx.lineTo(cuvetteX, lampY);
        ctx.stroke();

        // Optical Cuvette
        ctx.fillStyle = currentIon.isColorless ? 'rgba(241, 245, 249, 0.4)' : currentIon.colorHex;
        ctx.beginPath();
        ctx.roundRect(cuvetteX, cuvetteY, cuvetteW, cuvetteH, 6);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255,255,255,0.85)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(currentIon.nameEn, cuvetteX + cuvetteW / 2, cuvetteY + cuvetteH + 18);

        // Transmitted Ray (Complementary Observed Color)
        const detectorX = cx + 80;
        ctx.strokeStyle = currentIon.isColorless ? 'rgba(255,255,255,0.85)' : currentIon.transmittedHex;
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(cuvetteX + cuvetteW, lampY);
        ctx.lineTo(detectorX, lampY);
        ctx.stroke();

        // Eye / Detector
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.roundRect(detectorX, lampY - 25, 45, 50, 8);
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Sensor', detectorX + 22, lampY + 36);

        // Complementary Color Wheel (Right Side)
        const wheelCX = Math.min(width - 95, cx + 185);
        const wheelCY = cy - 25;
        const wheelR = 55;

        const colorSlices = [
          { name: 'Red', color: '#ef4444', comp: 'Green' },
          { name: 'Orange', color: '#f97316', comp: 'Blue' },
          { name: 'Yellow', color: '#eab308', comp: 'Violet' },
          { name: 'Green', color: '#22c55e', comp: 'Red' },
          { name: 'Blue', color: '#3b82f6', comp: 'Orange' },
          { name: 'Violet', color: '#a855f7', comp: 'Yellow' },
        ];

        const sliceAngle = (Math.PI * 2) / colorSlices.length;
        for (let i = 0; i < colorSlices.length; i++) {
          ctx.beginPath();
          ctx.moveTo(wheelCX, wheelCY);
          ctx.arc(wheelCX, wheelCY, wheelR, i * sliceAngle, (i + 1) * sliceAngle);
          ctx.closePath();
          ctx.fillStyle = colorSlices[i].color;
          ctx.fill();
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Center hub of wheel
        ctx.fillStyle = isLight ? '#f8fafc' : '#0f172a';
        ctx.beginPath();
        ctx.arc(wheelCX, wheelCY, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 8px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Complementary', wheelCX, wheelCY - 2);
        ctx.fillText('Wheel', wheelCX, wheelCY + 8);

        // Information banner
        ctx.fillStyle = isLight ? 'rgba(255,255,255,0.9)' : 'rgba(15,23,42,0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(20, height - 70, width - 40, 56, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `اللون الممتص: ${currentIon.absorbedColorAr} (${currentIon.absorbedWavelengthNm > 0 ? `${currentIon.absorbedWavelengthNm} نانومتر` : 'لا يمتص'})  |  اللون المتمم المشاهد: ${currentIon.colorAr}  |  النفاذية T = ${spectroData.transmittance.toFixed(1)}%`
            : `Absorbed Hue: ${currentIon.absorbedColorEn} (~${currentIon.absorbedWavelengthNm} nm)  |  Transmitted Complementary Color: ${currentIon.colorEn}  |  Transmittance T = ${spectroData.transmittance.toFixed(1)}%`,
          cx,
          height - 38
        );

        ctx.restore();
      }

      // ==========================================
      // MODULE 4: INDUSTRIAL BLAST FURNACE & MIDREX
      // ==========================================
      else if (params.module === 'iron_metallurgy') {
        const cx = width / 2;

        ctx.save();
        // Header
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          params.furnaceType === 'blast_furnace'
            ? isArabic
              ? `الفرن العالي (Blast Furnace): اختزال خامات الهيماتيت بفحم الكوك والغاز المختزل CO`
              : `Blast Furnace: Thermal Reduction of Hematite Ore by Metallurgical Coke & CO`
            : isArabic
            ? `فرن مدركس (Midrex Direct Reduction): اختزال الهيماتيت بالغاز المائي (CO + H₂)`
            : `Midrex Direct Reduction Reactor: Reduction using Natural Water Gas (CO + H₂)`,
          cx,
          26
        );

        // Furnace Stack Silhouette
        const furnaceTopW = 75;
        const furnaceBellyW = 150;
        const furnaceBottomW = 110;
        const furnaceTopY = 46;
        const furnaceBottomY = height - 85;

        // Furnace wall path
        ctx.beginPath();
        // Top
        ctx.moveTo(cx - furnaceTopW / 2, furnaceTopY);
        ctx.lineTo(cx + furnaceTopW / 2, furnaceTopY);
        // Down to belly
        const bellyY = furnaceTopY + (furnaceBottomY - furnaceTopY) * 0.45;
        ctx.lineTo(cx + furnaceBellyW / 2, bellyY);
        // Down to hearth
        ctx.lineTo(cx + furnaceBottomW / 2, furnaceBottomY);
        ctx.lineTo(cx - furnaceBottomW / 2, furnaceBottomY);
        ctx.lineTo(cx - furnaceBellyW / 2, bellyY);
        ctx.closePath();

        // Gradient interior based on temperature
        const furnaceGrad = ctx.createLinearGradient(0, furnaceTopY, 0, furnaceBottomY);
        furnaceGrad.addColorStop(0, '#475569');
        furnaceGrad.addColorStop(0.4, '#b45309');
        furnaceGrad.addColorStop(0.7, '#ea580c');
        furnaceGrad.addColorStop(1, '#ef4444');

        ctx.fillStyle = furnaceGrad;
        ctx.fill();

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Molten Iron & Slag at Bottom
        const hearthH = 30;
        const moltenIronH = 16;
        const slagH = 14;

        // Slag (CaSiO3) Layer - floats because density < iron
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.rect(cx - furnaceBottomW / 2 + 3, furnaceBottomY - hearthH, furnaceBottomW - 6, slagH);
        ctx.fill();

        // Molten Iron (Fe) Layer - sinks to bottom
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.rect(cx - furnaceBottomW / 2 + 3, furnaceBottomY - moltenIronH, furnaceBottomW - 6, moltenIronH - 2);
        ctx.fill();

        // Labels for slag and iron
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'خَبَث CaSiO₃' : 'Slag CaSiO₃', cx, furnaceBottomY - hearthH + 10);
        ctx.fillText(isArabic ? 'حديد منصهر Fe' : 'Molten Iron Fe', cx, furnaceBottomY - 4);

        // Animated heat rising particles
        const t = animTick;
        for (let i = 0; i < 18; i++) {
          const px = cx - 35 + ((i * 37 + t * 2) % 70);
          const py = furnaceBottomY - 35 - ((i * 23 + t * 3) % (furnaceBottomY - furnaceTopY - 40));
          ctx.fillStyle = i % 2 === 0 ? 'rgba(253, 224, 71, 0.8)' : 'rgba(239, 68, 68, 0.8)';
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Tuyeres (Hot Air / Gas Inlets)
        const tuyereY = furnaceBottomY - 40;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(cx - furnaceBottomW / 2 - 25, tuyereY - 6, 25, 12);
        ctx.fillRect(cx + furnaceBottomW / 2, tuyereY - 6, 25, 12);

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText(isArabic ? 'هواء ساخن' : 'Hot Air', cx - furnaceBottomW / 2 - 12, tuyereY - 9);
        ctx.fillText(isArabic ? 'هواء ساخن' : 'Hot Air', cx + furnaceBottomW / 2 + 12, tuyereY - 9);

        // Reduction Stage Banner
        ctx.fillStyle = isLight ? 'rgba(255,255,255,0.92)' : 'rgba(15,23,42,0.92)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(15, height - 72, width - 30, 58, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = metallurgyStatus.color;
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          `${isArabic ? metallurgyStatus.stageAr : metallurgyStatus.stageEn} (${params.furnaceTempC} °C)`,
          cx,
          height - 50
        );

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 11px monospace';
        ctx.fillText(
          isArabic ? metallurgyStatus.eqAr : metallurgyStatus.eqEn,
          cx,
          height - 30
        );

        ctx.restore();
      }
    },
    [
      params,
      currentMetal,
      safeOxState,
      currentIon,
      computedOccupancy,
      n,
      magneticMomentBM,
      isParamagnetic,
      apparentMassG,
      massDeltaMg,
      metallurgyStatus,
      spectroData,
      animTick,
      isLight,
      isArabic,
    ]
  );

  return (
    <VirtualLabShell
      definition={TRANSITION_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab as any}
      telemetry={metrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscilloscopeSignals[0]}
      oscilloscopeCh2={oscilloscopeSignals[1]}
      currentXValue={params.furnaceTempC}
      currentYValue={magneticMomentBM}
      onResetSimulation={resetParams}
    >
      <div className="space-y-6">
        {/* Module Subtabs Navigator */}
        <div
          className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
            isContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isArabic ? 'موديول المعمل:' : 'Active Module:'}</span>
            </span>

            <div className="relative min-w-[270px] sm:min-w-[340px]">
              <select
                value={params.module}
                onChange={(e) => updateParam('module', e.target.value as TransitionModule)}
                className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                  isContrast
                    ? 'bg-black text-white border-cyan-400'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-slate-950 border-slate-800 text-slate-200'
                }`}
              >
                <option value="orbital_studio">
                  ⚛️ {isArabic ? '١. استوديو الأوربيتالات والتوزيع الإلكتروني (3d)' : '1. 3d Electronic Orbitals Studio & Hund’s Rule'}
                </option>
                <option value="gouy_balance">
                  ⚖️ {isArabic ? '٢. ميزان جوي وقياس العزم المغناطيسي' : '2. Gouy Magnetic Balance & Susceptibility'}
                </option>
                <option value="color_spectroscopy">
                  🌈 {isArabic ? '٣. طيف امتصاص الأيونات والألوان المتممة' : '3. Hydrated Ions Color Spectrophotometry'}
                </option>
                <option value="iron_metallurgy">
                  🔥 {isArabic ? '٤. أفران تعدين الحديد (الفرن العالي ومدركس)' : '4. Blast & Midrex Metallurgy Reactors'}
                </option>
              </select>
              <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* DMM Mode Quick Switcher */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(['apparent_mass', 'mass_delta', 'magnetic_moment', 'susceptibility'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDmmMode(mode)}
                className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                  dmmMode === mode
                    ? 'bg-cyan-600 text-white font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {mode === 'apparent_mass'
                  ? isArabic ? 'الكتلة' : 'Mass'
                  : mode === 'mass_delta'
                  ? 'Δm'
                  : mode === 'magnetic_moment'
                  ? 'μ (BM)'
                  : 'χ_M'}
              </button>
            ))}
          </div>
        </div>

        {/* 10 3d Periodic Metals Selector Strip */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-black text-cyan-400 flex items-center gap-1.5">
              <Atom className="w-4 h-4" />
              <span>{isArabic ? 'شريط عناصر السلسلة الانتقالية الأولى (3d):' : 'First Transition Series Elements (3d):'}</span>
            </h4>
            <span className="text-[10px] text-slate-400">
              {isArabic ? 'اختر عنصراً لفحص تركيبه الإلكتروني وخواصه' : 'Select an element to inspect orbitals and properties'}
            </span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {(Object.keys(TRANSITION_ELEMENTS) as TransitionMetalKey[]).map((key) => {
              const el = TRANSITION_ELEMENTS[key];
              const isSelected = params.metalKey === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    updateParam('metalKey', key);
                    updateParam('oxidationState', el.defaultOxState);
                  }}
                  className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg scale-105 font-black'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-cyan-500/50'
                  }`}
                >
                  <span className="text-[9px] font-mono opacity-60">{el.z}</span>
                  <span className="text-sm font-black">{el.symbol}</span>
                  <span className="text-[9px] truncate max-w-full">{isArabic ? el.nameAr : el.nameEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Simulation Viewport */}
        <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950">
          <CanvasSimulationViewport
            id="transition-canvas-viewport"
            lang={lang}
            minHeight={390}
            onRender={handleRenderViewport}
          />
        </div>

        {/* Dynamic Controls Grid */}
        <div
          className={`p-5 rounded-2xl border space-y-4 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>{isArabic ? 'لوحة التحكم والمتغيرات الفيزيائية والكيميائية:' : 'Physical & Chemical Parameters:'}</span>
            </h4>
          </div>

          {/* MODULE 1: ORBITAL STUDIO CONTROLS */}
          {params.module === 'orbital_studio' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isArabic ? 'حالة التأكسد المحاكية:' : 'Oxidation State:'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {currentMetal.availableOxStates.map((ox) => (
                    <button
                      key={ox}
                      onClick={() => updateParam('oxidationState', ox)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                        safeOxState === ox
                          ? 'bg-cyan-600 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {ox === 0 ? (isArabic ? '٠ (ذرة متعادلة)' : '0 (Neutral)') : `+${ox}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-300 mb-1">
                  {isArabic ? 'تعريف الاتحاد الدولي (IUPAC):' : 'IUPAC Transition Definition:'}
                </span>
                <div
                  className={`p-2.5 rounded-xl border text-[11px] leading-relaxed ${
                    currentMetal.isIupacTransition
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                      : 'bg-rose-950/20 border-rose-800/40 text-rose-300 font-bold'
                  }`}
                >
                  {isArabic ? currentMetal.iupacRationaleAr : currentMetal.iupacRationaleEn}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-300 mb-1">
                  {isArabic ? 'الاستخدامات الصناعية والطبية في المنهج:' : 'Curriculum Applications:'}
                </span>
                <ul className="list-disc list-inside text-[11px] space-y-1 text-slate-400">
                  {(isArabic ? currentMetal.curriculumUsesAr : currentMetal.curriculumUsesEn).slice(0, 2).map((use, idx) => (
                    <li key={idx} className="truncate">{use}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* MODULE 2: GOUY BALANCE CONTROLS */}
          {params.module === 'gouy_balance' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isArabic ? 'حالة التأكسد للعينة:' : 'Sample Oxidation State:'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {currentMetal.availableOxStates.map((ox) => (
                    <button
                      key={ox}
                      onClick={() => updateParam('oxidationState', ox)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                        safeOxState === ox
                          ? 'bg-cyan-600 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {ox === 0 ? '0' : `+${ox}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-slate-300">{isArabic ? 'شدة المجال الكهرومغناطيسي B:' : 'Electromagnet Field B:'}</span>
                  <span className="font-mono font-black text-amber-400">{params.electromagnetFieldT.toFixed(2)} Tesla</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="2.0"
                  step="0.1"
                  value={params.electromagnetFieldT}
                  onChange={(e) => updateParam('electromagnetFieldT', parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-slate-300">{isArabic ? 'كتلة العينة الابتدائية m₀:' : 'Initial Sample Mass m₀:'}</span>
                  <span className="font-mono font-black text-cyan-400">{params.sampleInitialMassG.toFixed(3)} g</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="10.0"
                  step="0.5"
                  value={params.sampleInitialMassG}
                  onChange={(e) => updateParam('sampleInitialMassG', parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>
            </div>
          )}

          {/* MODULE 3: SPECTROPHOTOMETRY CONTROLS */}
          {params.module === 'color_spectroscopy' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isArabic ? 'الأيون المائي المفحوص:' : 'Hydrated Ion Under Test:'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {currentMetal.availableOxStates.map((ox) => (
                    <button
                      key={ox}
                      onClick={() => updateParam('oxidationState', ox)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                        safeOxState === ox
                          ? 'bg-cyan-600 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {ox === 0 ? 'Atom' : `+${ox}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-slate-300">{isArabic ? 'الطول الموجي للضوء الساقط λ:' : 'Incident Wavelength λ:'}</span>
                  <span className="font-mono font-black text-purple-400">{params.spectroWavelengthNm} nm</span>
                </div>
                <input
                  type="range"
                  min="380"
                  max="750"
                  step="5"
                  value={params.spectroWavelengthNm}
                  onChange={(e) => updateParam('spectroWavelengthNm', parseInt(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl border border-slate-700 shadow-inner shrink-0"
                  style={{ backgroundColor: currentIon.colorHex }}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block">{isArabic ? currentIon.nameAr : currentIon.nameEn}</span>
                  <span className="text-[11px] text-slate-400">
                    {isArabic ? `اللون المشاهد: ${currentIon.colorAr}` : `Observed Color: ${currentIon.colorEn}`}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 4: METALLURGY REACTOR CONTROLS */}
          {params.module === 'iron_metallurgy' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isArabic ? 'نوع الفرن الصناعي:' : 'Industrial Reactor:'}
                  </label>
                  <select
                    value={params.furnaceType}
                    onChange={(e) => updateParam('furnaceType', e.target.value as FurnaceType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 font-bold"
                  >
                    <option value="blast_furnace">🔥 {isArabic ? 'الفرن العالي (Blast Furnace)' : 'Blast Furnace (CO from Coke)'}</option>
                    <option value="midrex">⚡ {isArabic ? 'فرن مدركس (Midrex Direct Reduction)' : 'Midrex (Water Gas CO+H₂)'}</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'درجة الحرارة T:' : 'Operating Temp T:'}</span>
                    <span className="font-mono font-black text-amber-400">{params.furnaceTempC} °C</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="1150"
                    step="25"
                    value={params.furnaceTempC}
                    onChange={(e) => updateParam('furnaceTempC', parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isArabic ? 'نوع السبيكة المحضرة:' : 'Synthesized Alloy Type:'}
                  </label>
                  <select
                    value={params.selectedAlloy}
                    onChange={(e) => updateParam('selectedAlloy', e.target.value as AlloyType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 font-bold"
                  >
                    <option value="interstitial">{isArabic ? 'سبيكة بينية (الصلب Fe + C)' : 'Interstitial Alloy (Carbon Steel)'}</option>
                    <option value="substitutional">{isArabic ? 'سبيكة استبدالية (ستانلس ستيل Fe + Cr)' : 'Substitutional (Stainless Fe-Cr)'}</option>
                    <option value="intermetallic">{isArabic ? 'سبيكة بينفلزية (السيمنتيت Fe₃C)' : 'Intermetallic (Cementite Fe₃C)'}</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={params.isLimestonePresent}
                      onChange={(e) => updateParam('isLimestonePresent', e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span>{isArabic ? 'إضافة الحجر الجيري CaCO₃ (لتكوين الخَبَث)' : 'Limestone (Slag former)'}</span>
                  </label>
                </div>
              </div>

              {/* Alloy Explanation Callout */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                {params.selectedAlloy === 'interstitial' && (
                  <p className="text-slate-300">
                    <span className="font-bold text-amber-400">{isArabic ? 'السبيكة البينية (حديد وصلب): ' : 'Interstitial Alloy: '}</span>
                    {isArabic
                      ? 'تدخل ذرات الكربون صغيرة الحجم في المسافات البينية للشبكة البلورية لذرات الحديد، فتمنع انزلاق الطبقات فوق بعضها، مما يزيد صلابة الفلز ويغير خواصه المغناطيسية ودرجات انصهاره.'
                      : 'Small carbon atoms occupy the interstitial voids of the iron crystalline lattice, preventing atomic slip planes and dramatically enhancing tensile strength and hardness.'}
                  </p>
                )}
                {params.selectedAlloy === 'substitutional' && (
                  <p className="text-slate-300">
                    <span className="font-bold text-cyan-400">{isArabic ? 'السبيكة الاستبدالية (الحديد والكروم / النيكل): ' : 'Substitutional Alloy: '}</span>
                    {isArabic
                      ? 'تستبدل بعض ذرات الفلز الأصلي بذرات فلز آخر له نفس نصف القطر والشكل البلوري والخواص الكيميائية (مثل الصلب الذي لا يصدأ Fe + Cr، وسبيكة الذهب والنحاس).'
                      : 'Host metal atoms are substituted by alloy atoms possessing virtually identical atomic radii, crystal structure, and chemical properties (e.g. Stainless Steel Fe-Cr).'}
                  </p>
                )}
                {params.selectedAlloy === 'intermetallic' && (
                  <p className="text-slate-300">
                    <span className="font-bold text-rose-400">{isArabic ? 'السبيكة البينفلزية (السيمنتيت Fe₃C والديورألومين): ' : 'Intermetallic Alloy: '}</span>
                    {isArabic
                      ? 'تتحد العناصر المكونة للسبيكة اتحاداً كيميائياً وتتكون مركبات كيميائية صلبة لا تخضع صيغتها لقوانين التكافؤ المعروفة، وتقع عناصرها في مجموعات مختلفة من الجدول الدوري.'
                      : 'Constituent elements chemically bond to form distinct stoichiometric compounds defying standard valence rules (e.g. Cementite Fe₃C, Duralumin Al-Ni, Al-Cu); extremely hard and brittle.'}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Egyptian Curriculum Core Exam Insights Card */}
        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            <span>{isArabic ? 'ملاحظات وتطبيقات الامتحان الوزاري للثانوية العامة (الباب الأول):' : 'Egyptian Curriculum Core Exam Highlights:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تعريف العنصر الانتقالي وعناصر الخارصين' : 'Transition Element Definition & Zn'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'العنصر الانتقالي هو العنصر الذي تكون فيه أوربيتالات d أو f مشغولة بالإلكترونات ولكنها غير ممتلئة تماماً سواء في الحالة الذرية أو في أي حالة من حالات تأكسده. لذلك فالنحاس انتقالي (Cu²⁺ هو 3d⁹)، بينما الخارصين والزنك ليس عنصراً انتقالياً لأن 3d ممتلئ تماماً (3d¹⁰) في الحالة الذرية وحالة التأكسد (+2).'
                  : 'By IUPAC definition, d-orbitals must be partially filled in the ground state or in any common oxidation state. Cu is a transition element because Cu²⁺ is 3d⁹; Zn is NOT because 3d is completely filled (3d¹⁰) in both elemental and +2 states.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'أكسدة Fe²⁺ مقابل Mn²⁺' : 'Fe²⁺ vs Mn²⁺ Oxidation Tendency'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'يسهل أكسدة Fe²⁺ إلى Fe³⁺ لأن Fe³⁺ يمتلك مستوى 3d نصف ممتلئ (3d⁵) وهو أكثر استقراراً، بينما يصعب أكسدة Mn²⁺ إلى Mn³⁺ لأن Mn²⁺ يمتلك بالفعل مستوى 3d⁵ نصف ممتلئ ومستقر، وأكسدته تؤدي إلى كسر حالة الاستقرار هذه.'
                  : 'Fe²⁺ easily oxidizes to Fe³⁺ because Fe³⁺ achieves half-filled 3d⁵ stability. Conversely, Mn²⁺ resists oxidation to Mn³⁺ because Mn²⁺ is already in the stable 3d⁵ configuration.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الفرن العالي ومدركس: مقارنة الغازات' : 'Blast vs Midrex Reducing Agents'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'العامل المختزل في الفرن العالي: أول أكسيد الكربون (CO) المحضر من فحم الكوك (C). العامل المختزل في فرن مدركس: الغاز المائي (خليط CO و H₂) المحضر من الغاز الطبيعي (الميثان CH₄) بواسطة ثاني أكسيد الكربون وبخار الماء بوجود عامل حفاز.'
                  : 'Blast Furnace reducing agent is CO derived from metallurgical coke. Midrex reducing agent is water gas (CO + H₂) catalytically reformed from natural methane (CH₄) using CO₂ and steam.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};
