import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Dna,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

// High-resolution scientific photos
import sarcomereImg from '../../assets/biology/sarcomere_ultrastructure.jpg';
import dnaImg from '../../assets/biology/dna_double_helix.jpg';

import { EndocrineLab } from './EndocrineLab';
import { MenstrualCycleLab } from './MenstrualCycleLab';
import { ImmunityLab } from './ImmunityLab';
import { GeneticsLab } from './GeneticsLab';
import { BioenergeticsLab } from './BioenergeticsLab';
import { BiologyFlashcards } from './BiologyFlashcards';
import { VirtualMicroscope } from '../../core/instruments/VirtualMicroscope';
import { SarcomereZoomLab } from './SarcomereZoomLab';
import { PlantHistologyLab } from './PlantHistologyLab';
import { SkeletonAnatomyLab } from './SkeletonAnatomyLab';

export type BioTab =
  | 'skeleton'
  | 'sarcomere'
  | 'dna'
  | 'plant'
  | 'microscope'
  | 'endocrine'
  | 'menstrual'
  | 'immunity'
  | 'genetics'
  | 'bioenergetics'
  | 'flashcards';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: BioTab;
}



// Complete Standard Genetic Code Table (All 64 Codons)
const GENETIC_CODE: Record<string, { aa: string; nameEn: string; nameAr: string }> = {
  // U row (16 codons)
  UUU: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUC: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UCU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCA: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCG: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UAU: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروسين' },
  UAC: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروسين' },
  UAA: { aa: 'STOP', nameEn: 'Stop Codon (Ochre)', nameAr: 'كودون وقف' },
  UAG: { aa: 'STOP', nameEn: 'Stop Codon (Amber)', nameAr: 'كودون وقف' },
  UGU: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين' },
  UGC: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين' },
  UGA: { aa: 'STOP', nameEn: 'Stop Codon (Opal)', nameAr: 'كودون وقف' },
  UGG: { aa: 'Trp', nameEn: 'Tryptophan', nameAr: 'تريبتوفان' },

  // C row (16 codons)
  CUU: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUC: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CCU: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCC: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCA: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCG: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CAU: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين' },
  CAC: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين' },
  CAA: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين' },
  CAG: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين' },
  CGU: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGC: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },

  // A row (16 codons)
  AUU: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  AUC: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  AUA: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  AUG: { aa: 'Met', nameEn: 'Methionine (Start)', nameAr: 'ميثيونين (بدء)' },
  ACU: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACC: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACA: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACG: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  AAU: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين' },
  AAC: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين' },
  AAA: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  AAG: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  AGU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  AGC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  AGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  AGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },

  // G row (16 codons)
  GUU: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUC: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUA: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUG: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GCU: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCC: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCA: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCG: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GAU: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك' },
  GAC: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك' },
  GAA: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك' },
  GAG: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك' },
  GGU: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGC: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGA: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGG: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
};

