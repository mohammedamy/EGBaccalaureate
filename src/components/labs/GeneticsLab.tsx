import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { Grid, Percent, Heart, AlertTriangle } from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type CrossType = 'mendel_monohybrid' | 'incomplete_dominance' | 'lethal_genes' | 'blood_groups';

type BloodType = 'A' | 'B' | 'AB' | 'O';
type RhFactor = '+' | '-';

export const GeneticsLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [crossType, setCrossType] = useState<CrossType>('blood_groups');

  // Blood Group Calculator State
  const [motherBlood, setMotherBlood] = useState<BloodType>('A');
  const [motherRh, setMotherRh] = useState<RhFactor>('-');
  const [fatherBlood, setFatherBlood] = useState<BloodType>('B');
  const [fatherRh, setFatherRh] = useState<RhFactor>('+');

  const possibleChildBlood = (m: BloodType, f: BloodType): { type: BloodType; descEn: string; descAr: string }[] => {
    if (m === 'AB' && f === 'AB') {
      return [
        { type: 'A', descEn: 'Type A (25%)', descAr: 'فصيلة A (٢٥٪)' },
        { type: 'B', descEn: 'Type B (25%)', descAr: 'فصيلة B (٢٥٪)' },
        { type: 'AB', descEn: 'Type AB (50%)', descAr: 'فصيلة AB (٥٠٪)' }
      ];
    }
    if ((m === 'O' && f === 'AB') || (m === 'AB' && f === 'O')) {
      return [
        { type: 'A', descEn: 'Type A (50%)', descAr: 'فصيلة A (٥٠٪)' },
        { type: 'B', descEn: 'Type B (50%)', descAr: 'فصيلة B (٥٠٪)' }
      ];
    }
    if (m === 'O' && f === 'O') {
      return [{ type: 'O', descEn: 'Type O (100%)', descAr: 'فصيلة O (١٠٠٪)' }];
    }
    if ((m === 'A' && f === 'B') || (m === 'B' && f === 'A')) {
      return [
        { type: 'A', descEn: 'Type A (Possible)', descAr: 'فصيلة A (ممكنة)' },
        { type: 'B', descEn: 'Type B (Possible)', descAr: 'فصيلة B (ممكنة)' },
        { type: 'AB', descEn: 'Type AB (Possible)', descAr: 'فصيلة AB (ممكنة)' },
        { type: 'O', descEn: 'Type O (Possible)', descAr: 'فصيلة O (ممكنة إذا كان كلاهما هجيناً)' }
      ];
    }
    return [
      { type: 'A', descEn: 'Type A', descAr: 'فصيلة A' },
      { type: 'B', descEn: 'Type B', descAr: 'فصيلة B' },
      { type: 'O', descEn: 'Type O', descAr: 'فصيلة O' }
    ];
  };

  const childTypes = possibleChildBlood(motherBlood, fatherBlood);
  const isRhIncompatibility = motherRh === '-' && fatherRh === '+';

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setCrossType('blood_groups')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            crossType === 'blood_groups'
              ? 'bg-rose-600 text-white font-extrabold shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Heart className="w-4 h-4 text-rose-300" />
          <span>{isArabic ? 'فصائل الدم ABO وعامل ريسوس (Rh)' : 'ABO Blood Groups & Rh Factor'}</span>
        </button>

        <button
          onClick={() => setCrossType('mendel_monohybrid')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            crossType === 'mendel_monohybrid'
              ? 'bg-indigo-600 text-white font-extrabold shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Grid className="w-4 h-4 text-indigo-300" />
          <span>{isArabic ? 'السيادة التامة (مندل ٣:١)' : 'Monohybrid Dominance (3:1)'}</span>
        </button>

        <button
          onClick={() => setCrossType('incomplete_dominance')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            crossType === 'incomplete_dominance'
              ? 'bg-purple-600 text-white font-extrabold shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Percent className="w-4 h-4 text-purple-300" />
          <span>{isArabic ? 'انعدام السيادة (شاب الليل ١:٢:١)' : 'Incomplete Dominance (1:2:1)'}</span>
        </button>

        <button
          onClick={() => setCrossType('lethal_genes')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            crossType === 'lethal_genes'
              ? 'bg-amber-600 text-white font-extrabold shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-300" />
          <span>{isArabic ? 'الجينات المميتة (الفئران الصفراء ٢:١)' : 'Lethal Genes (2:1)'}</span>
        </button>
      </div>

      {/* ABO Blood Groups Simulator */}
      {crossType === 'blood_groups' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Parental Blood Selectors */}
          <div
            className={`md:col-span-5 rounded-2xl border p-5 space-y-4 ${
              isContrast
                ? 'bg-black border-yellow-400 text-white'
                : isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <Heart className="w-5 h-5 text-rose-500" />
              <h3 className="font-black text-sm">
                {isArabic ? 'تحديد فصائل دم الأبوين:' : 'Parental Blood Group Configuration:'}
              </h3>
            </div>

            {/* Mother Selector */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-rose-400 block">
                {isArabic ? 'فصيلة دم الأم وعامل Rh:' : 'Mother Blood Type & Rh:'}
              </span>
              <div className="flex items-center gap-2">
                {(['A', 'B', 'AB', 'O'] as BloodType[]).map((bt) => (
                  <button
                    key={bt}
                    onClick={() => setMotherBlood(bt)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${
                      motherBlood === bt ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {bt}
                  </button>
                ))}
                <button
                  onClick={() => setMotherRh((prev) => (prev === '+' ? '-' : '+'))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                    motherRh === '+' ? 'bg-blue-600 text-white border-blue-500' : 'bg-amber-600 text-white border-amber-500'
                  }`}
                >
                  Rh({motherRh})
                </button>
              </div>
            </div>

            {/* Father Selector */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-400 block">
                {isArabic ? 'فصيلة دم الأب وعامل Rh:' : 'Father Blood Type & Rh:'}
              </span>
              <div className="flex items-center gap-2">
                {(['A', 'B', 'AB', 'O'] as BloodType[]).map((bt) => (
                  <button
                    key={bt}
                    onClick={() => setFatherBlood(bt)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${
                      fatherBlood === bt ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {bt}
                  </button>
                ))}
                <button
                  onClick={() => setFatherRh((prev) => (prev === '+' ? '-' : '+'))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                    fatherRh === '+' ? 'bg-blue-600 text-white border-blue-500' : 'bg-amber-600 text-white border-amber-500'
                  }`}
                >
                  Rh({fatherRh})
                </button>
              </div>
            </div>

            {/* Rh Risk Alert if Mother Rh- and Father Rh+ */}
            {isRhIncompatibility && (
              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/60 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-rose-400 font-extrabold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{isArabic ? 'تنبيه طبي: عامل ريسوس والأجنة (Erythroblastosis Fetalis)' : 'Clinical Alert: Rh Incompatibility'}</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {isArabic
                    ? 'الأم سالبة Rh(-) والأب موجب Rh(+). الجنين الأول إذا كان موجباً يولد سليماً لكن يختلط دمه بدم الأم عند الولادة فتنتج أجسامه المضادة. الجنين الثاني الموجب يتعرض لخطر تحلل كرات الدم الحمراء وموته، ويجب حقن الأم بمصل واقٍ خلال ٧٢ ساعة من الولادة الأولى.'
                    : 'Mother is Rh- and Father is Rh+. First Rh+ child survives, but birth leakage sensitizes mother to make anti-Rh antibodies. Second Rh+ fetus faces severe hemolytic disease (erythroblastosis fetalis) unless mother receives anti-Rh Rhogam serum within 72 hours of first delivery.'}
                </p>
              </div>
            )}
          </div>

          {/* Offspring Blood Matrix & Transfusion Rules */}
          <div
            className={`md:col-span-7 rounded-2xl border p-5 space-y-4 ${
              isContrast
                ? 'bg-black border-yellow-400 text-white'
                : isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <h3 className="font-black text-sm text-rose-400">
              {isArabic ? 'الفصائل المحتملة للأبناء والأنماط الجينية:' : 'Possible Offspring Blood Groups & Genotypes:'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {childTypes.map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-black text-emerald-400">
                      {isArabic ? `فصيلة ${c.type}` : `Type ${c.type}`}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 font-mono">
                      {c.type === 'O' ? 'ii' : c.type === 'AB' ? 'I^A I^B' : `I^${c.type} I^${c.type} / I^${c.type} i`}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">{isArabic ? c.descAr : c.descEn}</p>
                </div>
              ))}
            </div>

            {/* Blood Transfusion Matrix */}
            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
              <h4 className="font-black text-cyan-400">
                {isArabic ? 'قواعد نقل الدم والأنتيجينات والأجسام المضادة في المنهج:' : 'Blood Transfusion Antigens & Antibodies Rules:'}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-center font-bold">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-rose-400 font-black text-xs">فصيلة A</p>
                  <p className="text-slate-400 mt-0.5">أنتيجين A</p>
                  <p className="text-amber-400">مضاد Anti-B</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-blue-400 font-black text-xs">فصيلة B</p>
                  <p className="text-slate-400 mt-0.5">أنتيجين B</p>
                  <p className="text-amber-400">مضاد Anti-A</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-purple-400 font-black text-xs">فصيلة AB</p>
                  <p className="text-slate-400 mt-0.5">أنتيجين A و B</p>
                  <p className="text-emerald-400 font-black">مستقبل عام (لا مضادات)</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-emerald-400 font-black text-xs">فصيلة O</p>
                  <p className="text-slate-400 mt-0.5">خالية من الأنتيجينات</p>
                  <p className="text-cyan-400 font-black">معطٍ عام (لخلوها من الأنتيجينات)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monohybrid Punnett Square */}
      {crossType === 'mendel_monohybrid' && (
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-black text-base text-indigo-400">
              {isArabic ? 'مربع بانيت لتوارث صفة واحدة (طول ساق نبات البازلاء Tt × Tt):' : 'Punnett Square: Pea Plant Stem Height (Tt × Tt):'}
            </h3>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300">
              3 Tall : 1 Dwarf (٣ طويل : ١ قصير)
            </span>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              <div className="p-3 bg-slate-900 rounded-lg text-slate-500 font-mono">♀ \ ♂</div>
              <div className="p-3 bg-indigo-950/60 border border-indigo-800/40 rounded-lg text-indigo-400 font-mono text-sm">
                Gamete T
              </div>
              <div className="p-3 bg-indigo-950/60 border border-indigo-800/40 rounded-lg text-indigo-400 font-mono text-sm">
                Gamete t
              </div>

              <div className="p-3 bg-indigo-950/60 border border-indigo-800/40 rounded-lg text-indigo-400 font-mono text-sm">
                Gamete T
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-lg text-emerald-300 font-mono font-black text-sm">
                TT (طويل نقي)
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-lg text-emerald-300 font-mono font-black text-sm">
                Tt (طويل هجين)
              </div>

              <div className="p-3 bg-indigo-950/60 border border-indigo-800/40 rounded-lg text-indigo-400 font-mono text-sm">
                Gamete t
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-lg text-emerald-300 font-mono font-black text-sm">
                Tt (طويل هجين)
              </div>
              <div className="p-3 bg-rose-950/40 border border-rose-800/40 rounded-lg text-rose-300 font-mono font-black text-sm">
                tt (قصير متنحٍ)
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-800/40 text-xs text-slate-300">
            {isArabic
              ? 'النسبة المظهرية في الجيل الثاني: ٧٥٪ طويل الساق (سائد) إلى ٢٥٪ قصير الساق (متنحٍ)، أي بنسبة ٣ : ١. النسبة الجينية: ١ TT : ٢ Tt : ١ tt.'
              : 'Phenotypic ratio in F2 generation: 75% Tall (dominant) to 25% Dwarf (recessive), i.e., 3:1. Genotypic ratio: 1 TT : 2 Tt : 1 tt.'}
          </div>
        </div>
      )}

      {/* Incomplete Dominance */}
      {crossType === 'incomplete_dominance' && (
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-black text-base text-purple-400">
              {isArabic ? 'انعدام السيادة في نبات شب الليل (أزهار حمراء RR × بيضاء WW):' : 'Incomplete Dominance: Snapdragon Flower Color (RR × WW):'}
            </h3>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-purple-300">
              1 Red : 2 Pink : 1 White (١ أحمر : ٢ قرنفلي : ١ أبيض)
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic
              ? 'لا يسود أي من الجينين على الآخر بل يتداخل أثرهما لإنتاج صفة جديدة (قرنفلي RW). عند تزاوج نباتين قرنفليين RW × RW تكون النسبة في الجيل التالي: ٢٥٪ أحمر (RR) : ٥٠٪ قرنفلي (RW) : ٢٥٪ أبيض (WW)، وتتطابق النسبة المظهرية مع النسبة الجينية.'
              : 'Neither allele dominates; instead, they blend effects to produce an intermediate pink phenotype (RW). Crossing two pink plants RW × RW yields 1 Red (25%) : 2 Pink (50%) : 1 White (25%). Phenotypic and genotypic ratios are identical.'}
          </p>
        </div>
      )}

      {/* Lethal Genes */}
      {crossType === 'lethal_genes' && (
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-black text-base text-amber-400">
              {isArabic ? 'الجينات المميتة السائدة: لون شعر الفئران الصفراء (Yy × Yy):' : 'Dominant Lethal Genes: Yellow Fur in Mice (Yy × Yy):'}
            </h3>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-amber-300">
              2 Yellow : 1 Grey (٢ أصفر : ١ رمادي)
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic
              ? 'جين اللون الأصفر (Y) سائد ومميت في حالته النقية (YY). عند تزاوج فأرين أصفرين هجينين (Yy × Yy): يولد ٢٥٪ فئران صفراء نقية (YY) تموت في الرحم قبل الولادة، ويعيش ٥٠٪ فئران صفراء هجينة (Yy) و ٢٥٪ فئران رمادية (yy)، فتكون نسبة الأحياء ٢ أصفر : ١ رمادي (نسبة ٢ : ١).'
              : 'The yellow fur allele (Y) is dominant for fur color but recessive lethal in homozygous state (YY). In a cross of two yellow mice (Yy × Yy), 25% homozygous YY die in utero, while 50% yellow (Yy) and 25% grey (yy) survive, resulting in a living ratio of 2 Yellow : 1 Grey.'}
          </p>
        </div>
      )}
    </div>
  );
};
