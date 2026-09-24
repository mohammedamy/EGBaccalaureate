import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Users,
  Award,
  Zap,
  ShieldAlert,
  Compass,
  Briefcase,
  HeartHandshake,
} from 'lucide-react';
import lewinPhoto from '../../../assets/psychology/lewin_social_dynamics_1940.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface LewinHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  conceptAr: string;
  conceptEn: string;
  detailsAr: string;
  detailsEn: string;
  thanawyaRuleAr: string;
  thanawyaRuleEn: string;
}

export const LEWIN_HOTSPOTS: LewinHotspot[] = [
  {
    id: 'lifespace',
    xPct: 40,
    yPct: 24,
    titleAr: 'معادلة المجال النفسي: B = f(P, E)',
    titleEn: 'Topological Life-Space Equation: B = f(P, E)',
    conceptAr: 'السلوك (B) دالة تفاعلية بين الشخص (P) ومجاله وبيئته النفسية المحيطة (E).',
    conceptEn: 'Behavior (B) is a dynamic function of the Person (P) within their psychological Environment (E).',
    detailsAr: 'وضع كورت ليفين هذه المعادلة التأسيسية للتأكيد على أن سلوك الإنسان لا يمكن فهمه بعزل الفرد عن واقعه الاجتماعي ومناخ الجماعة التي ينتمي إليها.',
    detailsEn: 'Kurt Lewin formulated this topological law asserting that human actions cannot be deciphered in isolation from group climate and social field forces.',
    thanawyaRuleAr: 'التفاعل الاجتماعي: هو السلوك المتبادل بين الأفراد والجماعات في المواقف والمناسبات المختلفة، وهو أساس الحياة الاجتماعية وبداية تكوين العلاقات.',
    thanawyaRuleEn: 'Social Interaction Primacy: Reciprocal behavior among actors across social contexts forms the bedrock of enduring social relationships.',
  },
  {
    id: 'sociometric',
    xPct: 69,
    yPct: 28,
    titleAr: 'الشبكة السوسيومترية لديناميات الجماعة',
    titleEn: 'Sociometric Network & Group Dynamics Graph',
    conceptAr: 'تمثيل هندسي بياني للروابط وعلاقات القبول والرفض والتعاون والتنافس بين أفراد الجماعة.',
    conceptEn: 'Mathematical graph modeling affinities, rejections, alliances, and collaboration vectors across group members.',
    detailsAr: 'استخدم مركز أبحاث ديناميات الجماعة بجامعة MIT الرسوم السوسيومترية لكشف قنوات الاتصال والقيادة والتأثير، والتمييز بين القيادة الديمقراطية والأوتوقراطية.',
    detailsEn: 'MIT’s Group Dynamics center deployed sociograms to uncover influence channels, communication networks, and the superiority of democratic leadership styles.',
    thanawyaRuleAr: 'المناخ الديمقراطي في العمل: يؤكد علم النفس الاجتماعي أن القيادة التشاركية الديمقراطية تحقق أعلى إنتاجية وأعلى درجات الرضا النفسي وتمنع الصراع الهدام.',
    thanawyaRuleEn: 'Democratic Climate Impact: Participatory leadership yields peak productive synergy, intrinsic motivation, and defuses destructive friction.',
  },
  {
    id: 'conflict_vectors',
    xPct: 52,
    yPct: 44,
    titleAr: 'متجهات الصراع وقوى المجال الاجتماعي',
    titleEn: 'Social Conflict Vectors & Field Forces',
    conceptAr: 'توازن القوى الدافعة (Driving Forces) والقوى المقاومة (Restraining Forces) في تغيير الثقافة والسلوك.',
    conceptEn: 'Dynamic equilibrium between driving forces and restraining forces governing social transformation.',
    detailsAr: 'توضح الرسوم البيانية على اللوح تدافع الرغبات المتعارضة داخل الجماعة، وكيف يمكن تعديل المعايير السلوكية عبر إذابة الجمود (Unfreezing) ثم التغيير ثم التثبيت.',
    detailsEn: 'Illustrates conflicting valences within social cohorts and Lewin’s 3-stage organizational change model: unfreezing, transitioning, and refreezing norms.',
    thanawyaRuleAr: 'تغيير الاتجاهات: يكون تغيير الاتجاه سهلاً إذا كان الاتجاه هشاً وغير راسخ، ويكون شديد الصعوبة إذا ارتبط بالقيم الجوهرية للشخصية أو كان متعصباً.',
    thanawyaRuleEn: 'Attitude Modification Law: Attitudes change readily when weakly integrated, but resist modification when anchored in core values or fanaticism.',
  },
  {
    id: 'desk_researchers',
    xPct: 84,
    yPct: 60,
    titleAr: 'مكتب الباحثين والتجريب الاجتماعي التطبيقي',
    titleEn: 'Social Dynamics Experimental Research Team',
    conceptAr: 'البحث الإجرائي التطبيقي (Action Research) لخدمة قضايا المجتمع وحل مشكلاته الميدانية.',
    conceptEn: 'Action research bridging empirical laboratory experimentation with pragmatic community problem-solving.',
    detailsAr: 'أصر ليفين وفريقه على مقولته الشهيرة: «لا شيء أكثر عملية من نظرية جيدة»، موجهين أبحاثهم لمعالجة قضايا التعصب، العمل التطوعي، وثقافة الإنتاج الحر.',
    detailsEn: 'Lewin famously championed that "there is nothing as practical as a good theory," directing laboratory research toward prejudice reduction and voluntary initiatives.',
    thanawyaRuleAr: 'وظيفة علم الاجتماع التطبيقية: لا يكتفي بالتنظير التجريدي بل يسهم في ترشيد السياسات التعليمية والاقتصادية والتصدي لظواهر الانحراف والتطرف.',
    thanawyaRuleEn: 'Applied Sociology Mandate: Transcends abstract theorizing to actively guide economic policies, youth employment, and anti-extremism strategies.',
  },
];

