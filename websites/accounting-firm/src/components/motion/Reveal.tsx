"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    once?: boolean;
    amount?: number;
    as?: "div" | "span";
};

/** Wraps any block in a fade-up scroll reveal. Use for sections, cards, images. */
export function Reveal({ children, className = "", delay = 0, once = true, amount = 0.3, as = "div" }: RevealProps) {
    const MotionTag = as === "span" ? motion.span : motion.div;
    return (
        <MotionTag
            className={className}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once, amount }}
            variants={fadeUp}
            transition={{ delay }}
        >
            {children}
        </MotionTag>
    );
}

type RevealGroupProps = {
    children: ReactNode;
    className?: string;
    stagger?: number;
    once?: boolean;
    amount?: number;
};

/** Wraps a list of children, staggering each direct motion child's reveal. Pair with <RevealItem>. */
export function RevealGroup({ children, className = "", stagger = 0.12, once = true, amount = 0.2 }: RevealGroupProps) {
    return (
        <motion.div
            className={className}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once, amount }}
            variants={staggerContainer(stagger)}
        >
            {children}
        </motion.div>
    );
}

export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={fadeUp}>
            {children}
        </motion.div>
    );
}

/** Splits a headline into words and reveals them with a stagger — for hero/section titles. */
export function RevealText({ text, className = "", as: Tag = "h2" }: { text: string; className?: string; as?: "h1" | "h2" | "h3" }) {
    const words = text.split(" ");
    return (
        <Tag className={className}>
            <motion.span
                className="inline"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                variants={staggerContainer(0.045)}
                aria-label={text}
            >
                {words.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.28em]">
                        <motion.span
                            className="inline-block"
                            variants={{
                                offscreen: { y: "110%" },
                                onscreen: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
}
