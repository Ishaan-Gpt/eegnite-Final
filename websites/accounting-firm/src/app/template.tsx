"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Next.js remounts `template.tsx` on every navigation (unlike layout.tsx),
 * so each page reliably gets a fresh enter animation with no shared
 * AnimatePresence state to desync across static-export page loads —
 * that combination was the cause of the blank-page-until-refresh bug.
 */
export default function Template({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
