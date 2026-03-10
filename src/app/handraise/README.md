# Handraise

## Overview
This is a production-quality Next.js prototype for the AGI Futures "Handraise" startup idea. It functions as a sub-route within the main AGI Futures library.

## How to run
This page relies on the global Next.js configuration of the containing repo.
From the root of `AGI Futures Startup Ideas`:
```bash
npm install
npm run dev -- -p 38472
```
Then visit `http://localhost:38472/handraise`

## How to swap images
All images are statically imported at the top of `src/app/handraise/page-client.tsx`.
They are located in `src/app/handraise/assets/`.
To change an image, replace the PNG file in the assets folder and ensure the filename matches the import in `page-client.tsx`.

## Replacing the script
The content for the page is hardcoded directly into `src/app/handraise/page-client.tsx` to ensure absolute fidelity to the original text.
To swap it out, simply open `page-client.tsx` and replace the text nodes rendering the content. The layout is component-based (Hero, Sections, InteractiveScoreCard) so you can easily adapt the blocks.

## Data sources for styling and charts
- The data visualization images (e.g. `handraise_graph.png`) are conceptual AI-generated visuals reflecting the routing network and decision ecosystem, representing the structural advantage of the Handraise "graph" moat.
- Deep Theming is driven through the `violet` or `indigo` preset from `@/utils/themeMap.ts`.
