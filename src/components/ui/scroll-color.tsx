"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollColorSectionProps {
    children: React.ReactNode;
    fromColor?: string;
    toColor?: string;
    className?: string;
    id?: string;
}

// Component that dynamically changes background color based on scroll
export function ScrollColorSection({
    children,
    fromColor = "#FFFFFF",
    toColor = "#FF6105",
    className = "",
    id
}: ScrollColorSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Interpolate between colors based on scroll
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [fromColor, fromColor, toColor, toColor]
    );

    return (
        <motion.section
            ref={sectionRef}
            style={{ backgroundColor }}
            className={className}
            id={id}
        >
            {children}
        </motion.section>
    );
}

// Hook for scroll-based color transitions
export function useScrollColor(fromColor: string, toColor: string) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [fromColor, toColor, toColor]
    );

    return { ref, backgroundColor, scrollYProgress };
}
