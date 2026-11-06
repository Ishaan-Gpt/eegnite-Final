# EEGNITE website

Marketing site for EEGNITE (www.eegnite.com), a digital marketing agency in Kolkata. Next.js App Router,
built as a static HTML export (`out/`) and uploaded to hosting over FTP.

The team's project rules live in `.agents/AGENTS.md` (shared with other coding agents) and are imported here,
so edit them there, not in this file.

@.agents/AGENTS.md

When designing, creating or changing a page layout, also follow the finesse rules:

@.agents/skills/finesse/SKILL.md

## Setup

```bash
npm install --legacy-peer-deps   # peer-dep conflicts otherwise; same flag as vercel.json
cp .env.example .env.local       # then fill in the Firebase values (ask a teammate, never commit them)
npm run dev                      # http://localhost:3000
```

## Map

- `src/app/` - routes. Service pages under `services/`, local cluster under `digital-marketing-agency-kolkata/`,
  regional hubs `qatar/` and `bahrain/`, `sitemap.ts` must list every canonical path.
- `src/components/page-content/` - the body of each page; `shared/` holds sections reused across pages,
  `ui/` holds primitives.
- `src/data/` - per-industry / per-service copy as typed data files.
- `src/components/JsonLd.tsx` - organisation and local-business schema (address, phone); keep in sync with the
  footer.
- `src/lib/firebase*.ts` - contact and newsletter form submissions.
- `websites/<slug>/` - standalone sample client sites. `npm run build:samples` builds them into
  `public/samples/` (gitignored); never edit `public/samples/` directly.
- `public/images/services/` - page imagery, WebP only.

## Commands

- `npm run dev` - verify changes here (see the build rule in AGENTS.md).
- `npm run build` - samples + static export into `out/`, only when preparing an upload.
- `npm run build:site-only` - static export without rebuilding the samples.

Deploys are automatic: push to `staging` for the staging subdomain, `main` for the live site. See
`docs/DEPLOY.md`.

`next.config.mjs` ignores TypeScript and ESLint errors during build, so a passing build does not mean the code
type-checks. Run `npx tsc --noEmit` when you touch types.
