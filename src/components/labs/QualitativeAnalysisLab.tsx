import React, { useRef, useCallback, useMemo } from 'react';
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
  drawProceduralFlame,
  drawMetallicCylinder,
  drawGlowingParticle,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Flame,
  Sparkles,
  Eye,
  Zap,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type LabMode = 'anions' | 'cations' | 'flame_spectrometry';
export type TestType = 'main' | 'confirmatory';
export type ReagentVolume = 'drops' | 'stoichiometric' | 'excess';
export type TestStripType = 'none' | 'starch' | 'dichromate' | 'lead_acetate' | 'ammonia_rod';

export interface QualitativeParams {
  labMode: LabMode;
  anionId: string;
  cationId: string;
  flameCationId: string;
  testType: TestType;
  reagentVolume: ReagentVolume;
  isHeating: boolean;
  stripType: TestStripType;
  stirringSpeed: number;
}

export interface QualitativeSimState {
  transmittancePercent: number;
  turbidityNTU: number;
  solutionPH: number;
  gasEvolvedPpm: number;
  precipitateMassMg: number;
  flameWavelengthNm: number;
  isDissolvedInExcess: boolean;
  stripColor: string;
}

export interface AnionData {
  id: string;
  nameEn: string;
  nameAr: string;
  formula: string;
  formulaTex: string;
  groupEn: string;
  groupAr: string;
  groupReagentEn: string;
  groupReagentAr: string;
  mainObservationEn: string;
  mainObservationAr: string;
  mainEquationTex: string;
  mainLiquidColor: string;
  mainPptColor: string | null;
  mainHasGas: boolean;
  mainGasNameEn: string | null;
  mainGasNameAr: string | null;
  mainGasColor: string | null;
  confirmatoryReagentEn: string;
  confirmatoryReagentAr: string;
  confirmatoryObservationEn: string;
  confirmatoryObservationAr: string;
  confirmatoryEquationTex: string;
  confirmatoryLiquidColor: string;
  confirmatoryPptColor: string | null;
  confirmatoryHasGas: boolean;
  confirmatoryGasNameEn: string | null;
  confirmatoryGasNameAr: string | null;
  confirmatoryGasColor: string | null;
  heatRequiredForPpt?: boolean;
  blackensOnHeat?: boolean;
  solubleInExcess?: boolean;
  slowlySolubleInExcess?: boolean;
  insolubleInExcess?: boolean;
  associatedStrip?: TestStripType;
}

export interface CationData {
  id: string;
  nameEn: string;
  nameAr: string;
  formula: string;
  formulaTex: string;
  groupEn: string;
  groupAr: string;
  groupReagentEn: string;
  groupReagentAr: string;
  mainObservationEn: string;
  mainObservationAr: string;
  mainEquationTex: string;
  mainLiquidColor: string;
  mainPptColor: string;
  confirmatoryReagentEn: string;
  confirmatoryReagentAr: string;
  confirmatoryObservationEn: string;
  confirmatoryObservationAr: string;
  confirmatoryEquationTex: string;
  confirmatoryLiquidColor: string;
  confirmatoryPptColor: string;
  dissolvesInExcessNaOH?: boolean;
  excessColor?: string;
  flameColor?: string;
  flameWavelengthNm?: number;
}

export interface FlameData {
  id: string;
  elementEn: string;
  elementAr: string;
  symbol: string;
  colorNameEn: string;
  colorNameAr: string;
  flameColorHex: string;
  peakWavelengthNm: number;
  spectralDescriptionEn: string;
  spectralDescriptionAr: string;
}

