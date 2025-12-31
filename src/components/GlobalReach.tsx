"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const locations = [
    { name: "India", flag: "🇮🇳" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "Middle East", flag: "🇦🇪" },
    { name: "USA", flag: "🇺🇸" }
];

export default function GlobalReach() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-white relative"
        >
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-4 text-black/50">
                        <span className="w-10 h-[2px] bg-[#FF6105]" />
                        GLOBAL REACH
                    </span>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-12"
                >
                    <p className="text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.4] tracking-tight text-black">
                        We currently partner with clients across various regions, helping them
                        strengthen their digital presence with strategies tailored to their goals,
                        markets, and audiences.
                    </p>

                    <p className="text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.4] tracking-tight text-black">
                        Whether it's building visibility, driving performance, or scaling sustainably,
                        EEGNITE delivers marketing that's built to{" "}
                        <span className="text-[#FF6105] font-semibold">adapt</span>,{" "}
                        <span className="text-[#FF6105] font-semibold">compete</span>, and{" "}
                        <span className="text-[#FF6105] font-semibold">win</span>.
                    </p>
                </motion.div>

                {/* Location Flags */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 flex flex-wrap gap-6"
                >
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(255, 97, 5, 0.15)' }}
                            className="flex items-center gap-3 px-6 py-4 bg-white border border-black/10 rounded-full shadow-sm hover:border-[#FF6105]/30 transition-all"
                        >
                            <span className="text-3xl">{loc.flag}</span>
                            <span className="font-semibold text-black uppercase tracking-wide">{loc.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
