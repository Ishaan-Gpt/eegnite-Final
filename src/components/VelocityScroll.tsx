"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Phase 1: "Be seen." appears earlier and stays longer
    const beSeenOpacity = useTransform(scrollYProgress, [0.02, 0.15, 0.85, 0.98], [0, 1, 1, 0]);
    const beSeenY = useTransform(scrollYProgress, [0.02, 0.15], [80, 0]);

    // Phase 2: "Be chosen." appears slightly after and stays longer
    const beChosenOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.85, 0.98], [0, 1, 1, 0]);
    const beChosenY = useTransform(scrollYProgress, [0.05, 0.18], [80, 0]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: textContainerRef.current,
                pinSpacing: false,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-white"
            style={{ height: '200vh' }}
        >
            {/* Pinned container */}
            <div
                ref={textContainerRef}
                className="h-screen w-full flex flex-col items-center justify-center overflow-hidden"
            >
                {/* Be seen. Be chosen. Text */}
                <motion.div className="flex flex-col items-center justify-center text-center">
                    <motion.h2
                        style={{ opacity: beSeenOpacity, y: beSeenY }}
                        className="text-[clamp(4rem,18vw,14rem)] font-black tracking-tighter text-[#FF6105] leading-none uppercase"
                    >
                        Be Seen.
                    </motion.h2>
                    <motion.h2
                        style={{ opacity: beChosenOpacity, y: beChosenY }}
                        className="text-[clamp(4rem,18vw,14rem)] font-black tracking-tighter text-black leading-none uppercase -mt-4 md:-mt-8"
                    >
                        Be Chosen.
                    </motion.h2>
                </motion.div>
            </div>
        </section>
    );
}
