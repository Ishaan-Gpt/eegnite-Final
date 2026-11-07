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
    eyebrow?: React.ReactNode;
}

export function ServiceProcess({
    title,
    steps,
    ctaText,
    ctaLink,
    titleClassName,
    eyebrow,
}: ServiceProcessProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef as any,
    });

    useEffect(() => {
        const calculateRange = () => {
            if (containerRef.current) {
                const windowWidth = window.innerWidth;
                // Measure to the last step card, not scrollWidth: the decorative track line is 300% wide
                // and made the scroll run past the last card into an empty screen.
                const stepEls = containerRef.current.querySelectorAll<HTMLElement>("[data-process-step]");
                const last = stepEls[stepEls.length - 1];
                const totalContentWidth = last ? last.offsetLeft + last.offsetWidth : containerRef.current.scrollWidth;
                const paddingRight = windowWidth < 768 ? 24 : 120;
                const range = totalContentWidth - windowWidth + paddingRight;
                setScrollRange(Math.max(0, range));
            }
        };

        calculateRange();
        window.addEventListener("resize", calculateRange);
        const timer1 = setTimeout(calculateRange, 100);
        const timer2 = setTimeout(calculateRange, 400);
        return () => {
            window.removeEventListener("resize", calculateRange);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [steps.length]);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={targetRef} className="relative h-[220vh] md:h-[280vh] bg-white text-black">
            {/* Heading, cards and button stack in one flex column so they can never overlap on short screens. */}
            <div className={cn("sticky top-0 flex flex-col h-screen overflow-hidden pb-6 md:pb-10", eyebrow ? "pt-24 md:pt-[6.25rem]" : "pt-24 md:pt-[6.5rem]")}>
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="relative shrink-0 w-full z-20 text-left md:text-center">
                    <div className="max-w-[1400px] mx-auto px-6">
                        {eyebrow && <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block leading-normal">{eyebrow}</p>}
                        <h2 className={cn("text-2xl xs:text-3xl md:text-5xl lg:text-6xl lg:[@media(min-height:701px)_and_(max-height:820px)]:text-5xl md:[@media(max-height:700px)]:text-4xl lg:[@media(max-height:700px)]:text-4xl font-bold uppercase tracking-tight text-black leading-tight text-left md:text-center", titleClassName)}>
                            {title}
                        </h2>
                    </div>
                </div>

                <motion.div ref={containerRef} style={{ x }} className="flex gap-6 md:gap-20 pl-6 md:pl-40 items-center relative z-10 flex-1 min-h-0">
                    <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[300%] -translate-y-1/2 pointer-events-none rounded-full" />
                    {steps.map((step, i) => {
                        const isTop = i % 2 === 0;
                        const StepIcon = step.icon;
                        return (
                            <div key={i} data-process-step className={`relative min-w-[280px] xs:min-w-[320px] md:min-w-[400px] flex flex-col items-center ${isTop ? 'mb-8 md:mb-28 md:[@media(min-height:701px)_and_(max-height:820px)]:mb-14 md:[@media(min-height:641px)_and_(max-height:700px)]:mb-6 md:[@media(max-height:640px)]:mb-0' : 'mt-8 md:mt-28 md:[@media(min-height:701px)_and_(max-height:820px)]:mt-14 md:[@media(min-height:641px)_and_(max-height:700px)]:mt-6 md:[@media(max-height:640px)]:mt-0'}`}>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10 md:[@media(max-height:640px)]:hidden ${isTop ? 'bottom-[-1.25rem] md:bottom-[-3.5rem] md:[@media(min-height:701px)_and_(max-height:820px)]:bottom-[-1.75rem] md:[@media(min-height:641px)_and_(max-height:700px)]:bottom-[-0.75rem]' : 'top-[-1.25rem] md:top-[-3.5rem] md:[@media(min-height:701px)_and_(max-height:820px)]:top-[-1.75rem] md:[@media(min-height:641px)_and_(max-height:700px)]:top-[-0.75rem]'}`}>
                                    <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                </div>
                                <div className={`absolute left-1/2 -translate-x-1/2 md:[@media(max-height:640px)]:hidden w-[2px] h-[1.25rem] md:h-[3.5rem] md:[@media(min-height:701px)_and_(max-height:820px)]:h-[1.75rem] md:[@media(min-height:641px)_and_(max-height:700px)]:h-[0.75rem] bg-black/10 ${isTop ? 'bottom-[-1.25rem] md:bottom-[-3.5rem] md:[@media(min-height:701px)_and_(max-height:820px)]:bottom-[-1.75rem] md:[@media(min-height:641px)_and_(max-height:700px)]:bottom-[-0.75rem]' : 'top-[-1.25rem] md:top-[-3.5rem] md:[@media(min-height:701px)_and_(max-height:820px)]:top-[-1.75rem] md:[@media(min-height:641px)_and_(max-height:700px)]:top-[-0.75rem]'}`} />
                                <div className="w-full bg-white border border-black/10 p-6 md:p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden min-h-[280px] md:min-h-[320px] md:[@media(min-height:701px)_and_(max-height:820px)]:min-h-[290px] md:[@media(max-height:700px)]:min-h-[250px] md:[@media(max-height:700px)]:p-6 flex flex-col justify-start">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-5xl md:text-6xl group-hover:opacity-10 transition-opacity select-none text-black">{step.id}</div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-4 md:mb-6 md:[@media(max-height:700px)]:mb-3 group-hover:scale-110 transition-transform">
                                        <StepIcon size={22} className="md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl md:[@media(max-height:700px)]:text-lg font-bold uppercase mb-2 text-black group-hover:text-[#FF6105] transition-colors">{step.title}</h3>
                                    <p className="text-black/60 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <div className="relative shrink-0 w-full z-20 flex justify-center pt-4">
                    <a href={ctaLink || "tel:+916289753474"} className="bg-black text-white px-7 py-3.5 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                        {ctaText || "Schedule a Call"}
                    </a>
                </div>
            </div>
        </section>
    );
}


