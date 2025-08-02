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
  // 1. Insert or upsert the 'home' page
  const filePath = path.join(process.cwd(), 'public', 'home.json');
  if (!fs.existsSync(filePath)) {
    console.error('home.json not found at', filePath);
    process.exit(1);
  }
  const homeJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Upsert page
  let pageId: string | null = null;
  {
    const { data, error } = await supabase
      .from('pages')
      .upsert({ slug: 'home', title: 'Home' }, { onConflict: 'slug' })
      .select('id')
      .single();
    if (error || !data) {
      console.error('Error upserting page:', error);
      process.exit(1);
    }
    pageId = data.id;
  }

  // 2. Clear all sections and elements for this page (for a clean slate)
  console.log('Clearing old sections and elements for this page...');
  const { data: oldSections } = await supabase.from('sections').select('id').eq('page_id', pageId);
  if (oldSections && oldSections.length > 0) {
    const sectionIds = oldSections.map((s: any) => s.id);
    await supabase.from('elements').delete().in('section_id', sectionIds);
    await supabase.from('sections').delete().in('id', sectionIds);
  }

  // 3. Insert sections and elements for each top-level key
  for (const [sectionType, sectionData] of Object.entries(homeJson)) {
    const sec: any = sectionData;
    let sectionTitle = null;
    let sectionSubtitle = null;
    let meta: any = {};
    let elements: any[] = [];
    let elementType = sectionType;

    // Custom logic for each section type
    if (sectionType === 'hero') {
      // Store titleLines, subtitle, ctaPrimary, ctaSecondary in meta
      meta.titleLines = sec.titleLines || [];
      meta.ctaPrimary = sec.ctaPrimary || null;
      meta.ctaSecondary = sec.ctaSecondary || null;
      sectionSubtitle = sec.subtitle || null;
      // Stats as elements
      if (Array.isArray(sec.stats)) {
        elements = sec.stats;
        elementType = 'hero_stat';
      }
    } else if (sectionType === 'services') {
      elements = Array.isArray(sec) ? sec : [];
      elementType = 'service';
    } else if (sectionType === 'features') {
      elements = Array.isArray(sec) ? sec : [];
      elementType = 'feature';
    } else if (sectionType === 'process') {
      elements = Array.isArray(sec) ? sec : [];
      elementType = 'process_step';
    } else if (sectionType === 'team') {
      // team.members and team.stats
      if (Array.isArray(sec.members)) {
        elements = sec.members.map((m: any) => ({ ...m, _teamType: 'member' }));
      }
      if (Array.isArray(sec.stats)) {
        elements = elements.concat(sec.stats.map((s: any) => ({ ...s, _teamType: 'stat' })));
      }
      elementType = 'team'; // We'll use _teamType in content to distinguish
    } else if (sectionType === 'testimonials') {
      elements = Array.isArray(sec) ? sec : [];
      elementType = 'testimonial';
    } else if (sectionType === 'cta') {
      sectionTitle = sec.title || null;
      sectionSubtitle = sec.subtitle || null;
      meta.primaryCTA = sec.primaryCTA || null;
      meta.secondaryCTA = sec.secondaryCTA || null;
      // trustIndicators as elements
      if (Array.isArray(sec.trustIndicators)) {
        elements = sec.trustIndicators.map((t: any) => ({ text: t }));
        elementType = 'cta_trust_indicator';
      }
    } else if (sectionType === 'velocityScroll') {
      meta.text = sec.text || null;
      elements = [];
    }

    // Insert section
    const { data: sectionRow, error: sectionError } = await supabase
      .from('sections')
      .insert({
        page_id: pageId,
        type: sectionType,
        title: sectionTitle,
        subtitle: sectionSubtitle,
        meta: Object.keys(meta).length > 0 ? meta : null
      })
      .select('id')
      .single();
    if (sectionError || !sectionRow) {
      console.error('Error inserting section:', sectionError);
      continue;
    }
    const sectionId = sectionRow.id;
    // Insert elements for this section
    if (elements.length > 0) {
      console.log(`Inserting ${elements.length} elements for section '${sectionType}'...`);
    }
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      let elType = elementType;
      if (sectionType === 'team') {
        elType = el._teamType === 'member' ? 'team_member' : 'team_stat';
        delete el._teamType;
      }
      const { error: elError } = await supabase
        .from('elements')
        .insert({
          section_id: sectionId,
          type: elType,
          content: el,
          order: i
        });
      if (elError) {
        console.error('Error inserting element:', elError);
      }
    }
  }
  console.log('Homepage content normalized and pushed to Supabase!');
}

main(); 