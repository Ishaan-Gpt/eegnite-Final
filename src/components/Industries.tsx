"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";

const industries = [
    "Automobile",
    "Healthcare",
    "Pets",
    "Furniture",
    "Exports",
    "Fashion",
    "Education",
];

// Shuffle array for variety
const shuffleArray = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);

// Create different arrangements for each row
const row1 = [...industries, ...industries, ...industries, ...industries];
const row2 = [...shuffleArray(industries), ...shuffleArray(industries), ...shuffleArray(industries), ...shuffleArray(industries)];
const row3 = [...industries.reverse(), ...industries, ...industries.reverse(), ...industries];
const row4 = [...shuffleArray(industries), ...shuffleArray(industries), ...shuffleArray(industries), ...shuffleArray(industries)];
const row5 = [...industries, ...shuffleArray(industries), ...industries, ...shuffleArray(industries)];

interface IndustryTextProps {
    text: string;
    outlined?: boolean;
}

function IndustryText({ text, outlined = false }: IndustryTextProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter whitespace-nowrap cursor-pointer transition-all duration-300 px-4 md:px-8 ${isHovered
                    ? 'text-[#FF6105] scale-105'
                    : outlined
                        ? 'text-transparent'
                        : 'text-black/20'
                }`}
            style={outlined && !isHovered ? {
                WebkitTextStroke: '1px rgba(0, 0, 0, 0.15)',
                WebkitTextFillColor: 'transparent',
            } : isHovered ? {
                WebkitTextStroke: 'none',
                WebkitTextFillColor: '#FF6105',
            } : undefined}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            {text}
        </motion.span>
    );
}

interface VelocityRowProps {
    items: string[];
    baseVelocity: number;
    outlined?: boolean;
    className?: string;
}

function VelocityRow({ items, baseVelocity, outlined = false, className = "" }: VelocityRowProps) {
    const baseX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useAnimationFrame((t, delta) => {
        const moveBy = baseVelocity * (delta / 1000) * 50;
        baseX.current += moveBy;

        // Reset position for seamless loop
        if (Math.abs(baseX.current) > 50) {
            baseX.current = 0;
        }

        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${baseX.current}%)`;
        }
    });

    return (
        <div className={`flex overflow-hidden ${className}`}>
            <div
                ref={containerRef}
                className="flex items-center"
            >
                {items.map((item, i) => (
                    <IndustryText key={`${item}-${i}`} text={item} outlined={outlined} />
                ))}
            </div>
        </div>
    );
}

export default function Industries() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-white flex flex-col justify-center"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white pointer-events-none" />

            {/* Header */}
            <motion.div
                style={{ opacity }}
                className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
            >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6105] flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#FF6105]" />
                    Industries We Serve
                    <span className="w-8 h-[1px] bg-[#FF6105]" />
                </span>
            </motion.div>

            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Velocity Rows - Staggered */}
            <motion.div
                style={{ opacity }}
                className="flex flex-col justify-center gap-2 md:gap-4 py-8"
            >
                {/* Row 1 - Fast right */}
                <VelocityRow items={row1} baseVelocity={-0.8} outlined={false} />

                {/* Row 2 - Slow left, outlined */}
                <VelocityRow items={row2} baseVelocity={0.5} outlined={true} />

                {/* Row 3 - Medium right */}
                <VelocityRow items={row3} baseVelocity={-0.6} outlined={false} />

                {/* Row 4 - Fast left, outlined */}
                <VelocityRow items={row4} baseVelocity={0.9} outlined={true} />

                {/* Row 5 - Slow right */}
                <VelocityRow items={row5} baseVelocity={-0.4} outlined={false} />
            </motion.div>

            {/* Subtle bottom indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF6105]/50 to-transparent" />
            </motion.div>
        </section>
    );
}
