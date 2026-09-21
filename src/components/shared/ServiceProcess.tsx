"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
    id: string;
    title: string;
    desc: string;
    icon: LucideIcon;
}

interface ServiceProcessProps {
    title: React.ReactNode;
    steps: ProcessStep[];
    ctaText?: string;
    ctaLink?: string;
    titleClassName?: string;
}

export function ServiceProcess({
    title,
    steps,
    ctaText,
    ctaLink,
    titleClassName,
}: ServiceProcessProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef as any });

    useEffect(() => {
        const calculateRange = () => {
            if (!containerRef.current) return;
            const cardElements = containerRef.current.querySelectorAll<HTMLElement>('.process-card-item');
            if (cardElements.length > 0) {
                const lastCard = cardElements[cardElements.length - 1];
                const windowWidth = window.innerWidth;
                const rightPadding = windowWidth < 768 ? 40 : 140;
                const totalRange = lastCard.offsetLeft + lastCard.offsetWidth + rightPadding - windowWidth;
                setScrollRange(Math.max(0, totalRange));
            } else {
                setScrollRange(containerRef.current.scrollWidth - window.innerWidth);
            }
        };

        calculateRange();
        const timer = setTimeout(calculateRange, 100);
        window.addEventListener('resize', calculateRange);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateRange);
        };
    }, [steps]);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={targetRef} className="relative h-[220vh] md:h-[260vh] bg-white text-black">
            <div className="sticky top-0 flex flex-col justify-between h-screen overflow-hidden py-10 md:py-14">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                
                {/* Header Section */}
                <div className="relative z-20 flex-shrink-0 text-left md:text-center w-full">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className={cn("text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black leading-tight text-left md:text-center", titleClassName)}>
                            {title}
                        </h2>
                    </div>
                </div>

                {/* Horizontal Scrolling Cards Section */}
                <div className="relative z-10 flex-1 flex items-center overflow-hidden my-auto w-full">
                    <motion.div ref={containerRef} style={{ x }} className="flex gap-6 sm:gap-8 md:gap-16 pl-6 sm:pl-12 md:pl-32 items-center relative z-10">
                        <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[300%] -translate-y-1/2 pointer-events-none rounded-full" />
                        {steps.map((step, i) => {
                            const isTop = i % 2 === 0;
                            const StepIcon = step.icon;
                            return (
                                <div
                                    key={i}
                                    className={cn(
                                        "process-card-item relative min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[400px] flex flex-col items-center flex-shrink-0",
                                        isTop ? 'mb-6 md:mb-14' : 'mt-6 md:mt-14'
                                    )}
                                >
                                    <div className={cn(
                                        "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10",
                                        isTop ? 'bottom-[-1rem] md:bottom-[-2rem]' : 'top-[-1rem] md:top-[-2rem]'
                                    )}>
                                        <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                    </div>
                                    <div className={cn(
                                        "absolute left-1/2 -translate-x-1/2 w-[2px] bg-black/10",
                                        isTop ? 'bottom-[-1rem] md:bottom-[-2rem] h-[1rem] md:h-[2rem]' : 'top-[-1rem] md:top-[-2rem] h-[1rem] md:h-[2rem]'
                                    )} />
                                    <div className="w-full bg-white border border-black/10 p-6 md:p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden h-[250px] sm:h-[270px] md:h-[295px] flex flex-col justify-start">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-5xl md:text-6xl group-hover:opacity-10 transition-opacity select-none text-black">
                                            {step.id}
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-4 md:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                                            <StepIcon size={22} className="md:w-6 md:h-6" />
                                        </div>
                                        <h3 className="text-lg md:text-2xl font-bold uppercase mb-2 text-black group-hover:text-[#FF6105] transition-colors leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Footer / CTA Section */}
                {ctaText && ctaLink ? (
                    <div className="relative z-20 flex-shrink-0 flex justify-center pt-2">
                        <a href={ctaLink} className="bg-black text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                            {ctaText}
                        </a>
                    </div>
                ) : (
                    <div className="h-2 flex-shrink-0" />
                )}
            </div>
        </section>
    );
}

