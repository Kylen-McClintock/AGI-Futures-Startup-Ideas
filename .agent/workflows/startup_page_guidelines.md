---
description: How to style and layout AGI Futures Startup Idea pages and Project Tags
---
# AGI Futures Startup Page Guidelines

When generating or refining a new startup idea prototype in the AGI Futures platform, apply the following rigorous standards to ensure the page feels premium, engaging, and consistent with the established aesthetic.

## 1. Aesthetic & Vibe (Tomorrowland / Retro-Futurism)
- **Visuals**: Maintain a "Tomorrowland at golden hour" or sleek retro-futurism vibe. 
- **Color Palette**: Do not use generic, monochromatic themes (e.g., just `emerald` and `zinc` for everything). Intelligently adapt the primary Tailwind accent colors (e.g., `amber-500` / `stone-900`, `rose-500` / `slate-900`, etc.) to match the specific psychological vibe of the startup.
- **Text Highlighting**: Use the chosen accent colors to dynamically highlight and bold critical sentences or phrases in large text blocks so the narrative "pops."

## 2. Interactive Lists & Grids (Framer Motion)
- **Do not use standard bullet points** for key multi-item sections like the "Product Stack" or "Market Expansion."
- **Interactive Cards**: Build these sections as interactive `framer-motion` cards.
- **Hover States**: Apply subtle hover effects (e.g., `whileHover={{ scale: 1.02, y: -5 }}`) and transitions.
- **Icons**: Every card must feature a contextually relevant icon imported from `lucide-react`.

## 3. Ideal Customer Profile (ICP) Use Cases
- **Visual Value Flows**: The "Specific Example per ICP" section must NEVER be a static block of text.
- **Interactive Component**: ALWAYS build this section as an interactive, multi-tab selector component (reference `src/app/handraise/components/ICPUseCases.tsx`).
- **Stakeholder Flow**: For each use case, include an animated "Value Flow Architecture" graphic that explicitly maps the step-by-step flow between stakeholders (e.g., Founder -> Agent -> Experts -> Founder).
- **Contributor Rewards**: Explicitly include a "Contributor Reward" section at the end of the flow detailing the exact value (e.g., USDC, Reputation points) earned by the participants in the network.

## 4. Civilizational Impact Score Box ("DeepGuide Style")
- Treat the "Civilizational Impact" section as an interactive data visualization.
- Implement the score box using a glass-panel `<details>` HTML tag pattern (as seen in DeepGuide and Main Street Legacy).
- The main visible number summary must be the overall `civilizational_impact_score`.
- When clicked/expanded, it must reveal a cleanly styled list of the specific sub-scores (e.g., Abundance, Human Flourishing, Community Renewal, Resilience).
- **CRITICAL**: The scores must perfectly match the exact values defined for the startup within `seed_tags.ts`.

## Interactivity
- **Scroll Progress**: Every startup idea MUST include the `<ScrollProgress title="Idea Name" theme="emerald" />` component at the top of the `page-client.tsx` main wrapper. The theme color should correspond to the overall color theme of the page.
- **Citations**: Any citations (whether inline `[1]` numbers or the expanded reference list) MUST be fully clickable `<a>` links that navigate to the actual source URL using `target="_blank"` and a `hover:underline` effect.
- **Acronyms**: Any complex, niche, or domain-specific acronyms mentioned in the text (e.g., SaaS, SOP, DSCR, MCP) MUST be wrapped in the `<HoverAcronym acronym="X" definition="Y" />` component to provide inline definitions on hover.

## 5. Explicit & Collapsible Citations
- Always include an explicit **Acronyms & References** section at the very bottom of the page.
- Wrap this entire section in a default-collapsed `<details>` block to save visual space and present a clean end-of-page experience.
- When expanding the references block, format the acronyms as bold keys with lighter text definitions.
- For references/citations, use the exact sources provided in the script, implementing them as clean outbound links (e.g., opening in a new tab `target="_blank"` with a small arrow icon/token `&rarr;`).

## 6. Media Distribution
- Aim for 3-4 distinct images spaced throughout the deeply text-heavy scripts.
- **Hero Image (Top)**: Setting the scene.
- **Contextual Image (Middle)**: Grounding the operational reality or the specific vertical.
- **Thematic Closing (Bottom)**: A strong visual at the bottom of the page to close the narrative out before the references or meta details. 
- Ensure images utilize Next.js `<Image />` component with `fill` and absolute positioning for edge-to-edge or rounded-panel designs.
