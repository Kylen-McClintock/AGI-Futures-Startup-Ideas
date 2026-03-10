# AvatarLab

This directory contains the prototype for the "AvatarLab" startup idea landing page.

## Components
- `page.tsx`: Server component that fetches tag data for "AvatarLab" from Supabase and passes it to the client component.
- `page-client.tsx`: Main client-side implementation of the landing page, built with Tailwind CSS and Framer Motion.
- `components/InteractiveScoreCard.tsx`: Reusable expandable score cards for Moat and Difficulty metrics.

## Running the app
From the root of the AGI Futures Startup Ideas repository:
```bash
npm install
npm run dev
```
Then navigate to `http://localhost:3000/avatarlab` (or whichever local port Next.js uses, e.g. 5000) to view the page.

## Swapping Images
All initial assets are contained within `src/app/avatarlab/assets/`. If you want to change images used on this page:
1. Simply add your new high-resolution (2048x2048 recommended) `.png` or `.jpg` file into the `assets` folder.
2. In `src/app/avatarlab/page-client.tsx`, update the respective `import` statements at the top of the file to point to your new image. Next.js will automatically handle caching and optimization.

## Data Source for Visuals
- The "failure rate" statistic and "digital twin" concepts are drawn directly from the references cited in the script (`[3] Sun, D. et al.` and `[4] Katsoulakis, E. et al.`). 
- The charts and visual elements generated are conceptual representations mapped directly to these themes rather than data-driven code visualizations (to ensure maximum cinematic aesthetic without brittle charting library abstractions).
