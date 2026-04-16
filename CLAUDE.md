# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # ESLint check
```

No test suite is configured.

## Architecture

Single-page React landing site (German-language) for a Basel, Switzerland book collection service. The page is one scrollable document — all sections are rendered in `App.jsx` in order and linked via anchor IDs.

**Tailwind setup:** Uses Tailwind v4 with the `@tailwindcss/vite` plugin (not PostCSS). The config is minimal; custom tokens are NOT yet wired into `tailwind.config.js` — they currently live only in `reference/stitch-export/code.html`.

**MUI is installed** (`@mui/material`, `@mui/icons-material`) but not actively used in current components.

## Component structure

```
src/components/
  sections/        # one folder per page section (Navbar, Startseite, SoHelfenWirIhnen,
  │                #   Abholtermine, UeberUns, Kontakt, Footer)
  │                # HamburgerNavbar lives inside sections/Navbar/
  comon/           # shared/common components (note: typo is intentional, keep it)
                   # WhatsAppButton (inline), WhatsAppFloatingButton (fixed bottom-right)
```

Each component folder exports via its own `index.js`. The top-level `src/components/index.js` re-exports everything for clean imports in `App.jsx`.

## Design reference

`reference/stitch-export/` contains the target redesign:
- `DESIGN.md` — full design system spec ("The Editorial Conservator" theme)
- `code.html` — complete Tailwind config with all design tokens (colors, typography) and a reference HTML implementation

Key design decisions from the spec:
- **Colors:** `primary: #0f5238` (deep forest green), `background: #f9f9f7` (warm off-white)
- **Fonts:** Manrope for headlines, Plus Jakarta Sans for body
- **No borders** for section separation — use background color shifts only
- **Glassmorphism** on the floating WhatsApp button (80% opacity + 24px backdrop-blur)

## WhatsApp number

Hardcoded in two places: `src/components/comon/WhatsAppButton/WhatsAppButton.jsx` and `src/components/comon/WhatsAppFloatingButton/WhatsAppFloatingButton.jsx`. Number: `+41767201353`.

## Active branch

`nextjs-migration` — a Next.js migration is in progress. The `main` branch holds the current Vite/React version.
