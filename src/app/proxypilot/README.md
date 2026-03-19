# ProxyPilot Startup Module

This directory contains the feature colocation codebase for the `ProxyPilot` startup idea prototype.

## Architecture Guidelines
Following the AGI Futures platform rules, this sub-directory is completely self-contained except for deep integration into shared components.
- `page.tsx`: The server-side entry point mapping Supabase data.
- `page-client.tsx`: The interactive UI powered by Framer Motion.
- `components/`: Specific sub-components isolated from the global namespace to prevent pollution.
- `assets/`: Static image imports (processed by Next.js optimization).

## How to Test Locally
1. Start the next dev server: `npm run dev`
2. Navigate to `http://localhost:3000/proxypilot`

## How to Swap Data
- **Forecasting Model Data**: Located in `src/data/forecasts.ts` matching the key `'proxypilot'`.
- **Database/Static Properties**: Initial tag seeding and score assignment (Moat, Difficulty, etc.) can be found in the root `seed_tags.ts`.

## Theming
This page uses `--primary`, `--secondary`, and `--tertiary` hex variables injected at the `<main>` wrapper level. It currently points to the `violet` theme standard in `src/utils/themeMap.ts`. Everything cascading downwards uses these CSS variables for coloring.
