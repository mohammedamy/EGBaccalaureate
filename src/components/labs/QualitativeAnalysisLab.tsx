import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  TestTube,
  Info,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface IonTest {
  id: string;
  nameEn: string;
  nameAr: string;
  formula: string;
  groupEn: string;
  groupAr: string;
  mainReagentEn: string;
  mainReagentAr: string;
  mainObservationEn: string;
  mainObservationAr: string;
  mainEquation: string;
  liquidColor: string;
  hasPrecipitate: boolean;
  pptColor?: string;
  pptNameEn?: string;
  pptNameAr?: string;
  hasGas: boolean;
  gasColor?: string;
  gasNameEn?: string;
  gasNameAr?: string;
  confirmatoryReagentEn: string;
  confirmatoryReagentAr: string;
  confirmatoryObservationEn: string;
  confirmatoryObservationAr: string;
  confirmatoryEquation: string;
  confirmatoryColor: string;
  confirmatoryPpt?: string;
  flameTestColor?: string;
}

const ANION_TESTS: IonTest[] = [
  {
    id: 'carbonate',
    nameEn: 'Carbonate',
    nameAr: 'أنيون الكربونات',
    formula: 'CO₃²⁻',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    mainReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    mainReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Vigorous effervescence; evolution of colorless CO₂ gas which turns clear limewater turbid.',
    mainObservationAr: 'فوران شديد وتصاعد غاز ثاني أكسيد الكربون CO₂ الذي يعكر ماء الجير الرائق لفترة قصيرة.',
    mainEquation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑',
    liquidColor: 'rgba(56, 189, 248, 0.2)',
    hasPrecipitate: false,
    hasGas: true,
    gasColor: 'rgba(255, 255, 255, 0.7)',
    gasNameEn: 'CO₂ (turns limewater milky)',
    gasNameAr: 'غاز CO₂ (يعكر ماء الجير)',
    confirmatoryReagentEn: 'Magnesium Sulfate (MgSO₄)',
    confirmatoryReagentAr: 'محلول كبريتات الماغنسيوم (MgSO₄)',
    confirmatoryObservationEn: 'White precipitate formed in the cold without heating (MgCO₃).',
    confirmatoryObservationAr: 'يتكون راسب أبيض على البارد دون تسخين من كربونات الماغنسيوم.',
    confirmatoryEquation: 'Na₂CO₃ + MgSO₄ → Na₂SO₄ + MgCO₃↓ (White)',
    confirmatoryColor: 'rgba(255, 255, 255, 0.4)',
    confirmatoryPpt: '#ffffff',
  },
  {
    id: 'bicarbonate',
    nameEn: 'Bicarbonate',
    nameAr: 'أنيون البيكربونات',
    formula: 'HCO₃⁻',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    mainReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    mainReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Effervescence; colorless CO₂ gas evolves, turning limewater turbid.',
    mainObservationAr: 'فوران وتصاعد غاز CO₂ الذي يعكر ماء الجير الرائق.',
    mainEquation: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑',
    liquidColor: 'rgba(56, 189, 248, 0.2)',
    hasPrecipitate: false,
    hasGas: true,
    gasColor: 'rgba(255, 255, 255, 0.7)',
    gasNameEn: 'CO₂ Gas',
    gasNameAr: 'غاز ثاني أكسيد الكربون CO₂',
    confirmatoryReagentEn: 'Magnesium Sulfate (MgSO₄)',
    confirmatoryReagentAr: 'محلول كبريتات الماغنسيوم (MgSO₄)',
    confirmatoryObservationEn: 'No precipitate in the cold; white precipitate appears ONLY after heating.',
    confirmatoryObservationAr: 'لا يتكون راسب على البارد؛ ويتكون راسب أبيض بعد التسخين لانحلال البيكربونات إلى كربونات.',
    confirmatoryEquation: 'Mg(HCO₃)₂ xrightarrow[Δ]{} MgCO₃↓ + H₂O + CO₂↑',
    confirmatoryColor: 'rgba(255, 255, 255, 0.3)',
    confirmatoryPpt: '#f8fafc',
  },
  {
    id: 'sulfite',
    nameEn: 'Sulfite',
    nameAr: 'أنيون الكبريتيت',
    formula: 'SO₃²⁻',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    mainReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    mainReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Pungent SO₂ gas evolves; turns paper wet with acidified K₂Cr₂O₇ from orange to green.',
    mainObservationAr: 'تصاعد غاز SO₂ ذي الرائحة النفاذة، والذي يخضر ورقة مبللة بمحلول ثاني كرومات البوتاسيوم المحمضة.',
    mainEquation: 'Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑',
    liquidColor: 'rgba(34, 197, 94, 0.3)',
    hasPrecipitate: false,
    hasGas: true,
    gasColor: 'rgba(34, 197, 94, 0.6)',
    gasNameEn: 'SO₂ (turns dichromate green)',
    gasNameAr: 'غاز SO₂ (يخضر ثاني الكرومات)',
    confirmatoryReagentEn: 'Silver Nitrate (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'White precipitate of Ag₂SO₃ turning black upon heating.',
    confirmatoryObservationAr: 'يتكون راسب أبيض من كبريتيت الفضة يسود بالتسخين.',
    confirmatoryEquation: 'Na₂SO₃ + 2AgNO₃ → 2NaNO₃ + Ag₂SO₃↓ (Blackens on Δ)',
    confirmatoryColor: 'rgba(15, 23, 42, 0.7)',
    confirmatoryPpt: '#334155',
  },
  {
    id: 'thiosulfate',
    nameEn: 'Thiosulfate',
    nameAr: 'أنيون الثيوكبريتات',
    formula: 'S₂O₃²⁻',
    groupEn: 'Dilute HCl Group',
    groupAr: 'مجموعة حمض الهيدروكلوريك المخفف',
    mainReagentEn: 'Dilute Hydrochloric Acid (HCl)',
    mainReagentAr: 'حمض هيدروكلوريك مخفف (HCl)',
    mainObservationEn: 'Pungent SO₂ gas evolves along with a characteristic yellow colloidal suspension of sulfur.',
    mainObservationAr: 'تصاعد غاز SO₂ النفاذ مع ظهور راسب أصفر معلق من الكبريت في المحلول.',
    mainEquation: 'Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂↑ + S↓ (Yellow suspension)',
    liquidColor: 'rgba(234, 179, 8, 0.5)',
    hasPrecipitate: true,
    pptColor: '#eab308',
    pptNameEn: 'Yellow sulfur precipitate',
    pptNameAr: 'راسب أصفر معلق من الكبريت S',
    hasGas: true,
    gasColor: 'rgba(255, 255, 255, 0.5)',
    gasNameEn: 'SO₂ Gas',
    gasNameAr: 'غاز SO₂',
    confirmatoryReagentEn: 'Iodine Solution (I₂ in KI)',
    confirmatoryReagentAr: 'محلول اليود البني',
    confirmatoryObservationEn: 'The brown color of iodine is completely discharged due to formation of colorless sodium tetrathionate.',
    confirmatoryObservationAr: 'يزول لون محلول اليود البني لتكون ثنائي ثيونات الصوديوم وعديم اللون.',
    confirmatoryEquation: '2Na₂S₂O₃ + I₂ → 2NaI + Na₂S₄O₆ (Colorless)',
    confirmatoryColor: 'rgba(241, 245, 249, 0.2)',
  },
  {
    id: 'chloride',
    nameEn: 'Chloride',
    nameAr: 'أنيون الكلوريد',
    formula: 'Cl⁻',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    mainReagentEn: 'Conc. Sulfuric Acid (H₂SO₄) + gentle heat',
    mainReagentAr: 'حمض كبريتيك مركز مع التسخين الهادئ',
    mainObservationEn: 'Colorless HCl gas evolves, forming dense white fumes of NH₄Cl when exposed to a glass rod wet with ammonia.',
    mainObservationAr: 'تصاعد غاز كلوريد الهيدروجين HCl عديم اللون، الذي يكون سحباً بيضاء كثيفة مع ساق مبللة بمحلول النشادر.',
    mainEquation: '2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl↑',
    liquidColor: 'rgba(248, 250, 252, 0.3)',
    hasPrecipitate: false,
    hasGas: true,
    gasColor: 'rgba(255, 255, 255, 0.85)',
    gasNameEn: 'White fumes of NH₄Cl',
    gasNameAr: 'سحب بيضاء كثيفة NH₄Cl',
    confirmatoryReagentEn: 'Silver Nitrate (AgNO₃)',
    confirmatoryReagentAr: 'محلول نترات الفضة (AgNO₃)',
    confirmatoryObservationEn: 'White precipitate of AgCl, turning violet in sunlight, completely soluble in concentrated ammonium hydroxide.',
    confirmatoryObservationAr: 'يتكون راسب أبيض من AgCl يتحول للبنفسجي في الضوء، ويذوب بسهولة وسرعة في محلول النشادر المركز.',
    confirmatoryEquation: 'NaCl + AgNO₃ → NaNO₃ + AgCl↓ (Soluble in NH₄OH)',
    confirmatoryColor: 'rgba(255, 255, 255, 0.6)',
    confirmatoryPpt: '#ffffff',
  },
  {
    id: 'nitrate',
    nameEn: 'Nitrate (Brown Ring Test)',
    nameAr: 'أنيون النترات (تجربة الحلقة البنية)',
    formula: 'NO₃⁻',
    groupEn: 'Concentrated H₂SO₄ Group',
    groupAr: 'مجموعة حمض الكبريتيك المركز',
    mainReagentEn: 'Conc. H₂SO₄ + Copper Turnings',
    mainReagentAr: 'حمض كبريتيك مركز وخراطة نحاس',
    mainObservationEn: 'Dense reddish-brown NO₂ fumes evolve, increasing greatly upon adding copper turnings.',
    mainObservationAr: 'تصاعد أبخرة بنية حمراء من غاز ثاني أكسيد النيتروجين NO₂، تزداد كثافتها بإضافة خراطة النحاس.',
    mainEquation: '2NaNO₃ + H₂SO₄ → Na₂SO₄ + 2HNO₃; 4HNO₃ + Cu → Cu(NO₃)₂ + 2H₂O + 2NO₂↑',
    liquidColor: 'rgba(180, 83, 9, 0.5)',
    hasPrecipitate: false,
    hasGas: true,
    gasColor: 'rgba(180, 83, 9, 0.8)',
    gasNameEn: 'Dense Reddish-Brown NO₂',
    gasNameAr: 'أبخرة بنية حمراء NO₂',
    confirmatoryReagentEn: 'Fresh FeSO₄ + drops of conc. H₂SO₄ down tube wall',
    confirmatoryReagentAr: 'كبريتات حديد II حديثة التحضير + قطرات كبريتيك مركز باحتراس',
    confirmatoryObservationEn: 'Brown Ring forms at the liquid interface ([Fe(H₂O)₅NO]SO₄), which disappears upon shaking or heating.',
    confirmatoryObservationAr: 'تتكون حلقة بنية عند السطح الفاصل تزول بالرج أو التسخين: مركب الحلقة البنية [Fe(H₂O)₅NO]SO₄.',
    confirmatoryEquation: 'FeSO₄ + NO → [Fe(H₂O)₅NO]SO₄ (Brown Ring Compound)',
    confirmatoryColor: 'rgba(120, 53, 15, 0.8)',
    confirmatoryPpt: '#78350f',
  },
];