// 12 Egyptian Syllabus Anions
export const ANIONS_CATALOG: AnionData[] = [
  {
    id: 'carbonate',
    nameEn: 'Carbonate',
    nameAr: 'أنيون الكربونات',
    formula: 'CO₃²⁻',
    formulaTex: '\\text{CO}_3^{2-}',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Vigorous effervescence; evolution of colorless CO₂ gas which turns clear limewater turbid for a short time.',
    mainObservationAr: 'فوران شديد وتصاعد غاز ثاني أكسيد الكربون CO₂ عديم اللون الذي يعكر ماء الجير الرائق لفترة قصيرة.',
    mainEquationTex: '\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow',
    mainLiquidColor: 'rgba(224, 242, 254, 0.3)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'CO₂ (Carbon Dioxide)',
    mainGasNameAr: 'ثاني أكسيد الكربون CO₂',
    mainGasColor: 'rgba(255, 255, 255, 0.7)',
    confirmatoryReagentEn: 'Magnesium Sulfate Solution (MgSO₄)',
    confirmatoryReagentAr: 'محلول كبريتات الماغنسيوم (MgSO₄)',
    confirmatoryObservationEn: 'White precipitate of MgCO₃ forms immediately in the cold without heating.',
    confirmatoryObservationAr: 'يتكون راسب أبيض على البارد دون تسخين من كربونات الماغنسيوم MgCO₃.',
    confirmatoryEquationTex: '\\text{Na}_2\\text{CO}_3 + \\text{MgSO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{MgCO}_3\\downarrow',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.4)',
    confirmatoryPptColor: '#ffffff',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
  {
    id: 'bicarbonate',
    nameEn: 'Bicarbonate',
    nameAr: 'أنيون البيكربونات',
    formula: 'HCO₃⁻',
    formulaTex: '\\text{HCO}_3^-',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Effervescence; colorless CO₂ gas evolves, turning limewater turbid.',
    mainObservationAr: 'فوران وتصاعد غاز CO₂ الذي يعكر ماء الجير الرائق لفترة قصيرة.',
    mainEquationTex: '\\text{NaHCO}_3 + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow',
    mainLiquidColor: 'rgba(224, 242, 254, 0.3)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'CO₂ Gas',
    mainGasNameAr: 'غاز ثاني أكسيد الكربون CO₂',
    mainGasColor: 'rgba(255, 255, 255, 0.7)',
    confirmatoryReagentEn: 'Magnesium Sulfate Solution (MgSO₄)',
    confirmatoryReagentAr: 'محلول كبريتات الماغنسيوم (MgSO₄)',
    confirmatoryObservationEn: 'No precipitate in the cold; a white precipitate of MgCO₃ appears ONLY after heating.',
    confirmatoryObservationAr: 'لا يتكون راسب على البارد، ويتكون راسب أبيض بعد التسخين لانحلال البيكربونات بالحرارة.',
    confirmatoryEquationTex: '\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.4)',
    confirmatoryPptColor: '#ffffff',
    confirmatoryHasGas: true,
    confirmatoryGasNameEn: 'CO₂ on Boiling',
    confirmatoryGasNameAr: 'غاز CO₂ عند الغليان',
    confirmatoryGasColor: 'rgba(255, 255, 255, 0.6)',
    heatRequiredForPpt: true,
  },
  {
    id: 'sulfite',
    nameEn: 'Sulfite',
    nameAr: 'أنيون الكبريتيت',
    formula: 'SO₃²⁻',
    formulaTex: '\\text{SO}_3^{2-}',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Pungent SO₂ gas evolves; turns paper wet with acidified K₂Cr₂O₇ from orange to green.',
    mainObservationAr: 'تصاعد غاز SO₂ ذي الرائحة النفاذة يخضر ورقة مبللة بثاني كرومات البوتاسيوم المحمضة بحمض الكبريتيك.',
    mainEquationTex: '\\text{Na}_2\\text{SO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow',
    mainLiquidColor: 'rgba(240, 253, 244, 0.3)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'SO₂ (Pungent odor)',
    mainGasNameAr: 'غاز SO₂ نفاذ الرائحة',
    mainGasColor: 'rgba(254, 240, 138, 0.5)',
    associatedStrip: 'dichromate',
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'White precipitate of silver sulfite (Ag₂SO₃) forms, which turns black upon heating.',
    confirmatoryObservationAr: 'يتكون راسب أبيض من كبريتيت الفضة Ag₂SO₃ يسود بالتسخين لتكون كبريتيد الفضة.',
    confirmatoryEquationTex: '\\text{Na}_2\\text{SO}_3 + 2\\text{AgNO}_3 \\to 2\\text{NaNO}_3 + \\text{Ag}_2\\text{SO}_3\\downarrow',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.3)',
    confirmatoryPptColor: '#f8fafc',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
    blackensOnHeat: true,
  },
  {
    id: 'thiosulfate',
    nameEn: 'Thiosulfate',
    nameAr: 'أنيون الثيوكبريتات',
    formula: 'S₂O₃²⁻',
    formulaTex: '\\text{S}_2\\text{O}_3^{2-}',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Pungent SO₂ gas evolves along with a characteristic yellow colloidal suspension of sulfur in the solution.',
    mainObservationAr: 'تصاعد غاز SO₂ النفاذ مع ظهور راسب أصفر معلق من الكبريت S في المحلول.',
    mainEquationTex: '\\text{Na}_2\\text{S}_2\\text{O}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow + \\text{S}\\downarrow',
    mainLiquidColor: 'rgba(254, 240, 138, 0.6)',
    mainPptColor: '#facc15',
    mainHasGas: true,
    mainGasNameEn: 'SO₂ Gas + Colloidal S',
    mainGasNameAr: 'غاز SO₂ + كبريت معلق S',
    mainGasColor: 'rgba(254, 240, 138, 0.6)',
    confirmatoryReagentEn: 'Standard Iodine Solution (I₂ in KI)',
    confirmatoryReagentAr: 'محلول اليود البني في يوديد البوتاسيوم',
    confirmatoryObservationEn: 'The brown color of iodine is completely discharged due to formation of colorless sodium tetrathionate.',
    confirmatoryObservationAr: 'يزول لون محلول اليود البني تماماً لتكون رباعي ثيونات الصوديوم Na₂S₄O₆ عديم اللون.',
    confirmatoryEquationTex: '2\\text{Na}_2\\text{S}_2\\text{O}_3 + \\text{I}_2 \\to 2\\text{NaI} + \\text{Na}_2\\text{S}_4\\text{O}_6',
    confirmatoryLiquidColor: 'rgba(248, 250, 252, 0.2)',
    confirmatoryPptColor: null,
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
  {
    id: 'sulfide',
    nameEn: 'Sulfide',
    nameAr: 'أنيون الكبريتيد',
    formula: 'S²⁻',
    formulaTex: '\\text{S}^{2-}',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Hydrogen sulfide gas (H₂S) evolves with a foul rotten-egg odor, blackening paper wet with lead(II) acetate.',
    mainObservationAr: 'تصاعد غاز كبريتيد الهيدروجين H₂S كريه الرائحة (كرائحة البيض الفاسد) الذي يسود ورقة مبللة بأسيتات الرصاص II.',
    mainEquationTex: '\\text{Na}_2\\text{S} + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{S}\\uparrow',
    mainLiquidColor: 'rgba(241, 245, 249, 0.3)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'H₂S (Rotten eggs odor)',
    mainGasNameAr: 'غاز H₂S كريه الرائحة',
    mainGasColor: 'rgba(203, 213, 225, 0.7)',
    associatedStrip: 'lead_acetate',
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'Black precipitate of silver sulfide (Ag₂S) forms instantly.',
    confirmatoryObservationAr: 'يتكون راسب أسود فوري من كبريتيد الفضة Ag₂S.',
    confirmatoryEquationTex: '\\text{Na}_2\\text{S} + 2\\text{AgNO}_3 \\to 2\\text{NaNO}_3 + \\text{Ag}_2\\text{S}\\downarrow',
    confirmatoryLiquidColor: 'rgba(15, 23, 42, 0.6)',
    confirmatoryPptColor: '#0f172a',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
  {
    id: 'nitrite',
    nameEn: 'Nitrite',
    nameAr: 'أنيون النيتريت',
    formula: 'NO₂⁻',
    formulaTex: '\\text{NO}_2^-',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Colorless nitric oxide gas (NO) evolves, turning into dense reddish-brown NO₂ at the mouth of the tube.',
    mainObservationAr: 'تصاعد غاز أكسيد النيتريك NO عديم اللون الذي يتحول عند فوهة الأنبوبة إلى أبخرة بنية حمراء من ثاني أكسيد النيتروجين NO₂.',
    mainEquationTex: '2\\text{NaNO}_2 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{NO}_2\\uparrow + \\text{NO}\\uparrow',
    mainLiquidColor: 'rgba(219, 234, 254, 0.4)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'NO turning to reddish-brown NO₂',
    mainGasNameAr: 'غاز NO يتحول لبني محمر NO₂',
    mainGasColor: 'rgba(180, 83, 9, 0.8)',
    confirmatoryReagentEn: 'Acidified Potassium Permanganate (KMnO₄ + H₂SO₄)',
    confirmatoryReagentAr: 'محلول برمنجنات البوتاسيوم المحمضة بحمض الكبريتيك',
    confirmatoryObservationEn: 'The deep purple-violet color of potassium permanganate is completely discharged.',
    confirmatoryObservationAr: 'يزول اللون البنفسجي لمحلول برمنجنات البوتاسيوم نتيجة أكسدة النيتريت إلى نترات.',
    confirmatoryEquationTex: '5\\text{NaNO}_2 + 2\\text{KMnO}_4 + 3\\text{H}_2\\text{SO}_4 \\to 5\\text{NaNO}_3 + \\text{K}_2\\text{SO}_4 + 2\\text{MnSO}_4 + 3\\text{H}_2\\text{O}',
    confirmatoryLiquidColor: 'rgba(248, 250, 252, 0.3)',
    confirmatoryPptColor: null,
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
  {
    id: 'chloride',
    nameEn: 'Chloride',
    nameAr: 'أنيون الكلوريد',
    formula: 'Cl⁻',
    formulaTex: '\\text{Cl}^-',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    groupReagentEn: 'Concentrated Sulfuric Acid (H₂SO₄) + Gentle Heat',
    groupReagentAr: 'حمض كبريتيك مركز مع التسخين الهادئ',
    mainObservationEn: 'Colorless HCl gas evolves, creating dense white fumes of NH₄Cl with an ammonia-soaked glass rod.',
    mainObservationAr: 'تصاعد غاز كلوريد الهيدروجين HCl عديم اللون، الذي يكون سحباً بيضاء كثيفة مع ساق زجاجية مبللة بمحلول النشادر NH₄OH.',
    mainEquationTex: '2\\text{NaCl} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{HCl}\\uparrow',
    mainLiquidColor: 'rgba(248, 250, 252, 0.3)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'White fumes of NH₄Cl',
    mainGasNameAr: 'سحب بيضاء كثيفة NH₄Cl',
    mainGasColor: 'rgba(255, 255, 255, 0.9)',
    associatedStrip: 'ammonia_rod',
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'White curdy precipitate of AgCl forms, turning violet in sunlight, and completely soluble in concentrated ammonia.',
    confirmatoryObservationAr: 'يتكون راسب أبيض من كلوريد الفضة AgCl يصير بنفسجياً في الضوء، ويذوب بسهولة وبسرعة في محلول النشادر المركز.',
    confirmatoryEquationTex: '\\text{NaCl} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgCl}\\downarrow',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.4)',
    confirmatoryPptColor: '#ffffff',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
    solubleInExcess: true,
  },
  {
    id: 'bromide',
    nameEn: 'Bromide',
    nameAr: 'أنيون البروميد',
    formula: 'Br⁻',
    formulaTex: '\\text{Br}^-',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    groupReagentEn: 'Concentrated Sulfuric Acid (H₂SO₄) + Heat',
    groupReagentAr: 'حمض كبريتيك مركز مع التسخين',
    mainObservationEn: 'Colorless HBr evolves, partially oxidized to orange-red bromine vapors (Br₂) that turn starch paper yellow-orange.',
    mainObservationAr: 'تصاعد غاز HBr الذي يتأكسد جزئياً إلى أبخرة بروم برتقالية حمراء Br₂ تصفر ورقة مبللة بمحلول النشا.',
    mainEquationTex: '2\\text{NaBr} + 2\\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{SO}_2 + 2\\text{H}_2\\text{O} + \\text{Br}_2\\uparrow',
    mainLiquidColor: 'rgba(251, 146, 60, 0.4)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'Orange-red Br₂ vapors',
    mainGasNameAr: 'أبخرة البروم البرتقالية Br₂',
    mainGasColor: 'rgba(234, 88, 12, 0.85)',
    associatedStrip: 'starch',
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'Creamy yellowish-white precipitate of AgBr forms, darkening in light, and dissolving slowly in concentrated ammonia.',
    confirmatoryObservationAr: 'يتكون راسب أبيض مصفر من بروميد الفضة AgBr يصير داكناً في الضوء، ويذوب ببطء في محلول النشادر المركز.',
    confirmatoryEquationTex: '\\text{NaBr} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgBr}\\downarrow',
    confirmatoryLiquidColor: 'rgba(254, 240, 138, 0.3)',
    confirmatoryPptColor: '#fef08a',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
    slowlySolubleInExcess: true,
  },
  {
    id: 'iodide',
    nameEn: 'Iodide',
    nameAr: 'أنيون اليوديد',
    formula: 'I⁻',
    formulaTex: '\\text{I}^-',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    groupReagentEn: 'Concentrated Sulfuric Acid (H₂SO₄) + Heat',
    groupReagentAr: 'حمض كبريتيك مركز مع التسخين',
    mainObservationEn: 'Colorless HI gas oxidizes to violet iodine vapors (I₂) which turn starch paper deep blue.',
    mainObservationAr: 'تصاعد غاز HI الذي يتأكسد إلى أبخرة يود بنفسجية مميزة I₂ تزرق ورقة مبللة بمحلول النشا.',
    mainEquationTex: '2\\text{NaI} + 2\\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{SO}_2 + 2\\text{H}_2\\text{O} + \\text{I}_2\\uparrow',
    mainLiquidColor: 'rgba(168, 85, 247, 0.4)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'Violet I₂ vapors',
    mainGasNameAr: 'أبخرة اليود البنفسجية I₂',
    mainGasColor: 'rgba(168, 85, 247, 0.85)',
    associatedStrip: 'starch',
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'Bright yellow precipitate of AgI forms, completely insoluble in concentrated ammonia solution.',
    confirmatoryObservationAr: 'يتكون راسب أصفر من يوديد الفضة AgI لا يذوب إطلاقاً في محلول النشادر المركز.',
    confirmatoryEquationTex: '\\text{NaI} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgI}\\downarrow',
    confirmatoryLiquidColor: 'rgba(253, 224, 71, 0.3)',
    confirmatoryPptColor: '#eab308',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
    insolubleInExcess: true,
  },
  {
    id: 'nitrate',
    nameEn: 'Nitrate (Brown Ring Test)',
    nameAr: 'أنيون النترات (تجربة الحلقة البنية)',
    formula: 'NO₃⁻',
    formulaTex: '\\text{NO}_3^-',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    groupReagentEn: 'Conc. H₂SO₄ + Copper Turnings',
    groupReagentAr: 'حمض كبريتيك مركز وخراطة نحاس',
    mainObservationEn: 'Dense reddish-brown NO₂ fumes evolve, greatly intensifying upon addition of copper turnings.',
    mainObservationAr: 'تصاعد أبخرة بنية حمراء من غاز ثاني أكسيد النيتروجين NO₂، تزداد كثافتها بشدة عند إضافة خراطة النحاس.',
    mainEquationTex: '4\\text{HNO}_3 + \\text{Cu} \\to \\text{Cu(NO}_3)_2 + 2\\text{H}_2\\text{O} + 2\\text{NO}_2\\uparrow',
    mainLiquidColor: 'rgba(180, 83, 9, 0.5)',
    mainPptColor: null,
    mainHasGas: true,
    mainGasNameEn: 'Dense Reddish-Brown NO₂',
    mainGasNameAr: 'أبخرة بنية حمراء NO₂',
    mainGasColor: 'rgba(180, 83, 9, 0.9)',
    confirmatoryReagentEn: 'Fresh FeSO₄ + Concentrated H₂SO₄ carefully down tube wall',
    confirmatoryReagentAr: 'كبريتات حديد II حديثة التحضير + قطرات كبريتيك مركز باحتراس على الجدار',
    confirmatoryObservationEn: 'A distinctive brown ring forms at the liquid junction ([Fe(H₂O)₅NO]SO₄), which disappears upon shaking or heating.',
    confirmatoryObservationAr: 'تتكون حلقة بنية عند السطح الفاصل بين الحمض والمحلول [Fe(H₂O)₅NO]SO₄ تزول بالرج أو التسخين.',
    confirmatoryEquationTex: '\\text{FeSO}_4 + \\text{NO} \\to [\\text{Fe(H}_2\\text{O)}_5\\text{NO}]\\text{SO}_4',
    confirmatoryLiquidColor: 'rgba(120, 53, 15, 0.75)',
    confirmatoryPptColor: '#78350f',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
  {
    id: 'phosphate',
    nameEn: 'Phosphate',
    nameAr: 'أنيون الفوسفات',
    formula: 'PO₄³⁻',
    formulaTex: '\\text{PO}_4^{3-}',
    groupEn: 'Barium Chloride Solution Group',
    groupAr: 'مجموعة محلول كلوريد الباريوم',
    groupReagentEn: 'Barium Chloride Solution (BaCl₂)',
    groupReagentAr: 'محلول كلوريد الباريوم (BaCl₂)',
    mainObservationEn: 'White precipitate of barium phosphate Ba₃(PO₄)₂ forms, which IS SOLUBLE in dilute HCl.',
    mainObservationAr: 'يتكون راسب أبيض من فوسفات الباريوم Ba₃(PO₄)₂ يذوب في حمض الهيدروكلوريك المخفف.',
    mainEquationTex: '2\\text{Na}_3\\text{PO}_4 + 3\\text{BaCl}_2 \\to 6\\text{NaCl} + \\text{Ba}_3(\\text{PO}_4)_2\\downarrow',
    mainLiquidColor: 'rgba(241, 245, 249, 0.3)',
    mainPptColor: '#f1f5f9',
    mainHasGas: false,
    mainGasNameEn: null,
    mainGasNameAr: null,
    mainGasColor: null,
    confirmatoryReagentEn: 'Silver Nitrate Solution (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'Yellow precipitate of silver phosphate (Ag₃PO₄) forms, soluble in both dilute HNO₃ and ammonia solution.',
    confirmatoryObservationAr: 'يتكون راسب أصفر من فوسفات الفضة Ag₃PO₄ يذوب في كل من حمض النيتريك ومحلول النشادر.',
    confirmatoryEquationTex: '\\text{Na}_3\\text{PO}_4 + 3\\text{AgNO}_3 \\to 3\\text{NaNO}_3 + \\text{Ag}_3\\text{PO}_4\\downarrow',
    confirmatoryLiquidColor: 'rgba(253, 224, 71, 0.4)',
    confirmatoryPptColor: '#facc15',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
    solubleInExcess: true,
  },
  {
    id: 'sulfate',
    nameEn: 'Sulfate',
    nameAr: 'أنيون الكبريتات',
    formula: 'SO₄²⁻',
    formulaTex: '\\text{SO}_4^{2-}',
    groupEn: 'Barium Chloride Solution Group',
    groupAr: 'مجموعة محلول كلوريد الباريوم',
    groupReagentEn: 'Barium Chloride Solution (BaCl₂)',
    groupReagentAr: 'محلول كلوريد الباريوم (BaCl₂)',
    mainObservationEn: 'White precipitate of barium sulfate (BaSO₄) forms, which is INSOLUBLE in dilute HCl.',
    mainObservationAr: 'يتكون راسب أبيض من كبريتات الباريوم BaSO₄ لا يذوب في حمض الهيدروكلوريك المخفف.',
    mainEquationTex: '\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\to 2\\text{NaCl} + \\text{BaSO}_4\\downarrow',
    mainLiquidColor: 'rgba(248, 250, 252, 0.4)',
    mainPptColor: '#ffffff',
    mainHasGas: false,
    mainGasNameEn: null,
    mainGasNameAr: null,
    mainGasColor: null,
    confirmatoryReagentEn: 'Lead(II) Acetate Solution (Pb(CH₃COO)₂)',
    confirmatoryReagentAr: 'محلول أسيتات الرصاص II',
    confirmatoryObservationEn: 'White precipitate of lead(II) sulfate (PbSO₄) forms.',
    confirmatoryObservationAr: 'يتكون راسب أبيض من كبريتات الرصاص II (PbSO₄).',
    confirmatoryEquationTex: '\\text{Na}_2\\text{SO}_4 + \\text{Pb(CH}_3\\text{COO)}_2 \\to 2\\text{CH}_3\\text{COONa} + \\text{PbSO}_4\\downarrow',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.4)',
    confirmatoryPptColor: '#ffffff',
    confirmatoryHasGas: false,
    confirmatoryGasNameEn: null,
    confirmatoryGasNameAr: null,
    confirmatoryGasColor: null,
  },
];

// 6 Representative Cations from Egyptian Curriculum (Groups I, II, III, V)
export const CATIONS_CATALOG: CationData[] = [
  {
    id: 'lead',
    nameEn: 'Lead(II)',
    nameAr: 'كاتيون الرصاص الثنائي',
    formula: 'Pb²⁺',
    formulaTex: '\\text{Pb}^{2+}',
    groupEn: 'Analytical Group I',
    groupAr: 'المجموعة التحليلية الأولى',
    groupReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    groupReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'White precipitate of lead(II) chloride PbCl₂ forms, which dissolves in boiling water.',
    mainObservationAr: 'يتكون راسب أبيض من كلوريد الرصاص PbCl₂ يذوب بالماء المغلي.',
    mainEquationTex: '\\text{Pb}^{2+} + 2\\text{Cl}^- \\to \\text{PbCl}_2\\downarrow',
    mainLiquidColor: 'rgba(241, 245, 249, 0.3)',
    mainPptColor: '#ffffff',
    confirmatoryReagentEn: 'Potassium Iodide Solution (KI)',
    confirmatoryReagentAr: 'محلول يوديد البوتاسيوم (KI)',
    confirmatoryObservationEn: 'Brilliant yellow crystalline precipitate of lead iodide (PbI₂) - "Golden Rain".',
    confirmatoryObservationAr: 'يتكون راسب أصفر براق من يوديد الرصاص PbI₂ (المطر الذهبي).',
    confirmatoryEquationTex: '\\text{Pb}^{2+} + 2\\text{I}^- \\to \\text{PbI}_2\\downarrow',
    confirmatoryLiquidColor: 'rgba(253, 224, 71, 0.4)',
    confirmatoryPptColor: '#eab308',
  },
  {
    id: 'copper',
    nameEn: 'Copper(II)',
    nameAr: 'كاتيون النحاس الثنائي',
    formula: 'Cu²⁺',
    formulaTex: '\\text{Cu}^{2+}',
    groupEn: 'Analytical Group II',
    groupAr: 'المجموعة التحليلية الثانية',
    groupReagentEn: 'Hydrogen Sulfide in Acidic Medium (H₂S + HCl)',
    groupReagentAr: 'غاز كبريتيد الهيدروجين في وسط حمضي (H₂S + HCl)',
    mainObservationEn: 'Black precipitate of copper(II) sulfide (CuS) forms, soluble in hot dilute nitric acid.',
    mainObservationAr: 'يتكون راسب أسود من كبريتيد النحاس II (CuS) يذوب في حمض النيتريك الساخن.',
    mainEquationTex: '\\text{CuSO}_4 + \\text{H}_2\\text{S} \\to \\text{H}_2\\text{SO}_4 + \\text{CuS}\\downarrow',
    mainLiquidColor: 'rgba(15, 23, 42, 0.5)',
    mainPptColor: '#0f172a',
    confirmatoryReagentEn: 'Ammonium Hydroxide (NH₄OH) dropwise, then excess',
    confirmatoryReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH) قطرة بقطرة ثم بوفرة',
    confirmatoryObservationEn: 'Pale blue Cu(OH)₂ precipitate dissolves in excess NH₄OH to form deep royal blue [Cu(NH₃)₄]²⁺.',
    confirmatoryObservationAr: 'يتكون راسب أزرق فاتح يذوب في وفرة من النشادر ليعطي محلول أزرق قرمزي غامق معقد.',
    confirmatoryEquationTex: '\\text{Cu}^{2+} + 4\\text{NH}_3 \\to [\\text{Cu(NH}_3)_4]^{2+} \\text{ (Deep Royal Blue)}',
    confirmatoryLiquidColor: 'rgba(30, 58, 138, 0.85)',
    confirmatoryPptColor: '#1d4ed8',
    flameColor: '#10b981',
    flameWavelengthNm: 510,
  },
  {
    id: 'aluminum',
    nameEn: 'Aluminum',
    nameAr: 'كاتيون الألومنيوم',
    formula: 'Al³⁺',
    formulaTex: '\\text{Al}^{3+}',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    groupReagentEn: 'Ammonium Hydroxide Solution (NH₄OH)',
    groupReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'White gelatinous precipitate of Al(OH)₃ soluble in dilute mineral acids.',
    mainObservationAr: 'يتكون راسب أبيض جيلاتيني من هيدروكسيد الألومنيوم Al(OH)₃ يذوب في الأحماض المخففة.',
    mainEquationTex: '\\text{AlCl}_3 + 3\\text{NH}_4\\text{OH} \\to 3\\text{NH}_4\\text{Cl} + \\text{Al(OH)}_3\\downarrow',
    mainLiquidColor: 'rgba(241, 245, 249, 0.3)',
    mainPptColor: '#ffffff',
    confirmatoryReagentEn: 'Sodium Hydroxide (NaOH) dropwise, then excess',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH) قطرة بقطرة ثم بوفرة',
    confirmatoryObservationEn: 'White gelatinous precipitate completely dissolves in excess NaOH forming soluble sodium meta-aluminate.',
    confirmatoryObservationAr: 'يتكون راسب أبيض جيلاتيني يذوب تماماً في الزيادة من NaOH لتكون ميتا ألومينات الصوديوم الذائبة NaAlO₂.',
    confirmatoryEquationTex: '\\text{Al(OH)}_3 + \\text{NaOH} \\to \\text{NaAlO}_2 + 2\\text{H}_2\\text{O} \\text{ (Soluble)}',
    confirmatoryLiquidColor: 'rgba(241, 245, 249, 0.2)',
    confirmatoryPptColor: '#ffffff',
    dissolvesInExcessNaOH: true,
    excessColor: 'rgba(241, 245, 249, 0.1)',
  },
  {
    id: 'iron2',
    nameEn: 'Iron(II)',
    nameAr: 'كاتيون الحديد الثنائي',
    formula: 'Fe²⁺',
    formulaTex: '\\text{Fe}^{2+}',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    groupReagentEn: 'Ammonium Hydroxide Solution (NH₄OH)',
    groupReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'White precipitate rapidly turning dirty-green Fe(OH)₂ upon atmospheric exposure.',
    mainObservationAr: 'يتكون راسب أبيض يتحول سريعاً إلى أبيض مخضر (أخضر متسخ) من هيدروكسيد الحديد الثنائي Fe(OH)₂.',
    mainEquationTex: '\\text{FeSO}_4 + 2\\text{NH}_4\\text{OH} \\to (\\text{NH}_4)_2\\text{SO}_4 + \\text{Fe(OH)}_2\\downarrow',
    mainLiquidColor: 'rgba(34, 197, 94, 0.35)',
    mainPptColor: '#4ade80',
    confirmatoryReagentEn: 'Sodium Hydroxide Solution (NaOH)',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH)',
    confirmatoryObservationEn: 'White-green precipitate of Fe(OH)₂ forms, INSOLUBLE in excess NaOH.',
    confirmatoryObservationAr: 'راسب أبيض مخضر لا يذوب في الزيادة من هيدروكسيد الصوديوم.',
    confirmatoryEquationTex: '\\text{FeSO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + \\text{Fe(OH)}_2\\downarrow',
    confirmatoryLiquidColor: 'rgba(34, 197, 94, 0.5)',
    confirmatoryPptColor: '#16a34a',
    dissolvesInExcessNaOH: false,
  },
  {
    id: 'iron3',
    nameEn: 'Iron(III)',
    nameAr: 'كاتيون الحديد الثلاثي',
    formula: 'Fe³⁺',
    formulaTex: '\\text{Fe}^{3+}',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    groupReagentEn: 'Ammonium Hydroxide Solution (NH₄OH)',
    groupReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'Reddish-brown gelatinous precipitate of Fe(OH)₃ forms.',
    mainObservationAr: 'يتكون راسب جيلاتيني بني محمر من هيدروكسيد الحديد الثلاثي Fe(OH)₃.',
    mainEquationTex: '\\text{FeCl}_3 + 3\\text{NH}_4\\text{OH} \\to 3\\text{NH}_4\\text{Cl} + \\text{Fe(OH)}_3\\downarrow',
    mainLiquidColor: 'rgba(180, 83, 9, 0.5)',
    mainPptColor: '#b45309',
    confirmatoryReagentEn: 'Sodium Hydroxide Solution (NaOH)',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH)',
    confirmatoryObservationEn: 'Reddish-brown precipitate of Fe(OH)₃, insoluble in excess NaOH.',
    confirmatoryObservationAr: 'راسب جيلاتيني بني محمر لا يذوب في الزيادة من هيدروكسيد الصوديوم.',
    confirmatoryEquationTex: '\\text{FeCl}_3 + 3\\text{NaOH} \\to 3\\text{NaCl} + \\text{Fe(OH)}_3\\downarrow',
    confirmatoryLiquidColor: 'rgba(180, 83, 9, 0.65)',
    confirmatoryPptColor: '#9a3412',
    dissolvesInExcessNaOH: false,
  },
  {
    id: 'calcium',
    nameEn: 'Calcium (Flame Test)',
    nameAr: 'كاتيون الكالسيوم (كشف اللهب)',
    formula: 'Ca²⁺',
    formulaTex: '\\text{Ca}^{2+}',
    groupEn: 'Analytical Group V',
    groupAr: 'المجموعة التحليلية الخامسة',
    groupReagentEn: 'Ammonium Carbonate Solution ((NH₄)₂CO₃)',
    groupReagentAr: 'محلول كربونات الأمونيوم ((NH₄)₂CO₃)',
    mainObservationEn: 'White precipitate of CaCO₃ forms, soluble in dilute HCl and in water containing dissolved CO₂.',
    mainObservationAr: 'يتكون راسب أبيض من كربونات الكالسيوم CaCO₃ يذوب في حمض HCl المخفف وفي الماء المحتوي على CO₂.',
    mainEquationTex: '\\text{CaCl}_2 + (\\text{NH}_4)_2\\text{CO}_3 \\to 2\\text{NH}_4\\text{Cl} + \\text{CaCO}_3\\downarrow',
    mainLiquidColor: 'rgba(241, 245, 249, 0.4)',
    mainPptColor: '#ffffff',
    confirmatoryReagentEn: 'Dry Bunsen Flame Test (with Pt wire wet with conc. HCl)',
    confirmatoryReagentAr: 'كشف اللهب الجاف بسلك بلاتين مبلل بحمض HCl المركز',
    confirmatoryObservationEn: 'Non-luminous Bunsen flame is colored a characteristic Brick-Red (Red-Orange).',
    confirmatoryObservationAr: 'يتلون لهب بنزن غير المضيء بلون أحمر طوبي مميز جداً لكاتيون الكالسيوم.',
    confirmatoryEquationTex: '\\text{Ca}^{2+} + \\text{Flame} \\to \\text{Brick-Red (أحمر طوبي)}',
    confirmatoryLiquidColor: 'rgba(239, 68, 68, 0.4)',
    confirmatoryPptColor: '#ef4444',
    flameColor: '#ef4444',
    flameWavelengthNm: 622,
  },
];

