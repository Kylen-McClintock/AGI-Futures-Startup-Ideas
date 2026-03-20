# thoughtline_readme.md

## Running the Thoughtline Page
1. Change into the `AGI Futures Startup Ideas` directory if not already there:
   `cd "AGI Futures Startup Ideas"`
2. Start the development server (e.g. on port 3000):
   `npm run dev`
3. Open `http://localhost:3000/thoughtline` in your local browser to view the prototype. You can also view the new project card at the bottom of the home page at `http://localhost:3000/`.

## Swapping Images
Inside `src/app/thoughtline/page-client.tsx`, 5 absolute path image imports dictate the layout visuals. 
All assets are colocated in `src/app/thoughtline/assets/`. To swap an image, either:
1. Replace the actual `.png` file inside the `assets` root folder with the same name.
2. Add your new image to the `assets` folder, then change the import variable references at the top of `page-client.tsx` (e.g., `import heroImage from './assets/new_hero.png'`).

## Replacing the Script
The text directly matches the prompt's provided outline, including embedded `ExpandableCitation` blocks for bracketed sources. 
Should the script evolve, locate the relevant `motion.section` inside `src/app/thoughtline/page-client.tsx` and substitute the paragraph text between the HTML tags. 
Wait for the HMR fast-refresh to verify alignment and typography.

## Chart Data Sources
1. The **Valuation Forecast Chart** automatically ingests your current system-wide probability model distributions provided under the `thoughtline` key in your Next.js application's global forecast object. 
2. The **Neglectedness Slider** data and parameters are passed explicitly as React props directly into the `<NeglectednessSlider score={88} interpretation="..." />` within `page-client.tsx`.
3. The **Evaluation Metrics** component (Moat and Difficulty Score) renders statically and dynamically via `app/page.tsx` fallback data injections mapping into `fallbackData` based off your explicit scoring metric inputs.
