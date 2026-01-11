"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
    PieChart,
    TrendingUp,
    Database,
    Activity,
    Eye,
    Share2,
    ArrowRight,
    Server,
    Network,
    Lock,
    Cpu,
    Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

// --- COMPONENTS ---

const NumberTicker = ({ value }: { value: string }) => {
    return (
        <span className="font-mono text-[#FF6105]">{value}</span>
    );
};

const GlitchText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#FF6105] opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-100 select-none">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-100 select-none">{text}</span>
        </span>
    );
};

const DataCard = ({ title, icon: Icon, desc, index }: { title: string, icon: any, desc: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-[#FF6105]/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Icon size={48} className="text-[#FF6105]" strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                <div>
                    <div className="text-xs font-mono text-white/30 mb-4">0{index + 1} // SYS.DAT</div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#FF6105] transition-colors">{title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-white/20 transition-colors">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

// --- SECTIONS ---

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center px-6 overflow-hidden">
            {/* Background Matrix */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#FF6105_1px,transparent_1px),linear-gradient(to_bottom,#FF6105_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05]" />

            <div className="max-w-[90vw] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-8 flex items-center gap-4"
                >
                    <div className="w-12 h-[2px] bg-[#FF6105]" />
                    <span className="font-mono text-[#FF6105] uppercase tracking-widest text-sm">Data Intelligence Unit</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-color-dodge"
                >
                    Clarity In <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Chaos.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 max-w-xl text-lg text-white/50 leading-relaxed pl-2 border-l border-white/20 font-light"
                >
                    We act as the central nervous system of your business. Collecting signals, processing patterns, and transmitting actionable intelligence to drive growth.
                </motion.div>
            </div>
        </section>
    );
};

const DashboardSection = () => {
    return (
        <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-10 leading-[0.9]">
                            Visualizing <br /> <span className="text-[#FF6105]">The Invisible</span>
                        </h2>
                        <ul className="space-y-8">
                            {[
                                { t: "Unified Data Lakes", d: "Aggregation of marketing, sales, and product data into a single source of truth." },
                                { t: "Predictive Models", d: "Forecasting revenue and churn using historical behavioral patterns." },
                                { t: "Real-Time Combat", d: "Live dashboards that allow immediate reaction to market shifts." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-6 items-start group">
                                    <div className="mt-1 w-2 h-2 bg-[#FF6105] rounded-full group-hover:scale-150 transition-transform" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-[#FF6105] transition-colors">{item.t}</h4>
                                        <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Abstract Dashboard UI */}
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 shadow-2xl relative z-10"
                        >
                            <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="font-mono text-xs text-[#FF6105] animate-pulse">LIVE FEED // REC</div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <div className="text-white/40 text-xs uppercase mb-2">Conversion Rate</div>
                                    <div className="text-4xl text-white font-mono">4.8<span className="text-[#FF6105]">%</span></div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <div className="text-white/40 text-xs uppercase mb-2">Active Users</div>
                                    <div className="text-4xl text-white font-mono">82<span className="text-[#FF6105]">k</span></div>
                                </div>
                            </div>

                            {/* Fake Graph */}
                            <div className="h-32 flex items-end gap-2">
                                {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.05, duration: 1 }}
                                        className="flex-1 bg-gradient-to-t from-[#FF6105]/20 to-[#FF6105] rounded-t-sm opacity-50 hover:opacity-100 transition-opacity"
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Decorative glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF6105] opacity-10 blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesGrid = () => {
    const services = [
        { t: "GA4 Architecture", d: "Complex event taxonomy and cross-domain tracking setup.", i: Activity },
        { t: "Looker Studio", d: "Custom visualization layers for stakeholders and C-suite.", i: Eye },
        { t: "Attribution", d: "Multi-touch attribution models to solve the dark social puzzle.", i: Network },
        { t: "Warehousing", d: "ETL pipelines moving data to BigQuery or Snowflake.", i: Database },
        { t: "Server-Side", d: "GTM Server-side implemenetation for 1st party data purity.", i: Server },
        { t: "Privacy Compliance", d: "Consent mode implementation and GDPR/CCPA hardening.", i: Lock },
    ];

    return (
        <section className="py-32 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-black uppercase tracking-widest text-[#FF6105] mb-4">Intelligence Suite</h2>
                    <p className="text-white/40 max-w-2xl mx-auto">Full-stack data capabilities from collection to visualization.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <DataCard key={i} title={s.t} desc={s.d} icon={s.i} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section className="h-[70vh] flex items-center justify-center bg-[#050505] px-6 text-center relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[#FF6105]/5 [mask-image:radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-12">
                    Data <br /><span className="text-[#FF6105]">Wisdom</span>
                </h2>
                <Link href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-widest overflow-hidden hover:bg-[#FF6105] hover:text-white transition-all duration-300">
                    <span className="relative z-10">Start Audit</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

// --- PAGE ---

const DataAnalysisPage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#FF6105] selection:text-white">
                <Navbar />
                <Hero />
                <DashboardSection />
                <ServicesGrid />
                <CTA />
                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default DataAnalysisPage;
