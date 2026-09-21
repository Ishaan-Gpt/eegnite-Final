"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

/** Animates the numeric portion of a display value (e.g. "$2.1B", "98%", "500+") on scroll into view. */
export default function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [display, setDisplay] = useState(() => zeroed(value));

    useEffect(() => {
        if (!inView) return;
        const match = value.match(/-?\d+(\.\d+)?/);
        if (!match) {
            setDisplay(value);
            return;
        }
        const target = parseFloat(match[0]);
        const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
        const prefix = value.slice(0, match.index);
        const suffix = value.slice((match.index ?? 0) + match[0].length);

        const controls = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => {
                setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
            },
        });

        return () => controls.stop();
    }, [inView, value, duration]);

    return <span ref={ref}>{display}</span>;
}

function zeroed(value: string): string {
    const match = value.match(/-?\d+(\.\d+)?/);
    if (!match) return value;
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
