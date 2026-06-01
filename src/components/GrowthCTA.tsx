"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function GrowthCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
            id="growth-cta"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[120px] pointer-events-none select-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-left md:text-center"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-6 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105] hidden md:inline-block" />
                        Stop guessing. Start growing.
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>

                    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
                        Ready to Scale? <br />
                        <span className="text-[#FF6105]">Let's Build Your Growth Plan.</span>
                    </h2>

                    <p className="mt-8 max-w-2xl md:mx-auto text-sm md:text-lg text-black/60 font-medium tracking-wide leading-relaxed">
                        Book a <span className="text-[#FF6105] font-semibold">free strategy call</span> with EEGNITE and walk away with clarity on exactly what's holding your business back - and what it will take to break through. <span className="text-[#FF6105] font-semibold">No pitch. No pressure.</span> Just a straight conversation about your goals and how we can help you hit them.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-start md:justify-center gap-4">
                        <motion.a
                            href="https://calendar.app.google/m3Vy2iasTrY6eNAA6"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20 hover:shadow-[#FF6105]/35 duration-300"
                        >
                            <Calendar size={16} />
                            Book Your Strategy Call
                            <ArrowRight size={16} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
