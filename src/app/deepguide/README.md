# DeepGuide Prototype

## How to run the page
1. Ensure your local Supabase database is reachable and seeded so the tags load. Start by running:
   ```bash
   npx ts-node seed_tags.ts
   ```
   *(Or however your project's local seed script is configured).*
2. Start the local Next.js development server:
   ```bash
   npm run dev
   ```
3. Navigate to `http://localhost:3000/deepguide` in your browser.

## How to swap images
1. Navigate to `src/app/deepguide/assets/`.
2. Replace any of the `.png` files:
   - `deepguide_hero.png`
   - `deepguide_modality_graph.png`
   - `deepguide_safety_dashboard.png`
   - `deepguide_clinical_training.png`
3. Optional: if you use new filenames, update the `import` statements at the top of `src/app/deepguide/page-client.tsx`.

## How to replace the script
1. All wording is statically located within `src/app/deepguide/page-client.tsx`.
2. Open that file and locate the specific text blocks to update paragraphs. 
3. Expandable citations use the `<ExpandableCitation />` component inline. Update the `label`, `sourceUrl`, and `sourceText` props.
4. If tags, bottlenecks, or moat scores change, update your `seed_tags.ts` accordingly and re-seed the environment.

## Where charts source their data
1. **ShortageChart (`src/app/deepguide/components/ShortageChart.tsx`)**: 
   - The ring chart visually calculates 127.4 million US citizens out of an approximate 330 million US population total (~38.6%).
   - Source cited: [HRSA Designated Health Professional Shortage Areas](https://data.hrsa.gov/default/generatehpsaquarterlyreport) as of Oct 2025.
