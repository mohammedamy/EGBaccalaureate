import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  CheckCircle2,
  Languages,
} from 'lucide-react';
import rosettaPhoto from '../../../assets/historyLab/rosetta_stone_1799.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface RosettaHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  scriptTypeAr: string;
  scriptTypeEn: string;
  descAr: string;
  descEn: string;
  linguisticSignificanceAr: string;
  linguisticSignificanceEn: string;
}

export const ROSETTA_HOTSPOTS: RosettaHotspot[] = [
  {
    id: 'hieroglyphs_top',
    xPct: 52,
    yPct: 18,
    titleAr: 'السجل العلوي: الكتابة الهيروغليفية (الخط المقدس)',
    titleEn: 'Top Register: Egyptian Hieroglyphs (Sacred Script)',
    scriptTypeAr: 'هيروغليفي كلاسيكي متأخر (14 سطراً متبقية)',
    scriptTypeEn: 'Late Classical Hieroglyphic (14 surviving lines)',
    descAr:
      'نُقش النص الهيروغليفي في أعلى الحجر لأنه "خط الآلهة والكهنة" المستخدم في المعابد الرسمية والنصوص الدينية والصلوات الملكية.',
    descEn:
      'Inscribed on the top register as the sacred monumental "Words of the Gods", reserved for temple walls, state decrees, and divine rituals.',
    linguisticSignificanceAr:
      'أثبت شامبليون عام 1822 أن الهيروغليفية ليست رموزاً سحرية بحتة، بل نظام كتابي مركب يجمع بين الحروف الصوتية (Phonograms) والرموز الفكرية (Ideograms) والمخصصات (Determinatives).',
    linguisticSignificanceEn:
      'Champollion proved in 1822 that hieroglyphs were not purely mystical symbols, but a sophisticated system combining phonetic signs, ideograms, and semantic determinatives.',
  },
  {
    id: 'cartouche_ptolemy',
    xPct: 62,
    yPct: 14,
    titleAr: 'الخرطوش الملكي لبطليموس الخامس',
    titleEn: 'Royal Cartouche of Ptolemy V Epiphanes',
    scriptTypeAr: 'خرطوش ملكي مطوق بحبل بيضاوي (Shenu)',
    scriptTypeEn: 'Royal Cartouche with Shenu loop',
    descAr:
      'الإطار البيضاوي الذي يحمي الاسم الملكي "ب-ت-و-ل-م-ي-س"، وكان مفتاح شامبليون الذهبي لفك رموز اللغة المصرية القديمة.',
    descEn:
      'The oval protective loop encasing the royal name "p-t-w-l-m-y-s", which served as Champollion’s master key to deciphering ancient Egyptian.',
    linguisticSignificanceAr:
      'بمقارنة الحروف اليونانية لكلمة PTOLEMAIOS مع الرموز الصوتية داخل الخرطوش، تم التعرف على قيم الحروف الأبجدية المصرية لأول مرة.',
    linguisticSignificanceEn:
      'By matching the Greek letters of PTOLEMAIOS to the hieroglyphs in the cartouche, the phonetic values of ancient Egyptian letters were unlocked.',
  },
  {
    id: 'demotic_middle',
    xPct: 50,
    yPct: 48,
    titleAr: 'السجل الأوسط: الخط الديموطيقي (الكتابة الشعبية)',
    titleEn: 'Middle Register: Demotic Script (Vernacular Script)',
    scriptTypeAr: 'الديموطيقية المصرية السريعة (32 سطراً)',
    scriptTypeEn: 'Cursive Egyptian Demotic (32 lines)',
    descAr:
      'الخط الشعبي الدارج الذي كان يكتب به عامة الشعب والكتبة الإداريون في معاملاتهم اليومية وعقودهم وتجارتهم في العصر البطلمي.',
    descEn:
      'The highly cursive, rapid script employed by everyday scribes and citizens for legal contracts, trade, and daily administrative affairs during the Ptolemaic period.',
    linguisticSignificanceAr:
      'يُمثل التطور اللغوي للمصرية المتأخرة، وهو الجسر المباشر الذي انحدرت منه الحروف الديموطيقية السبعة الباقية في الأبجدية القبطية.',
    linguisticSignificanceEn:
      'Represents Late Egyptian grammar and syntax, serving as the direct ancestor from which the 7 demotic letters were preserved into Coptic.',
  },
  {
    id: 'greek_bottom',
    xPct: 50,
    yPct: 80,
    titleAr: 'السجل السفلي: اللغة اليونانية القديمة (الخط الإداري)',
    titleEn: 'Bottom Register: Ancient Greek (Administrative Language)',
    scriptTypeAr: 'اليونانية الهيلينستية الكوينية (54 سطراً)',
    scriptTypeEn: 'Koine Greek (54 lines)',
    descAr:
      'لغة البلاط الحاكم والأسرة البطلمية الحاكمة في مصر منذ عهد بطليموس الأول حتى كليوباترا السابعة.',
    descEn:
      'The official language of the royal court and the Ptolemaic ruling dynasty in Egypt from Ptolemy I Soter through Cleopatra VII.',
    linguisticSignificanceAr:
      'كانت اليونانية هي النص الوحيد المقروء للعلماء الأوروبيين في القرن التاسع عشر، مما وفر "النص القياسي الموازي" لفك الشفرة.',
    linguisticSignificanceEn:
      'Ancient Greek was the only known readable text for 19th-century scholars, providing the baseline parallel translation for cracking the script.',
  },
  {
    id: 'broken_corner',
    xPct: 78,
    yPct: 8,
    titleAr: 'كسر الحجر وزاويته المفقودة',
    titleEn: 'Fractured Stele Corner & Provenance',
    scriptTypeAr: 'جرانودايوريت أسود (Granodiorite Stela)',
    scriptTypeEn: 'Black Granodiorite Stele fragment',
    descAr:
      'عُثر عليه ضابط الهندسة الفرنسي بيير فرانسوا بوشار عام 1799 أثناء ترميم قلعة قايتباي (طابية رشيد) خلال الحملة الفرنسية بقيادة نابليون بونابرت.',
    descEn:
      'Discovered by French engineering officer Pierre-François Bouchard in July 1799 while strengthening Fort Julien (Rashid) during Napoleon’s expedition.',
    linguisticSignificanceAr:
      'يبلغ ارتفاع الحجر الأصلي نحو 112 سم وعرضه 76 سم، وكان في الأصل جزءاً من لوحة نذرية أكبر كانت منصوبة في معبد سايس.',
    linguisticSignificanceEn:
      'The stele stands 112.3 cm high and 75.7 cm wide, originally erected inside a temple at Sais before being reused as building rubble in medieval Rashid.',
  },
];

