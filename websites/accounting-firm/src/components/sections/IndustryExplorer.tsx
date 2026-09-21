"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries.data";

export default function IndustryExplorer() {
    const [active, setActive] = useState(0);
    const industry = INDUSTRIES[active];

    return (
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 lg:gap-0 lg:border lg:border-navy/[0.08] lg:rounded-xl2 lg:overflow-hidden">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible bg-cream-200/60 lg:bg-cream-200">
                {INDUSTRIES.map((ind, i) => (
                    <button
                        key={ind.slug}
                        onClick={() => setActive(i)}
                        className={`relative shrink-0 lg:w-full text-left px-6 py-5 border-b border-navy/[0.06] transition-colors ${
                            active === i ? "text-navy" : "text-navy/50 hover:text-navy/80"
                        }`}
                    >
                        {active === i && (
                            <motion.span
                                layoutId="industry-active-bar"
                                className="absolute inset-y-0 left-0 w-[3px] bg-emerald hidden lg:block"
                                transition={{ type: "spring", stiffness: 350, damping: 32 }}
                            />
                        )}
                        <span className="font-display text-base md:text-lg whitespace-nowrap">{ind.name}</span>
                    </button>
                ))}
            </div>

            <div className="bg-white p-8 md:p-12 min-h-[380px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={industry.slug}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">{industry.name}</h3>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">{industry.summary}</p>

                        <span className="block text-emerald text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                            Common Challenges We Solve
                        </span>
                        <ul className="space-y-3 mb-10">
                            {industry.challenges.map((c) => (
                                <li key={c} className="flex items-start gap-3 text-navy text-sm md:text-base">
                                    <ArrowRight size={16} className="text-gold shrink-0 mt-1" />
                                    {c}
                                </li>
                            ))}
                        </ul>

                        <div className="inline-flex items-baseline gap-2 bg-cream rounded-full px-5 py-3">
                            <span className="font-display text-2xl text-navy">{industry.stat.value}</span>
                            <span className="text-slate-600 text-sm">{industry.stat.label}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
