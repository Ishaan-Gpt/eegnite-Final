# Project Rules & Guidelines

This file contains workspace-specific guidelines, code styles, and rules that the Antigravity agent should follow when working on the **eegnite** project.

## Technology Stack & Architecture
- **Framework**: Next.js (App Router)
- **Export Mode**: Static HTML export (`output: 'export'` in `next.config.mjs`)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Icons**: Avoid using `lucide-react` icons for new components to keep bundle size lightweight. Use custom inline SVGs instead, matching the project's styling tokens.

## SEO & Indexing Rules
- **Staging / Preview**: Staging environment builds should always have indexing disabled (`noindex, nofollow`).
- **Production**: Main domain (`https://www.eegnite.com`) should have indexing enabled (`index, follow`).
- **Automatic Sitemap Updates**: When creating, modifying, or deleting pages, routes, or blog posts, always update `src/app/sitemap.ts` (and rebuild the static export to regenerate `out/sitemap.xml` if a build is run) with the new canonical paths immediately, without requiring explicit instructions from the user.

## Design & Color Guidelines
- **Palette**: Strictly adhere to the brand palette of white (`#FFFFFF` / `#FFFEF8`), muted-white (`#F5F3EE`), deep-white (`#EAE7E0`), black (`#000000`), and orange (`#FF6105` / `#E86A00`). Do not introduce generic primary colors.

## Page Creation Workflow
- **Sister Page Layout Check**: When creating a new page (e.g. a local page like `/kolkata`), always check its global or sister counterpart page first (e.g. `/industries` or `/services`). 
  - If components can be borrowed, they must be borrowed and reused.
  - If not, check if any other shared component fits the new content and aesthetics.
  - If no shared component matches, create a custom component modeled on the existing codebase styles.
  - Do not blindly reuse a shared component if it doesn't fit the content or spacing context.

## Coding Guidelines
- Maintain component styling using the existing CSS/Tailwind design tokens.
- Ensure all pages are responsive and optimized for mobile viewing.
- Retain existing code comments and SEO configurations unless explicitly requested to update them.

## Deployment Constraints
- **FTP Upload Mode**: The user uploads files directly via FTP using FileZilla. They do NOT have direct hosting control panel access to unzip/extract archives on the server. Do NOT suggest zip uploads or server-side extraction unless explicitly asked.

## Temporary Files & Scratch Space
- **Directory**: Store all temporary files, scratch scripts, testing logs, or temporary code helpers in the `temp_scratch/` directory at the project root. Never write temporary helper files directly to the root folder or other source folders.

## Build & Push Rules
- **Development Server Verification**: When verifying code changes, do not run `npm run build`. Instead, check the output using the local Next.js development server. If the server (`npm run dev`) is already running, simply save your code changes and let the hot-reload mechanism build them. Only launch `npm run dev` if the server is not already active.
- **Git Push Restraint**: Only commit changes locally. Never run `git push` or push code to remote branches/repositories unless the user explicitly instructs you to do so.

## Design Symmetry & Finesse Rules
- **Grid Layout Symmetry**: Always check grid structures for visual balance and symmetry. Never render grids containing orphan elements (e.g. 5 items in a 4-column layout leaving a single item on the bottom row). Centering or grouping elements into balanced flex boxes or grid splits (e.g., 3 + 2 layout) must be implemented instead.
- **Heading Wrapping Constraints**: Ensure headings are never choked by narrow container max-widths (like `max-w-3xl` for large text elements). Ensure headings wrap cleanly and naturally (2 lines on desktop instead of forcing 3 lines).
- **Hero Title Wrapping Limit**: Ensure the Hero title occupies a maximum of 3 lines on desktop and 3-4 lines on mobile. Scale font sizes (e.g. `xl:text-5xl` or `xl:text-6xl`) and use responsive `<br className="hidden md:inline" />` tags to achieve this cleanly.
- **One-Line Subtext Constraints**: Ensure short subtext headers or uppercase category descriptors occupy exactly 1 line on desktop (use `md:whitespace-nowrap` if necessary).
- **Non-Overlapping Sticky Layouts**: Never place headers with absolute coordinates inside sticky scrolling sections. Use relative vertical flex structures (`flex flex-col justify-between h-screen py-16`) to dynamically distribute elements and completely prevent overlap on smaller screen heights.
- **No Grey Backgrounds**: Avoid using grey or muted-grey backgrounds (e.g., `#F5F3EE`, `#FAFAFA`, `#F9F9F9`) for large visual section containers. Use white (`#FFFFFF` / `#FFFEF8`) or glassy semi-transparent white on clean layouts instead.
- **Glassmorphism Styling**: When requested, implement glassy card styles using semitransparent white (`bg-white/80` or `bg-white/60`), `backdrop-blur-md`, subtle thin borders (`border-black/5`), and light background blur circles.

## Content Fidelity (100% Copy Retention)
- **100% Word Retention**: Use 100% of the text content provided in the source Google Docs. No summaries, omissions, or text merging to fit components is permitted. Choose or customize components that expand dynamically to accept the full text copy exactly as written.
- **Verbatim List Labels**: Always check that list category labels (e.g., `B2B & Lead Generation`, `Medical & Healthcare`) match the original document capitalization and symbol usage exactly.





