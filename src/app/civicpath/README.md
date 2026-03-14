# CivicPath: Immigration Dashboard

A module within the AGI Futures Startup Ideas Library. CivicPath is a government-facing and immigrant-facing dashboard that makes immigration earned, legible, and enforceable by showing each person their live probability of reaching work authorization, residency, and citizenship, and the exact actions that raise or lower those odds.

## Structure

This feature is modularized under `src/app/civicpath/`.
- `page.tsx`: Server-side component handling SEO metadata and initial data fetching (tags) from Supabase.
- `page-client.tsx`: The main interactive view utilizing the 'blue' theme, framed by `ScrollProgress`, `ProjectTags`, and `ExpandableCitation`.
- `components/`: Custom components specific to this idea, including `InteractiveScoreCard` and `OptionalModuleCollapse`.
- `assets/`: Image assets generated specifically for CivicPath.

## Data Integration & Seeding

The core project data is registered in the database via `/seed_tags.ts`, granting it proper scores, tags, and civilizational outcome ratings. Ensure the database is seeded by running:
```bash
npx tsx seed_tags.ts
```
The project config has been hooked up in `/src/app/page.tsx` under `<HomeClient />` allowing it to display prominently on the homepage with a dynamic financial forecast projection.

## Design

- **Theme:** Blue (`themeMap['blue']`) — Chosen to reflect prestige, systemic stability, trust, and government infrastructure.
- **Aesthetic:** Clean, glass-morphism panels mapping futuristic, clear, and retro-optimistic city and institutional motifs.
