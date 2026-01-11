"use client";

import { motion } from "framer-motion";
import {
    Search, Settings, MapPin, Zap, BarChart3, Target, TrendingUp, users,
    Share2, ShoppingBag, Layers, MonitorPlay, MousePointerClick, Activity,
    Smartphone, Globe, ArrowRight, CheckCircle2, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import Link from "next/link";

export default function PPCPage() {

    // DATA CONFIGURATION
    const features = [
        {
            title: "Instant Velocity",
            desc: "SEO takes months. PPC takes minutes. We launch campaigns that put you in front of high-intent buyers immediately.",
            icon: Zap,
            colSpan: "lg:col-span-2"
        },
        {
            title: "Precision Targeting",
            desc: "We don't spray and pray. We target by location, behavior, interest, and intent to ensure every dollar hits.",
            icon: Target,
            colSpan: "lg:col-span-1"
        },
        {
            title: "ROAS Obsessed",
            desc: "Revenue is the only metric that matters. We optimize for profit, not just clicks or impressions.",
            icon: TrendingUp,
            colSpan: "lg:col-span-1"
        },
        {
            title: "Full-Funnel",
            desc: "From brand awareness top-of-funnel to aggressive retargeting at the bottom. We own the entire journey.",
            icon: Layers,
            colSpan: "lg:col-span-2"
        }
    ];

    const services = [
        { t: "Google Search Ads", d: "Capture customers exactly when they are searching for you.", i: Search },
        { t: "Social Advertising", d: "Disruptive campaigns on Meta, TikTok, and LinkedIn.", i: Share2 },
        { t: "Google Shopping", d: "Feed optimization to dominate product result pages.", i: ShoppingBag },
        { t: "Retargeting", d: "Smart sequences to convert window shoppers into buyers.", i: MousePointerClick },
        { t: "Display Networks", d: "Visual awareness across millions of websites.", i: MonitorPlay },
        { t: "App Promotion", d: "Drive installs and engagement for your mobile app.", i: Smartphone },
        { t: "YouTube Ads", d: "High-impact video campaigns that tell your story.", i: MonitorPlay },
        { t: "Conversion Rate Opt.", d: "We tweak landing pages to ensure traffic converts.", i: Activity }
    ];

    const process = [
        { step: "01", t: "The Audit", d: "We tear down your ad account to find wasted spend." },
        { step: "02", t: "Strategy", d: "Building the audience avatars and keyword architecture." },
        { step: "03", t: "The Build", d: "Writing copy, designing creative, and setting pixels." },
        { step: "04", t: "Launch", d: "Going live with controlled budget tests." },
        { step: "05", t: "Scale", d: "Doubling down on winners and killing losers." }
    ];

    return (
        <SmoothScrolling>
            <div className="bg-[#050505] min-h-screen text-white selection:bg-[#FF6105] selection:text-black font-sans">
                <Navbar />

                {/* 1. HERO SECTION - Centered & Clean (Like SEO) but Dark */}
                <section className="relative min-h-[85vh] flex items-center pt-32 px-6 overflow-hidden">
                    {/* Subtle Grid Background for "Tech/Precision" feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-bold tracking-widest uppercase text-sm">Paid Media Services</span>
                        </div>

                        <h1 className="text-5xl lg:text-[7rem] font-bold uppercase tracking-tight leading-[0.9] mb-8 text-white">
                            Pay Less. <br />
                            <span className="text-[#FF6105]">Scale Faster.</span>
                        </h1>

                        <p className="text-xl text-neutral-400 font-medium leading-relaxed max-w-2xl mb-12">
                            Stop burning budget on clicks that don't convert. We engineer high-precision ad campaigns that turn spend into predictable revenue.
                        </p>

                        <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF6105] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105">
                            Launch Campaign
                        </Link>
                    </div>
                </section>

                {/* 2. BENTO GRID - Structure from SEO Page, Styling for PPC */}
                <section className="py-20 px-6 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">Why <span className="text-[#FF6105]">EEGNITE?</span></h2>
                            <p className="text-lg text-neutral-400 max-w-2xl">
                                We treat your budget like our own. Every dollar is tracked, optimized, and held accountable.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                            {features.map((item, idx) => (
                                <div key={idx} className={`${item.colSpan} p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-[#FF6105] transition-colors duration-300 group flex flex-col justify-between`}>
                                    <div className="w-12 h-12 bg-[#FF6105]/10 rounded-xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:bg-[#FF6105] group-hover:text-black transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase mb-3">{item.title}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. SERVICES GRID - Classic Clean Layout */}
                <section className="py-24 px-6 bg-[#050505]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-4">The <span className="text-[#FF6105]">Stack</span></h2>
                            <p className="text-neutral-500 text-lg">Comprehensive coverage across every channel that matters.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((item, idx) => (
                                <div key={idx} className="bg-[#0A0A0A] p-8 rounded-[1.5rem] border border-white/5 hover:border-[#FF6105] hover:shadow-[0_0_30px_rgba(255,97,5,0.1)] transition-all duration-300 min-h-[300px] flex flex-col justify-between group">
                                    <div className="w-12 h-12 bg-[#FF6105]/10 rounded-xl flex items-center justify-center text-[#FF6105] group-hover:scale-110 transition-transform">
                                        <item.i size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase mb-3 text-white">{item.t}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PROCESS - Linear Flow (Like SEO) but darker */}
                <section className="py-24 px-6 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20 text-center">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight">Our <span className="text-[#FF6105]">Algorithm</span></h2>
                        </div>
                        <div className="grid lg:grid-cols-5 gap-0">
                            {process.map((step, idx) => (
                                <div key={idx} className="group p-8 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-[#FF6105] transition-colors duration-500 h-[300px] flex flex-col justify-between last:border-r-0">
                                    <div className="text-4xl font-bold text-white/10 group-hover:text-black/20">{step.step}</div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase mb-2 group-hover:text-black">{step.t}</h4>
                                        <p className="text-neutral-500 text-sm group-hover:text-black/70">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. METRICS - Simple Visuals */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-8">Performance <br /> <span className="text-[#FF6105]">First.</span></h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                We don't hide behind vanity metrics. We report on what actually puts money in your bank account: Conversions, CPA, and ROAS.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { l: "ROAS Increase", v: "300%" },
                                    { l: "CPA Reduction", v: "40%" },
                                    { l: "Conv. Rate", v: "3.5%" },
                                    { l: "Client Retention", v: "95%" },
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-2 border-[#FF6105] pl-6">
                                        <div className="text-3xl font-bold text-white mb-1">{stat.v}</div>
                                        <div className="text-xs font-bold uppercase text-neutral-500 tracking-widest">{stat.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] w-full bg-[#0A0A0A] rounded-[2rem] border border-white/5 p-8 flex items-center justify-center">
                            {/* Abstract Chart Graphic */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,97,5,0.1),transparent_70%)]" />
                            <div className="relative z-10 text-center">
                                <div className="text-6xl font-bold text-[#FF6105] mb-4">4.2x</div>
                                <div className="text-neutral-400 uppercase tracking-widest text-sm">Average Client ROAS</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. CTA SECTION */}
                <section className="py-32 px-6 text-center border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8 text-white">
                            Ready to <span className="text-[#FF6105]">Scale?</span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
                            Transform your ad spend into a predictable revenue engine.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF6105] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,97,5,0.3)]">
                            Start Your Campaign
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
}
