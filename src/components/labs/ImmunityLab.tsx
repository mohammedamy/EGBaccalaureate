import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { ShieldCheck, Activity, Info, Sparkles } from 'lucide-react';
import antibodyImg from '../../assets/biology/antibody_igg_structure.jpg';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface AntibodyPart {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  formulaEn: string;
  formulaAr: string;
  examTipEn: string;
  examTipAr: string;
}

const ANTIBODY_PARTS: AntibodyPart[] = [
  {
    id: 'variable',
    nameEn: 'Variable Region (V_H & V_L) - Antigen Binding Sites',
    nameAr: 'المنطقة المتغيرة (موقعا الارتباط بالمولد المضاد)',
    descEn: 'Located at the N-terminal tips of both Fab arms. Consists of hypervariable amino acid sequences forming a 3D structural cleft uniquely complementary to a specific antigenic epitope (like a key to a lock).',
    descAr: 'توجد في طرفي ذراعي الجسم المضاد (المنطقة Fab)، وتتكون من تتابعات مميزة من الأحماض الأمينية تشكل موقع ارتباط ثلاثي الأبعاد يتطابق تماماً مع مولد الضد (الأنتيجين) كالقفل والمفتاح.',
    formulaEn: '2 identical antigen-binding sites per monomeric IgG molecule.',
    formulaAr: 'يحتوي كل جزيء جسم مضاد IgG مفرد على موقعي ارتباط متطابقين للأنتيجين.',
    examTipEn: 'The specificity of each antibody is determined by the shape, sequence, and conformational folding of the amino acids in its variable regions.',
    examTipAr: 'يرجع التخصص الدقيق لكل جسم مضاد لتشكل الأحماض الأمينية وترتيبها الفراغي في الجزء المتغير، مما يجعله خاصاً بنوع واحد من الأنتيجينات.'
  },
  {
    id: 'constant',
    nameEn: 'Constant Region (C_H & C_L)',
    nameAr: 'المنطقة الثابتة (سلسلتان ثقيلتان وخفيفتان)',
    descEn: 'Consists of invariable amino acid sequences identical within a class of antibodies (IgG, IgM, IgA, IgE, IgD). Forms the structural stalk and activates the complement cascade.',
    descAr: 'تتكون من تتابعات ثابتة من الأحماض الأمينية لا تختلف في جزيئات الصنف الواحد (IgG أو IgM أو IgA)، وتشارك في تنشيط النظام المتمم وتثبيته.',
    formulaEn: 'Fc region is composed of the paired constant domains of the heavy chains.',
    formulaAr: 'تتكون المنطقة المتبلورة (Fc) من النطاقات الثابتة للسلسلتين الثقيلتين.',
    examTipEn: 'All antibodies of the IgG class share the same constant region framework regardless of the antigen they target.',
    examTipAr: 'تتماثل المنطقة الثابتة في جميع الأجسام المضادة من نفس الفئة (مثل IgG) بصرف النظر عن نوع الأنتيجين المستهدف.'
  },
  {
    id: 'disulfide',
    nameEn: 'Disulfide Bridges (S-S Bonds)',
    nameAr: 'الروابط الكبريتيدية الثنائية (S-S)',
    descEn: 'Covalent sulfur-to-sulfur bonds linking the two heavy chains together in the hinge region (2 interchain bonds) and linking each light chain to its adjacent heavy chain (1 interchain bond each) = 4 primary interchain bonds.',
    descAr: 'روابط تساهمية كبريتيدية ثنائية تربط السلسلتين الثقيلتين ببعضهما عند منطقة المفصلة (رابطتان)، وتربط كل سلسلة خفيفة بالسلسلة الثقيلة المجاورة (رابطة لكل جانب) = ٤ روابط بينية رئيسية.',
    formulaEn: '4 primary interchain disulfide bridges maintain the quaternary Y-structure.',
    formulaAr: '٤ روابط كبريتيدية ثنائية رئيسية تربط السلاسل الأربع معاً لتحافظ على شكل الحرف Y.',
    examTipEn: 'Exam question: Disulfide bonds are covalent bonds formed between cysteine amino acid residues containing sulfhydryl (-SH) groups.',
    examTipAr: 'سؤال وزاري متكرر: الروابط الكبريتيدية هي روابط تساهمية قوية تربط السلاسل البروتينية للأجسام المضادة وتتكون بين أحماض السيستين.'
  },
  {
    id: 'hinge',
    nameEn: 'Flexible Hinge Region',
    nameAr: 'منطقة المفصلة المرنة',
    descEn: 'Proline-rich flexible segment allowing the two Fab arms to articulate and open or close like scissors, enabling simultaneous binding to two distant antigens on a bacterial surface.',
    descAr: 'منطقة مرنة غنية بالبرولين تسمح لذراعي الجسم المضاد بالانفراج والاقتراب كالمقص للارتباط بمولدين متفرقين على سطح الميكروب في آن واحد.',
    formulaEn: 'Allows flexibility of angle between 0° and 180° for epitope capture.',
    formulaAr: 'تتيح حرية الحركة للذراعين بزاوية متغيرة للارتباط بأكثر من أنتيجين.',
    examTipEn: 'Enzymes like papain cleave at the hinge region to yield 2 Fab fragments and 1 Fc fragment.',
    examTipAr: 'منطقة المفصلة تمنح الجسم المضاد مرونة ميكانيكية فائقة في التقاط الأنتيجينات متعددة المسافات.'
  }
];

