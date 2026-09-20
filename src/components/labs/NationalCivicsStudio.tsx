import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import {
  Scale,
  BookOpen,
  FileCheck,
  Building2,
  Vote,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Shield,
  Award,
  Scroll,
  PieChart,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: CivicsStudioTab;
}

export type CivicsStudioTab =
  | 'constitution_review'
  | 'legislative_process'
  | 'parties_matrix'
  | 'electoral_systems'
  | 'civic_sandbox';

// Engine 1: Constitutional Articles Data
interface ConstitutionalArticle {
  number: number;
  chapterAr: string;
  chapterEn: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  tags: string[];
}

const CONSTITUTIONAL_ARTICLES: ConstitutionalArticle[] = [
  {
    number: 1,
    chapterAr: 'الباب الأول: الدولة',
    chapterEn: 'Chapter 1: The State',
    titleAr: 'طبيعة الدولة ونظام الحكم',
    titleEn: 'Nature of the State & Governance',
    contentAr:
      'جمهورية مصر العربية دولة ذات سيادة، موحدة لا تقبل التجزئة، ونظامها ديمقراطي يقوم على أساس المواطنة وسيادة القانون. الشعب المصري جزء من الأمة العربية ويعمل على تكاملها ووحدتها.',
    contentEn:
      'The Arab Republic of Egypt is a sovereign, unified, indivisible state, and its system is democratic, based on citizenship and the rule of law. The Egyptian people are part of the Arab nation.',
    tags: ['دولة', 'سيادة', 'مواطنة', 'سيادة القانون'],
  },
  {
    number: 5,
    chapterAr: 'الباب الأول: الدولة',
    chapterEn: 'Chapter 1: The State',
    titleAr: 'التعددية السياسية وتداول السلطة',
    titleEn: 'Political Pluralism & Transfer of Power',
    contentAr:
      'يقوم النظام السياسي على أساس التعددية السياسية والحزبية، والتداول السلمي للسلطة، والفصل بين السلطات والتوازن بينها، وتلازم المسؤولية مع السلطة، واحترام حقوق الإنسان وحرياته.',
    contentEn:
      'The political system is based on political and multiparty pluralism, the peaceful transfer of power, separation and balance of powers, coupling responsibility with authority, and respect for human rights.',
    tags: ['أحزاب', 'تعددية', 'تداول السلطة', 'فصل السلطات'],
  },
  {
    number: 53,
    chapterAr: 'الباب الثاني: الحقوق والحريات',
    chapterEn: 'Chapter 2: Rights & Freedoms',
    titleAr: 'المساواة في الحقوق والواجبات وتكافؤ الفرص',
    titleEn: 'Equality in Rights, Duties & Equal Opportunity',
    contentAr:
      'المواطنون لدى القانون سواء، وهم متساوون في الحقوق والحريات والواجبات العامة، لا تمييز بينهم بسبب الدين، أو العقيدة، أو الجنس، أو الأصل، أو العرق، أو اللون، أو اللغة، أو الإعاقة، أو المستوى الاجتماعي، أو الانتماء السياسي أو الجغرافي. والتمييز والحض على الكراهية جريمة يعاقب عليها القانون.',
    contentEn:
      'Citizens are equal before the law, possessing equal public rights, freedoms, and duties without discrimination based on religion, belief, gender, origin, race, color, language, disability, social status, or political affiliation.',
    tags: ['مساواة', 'عدم تمييز', 'مواطنة', 'تكافؤ الفرص'],
  },
  {
    number: 65,
    chapterAr: 'الباب الثاني: الحقوق والحريات',
    chapterEn: 'Chapter 2: Rights & Freedoms',
    titleAr: 'حرية الفكر والرأي والتعبير',
    titleEn: 'Freedom of Thought, Opinion & Expression',
    contentAr:
      'حرية الفكر والرأي مكفولة. ولكل إنسان حق الإعراب عن رأيه بالقول، أو بالكتابة، أو بالتصوير، أو غير ذلك من وسائل التعبير والنشر.',
    contentEn:
      'Freedom of thought and opinion is guaranteed. Every individual has the right to express their opinion through speech, writing, imagery, or any other means of expression and publication.',
    tags: ['حرية الرأي', 'تعبير', 'فكر', 'إعلام'],
  },
  {
    number: 74,
    chapterAr: 'الباب الثاني: الحقوق والحريات',
    chapterEn: 'Chapter 2: Rights & Freedoms',
    titleAr: 'حق تكوين الأحزاب السياسية بالإخطار',
    titleEn: 'Right to Establish Political Parties by Notification',
    contentAr:
      'للمواطنين حق تكوين الأحزاب السياسية، بإخطار ينظمه القانون، ولا يجوز مباشرة أي نشاط سياسي أو قيام أحزاب سياسية على أساس ديني، أو بناء على التفرقة بسبب الجنس أو الأصل، أو على أساس طائفي أو جغرافي، أو ممارسة نشاط سري أو ذي طابع عسكري أو شبه عسكري.',
    contentEn:
      'Citizens have the right to establish political parties upon notification regulated by law. No political activity or party formation is permitted on religious, gender, sectarian, geographical, secret, or military grounds.',
    tags: ['أحزاب سياسية', 'إخطار', 'حظر ديني', 'حظر عسكري'],
  },
  {
    number: 87,
    chapterAr: 'الباب الثاني: الحقوق والحريات',
    chapterEn: 'Chapter 2: Rights & Freedoms',
    titleAr: 'المشاركة في الحياة العامة والانتخاب واجب وطني',
    titleEn: 'Participation in Public Life & Electoral Duty',
    contentAr:
      'مشاركة المواطن في الحياة العامة واجب وطني، ولكل مواطن حق الانتخاب والترشح وإبداء الرأي في الاستفتاء، وينظم القانون مباشرة هذه الحقوق، وتلتزم الدولة بإدراج اسم كل مواطن بقاعدة بيانات الناخبين دون طلب منه متى توافرت فيه الشروط.',
    contentEn:
      'Citizen participation in public life is a national duty. Every citizen has the right to vote, run for office, and participate in referenda. The state is committed to automatically entering eligible citizens into voter databases.',
    tags: ['مشاركة سياسية', 'انتخاب', 'ترشح', 'واجب وطني'],
  },
  {
    number: 192,
    chapterAr: 'الباب الخامس: سيادة القانون والمحكمة الدستورية',
    chapterEn: 'Chapter 5: Rule of Law & Constitutional Court',
    titleAr: 'اختصاصات المحكمة الدستورية العليا',
    titleEn: 'Jurisdiction of Supreme Constitutional Court',
    contentAr:
      'تتولى المحكمة الدستورية العليا دون غيرها الرقابة القضائية على دستورية القوانين واللوائح، وتفسير النصوص التشريعية، والفصل في المنازعات المتعلقة بشؤون أعضائها، وفي تنازع الاختصاص بين جهات القضاء وهيئاته ذات الاختصاص القضائي، والفصل في النزاع الذي يقوم بشأن تنفيذ حكمين نهائيين متناقضين.',
    contentEn:
      'The Supreme Constitutional Court is exclusively competent to exercise judicial review over the constitutionality of laws and regulations, interpret legislative texts, adjudicate jurisdictional disputes between judicial bodies, and resolve conflicting final rulings.',
    tags: ['محكمة دستورية', 'رقابة قضائية', 'تفسير تشريعي', 'تنازع اختصاص'],
  },
];

interface ConstitutionalLawChallenge {
  id: string;
  statuteTitleAr: string;
  statuteTitleEn: string;
  statuteTextAr: string;
  statuteTextEn: string;
  challengedArticle: number;
  verdict: 'unconstitutional' | 'constitutional';
  legalGroundsAr: string;
  legalGroundsEn: string;
}

