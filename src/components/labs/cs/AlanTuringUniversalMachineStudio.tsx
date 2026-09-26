import React, { useState, useEffect, useRef } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Binary,
  Play,
  Pause,
  SkipForward,
  Cpu,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import turingPhoto from '../../../assets/cs/turing_computable_numbers_1936.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface TuringHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const TURING_HOTSPOTS: TuringHotspot[] = [
  {
    id: 'turing_infinite_tape',
    xPct: 65.0,
    yPct: 62.0,
    titleAr: 'الشريط اللانهائي المقسم إلى خلايا (Infinite Tape)',
    titleEn: 'Infinite Discrete Cell Memory Tape',
    categoryAr: 'بنية الذاكرة الحاسوبية التجريدية',
    categoryEn: 'Abstract Memory Architecture',
    descAr:
      'الشريط الورقي اللانهائي المقسم إلى مربعات أو خلايا متتالية، كل منها قادر على حمل رمز واحد من أبجدية محدودة (مثل {0, 1, ␣}). يمثل الشريط النموذج الأولي المجرد لذاكرة الوصول العشوائي (RAM) ووسائط التخزين الرقمية.',
    descEn:
      'The infinite one-dimensional tape partitioned into discrete sequential squares, each holding a single symbol from a finite alphabet (such as {0, 1, ␣}). The tape embodies the mathematical foundation of digital memory and addressable storage.',
    scientificInsightAr:
      'أثبت تورينج أن شريطاً أحادي البعد كافٍ تماماً لإجراء أي عملية حسابية يمكن لأي حاسوب متعدد الأبعاد أو خارق تنفيذها (أطروحة تشيرش-تورينج).',
    scientificInsightEn:
      'Turing proved that a simple linear tape is computationally equivalent to any arbitrarily complex multi-dimensional storage architecture (Church-Turing thesis).',
  },
  {
    id: 'read_write_scanning_head',
    xPct: 22.0,
    yPct: 35.0,
    titleAr: 'رأس القراءة والكتابة والمسح (Read/Write Head)',
    titleEn: 'Scanning Read/Write Head Mechanism',
    categoryAr: 'وحدة التنفيذ الحركي',
    categoryEn: 'Active Execution Unit',
    descAr:
      'الرأس الميكانيكي الافتراضي المتموضع فوق خلية واحدة في كل لحظة زمنية، القادر على قراءة الرمز الحالي، ومحوه، وكتابة رمز جديد مكانه، ثم التحرك خطوة واحدة جهة اليمين (R) أو اليسار (L) أو التوقف (H).',
    descEn:
      'The scanning read/write head positioned over exactly one tape square at any instant, capable of reading the current symbol, erasing or writing a replacement, and stepping left (L), right (R), or halting (H).',
    scientificInsightAr:
      'يحاكي الرأس حركة العين البشرية للرياضياتي وهو يقرأ ويكتب الأرقام خطوة بخطوة أثناء حل المسائل الحسابية على الورق.',
    scientificInsightEn:
      'The head precisely models the cognitive visual scanning and handwriting of a human mathematician computing symbols step-by-step on graph paper.',
  },
  {
    id: 'state_transition_table',
    xPct: 45.0,
    yPct: 40.0,
    titleAr: 'جدول الانتقال بين الحالات المنطقية (δ Transition Function)',
    titleEn: 'State Transition Function & Table (δ: Q × Σ → Q × Σ × D)',
    categoryAr: 'المنطق البرمجي وآلة الحالة المحدودة',
    categoryEn: 'Finite State Machine Logic',
    descAr:
      'مجموعة الحالات الداخلية المحدودة (Q) ودالة الانتقال (δ) التي تحدد بدقة متناهية سلوك الآلة: "إذا كنت في الحالة q والرمز المقروء هو s، فاكتب s\'، وانتقل إلى الحالة q\'، وتحرك في الاتجاه D".',
    descEn:
      'The finite internal state register (Q) governed by the transition function (δ), formally instructing: "Given current state q and scanned symbol s, overwrite with s\', transition to state q\', and shift the head along direction D."',
    scientificInsightAr:
      'يشكل جدول الحالات هذا جوهر البرمجة الإجرائية ونموذج المترجمات (Compilers) والمحللات النحوية في علوم الحاسب الحديثة.',
    scientificInsightEn:
      'This state transition matrix underpins deterministic automata, lexical parsing, compiler construction, and modern protocol state machines.',
  },
  {
    id: 'universal_turing_machine_concept',
    xPct: 52.0,
    yPct: 22.0,
    titleAr: 'آلة تورينج العامة (The Universal Machine - UTM)',
    titleEn: 'The Universal Turing Machine (UTM Conception)',
    categoryAr: 'الحاسوب العام القابل لإعادة البرمجة',
    categoryEn: 'General-Purpose Programmable Computing',
    descAr:
      'الإنجاز النظري الأهم في الورقة العلمية؛ حيث أثبت تورينج إمكانية بناء آلة تورينج واحدة (UTM) قادرة على محاكاة أي آلة تورينج أخرى إذا تم تغذيتها برقم وصف الآلة (Description Number) على شريطها.',
    descEn:
      'Turing’s paramount theoretical triumph: proving the existence of a single Universal Turing Machine (UTM) capable of executing any specialized computing machine when provided that machine’s encoded program on its input tape.',
    scientificInsightAr:
      'تحولت الفكرة من آلات صلبة أحادية الغرض (كالآلات الحاسبة الميكانيكية) إلى فكرة الحاسوب العام الذي يغير وظيفته بمجرد تغيير البرنامج المدخل.',
    scientificInsightEn:
      'This single conceptual breakthrough birthed software itself: transforming hardware from static single-purpose mechanisms into universal reprogrammable computers.',
  },
  {
    id: 'entscheidungsproblem_halting_proof',
    xPct: 84.0,
    yPct: 70.0,
    titleAr: 'حل معضلة القرار وبرهان توقف الآلة (Halting Problem)',
    titleEn: 'Resolution of the Entscheidungsproblem & Halting Problem',
    categoryAr: 'حدود الحوسبة والمنطق الرياضي',
    categoryEn: 'Computational Limits & Decidability',
    descAr:
      'برهان تورينج القاطع بعدم وجود خوارزمية عامة قادرة على التنبؤ بما إذا كانت أي آلة تورينج ستتوقف في النهاية أم ستستمر في حلقة تكرارية لانهائية (مسألة التوقف غير القابلة للحل)، قاضياً بذلك على حلم ديفيد هيلبرت في إيجاد إجراء آلي لحل كل الرياضيات.',
    descEn:
      'Turing’s decisive proof via diagonalization establishing that no general algorithm can determine whether an arbitrary program will eventually halt or loop forever, shattering David Hilbert’s Entscheidungsproblem.',
    scientificInsightAr:
      'تعد مسألة التوقف (The Halting Problem) أول مسألة رياضية غير قابلة للحساب (Undecidable) تثبت قيود المعرفة الخوارزمية رياضياً.',
    scientificInsightEn:
      'The Halting Problem established the mathematical boundary of algorithmic computability, demonstrating that some well-defined mathematical truths cannot be mechanically solved.',
  },
];

