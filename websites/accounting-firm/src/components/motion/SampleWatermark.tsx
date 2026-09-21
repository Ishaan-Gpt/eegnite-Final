"use client";

import { motion } from "motion/react";

/**
 * Persistent "this is a portfolio sample" marker — Meridian & Hale is a
 * fictional firm built to demonstrate EEGNITE's web design work, not a
 * real business, so every page needs to disclose that clearly.
 */
export default function SampleWatermark() {
    return (
        <motion.a
            href="https://www.eegnite.com/services/web-development/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="fixed bottom-5 left-5 z-[90] flex items-center gap-2 rounded-full bg-navy/90 backdrop-blur-sm text-cream/90 pl-3 pr-4 py-2 text-xs font-medium shadow-soft hover:bg-navy transition-colors"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Sample project by EEGNITE
        </motion.a>
    );
}
