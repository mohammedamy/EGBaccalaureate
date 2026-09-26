import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Binary,
  Cpu,
  ChevronRight,
  HardDrive,
} from 'lucide-react';
import vonNeumannPhoto from '../../../assets/cs/von_neumann_edvac_architecture_1945.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface VonNeumannHotspot {
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

export const VON_NEUMANN_HOTSPOTS: VonNeumannHotspot[] = [
  {
    id: 'central_arithmetic_unit_alu',
    xPct: 38.0,
    yPct: 35.0,
    titleAr: 'وحدة الحساب المركزية (Central Arithmetic Unit - CA / ALU)',
    titleEn: 'Central Arithmetic Unit (CA / Modern ALU)',
    categoryAr: 'وحدات المعالجة الرقمية',
    categoryEn: 'Digital Processing Units',
    descAr:
      'الوحدة المسؤولة عن إجراء العمليات الحسابية الثنائية الأساسية (الجمع، الطرح، الضرب، القسمة) والعمليات المنطقية، وتحتوي بداخلها على مسجل المجمع (Accumulator Register) لتخزين النتائج الوسيطة.',
    descEn:
      'The core component executing binary arithmetic (addition, subtraction, multiplication, division) and boolean logic operations, housing high-speed accumulator registers for intermediate operational results.',
    scientificInsightAr:
      'اعتمد فون نيومان المنطق الثنائي البحت (Binary Base-2) بدلاً من الحسابات العشرية المعقدة لتقليل عدد الصمامات الإلكترونية ورفع الموثوقية.',
    scientificInsightEn:
      'Von Neumann mandated pure base-2 binary logic over decimal representation, drastically reducing vacuum tube counts and elevating physical reliability.',
  },
  {
    id: 'central_control_unit_cc',
    xPct: 55.0,
    yPct: 35.0,
    titleAr: 'وحدة التحكم المركزية (Central Control Unit - CC)',
    titleEn: 'Central Control Unit (CC / Modern CU)',
    categoryAr: 'التنسيق والتوجيه الزمني',
    categoryEn: 'Instruction Sequencing & Timing',
    descAr:
      'الوحدة المسؤولة عن جلب التعليمات (Fetch) تباعاً من الذاكرة، وفك شفرة الأوامر (Decode)، وتوليد نبضات التوقيت الكهربائية (Timing Pulses) لتوجيه تدفق البيانات عبر مسارات النواقل بين الذاكرة ووحدة الحساب.',
    descEn:
      'The sequencing subsystem that cyclically fetches instructions from memory, decodes operational opcodes, and emits synchronous clock timing pulses to orchestrate bus data movement.',
    scientificInsightAr:
      'ابتكر فون نيومان فكرة "عداد البرنامج" (Program Counter - PC) لتنفيذ التعليمات بتسلسل خطي تلقائي ما لم يطرأ أمر تفرع أو قفز مشروط.',
    scientificInsightEn:
      'Conceived the Program Counter register to sequentially advance execution addresses automatically unless redirected by conditional jump instructions.',
  },
  {
    id: 'stored_program_memory_m',
    xPct: 66.0,
    yPct: 38.0,
    titleAr: 'الذاكرة الموحدة للبرنامج المخزن (Stored-Program Memory M)',
    titleEn: 'Unified Stored-Program Memory (M Subsystem)',
    categoryAr: 'بنية الذاكرة المشتركة',
    categoryEn: 'Shared Memory Architecture',
    descAr:
      'الثورة المعمارية الكبرى: دمج تعليمات البرنامج وبياناته في ذاكرة رئيسية موحدة (Unified Memory Space). أنهى هذا الابتكار الحاجة إلى إعادة توصيل الأسلاك الصلبة يدوياً (Rewiring) كما كان يحدث في حاسوب إينياك (ENIAC).',
    descEn:
      'The monumental architectural breakthrough: storing program instructions and operational data interchangeably within the exact same addressable physical memory space, eliminating physical manual rewiring.',
    scientificInsightAr:
      'يتيح مفهوم البرنامج المخزن للبرنامج أن يعامل التعليمات كبيانات، مما فتح آفاق المترجمات (Compilers) وأنظمة التشغيل الحديثة.',
    scientificInsightEn:
      'Allowed computers to treat instructions as mutable data, unlocking the conceptual foundation for self-modifying code, compilers, and modern operating systems.',
  },
  {
    id: 'input_output_subsystems',
    xPct: 20.0,
    yPct: 35.0,
    titleAr: 'منظومات الإدخال والإخراج الخارجية (Outside Recording I & O)',
    titleEn: 'Input / Output Peripherals (I & O Subsystems)',
    categoryAr: 'واجهات التفاعل الطرفية',
    categoryEn: 'Peripheral Interface Subsystems',
    descAr:
      'وحدات قارئات الأشرطة المثقبة (Tape Readers) وأجهزة الطباعة والمخرجات (Printers) التي تؤمن الاتصال المستمر بين الوسط الرقمي الداخلي عالي السرعة وبين وسائط التخزين الخارجية والمستخدم البشري.',
    descEn:
      'Punched tape readers, teletype keyboards, and high-speed printers interfacing the internal electronic binary engine with external long-term storage and human operators.',
    scientificInsightAr:
      'ميز فون نيومان بين وسائط الإدخال البطيئة وبين الذاكرة السريعة الداخلية، واضعاً حجر الأساس للتسلسل الهرمي للذاكرة (Memory Hierarchy).',
    scientificInsightEn:
      'Distinguished between slow electromechanical peripheral I/O and high-speed internal memory, establishing the principles of modern memory hierarchy.',
  },
  {
    id: 'system_bus_and_delay_lines',
    xPct: 52.0,
    yPct: 62.0,
    titleAr: 'مسارات النواقل الثنائية وخطوط تأخير الزئبق (Bus Pathways)',
    titleEn: 'Binary Bus Pathways & Mercury Delay Lines',
    categoryAr: 'شبكات التوصيل ونقل النبضات',
    categoryEn: 'Data Interconnects & Acoustic Delay Lines',
    descAr:
      'شبكة النواقل المشتركة (ناقل العناوين، وناقل البيانات، وناقل التحكم) الموضحة في المخطط بالأسهم العريضة، وأحواض خطوط تأخير الزئبق الصوتي (Mercury Delay Lines) التي كانت تخزن البتات في صورة موجات صوتية فوق سمعية.',
    descEn:
      'The system bus interconnect network (Address, Data, Control lines) connecting all functional blocks, and acoustic mercury delay line tanks storing circulating ultrasonic bit pulses in liquid mercury.',
    scientificInsightAr:
      'يشكل هذا التوصيل الموحد ما يعرف اليوم بـ "عنق زجاجة فون نيومان" (Von Neumann Bottleneck) الذي تتسابق المعالجات الحديثة للتغلب عليه عبر الذاكرة المخبأة (Cache).',
    scientificInsightEn:
      'Highlighted the physical throughput bottleneck between CPU and shared memory ("Von Neumann Bottleneck"), leading directly to modern multi-level CPU caching.',
  },
];

