# AGI Futures - Startup Ideas Library

This repository contains a collection of production-quality, immersive landing page prototypes for speculative AGI-era startup ideas. The core project is built using Next.js (App Router) + TypeScript + Tailwind CSS (v4) + Framer Motion.

Each startup idea gets its own sub-route (e.g. `/murmuration`, `/attune`, `/porchfront`), encapsulating its own aesthetic, components, and assets.

## How to run the library

1. Ensure you have Node.js installed (v18+ recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to swap images

We are currently using the `<ParallaxImage />` component found in `src/components/ui/parallax-image.tsx`.
By default, these components render a beautiful placeholder with your AI Generation prompt.

To swap with a real generated image:
1. Place the generated image in the `public/` directory (e.g., `public/hero-vista.jpg`).
2. Open `src/app/page.tsx` and find the `<ParallaxImage />` components.
3. Pass the `src` prop:
   ```tsx
   <ParallaxImage 
     src="/hero-vista.jpg"
     alt="Description of image"
     prompt="Original prompt used"
   />
   ```

## How to replace the script with another one later

The page logic is intentionally kept simple and unified in `src/app/page.tsx`.
To bring in a different startup script:
1. Open `src/app/page.tsx`.
2. Keep the surrounding `<ScrollReveal>` wrappers, but overwrite the hardcoded text within each block.
3. Keep or adjust the `uppercase tracking-widest text-[var(--primary)] text-xs font-mono` section labels (e.g., "The Problem", "User Wedge").
4. If a script has new stats, you can duplicate or modify the `<StatChart />` or add new `<ExpandableCitation />` blocks next to claims.

## Where the charts source their data from

Various components like `<StatChart />`, `<RelationshipStatGraph />`, and `<LonelinessChart />` are used across the different startup ideas to visualize key data points from actual research papers and studies.
- If you need to visualize new data, you can build custom chart components in the specific startup's `components/` folder or adapt existing generic components if they fit the use case.

## Architecture & Styling

- Layout logic is in `src/app/layout.tsx` (loads `Outfit` sans and `Playfair Display` serif).
- Tailwind setup is completely handled via standard V4 variables mapped in `src/app/globals.css`.
- The main accent color (`--primary`) is a vibrant, luminous emerald green (`#21de9a`), which provides the intended sci-fi glass hologram feel.

## Hand-off Instructions for Other Agents
To integrate a new startup idea (e.g. HomeQuote AI) into this repository:
1. Create a new folder under `src/app/` (e.g. `src/app/homequote/`).
2. Build the route by creating a `page.tsx` within that folder.
3. Place all custom components specific to the new idea in a colocated `components/` folder (e.g. `src/app/homequote/components/`).
4. Place all static assets in a colocated `assets/` folder (e.g. `src/app/homequote/assets/`). Use static imports inside your components (e.g. `import hero from './assets/hero.png'`).
5. Update the main Index Library (`src/app/page.tsx`) to link to your new sub-route.