interface CartoucheGlyph {
  symbol: string;
  gardiner: string;
  soundEn: string;
  soundAr: string;
  glyphMeaningEn: string;
  glyphMeaningAr: string;
}

export const PTOLEMY_CARTOUCHE_GLYPHS: CartoucheGlyph[] = [
  { symbol: '𓊪', gardiner: 'Q3', soundEn: 'P', soundAr: 'ب', glyphMeaningEn: 'Reed stool / mat base', glyphMeaningAr: 'مسند حصير / قاعدة قصب' },
  { symbol: '𓏏', gardiner: 'X1', soundEn: 'T', soundAr: 'ت', glyphMeaningEn: 'Loaf of bread', glyphMeaningAr: 'رغيف خبز مستدير' },
  { symbol: '𓍯', gardiner: 'V4', soundEn: 'W / O', soundAr: 'و', glyphMeaningEn: 'Lasso / curled cord loop', glyphMeaningAr: 'عقدة حبل / وهق ملتف' },
  { symbol: '𓃭', gardiner: 'E1', soundEn: 'L', soundAr: 'ل', glyphMeaningEn: 'Recumbent lion', glyphMeaningAr: 'أسد رابض' },
  { symbol: '𓅓', gardiner: 'G17', soundEn: 'M', soundAr: 'م', glyphMeaningEn: 'Barn owl', glyphMeaningAr: 'بومة حكيمة' },
  { symbol: '𓇋𓇋', gardiner: 'M17A', soundEn: 'Y / EE', soundAr: 'ي', glyphMeaningEn: 'Two flowering reeds', glyphMeaningAr: 'زوج من نبات الغاب المزهر' },
  { symbol: '𓋴', gardiner: 'S29', soundEn: 'S', soundAr: 'س', glyphMeaningEn: 'Folded linen cloth', glyphMeaningAr: 'قطعة كتان مطوية' },
];