interface TransitionRule {
  currentState: string;
  readSymbol: string;
  writeSymbol: string;
  moveDirection: 'L' | 'R' | 'H';
  nextState: string;
  descAr: string;
  descEn: string;
}

interface TuringProgram {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  initialTape: string[];
  initialHeadPos: number;
  rules: TransitionRule[];
}

const TURING_PROGRAMS: TuringProgram[] = [
  {
    id: 'binary_incrementer',
    nameAr: 'إضافة 1 ثنائياً (Binary +1 Incrementer)',
    nameEn: 'Binary +1 Incrementer',
    descriptionAr: 'يقرأ عدداً ثنائياً (مثل 1011 = 11) ويضيف إليه 1 فيصبح (1100 = 12) مع معالجة الحمل (Carry).',
    descriptionEn: 'Traverses to the end of a binary string and increments by 1, correctly propagating carry bits.',
    initialTape: ['␣', '1', '0', '1', '1', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣'],
    initialHeadPos: 1,
    rules: [
      {
        currentState: 'q_scan_right',
        readSymbol: '0',
        writeSymbol: '0',
        moveDirection: 'R',
        nextState: 'q_scan_right',
        descAr: 'التحرك يميناً فوق 0 للوصول إلى نهاية العدد',
        descEn: 'Scan right over 0 towards least significant bit',
      },
      {
        currentState: 'q_scan_right',
        readSymbol: '1',
        writeSymbol: '1',
        moveDirection: 'R',
        nextState: 'q_scan_right',
        descAr: 'التحرك يميناً فوق 1 للوصول إلى نهاية العدد',
        descEn: 'Scan right over 1 towards least significant bit',
      },
      {
        currentState: 'q_scan_right',
        readSymbol: '␣',
        writeSymbol: '␣',
        moveDirection: 'L',
        nextState: 'q_add',
        descAr: 'بلوغ الفراغ، والرجوع خطوة لليسار لبدء الإضافة',
        descEn: 'Reached blank, step left to begin addition',
      },
      {
        currentState: 'q_add',
        readSymbol: '0',
        writeSymbol: '1',
        moveDirection: 'H',
        nextState: 'q_halt',
        descAr: 'تحويل 0 إلى 1 والتوقف (تم الجمع بنجاح دون حمل إضافي)',
        descEn: 'Change 0 to 1 and halt (addition complete, no further carry)',
      },
      {
        currentState: 'q_add',
        readSymbol: '1',
        writeSymbol: '0',
        moveDirection: 'L',
        nextState: 'q_add',
        descAr: 'تحويل 1 إلى 0 وتمرير الحمل لليسار',
        descEn: 'Change 1 to 0 and propagate carry leftward',
      },
      {
        currentState: 'q_add',
        readSymbol: '␣',
        writeSymbol: '1',
        moveDirection: 'H',
        nextState: 'q_halt',
        descAr: 'إضافة بت حمل جديد في أقصى اليسار والتوقف',
        descEn: 'Add overflow carry bit at left boundary and halt',
      },
    ],
  },
  {
    id: 'bit_inverter',
    nameAr: 'عاكس البتات (Bitwise NOT Inverter)',
    nameEn: 'Bitwise NOT Inverter',
    descriptionAr: 'يقلب كل بت ثنائي من 1 إلى 0 ومن 0 إلى 1 على طول السلسلة.',
    descriptionEn: 'Inverts every binary bit across the input stream, transforming 1 to 0 and 0 to 1.',
    initialTape: ['␣', '1', '1', '0', '1', '0', '0', '1', '␣', '␣', '␣', '␣', '␣'],
    initialHeadPos: 1,
    rules: [
      {
        currentState: 'q0',
        readSymbol: '1',
        writeSymbol: '0',
        moveDirection: 'R',
        nextState: 'q0',
        descAr: 'قلب 1 إلى 0 والتحرك يميناً',
        descEn: 'Invert 1 to 0 and step right',
      },
      {
        currentState: 'q0',
        readSymbol: '0',
        writeSymbol: '1',
        moveDirection: 'R',
        nextState: 'q0',
        descAr: 'قلب 0 إلى 1 والتحرك يميناً',
        descEn: 'Invert 0 to 1 and step right',
      },
      {
        currentState: 'q0',
        readSymbol: '␣',
        writeSymbol: '␣',
        moveDirection: 'H',
        nextState: 'q_halt',
        descAr: 'اكتمال معالجة السلسلة والتوقف',
        descEn: 'Reached end of stream and halt',
      },
    ],
  },
  {
    id: 'busy_beaver_2state',
    nameAr: 'القندس النشط ثنائي الحالات (2-State Busy Beaver)',
    nameEn: '2-State Busy Beaver (BB-2)',
    descriptionAr: 'مسألة القندس النشط الشهيرة: آلة من حالتين تنتج أربعة آحاد متتالية وتتوقف في 6 خطوات بالضبط.',
    descriptionEn: 'Famous mathematical game: 2-state Turing machine that produces four 1s and halts in exactly 6 steps.',
    initialTape: ['␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣', '␣'],
    initialHeadPos: 5,
    rules: [
      {
        currentState: 'A',
        readSymbol: '␣',
        writeSymbol: '1',
        moveDirection: 'R',
        nextState: 'B',
        descAr: 'كتابة 1، التحرك يميناً، والانتقال للحالة B',
        descEn: 'Write 1, step right, transition to state B',
      },
      {
        currentState: 'A',
        readSymbol: '1',
        writeSymbol: '1',
        moveDirection: 'L',
        nextState: 'B',
        descAr: 'إبقاء 1، التحرك يساراً، والانتقال للحالة B',
        descEn: 'Keep 1, step left, transition to state B',
      },
      {
        currentState: 'B',
        readSymbol: '␣',
        writeSymbol: '1',
        moveDirection: 'L',
        nextState: 'A',
        descAr: 'كتابة 1، التحرك يساراً، والعودة للحالة A',
        descEn: 'Write 1, step left, transition to state A',
      },
      {
        currentState: 'B',
        readSymbol: '1',
        writeSymbol: '1',
        moveDirection: 'H',
        nextState: 'q_halt',
        descAr: 'إبقاء 1 والتوقف النهائي المحقق للحد الأقصى (BB-2 = 4)',
        descEn: 'Keep 1 and halt (achieving the optimal BB-2 maximum of 4 ones)',
      },
    ],
  },
];

export const AlanTuringUniversalMachineStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<TuringHotspot>(TURING_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<TuringProgram>(TURING_PROGRAMS[0]);

  // Turing Machine Dynamic State
  const [tape, setTape] = useState<string[]>([...selectedProgram.initialTape]);
  const [headPos, setHeadPos] = useState<number>(selectedProgram.initialHeadPos);
  const [currentState, setCurrentState] = useState<string>(selectedProgram.rules[0].currentState);
  const [stepCount, setStepCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isHalted, setIsHalted] = useState<boolean>(false);
  const [activeRule, setActiveRule] = useState<TransitionRule | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset when program changes
  const resetMachine = (prog: TuringProgram = selectedProgram) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setIsHalted(false);
    setTape([...prog.initialTape]);
    setHeadPos(prog.initialHeadPos);
    setCurrentState(prog.rules[0].currentState);
    setStepCount(0);
    setActiveRule(null);
  };

  const handleSelectProgram = (prog: TuringProgram) => {
    setSelectedProgram(prog);
    resetMachine(prog);
  };

  // Single step execution
  const executeStep = () => {
    if (isHalted || currentState === 'q_halt') {
      setIsHalted(true);
      setIsRunning(false);
      return;
    }

    const currentSymbol = tape[headPos] ?? '␣';
    const matchingRule = selectedProgram.rules.find(
      (r) => r.currentState === currentState && r.readSymbol === currentSymbol
    );

    if (!matchingRule) {
      // No rule found -> abnormal halt
      setIsHalted(true);
      setIsRunning(false);
      return;
    }

    setActiveRule(matchingRule);

    // Apply write
    const nextTape = [...tape];
    nextTape[headPos] = matchingRule.writeSymbol;
    setTape(nextTape);

    // Apply move
    let nextHead = headPos;
    if (matchingRule.moveDirection === 'L') {
      nextHead = Math.max(0, headPos - 1);
    } else if (matchingRule.moveDirection === 'R') {
      nextHead = Math.min(tape.length - 1, headPos + 1);
    }

    setHeadPos(nextHead);
    setCurrentState(matchingRule.nextState);
    setStepCount((prev) => prev + 1);

    if (matchingRule.nextState === 'q_halt' || matchingRule.moveDirection === 'H') {
      setIsHalted(true);
      setIsRunning(false);
    }
  };

  // Toggle run / pause
  const toggleRun = () => {
    if (isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      if (isHalted) resetMachine();
      setIsRunning(true);
    }
  };

  useEffect(() => {
    if (isRunning && !isHalted) {
      timerRef.current = setInterval(() => {
        executeStep();
      }, 500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, isHalted, tape, headPos, currentState]);

  const toggleCellSymbol = (index: number) => {
    if (isRunning) return;
    const current = tape[index];
    let next = '1';
    if (current === '1') next = '0';
    else if (current === '0') next = '␣';
    else next = '1';
    const nextTape = [...tape];
    nextTape[index] = next;
    setTape(nextTape);
  };

  const modalData: HiResImageModalData = {
    imageUrl: turingPhoto,
    titleAr: 'بحث آلان تورينج التاريخي (1936) — الأرقام القابلة للحساب وآلة تورينج',
    titleEn: 'Alan Turing’s Landmark 1936 Paper — On Computable Numbers & The Universal Machine',
    subtitleAr: 'وقائع جمعية لندن الرياضية (Proceedings of the London Mathematical Society, Vol. 42)',
    subtitleEn: 'The Birth of Theoretical Computer Science & Universal Computation',
    descriptionAr:
      'وثيقة أرشيفية نادرة بدقة 4K من المجلد 42 لعام 1936 لجمعية لندن للرياضيات التي نشر فيها آلان تورينج بحثه الثوري "عن الأرقام القابلة للحساب، مع تطبيق على مسألة القرار". تظهر الصفحة الصياغة الرياضية الدقيقة للآلة الشاملة (Universal Machine) والشريط المقسم ومصفوفة الحالات، إلى جانب شريط ورقي مثقب أصلي وآلة حاسبة مكتبية كلاسيكية من طراز Burroughs من ثلاثينيات القرن العشرين.',
    descriptionEn:
      'Ultra-high-definition 4K archival plate of Alan Turing’s revolutionary 1936 paper "On Computable Numbers, with an Application to the Entscheidungsproblem". The open volume displays the rigorous mathematical formulation of tape-based abstract automata, discrete configuration states, and the Universal Turing Machine, accompanied by period paper tape and a 1930s mechanical Burroughs computing desk machine.',
    locationAr: 'مكتبة جامعة كامبريدج / كلية كينغز كوليدج',
    locationEn: 'Cambridge University Library / King’s College Archives',
    dateOrEraAr: '1936 ميلادية (عصر الحوسبة النظرية)',
    dateOrEraEn: '1936 CE (Dawn of Theoretical Computing)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950/40 border-cyan-900/40 text-slate-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* 4K Archival Viewer Modal */}
      {isModalOpen && (
        <HiResImageModal
          data={modalData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={isArabic ? 'ar' : 'en'}
          theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
        />
      )}

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-600/30 text-white">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                1936 CE • London
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'الآلة الشاملة (UTM) • حدود الحوسبة' : 'Universal Machine • Limits of Computing'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-200">
              {isArabic
                ? 'استوديو آلان تورينج: الآلة الشاملة، شريط الحالات، ومسألة التوقف'
                : 'Alan Turing & The Universal Machine: Tape Automata & The Halting Problem'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص مخطوط تورينج بدقة 4K' : 'Inspect 4K Turing Paper'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={turingPhoto}
              alt="Alan Turing 1936 Computable Numbers Folio"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {TURING_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] p-2 flex items-center justify-center cursor-pointer transition-all z-20 group/marker`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <span className="relative flex h-7 w-7 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-cyan-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-black shadow-lg ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125'
                          : 'bg-cyan-700/90 text-white border border-teal-300'
                      }`}
                    >
                      ★
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Badge overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-cyan-800/40 text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'انقر على العلامات النجمية لفحص عناصر الآلة' : 'Click stars to inspect universal machine concepts'}
              </span>
              <span className="text-amber-400 font-bold">5 {isArabic ? 'محطات تحليلية' : 'Hotspots'}</span>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Deep Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-cyan-800/30 bg-slate-900/60 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-cyan-800/30 pb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isArabic ? 'محور نظري' : 'Theoretical Pillar'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-cyan-200">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-700/30 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Binary className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر التأسيسي في علوم الحاسب:' : 'Foundational Computing Legacy:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-cyan-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-amber-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Universal Turing Machine Live Tape Engine */}
      <div className="p-5 sm:p-6 rounded-2xl border border-cyan-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-cyan-200">
              <Binary className="w-5 h-5 text-teal-400" />
              <span>
                {isArabic
                  ? 'محاكي آلة تورينج العامة التفاعلي (Universal Turing Machine Simulator)'
                  : 'Universal Turing Machine Live Tape & State Transition Simulator'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'تحكم برأس القراءة والكتابة، تتبع حالات الآلة، واختبر الخوارزميات الثنائية مع إمكانية تعديل الشريط يدوياً'
                : 'Directly manipulate the infinite tape, execute discrete transition rules, and inspect halting behavior'}
            </p>
          </div>

          {/* Program Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">{isArabic ? 'البرنامج المخزن:' : 'Program:'}</span>
            {TURING_PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                onClick={() => handleSelectProgram(prog)}
                className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedProgram.id === prog.id
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {isArabic ? prog.nameAr : prog.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Live Status HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">{isArabic ? 'الحالة الحالية (State Q):' : 'Current State (Q):'}</div>
            <div className="text-base text-cyan-300 font-bold mt-0.5">{currentState}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">{isArabic ? 'الرمز تحت الرأس (Scanned):' : 'Scanned Symbol:'}</div>
            <div className="text-base text-amber-300 font-bold mt-0.5">
              [{tape[headPos] === '␣' ? 'BLANK (␣)' : tape[headPos]}]
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">{isArabic ? 'عدد الخطوات المنفذة:' : 'Steps Executed:'}</div>
            <div className="text-base text-teal-300 font-bold mt-0.5">{stepCount}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">{isArabic ? 'حالة الآلة:' : 'Machine Status:'}</div>
            <div className="text-base font-bold mt-0.5 flex items-center gap-1.5">
              {isHalted ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {isArabic ? 'توقف تام (HALTED)' : 'HALTED'}
                </span>
              ) : (
                <span className="text-cyan-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4 animate-spin" />
                  {isArabic ? 'قيد الحساب (RUNNING)' : 'RUNNING'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* SVG Dynamic Turing Tape with Animated Scanning Head */}
        <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/40 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-300 font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              {isArabic ? 'شريط تورينج التفاعلي (انقر على أي خلية لتبديل قيمتها 0 / 1 / ␣)' : 'Interactive Tape (Click any cell to toggle 0 / 1 / ␣)'}
            </span>
            <span className="text-slate-400">Head Index: {headPos}</span>
          </div>

          {/* Interactive Tape Cells Container */}
          <div className="w-full overflow-x-auto py-3">
            <div className="flex items-center justify-center gap-1.5 min-w-[620px]">
              {tape.map((symbol, idx) => {
                const isHead = idx === headPos;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    {/* Head pointer */}
                    <div className="h-6 flex items-center justify-center">
                      {isHead && (
                        <div className="text-amber-400 animate-bounce text-xs font-mono font-bold flex flex-col items-center">
                          <span>▼ HEAD</span>
                        </div>
                      )}
                    </div>

                    {/* Cell Box */}
                    <button
                      onClick={() => toggleCellSymbol(idx)}
                      disabled={isRunning}
                      className={`w-12 h-14 rounded-xl border flex items-center justify-center font-mono text-lg font-black transition-all cursor-pointer ${
                        isHead
                          ? 'bg-cyan-950 border-amber-400 text-amber-300 shadow-lg shadow-amber-400/20 scale-110 z-10'
                          : symbol === '␣'
                          ? 'bg-slate-900 border-slate-800 text-slate-600 hover:border-slate-700'
                          : 'bg-slate-800/90 border-cyan-800/50 text-cyan-200 hover:border-cyan-500'
                      }`}
                      title={`Cell ${idx}: Click to toggle`}
                    >
                      {symbol === '␣' ? '␣' : symbol}
                    </button>

                    {/* Cell Index */}
                    <span className="text-[10px] font-mono text-slate-500">[{idx}]</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleRun}
                className={`min-h-[44px] px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                  isRunning
                    ? 'bg-amber-600 hover:bg-amber-500 text-slate-950'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل تلقائي' : 'Run')}</span>
              </button>

              <button
                onClick={executeStep}
                disabled={isRunning || isHalted}
                className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <SkipForward className="w-4 h-4" />
                <span>{isArabic ? 'خطوة واحدة (Single Step)' : 'Single Step'}</span>
              </button>

              <button
                onClick={() => resetMachine()}
                className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer"
                title={isArabic ? 'إعادة ضبط الشريط' : 'Reset Tape'}
                aria-label={isArabic ? 'إعادة ضبط الشريط' : 'Reset Tape'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Active Rule description */}
            <div className="text-xs text-slate-300 font-mono">
              {activeRule ? (
                <span className="text-amber-300">
                  {isArabic ? activeRule.descAr : activeRule.descEn} (δ: {activeRule.currentState}, {activeRule.readSymbol} → {activeRule.writeSymbol}, {activeRule.moveDirection}, {activeRule.nextState})
                </span>
              ) : (
                <span className="text-slate-500">
                  {isArabic ? 'في انتظار تنفيذ الخطوة الأولى...' : 'Ready for first execution step...'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Transition Rules Table */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs font-mono font-bold text-slate-300">
            {isArabic ? 'جدول دالة الانتقال المبرمج (State Transition Table):' : 'Programmed Transition Rules Table (δ):'}
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-xs font-mono text-left" dir="ltr">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="p-2">Current State</th>
                  <th className="p-2">Read</th>
                  <th className="p-2">Write</th>
                  <th className="p-2">Move</th>
                  <th className="p-2">Next State</th>
                  <th className="p-2">Semantic Purpose</th>
                </tr>
              </thead>
              <tbody>
                {selectedProgram.rules.map((rule, rIdx) => {
                  const isActive =
                    currentState === rule.currentState && tape[headPos] === rule.readSymbol;
                  return (
                    <tr
                      key={rIdx}
                      className={`border-b border-slate-900 transition-colors ${
                        isActive
                          ? 'bg-cyan-950/80 text-amber-300 font-bold'
                          : 'text-slate-300 hover:bg-slate-900/50'
                      }`}
                    >
                      <td className="p-2">{rule.currentState}</td>
                      <td className="p-2">[{rule.readSymbol}]</td>
                      <td className="p-2">[{rule.writeSymbol}]</td>
                      <td className="p-2">{rule.moveDirection === 'L' ? '← LEFT' : rule.moveDirection === 'R' ? '→ RIGHT' : '■ HALT'}</td>
                      <td className="p-2">{rule.nextState}</td>
                      <td className="p-2 text-slate-400">{isArabic ? rule.descAr : rule.descEn}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
