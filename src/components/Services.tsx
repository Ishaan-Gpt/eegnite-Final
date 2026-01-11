"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, MousePointerClick, ShoppingBag, BarChart2, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

// Service Data with Pillars
const services = [
    {
        id: "seo",
        title: "SEO",
        description: "Dominate search rankings with technical precision and content strategy.",
        icon: Search,
        pillars: [
            "Technical Site Audits",
            "Keyword Strategy",
            "On-Page Optimization",
            "Authority Building"
        ],
        theme: "light",
        href: "/services/seo"
    },
    {
        id: "email",
        title: "Email Marketing",
        description: "Turn subscribers into loyal customers with automated flows.",
        icon: Mail,
        pillars: [
            "Campaign Strategy",
            "Automation Workflows",
            "List Segmentation",
            "A/B Testing"
        ],
        theme: "orange",
        href: "/services/email-marketing"
    },
    {
        id: "ppc",
        title: "PPC",
        description: "Instant visibility and traffic through targeted ad campaigns.",
        icon: MousePointerClick,
        pillars: [
            "Google Ads Management",
            "Social Media Ads",
            "Retargeting Campaigns",
            "Conversion Tracking"
        ],
        theme: "light",
        href: "/services/ppc"
    },
    {
        id: "ecommerce",
        title: "E-Commerce",
        description: "Scale your online store with optimized user journeys.",
        icon: ShoppingBag,
        pillars: [
            "Platform Migration",
            "Conversion Rate Opt",
            "Store Development",
            "Cart Recovery"
        ],
        theme: "orange",
        href: "/services/ecommerce"
    },
    {
        id: "data",
        title: "Data Analysis",
        description: "Make informed decisions with deep data insights.",
        icon: BarChart2,
        pillars: [
            "Custom Dashboards",
            "User Behavior Tracking",
            "Attribution Modeling",
            "ROI Analysis"
        ],
        theme: "light",
        href: "/services/data-analysis"
    }
];

// Mobile Accordion Item
const AccordionItem = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-black/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 px-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#FF6105] uppercase tracking-widest">0{index + 1}</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black">{service.title}</h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <Minus size={20} className="text-[#FF6105]" /> : <Plus size={20} className="text-black/40" />}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                    >
                        <div className="p-6 pt-0">
                            <p className="text-black/60 mb-6 font-medium leading-relaxed">{service.description}</p>
                            <div className="grid grid-cols-1 gap-3 mb-6">
                                {service.pillars.map((pillar, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-bold text-black/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6105]" />
                                        {pillar}
                                    </div>
                                ))}
                            </div>
                            <Link href={service.href} className="inline-flex items-center gap-2 text-[#FF6105] font-bold uppercase text-sm tracking-widest hover:gap-4 transition-all">
                                View Service <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Desktop Stacked Card
const ServiceCard = ({ service, index, total }: { service: typeof services[0], index: number, total: number }) => {
    const isOrange = service.theme === "orange";

    return (
        <div
            className="sticky top-[15vh] mb-[5vh] w-full"
            style={{
                height: `calc(70vh + ${index * 20}px)`,
                zIndex: index + 1
            }}
        >
            <Link href={service.href} className="block group">
                <div
                    className={`
                        relative h-[70vh] rounded-[2rem] p-12 lg:p-16 flex flex-col justify-between border border-black/5 shadow-xl transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl
                        ${isOrange ? 'bg-[#FF6105] text-white' : 'bg-white text-black'}
                    `}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <span className={`text-lg font-bold tracking-widest px-4 py-1.5 rounded-full border ${isOrange ? 'border-white/30 text-white' : 'border-black/10 text-black/50'}`}>
                                0{index + 1}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest text-sm translate-x-4 group-hover:translate-x-0 duration-300 ${isOrange ? 'text-white' : 'text-[#FF6105]'}`}>
                                Explore
                            </div>
                            <service.icon size={48} strokeWidth={1} className={`${isOrange ? 'text-white' : 'text-[#FF6105]'} transition-transform group-hover:scale-110`} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <h3 className={`text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 ${isOrange ? 'text-white' : 'text-black'}`}>
                                {service.title}
                            </h3>
                            <p className={`text-xl font-medium leading-relaxed max-w-md ${isOrange ? 'text-white/80' : 'text-black/60'}`}>
                                {service.description}
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className={`p-8 rounded-3xl ${isOrange ? 'bg-white/10 backdrop-blur-sm' : 'bg-[#FAFAFA]'}`}>
                            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 ${isOrange ? 'text-white/80' : 'text-black/40'}`}>
                                Major Pillars
                            </h4>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {service.pillars.map((pillar, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${isOrange ? 'bg-white' : 'bg-[#FF6105]'}`} />
                                        <span className={`text-sm font-bold ${isOrange ? 'text-white' : 'text-black/80'}`}>
                                            {pillar}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decoration */}
                    <div className={`absolute bottom-8 right-8 text-[12rem] leading-none font-black opacity-[0.03] select-none pointer-events-none ${isOrange ? 'text-white' : 'text-black'}`}>
                        0{index + 1}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default function Services() {
    return (
        <section className="bg-white py-20 lg:py-32" id="services">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="mb-20 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                    >
                        <div className="w-12 h-1 bg-[#FF6105]" />
                        <span className="text-[#FF6105] font-black tracking-[0.2em] uppercase">What We Do</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-8xl font-black uppercase tracking-tighter text-black"
                    >
                        Our <span className="text-[#FF6105]">Services</span>
                    </motion.h2>
                </div>

                {/* Desktop Layout (Hidden on Mobile) */}
                <div className="hidden lg:block relative pb-[10vh]">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} total={services.length} />
                    ))}
                </div>

                {/* Mobile Layout (Accordion) */}
                <div className="lg:hidden border-t border-black/10">
                    {services.map((service, index) => (
                        <AccordionItem key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
