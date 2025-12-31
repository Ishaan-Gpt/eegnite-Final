"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FileText, DollarSign, Target, ShoppingCart, Eye, Search, TrendingUp, MapPin } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        type: "Meta Ads",
        company: "Spa & Wellness equipments",
        location: "US",
        sector: "Furniture",
        metrics: [
            { icon: DollarSign, label: "Total Revenue", value: "$2.5M" },
            { icon: Target, label: "ROAS", value: "20x" },
            { icon: ShoppingCart, label: "Total Purchases", value: "1,500" }
        ],
        image: "./result-meta.jpg",
        color: "#FF6105"
    },
    {
        id: 2,
        type: "Email Marketing",
        company: "Spa & Wellness equipments",
        location: "US",
        sector: "Furniture",
        metrics: [
            { icon: DollarSign, label: "Total Revenue", value: "$2.0M" },
            { icon: Eye, label: "Open Rate", value: "50%" }
        ],
        image: "./result-email.jpg",
        color: "#FF8040"
    },
    {
        id: 3,
        type: "SEO",
        company: "Snow Removal System",
        location: "Norway & Austria",
        sector: "Industrial Equipment",
        metrics: [
            { icon: Search, label: "Keywords Ranked", value: "36+" },
            { icon: TrendingUp, label: "Position", value: "Rank 1" }
        ],
        description: "Ranked the website for more than 36 keywords on Rank 1",
        image: "./result-seo.jpg",
        color: "#FFB080"
    }
];

export default function Results() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-15%" });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section
            ref={containerRef}
            className="relative py-16 md:py-20 overflow-hidden bg-white"
            id="results"
        >
            {/* Background Large Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.h2
                    style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                    className="text-[15vw] md:text-[20vw] font-bold leading-none tracking-tighter text-black/[0.02] whitespace-nowrap uppercase"
                >
                    SUCCESS
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="mb-12 md:mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-[clamp(2.5rem,10vw,7rem)] font-bold tracking-tight text-black leading-[1] md:leading-[0.95] uppercase">
                        REAL RESULTS,
                        <br />
                        <span className="text-[#FF6105]">REAL GROWTH</span>
                    </h2>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="flex flex-col gap-12 md:gap-20">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-10 lg:gap-16 items-center`}
                        >
                            {/* Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden group"
                            >
                                <img
                                    src={study.image}
                                    alt={study.company}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{ background: `linear-gradient(135deg, ${study.color} 0%, transparent 100%)` }}
                                />
                                {/* Report Type Badge */}
                                <div className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                                    <FileText size={14} className="text-[#FF6105] md:w-4 md:h-4" />
                                    <span className="text-xs md:text-sm font-semibold text-black">Report: {study.type}</span>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                                {/* Company Info */}
                                <div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-3">
                                        {study.company}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-black/60">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} className="text-[#FF6105] md:w-3.5 md:h-3.5" />
                                            {study.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#FF6105]" />
                                            Sector: {study.sector}
                                        </span>
                                    </div>
                                </div>

                                {/* Description if present */}
                                {study.description && (
                                    <p className="text-sm md:text-base text-black/60 leading-relaxed">
                                        {study.description}
                                    </p>
                                )}

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                                    {study.metrics.map((metric, j) => (
                                        <motion.div
                                            key={metric.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 + j * 0.1 }}
                                            className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FF6105]/5 to-white border border-[#FF6105]/10"
                                        >
                                            <metric.icon size={16} className="text-[#FF6105] mb-1.5 md:mb-2 md:w-5 md:h-5" />
                                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF6105]">
                                                {metric.value}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-black/50 uppercase tracking-wider mt-0.5 md:mt-1">
                                                {metric.label}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
