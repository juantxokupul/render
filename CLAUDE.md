# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build (also runs type-checking and lint)
- `npm start` — serve the production build
- `npm run lint` — run ESLint via `next lint`

There is no test suite.

## Architecture

Marketing site for **Villa Nabo**, a Spanish-language grill restaurant. Next.js 15.1 App Router + React 18 + TypeScript. Content is entirely static — no API routes, no data layer, no auth.

### Routing
Each route is a single `page.tsx` under `src/app/`:
- `/` — home (`src/app/page.tsx`)
- `/menu`, `/fiestas`, `/contacto` — linked from `Navbar`
- `/inauguracion` — event landing page, **not** linked from `Navbar` (reach it by direct URL)

`src/app/layout.tsx` is the root layout (sets `<html lang="en">` and global metadata). `globals.css` is imported there.

### Shared components
- `src/components/Navbar.tsx` — `'use client'`; sticky header, hamburger menu state, active-link highlight via `usePathname`. The `links` array here is the source of truth for primary nav.
- `src/components/Footer.tsx` — static footer.

### Styling approach
**Inline `style={{}}` objects for almost all visual styling**, including colors, layout, hover handlers. The brand palette appears throughout as hex literals (no theme tokens):
- `#0f0f0f` / `#1a1a1a` / `#2d1810` — dark backgrounds
- `#d4a574` / `#f5e6d3` — gold/cream brand
- `#ff6b35` / `#a855f7` — accent (fiestas/events)

`src/app/globals.css` is small and intentionally limited to:
1. Responsive **utility classes** used in JSX: `.grid-2col`, `.grid-2col-wide`, `.grid-3col`, `.grid-footer`, `.cta-buttons`, `.section-inner-padded`, `.nav-links`, `.nav-hamburger`.
2. A single `@media (max-width: 768px)` block that collapses all grids to one column and reveals the hamburger menu.

When adding layout, prefer one of the existing grid utility classes over a new inline `grid-template-columns` — otherwise the mobile breakpoint won't collapse it.

### Images
All imagery is local under `public/images/` (filenames are the original Pexels photo IDs, e.g. `/images/4218028.jpg`). Use `next/image` `<Image />` with explicit `width`/`height` and `sizes` — `<img>` triggers the `@next/next/no-img-element` lint rule.

### Path alias
`tsconfig.json` maps `@/*` → `./*` (repo root). Existing imports use the form `@/src/components/Navbar` (note the `src/` segment is part of the import path, not stripped).

### ESLint
Uses the legacy `.eslintrc.json` (`next/core-web-vitals` + `next/typescript`). `eslint` and `eslint-config-next` are pinned to versions compatible with Next 15.1 — do **not** upgrade `eslint-config-next` to 16+ or `eslint` to 9+ without also migrating to flat config (`next lint` will fail with a "Converting circular structure to JSON" error otherwise).
