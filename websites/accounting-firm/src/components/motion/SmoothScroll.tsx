"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "motion/react";

/**
 * Drives Lenis off Motion's frame loop (instead of its own requestAnimationFrame)
 * so scroll-linked Motion animations and Lenis's smoothed scroll stay in sync
 * on the same tick, avoiding jitter between the two rAF loops.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        function update(data: { timestamp: number }) {
            lenis.raf(data.timestamp);
        }

        frame.update(update, true);

        return () => {
            cancelFrame(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
