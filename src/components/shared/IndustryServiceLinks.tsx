"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, LucideIcon } from "lucide-react";

interface ServiceLinkItem {
    title: string;
    icon: LucideIcon;
    desc: string;
    href: string;
}

interface IndustryServiceLinksProps {
    badgeText: string;
    title: React.ReactNode;
    description: string;
    services: ServiceLinkItem[];
}

const MobileServiceItem = ({
    service,
    id,
    isOrange,
}: {
    service: ServiceLinkItem;
    id: string;
    isOrange: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-black/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left py-6 px-4 flex items-center justify-between transition-colors ${
                    isOpen && isOrange ? "bg-[#FF6105] text-white" : ""
                } ${isOpen && !isOrange ? "bg-black/5" : ""}`}
            >
                <div className="flex flex-col">
                    <span
                        className={`text-xs font-bold tracking-[0.2em] mb-2 ${
                            isOpen && isOrange ? "text-white/70" : "text-black/40"
                        }`}
                    >
                        {id} — SERVICE
                    </span>
                    <h3
                        className={`text-2xl font-black uppercase tracking-tighter ${
                            isOpen && isOrange ? "text-white" : "text-black"
                        }`}
                    >
                        {service.title}
                    </h3>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className={isOpen && isOrange ? "text-white" : "text-black"} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className={`p-6 pb-8 flex flex-col gap-6 ${isOrange ? "bg-orange-50" : "bg-gray-50"}`}>
                            <p className="text-sm font-medium leading-relaxed text-black/60">
                                {service.desc}
                            </p>
                            <Link
                                href={service.href}
                                className="flex items-center justify-center w-full gap-2 py-3 bg-[#FF6105] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
                            >
                                Explore Service <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServiceCard = ({
    service,
    id,
    isOrange,
}: {
    service: ServiceLinkItem;
    id: string;
    isOrange: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start", "end end", "end start"],
    });

    const rawScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const scale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const Icon = service.icon;

    return (
        <div ref={containerRef} className="sticky top-0 min-h-screen py-12 flex items-center justify-center">
            <motion.div
                style={{ scale, opacity }}
                className={`
                    w-full max-w-[95vw] lg:max-w-7xl rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-black/5 min-h-[450px]
                    ${isOrange ? "bg-[#FF6105] text-white" : "bg-white text-black"}
                `}
            >
                <div className="flex flex-col mb-6 relative z-10 w-full flex-1 justify-between">
                    <div>
                        <div className="flex items-center justify-between w-full mb-6">
                            <span className={`font-bold tracking-[0.2em] uppercase text-sm ${isOrange ? "text-white/70" : "text-black/40"}`}>
                                {id} — Service
                            </span>
                            <Link
                                href={service.href}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 ${
                                    isOrange ? "bg-white text-[#FF6105]" : "bg-[#FF6105] text-white"
                                }`}
                            >
                                Explore Service <ArrowRight size={14} />
                            </Link>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            {service.title}
                        </h2>
                    </div>

                    <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed font-medium ${isOrange ? "text-white/80" : "text-black/60"}`}>
                        {service.desc}
                    </p>
                </div>

                <div className={`absolute bottom-0 right-0 p-8 opacity-[0.07] pointer-events-none ${isOrange ? "text-white" : "text-[#FF6105]"}`}>
                    <Icon size={260} strokeWidth={0.8} />
                </div>
            </motion.div>
        </div>
    );
};

export function IndustryServiceLinks({
    badgeText,
    title,
    description,
    services,
}: IndustryServiceLinksProps) {
    return (
        <section className="bg-white py-20 lg:py-40">
            <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-16 text-left lg:text-center">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FF6105] mb-4 leading-normal text-balance lg:mx-auto lg:text-center">
                    {badgeText}
                </p>
                <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold uppercase tracking-tighter leading-none text-black">
                    {title}
                </h2>
                <p className="mt-6 max-w-2xl lg:mx-auto text-sm md:text-lg text-black/50 font-medium tracking-wide">
                    {description}
                </p>
            </div>

            <div className="relative hidden lg:block">
                {services.map((service, index) => {
                    const idString = `0${index + 1}`;
                    const isOrange = index % 2 === 0;
                    return (
                        <ServiceCard
                            key={index}
                            service={service}
                            id={idString}
                            isOrange={isOrange}
                        />
                    );
                })}
            </div>

            <div className="block lg:hidden px-4">
                <div className="rounded-2xl border border-black/10 overflow-hidden">
                    {services.map((service, index) => {
                        const idString = `0${index + 1}`;
                        const isOrange = index % 2 === 0;
                        return (
                            <MobileServiceItem
                                key={index}
                                service={service}
                                id={idString}
                                isOrange={isOrange}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