const CATION_TESTS: IonTest[] = [
  {
    id: 'aluminum',
    nameEn: 'Aluminum',
    nameAr: 'كاتيون الألومنيوم',
    formula: 'Al³⁺',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    mainReagentEn: 'Ammonium Hydroxide (NH₄OH)',
    mainReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'White gelatinous precipitate of Al(OH)₃ soluble in dilute acids.',
    mainObservationAr: 'يتكون راسب أبيض جيلاتيني من هيدروكسيد الألومنيوم Al(OH)₃ يذوب في الأحماض المخففة.',
    mainEquation: 'AlCl₃ + 3NH₄OH → 3NH₄Cl + Al(OH)₃↓',
    liquidColor: 'rgba(241, 245, 249, 0.3)',
    hasPrecipitate: true,
    pptColor: '#ffffff',
    pptNameEn: 'White gelatinous Al(OH)₃',
    pptNameAr: 'راسب أبيض جيلاتيني Al(OH)₃',
    hasGas: false,
    confirmatoryReagentEn: 'Sodium Hydroxide (NaOH) dropwise, then excess',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH) بقطرات ثم بوفرة',
    confirmatoryObservationEn: 'White precipitate forms and completely dissolves in excess NaOH to form soluble sodium meta-aluminate.',
    confirmatoryObservationAr: 'يتكون راسب أبيض جيلاتيني يذوب في وفرة من NaOH لتكون ميتا ألومينات الصوديوم الذائبة NaAlO₂.',
    confirmatoryEquation: 'Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (Soluble)',
    confirmatoryColor: 'rgba(241, 245, 249, 0.1)',
  },
  {
    id: 'iron2',
    nameEn: 'Iron(II)',
    nameAr: 'كاتيون الحديد الثنائي',
    formula: 'Fe²⁺',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    mainReagentEn: 'Ammonium Hydroxide (NH₄OH)',
    mainReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'White precipitate rapidly turning dirty green of Fe(OH)₂ on air exposure.',
    mainObservationAr: 'يتكون راسب أبيض يتحول سريعاً إلى أبيض مخضر (أخضر متسخ) من Fe(OH)₂.',
    mainEquation: 'FeSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Fe(OH)₂↓',
    liquidColor: 'rgba(34, 197, 94, 0.4)',
    hasPrecipitate: true,
    pptColor: '#4ade80',
    pptNameEn: 'Dirty green Fe(OH)₂',
    pptNameAr: 'راسب أبيض مخضر Fe(OH)₂',
    hasGas: false,
    confirmatoryReagentEn: 'Sodium Hydroxide (NaOH)',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH)',
    confirmatoryObservationEn: 'White-green precipitate of Fe(OH)₂ insoluble in excess NaOH.',
    confirmatoryObservationAr: 'راسب أبيض مخضر لا يذوب في الزيادة من هيدروكسيد الصوديوم.',
    confirmatoryEquation: 'FeSO₄ + 2NaOH → Na₂SO₄ + Fe(OH)₂↓',
    confirmatoryColor: 'rgba(34, 197, 94, 0.6)',
    confirmatoryPpt: '#15803d',
  },
  {
    id: 'iron3',
    nameEn: 'Iron(III)',
    nameAr: 'كاتيون الحديد الثلاثي',
    formula: 'Fe³⁺',
    groupEn: 'Analytical Group III',
    groupAr: 'المجموعة التحليلية الثالثة',
    mainReagentEn: 'Ammonium Hydroxide (NH₄OH)',
    mainReagentAr: 'محلول هيدروكسيد الأمونيوم (NH₄OH)',
    mainObservationEn: 'Reddish-brown gelatinous precipitate of Fe(OH)₃ insoluble in excess NH₄OH.',
    mainObservationAr: 'يتكون راسب جيلاتيني بني محمر من هيدروكسيد الحديد الثلاثي Fe(OH)₃ لا يذوب في الزيادة.',
    mainEquation: 'FeCl₃ + 3NH₄OH → 3NH₄Cl + Fe(OH)₃↓',
    liquidColor: 'rgba(180, 83, 9, 0.5)',
    hasPrecipitate: true,
    pptColor: '#b45309',
    pptNameEn: 'Reddish-brown Fe(OH)₃',
    pptNameAr: 'راسب جيلاتيني بني محمر Fe(OH)₃',
    hasGas: false,
    confirmatoryReagentEn: 'Sodium Hydroxide (NaOH)',
    confirmatoryReagentAr: 'محلول هيدروكسيد الصوديوم (NaOH)',
    confirmatoryObservationEn: 'Reddish-brown precipitate insoluble in excess NaOH.',
    confirmatoryObservationAr: 'راسب بني محمر لا يذوب في الزيادة من هيدروكسيد الصوديوم.',
    confirmatoryEquation: 'FeCl₃ + 3NaOH → 3NaCl + Fe(OH)₃↓',
    confirmatoryColor: 'rgba(180, 83, 9, 0.7)',
    confirmatoryPpt: '#9a3412',
  },
  {
    id: 'calcium',
    nameEn: 'Calcium (Flame Test)',
    nameAr: 'كاتيون الكالسيوم (كشف اللهب الجاف)',
    formula: 'Ca²⁺',
    groupEn: 'Analytical Group V',
    groupAr: 'المجموعة التحليلية الخامسة',
    mainReagentEn: 'Ammonium Carbonate (NH₄)₂CO₃',
    mainReagentAr: 'محلول كربونات الأمونيوم ((NH₄)₂CO₃)',
    mainObservationEn: 'White precipitate of CaCO₃ soluble in dilute HCl and in water saturated with CO₂.',
    mainObservationAr: 'يتكون راسب أبيض من كربونات الكالسيوم CaCO₃ يذوب في حمض HCl المخفف وفي الماء المحتوي على CO₂.',
    mainEquation: 'CaCl₂ + (NH₄)₂CO₃ → 2NH₄Cl + CaCO₃↓',
    liquidColor: 'rgba(255, 255, 255, 0.4)',
    hasPrecipitate: true,
    pptColor: '#ffffff',
    pptNameEn: 'White CaCO₃',
    pptNameAr: 'راسب أبيض CaCO₃',
    hasGas: false,
    confirmatoryReagentEn: 'Dry Bunsen Flame Test with Pt wire wet with conc. HCl',
    confirmatoryReagentAr: 'كشف اللهب الجاف بسلك بلاتين مبلل بحمض HCl المركز',
    confirmatoryObservationEn: 'The non-luminous Bunsen flame colors a characteristic Brick-Red (Red-Orange).',
    confirmatoryObservationAr: 'يتلون لهب بنزن غير المضيء بلون أحمر طوبي مميز لكاتيون الكالسيوم.',
    confirmatoryEquation: 'Ca²⁺ + Flame → Brick-Red Flame (أحمر طوبي)',
    confirmatoryColor: 'rgba(220, 38, 38, 0.8)',
    flameTestColor: '#ef4444',
  },
];

