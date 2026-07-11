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



