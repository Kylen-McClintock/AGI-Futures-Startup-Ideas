import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export function GridContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full",
                className
            )}
        >
            {children}
        </div>
    );
}
