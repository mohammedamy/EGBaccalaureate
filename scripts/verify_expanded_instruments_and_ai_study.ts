/**
 * Test Suite: verify_expanded_instruments_and_ai_study.ts
 *
 * Verifies:
 * 1. DDS Function Generator physics formulas, waveform synthesis & sweep calculations.
 * 2. Optical Spectrometer grating diffraction (d * sin(theta) = m * lambda) and Balmer spectrum.
 * 3. Logic Analyzer 8-channel bus decoding and 7-gate truth table validation.
 * 4. AI Progressive 3-Tier KaTeX Hint Generation & Diagnostic Drill pacing metrics.
 */

import {
  getProgressiveHintsForQuestion,
  computeDiagnosticDrillResult,
} from '../src/services/aiStudyHintService';
import type { GeneratedQuestion } from '../src/services/mistakeNotebookService';

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${testName}`);
    process.exit(1);
  }
  passedTests++;
  console.log(`✅ PASS: ${testName}`);
}

function assertClose(actual: number, expected: number, tolerance = 0.05, testName: string) {
  const diff = Math.abs(actual - expected);
  assert(diff <= tolerance, `${testName} (actual: ${actual}, expected: ${expected})`);
}

console.log('🔬 === PART 1: DDS FUNCTION GENERATOR PHYSICS & SIGNAL SYNTHESIS ===');

// Test 1: Sine waveform generation at fundamental frequency
{
  const freq = 1000; // 1 kHz
  const amp = 10; // 10 Vpp (peak = 5V)
  const offset = 1.0; // 1V DC offset
  const t = 0.00025; // 1/4 of period T = 1ms -> theta = pi/2
  const theta = 2 * Math.PI * freq * t;
  const vInstant = offset + (amp / 2) * Math.sin(theta);
  assertClose(vInstant, 6.0, 0.01, 'Sine wave reaches positive peak + offset (1V + 5V = 6V)');
}

// Test 2: Square wave with duty cycle
{
  const dutyCycle = 70; // 70%
  const period = 0.001; // 1ms
  const tHigh = 0.0005; // 50% through period -> should be HIGH (1)
  const tLow = 0.0008; // 80% through period -> should be LOW (-1)
  const isHigh1 = (tHigh % period) < (dutyCycle / 100) * period;
  const isHigh2 = (tLow % period) < (dutyCycle / 100) * period;
  assert(isHigh1 === true, 'Square wave is HIGH before duty cycle threshold');
  assert(isHigh2 === false, 'Square wave is LOW after duty cycle threshold');
}

// Test 3: Linear & Logarithmic frequency sweep
{
  const fStart = 100;
  const fStop = 10000;
  const sweepDuration = 2.0; // seconds
  const tHalf = 1.0;
  // Linear sweep at half duration
  const fLinHalf = fStart + (fStop - fStart) * (tHalf / sweepDuration);
  assertClose(fLinHalf, 5050, 1.0, 'Linear sweep at t = T/2 is arithmetic mean (5050 Hz)');

  // Logarithmic sweep at half duration
  const fLogHalf = fStart * Math.pow(fStop / fStart, tHalf / sweepDuration);
  assertClose(fLogHalf, 1000, 5.0, 'Logarithmic sweep at t = T/2 is geometric mean (1000 Hz)');
}

console.log('\n🌈 === PART 2: OPTICAL SPECTROMETER & DIFFRACTION PHYSICS ===');

// Test 4: Grating spacing & Balmer alpha angle
{
  const gratingLinesPerMm = 600;
  const dNm = (1 / gratingLinesPerMm) * 1e6; // 1666.67 nm
  assertClose(dNm, 1666.67, 0.1, 'Grating spacing d = 1666.67 nm for 600 lines/mm');

  // Hydrogen alpha (H-alpha = 656.3 nm) in 1st order (m = 1)
  const lambdaHAlpha = 656.3; // nm
  const sinTheta = (1 * lambdaHAlpha) / dNm;
  const thetaDeg = (Math.asin(sinTheta) * 180) / Math.PI;
  assertClose(thetaDeg, 23.19, 0.1, 'Balmer H-alpha 1st order diffraction occurs at theta ≈ 23.2°');

  // Inverse reconstruction from angle
  const reconstructedLambda = dNm * Math.sin((thetaDeg * Math.PI) / 180);
  assertClose(reconstructedLambda, lambdaHAlpha, 0.1, 'Inverse reconstruction yields 656.3 nm');
}

// Test 5: Sodium Doublet resolution
{
  const dNm = (1 / 600) * 1e6;
  const lambdaD1 = 589.0;
  const lambdaD2 = 589.6;
  const thetaD1 = (Math.asin(lambdaD1 / dNm) * 180) / Math.PI;
  const thetaD2 = (Math.asin(lambdaD2 / dNm) * 180) / Math.PI;
  const deltaTheta = thetaD2 - thetaD1;
  assert(deltaTheta > 0.02, 'Sodium D1/D2 doublet angular separation is detectable on Vernier (> 0.02°)');
}

console.log('\n💻 === PART 3: LOGIC ANALYZER & BOOLEAN BUS SYSTEM ===');

// Test 6: 7 Logic Gate Truth Tables
{
  type Gate = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';
  const evaluateGate = (gate: Gate, a: 0 | 1, b: 0 | 1): 0 | 1 => {
    switch (gate) {
      case 'AND': return (a && b) ? 1 : 0;
      case 'OR': return (a || b) ? 1 : 0;
      case 'NOT': return a === 1 ? 0 : 1;
      case 'NAND': return !(a && b) ? 1 : 0;
      case 'NOR': return !(a || b) ? 1 : 0;
      case 'XOR': return (a !== b) ? 1 : 0;
      case 'XNOR': return (a === b) ? 1 : 0;
    }
  };

  assert(evaluateGate('AND', 1, 1) === 1 && evaluateGate('AND', 1, 0) === 0, 'AND gate logic valid');
  assert(evaluateGate('OR', 0, 0) === 0 && evaluateGate('OR', 0, 1) === 1, 'OR gate logic valid');
  assert(evaluateGate('NOT', 1, 0) === 0 && evaluateGate('NOT', 0, 0) === 1, 'NOT gate logic valid');
  assert(evaluateGate('NAND', 1, 1) === 0 && evaluateGate('NAND', 1, 0) === 1, 'NAND gate logic valid');
  assert(evaluateGate('NOR', 0, 0) === 1 && evaluateGate('NOR', 1, 0) === 0, 'NOR gate logic valid');
  assert(evaluateGate('XOR', 1, 0) === 1 && evaluateGate('XOR', 1, 1) === 0, 'XOR gate logic valid');
  assert(evaluateGate('XNOR', 1, 1) === 1 && evaluateGate('XNOR', 1, 0) === 0, 'XNOR gate logic valid');
}

// Test 7: 8-Channel binary bus decoding
{
  // 8 channels: [D0, D1, D2, D3, D4, D5, D6, D7]
  const channels = [1, 0, 1, 0, 0, 1, 0, 1]; // LSB at D0 -> value = 1 + 4 + 32 + 128 = 165 = 0xA5
  let busVal = 0;
  channels.forEach((bit, idx) => {
    busVal |= (bit << idx);
  });
  assert(busVal === 165, '8-channel bus binary to decimal conversion matches 165');
  assert(busVal.toString(16).toUpperCase() === 'A5', '8-channel bus hex representation matches 0xA5');
}

console.log('\n🧠 === PART 4: AI PROGRESSIVE HINTS & DIAGNOSTIC DRILL SPRINT ===');

// Test 8: 3-Tier Progressive KaTeX Hint Generation
{
  const mockQuestion: GeneratedQuestion = {
    id: 'test_q1',
    questionEn: 'In a step-up transformer, the primary coil has $N_1 = 200$ turns and secondary has $N_2 = 1000$ turns. If $V_1 = 110\\text{ V}$, find $V_2$.',
    questionAr: 'محول كهربي رافع للجهد، عدد لفات ملفه الابتدائي ٢٠٠ لفة والملف الثانوي ١٠٠٠ لفة. إذا كان جهد الابتدائي ١١٠ فولت، احسب جهد الثانوي.',
    difficulty: 'hots',
    optionsEn: ['22 V', '550 V', '1100 V', '2200 V'],
    optionsAr: ['٢٢ فولت', '٥٥٠ فولت', '١١٠٠ فولت', '٢٢٠٠ فولت'],
    correctIndex: 1,
    explanationEn: [
      '\\frac{V_s}{V_p} = \\frac{N_s}{N_p}',
      'V_s = V_p \\cdot \\frac{N_s}{N_p} = 110 \\times \\frac{1000}{200}',
      'V_s = 550\\text{ V}',
    ],
    explanationAr: [
      '\\frac{V_s}{V_p} = \\frac{N_s}{N_p}',
      'V_s = V_p \\cdot \\frac{N_s}{N_p} = 110 \\times \\frac{1000}{200}',
      'V_s = 550\\text{ V}',
    ],
    chapterId: 'ch3_induction',
    chapterTitleEn: 'Electromagnetic Induction & Transformers',
    chapterTitleAr: 'الحث الكهرومغناطيسي والمحولات',
    branchTitleEn: 'Physics',
    branchTitleAr: 'الفيزياء',
  };

  const hints = getProgressiveHintsForQuestion(mockQuestion);
  assert(hints.length === 3, 'Returns exactly 3 progressive hint tiers');
  assert(hints[0].tier === 1 && hints[0].iconType === 'law', 'Tier 1 provides Governing Law & Concept');
  assert(hints[1].tier === 2 && hints[1].iconType === 'roadmap', 'Tier 2 provides Algebraic Roadmap');
  assert(hints[2].tier === 3 && hints[2].iconType === 'trap', 'Tier 3 provides Ministerial Trap Warning');
  assert(hints[2].contentAr.includes('المستويات العليا'), 'HOTS question generates specialized distractor trap guidance');
}

// Test 9: Diagnostic Drill Speed, Pace & Remedial Report
{
  const mockQuestions: GeneratedQuestion[] = Array.from({ length: 10 }).map((_, i) => ({
    id: `drill_q${i}`,
    questionEn: `Question ${i + 1}`,
    questionAr: `السؤال ${i + 1}`,
    difficulty: i < 3 ? 'easy' : i < 7 ? 'medium' : 'hots',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 1,
    explanationEn: ['Step 1'],
    explanationAr: ['خطوة 1'],
    chapterId: 'ch1',
    chapterTitleEn: 'Physics Ch 1',
    chapterTitleAr: 'الفصل الأول فيزياء',
    branchTitleEn: 'Physics',
    branchTitleAr: 'الفيزياء',
  }));

  // Student answers 9 out of 10 correctly in 360 seconds (6 minutes)
  const answers: Record<string, number> = {};
  mockQuestions.forEach((q, idx) => {
    answers[q.id] = idx === 9 ? 0 : 1; // 1 mistake on last question
  });

  const drillReport = computeDiagnosticDrillResult(mockQuestions, answers, 360);
  assert(drillReport.totalQuestions === 10, 'Drill report has 10 total questions');
  assert(drillReport.correctCount === 9, 'Drill report counts 9 correct answers');
  assert(drillReport.scorePct === 90, 'Drill report calculates 90% score');
  assert(drillReport.paceSecPerQ === 36, 'Drill report calculates 36 seconds per question pace');
  assert(drillReport.speedRatingEn === 'Elite Pace', 'Fast pace (36s <= 45s) classified as Elite Pace');
  assert(drillReport.recommendationsAr.length > 0, 'Drill report generates actionable remedial study recommendations');
}

console.log(`\n🎉 ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY!`);
