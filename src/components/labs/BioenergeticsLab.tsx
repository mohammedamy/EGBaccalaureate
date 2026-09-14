import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { Zap, Sun, BatteryCharging, AlertCircle, Sparkles, Flame } from 'lucide-react';
import { MathRenderer } from '../MathRenderer';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type Mode = 'respiration' | 'photosynthesis' | 'comparison';

export const BioenergeticsLab: React.FC<Props> = ({ lang, theme }) => {
  const [activeMode, setActiveMode] = useState<Mode>('respiration');

  // Respiration state
  const [glucoseMoles, setGlucoseMoles] = useState<number>(1);
  const [isAerobic, setIsAerobic] = useState<boolean>(true);
  const [selectedRespStage, setSelectedRespStage] = useState<number>(1);

  // Photosynthesis state
  const [lightIntensity, setLightIntensity] = useState<number>(75); // 0 - 100%
  const [co2Ppm, setCo2Ppm] = useState<number>(450); // 100 - 1200 ppm
  const [temperature, setTemperature] = useState<number>(25); // 10 - 45 °C

  // Calculations for Respiration
  const atpPerGlucose = isAerobic ? 32 : 2;
  const totalAtp = glucoseMoles * atpPerGlucose;
  const o2Consumed = isAerobic ? glucoseMoles * 6 : 0;
  const co2Released = isAerobic ? glucoseMoles * 6 : glucoseMoles * 2; // Alcoholic yields 2 CO2, lactic yields 0 CO2 (generalized to 2)

  // Calculations for Photosynthesis Rate (Blackman's Law of Limiting Factors)
  // Light factor (saturation around 80%)
  const lightFactor = Math.min(1.0, lightIntensity / 80);
  // CO2 factor (saturation around 800 ppm)
  const co2Factor = Math.min(1.0, co2Ppm / 800);
  // Temperature factor (optimum at 25-30 °C, drops past 37 °C due to RuBisCO denaturation)
  let tempFactor = 1.0;
  if (temperature < 25) {
    tempFactor = 0.4 + 0.6 * ((temperature - 10) / 15);
  } else if (temperature <= 30) {
    tempFactor = 1.0;
  } else {
    tempFactor = Math.max(0.05, 1.0 - ((temperature - 30) / 15));
  }

  // Limiting factor identification
  const factors = [
    { nameEn: 'Light Intensity', nameAr: 'شدة الإضاءة', value: lightFactor },
    { nameEn: 'CO2 Concentration', nameAr: 'تركيز ثاني أكسيد الكربون', value: co2Factor },
    { nameEn: 'Temperature (Enzyme Kinetics)', nameAr: 'درجة الحرارة (نشاط إنزيم روبيسكو)', value: tempFactor }
  ];
  factors.sort((a, b) => a.value - b.value);
  const primaryLimitingFactor = factors[0];

  const photosyntheticRate = Math.round(Math.min(lightFactor, co2Factor, tempFactor) * 100);

  const isDark = theme === 'dark';

  return (
    <div className={`space-y-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-amber-900/30 border border-emerald-500/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {lang === 'ar' ? 'معمل الطاقة الحيوية والتمثيل الغذائي الخلوي' : 'Bioenergetics & Cellular Metabolism Laboratory'}
            </h2>
            <p className="text-xs text-emerald-300/80">
              {lang === 'ar'
                ? 'محاكاة ديناميكية للتنفس الخلوي الهوائي/اللاهوائي، البناء الضوئي، ومحددات بلاكمان'
                : 'Interactive dynamic simulator for cellular respiration, fermentation, photosynthesis & Blackman limits'}
            </p>
          </div>
        </div>

        {/* Sub-modes Navigation */}
        <div className="flex bg-slate-900/80 p-1.5 rounded-xl border border-slate-700/60 shadow-inner">
          <button
            onClick={() => setActiveMode('respiration')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'respiration'
                ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{lang === 'ar' ? 'التنفس الخلوي و ATP' : 'Respiration & ATP'}</span>
          </button>
          <button
            onClick={() => setActiveMode('photosynthesis')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'photosynthesis'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>{lang === 'ar' ? 'البناء الضوئي وكالفن' : 'Photosynthesis'}</span>
          </button>
          <button
            onClick={() => setActiveMode('comparison')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'comparison'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BatteryCharging className="w-4 h-4" />
            <span>{lang === 'ar' ? 'المقارنة الكلية' : 'Comparative Energetics'}</span>
          </button>
        </div>
      </div>

      {/* MODE 1: CELLULAR RESPIRATION */}
      {activeMode === 'respiration' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls & ATP Dashboard */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-base font-bold flex items-center gap-2 text-amber-400">
              <Flame className="w-5 h-5" />
              <span>{lang === 'ar' ? 'لوحة تحكم الأيض الخلوي' : 'Metabolic Control Panel'}</span>
            </h3>

            {/* Aerobic vs Anaerobic Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                {lang === 'ar' ? 'توافر الأكسجين (المسار الاستقلابي)' : 'Oxygen Pathway'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsAerobic(true)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    isAerobic
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-900/20'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  {lang === 'ar' ? 'تنفس هوائي (وفير)' : 'Aerobic (Normoxia)'}
                  <div className="text-[10px] font-normal opacity-80 mt-1">32 ATP / Glucose</div>
                </button>
                <button
                  onClick={() => setIsAerobic(false)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    !isAerobic
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-md shadow-rose-900/20'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  {lang === 'ar' ? 'تنفس لاهوائي (تخمر)' : 'Anaerobic (Fermentation)'}
                  <div className="text-[10px] font-normal opacity-80 mt-1">2 ATP / Glucose</div>
                </button>
              </div>
            </div>

            {/* Glucose Moles Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{lang === 'ar' ? 'كمية الجلوكوز المستهلكة:' : 'Glucose Input:'}</span>
                <span className="font-mono text-amber-400 font-bold">{glucoseMoles} mol</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={glucoseMoles}
                onChange={(e) => setGlucoseMoles(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Stoichiometric Output Metrics */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400">
                {lang === 'ar' ? 'الحصيلة الطاقوية والغازية الناتجة:' : 'Stoichiometric Yield Summary:'}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <div className="text-[11px] text-amber-300">{lang === 'ar' ? 'طاقة ATP' : 'Total ATP'}</div>
                  <div className="text-lg font-black font-mono text-amber-400">{totalAtp}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30">
                  <div className="text-[11px] text-sky-300">{lang === 'ar' ? 'أكسجين O₂' : 'O₂ Consumed'}</div>
                  <div className="text-lg font-black font-mono text-sky-400">{o2Consumed} mol</div>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="text-[11px] text-purple-300">{lang === 'ar' ? 'ثاني أكسيد CO₂' : 'CO₂ Released'}</div>
                  <div className="text-lg font-black font-mono text-purple-400">{co2Released} mol</div>
                </div>
              </div>
            </div>

            {/* Chemical Equation Box */}
            <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs space-y-1">
              <span className="text-slate-400 font-semibold">{lang === 'ar' ? 'المعادلة الكيميائية الإجمالية:' : 'Overall Equation:'}</span>
              <div className="font-mono text-emerald-300 text-[11px] break-all">
                {isAerobic
                  ? 'C₆H₁₂O₆ + 6 O₂ ⟶ 6 CO₂ + 6 H₂O + 30–32 ATP'
                  : 'C₆H₁₂O₆ ⟶ 2 C₂H₅OH + 2 CO₂ + 2 ATP (Or 2 Lactate)'}
              </div>
            </div>
          </div>

          {/* Detailed 4-Stage Pathway Explorer */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-base font-bold flex items-center justify-between">
              <span className="text-emerald-400">
                {lang === 'ar' ? 'المراحل الأربعة للتنفس الخلوي في الميتوكوندريا والسيتوسول' : 'Four Sequential Stages of Cellular Respiration'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {lang === 'ar' ? `المرحلة ${selectedRespStage} من 4` : `Stage ${selectedRespStage} of 4`}
              </span>
            </h3>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 1, nameEn: '1. Glycolysis', nameAr: '١. انشطار الجلوكوز', locEn: 'Cytosol', locAr: 'السيتوسول' },
                { id: 2, nameEn: '2. Link Reaction', nameAr: '٢. أكسدة البيروفات', locEn: 'Matrix Entry', locAr: 'مدخل الماتركس' },
                { id: 3, nameEn: '3. Krebs Cycle', nameAr: '٣. دورة كريبس', locEn: 'Mito Matrix', locAr: 'ماتركس الميتوكوندريا' },
                { id: 4, nameEn: '4. ETC & ATP Synthase', nameAr: '٤. سلسلة نقل الإلكترون', locEn: 'Cristae', locAr: 'الأعراف' }
              ].map((stg) => (
                <button
                  key={stg.id}
                  onClick={() => setSelectedRespStage(stg.id)}
                  className={`p-3 rounded-xl border text-left rtl:text-right transition-all ${
                    selectedRespStage === stg.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-white shadow'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold">{lang === 'ar' ? stg.nameAr : stg.nameEn}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">{lang === 'ar' ? stg.locAr : stg.locEn}</div>
                </button>
              ))}
            </div>

            {/* Dynamic Stage Details Card */}
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
              {selectedRespStage === 1 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sm text-emerald-300">
                      {lang === 'ar' ? 'انشطار الجلوكوز (Glycolysis) في السيتوسول' : 'Glycolysis in Cytosol'}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {lang === 'ar' ? 'لا يتطلب أكسجين' : 'Anaerobic Process'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ar'
                      ? 'يحدث في سيتوسول الخلية دون الحاجة للأكسجين. ينشط الجزيء باستهلاك 2 ATP لإنتاج فركتوز 1,6 ثنائي الفوسفات، ثم ينشطر إلى جزيئين من PGAL (فوسفوجليسرالدهيد)، واللذين يتأكسدان لإنتاج جزيئين من حمض البيروفيك مع توليد 4 ATP و 2 NADH.'
                      : 'Occurs in the cytosol without oxygen. Consumes 2 ATP in the energy investment phase to produce fructose 1,6-bisphosphate, which splits into two PGAL (G3P) molecules. The payoff phase produces 4 ATP and 2 NADH, yielding 2 Pyruvate molecules.'}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'المتفاعلات:' : 'Reactants:'}</span>
                      <span className="font-mono text-emerald-400">1 Glucose + 2 NAD⁺ + 2 ADP</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'النواتج:' : 'Products:'}</span>
                      <span className="font-mono text-amber-400">2 Pyruvate + 2 NADH + 4 ATP</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'صافي الربح:' : 'Net Yield:'}</span>
                      <span className="font-mono text-sky-400 font-bold">2 ATP (net) + 2 NADH</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedRespStage === 2 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sm text-emerald-300">
                      {lang === 'ar' ? 'التفاعل الرابط وأكسدة البيروفات' : 'Pyruvate Oxidation (Link Reaction)'}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {lang === 'ar' ? 'دخول الميتوكوندريا' : 'Mitochondrial Transport'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ar'
                      ? 'يعبر حمض البيروفيك الغشاء المزدوج للميتوكوندريا. ينزع منه جزيء كربون على هيئة CO₂ (أكسدة ونزع كربوكسيل) ليتحول إلى مجموعة أسيتيل ثنائية الكربون، والتي ترتبط بمساعد الإنزيم أ (CoA) لتكوين أسيتيل-CoA مع اختزال NAD⁺ إلى NADH.'
                      : 'Pyruvate enters the mitochondrial matrix via active transport. It undergoes oxidative decarboxylation: one carbon is removed as CO₂, producing an acetyl group that binds to Coenzyme A (forming Acetyl-CoA) while reducing NAD⁺ to NADH.'}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'المتفاعلات:' : 'Reactants:'}</span>
                      <span className="font-mono text-emerald-400">2 Pyruvate + 2 CoA + 2 NAD⁺</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'الغاز المنطلق:' : 'Gas Released:'}</span>
                      <span className="font-mono text-purple-400">2 CO₂</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'صافي الحصيلة:' : 'Energy Yield:'}</span>
                      <span className="font-mono text-sky-400 font-bold">2 Acetyl-CoA + 2 NADH</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedRespStage === 3 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sm text-emerald-300">
                      {lang === 'ar' ? 'دورة كريبس (دورة حمض الستريك) في ماتركس الميتوكوندريا' : 'Krebs / Citric Acid Cycle in Matrix'}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {lang === 'ar' ? 'دورتان لكل جزيء جلوكوز' : '2 Cycles per Glucose'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ar'
                      ? 'يتحد أسيتيل-CoA (ثنائي الكربون) مع حمض أوكسالأسيتيك (رباعي الكربون) لإنتاج حمض الستريك (سداسي الكربون). خلال دورة كاملة تتتابع تفاعلات نزع كربوكسيل وأكسدة تطلق 2 CO₂ وتختزل 3 NAD⁺ و 1 FAD وتنتج 1 ATP بالفسفرة المباشرة على مستوى مادة التفاعل.'
                      : 'Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C). Through a sequence of 8 enzyme-catalyzed steps, citrate is oxidized back to oxaloacetate, releasing 2 CO₂, reducing 3 NAD⁺ and 1 FAD, and generating 1 ATP (via GTP) per cycle.'}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'المتفاعلات لكل جلوكوز:' : 'Reactants (2 turns):'}</span>
                      <span className="font-mono text-emerald-400">2 Acetyl-CoA + 6 NAD⁺ + 2 FAD</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'الغاز المنطلق:' : 'CO₂ Waste:'}</span>
                      <span className="font-mono text-purple-400">4 CO₂ (Total 6 so far)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'الربح الطاقوي:' : 'Total Yield (2 turns):'}</span>
                      <span className="font-mono text-sky-400 font-bold">2 ATP + 6 NADH + 2 FADH₂</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedRespStage === 4 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sm text-emerald-300">
                      {lang === 'ar' ? 'سلسلة نقل الإلكترون والفسفرة التأكسدية (الأعراف)' : 'Electron Transport Chain & Chemiosmosis'}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      {lang === 'ar' ? 'أعلى إنتاجية ATP' : 'Max ATP Synthesis'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ar'
                      ? 'تمر الإلكترونات عالية الطاقة من NADH و FADH₂ عبر معقدات السيتوكرومات (I, II, III, IV) في الغشاء الداخلي، مما يضخ البروتونات H⁺ إلى الحيز بين الغشائين. المستقبل النهائي للإلكترونات هو الأكسجين O₂ ليتكون الماء H₂O. تتدفق البروتونات عائدة عبر إنزيم تخليق ATP (ATP Synthase) محركة الرأس الدوار بالضغط الأسموزي الكيميائي لتوليد نحو 28 ATP.'
                      : 'Electrons from 10 NADH and 2 FADH₂ flow through cytochromes I-IV, pumping protons across the inner membrane into the intermembrane space. Oxygen serves as the final electron acceptor, combining with protons to form H₂O. The electrochemical proton gradient powers ATP Synthase to phosphorylate ADP into ~28 ATP.'}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'المدخلات الإلكترونية:' : 'Electron Donors:'}</span>
                      <span className="font-mono text-emerald-400">10 NADH + 2 FADH₂ + 6 O₂</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'الماء المتكون:' : 'Water Synthesized:'}</span>
                      <span className="font-mono text-sky-400">6 H₂O</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{lang === 'ar' ? 'حصيلة الفسفرة:' : 'Chemiosmotic ATP:'}</span>
                      <span className="font-mono text-amber-400 font-bold">~28 ATP (32 Total)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: PHOTOSYNTHESIS */}
      {activeMode === 'photosynthesis' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls: Blackman Limiting Factors */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-base font-bold flex items-center gap-2 text-teal-400">
              <Sun className="w-5 h-5" />
              <span>{lang === 'ar' ? 'محددات سرعة البناء الضوئي (مبدأ بلاكمان)' : 'Blackman Limiting Factors'}</span>
            </h3>

            {/* Light Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{lang === 'ar' ? 'شدة الإضاءة:' : 'Light Intensity:'}</span>
                <span className="font-mono text-amber-400 font-bold">{lightIntensity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightIntensity}
                onChange={(e) => setLightIntensity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* CO2 Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{lang === 'ar' ? 'تركيز CO₂ بالهواء:' : 'CO₂ Concentration:'}</span>
                <span className="font-mono text-teal-400 font-bold">{co2Ppm} ppm</span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="25"
                value={co2Ppm}
                onChange={(e) => setCo2Ppm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
            </div>

            {/* Temperature Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{lang === 'ar' ? 'درجة الحرارة (النشاط الإنزيمي):' : 'Temperature (Enzymes):'}</span>
                <span className="font-mono text-rose-400 font-bold">{temperature} °C</span>
              </div>
              <input
                type="range"
                min="10"
                max="45"
                step="1"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>

            {/* Real-time Rate Indicator */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">
                  {lang === 'ar' ? 'المعدل الإجمالي للبناء الضوئي:' : 'Photosynthetic Efficiency Rate:'}
                </span>
                <span className="font-mono text-emerald-400 font-bold text-base">{photosyntheticRate}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${photosyntheticRate}%` }}
                />
              </div>

              {/* Primary Limiting Factor Alert */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <div>
                  <span className="font-bold">
                    {lang === 'ar' ? 'العامل المحدد الحرج حالياً: ' : 'Active Limiting Factor: '}
                  </span>
                  <span>
                    {lang === 'ar' ? primaryLimitingFactor.nameAr : primaryLimitingFactor.nameEn}
                  </span>
                  <p className="text-[10px] opacity-80 mt-0.5">
                    {lang === 'ar'
                      ? 'وفق قانون بلاكمان، تتحدد سرعة التفاعل بمقدار العامل الأقل وجوداً وتوافراً.'
                      : 'According to Blackman\'s Law, reaction velocity is restricted by the factor at lowest supply.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thylakoid Light Reactions vs Stroma Calvin Cycle */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>{lang === 'ar' ? 'التفاعلات الضوئية واللاضوئية في البلاستيدة الخضراء' : 'Thylakoid Light vs Stroma Calvin Reactions'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Light Reactions */}
              <div className="p-5 rounded-xl bg-slate-950/70 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-emerald-300">
                    {lang === 'ar' ? '١. التفاعلات الضوئية (الجرانا / الثايلاكويد)' : '1. Light Reactions (Thylakoids)'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    {lang === 'ar' ? 'تعتمد على الضوء' : 'Light-Dependent'}
                  </span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'شطر الماء ضوئياً:' : 'Water Photolysis:'}</strong>{' '}
                    <span className="font-mono text-emerald-400">2H₂O ⟶ 4H⁺ + 4e⁻ + O₂</span>{' '}
                    ({lang === 'ar' ? 'مصدر الأكسجين المنطلق' : 'source of atmospheric oxygen'}).
                  </li>
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'نظاما الضوء I و II:' : 'Photosystems I & II:'}</strong>{' '}
                    {lang === 'ar'
                      ? 'امتصاص فوتونات الضوء وإثارة إلكترونات الكلوروفيل عبر P680 و P700.'
                      : 'Photons excite chlorophyll reaction centers P680 and P700.'}
                  </li>
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'مركبات تثبيت الطاقة:' : 'Energy Couplers:'}</strong>{' '}
                    {lang === 'ar'
                      ? 'توليد مركبين ناقلين للطاقة: ATP بالفسفرة الضوئية و NADPH باختزال NADP⁺.'
                      : 'Produces ATP (photophosphorylation) and NADPH (reduction of NADP⁺).'}
                  </li>
                </ul>
              </div>

              {/* Calvin Cycle */}
              <div className="p-5 rounded-xl bg-slate-950/70 border border-teal-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-teal-300">
                    {lang === 'ar' ? '٢. حلقة كالفن-بنسون (الستروما / الحشوة)' : '2. Calvin Cycle (Stroma)'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-400">
                    {lang === 'ar' ? 'تفاعلات إنزيمية' : 'Enzymatic (Dark)'}
                  </span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'تثبيت الكربون (روبيسكو):' : 'Carbon Fixation (RuBisCO):'}</strong>{' '}
                    {lang === 'ar'
                      ? 'يتحد CO₂ مع مركب ريبولوز ثنائي الفوسفات (RuBP خماسي الكربون).'
                      : 'CO₂ is fixed onto Ribulose 1,5-bisphosphate (5C) by RuBisCO.'}
                  </li>
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'الاختزال إلى PGAL:' : 'Reduction to PGAL (G3P):'}</strong>{' '}
                    {lang === 'ar'
                      ? 'استهلاك ATP و NADPH لاختزال المركب إلى فوسفوجليسرالدهيد ثلاثي الكربون.'
                      : 'ATP and NADPH reduce 3-PGA into glyceraldehyde 3-phosphate (G3P).'}
                  </li>
                  <li>
                    <strong className="text-white">{lang === 'ar' ? 'تخليق الجلوكوز والنشا:' : 'Hexose Synthesis:'}</strong>{' '}
                    {lang === 'ar'
                      ? 'خروج جزيئي PGAL لتكوين سكر جلوكوز C₆H₁₂O₆ وإعادة تدوير باقي الجزيئات لتجديد RuBP.'
                      : 'Every 2 G3P molecules exiting the cycle yield one hexose glucose molecule.'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Photosynthesis Net Equation Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-slate-400 block font-semibold mb-1">
                  {lang === 'ar' ? 'معادلة البناء الضوئي الكاملة:' : 'Complete Photosynthetic Equation:'}
                </span>
                <div className="text-emerald-400 text-xs sm:text-sm">
                  <MathRenderer
                    math="6\text{CO}_2 + 6\text{H}_2\text{O} + \text{Light Energy} \longrightarrow \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2"
                    inline
                    lang={lang}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold shrink-0">
                <Sun className="w-4 h-4" />
                <MathRenderer math="\Delta G^\circ = +2870\text{ kJ/mol}" inline lang={lang} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: COMPARATIVE ENERGETICS & THERMODYNAMICS */}
      {activeMode === 'comparison' && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
            <BatteryCharging className="w-5 h-5" />
            <span>{lang === 'ar' ? 'المقارنة البيولوجية والديناميكية الحرارية بين التنفس والبناء الضوئي' : 'Thermodynamic & Energetic Comparison'}</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60 text-slate-200">
                  <th className="p-3">{lang === 'ar' ? 'وجه المقارنة' : 'Criterion'}</th>
                  <th className="p-3 text-amber-400">{lang === 'ar' ? 'التنفس الخلوي الهوائي' : 'Cellular Respiration'}</th>
                  <th className="p-3 text-emerald-400">{lang === 'ar' ? 'البناء الضوئي' : 'Photosynthesis'}</th>
                </tr>
              </thead>
              <tbody className="divide-y border-slate-800">
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'العضية الخلوية' : 'Cellular Organelle'}</td>
                  <td className="p-3 text-slate-400">{lang === 'ar' ? 'الميتوكوندريا (والسيتوسول)' : 'Mitochondria (and cytosol)'}</td>
                  <td className="p-3 text-slate-400">{lang === 'ar' ? 'البلاستيدات الخضراء (الكلوروبلاست)' : 'Chloroplasts'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'الطبيعة الديناميكية الحرارية' : 'Thermodynamic Nature'}</td>
                  <td className="p-3 text-amber-300">{lang === 'ar' ? 'طارد للطاقة (تفاعل هدام / Exergonic)' : 'Exergonic (Catabolic)'}</td>
                  <td className="p-3 text-emerald-300">{lang === 'ar' ? 'ماص للطاقة (تفاعل بناء / Endergonic)' : 'Endergonic (Anabolic)'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'المستقبل النهائي للإلكترونات' : 'Terminal Electron Acceptor'}</td>
                  <td className="p-3 font-mono text-sky-400">O₂ (⟶ H₂O)</td>
                  <td className="p-3 font-mono text-emerald-400">NADP⁺ (⟶ NADPH)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'مصدر الإلكترونات والبروتونات' : 'Source of e⁻ / H⁺'}</td>
                  <td className="p-3 font-mono text-slate-300">C₆H₁₂O₆ (Glucose oxidation)</td>
                  <td className="p-3 font-mono text-slate-300">H₂O (Photolysis)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'حركة البروتونات H⁺' : 'Proton Pumping'}</td>
                  <td className="p-3 text-slate-400">{lang === 'ar' ? 'من الماتركس إلى الحيز بين الغشائين' : 'From matrix to intermembrane space'}</td>
                  <td className="p-3 text-slate-400">{lang === 'ar' ? 'من الستروما إلى تجويف الثايلاكويد' : 'From stroma into thylakoid lumen'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{lang === 'ar' ? 'الحصيلة الطاقوية لكل جزيء' : 'Net Energy Balance'}</td>
                  <td className="p-3 font-bold text-amber-400 font-mono">+30–32 ATP generated</td>
                  <td className="p-3 font-bold text-emerald-400 font-mono">18 ATP + 12 NADPH consumed / glucose</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
