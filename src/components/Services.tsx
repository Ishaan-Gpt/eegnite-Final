"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Mail, MousePointerClick, ShoppingCart, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: "01",
        title: "SEO Services",
        description: "Transform search demand into visibility and business growth with data-backed, engineering-led SEO strategies.",
        icon: Search,
        image: "/assets/services/seo.png",
        accent: "#FF6105",
        lightAccent: "#FFF5F0",
        features: ["Technical SEO", "On-Page Optimization", "Local SEO Growth", "Authority Building"],
        link: "/services/seo"
    },
    {
        id: "02",
        title: "Email Marketing",
        description: "Convert and nurture leads with personalized campaigns and automated funnels that drive real ROI.",
        icon: Mail,
        image: "/assets/services/email.png",
        accent: "#FF6105",
        lightAccent: "#F9F9F9",
        features: ["Campaign Strategy", "Design & Copy", "Automation Flows", "Analytics"],
        link: "#"
    },
    {
        id: "03",
        title: "PPC Advertising",
        description: "Scale rapidly with targeted paid growth across high-performance platforms like Google and Meta.",
        icon: MousePointerClick,
        image: "/assets/services/ppc.png",
        accent: "#FF6105",
        lightAccent: "#FFF5F0",
        features: ["Platform Strategy", "Ad Creation", "Bid Management", "ROAS Optimization"],
        link: "#"
    },
    {
        id: "04",
        title: "E-Commerce",
        description: "Scale your online storefront with custom development and performance-driven marketing architecture.",
        icon: ShoppingCart,
        image: "/assets/services/ecommerce.png",
        accent: "#FF6105",
        lightAccent: "#F9F9F9",
        features: ["Shopify & WooCommerce", "CRO Optimization", "Growth Marketing", "Maintenance"],
        link: "#"
    }
];

function ServiceCard({ service, index, total }: { service: typeof services[0], index: number, total: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start", "end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const yTransform = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const rotate = useTransform(scrollYProgress, [0, 1], [1, -0.5]);

    return (
        <div ref={containerRef} className="min-h-[85vh] lg:h-[110vh] flex items-center justify-center relative px-4 lg:px-6 py-6 lg:py-0">
            <motion.div
                style={{ scale, opacity, rotate }}
                className="w-full max-w-7xl bg-white rounded-[28px] lg:rounded-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-black/[0.03]"
            >
                {/* Visual Section - Full Cover Glassmorphic */}
                <div
                    className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden"
                    style={{ backgroundColor: service.lightAccent }}
                >
                    <motion.div
                        style={{ y: yTransform }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] z-[5]"
                    >
                        <span className="text-[10rem] lg:text-[18rem] font-black leading-none italic text-[#FF6105]">
                            {service.id}
                        </span>
                    </motion.div>

                    {/* Glassmorphic Illustration - Full Impact Cover */}
                    <div className="absolute inset-0 z-10">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            quality={100}
                            priority={index === 0}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-6 lg:p-16 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-6">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#FF6105]" />
                        <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-black/30">Service</span>
                    </div>

                    <h2 className="text-2xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] mb-4 lg:mb-10 text-black pr-2">
                        {service.title === "E-Commerce" ? (
                            <span className="whitespace-nowrap inline-block">E-Commerce</span>
                        ) : (
                            <>
                                <span className="block">{service.title.split(' ')[0]}</span>
                                <span className="block opacity-10 [-webkit-text-stroke:1px_black] lg:[-webkit-text-stroke:1.5px_black] text-transparent">{service.title.split(' ').slice(1).join(' ')}</span>
                            </>
                        )}
                    </h2>

                    <p className="text-sm lg:text-2xl font-bold text-black/50 leading-tight mb-6 lg:mb-12 max-w-xl">
                        {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-2 lg:gap-y-4 mb-6 lg:mb-14 max-w-lg">
                        {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Activity size={10} className="lg:w-3 lg:h-3 text-[#FF6105]" />
                                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-black/40">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href={service.link}
                        className="group relative self-start"
                    >
                        <div className="flex items-center gap-3 lg:gap-4 px-6 lg:px-12 py-3 lg:py-6 bg-[#FF6105] text-white rounded-lg lg:rounded-2xl font-black uppercase text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.4em] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(255,97,5,0.3)] hover:-translate-y-1">
                            <span className="whitespace-nowrap">Learn More</span>
                            <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative bg-white overflow-hidden py-8 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-32 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#FF6105] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] text-[9px] lg:text-[10px] mb-3 lg:mb-6 block"
                        >
                            Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-black"
                        >
                            Specialized <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_#FF6105] lg:[-webkit-text-stroke:2px_#FF6105] opacity-50">Impact</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className="relative">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        total={services.length}
                    />
                ))}
            </div>
        </section>
    );
}
