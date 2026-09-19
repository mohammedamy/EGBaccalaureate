import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Binary,
  Cpu,
  Database,
  Network,
  Brain,
  Sliders,
  RotateCcw,
  Sparkles,
  Play,
  Pause,
  SkipForward,
  Terminal,
  Layers,
  HelpCircle
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  initialMode?: 'logic_circuit' | 'algorithm_visualizer' | 'sql_sandbox' | 'network_subnet' | 'neural_playground';
}

export type CSStudioMode =
  | 'logic_circuit'
  | 'algorithm_visualizer'
  | 'sql_sandbox'
  | 'network_subnet'
  | 'neural_playground';

export const ComputerScienceInformaticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialMode = 'logic_circuit',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<CSStudioMode>(initialMode);

  // =========================================================================
  // Engine 1: Digital Logic Gate Circuit Builder & Truth Table Simulator
  // =========================================================================
  const [inputA, setInputA] = useState<number>(1);
  const [inputB, setInputB] = useState<number>(0);
  const [inputC, setInputC] = useState<number>(1);
  const [selectedGate, setSelectedGate] = useState<'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'HALF_ADDER' | 'FULL_ADDER'>('HALF_ADDER');

  const gateResult = useMemo(() => {
    switch (selectedGate) {
      case 'AND': return { out1: inputA & inputB, name1: 'Y = A · B' };
      case 'OR': return { out1: inputA | inputB, name1: 'Y = A + B' };
      case 'NOT': return { out1: inputA === 1 ? 0 : 1, name1: 'Y = NOT A' };
      case 'NAND': return { out1: (inputA & inputB) === 1 ? 0 : 1, name1: 'Y = NOT(A · B)' };
      case 'NOR': return { out1: (inputA | inputB) === 1 ? 0 : 1, name1: 'Y = NOT(A + B)' };
      case 'XOR': return { out1: inputA ^ inputB, name1: 'Y = A ⊕ B' };
      case 'HALF_ADDER': {
        const sum = inputA ^ inputB;
        const carry = inputA & inputB;
        return { out1: sum, out2: carry, name1: 'Sum = A ⊕ B', name2: 'Carry = A · B' };
      }
      case 'FULL_ADDER': {
        const sum = inputA ^ inputB ^ inputC;
        const carry = (inputA & inputB) | (inputC & (inputA ^ inputB));
        return { out1: sum, out2: carry, name1: 'Sum = A ⊕ B ⊕ Cin', name2: 'Cout = (A·B) + Cin·(A⊕B)' };
      }
      default: return { out1: 0, name1: 'Y' };
    }
  }, [inputA, inputB, inputC, selectedGate]);

  // =========================================================================
  // Engine 2: Sorting & Searching Visualizer
  // =========================================================================
  const [arrayData, setArrayData] = useState<number[]>([45, 12, 89, 34, 78, 23, 67, 56, 90, 15]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [sortAlgo, setSortAlgo] = useState<'bubble' | 'selection' | 'insertion'>('bubble');
  const [comparisons, setComparisons] = useState<number>(0);
  const [swaps, setSwaps] = useState<number>(0);
  const sortingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetArray = () => {
    if (sortingTimerRef.current) clearInterval(sortingTimerRef.current);
    setIsSorting(false);
    setArrayData([45, 12, 89, 34, 78, 23, 67, 56, 90, 15]);
    setActiveIndices([]);
    setSortedIndices([]);
    setComparisons(0);
    setSwaps(0);
  };

  const stepBubbleSort = () => {
    const arr = [...arrayData];
    let comp = comparisons;
    let sw = swaps;
    let swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      comp++;
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sw++;
        swapped = true;
        setActiveIndices([i, i + 1]);
        setArrayData(arr);
        setComparisons(comp);
        setSwaps(sw);
        return;
      }
    }

    if (!swapped) {
      setSortedIndices(arr.map((_, i) => i));
      setActiveIndices([]);
      setIsSorting(false);
      if (sortingTimerRef.current) {
        clearInterval(sortingTimerRef.current);
        sortingTimerRef.current = null;
      }
    }
  };

  const toggleAutoSort = () => {
    if (isSorting) {
      if (sortingTimerRef.current) {
        clearInterval(sortingTimerRef.current);
        sortingTimerRef.current = null;
      }
      setIsSorting(false);
    } else {
      setIsSorting(true);
    }
  };

  useEffect(() => {
    if (isSorting) {
      sortingTimerRef.current = setInterval(() => {
        stepBubbleSort();
      }, 350);
    } else {
      if (sortingTimerRef.current) {
        clearInterval(sortingTimerRef.current);
        sortingTimerRef.current = null;
      }
    }
    return () => {
      if (sortingTimerRef.current) {
        clearInterval(sortingTimerRef.current);
        sortingTimerRef.current = null;
      }
    };
  }, [isSorting, arrayData, comparisons, swaps]);

  // =========================================================================
  // Engine 3: Interactive SQL Sandbox
  // =========================================================================
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT student_name, track, score, status FROM students WHERE score >= 85 ORDER BY score DESC;');
  const [sqlResult, setSqlResult] = useState<{ columns: string[]; rows: any[][] }>({
    columns: ['student_name', 'track', 'score', 'status'],
    rows: [
      ['Nour El-Din Ahmed', 'STEM Track', 98.5, 'Distinction'],
      ['Mariam Khaled', 'Science Track', 95.0, 'Distinction'],
      ['Omar Youssef', 'Mathematics Track', 92.5, 'Distinction'],
      ['Salma Mostafa', 'Computer Science Track', 89.0, 'Very Good'],
    ]
  });

  const runSqlSandbox = (query: string) => {
    setSqlQuery(query);
    const qLower = query.toLowerCase();
    if (qLower.includes('departments')) {
      setSqlResult({
        columns: ['dept_id', 'dept_name', 'faculty', 'head_of_dept'],
        rows: [
          [101, 'Computer Science', 'Faculty of Computers & AI', 'Dr. Mahmoud El-Sayed'],
          [102, 'Information Systems', 'Faculty of Computers & AI', 'Dr. Hoda Mansour'],
          [103, 'Artificial Intelligence', 'Faculty of Computers & AI', 'Dr. Tarek Radwan'],
        ]
      });
    } else if (qLower.includes('courses')) {
      setSqlResult({
        columns: ['course_id', 'title', 'credit_hours', 'prerequisite'],
        rows: [
          ['CS101', 'Digital Logic & Architecture', 3, 'None'],
          ['CS201', 'Data Structures & Algorithms', 4, 'CS101'],
          ['CS301', 'Database Systems & SQL', 3, 'CS201'],
          ['CS401', 'Deep Learning & Neural Networks', 4, 'CS301'],
        ]
      });
    } else {
      setSqlResult({
        columns: ['student_name', 'track', 'score', 'status'],
        rows: [
          ['Nour El-Din Ahmed', 'STEM Track', 98.5, 'Distinction'],
          ['Mariam Khaled', 'Science Track', 95.0, 'Distinction'],
          ['Omar Youssef', 'Mathematics Track', 92.5, 'Distinction'],
          ['Salma Mostafa', 'Computer Science Track', 89.0, 'Very Good'],
          ['Ziad Sherif', 'Humanities Track', 86.5, 'Very Good'],
        ]
      });
    }
  };

  // =========================================================================
  // Engine 4: IPv4 Subnetting & CIDR Network Calculator
  // =========================================================================
  const [ipOctets, setIpOctets] = useState<[number, number, number, number]>([192, 168, 1, 100]);
  const [cidrPrefix, setCidrPrefix] = useState<number>(24);

  const subnetCalc = useMemo(() => {
    const hostBits = 32 - cidrPrefix;
    const totalAddresses = Math.pow(2, hostBits);
    const usableHosts = cidrPrefix >= 31 ? 0 : totalAddresses - 2;

    // Subnet mask calculation
    const maskNum = ((0xFFFFFFFF << hostBits) >>> 0);
    const m1 = (maskNum >>> 24) & 255;
    const m2 = (maskNum >>> 16) & 255;
    const m3 = (maskNum >>> 8) & 255;
    const m4 = maskNum & 255;
    const subnetMaskStr = `${m1}.${m2}.${m3}.${m4}`;

    // Network IP
    const ipNum = ((ipOctets[0] << 24) | (ipOctets[1] << 16) | (ipOctets[2] << 8) | ipOctets[3]) >>> 0;
    const netNum = (ipNum & maskNum) >>> 0;
    const n1 = (netNum >>> 24) & 255;
    const n2 = (netNum >>> 16) & 255;
    const n3 = (netNum >>> 8) & 255;
    const n4 = netNum & 255;
    const networkIpStr = `${n1}.${n2}.${n3}.${n4}`;

    // Broadcast IP
    const broadNum = (netNum | (~maskNum >>> 0)) >>> 0;
    const b1 = (broadNum >>> 24) & 255;
    const b2 = (broadNum >>> 16) & 255;
    const b3 = (broadNum >>> 8) & 255;
    const b4 = broadNum & 255;
    const broadcastIpStr = `${b1}.${b2}.${b3}.${b4}`;

    return {
      subnetMaskStr,
      networkIpStr,
      broadcastIpStr,
      usableHosts,
      totalAddresses,
      firstUsable: `${n1}.${n2}.${n3}.${n4 + 1}`,
      lastUsable: `${b1}.${b2}.${b3}.${b4 - 1}`,
      ipClass: ipOctets[0] < 128 ? 'Class A' : ipOctets[0] < 192 ? 'Class B' : ipOctets[0] < 224 ? 'Class C' : 'Class D/E',
    };
  }, [ipOctets, cidrPrefix]);

  // =========================================================================
  // Engine 5: Neural Network & Decision Boundary Playground
  // =========================================================================
  const [learningRate, setLearningRate] = useState<number>(0.05);
  const [hiddenNeurons, setHiddenNeurons] = useState<number>(4);
  const [activationFunc, setActivationFunc] = useState<'relu' | 'sigmoid' | 'tanh'>('relu');
  const [currentEpoch, setCurrentEpoch] = useState<number>(100);

  const lossValue = useMemo(() => {
    // Simulated loss curve based on epochs, hidden neurons, and learning rate
    const base = 0.85 * Math.exp(-0.02 * currentEpoch * (hiddenNeurons / 3) * (learningRate / 0.05));
    return Math.max(0.012, Number(base.toFixed(4)));
  }, [currentEpoch, hiddenNeurons, learningRate]);

  return (
    <div className={`w-full rounded-2xl border ${
      isLight ? 'bg-white border-slate-200 text-slate-900' : isContrast ? 'bg-black border-yellow-400 text-white' : 'bg-slate-900/95 border-violet-800/40 text-slate-100'
    } shadow-2xl overflow-hidden`}>
      {/* Header Bar */}
      <div className="p-4 border-b border-violet-700/30 bg-gradient-to-r from-violet-950/80 via-indigo-950/60 to-slate-900/90 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
            <Binary className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span>{isArabic ? 'استوديو علوم الحاسب والمعلوماتية والذكاء الاصطناعي' : 'Computer Science & AI Interactive Studio'}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                v2.5
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'مختبر رقمي تفاعلي متكامل لمحاكاة المنطق الرقمي، الخوارزميات، قواعد البيانات SQL، الشبكات، والشبكات العصبية'
                : 'Interactive simulation lab covering Boolean circuits, sorting algorithms, SQL sandbox, CIDR subnetting & neural nets'}
            </p>
          </div>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <button
            onClick={() => setActiveMode('logic_circuit')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'logic_circuit'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{isArabic ? 'المنطق والدوائر' : 'Logic Circuits'}</span>
          </button>
          <button
            onClick={() => setActiveMode('algorithm_visualizer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'algorithm_visualizer'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الخوارزميات' : 'Algorithms'}</span>
          </button>
          <button
            onClick={() => setActiveMode('sql_sandbox')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'sql_sandbox'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{isArabic ? 'قواعد البيانات SQL' : 'SQL Sandbox'}</span>
          </button>
          <button
            onClick={() => setActiveMode('network_subnet')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'network_subnet'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الشبكات الفرعية' : 'Subnetting'}</span>
          </button>
          <button
            onClick={() => setActiveMode('neural_playground')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'neural_playground'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الذكاء الاصطناعي' : 'Neural Playground'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {/* ================================================================= */}
        {/* Tab 1: Digital Logic Circuit Builder */}
        {/* ================================================================= */}
        {activeMode === 'logic_circuit' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-violet-400">
                  <Sliders className="w-4 h-4" />
                  <span>{isArabic ? 'إعدادات المدخلات والبوابات' : 'Circuit Inputs & Gates'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-300 mb-1.5 block">{isArabic ? 'اختر البوابة أو الدائرة المنطقية:' : 'Select Gate / Circuit:'}</label>
                  <select
                    value={selectedGate}
                    onChange={(e) => setSelectedGate(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-slate-200 focus:outline-none focus:border-violet-500"
                  >
                    <option value="AND">AND Gate (و المنطقية)</option>
                    <option value="OR">OR Gate (أو المنطقية)</option>
                    <option value="NOT">NOT Inverter (العاكس)</option>
                    <option value="NAND">NAND Universal (نفي و)</option>
                    <option value="NOR">NOR Universal (نفي أو)</option>
                    <option value="XOR">XOR Exclusive-OR (الاختيار الحصري)</option>
                    <option value="HALF_ADDER">Half Adder (الجامع النصفي)</option>
                    <option value="FULL_ADDER">Full Adder (الجامع الكامل)</option>
                  </select>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                    <span className="text-xs font-mono font-medium">Input A (المدخل الأول):</span>
                    <button
                      onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                      className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                        inputA === 1 ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {inputA}
                    </button>
                  </div>

                  {selectedGate !== 'NOT' && (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                      <span className="text-xs font-mono font-medium">Input B (المدخل الثاني):</span>
                      <button
                        onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                          inputB === 1 ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {inputB}
                      </button>
                    </div>
                  )}

                  {selectedGate === 'FULL_ADDER' && (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                      <span className="text-xs font-mono font-medium">Carry In (حمل الدخل Cin):</span>
                      <button
                        onClick={() => setInputC(inputC === 1 ? 0 : 1)}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                          inputC === 1 ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {inputC}
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-violet-950/40 border border-violet-500/30 text-xs space-y-1">
                  <div className="text-violet-300 font-semibold">{isArabic ? 'المعادلة البولينية الناتجة:' : 'Boolean Expression:'}</div>
                  <div className="font-mono text-cyan-300 text-sm">{gateResult.name1}</div>
                  {gateResult.name2 && <div className="font-mono text-cyan-300 text-sm">{gateResult.name2}</div>}
                </div>
              </div>

              {/* Circuit Visualization */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/60 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span>{isArabic ? 'المخطط الرقمي التفاعلي وسريان الإشارة' : 'Interactive Logic Circuit Diagram'}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">Delay: ~1.8 ns</span>
                  </h3>

                  <div className="h-56 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                    {/* Schematic Representation */}
                    <div className="flex items-center gap-8 relative z-10">
                      {/* Inputs */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400">A</span>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                            inputA ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-slate-800 text-slate-500'
                          }`}>
                            {inputA}
                          </div>
                        </div>
                        {selectedGate !== 'NOT' && (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-400">B</span>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                              inputB ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-slate-800 text-slate-500'
                            }`}>
                              {inputB}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Gate Node */}
                      <div className="w-28 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-0.5 shadow-xl shadow-violet-500/20">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center">
                          <span className="text-sm font-bold text-violet-300 font-mono">{selectedGate}</span>
                          <span className="text-[10px] text-slate-500">TTL 74LS Series</span>
                        </div>
                      </div>

                      {/* Output */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-base shadow-lg ${
                            gateResult.out1 === 1
                              ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 animate-pulse'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {gateResult.out1}
                          </div>
                          <span className="text-xs font-mono text-slate-300 font-semibold">{selectedGate.includes('ADDER') ? 'Sum' : 'Out'}</span>
                        </div>
                        {gateResult.out2 !== undefined && (
                          <div className="flex items-center gap-2">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-base shadow-lg ${
                              gateResult.out2 === 1
                                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/50 animate-pulse'
                                : 'bg-slate-800 text-slate-400'
                            }`}>
                              {gateResult.out2}
                            </div>
                            <span className="text-xs font-mono text-slate-300 font-semibold">Carry</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Educational callout */}
                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>
                    {isArabic
                      ? 'قوانين دي مورجان تتيح تحويل أي دالة منطقية معقدة إلى بوابات NAND الشاملة فقط لتقليل مساحة الرقاقة الإلكترونية.'
                      : "De Morgan's laws allow universal synthesis of any Boolean logic equation strictly using NAND gates to minimize silicon die area."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 2: Sorting & Searching Visualizer */}
        {/* ================================================================= */}
        {activeMode === 'algorithm_visualizer' && (
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={toggleAutoSort}
                  className={`px-4 py-2 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                    isSorting ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                >
                  {isSorting ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isSorting ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل تلقائي' : 'Auto Play')}</span>
                </button>
                <button
                  onClick={stepBubbleSort}
                  disabled={isSorting}
                  className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <SkipForward className="w-4 h-4" />
                  <span>{isArabic ? 'خطوة واحدة (Step)' : 'Single Step'}</span>
                </button>
                <button
                  onClick={resetArray}
                  className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isArabic ? 'إعادة تعيين' : 'Reset Array'}</span>
                </button>
                <select
                  value={sortAlgo}
                  onChange={(e) => setSortAlgo(e.target.value as any)}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-violet-500"
                >
                  <option value="bubble">Bubble Sort</option>
                  <option value="selection">Selection Sort</option>
                  <option value="insertion">Insertion Sort</option>
                </select>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono">
                <div>
                  <span className="text-slate-400">{isArabic ? 'المقارنات:' : 'Comparisons:'} </span>
                  <span className="text-cyan-400 font-bold">{comparisons}</span>
                </div>
                <div>
                  <span className="text-slate-400">{isArabic ? 'التبديلات:' : 'Swaps:'} </span>
                  <span className="text-emerald-400 font-bold">{swaps}</span>
                </div>
                <div>
                  <span className="text-slate-400">{isArabic ? 'التعقيد الزماني:' : 'Time Complexity:'} </span>
                  <span className="text-violet-400 font-bold">O(N²)</span>
                </div>
              </div>
            </div>

            {/* Visual Bars Container */}
            <div className="h-64 rounded-xl bg-slate-950/80 border border-slate-800 p-6 flex items-end justify-center gap-3 relative">
              {arrayData.map((val, idx) => {
                const isActive = activeIndices.includes(idx);
                const isSorted = sortedIndices.includes(idx);

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 max-w-[48px]">
                    <span className="text-[11px] font-mono text-slate-400">{val}</span>
                    <div
                      style={{ height: `${val * 2.2}px` }}
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-t from-amber-500 to-yellow-400 shadow-lg shadow-amber-500/50'
                          : isSorted
                          ? 'bg-gradient-to-t from-emerald-600 to-teal-400'
                          : 'bg-gradient-to-t from-violet-600 to-indigo-400 opacity-90'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-slate-600">[{idx}]</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 3: Interactive SQL Sandbox */}
        {/* ================================================================= */}
        {activeMode === 'sql_sandbox' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => runSqlSandbox('SELECT student_name, track, score, status FROM students WHERE score >= 85 ORDER BY score DESC;')}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30"
              >
                SELECT students WHERE score &gt;= 85
              </button>
              <button
                onClick={() => runSqlSandbox('SELECT dept_name, faculty, head_of_dept FROM departments;')}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30"
              >
                SELECT * FROM departments
              </button>
              <button
                onClick={() => runSqlSandbox('SELECT course_id, title, credit_hours FROM courses ORDER BY credit_hours DESC;')}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30"
              >
                SELECT courses ORDER BY credit_hours
              </button>
            </div>

            {/* SQL Terminal */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden font-mono text-xs">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>SQL Engine v2.4 (Read-Only Interactive Sandbox)</span>
              </div>
              <div className="p-3 bg-slate-950 text-emerald-400">
                &gt; {sqlQuery}
              </div>
            </div>

            {/* Results Table */}
            <div className="rounded-xl border border-slate-700/60 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-800/80 text-slate-300 font-mono">
                  <tr>
                    {sqlResult.columns.map((col, idx) => (
                      <th key={idx} className="p-3 border-b border-slate-700">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                  {sqlResult.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/50">
                      {row.map((val, cIdx) => (
                        <td key={cIdx} className="p-3 font-mono text-slate-300">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 4: IPv4 Subnetting & CIDR Calculator */}
        {/* ================================================================= */}
        {activeMode === 'network_subnet' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CIDR Inputs */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-cyan-400">
                  <Network className="w-4 h-4" />
                  <span>{isArabic ? 'إعدادات عنوان IP والبادئة CIDR' : 'IP & CIDR Prefix Settings'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">IPv4 Address (عنوان الشبكة):</label>
                  <div className="flex gap-2">
                    {ipOctets.map((oct, idx) => (
                      <input
                        key={idx}
                        type="number"
                        min={0}
                        max={255}
                        value={oct}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          const next = [...ipOctets] as [number, number, number, number];
                          next[idx] = Math.min(255, Math.max(0, val));
                          setIpOctets(next);
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-center text-sm font-mono text-slate-200"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>CIDR Prefix:</span>
                    <span className="font-mono text-cyan-400 font-bold">/{cidrPrefix}</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={30}
                    value={cidrPrefix}
                    onChange={(e) => setCidrPrefix(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                </div>
              </div>

              {/* Subnet Results */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-950/60 space-y-3 text-xs font-mono">
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'قناع الشبكة (Subnet Mask):' : 'Subnet Mask:'}</span>
                  <span className="text-emerald-400 font-bold">{subnetCalc.subnetMaskStr}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'عنوان الشبكة (Network ID):' : 'Network ID:'}</span>
                  <span className="text-cyan-400 font-bold">{subnetCalc.networkIpStr}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'عنوان البث (Broadcast ID):' : 'Broadcast ID:'}</span>
                  <span className="text-amber-400 font-bold">{subnetCalc.broadcastIpStr}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'الأجهزة الصالحة للاستخدام:' : 'Usable Hosts:'}</span>
                  <span className="text-violet-400 font-bold">{subnetCalc.usableHosts} (2^{32 - cidrPrefix} - 2)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'نطاق المضيفين:' : 'Host Range:'}</span>
                  <span className="text-slate-300">{subnetCalc.firstUsable} → {subnetCalc.lastUsable}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 5: Neural Network Playground */}
        {/* ================================================================= */}
        {activeMode === 'neural_playground' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hyperparameters Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-pink-400">
                  <Brain className="w-4 h-4" />
                  <span>{isArabic ? 'المعاملات الفائقة للشبكة' : 'Hyperparameters'}</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'عدد العصبونات الخفية:' : 'Hidden Layer Neurons:'}</span>
                    <span className="font-mono text-pink-400 font-bold">{hiddenNeurons}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={hiddenNeurons}
                    onChange={(e) => setHiddenNeurons(Number(e.target.value))}
                    className="w-full accent-pink-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'عدد دورات التدريب (Epochs):' : 'Epochs:'}</span>
                    <span className="font-mono text-pink-400 font-bold">{currentEpoch}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={currentEpoch}
                    onChange={(e) => setCurrentEpoch(Number(e.target.value))}
                    className="w-full accent-pink-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'معدل التعلم (Learning Rate η):' : 'Learning Rate (η):'}</span>
                    <span className="font-mono text-pink-400 font-bold">{learningRate}</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={0.2}
                    step={0.01}
                    value={learningRate}
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="w-full accent-pink-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">{isArabic ? 'دالة التنشيط:' : 'Activation Function:'}</label>
                  <select
                    value={activationFunc}
                    onChange={(e) => setActivationFunc(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-slate-200"
                  >
                    <option value="relu">ReLU (f(z) = max(0, z))</option>
                    <option value="sigmoid">Sigmoid (σ(z) = 1/(1+e^-z))</option>
                    <option value="tanh">Tanh (tanh(z))</option>
                  </select>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">{isArabic ? 'قيمة دالة الخسارة (Loss):' : 'MSE Loss:'}</span>
                  <span className="text-emerald-400 font-bold text-sm">{lossValue}</span>
                </div>
              </div>

              {/* Neural Architecture Diagram */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/60 flex flex-col justify-between">
                <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <span>{isArabic ? 'معمارية الشبكة العصبية متعددة الطبقات (MLP)' : 'Multi-Layer Perceptron Forward Graph'}</span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400">Converged</span>
                </h3>

                <div className="h-56 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-around p-4 relative">
                  {/* Layer 1: Inputs (2 neurons) */}
                  <div className="flex flex-col gap-8 items-center">
                    <span className="text-[10px] text-slate-500 font-mono">Input (x₁, x₂)</span>
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">x₁</div>
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">x₂</div>
                  </div>

                  {/* Layer 2: Hidden (dynamic count) */}
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-[10px] text-slate-500 font-mono">Hidden ({hiddenNeurons})</span>
                    {Array.from({ length: Math.min(5, hiddenNeurons) }).map((_, idx) => (
                      <div key={idx} className="w-8 h-8 rounded-full bg-violet-500/20 border-2 border-violet-400 flex items-center justify-center font-mono text-xs font-bold text-violet-300">
                        h{idx + 1}
                      </div>
                    ))}
                  </div>

                  {/* Layer 3: Output (1 neuron) */}
                  <div className="flex flex-col gap-8 items-center">
                    <span className="text-[10px] text-slate-500 font-mono">Output (ŷ)</span>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center font-mono text-xs font-bold text-emerald-300 shadow-lg shadow-emerald-500/20">
                      ŷ
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  {isArabic
                    ? 'تقوم الشبكة العصبية بتعديل الأوزان (Weights) والانحيازات (Biases) عبر التراجع الخلفي (Backpropagation) لتقليل دالة الخسارة.'
                    : 'The neural network iteratively adjusts weights and biases via backpropagation with gradient descent to minimize Mean Squared Error.'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