interface MemoryWord {
  address: string;
  mnemonic: string;
  operand: string;
  value: number;
  isInstruction: boolean;
}

interface CpuRegisters {
  pc: number;
  mar: string;
  mdr: string;
  ir: string;
  acc: number;
}

type PipelinePhase = 'FETCH' | 'DECODE' | 'EXECUTE';

export const VonNeumannArchitectureStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<VonNeumannHotspot>(VON_NEUMANN_HOTSPOTS[2]); // Stored Program
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial RAM contents: Program that computes: ACC = Mem[4] + Mem[5] -> Store in Mem[6]
  const initialMemory: MemoryWord[] = [
    { address: '0x0', mnemonic: 'LOAD', operand: '0x4', value: 0, isInstruction: true },
    { address: '0x1', mnemonic: 'ADD', operand: '0x5', value: 0, isInstruction: true },
    { address: '0x2', mnemonic: 'STORE', operand: '0x6', value: 0, isInstruction: true },
    { address: '0x3', mnemonic: 'HALT', operand: '---', value: 0, isInstruction: true },
    { address: '0x4', mnemonic: 'DATA', operand: '', value: 15, isInstruction: false },
    { address: '0x5', mnemonic: 'DATA', operand: '', value: 27, isInstruction: false },
    { address: '0x6', mnemonic: 'DATA', operand: '', value: 0, isInstruction: false },
    { address: '0x7', mnemonic: 'DATA', operand: '', value: 0, isInstruction: false },
  ];

  const [memory, setMemory] = useState<MemoryWord[]>(initialMemory);
  const [phase, setPhase] = useState<PipelinePhase>('FETCH');
  const [registers, setRegisters] = useState<CpuRegisters>({
    pc: 0,
    mar: '0x0',
    mdr: 'LOAD 0x4',
    ir: 'LOAD 0x4',
    acc: 0,
  });
  const [isHalted, setIsHalted] = useState<boolean>(false);
  const [executionLog, setExecutionLog] = useState<string[]>([]);

  // Step micro-cycle execution
  const stepMicroCycle = () => {
    if (isHalted) return;

    if (phase === 'FETCH') {
      const currentWord = memory[registers.pc];
      if (!currentWord || currentWord.mnemonic === 'HALT') {
        setRegisters((prev) => ({
          ...prev,
          mar: `0x${registers.pc.toString(16)}`,
          mdr: 'HALT',
          ir: 'HALT',
        }));
        setIsHalted(true);
        setExecutionLog((prev) => [
          ...prev,
          `[FETCH] Address 0x${registers.pc.toString(16)}: Fetched HALT opcode -> CPU Halted.`,
        ]);
        return;
      }

      const fetchedStr = `${currentWord.mnemonic} ${currentWord.operand}`;
      setRegisters((prev) => ({
        ...prev,
        mar: `0x${registers.pc.toString(16)}`,
        mdr: fetchedStr,
        ir: fetchedStr,
        pc: prev.pc + 1,
      }));
      setExecutionLog((prev) => [
        ...prev,
        `[FETCH] MAR <- 0x${registers.pc.toString(16)}, MDR <- "${fetchedStr}", PC <- ${registers.pc + 1}`,
      ]);
      setPhase('DECODE');
    } else if (phase === 'DECODE') {
      const parts = registers.ir.split(' ');
      const op = parts[0];
      const targetAddr = parts[1];
      setExecutionLog((prev) => [
        ...prev,
        `[DECODE] Opcode "${op}", Target Operand Address: ${targetAddr}`,
      ]);
      setPhase('EXECUTE');
    } else if (phase === 'EXECUTE') {
      const parts = registers.ir.split(' ');
      const op = parts[0];
      const targetAddr = parts[1];
      const targetIdx = parseInt(targetAddr, 16);

      if (op === 'LOAD') {
        const val = memory[targetIdx]?.value ?? 0;
        setRegisters((prev) => ({ ...prev, acc: val }));
        setExecutionLog((prev) => [
          ...prev,
          `[EXECUTE] ACC <- Memory[${targetAddr}] (Loaded value: ${val})`,
        ]);
      } else if (op === 'ADD') {
        const val = memory[targetIdx]?.value ?? 0;
        const newAcc = registers.acc + val;
        setRegisters((prev) => ({ ...prev, acc: newAcc }));
        setExecutionLog((prev) => [
          ...prev,
          `[EXECUTE] ACC <- ACC + Memory[${targetAddr}] (${registers.acc} + ${val} = ${newAcc})`,
        ]);
      } else if (op === 'STORE') {
        const nextMem = [...memory];
        if (nextMem[targetIdx]) {
          nextMem[targetIdx] = { ...nextMem[targetIdx], value: registers.acc };
        }
        setMemory(nextMem);
        setExecutionLog((prev) => [
          ...prev,
          `[EXECUTE] Memory[${targetAddr}] <- ACC (Stored value: ${registers.acc})`,
        ]);
      } else if (op === 'HALT') {
        setIsHalted(true);
        setExecutionLog((prev) => [...prev, `[EXECUTE] HALT execution confirmed.`]);
      }

      setPhase('FETCH');
    }
  };

  const handleReset = () => {
    setMemory(initialMemory);
    setPhase('FETCH');
    setRegisters({
      pc: 0,
      mar: '0x0',
      mdr: 'LOAD 0x4',
      ir: 'LOAD 0x4',
      acc: 0,
    });
    setIsHalted(false);
    setExecutionLog([]);
  };

  const activeBus = useMemo(() => {
    if (phase === 'FETCH') return 'ADDRESS_DATA';
    if (phase === 'DECODE') return 'CONTROL';
    return 'ALU_STORE';
  }, [phase]);

  const modalData: HiResImageModalData = {
    imageUrl: vonNeumannPhoto,
    titleAr: 'تقرير فون نيومان التأسيسي (1945) — مسودة معمارية حاسوب EDVAC',
    titleEn: 'John von Neumann’s Seminal 1945 Report — First Draft on the EDVAC Architecture',
    subtitleAr: 'كلية مور للهندسة الكهربائية، جامعة بنسلفانيا (Moore School of Electrical Engineering)',
    subtitleEn: 'The Birth of the Modern Stored-Program Computer Architecture',
    descriptionAr:
      'نسخة أرشيفية نادرة بدقة 4K للمسودة الأصلية المكتوبة على الآلة الكاتبة والمؤرخة في 30 يونيو 1945، والتي صاغ فيها جون فون نيومان البنية المعمارية الموحدة لجميع الحواسيب الرقمية الحديثة. يظهر المخطط في الشكل 1 وحدات الحساب (CA)، والتحكم (CC)، والذاكرة الموحدة (M)، ومسارات النواقل الثنائية، ومحاطاً بمسطرة حاسبة تاريخية وصمامات إلكترونية مفرغة.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of John von Neumann’s historic June 30, 1945 mimeographed manuscript "First Draft of a Report on the EDVAC". The open folio reveals Figure 1: the universal functional diagram integrating the Central Arithmetic core (CA), Central Control sequencer (CC), unified Memory storage (M), Outside Recording (I/O), and binary interconnect bus pathways.',
    locationAr: 'معهد الدراسات المتقدمة، برينستون، نيوجيرسي',
    locationEn: 'Institute for Advanced Study (IAS), Princeton, NJ',
    dateOrEraAr: '1945 ميلادية (عصر الحوسبة الإلكترونية الأولى)',
    dateOrEraEn: '1945 CE (Dawn of Stored-Program Computing)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/40 border-indigo-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-amber-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                1945 CE • EDVAC
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'بنية البرنامج المخزن الموحد' : 'Stored-Program Architecture'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-amber-200">
              {isArabic
                ? 'استوديو جون فون نيومان: معمارية الحاسوب، الذاكرة الموحدة، ودورة المعالجة'
                : 'John von Neumann & EDVAC: Stored-Program Architecture & Fetch-Execute'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص تقرير EDVAC بدقة 4K' : 'Inspect 4K EDVAC Report'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-indigo-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={vonNeumannPhoto}
              alt="John von Neumann 1945 EDVAC Architecture Report"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {VON_NEUMANN_HOTSPOTS.map((hotspot) => {
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
                        isSelected ? 'bg-amber-400' : 'bg-indigo-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-black shadow-lg ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125'
                          : 'bg-indigo-700/90 text-white border border-blue-300'
                      }`}
                    >
                      ★
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Badge overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-indigo-800/40 text-slate-300">
              <span className="flex items-center gap-1.5 text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'انقر على العلامات النجمية لفحص وحدات معمارية فون نيومان' : 'Click stars to inspect von Neumann functional architecture blocks'}
              </span>
              <span className="text-amber-400 font-bold">5 {isArabic ? 'محطات تحليلية' : 'Hotspots'}</span>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Deep Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-indigo-800/30 bg-slate-900/60 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-indigo-800/30 pb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isArabic ? 'وحدة معمارية' : 'Hardware Block'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-indigo-200">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3 rounded-xl bg-indigo-950/50 border border-indigo-700/30 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Binary className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر المعماري في الحواسيب الحديثة:' : 'Modern Computer Architecture Impact:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-indigo-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Stored-Program CPU & Fetch-Decode-Execute Micro-step Pipeline */}
      <div className="p-5 sm:p-6 rounded-2xl border border-indigo-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-200">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>
                {isArabic
                  ? 'محاكي دورة المعالجة (Fetch-Decode-Execute) والذاكرة الموحدة'
                  : 'Von Neumann Architecture Stored-Program & Fetch-Decode-Execute Engine'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'تتبع حركة نبضات النواقل ونقل الكلمات الثنائية بين مسجلات المعالج (PC, MAR, MDR, IR, ACC) والذاكرة RAM'
                : 'Follow bus strobe signals and binary register transfers across PC, MAR, MDR, IR, Accumulator and RAM'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">{isArabic ? 'طور المعالجة:' : 'Cycle Phase:'}</span>
            <span
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                phase === 'FETCH'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700'
                  : phase === 'DECODE'
                  ? 'bg-amber-950 text-amber-300 border border-amber-700'
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
              }`}
            >
              {phase}
            </span>
          </div>
        </div>

        {/* Register HUD (CPU Registers) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">PC (Program Counter)</div>
            <div className="text-base text-cyan-300 font-bold mt-0.5">0x{registers.pc.toString(16)}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">MAR (Memory Address)</div>
            <div className="text-base text-blue-300 font-bold mt-0.5">{registers.mar}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">MDR (Memory Data)</div>
            <div className="text-base text-indigo-300 font-bold mt-0.5">{registers.mdr}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">IR (Instruction Reg)</div>
            <div className="text-base text-amber-300 font-bold mt-0.5">{registers.ir}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-slate-400">ACC (Accumulator)</div>
            <div className="text-base text-emerald-300 font-bold mt-0.5">{registers.acc}</div>
          </div>
        </div>

        {/* Pipeline Controls & Unified RAM Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Unified RAM Table */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-indigo-300 font-bold flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-indigo-400" />
                {isArabic ? 'الذاكرة المشتركة الموحدة (Unified RAM: Instructions & Data)' : 'Unified Stored-Program Memory (RAM)'}
              </span>
              <span className="text-slate-400">8 Words × 16-bit</span>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
              <table className="w-full text-xs font-mono text-left" dir="ltr">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/50">
                    <th className="p-2">Addr</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Content</th>
                    <th className="p-2">Decimal Val</th>
                  </tr>
                </thead>
                <tbody>
                  {memory.map((word, idx) => {
                    const isPcPointer = registers.pc === idx;
                    const isMarTarget = registers.mar === word.address;
                    return (
                      <tr
                        key={idx}
                        className={`border-b border-slate-900 transition-colors ${
                          isMarTarget
                            ? 'bg-indigo-950/80 text-amber-300 font-bold'
                            : isPcPointer
                            ? 'bg-cyan-950/40 text-cyan-200'
                            : 'text-slate-300 hover:bg-slate-900/30'
                        }`}
                      >
                        <td className="p-2 text-slate-400">{word.address}</td>
                        <td className="p-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] ${
                              word.isInstruction
                                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            }`}
                          >
                            {word.isInstruction ? 'INSTR' : 'DATA'}
                          </span>
                        </td>
                        <td className="p-2 font-bold">
                          {word.isInstruction ? `${word.mnemonic} ${word.operand}` : `VALUE [${word.value}]`}
                        </td>
                        <td className="p-2 text-slate-400">{word.isInstruction ? '---' : word.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Micro-Step Controls */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={stepMicroCycle}
                disabled={isHalted}
                className="min-h-[44px] flex-1 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
                <span>{isArabic ? `تنفيذ طور (${phase})` : `Pulse Micro-Step (${phase})`}</span>
              </button>

              <button
                onClick={handleReset}
                className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer"
                title={isArabic ? 'إعادة ضبط المعالج' : 'Reset CPU'}
                aria-label={isArabic ? 'إعادة ضبط المعالج' : 'Reset CPU'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SVG Vector Schematic: Active Bus Lines & Block Architecture */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-slate-300 font-bold flex items-center justify-between">
              <span>{isArabic ? 'مخطط النواقل الثنائية النشطة' : 'Active Binary Bus Pathways Diagram'}</span>
              <span className="text-amber-400">
                {activeBus === 'ADDRESS_DATA' ? 'Fetching Memory Bus' : activeBus === 'CONTROL' ? 'Decoding Control Line' : 'ALU Execute Bus'}
              </span>
            </div>

            <div className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800">
              <svg viewBox="0 0 340 220" className="w-full h-auto select-none">
                {/* Memory Block (M) */}
                <rect x="220" y="20" width="100" height="80" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
                <text x="270" y="45" fill="#c7d2fe" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  MEMORY (M)
                </text>
                <text x="270" y="65" fill="#818cf8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  Instructions & Data
                </text>
                <text x="270" y="85" fill="#a5b4fc" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  MAR: {registers.mar}
                </text>

                {/* Control Unit Block (CC) */}
                <rect x="20" y="20" width="120" height="80" rx="6" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
                <text x="80" y="45" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  CONTROL (CC)
                </text>
                <text x="80" y="65" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  PC: 0x{registers.pc.toString(16)} | IR: {registers.ir.slice(0, 8)}
                </text>
                <text x="80" y="85" fill="#7dd3fc" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  Phase: {phase}
                </text>

                {/* ALU Block (CA) */}
                <rect x="110" y="140" width="130" height="65" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="175" y="165" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  ARITHMETIC (CA)
                </text>
                <text x="175" y="185" fill="#6ee7b7" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  Accumulator: {registers.acc}
                </text>

                {/* Bus lines */}
                {/* CC to Memory (Address Bus) */}
                <line
                  x1="140"
                  y1="40"
                  x2="220"
                  y2="40"
                  stroke={activeBus === 'ADDRESS_DATA' ? '#38bdf8' : '#334155'}
                  strokeWidth={activeBus === 'ADDRESS_DATA' ? '3' : '1.5'}
                  strokeDasharray={activeBus === 'ADDRESS_DATA' ? '4 2' : 'none'}
                />
                <text x="180" y="34" fill="#38bdf8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                  Address Bus
                </text>

                {/* Memory to CC/ALU (Data Bus) */}
                <line
                  x1="220"
                  y1="80"
                  x2="140"
                  y2="80"
                  stroke={activeBus === 'ADDRESS_DATA' ? '#10b981' : '#334155'}
                  strokeWidth={activeBus === 'ADDRESS_DATA' ? '3' : '1.5'}
                />
                <text x="180" y="74" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">
                  Data Bus
                </text>

                {/* CC to ALU (Control signals) */}
                <line
                  x1="80"
                  y1="100"
                  x2="130"
                  y2="140"
                  stroke={activeBus === 'CONTROL' ? '#f59e0b' : '#334155'}
                  strokeWidth={activeBus === 'CONTROL' ? '3' : '1.5'}
                />

                {/* Memory to ALU (Operand Data) */}
                <line
                  x1="270"
                  y1="100"
                  x2="220"
                  y2="140"
                  stroke={activeBus === 'ALU_STORE' ? '#10b981' : '#334155'}
                  strokeWidth={activeBus === 'ALU_STORE' ? '3' : '1.5'}
                />
              </svg>
            </div>

            {/* Execution Trace Log */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 max-h-[110px] overflow-y-auto text-[11px] font-mono">
              <div className="text-slate-400 font-bold">{isArabic ? 'سجل نبضات النواقل (Bus Log):' : 'Execution Bus Trace Log:'}</div>
              {executionLog.length === 0 ? (
                <div className="text-slate-600">{isArabic ? 'في انتظار أول نبضة توقيت...' : 'Awaiting clock pulse strobe...'}</div>
              ) : (
                executionLog.map((log, lIdx) => (
                  <div key={lIdx} className="text-emerald-300">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
