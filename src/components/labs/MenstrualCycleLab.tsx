import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import { Calendar, Sparkles, Heart } from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const MenstrualCycleLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [currentDay, setCurrentDay] = useState<number>(14);
  const [pregnancyOccurred, setPregnancyOccurred] = useState<boolean>(false);

  // Dynamic Hormone Curves Simulation across 28 days
  // Days 1-5: Menstruation (الطمث)
  // Days 6-13: Follicular / Proliferative (نضج حويصلة جراف)
  // Day 14: Ovulation (التبويض)
  // Days 15-28: Luteal / Secretory (الجسم الأصفر)

  // FSH calculation (IU/L)
  const getFSH = (day: number) => {
    if (day <= 5) return 6 + day * 1.2;
    if (day <= 10) return 12 - (day - 5) * 0.8;
    if (day === 13 || day === 14) return 18; // Ovulatory spike
    if (day <= 20) return 5;
    return 4;
  };

  // LH calculation (IU/L)
  const getLH = (day: number) => {
    if (day <= 11) return 5 + day * 0.4;
    if (day === 12) return 15;
    if (day === 13) return 48; // Massive surge
    if (day === 14) return 55; // Peak triggering ovulation
    if (day <= 16) return 20 - (day - 14) * 8;
    return 6;
  };

  // Estrogen calculation (pg/mL)
  const getEstrogen = (day: number) => {
    if (day <= 5) return 40;
    if (day <= 13) return 40 + (day - 5) * 35; // Peak around day 12-13 (~320 pg/mL)
    if (day === 14) return 220;
    if (pregnancyOccurred && day > 14) return 200 + (day - 14) * 15; // Sustained if pregnant
    if (day <= 22) return 140 + (day - 14) * 8; // Secondary luteal peak
    return Math.max(30, 200 - (day - 22) * 28); // Drops
  };

  // Progesterone calculation (ng/mL)
  const getProgesterone = (day: number) => {
    if (day <= 14) return 0.8;
    if (pregnancyOccurred) {
      return 1.0 + (day - 14) * 1.8; // Rises steadily to sustain decidua
    }
    if (day <= 22) return 1.0 + (day - 14) * 2.2; // Peak around day 21-22 (~18 ng/mL)
    return Math.max(0.5, 18.0 - (day - 22) * 2.8); // Sharp drop triggering menses
  };

  // Endometrium thickness (mm)
  const getEndometrium = (day: number) => {
    if (day <= 4) return Math.max(1.0, 4.0 - day * 0.7); // Sloughing
    if (day <= 14) return 1.0 + (day - 4) * 0.3; // Proliferation
    if (pregnancyOccurred) return 4.0 + (day - 14) * 0.25; // Thickens into placenta maternal part
    if (day <= 24) return 4.0 + (day - 14) * 0.2; // Secretory peak (5.5 - 6 mm)
    return Math.max(2.0, 6.0 - (day - 24) * 0.9); // Regressing
  };

  const fshVal = getFSH(currentDay);
  const lhVal = getLH(currentDay);
  const estVal = getEstrogen(currentDay);
  const progVal = getProgesterone(currentDay);
  const endoVal = getEndometrium(currentDay);

  const getPhaseInfo = (day: number) => {
    if (day <= 5) {
      return {
        nameEn: 'Menstruation Phase (Days 1–5)',
        nameAr: 'مرحلة الطمث (الأيام ١ إلى ٥)',
        descEn: 'Degeneration of corpus luteum leads to sharp drop in progesterone and estrogen, causing shedding of the vascular endometrium with bleeding.',
        descAr: 'ضمور الجسم الأصفر يؤدي لانخفاض حاد في البروجستيرون والاستروجين، مما يسبب تمزق بطانة الرحم الدموية ونزول دم الطمث لمدة ٣-٥ أيام.',
        color: 'text-rose-400',
        bg: 'bg-rose-950/20 border-rose-800/40',
        follicleEn: 'Degenerated corpus albicans; recruitment of new primordial follicles under initial FSH rise.',
        follicleAr: 'ضمور بقايا الجسم الأصفر وبدء تحفيز حويصلات أولية جديدة تحت تأثير هرمون FSH.'
      };
    }
    if (day <= 13) {
      return {
        nameEn: 'Follicular (Proliferative) Phase (Days 6–13)',
        nameAr: 'مرحلة نضج البويضة (الأيام ٦ إلى ١٣)',
        descEn: 'FSH stimulates maturation of Graafian follicle containing the primary oocyte. Developing follicle secretes Estrogen, rebuilding the uterine endometrium.',
        descAr: 'يفرز الفص الأمامي للنخامية هرمون FSH لينبه المبيض لإنضاج حويصلة جراف بداخلها بويضة نامية، وتفرز الحويصلة الإستروجين لإنماء بطانة الرحم.',
        color: 'text-amber-400',
        bg: 'bg-amber-950/20 border-amber-800/40',
        follicleEn: 'Growing Graafian follicle reaching maturity (~20 mm diameter) filled with estrogen-rich follicular fluid.',
        follicleAr: 'نمو حويصلة جراف واكتمال نضجها وتجويفها مليء بسائل غني بالإستروجين.'
      };
    }
    if (day === 14) {
      return {
        nameEn: 'Ovulation Day (Day 14)',
        nameAr: 'يوم التبويض وانفجار حويصلة جراف (اليوم ١٤)',
        descEn: 'Massive LH surge causes rupture of the Graafian follicle and ejection of the secondary oocyte into the Fallopian tube infundibulum fimbriae.',
        descAr: 'ارتفاع مفاجئ وهائل في هرمون LH يؤدي لانفجار حويصلة جراف وتحرر الخلية البيضية الثانوية لتلتقطها زوائد قناة فالوب الإصبعية.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/20 border-emerald-800/40',
        follicleEn: 'Ruptured Graafian follicle releasing oocyte; transformation of follicular granulosum into the yellow Corpus Luteum.',
        follicleAr: 'انفجار الحويصلة وتحرر البويضة، وتحول بقايا جدار الحويصلة فوراً إلى الجسم الأصفر.'
      };
    }
    return {
      nameEn: 'Luteal (Secretory) Phase (Days 15–28)',
      nameAr: 'مرحلة تكوين الجسم الأصفر (الأيام ١٥ إلى ٢٨)',
      descEn: pregnancyOccurred
        ? 'Fertilization in upper third of Fallopian tube! Corpus luteum is maintained by embryonic hCG, keeping progesterone high and preventing menstruation.'
        : 'Corpus luteum secretes abundant Progesterone and Estrogen, increasing endometrial thickness, vascularity, and glandular secretions for potential embryo implantation.',
      descAr: pregnancyOccurred
        ? 'حدث إخصاب في الثلث الأول من قناة فالوب! يُفرز هرمون الحمل hCG ليمنع ضمور الجسم الأصفر، فيظل البروجستيرون مرتفعاً وتتوقف الدورة الشهرية.'
        : 'يفرز الجسم الأصفر كميات كبيرة من هرمون البروجستيرون، مما يزيد من سمك بطانة الرحم وإمدادها الدموي استعداداً لاستقبال الجنين.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/20 border-cyan-800/40',
      follicleEn: pregnancyOccurred
        ? 'Active, hyper-developed Corpus Luteum producing progesterone to sustain pregnancy until the placenta takes over at end of 3rd month.'
        : 'Mature Corpus Luteum actively secreting progesterone; begins gradual involution around Day 24-28 if unfertilized.',
      follicleAr: pregnancyOccurred
        ? 'جسم أصفر نشط ومتضخم يواصل إفراز البروجستيرون لتثبيت الحمل حتى نهاية الشهر الثالث حين تحل المشيمة محله.'
        : 'جسم أصفر مكتمل؛ يبدأ في الضمور التدريجي بنهاية الأسبوع الرابع إذا لم تخصب البويضة.'
    };
  };

  const phase = getPhaseInfo(currentDay);

  return (
    <div className="space-y-6">
      {/* Interactive Day Slider & Mode Toggle */}
      <div
        className={`rounded-2xl border p-5 sm:p-6 space-y-4 ${
          isContrast
            ? 'bg-black border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-500" />
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'المخطط التفاعلي لدورة الطمث والمبيض (٢٨ يوماً)' : 'Interactive 28-Day Ovarian & Menstrual Cycle'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'حرك مؤشر الأيام لمشاهدة التغيرات الهرمونية المتزامنة في المبيض وبطانة الرحم'
                : 'Scrub day slider to track synchronized hormonal peaks, ovarian maturation, and endometrium growth'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPregnancyOccurred((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                pregnancyOccurred
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md font-extrabold'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>{isArabic ? (pregnancyOccurred ? 'حالة إخصاب وحمل' : 'بدون إخصاب (عادية)') : (pregnancyOccurred ? 'Fertilized / Pregnant' : 'Unfertilized')}</span>
            </button>
          </div>
        </div>

        {/* Day Slider */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400">{isArabic ? 'اليوم ١ (بداية الطمث)' : 'Day 1 (Menses Start)'}</span>
            <span className="text-rose-400 text-sm font-mono font-black">
              {isArabic ? `اليوم ${toHindiDigits(currentDay)} من ٢٨` : `Day ${currentDay} of 28`}
            </span>
            <span className="text-slate-400">{isArabic ? 'اليوم ٢٨ (نهاية الدورة)' : 'Day 28 (Cycle End)'}</span>
          </div>

          <input
            type="range"
            min="1"
            max="28"
            value={currentDay}
            onChange={(e) => setCurrentDay(parseInt(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-2.5 bg-slate-800 rounded-lg"
          />

          {/* Key Milestones Bar */}
          <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-bold">
            <div className={`p-1 rounded-md ${currentDay <= 5 ? 'bg-rose-500/20 text-rose-300 font-black' : 'text-slate-500'}`}>
              {isArabic ? 'الطمث (١-٥)' : 'Menses (1-5)'}
            </div>
            <div className={`p-1 rounded-md ${currentDay > 5 && currentDay <= 13 ? 'bg-amber-500/20 text-amber-300 font-black' : 'text-slate-500'}`}>
              {isArabic ? 'نضج البويضة (٦-١٣)' : 'Follicular (6-13)'}
            </div>
            <div className={`p-1 rounded-md ${currentDay === 14 ? 'bg-emerald-500/20 text-emerald-300 font-black' : 'text-slate-500'}`}>
              {isArabic ? 'التبويض (١٤)' : 'Ovulation (14)'}
            </div>
            <div className={`p-1 rounded-md ${currentDay >= 15 ? 'bg-cyan-500/20 text-cyan-300 font-black' : 'text-slate-500'}`}>
              {isArabic ? 'الجسم الأصفر (١٥-٢٨)' : 'Luteal (15-28)'}
            </div>
          </div>
        </div>

        {/* Active Phase Banner */}
        <div className={`p-4 rounded-xl border ${phase.bg} space-y-1.5`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm font-black ${phase.color}`}>{phase.nameEn} / {phase.nameAr}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/60 border border-white/10 text-slate-300">
              {pregnancyOccurred ? (isArabic ? 'الجسم الأصفر مستمر' : 'Corpus Luteum Persists') : (isArabic ? 'دورة شهرية طبيعية' : 'Standard Menstrual Cycle')}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic ? phase.descAr : phase.descEn}
          </p>
          <div className="pt-2 border-t border-white/10 text-[11px] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-slate-200">
              <strong>{isArabic ? 'حالة المبيض:' : 'Ovarian Status:'}</strong>{' '}
              {isArabic ? phase.follicleAr : phase.follicleEn}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Hormone Levels Meter & Endometrial Thickness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* FSH */}
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'}`}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-extrabold text-blue-400">FSH (الهرمون المنبه للحويصلة)</span>
            <span className="font-mono font-bold text-slate-300">{fshVal.toFixed(1)} mIU/mL</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full transition-all duration-300" style={{ width: `${(fshVal / 25) * 100}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            {isArabic ? 'يفرزه الفص الأمامي للنخامية لإنضاج حويصلة جراف.' : 'Pituitary hormone stimulating Graafian follicle.'}
          </p>
        </div>

        {/* LH */}
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'}`}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-extrabold text-amber-400">LH (هرمون التبويض)</span>
            <span className="font-mono font-bold text-slate-300">{lhVal.toFixed(1)} mIU/mL</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${(lhVal / 60) * 100}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            {isArabic ? 'قمته يوم ١٤ تفجر الحويصلة وتحرر البويضة.' : 'Surge on Day 14 ruptures follicle (ovulation).'}
          </p>
        </div>

        {/* Estrogen */}
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'}`}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-extrabold text-rose-400">Estrogen (الإستروجين)</span>
            <span className="font-mono font-bold text-slate-300">{estVal.toFixed(0)} pg/mL</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-rose-500 h-full transition-all duration-300" style={{ width: `${(estVal / 350) * 100}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            {isArabic ? 'تفرزه حويصلة جراف لإنماء بطانة الرحم.' : 'Secreted by follicle; triggers endometrial proliferation.'}
          </p>
        </div>

        {/* Progesterone */}
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'}`}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-extrabold text-emerald-400">Progesterone (البروجستيرون)</span>
            <span className="font-mono font-bold text-slate-300">{progVal.toFixed(1)} ng/mL</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${(progVal / 25) * 100}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            {isArabic ? 'يفرزه الجسم الأصفر والمشيمة لزيادة سمك البطانة وتثبيت الحمل.' : 'Secreted by corpus luteum; maintains pregnancy.'}
          </p>
        </div>

        {/* Endometrial Thickness */}
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'}`}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-extrabold text-purple-400">{isArabic ? 'سمك بطانة الرحم' : 'Endometrial Thickness'}</span>
            <span className="font-mono font-bold text-slate-300">{endoVal.toFixed(1)} mm</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full transition-all duration-300" style={{ width: `${(endoVal / 8) * 100}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            {isArabic ? 'يصل لأعلى سمك وأوعية دموية في المرحلة الإفرازية.' : 'Peak vascularity & glandular secretion in luteal phase.'}
          </p>
        </div>
      </div>
    </div>
  );
};
