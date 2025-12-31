"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Founder() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

    return (
        <section
            ref={sectionRef}
            className="flex items-center px-6 md:px-12 lg:px-20 py-20 bg-white relative"
        >
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight leading-[1] text-black mb-16 uppercase"
                >
                    THE VISION{" "}
                    <span className="text-[#FF6105]">BEHIND EEGNITE</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image/Visual - Standalone with gradient */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative order-2 lg:order-1 flex justify-center"
                    >
                        {/* Soft orange gradient background */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[80%] rounded-full bg-gradient-to-t from-[#FF6105]/20 via-[#FF6105]/10 to-transparent blur-3xl" />

                        {/* Founder image - standalone */}
                        <motion.img
                            src="/anish-founder.png"
                            alt="Anish Kumar - Founder of EEGNITE"
                            loading="lazy"
                            className="relative z-10 w-auto h-[500px] lg:h-[600px] object-contain drop-shadow-2xl"
                            style={{ transform: 'scaleX(-1)' }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Name badge */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-[#FF6105]/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black uppercase tracking-tight">
                                ANISH KUMAR
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mt-1">
                                Founder & CEO
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <p className="text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.4] tracking-tight text-black">
                            Anish is the{" "}
                            <span className="text-[#FF6105] font-semibold">heart and soul</span>{" "}
                            behind EEGNITE. He built this agency to help businesses not just
                            rank higher but truly{" "}
                            <span className="text-[#FF6105] font-semibold">connect</span>{" "}
                            with their audience.
                        </p>

                        <p className="text-lg text-black/60 leading-relaxed">
                            Driven by passion and the belief that every brand has a unique story,
                            Anish and his team focus on creating stories and strategies that inspire{" "}
                            <span className="font-semibold text-[#FF6105]">trust</span> and{" "}
                            <span className="font-semibold text-[#FF6105]">growth</span>.
                        </p>

                        <p className="text-lg text-black/60 leading-relaxed">
                            For Anish, it's not just about success, it's about making a{" "}
                            <span className="font-semibold text-black">real impact</span>,
                            one brand at a time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