export const BiologyLab: React.FC<Props> = ({ lang, theme = 'dark', initialTab }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<BioTab>(initialTab || 'skeleton');

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);




  // DNA sequence builder state
  const [dnaInput, setDnaInput] = useState<string>('ATGGCTTTCTAA');

  // DNA Complement & Translation calculation
  const cleanDna = dnaInput.toUpperCase().replace(/[^ATGC]/g, '');
  const complementDna = cleanDna
    .split('')
    .map((b) => {
      if (b === 'A') return 'T';
      if (b === 'T') return 'A';
      if (b === 'G') return 'C';
      if (b === 'C') return 'G';
      return '';
    })
    .join('');

  // mRNA Transcription (replace T with U)
  const mrnaSeq = cleanDna
    .split('')
    .map((b) => (b === 'T' ? 'U' : b))
    .join('');

  // Translation into codons and amino acids
  const codons: string[] = [];
  for (let i = 0; i < mrnaSeq.length; i += 3) {
    if (i + 3 <= mrnaSeq.length) {
      codons.push(mrnaSeq.substring(i, i + 3));
    }
  }

  const translatedPeptides = codons.map((codon) => {
    const entry = GENETIC_CODE[codon] || {
      aa: 'Xaa',
      nameEn: 'Unknown',
      nameAr: 'حمض غير معروف',
    };
    return { codon, ...entry };
  });

  // Calculate H-bonds: A-T = 2, G-C = 3
  const countA = (cleanDna.match(/A/g) || []).length + (cleanDna.match(/T/g) || []).length;
  const countGC = (cleanDna.match(/G/g) || []).length + (cleanDna.match(/C/g) || []).length;
  const totalHbonds = (countA / 2) * 2 + (countGC / 2) * 3;


  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-rose-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-rose-400 text-rose-400'
                : 'bg-gradient-to-br from-rose-500 to-pink-600 text-white border-rose-400/40 shadow-rose-500/20'
            }`}
          >
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الأحياء والبيولوجيا الجزيئية التفاعلي' : 'Virtual Biology & Molecular Genetics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-rose-400 text-black border-rose-300'
                    : isLight
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                }`}
              >
                Hi-Res Micro Atlas
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'أطلس تشريحي عالي الدقة (٢٠٦ عظمة)، محاكي انزلاق خيوط الساركومير، واستوديو اللولب المزدوج لترجمة الشفرة الوراثية'
                : 'High-resolution anatomical atlas (206 bones), sarcomere sliding filament engine, and DNA codon translation studio'}
            </p>
          </div>
        </div>

        {/* Subtabs Dropdown */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as BioTab)}
            className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500 ${
              isContrast
                ? 'bg-black text-white border-rose-400'
                : isLight
                ? 'bg-slate-100 border-slate-300 text-slate-800'
                : 'bg-slate-900 border-slate-800 text-slate-200'
            }`}
          >
            <option value="skeleton" className="bg-slate-900 text-white">
              🦴 {isArabic ? 'الهيكل العظمي البشري (٢٠٦ عظمة)' : 'Human Skeleton (206 Bones)'}
            </option>
            <option value="sarcomere" className="bg-slate-900 text-white">
              💪 {isArabic ? 'انزلاق الخيوط وانقباض الساركومير' : 'Sarcomere Contraction'}
            </option>
            <option value="dna" className="bg-slate-900 text-white">
              🧬 {isArabic ? 'استوديو اللولب المزدوج وتضاعف DNA' : 'DNA Studio & Replication'}
            </option>
            <option value="plant" className="bg-slate-900 text-white">
              🌿 {isArabic ? 'دعامة النبات ومجهر الأنسجة' : 'Plant Histology & Support'}
            </option>
            <option value="microscope" className="bg-slate-900 text-white">
              🔬 {isArabic ? 'المجهر الضوئي الافتراضي للشرائح' : 'Virtual Optical Microscope'}
            </option>
            <option value="endocrine" className="bg-slate-900 text-white">
              💉 {isArabic ? 'جهاز الغدد الصماء والاتزان الهرموني' : 'Endocrine System & Hormones'}
            </option>
            <option value="menstrual" className="bg-slate-900 text-white">
              🌸 {isArabic ? 'دورة الطمث ومراحل التبويض (٢٨ يوماً)' : 'Menstrual Cycle Simulation'}
            </option>
            <option value="immunity" className="bg-slate-900 text-white">
              🛡️ {isArabic ? 'الأجسام المضادة والمناعة التكيفية' : 'Immunology & IgG Antibodies'}
            </option>
            <option value="genetics" className="bg-slate-900 text-white">
              ✂️ {isArabic ? 'الوراثة ومربع بانيت وكريسبر' : 'Genetics & CRISPR Studio'}
            </option>
            <option value="bioenergetics" className="bg-slate-900 text-white">
              ⚡ {isArabic ? 'الطاقة الحيوية والتمثيل الغذائي وتكوين ATP' : 'Bioenergetics & ATP'}
            </option>
            <option value="flashcards" className="bg-slate-900 text-white">
              🗂️ {isArabic ? 'بطاقات الاستذكار السريع' : 'Active Flashcards'}
            </option>
          </select>
          <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* TAB 1: HUMAN SKELETON ANATOMY & BONE STUDIO */}
      {activeTab === 'skeleton' && (
        <div className="mt-6">
          <SkeletonAnatomyLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: SARCOMERE SLIDING FILAMENT ENGINE */}
      {activeTab === 'sarcomere' && (
        <div className="mt-6 space-y-6">
          {/* High-Res Banner */}
          <div
            className={`relative rounded-2xl overflow-hidden border shadow-xl ${
              isContrast ? 'border-rose-400' : 'border-slate-800'
            }`}
          >
            <img
              src={sarcomereImg}
              alt="Sarcomere Ultrastructure"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white uppercase tracking-wider">
                  Huxley Sliding Filament Theory
                </span>
                <h3 className="text-lg sm:text-2xl font-black mt-1">
                  {isArabic ? 'نظرية الخيوط المنزلقة (هكسلي) والتركيب الدقيق للقطعة العضلية' : 'Ultrastructure & Sliding Filament Simulation'}
                </h3>
                <p className="text-xs text-slate-200 max-w-2xl mt-1 leading-relaxed">
                  {isArabic
                    ? 'تمتد القطعة العضلية (الساركومير) بين خطي Z متتاليين. تتكون من خيوط أكتين رفيعة وخيوط ميوسين سميكة تمتد منها روابط مستعرضة بمساعدة أيونات الكالسيوم وATP.'
                    : 'A sarcomere extends between consecutive Z-discs. Thin actin filaments slide over thick myosin filaments via cross-bridges powered by Ca²⁺ and ATP hydrolysis.'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Scale Mechanical & Biochemical Simulator */}
          <SarcomereZoomLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 3: DNA DOUBLE HELIX & GENETIC CODE ENGINE */}
      {activeTab === 'dna' && (
        <div className="mt-6 space-y-6">
          {/* High-Res Banner */}
          <div
            className={`relative rounded-2xl overflow-hidden border shadow-xl ${
              isContrast ? 'border-rose-400' : 'border-slate-800'
            }`}
          >
            <img
              src={dnaImg}
              alt="DNA Double Helix 3D Structure"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-600 text-white uppercase tracking-wider">
                  Watson-Crick Double Helix & Central Dogma
                </span>
                <h3 className="text-lg sm:text-2xl font-black mt-1">
                  {isArabic ? 'استوديو اللولب المزدوج، نسخ mRNA وترجمة الشفرة الوراثية' : 'DNA Double Helix & Translation Studio'}
                </h3>
                <p className="text-xs text-slate-200 max-w-2xl mt-1 leading-relaxed">
                  {isArabic
                    ? 'شريطا DNA متعاكسان (5\' إلى 3\' و 3\' إلى 5\')، القواعد النيتروجينية ترتبط بروابط هيدروجينية (A=T برابطتين، G≡C بثلاث روابط). ينسخ منه mRNA ثم يُترجم إلى ببتيد أحماض أمينية.'
                    : 'Antiparallel DNA strands paired via hydrogen bonds (A=T has 2 H-bonds, G≡C has 3 H-bonds). Transcribed into mRNA and translated into a functional polypeptide.'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive DNA Sequence Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Sequence Builder */}
            <div
              className={`lg:col-span-7 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div>
                <label className="text-xs font-black text-slate-200 flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5">
                    <Dna className="w-4 h-4 text-cyan-400" />
                    <span>{isArabic ? 'شريط DNA الأساسي المقروء (اتجاه 5\' إلى 3\'):' : 'Template DNA Strand (5\' to 3\'):'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {isArabic ? `${toHindiDigits(cleanDna.length)} نيوكليوتيدة` : `${cleanDna.length} Nucleotides`}
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={dnaInput}
                    onChange={(e) => setDnaInput(e.target.value.toUpperCase())}
                    placeholder="e.g. ATGGCTTTCTAA"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold tracking-widest text-cyan-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button
                    onClick={() => setDnaInput('ATGGCTGCCTAA')}
                    className="px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 shrink-0 transition-all cursor-pointer"
                  >
                    {isArabic ? 'عينة' : 'Preset'}
                  </button>
                </div>
              </div>

              {/* DNA Duplex Rendering */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                {/* 5' to 3' Strand */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-rose-400 w-12 shrink-0">5' strand:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-1">
                    {cleanDna.split('').map((base, idx) => (
                      <span
                        key={`top-${idx}`}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border ${
                          base === 'A'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : base === 'T'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : base === 'G'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        {base}
                      </span>
                    ))}
                    <span className="text-slate-500 text-[10px] shrink-0">3'</span>
                  </div>
                </div>

                {/* Hydrogen Bonds Connecting */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 w-12 shrink-0">Bonds:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                    {cleanDna.split('').map((base, idx) => (
                      <span
                        key={`bond-${idx}`}
                        className="w-7 text-center text-[10px] text-slate-400 font-bold shrink-0"
                      >
                        {base === 'A' || base === 'T' ? '==' : '≡≡≡'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3' to 5' Complementary Strand */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyan-400 w-12 shrink-0">3' strand:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-1">
                    {complementDna.split('').map((base, idx) => (
                      <span
                        key={`bot-${idx}`}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border ${
                          base === 'A'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : base === 'T'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : base === 'G'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        {base}
                      </span>
                    ))}
                    <span className="text-slate-500 text-[10px] shrink-0">5'</span>
                  </div>
                </div>
              </div>

              {/* mRNA Transcription */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'نسخ الحمض النووي الريبوزي (mRNA):' : 'Transcribed mRNA Strand (5\' to 3\'):'}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {isArabic ? 'استبدال الثايمين (T) باليوراسيل (U)' : 'Thymine (T) replaced by Uracil (U)'}
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-indigo-300 tracking-wider overflow-x-auto py-1">
                  5'-{mrnaSeq}-3'
                </div>
              </div>

              {/* Ribosome Translation Chain */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <h5 className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isArabic ? 'ترجمة الريبوسوم إلى سلسلة عديد الببتيد (الأحماض الأمينية):' : 'Translated Polypeptide Amino Acid Chain:'}</span>
                </h5>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {translatedPeptides.length > 0 ? (
                    translatedPeptides.map((pep, idx) => (
                      <div
                        key={`pep-${idx}`}
                        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xs ${
                          pep.aa === 'STOP'
                            ? 'bg-red-500/20 border-red-500/50 text-red-300'
                            : pep.aa === 'Met'
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                            : 'bg-indigo-500/20 border-indigo-500/50 text-indigo-200'
                        }`}
                      >
                        <span className="text-[10px] text-slate-400">[{pep.codon}]</span>
                        <span className="font-black">{pep.aa}</span>
                        <span className="text-[10px] opacity-75">
                          ({isArabic ? pep.nameAr : pep.nameEn})
                        </span>
                        {idx < translatedPeptides.length - 1 && (
                          <span className="text-slate-500 font-sans mx-1">→</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">
                      {isArabic ? 'أدخل على الأقل كودوناً واحداً (٣ نيوكليوتيدات)' : 'Enter at least 3 nucleotides for a codon'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Chargaff Rules & Molecular Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <h4 className="text-xs font-black text-cyan-400 mb-3 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span>{isArabic ? 'قوانين شارجاف وحسابات الروابط الهيدروجينية:' : 'Chargaff Rules & Bonding Metrics:'}</span>
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'إجمالي الروابط الهيدروجينية في القطعة:' : 'Total Hydrogen Bonds in Duplex:'}
                    </span>
                    <span className="font-mono font-black text-rose-400 text-sm">
                      {isArabic ? `${toHindiDigits(totalHbonds)} رابطة` : `${totalHbonds} H-Bonds`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'روابط الأدنين-الثايمين الثنائية (A=T):' : 'A=T Double Bonds (2 per pair):'}
                    </span>
                    <span className="font-mono font-black text-amber-400">
                      {isArabic ? `${toHindiDigits(countA / 2)} أزواج` : `${countA / 2} Pairs`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'روابط الجوانين-السيتوزين الثلاثية (G≡C):' : 'G≡C Triple Bonds (3 per pair):'}
                    </span>
                    <span className="font-mono font-black text-cyan-400">
                      {isArabic ? `${toHindiDigits(countGC / 2)} أزواج` : `${countGC / 2} Pairs`}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 space-y-1.5">
                  <p className="font-black flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'أبعاد اللولب المزدوج (وفق نموذج واطسون وكريك):' : 'Canonical Dimensions (Watson-Crick Model):'}</span>
                  </p>
                  <ul className="list-disc list-inside text-[11px] space-y-1 text-slate-300">
                    <li>{isArabic ? 'قطر جزيء DNA يبلغ ٢ نانومتر (يتسع لبيورين مع بيريميدين)' : 'Diameter = 2.0 nm (fits one purine + one pyrimidine)'}</li>
                    <li>{isArabic ? 'اللفة الكاملة الواحدة تحتوي على ١٠ أزواج من القواعد بطول ٣.٤ نانومتر' : 'One complete turn = 10 base pairs (3.4 nm pitch)'}</li>
                    <li>{isArabic ? 'المسافة بين قاعدتين متتاليتين = ٠.٣٤ نانومتر' : 'Distance between consecutive base pairs = 0.34 nm'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PLANT HISTOLOGY, SUPPORT & MOVEMENTS STUDIO */}
      {activeTab === 'plant' && (
        <div className="mt-6">
          <PlantHistologyLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: VIRTUAL COMPOUND MICROSCOPE */}
      {activeTab === 'microscope' && (
        <div className="mt-6">
          <VirtualMicroscope lang={lang} />
        </div>
      )}

      {/* TAB 5: ENDOCRINE SYSTEM & HORMONAL FEEDBACK */}
      {activeTab === 'endocrine' && (
        <div className="mt-6">
          <EndocrineLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: 28-DAY MENSTRUAL & OVARIAN CYCLE */}
      {activeTab === 'menstrual' && (
        <div className="mt-6">
          <MenstrualCycleLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 7: IMMUNOLOGY & IGG ANTIBODY ARCHITECTURE */}
      {activeTab === 'immunity' && (
        <div className="mt-6">
          <ImmunityLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 8: PUNNETT SQUARES & ABO BLOOD GROUPS */}
      {activeTab === 'genetics' && (
        <div className="mt-6">
          <GeneticsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 9: BIOENERGETICS & CELLULAR METABOLISM */}
      {activeTab === 'bioenergetics' && (
        <div className="mt-6">
          <BioenergeticsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 10: ACTIVE RECALL FLASHCARDS & SPACED REPETITION */}
      {activeTab === 'flashcards' && (
        <div className="mt-6">
          <BiologyFlashcards lang={lang} theme={theme} />
        </div>
      )}
    </div>
  );
};
