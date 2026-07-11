# Project Rules & Guidelines

This file contains workspace-specific guidelines, code styles, and rules that the Antigravity agent should follow when working on the **eegnite** project.

## Technology Stack & Architecture
- **Framework**: Next.js (App Router)
- **Export Mode**: Static HTML export (`output: 'export'` in `next.config.mjs`)
- **Styling**: Tailwind CSS & Vanilla CSS

## SEO & Indexing Rules
- **Staging / Preview**: Staging environment builds should always have indexing disabled (`noindex, nofollow`).
- **Production**: Main domain (`https://www.eegnite.com`) should have indexing enabled (`index, follow`).

## Coding Guidelines
- Maintain component styling using the existing CSS/Tailwind design tokens.
- Ensure all pages are responsive and optimized for mobile viewing.
- Retain existing code comments and SEO configurations unless explicitly requested to update them.

## Deployment Constraints
- **FTP Upload Mode**: The user uploads files directly via FTP using FileZilla. They do NOT have direct hosting control panel access to unzip/extract archives on the server. Do NOT suggest zip uploads or server-side extraction unless explicitly asked.

