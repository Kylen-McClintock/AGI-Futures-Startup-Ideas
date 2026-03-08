import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export function SectionHeading({
    children,
    className,
    as: Component = "h2",
    ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: any }) {
    return (
        <Component
            className={cn(
                "font-serif text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 [text-wrap:balance]",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
