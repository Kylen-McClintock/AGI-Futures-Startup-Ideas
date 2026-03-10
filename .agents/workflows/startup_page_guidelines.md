---
description: How to style and layout AGI Futures Startup Idea pages and Project Tags
---

# AGI Futures Startup UI Guidelines

When adding or modifying startup ideas in the AGI Futures platform, strictly adhere to these tagging rules, layout structures, and project architecture to maintain consistency and aesthetic quality.

## Project Architecture & Deployment Constraints
You are building a new startup idea prototype that will be integrated into the existing "AGI Futures Startup Ideas Library" Next.js repository. It is a Feature/Module Colocation sub-route. 
1. **Routing**: Build your core page inside a named directory (e.g., `src/app/[idea-name]/page.tsx`). Do not build in the global `app/page.tsx`
2. **Components**: Place all custom components specific to this idea inside the route directory: `src/app/[idea-name]/components/`. Do not pollute the global root `src/components/` folder.
3. **Assets**: Place all images and static assets inside an assets folder within the route directory: `src/app/[idea-name]/assets/`. Use Next.js static imports for images (e.g., `import heroImage from './assets/hero.png'`) rather than referencing string paths from the global public folder.
    *   When generating new images, always generate them at the maximum possible resolution allowed by the system (2048x2048), and ensure the aspect ratios fit the design intent.
    *   When using the Next.js `<Image />` component, ALWAYS include the `quality={100}` prop.
4. **Styling**: We are using standard Tailwind CSS. Avoid making drastic changes to global HTML/Body tags in `globals.css` that might break other pages.
5. **SEO Metadata**: Every new `page.tsx` MUST export a custom `metadata` object (Title, Description, and OpenGraph parameters) that is specific to that startup idea. Do not rely on global `<RootLayout>` fallbacks.
6. **Final Step (Homepage Routing & UI)**: When the prototype is finished, your final task will be copying your entire `src/app/[idea-name]/` folder directly into the target repository. You must then update the target repository's homepage (`src/app/page.tsx`) to add a new Link card for your idea. 
    *   The homepage preview cards use a special hover-reveal text effect over a 30%-opacity hero image background. You must provide two text strings in your card code: A) A short, 4–5 word descriptor visible by default, and B) The full multi-line thesis paragraph that fades in on hover (`group-hover:opacity-100`).

## Tag Placement Rules
The global `<ProjectTags />` block should NEVER be used. Instead, use the `<InlineTags />` component directly within the relevant sections of the page.

1. **Sector tags**: Must appear directly below the one-liner in the Hero section.
2. **Product Type tags**: Must be placed in the **Business Model** section.
3. **Customer tags**: Must be placed in the **Ideal Customer Profile (ICP)** section.
4. **Enabling Technology tags**: Must be placed in the **Solution** or **Product Stack** section.
5. **Readiness tags**: Must be placed in the **Why Now** section.
6. **Civilizational Outcome tags**: Must be placed in the **Civilizational Impact / AGI Futures** section.
7. **Founder Fit tags**: Must be placed in the **Unfair Advantage** or **Go-to-Market** section. (Do NOT put them in the Business Model section).
8. **Bottleneck tags**: **DO NOT RENDER** these tags in the client-side UI.

## Typography & Sizing
- **Section Titles**: The section headers containing the inline tags must be visibly larger (e.g., `text-3xl`, `text-4xl`) than the standard body text and tags.
- **Tag Sizing**: Tags should be small (`text-xs` or smaller), dense, and unobtrusive.
- **Deep Theming CSS Variables**: Every startup idea MUST inject its theme's CSS variables at the root level. At the top of `page-client.tsx`, import `themeMap` from `@/utils/themeMap` and apply it to the `<main>` tag's style prop: `style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}`. Choose a vivid color theme (e.g. 'emerald', 'teal', 'violet', 'fuchsia') that matches the mood of the idea. 
- **Component Theming**: Throughout your `page-client.tsx`, ALWAYS use the dynamically injected variables (e.g., `text-[var(--primary)]`, `bg-[var(--secondary)]`, `border-[var(--tertiary)]`) instead of hardcoded Tailwind color scales (like `text-emerald-500` or `bg-purple-600`). This ensures colors remain deeply synchronized across typography, backgrounds, SVGs, acronyms, and citations.

## Interactivity
- **Scroll Progress**: Every startup idea MUST include the `<ScrollProgress title="Idea Name" theme="emerald" />` component at the top of the `page-client.tsx` main wrapper. The theme name passed as the prop must exactly match the key you selected from `themeMap`.
- **Citations**: Any citations (whether inline `[1]` numbers or the expanded reference list) MUST use the `<ExpandableCitation />` component, which automatically inherits from the CSS variables, or be fully clickable `<a>` links.
- **Acronyms**: Any complex, niche, or domain-specific acronyms mentioned in the text (e.g., SaaS, SOP, MCP) MUST be wrapped in `<HoverAcronym acronym="X" definition="Y" theme="emerald" />`. Ensure the theme prop matches the page's deep theme.

## Database (Supabase) Scoring Requirements
As part of generating the new idea, you must also evaluate and score the startup and append its data to the `seed_tags.ts` script so it syncs with Supabase. 

**CRITICAL RULE:** Use existing scores for the tags/criteria if they are already provided in the prompt/context for that idea. Only if a score doesn't yet exist for a specific tag or metric, then you should assess and apply a new score. All scores are on a scale of **-100 to 100**.

You must generate the following four JSONB properties on its `projects` table row in `seed_tags.ts`. They should be formatted as follows:
1. `moat_score`: Evaluate defensibility based on 4 criteria: Network Effects, Switching Costs, Cost Advantages, and Intangible Assets. Score each -100 to 100.
2. `difficulty_score`: Evaluate execution difficulty based on 3 criteria: Technical Complexity, Regulatory Hurdles, and Capital Requirements. Score each -100 to 100.
3. `civilizational_impact_score`: Evaluate impact based on 3 criteria: Scale of Impact, Depth of Impact, and Time to Impact. Score each -100 to 100.
4. `civilizational_impact_ratings`: Generate a specific -100 to 100 rating for **each individual Civilizational Outcome tag** assigned to this startup idea. (e.g., `{ "Human Flourishing": { "ai_scored": 85 }, "Abundance": { "ai_scored": 90 } }`)
