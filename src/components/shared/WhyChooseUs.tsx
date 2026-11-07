"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionDiv = motion.div as any;

interface ReasonItem {
    id: string;
    title: string;
    desc: string;
}

interface WhyChooseUsProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    reasons: ReasonItem[];
    closingQuote?: string;
    eyebrow?: React.ReactNode;
}

export function WhyChooseUs({
    title,
    subtitle,
    reasons,
    closingQuote,
    eyebrow,
}: WhyChooseUsProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef as any });


    useEffect(() => {
        const calculateRange = () => {
            if (containerRef.current) {
                const lastCard = containerRef.current.lastElementChild as HTMLElement;
                if (lastCard) {
                    // End with the last card fully in view (its right edge 6vw inside the screen),
                    // not parked at the left edge with an empty screen beside it.
                    const end = lastCard.offsetLeft + lastCard.offsetWidth - window.innerWidth * 0.94;
                    setScrollRange(Math.max(0, end));
                } else {
                    setScrollRange(containerRef.current.scrollWidth - window.innerWidth);
                }
            }
        };
        calculateRange();
        window.addEventListener("resize", calculateRange);
        return () => window.removeEventListener("resize", calculateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <>
            <section className="block md:hidden bg-white text-black py-16 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-left mb-10">
                        {eyebrow && <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block leading-normal">{eyebrow}</p>}
                        <h2 className="text-3xl font-bold uppercase tracking-tighter leading-[1.1] mb-4 text-black">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-black/50 text-sm leading-relaxed mb-6">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, i) => (
                            <div key={i} className="flex flex-col p-6 border-l-2 border-[#FF6105] bg-white rounded-r-2xl border-y border-r border-black/5 hover:bg-gray-50 transition-colors shadow-sm">
                                <span className="text-4xl font-medium text-black/5 mb-3">{reason.id}</span>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-black">{reason.title}</h3>
                                <p className="text-sm text-black/60 leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                        {closingQuote && (
                            <div className="mt-4 p-6 border-l-2 border-[#FF6105] bg-[#FFF5F0] rounded-r-2xl border-y border-r border-black/5">
                                <p className="text-sm italic text-black/80 leading-relaxed font-semibold">
                                    "{closingQuote}"
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-white text-black">
                <div className="sticky top-0 flex flex-col justify-between h-screen overflow-hidden py-16 md:py-20">
                    <div className={`w-full z-20 text-center flex-shrink-0 ${eyebrow ? "pt-6" : ""}`}>
                        <div className="max-w-[1400px] mx-auto px-6">
                            {eyebrow && <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block leading-normal">{eyebrow}</p>}
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight text-center px-4 max-w-5xl mx-auto text-balance">
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mt-4 max-w-2xl mx-auto text-balance">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex-1 flex items-center h-full w-full min-h-0">
                        <MotionDiv ref={containerRef} style={{ x }} className="flex gap-12 pl-[10vw] items-center">
                            {reasons.map((reason, i) => (
                                <div key={i} className="min-w-[400px] md:min-w-[500px] lg:min-w-[600px] flex-shrink-0 flex flex-col justify-center p-8 md:p-12 border-l border-black/10 h-auto min-h-[350px] bg-white hover:bg-gray-50 transition-colors">
                                    <span className="text-6xl md:text-8xl font-medium text-black/5 mb-6">{reason.id}</span>
                                    <h3 className="text-2xl md:text-4xl font-medium mb-4 md:mb-6 uppercase tracking-tight">{reason.title}</h3>
                                    <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-xl">{reason.desc}</p>
                                </div>
                            ))}
                            {closingQuote && (
                                <div className="min-w-[450px] md:min-w-[600px] lg:min-w-[700px] flex-shrink-0 flex flex-col justify-center p-10 md:p-16 border-l border-[#FF6105] h-auto min-h-[350px] bg-[#FFF5F0] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-bold text-7xl md:text-9xl select-none text-[#FF6105]">”</div>
                                    <p className="text-xl md:text-3xl font-medium italic text-black/80 leading-relaxed max-w-2xl relative z-10">
                                        "{closingQuote}"
                                    </p>
                                </div>
                            )}
                        </MotionDiv>
                    </div>
                </div>
            </section>
        </>
    );
}
