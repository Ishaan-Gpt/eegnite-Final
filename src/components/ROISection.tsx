"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { TrendingUp, Diamond, Trophy, Target } from "lucide-react";

const stats = [
    {
        icon: TrendingUp,
        value: 8,
        suffix: " Years",
        label: "of Excellence"
    },
    {
        icon: Diamond,
        value: 95,
        suffix: "%",
        label: "Client Retention"
    },
    {
        icon: Trophy,
        value: 20,
        suffix: "x",
        label: "Return on Ad Spend"
    },
    {
        icon: Target,
        value: 100,
        suffix: "%",
        label: "Dedicated to Success"
    }
];

interface AnimatedCounterProps {
    value: number;
    suffix: string;
    isInView: boolean;
}

function AnimatedCounter({ value, suffix, isInView }: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 80 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    return (
        <span className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
}

interface StatRowProps {
    stat: typeof stats[0];
    index: number;
    isInView: boolean;
}

function StatRow({ stat, index, isInView }: StatRowProps) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group"
        >
            {/* Animated divider line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="h-[1px] bg-black/10 origin-left"
            />

            <motion.div
                animate={{
                    backgroundColor: isHovered ? 'rgba(255, 97, 5, 0.03)' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
                className="py-8 md:py-10 flex items-center -mx-4 px-4 rounded-xl"
            >
                {/* Left side: Icon + Value */}
                <div className="flex items-center gap-6 md:gap-8 flex-1">
                    {/* Icon - Bigger */}
                    <motion.div
                        animate={{
                            rotate: isHovered ? 10 : 0,
                            scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-12 md:w-16 flex-shrink-0"
                    >
                        <Icon
                            size={36}
                            className={`transition-all duration-300 ${isHovered ? 'text-[#FF6105] drop-shadow-[0_0_10px_rgba(255,97,5,0.5)]' : 'text-[#FF6105]'
                                }`}
                            strokeWidth={1}
                        />
                    </motion.div>

                    {/* Value - Thinner text */}
                    <motion.div
                        animate={{ scale: isHovered ? 1.02 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-all duration-300 text-[#FF6105]`}>
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                            />
                        </span>
                    </motion.div>
                </div>

                {/* Right side: Label - Right aligned */}
                <motion.p
                    animate={{ x: isHovered ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-lg md:text-xl font-light text-right transition-colors duration-300 ${isHovered ? 'text-[#FF6105]' : 'text-black/70'
                        }`}
                >
                    {stat.label}
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default function ROISection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-white overflow-hidden"
        >
            {/* Floating background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-[#FF6105]/5 blur-[80px]"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
                {/* Header Row - Title left, Description right */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 mb-16">
                    {/* Left side - Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight leading-[0.95] lg:flex-1"
                    >
                        <span>ROI-Focused</span>
                        <br />
                        <span className="text-[#FF6105]">Agency</span>
                    </motion.h2>

                    {/* Right side - Description aligned right */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:flex-1 lg:text-right"
                    >
                        <p className="text-base md:text-lg text-black/60 leading-relaxed">
                            We prioritize delivering value to our clients. From Organic Search to Paid Media and Business Intelligence, our teams are driven by data and proven results to ensure your brand's success.
                        </p>
                    </motion.div>
                </div>

                {/* Stats - Horizontal Lines Style with Labels right aligned */}
                <div className="space-y-0">
                    {stats.map((stat, index) => (
                        <StatRow
                            key={stat.label}
                            stat={stat}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                    {/* Bottom border with animation */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-[1px] bg-black/10 origin-left"
                    />
                </div>
            </div>
        </section>
    );
}
