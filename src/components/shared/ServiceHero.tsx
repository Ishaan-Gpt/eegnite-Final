"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
    badgeText?: string;
    title: React.ReactNode;
    subtitle: string;
    description: React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descriptionClassName?: string;
}

export function ServiceHero({
    badgeText,
    title,
    subtitle,
    description,
    ctaText = "Start Your Project",
    ctaLink = "/#contact",
    titleClassName,
    subtitleClassName,
    descriptionClassName,
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 overflow-hidden bg-white">
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
            >
                <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #FF6105 1px, transparent 1px),
                            linear-gradient(to bottom, #FF6105 1px, transparent 1px)
                        `,
                        backgroundSize: '45px 45px'
                    }}
                />
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-[#FF6105]/15 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex flex-col items-center"
                >
                    {badgeText && (
                        <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block text-center leading-normal max-w-[280px] xs:max-w-sm md:max-w-none md:whitespace-nowrap mx-auto text-balance">
                            {badgeText}
                        </p>
                    )}
                    <h1 className={cn(
                        "text-[7.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-[1.1] mb-4 md:mb-6 text-black max-w-[1200px] mx-auto px-2 text-balance",
                        titleClassName
                    )}>
                        {title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4 md:mb-12 w-full flex flex-col items-center"
                >
                    <h2 className={cn(
                        "text-sm md:text-4xl lg:text-5xl font-bold text-[#FF6105] uppercase tracking-tight text-center px-2 text-balance",
                        subtitleClassName
                    )}>
                        {subtitle}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full flex flex-col items-center"
                >
                    <p className={cn(
                        "text-xs md:text-base lg:text-lg text-black/60 font-normal leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10 px-4",
                        descriptionClassName
                    )}>
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href={ctaLink} className="inline-flex justify-center bg-[#FF6105] text-white px-7 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all shadow-xl hover:shadow-[#FF6105]/20">
                        {ctaText}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
