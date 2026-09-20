import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import {
  officialBooksList,
  getBookDownloadUrl,
  getOfficialBookById,
  getOfficialBookByBranch,
  getOfficialBooksBySubject,
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

    // Official portal URL check
    assert(
      typeof book.officialPortalUrl === 'string' && book.officialPortalUrl.startsWith('http'),
      `Book [${book.id}] must have officialPortalUrl starting with http, got: ${book.officialPortalUrl}`
    );

    // Metadata checks
    assert(book.chapters && book.chapters.length > 0, `Book [${book.id}] must have chapter list`);
    assert(book.titleEn.length > 0 && book.titleAr.length > 0, `Book [${book.id}] must have bilingual titles`);
    assert(book.code.length > 0, `Book [${book.id}] must have official document code`);
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