export const ImmunityLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedPart, setSelectedPart] = useState<AntibodyPart>(ANTIBODY_PARTS[0]);
  const [immunePathway, setImmunePathway] = useState<'humoral' | 'cellular'>('humoral');
  const [responseType, setResponseType] = useState<'primary' | 'secondary'>('secondary');

  return (
    <div className="space-y-6">
      {/* High-Res Antibody Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Anatomical Image Display */}
        <div
          className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col items-center justify-center relative overflow-hidden ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-slate-50 border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-extrabold flex items-center gap-1.5 text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic ? 'أطلس الأجسام المضادة (IgG) فائق الدقة' : 'High-Res IgG Antibody Atlas'}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">802 KB • 8K Render</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden border border-slate-700/60 shadow-lg group">
            <img
              src={antibodyImg}
              alt="Immunoglobulin G (IgG) Antibody Architecture"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-slate-200 flex justify-between items-center border border-white/10">
              <span>{isArabic ? 'التركيب الجزيئي للجسم المضاد IgG والروابط الكبريتيدية' : 'Molecular IgG Y-Structure with Disulfide Bridges'}</span>
              <span className="text-emerald-400 font-bold">{isArabic ? 'كامل' : 'Authentic'}</span>
            </div>
          </div>

          {/* Component Buttons */}
          <div className="grid grid-cols-2 gap-2 w-full mt-4">
            {ANTIBODY_PARTS.map((part) => {
              const isActive = selectedPart.id === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                    isActive
                      ? isContrast
                        ? 'bg-yellow-400 text-black font-black border-yellow-300'
                        : 'bg-blue-600 text-white font-extrabold shadow-md border-blue-500'
                      : isLight
                      ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {isArabic ? part.nameAr.split('(')[0] : part.nameEn.split('(')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Part Technical Dossier */}
        <div
          className={`lg:col-span-7 rounded-2xl border p-5 sm:p-6 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-lg font-black text-blue-400">
                {isArabic ? selectedPart.nameAr : selectedPart.nameEn}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                {isArabic ? selectedPart.formulaAr : selectedPart.formulaEn}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {isArabic ? 'التركيب الكيميائي' : 'Molecular Bio'}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic ? selectedPart.descAr : selectedPart.descEn}
          </p>

          {/* 5 Mechanisms of Antibody Action in Thanaweya Biology */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <h4 className="font-extrabold text-emerald-400">
              {isArabic ? 'طرق عمل الأجسام المضادة الخمسة في منهج الثانوية:' : 'Five Modes of Antibody Action in Exam Syllabus:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-bold text-cyan-400 block">{isArabic ? '١. التعادل (Neutralization):' : '1. Neutralization:'}</span>
                <span className="text-slate-400">{isArabic ? 'تحييد الفيروسات ومنعها من الالتصاق بغشاء الخلية أو نفاذ حمضها النووي.' : 'Preventing viral attachment and genome penetration into host cells.'}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-bold text-cyan-400 block">{isArabic ? '٢. التلازن والالتصاق (Agglutination):' : '2. Agglutination:'}</span>
                <span className="text-slate-400">{isArabic ? 'يقوم به IgM لاحتوائه على ١٠ مواقع ارتباط، فيجمع ميكروبات كثيرة لتبتلعها البلعمية.' : 'Characteristic of IgM (10 binding sites); aggregates microbes for phagocytosis.'}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-bold text-cyan-400 block">{isArabic ? '٣. الترسيب (Precipitation):' : '3. Precipitation:'}</span>
                <span className="text-slate-400">{isArabic ? 'يرتبط بالأنتيجينات الذائبة محولاً إياها لراسب غير ذائب يسهل التهامه.' : 'Converts soluble antigens into insoluble precipitates for easy phagocytosis.'}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-bold text-cyan-400 block">{isArabic ? '٤. التحلل (Lysis):' : '4. Lysis via Complements:'}</span>
                <span className="text-slate-400">{isArabic ? 'تنشيط المتممات التي تحلل غلاف الأنتيجين وتذيب محتوياته.' : 'Complements bind Fc and bore membrane attack complexes to lyse pathogen.'}</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
              <span className="font-bold text-amber-400 block">{isArabic ? '٥. إبطال مفعول السموم (Antitoxin):' : '5. Neutralization of Toxins:'}</span>
              <span className="text-slate-400">{isArabic ? 'ترتبط الأجسام المضادة بالسموم وتنشط المتممات لتتفاعل معها تفاعلاً متسلسلاً يبطل سميتها تماماً.' : 'Antibodies bind toxins, triggering a complement cascade that detoxifies them.'}</span>
            </div>
          </div>

          {/* Examination Insight */}
          <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-800/40 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-extrabold text-blue-400">
              <Info className="w-4 h-4 shrink-0" />
              <span>{isArabic ? 'ملاحظة امتحانية هامة:' : 'Key Examination Insight:'}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {isArabic ? selectedPart.examTipAr : selectedPart.examTipEn}
            </p>
          </div>
        </div>
      </div>

      {/* Dual Immune Mechanisms: Humoral vs Cell-Mediated & Primary vs Secondary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Humoral vs Cell-Mediated Pathway Simulator */}
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="font-black text-sm text-slate-100">
                {isArabic ? 'خطوات المناعة المكتسبة (الخلطية والخلوية)' : 'Acquired Immunity Cascade'}
              </h4>
            </div>

            <div className="flex items-center p-1 rounded-lg bg-slate-950 border border-slate-800">
              <button
                onClick={() => setImmunePathway('humoral')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  immunePathway === 'humoral' ? 'bg-emerald-600 text-white font-extrabold' : 'text-slate-400'
                }`}
              >
                {isArabic ? 'خلطية (بالأجسام المضادة)' : 'Humoral (B-cells)'}
              </button>
              <button
                onClick={() => setImmunePathway('cellular')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  immunePathway === 'cellular' ? 'bg-purple-600 text-white font-extrabold' : 'text-slate-400'
                }`}
              >
                {isArabic ? 'خلوية (بالخلايا التائية)' : 'Cell-Mediated (T-cells)'}
              </button>
            </div>
          </div>

          {immunePathway === 'humoral' ? (
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-400 block">
                  {isArabic ? '١. دور الخلايا البلعمية الكبيرة وعرض الأنتيجين:' : '1. Antigen Presentation via Macrophage:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'تبتلع البلعمية الميكروب وتفككه بإنزيمات الليسوسوم، ثم تربط شظايا الأنتيجين ببروتين التوافق النسيجي (MHC-II) وتعرضه على سطحها الخارجي.'
                    : 'Macrophage phagocytoses antigen, degrades it with lysosomal enzymes, complexes it with MHC-II, and presents it on cell membrane.'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-cyan-400 block">
                  {isArabic ? '٢. تنشيط الخلايا التائية المساعدة (T_H):' : '2. Helper T-Cell (T_H) Activation:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'تتعرف الخلايا التائية المساعدة بواسطة مستقبلها CD4 على مركب (MHC + أنتيجين) فتتحول لخلية منشطة وتفرز بروتينات الإنترلوكينات.'
                    : 'T_H cells bind antigen-MHC complex via CD4 receptor, become activated, and release Interleukins.'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-400 block">
                  {isArabic ? '٣. انقسام الخلايا البائية لـ بلازمية وذاكرة:' : '3. B-Cell Clonal Expansion:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'تنشط الإنترلوكينات الخلايا البائية، فتنقسم إلى خلايا بائية ذاكرة (تبقى ٢٠-٣٠ سنة) وخلايا بائية بلازمية تنتج آلاف الأجسام المضادة المتخصصة.'
                    : 'Interleukins activate B-cells to divide into Memory B-cells (persist for decades) and Plasma cells that pump specific antibodies into blood and lymph.'}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-purple-400 block">
                  {isArabic ? '١. إفراز السيتوكينات وتنشيط المناعة الخلوية:' : '1. Cytokine Cascade Activation:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'تفرز التائية المساعدة المنشطة بروتينات السيتوكينات لجذب البلعمية وتنشيط الخلايا القاتلة الطبيعية (NK) والتائية السامة (T_C).'
                    : 'Activated T_H cells secrete Cytokines to recruit macrophages, activate Natural Killer (NK) cells, and trigger cytotoxic T-cells (T_C).'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-rose-400 block">
                  {isArabic ? '٢. آلية الخلايا التائية السامة (T_C) بالبيرفورين والسموم الليمفاوية:' : '2. Cytotoxic T-Cell (T_C) Lethal Attack:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'ترتبط T_C بمستقبل CD8 بالخلايا السرطانية أو المصابة بفيروس أو الأعضاء المزروعة، وتفرز بروتين البيرفورين (صانع الثقوب في غشاء الخلية) والسموم الليمفاوية التي تنشط جينات تدمر نواة الخلية المصابة.'
                    : 'T_C cells bind targets via CD8 and secrete Perforin (puncturing cell membrane) and Lymphotoxins (activating apoptotic nuclear nucleases).'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 block">
                  {isArabic ? '٣. دور الخلايا التائية المثبطة (T_S) والليمفوكينات:' : '3. Suppressor T-Cells (T_S) & Lymphokines:'}
                </span>
                <p className="text-slate-300 text-[11px]">
                  {isArabic
                    ? 'بعد القضاء على الميكروب، ترتبط التائية المثبطة T_S بمستقبل CD8 وتفرز بروتينات الليمفوكينات لتكبح استجابة B و T وتوقف إنتاج الأجسام المضادة.'
                    : 'After antigen clearance, T_S cells bind via CD8 and secrete Lymphokines to suppress B and T cells and induce apoptosis in excess plasma cells.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Primary vs Secondary Immune Response Curve */}
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              <h4 className="font-black text-sm text-slate-100">
                {isArabic ? 'منحنى الاستجابة المناعية (أولية وثانوية)' : 'Primary vs Secondary Response Curve'}
              </h4>
            </div>

            <div className="flex items-center p-1 rounded-lg bg-slate-950 border border-slate-800">
              <button
                onClick={() => setResponseType('primary')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  responseType === 'primary' ? 'bg-amber-600 text-white font-extrabold' : 'text-slate-400'
                }`}
              >
                {isArabic ? 'أولية (أول تعرض)' : 'Primary'}
              </button>
              <button
                onClick={() => setResponseType('secondary')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  responseType === 'secondary' ? 'bg-emerald-600 text-white font-extrabold' : 'text-slate-400'
                }`}
              >
                {isArabic ? 'ثانوية (خلايا الذاكرة)' : 'Secondary'}
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-400">{isArabic ? 'سرعة الاستجابة:' : 'Response Speed:'}</span>
              <span className={responseType === 'secondary' ? 'text-emerald-400 font-black' : 'text-amber-400 font-black'}>
                {responseType === 'secondary' ? (isArabic ? 'فورية وخاطفة (ساعات)' : 'Immediate (Hours)') : (isArabic ? 'بطيئة (٥ إلى ١٠ أيام)' : 'Slow (5 - 10 days lag)')}
              </span>
            </div>

            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-400">{isArabic ? 'تركيز الأجسام المضادة (Titer):' : 'Antibody Titer Peak:'}</span>
              <span className={responseType === 'secondary' ? 'text-emerald-400 font-black' : 'text-amber-400 font-black'}>
                {responseType === 'secondary' ? (isArabic ? 'هائل ومرتفع جداً (١٠٠ ضعف)' : 'Very High (100x)') : (isArabic ? 'متوسط ومحدود' : 'Moderate')}
              </span>
            </div>

            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-400">{isArabic ? 'ظهور الأعراض المرضية:' : 'Disease Symptoms:'}</span>
              <span className={responseType === 'secondary' ? 'text-emerald-400 font-black' : 'text-rose-400 font-black'}>
                {responseType === 'secondary' ? (isArabic ? 'لا تظهر أعراض (حماية فورية)' : 'No Symptoms (Immune)') : (isArabic ? 'تظهر الأعراض كاملة لبطء الاستجابة' : 'Symptoms Appear')}
              </span>
            </div>

            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-400">{isArabic ? 'الخلايا المسؤولة:' : 'Responsible Cells:'}</span>
              <span className="text-cyan-400 font-black">
                {responseType === 'secondary' ? (isArabic ? 'خلايا الذاكرة البائية والتائية' : 'Memory B & T Cells') : (isArabic ? 'الخلايا البائية والتائية الأولية' : 'Naive B & T Lymphocytes')}
              </span>
            </div>

            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 leading-relaxed">
              {responseType === 'secondary'
                ? (isArabic
                    ? 'في الاستجابة الثانوية، تنشط خلايا الذاكرة فور دخول نفس الميكروب وتنقسم سريعاً لإنتاج كميات هائلة من الأجسام المضادة والخلايا القاتلة فتقضي على الميكروب قبل أن تظهر أي أعراض للمرض.'
                    : 'In secondary immune response, memory cells recognize the antigen immediately, proliferating into antibody-secreting plasma cells that destroy the pathogen before symptoms can manifest.')
                : (isArabic
                    ? 'في الاستجابة الأولية، تستغرق الخلايا الليمفاوية وقتاً (٥-١٠ أيام) للتعرف على الميكروب والانقسام والتضاعف، وخلال هذا الوقت يتكاثر الميكروب وتظهر أعراض المرض على الشخص.'
                    : 'In primary response, naive lymphocytes require 5-10 days to recognize, clone, and synthesize antibodies, allowing the pathogen to replicate and clinical symptoms to appear.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
