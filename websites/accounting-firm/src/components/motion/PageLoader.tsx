"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const SESSION_KEY = "mh-loader-shown";

export default function PageLoader() {
    const [visible, setVisible] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem(SESSION_KEY);
        if (alreadyShown) {
            setReady(true);
            return;
        }
        setVisible(true);
        setReady(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        const timer = setTimeout(() => setVisible(false), 1350);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[999] bg-navy flex flex-col items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: "inset(0 0 100% 0)",
                        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    >
                        <motion.span
                            className="font-display text-4xl text-cream tracking-tight"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Meridian &amp; Hale
                        </motion.span>
                        <div className="w-40 h-[2px] bg-cream/15 overflow-hidden rounded-full">
                            <motion.div
                                className="h-full bg-gold"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
                                style={{ transformOrigin: "left" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
