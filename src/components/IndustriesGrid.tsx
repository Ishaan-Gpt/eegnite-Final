"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Target, HeartPulse, Store, Factory, Briefcase } from "lucide-react";

const industriesData = [
    {
        title: "E-commerce",
        icon: ShoppingBag,
        description: "Struggling to convert visitors into buyers? We build data-driven campaigns that drive the right traffic, optimize product pages, and turn browsers into repeat customers - maximizing your revenue per click."
    },
    {
        title: "B2B & Lead Generation",
        icon: Target,
        description: "In B2B, every lead counts. We deploy targeted search, paid, and content strategies to fill your pipeline with decision-makers who are actually ready to buy - not just browse."
    },
    {
        title: "Medical & Healthcare",
        icon: HeartPulse,
        description: "Patients search before they book. We ensure your practice is visible, trusted, and chosen - with compliant digital marketing that builds credibility and drives appointment bookings consistently."
    },
    {
        title: "Retail Business",
        icon: Store,
        description: "Online or offline, retail needs visibility. We create multi-channel campaigns that drive in-store footfall and online sales - combining paid ads, social content, and SEO to put your products in front of people ready to purchase."
    },
    {
        title: "Manufacturing & Logistics",
        icon: Factory,
        description: "Industrial doesn't mean invisible. We help manufacturers and logistics brands generate qualified B2B leads with targeted digital strategies that speak the language of your buyers and decision-makers."
    },
    {
        title: "Professional Services",
        icon: Briefcase,
        description: "For attorneys, consultants, financial advisors, and agencies - reputation is everything. Our marketing for attorneys and financial marketing services are crafted to build authority, attract ideal clients, and turn your expertise into measurable business growth."
    }
];

export default function IndustriesGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

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
                    className="text-left md:text-center mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105] hidden md:inline-block" />
                        Industries We Grow
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mt-4">
                        We've Grown Businesses <span className="text-[#FF6105]">Like Yours.</span> <br className="hidden md:block" />
                        We'll Grow Yours Too
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {industriesData.map((ind, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white/80 border border-black/5 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#FF6105]/20 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-[#FF6105]/10 flex items-center justify-center text-[#FF6105] mb-6">
                                    <ind.icon size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-black uppercase tracking-tight mb-4">
                                    {ind.title}
                                </h3>
                                <p className="text-sm text-black/60 leading-relaxed font-medium">
                                    {ind.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
