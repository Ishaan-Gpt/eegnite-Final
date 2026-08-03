"use client";
 
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Target, ShieldCheck, Cpu, Globe } from "lucide-react";
 
export default function WhyKolkata() {
    const sectionRef = useRef<any>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
 
    const points = [
        {
            icon: Target,
            title: "We Think in Revenue, Not in Reports",
            description: "Impressions and follower counts are not your growth goals. Revenue, leads, and customer acquisition are. Every strategy we run is evaluated against the business outcome it produces."
        },
        {
            icon: Cpu,
            title: "We Build Integrated Systems, Not Siloed Campaigns",
            description: "SEO, paid ads, social, email, and your website aligned to one strategy and one revenue goal. No agency-hopping. No misaligned vendors. One team. One direction."
        },
        {
            icon: ShieldCheck,
            title: "We Are Fully Transparent",
            description: "You see exactly what we do, why we do it, and what it produces. Fortnightly updates, monthly reports, and a team that never hides behind jargon or vanity numbers."
        },
        {
            icon: Globe,
            title: "We Know the Kolkata Market",
            description: "Traditional business culture going digital. Seasonal demand patterns. Hyper-local competition. Consumers switching to online-first research. We understand how Kolkata buys and builds strategies that match."
        },
        {
            icon: Users,
            title: "We Scale With Your Ambition",
            description: "Whether you are a single-location retailer or a multi-market B2B brand, EEGNITE builds strategies that match your current stage and grow as your ambition demands."
        }
    ];
 
    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden border-t border-white/5"
            id="why-kolkata"
        >
            {/* Glowing background accent orbs */}
            <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] rounded-full bg-[#FF6105]/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-[#FF6105]/5 blur-[130px] pointer-events-none" />
 
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Left Column - Header */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3"
                        >
                            <span className="w-8 h-[2px] bg-[#FF6105]" />
                            Why Choose EEGNITE
                        </motion.span>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-[2.75rem] font-black uppercase tracking-tight leading-[1.1] text-white"
                        >
                            Why Kolkata <br />
                            Businesses Choose <br />
                            <span className="text-[#FF6105]">EEGNITE</span>
                        </motion.h2>
 
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-white/60 text-sm md:text-base leading-relaxed font-medium max-w-md"
                        >
                            Kolkata's digital marketing market is noisy. Agencies selling packages at low price points, reporting on metrics that mean nothing for your bottom line, and disappearing after the contract renews. EEGNITE was built as the alternative. A performance-first digital marketing company in Kolkata where every strategy is tied to your revenue and every campaign is held accountable to a real business outcome.
                        </motion.p>
                    </div>
 
                    {/* Right Column - Cards List */}
                    <div className="lg:col-span-7 space-y-6">
                        {points.map((point, index) => {
                            const Icon = point.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF6105]/30 hover:bg-white/[0.05] transition-all duration-500 shadow-sm"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF6105]/10 text-[#FF6105] flex items-center justify-center border border-[#FF6105]/20 group-hover:bg-[#FF6105] group-hover:text-white group-hover:border-[#FF6105] transition-all duration-500">
                                        <Icon size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#FF6105] transition-colors">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/50 text-xs md:text-sm leading-relaxed font-medium">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
 
                </div>
            </div>
        </section>
    );
}