const CONSTITUTIONAL_CHALLENGES: ConstitutionalLawChallenge[] = [
  {
    id: 'challenge_1',
    statuteTitleAr: 'مشروع قانون حظر تأسيس الأحزاب دون إذن مسبق من جهة الإدارة',
    statuteTitleEn: 'Draft Statute Requiring Prior Administrative License for Party Formation',
    statuteTextAr:
      'يُحظر على المواطنين تأسيس أي حزب سياسي إلا بعد الحصول على ترخيص كتابي صادر من وزير الداخلية أو المحافظ المختص.',
    statuteTextEn:
      'Citizens are prohibited from establishing any political party without obtaining prior written license from the Interior Ministry or competent Governor.',
    challengedArticle: 74,
    verdict: 'unconstitutional',
    legalGroundsAr:
      'مخالف لصريح المادة 74 من الدستور التي نصت قاطعاً على أن تأسيس الأحزاب حق دستوري للمواطنين بالإخطار فقط، ولا يجوز للجهة الإدارية اشتراط ترخيص مسبق.',
    legalGroundsEn:
      'Violates Article 74 of the Constitution which explicitly establishes party formation as a constitutional right through notification only, forbidding prior administrative licensing.',
  },
  {
    id: 'challenge_2',
    statuteTitleAr: 'نص يفرض قيوداً على تصويت المواطنين ذوي الدخل المنخفض',
    statuteTitleEn: 'Statute Conditioning Voter Franchise on Wealth & Tax Bracket',
    statuteTextAr:
      'يُشترط لقيد المواطن في قاعدة بيانات الناخبين سداد ضريبة دخل سنوية لا تقل عن عشرة آلاف جنيه.',
    statuteTextEn:
      'A citizen is conditioned for inclusion in voter rolls by paying an annual income tax of at least 10,000 EGP.',
    challengedArticle: 53,
    verdict: 'unconstitutional',
    legalGroundsAr:
      'مخالف لمبدأ المساواة والمواطنة (المادة 53) والمادة 87، حيث يحظر الدستور أي تمييز بين المواطنين بسبب المستوى الاجتماعي أو المالي في ممارسة الحقوق السياسية.',
    legalGroundsEn:
      'Violates equality and citizenship provisions (Articles 53 and 87), which prohibit economic discrimination in public franchise and voting rights.',
  },
  {
    id: 'challenge_3',
    statuteTitleAr: 'قانون تنظيم الهيئة الوطنية للانتخابات وإلزامية الإشراف القضائي',
    statuteTitleEn: 'National Elections Authority Statute with Full Judicial Oversight',
    statuteTextAr:
      'تتولى الهيئة الوطنية للانتخابات إدارة كافة الاستفتاءات والانتخابات وتشكيل اللجان الفرعية والعامة برئاسة أعضاء الجهات والهيئات القضائية.',
    statuteTextEn:
      'The National Elections Authority manages all referenda and elections, staffing subcommittees with members of independent judicial authorities.',
    challengedArticle: 192,
    verdict: 'constitutional',
    legalGroundsAr:
      'متفق تماماً مع أحكام الدستور (المواد 208 و 209 و 210) التي تقرر استقلال الهيئة الوطنية للانتخابات وإسناد إدارة الاقتراع والفرز لأعضاء الهيئات القضائية صوناً للنزاهة.',
    legalGroundsEn:
      'Fully complies with Constitutional Articles 208, 209, and 210, ensuring independent administration and comprehensive judicial supervision over ballot boxes.',
  },
];

