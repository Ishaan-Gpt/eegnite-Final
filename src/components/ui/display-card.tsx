"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DisplayCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    metric: string;
    metricLabel: string;
    className?: string;
}

export function DisplayCard({
    icon: Icon,
    title,
    description,
    features,
    metric,
    metricLabel,
    className,
}: DisplayCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={cn("relative", className)}
        >
            {/* Background shadow card */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#E86A00]/10" />

            <div className="relative overflow-hidden rounded-3xl">
                {/* Header with gradient */}
                <div className="p-10 bg-gradient-to-br from-[#E86A00] to-[#C44800]">
                    {/* Grain texture */}
                    <div
                        className="absolute inset-0 opacity-[0.08] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
                        }}
                    />
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                            <Icon size={26} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Body */}
                <div className="p-10 bg-[#FFFEF8]">
                    <p className="text-lg text-[#6B5545] leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {features.map((f, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full bg-[#2A1810]/5 text-xs font-semibold uppercase tracking-wider text-[#6B5545]"
                            >
                                {f}
                            </span>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-[#EAE7E0]">
                        <div className="text-5xl font-bold bg-gradient-to-r from-[#E86A00] to-[#C44800] bg-clip-text text-transparent">
                            {metric}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B5545] mt-2">
                            {metricLabel}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
