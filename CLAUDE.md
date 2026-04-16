# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Next.js dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build locally
npm run lint     # ESLint check
```

No test suite is configured.

## Project context

German-language landing site for a Basel, Switzerland book collection service ("Gratis Bücher Abholung"). Operated by a small family business. Primary audience is 60+ German-speaking Swiss residents, with a mixed younger audience as well.

**Branch layout:**
- `main` — live Vite+React site on Netlify (do not touch)
- `nextjs-migration` — this branch; Next.js 14 rewrite targeting Vercel

**Old Vite source** is preserved in `old-vite/` for reference only. Do not edit it.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (PostCSS setup, `tailwind.config.ts`)
- `next/font/google` for fonts (Lora + Inter — no external CDN requests)

## Architecture

Single-page site. All page sections live in `src/app/page.tsx` (or imported as components). Navigation uses anchor links (`#section-id`). No client-side routing needed.

**Planned `src/` structure:**
```
src/
  app/
    layout.tsx          # root layout: fonts, metadata, lang="de"
    page.tsx            # home page, composes all sections
    globals.css         # @tailwind directives + heading font rule
  components/
    sections/           # one component per page section
    ui/                 # shared primitives (buttons, badges, etc.)
```

## Design system

Reference files in `reference/stitch-export/`:
- `DESIGN.md` — design principles ("The Editorial Conservator")
- `code.html` — original Stitch export with full reference implementation

**Active token decisions (override anything in code.html):**
- Primary: `#0f5238` (forest green)
- Background: `#f9f9f7` (warm off-white)
- Heading font: **Lora** (serif) — warm, bookish, accessible for older audience
- Body font: **Inter** (sans-serif) — maximum screen readability
- Min font size: 16px (`text-base`)

**All color tokens** are in `tailwind.config.ts` as named classes:
`primary`, `secondary`, `surface`, `surface-container-low`, `on-surface`, `outline-variant`, etc.
Use these class names — never raw hex values in components.

**Design rules (from DESIGN.md):**
- No 1px borders for section separation — use background color shifts (`surface-container-low` vs `surface`)
- Shadows: use `on-surface` at low opacity (6%), blur 32–48px — never pure black
- WhatsApp floating button: glassmorphism (`surface-container-lowest/80 backdrop-blur-lg`)
- Heading tracking: `-0.02em` (tight)
- Buttons: `rounded-xl` (1.5rem), generous horizontal padding

## Key content

- **WhatsApp number:** `+41767201353` (wa.me/41767201353)
- **Service areas:** Montag → Aargau/Solothurn, Dienstag → Basel/Baselland, Mittwoch → Zürich, Donnerstag → Zürich, Freitag → Basel/Baselland
- **Legal pages required:** Impressum, Datenschutz (DSG), AGB — content pending from client

## Page sections (in order)

1. Navbar
2. Hero (Startseite)
3. So helfen wir Ihnen (3-step process)
4. Abholtermine (pickup schedule by day)
5. Zahlen (stats — placeholder until client provides real numbers)
6. Über uns / Hallo ich bin Kamil (real photo pending)
7. Kundenstimmen (testimonials — placeholder)
8. Kontakt (map + contact info)
9. Footer (Impressum, Datenschutz, AGB links)
