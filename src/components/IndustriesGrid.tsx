"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShoppingBag, Target, HeartPulse, Store, Factory, Briefcase, ChevronDown, ArrowRight } from "lucide-react";

const industriesData = [
    {
        title: "E-commerce",
        icon: ShoppingBag,
        href: "/industries/e-commerce",
        description: "Struggling to convert visitors into buyers? We build data-driven campaigns that drive the right traffic, optimize product pages, and turn browsers into repeat customers - maximizing your revenue per click."
    },
    {
        title: "B2B & Lead Generation",
        icon: Target,
        href: "/industries/b2b-lead-generation",
        description: "In B2B, every lead counts. We deploy targeted search, paid, and content strategies to fill your pipeline with decision-makers who are actually ready to buy - not just browse."
    },
    {
        title: "Medical & Healthcare",
        icon: HeartPulse,
        href: "/industries/medical-healthcare",
        description: "Patients search before they book. We ensure your practice is visible, trusted, and chosen - with compliant digital marketing that builds credibility and drives appointment bookings consistently."
    },
    {
        title: "Retail Business",
        icon: Store,
        href: "/industries/retail-business",
        description: "Online or offline, retail needs visibility. We create multi-channel campaigns that drive in-store footfall and online sales - combining paid ads, social content, and SEO to put your products in front of people ready to purchase."
    },
    {
        title: "Manufacturing & Logistics",
        icon: Factory,
        href: "/industries/manufacturing-logistics",
        description: "Industrial doesn't mean invisible. We help manufacturers and logistics brands generate qualified B2B leads with targeted digital strategies that speak the language of your buyers and decision-makers."
    },
    {
        title: "Professional Services",
        icon: Briefcase,
        href: "/industries/professional-services",
        description: "For attorneys, consultants, financial advisors, and agencies - reputation is everything. Our marketing for attorneys and financial marketing services are crafted to build authority, attract ideal clients, and turn your expertise into measurable business growth."
    }
];

export default function IndustriesGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const ActiveIcon = industriesData[activeIndex].icon;

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
            id="industries-serve"
        >
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[100px] pointer-events-none select-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-left lg:text-center mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105] hidden lg:inline-block" />
                        Industries We Grow
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mt-4">
                        We've Grown Businesses <span className="text-[#FF6105]">Like Yours.</span> <br className="hidden lg:block" />
                        We'll Grow Yours Too
                    </h2>
                </motion.div>

                <div className="block lg:hidden space-y-4">
                    {industriesData.map((ind, i) => {
                        const Icon = ind.icon;
                        const isOpen = openIndex === i;

                        return (
                            <div key={i} className="border border-black/5 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-[#FF6105]/20 shadow-sm">
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="w-full text-left py-5 px-6 flex items-center justify-between transition-colors bg-white hover:bg-gray-50/50"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-[#FF6105] text-white' : 'bg-[#FF6105]/10 text-[#FF6105]'}`}>
                                            <Icon size={18} />
                                        </div>
                                        <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                                            {ind.title}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={18} className="text-black/40" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-black/5 bg-gray-50/20">
                                                <p className="text-sm text-black/60 leading-relaxed font-medium mb-4">
                                                    {ind.description}
                                                </p>
                                                {ind.href && (
                                                    <Link href={ind.href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6105] hover:gap-3 transition-all">
                                                        Explore Industry <ArrowRight size={12} />
                                                    </Link>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}

                </div>

                <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[450px]">
                    <div className="col-span-5 flex flex-col gap-2">
                        {industriesData.map((ind, i) => {
                            const isActive = activeIndex === i;
                            const button = (
                                <button
                                    key={i}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    className={`text-left py-4 px-6 rounded-2xl transition-all duration-300 w-full relative flex items-center justify-between ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-gray-50 to-transparent border-l-4 border-[#FF6105] text-black font-extrabold translate-x-2' 
                                            : 'border-l-4 border-transparent text-black/35 hover:text-black/60 hover:translate-x-1'
                                    }`}
                                >
                                    <span className="text-xl xl:text-2xl uppercase tracking-tight">
                                        {ind.title}
                                    </span>
                                    {ind.href && isActive && (
                                        <div
                                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#FF6105] bg-[#FF6105]/10 px-3 py-1 rounded-full hover:bg-[#FF6105] hover:text-white transition-colors"
                                        >
                                            View <ArrowRight size={10} />
                                        </div>
                                    )}
                                </button>
                            );

                            return ind.href ? <Link key={i} href={ind.href}>{button}</Link> : button;
                        })}
                    </div>

                    <div className="col-span-7">
                        <div className="bg-white border border-black/5 rounded-3xl p-12 shadow-xl relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF6105]/10 to-transparent blur-3xl pointer-events-none select-none" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col justify-center h-full"
                                >
                                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-medium tracking-wide max-w-xl">
                                        {industriesData[activeIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
