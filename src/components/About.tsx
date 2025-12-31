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

    const line1 = "EEGNITE is a digital marketing agency built for brands";
    const line2 = "that want more than visibility, they want";
    const highlight1 = "growth.";

    const line3 = "We merge creativity with analytics to craft campaigns";
    const line4 = "that convert clicks into";
    const highlight2 = "lasting impact.";

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
                        className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1] tracking-tight text-black mb-16 uppercase"
                    >
                        YOUR DIGITAL MARKETING{" "}
                        <span className="text-[#FF6105]">AGENCY</span>
                    </motion.h2>

                    {/* Line-by-line reveal text */}
                    <div ref={textRef} className="space-y-4">
                        {/* Paragraph 1 */}
                        <div className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-tight">
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {line1}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {line2} <span className="text-[#FF6105] font-semibold">{highlight1}</span>
                            </span>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-tight mt-8">
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {line3}
                            </span>
                            <span className="line block text-black" style={{ opacity: 0.1 }}>
                                {line4} <span className="text-[#FF6105] font-semibold">{highlight2}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
