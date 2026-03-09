---
description: How to style and layout AGI Futures Startup Idea pages and Project Tags
---

# AGI Futures Startup UI Guidelines

When adding or modifying startup ideas in the AGI Futures platform, strictly adhere to these tagging rules and layout structures to maintain consistency and aesthetic quality.

## Tag Placement Rules
The global `<ProjectTags />` block should NEVER be used. Instead, use the `<InlineTags />` component directly within the relevant sections of the page.

1. **Sector tags**: Must appear directly below the one-liner in the Hero section. They should be closely spaced (`gap-1` or `gap-1.5`).
2. **Product Type tags**: Must be placed in the **Business Model** section.
3. **Customer tags**: Must be placed in the **Ideal Customer Profile (ICP)** section.
4. **Enabling Technology tags**: Must be placed in the **Solution** or **Product Stack** section.
5. **Readiness tags**: Must be placed in the **Why Now** section.
6. **Civilizational Outcome tags**: Must be placed in the **Civilizational Impact / AGI Futures** section.
7. **Founder Fit tags**: Must be placed in the **Unfair Advantage** section (if it exists) or **Go-to-Market / Business Model** section otherwise.
8. **Bottleneck tags**: **DO NOT RENDER** these tags in the UI.

## Typography & Sizing
- **Section Titles**: The section headers containing the inline tags must be visibly larger (e.g., `text-3xl`, `text-4xl`) than the standard body text and tags.
- **Tag Sizing**: Tags should be small (`text-xs` or smaller) and unobtrusive.
- **Theming**: Each startup idea should use a custom `colorTheme` for its tags (passed to `<InlineTags theme="emerald" />`) that matches the vibe of the idea (e.g., Emerald for HomeQuote, Amber for Attune, Primary for Murmuration).

## Interactivity
- **Citations**: Any citations (whether inline `[1]` numbers or the expanded reference list) MUST be fully clickable `<a>` links that navigate to the actual source URL.

## Database (Supabase) Scoring
Every project requires four JSONB properties on its `projects` table row, formatted as follows to allow future community overrides:
1. `moat_score`: `{ "ai_scored": number, "creator_rating": number, "member_rating": number, "community_rating": number }`
2. `difficulty_score`: `{ "ai_scored": number, "creator_rating": number, ... }`
3. `civilizational_impact_score`: `{ "ai_scored": number, "creator_rating": number, ... }`
4. `civilizational_impact_ratings`: An object breaking out individual tags, e.g., `{ "Human Flourishing": { "ai_scored": 85 }, "Abundance": { "ai_scored": 90 } }`
