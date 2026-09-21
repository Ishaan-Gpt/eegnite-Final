import type { Variants, Transition } from "motion/react";

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
    offscreen: { opacity: 0, y: 28 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeOut },
    },
};

export const fadeIn: Variants = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};

export const scaleIn: Variants = {
    offscreen: { opacity: 0, scale: 0.94 },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: easeOut },
    },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
    offscreen: {},
    onscreen: {
        transition: { staggerChildren: stagger, delayChildren },
    },
});

export const wordFade: Variants = {
    offscreen: { opacity: 0, y: "0.6em" },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut },
    },
};