// Bunsen Burner Flame Emission Species
export const FLAME_SPECIES: FlameData[] = [
  {
    id: 'Ca',
    elementEn: 'Calcium (Ca²⁺)',
    elementAr: 'الكالسيوم (Ca²⁺)',
    symbol: 'Ca',
    colorNameEn: 'Brick-Red (Red-Orange)',
    colorNameAr: 'أحمر طوبي مميز',
    flameColorHex: '#ef4444',
    peakWavelengthNm: 622,
    spectralDescriptionEn: 'Strong molecular band emission of CaOH at 622 nm in the orange-red spectral regime.',
    spectralDescriptionAr: 'انبعاث طيفي لجزيئات CaOH عند 622 نانومتر في النطاق البرتقالي المحمر.',
  },
  {
    id: 'Na',
    elementEn: 'Sodium (Na⁺)',
    elementAr: 'الصوديوم (Na⁺)',
    symbol: 'Na',
    colorNameEn: 'Intense Golden-Yellow',
    colorNameAr: 'أصفر ذهبي براق ومستمر',
    flameColorHex: '#eab308',
    peakWavelengthNm: 589,
    spectralDescriptionEn: 'Classic Sodium D-line doublet at 589.0 nm and 589.6 nm from 3p -> 3s transition.',
    spectralDescriptionAr: 'خط الصوديوم المزدوج D-line عند 589 نانومتر الناتج عن انتقال 3p إلى 3s.',
  },
  {
    id: 'K',
    elementEn: 'Potassium (K⁺)',
    elementAr: 'البوتاسيوم (K⁺)',
    symbol: 'K',
    colorNameEn: 'Pale Violet / Lilac',
    colorNameAr: 'بنفسجي فاتح (ليلكي)',
    flameColorHex: '#c084fc',
    peakWavelengthNm: 766,
    spectralDescriptionEn: 'Potassium doublet emission at 766.5 nm and 769.9 nm (best viewed through cobalt glass).',
    spectralDescriptionAr: 'انبعاث البوتاسيوم المزدوج عند 766 نانومتر (يُرى بوضوح عبر زجاج الكوبالت الأزرق).',
  },
  {
    id: 'Cu',
    elementEn: 'Copper (Cu²⁺)',
    elementAr: 'النحاس (Cu²⁺)',
    symbol: 'Cu',
    colorNameEn: 'Emerald / Blue-Green',
    colorNameAr: 'أزرق مخضر (زمردي)',
    flameColorHex: '#10b981',
    peakWavelengthNm: 510,
    spectralDescriptionEn: 'Copper chloride / oxide molecular bands centered around 510 nm.',
    spectralDescriptionAr: 'حزم جزيئات كلوريد وأكسيد النحاس المتمركزة حول 510 نانومتر.',
  },
  {
    id: 'Ba',
    elementEn: 'Barium (Ba²⁺)',
    elementAr: 'الباريوم (Ba²⁺)',
    symbol: 'Ba',
    colorNameEn: 'Apple Green',
    colorNameAr: 'أخضر تفاحي',
    flameColorHex: '#84cc16',
    peakWavelengthNm: 524,
    spectralDescriptionEn: 'Barium oxide and hydroxide green band spectrum peaking near 524 nm.',
    spectralDescriptionAr: 'طيف أكسيد وهيدروكسيد الباريوم الأخضر المتألق عند 524 نانومتر.',
  },
];

