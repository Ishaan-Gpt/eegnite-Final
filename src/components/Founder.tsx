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
                <div className="mb-12 text-left lg:text-center w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mb-4"
                    >
                        THE VISION{" "}
                        <span className="text-[#FF6105]">BEHIND EEGNITE</span>
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg md:text-xl font-bold text-[#FF6105] uppercase tracking-wider"
                    >
                        Anish Kumar — Founder & CEO
                    </motion.h3>
                </div>

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
                        <div className="relative z-10" style={{ transform: 'scaleX(-1)' }}>
                            <motion.img
                                src="/anish-founder.png"
                                alt="Anish Kumar - Founder of EEGNITE"
                                loading="lazy"
                                className="w-auto h-[500px] lg:h-[600px] object-contain drop-shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

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
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <p className="text-base md:text-lg text-black/70 leading-relaxed">
                            &ldquo;I didn’t build EEGNITE to chase numbers. It was <span className="text-[#FF6105] font-semibold">built to create impact</span>.
                        </p>

                        <p className="text-base md:text-lg text-black/70 leading-relaxed">
                            Every brand has a story. Our job? Make sure the world hears it. We don't obsess over vanity metrics or empty traffic. We obsess over what actually moves your business - <span className="text-[#FF6105] font-semibold">connection, trust, and growth that lasts</span>. Because when your brand wins, we win.
                        </p>

                        <p className="text-base md:text-lg text-black/70 leading-relaxed">
                            That's not a tagline. That's <span className="text-[#FF6105] font-semibold">how we work</span>.
                        </p>

                        <p className="text-base md:text-lg text-black/70 leading-relaxed font-semibold">
                            For us, success has always been simple. It's the difference EEGNITE makes - <span className="text-[#FF6105] font-semibold">one brand, one result, one win at a time</span>.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
