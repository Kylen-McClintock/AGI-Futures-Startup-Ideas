# Murmuration Engine - Landing Page Prototype

This is a single production-quality webpage in Next.js + TypeScript + Tailwind CSS (v4) + Framer Motion that renders the startup idea script for "Murmuration Engine" as an immersive editorial landing page.

It uses a "Tomorrowland / Retro-Futurist" aesthetic: highly detailed, luminous, and optimistic, favoring lush, nature-filled sci-fi rather than cyberpunk grime.

## How to run the page

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

The main `<StatChart />` visualizes the adoption vs impact gap mentioned in the script:
- **78% organizations use AI vs <20% report tangible earnings impact.**
- Source: *McKinsey: The state of AI: How organizations are rewiring to capture value.* (This data point specifically matches the structural framing the script used).
- If you need to visualize new data, the chart component is found at `src/components/charts/stat-chart.tsx` and can easily be adapted as a generic dual-bar or ring progress component.

## Architecture & Styling

- Layout logic is in `src/app/layout.tsx` (loads `Outfit` sans and `Playfair Display` serif).
- Tailwind setup is completely handled via standard V4 variables mapped in `src/app/globals.css`.
- The main accent color (`--primary`) is a vibrant, luminous emerald green (`#21de9a`), which provides the intended sci-fi glass hologram feel.