const INITIAL_PARAMS: QualitativeParams = {
  labMode: 'anions',
  anionId: 'carbonate',
  cationId: 'aluminum',
  flameCationId: 'Ca',
  testType: 'main',
  reagentVolume: 'stoichiometric',
  isHeating: false,
  stripType: 'none',
  stirringSpeed: 50,
};

const QUALITATIVE_PRESETS: LabPreset<QualitativeParams>[] = [
  {
    id: 'carbonate-main',
    nameEn: 'Carbonate Effervescence & Limewater',
    nameAr: 'فوران الكربونات وتعكير ماء الجير',
    descriptionEn: 'Carbonate anion reaction with dilute HCl producing vigorous CO₂ gas evolution.',
    descriptionAr: 'تفاعل أنيون الكربونات مع حمض الهيدروكلوريك المخفف وفوران غاز ثاني أكسيد الكربون.',
    params: {
      labMode: 'anions',
      anionId: 'carbonate',
      testType: 'main',
      reagentVolume: 'stoichiometric',
      isHeating: false,
    },
  },
  {
    id: 'bicarbonate-confirm',
    nameEn: 'Bicarbonate Heating Differentiation',
    nameAr: 'التمييز بين البيكربونات بالتسخين',
    descriptionEn: 'Magnesium sulfate test: white MgCO₃ precipitate forms ONLY upon boiling.',
    descriptionAr: 'كشف كبريتات الماغنسيوم: لا يتكون راسب إلا بعد التسخين لانحلال البيكربونات.',
    params: {
      labMode: 'anions',
      anionId: 'bicarbonate',
      testType: 'confirmatory',
      reagentVolume: 'stoichiometric',
      isHeating: true,
    },
  },
  {
    id: 'aluminum-amphoteric',
    nameEn: 'Amphoteric Al(OH)₃ Dissolves in Excess NaOH',
    nameAr: 'ذوبان هيدروكسيد الألومنيوم في وفرة الصودا الكاوية',
    descriptionEn: 'Al(OH)₃ white precipitate completely redissolves in excess NaOH forming soluble NaAlO₂.',
    descriptionAr: 'ذوبان راسب هيدروكسيد الألومنيوم الجيلاتيني في وفرة من هيدروكسيد الصوديوم لتكون ميتا ألومينات الصوديوم.',
    params: {
      labMode: 'cations',
      cationId: 'aluminum',
      testType: 'confirmatory',
      reagentVolume: 'excess',
      isHeating: false,
    },
  },
  {
    id: 'nitrate-brown-ring',
    nameEn: 'Nitrate Brown Ring Complex',
    nameAr: 'مركب الحلقة البنية للنترات',
    descriptionEn: 'Formation of [Fe(H₂O)₅NO]SO₄ at the interface of fresh FeSO₄ and conc. H₂SO₄.',
    descriptionAr: 'تكون مركب الحلقة البنية بين كبريتات الحديد II الحديثة وحمض الكبريتيك المركز.',
    params: {
      labMode: 'anions',
      anionId: 'nitrate',
      testType: 'confirmatory',
      reagentVolume: 'stoichiometric',
      isHeating: false,
    },
  },
  {
    id: 'calcium-flame',
    nameEn: 'Calcium Brick-Red Flame Spectrometry',
    nameAr: 'طيف اللهب الأحمر الطوبي للكالسيوم',
    descriptionEn: 'Dry Bunsen burner flame test with platinum wire emitting at 622 nm.',
    descriptionAr: 'كشف اللهب الجاف بسلك البلاتين يعطي لوناً أحمر طوبياً بطول موجي 622 نانومتر.',
    params: {
      labMode: 'flame_spectrometry',
      flameCationId: 'Ca',
      isHeating: true,
    },
  },
];

