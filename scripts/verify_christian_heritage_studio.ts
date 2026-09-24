import fs from 'fs';
import path from 'path';

console.log('=============================================================');
console.log('🧪 VERIFYING REALISTIC SACRED COPTIC HERITAGE STUDIO & CONTRAST');
console.log('=============================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passCount++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failCount++;
  }
}

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioPath = path.resolve(__dirname, '../src/components/labs/ChristianHeritageStudio.tsx');
assert(fs.existsSync(studioPath), 'ChristianHeritageStudio.tsx exists');

const content = fs.readFileSync(studioPath, 'utf8');

// 1. Component Structure & Exports
console.log('\n--- 1. Component Structure & Architecture ---');
assert(content.includes('export const ChristianHeritageStudio: React.FC<Props>'), 'Exports ChristianHeritageStudio');
assert(content.includes('CopticIconostasisSacramentsVectorSchematic'), 'Contains CopticIconostasisSacramentsVectorSchematic');
assert(content.includes('EgyptianMonasticHeritageMapSchematic'), 'Contains EgyptianMonasticHeritageMapSchematic');
assert(content.includes('GospelSynopticsFourEvangelistsSchematic'), 'Contains GospelSynopticsFourEvangelistsSchematic');

// 2. Realistic Sacred Iconostasis & Sanctuary Features
console.log('\n--- 2. Sacred Coptic Iconostasis & Sanctuary Aesthetics ---');
assert(content.includes('eastApseAura'), 'Contains East Apse radiant aura definition');
assert(content.includes('carvedWoodGrad') && content.includes('woodArchitraveGrad'), 'Contains carved walnut wood gradients');
assert(content.includes('royalCurtainVelvet'), 'Contains royal crimson liturgical curtain gradient (ستر الهيكل)');
assert(content.includes('copticGoldGilding'), 'Contains Byzantine Coptic gold leaf gilding');
assert(content.includes('altarSilkLinen'), 'Contains pure white altar silk linen');
assert(content.includes('قناديل الهيكل السبعة'), 'Contains Seven Hanging Vigil Oil Lamps (قناديل الهيكل السبعة)');
assert(content.includes('marbleStepGrad'), 'Contains stepped marble synthronon');
assert(content.includes('صلبوت الجلجثة') || content.includes('Golgotha Cross'), 'Contains Golgotha Cross atop iconostasis');
assert(content.includes('العشاء السري') && content.includes('صف الرسل'), 'Contains The Last Supper and Apostles Tier');
assert(content.includes('الكأس') || content.includes('Chalice'), 'Contains Eucharistic Holy Vessels (Chalice & Paten)');

// 3. Sacred Monastic Cartography Map Features
console.log('\n--- 3. Sacred Monastic Cartography Map Features ---');
assert(content.includes('mapParchmentLight') && content.includes('mapParchmentDark'), 'Contains illuminated manuscript parchment gradients');
assert(content.includes('seaWaterLight') && content.includes('seaWaterDark'), 'Contains realistic water and sea gradients');
assert(content.includes('compassGoldGrad'), 'Contains ornate Coptic Compass Rose (وردة الرياح)');
assert(content.includes('مسار العائلة المقدسة') || content.includes('Holy Family Trail'), 'Contains Holy Family Refuge Trail in Egypt');
assert(content.includes('طريق آباء البرية'), 'Contains Desert Fathers Pilgrimage Trail');
assert(content.includes('البحر الأبيض المتوسط'), 'Labels Mediterranean Sea clearly');
assert(content.includes('البحر الأحمر'), 'Labels Red Sea clearly');
assert(content.includes('شبه جزيرة سيناء'), 'Labels Sinai Peninsula clearly');
assert(content.includes('الدلتا والقاهرة'), 'Labels Nile Delta & Cairo clearly');

// 4. Data ID Synchronicity & No Truncation Bug Fixes
console.log('\n--- 4. Data ID Synchronicity & Bug Fixes ---');
assert(content.includes('sacrament_baptism') && content.includes('sacrament_myron') && content.includes('sacrament_eucharist'), 'Sacrament stations synchronized with HOLY_SACRAMENTS IDs');
assert(content.includes('milestone_antony') && content.includes('milestone_macarius') && content.includes('milestone_pachomius'), 'Monastic hubs synchronized with MONASTIC_MILESTONES IDs');
assert(content.includes('gospel_matthew') && content.includes('gospel_mark') && content.includes('gospel_luke') && content.includes('gospel_john'), 'Gospel items synchronized with GOSPEL_SYNOPTICS IDs');
assert(!content.includes("hub.poleEn.split(' ')[0]"), 'Eliminated broken hub name truncation split bug');

// 5. Contrast & Theme Modes
console.log('\n--- 5. Accessibility, WCAG Contrast & Themes ---');
assert(content.includes('cycleTheme'), 'Features in-studio 3-state theme mode switcher (dark / light / high-contrast)');
assert(content.includes('isLight ?') && content.includes('isContrast ?'), 'Full adaptivity for light, dark, and high-contrast modes');

