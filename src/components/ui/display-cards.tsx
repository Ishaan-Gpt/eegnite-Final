"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface DisplayCardProps {
    className?: string;
    children?: React.ReactNode;
}

function DisplayCard({ className, children }: DisplayCardProps) {
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setRotateX((y - centerY) / 20);
        setRotateY((centerX - x) / 20);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className={`relative rounded-3xl bg-gradient-to-br from-[#E86A00] to-[#C44800] p-[2px] ${className || ""}`}
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="relative h-full w-full rounded-[22px] bg-[#FFFEF8] overflow-hidden"
            >
                {children}
            </div>
        </motion.div>
    );
}

interface DisplayCardContentProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    metric: string;
    metricLabel: string;
}

function DisplayCardContent({
    icon,
    title,
    description,
    features,
    metric,
    metricLabel,
}: DisplayCardContentProps) {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-[#E86A00] to-[#C44800] relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 text-white">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Body */}
            <div className="p-8 flex-1 flex flex-col bg-[#FFFEF8]">
                <p className="text-[#6B5545] leading-relaxed mb-6">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {features.map((f, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 rounded-full bg-[#2A1810]/5 text-[10px] font-medium uppercase tracking-wider text-[#6B5545]"
                        >
                            {f}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-[#EAE7E0]">
                    <div className="text-4xl font-semibold bg-gradient-to-r from-[#E86A00] to-[#C44800] bg-clip-text text-transparent">
                        {metric}
                    </div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B5545] mt-1">
                        {metricLabel}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DisplayCard, DisplayCardContent };