const QUALITATIVE_PARAM_SCHEMA: LabParameterSchema<QualitativeParams> = {
  labMode: {
    key: 'labMode',
    labelEn: 'Analytical Domain',
    labelAr: 'المجال التحليلي',
    type: 'select',
    defaultValue: 'anions',
    options: [
      { value: 'anions', labelEn: 'Anion Identification (Acid Radicals)', labelAr: 'الكشف عن الأنيونات (الشقوق الحامضية)' },
      { value: 'cations', labelEn: 'Cation Identification (Basic Radicals)', labelAr: 'الكشف عن الكاتيونات (الشقوق القاعدية)' },
      { value: 'flame_spectrometry', labelEn: 'Bunsen Flame Spectrometry', labelAr: 'كشف لهب بنزن والتحليل الطيفي' },
    ],
    category: 'primary',
  },
  anionId: {
    key: 'anionId',
    labelEn: 'Target Anion',
    labelAr: 'الأنيون المراد الكشف عنه',
    type: 'select',
    defaultValue: 'carbonate',
    options: ANIONS_CATALOG.map((a) => ({
      value: a.id,
      labelEn: `${a.formula} - ${a.nameEn}`,
      labelAr: `${a.formula} - ${a.nameAr}`,
    })),
    category: 'primary',
    visibleIf: (p) => p.labMode === 'anions',
  },
  cationId: {
    key: 'cationId',
    labelEn: 'Target Cation',
    labelAr: 'الكاتيون المراد الكشف عنه',
    type: 'select',
    defaultValue: 'aluminum',
    options: CATIONS_CATALOG.map((c) => ({
      value: c.id,
      labelEn: `${c.formula} - ${c.nameEn}`,
      labelAr: `${c.formula} - ${c.nameAr}`,
    })),
    category: 'primary',
    visibleIf: (p) => p.labMode === 'cations',
  },
  flameCationId: {
    key: 'flameCationId',
    labelEn: 'Flame Metal Salt',
    labelAr: 'ملح الفلز لكشف اللهب',
    type: 'select',
    defaultValue: 'Ca',
    options: FLAME_SPECIES.map((f) => ({
      value: f.id,
      labelEn: `${f.symbol} - ${f.elementEn}`,
      labelAr: `${f.symbol} - ${f.elementAr}`,
    })),
    category: 'primary',
    visibleIf: (p) => p.labMode === 'flame_spectrometry',
  },
  testType: {
    key: 'testType',
    labelEn: 'Procedure Type',
    labelAr: 'نوع التجربة',
    type: 'select',
    defaultValue: 'main',
    options: [
      { value: 'main', labelEn: 'Main Test (التجربة الأساسية)', labelAr: 'التجربة الأساسية' },
      { value: 'confirmatory', labelEn: 'Confirmatory Test (التجربة التأكيدية)', labelAr: 'التجربة التأكيدية' },
    ],
    category: 'primary',
    visibleIf: (p) => p.labMode !== 'flame_spectrometry',
  },
  reagentVolume: {
    key: 'reagentVolume',
    labelEn: 'Reagent Addition Volume',
    labelAr: 'كمية الكاشف المضاف',
    type: 'select',
    defaultValue: 'stoichiometric',
    options: [
      { value: 'drops', labelEn: '1-2 Drops (قطرات محدودة)', labelAr: 'قطرات محدودة' },
      { value: 'stoichiometric', labelEn: 'Stoichiometric (كمية متكافئة)', labelAr: 'كمية متكافئة' },
      { value: 'excess', labelEn: 'Excess Reagent (بوفرة من الكاشف)', labelAr: 'بوفرة من الكاشف' },
    ],
    category: 'primary',
    visibleIf: (p) => p.labMode !== 'flame_spectrometry',
  },
  isHeating: {
    key: 'isHeating',
    labelEn: 'Bunsen Heating Under Tube',
    labelAr: 'تسخين لهب بنزن تحت الأنبوبة',
    type: 'boolean',
    defaultValue: false,
    category: 'secondary',
  },
  stripType: {
    key: 'stripType',
    labelEn: 'Reagent Test Strip / Rod',
    labelAr: 'الشريط الكاشف / الساق الزجاجية',
    type: 'select',
    defaultValue: 'none',
    options: [
      { value: 'none', labelEn: 'None', labelAr: 'بدون شريط' },
      { value: 'starch', labelEn: 'Starch-Soaked Paper (ورقة نشا)', labelAr: 'ورقة مبللة بمحلول النشا' },
      { value: 'dichromate', labelEn: 'Acidified Dichromate (ثاني كرومات)', labelAr: 'ورقة مبللة بثاني كرومات البوتاسيوم المحمضة' },
      { value: 'lead_acetate', labelEn: 'Lead Acetate Paper (أسيتات رصاص)', labelAr: 'ورقة مبللة بأسيتات الرصاص II' },
      { value: 'ammonia_rod', labelEn: 'Ammonia Glass Rod (ساق نشادر)', labelAr: 'ساق زجاجية مبللة بمحلول النشادر' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.labMode === 'anions',
  },
  stirringSpeed: {
    key: 'stirringSpeed',
    labelEn: 'Vortex Stirring Speed',
    labelAr: 'سرعة الرج والمزج',
    unit: '%',
    type: 'number',
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 50,
    category: 'secondary',
    visibleIf: (p) => p.labMode !== 'flame_spectrometry',
  },
};

const QUALITATIVE_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe-amphoteric',
    titleEn: 'Challenge 1: Amphoteric Hydroxides in Excess Alkali',
    titleAr: 'التحدي 1: الهيدروكسيدات المترددة في وفرة القلوي',
    scenarioEn:
      'A student precipitates Al³⁺ and Fe³⁺ separately using dropwise NaOH. The student then adds excess NaOH to both test tubes.',
    scenarioAr:
      'قام طالب بترسيب كاتيونات Al³⁺ و Fe³⁺ في أنبوبتين منفصلتين باستخدام قطرات من هيدروكسيد الصوديوم، ثم أضاف وفرة من NaOH لكليهما.',
    questionEn:
      'What happens to the white Al(OH)₃ precipitate versus the reddish-brown Fe(OH)₃ precipitate upon adding excess NaOH?',
    questionAr:
      'ماذا يحدث لراسب Al(OH)₃ الأبيض مقارنة براسب Fe(OH)₃ البني المحمر عند إضافة وفرة من محلول هيدروكسيد الصوديوم؟',
    optionsEn: [
      'Both precipitates remain completely insoluble because metal hydroxides do not react with basic solutions.',
      'The white Al(OH)₃ precipitate completely dissolves to form soluble sodium meta-aluminate (NaAlO₂), while Fe(OH)₃ remains insoluble.',
      'The reddish-brown Fe(OH)₃ dissolves while Al(OH)₃ remains insoluble.',
      'Both precipitates dissolve completely into clear solutions.',
    ],
    optionsAr: [
      'يبقى كلا الراسبين غير ذائبين لأن هيدروكسيدات الفلزات لا تتفاعل مع القواعد.',
      'يذوب راسب Al(OH)₃ الأبيض تماماً لتكون ميتا ألومينات الصوديوم الذائبة NaAlO₂، بينما يظل Fe(OH)₃ غير ذائب.',
      'يذوب راسب Fe(OH)₃ البني المحمر بينما يظل Al(OH)₃ راسباً دون ذوبان.',
      'يذوب كلا الراسبين تماماً ويتحولان إلى محاليل رائقة.',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Al(OH)₃ is an amphoteric hydroxide. It dissolves in excess NaOH forming water-soluble sodium meta-aluminate: Al(OH)₃ + NaOH -> NaAlO₂ + 2H₂O. Iron(III) hydroxide is basic only and is insoluble in excess alkali.',
    scientificExplanationAr:
      'هيدروكسيد الألومنيوم Al(OH)₃ هيدروكسيد متردد يذوب في وفرة هيدروكسيد الصوديوم لتكون ميتا ألومينات الصوديوم الذائبة في الماء: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O، بينما هيدروكسيد الحديد الثلاثي قاعدة صرفة لا تذوب في القلويات.',
  },
  {
    id: 'poe-carbonate-bicarbonate',
    titleEn: 'Challenge 2: Discriminating Carbonate vs Bicarbonate',
    titleAr: 'التحدي 2: التمييز بين الكربونات والبيكربونات',
    scenarioEn:
      'Two clear test tubes contain sodium carbonate and sodium bicarbonate solutions respectively. Magnesium sulfate solution (MgSO₄) is added to both.',
    scenarioAr:
      'أنبوبتان تحتويان على محلولي كربونات الصوديوم وبيكربونات الصوديوم على الترتيب، أضيف إلى كل منهما محلول كبريتات الماغنسيوم MgSO₄.',
    questionEn:
      'Why does MgSO₄ precipitate carbonate in the cold, but requires heating to precipitate bicarbonate?',
    questionAr:
      'لماذا يرسب محلول MgSO₄ الكربونات على البارد، بينما يتطلب تسخيناً لترسيب البيكربونات؟',
    optionsEn: [
      'Because magnesium carbonate (MgCO₃) is insoluble in cold water, while magnesium bicarbonate (Mg(HCO₃)₂) is soluble and decomposes into insoluble MgCO₃ only upon heating.',
      'Because bicarbonate ions are completely unreactive at room temperature.',
      'Because sulfuric acid forms and prevents precipitation in the cold.',
      'Because magnesium sulfate precipitates only at temperatures above 100°C.',
    ],
    optionsAr: [
      'لأن كربونات الماغنسيوم MgCO₃ شحيحة الذوبان في الماء البارد، بينما بيكربونات الماغنسيوم Mg(HCO₃)₂ ذائبة وتنحل بالحرارة إلى كربونات ماغنسيوم راسبة.',
      'لأن أيونات البيكربونات خاملة تماماً ولا تتفاعل عند درجة حرارة الغرفة.',
      'لأن حمض الكبريتيك يتكون ويمنع الترسيب على البارد.',
      'لأن كبريتات الماغنسيوم ترسب فقط عند درجات حرارة أعلى من 100 مئوية.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'MgCO₃ is water-insoluble and precipitates immediately in the cold: Na₂CO₃ + MgSO₄ -> Na₂SO₄ + MgCO₃↓. Mg(HCO₃)₂ is water-soluble; upon boiling, it undergoes thermal decomposition: Mg(HCO₃)₂ -> MgCO₃↓ + H₂O + CO₂↑.',
    scientificExplanationAr:
      'كربونات الماغنسيوم ملح غير ذائب في الماء يترسب فوراً على البارد: Na₂CO₃ + MgSO₄ → Na₂SO₄ + MgCO₃↓، أما بيكربونات الماغنسيوم فملح ذائب ينحل بالغليان إلى كربونات الماغنسيوم غير الذائبة: Mg(HCO₃)₂ → MgCO₃↓ + H₂O + CO₂↑.',
  },
  {
    id: 'poe-silver-halides',
    titleEn: 'Challenge 3: Silver Halides Solubility Gradient in Ammonia',
    titleAr: 'التحدي 3: تدرج ذوبانية هاليدات الفضة في محلول النشادر',
    scenarioEn:
      'Precipitates of silver chloride (AgCl), silver bromide (AgBr), and silver iodide (AgI) are treated with excess concentrated ammonium hydroxide (NH₄OH).',
    scenarioAr:
      'عولجت رواسب كلوريد الفضة AgCl وبروميد الفضة AgBr ويوديد الفضة AgI بوفرة من محلول هيدروكسيد الأمونيوم المركز (محلول النشادر).',
    questionEn:
      'What is the correct comparative rate and solubility behavior of these three silver halides in concentrated ammonia?',
    questionAr:
      'ما هو السلوك الصحيح ومعدل ذوبان هذه الرواسب الثلاثة في محلول النشادر المركز؟',
    optionsEn: [
      'AgCl dissolves rapidly and completely; AgBr dissolves slowly; AgI is completely insoluble in ammonia solution.',
      'All three halides dissolve rapidly and completely at identical rates.',
      'AgI dissolves first, followed by AgBr, while AgCl is completely insoluble.',
      'None of the three silver halides dissolve in ammonia solution.',
    ],
    optionsAr: [
      'يذوب AgCl بسرعة وسهولة، ويذوب AgBr ببطء، بينما AgI عديم الذوبان تماماً في محلول النشادر.',
      'تذوب الهاليدات الثلاثة فوراً وبنفس السرعة تماماً.',
      'يذوب AgI أولاً يليه AgBr، بينما AgCl لا يذوب إطلاقاً.',
      'لا يذوب أي من هاليدات الفضة الثلاثة في محلول النشادر.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'The solubility product Ksp drops drastically: AgCl (1.8×10⁻¹⁰) > AgBr (5.4×10⁻¹³) > AgI (8.5×10⁻¹⁷). The strong covalent lattice in AgI prevents formation of the soluble diamminesilver(I) complex [Ag(NH₃)₂]⁺.',
    scientificExplanationAr:
      'يقل حاصل الإذابة Ksp بشدة عبر المجموعة: AgCl أعلى حاصل إذابة فيذوب بسهولة، ثم AgBr يذوب ببطء، بينما AgI له أدنى حاصل إذابة وشبكة بلورية تمنع تكوين متراكب الفضة النشادرية الذائب.',
  },
];

const QUALITATIVE_LAB_DEF: LabDefinition<QualitativeParams, QualitativeSimState> = {
  id: 'qualitative-analysis-lab',
  subject: 'chemistry',
  chapterRef: 'Chapter 2: Qualitative Chemical Analysis (الأنيونات والكاتيونات)',
  titleEn: 'Qualitative Chemical Analysis Workbench',
  titleAr: 'معمل الكيمياء التحليلية والكشف عن الأنيونات والكاتيونات',
  subtitleEn: 'Systematic Anion & Cation Wet Chemistry, Effervescence, Precipitation, and Bunsen Flame Spectrometry',
  subtitleAr: 'منظومة الكشف المنظم عن الشقوق الحامضية والقاعدية وأطياف لهب بنزن الجافة',
  taglineEn: 'Tier-1 Analytical Chemistry Workbench',
  taglineAr: 'المنصة المعملية التحليلية المعيارية للثانوية العامة',

  objectives: [
    {
      id: 'obj-anions',
      textEn: 'Classify anions into Dilute HCl, Concentrated H₂SO₄, and BaCl₂ groups based on relative acid stability.',
      textAr: 'تصنيف الأنيونات إلى مجموعات حمض الهيدروكلوريك وحمض الكبريتيك المركز ومحلول كلوريد الباريوم وفق ثبات الأحماض.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj-amphoteric',
      textEn: 'Investigate the amphoteric behavior of aluminum hydroxide in excess strong alkali (NaOH) vs basic transition hydroxides.',
      textAr: 'استقصاء السلوك المتردد لهيدروكسيد الألومنيوم في وفرة الصودا الكاوية مقارنة بهيدروكسيدات الفلزات الانتقالية.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-flame',
      textEn: 'Correlate volatile metal cation dry flame emission colors with characteristic atomic emission wavelengths.',
      textAr: 'ربط ألوان كشف اللهب الجاف للكاتيونات المتطايرة بأطوالها الموجية الانبعاثية المميزة.',
      bloomLevel: 'apply',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-corrosive-acids',
      titleEn: 'Concentrated Acid & Toxic Gas Hazard',
      titleAr: 'تحذير الأحماض المركزة والغازات السامة',
      messageEn: 'Conc. H₂SO₄, HCl, and evolved gases (SO₂, H₂S, NO₂) are hazardous and irritating. Conduct in fume hood.',
      messageAr: 'حمض الكبريتيك المركز والغازات المتصاعدة (SO₂ و H₂S و NO₂) كاوية وسامة وتتطلب التهوية الجيدة وتجنب الاستنشاق المباشر.',
      severity: 'warning',
    },
    {
      id: 'warn-bunsen-flame',
      titleEn: 'High Temperature Bunsen Flame',
      titleAr: 'لهب بنزن عالي الحرارة',
      messageEn: 'Use heat-resistant crucible tongs and platinum wire. Never touch hot glass or flame.',
      messageAr: 'يجب استخدام ماسك أنابيب الاختبار وسلك البلاتين بحذر شديد لتفادي الحروق.',
      severity: 'info',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-hcl-rule',
      labelEn: 'Acid Displacement Law',
      labelAr: 'قانون إزاحة الأحماض الأقل ثباتاً',
      tex: '\\text{More Stable Acid} + \\text{Salt of Less Stable Acid} \\to \\text{Salt} + \\text{Gas}\\uparrow',
      descriptionEn: 'The more stable acid displaces the less stable acid from its solid salt in the form of an easily identifiable gas.',
      descriptionAr: 'الحمض الأكثر ثباتاً يطرد الحمض الأقل ثباتاً من أملاحه الصلبة في صورة غاز يسهل التعرف عليه بالرائحة أو الكواشف.',
    },
    {
      id: 'eq-amphoteric',
      labelEn: 'Amphoteric Meta-aluminate Formation',
      labelAr: 'تكون ميتا ألومينات الصوديوم الذائبة',
      tex: '\\text{Al(OH)}_3\\downarrow + \\text{NaOH} \\to \\text{NaAlO}_2 + 2\\text{H}_2\\text{O}',
      descriptionEn: 'Aluminum hydroxide dissolves in excess sodium hydroxide to form water-soluble sodium meta-aluminate.',
      descriptionAr: 'يذوب هيدروكسيد الألومنيوم في وفرة من الصودا الكاوية لتكون ميتا ألومينات الصوديوم الذائبة في الماء.',
    },
    {
      id: 'eq-brown-ring',
      labelEn: 'Brown Ring Nitrate Complex',
      labelAr: 'مركب الحلقة البنية',
      tex: '[\\text{Fe(H}_2\\text{O)}_5\\text{NO}]\\text{SO}_4',
      descriptionEn: 'Pentaaquanitrosyliron(II) sulfate formed at the boundary between fresh FeSO₄ and concentrated sulfuric acid.',
      descriptionAr: 'كبريتات خماسي مائي نتروزيل الحديد الثنائي المتكونة كحلقة بنية عند السطح الفاصل تزول بالرج أو التسخين.',
    },
  ],

  defaultParams: INITIAL_PARAMS,
  paramSchema: QUALITATIVE_PARAM_SCHEMA,
  presets: QUALITATIVE_PRESETS,
  poePrompts: QUALITATIVE_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Reagent Volume Ratio',
    xLabelAr: 'نسبة حجم الكاشف',
    xUnit: 'V/V₀',
    yLabelEn: 'Turbidity',
    yLabelAr: 'درجة العكارة الضوئية',
    yUnit: 'NTU',
  },
};

export const QualitativeAnalysisLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const lab = useVirtualLab<QualitativeParams, QualitativeSimState>({
    definition: QUALITATIVE_LAB_DEF,
  });

  const { params, updateParam, clock } = lab;

  const particlesRef = useRef<{ x: number; y: number; vy: number; radius: number; opacity: number; color: string }[]>([]);
  const flameTimeRef = useRef<number>(0);

  // Compute live qualitative physics & chemistry state
  const state: QualitativeSimState = useMemo(() => {
    let transmittance = 99.0;
    let turbidity = 1.0;
    let ph = 7.0;
    let gasPpm = 0;
    let pptMass = 0;
    let flameWavelength = 0;
    let isDissolved = false;
    let stripColor = '#ffffff';

    if (params.labMode === 'anions') {
      const anion = ANIONS_CATALOG.find((a) => a.id === params.anionId) || ANIONS_CATALOG[0];
      const isMain = params.testType === 'main';

      if (isMain) {
        if (anion.groupEn.includes('HCl')) {
          ph = 1.2;
        } else if (anion.groupEn.includes('H₂SO₄')) {
          ph = 0.5;
        } else {
          ph = 6.0;
        }

        if (anion.mainHasGas) {
          gasPpm = params.reagentVolume === 'drops' ? 120 : params.reagentVolume === 'stoichiometric' ? 650 : 1400;
        }

        if (anion.mainPptColor) {
          turbidity = params.reagentVolume === 'drops' ? 250 : params.reagentVolume === 'stoichiometric' ? 1200 : 1850;
          transmittance = Math.max(3, 100 - turbidity * 0.08);
          pptMass = params.reagentVolume === 'drops' ? 15 : params.reagentVolume === 'stoichiometric' ? 70 : 130;
        } else {
          turbidity = 2.0;
          transmittance = 96.5;
          pptMass = 0;
        }

        if (params.stripType === 'dichromate' && anion.id === 'sulfite') {
          stripColor = '#22c55e';
        } else if (params.stripType === 'lead_acetate' && anion.id === 'sulfide') {
          stripColor = '#0f172a';
        } else if (params.stripType === 'ammonia_rod' && anion.id === 'chloride') {
          stripColor = '#ffffff';
        } else if (params.stripType === 'starch') {
          if (anion.id === 'iodide') stripColor = '#1e3a8a';
          if (anion.id === 'bromide') stripColor = '#ea580c';
        }
      } else {
        if (anion.id === 'bicarbonate') {
          if (params.isHeating) {
            turbidity = 1100;
            transmittance = 8;
            pptMass = 65;
            gasPpm = 300;
          } else {
            turbidity = 2.5;
            transmittance = 98;
            pptMass = 0;
            gasPpm = 0;
          }
        } else if (anion.confirmatoryPptColor) {
          turbidity = params.reagentVolume === 'drops' ? 300 : 1350;
          transmittance = Math.max(2, 100 - turbidity * 0.075);
          pptMass = 80;
        } else {
          turbidity = 1.0;
          transmittance = 99.5;
          pptMass = 0;
        }
      }
    } else if (params.labMode === 'cations') {
      const cation = CATIONS_CATALOG.find((c) => c.id === params.cationId) || CATIONS_CATALOG[0];
      const isMain = params.testType === 'main';

      ph = isMain ? 9.5 : 12.8;

      if (cation.dissolvesInExcessNaOH && !isMain && params.reagentVolume === 'excess') {
        isDissolved = true;
        turbidity = 2.0;
        transmittance = 98.2;
        pptMass = 0;
      } else {
        turbidity = params.reagentVolume === 'drops' ? 350 : 1450;
        transmittance = Math.max(3, 100 - turbidity * 0.07);
        pptMass = params.reagentVolume === 'drops' ? 25 : 95;
      }

      if (cation.flameWavelengthNm) {
        flameWavelength = cation.flameWavelengthNm;
      }
    } else {
      const flame = FLAME_SPECIES.find((f) => f.id === params.flameCationId) || FLAME_SPECIES[0];
      flameWavelength = flame.peakWavelengthNm;
      transmittance = 85.0;
      turbidity = 0.5;
      ph = 7.0;
    }

    return {
      transmittancePercent: transmittance,
      turbidityNTU: turbidity,
      solutionPH: ph,
      gasEvolvedPpm: gasPpm,
      precipitateMassMg: pptMass,
      flameWavelengthNm: flameWavelength,
      isDissolvedInExcess: isDissolved,
      stripColor,
    };
  }, [params]);

  // Telemetry Cards
  const telemetryMetrics: LabTelemetryMetric[] = useMemo(() => {
    const metrics: LabTelemetryMetric[] = [
      {
        id: 'turbidity',
        labelEn: 'Turbidity (NTU)',
        labelAr: 'درجة العكارة الضوئية',
        value: state.turbidityNTU.toFixed(1),
        unit: 'NTU',
        status: state.turbidityNTU > 500 ? 'warning' : 'normal',
      },
      {
        id: 'transmittance',
        labelEn: 'Transmittance (T%)',
        labelAr: 'النفاذية الضوئية (T%)',
        value: state.transmittancePercent.toFixed(1),
        unit: '%',
        status: state.transmittancePercent < 20 ? 'alert' : 'normal',
      },
      {
        id: 'ph',
        labelEn: 'Electrometric pH',
        labelAr: 'الرقم الهيدروجيني pH',
        value: state.solutionPH.toFixed(2),
        unit: '',
        status: state.solutionPH < 3 || state.solutionPH > 11 ? 'warning' : 'optimal',
      },
    ];

    if (params.labMode === 'flame_spectrometry' || state.flameWavelengthNm > 0) {
      metrics.push({
        id: 'wavelength',
        labelEn: 'Peak Emission λ',
        labelAr: 'الطول الموجي للذروة',
        value: state.flameWavelengthNm.toFixed(0),
        unit: 'nm',
        status: 'optimal',
      });
    } else {
      metrics.push({
        id: 'gas',
        labelEn: 'Evolved Gas Exposure',
        labelAr: 'الغاز المتصاعد',
        value: state.gasEvolvedPpm.toFixed(0),
        unit: 'ppm',
        status: state.gasEvolvedPpm > 500 ? 'alert' : 'normal',
      });
    }

    return metrics;
  }, [params.labMode, state]);

  // DMM Reading for Photometer / Turbidity Meter
  const dmmReading: DMMReading = useMemo(() => ({
    mode: 'DCV',
    value: state.transmittancePercent,
    displayString: `${state.transmittancePercent.toFixed(1)} %T`,
    secondaryString: `NTU: ${state.turbidityNTU.toFixed(0)} | pH: ${state.solutionPH.toFixed(2)}`,
    unit: '%T',
    voltageDC: state.transmittancePercent * 0.1,
    voltageAC: 0.0,
    currentDC: state.solutionPH * 0.001,
    resistance: state.turbidityNTU,
    continuityBeep: false,
    isOverload: false,
  }), [state]);

  // Dual Trace Oscilloscope Signals
  const oscCh1: WaveformSignal = useMemo(() => {
    const points: [number, number][] = [];
    const peak = state.flameWavelengthNm || 550;
    for (let i = 0; i < 100; i++) {
      const lambda = 400 + (350 * i) / 100;
      const val = Math.exp(-Math.pow((lambda - peak) / 25, 2)) * 4.5;
      points.push([lambda, val]);
    }
    return {
      id: 'ch1',
      label: isArabic ? 'طيف الانبعاث الطيفي' : 'Spectrometric Emission',
      color: '#06b6d4',
      amplitude: 4.5,
      frequency: 1,
      phase: 0,
      phaseDeg: 0,
      type: 'sine',
      points,
    };
  }, [state.flameWavelengthNm, isArabic]);

  const oscCh2: WaveformSignal = useMemo(() => {
    const points: [number, number][] = [];
    const turb = Math.min(5, state.turbidityNTU / 250);
    for (let i = 0; i < 100; i++) {
      const t = i / 100;
      const noise = (Math.sin(i * 12) + Math.cos(i * 23)) * 0.25;
      points.push([t, turb + noise]);
    }
    return {
      id: 'ch2',
      label: isArabic ? 'استجابة قياس العكارة' : 'Nephelometer Turbidity',
      color: '#eab308',
      amplitude: 5,
      frequency: 1,
      phase: 0,
      phaseDeg: 90,
      type: 'sine',
      points,
    };
  }, [state.turbidityNTU, isArabic]);

  // Canvas Viewport Renderer
  // High-Performance Realistic Canvas Viewport Renderer
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _vState: LabViewportState,
      _dpr?: number,
      time?: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      const t = (time ? time : performance.now()) * 0.001;
      flameTimeRef.current = t;

      // Draw Bench Surface
      const benchY = height * 0.78;
      const benchGrad = ctx.createLinearGradient(0, benchY, 0, height);
      benchGrad.addColorStop(0, isLight ? '#cbd5e1' : '#1e293b');
      benchGrad.addColorStop(1, isLight ? '#94a3b8' : '#0f172a');
      ctx.fillStyle = benchGrad;
      ctx.fillRect(0, benchY, width, height - benchY);

      // Bench top border with metallic bevel
      ctx.strokeStyle = isLight ? '#e2e8f0' : '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, benchY);
      ctx.lineTo(width, benchY);
      ctx.stroke();

      if (params.labMode === 'flame_spectrometry') {
        // --- REALISTIC BUNSEN BURNER FLAME TEST VIEW ---
        const burnerX = width * 0.5;
        const burnerBaseY = benchY;

        // Heavy Cast-Iron Burner Base (Chamfered Cylinder)
        drawMetallicCylinder(ctx, burnerX - 52, burnerBaseY - 18, 104, 18, 'steel', 'horizontal');

        // Chrome-plated Burner Barrel
        drawMetallicCylinder(ctx, burnerX - 12, burnerBaseY - 110, 24, 92, 'steel', 'vertical');

        // Knurled Brass Air Collar
        drawMetallicCylinder(ctx, burnerX - 15, burnerBaseY - 62, 30, 16, 'brass', 'horizontal');

        // Flexible Neoprene Gas Supply Hose
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 9;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(burnerX - 35, burnerBaseY - 8);
        ctx.quadraticCurveTo(burnerX - 80, burnerBaseY + 22, burnerX - 130, burnerBaseY + 12);
        ctx.stroke();

        const flameBaseY = burnerBaseY - 110;
        const activeFlame = FLAME_SPECIES.find((f) => f.id === params.flameCationId) || FLAME_SPECIES[0];

        // Multi-layered Realistic Procedural Flame with Characteristic Atomic Emission Color
        drawProceduralFlame(
          ctx,
          burnerX,
          flameBaseY,
          115,
          t,
          activeFlame.flameColorHex,
          1.25
        );

        // Platinum Wire Loop introducing analyte salt
        const ptWireTipX = burnerX;
        const ptWireTipY = flameBaseY - 45;

        // Nickel-Chromium Wand Handle & Shaft
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(burnerX + 130, flameBaseY - 10);
        ctx.lineTo(burnerX + 45, flameBaseY - 35);
        ctx.stroke();

        // Platinum Wire Loop Tip
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(burnerX + 45, flameBaseY - 35);
        ctx.lineTo(ptWireTipX + 10, ptWireTipY);
        ctx.stroke();

        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ptWireTipX, ptWireTipY, 7, 0, Math.PI * 2);
        ctx.stroke();

        // Incandescent Salt Bead in the Flame (Glowing Emission Core)
        drawGlowingParticle(ctx, ptWireTipX, ptWireTipY, 5.5, activeFlame.flameColorHex, 18);

        // Label for spectral line
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          `${activeFlame.elementEn} - ${activeFlame.colorNameEn} (λ = ${activeFlame.peakWavelengthNm} nm)`,
          burnerX,
          flameBaseY - 135
        );
      } else {
        // --- 3D BOROSILICATE TEST TUBE IN RACK ---
        const tubeCenterX = width * 0.5;
        const tubeTopY = height * 0.16;
        const tubeWidth = 64;
        const tubeHeight = height * 0.52;
        const tubeBottomY = tubeTopY + tubeHeight;
        const roundRadius = tubeWidth / 2;

        // Wooden Rack with Beveled Mahogany Texture
        const woodColor = isLight ? '#b45309' : '#451a03';
        ctx.fillStyle = woodColor;
        ctx.fillRect(tubeCenterX - 88, benchY - 180, 18, 180);
        ctx.fillRect(tubeCenterX + 70, benchY - 180, 18, 180);
        ctx.fillRect(tubeCenterX - 115, benchY - 120, 230, 14);
        ctx.fillRect(tubeCenterX - 115, benchY - 30, 230, 16);

        // Rack bevel highlights
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(tubeCenterX - 115, benchY - 120, 230, 14);
        ctx.strokeRect(tubeCenterX - 115, benchY - 30, 230, 16);

        // Bunsen Burner under tube if heating enabled
        if (params.isHeating) {
          const burnerY = tubeBottomY + 12;
          drawMetallicCylinder(ctx, tubeCenterX - 10, burnerY + 40, 20, 50, 'steel', 'vertical');
          drawMetallicCylinder(ctx, tubeCenterX - 35, burnerY + 80, 70, 14, 'steel', 'horizontal');

          // Procedural Heating Flame
          drawProceduralFlame(ctx, tubeCenterX, burnerY + 40, 52, t, '#f97316', 0.9);
        }

        let liquidColor = 'rgba(224, 242, 254, 0.35)';
        let pptColor: string | null = null;
        let hasGas = false;
        let gasColor = 'rgba(255, 255, 255, 0.7)';

        if (params.labMode === 'anions') {
          const anion = ANIONS_CATALOG.find((a) => a.id === params.anionId) || ANIONS_CATALOG[0];
          const isMain = params.testType === 'main';

          if (isMain) {
            liquidColor = anion.mainLiquidColor;
            pptColor = anion.mainPptColor;
            hasGas = anion.mainHasGas;
            gasColor = anion.mainGasColor || 'rgba(255, 255, 255, 0.7)';
          } else {
            liquidColor = anion.confirmatoryLiquidColor;
            pptColor = anion.confirmatoryPptColor;
            hasGas = anion.confirmatoryHasGas;
            gasColor = anion.confirmatoryGasColor || 'rgba(255, 255, 255, 0.7)';

            if (anion.id === 'bicarbonate' && !params.isHeating) {
              pptColor = null;
              hasGas = false;
            }
            if (anion.id === 'sulfite' && params.isHeating) {
              pptColor = '#0f172a';
            }
          }
        } else {
          const cation = CATIONS_CATALOG.find((c) => c.id === params.cationId) || CATIONS_CATALOG[0];
          const isMain = params.testType === 'main';
          liquidColor = isMain ? cation.mainLiquidColor : cation.confirmatoryLiquidColor;
          pptColor = isMain ? cation.mainPptColor : cation.confirmatoryPptColor;

          if (cation.dissolvesInExcessNaOH && !isMain && params.reagentVolume === 'excess') {
            pptColor = null;
            liquidColor = cation.excessColor || 'rgba(241, 245, 249, 0.15)';
          }
        }

        // Clip Test Tube Body
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tubeCenterX - roundRadius, tubeTopY);
        ctx.lineTo(tubeCenterX - roundRadius, tubeBottomY - roundRadius);
        ctx.arc(tubeCenterX, tubeBottomY - roundRadius, roundRadius, Math.PI, 0, true);
        ctx.lineTo(tubeCenterX + roundRadius, tubeTopY);
        ctx.closePath();
        ctx.clip();

        const liquidTopY = tubeTopY + tubeHeight * 0.42;
        const liquidHeight = tubeBottomY - liquidTopY;

        ctx.fillStyle = liquidColor;
        ctx.fillRect(tubeCenterX - roundRadius, liquidTopY, tubeWidth, liquidHeight);

        // Liquid Meniscus Curve
        ctx.fillStyle = liquidColor;
        ctx.beginPath();
        ctx.ellipse(tubeCenterX, liquidTopY, roundRadius, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Precipitate Layer
        if (pptColor) {
          const pptHeight = Math.min(roundRadius * 1.6, state.precipitateMassMg * 0.5 + 18);
          ctx.fillStyle = pptColor;
          ctx.beginPath();
          ctx.rect(tubeCenterX - roundRadius, tubeBottomY - pptHeight, tubeWidth, pptHeight);
          ctx.fill();

          for (let p = 0; p < 35; p++) {
            const px = tubeCenterX - roundRadius + 4 + ((p * 17) % (tubeWidth - 8));
            const py = liquidTopY + 10 + ((p * 23) % (liquidHeight - pptHeight - 15));
            ctx.beginPath();
            ctx.arc(px, py, 1.5 + (p % 2), 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Bubbles & Effervescence
        if (hasGas && clock.isPlaying) {
          if (particlesRef.current.length < 24) {
            particlesRef.current.push({
              x: tubeCenterX - roundRadius + 8 + Math.random() * (tubeWidth - 16),
              y: tubeBottomY - 15 - Math.random() * 20,
              vy: 1.5 + Math.random() * 2.5,
              radius: 1.2 + Math.random() * 2.5,
              opacity: 0.5 + Math.random() * 0.4,
              color: gasColor,
            });
          }

          for (let b = particlesRef.current.length - 1; b >= 0; b--) {
            const bubble = particlesRef.current[b];
            bubble.y -= bubble.vy;
            bubble.x += Math.sin(bubble.y * 0.1) * 0.4;

            ctx.fillStyle = bubble.color;
            ctx.globalAlpha = bubble.opacity;
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;

            if (bubble.y < liquidTopY) {
              particlesRef.current.splice(b, 1);
            }
          }
        }

        ctx.restore();

        // Rising Gas Vapors from mouth
        if (hasGas && clock.isPlaying) {
          ctx.save();
          for (let g = 0; g < 6; g++) {
            const gy = tubeTopY - 10 - g * 14;
            const gx = tubeCenterX + Math.sin(flameTimeRef.current * 3 + g) * 12;
            const grad = ctx.createRadialGradient(gx, gy, 4, gx, gy, 20 + g * 5);
            grad.addColorStop(0, gasColor);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(gx, gy, 20 + g * 5, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // Tube Outline
        ctx.strokeStyle = isLight ? 'rgba(100, 116, 139, 0.6)' : 'rgba(148, 163, 184, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(tubeCenterX - roundRadius, tubeTopY);
        ctx.lineTo(tubeCenterX - roundRadius, tubeBottomY - roundRadius);
        ctx.arc(tubeCenterX, tubeBottomY - roundRadius, roundRadius, Math.PI, 0, true);
        ctx.lineTo(tubeCenterX + roundRadius, tubeTopY);
        ctx.stroke();

        // Rim
        ctx.strokeStyle = isLight ? '#64748b' : '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(tubeCenterX, tubeTopY, roundRadius + 3, 5, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.fillRect(tubeCenterX - roundRadius + 6, tubeTopY + 8, 5, tubeHeight - 25);

        // Calibration ticks
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        for (let m = 1; m <= 5; m++) {
          const my = tubeTopY + (tubeHeight * m) / 7;
          ctx.fillRect(tubeCenterX + roundRadius - 12, my, 8, 1.5);
        }

        // Test Strip or Glass Rod dipped into or held above mouth
        if (params.stripType !== 'none') {
          const stripX = tubeCenterX + 16;
          const stripY = tubeTopY - 35;
          const stripW = 14;
          const stripH = 75;

          ctx.save();
          if (params.stripType === 'ammonia_rod') {
            ctx.fillStyle = 'rgba(226, 232, 240, 0.85)';
            ctx.fillRect(stripX, stripY, 6, stripH);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(stripX + 3, stripY + stripH, 16, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = state.stripColor;
            ctx.fillRect(stripX, stripY, stripW, stripH);
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1;
            ctx.strokeRect(stripX, stripY, stripW, stripH);
          }
          ctx.restore();
        }

        // Title above Tube
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        if (params.labMode === 'anions') {
          const anion = ANIONS_CATALOG.find((a) => a.id === params.anionId) || ANIONS_CATALOG[0];
          ctx.fillText(
            `${anion.formula} (${isArabic ? anion.nameAr : anion.nameEn})`,
            tubeCenterX,
            tubeTopY - 45
          );
        } else {
          const cation = CATIONS_CATALOG.find((c) => c.id === params.cationId) || CATIONS_CATALOG[0];
          ctx.fillText(
            `${cation.formula} (${isArabic ? cation.nameAr : cation.nameEn})`,
            tubeCenterX,
            tubeTopY - 45
          );
        }
      }
    },
    [params, clock.isPlaying, isLight, state, isArabic]
  );

  const activeAnion = useMemo(
    () => ANIONS_CATALOG.find((a) => a.id === params.anionId) || ANIONS_CATALOG[0],
    [params.anionId]
  );

  const activeCation = useMemo(
    () => CATIONS_CATALOG.find((c) => c.id === params.cationId) || CATIONS_CATALOG[0],
    [params.cationId]
  );

  const activeFlame = useMemo(
    () => FLAME_SPECIES.find((f) => f.id === params.flameCationId) || FLAME_SPECIES[0],
    [params.flameCationId]
  );

  return (
    <VirtualLabShell
      definition={QUALITATIVE_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetryMetrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscCh1}
      oscilloscopeCh2={oscCh2}
      currentXValue={params.reagentVolume === 'drops' ? 0.2 : params.reagentVolume === 'stoichiometric' ? 1.0 : 2.5}
      currentYValue={state.turbidityNTU}
      onResetSimulation={() => lab.resetParams()}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Domain Switcher */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 block">
              {isArabic ? 'المجال التحليلي:' : 'Analytical Domain:'}
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                type="button"
                onClick={() => updateParam('labMode', 'anions')}
                className={`py-1.5 px-2 rounded-lg text-xs font-black transition-all cursor-pointer truncate ${
                  params.labMode === 'anions'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'الأنيونات' : 'Anions'}
              </button>
              <button
                type="button"
                onClick={() => updateParam('labMode', 'cations')}
                className={`py-1.5 px-2 rounded-lg text-xs font-black transition-all cursor-pointer truncate ${
                  params.labMode === 'cations'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'الكاتيونات' : 'Cations'}
              </button>
              <button
                type="button"
                onClick={() => updateParam('labMode', 'flame_spectrometry')}
                className={`py-1.5 px-2 rounded-lg text-xs font-black transition-all cursor-pointer truncate ${
                  params.labMode === 'flame_spectrometry'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'كشف اللهب' : 'Flame'}
              </button>
            </div>
          </div>

          {/* Target Element Selector */}
          {params.labMode === 'anions' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">
                {isArabic ? 'الأنيون المراد الكشف عنه:' : 'Target Anion:'}
              </label>
              <select
                value={params.anionId}
                onChange={(e) => updateParam('anionId', e.target.value)}
                className="w-full p-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-200 cursor-pointer"
              >
                {ANIONS_CATALOG.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.formula} - {isArabic ? a.nameAr : a.nameEn} ({isArabic ? a.groupAr.split(' ')[0] : a.groupEn.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>
          )}

          {params.labMode === 'cations' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">
                {isArabic ? 'الكاتيون المراد الكشف عنه:' : 'Target Cation:'}
              </label>
              <select
                value={params.cationId}
                onChange={(e) => updateParam('cationId', e.target.value)}
                className="w-full p-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-200 cursor-pointer"
              >
                {CATIONS_CATALOG.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.formula} - {isArabic ? c.nameAr : c.nameEn} ({isArabic ? c.groupAr : c.groupEn})
                  </option>
                ))}
              </select>
            </div>
          )}

          {params.labMode === 'flame_spectrometry' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">
                {isArabic ? 'ملح الفلز لكشف لهب بنزن:' : 'Metal Salt for Flame Test:'}
              </label>
              <select
                value={params.flameCationId}
                onChange={(e) => updateParam('flameCationId', e.target.value)}
                className="w-full p-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-200 cursor-pointer"
              >
                {FLAME_SPECIES.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.symbol} - {isArabic ? f.elementAr : f.elementEn} ({isArabic ? f.colorNameAr : f.colorNameEn})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Procedure Type Toggle */}
          {params.labMode !== 'flame_spectrometry' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">
                {isArabic ? 'نوع التجربة:' : 'Procedure Type:'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateParam('testType', 'main')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    params.testType === 'main'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'التجربة الأساسية' : 'Main Test'}
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('testType', 'confirmatory')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    params.testType === 'confirmatory'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'التجربة التأكيدية' : 'Confirmatory Test'}
                </button>
              </div>
            </div>
          )}

          {/* Reagent Addition Volume */}
          {params.labMode !== 'flame_spectrometry' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">
                {isArabic ? 'كمية الكاشف المضاف:' : 'Reagent Addition Volume:'}
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  type="button"
                  onClick={() => updateParam('reagentVolume', 'drops')}
                  className={`py-1 px-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer truncate ${
                    params.reagentVolume === 'drops'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'قطرات' : 'Drops'}
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('reagentVolume', 'stoichiometric')}
                  className={`py-1 px-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer truncate ${
                    params.reagentVolume === 'stoichiometric'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'متكافئة' : 'Normal'}
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('reagentVolume', 'excess')}
                  className={`py-1 px-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer truncate ${
                    params.reagentVolume === 'excess'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'وفرة' : 'Excess'}
                </button>
              </div>
            </div>
          )}

          {/* Heating & Test Strip Accessories */}
          {params.labMode !== 'flame_spectrometry' && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-bold text-slate-300">
                  {isArabic ? 'تسخين لهب بنزن Δ' : 'Bunsen Heating Δ'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => updateParam('isHeating', !params.isHeating)}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  params.isHeating
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {params.isHeating ? (isArabic ? 'مُشغَّل' : 'ON') : (isArabic ? 'مُعطَّل' : 'OFF')}
              </button>
            </div>
          )}
        </div>
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Dynamic Canvas Simulation Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg bg-slate-950">
          <CanvasSimulationViewport
            id="qualitative-workbench-viewport"
            lang={lang ?? 'ar'}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            animated={true}
            onRender={renderSimulation}
          >
            {/* Real-time Status Overlay Badge */}
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2 pointer-events-none select-none">
              <span
                className={`w-2 h-2 rounded-full ${
                  state.isDissolvedInExcess
                    ? 'bg-emerald-400 animate-ping'
                    : state.precipitateMassMg > 0
                    ? 'bg-amber-400'
                    : 'bg-cyan-400'
                }`}
              />
              <span>
                {params.labMode === 'flame_spectrometry'
                  ? `${activeFlame.symbol} Flame λ = ${activeFlame.peakWavelengthNm} nm`
                  : state.isDissolvedInExcess
                  ? isArabic
                    ? 'الراسب ذائب في وفرة الكاشف (ميتا ألومينات الصوديوم)'
                    : 'Precipitate Dissolved in Excess Reagent (NaAlO₂)'
                  : state.precipitateMassMg > 0
                  ? isArabic
                    ? `راسب متكون (${state.precipitateMassMg} mg)`
                    : `Precipitate Formed (${state.precipitateMassMg} mg)`
                  : isArabic
                  ? 'محلول متجانس رائق'
                  : 'Clear Homogeneous Solution'}
              </span>
            </div>

            {/* Quick action button: Excess NaOH for Aluminum */}
            {params.labMode === 'cations' && params.testType === 'confirmatory' && params.cationId === 'aluminum' && (
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={() =>
                    updateParam(
                      'reagentVolume',
                      params.reagentVolume === 'excess' ? 'stoichiometric' : 'excess'
                    )
                  }
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border shadow-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    params.reagentVolume === 'excess'
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : 'bg-slate-900/90 text-amber-300 border-amber-500/50 hover:bg-slate-800'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {params.reagentVolume === 'excess'
                    ? isArabic
                      ? 'وفرة من NaOH (الراسب ذائب)'
                      : 'Excess NaOH (Dissolved)'
                    : isArabic
                    ? 'إضافة وفرة من NaOH للراسب'
                    : 'Add Excess NaOH Reagent'}
                </button>
              </div>
            )}

            {/* Quick action button: Heating for Bicarbonate */}
            {params.labMode === 'anions' && params.anionId === 'bicarbonate' && params.testType === 'confirmatory' && (
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={() => updateParam('isHeating', !params.isHeating)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border shadow-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    params.isHeating
                      ? 'bg-rose-600 text-white border-rose-400'
                      : 'bg-slate-900/90 text-rose-300 border-rose-500/50 hover:bg-slate-800'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  {params.isHeating
                    ? isArabic
                      ? 'التسخين جارٍ (تكون راسب MgCO₃)'
                      : 'Heating Active (MgCO₃ Formed)'
                    : isArabic
                    ? 'تشغيل التسخين بالحرارة Δ'
                    : 'Turn ON Bunsen Heating Δ'}
                </button>
              </div>
            )}
          </CanvasSimulationViewport>
        </div>

        {/* Detailed Qualitative Observation & Reaction Equation Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-2xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-black tracking-wider uppercase text-cyan-400">
                {isArabic ? 'المشاهدة والاستنتاج المعملي' : 'Visual Observation & Deduction'}
              </h4>
            </div>
            <p className="text-xs font-bold leading-relaxed text-slate-200">
              {params.labMode === 'anions'
                ? params.testType === 'main'
                  ? isArabic
                    ? activeAnion.mainObservationAr
                    : activeAnion.mainObservationEn
                  : isArabic
                  ? activeAnion.confirmatoryObservationAr
                  : activeAnion.confirmatoryObservationEn
                : params.labMode === 'cations'
                ? params.testType === 'main'
                  ? isArabic
                    ? activeCation.mainObservationAr
                    : activeCation.mainObservationEn
                  : isArabic
                  ? activeCation.confirmatoryObservationAr
                  : activeCation.confirmatoryObservationEn
                : isArabic
                ? activeFlame.spectralDescriptionAr
                : activeFlame.spectralDescriptionEn}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-black tracking-wider uppercase text-amber-400">
                {isArabic ? 'المعادلة الكيميائية الموزونة' : 'Balanced Reaction Equation'}
              </h4>
            </div>
            <div className="font-mono text-xs font-black text-amber-300 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-x-auto" dir="ltr">
              {params.labMode === 'anions'
                ? params.testType === 'main'
                  ? activeAnion.mainEquationTex
                  : activeAnion.confirmatoryEquationTex
                : params.labMode === 'cations'
                ? params.testType === 'main'
                  ? activeCation.mainEquationTex
                  : activeCation.confirmatoryEquationTex
                : `${activeFlame.symbol} + \\text{Flame} \\to \\lambda = ${activeFlame.peakWavelengthNm}\\text{ nm}`}
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default QualitativeAnalysisLab;
