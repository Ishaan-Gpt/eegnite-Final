"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface GridServiceItem {
    title: string;
    icon: LucideIcon;
    description: string;
}

interface FullServiceGridProps {
    badgeText: string;
    title: React.ReactNode;
    description: string;
    services: GridServiceItem[];
    ctaText?: string;
    ctaLink?: string;
}

function FlipCard({ service }: { service: GridServiceItem }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const handleInteractionStart = () => { if (!isMobile) { setIsFlipped(true); setIsHovered(true); } };
    const handleInteractionEnd = () => { if (!isMobile) { setIsFlipped(false); setIsHovered(false); } };
    const handleClick = () => { if (isMobile) setIsFlipped(!isFlipped); };

    const IconComponent = service.icon;

    return (
        <div
            className="h-[350px] md:h-[400px] w-full perspective-1000 cursor-pointer group relative"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onClick={handleClick}
        >
            <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-r from-transparent via-transparent to-transparent overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: isHovered
                            ? ['conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)', 'conic-gradient(from 360deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)']
                            : 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 360deg)'
                    }}
                    transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 blur-md"
                    animate={{
                        background: isHovered ? 'conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 90deg, transparent 270deg, #FF6105 360deg)' : 'transparent',
                        opacity: isHovered ? 0.5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <motion.div
                className="relative w-full h-full transition-all duration-700 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute inset-0 w-full h-full bg-white rounded-[2rem] border border-black/5 shadow-sm p-8 flex flex-col items-center justify-center text-center backface-hidden group-hover:shadow-xl transition-shadow duration-300" style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute inset-0 opacity-[0.02] rounded-[2rem]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="w-20 h-20 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                        <IconComponent size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-black relative z-10">{service.title}</h3>
                    <div className="mt-8 relative z-10">
                        <span className="text-xs font-bold text-[#FF6105] uppercase tracking-widest bg-[#FFF5F0] px-4 py-2 rounded-full group-hover:bg-[#FF6105] group-hover:text-white transition-colors duration-300">View Details</span>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full bg-[#FF6105] rounded-[2rem] shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <IconComponent size={32} strokeWidth={1.5} className="text-white mb-6 opacity-80" />
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">{service.description}</p>
                </div>
            </motion.div>
        </div>
    );
}

export function FullServiceGrid({
    badgeText,
    title,
    description,
    services,
    ctaText = "Request a Proposal",
    ctaLink = "/#contact",
}: FullServiceGridProps) {
    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-12 md:mb-16 md:mx-auto md:text-center"
                >
                    <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block text-left md:text-center leading-normal max-w-[280px] xs:max-w-sm md:max-w-none md:whitespace-nowrap md:mx-auto text-balance">
                        {badgeText}
                    </p>
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black mb-6">
                        {title}
                    </h2>
                    <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <FlipCard key={idx} service={service} />
                    ))}
                </div>

                <div className="text-center mt-16 md:mt-24">
                    <Link href={ctaLink} className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        {ctaText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
