"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ReasonItem {
    id: string;
    title: string;
    desc: string;
}

interface WhyChooseUsProps {
    title: React.ReactNode;
    reasons: ReasonItem[];
}

export function WhyChooseUs({
    title,
    reasons,
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
                    setScrollRange(lastCard.offsetLeft);
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
                        <h2 className="text-3xl font-bold uppercase tracking-tighter leading-[1.1] mb-8 text-black">
                            {title}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, i) => (
                            <div key={i} className="flex flex-col p-6 border-l-2 border-[#FF6105] bg-white rounded-r-2xl border-y border-r border-black/5 hover:bg-gray-50 transition-colors shadow-sm">
                                <span className="text-4xl font-medium text-black/5 mb-3">{reason.id}</span>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-black">{reason.title}</h3>
                                <p className="text-sm text-black/60 leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-white text-black">
                <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
                    <div className="absolute top-32 left-0 w-full z-20 text-center">
                        <div className="max-w-[1400px] mx-auto px-6">
                            <h2 className="text-6xl font-bold uppercase tracking-tighter leading-none whitespace-nowrap text-center">
                                {title}
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center h-full w-full pt-16">
                        <motion.div ref={containerRef} style={{ x }} className="flex gap-12 pl-[10vw] items-center">
                            {reasons.map((reason, i) => (
                                <div key={i} className="min-w-[600px] flex flex-col justify-center p-12 border-l border-black/10 h-[55vh] bg-white hover:bg-gray-50 transition-colors">
                                    <span className="text-8xl font-medium text-black/5 mb-8">{reason.id}</span>
                                    <h3 className="text-4xl font-medium mb-6 uppercase tracking-tight">{reason.title}</h3>
                                    <p className="text-xl text-black/60 leading-relaxed max-w-xl">{reason.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
