"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
    MapPin,
    BarChart3,
    Zap,
    ArrowRight,
    TrendingUp,
    LayoutDashboard,
    Cpu,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import { Compare } from "@/components/ui/compare";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

// --- CUSTOM HERO GRAPH COMPONENT ---
const HeroGraph = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const graphRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!graphRef.current) return;
        const rect = graphRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setIsHovering(true);
    };

    return (
        <div className="w-full h-[400px] md:h-[500px] bg-white rounded-3xl border border-black/5 shadow-xl p-6 md:p-10 relative overflow-hidden flex flex-col">
            {/* Header / Tabs */}
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 border-b border-black/5 pb-6 justify-between items-end">
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <span className="text-black/40 text-xs font-semibold uppercase tracking-wider mb-1">Impact</span>
                        <span className="text-3xl font-bold text-[#FF6105]">+142%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black/40 text-xs font-semibold uppercase tracking-wider mb-1">ROI</span>
                        <span className="text-3xl font-bold text-black">12.5x</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-1 bg-gray-300 rounded-full" />
                        <span className="text-black/40">6 Months Ago</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-1 bg-[#FF6105] rounded-full" />
                        <span className="text-[#FF6105]">Current</span>
                    </div>
                </div>
            </div>

            {/* The Graph Area */}
            <div
                ref={graphRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsHovering(false)}
                className="relative flex-grow w-full cursor-crosshair"
            >
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-black/20 font-mono pointer-events-none">
                    {[100, 75, 50, 25, 0].map((v, i) => (
                        <div key={i} className="w-full border-t border-black/5 flex items-center h-0 relative">
                            <span className="absolute -left-0 -top-2">{v}</span>
                        </div>
                    ))}
                </div>

                {/* Animated Line Path */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF6105" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#FF6105" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* "Before" Line (Gray, Flat/Erratic) */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M0,300 L150,310 L300,290 L450,250 L600,280 L750,260 L900,240 L1200,220"
                        fill="none"
                        stroke="#e5e5e5"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* "Current" Line (Orange, Steep Zigzag) */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,350 L100,280 L200,320 L300,200 L400,240 L600,100 L800,120 L1000,50 L1200,20"
                        fill="none"
                        stroke="#FF6105"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M0,350 L100,280 L200,320 L300,200 L400,240 L600,100 L800,120 L1000,50 L1200,20 L1200,400 L0,400 Z"
                        fill="url(#gradientArea)"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Interactive Scan Line */}
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute top-0 bottom-0 w-[1px] bg-black/10 pointer-events-none flex flex-col justify-end pb-12 items-center"
                        style={{ left: mousePos.x }}
                    >
                        <div className="bg-black text-white text-[10px] py-1 px-2 rounded mb-2 whitespace-nowrap">
                            Vol: {Math.floor((350 - mousePos.y) * 120)}
                        </div>
                        <div className="w-3 h-3 bg-[#FF6105] rounded-full ring-4 ring-white shadow-lg" />
                    </motion.div>
                )}

                {/* Floating Interactive Points (Original) - Kept/Hidden or Simplified */}
                {!isHovering && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2, type: "spring" }}
                        className="absolute top-[20%] right-[10%] w-4 h-4 bg-white border-2 border-[#FF6105] rounded-full shadow-lg z-10"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FF6105] text-white text-[10px] py-1 px-3 rounded-lg whitespace-nowrap shadow-xl">
                            <span className="font-bold">Now</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

// --- BENTO UI COMPONENTS ---

const CodeWindow = () => (
    <div className="bg-white border border-black/5 p-6 rounded-3xl h-full w-full relative group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
            </div>
            <div className="px-3 py-1 bg-[#FFF5F0] rounded-full text-[10px] font-bold text-[#FF6105] uppercase tracking-wider">
                System Audit
            </div>
        </div>
        <div className="flex-grow relative font-mono text-xs sm:text-sm text-black/50 space-y-3">
            <div className="flex items-center gap-2">
                <span className="text-[#FF6105]">Γ₧£</span>
                <span>Initializing Core Web Vitals...</span>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
            >
                <span className="text-green-500">Γ£ô</span>
                <span>LCP: 0.8s (Optimized)</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-center gap-2"
            >
                <span className="text-green-500">Γ£ô</span>
                <span>FID: 12ms (Optimized)</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-2"
            >
                <span className="text-green-500">Γ£ô</span>
                <span>CLS: 0.01 (Stable)</span>
            </motion.div>

            {/* Scanning Line */}
            <motion.div
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6105] to-transparent opacity-50 pointer-events-none"
            />
        </div>
    </div>
);