export const QualitativeAnalysisLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [testCategory, setTestCategory] = useState<'anions' | 'cations'>('anions');
  const [selectedIon, setSelectedIon] = useState<IonTest>(ANION_TESTS[0]);
  const [testMode, setTestMode] = useState<'main' | 'confirmatory'>('main');

  const testsList = testCategory === 'anions' ? ANION_TESTS : CATION_TESTS;

  const handleCategorySwitch = (cat: 'anions' | 'cations') => {
    setTestCategory(cat);
    const defaultIon = cat === 'anions' ? ANION_TESTS[0] : CATION_TESTS[0];
    setSelectedIon(defaultIon);
  };

  const handleIonSelect = (ion: IonTest) => {
    setSelectedIon(ion);
  };

  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-700/60 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
            <TestTube className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight">
                {isArabic
                  ? 'معمل الكيمياء التحليلية والكشف عن الأنيونات والكاتيونات'
                  : 'Qualitative Analysis & Chemical Identification Lab'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {isArabic ? 'الباب الثاني (كيمياء الوصفية)' : 'Unit 2 Descriptive'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكي أنابيب الاختبار الحية للرواسب والغازات وتجربة الحلقة البنية وكشف لهب بنزن الجاف'
                : 'Interactive test-tube precipitation, gas evolution, Brown Ring test, and Bunsen flame analysis'}
            </p>
          </div>
        </div>

        {/* Category Switcher */}
        <div
          className={`flex items-center p-1 rounded-xl border ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950 border-slate-800'
          }`}
        >
          <button
            onClick={() => handleCategorySwitch('anions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              testCategory === 'anions'
                ? 'bg-cyan-600 text-white shadow-sm font-black'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isArabic ? 'الأنيونات (الشقوق الحامضية)' : 'Anions (Acid Radicals)'}
          </button>
          <button
            onClick={() => handleCategorySwitch('cations')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              testCategory === 'cations'
                ? 'bg-cyan-600 text-white shadow-sm font-black'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isArabic ? 'الكاتيونات (الشقوق القاعدية)' : 'Cations (Basic Radicals)'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Ion List & Mode Switcher (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <label className="text-xs font-bold text-slate-400 block mb-2">
              {isArabic ? 'اختر الأيون المراد الكشف عنه:' : 'Select Ion to Identify:'}
            </label>
            <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
              {testsList.map((ion) => {
                const isSelected = selectedIon.id === ion.id;
                return (
                  <button
                    key={ion.id}
                    onClick={() => handleIonSelect(ion)}
                    className={`w-full p-2.5 rounded-lg text-xs font-bold border text-start transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-mono text-sm font-black text-amber-300">
                        {ion.formula}
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        {isArabic ? ion.nameAr : ion.nameEn}
                      </div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                      {isArabic ? ion.groupAr.split(' ')[0] : ion.groupEn.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Test Mode Toggle */}
          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <label className="text-xs font-bold text-slate-400 block mb-2">
              {isArabic ? 'نوع التجربة:' : 'Experiment Type:'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTestMode('main')}
                className={`p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                  testMode === 'main'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'التجربة الأساسية' : 'Main Test'}
              </button>
              <button
                onClick={() => setTestMode('confirmatory')}
                className={`p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                  testMode === 'confirmatory'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'التجربة التأكيدية' : 'Confirmatory Test'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Live Test Tube Rack Simulation (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-black text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                  {selectedIon.formula}
                </span>
                <span className="text-sm font-bold text-slate-200">
                  {isArabic ? selectedIon.nameAr : selectedIon.nameEn}
                </span>
              </div>
              <span className="text-xs text-cyan-400 font-bold">
                {isArabic ? selectedIon.groupAr : selectedIon.groupEn}
              </span>
            </div>

            {/* Test Tube Graphic Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Test Tube Column */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 min-h-[260px]">
                {/* Bunsen Flame Test for Calcium */}
                {selectedIon.id === 'calcium' && testMode === 'confirmatory' ? (
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="relative">
                      {/* Bunsen Base */}
                      <div className="w-16 h-8 bg-slate-700 rounded-t-lg mx-auto border border-slate-600" />
                      <div className="w-6 h-20 bg-slate-600 mx-auto border-x border-slate-500" />
                      {/* Flame Cone */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-10 h-20 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-full blur-[1px] animate-pulse" />
                    </div>
                    <span className="text-xs font-black text-rose-400 mt-4">
                      {isArabic ? 'لهب بنزن بلون أحمر طوبي Brick-Red' : 'Brick-Red Bunsen Flame Color'}
                    </span>
                  </div>
                ) : (
                  <div className="relative w-16 h-52 bg-slate-800/40 border-2 border-slate-400/60 rounded-b-3xl overflow-hidden shadow-inner flex flex-col justify-end">
                    {/* Liquid Level */}
                    <div
                      className="w-full transition-all duration-700"
                      style={{
                        height: '60%',
                        backgroundColor:
                          testMode === 'main'
                            ? selectedIon.liquidColor
                            : selectedIon.confirmatoryColor,
                      }}
                    />

                    {/* Precipitate at bottom */}
                    {((testMode === 'main' && selectedIon.hasPrecipitate) ||
                      (testMode === 'confirmatory' && selectedIon.confirmatoryPpt)) && (
                      <div
                        className="w-full h-8 absolute bottom-0 left-0 transition-all"
                        style={{
                          backgroundColor:
                            testMode === 'main'
                              ? selectedIon.pptColor || '#ffffff'
                              : selectedIon.confirmatoryPpt || '#ffffff',
                          opacity: 0.85,
                        }}
                      />
                    )}

                    {/* Gas Bubbles Animation */}
                    {testMode === 'main' && selectedIon.hasGas && (
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 gap-2 pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-white/70 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/80 animate-ping" />
                      </div>
                    )}
                  </div>
                )}

                <div className="text-[11px] font-bold text-slate-400 mt-3 text-center">
                  {testMode === 'main'
                    ? isArabic
                      ? selectedIon.mainReagentAr
                      : selectedIon.mainReagentEn
                    : isArabic
                    ? selectedIon.confirmatoryReagentAr
                    : selectedIon.confirmatoryReagentEn}
                </div>
              </div>

              {/* Reaction Details Column */}
              <div className="md:col-span-7 space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">
                    {isArabic ? 'المشاهدة والاستنتاج المعملي:' : 'Visual Observation:'}
                  </span>
                  <p className="text-xs font-bold text-emerald-300 leading-relaxed">
                    {testMode === 'main'
                      ? isArabic
                        ? selectedIon.mainObservationAr
                        : selectedIon.mainObservationEn
                      : isArabic
                      ? selectedIon.confirmatoryObservationAr
                      : selectedIon.confirmatoryObservationEn}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">
                    {isArabic ? 'معادلة التفاعل الكيميائي الموزونة:' : 'Balanced Reaction Equation:'}
                  </span>
                  <div className="font-mono text-xs font-black text-amber-300">
                    {testMode === 'main'
                      ? selectedIon.mainEquation
                      : selectedIon.confirmatoryEquation}
                  </div>
                </div>

                {/* Additional Note */}
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-start gap-2 text-xs text-cyan-200">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-[11px]">
                    {isArabic
                      ? 'ملاحظة هامة: يجب التمييز دائماً بين الراسب المتكون على البارد والراسب المتكون بعد التسخين.'
                      : 'Key Exam Note: Pay strict attention to whether precipitates form in the cold or only upon heating.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
