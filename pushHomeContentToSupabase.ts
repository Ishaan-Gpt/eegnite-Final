import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const filePath = path.join(__dirname, 'public', 'home.json');
  if (!fs.existsSync(filePath)) {
    console.error('home.json not found at', filePath);
    process.exit(1);
  }
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Upsert into 'homepage' table with slug = 'home'
  const { error } = await supabase
    .from('homepage')
    .upsert([
      {
        slug: 'home',
        content,
        updated_at: new Date().toISOString(),
      },
    ], { onConflict: 'slug' });

  if (error) {
    console.error('Error upserting homepage content:', error);
    process.exit(1);
  }
  console.log('Homepage content pushed to Supabase successfully!');
}

main(); 