const RevenueCard = () => (
    <div className="bg-[#FFF5F0] p-8 rounded-3xl h-full w-full relative overflow-hidden group hover:border-[#FF6105]/20 border border-transparent transition-all">
        <div className="relative z-10 flex justify-between items-start">
            <div className=" p-3 bg-white rounded-xl shadow-sm text-[#FF6105]">
                <TrendingUp size={24} />
            </div>
            <div className="text-right">
                <div className="text-4xl font-bold text-[#FF6105]">+142%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/60 mt-1">YoY Revenue</div>
            </div>
        </div>

        {/* Animated Bars */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-8 pb-0 gap-3">
            {[30, 45, 40, 60, 55, 75, 90].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="w-full bg-white rounded-t-md opacity-50 group-hover:opacity-100 group-hover:bg-[#FF6105] transition-all duration-500"
                />
            ))}
        </div>
    </div>
);

const LocalMapCard = () => (
    <div className="bg-white border border-black/5 p-2 rounded-3xl h-full w-full shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_100%)]" />
        {/* Abstract Map Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

        <div className="relative z-10 h-full flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
                <div className="p-3 bg-[#FF6105] text-white rounded-xl shadow-lg">
                    <MapPin size={24} />
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold border border-black/10 uppercase tracking-wide">
                    Local 3-Pack
                </div>
            </div>

            {/* Simulated Pins */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[40%] left-[60%] w-3 h-3 bg-[#FF6105] rounded-full shadow-xl"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#FF6105] animate-ping rounded-full opacity-50" />
                </motion.div>
                <div className="absolute top-[40%] left-[60%] -translate-y-8 -translate-x-1/2 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">#1 Rank</div>
            </div>

            <div>
                <h4 className="text-xl font-bold text-black">Local Dominance</h4>
                <p className="text-black/50 text-xs mt-1">Capture high-intent nearby traffic.</p>
            </div>
        </div>
    </div>
);

const HierarchicalBento = () => {
    return (
        <section className="min-h-screen py-32 px-6 bg-white border-t border-black/5">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-6 text-black">
                        Multi-Layer <span className="text-[#FF6105]">Intelligence</span>
                    </h2>
                    <p className="text-black/50 text-xl font-medium max-w-2xl mx-auto">
                        An ecosystem of interconnected strategies driving your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-[350px_350px] gap-6">
                    {/* 1. Engineering - Top Left Large */}
                    <div className="md:col-span-2 lg:col-span-2 row-span-1">
                        <div className="h-full p-8 bg-[#F9F9F9] rounded-[2.5rem] relative overflow-hidden group hover:bg-white border border-transparent hover:border-black/5 transition-colors duration-500">
                            <div className="grid grid-cols-2 gap-8 h-full">
                                <div className="flex flex-col justify-center relative z-10">
                                    <Cpu size={40} className="text-[#FF6105] mb-6" />
                                    <h3 className="text-2xl font-bold uppercase mb-2 text-black">Technical Core</h3>
                                    <p className="text-black/50 text-sm leading-relaxed mb-6">Semantic HTML, Schema Markup, and Server-Side Rendering ensuring your foundation is indexable.</p>
                                    <div className="flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-xs font-mono text-black/40">Status: Optimized</span>
                                    </div>
                                </div>
                                <div className="h-full pt-4">
                                    <CodeWindow />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Revenue - Top Right */}
                    <div className="md:col-span-1 lg:col-span-2 row-span-1">
                        <RevenueCard />
                    </div>

                    {/* 3. Local - Bottom Left */}
                    <div className="md:col-span-1 lg:col-span-1 row-span-1">
                        <LocalMapCard />
                    </div>

                    {/* 4. Content Velocity - Bottom Middle Large */}
                    <div className="md:col-span-2 lg:col-span-2 row-span-1 bg-white border border-black/5 rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Zap size={200} className="text-[#FF6105]" />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-12 h-12 bg-[#FF6105] text-white rounded-xl flex items-center justify-center mb-4">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-3xl font-bold uppercase text-black">Content <span className="text-[#FF6105]">Velocity</span></h3>
                            <p className="text-black/50 text-lg max-w-md mt-2">Scale production without compromising authority. We deploy clustered content strategies that capture long-tail intent.</p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="bg-[#FFF5F0] px-4 py-2 rounded-full text-[#FF6105] text-xs font-bold uppercase">40+ Articles/Mo</div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Transparency - Bottom Right */}
                    <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-[#FF6105] rounded-[2.5rem] p-8 text-white flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />

                        <LayoutDashboard size={32} className="text-white" />
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-1 text-white">Live <br /><span className="text-black/50">Dashboards</span></h3>
                            <p className="text-white/80 text-xs">Real-time data. No PDF delays.</p>
                        </div>
                        <div className="w-full bg-black/10 h-1 mt-4 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                className="h-full bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- INDUSTRIES COMPONENT REFINED ---

const IndustriesList = () => {
    const industries = [
        { title: "Healthcare & Clinics", id: "01", icon: <Zap /> },
        { title: "SaaS & Technology", id: "02", icon: <Cpu /> },
        { title: "E-Commerce Retail", id: "03", icon: <TrendingUp /> },
        { title: "Legal & Professional", id: "04", icon: <LayoutDashboard /> },
        { title: "Real Estate", id: "05", icon: <MapPin /> },
        { title: "Financial Services", id: "06", icon: <BarChart3 /> }
    ];

    return (
        <section className="min-h-screen py-32 px-6 bg-white flex items-center">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter text-black">
                        Industries <span className="text-[#FF6105]">We Power</span>
                    </h2>
                    <p className="text-black/40 text-sm font-bold uppercase tracking-widest mb-2 md:mb-4">
                        Sector-Specific Expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FAFAFA] border border-transparent hover:border-[#FF6105] p-10 h-[320px] flex flex-col justify-between rounded-[2rem] group hover:bg-[#FF6105] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-sm hover:shadow-2xl"
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] transition-all" />

                            <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 group-hover:text-white transition-all scale-150 transform origin-top-right rotate-12">
                                {item.icon}
                            </div>

                            <div className="flex justify-between items-start z-10">
                                <span className="text-sm font-mono text-[#FF6105] group-hover:text-white transition-colors border border-[#FF6105]/20 group-hover:border-white/20 px-3 py-1 rounded-full">/{item.id}</span>
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-[#FF6105] shadow-lg">
                                    <ArrowRight size={20} />
                                </div>
                            </div>

                            <div className="z-10 relative">
                                <h3 className="text-3xl font-bold text-black group-hover:text-white mb-3 leading-tight transition-colors">
                                    {item.title}
                                </h3>
                                <div className="h-[1px] w-12 bg-[#FF6105] group-hover:bg-white mb-3 transition-colors" />
                                <p className="text-black/40 text-sm group-hover:text-white/80 transition-colors font-medium">
                                    Specialized strategies driving sector growth.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- COMPARISON SECTION (Second Section) ---
const SeoComparisonSection = () => {
    return (
        <section className="min-h-screen py-24 px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-black">
                        The <span className="text-[#FF6105]">Difference</span>
                    </h2>
                    <p className="text-black/60 text-xl font-medium max-w-2xl mx-auto">
                        Interact to see why leading brands switch to EEGNITE.
                    </p>
                </div>

                <div className="w-full max-w-6xl mx-auto h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                    <Compare
                        slideMode="drag"
                        firstContent={
                            <div className="w-full h-full bg-white flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                <h3 className="text-5xl lg:text-7xl font-bold text-[#FF6105] mb-8 relative z-10 uppercase tracking-tighter">EEGNITE Solution</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl relative z-10 w-full">
                                    <div className="p-8 rounded-3xl bg-[#FFF5F0] border border-[#FF6105]/20 hover:scale-105 transition-transform">
                                        <h4 className="text-2xl font-bold text-[#FF6105] mb-2">Revenue First</h4>
                                        <p className="text-black/60">We track dollars, not just clicks. Every strategy connects to ROI.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-[#FF6105] text-white hover:scale-105 transition-transform">
                                        <h4 className="text-2xl font-bold text-white mb-2">Engineering Led</h4>
                                        <p className="text-white/90">Deep technical optimization using Next.js, React, and server-side rendering.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-lg hover:scale-105 transition-transform">
                                        <h4 className="text-2xl font-bold text-black mb-2">Transparent</h4>
                                        <p className="text-black/60">Real-time dashboards. You see exactly what we see. No hiding.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white border-2 border-[#FF6105] text-black hover:scale-105 transition-transform">
                                        <h4 className="text-2xl font-bold text-[#FF6105] mb-2">Rapid Content</h4>
                                        <p className="text-black/60">High-velocity content production that scales without quality loss.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        secondContent={
                            <div className="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center p-12 text-center relative grayscale">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                <h3 className="text-5xl lg:text-7xl font-bold text-black/20 mb-8 relative z-10 uppercase tracking-tighter">Traditional Agency</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl relative z-10 w-full opacity-50">
                                    <div className="p-8 rounded-3xl bg-white border border-black/5">
                                        <h4 className="text-2xl font-bold text-black mb-2">Rankings Only</h4>
                                        <p className="text-black/60">Focus on vanity metrics that don't always translate to sales.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white border border-black/5">
                                        <h4 className="text-2xl font-bold text-black mb-2">Basic Audits</h4>
                                        <p className="text-black/60">Generic PDF reports generated by automated tools.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white border border-black/5">
                                        <h4 className="text-2xl font-bold text-black mb-2">Opaque Work</h4>
                                        <p className="text-black/60">"Trust us, we're working on it." Monthly reporting delays.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white border border-black/5">
                                        <h4 className="text-2xl font-bold text-black mb-2">Slow Movement</h4>
                                        <p className="text-black/60">Weeks to approve simple content changes.</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
}

// --- REFINED CTA SECTION (Ready to Dominate) ---
const DominateCTA = () => null;

// --- PROTOCOL TIMELINE COMPONENT ---
const ProtocolTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        { t: "Diagnostic Audit", d: "We start by dismantling your current setup. Deep dive into technical, on-page, and competitive landscape to find the cracks." },
        { t: "Strategic Architecture", d: "Rebuilding the foundation. Designing the sitemap and content clusters for maximum authority and flow." },
        { t: "Implementation", d: "The build phase. Deploying code fixes, schema, and high-velocity content production to saturate the index." },
        { t: "Authority Acquisition", d: "Powering the engine. Securing high-value placements to drive domain power and signal trust to Google." }
    ];

    return (
        <section ref={containerRef} className="bg-white relative py-24">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-6 mb-24">
                <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter text-black text-center">
                    Execution <span className="text-[#FF6105]">Protocol</span>
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* 
                   THE TRACK
                   Continuous line running from top step to bottom step 
                   - Mobile: Aligned to left-8 (32px) to center with w-16 (64px) nodes
                   - Desktop: Aligned to left-1/2
                */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#FF6105]/5 -translate-x-1/2 rounded-full overflow-hidden">
                    {/* THE BEAM: Fills based on scroll progress */}
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-[#FF6105] rounded-full origin-top"
                    />
                </div>

                {steps.map((s, i) => {
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.2 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-40% 0px -40% 0px" }}
                            className="min-h-screen flex items-center justify-center relative py-20"
                        >
                            {/* 
                               Grid Layout:
                               - Mobile: Flex column-ish or Grid with padding left
                               - We use padding-left on mobile to push content right of the timeline
                            */}
                            <div className="grid md:grid-cols-2 gap-12 items-center w-full relative pl-24 md:pl-0">

                                {/* Text Content */}
                                <div className={`order-2 md:order-1 ${i % 2 === 1 ? 'md:col-start-2 md:pl-24' : 'md:text-right md:pr-24'}`}>
                                    <h3 className="text-3xl md:text-4xl lg:text-7xl font-black uppercase text-black leading-[0.9] mb-4 md:mb-6">
                                        {s.t}
                                    </h3>
                                    <p className="text-lg md:text-xl lg:text-3xl text-black/60 font-medium leading-relaxed">
                                        {s.d}
                                    </p>
                                </div>

                                {/* Center Node Graphic */}
                                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center mt-8 md:mt-0 h-full md:h-auto pointer-events-none md:pointer-events-auto">
                                    <motion.div
                                        initial={{ scale: 1, backgroundColor: "#ffffff", borderColor: "#FF6105" }}
                                        whileInView={{ scale: 1.2, backgroundColor: "#FF6105", borderColor: "#ffffff" }}
                                        viewport={{ margin: "-45% 0px -45% 0px" }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-3xl font-bold border-[6px] shadow-xl relative z-10"
                                    >
                                        <span className="text-black group-hover:text-white transition-colors">0{i + 1}</span>
                                    </motion.div>
                                </div>

                                {/* Empty side for layout balance */}
                                <div className={`hidden md:block order-1 md:order-2 ${i % 2 === 1 ? 'md:col-start-1' : ''}`} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}

// --- MAIN PAGE ---

const SEOPage = () => {
    const faqs = [
        { q: "How does SEO work?", a: "SEO works by helping search engines understand your website and match it with what users are searching for. It involves improving site structure, content relevance, and technical performance, along with building credibility through off-page signals." },
        { q: "What are the different types of SEO Services?", a: "SEO services typically include on-page SEO, technical SEO, and off-page SEO. On-page SEO focuses on optimizing content and website elements, technical SEO improves site performance, and off-page SEO builds authority." },
        { q: "How do I analyze which type of SEO I need?", a: "The right type of SEO depends on your business goals. Local SEO suits businesses serving specific locations, eCommerce SEO supports online product sales, and enterprise SEO works best for large websites." },
        { q: "Can you perform an SEO audit on my website?", a: "Yes. We conduct detailed SEO audits that review your website's technical setup, content quality, on-page elements, and search performance, highlighting gaps and new opportunities." },
        { q: "How long will it take to see better rankings on Google?", a: "SEO is a gradual process. Most websites start seeing improvements within 3 to 6 months, depending on keyword competition. Local or low-competition searches can show results sooner." },
        { q: "What is Ecommerce SEO?", a: "Ecommerce SEO focuses on optimizing online stores to improve product visibility. It includes optimizing product pages, categories, site structure, and content so customers can easily find your products." },
        { q: "How much does an SEO Service Cost?", a: "SEO costs vary based on goals, competition, and scope. Pricing ranges from basic monthly packages to customized strategies. We offer flexible plans focused on long-term value." }
    ];

    return (
        <SmoothScrolling>
            <div className={`bg-white text-black overflow-x-hidden`}>
                <Navbar />

                {/* GRAPHICAL HERO */}
                <section className="relative min-h-screen flex flex-col justify-center pt-32 px-6 overflow-hidden bg-white">
                    <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="h-[2px] w-12 bg-[#FF6105]" />
                                <span className="text-[#FF6105] text-xs font-bold tracking-[0.2em] uppercase">Search Intelligence</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10 text-black"
                            >
                                Data Driven <br />
                                <span className="text-[#FF6105]">Dominance.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-black/50 font-medium leading-relaxed max-w-xl mb-12"
                            >
                                We engineer visibility. Using advanced search performance data to turn impressions into market share.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Link href="/contact" className="inline-flex bg-[#FF6105] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                                    Start Analysis
                                </Link>
                            </motion.div>
                        </div>

                        {/* GRAPH VISUALIZATION */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="order-1 lg:order-2"
                        >
                            <HeroGraph />
                        </motion.div>
                    </div>
                </section>

                {/* COMPARISON SECTION (2nd Position) */}
                <SeoComparisonSection />

                {/* HIERARCHICAL BENTO GRID */}
                <HierarchicalBento />

                {/* INDUSTRIES LIST */}
                <IndustriesList />

                {/* PROCESS FLOW - LINEAR & CLEAN */}
                {/* PROCESS FLOW - TIMELINE RESTORED */}
                {/* PROCESS FLOW - 100VH STICKY TIMELINE */}
                <ProtocolTimeline />

                {/* FAQs */}
                <section className="py-32 bg-white px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tight text-center mb-16 text-black">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-8 rounded-[2rem] hover:bg-white border boundary-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        {faq.q}
                                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all"><ArrowRight className="group-open:rotate-90 transition-transform" size={20} /></span>
                                    </summary>
                                    <div className="overflow-hidden">
                                        <p className="mt-6 text-black/60 leading-relaxed font-medium text-lg max-w-2xl">
                                            {faq.a}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default SEOPage;
