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
            if (containerRef.current) {
                const windowWidth = window.innerWidth;
                const isMobile = windowWidth < 768;
                if (isMobile) {
                    const lastCard = containerRef.current.lastElementChild as HTMLElement;
                    if (lastCard) {
                        setScrollRange(lastCard.offsetLeft + (lastCard.offsetWidth / 2) - (windowWidth / 2));
                    }
                } else {
                    const children = Array.from(containerRef.current.children) as HTMLElement[];
                    const targetCard = children[steps.length - 1] || children[children.length - 1];
                    if (targetCard) {
                        setScrollRange(targetCard.offsetLeft + (targetCard.offsetWidth / 2) - (windowWidth / 2));
                    } else {
                        setScrollRange(containerRef.current.scrollWidth - windowWidth);
                    }
                }
            }
        };
        calculateRange();
        window.addEventListener('resize', calculateRange);
        return () => window.removeEventListener('resize', calculateRange);
    }, [steps.length]);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={targetRef} className="relative h-[200vh] md:h-[250vh] bg-white text-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-16 md:top-24 left-0 w-full z-20 text-left md:text-center">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className={cn("text-3xl md:text-6xl font-bold uppercase tracking-tight text-black leading-tight text-left md:text-center", titleClassName)}>
                            {title}
                        </h2>
                    </div>
                </div>

                <motion.div ref={containerRef} style={{ x }} className="flex gap-8 md:gap-20 pl-8 md:pl-40 items-center relative z-10 pt-20 md:pt-36">
                    <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[200%] -translate-y-1/2 pointer-events-none rounded-full" />
                    {steps.map((step, i) => {
                        const isTop = i % 2 === 0;
                        const StepIcon = step.icon;
                        return (
                            <div key={i} className={`relative min-w-[300px] md:min-w-[400px] flex flex-col items-center ${isTop ? 'mb-12 md:mb-28' : 'mt-12 md:mt-28'}`}>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10 ${isTop ? 'bottom-[-1.5rem] md:bottom-[-3.5rem]' : 'top-[-1.5rem] md:top-[-3.5rem]'}`}>
                                    <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                </div>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[1.5rem] md:h-[3.5rem] bg-black/10 ${isTop ? 'bottom-[-1.5rem] md:bottom-[-3.5rem]' : 'top-[-1.5rem] md:top-[-3.5rem]'}`} />
                                <div className="w-full bg-white border border-black/10 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-6xl group-hover:opacity-10 transition-opacity select-none text-black">{step.id}</div>
                                    <div className="w-12 h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                        <StepIcon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase mb-2 text-black group-hover:text-[#FF6105] transition-colors">{step.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {ctaText && ctaLink && (
                    <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex justify-center">
                        <a href={ctaLink} className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                            {ctaText}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
