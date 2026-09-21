"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((item, idx) => {
                const isOpen = open === idx;
                return (
                    <div
                        key={idx}
                        className={`bg-white rounded-xl2 border transition-colors px-6 md:px-8 ${
                            isOpen ? "border-emerald/30 shadow-soft" : "border-navy/[0.06] shadow-card"
                        }`}
                    >
                        <button
                            onClick={() => setOpen(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between gap-6 py-5 text-left"
                            aria-expanded={isOpen}
                        >
                            <span className="font-display text-lg md:text-xl text-navy">{item.q}</span>
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="shrink-0 w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-navy"
                            >
                                <Plus size={16} />
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-slate-600 leading-relaxed">{item.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
