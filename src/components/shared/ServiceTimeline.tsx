"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TimelineStep {
    t: string;
    d: string;
}

interface ServiceTimelineProps {
    title: React.ReactNode;
    steps: TimelineStep[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    ctaLink?: string;
}

export function ServiceTimeline({
    title,
    steps,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaLink = "/#contact",
}: ServiceTimelineProps) {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef as any, offset: ["start start", "end end"] });

    return (
        <section ref={targetRef} className="bg-white relative py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16 text-left md:text-center">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black leading-[1.1] max-w-[95%] md:mx-auto text-left md:text-center">
                    {title}
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#FF6105]/5 -translate-x-1/2 rounded-full overflow-hidden">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-[#FF6105] rounded-full origin-top"
                    />
                </div>

                {steps.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        className="py-12 md:min-h-[50vh] flex items-center justify-center relative md:py-16"
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative pl-20 md:pl-0">
                            <div className={`order-2 md:order-1 ${i % 2 === 1 ? 'md:col-start-2 md:pl-24' : 'md:text-right md:pr-24'}`}>
                                <h3 className="text-2xl md:text-4xl font-bold uppercase text-black leading-tight mb-3 md:mb-4">{s.t}</h3>
                                <p className="text-sm md:text-lg text-black/60 font-normal leading-relaxed max-w-lg ml-auto mr-auto md:mr-0">{s.d}</p>
                            </div>
                            <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center mt-8 md:mt-0 h-full md:h-auto pointer-events-none md:pointer-events-auto">
                                <motion.div
                                    initial={{ scale: 1, backgroundColor: "#ffffff", borderColor: "#FF6105" }}
                                    whileInView={{ scale: 1.2, backgroundColor: "#FF6105", borderColor: "#ffffff" }}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-3xl font-bold border-[6px] shadow-xl relative z-10 transition-colors duration-500"
                                >
                                    <span className="text-black">0{i + 1}</span>
                                </motion.div>
                            </div>
                            <div className={`hidden md:block order-1 md:order-2 ${i % 2 === 1 ? 'md:col-start-1' : ''}`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFF5F0] rounded-3xl p-8 md:p-12 mx-4 md:mx-auto max-w-4xl text-center mt-20 md:mt-32 border border-[#FF6105]/10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6105]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-black mb-4">{ctaTitle}</h3>
                    <p className="text-black/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
                    <Link href={ctaLink} className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        {ctaButtonText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
