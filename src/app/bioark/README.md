# BioArk Startup Idea

This directory contains the implementation for the "BioArk | Proof-of-Impact Funding for Species Recovery" startup idea.

## How to Run
This is part of the AGI Futures Next.js app.
1. Make sure you are in the project root: `cd "AGI Futures Startup Ideas"`
2. Run the development server: `npm run dev`
3. Navigate to `http://localhost:3000/bioark` in your browser.

## Swapping Images
All assets are located in `src/app/bioark/assets/`. If you want to change an image, simply replace the file with a new image using the same filename, or update the imports at the top of `src/app/bioark/page-client.tsx`.
Current images:
- `hero.png`: Top large terrarium image in the header.
- `trust_graph.png`: Used in the "Solution Hypothesis" section.
- (And other generated images are stored but only these two are currently actively placed; the rest are available as alternatives)

## Replacing the Script
The text matches the original script exactly. If you need to edit the script, open `src/app/bioark/page-client.tsx` and find the relevant section (e.g., Problem, Solution Hypothesis). The copy is interwoven with TSX elements and Tailwind classes.

## Chart Data / Dynamic Scores
- The page fetches scores from the Supabase `project_tags` table.
- If you need to edit the Civilizational Impact, Moat, Difficulty, or Neglectedness scores, please update `seed_tags.ts` in the root and run `npx tsx seed_tags.ts`. It will sync to Supabase.
- Alternatively, you can edit the hardcoded fallback dictionaries in `src/app/page.tsx` and the `tags` fallback in `src/app/bioark/page-client.tsx`.
