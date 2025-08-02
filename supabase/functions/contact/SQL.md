-- Migration: Create ContactSubmission table for contact form submissions
CREATE TABLE IF NOT EXISTS "ContactSubmission" (
  id serial PRIMARY KEY,
  firstName text NOT NULL,
  lastName text NOT NULL,
  email text NOT NULL,
  company text,
  website text,
  phone text,
  service text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  newsletter boolean NOT NULL,
  createdAt timestamp with time zone DEFAULT timezone('utc'::text, now())
); 

-- Migration: Create Pages, Sections, and Images tables for no-code content editor

-- 1. Pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 2. Sections table
CREATE TABLE IF NOT EXISTS sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  type text NOT NULL, -- e.g., 'hero', 'about', 'services'
  "order" int NOT NULL,
  content jsonb NOT NULL, -- flexible for WYSIWYG, etc.
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 3. Images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt_text text,
  section_id uuid REFERENCES sections(id) ON DELETE CASCADE,
  uploaded_at timestamp with time zone DEFAULT timezone('utc'::text, now())
); 

---

## **Copy and Run This SQL in Supabase SQL Editor**

1. **Go to your Supabase Dashboard → SQL Editor**
2. **Paste and run the following SQL:**

```sql
-- 1. Insert homepage (if not already present)
insert into pages (id, slug, title, created_at)
values (
  gen_random_uuid(),
  'home',
  'Home',
  timezone('utc', now())
)
on conflict (slug) do nothing;

-- 2. Get the homepage id (for use in next inserts)
-- (You can run this as a separate query to get the id)
select id from pages where slug = 'home';

-- 3. Insert sections for homepage (replace <homepage_id> with the id from above)
insert into sections (id, page_id, type, "order", content, updated_at)
values
  (gen_random_uuid(), '<homepage_id>', 'hero', 0, '{"title": "Welcome to My Site", "subtitle": "<p>This is a subtitle</p>", "bgImage": ""}', timezone('utc', now())),
  (gen_random_uuid(), '<homepage_id>', 'about', 1, '{"title": "About Us", "description": "<p>We are awesome!</p>"}', timezone('utc', now())),
  (gen_random_uuid(), '<homepage_id>', 'services', 2, '{"services": [{"title": "Consulting", "description": "Expert advice"}, {"title": "Development", "description": "We build things"}]}', timezone('utc', now()));
```

**Instructions:**
- Run the first block to create the homepage if it doesn’t exist.
- Run the `select id from pages where slug = 'home';` query and copy the resulting id.
- Replace `<homepage_id>` in the third block with the actual id you copied.
- Run the third block to insert the sections.

---

## **After Running the SQL**

- Go back to your Admin Dashboard’s Editor tab and refresh.
- You should now see the homepage and its sections ready to edit.

---

**If you want this automated in a script or want to add more sections, let me know!** 