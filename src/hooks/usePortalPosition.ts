import { useState, useEffect, RefObject } from "react";

export function usePortalPosition(ref: RefObject<HTMLElement | null>, isOpen: boolean, position: 'bottom' | 'top' = 'bottom') {
    const [coords, setCoords] = useState<{ top: number | 'auto'; bottom: number | 'auto'; left: number }>({ top: 0, bottom: 'auto', left: 0 });

    useEffect(() => {
        if (!isOpen || !ref.current) return;

        const updateCoords = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (position === 'bottom') {
                    setCoords({
                        top: rect.bottom + 8,
                        bottom: 'auto',
                        left: rect.left + (rect.width / 2),
                    });
                } else {
                    setCoords({
                        top: 'auto',
                        bottom: window.innerHeight - rect.top + 8,
                        left: rect.left + (rect.width / 2),
                    });
                }
            }
        };

        updateCoords();

        // Listen to scroll events on window and all scrollable parent elements
        window.addEventListener('scroll', updateCoords, true);
        window.addEventListener('resize', updateCoords);

        return () => {
            window.removeEventListener('scroll', updateCoords, true);
            window.removeEventListener('resize', updateCoords);
        };
    }, [isOpen, ref, position]);

    return coords;
}
