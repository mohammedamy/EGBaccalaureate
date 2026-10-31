import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envLocalPath = path.join(rootDir, '.env.local');
const SUPABASE_URL = 'https://drhrrhvdeizusjzjjhos.supabase.co';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n=== EGBaccalaureate — Step 2 (.env.local Setup) ===');
rl.question('\nPaste your Supabase Publishable Key (starts with sb_publishable_) and press Enter:\n> ', (answer) => {
  const key = answer.trim();
  rl.close();

  if (!key) {
    console.error('\n❌ No key pasted. Please run the command again and paste your key.');
    process.exit(1);
  }

  if (key.startsWith('sb_secret_')) {
    console.error('\n❌ That is a Secret key (sb_secret_...). Please copy the Publishable key (sb_publishable_...) instead!');
    process.exit(1);
  }

  const content = [
    '# Local Supabase public keys for EGBaccalaureate (gitignored)',
    `VITE_SUPABASE_URL=${SUPABASE_URL}`,
    `VITE_SUPABASE_PUBLISHABLE_KEY=${key}`,
    '',
  ].join('\n');

  fs.writeFileSync(envLocalPath, content, 'utf-8');
  console.log('\n✅ Successfully saved VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to .env.local\n');
});