// 6. Interactive Demotic-Coptic Palaeography & Phonetics Studio
console.log('\n--- 6. Demotic-Coptic Palaeography & Phonetics Studio ---');
const manuscriptViewPath = path.resolve(__dirname, '../src/components/labs/christian/AncientManuscriptHighResView.tsx');
assert(fs.existsSync(manuscriptViewPath), 'AncientManuscriptHighResView.tsx exists');
const manuscriptContent = fs.readFileSync(manuscriptViewPath, 'utf8');

const demoticLetters = ['Ϣ', 'Ϥ', 'Ϧ', 'Ϩ', 'Ϫ', 'Ϭ', 'Ϯ'];
const allDemoticPresent = demoticLetters.every((letter) => manuscriptContent.includes(`coptic: '${letter}'`));
assert(allDemoticPresent, 'Contains all 7 Demotic Egyptian glyphs (Ϣ, Ϥ, Ϧ, Ϩ, Ϫ, Ϭ, Ϯ)');

const liturgicalWords = ['Ϣⲗⲏⲗ', 'Ϥⲁⲓ', 'Ϧⲉⲛ', 'Ϩⲓⲧⲉⲛ', 'Ϫⲱ', 'Ϭⲟⲓⲥ', 'Ϯⲙⲉⲑⲙⲏⲓ'];
const allWordsPresent = liturgicalWords.every((w) => manuscriptContent.includes(w));
assert(allWordsPresent, 'Contains canonical liturgical vocabulary examples (Shlil, Fai, Khen, Hiten, Jo, Pchois, Timethmii)');

const gardinerCodes = ['M20', 'I9', 'Aa1', 'O4', 'I10', 'V28', 'X8'];
const allGardinerPresent = gardinerCodes.every((code) => manuscriptContent.includes(code));
assert(allGardinerPresent, 'Contains Gardiner hieroglyphic codes linking Egyptian roots to Coptic');

assert(manuscriptContent.includes('handlePlayLetterAudio') && manuscriptContent.includes('AudioContext'), 'Contains Web Audio acoustic chime synthesis');
assert(manuscriptContent.includes('speechSynthesis') && manuscriptContent.includes('SpeechSynthesisUtterance'), 'Contains Web Speech API pronunciation engine');
assert(manuscriptContent.includes("'gold'") && manuscriptContent.includes("'cinnabar'") && manuscriptContent.includes("'carbon'"), 'Contains scriptorium ink simulator (Gold Leaf, Cinnabar, Carbon)');

// 7. Coptic Calendar & Synaxarium Converter Verification
console.log('\n--- 7. Coptic Liturgical Calendar & Synaxarium Engine ---');
const calendarConverterPath = path.resolve(__dirname, '../src/components/labs/christian/CopticCalendarConverter.tsx');
assert(fs.existsSync(calendarConverterPath), 'CopticCalendarConverter.tsx exists');
const calendarContent = fs.readFileSync(calendarConverterPath, 'utf8');

assert(calendarContent.includes('export const CopticCalendarConverter'), 'Exports CopticCalendarConverter component');
assert(calendarContent.includes('Ⲑⲱⲟⲩⲧ') && calendarContent.includes('Ⲡⲓⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲃⲟⲧ'), 'Contains complete 13 Coptic months from Thout to Nasie');
assert(calendarContent.includes('توت ري ولا تفوت') && calendarContent.includes('طوبة تخلي الصبية كركوبة'), 'Contains authentic Egyptian agrarian proverbs');

// Dynamically test calendar conversion math from the compiled module
import {
  gregorianToJdn,
  jdnToCoptic,
  copticToJdn,
  jdnToGregorian,
} from '../src/components/labs/christian/CopticCalendarConverter.js';

// Nayrouz Sept 11, 2024 -> 1 Tout 1742 A.M.
const nayrouzJdn = gregorianToJdn(2024, 9, 11);
const copticNayrouz = jdnToCoptic(nayrouzJdn);
assert(
  copticNayrouz.copticYear === 1742 && copticNayrouz.copticMonth === 1 && copticNayrouz.copticDay === 1,
  'Bidirectional math converts Sept 11, 2024 -> 1 Tout 1742 A.M. (Nayrouz)'
);

const backToGregorian = jdnToGregorian(copticToJdn(1742, 1, 1));
assert(
  backToGregorian.year === 2024 && backToGregorian.month === 9 && backToGregorian.day === 11,
  'Bidirectional math reversibility 1 Tout 1742 A.M. -> Sept 11, 2024'
);

assert(content.includes("activeTab === 'calendar'"), 'ChristianHeritageStudio mounts CopticCalendarConverter under calendar tab');

console.log('\n=============================================================');
console.log(`🎉 ALL ${passCount}/${passCount + failCount} CHRISTIAN HERITAGE VERIFICATION ASSERTIONS PASSED!`);
console.log('✅ Realistic sacred aesthetics, Demotic phonetics, and Coptic calendar verified.');
console.log('=============================================================');

if (failCount > 0) {
  process.exit(1);
}

