import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import {
  officialBooksList,
  getFullTextbookDownloadUrl,
  getFullTextbookPreviewUrl,
  getCompendiumDownloadUrl,
  getBookDownloadUrl,
  getBookGithubUrl,
  GITHUB_BOOKS_RAW_BASE,
  getOfficialBookById,
  getOfficialBookByBranch,
  getOfficialBooksBySubject,
  hasEnglishEdition,
  getFullTextbookEnglishDownloadUrl,
  getFullTextbookEnglishPreviewUrl,
  getCompendiumEnglishDownloadUrl,
} from '../src/data/officialBooksData.js';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData.js';
import { egBacCurriculum } from '../src/data/egBacData.js';

let passedChecks = 0;
let failedChecks = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passedChecks++;
  } else {
    failedChecks++;
    console.error(`❌ FAILED: ${message}`);
  }
}

async function runVerification() {
  console.log('================================================================');
  console.log('🏛️ VERIFYING ALL OFFICIAL MINISTRY BOOKS & DOWNLOAD LINKS');
  console.log('================================================================\n');

  // 1. Total Catalog Count Check
  assert(
    officialBooksList.length === 69,
    `Expected exactly 69 official books, found ${officialBooksList.length}`
  );

  const booksDir = path.resolve(process.cwd(), 'public/books');
  assert(fs.existsSync(booksDir), `Directory public/books must exist`);

  // 2. Individual Book Verification
  for (const book of officialBooksList) {
    const filePath = path.join(booksDir, book.filename);
    const fileExists = fs.existsSync(filePath);
    assert(fileExists, `Book [${book.id}] file must exist at public/books/${book.filename}`);

    if (fileExists) {
      const buffer = fs.readFileSync(filePath);
      assert(buffer.length > 5000, `Book [${book.id}] file size must be > 5KB (actual: ${buffer.length} bytes)`);

      try {
        const doc = await PDFDocument.load(buffer);
        const pageCount = doc.getPageCount();
        assert(
          pageCount >= 7,
          `Book [${book.id}] (${book.filename}) must have >= 7 pages (actual: ${pageCount})`
        );
      } catch (err: any) {
        assert(false, `Book [${book.id}] PDF failed to load: ${err.message}`);
      }
    }

    // Download URL integrity
    const downloadUrl = getBookDownloadUrl(book);
    assert(
      typeof downloadUrl === 'string' && downloadUrl.length > 0 && downloadUrl.includes(book.filename),
      `Book [${book.id}] getBookDownloadUrl must return valid string containing filename, got: ${downloadUrl}`
    );

    // Compendium Download URL integrity
    const compendiumUrl = getCompendiumDownloadUrl(book);
    assert(
      typeof compendiumUrl === 'string' && compendiumUrl.length > 0 && compendiumUrl.includes(book.filename),
      `Book [${book.id}] getCompendiumDownloadUrl must return valid string containing filename, got: ${compendiumUrl}`
    );

    // Full Textbook Direct Download URL integrity (~20MB anti-403)
    const fullDownloadUrl = getFullTextbookDownloadUrl(book);
    assert(
      typeof fullDownloadUrl === 'string' && fullDownloadUrl.startsWith('http'),
      `Book [${book.id}] getFullTextbookDownloadUrl must return valid http(s) URL, got: ${fullDownloadUrl}`
    );

    // Full Textbook Online Preview URL integrity
    const fullPreviewUrl = getFullTextbookPreviewUrl(book);
    assert(
      typeof fullPreviewUrl === 'string' && fullPreviewUrl.startsWith('http'),
      `Book [${book.id}] getFullTextbookPreviewUrl must return valid http(s) URL, got: ${fullPreviewUrl}`
    );

    // GitHub Mirror URL integrity
    const githubUrl = getBookGithubUrl(book);
    assert(
      typeof githubUrl === 'string' &&
        githubUrl.startsWith(GITHUB_BOOKS_RAW_BASE) &&
        githubUrl.endsWith(book.filename),
      `Book [${book.id}] getBookGithubUrl must return valid GitHub raw URL ending with ${book.filename}, got: ${githubUrl}`
    );

    // Official portal URL check
    assert(
      typeof book.officialPortalUrl === 'string' && book.officialPortalUrl.startsWith('http'),
      `Book [${book.id}] must have officialPortalUrl starting with http, got: ${book.officialPortalUrl}`
    );

    // Full Textbook size & pages checks
    assert(book.fullTextbookPages >= 50, `Book [${book.id}] fullTextbookPages must be >= 50, got: ${book.fullTextbookPages}`);
    assert(typeof book.fullTextbookSize === 'string' && book.fullTextbookSize.includes('MB'), `Book [${book.id}] fullTextbookSize must specify MB, got: ${book.fullTextbookSize}`);

    // Metadata checks
    assert(book.chapters && book.chapters.length > 0, `Book [${book.id}] must have chapter list`);
    assert(book.titleEn.length > 0 && book.titleAr.length > 0, `Book [${book.id}] must have bilingual titles`);
    assert(book.code.length > 0, `Book [${book.id}] must have official document code`);

    // English Edition Verification
    if (hasEnglishEdition(book)) {
      if (book.englishEdition) {
        assert(
          book.englishEdition.titleEn.length > 0 && book.englishEdition.titleAr.length > 0,
          `Book [${book.id}] English edition must have bilingual titles`
        );
        assert(
          book.englishEdition.fullTextbookPagesEn >= 50,
          `Book [${book.id}] English edition fullTextbookPagesEn must be >= 50, got: ${book.englishEdition.fullTextbookPagesEn}`
        );
        assert(
          book.englishEdition.fullTextbookSizeEn.includes('MB'),
          `Book [${book.id}] English edition fullTextbookSizeEn must specify MB, got: ${book.englishEdition.fullTextbookSizeEn}`
        );

        // Compendium file check
        const enFilePath = path.join(booksDir, book.englishEdition.filenameEn);
        const enFileExists = fs.existsSync(enFilePath);
        assert(enFileExists, `English compendium file for [${book.id}] must exist at public/books/${book.englishEdition.filenameEn}`);
        if (enFileExists) {
          const docEn = await PDFDocument.load(fs.readFileSync(enFilePath));
          assert(
            docEn.getPageCount() >= 7,
            `English compendium for [${book.id}] must have >= 7 pages, got ${docEn.getPageCount()}`
          );
        }

        // Compendium download URL
        const compendiumEnUrl = getCompendiumEnglishDownloadUrl(book);
        assert(
          compendiumEnUrl.includes(book.englishEdition.filenameEn),
          `Book [${book.id}] getCompendiumEnglishDownloadUrl must contain filenameEn, got: ${compendiumEnUrl}`
        );
      }

      // Full English download URL
      const fullEnDownloadUrl = getFullTextbookEnglishDownloadUrl(book);
      assert(
        typeof fullEnDownloadUrl === 'string' && fullEnDownloadUrl.startsWith('http'),
        `Book [${book.id}] getFullTextbookEnglishDownloadUrl must return valid http URL, got: ${fullEnDownloadUrl}`
      );

      // Full English preview URL
      const fullEnPreviewUrl = getFullTextbookEnglishPreviewUrl(book);
      assert(
        typeof fullEnPreviewUrl === 'string' && fullEnPreviewUrl.startsWith('http'),
        `Book [${book.id}] getFullTextbookEnglishPreviewUrl must return valid http URL, got: ${fullEnPreviewUrl}`
      );
    }
  }

  // 3. Branch Mapping Coverage Check
  console.log('\n--- Checking branch coverage for Thanaweya branches ---');
  for (const branch of thanaweyaCurriculum.branches) {
    const book = getOfficialBookByBranch(branch.id);
    assert(
      book !== undefined,
      `Thanaweya branch [${branch.id}] must map to an official book via getOfficialBookByBranch`
    );
  }

  console.log('\n--- Checking branch coverage for EG-Bac branches ---');
  for (const branch of egBacCurriculum.branches) {
    const book = getOfficialBookByBranch(branch.id);
    assert(
      book !== undefined,
      `EG-Bac branch [${branch.id}] must map to an official book via getOfficialBookByBranch`
    );
  }

  // 4. Subject Query Check
  const subjects: Array<Parameters<typeof getOfficialBooksBySubject>[0]> = [
    'mathematics',
    'physics',
    'chemistry',
    'biology',
    'geology',
    'arabic',
    'english',
    'french',
    'german',
    'italian',
    'spanish',
    'chinese',
    'history',
    'geography',
    'philosophy',
    'psychology',
    'economics_stat',
    'cs_informatics',
    'earth_space',
    'civics',
    'religious_education',
    'business_entrepreneurship',
    'fine_arts_architecture',
    'music_theory',
    'agriculture',
    'industrial',
    'commercial',
    'tourism',
    'renewable',
  ];

  for (const s of subjects) {
    const books = getOfficialBooksBySubject(s);
    assert(books.length >= 1, `Subject [${s}] must return at least 1 official book, got ${books.length}`);
  }

  // 5. English Edition Coverage for Mathematics & Science
  console.log('\n--- Checking English Edition coverage for Math & Science ---');
  const requiredEnglishBookIds = [
    'th-alg-sol-g12',
    'th-calc-g12',
    'th-stat-g12',
    'th-dyn-g12',
    'th-phys-g12',
    'th-chem-g12',
    'th-bio-g12',
    'th-geology-g12',
    'th-econ-stat-g12',
    'egbac-disc-adv',
    'egbac-ana-adv',
    'egbac-mech-adv',
    'egbac-phys-adv',
    'egbac-chem-adv',
    'egbac-bio-adv',
    'egbac-geology-g12',
  ];

  for (const id of requiredEnglishBookIds) {
    const b = getOfficialBookById(id);
    assert(b !== undefined, `Required English edition book [${id}] must exist in catalog`);
    if (b) {
      assert(
        hasEnglishEdition(b),
        `Book [${id}] must have hasEnglishEdition === true`
      );
    }
  }

  console.log('\n================================================================');
  console.log(`🎯 TOTAL PASSED: ${passedChecks}`);
  console.log(`❌ TOTAL FAILED: ${failedChecks}`);
  console.log('================================================================');

  if (failedChecks > 0) {
    process.exit(1);
  } else {
    console.log('✨ ALL 69 OFFICIAL BOOKS & DOWNLOAD LINKS VERIFIED SUCCESSFULLY (100% PASS)!');
  }
}

runVerification().catch((err) => {
  console.error('Fatal error during verification:', err);
  process.exit(1);
});
