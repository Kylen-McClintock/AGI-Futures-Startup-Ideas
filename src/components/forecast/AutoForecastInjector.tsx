"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryFrontierForecast from "./CategoryFrontierForecast";
import { getForecastForSlug } from "@/data/forecasts";

export function AutoForecastInjector() {
    const pathname = usePathname();
    const [themeConfig, setThemeConfig] = useState<{ primary?: string, secondary?: string, tertiary?: string } | null>(null);

    // Only inject on startup idea sub-pages, not the root library or static info pages or problem atlas
    const isExcludedRoute = ["/", "", "/forecasting", "/license", "/about"].includes(pathname) || pathname.startsWith('/problem-atlas');

    useEffect(() => {
        if (isExcludedRoute) return;

        // Poll for CSS variables on the <main> tag to inherit the deep theme
        // since the layout wrapper sits *outside* the page's <main> tag where the styled are applied
        const extractTheme = () => {
            const mainEl = document.querySelector('main');
            if (mainEl) {
                const style = getComputedStyle(mainEl);
                const primary = style.getPropertyValue('--primary').trim();
                const secondary = style.getPropertyValue('--secondary').trim();
                const tertiary = style.getPropertyValue('--tertiary').trim();
                
                if (primary && primary !== themeConfig?.primary) {
                    setThemeConfig({ primary, secondary, tertiary });
                    return true;
                }
            }
            return false;
        };

        // Attempt immediately
        if (!extractTheme()) {
            // If the main tag hasn't rendered yet or variables aren't applied, poll a few times
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (extractTheme() || attempts > 10) {
                    clearInterval(interval);
                }
            }, 50);
            return () => clearInterval(interval);
        }
    }, [pathname, isExcludedRoute, themeConfig?.primary]);

    if (isExcludedRoute) return null;

    // Extract slug from pathname (e.g., "/agentable" -> "agentable")
    const slug = pathname.split('/').filter(Boolean).pop() || "";
    const forecastData = getForecastForSlug(slug);

    return (
        <section 
            className="px-6 pb-24 max-w-7xl mx-auto w-full relative z-10"
            style={themeConfig ? { 
                "--primary": themeConfig.primary, 
                "--secondary": themeConfig.secondary, 
                "--tertiary": themeConfig.tertiary 
            } as React.CSSProperties : undefined}
        >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
            <CategoryFrontierForecast 
                initialForecast={forecastData.forecast} 
                aiRationale={forecastData.aiRationale}
            />
        </section>
    );
}
