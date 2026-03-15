# Easy Exit Protocol - Route Documentation

This directory contains the prototype for the "Easy Exit Protocol", an open-source standard and API for machine-verifiable subscription revocation.

## How to run the page
1. Ensure the Next.js server is running (`npm run dev`).
2. Navigate to `/easy-exit` directly or click the "Easy Exit Protocol" card on the homepage (`/`).

## How to swap images
1. Generate or prepare new 2048x2048 PNG images.
2. Replace the corresponding images in the `assets` folder:
    - `easy_exit_hero_...png`
    - `easy_exit_problem_...png`
    - `easy_exit_solution_...png`
    - `easy_exit_market_...png`
    - `easy_exit_impact_...png`
3. Update the imports at the top of `page-client.tsx` to reflect the new filenames.

## Where charts/data visualizations source their data from
- **Neglectedness Slider**: Hardcoded to 58, as explicitly scored in the script. Expandable text matches the script explanation.
- **Valuation Forecast Model**: High-quality structural estimate. The static percentages (12%, 38%, 65%) act as a representative visualization for $1B, $10B, and $50B milestones respectively, mapping probability thresholds over time.
- **Civilizational Impact Scores**: Directly mapped from the script ratings (`Social Trust`: 68, `Freedom`: 58, `Better Governance`: 41, `Differentially Defensive`: 37) and reflected in the global database via `seed_tags.ts`.

## How to replace the script
Currently, the content is baked into the layout blocks inside `page-client.tsx`. To replace it:
1. Open `page-client.tsx`.
2. Find the respective `section` tags (e.g. `Problem`, `Solution Hypothesis`, `Market`).
3. Replace paragraph tags (`<p>`) with new content.
4. If the new script contains custom acronyms or sources to cite, wrap them in `<HoverAcronym>` and `<ExpandableCitation>` components respectively to maintain the UI design.
