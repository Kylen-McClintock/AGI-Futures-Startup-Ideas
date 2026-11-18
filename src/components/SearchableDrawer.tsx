"use client";

import React, { useEffect, useRef } from "react";

type SearchableDrawerProps = {
    open: boolean;
    onReveal: () => void;
    className?: string;
    children: React.ReactNode;
};

/**
 * Progressive-disclosure drawer that keeps content in SSR HTML for search crawlers
 * and upgrades to `hidden="until-found"` on the client so browser Find-in-Page (Cmd/Ctrl+F)
 * automatically expands and scrolls to matches.
 */
export function SearchableDrawer({
    open,
    onReveal,
    className = "pt-4 space-y-4",
    children
}: SearchableDrawerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (open) {
            el.removeAttribute("hidden");
        } else {
            el.setAttribute("hidden", "until-found");
        }
    }, [open]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleBeforeMatch = () => {
            onReveal();
        };
        el.addEventListener("beforematch", handleBeforeMatch);
        return () => el.removeEventListener("beforematch", handleBeforeMatch);
    }, [onReveal]);

    return (
        <div
            ref={ref}
            hidden={open ? undefined : ("until-found" as unknown as boolean)}
            className={open ? className : undefined}
        >
            {children}
        </div>
    );
}
