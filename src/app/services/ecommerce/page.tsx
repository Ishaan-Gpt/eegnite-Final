"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    ShoppingBag,
    Globe,
    Zap,
    BarChart,
    Smartphone,
    CreditCard,
    ArrowRight,
    Layers,
    MoveRight,
    Package,
    Tag
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

// --- COMPONENTS ---

const Marquee = () => {
    return (
        <div className="bg-black text-white py-4 overflow-hidden border-y border-white/10">
            <motion.div
                animate={{ x: "-50%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 opacity-50 font-mono uppercase text-sm tracking-widest"
            >
                {Array(20).fill("Shopify Plus / Headless / WooCommerce / Migration / ").map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </motion.div>
        </div>
    );
};

const FeatureCard = ({ title, desc, icon: Icon, i }: { title: string, desc: string, icon: any, i: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 bg-white rounded-[2rem] border border-black/5 hover:border-[#FF6105] hover:shadow-2xl hover:shadow-[#FF6105]/10 transition-all duration-500 flex flex-col justify-between min-h-[400px]"
        >
            <div>
                <div className="w-16 h-16 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 group-hover:scale-110 group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 leading-none">{title}</h3>
                <p className="text-black/50 font-medium leading-relaxed">{desc}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[#FF6105]">
                View Solution <ArrowRight size={16} />
            </div>
        </motion.div>
    );
};

const StatCard = ({ val, label }: { val: string, label: string }) => (
    <div className="bg-[#FAFAFA] rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group">
        <h3 className="text-6xl md:text-7xl font-black mb-2 group-hover:text-[#FF6105] transition-colors">{val}</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">{label}</p>
    </div>
);

// --- SECTIONS ---

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 px-6 bg-white overflow-hidden">
            <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-[#FF6105]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[90vw] mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-[#FAFAFA] mb-8"
                >
                    <div className="w-2 h-2 bg-[#FF6105] animate-pulse rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60">E-Commerce Solutions</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[11vw] leading-[0.8] font-black uppercase tracking-tighter text-black mb-12"
                >
                    Build <br />
                    <span className="text-[#FF6105]">Scale</span> <br />
                    Dominate
                </motion.h1>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <p className="text-2xl font-medium text-black/40 max-w-xl leading-relaxed">
                        We don't just build stores; we build high-performance revenue engines. Frictionless, fast, and engineered to convert at scale.
                    </p>
                    <Link href="/contact" className="group bg-[#FF6105] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-2xl">
                        <span className="flex items-center gap-2">
                            Start Building <MoveRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const SpeedSection = () => {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6105] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        Speed <span className="text-[#FF6105]">Kills</span> <br /> Churn.
                    </h2>
                    <p className="text-xl text-white/50 mb-12 max-w-md">
                        Every millisecond of latency costs you 1% in revenue. We obsess over Core Web Vitals, edge caching, and bundle optimization.
                    </p>

                    <div className="space-y-6">
                        {[
                            { l: "Performance Score", v: "99/100" },
                            { l: "Load Time", v: "< 0.8s" },
                            { l: "Uptime", v: "99.99%" }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center justify-between border-b border-white/10 pb-4"
                            >
                                <span className="font-mono text-white/40 uppercase tracking-widest text-sm">{s.l}</span>
                                <span className="text-3xl font-black text-white">{s.v}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6105] blur-[100px] opacity-20" />
                    <motion.div
                        whileHover={{ rotate: -2 }}
                        className="relative bg-white text-black p-12 rounded-[3rem] rotate-2 transition-transform duration-500"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-black/40">Real-Time Performance</h3>
                        <div className="flex items-end justify-between h-64 gap-2">
                            {[30, 45, 35, 60, 50, 75, 40, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.05, duration: 1, ease: "circOut" }}
                                    className="w-full bg-[#FF6105] rounded-t-lg"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ServicesGrid = () => {
    return (
        <section className="py-32 px-6 bg-[#FAFAFA]">
            <div className="max-w-[90vw] mx-auto">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6">
                        Complete <span className="text-[#FF6105]">Commerce Stack</span>
                    </h2>
                    <p className="text-xl text-black/40 max-w-2xl font-medium">
                        From headless architectures to checkout optimization, we handle the entire lifecycle of your digital store.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        i={0}
                        title="Headless Commerce"
                        desc="Decoupled front-ends built on Next.js for uncompromised speed and unlimited design freedom."
                        icon={Zap}
                    />
                    <FeatureCard
                        i={1}
                        title="Migration Ops"
                        desc="Zero-downtime migrations from Magento or WooCommerce to Shopify Plus. We preserve your SEO equity."
                        icon={Layers}
                    />
                    <FeatureCard
                        i={2}
                        title="Custom Themes"
                        desc="Bespoke Shopify 2.0 theme development that reflects your brand DNA without bloating the DOM."
                        icon={Package}
                    />
                    <FeatureCard
                        i={3}
                        title="CRO & UX"
                        desc="Data-driven design adjustments to checkout flows and product pages that measurably lift AOV."
                        icon={BarChart}
                    />
                    <FeatureCard
                        i={4}
                        title="Mobile First"
                        desc="Architectures designed for the 78% of users who buy on phones. Thumb-friendly and lightning-fast."
                        icon={Smartphone}
                    />
                    <FeatureCard
                        i={5}
                        title="Subscription Tech"
                        desc="Recurring revenue logic implementation using Recharge or Loop focused on reducing churn."
                        icon={Tag}
                    />
                </div>
            </div>
        </section>
    );
};

const EcommercePage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
                <Navbar />
                <Hero />
                <Marquee />
                <div className="py-20 px-6 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <StatCard val="$50M+" label="Revenue Generated" />
                        <StatCard val="3.2s" label="Avg. Load Time Reduced" />
                        <StatCard val="240%" label="Avg. Conversion Lift" />
                    </div>
                </div>
                <SpeedSection />
                <ServicesGrid />

                {/* CTA */}
                <section className="py-40 px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                            Ready To <br /> <span className="text-[#FF6105]">Dominate?</span>
                        </h2>
                        <Link href="/contact" className="inline-flex items-center gap-4 bg-black text-white px-16 py-8 rounded-full font-black uppercase tracking-widest hover:bg-[#FF6105] transition-all hover:scale-105 shadow-2xl">
                            Start Project
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default EcommercePage;
