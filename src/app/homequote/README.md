# HomeQuote AI - Prototype Module

This is a single-page, production-ready prototype for the **HomeQuote AI** venture thesis, built beautifully with Next.js, Framer Motion, and Tailwind CSS. The design adheres strictly to the Tomorrowland and retro-futurist abundance aesthetic requested.

## ✅ How to Run Development Server Fast

All components and dependencies are pre-configured locally here for immediate viewing:
```bash
cd "/Users/kylenmcclintock/Documents/AntiGravity Projects/AGI Futures - AntiGravity/HomeQuote AI/homequote-app"
npm run dev -- -p 58392
```
Then navigate to `http://localhost:58392/homequote-ai` to see the complete immersive page. Note: You can also view the new Hover Reveal preview card at `http://localhost:58392/`.

## 🔄 Migration to Target Repository (AGI-Futures-Startup-Ideas)

To seamlessly drag-and-drop this into your `AGI-Futures-Startup-Ideas` repository:
1. Copy the `src/app/homequote-ai` directory into `AGI-Futures-Startup-Ideas/src/app/`.
2. Ensure you have the following installed in `AGI-Futures-Startup-Ideas`:
   `npm install recharts framer-motion clsx tailwind-merge lucide-react`
3. Add the `<Link>` block below into `AGI-Futures-Startup-Ideas/src/app/page.tsx`:

```tsx
import homequote_hero from "./homequote-ai/assets/hq_hero_scan_1772949695780.png";

{/* HomeQuote AI Card */}
<Link
    href="/homequote-ai"
    className="group block glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden h-[320px]"
>
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
        <Image src={homequote_hero} alt="HomeQuote AI Hero" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

    <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-emerald-400 transition-colors">HomeQuote AI</h2>
        <div className="relative mb-6 flex-1">
            <p className="text-white/80 font-medium absolute top-0 left-0 w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                The Scope-to-Quote Engine
            </p>
            <p className="text-white/70 font-light transition-opacity duration-500 opacity-0 group-hover:opacity-100 line-clamp-none">
                HomeQuote AI turns a user-filmed walkthrough of a home project into a structured job object, an exact quote, and instantly bookable offers from service providers.
            </p>
        </div>
        <div className="flex items-center text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-emerald-400 transition-colors mt-auto pt-4 relative z-10">
            View Prototype <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
    </div>
</Link>
```

## 🛠 Asset, Script & Data Swapping

- **Images:** All visuals are located in `src/app/homequote-ai/assets`. 4 premium AI visuals were specifically generated matching the prompt guidelines (screens, Tomorrowland, natural light). Just replace the `.png` files to swap them and update the `import` links at the top of `page.tsx`.
- **Script Changes:** Open `src/app/homequote-ai/page.tsx` and text search the narrative to swap wording inline. The `ExpandableCitation` components are wrapped right in the narrative blocks.
- **Chart Data:** The `MarketChart.tsx` component runs off an injected `data` array mimicking $520B scaling to $1.03T toward 2030 (based on citation `[1]`). You can directly change the `data` constant inside `src/app/homequote-ai/components/MarketChart.tsx` to alter the curve or swap in real metrics.

## 🌟 Quality Highlights
- **ExpandableCitation:** A subtle, tap-friendly component for revealing messy URLs cleanly.
- **InteractiveSection:** Smooth accordion layouts scoring "Difficulty" and "Moat Potential", keeping cognitive load low until revealed.
- **Visual Pacing:** Used `Framer Motion` for gentle reveal-on-scroll parallax, prioritizing reading experience over gimmicks.