export const LewinSocialDynamicsStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeHotspot, setActiveHotspot] = useState<LewinHotspot>(LEWIN_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Societal Issues Tab: 'voluntary' | 'freelance' | 'extremism'
  const [activeIssue, setActiveIssue] = useState<'voluntary' | 'freelance' | 'extremism'>('voluntary');

  // Extremism Level Selection: 'cognitive' | 'affective' | 'behavioral'
  const [extremismLevel, setExtremismLevel] = useState<'cognitive' | 'affective' | 'behavioral'>('cognitive');

  const openFullModal = () => {
    setModalData({
      imageUrl: lewinPhoto,
      titleAr: 'مختبر ديناميات الجماعة لكورت ليفين (MIT، 1940م) — علم النفس الاجتماعي ونظرية المجال',
      titleEn: 'Kurt Lewin’s Research Center for Group Dynamics (MIT, 1940s) — Topological Field Theory',
      subtitleAr: 'لوح معادلات الفضاء الحياتي B = f(P, E) والشبكات السوسيومترية للتفاعل الاجتماعي',
      subtitleEn: 'Topological Life-Space Blackboard, Sociometric Networks, and Group Action Research',
      dateOrEraAr: 'أربعينيات القرن العشرين (1940s) — ولادة علم النفس الاجتماعي والديناميات الجماعية',
      dateOrEraEn: '1940s (Birth of Modern Social Psychology & Group Dynamics)',
      locationAr: 'مركز أبحاث ديناميات الجماعة — كامبريدج، ماساتشوستس (MIT)، الولايات المتحدة',
      locationEn: 'Research Center for Group Dynamics — MIT, Cambridge, Massachusetts (USA)',
      descriptionAr:
        'صورة أرشيفية وثائقية نادرة بدقة 4K لمختبر كورت ليفين في معهد ماساتشوستس للتكنولوجيا (MIT). تظهر السبورة الحجرية الداكنة المليئة بمعادلات الفضاء النفسي والحياتي، والرسوم الهندسية للشبكات السوسيومترية، ومتجهات الصراع الاجتماعي، موثقة الفريق البحثي الذي أرسى قواعد علم النفس الاجتماعي التطبيقي ودراسة التفاعل والعمليات الجماعية.',
      descriptionEn:
        'A rare 4K archival photograph from the 1940s of Kurt Lewin’s Research Center for Group Dynamics at MIT. Displays the slate chalkboard inscribed with topological life-space equations B = f(P, E), sociometric network interaction matrices, and social force vector diagrams, encapsulating the pioneering birth of experimental social psychology.',
    });
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
        isLight
          ? 'bg-stone-50/95 border-amber-200 text-stone-900'
          : isContrast
          ? 'bg-black border-yellow-400 text-white'
          : 'bg-stone-950/95 border-amber-900/40 text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div
        className={`px-5 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
          isLight
            ? 'bg-amber-100/60 border-amber-200 text-amber-950'
            : isContrast
            ? 'bg-yellow-950/40 border-yellow-500 text-yellow-300'
            : 'bg-amber-950/30 border-amber-900/40 text-amber-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shadow-inner">
            <Users className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-black tracking-wide flex items-center gap-2">
              <span>{isArabic ? 'مختبر ديناميات الجماعة والقضايا المجتمعية (1940م)' : 'Lewin Group Dynamics & Societal Issues Studio (1940s)'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isArabic ? 'علم النفس والاجتماع التطبيقي' : 'Applied Social Psychology'}
              </span>
            </h3>
            <p className="text-xs text-stone-400">
              {isArabic
                ? 'استكشف لوح كورت ليفين، الشبكة السوسيومترية، العمل التطوعي، العمل الحر، ومستويات التطرف'
                : 'Explore Lewin’s life-space board, sociometric network, volunteerism, freelance enterprise & extremism levels'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-600/80 hover:bg-amber-500 text-white shadow-md active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير المختبر 4K' : '4K Archival Zoom'}</span>
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5">
        {/* Left / Top: 4K Canvas with Pulsating Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-black aspect-[16/9] group select-none">
            <img
              src={lewinPhoto}
              alt="Kurt Lewin Research Center for Group Dynamics 1940"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspots */}
            {LEWIN_HOTSPOTS.map((hotspot) => {
              const isActive = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ left: `${hotspot.xPct}%`, top: `${hotspot.yPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin focus:outline-none"
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <span
                    className={`absolute -inset-2 rounded-full animate-ping opacity-60 pointer-events-none ${
                      isActive ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                  />
                  <div
                    className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500 border-white text-stone-950 scale-125 ring-4 ring-amber-400/40'
                        : 'bg-stone-900/90 border-amber-400 text-amber-300 hover:scale-110 hover:bg-amber-900/80'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/85 backdrop-blur-md text-[11px] font-semibold text-amber-200 px-2 py-0.5 rounded border border-amber-500/30 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                    {isArabic ? hotspot.titleAr.split(':')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20 font-medium">
                {isArabic ? 'انقر لفحص معادلة المجال والشبكة السوسيومترية للجماعة' : 'Click markers to inspect Lewin’s life-space chalkboard'}
              </span>
              <span className="hidden sm:inline bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-500/30">
                {isArabic ? 'معهد MIT 1940م' : 'MIT Lab 1940s'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {LEWIN_HOTSPOTS.map((h) => {
              const isSelected = activeHotspot.id === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-start flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
                      : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:border-amber-500/40 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] text-amber-400/80 uppercase font-mono tracking-wider">
                    {h.id.toUpperCase()}
                  </span>
                  <span className="line-clamp-1">{isArabic ? h.titleAr.split(':')[0] : h.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Deep Inspection Drawer */}
          <div className="p-4 rounded-xl border border-amber-500/20 bg-stone-900/60 backdrop-blur-sm space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-amber-200">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h4>
              </div>
              <span className="text-xs font-mono text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded">
                {activeHotspot.id}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'المفهوم النظري والتطبيقي:' : 'Theoretical & Applied Concept:'}
              </span>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-stone-800/60">
                {isArabic ? activeHotspot.conceptAr : activeHotspot.conceptEn}
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isArabic ? activeHotspot.detailsAr : activeHotspot.detailsEn}
            </p>

            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 استنتاج واضع الامتحان الوزاري في علم الاجتماع:' : '🎯 Ministerial Exam Insight:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeHotspot.thanawyaRuleAr : activeHotspot.thanawyaRuleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Contemporary Societal Issues Suite */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl border border-amber-500/30 bg-stone-900/50 space-y-4">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800 pb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'مختبر قضايا المجتمع المعاصر (الوحدة الثانية والثالثة)' : 'Contemporary Societal Issues Suite'}</span>
            </h4>

            {/* 3 Issues Mode Tabs */}
            <div className="grid grid-cols-3 gap-1.5 text-xs font-bold">
              {[
                { id: 'voluntary', labelAr: 'العمل التطوعي', labelEn: 'Voluntary Work', icon: HeartHandshake },
                { id: 'freelance', labelAr: 'العمل الحر', labelEn: 'Freelance Work', icon: Briefcase },
                { id: 'extremism', labelAr: 'ظاهرة التطرف', labelEn: 'Extremism Levels', icon: ShieldAlert },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIssue(tab.id as any)}
                    className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center gap-1 ${
                      activeIssue === tab.id
                        ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-md'
                        : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Voluntary Work */}
            {activeIssue === 'voluntary' && (
              <div className="space-y-3 bg-black/40 p-3.5 rounded-xl border border-stone-800 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-400">{isArabic ? 'ثقافة العمل التطوعي (تعريف روزاريو):' : 'Voluntary Work (Rozario Definition):'}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    {isArabic ? 'التزام أخلاقي إرادي' : 'Altruistic Duty'}
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  {isArabic
                    ? '«أن ينخرط الفرد في أنشطة تمنح وقته وجهده وطاقته لمساعدة مجتمعه دون توقع عائد مادي، بدافع إنساني وأخلاقي ووطني يعزز الانتماء».'
                    : 'Engaging freely in community enhancement by dedicating time and skill without material compensation, driven by civic and ethical responsibility.'}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded bg-stone-900 border border-stone-800">
                    <span className="font-bold text-amber-300 block mb-1">{isArabic ? '1. سلوك تطوعي غير مقصود' : '1. Unintentional Act'}</span>
                    <p className="text-[10px] text-stone-400">
                      {isArabic ? 'ممارسة عفوية تلبي نداء استغاثة عاجل (كإنقاذ غريق أو إسعاف مصاب في حادث طريق).' : 'Spontaneous immediate response to an emergency crisis.'}
                    </p>
                  </div>
                  <div className="p-2 rounded bg-stone-900 border border-stone-800">
                    <span className="font-bold text-emerald-300 block mb-1">{isArabic ? '2. فعل تطوعي مقصود' : '2. Intentional Program'}</span>
                    <p className="text-[10px] text-stone-400">
                      {isArabic ? 'عمل مخطط ومنظم ضمن جمعية أو مبادرة مستمرة (كمحو أمية الكبار أو كفالة الأيتام).' : 'Deliberate, organized involvement in enduring community institutions.'}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300">
                  🎯 {isArabic ? 'قيمة العمل التطوعي للفرد: يحد من الأنانية، يعزز الثقة بالنفس، ويوفر مهارات عملية لا يتيحها التعليم الأكاديمي.' : 'Psychological Value: Alleviates narcissism, elevates self-efficacy, and grants invaluable vocational competencies.'}
                </div>
              </div>
            )}

            {/* Tab 2: Freelance Entrepreneurship */}
            {activeIssue === 'freelance' && (
              <div className="space-y-3 bg-black/40 p-3.5 rounded-xl border border-stone-800 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sky-400">{isArabic ? 'ثقافة العمل الحر (بيئة ديفيدسون وبلو):' : 'Freelance Enterprise Ecosystem:'}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                    {isArabic ? 'استقلالية وابتكار' : 'Autonomy & Risk'}
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  {isArabic
                    ? 'عمل لا يتبع جهة حكومية أو خاصة، ويكون الفرد فيه مسؤولاً بالكامل عن مخرجاته وأرباحه ومخاطره (مثل الطبيب في عيادته، والمبرمج المستقل).'
                    : 'Autonomous professional activity not tethered to state or corporate bureaucracy, where the entrepreneur bears total responsibility for outcomes.'}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    {isArabic ? 'متطلبات العمل الحر الأساسية (ثانوية عامة):' : 'Core Freelance Requirements:'}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded bg-stone-900 border border-stone-800">
                      <span className="font-bold text-amber-400 block mb-0.5">{isArabic ? 'أ. التخطيط (Planning):' : 'A. Planning:'}</span>
                      <ul className="space-y-0.5 text-stone-300 list-disc list-inside">
                        <li>{isArabic ? 'تحديد السوق والعملاء' : 'Market identification'}</li>
                        <li>{isArabic ? 'تحديد الأولويات' : 'Prioritizing initiatives'}</li>
                        <li>{isArabic ? 'مسائل التمويل والدعم' : 'Capital financing'}</li>
                      </ul>
                    </div>
                    <div className="p-2 rounded bg-stone-900 border border-stone-800">
                      <span className="font-bold text-sky-400 block mb-0.5">{isArabic ? 'ب. الأداء (Performance):' : 'B. Performance:'}</span>
                      <ul className="space-y-0.5 text-stone-300 list-disc list-inside">
                        <li>{isArabic ? 'حساب التكلفة والكفاءة' : 'Cost & efficiency'}</li>
                        <li>{isArabic ? 'المواءمة مع العملاء' : 'Client alignment'}</li>
                        <li>{isArabic ? 'إدارة الوقت والشفافية' : 'Time & transparency'}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300">
                  💡 {isArabic ? 'رؤية بلو (Blue): التغيرات التكنولوجية والاقتصادية تقلص فرص التوظيف الثابت وتجعل العمل الحر الخيار الأذكى للمستقبل.' : 'Blue’s Theorem: Technological automation compresses corporate positions, elevating freelance entrepreneurship.'}
                </div>
              </div>
            )}

            {/* Tab 3: Extremism Levels */}
            {activeIssue === 'extremism' && (
              <div className="space-y-3 bg-black/40 p-3.5 rounded-xl border border-stone-800 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-rose-400">{isArabic ? 'مستويات التطرف الثلاثة عند الشباب:' : 'The 3 Levels of Extremism:'}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">
                    {isArabic ? 'الجمود الفكري' : 'Dogmatic Rigidity'}
                  </span>
                </div>

                {/* 3 Level Selector Buttons */}
                <div className="grid grid-cols-3 gap-1.5 font-bold">
                  {[
                    { id: 'cognitive', labelAr: '1. المعرفي', labelEn: '1. Cognitive' },
                    { id: 'affective', labelAr: '2. الوجداني', labelEn: '2. Affective' },
                    { id: 'behavioral', labelAr: '3. السلوكي', labelEn: '3. Behavioral' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setExtremismLevel(lvl.id as any)}
                      className={`p-1.5 rounded-lg border text-center transition-all ${
                        extremismLevel === lvl.id
                          ? 'bg-rose-500 text-white font-black border-rose-400 shadow-md'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-rose-500/40'
                      }`}
                    >
                      {isArabic ? lvl.labelAr : lvl.labelEn}
                    </button>
                  ))}
                </div>

                {/* Level Details */}
                <div className="p-2.5 rounded-lg bg-stone-900/90 border border-rose-500/30 text-[11px] leading-relaxed">
                  {extremismLevel === 'cognitive' && (
                    <>
                      <div className="font-bold text-rose-300 mb-1">{isArabic ? 'المستوى المعرفي (Cognitive Level):' : 'Cognitive Level:'}</div>
                      <p className="text-stone-300">
                        {isArabic
                          ? 'يتجلى في الجمود العقلي الشديد، والجهل بالحقائق العلمية، والعجز التام عن إعمال العقل وقبول وجهات النظر الأخرى أو إدراك النسبية الفكرية.'
                          : 'Manifests in dogmatic close-mindedness, profound ignorance of empirical nuance, and absolute incapacity for cognitive flexibility.'}
                      </p>
                    </>
                  )}

                  {extremismLevel === 'affective' && (
                    <>
                      <div className="font-bold text-rose-300 mb-1">{isArabic ? 'المستوى الوجداني الانفعالي (Affective Level):' : 'Affective Level:'}</div>
                      <p className="text-stone-300">
                        {isArabic
                          ? 'يتمثل في الغلو والكراهية الشديدة والاندفاع الانفعالي الأعمى ضد المخالفين، وتجريد الآخر من إنسانيته والشعور بالتفوق الأخلاقي الزائف.'
                          : 'Characterized by virulent hatred, visceral hostility, moral grandstanding, and emotional dehumanization of adversaries.'}
                      </p>
                    </>
                  )}

                  {extremismLevel === 'behavioral' && (
                    <>
                      <div className="font-bold text-rose-300 mb-1">{isArabic ? 'المستوى السلوكي (Behavioral Level):' : 'Behavioral Level:'}</div>
                      <p className="text-stone-300">
                        {isArabic
                          ? 'هو أخطر المستويات، حيث تتحول الأفكار المشوهة والانفعالات العدائية إلى سلوك عنيف عملي، وتخريب، واعتداء مادي وإرهاب مدمر للمجتمع.'
                          : 'The most lethal phase, wherein distorted cognitions and toxic rage erupt into kinetic violence, sabotage, and terrorism.'}
                      </p>
                    </>
                  )}
                </div>

                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300">
                  🎯 {isArabic ? 'سبل المواجهة الفكرية: إشراك الشباب في الحوار المفتوح، تنمية التفكير النقدي، تجديد الخطاب الديني، وتوفير فرص عمل حقيقية.' : 'Counter-Radicalization: Open intergenerational dialogue, critical thinking curricula, and vibrant economic opportunity.'}
                </div>
              </div>
            )}
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
