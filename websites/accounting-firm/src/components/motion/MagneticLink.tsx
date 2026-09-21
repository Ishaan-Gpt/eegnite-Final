"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

type MagneticLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    strength?: number;
    external?: boolean;
};

/** A CTA that gently pulls toward the cursor on hover — a small, tasteful interactive flourish. */
export default function MagneticLink({ href, children, className = "", strength = 0.35, external }: MagneticLinkProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

    function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * strength);
        y.set(relY * strength);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.span style={{ x: springX, y: springY, display: "inline-block" }}>
            {external ? (
                <a
                    href={href}
                    ref={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={className}
                >
                    {children}
                </a>
            ) : (
                <Link
                    href={href}
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={className}
                >
                    {children}
                </Link>
            )}
        </motion.span>
    );
}
