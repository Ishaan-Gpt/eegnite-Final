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
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-4 text-black/50 mb-6">
                        <span className="w-10 h-[2px] bg-[#FF6105]" />
                        GLOBAL REACH
                    </span>
                    <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-black uppercase">
                        One Agency. <br className="block md:hidden" />
                        <span className="text-[#FF6105]">Limitless Reach.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-8"
                >
                    <p className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight text-black/90">
                        EEGNITE operates across India, the United States, Europe, and the Middle East; bringing a rare combination of <span className="text-[#FF6105] font-semibold">local market intelligence and global digital expertise</span> to every engagement.
                    </p>

                    <p className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight text-black/90">
                        Whether you're a startup scaling in Bangalore, a law firm growing in New York, a retail brand expanding in Dubai, or a B2B company entering European markets, <span className="text-[#FF6105] font-semibold">EEGNITE has the team, tools, and track record</span> to make it happen.
                    </p>

                    <p className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight text-black/90">
                        We don't apply the same playbook to every market. We build <span className="text-[#FF6105] font-semibold">bespoke, region-specific strategies</span> that connect your brand to the right audience - wherever in the world they are.
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
