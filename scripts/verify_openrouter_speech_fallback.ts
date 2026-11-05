/**
 * Verification Suite: OpenRouter `fish-audio/s2.1-pro-free:free` Speech Narration
 * + Firebase Cloud Function Secret Proxy + Seamless Native Web Speech Fallback
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  aiVoiceEngine,
  OPENROUTER_FISH_AUDIO_MODEL,
  formatMathAndMarkdownForSpeech,
  resolveTtsProxyConfig,
  type SpeechProviderSource,
} from '../src/services/aiVoiceEngine';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`❌ [FAIL] ${message}`);
    failed++;
  }
}

async function runTests() {
  console.log('🎙️ Starting OpenRouter Fish Audio S2.1 Pro Free + Fallback Verification...\n');

  // 1. Model slug & LaTeX verbalizer checks
  assert(
    OPENROUTER_FISH_AUDIO_MODEL === 'fish-audio/s2.1-pro-free:free',
    `OPENROUTER_FISH_AUDIO_MODEL equals exact slug "fish-audio/s2.1-pro-free:free"`
  );

  const arSpoken = formatMathAndMarkdownForSpeech(
    'طبقاً لقانون فاراداي: $E = \\frac{\\Delta \\Phi}{\\Delta t} \\implies I^2$',
    'ar'
  );
  assert(
    arSpoken.includes('دلتا') && arSpoken.includes('على') && arSpoken.includes('تربيع') && !arSpoken.includes('\\frac'),
    `Arabic KaTeX formula verbalizes cleanly: "${arSpoken}"`
  );

  const enSpoken = formatMathAndMarkdownForSpeech(
    'Impedance is $Z = \\sqrt{R^2 + X_L^2} \\approx 5\\,\\Omega$',
    'en'
  );
  assert(
    enSpoken.includes('square root') && enSpoken.includes('squared') && enSpoken.includes('ohms') && !enSpoken.includes('\\sqrt'),
    `English KaTeX formula verbalizes cleanly: "${enSpoken}"`
  );

  // 2. Security & Firebase Cloud Function checks
  const rootDir = process.cwd();
  const cloudFnPath = path.join(rootDir, 'functions/src/index.ts');
  assert(fs.existsSync(cloudFnPath), 'Firebase Cloud Function functions/src/index.ts exists');

  const cloudFnCode = fs.readFileSync(cloudFnPath, 'utf8');
  assert(
    cloudFnCode.includes("defineSecret('OPENROUTER_API_KEY')") &&
      cloudFnCode.includes('secrets: [OPENROUTER_API_KEY]'),
    'Cloud Function reads OPENROUTER_API_KEY strictly from Firebase Secret Manager (defineSecret)'
  );
  assert(
    cloudFnCode.includes('verifyIdToken('),
    'Cloud Function requires a verified Firebase ID token before spending OpenRouter quota'
  );
  assert(
    cloudFnCode.includes("'fish-audio/s2.1-pro-free:free'") &&
      cloudFnCode.includes('https://openrouter.ai/api/v1/audio/speech') &&
      cloudFnCode.includes("response_format: 'mp3'"),
    'Cloud Function targets OpenRouter /api/v1/audio/speech with fish-audio/s2.1-pro-free:free and mp3 format'
  );

  const gitignore = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf8');
  assert(
    gitignore.includes('.env') && gitignore.includes('!.env.example'),
    '.gitignore protects .env files while tracking .env.example'
  );

  // Ensure no VITE_OPENROUTER_API_KEY leaks in src/
  const voiceEngineCode = fs.readFileSync(path.join(rootDir, 'src/services/aiVoiceEngine.ts'), 'utf8');
  assert(
    !voiceEngineCode.includes('VITE_OPENROUTER_API_KEY') && !voiceEngineCode.includes('sk-or-v1-'),
    'Client bundle never reads VITE_OPENROUTER_API_KEY or hardcodes OpenRouter credentials'
  );

  // 3. Fallback simulation when API is unconfigured or returns 429 rate-limit
  assert(
    resolveTtsProxyConfig() === null,
    'resolveTtsProxyConfig() returns null safely when VITE_FIREBASE_TTS_FUNCTION_URL is unset'
  );

  let nativeFallbackCalledCount = 0;
  let lastResolvedSource: SpeechProviderSource | null = null;
  const origSpeakNative = aiVoiceEngine.speakNative.bind(aiVoiceEngine);

  aiVoiceEngine.speakNative = (clean, opts) => {
    nativeFallbackCalledCount++;
    opts?.onStart?.();
    opts?.onEnd?.();
    void clean;
  };

  aiVoiceEngine.speakHintOrExplanation('Test fallback when unconfigured', {
    lang: 'en',
    context: 'hint',
    onSourceResolved: (src) => {
      lastResolvedSource = src;
    },
  });

  // Allow async promise tick to complete
  await new Promise((r) => setTimeout(r, 30));

  assert(
    nativeFallbackCalledCount === 1 && lastResolvedSource === 'native_fallback',
    'Unconfigured Cloud Function endpoint immediately falls back to native Web Speech voice engine'
  );

  // Restore original method
  aiVoiceEngine.speakNative = origSpeakNative;

  // 4. Verify UI integration across core hint & explanation components
  const requiredComponents = [
    'src/components/SpeechNarrationButton.tsx',
    'src/components/ProgressiveHintDrawer.tsx',
    'src/components/LessonView.tsx',
    'src/components/TestGenerator.tsx',
    'src/core/exam/BubbleSheetSimulator.tsx',
    'src/components/MistakeNotebookView.tsx',
    'src/core/pedagogy/POEController.tsx',
    'src/components/labs/PostLabAssessmentModal.tsx',
    'src/components/TeacherQuestionBankView.tsx',
  ];

  for (const relPath of requiredComponents) {
    const content = fs.readFileSync(path.join(rootDir, relPath), 'utf8');
    assert(
      content.includes('SpeechNarrationButton'),
      `${relPath} integrates SpeechNarrationButton for hints/explanations`
    );
  }

  console.log('\n=============================================================');
  console.log(`🎉 Results: ${passed} Passed | ${failed} Failed`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});

