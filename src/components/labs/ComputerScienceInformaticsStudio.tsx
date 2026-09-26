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
  Play,
  Pause,
  SkipForward,
  Terminal,
  Layers,
  HelpCircle,
  Maximize2,
  Minimize2,
  Radio,
  FileCode,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { AdaLovelaceAnalyticalEngineStudio } from './cs/AdaLovelaceAnalyticalEngineStudio';
import { AlanTuringUniversalMachineStudio } from './cs/AlanTuringUniversalMachineStudio';
import { ClaudeShannonInformationTheoryStudio } from './cs/ClaudeShannonInformationTheoryStudio';
import { VonNeumannArchitectureStudio } from './cs/VonNeumannArchitectureStudio';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: CSStudioMode;
}

export type CSStudioMode =
  | 'logic_circuit'
  | 'algorithm_visualizer'
  | 'sql_sandbox'
  | 'network_subnet'
  | 'neural_playground'
  | 'lovelace_analytical_engine'
  | 'turing_universal_machine'
  | 'shannon_information_theory'
  | 'von_neumann_architecture';

// =========================================================================
// Realistic Scientific Vector Schematic 1: ANSI/IEEE Std 91-1984 Logic Gates
// =========================================================================
interface DigitalLogicSchematicProps {
  selectedGate: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'HALF_ADDER' | 'FULL_ADDER';
  inputA: number;
  inputB: number;
  inputC: number;
  out1: number;
  out2?: number;
  isArabic: boolean;
  isLight: boolean;
}