// =========================================================================
// VECTOR SCHEMATIC 1: LEGISLATIVE PROCESS FLOWCHART (المسار التشريعي لإقرار القوانين)
// =========================================================================
const LegislativeProcessFlowchartSchematic: React.FC<{
  currentStepIndex: number;
  vetoTriggered: boolean;
  isAr: boolean;
  onSelectStep: (idx: number) => void;
}> = ({ currentStepIndex, vetoTriggered, isAr, onSelectStep }) => {
  const steps = [
    {
      num: 1,
      titleAr: 'الاقتراح والصياغة',
      titleEn: 'Proposal & Drafting',
      actorAr: 'الرئيس / الحكومة / 60 نائباً',
      actorEn: 'Pres. / Gov. / 60 MPs',
    },
    {
      num: 2,
      titleAr: 'اللجان النوعية',
      titleEn: 'Committees Review',
      actorAr: 'اللجنة التشريعية والنوعية',
      actorEn: 'Specialized Committee',
    },
    {
      num: 3,
      titleAr: 'المناقشة العامة',
      titleEn: 'Plenary Debate',
      actorAr: 'الجلسة العامة (مادة بمادة)',
      actorEn: 'Plenary Hall (Article by Article)',
    },
    {
      num: 4,
      titleAr: 'التصويت والنصاب',
      titleEn: 'Voting & Quorum',
      actorAr: 'الأغلبية المطلقة للحاضرين',
      actorEn: 'Absolute Majority of Present',
    },
    {
      num: 5,
      titleAr: 'التصديق الرئاسي',
      titleEn: 'Presidential Assent',
      actorAr: 'تصديق أو فيتو (30 يوماً)',
      actorEn: 'Assent or Veto (30 Days)',
    },
    {
      num: 6,
      titleAr: 'النشر والسريان',
      titleEn: 'Gazette & Enactment',
      actorAr: 'الجريدة الرسمية (15 يوماً)',
      actorEn: 'Official Gazette (15 Days)',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="text-xs sm:text-sm font-black text-emerald-300">
            {isAr
              ? 'مخطط التدفق التشريعي لإقرار القوانين (Constitutional Legislative Flowchart - Art. 121-123)'
              : 'Constitutional Legislative Process Flowchart (Egyptian Const. Art. 121-123)'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-bold">
          {isAr ? `المرحلة الحالية: ${currentStepIndex + 1} من 6` : `Stage ${currentStepIndex + 1} of 6`}
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 940 220"
          className="w-full min-w-[760px] h-auto select-none"
          style={{ maxHeight: '230px' }}
        >
          <defs>
            <linearGradient id="activeNodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
            <filter id="legNodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Veto Loop Arrow if vetoTriggered (from Node 5 back to Node 3) */}
          {vetoTriggered && (
            <g>
              <path
                d="M 680 50 C 680 15, 410 15, 410 50"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeDasharray="6,4"
              />
              <polygon points="410,50 405,38 415,38" fill="#ef4444" />
              <rect x="440" y="8" width="210" height="20" rx="4" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
              <text x="545" y="22" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">
                {isAr ? '⚠️ اعتراض رئاسي: يتطلب إقرار 2/3 المجلس (المادة 123)' : '⚠️ Presidential Veto: 2/3 Override Required'}
              </text>
            </g>
          )}

          {/* Connecting Arrows between Stations */}
          {steps.map((_, idx) => {
            if (idx === steps.length - 1) return null;
            const x1 = 65 + idx * 155 + 110;
            const x2 = 65 + (idx + 1) * 155;
            const isPassed = idx < currentStepIndex;
            return (
              <g key={`arrow-${idx}`}>
                <line
                  x1={x1}
                  y1={110}
                  x2={x2}
                  y2={110}
                  stroke={isPassed ? '#10b981' : '#334155'}
                  strokeWidth={isPassed ? 2.5 : 1.5}
                  strokeDasharray={isPassed ? 'none' : '4,3'}
                />
                <polygon
                  points={`${x2},110 ${x2 - 8},105 ${x2 - 8},115`}
                  fill={isPassed ? '#10b981' : '#475569'}
                />
              </g>
            );
          })}

          {/* 6 Stage Nodes */}
          {steps.map((st, idx) => {
            const nodeX = 65 + idx * 155;
            const nodeY = 65;
            const isActive = currentStepIndex === idx;
            const isCompleted = idx < currentStepIndex;

            return (
              <g
                key={st.num}
                transform={`translate(${nodeX}, ${nodeY})`}
                onClick={() => onSelectStep(idx)}
                className="cursor-pointer group"
              >
                {/* Active Outer Pulsing Glow */}
                {isActive && (
                  <rect
                    x="-4"
                    y="-4"
                    width="118"
                    height="98"
                    rx="16"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    className="animate-pulse"
                    opacity="0.8"
                  />
                )}

                {/* Node Box */}
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="90"
                  rx="12"
                  fill={isActive ? 'url(#activeNodeGrad)' : isCompleted ? '#064e3b' : '#0f172a'}
                  stroke={isActive ? '#34d399' : isCompleted ? '#059669' : '#334155'}
                  strokeWidth={isActive ? '2' : '1.5'}
                  filter={isActive ? 'url(#legNodeGlow)' : undefined}
                />

                {/* Step Number Badge */}
                <circle
                  cx="20"
                  cy="20"
                  r="12"
                  fill={isActive ? '#059669' : isCompleted ? '#10b981' : '#1e293b'}
                  stroke={isActive ? '#6ee7b7' : isCompleted ? '#a7f3d0' : '#475569'}
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y="24"
                  textAnchor="middle"
                  fill={isCompleted ? '#022c22' : '#ffffff'}
                  fontSize="10"
                  fontWeight="900"
                >
                  {st.num}
                </text>

                {/* Stage Title */}
                <text
                  x="55"
                  y="48"
                  textAnchor="middle"
                  fill={isActive ? '#a7f3d0' : isCompleted ? '#d1fae5' : '#94a3b8'}
                  fontSize="11"
                  fontWeight="bold"
                >
                  {isAr ? st.titleAr : st.titleEn}
                </text>

                {/* Actor Subtitle */}
                <text
                  x="55"
                  y="68"
                  textAnchor="middle"
                  fill={isActive ? '#6ee7b7' : isCompleted ? '#6ee7b7' : '#64748b'}
                  fontSize="9"
                >
                  {isAr ? st.actorAr : st.actorEn}
                </text>

                {/* Status indicator bar */}
                <rect
                  x="15"
                  y="78"
                  width="80"
                  height="3"
                  rx="1.5"
                  fill={isActive ? '#34d399' : isCompleted ? '#10b981' : '#334155'}
                />
              </g>
            );
          })}

          {/* Bottom Constitutional Quorum Guide */}
          <g transform="translate(65, 175)">
            <rect x="0" y="0" width="810" height="34" rx="8" fill="#020617" stroke="#065f46" strokeWidth="1" />
            <text x="15" y="21" fill="#34d399" fontSize="10" fontWeight="bold">
              {isAr ? '⚖️ النصاب الدستوري (المادة 121): ' : '⚖️ Constitutional Quorum (Art. 121): '}
            </text>
            <text x="210" y="21" fill="#cbd5e1" fontSize="10">
              {isAr
                ? 'القوانين العادية: أغلبية الأعضاء الحاضرين (بما لا يقل عن ثلث المجلس) | القوانين المكملة للدستور: موافقة ثلثي أعضاء المجلس (66.7%)'
                : 'Ordinary bills: Majority of present MPs (min 1/3 total) | Organic complementary laws: 2/3 majority of all members'}
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

// =========================================================================
// VECTOR SCHEMATIC 2: PARLIAMENTARY HEMICYCLE (قاعة مجلس النواب والتمثيل النسبي)
// =========================================================================
interface SeatResultItem {
  name: string;
  votes: number;
  seats: number;
  color: string;
}

const ParliamentHemiCycleVectorSchematic: React.FC<{
  selectedSystem: 'closed_list' | 'dhondt' | 'largest_remainder';
  seatsResult: SeatResultItem[];
  totalSeats: number;
  isAr: boolean;
}> = ({ selectedSystem: _unusedSystem, seatsResult, totalSeats, isAr }) => {
  const totalVotes = seatsResult.reduce((sum, p) => sum + p.votes, 0);

  // Loosemore-Hanby Disproportionality Index: D = 0.5 * sum(|v% - s%|)
  const loosemoreHanby =
    totalVotes > 0 && totalSeats > 0
      ? Math.round(
          0.5 *
            seatsResult.reduce((acc, p) => {
              const votePct = (p.votes / totalVotes) * 100;
              const seatPct = (p.seats / totalSeats) * 100;
              return acc + Math.abs(votePct - seatPct);
            }, 0) *
            10
        ) / 10
      : 0;

  // Effective Number of Parties (Laakso-Taagepera Index): N = 1 / sum((s_i / S)^2)
  const sumSqSeats = seatsResult.reduce((acc, p) => {
    const s = totalSeats > 0 ? p.seats / totalSeats : 0;
    return acc + s * s;
  }, 0);
  const effectiveParties = sumSqSeats > 0 ? (1 / sumSqSeats).toFixed(2) : '1.00';

  // Build sequential seats list mapped to parties
  const assignedSeats: { partyName: string; color: string; seatNum: number }[] = [];
  let seatCounter = 1;
  seatsResult.forEach((p) => {
    for (let i = 0; i < p.seats; i++) {
      assignedSeats.push({
        partyName: p.name,
        color: p.color,
        seatNum: seatCounter++,
      });
    }
  });

  // Radii and layout for concentric tiers
  const cx = 400;
  const cy = 290;
  const tiers = [
    { r: 120, count: Math.ceil(totalSeats * 0.18) },
    { r: 165, count: Math.ceil(totalSeats * 0.24) },
    { r: 210, count: Math.ceil(totalSeats * 0.28) },
    {
      r: 255,
      count:
        totalSeats -
        Math.ceil(totalSeats * 0.18) -
        Math.ceil(totalSeats * 0.24) -
        Math.ceil(totalSeats * 0.28),
    },
  ];

  // Distribute all seats across tiers
  const seatCoordinates: {
    x: number;
    y: number;
    seatData?: { partyName: string; color: string; seatNum: number };
  }[] = [];
  let currentAssignedIdx = 0;

  tiers.forEach((tier) => {
    const seatCount = Math.max(1, tier.count);
    for (let i = 0; i < seatCount; i++) {
      const fraction = seatCount > 1 ? i / (seatCount - 1) : 0.5;
      const angle = Math.PI + (fraction * (Math.PI - 0.35) + 0.175);
      const x = cx + tier.r * Math.cos(angle);
      const y = cy + tier.r * Math.sin(angle);
      seatCoordinates.push({
        x,
        y,
        seatData: assignedSeats[currentAssignedIdx],
      });
      currentAssignedIdx++;
    }
  });

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="text-xs sm:text-sm font-black text-emerald-300">
            {isAr
              ? 'المخطط الهندسي لقاعة البرلمان وتوزيع المقاعد (Parliamentary Chamber Hemicycle)'
              : 'Parliamentary Chamber Hemicycle Schematic & Electoral Proportionality'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-bold">
          {totalSeats} {isAr ? 'مقعداً برلمانياً' : 'Total Seats'}
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 340"
          className="w-full min-w-[620px] h-auto select-none"
          style={{ maxHeight: '310px' }}
        >
          <defs>
            <radialGradient id="chamberGlow" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="60%" stopColor="#020617" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
            </radialGradient>
            <linearGradient id="rostrumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Chamber Arch Background */}
          <path
            d="M 100 290 A 300 300 0 0 1 700 290 Z"
            fill="url(#chamberGlow)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Tier Guide Arcs */}
          {tiers.map((t, idx) => (
            <path
              key={`tier-arc-${idx}`}
              d={`M ${cx - t.r} ${cy} A ${t.r} ${t.r} 0 0 1 ${cx + t.r} ${cy}`}
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.6"
            />
          ))}

          {/* Speaker Rostrum & Bureau (منصة رئيس المجلس) */}
          <g transform={`translate(${cx - 70}, ${cy - 30})`}>
            <rect
              x="0"
              y="0"
              width="140"
              height="35"
              rx="8"
              fill="url(#rostrumGrad)"
              stroke="#f59e0b"
              strokeWidth="1.5"
            />
            {/* Eagle Crest / Emblem */}
            <circle cx="70" cy="12" r="6" fill="#f59e0b" opacity="0.8" />
            <text x="70" y="28" textAnchor="middle" fill="#fef08a" fontSize="9" fontWeight="900">
              {isAr ? 'منصة هيئة مكتب مجلس النواب' : 'Speaker Bureau & Podium'}
            </text>
          </g>

          {/* Parliamentary Seats */}
          {seatCoordinates.map((sc, idx) => {
            const hasData = Boolean(sc.seatData);
            const seatColor = sc.seatData ? sc.seatData.color : '#475569';
            return (
              <g key={`seat-${idx}`} className="group cursor-pointer">
                {/* Glow ring on hover / active */}
                <circle
                  cx={sc.x}
                  cy={sc.y}
                  r="13"
                  fill="none"
                  stroke={seatColor}
                  strokeWidth="1"
                  opacity="0.3"
                />
                {/* Seat Cushion */}
                <circle
                  cx={sc.x}
                  cy={sc.y}
                  r="8.5"
                  fill={seatColor}
                  stroke="#020617"
                  strokeWidth="1.5"
                />
                {/* Inner dot */}
                <circle cx={sc.x} cy={sc.y} r="2.5" fill="#ffffff" opacity="0.8" />
                <title>
                  {hasData
                    ? `${sc.seatData?.partyName} - ${isAr ? 'مقعد' : 'Seat'} #${sc.seatData?.seatNum}`
                    : `Seat #${idx + 1}`}
                </title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Advanced Scientific & Constitutional Metrics Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Metric 1: Loosemore-Hanby Index */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">
            {isAr ? 'مؤشر التناسبية (Loosemore-Hanby Index)' : 'Loosemore-Hanby Disproportionality'}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base font-black font-mono text-emerald-300">{loosemoreHanby}%</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                loosemoreHanby < 10
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                  : loosemoreHanby < 25
                  ? 'bg-amber-950 text-amber-300 border border-amber-500/40'
                  : 'bg-rose-950 text-rose-300 border border-rose-500/40'
              }`}
            >
              {loosemoreHanby < 10
                ? isAr
                  ? 'تناسبية فائقة'
                  : 'High Proportionality'
                : loosemoreHanby < 25
                ? isAr
                  ? 'تناسبية معتدلة'
                  : 'Moderate'
                : isAr
                ? 'انحراف أغلبي مرتفع'
                : 'Majoritarian Bias'}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
            {isAr
              ? 'يقيس مقدار انحراف توزيع المقاعد عن نسبة أصوات الناخبين الحقيقية.'
              : 'Measures divergence between vote percentages and allocated seat shares.'}
          </p>
        </div>

        {/* Metric 2: Effective Number of Parties */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">
            {isAr ? 'العدد الفعلي للأحزاب (Laakso-Taagepera)' : 'Effective Number of Parties (N)'}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base font-black font-mono text-teal-300">{effectiveParties}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/40 font-bold">
              {Number(effectiveParties) > 2.5
                ? isAr
                  ? 'تعددية حزبية واسعة'
                  : 'Multi-party Pluralism'
                : Number(effectiveParties) > 1.5
                ? isAr
                  ? 'نظام ثنائي معتدل'
                  : 'Two-Party Tendency'
                : isAr
                ? 'حزب مهيمن'
                : 'Dominant Party'}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
            {isAr
              ? 'مؤشر علم السياسة الدستوري لوزن الأحزاب الممثلة في البرلمان.'
              : 'Political science metric reflecting parliamentary faction fragmentation.'}
          </p>
        </div>

        {/* Metric 3: Constitutional Quotas & Guarantees */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">
            {isAr ? 'الضمانات الدستورية والكوتة (المادة 102)' : 'Constitutional Quotas (Art. 102)'}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-amber-300">
              {isAr ? 'كوتة المرأة: ≥ 25%' : 'Women Quota: ≥ 25%'}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 font-bold">
              {isAr ? 'إلزامي بالدستور' : 'Mandatory'}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
            {isAr
              ? 'تمثيل ملائم للعمال والفلاحين والشباب والأقباط والمصريين بالخارج وذوي الإعاقة.'
              : 'Mandatory fair representation for youth, workers, Copts, and expats.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export const NationalCivicsStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'constitution_review',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isAr = lang === 'ar';

  const [activeTab, setActiveTab] = useState<CivicsStudioTab>(initialTab);

  // State: Engine 1 (Constitutional Review)
  const [selectedArticleNum, setSelectedArticleNum] = useState<number>(74);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>('challenge_1');
  const [courtVerdictRevealed, setCourtVerdictRevealed] = useState<boolean>(false);

  // State: Engine 2 (Legislative Process)
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [vetoTriggered, setVetoTriggered] = useState<boolean>(false);

  // State: Engine 3 (Parties Formation Matrix)
  const [partyConditionStates, setPartyConditionStates] = useState<Record<string, boolean>>({
    non_religious: true,
    public_funding: true,
    democratic_program: true,
    distinct_platform: true,
    provincial_signatories: true,
  });

  // State: Engine 4 (Electoral Systems Calculator)
  const [votesPartyA, setVotesPartyA] = useState<number>(45000);
  const [votesPartyB, setVotesPartyB] = useState<number>(30000);
  const [votesPartyC, setVotesPartyC] = useState<number>(15000);
  const [votesPartyD, setVotesPartyD] = useState<number>(10000);
  const [totalSeats, setTotalSeats] = useState<number>(10);
  const [selectedSystem, setSelectedSystem] = useState<'closed_list' | 'dhondt' | 'largest_remainder'>('dhondt');

  // State: Engine 5 (Civic Sandbox Dilemmas)
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [scenarioAnswerSelected, setScenarioAnswerSelected] = useState<number | null>(null);

  // Calculate D'Hondt seats
  const calculateSeats = () => {
    const parties = [
      { name: isAr ? 'حزب الأمل (A)' : 'Party A', votes: votesPartyA, seats: 0, color: '#10B981' },
      { name: isAr ? 'حزب المستقبل (B)' : 'Party B', votes: votesPartyB, seats: 0, color: '#3B82F6' },
      { name: isAr ? 'حزب التضامن (C)' : 'Party C', votes: votesPartyC, seats: 0, color: '#F59E0B' },
      { name: isAr ? 'حزب النهضة (D)' : 'Party D', votes: votesPartyD, seats: 0, color: '#8B5CF6' },
    ];

    if (selectedSystem === 'closed_list') {
      const winner = [...parties].sort((a, b) => b.votes - a.votes)[0];
      return parties.map((p) => ({
        ...p,
        seats: p.name === winner.name ? totalSeats : 0,
      }));
    }

    if (selectedSystem === 'dhondt') {
      const workingParties = parties.map((p) => ({ ...p, seats: 0 }));
      for (let s = 0; s < totalSeats; s++) {
        let maxQuotient = -1;
        let bestPartyIndex = 0;
        workingParties.forEach((p, idx) => {
          const quotient = p.votes / (p.seats + 1);
          if (quotient > maxQuotient) {
            maxQuotient = quotient;
            bestPartyIndex = idx;
          }
        });
        workingParties[bestPartyIndex].seats += 1;
      }
      return workingParties;
    }

    // Largest remainder (Hare quota)
    const totalVotes = votesPartyA + votesPartyB + votesPartyC + votesPartyD;
    const quota = totalVotes / totalSeats;
    let allocatedSeats = 0;
    const workingParties = parties.map((p) => {
      const automatic = Math.floor(p.votes / quota);
      const remainder = p.votes - automatic * quota;
      allocatedSeats += automatic;
      return { ...p, seats: automatic, remainder };
    });

    let seatsLeft = totalSeats - allocatedSeats;
    workingParties.sort((a, b) => b.remainder - a.remainder);
    for (let i = 0; i < seatsLeft; i++) {
      if (workingParties[i]) {
        workingParties[i].seats += 1;
      }
    }
    return workingParties;
  };

  const seatsResult = calculateSeats();
  const activeArticle = CONSTITUTIONAL_ARTICLES.find((a) => a.number === selectedArticleNum) || CONSTITUTIONAL_ARTICLES[0];
  const activeChallenge = CONSTITUTIONAL_CHALLENGES.find((c) => c.id === selectedChallengeId) || CONSTITUTIONAL_CHALLENGES[0];

  // Legislative steps
  const LEGISLATIVE_STEPS = [
    {
      step: 1,
      titleAr: 'اقتراح مشروع القانون',
      titleEn: 'Bill Inception & Proposal',
      descAr: 'يتقدم بمشروع القانون رئيس الجمهورية، أو مجلس الوزراء، أو عُشر أعضاء مجلس النواب (المادة 122).',
      descEn: 'Proposed by the President, Cabinet, or 1/10th of House of Representatives members (Art. 122).',
      actor: isAr ? 'السلطة التنفيذية / النواب' : 'Executive / Deputies',
    },
    {
      step: 2,
      titleAr: 'الإحالة للجنة النوعية المختصة',
      titleEn: 'Specialized Parliamentary Committee',
      descAr: 'يحيل رئيس مجلس النواب المشروع إلى اللجنة التشريعية أو اللجنة النوعية المعنية لإعداد تقرير مفصل بشأنه.',
      descEn: 'Speaker refers bill to specialized standing committee to draft a technical appraisal report.',
      actor: isAr ? 'اللجان البرلمانية النوعية' : 'Parliamentary Standing Committee',
    },
    {
      step: 3,
      titleAr: 'المناقشة العامة والتصويت مادة بمادة',
      titleEn: 'Plenary Debate & Article Voting',
      descAr: 'تتم المناقشة في الجلسة العامة بالمجلس والتصويت على المبدأ ثم التصويت مادة بمادة بأغلبية الحاضرين.',
      descEn: 'General debate on principle followed by article-by-article vote by majority of attending members.',
      actor: isAr ? 'الجلسة العامة لمجلس النواب' : 'House of Representatives Plenary',
    },
    {
      step: 4,
      titleAr: 'أخذ رأي مجلس الشيوخ',
      titleEn: 'Senate Consultative Review',
      descAr: 'تؤخذ آراء مجلس الشيوخ وجوباً في مشروعات القوانين المكملة للدستور ومعاهدات السيادة والصلح (المادة 248).',
      descEn: 'Mandatory advisory opinion of the Senate on constitutional organic bills and sovereignty treaties (Art. 248).',
      actor: isAr ? 'مجلس الشيوخ المصري' : 'Egyptian Senate',
    },
    {
      step: 5,
      titleAr: 'إرسال القانون لرئيس الجمهورية للتصديق',
      titleEn: 'Presidential Assent or Veto',
      descAr: 'يُرسل القانون لرئيس الجمهورية ليصدره خلال ثلاثين يوماً من إبلاغه، أو يعترض عليه ويعيده مسبباً (المادة 123).',
      descEn: 'Sent to President for promulgation within 30 days, or returned with a motivated objection veto (Art. 123).',
      actor: isAr ? 'رئيس الجمهورية' : 'President of the Republic',
    },
    {
      step: 6,
      titleAr: 'النشر في الجريدة الرسمية ونفاذ القانون',
      titleEn: 'Official Gazette Promulgation',
      descAr: 'يُنشر القانون في الجريدة الرسمية خلال 15 يوماً من إصداره، ويُعمل به بعد ثلاثين يوماً من تاريخ نشره ما لم ينص على خلاف ذلك.',
      descEn: 'Promulgated in the Official Gazette within 15 days, entering into legal force 30 days post-publication.',
      actor: isAr ? 'المطابع الأميرية والجريدة الرسمية' : 'Official Gazette & Legal Registry',
    },
  ];

  // Civic sandbox dilemmas
  const CIVIC_DILEMMAS = [
    {
      titleAr: 'الموقف الأول: التزام الحياد الانتخابي والرقابة القضائية',
      titleEn: 'Scenario 1: Electoral Neutrality & Judicial Supervision',
      descAr:
        'لاحظ أحد الناخبين قيام مرشح بتوزيع هدايا عينية وأموال أمام المقر الانتخابي لحث المواطنين على التصويت لصالحه. ما هو الإجراء الدستوري السليم؟',
      descEn:
        'A citizen notices a candidate distributing cash gifts outside a polling station to influence votes. What is the constitutional recourse?',
      options: [
        {
          textAr: 'التغاضي عن الأمر طالما أن المرشح يقدم مساعدات خيرية للأهالي',
          textEn: 'Ignore it since the candidate is providing charitable aid to local residents',
          isCorrect: false,
          rationaleAr: 'غير صحيح؛ شراء الأصوات جريمة انتخابية جسيمة تعاقب عليها القوانين وتخل بنزاهة الإرادة الشعبية.',
          rationaleEn: 'Incorrect; vote buying is a severe electoral crime violating voter autonomy.',
        },
        {
          textAr: 'إبلاغ رئيس اللجنة الانتخابية (القاضي المشرف) وضباط تأمين المقر الانتخابي فوراً لتحرير محضر إثبات حالة',
          textEn: 'Immediately report to presiding judicial supervisor and security forces to record a formal violation report',
          isCorrect: true,
          rationaleAr: 'صحيح؛ يملك القاضي المشرف على الصندوق الضبطية القضائية داخل المقر الانتخابي ومحيطه لضمان نزاهة الاقتراع وفقاً للقانون.',
          rationaleEn: 'Correct; presiding judges possess judicial police powers within polling premises to preserve electoral integrity.',
        },
        {
          textAr: 'الاشتباك مع أنصار المرشح ومنعهم بالقوة الفردية من دخول اللجنة',
          textEn: 'Clash physically with campaign supporters to prevent them from entering',
          isCorrect: false,
          rationaleAr: 'غير صحيح؛ ممارسة العنف الفردي تمثل جريمة تعطيل لسير الانتخابات، واللجوء لجهات إنفاذ القانون هو المسار الشرعي.',
          rationaleEn: 'Incorrect; violence is a criminal disruption of elections; legal authority is paramount.',
        },
      ],
    },
    {
      titleAr: 'الموقف الثاني: تأسيس حزب ذي مرجعية جغرافية أو فئوية',
      titleEn: 'Scenario 2: Founding a Regional or Sectarian Party',
      descAr:
        'تقدمت مجموعة من المواطنين بإخطار لتأسيس حزب يقتصر برنامجه وعضويته على الدفاع عن مصالح سكان محافظة ساحلية معينة فقط دون بقية المحافظات. ما موقف لجنة الأحزاب؟',
      descEn:
        'A group submits notification to establish a political party whose membership and platform are restricted solely to a single coastal province. What is the Party Affairs Committee ruling?',
      options: [
        {
          textAr: 'الموافقة الفورية لأن الدستور كفل حرية تأسيس الأحزاب بالإخطار',
          textEn: 'Immediate approval as constitution guarantees party formation by notification',
          isCorrect: false,
          rationaleAr: 'غير صحيح؛ الإخطار مشروط بعدم مخالفة المحددات الدستورية الإلزامية.',
          rationaleEn: 'Incorrect; notification is subject to mandatory constitutional restrictions.',
        },
        {
          textAr: 'الاعتراض وإحالة الإخطار للمحكمة الإدارية العليا لأن المادة 74 تحظر صراحة قيام الأحزاب على أساس جغرافي أو فئوي',
          textEn: 'Objection and referral to Supreme Administrative Court as Article 74 expressly bans geographical and regional parties',
          isCorrect: true,
          rationaleAr: 'صحيح تماماً؛ تشترط المادة 74 من الدستور وقانون الأحزاب ألا يقوم الحزب على أساس جغرافي أو طائفي حفاظاً على الوحدة الوطنية والتماسك القومي.',
          rationaleEn: 'Completely correct; Article 74 and Party Law strictly prohibit geographical regionalism to preserve national unity.',
        },
        {
          textAr: 'اشتراط جمع مائة ألف عضو من نفس المحافظة لتجاوز الحظر',
          textEn: 'Requiring 100,000 members from the same province to override the ban',
          isCorrect: false,
          rationaleAr: 'غير صحيح؛ الحظر الدستوري مطلق ولا تسقطه زيادة أعداد المؤسسين محلياً.',
          rationaleEn: 'Incorrect; the constitutional ban is absolute regardless of local member count.',
        },
      ],
    },
  ];

  return (
    <div
      className={`border transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0'
          : 'rounded-2xl overflow-hidden'
      } ${
        isLight
          ? 'bg-slate-50 border-emerald-200 text-slate-800'
          : isContrast
          ? 'bg-black border-emerald-400 text-white'
          : 'bg-slate-900/95 border-emerald-500/30 text-slate-100'
      } ${isFullscreen ? 'p-6 md:p-8' : 'p-4 md:p-6'}`}
      dir={isAr ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {isAr ? 'الاستوديو الافتراضي الخامس عشر' : '15th Virtual Studio'}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {isAr ? 'الثانوية العامة & EG-Bac' : 'Thanaweya & EG-Bac'}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mt-1 flex items-center gap-2">
              <span>{isAr ? 'استوديو التربية الوطنية والدستور التفاعلي' : 'National Civics & Constitutional Studio'}</span>
              <span className="text-sm font-normal text-emerald-400">⚖️</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              {isAr
                ? 'محاكاة تفاعلية شاملة: نصوص دستور 2014، الرقابة الدستورية، الدورة التشريعية، شروط الأحزاب، وحسابات النظم الانتخابية'
                : 'Interactive civics engine: 2014 Constitution, Judicial Review, Legislative Process, Party Law & Electoral Math'}
            </p>
          </div>
        </div>

        {/* Studio Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('constitution_review')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'constitution_review'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isAr ? 'الدستور والمحكمة' : 'Constitution'}</span>
          </button>
          <button
            onClick={() => setActiveTab('legislative_process')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'legislative_process'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>{isAr ? 'الدورة التشريعية' : 'Legislation'}</span>
          </button>
          <button
            onClick={() => setActiveTab('parties_matrix')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'parties_matrix'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{isAr ? 'مصفوفة الأحزاب' : 'Parties'}</span>
          </button>
          <button
            onClick={() => setActiveTab('electoral_systems')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'electoral_systems'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Vote className="w-4 h-4" />
            <span>{isAr ? 'حاسبة الانتخابات' : 'Electoral Math'}</span>
          </button>
          <button
            onClick={() => setActiveTab('civic_sandbox')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'civic_sandbox'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>{isAr ? 'سيناريوهات النزاهة' : 'Civic Sandbox'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors border border-slate-700/50"
            title={isFullscreen ? (isAr ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isAr ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-emerald-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="pt-6">
        {/* TAB 1: Constitution & Judicial Review */}
        {activeTab === 'constitution_review' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Constitutional Articles List */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{isAr ? 'مواد دستور مصر 2014 وتعديلاته' : 'Egyptian 2014 Constitution Articles'}</span>
                </h3>
                <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                  {CONSTITUTIONAL_ARTICLES.map((art) => (
                    <button
                      key={art.number}
                      onClick={() => setSelectedArticleNum(art.number)}
                      className={`min-h-[44px] w-full text-start p-3 rounded-xl border transition-all text-xs ${
                        selectedArticleNum === art.number
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-md'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400">
                          {isAr ? `المادة (${art.number})` : `Article ${art.number}`}
                        </span>
                        <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-700/50">
                          {isAr ? art.chapterAr : art.chapterEn}
                        </span>
                      </div>
                      <div className="font-medium mt-1 text-white">
                        {isAr ? art.titleAr : art.titleEn}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {art.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-1.5 py-0.2 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Article Display & Judicial Review Challenge */}
              <div className="lg:col-span-7 space-y-4">
                {/* Article Detailed Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-850/90 border border-emerald-500/30">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-bold text-base text-emerald-300">
                        {isAr ? `نص المادة الدستورية رقم (${activeArticle.number})` : `Full Text of Article ${activeArticle.number}`}
                      </h4>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                      {isAr ? activeArticle.chapterAr : activeArticle.chapterEn}
                    </span>
                  </div>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-100 font-medium">
                    {isAr ? activeArticle.contentAr : activeArticle.contentEn}
                  </p>
                </div>

                {/* Supreme Constitutional Court Sandbox */}
                <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{isAr ? 'محاكي قضايا المحكمة الدستورية العليا' : 'Supreme Constitutional Court Judicial Review'}</span>
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">
                      {isAr ? 'فصل في دستورية القوانين' : 'Judicial Review Chamber'}
                    </span>
                  </div>

                  {/* Challenge Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {CONSTITUTIONAL_CHALLENGES.map((ch, idx) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setSelectedChallengeId(ch.id);
                          setCourtVerdictRevealed(false);
                        }}
                        className={`min-h-[44px] p-2.5 rounded-xl border text-xs text-start transition-all ${
                          selectedChallengeId === ch.id
                            ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="font-bold text-[11px] text-amber-400">
                          {isAr ? `دعوى رقم ${idx + 1}` : `Case #${idx + 1}`}
                        </div>
                        <div className="truncate font-medium mt-0.5 text-slate-200">
                          {isAr ? ch.statuteTitleAr : ch.statuteTitleEn}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Challenged Statute Box */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-2 text-xs">
                    <div className="text-slate-400 uppercase tracking-wide font-semibold text-[10px]">
                      {isAr ? 'النص التشريعي المطعون عليه بعدم الدستورية:' : 'Challenged Legislative Provision:'}
                    </div>
                    <div className="text-sm text-slate-200 font-medium italic">
                      "{isAr ? activeChallenge.statuteTextAr : activeChallenge.statuteTextEn}"
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      {isAr
                        ? `سند الطعن: مخالفة المادة (${activeChallenge.challengedArticle}) من الدستور.`
                        : `Grounds: Direct conflict with Constitutional Article ${activeChallenge.challengedArticle}.`}
                    </div>
                  </div>

                  {/* Reveal Verdict Button */}
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={() => setCourtVerdictRevealed((prev) => !prev)}
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-semibold shadow-md flex items-center gap-2 transition-all"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>{courtVerdictRevealed ? (isAr ? 'إخفاء منطوق الحكم' : 'Hide Verdict') : (isAr ? 'إصدار حكم المحكمة الدستورية' : 'Deliver Court Ruling')}</span>
                    </button>
                    {courtVerdictRevealed && (
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 ${
                          activeChallenge.verdict === 'unconstitutional'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}
                      >
                        {activeChallenge.verdict === 'unconstitutional' ? (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            <span>{isAr ? 'حكمت المحكمة: بعدم دستورية النص' : 'Ruling: Unconstitutional'}</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isAr ? 'حكمت المحكمة: بدستورية النص ورفض الطعن' : 'Ruling: Constitutional'}</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Verdict Grounds Box */}
                  {courtVerdictRevealed && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs space-y-2 animate-fadeIn">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        <span>{isAr ? 'حيثيات وأسباب الحكم الدستوري:' : 'Judicial Reasoning & Grounds:'}</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {isAr ? activeChallenge.legalGroundsAr : activeChallenge.legalGroundsEn}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Legislative Process Simulator */}
        {activeTab === 'legislative_process' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-emerald-300">
                  {isAr ? 'محاكي المسار التشريعي لإقرار القوانين وفق دستور مصر' : 'Egyptian Legislative Process Simulation (Art. 121 - 123)'}
                </span>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  {isAr
                    ? 'تتبع مراحل ولادة القانون من الفكرة الأولية حتى النشر في الجريدة الرسمية وسريانه.'
                    : 'Track how a bill evolves from preliminary proposal to official gazette enactment.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentStepIndex(0);
                  setVetoTriggered(false);
                }}
                className="min-h-[44px] px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all"
              >
                {isAr ? 'إعادة المحاكاة' : 'Reset Process'}
              </button>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Legislative Process Flowchart */}
            <LegislativeProcessFlowchartSchematic
              currentStepIndex={currentStepIndex}
              vetoTriggered={vetoTriggered}
              isAr={isAr}
              onSelectStep={(idx) => setCurrentStepIndex(idx)}
            />

            {/* Stepper Display */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {LEGISLATIVE_STEPS.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`min-h-[44px] p-3 rounded-xl border text-xs text-start transition-all ${
                    currentStepIndex === idx
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-lg'
                      : idx < currentStepIndex
                      ? 'bg-slate-800/80 border-emerald-500/30 text-emerald-300'
                      : 'bg-slate-800/40 border-slate-700/50 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      {isAr ? `المرحلة ${step.step}` : `Step ${step.step}`}
                    </span>
                    {idx < currentStepIndex && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <div className="font-bold text-xs truncate">
                    {isAr ? step.titleAr : step.titleEn}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Detailed Card */}
            {(() => {
              const activeStep = LEGISLATIVE_STEPS[currentStepIndex];
              return (
                <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center font-bold text-emerald-400 text-sm">
                        {activeStep.step}
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {isAr ? activeStep.titleAr : activeStep.titleEn}
                      </h4>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 font-medium">
                      {isAr ? `الجهة الفاعلة: ${activeStep.actor}` : `Actor: ${activeStep.actor}`}
                    </span>
                  </div>

                  <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                    {isAr ? activeStep.descAr : activeStep.descEn}
                  </p>

                  {/* Veto Option in Step 5 */}
                  {currentStepIndex === 4 && (
                    <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-300 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" />
                          <span>{isAr ? 'حق الاعتراض الرئاسي (الفيتو الدستوري - المادة 123)' : 'Presidential Veto Clause (Art. 123)'}</span>
                        </span>
                        <button
                          onClick={() => setVetoTriggered((v) => !v)}
                          className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                            vetoTriggered
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-700 text-slate-300 hover:text-white'
                          }`}
                        >
                          {vetoTriggered ? (isAr ? 'الاعتراض مُفعل ❌' : 'Veto Triggered ❌') : (isAr ? 'محاكاة اعتراض الرئيس' : 'Simulate Presidential Veto')}
                        </button>
                      </div>
                      {vetoTriggered ? (
                        <p className="text-red-200 leading-relaxed">
                          {isAr
                            ? 'أعاد رئيس الجمهورية مشروع القانون بملاحظات مسببة إلى مجلس النواب. تنص المادة 123 على أنه إذا أقره المجلس ثانية بأغلبية ثلثي أعضائه، اعتُبر قانوناً وأُصدر فوراً دون حاجة لتصديق جديد.'
                            : 'President returned the bill with motivated objections. Article 123 states that if the House approves it again by a two-thirds majority of its members, it becomes law and must be promulgated.'}
                        </p>
                      ) : (
                        <p className="text-slate-300 leading-relaxed">
                          {isAr
                            ? 'صدّق رئيس الجمهورية على القانون دون اعتراض خلال مهلة الثلاثين يوماً الدستورية.'
                            : 'The President granted presidential assent within the constitutional 30-day window.'}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Step Control Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      disabled={currentStepIndex === 0}
                      onClick={() => setCurrentStepIndex((idx) => Math.max(0, idx - 1))}
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-xs font-semibold text-white transition-all"
                    >
                      {isAr ? 'المرحلة السابقة' : 'Previous Step'}
                    </button>
                    <button
                      disabled={currentStepIndex === LEGISLATIVE_STEPS.length - 1}
                      onClick={() => setCurrentStepIndex((idx) => Math.min(LEGISLATIVE_STEPS.length - 1, idx + 1))}
                      className="min-h-[44px] px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <span>{isAr ? 'المرحلة التالية' : 'Next Step'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 3: Political Parties Formation Matrix */}
        {activeTab === 'parties_matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Party Criteria Interactive Validator */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      <span>{isAr ? 'فحص شروط تأسيس الحزب (قانون الأحزاب رقم 40 لسنة 1977)' : 'Party Formation Constitutional Compliance'}</span>
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {isAr ? 'لجنة شؤون الأحزاب' : 'Parties Affairs Committee'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {isAr
                      ? 'حدد مدى استيفاء الحزب المزمع تأسيسه للشروط الخمسة المقررة دستورياً وقانونياً:'
                      : 'Toggle the 5 mandatory legal conditions to evaluate party registration validity:'}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {[
                      {
                        key: 'non_religious',
                        labelAr: 'عدم قيام الحزب على أساس ديني أو طائفي أو فئوي أو جغرافي (المادة 74)',
                        labelEn: 'No religious, sectarian, or geographical foundation (Art. 74)',
                      },
                      {
                        key: 'public_funding',
                        labelAr: 'علانية المبادئ والأهداف ومصادر التمويل والمقرات دون أي تشكيلات عسكرية',
                        labelEn: 'Transparency of principles, funding sources, with zero paramilitary wings',
                      },
                      {
                        key: 'democratic_program',
                        labelAr: 'عدم تعارض برنامج الحزب مع الدستور ومبادئ الحفاظ على الوحدة الوطنية',
                        labelEn: 'Platform does not conflict with the Constitution or National Unity',
                      },
                      {
                        key: 'distinct_platform',
                        labelAr: 'تميز برنامج الحزب وإضافته الإيجابية للحياة السياسية دون تكرار أحزاب قائمة',
                        labelEn: 'Distinct political program offering a genuine addition to civic life',
                      },
                      {
                        key: 'provincial_signatories',
                        labelAr: 'استيفاء 5000 عضو مؤسس من 10 محافظات على الأقل لضمان التمثيل الوطني',
                        labelEn: 'At least 5,000 founding members from a minimum of 10 governorates',
                      },
                    ].map((cond) => {
                      const isSatisfied = partyConditionStates[cond.key];
                      return (
                        <div
                          key={cond.key}
                          onClick={() =>
                            setPartyConditionStates((prev) => ({
                              ...prev,
                              [cond.key]: !prev[cond.key],
                            }))
                          }
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                            isSatisfied
                              ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                              : 'bg-red-950/40 border-red-500/50 text-red-200'
                          }`}
                        >
                          <span className="font-medium pr-2">{isAr ? cond.labelAr : cond.labelEn}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                              isSatisfied ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                            }`}
                          >
                            {isSatisfied ? (isAr ? 'مستوفٍ ✓' : 'Satisfied ✓') : (isAr ? 'مخالف ✕' : 'Violated ✕')}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Verdict Output */}
                  {(() => {
                    const allValid = Object.values(partyConditionStates).every(Boolean);
                    return (
                      <div
                        className={`p-4 rounded-xl border text-xs space-y-1.5 transition-all ${
                          allValid
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                            : 'bg-red-950/60 border-red-500 text-red-200'
                        }`}
                      >
                        <div className="font-bold text-sm flex items-center gap-2">
                          {allValid ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-red-400" />}
                          <span>
                            {allValid
                              ? isAr
                                ? 'قرار اللجنة: قبول الإخطار واكتساب الشخصية الاعتبارية للحزب'
                                : 'Committee Decision: Notification Accepted & Legal Status Conferred'
                              : isAr
                              ? 'قرار اللجنة: الاعتراض على التأسيس والطعن أمام المحكمة الإدارية العليا'
                              : 'Committee Decision: Formal Objection & Referral to Supreme Administrative Court'}
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed opacity-90">
                          {allValid
                            ? isAr
                              ? 'يتمتع الحزب بحق ممارسة نشاطه السياسي وإصدار صحيفته وفتح مقراته بمجرد انقضاء ثلاثين يوماً دون اعتراض.'
                              : 'The party exercises full political rights, newspaper publication, and headquarters operations post 30-day objection window.'
                            : isAr
                            ? 'يحظر القانون قيام أي حزب مخالف لأحد هذه الشروط صوناً للنظام الديمقراطي والوحدة الوطنية.'
                            : 'Law forbids registering non-compliant parties to protect democratic order and civic unity.'}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Historical Evolution of Political Parties in Egypt */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{isAr ? 'المراحل الأربع للحياة الحزبية بمصر' : 'Historical Phases of Egyptian Party Politics'}</span>
                </h3>
                <div className="space-y-2.5">
                  {[
                    {
                      phaseAr: 'المرحلة الأولى: ما قبل ثورة 1919',
                      phaseEn: 'Phase 1: Pre-1919 Revolution',
                      descAr: 'نشأة الأحزاب الوطنية في مواجهة الاحتلال البريطاني، مثل الحزب الوطني بزعامة مصطفى كامل وحزب الأمة.',
                      descEn: 'Early patriotic parties countering British occupation (e.g. National Party led by Mustafa Kamel & Umma Party).',
                      color: 'border-blue-500/40 bg-blue-950/20 text-blue-200',
                    },
                    {
                      phaseAr: 'المرحلة الثانية: التعددية الحزبية (1923 - 1952)',
                      phaseEn: 'Phase 2: Pluralist Era (1923 - 1952)',
                      descAr: 'ازدهار الحياة النيابية في ظل دستور 1923 وظهور حزب الوفد كحزب أغلبية إلى جانب أحزاب الأقلية كالأحرار الدستوريين.',
                      descEn: 'Flourishing parliamentary era under 1923 Constitution dominated by Wafd Party and liberal minority parties.',
                      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200',
                    },
                    {
                      phaseAr: 'المرحلة الثالثة: التنظيم السياسي الواحد (1953 - 1976)',
                      phaseEn: 'Phase 3: Single National Organization (1953 - 1976)',
                      descAr: 'حل الأحزاب السياسية بعد ثورة 23 يوليو والاعتماد على تنظيم موحد (هيئة التحرير ثم الاتحاد القومي ثم الاتحاد الاشتراكي العربي).',
                      descEn: 'Post-1952 dissolution of parties in favor of single national bodies (Liberation Rally, National Union, Arab Socialist Union).',
                      color: 'border-amber-500/40 bg-amber-950/20 text-amber-200',
                    },
                    {
                      phaseAr: 'المرحلة الرابعة: عودة التعددية الحزبية (1976 - الآن)',
                      phaseEn: 'Phase 4: Return to Pluralism (1976 - Present)',
                      descAr: 'إنشاء المنابر السياسية الثلاثة، وصدور قانون الأحزاب 1977، وتأكيد دستور 2014 على التعددية الحزبية بالإخطار وتداول السلطة.',
                      descEn: '1976 political platforms, Law 40/1977, and 2014 Constitution safeguarding multiparty pluralism and power transfer.',
                      color: 'border-purple-500/40 bg-purple-950/20 text-purple-200',
                    },
                  ].map((p, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border text-xs space-y-1 ${p.color}`}>
                      <div className="font-bold text-[11px]">{isAr ? p.phaseAr : p.phaseEn}</div>
                      <p className="opacity-90 leading-relaxed text-[11px]">{isAr ? p.descAr : p.descEn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Electoral Systems & Seat Allocation Calculator */}
        {activeTab === 'electoral_systems' && (
          <div className="space-y-6">
            {/* Systems Control Bar */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? 'محاكاة النظم الانتخابية وتوزيع المقاعد البرلمانية' : 'Comparative Electoral Engineering & Seat Allocation'}</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isAr
                    ? 'قارن بين القائمة المطلقة المغلقة ونظم التمثيل النسبي (طريقة هوندت والباقي الأكبر)'
                    : 'Compare Closed Party-List, D’Hondt method, and Largest Remainder quota.'}
                </p>
              </div>

              {/* System Selector Toggle */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-700 text-xs">
                <button
                  onClick={() => setSelectedSystem('dhondt')}
                  className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all ${
                    selectedSystem === 'dhondt'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'طريقة هوندت (D’Hondt)' : 'D’Hondt (PR)'}
                </button>
                <button
                  onClick={() => setSelectedSystem('largest_remainder')}
                  className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all ${
                    selectedSystem === 'largest_remainder'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'الباقي الأكبر (Hare)' : 'Largest Remainder'}
                </button>
                <button
                  onClick={() => setSelectedSystem('closed_list')}
                  className={`min-h-[44px] px-3.5 py-2 rounded-lg font-medium transition-all ${
                    selectedSystem === 'closed_list'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'القائمة المطلقة (Winner-Take-All)' : 'Closed Absolute List'}
                </button>
              </div>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Parliamentary Chamber Hemicycle */}
            <ParliamentHemiCycleVectorSchematic
              selectedSystem={selectedSystem}
              seatsResult={seatsResult}
              totalSeats={totalSeats}
              isAr={isAr}
            />

            {/* Sliders & Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Votes Sliders */}
              <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700 text-xs">
                  <span className="font-bold text-slate-200">
                    {isAr ? 'أصوات القوائم والأحزاب في الدائرة الانتخابية' : 'District Ballots Cast per Party List'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{isAr ? 'عدد مقاعد الدائرة:' : 'District Seats:'}</span>
                    <select
                      value={totalSeats}
                      onChange={(e) => setTotalSeats(Number(e.target.value))}
                      className="min-h-[44px] bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-emerald-400 font-bold"
                    >
                      {[5, 10, 15, 20, 25].map((s) => (
                        <option key={s} value={s}>
                          {s} {isAr ? 'مقاعد' : 'seats'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Slider A */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-medium">
                    <span className="text-emerald-400">{isAr ? 'حزب الأمل (Party A):' : 'Party A:'}</span>
                    <span className="font-mono text-white">{votesPartyA.toLocaleString()} {isAr ? 'صوت' : 'votes'}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={votesPartyA}
                    onChange={(e) => setVotesPartyA(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                {/* Slider B */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-medium">
                    <span className="text-blue-400">{isAr ? 'حزب المستقبل (Party B):' : 'Party B:'}</span>
                    <span className="font-mono text-white">{votesPartyB.toLocaleString()} {isAr ? 'صوت' : 'votes'}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={votesPartyB}
                    onChange={(e) => setVotesPartyB(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>

                {/* Slider C */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-medium">
                    <span className="text-amber-400">{isAr ? 'حزب التضامن (Party C):' : 'Party C:'}</span>
                    <span className="font-mono text-white">{votesPartyC.toLocaleString()} {isAr ? 'صوت' : 'votes'}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={votesPartyC}
                    onChange={(e) => setVotesPartyC(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                {/* Slider D */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-medium">
                    <span className="text-purple-400">{isAr ? 'حزب النهضة (Party D):' : 'Party D:'}</span>
                    <span className="font-mono text-white">{votesPartyD.toLocaleString()} {isAr ? 'صوت' : 'votes'}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={votesPartyD}
                    onChange={(e) => setVotesPartyD(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>
              </div>

              {/* Seat Results Visualizer */}
              <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <h4 className="text-xs font-bold text-slate-200 pb-2 border-b border-slate-700 flex items-center justify-between">
                  <span>{isAr ? 'نتيجة توزيع المقاعد البرلمانية' : 'Parliamentary Seats Allocation Result'}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    {selectedSystem === 'dhondt'
                      ? 'التمثيل النسبي (هوندت)'
                      : selectedSystem === 'largest_remainder'
                      ? 'التمثيل النسبي (الباقي الأكبر)'
                      : 'القائمة المطلقة المغلقة (الفائز يحصد الكل)'}
                  </span>
                </h4>

                {/* Graphical Seats Bar */}
                <div className="space-y-1.5">
                  <div className="h-6 rounded-xl overflow-hidden flex bg-slate-900 border border-slate-700">
                    {seatsResult.map((p, idx) => {
                      const pct = totalSeats > 0 ? (p.seats / totalSeats) * 100 : 0;
                      if (pct === 0) return null;
                      return (
                        <div
                          key={idx}
                          style={{ width: `${pct}%`, backgroundColor: p.color }}
                          className="h-full flex items-center justify-center text-[10px] font-bold text-slate-950 transition-all duration-300"
                          title={`${p.name}: ${p.seats} seats`}
                        >
                          {p.seats > 0 && `${p.seats}`}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>{isAr ? '0 مقعد' : '0 Seats'}</span>
                    <span>{isAr ? `${totalSeats} مقاعد بالكامل` : `${totalSeats} Total District Seats`}</span>
                  </div>
                </div>

                {/* Detailed Table */}
                <div className="space-y-2 pt-2">
                  {seatsResult.map((party, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/60 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: party.color }} />
                        <span className="font-semibold text-white">{party.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-400 font-mono text-[11px]">
                          {party.votes.toLocaleString()} {isAr ? 'صوت' : 'votes'}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                          {party.seats} {isAr ? 'مقعد' : 'seats'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Civic Scenarios & Electoral Integrity Sandbox */}
        {activeTab === 'civic_sandbox' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-300 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>{isAr ? 'بنك سيناريوهات المواطنة والنزاهة الانتخابية' : 'Civic Scenarios & Electoral Integrity Sandbox'}</span>
                </span>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  {isAr
                    ? 'تدرب على معالجة المواقف السياسية والانتخابية الواقعية بالاستناد لمواد الدستور والقانون.'
                    : 'Practice solving real-world civic and electoral dilemmas using constitutional provisions.'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeScenarioIndex === 0}
                  onClick={() => {
                    setActiveScenarioIndex((i) => Math.max(0, i - 1));
                    setScenarioAnswerSelected(null);
                  }}
                  className="min-h-[44px] px-3.5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-xs text-white transition-all flex items-center justify-center"
                >
                  {isAr ? 'السابق' : 'Prev'}
                </button>
                <span className="font-mono text-emerald-400 text-xs">
                  {activeScenarioIndex + 1} / {CIVIC_DILEMMAS.length}
                </span>
                <button
                  disabled={activeScenarioIndex === CIVIC_DILEMMAS.length - 1}
                  onClick={() => {
                    setActiveScenarioIndex((i) => Math.min(CIVIC_DILEMMAS.length - 1, i + 1));
                    setScenarioAnswerSelected(null);
                  }}
                  className="min-h-[44px] px-3.5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-xs text-white transition-all flex items-center justify-center"
                >
                  {isAr ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>

            {(() => {
              const currentScenario = CIVIC_DILEMMAS[activeScenarioIndex];
              return (
                <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4">
                  <h4 className="text-base font-bold text-white">
                    {isAr ? currentScenario.titleAr : currentScenario.titleEn}
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-750 text-sm text-slate-200 leading-relaxed font-medium">
                    {isAr ? currentScenario.descAr : currentScenario.descEn}
                  </div>

                  {/* Options */}
                  <div className="space-y-3 pt-2">
                    {currentScenario.options.map((opt, optIdx) => {
                      const isChosen = scenarioAnswerSelected === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => setScenarioAnswerSelected(optIdx)}
                          className={`min-h-[44px] p-4 rounded-xl border cursor-pointer text-xs transition-all ${
                            isChosen
                              ? opt.isCorrect
                                ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-md'
                                : 'bg-red-950/50 border-red-500 text-red-200 shadow-md'
                              : 'bg-slate-900/60 border-slate-750 text-slate-300 hover:bg-slate-700/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">
                              {isAr ? opt.textAr : opt.textEn}
                            </span>
                            {isChosen && (
                              <span>
                                {opt.isCorrect ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-red-400" />
                                )}
                              </span>
                            )}
                          </div>
                          {isChosen && (
                            <p className="mt-2 text-xs opacity-90 border-t border-slate-700/50 pt-2 leading-relaxed">
                              {isAr ? opt.rationaleAr : opt.rationaleEn}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Studio Footer */}
      <div className="mt-8 pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>
            {isAr
              ? 'معتمد وفق محددات وزارة التربية والتعليم لكتاب التربية الوطنية للصف الثالث الثانوي ودستور مصر 2014 المعدل'
              : 'Accredited under MoE G12 Civics Specifications & Amended 2014 Egyptian Constitution'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-emerald-400 font-semibold">15th Virtual Studio</span>
          <span>•</span>
          <span>40,775+ Databank MCQs</span>
        </div>
      </div>
    </div>
  );
};
