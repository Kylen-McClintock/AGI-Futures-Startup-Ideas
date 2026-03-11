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
- **Data Structure**: Use an array of objects to define the tabs, where each object contains an `id`, `title`, `icon` (from Lucide), `text` (JSX), an array of `flow` steps, and a `reward` object.
- **Tab Layout**: Render the tabs as a horizontal flex list of buttons. The active button should be styled with the `--primary` color, a subtle background tint (`bg-[var(--primary)]/20`), and a glow effect (`shadow-[var(--primary)]/20`). Inactive buttons should be dimmed (`text-slate-400`).
- **Stakeholder Flow**: For each use case, include an animated "Value Flow Architecture" graphic that explicitly maps the step-by-step flow between stakeholders (e.g., Founder -> Agent -> Experts -> Founder).
  - Use `framer-motion` (`<AnimatePresence>` and `<motion.div>`) to swap between the use-cases with a smooth fade/slide transition.
  - Draw a connecting dashed line down the left side of the flow steps.
  - Animate an overlay glowing line segment sliding down to represent active flow.
  - Use distinct styling to highlight "Agent" roles vs "Human" roles in the step icons.
- **Contributor Rewards**: Explicitly include a "Contributor Reward" section at the end of the flow detailing the exact value (e.g., USDC, Reputation points) earned by the participants in the network. Include a `Gift` icon for this block.

## 4. Civilizational Impact Score Box ("DeepGuide Style")
- Treat the "Civilizational Impact" section as an interactive data visualization.
- Implement the score box using a glass-panel `<details>` HTML tag pattern (as seen in DeepGuide and Main Street Legacy).
- The main visible number summary must be the overall `civilizational_impact_score`.
- When clicked/expanded, it must reveal a cleanly styled list of the specific sub-scores (e.g., Biodiversity, Climate, Air Quality, Abundance, Human Flourishing, Community Renewal, Resilience).
- **CRITICAL**: The scores must perfectly match the exact values defined for the startup within `seed_tags.ts`.

## Interactivity & Components
- **Scroll Progress**: Every startup idea MUST include the `<ScrollProgress title="Idea Name" theme="emerald" />` component at the top of the `page-client.tsx` main wrapper. The theme color should correspond to the overall color theme of the page.
- **Citations**: Any citations (whether inline `[1]` numbers or the expanded reference list) MUST use the `<ExpandableCitation />` component. CRITICAL: You MUST explicitly pass a valid `url="..."` prop to every single instance of the component so the inline marker and popup content render natively as fully clickable `<a>` links that open in a new tab.
- **Acronyms**: Any complex, niche, or domain-specific acronyms mentioned in the text (e.g., SaaS, SOP, DSCR, MCP) MUST be wrapped in the `<HoverAcronym acronym="X" definition="Y" />` component to provide inline definitions on hover.
- **Transferable Insight**: Every idea page must include a styled "Transferable Insight" block highlighting a key psychological or market insight. This should be a creatively styled glass-panel block with a left-colored border based on the deep theme and elegantly formatted typography.
- **Value Flow Architecture**: Provide a standalone `<ValueFlow />` animated component or graphic mapping the explicit flow of value between stakeholders (utilizing Framer Motion line animations and a "Reward" block), integrated near the associated Business Model or ICP sections.

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

## 7. Database (Supabase) Scoring Requirements
As part of generating the new idea, you must also evaluate and score the startup and append its data to the `seed_tags.ts` script so it syncs with Supabase. 

**CRITICAL RULE:** Use existing scores for the tags/criteria if they are already provided in the prompt/context for that idea. Only if a score doesn't yet exist for a specific tag or metric, then you should assess and apply a new score. All scores are on a scale of **-100 to 100**.

You must generate the following five correct properties on its `projects` table row in `seed_tags.ts`. They should be formatted as follows:
1. `created_at`: You MUST add a `created_at` property to the new startup object. Set it to the exact current date and time in ISO 8601 format (e.g. `'2026-03-12T10:00:00Z'`). This guarantees the homepage \"Recently Added\" sort perfectly places the newest ideas first.
2. `moat_score`: Evaluate defensibility based on 4 criteria: Network Effects, Switching Costs, Cost Advantages, and Intangible Assets. Score each -100 to 100.
3. `difficulty_score`: Evaluate execution difficulty based on 3 criteria: Technical Complexity, Regulatory Hurdles, and Capital Requirements. Score each -100 to 100.
4. `civilizational_impact_score`: Evaluate impact based on 3 criteria: Scale of Impact, Depth of Impact, and Time to Impact. Score each -100 to 100.
5. `civilizational_impact_ratings`: Generate a specific -100 to 100 rating for **each individual Civilizational Outcome tag** assigned to this startup idea. (e.g., `{ "Biodiversity": { "ai_scored": 88 }, "Air Quality": { "ai_scored": 82 }, "Human Flourishing": { "ai_scored": 85 }, "Climate": { "ai_scored": 90 } }`)