const DigitalLogicIeeeVectorSchematic: React.FC<DigitalLogicSchematicProps> = ({
  selectedGate,
  inputA,
  inputB,
  inputC,
  out1,
  out2,
  isArabic,
  isLight,
}) => {
  const isHighA = inputA === 1;
  const isHighB = inputB === 1;
  const isHighC = inputC === 1;
  const isHighOut1 = out1 === 1;
  const isHighOut2 = out2 === 1;

  // Intermediate signals for Full Adder
  const faAxorB = inputA ^ inputB;
  const faAandB = inputA & inputB;
  const faCinAndAxorB = inputC & faAxorB;

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 relative overflow-hidden shadow-2xl">
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      {/* Top Telemetry Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs font-mono border-b border-slate-800 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-bold">
            {isArabic ? 'المعيار القياسي IEEE Std 91-1984 / IEC 60617-12' : 'IEEE Std 91-1984 / IEC 60617-12'}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-300">Vcc = +5.00V ({isLight ? 'TTL' : 'TTL Logic Level'})</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Propagation Delay: <strong className="text-violet-300">~1.8 ns</strong></span>
          <span className="px-2 py-0.5 rounded bg-violet-950/80 border border-violet-700/50 text-violet-300">
            {selectedGate.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Main Vector SVG */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 300"
          className="w-full h-auto min-w-[650px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="gateBodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="pcbBusGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* ============================================================== */}
          {/* SINGLE GATE TOPOLOGY (AND, OR, NOT, NAND, NOR, XOR)           */}
          {/* ============================================================== */}
          {!selectedGate.includes('ADDER') && (
            <g>
              {/* Input Terminal A */}
              <g transform="translate(60, 60)">
                <rect x="0" y="0" width="70" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="15" cy="14" r="5" fill={isHighA ? '#10b981' : '#475569'} filter={isHighA ? 'url(#glow-emerald)' : undefined} />
                <text x="32" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">IN A</text>
                <text x="80" y="9" fill={isHighA ? '#10b981' : '#64748b'} fontSize="9" fontFamily="monospace">
                  {isHighA ? '+5.00V [H]' : '0.00V [L]'}
                </text>
              </g>

              {/* Input Trace A */}
              <path
                d="M 130 74 L 330 74"
                fill="none"
                stroke={isHighA ? '#10b981' : '#334155'}
                strokeWidth={isHighA ? 3.5 : 2}
                filter={isHighA ? 'url(#glow-emerald)' : undefined}
              />
              <circle cx="130" cy="74" r="3.5" fill="#38bdf8" />

              {/* Input Terminal B (Not shown for NOT gate) */}
              {selectedGate !== 'NOT' && (
                <g>
                  <g transform="translate(60, 126)">
                    <rect x="0" y="0" width="70" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="15" cy="14" r="5" fill={isHighB ? '#10b981' : '#475569'} filter={isHighB ? 'url(#glow-emerald)' : undefined} />
                    <text x="32" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">IN B</text>
                    <text x="80" y="9" fill={isHighB ? '#10b981' : '#64748b'} fontSize="9" fontFamily="monospace">
                      {isHighB ? '+5.00V [H]' : '0.00V [L]'}
                    </text>
                  </g>

                  {/* Input Trace B */}
                  <path
                    d="M 130 140 L 330 140"
                    fill="none"
                    stroke={isHighB ? '#10b981' : '#334155'}
                    strokeWidth={isHighB ? 3.5 : 2}
                    filter={isHighB ? 'url(#glow-emerald)' : undefined}
                  />
                  <circle cx="130" cy="140" r="3.5" fill="#38bdf8" />
                </g>
              )}

              {/* GATE BODY RENDERING */}
              <g transform="translate(330, 60)">
                {/* AND / NAND Gate */}
                {(selectedGate === 'AND' || selectedGate === 'NAND') && (
                  <g>
                    <path
                      d="M 0,0 L 45,0 C 70,0 85,20 85,47 C 85,74 70,94 45,94 L 0,94 Z"
                      fill="url(#gateBodyGrad)"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                    />
                    <text x="30" y="52" fill="#c7d2fe" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
                      {selectedGate === 'NAND' ? 'NAND' : 'AND'}
                    </text>
                    {selectedGate === 'NAND' && (
                      <circle cx="92" cy="47" r="6" fill="#0f172a" stroke="#818cf8" strokeWidth="2.5" />
                    )}
                  </g>
                )}

                {/* OR / NOR Gate */}
                {(selectedGate === 'OR' || selectedGate === 'NOR') && (
                  <g>
                    <path
                      d="M 0,0 Q 25,47 0,94 Q 55,94 85,47 Q 55,0 0,0 Z"
                      fill="url(#gateBodyGrad)"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                    />
                    <text x="32" y="52" fill="#c7d2fe" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
                      {selectedGate === 'NOR' ? 'NOR' : 'OR'}
                    </text>
                    {selectedGate === 'NOR' && (
                      <circle cx="92" cy="47" r="6" fill="#0f172a" stroke="#818cf8" strokeWidth="2.5" />
                    )}
                  </g>
                )}

                {/* XOR Gate */}
                {selectedGate === 'XOR' && (
                  <g>
                    <path d="M -12,0 Q 13,47 -12,94" fill="none" stroke="#818cf8" strokeWidth="2.5" />
                    <path
                      d="M 0,0 Q 25,47 0,94 Q 55,94 85,47 Q 55,0 0,0 Z"
                      fill="url(#gateBodyGrad)"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                    />
                    <text x="32" y="52" fill="#c7d2fe" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
                      XOR
                    </text>
                  </g>
                )}

                {/* NOT Gate (Inverter) */}
                {selectedGate === 'NOT' && (
                  <g transform="translate(0, 14)">
                    <polygon points="0,0 65,33 0,66" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2.5" />
                    <circle cx="72" cy="33" r="6" fill="#0f172a" stroke="#818cf8" strokeWidth="2.5" />
                    <text x="18" y="38" fill="#c7d2fe" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.6">
                      NOT
                    </text>
                  </g>
                )}
              </g>

              {/* Output Trace to Output Terminal */}
              <path
                d={`M ${
                  selectedGate === 'NOT'
                    ? 408
                    : selectedGate === 'NAND' || selectedGate === 'NOR'
                    ? 428
                    : 415
                } 107 L 590 107`}
                fill="none"
                stroke={isHighOut1 ? '#06b6d4' : '#334155'}
                strokeWidth={isHighOut1 ? 3.5 : 2}
                filter={isHighOut1 ? 'url(#glow-cyan)' : undefined}
              />

              {/* Output Terminal & LED Indicator */}
              <g transform="translate(590, 93)">
                <rect x="0" y="0" width="110" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle
                  cx="16"
                  cy="14"
                  r="6"
                  fill={isHighOut1 ? '#06b6d4' : '#334155'}
                  filter={isHighOut1 ? 'url(#glow-cyan)' : undefined}
                />
                <text x="32" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Y = {out1}
                </text>
                <text x="65" y="18" fill={isHighOut1 ? '#06b6d4' : '#64748b'} fontSize="9" fontFamily="monospace">
                  {isHighOut1 ? 'ACTIVE' : 'LOW'}
                </text>
                <text x="10" y="-8" fill={isHighOut1 ? '#06b6d4' : '#64748b'} fontSize="9" fontFamily="monospace">
                  TP_OUT: {isHighOut1 ? '+5.00V' : '0.00V'}
                </text>
              </g>
            </g>
          )}

          {/* ============================================================== */}
          {/* HALF ADDER TOPOLOGY (Dual Gate: XOR for Sum, AND for Carry)     */}
          {/* ============================================================== */}
          {selectedGate === 'HALF_ADDER' && (
            <g>
              {/* Inputs */}
              <g transform="translate(40, 50)">
                <rect x="0" y="0" width="65" height="26" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="14" cy="13" r="4.5" fill={isHighA ? '#10b981' : '#475569'} filter={isHighA ? 'url(#glow-emerald)' : undefined} />
                <text x="28" y="17" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="bold">IN A</text>
              </g>
              <g transform="translate(40, 130)">
                <rect x="0" y="0" width="65" height="26" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="14" cy="13" r="4.5" fill={isHighB ? '#10b981' : '#475569'} filter={isHighB ? 'url(#glow-emerald)' : undefined} />
                <text x="28" y="17" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="bold">IN B</text>
              </g>

              {/* Wire A to XOR & Solder Branch to AND */}
              <path
                d="M 105 63 L 180 63 L 310 63"
                fill="none"
                stroke={isHighA ? '#10b981' : '#334155'}
                strokeWidth={isHighA ? 3 : 1.5}
                filter={isHighA ? 'url(#glow-emerald)' : undefined}
              />
              <path
                d="M 180 63 L 180 140 L 310 140"
                fill="none"
                stroke={isHighA ? '#10b981' : '#334155'}
                strokeWidth={isHighA ? 3 : 1.5}
                filter={isHighA ? 'url(#glow-emerald)' : undefined}
              />
              <circle cx="180" cy="63" r="4" fill="#38bdf8" />

              {/* Wire B to XOR & Solder Branch to AND */}
              <path
                d="M 105 143 L 210 143 L 210 85 L 310 85"
                fill="none"
                stroke={isHighB ? '#10b981' : '#334155'}
                strokeWidth={isHighB ? 3 : 1.5}
                filter={isHighB ? 'url(#glow-emerald)' : undefined}
              />
              <path
                d="M 210 143 L 210 162 L 310 162"
                fill="none"
                stroke={isHighB ? '#10b981' : '#334155'}
                strokeWidth={isHighB ? 3 : 1.5}
                filter={isHighB ? 'url(#glow-emerald)' : undefined}
              />
              <circle cx="210" cy="143" r="4" fill="#38bdf8" />

              {/* XOR Gate (Sum = A ⊕ B) */}
              <g transform="translate(310, 48)">
                <path d="M -10,0 Q 10,26 -10,52" fill="none" stroke="#818cf8" strokeWidth="2" />
                <path d="M 0,0 Q 20,26 0,52 Q 45,52 65,26 Q 45,0 0,0 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="20" y="30" fill="#c7d2fe" fontSize="9" fontFamily="monospace" fontWeight="bold">XOR (Σ)</text>
              </g>

              {/* AND Gate (Carry = A · B) */}
              <g transform="translate(310, 125)">
                <path d="M 0,0 L 35,0 C 52,0 65,12 65,26 C 65,40 52,52 35,52 L 0,52 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="20" y="30" fill="#c7d2fe" fontSize="9" fontFamily="monospace" fontWeight="bold">AND (C)</text>
              </g>

              {/* Sum Output Trace & Terminal */}
              <path
                d="M 375 74 L 580 74"
                fill="none"
                stroke={isHighOut1 ? '#10b981' : '#334155'}
                strokeWidth={isHighOut1 ? 3 : 1.5}
                filter={isHighOut1 ? 'url(#glow-emerald)' : undefined}
              />
              <g transform="translate(580, 60)">
                <rect x="0" y="0" width="130" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="15" cy="14" r="5" fill={isHighOut1 ? '#10b981' : '#334155'} filter={isHighOut1 ? 'url(#glow-emerald)' : undefined} />
                <text x="30" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  SUM = {out1}
                </text>
                <text x="85" y="18" fill={isHighOut1 ? '#10b981' : '#64748b'} fontSize="9" fontFamily="monospace">
                  (A ⊕ B)
                </text>
              </g>

              {/* Carry Output Trace & Terminal */}
              <path
                d="M 375 151 L 580 151"
                fill="none"
                stroke={isHighOut2 ? '#06b6d4' : '#334155'}
                strokeWidth={isHighOut2 ? 3 : 1.5}
                filter={isHighOut2 ? 'url(#glow-cyan)' : undefined}
              />
              <g transform="translate(580, 137)">
                <rect x="0" y="0" width="130" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="15" cy="14" r="5" fill={isHighOut2 ? '#06b6d4' : '#334155'} filter={isHighOut2 ? 'url(#glow-cyan)' : undefined} />
                <text x="30" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  CARRY = {out2 ?? 0}
                </text>
                <text x="95" y="18" fill={isHighOut2 ? '#06b6d4' : '#64748b'} fontSize="9" fontFamily="monospace">
                  (A · B)
                </text>
              </g>
            </g>
          )}

          {/* ============================================================== */}
          {/* FULL ADDER TOPOLOGY (5 Gates: 2 XOR, 2 AND, 1 OR)             */}
          {/* ============================================================== */}
          {selectedGate === 'FULL_ADDER' && (
            <g>
              {/* Inputs */}
              <g transform="translate(30, 35)">
                <rect x="0" y="0" width="55" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="10" cy="11" r="4" fill={isHighA ? '#10b981' : '#475569'} />
                <text x="22" y="15" fill="#e2e8f0" fontSize="9" fontFamily="monospace" fontWeight="bold">A={inputA}</text>
              </g>
              <g transform="translate(30, 75)">
                <rect x="0" y="0" width="55" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="10" cy="11" r="4" fill={isHighB ? '#10b981' : '#475569'} />
                <text x="22" y="15" fill="#e2e8f0" fontSize="9" fontFamily="monospace" fontWeight="bold">B={inputB}</text>
              </g>
              <g transform="translate(30, 125)">
                <rect x="0" y="0" width="55" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="10" cy="11" r="4" fill={isHighC ? '#06b6d4' : '#475569'} />
                <text x="20" y="15" fill="#e2e8f0" fontSize="9" fontFamily="monospace" fontWeight="bold">Cin={inputC}</text>
              </g>

              {/* Wire Routing from Inputs to Stage 1 */}
              <path d="M 85 46 L 140 46 L 210 46" fill="none" stroke={isHighA ? '#10b981' : '#334155'} strokeWidth={isHighA ? 2.5 : 1.5} />
              <path d="M 140 46 L 140 145 L 210 145" fill="none" stroke={isHighA ? '#10b981' : '#334155'} strokeWidth={isHighA ? 2.5 : 1.5} />
              <circle cx="140" cy="46" r="3.5" fill="#38bdf8" />

              <path d="M 85 86 L 160 86 L 160 62 L 210 62" fill="none" stroke={isHighB ? '#10b981' : '#334155'} strokeWidth={isHighB ? 2.5 : 1.5} />
              <path d="M 160 86 L 160 160 L 210 160" fill="none" stroke={isHighB ? '#10b981' : '#334155'} strokeWidth={isHighB ? 2.5 : 1.5} />
              <circle cx="160" cy="86" r="3.5" fill="#38bdf8" />

              {/* Stage 1: XOR1 (A ⊕ B) */}
              <g transform="translate(210, 36)">
                <path d="M -8,0 Q 8,18 -8,36" fill="none" stroke="#818cf8" strokeWidth="2" />
                <path d="M 0,0 Q 15,18 0,36 Q 35,36 50,18 Q 35,0 0,0 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="14" y="22" fill="#c7d2fe" fontSize="8" fontFamily="monospace">XOR1</text>
              </g>

              {/* Stage 1: AND1 (A · B) */}
              <g transform="translate(210, 135)">
                <path d="M 0,0 L 25,0 C 40,0 50,9 50,18 C 50,27 40,36 25,36 L 0,36 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="14" y="22" fill="#c7d2fe" fontSize="8" fontFamily="monospace">AND1</text>
              </g>

              {/* Intermediate connections to Stage 2 */}
              {/* XOR1 Out -> XOR2 and AND2 */}
              <path d="M 260 54 L 320 54 L 380 54" fill="none" stroke={faAxorB ? '#10b981' : '#334155'} strokeWidth={faAxorB ? 2.5 : 1.5} />
              <path d="M 320 54 L 320 120 L 380 120" fill="none" stroke={faAxorB ? '#10b981' : '#334155'} strokeWidth={faAxorB ? 2.5 : 1.5} />
              <circle cx="320" cy="54" r="3.5" fill="#38bdf8" />

              {/* Cin -> XOR2 and AND2 */}
              <path d="M 85 136 L 340 136 L 340 70 L 380 70" fill="none" stroke={isHighC ? '#06b6d4' : '#334155'} strokeWidth={isHighC ? 2.5 : 1.5} />
              <path d="M 340 136 L 380 136" fill="none" stroke={isHighC ? '#06b6d4' : '#334155'} strokeWidth={isHighC ? 2.5 : 1.5} />
              <circle cx="340" cy="136" r="3.5" fill="#38bdf8" />

              {/* Stage 2: XOR2 (Sum = AxorB ⊕ Cin) */}
              <g transform="translate(380, 44)">
                <path d="M -8,0 Q 8,18 -8,36" fill="none" stroke="#818cf8" strokeWidth="2" />
                <path d="M 0,0 Q 15,18 0,36 Q 35,36 50,18 Q 35,0 0,0 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="14" y="22" fill="#c7d2fe" fontSize="8" fontFamily="monospace">XOR2</text>
              </g>

              {/* Stage 2: AND2 (Cin · (AxorB)) */}
              <g transform="translate(380, 110)">
                <path d="M 0,0 L 25,0 C 40,0 50,9 50,18 C 50,27 40,36 25,36 L 0,36 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="14" y="22" fill="#c7d2fe" fontSize="8" fontFamily="monospace">AND2</text>
              </g>

              {/* Stage 3: OR Gate for Cout = (A·B) + (Cin·(A⊕B)) */}
              <path d="M 260 153 L 480 153 L 480 165 L 510 165" fill="none" stroke={faAandB ? '#10b981' : '#334155'} strokeWidth={faAandB ? 2.5 : 1.5} />
              <path d="M 430 128 L 480 128 L 480 148 L 510 148" fill="none" stroke={faCinAndAxorB ? '#06b6d4' : '#334155'} strokeWidth={faCinAndAxorB ? 2.5 : 1.5} />

              <g transform="translate(510, 138)">
                <path d="M 0,0 Q 15,18 0,36 Q 35,36 50,18 Q 35,0 0,0 Z" fill="url(#gateBodyGrad)" stroke="#818cf8" strokeWidth="2" />
                <text x="16" y="22" fill="#c7d2fe" fontSize="8" fontFamily="monospace">OR</text>
              </g>

              {/* Sum Output Trace & Terminal */}
              <path d="M 430 62 L 600 62" fill="none" stroke={isHighOut1 ? '#10b981' : '#334155'} strokeWidth={isHighOut1 ? 3 : 1.5} filter={isHighOut1 ? 'url(#glow-emerald)' : undefined} />
              <g transform="translate(600, 48)">
                <rect x="0" y="0" width="125" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="5" fill={isHighOut1 ? '#10b981' : '#334155'} filter={isHighOut1 ? 'url(#glow-emerald)' : undefined} />
                <text x="28" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  SUM = {out1}
                </text>
                <text x="82" y="18" fill={isHighOut1 ? '#10b981' : '#64748b'} fontSize="9" fontFamily="monospace">
                  (Σ 3-Bit)
                </text>
              </g>

              {/* Cout Output Trace & Terminal */}
              <path d="M 560 156 L 600 156" fill="none" stroke={isHighOut2 ? '#06b6d4' : '#334155'} strokeWidth={isHighOut2 ? 3 : 1.5} filter={isHighOut2 ? 'url(#glow-cyan)' : undefined} />
              <g transform="translate(600, 142)">
                <rect x="0" y="0" width="125" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="5" fill={isHighOut2 ? '#06b6d4' : '#334155'} filter={isHighOut2 ? 'url(#glow-cyan)' : undefined} />
                <text x="28" y="18" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  COUT = {out2 ?? 0}
                </text>
                <text x="86" y="18" fill={isHighOut2 ? '#06b6d4' : '#64748b'} fontSize="9" fontFamily="monospace">
                  (Carry)
                </text>
              </g>
            </g>
          )}

          {/* ============================================================== */}
          {/* REAL-TIME LOGIC ANALYZER / OSCILLOSCOPE TIMING TRACES          */}
          {/* ============================================================== */}
          <g transform="translate(40, 210)">
            {/* Logic Analyzer Banner */}
            <rect x="0" y="0" width="680" height="75" rx="8" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
            <text x="14" y="16" fill="#64748b" fontSize="9" fontFamily="monospace" fontWeight="bold">
              LOGIC ANALYZER / 4-CHANNEL OSCILLOSCOPE TIMING DIAGRAM (t = 0ns → 25ns)
            </text>

            {/* Time ticks */}
            {[0, 1, 2, 3, 4, 5].map((tick) => (
              <g key={tick} transform={`translate(${140 + tick * 95}, 0)`}>
                <line x1="0" y1="20" x2="0" y2="70" stroke="#1e293b" strokeDasharray="2,3" />
                <text x="-10" y="70" fill="#475569" fontSize="8" fontFamily="monospace">{tick * 5}ns</text>
              </g>
            ))}

            {/* Channel 1: A */}
            <text x="14" y="32" fill="#94a3b8" fontSize="9" fontFamily="monospace">CH1: A</text>
            <path
              d={isHighA
                ? "M 80 26 L 140 26 L 140 20 L 330 20 L 330 26 L 425 26 L 425 20 L 615 20"
                : "M 80 26 L 330 26 L 330 20 L 425 20 L 425 26 L 615 26"}
              fill="none"
              stroke="#10b981"
              strokeWidth="1.8"
            />

            {/* Channel 2: B */}
            <text x="14" y="44" fill="#94a3b8" fontSize="9" fontFamily="monospace">CH2: B</text>
            <path
              d={isHighB
                ? "M 80 40 L 235 40 L 235 34 L 520 34 L 520 40 L 615 40"
                : "M 80 40 L 615 40"}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.8"
            />

            {/* Channel 3: Out1 / Sum */}
            <text x="14" y="56" fill="#94a3b8" fontSize="9" fontFamily="monospace">CH3: {selectedGate.includes('ADDER') ? 'SUM' : 'Y'}</text>
            <path
              d={isHighOut1
                ? "M 80 50 L 145 50 L 145 44 L 430 44 L 430 50 L 615 50"
                : "M 80 50 L 615 50"}
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
            />

            {/* Channel 4: Carry (if Adder) */}
            {selectedGate.includes('ADDER') && (
              <>
                <text x="14" y="68" fill="#94a3b8" fontSize="9" fontFamily="monospace">CH4: COUT</text>
                <path
                  d={isHighOut2
                    ? "M 80 64 L 240 64 L 240 58 L 525 58 L 525 64 L 615 64"
                    : "M 80 64 L 615 64"}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
              </>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};

// =========================================================================
// Realistic Scientific Vector Schematic 2: Sorting Algorithm Memory Architecture
// =========================================================================
interface SortingTelemetryProps {
  arrayData: number[];
  activeIndices: number[];
  sortedIndices: number[];
  sortAlgo: 'bubble' | 'selection' | 'insertion';
  comparisons: number;
  swaps: number;
  isSorting: boolean;
  isArabic: boolean;
}

const SortingAlgorithmTelemetryCanvas: React.FC<SortingTelemetryProps> = ({
  arrayData,
  activeIndices,
  sortedIndices,
  sortAlgo,
  comparisons,
  swaps,
  isSorting,
  isArabic,
}) => {
  const algoTelemetry = useMemo(() => {
    switch (sortAlgo) {
      case 'bubble':
        return {
          best: 'Ω(n)',
          avg: 'Θ(n²)',
          worst: 'O(n²)',
          space: 'O(1) Auxiliary',
          stable: true,
          inPlace: true,
          descEn: 'Adjacent pairwise bubble comparison with early exit condition.',
          descAr: 'مقارنة العناصر المتجاورة وتبديلها مع شرط توقف مبكر عند استقرار المصفوفة.',
        };
      case 'selection':
        return {
          best: 'Ω(n²)',
          avg: 'Θ(n²)',
          worst: 'O(n²)',
          space: 'O(1) Auxiliary',
          stable: false,
          inPlace: true,
          descEn: 'Iteratively searches for global minimum and swaps into prefix position.',
          descAr: 'البحث المستمر عن أصغر عنصر ووضعه في مكانه الصحيح في بداية المصفوفة.',
        };
      case 'insertion':
        return {
          best: 'Ω(n)',
          avg: 'Θ(n²)',
          worst: 'O(n²)',
          space: 'O(1) Auxiliary',
          stable: true,
          inPlace: true,
          descEn: 'Shifts larger elements rightward to insert the current key into sorted partition.',
          descAr: 'إزاحة العناصر الأكبر يميناً لإدراج العنصر الحالي في موضعه المنظم بدقة.',
        };
    }
  }, [sortAlgo]);

  return (
    <div className="space-y-4">
      {/* Visual Memory Register Array */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden shadow-2xl">
        {/* Background microchip grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

        {/* Big-O Complexity Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-mono font-bold text-slate-200 uppercase">
              {sortAlgo} Sort — CPU Memory Register Array
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-700/50 text-cyan-300">
              Cmp: {comparisons}
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-700/50 text-purple-300">
              Swaps: {swaps}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
              Best: {algoTelemetry.best}
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-700/50 text-amber-400">
              Avg: {algoTelemetry.avg}
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-700/50 text-rose-400">
              Worst: {algoTelemetry.worst}
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
              Space: {algoTelemetry.space}
            </span>
          </div>
        </div>

        {/* Memory Elements Container */}
        <div className="min-h-[220px] flex items-end justify-center gap-2 sm:gap-4 px-2 pb-2 relative z-10">
          {arrayData.map((val, idx) => {
            const isActive = activeIndices.includes(idx);
            const isSorted = sortedIndices.includes(idx);
            const hexAddress = `0x7FFE${(idx * 4).toString(16).padStart(2, '0').toUpperCase()}`;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 max-w-[56px] min-w-[28px] group">
                {/* Comparison / Swap Beacon */}
                {isActive && (
                  <div className="flex flex-col items-center animate-bounce -mb-1">
                    <span className="text-[10px] font-mono font-bold text-amber-400">
                      {activeIndices[0] === idx ? 'PTR_i' : 'PTR_j'}
                    </span>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-amber-400" />
                  </div>
                )}

                {/* Value Pill */}
                <span className={`text-[11px] font-mono font-black ${
                  isActive ? 'text-amber-300' : isSorted ? 'text-emerald-300' : 'text-slate-300'
                }`}>
                  {val}
                </span>

                {/* Vertical Bar */}
                <div
                  style={{ height: `${Math.max(24, val * 1.8)}px` }}
                  className={`w-full rounded-t-lg transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-300 shadow-lg shadow-amber-500/50 ring-2 ring-amber-400'
                      : isSorted
                      ? 'bg-gradient-to-t from-emerald-700 via-emerald-600 to-teal-400 shadow-lg shadow-emerald-500/30'
                      : 'bg-gradient-to-t from-violet-900 via-indigo-700 to-purple-500 opacity-90'
                  }`}
                >
                  {/* Subtle inner metallic highlight */}
                  <div className="absolute top-1 inset-x-1 h-1 rounded-full bg-white/30" />
                </div>

                {/* Dual In-line Package (DIP) IC Register Chip */}
                <div className={`w-full py-1 px-0.5 rounded border text-center font-mono ${
                  isActive
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : isSorted
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <div className="text-[9px] truncate font-bold">[{idx}]</div>
                  <div className="text-[8px] text-slate-500 truncate hidden sm:block">{hexAddress}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Algorithm Summary Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 relative z-10">
          <span>{isArabic ? algoTelemetry.descAr : algoTelemetry.descEn}</span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isSorting ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`} />
            <span className="font-mono text-slate-300">{isSorting ? 'Sorting In Progress...' : 'Ready / Idle'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// Realistic Scientific Vector Schematic 3: 32-Bit IPv4 Architectural Bit Matrix
// =========================================================================
interface SubnetMatrixProps {
  ipOctets: [number, number, number, number];
  cidrPrefix: number;
  subnetCalc: {
    subnetMaskStr: string;
    networkIpStr: string;
    broadcastIpStr: string;
    usableHosts: number;
    totalAddresses: number;
    firstUsable: string;
    lastUsable: string;
    ipClass: string;
  };
  isArabic: boolean;
}

const Ipv4SubnetBitwiseMatrixSchematic: React.FC<SubnetMatrixProps> = ({
  ipOctets,
  cidrPrefix,
  subnetCalc,
  isArabic,
}) => {
  // Convert 4 octets to 32 bits array
  const bits32 = useMemo(() => {
    const bits: Array<{ bitIdx: number; val: number; isNetwork: boolean; octetIdx: number }> = [];
    ipOctets.forEach((oct, octIdx) => {
      for (let bitPos = 7; bitPos >= 0; bitPos--) {
        const bitVal = (oct >> bitPos) & 1;
        const globalIdx = octIdx * 8 + (7 - bitPos);
        bits.push({
          bitIdx: 31 - globalIdx,
          val: bitVal,
          isNetwork: globalIdx < cidrPrefix,
          octetIdx: octIdx + 1,
        });
      }
    });
    return bits;
  }, [ipOctets, cidrPrefix]);

  // RFC 1918 Scope Detection
  const rfcScope = useMemo(() => {
    const o1 = ipOctets[0];
    const o2 = ipOctets[1];
    if (o1 === 10) return { scope: 'RFC 1918 Private (Class A 10.0.0.0/8)', isPrivate: true };
    if (o1 === 172 && o2 >= 16 && o2 <= 31) return { scope: 'RFC 1918 Private (Class B 172.16.0.0/12)', isPrivate: true };
    if (o1 === 192 && o2 === 168) return { scope: 'RFC 1918 Private (Class C 192.168.0.0/16)', isPrivate: true };
    if (o1 === 127) return { scope: 'RFC 1122 Loopback (127.0.0.0/8)', isPrivate: true };
    if (o1 === 169 && o2 === 254) return { scope: 'RFC 3927 Link-Local APIPA', isPrivate: true };
    return { scope: 'Public Routable Internet Space', isPrivate: false };
  }, [ipOctets]);

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-2xl">
      {/* Header Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-slate-200">
            32-BIT ARCHITECTURAL IPV4 / CIDR BITWISE MATRIX
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 font-bold">
            Prefix: /{cidrPrefix} ({cidrPrefix} Network Bits)
          </span>
          <span className="px-2 py-0.5 rounded bg-pink-950/80 border border-pink-700/50 text-pink-300 font-bold">
            Host: {32 - cidrPrefix} Bits
          </span>
        </div>
      </div>

      {/* 32-Bit Interactive Register Strip */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
          <span>Bit 31 (MSB)</span>
          <span className="text-cyan-400 font-bold">← Network Prefix (Cyan) | Host ID (Pink) →</span>
          <span>Bit 0 (LSB)</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((octetNum) => {
            const octetBits = bits32.filter((b) => b.octetIdx === octetNum);
            const octetVal = ipOctets[octetNum - 1];

            return (
              <div key={octetNum} className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Octet {octetNum}</span>
                  <span className="text-slate-200 font-bold">{octetVal}</span>
                </div>

                <div className="grid grid-cols-8 gap-0.5">
                  {octetBits.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className={`h-7 rounded flex items-center justify-center font-mono text-xs font-bold transition-all ${
                        b.isNetwork
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                          : 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm'
                      }`}
                      title={`Bit ${b.bitIdx}: ${b.isNetwork ? 'Network' : 'Host'}`}
                    >
                      {b.val}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bitwise AND Logic Table */}
      <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3 font-mono text-xs space-y-2">
        <div className="text-[11px] font-bold text-slate-400">
          {isArabic ? 'حساب البادئة عبر البوابات المنطقية (Bitwise Conjunction):' : 'Bitwise Logic Derivation Table:'}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">IPv4 Host Address:</span>
            <span className="text-cyan-300 font-bold">{ipOctets.join('.')}</span>
            <span className="text-[10px] text-slate-500 block truncate">
              {ipOctets.map((o) => o.toString(2).padStart(8, '0')).join('.')}
            </span>
          </div>

          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Subnet Mask (/ {cidrPrefix}):</span>
            <span className="text-emerald-300 font-bold">{subnetCalc.subnetMaskStr}</span>
            <span className="text-[10px] text-slate-500 block truncate">
              {subnetCalc.subnetMaskStr.split('.').map((s) => Number(s).toString(2).padStart(8, '0')).join('.')}
            </span>
          </div>

          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Network ID (IP & MASK):</span>
            <span className="text-amber-300 font-bold">{subnetCalc.networkIpStr}</span>
            <span className="text-[10px] text-slate-500 block truncate">
              {subnetCalc.networkIpStr.split('.').map((s) => Number(s).toString(2).padStart(8, '0')).join('.')}
            </span>
          </div>

          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Broadcast ID (IP | ~MASK):</span>
            <span className="text-rose-300 font-bold">{subnetCalc.broadcastIpStr}</span>
            <span className="text-[10px] text-slate-500 block truncate">
              {subnetCalc.broadcastIpStr.split('.').map((s) => Number(s).toString(2).padStart(8, '0')).join('.')}
            </span>
          </div>
        </div>
      </div>

      {/* RFC 1918 & Usable Hosts Telemetry Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-1">
        <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${
          rfcScope.isPrivate ? 'bg-amber-950/60 border-amber-500/40 text-amber-300' : 'bg-blue-950/60 border-blue-500/40 text-blue-300'
        }`}>
          {rfcScope.scope}
        </span>
        <span className="text-slate-400">
          Usable Hosts: <strong className="text-emerald-400 font-bold">{subnetCalc.usableHosts.toLocaleString()}</strong> ({subnetCalc.firstUsable} → {subnetCalc.lastUsable})
        </span>
      </div>
    </div>
  );
};

// =========================================================================
// Realistic Scientific Vector Schematic 4: Multi-Layer Perceptron & Loss Landscape
// =========================================================================
interface NeuralPlaygroundSchematicProps {
  learningRate: number;
  hiddenNeurons: number;
  activationFunc: 'relu' | 'sigmoid' | 'tanh';
  currentEpoch: number;
  lossValue: number;
  isArabic: boolean;
}

const NeuralNetworkPerceptronSchematic: React.FC<NeuralPlaygroundSchematicProps> = ({
  learningRate,
  hiddenNeurons,
  activationFunc,
  currentEpoch,
  lossValue,
  isArabic,
}) => {
  const hiddenCount = Math.min(6, hiddenNeurons);

  // Computed coordinates for forward graph
  const inputCoords = [
    { x: 90, y: 70, label: 'x₁' },
    { x: 90, y: 150, label: 'x₂' },
    { x: 90, y: 220, label: 'b₀' }, // bias node
  ];

  const hiddenCoords = useMemo(() => {
    const coords = [];
    const spacing = 200 / (hiddenCount + 1);
    for (let i = 0; i < hiddenCount; i++) {
      coords.push({
        x: 320,
        y: 40 + (i + 1) * spacing,
        label: `h${i + 1}`,
      });
    }
    return coords;
  }, [hiddenCount]);

  const outputCoord = { x: 550, y: 140, label: 'ŷ' };

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-2xl relative overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-mono font-bold text-slate-200 uppercase">
            {isArabic
              ? 'معمارية الشبكة العصبية متعددة الطبقات (MLP) ودالة الخسارة'
              : 'Deep Neural Network MLP Forward Computational Graph & Loss Landscape'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2 py-0.5 rounded bg-pink-950/80 border border-pink-700/50 text-pink-300 font-bold">
            f(z) = {activationFunc.toUpperCase()}
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 font-bold">
            Loss: {lossValue}
          </span>
        </div>
      </div>

      {/* SVG Neural Graph */}
      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 660 270" className="w-full h-auto min-w-[580px] select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-cyan-nn" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Synapses Layer 1: Inputs to Hidden */}
          {inputCoords.map((inNode, inIdx) =>
            hiddenCoords.map((hNode, hIdx) => {
              const isPositiveWeight = (inIdx + hIdx) % 2 === 0;
              return (
                <line
                  key={`in-${inIdx}-h-${hIdx}`}
                  x1={inNode.x}
                  y1={inNode.y}
                  x2={hNode.x}
                  y2={hNode.y}
                  stroke={isPositiveWeight ? '#06b6d4' : '#f43f5e'}
                  strokeWidth={isPositiveWeight ? 1.8 : 1.2}
                  strokeOpacity={0.45}
                  strokeDasharray="4,2"
                />
              );
            })
          )}

          {/* Synapses Layer 2: Hidden to Output */}
          {hiddenCoords.map((hNode, hIdx) => {
            const isPositiveWeight = hIdx % 2 === 0;
            return (
              <line
                key={`h-${hIdx}-out`}
                x1={hNode.x}
                y1={hNode.y}
                x2={outputCoord.x}
                y2={outputCoord.y}
                stroke={isPositiveWeight ? '#10b981' : '#ec4899'}
                strokeWidth={isPositiveWeight ? 2.2 : 1.5}
                strokeOpacity={0.6}
              />
            );
          })}

          {/* Input Layer Nodes */}
          {inputCoords.map((inNode, idx) => (
            <g key={`node-in-${idx}`} transform={`translate(${inNode.x}, ${inNode.y})`}>
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="14" fill="#06b6d4" fillOpacity="0.2" filter="url(#glow-cyan-nn)" />
              <text x="0" y="4" fill="#67e8f9" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {inNode.label}
              </text>
            </g>
          ))}
          <text x="90" y="25" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            Input Layer
          </text>

          {/* Hidden Layer Nodes */}
          {hiddenCoords.map((hNode, idx) => (
            <g key={`node-h-${idx}`} transform={`translate(${hNode.x}, ${hNode.y})`}>
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#a855f7" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="12" fill="#a855f7" fillOpacity="0.2" />
              <text x="0" y="4" fill="#d8b4fe" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {hNode.label}
              </text>
              {/* Mini activation glyph */}
              {activationFunc === 'relu' && (
                <path d="M -6,5 L 0,5 L 6,-4" fill="none" stroke="#e9d5ff" strokeWidth="1" />
              )}
              {activationFunc === 'sigmoid' && (
                <path d="M -6,4 Q 0,4 0,0 Q 0,-4 6,-4" fill="none" stroke="#e9d5ff" strokeWidth="1" />
              )}
              {activationFunc === 'tanh' && (
                <path d="M -6,5 Q 0,5 0,0 Q 0,-5 6,-5" fill="none" stroke="#e9d5ff" strokeWidth="1" />
              )}
            </g>
          ))}
          <text x="320" y="25" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            Hidden Layer ({hiddenNeurons})
          </text>

          {/* Output Layer Node */}
          <g transform={`translate(${outputCoord.x}, ${outputCoord.y})`}>
            <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#ec4899" strokeWidth="3" filter="url(#glow-pink)" />
            <circle cx="0" cy="0" r="17" fill="#ec4899" fillOpacity="0.25" />
            <text x="0" y="5" fill="#fbcfe8" fontSize="14" fontFamily="monospace" fontWeight="black" textAnchor="middle">
              {outputCoord.label}
            </text>
          </g>
          <text x="550" y="25" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            Output Layer (ŷ)
          </text>
        </svg>
      </div>

      {/* 3D Loss Landscape & Convergence Telemetry Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-mono">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 block text-[10px]">Optimization Algorithm:</span>
          <span className="text-pink-400 font-bold">Stochastic Gradient Descent (SGD)</span>
          <span className="text-slate-500 block text-[10px] mt-0.5">θ ← θ - η · ∇J(θ)</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 block text-[10px]">Epoch Progress:</span>
          <span className="text-cyan-400 font-bold">{currentEpoch} / 500 Steps</span>
          <span className="text-slate-500 block text-[10px] mt-0.5">Learning Rate η = {learningRate}</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 block text-[10px]">MSE Loss Surface:</span>
          <span className="text-emerald-400 font-bold text-sm">{lossValue}</span>
          <span className="text-emerald-400/80 block text-[10px] mt-0.5">Basin Global Minimum Reached</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// Main Studio Component
// =========================================================================
export const ComputerScienceInformaticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'logic_circuit',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
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
    } shadow-2xl overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none p-4 sm:p-6' : ''}`} data-fullscreen-lab={isFullscreen ? 'true' : undefined}>
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

        {/* Engine Tabs - Optimized with >=44px mobile touch targets */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all text-slate-300 hover:bg-slate-700/50 cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4 text-violet-400" />}
            <span className="hidden sm:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
          <button
            onClick={() => setActiveMode('logic_circuit')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'logic_circuit'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{isArabic ? 'المنطق والدوائر' : 'Logic Circuits'}</span>
          </button>
          <button
            onClick={() => setActiveMode('algorithm_visualizer')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'algorithm_visualizer'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'الخوارزميات' : 'Algorithms'}</span>
          </button>
          <button
            onClick={() => setActiveMode('sql_sandbox')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'sql_sandbox'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>{isArabic ? 'قواعد البيانات SQL' : 'SQL Sandbox'}</span>
          </button>
          <button
            onClick={() => setActiveMode('network_subnet')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'network_subnet'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>{isArabic ? 'الشبكات الفرعية' : 'Subnetting'}</span>
          </button>
          <button
            onClick={() => setActiveMode('neural_playground')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'neural_playground'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{isArabic ? 'الذكاء الاصطناعي' : 'Neural Playground'}</span>
          </button>
          <div className="hidden xl:block w-[1px] h-6 bg-slate-700/60 my-auto" />
          <button
            onClick={() => setActiveMode('lovelace_analytical_engine')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'lovelace_analytical_engine'
                ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-md'
                : 'text-fuchsia-300 hover:bg-fuchsia-950/40'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>{isArabic ? 'لوفليس (1843)' : 'Lovelace 1843'}</span>
          </button>
          <button
            onClick={() => setActiveMode('turing_universal_machine')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'turing_universal_machine'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md'
                : 'text-cyan-300 hover:bg-cyan-950/40'
            }`}
          >
            <Binary className="w-4 h-4" />
            <span>{isArabic ? 'تورينج (1936)' : 'Turing 1936'}</span>
          </button>
          <button
            onClick={() => setActiveMode('shannon_information_theory')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'shannon_information_theory'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-emerald-300 hover:bg-emerald-950/40'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>{isArabic ? 'شانون (1948)' : 'Shannon 1948'}</span>
          </button>
          <button
            onClick={() => setActiveMode('von_neumann_architecture')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'von_neumann_architecture'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-indigo-300 hover:bg-indigo-950/40'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{isArabic ? 'فون نيومان (1945)' : 'Von Neumann 1945'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6">
        {/* 4K Museum Archival Studios Showcase Jump Cards */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-violet-950/70 via-indigo-950/50 to-slate-900 border border-violet-800/40">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                {isArabic ? 'استوديوهات المخطوطات والوثائق الحاسوبية الأصلية 4K' : '4K Archival Computing Master Studios'}
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {isArabic ? 'وثائق نادرة من متاحف لندن وكامبريدج ومختبرات بل وبرينستون' : 'Rare folios from London, Cambridge, Bell Labs & Princeton'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Ada Lovelace 1843 */}
            <button
              onClick={() => setActiveMode('lovelace_analytical_engine')}
              className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                activeMode === 'lovelace_analytical_engine'
                  ? 'bg-fuchsia-950/80 border-fuchsia-500 text-fuchsia-200 shadow-md shadow-fuchsia-900/30'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-fuchsia-400 flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5" />
                  {isArabic ? 'آدا لوفليس (1843)' : 'Ada Lovelace (1843)'}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800">Note G</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {isArabic ? 'الآلة التحليلية، خوارزمية برنولي، والبطاقات المثقبة' : 'Analytical Engine, Note G algorithm & Jacquard punch cards'}
              </p>
            </button>

            {/* Alan Turing 1936 */}
            <button
              onClick={() => setActiveMode('turing_universal_machine')}
              className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                activeMode === 'turing_universal_machine'
                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-900/30'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <Binary className="w-3.5 h-3.5" />
                  {isArabic ? 'آلان تورينج (1936)' : 'Alan Turing (1936)'}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">UTM</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {isArabic ? 'الآلة الشاملة، شريط الحالات، ومسألة التوقف' : 'Universal Machine tape, state transitions & Halting Problem'}
              </p>
            </button>

            {/* Claude Shannon 1948 */}
            <button
              onClick={() => setActiveMode('shannon_information_theory')}
              className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                activeMode === 'shannon_information_theory'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-900/30'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  {isArabic ? 'كلود شانون (1948)' : 'Claude Shannon (1948)'}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Entropy</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {isArabic ? 'إنتروبيا المعلومات، سعة القناة، والبت' : 'Information Entropy H, channel capacity C & the bit'}
              </p>
            </button>

            {/* John von Neumann 1945 */}
            <button
              onClick={() => setActiveMode('von_neumann_architecture')}
              className={`min-h-[44px] p-3 rounded-xl border text-start transition-all cursor-pointer ${
                activeMode === 'von_neumann_architecture'
                  ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200 shadow-md shadow-indigo-900/30'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-indigo-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  {isArabic ? 'فون نيومان (1945)' : 'von Neumann (1945)'}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">EDVAC</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {isArabic ? 'البرنامج المخزن، الذاكرة الموحدة، ودورة المعالجة' : 'Stored-program architecture, unified RAM & fetch-decode'}
              </p>
            </button>
          </div>
        </div>
        {/* ================================================================= */}
        {/* Tab 1: Digital Logic Circuit Builder & Truth Table Simulator      */}
        {/* ================================================================= */}
        {activeMode === 'logic_circuit' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-violet-400">
                  <Sliders className="w-4 h-4" />
                  <span>{isArabic ? 'إعدادات المدخلات والبوابات المنطقية' : 'Circuit Inputs & Logic Gates'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-300 mb-1.5 block">{isArabic ? 'اختر البوابة أو الدائرة المنطقية:' : 'Select Gate / Circuit:'}</label>
                  <select
                    value={selectedGate}
                    onChange={(e) => setSelectedGate(e.target.value as any)}
                    className="min-h-[44px] w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-violet-500"
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
                      className={`min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        inputA === 1 ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {inputA} {inputA === 1 ? '(HIGH)' : '(LOW)'}
                    </button>
                  </div>

                  {selectedGate !== 'NOT' && (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                      <span className="text-xs font-mono font-medium">Input B (المدخل الثاني):</span>
                      <button
                        onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                        className={`min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          inputB === 1 ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {inputB} {inputB === 1 ? '(HIGH)' : '(LOW)'}
                      </button>
                    </div>
                  )}

                  {selectedGate === 'FULL_ADDER' && (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                      <span className="text-xs font-mono font-medium">Carry In (حمل الدخل Cin):</span>
                      <button
                        onClick={() => setInputC(inputC === 1 ? 0 : 1)}
                        className={`min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          inputC === 1 ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/50 shadow-md' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {inputC} {inputC === 1 ? '(HIGH)' : '(LOW)'}
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-violet-950/40 border border-violet-500/30 text-xs space-y-1">
                  <div className="text-violet-300 font-semibold">{isArabic ? 'المعادلة البولينية الناتجة:' : 'Boolean Expression:'}</div>
                  <div className="font-mono text-cyan-300 text-sm font-bold">{gateResult.name1}</div>
                  {gateResult.name2 && <div className="font-mono text-cyan-300 text-sm font-bold">{gateResult.name2}</div>}
                </div>
              </div>

              {/* Realistic High-Resolution Vector Schematic */}
              <div className="lg:col-span-2 space-y-4">
                <DigitalLogicIeeeVectorSchematic
                  selectedGate={selectedGate}
                  inputA={inputA}
                  inputB={inputB}
                  inputC={inputC}
                  out1={gateResult.out1}
                  out2={gateResult.out2}
                  isArabic={isArabic}
                  isLight={isLight}
                />

                {/* Educational callout */}
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>
                    {isArabic
                      ? 'قوانين دي مورجان تتيح تحويل أي دالة منطقية معقدة إلى بوابات NAND الشاملة فقط لتقليل مساحة الرقاقة الإلكترونية وتكلفة السيليكون.'
                      : "De Morgan's laws allow universal synthesis of any Boolean logic equation strictly using NAND gates to minimize silicon die area."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 2: Sorting & Searching Visualizer                             */}
        {/* ================================================================= */}
        {activeMode === 'algorithm_visualizer' && (
          <div className="space-y-6">
            {/* Top Toolbar with >=44px touch targets */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={toggleAutoSort}
                  className={`min-h-[44px] px-4 py-2.5 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer ${
                    isSorting ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                >
                  {isSorting ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isSorting ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل تلقائي' : 'Auto Play')}</span>
                </button>
                <button
                  onClick={stepBubbleSort}
                  disabled={isSorting}
                  className="min-h-[44px] px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <SkipForward className="w-4 h-4" />
                  <span>{isArabic ? 'خطوة واحدة (Step)' : 'Single Step'}</span>
                </button>
                <button
                  onClick={resetArray}
                  className="min-h-[44px] px-4 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isArabic ? 'إعادة تعيين' : 'Reset Array'}</span>
                </button>
                <select
                  value={sortAlgo}
                  onChange={(e) => setSortAlgo(e.target.value as any)}
                  className="min-h-[44px] bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-violet-500 cursor-pointer"
                >
                  <option value="bubble">Bubble Sort</option>
                  <option value="selection">Selection Sort</option>
                  <option value="insertion">Insertion Sort</option>
                </select>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono">
                <div>
                  <span className="text-slate-400">{isArabic ? 'المقارنات:' : 'Comparisons:'} </span>
                  <span className="text-cyan-400 font-bold text-sm">{comparisons}</span>
                </div>
                <div>
                  <span className="text-slate-400">{isArabic ? 'التبديلات:' : 'Swaps:'} </span>
                  <span className="text-emerald-400 font-bold text-sm">{swaps}</span>
                </div>
              </div>
            </div>

            {/* High-Definition Memory Register Array Telemetry Canvas */}
            <SortingAlgorithmTelemetryCanvas
              arrayData={arrayData}
              activeIndices={activeIndices}
              sortedIndices={sortedIndices}
              sortAlgo={sortAlgo}
              comparisons={comparisons}
              swaps={swaps}
              isSorting={isSorting}
              isArabic={isArabic}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 3: Interactive SQL Sandbox                                    */}
        {/* ================================================================= */}
        {activeMode === 'sql_sandbox' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => runSqlSandbox('SELECT student_name, track, score, status FROM students WHERE score >= 85 ORDER BY score DESC;')}
                className="min-h-[44px] px-4 py-2.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30 cursor-pointer transition-all"
              >
                SELECT students WHERE score &gt;= 85
              </button>
              <button
                onClick={() => runSqlSandbox('SELECT dept_name, faculty, head_of_dept FROM departments;')}
                className="min-h-[44px] px-4 py-2.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30 cursor-pointer transition-all"
              >
                SELECT * FROM departments
              </button>
              <button
                onClick={() => runSqlSandbox('SELECT course_id, title, credit_hours FROM courses ORDER BY credit_hours DESC;')}
                className="min-h-[44px] px-4 py-2.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-violet-300 border border-violet-500/30 cursor-pointer transition-all"
              >
                SELECT courses ORDER BY credit_hours
              </button>
            </div>

            {/* SQL Terminal */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden font-mono text-xs shadow-xl">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-bold">SQL Query Engine v2.5 (Interactive Read-Only Sandbox)</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-bold">● Connected (SQLite / PostgreSQL Mode)</span>
              </div>
              <div className="p-4 bg-slate-950 text-emerald-400 text-sm">
                &gt; {sqlQuery}
              </div>
            </div>

            {/* Results Table */}
            <div className="rounded-xl border border-slate-700/60 overflow-x-auto shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-800/80 text-slate-300 font-mono">
                  <tr>
                    {sqlResult.columns.map((col, idx) => (
                      <th key={idx} className="p-3.5 border-b border-slate-700 font-bold uppercase">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                  {sqlResult.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/50 transition-colors">
                      {row.map((val, cIdx) => (
                        <td key={cIdx} className="p-3.5 font-mono text-slate-300">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 4: IPv4 Subnetting & CIDR Calculator                          */}
        {/* ================================================================= */}
        {activeMode === 'network_subnet' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* CIDR Inputs */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-cyan-400">
                  <Network className="w-4 h-4" />
                  <span>{isArabic ? 'إعدادات عنوان IP والبادئة CIDR' : 'IP & CIDR Prefix Settings'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">IPv4 Address (عنوان الشبكة):</label>
                  <div className="grid grid-cols-4 gap-2">
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
                        className="min-h-[44px] w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-center text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>CIDR Prefix:</span>
                    <span className="font-mono text-cyan-400 font-bold text-sm">/{cidrPrefix}</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={30}
                    value={cidrPrefix}
                    onChange={(e) => setCidrPrefix(Number(e.target.value))}
                    className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isArabic ? 'فئة العنوان:' : 'Address Class:'}</span>
                    <span className="text-cyan-300 font-bold">{subnetCalc.ipClass}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isArabic ? 'المضيفين الفعليين:' : 'Usable Hosts:'}</span>
                    <span className="text-emerald-400 font-bold">{subnetCalc.usableHosts.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* 32-Bit Architectural Bit Matrix Visualizer */}
              <div className="lg:col-span-2">
                <Ipv4SubnetBitwiseMatrixSchematic
                  ipOctets={ipOctets}
                  cidrPrefix={cidrPrefix}
                  subnetCalc={subnetCalc}
                  isArabic={isArabic}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Tab 5: Neural Network Playground & Decision Boundary              */}
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
                    <span className="font-mono text-pink-400 font-bold text-sm">{hiddenNeurons}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={hiddenNeurons}
                    onChange={(e) => setHiddenNeurons(Number(e.target.value))}
                    className="w-full accent-pink-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'عدد دورات التدريب (Epochs):' : 'Epochs:'}</span>
                    <span className="font-mono text-pink-400 font-bold text-sm">{currentEpoch}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={currentEpoch}
                    onChange={(e) => setCurrentEpoch(Number(e.target.value))}
                    className="w-full accent-pink-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'معدل التعلم (Learning Rate η):' : 'Learning Rate (η):'}</span>
                    <span className="font-mono text-pink-400 font-bold text-sm">{learningRate}</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={0.2}
                    step={0.01}
                    value={learningRate}
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="w-full accent-pink-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">{isArabic ? 'دالة التنشيط:' : 'Activation Function:'}</label>
                  <select
                    value={activationFunc}
                    onChange={(e) => setActivationFunc(e.target.value as any)}
                    className="min-h-[44px] w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-pink-500 cursor-pointer"
                  >
                    <option value="relu">ReLU (f(z) = max(0, z))</option>
                    <option value="sigmoid">Sigmoid (σ(z) = 1/(1+e^-z))</option>
                    <option value="tanh">Tanh (tanh(z))</option>
                  </select>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">{isArabic ? 'قيمة دالة الخسارة (Loss):' : 'MSE Loss:'}</span>
                  <span className="text-emerald-400 font-bold text-base">{lossValue}</span>
                </div>
              </div>

              {/* High-Resolution Multi-Layer Perceptron Vector Schematic */}
              <div className="lg:col-span-2 space-y-4">
                <NeuralNetworkPerceptronSchematic
                  learningRate={learningRate}
                  hiddenNeurons={hiddenNeurons}
                  activationFunc={activationFunc}
                  currentEpoch={currentEpoch}
                  lossValue={lossValue}
                  isArabic={isArabic}
                />

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  {isArabic
                    ? 'تقوم الشبكة العصبية بتعديل الأوزان (Weights) والانحيازات (Biases) عبر التراجع الخلفي (Backpropagation) لتقليل دالة الخسارة وتشكيل حدود القرار.'
                    : 'The neural network iteratively adjusts weights and biases via backpropagation with gradient descent to minimize Mean Squared Error and shape the decision boundary.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Ada Lovelace 1843 Analytical Engine Studio */}
        {activeMode === 'lovelace_analytical_engine' && (
          <AdaLovelaceAnalyticalEngineStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        )}

        {/* Tab 7: Alan Turing 1936 Universal Machine Studio */}
        {activeMode === 'turing_universal_machine' && (
          <AlanTuringUniversalMachineStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        )}

        {/* Tab 8: Claude Shannon 1948 Information Theory Studio */}
        {activeMode === 'shannon_information_theory' && (
          <ClaudeShannonInformationTheoryStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        )}

        {/* Tab 9: John von Neumann 1945 Architecture Studio */}
        {activeMode === 'von_neumann_architecture' && (
          <VonNeumannArchitectureStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        )}
      </div>
    </div>
  );
};

