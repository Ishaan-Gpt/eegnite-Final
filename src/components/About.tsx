"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);

    const p1Line1 = "EEGNITE is a full-service digital marketing company";
    const p1Line2 = "with one obsession -";
    const p1Highlight = "“YOUR GROWTH”";

    const p2Line1 = "From search optimization and paid advertising to web development,";
    const p2Line2 = "we engineer strategies that move the needle -";
    const p2Highlight = "measurably, consistently, relentlessly.";

    const p3Line1 = "Because being seen isn't enough.";
    const p3Highlight = "You need to be chosen.";

    useEffect(() => {
        if (!sectionRef.current || !textRef.current || !pinRef.current) return;

        const ctx = gsap.context(() => {
            const lines = textRef.current?.querySelectorAll('.line');
            if (!lines) return;

            // Pin the section while revealing lines - faster scrolling
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${lines.length * 150}`,
                pin: pinRef.current,
                pinSpacing: true,
            });

            // Reveal lines one by one (much faster than word-by-word)
            lines.forEach((line, i) => {
                gsap.fromTo(line,
                    { opacity: 0.1, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: `top+=${i * 150} top`,
                            end: `top+=${(i + 1) * 150} top`,
                            scrub: 0.3,
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white"
            id="about"
        >
            <div
                ref={pinRef}
                className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20"
            >
                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Section Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="mb-16"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-4 text-black/50">
                            <span className="w-10 h-[2px] bg-[#FF6105]" />
                            ABOUT EEGNITE
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-[clamp(1.65rem,4.8vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-black mb-16 uppercase"
                    >
                        WE DON'T JUST MARKET <br className="block md:hidden" /> ONLINE.{" "}
                        <span className="text-[#FF6105]">
                            WE HELP BUSINESSES <br className="block md:hidden" /> TO SCALE ONLINE.
                        </span>
                    </motion.h2>

                    <div ref={textRef} className="space-y-8 mt-12">
                        <div className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight text-black/90">
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {p1Line1}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {p1Line2} <span className="text-[#FF6105] font-semibold">{p1Highlight}</span>
                            </span>
                        </div>

                        <div className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight mt-8 text-black/90">
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {p2Line1}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {p2Line2}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                <span className="text-[#FF6105] font-semibold">{p2Highlight}</span>
                            </span>
                        </div>

                        <div className="text-[clamp(1.2rem,2.8vw,1.8rem)] leading-[1.4] tracking-tight mt-8 text-black/90">
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {p3Line1}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                <span className="text-[#FF6105] font-semibold">{p3Highlight}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