export const CLEOPATRA_CARTOUCHE_GLYPHS: CartoucheGlyph[] = [
  { symbol: '𓏘', gardiner: 'W11', soundEn: 'K', soundAr: 'ك', glyphMeaningEn: 'Ring-stand for water jar', glyphMeaningAr: 'قاعدة إناء ماء فخاري' },
  { symbol: '𓃭', gardiner: 'E1', soundEn: 'L', soundAr: 'ل', glyphMeaningEn: 'Recumbent lion', glyphMeaningAr: 'أسد رابض' },
  { symbol: '𓇋', gardiner: 'M17', soundEn: 'E / I', soundAr: 'إ', glyphMeaningEn: 'Single flowering reed', glyphMeaningAr: 'ساق غاب مزهرة' },
  { symbol: '𓍯', gardiner: 'V4', soundEn: 'O / W', soundAr: 'و', glyphMeaningEn: 'Curled lasso cord', glyphMeaningAr: 'عقدة حبل ملتف' },
  { symbol: '𓊪', gardiner: 'Q3', soundEn: 'P', soundAr: 'ب', glyphMeaningEn: 'Reed stool / mat base', glyphMeaningAr: 'مسند حصير / قاعدة قصب' },
  { symbol: '𓄿', gardiner: 'G1', soundEn: 'A', soundAr: 'أ', glyphMeaningEn: 'Egyptian vulture', glyphMeaningAr: 'عقاب / رخمة مصرية' },
  { symbol: '𓏏', gardiner: 'X1', soundEn: 'T', soundAr: 'ت', glyphMeaningEn: 'Loaf of bread', glyphMeaningAr: 'رغيف خبز مستدير' },
  { symbol: '𓂋', gardiner: 'D21', soundEn: 'R', soundAr: 'ر', glyphMeaningEn: 'Human mouth', glyphMeaningAr: 'فم إنسان' },
  { symbol: '𓄿', gardiner: 'G1', soundEn: 'A', soundAr: 'ا', glyphMeaningEn: 'Egyptian vulture', glyphMeaningAr: 'عقاب / رخمة مصرية' },
];

export const RosettaStoneDeciphererStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<RosettaHotspot>(ROSETTA_HOTSPOTS[1]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [activeCartouche, setActiveCartouche] = useState<'ptolemy' | 'cleopatra'>('ptolemy');
  const [selectedGlyphIndex, setSelectedGlyphIndex] = useState<number>(0);

  const activeGlyphs = activeCartouche === 'ptolemy' ? PTOLEMY_CARTOUCHE_GLYPHS : CLEOPATRA_CARTOUCHE_GLYPHS;
  const currentGlyph = activeGlyphs[selectedGlyphIndex] || activeGlyphs[0];

  const openFullModal = () => {
    setModalData({
      imageUrl: rosettaPhoto,
      titleAr: 'حجر رشيد الأثري (1799م) — مفتاح فك رموز الحضارة المصرية',
      titleEn: 'The Rosetta Stone (1799 CE) — Master Key to Egyptian Hieroglyphs',
      subtitleAr: 'لوح الجرانودايوريت البازلتي بسجلاته الثلاثة وفك شامبليون للخرطوش الملكي',
      subtitleEn: 'The Granodiorite Trilingual Stele & Champollion Decipherment',
      dateOrEraAr: 'العصر البطلمي (196 ق.م) / الحملة الفرنسية (1799م) / فك الرموز (1822م)',
      dateOrEraEn: 'Ptolemaic Period (196 BCE) / French Expedition (1799 CE) / Decipherment (1822 CE)',
      locationAr: 'قلعة قايتباي برشيد (مصر) — محفوظ حالياً بالمتحف البريطاني',
      locationEn: 'Fort Julien, Rashid (Egypt) — British Museum Collection',
      descriptionAr:
        'لوح من صخر الجرانودايوريت الأسود نُقش عليه مرسوم ديني صدر في منف عام 196 ق.م في عهد الملك بطليموس الخامس، بثلاثة خطوط: الهيروغليفية والديموطيقية واليونانية القديمة. يُعد هذا الأثر أعظم اكتشاف في تاريخ علم الآثار المصرية (Egyptology) حيث مكن العالم الفرنسي جان فرانسوا شامبليون من قراءة اللغة المصرية القديمة بعد قرون من الاندثار.',
      descriptionEn:
        'A granodiorite stele inscribed with a decree issued at Memphis in 196 BCE on behalf of King Ptolemy V. The decree appears in three scripts: Ancient Egyptian hieroglyphs, Egyptian Demotic script, and Ancient Greek. Discovered in 1799 by Bouchard and deciphered by Jean-François Champollion in 1822, it remains the pivotal keystone in unlocking Egyptian civilization.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-stone-50 via-amber-50/40 to-slate-50 border-amber-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-stone-950 via-slate-900 to-amber-950/30 border-amber-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-500/20 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 via-stone-800 to-stone-950 flex items-center justify-center text-amber-200 shadow-lg border border-amber-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-black tracking-tight">
                {isArabic ? 'استوديو فك رموز حجر رشيد (1799م)' : 'Rosetta Stone Decipherment Studio (1799 CE)'}
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                🏛️ 4K Epigraphy
              </span>
            </div>
            <p className="text-xs text-amber-400/80">
              {isArabic
                ? 'فحص السجلات الثلاثية (هيروغليفي - ديموطيقي - يوناني) وفك خراطيش بطليموس وكليوباترا لشامبليون'
                : 'Trilingual register analysis (Hieroglyphs - Demotic - Greek) & Champollion royal cartouche solver'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="min-h-[44px] flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all border border-amber-400/30"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص الحجر الأصلي بدقة 4K' : 'Explore Original 4K Stone'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Macro Interactive 4K Photography View with Hotspots */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black group max-h-[560px]">
            <img
              src={rosettaPhoto}
              alt="Rosetta Stone (1799)"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pulsing Hotspots */}
            {ROSETTA_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-amber-400 text-stone-950 scale-125 ring-4 ring-amber-300/60 shadow-lg shadow-amber-500/50 z-20'
                      : 'bg-stone-900/80 text-amber-300 hover:bg-amber-500 hover:text-white border border-amber-400/60 shadow-md z-10'
                  }`}
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-60 absolute" />
                  <Sparkles className="w-4 h-4" />
                </button>
              );
            })}

            {/* Bottom Overlay Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur border border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="line-clamp-1 font-semibold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950/70 border border-amber-500/30 text-amber-300 shrink-0">
                196 BCE / 1799 CE
              </span>
            </div>
          </div>

          {/* Quick Register Switcher Pills */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <button
              onClick={() => setActiveHotspot(ROSETTA_HOTSPOTS[0])}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHotspot.id === 'hieroglyphs_top'
                  ? 'bg-amber-600 text-white border-amber-400 font-bold shadow-md'
                  : 'bg-black/30 border-amber-500/20 text-amber-300/80 hover:bg-amber-900/20'
              }`}
            >
              <div className="font-bold text-[11px]">{isArabic ? 'الهيروغليفية' : 'Hieroglyphs'}</div>
              <div className="text-[10px] opacity-75">{isArabic ? 'الخط المقدس' : 'Sacred Script'}</div>
            </button>
            <button
              onClick={() => setActiveHotspot(ROSETTA_HOTSPOTS[2])}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHotspot.id === 'demotic_middle'
                  ? 'bg-amber-600 text-white border-amber-400 font-bold shadow-md'
                  : 'bg-black/30 border-amber-500/20 text-amber-300/80 hover:bg-amber-900/20'
              }`}
            >
              <div className="font-bold text-[11px]">{isArabic ? 'الديموطيقية' : 'Demotic'}</div>
              <div className="text-[10px] opacity-75">{isArabic ? 'الخط الشعبي' : 'Vernacular'}</div>
            </button>
            <button
              onClick={() => setActiveHotspot(ROSETTA_HOTSPOTS[3])}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHotspot.id === 'greek_bottom'
                  ? 'bg-amber-600 text-white border-amber-400 font-bold shadow-md'
                  : 'bg-black/30 border-amber-500/20 text-amber-300/80 hover:bg-amber-900/20'
              }`}
            >
              <div className="font-bold text-[11px]">{isArabic ? 'اليونانية' : 'Greek'}</div>
              <div className="text-[10px] opacity-75">{isArabic ? 'الخط الإداري' : 'Administrative'}</div>
            </button>
          </div>
        </div>

        {/* Right Column: Active Hotspot Deep Inspection & Champollion Cartouche Solver */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Active Hotspot Info Card */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/70 border-amber-500/20'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? activeHotspot.scriptTypeAr : activeHotspot.scriptTypeEn}
              </span>
              <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isArabic ? 'فحص السجل' : 'Inspected Register'}
              </span>
            </div>
            <h4 className="text-base font-black mb-2 text-amber-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h4>
            <p className="text-xs leading-relaxed mb-3 text-stone-300">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
            <div
              className={`p-3 rounded-lg border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-black/40 border-amber-500/30 text-amber-200'
              }`}
            >
              <span className="font-bold block mb-1 text-amber-400">
                {isArabic ? '💡 الدلالة اللغوية والتاريخية في منهج الثانوية العامة:' : '💡 Curriculum Historical Takeaway:'}
              </span>
              {isArabic ? activeHotspot.linguisticSignificanceAr : activeHotspot.linguisticSignificanceEn}
            </div>
          </div>

          {/* Interactive Champollion Royal Cartouche Decipherer Studio */}
          <div
            className={`p-4 rounded-xl border space-y-4 ${
              isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-black/50 border-amber-500/20'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-amber-300">
                  {isArabic ? 'فك شفرة الخرطوش الملكي (طريقة شامبليون 1822):' : 'Royal Cartouche Decipherer (Champollion Method):'}
                </h4>
              </div>

              {/* Cartouche Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-stone-900 border border-amber-500/30 text-xs">
                <button
                  onClick={() => {
                    setActiveCartouche('ptolemy');
                    setSelectedGlyphIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded font-bold transition-all ${
                    activeCartouche === 'ptolemy'
                      ? 'bg-amber-500 text-stone-950 font-black'
                      : 'text-amber-300 hover:text-white'
                  }`}
                >
                  {isArabic ? 'بطليموس (Ptolemy)' : 'Ptolemy'}
                </button>
                <button
                  onClick={() => {
                    setActiveCartouche('cleopatra');
                    setSelectedGlyphIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded font-bold transition-all ${
                    activeCartouche === 'cleopatra'
                      ? 'bg-amber-500 text-stone-950 font-black'
                      : 'text-amber-300 hover:text-white'
                  }`}
                >
                  {isArabic ? 'كليوباترا (Cleopatra)' : 'Cleopatra'}
                </button>
              </div>
            </div>

            {/* Royal Cartouche Graphical Display */}
            <div className="p-3 rounded-2xl border-2 border-amber-400/80 bg-gradient-to-r from-amber-950/40 via-stone-950 to-amber-950/40 flex flex-wrap items-center justify-center gap-2 py-4">
              <span className="text-2xl text-amber-400 font-mono font-bold">[</span>
              {activeGlyphs.map((glyph, idx) => {
                const isSelected = selectedGlyphIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedGlyphIndex(idx)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl min-w-[46px] border transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 border-amber-300 scale-110 shadow-lg font-black'
                        : 'bg-stone-900/70 border-amber-500/20 text-amber-200 hover:bg-amber-900/30'
                    }`}
                  >
                    <span className="text-2xl leading-none mb-1 font-serif">{glyph.symbol}</span>
                    <span className="text-[11px] font-mono font-bold">{glyph.soundEn}</span>
                  </button>
                );
              })}
              <span className="text-2xl text-amber-400 font-mono font-bold">]</span>
            </div>

            {/* Selected Glyph Breakdown Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-[10px] text-stone-400 block font-bold mb-0.5">
                  {isArabic ? 'الرمز الهيروغليفي:' : 'Hieroglyph Glyph:'}
                </span>
                <span className="text-2xl font-serif text-amber-300 font-bold block">{currentGlyph.symbol}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-[10px] text-stone-400 block font-bold mb-0.5">
                  {isArabic ? 'كود جاردنر (Gardiner):' : 'Gardiner Code:'}
                </span>
                <span className="text-sm font-mono text-amber-300 font-black">{currentGlyph.gardiner}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-[10px] text-stone-400 block font-bold mb-0.5">
                  {isArabic ? 'القيمة الصوتية:' : 'Phonetic Value:'}
                </span>
                <span className="text-sm font-mono text-amber-300 font-black">
                  {currentGlyph.soundEn} / {currentGlyph.soundAr}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-[10px] text-stone-400 block font-bold mb-0.5">
                  {isArabic ? 'الأصل التصويري:' : 'Pictorial Origin:'}
                </span>
                <span className="text-[11px] font-bold text-amber-200 line-clamp-2">
                  {isArabic ? currentGlyph.glyphMeaningAr : currentGlyph.glyphMeaningEn}
                </span>
              </div>
            </div>

            {/* Champollion Cross-Reference Principle */}
            <div className="p-2.5 rounded-xl border border-amber-500/20 bg-stone-900/50 text-[11px] leading-relaxed text-amber-300/90 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {isArabic
                  ? 'قاعدة شامبليون: باشتراك خرطوش بطليموس وخرطوش كليوباترا في الحروف (P, T, L, O)، استنتج شامبليون أن الكتابة الهيروغليفية كانت أبجدية صوتية في أسماء الأعلام، مما مكنه من فك نصوص المعابد بالكامل!'
                  : 'Champollion Principle: By cross-referencing letters shared between Ptolemy and Cleopatra (P, T, L, O), Champollion proved hieroglyphs operated phonetically in proper names, unlocking the entire Egyptian language.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={!!modalData}
        data={modalData}
        onClose={() => setModalData(null)}
        lang={isArabic ? 'ar' : 'en'}
        theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
      />
    </div>
  );
};
