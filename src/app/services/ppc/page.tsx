"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus, MoveRight, Target, Zap, MousePointer2, BarChart3, Globe, Shield, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

// --- MICRO COMPONENTS ---

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={`inline-block overflow-hidden ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </span>
    );
};

const MagneticButton = ({ children, className = "", href = "#" }: { children: React.ReactNode; className?: string; href?: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`inline-flex items-center justify-center cursor-pointer ${className}`}
        >
            {children}
        </motion.a>
    );
};

const GridBackground = () => (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_6rem]" />
    </div>
);

// --- SECTIONS ---

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full bg-[#050505] text-white flex flex-col justify-center items-center overflow-hidden border-b border-white/10">
            <GridBackground />

            {/* Spotlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF6105] opacity-20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FF6105] opacity-10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10 w-full max-w-[90vw] mx-auto">
                <div className="flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="px-3 py-1 border border-[#FF6105] text-[#FF6105] font-mono text-xs uppercase tracking-widest bg-[#FF6105]/5 backdrop-blur-md">
                            PPC / Paid Media
                        </div>
                        <div className="h-[1px] w-20 bg-white/20" />
                        <p className="font-mono text-xs text-white/50 uppercase tracking-widest">Revenue First. Always.</p>
                    </motion.div>

                    <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8">
                        <AnimatedText text="Unfair" /> <br />
                        <span className="flex items-center gap-4 md:gap-12">
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="h-[8vw] md:h-[10vw] aspect-video bg-[#FF6105] inline-block relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <ArrowUpRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-[50%] h-[50%]" />
                            </motion.span>
                            <AnimatedText text="Advantage" className="text-white" />
                        </span>
                    </h1>
                </div>
            </div>

            <motion.div style={{ opacity }} className="absolute bottom-10 left-10 hidden md:block">
                <p className="font-mono text-xs text-white/40 max-w-[200px] leading-relaxed">
                    SCROLL TO EXPLORE THE ENGINE BEHIND HIGH-GROWTH BRANDS
                </p>
            </motion.div>
        </section>
    );
};

const MarqueeSection = () => {
    return (
        <section className="bg-[#FF6105] py-6 overflow-hidden flex relative z-20">
            <motion.div
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                className="flex whitespace-nowrap gap-12 text-[#050505]"
            >
                {Array(20).fill("PAY FOR REVENUE / NOT CLICKS / ").map((text, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                        {text}
                    </span>
                ))}
            </motion.div>
        </section>
    );
};

const FeatureCard = ({ title, icon: Icon, desc, i }: { title: string, icon: any, desc: string, i: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative h-[400px] border-r border-b border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0F0F0F] transition-colors"
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FF6105] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-[#FF6105] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

            <div className="flex justify-between items-start">
                <div className="p-4 bg-white/5 text-[#FF6105] backdrop-blur-sm">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-white/20 text-xl">0{i + 1}</span>
            </div>

            <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-[#FF6105] transition-colors">
                    {title}
                </h3>
                <p className="text-white/50 leading-relaxed font-light">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

const ServicesGrid = () => {
    const services = [
        { title: "Search Dominance", icon: Target, desc: "Capture high-intent traffic with sniper-precision keyword targeting and algorithmic bidding strategies." },
        { title: "Social Disruption", icon: Zap, desc: "Stop the scroll on Meta & TikTok with high-octane creative that converts passive scrollers into active buyers." },
        { title: "Shopping Engines", icon: MousePointer2, desc: "Optimize product feeds for Google Shopping to dominate the digital shelf and maximize visual real estate." },
        { title: "Global Display", icon: Globe, desc: "Expand brand presence across millions of sites with programmed visual campaigns that build massive awareness." },
        { title: "Data Analytics", icon: BarChart3, desc: "We don't guess. We track every click, scroll, and purchase to attribute every dollar of revenue." },
        { title: "Brand Protection", icon: Shield, desc: "Defensive campaigns that prevent competitors from poaching your high-value branded search traffic." },
    ];

    return (
        <section className="bg-[#050505] text-white border-t border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-white/10">
                {services.map((s, i) => (
                    <FeatureCard key={i} {...s} i={i} />
                ))}
            </div>
        </section>
    );
};

const StatsSection = () => {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF6105_0%,transparent_70%)] opacity-5 pointer-events-none" />

            <div className="max-w-[90vw] mx-auto grid lg:grid-cols-2 gap-20 items-end">
                <div>
                    <h2 className="text-[5rem] lg:text-[7rem] leading-[0.85] font-black uppercase tracking-tighter mb-10">
                        Numbers <span className="text-[#FF6105] block">Don't Lie.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                        We are obsessed with ROAS. Every campaign is engineered to print profit, not just burn budget.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {[
                        { label: "Ad Spend Managed", val: "$10M+" },
                        { label: "Avg. ROAS", val: "4.5x" },
                        { label: "Client Retention", val: "94%" },
                        { label: "YOY Growth", val: "120%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#050505] p-10 flex flex-col justify-center items-center text-center group hover:bg-[#0A0A0A] transition-colors relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#FF6105]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <h3 className="text-4xl lg:text-5xl font-bold font-mono text-white mb-2 relative z-10">{stat.val}</h3>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#FF6105] relative z-10">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StickyProcess = () => {
    return (
        <section className="bg-[#050505] text-white py-32 border-b border-white/10">
            <div className="max-w-[90vw] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <div className="sticky top-40">
                            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                The <span className="text-[#FF6105]">Ascension</span><br />Protocol
                            </h2>
                            <p className="text-white/50 text-lg mb-8">
                                A battle-tested framework designed to take accounts from stagnation to aggressive scale.
                            </p>
                            <MagneticButton href="/contact" className="bg-white text-black px-8 py-4 uppercase font-bold tracking-widest hover:bg-[#FF6105] hover:text-white transition-colors">
                                Start The Protocol
                            </MagneticButton>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-40">
                        {[
                            {
                                step: "01",
                                title: "Deep Audit",
                                desc: "We tear down your ad account, analyzing historical data, attribution windows, and wasted spend. We find exactly where you're bleeding cash."
                            },
                            {
                                step: "02",
                                title: "Structural Rebuild",
                                desc: "We implement our proprietary 'Alpha-Beta' campaign structure. Isolating winners, killing losers, and setting up granular tracking pixels."
                            },
                            {
                                step: "03",
                                title: "Creative Testing",
                                desc: "We launch rapid-fire creative tests. Video, static, UGC. We let the data decide what wins, then iterate on the winners immediately."
                            },
                            {
                                step: "04",
                                title: "Scale & Dominate",
                                desc: "Once ROAS stabilizes, we uncap the budget. We expand to new audiences, lookalikes, and retargeting layers to capture total market share."
                            }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                key={i}
                                className="group"
                            >
                                <span className="text-[8rem] font-black text-white/5 leading-none block -mb-10 group-hover:text-[#FF6105]/10 transition-colors duration-500">{item.step}</span>
                                <div className="border-l-2 border-[#FF6105] pl-8 py-2">
                                    <h3 className="text-4xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                                    <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="relative h-[80vh] bg-[#050505] flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6105]/20 to-transparent opacity-50" />

            <div className="relative z-10 text-center max-w-5xl px-6">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[10vw] font-black uppercase tracking-tighter text-white leading-[0.8] mb-12 mix-blend-overlay"
                >
                    Ready To <br />Scale?
                </motion.h2>

                <MagneticButton href="/contact" className="group relative bg-[#FF6105] text-white px-20 py-8 text-xl font-bold uppercase tracking-widest overflow-hidden">
                    <span className="relative z-10 flex items-center gap-4">
                        Launch Campaign <MoveRight />
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
                </MagneticButton>
            </div>
        </section>
    );
};

// --- MAIN PAGE ---

const PPCPage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-[#050505] min-h-screen text-white selection:bg-[#FF6105] selection:text-white">
                <Navbar />

                <main>
                    <Hero />
                    <MarqueeSection />
                    <div className="py-32 px-6 max-w-[90vw] mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-20 leading-tight">
                            We don't buy clicks. <span className="text-white/40">We engineer</span> <br />
                            <span className="text-[#FF6105] border-b-2 border-[#FF6105]">Customer Acquisition Systems.</span>
                        </h2>
                    </div>
                    <ServicesGrid />
                    <StatsSection />
                    <StickyProcess />
                    <section className="border-t border-b border-white/10 bg-[#0A0A0A] py-20 px-6">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                            <div>
                                <h3 className="text-3xl font-bold uppercase mb-2">Platform Agnostic</h3>
                                <p className="text-white/50">We go where your customers are. No bias. Just performance.</p>
                            </div>
                            <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Simple text rep for logos to keep it clean/code-only */}
                                {['Google Ads', 'Meta', 'TikTok', 'LinkedIn', 'Amazon Ads'].map(p => (
                                    <span key={p} className="font-black text-xl hover:text-[#FF6105] cursor-default">{p}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                    <CTASection />
                </main>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default PPCPage;
