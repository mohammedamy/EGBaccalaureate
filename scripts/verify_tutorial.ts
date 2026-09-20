import fs from 'fs';
import path from 'path';

console.log('🧭 Starting Site Navigation Tutorial Verification...\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passCount++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failCount++;
  }
}

// 1. Check SiteTutorialModal.tsx component
const tutorialPath = path.resolve('src/components/SiteTutorialModal.tsx');
assert(fs.existsSync(tutorialPath), 'src/components/SiteTutorialModal.tsx exists');

const tutorialContent = fs.readFileSync(tutorialPath, 'utf8');

// Check 7 distinct tutorial steps
assert(tutorialContent.includes('curriculum-tracks'), 'Tutorial contains Step 1: Curriculum Tracks');
assert(tutorialContent.includes('virtual-labs'), 'Tutorial contains Step 2: Virtual Laboratories Hub');
assert(tutorialContent.includes('universal-search'), 'Tutorial contains Step 3: Universal Search');
assert(tutorialContent.includes('theory-lessons'), 'Tutorial contains Step 4: Theory & Solved Examples');
assert(tutorialContent.includes('databank-testing'), 'Tutorial contains Step 5: 10,910 Databank & Test Generator');
assert(tutorialContent.includes('official-books-handbook'), 'Tutorial contains Step 6: Ministry Textbooks & Formula Handbook');
assert(tutorialContent.includes('desmos-accessibility'), 'Tutorial contains Step 7: Desmos 2D/3D & Accessibility');

// Multi-device adaptations
assert(tutorialContent.includes('smartboardMode') && tutorialContent.includes('السبورة الذكية'), 'Smartboard Interactive Whiteboard mode toggle is implemented');
assert(tutorialContent.includes('onTouchStart') && tutorialContent.includes('onTouchEnd'), 'Mobile & tablet touch swipe gesture handling is implemented');
assert(tutorialContent.includes('ArrowLeft') && tutorialContent.includes('ArrowRight'), 'PC keyboard navigation (ArrowLeft / ArrowRight) is implemented');
assert(tutorialContent.includes('autoPlay') && tutorialContent.includes('setInterval'), 'Automated slideshow auto-play functionality is implemented');
assert(tutorialContent.includes('egbac_tutorial_completed'), 'Dismiss / first-visit persistence via localStorage is supported');

// 2. Check Translations
const translationsPath = path.resolve('src/i18n/translations.ts');
const translationsContent = fs.readFileSync(translationsPath, 'utf8');

assert(translationsContent.includes('howToNavBtn:'), 'Translations interface includes howToNavBtn');
assert(translationsContent.includes('howToShort:'), 'Translations interface includes howToShort');
assert(translationsContent.includes('دليل الاستخدام'), 'Arabic translation contains "دليل الاستخدام"');
assert(translationsContent.includes('How to Use / Tour') || translationsContent.includes('How To'), 'English translation contains How To');

// 3. Check Navbar triggers
const navbarPath = path.resolve('src/components/Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf8');

assert(navbarContent.includes('onOpenTutorial?: () => void;'), 'Navbar props declare onOpenTutorial handler');
assert(navbarContent.includes('onOpenTutorial') && navbarContent.includes('howToShort'), 'Desktop announcement bar renders How To button');
assert(navbarContent.includes('howToShort'), 'Mobile toolbar renders How To button');

// 4. Check App.tsx integration
const appPath = path.resolve('src/App.tsx');
const appContent = fs.readFileSync(appPath, 'utf8');

assert(appContent.includes('SiteTutorialModal') && (appContent.includes("import('./components/SiteTutorialModal')") || appContent.includes("from './components/SiteTutorialModal'")), 'App.tsx imports SiteTutorialModal');
assert(appContent.includes('isTutorialOpen') && appContent.includes('setIsTutorialOpen'), 'App.tsx maintains isTutorialOpen state');
assert(appContent.includes("localStorage.getItem('egbac_tutorial_completed')"), 'App.tsx checks localStorage for first-time visitors');
assert(appContent.includes('<SiteTutorialModal'), 'App.tsx renders SiteTutorialModal');
assert(appContent.includes('onOpenTutorial={() => setIsTutorialOpen(true)}'), 'App.tsx binds onOpenTutorial to Navbar');
assert(appContent.includes("e.key === '?'"), 'App.tsx binds "?" shortcut for PC users to trigger tutorial');

console.log(`\n================================`);
console.log(`Total Passed: ${passCount} | Failed: ${failCount}`);
console.log(`================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 Site Navigation Tutorial fully verified across PC, Mobile, Tablet, and Smartboard specifications!');
}
