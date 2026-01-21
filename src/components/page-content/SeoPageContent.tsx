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
    Search,
    PieChart,
    Map,
    FileText,
    Settings,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import { Compare } from "@/components/ui/compare";
import Testimonials from "@/components/Testimonials";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

// --- CUSTOM HERO GRAPH COMPONENT ---
// --- CUSTOM HERO GRAPH COMPONENT ---
// --- CUSTOM HERO GRAPH COMPONENT ---
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

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!graphRef.current) return;
        const rect = graphRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        setMousePos({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
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
                        <span className="text-2xl md:text-3xl font-bold text-[#FF6105]">+142%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black/40 text-xs font-semibold uppercase tracking-wider mb-1">ROI</span>
                        <span className="text-2xl md:text-3xl font-bold text-black">12.5x</span>
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
                onTouchStart={handleTouchMove}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setIsHovering(false)}
                className="relative flex-grow w-full cursor-crosshair touch-none"
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
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 400">
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
                            Vol: {Math.max(0, Math.floor((400 - mousePos.y) * 120))}
                        </div>
                        <div className="w-3 h-3 bg-[#FF6105] rounded-full ring-4 ring-white shadow-lg" />
                    </motion.div>
                )}

                {/* Floating Interactive Points (Original) - Simplified/Hidden for cleanliness or restored if user wants exactly from git. 
                    Git version uses (!isHovering) check. I will keep it.
                */}
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

const CodeWindow = () => (
    <div className="bg-white border border-black/5 p-4 md:p-6 rounded-3xl h-full w-full relative group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="px-2 md:px-3 py-1 bg-[#FFF5F0] rounded-full text-[8px] md:text-[10px] font-bold text-[#FF6105] uppercase tracking-wider">
                Analysis.tsx
            </div>
        </div>
        <div className="flex-grow relative font-mono text-[10px] md:text-xs text-black/50 space-y-2 md:space-y-3">
            <div className="flex items-center gap-2">
                <span className="text-[#FF6105] opacity-50">1</span>
                <span className="text-purple-600">const</span> <span className="text-blue-600">analyze</span> = <span className="text-black">()</span> <span className="text-purple-600">=&gt;</span> <span className="text-black">{`{`}</span>
            </div>
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 pl-4">
                <span className="text-[#FF6105] opacity-50">2</span>
                <span className="text-black/60">// Identifying gaps...</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-2 pl-4">
                <span className="text-[#FF6105] opacity-50">3</span>
                <span className="text-blue-600">return</span> <span className="text-green-600">"Opportunity Found"</span>
            </motion.div>
            <div className="flex items-center gap-2">
                <span className="text-[#FF6105] opacity-50">4</span>
                <span className="text-black">{`}`}</span>
            </div>
        </div>
        {/* Scanning Line overlay */}
        <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-[#FF6105]/30 pointer-events-none backdrop-blur-[1px]"
        />
    </div>
);

const RevenueCard = () => (
    <div className="bg-[#FFF5F0] p-6 md:p-8 rounded-3xl h-full w-full relative overflow-hidden group hover:border-[#FF6105]/20 border border-transparent transition-all">
        <div className="relative z-10 flex justify-between items-start">
            <div>
                <div className="p-2 md:p-3 bg-white rounded-xl shadow-sm text-[#FF6105] mb-4">
                    <TrendingUp size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-black mb-2">Shopify & Digital Retail</h3>
                <p className="text-black/50 text-xs md:text-sm leading-relaxed max-w-xs">Shopify and digital retail brands seeking scalable growth</p>
            </div>
            <div className="text-right">
                <div className="text-2xl md:text-4xl font-bold text-[#FF6105]">+142%</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 mt-1">Growth</div>
            </div>
        </div>

        {/* Animated Bars */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 flex items-end justify-between px-6 md:px-8 pb-0 gap-2 md:gap-3">
            {[30, 45, 40, 60, 55, 75, 90].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="w-full bg-white rounded-t-sm md:rounded-t-md opacity-50 group-hover:opacity-100 group-hover:bg-[#FF6105] transition-all duration-500"
                />
            ))}
        </div>
    </div>
);

const LocalMapCard = () => (
    <div className="bg-white border border-black/5 p-2 rounded-3xl h-full w-full shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_100%)]" />
        {/* Abstract Map Pattern */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

        <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
            <div className="flex justify-between items-start">
                <div className="p-2 md:p-3 bg-[#FF6105] text-white rounded-xl shadow-lg">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="bg-white px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold border border-black/10 uppercase tracking-wide">
                    Local SEO
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
                <div className="absolute top-[40%] left-[60%] -translate-y-8 -translate-x-1/2 bg-white px-2 md:px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold shadow-lg whitespace-nowrap">
                    #1 Rank
                </div>
            </div>

            <div>
                <h4 className="text-lg md:text-xl font-bold text-black">B2B, Logistics & Packaging</h4>
                <p className="text-black/50 text-[10px] md:text-xs mt-1">B2B, logistics, and packaging companies</p>
            </div>
        </div>
    </div>
);

const HierarchicalBento = () => {
    return (
        <section className="min-h-screen py-16 md:py-32 px-4 md:px-6 bg-white border-t border-black/5">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="mb-12 md:mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase tracking-tight text-black">
                            Industries <br className="md:hidden" /> <span className="text-[#FF6105]">We Power</span>
                        </h2>
                        <p className="text-black/50 text-sm md:text-base font-normal max-w-md leading-relaxed">
                            EEGNITE works with businesses across India, as well as clients in Western Asia and Europe. Regardless of your niche or market, we design strategies that strengthen visibility and build authority.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-[350px_350px] gap-4 md:gap-6">
                    {/* 1. Engineering - Top Left Large */}
                    <div className="lg:col-span-2 lg:row-span-1 h-[400px] lg:h-auto">
                        <div className="h-full p-5 md:p-8 bg-[#F9F9F9] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:bg-white border border-transparent hover:border-black/5 transition-colors duration-500">
                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 h-full">
                                <div className="flex flex-col justify-center relative z-10">
                                    <div className="flex justify-between items-start lg:block">
                                        <Cpu size={32} className="text-[#FF6105] mb-4 lg:mb-6" />
                                        <div className="lg:hidden flex gap-2 mb-4">
                                            <span className="w-2 h-2 rounded-full bg-green-500" />
                                            <span className="text-[10px] font-mono text-black/40">Optimized</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-black">Healthcare & Home Services</h3>
                                    <p className="text-black/50 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 lg:line-clamp-none">Local clinics, healthcare providers and home service businesses</p>
                                    <div className="hidden lg:flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-xs font-mono text-black/40">Status: Optimized</span>
                                    </div>
                                </div>
                                <div className="h-full pb-0 lg:pt-4 flex-grow relative">
                                    <div className="absolute inset-0 top-auto h-[180px] lg:h-full lg:static w-full">
                                        <CodeWindow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Revenue - Top Right */}
                    <div className="lg:col-span-2 lg:row-span-1 h-[350px] lg:h-auto">
                        <RevenueCard />
                    </div>

                    {/* 3. Local - Bottom Left */}
                    <div className="lg:col-span-1 lg:row-span-1 h-[350px] lg:h-auto">
                        <LocalMapCard />
                    </div>

                    {/* 4. Content Velocity - Bottom Middle Large */}
                    <div className="lg:col-span-2 lg:row-span-1 h-[350px] lg:h-auto bg-white border border-black/5 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Zap size={200} className="text-[#FF6105]" />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-12 h-12 bg-[#FF6105] text-white rounded-xl flex items-center justify-center mb-4">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold uppercase text-black">AI & SaaS <span className="text-[#FF6105]">Firms</span></h3>
                                <p className="text-black/50 text-sm md:text-lg max-w-md mt-2 line-clamp-3 lg:line-clamp-none">AI and SaaS firms requiring technical SEO and content moats</p>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="bg-[#FFF5F0] px-4 py-2 rounded-full text-[#FF6105] text-xs font-bold uppercase">Tech-Focused SEO</div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Transparency - Bottom Right */}
                    <div className="lg:col-span-1 lg:row-span-1 h-[350px] lg:h-auto bg-[#FF6105] rounded-[2.5rem] p-6 md:p-8 text-white flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />

                        <LayoutDashboard size={32} className="text-white" />
                        <div>
                            <h3 className="text-lg md:text-xl font-bold uppercase mb-1 text-white">Professional <br /><span className="text-black/50">Services</span></h3>
                            <p className="text-white/80 text-xs">Professional service providers building long-term online authority</p>
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

// --- FULL SERVICE SEO SOLUTION (Interactive Spotlight Design) ---

const FullServiceSEO = () => {
    const services = [
        {
            title: "Keyword Research",
            icon: BarChart3,
            description: "Keyword research begins with understanding how your audience searches online. We identify relevant, high-intent keywords based on search demand, competition, and user behavior. By aligning your content with what potential customers are actively looking for, we improve search visibility and attract traffic that is more likely to convert into real business opportunities.",
        },
        {
            title: "Technical SEO",
            icon: Cpu,
            description: "A strong SEO strategy starts with a technically sound website. We audit and optimize every core layer of your site, from crawlability, site structure, and page speed to advanced schema markup implementation. Faster load times, structured data, and mobile-first design ensure clean crawlability and stronger organic reach.",
        },
        {
            title: "Local SEO",
            icon: MapPin,
            description: "Local SEO is about being visible when nearby customers are ready to act. EEGNITE optimizes your Google Business Profile, strengthens local listings, and builds location-focused pages that match how people search in your area. By combining regional insight with precise keyword targeting, we help your business appear prominently in local search results and attract more customers who are actively looking for your services.",
        },
        {
            title: "On-Page Optimization",
            icon: LayoutDashboard,
            description: "On-page optimization focuses on improving every internal element of your website to support stronger search performance. This includes optimizing content quality, page structure, loading speed, and user experience across key pages. Our SEO experts optimize your website's on-page factors so search engines can easily understand your content and be more engaging for users, helping your site attract the right traffic and rank higher.",
        },
        {
            title: "Content Strategy",
            icon: Zap,
            description: "At EEGNITE, content is built with purpose, not guesswork. We create helpful, keyword-informed content that speaks directly to your audience while supporting your SEO goals. From blogs and landing pages to product and service content, everything is planned around search intent, relevance, and conversion, helping your brand stay useful, visible, and trusted at every stage of the customer journey.",
        },
        {
            title: "Link Building & Digital PR",
            icon: TrendingUp,
            description: "EEGNITE strengthens your website's authority through ethical link-building techniques. As an experienced SEO service provider based in Kolkata, India, EEGNITE focuses on earning genuine backlinks from relevant and trusted websites that build trust with search engines. Through thoughtful outreach and digital PR, we help your business gain recognition where it matters. We support your steady ranking growth and long-term search visibility without following risky tactics.",
        },
        {
            title: "Analytics & Conversion Tracking",
            icon: BarChart3,
            description: "At EEGNITE, data guides every SEO decision we make. We track keyword performance, user behavior, and conversion paths to understand what's driving real results. By connecting SEO activity with measurable business outcomes, we help you clearly see how organic traffic turns into leads, sales, and long-term growth rather than just simple metrics.",
        },
        {
            title: "Shopify & E-Commerce SEO",
            icon: TrendingUp,
            description: "If you're running a Shopify or WooCommerce store, EEGNITE's SEO strategies help you to scale your business. We connect SEO to revenue by implementing GA4 and Klaviyo tracking to tie organic traffic directly to customer acquisition and lifetime value.",
        },
    ];

    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px] relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-black mb-6">
                        Full Service SEO <span className="text-[#FF6105]">Solution</span>
                    </h2>
                    <p className="text-black/50 text-base md:text-lg font-normal leading-relaxed">
                        Our SEO services are built to do more than improve rankings. We focus on creating long-term visibility, brand authority, and consistent inbound demand through strategies.
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <SpotlightCard key={idx} className="h-full">
                            <div className="relative z-10 flex flex-col h-full bg-white/50 backdrop-blur-sm p-8">
                                <div className="w-14 h-14 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <service.icon size={26} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold uppercase text-black mb-4 group-hover:text-[#FF6105] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-black/60 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 md:mt-24">
                    <Link href="/contact" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Request a Proposal
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- SPOTLIGHT CARD COMPONENT ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group ${className}`}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 97, 5, 0.08), transparent 40%)`,
                }}
            />
            {/* Border Highlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 97, 5, 0.3), transparent 40%)`,
                    maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            {children}
        </motion.div>
    );
}
// --- COMPARISON SECTION (Second Section) ---
const SeoComparisonSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl lg:text-8xl font-bold uppercase tracking-tighter mb-6 text-black">
                        Why <span className="text-[#FF6105]">EEGNITE?</span>
                    </h2>
                    <p className="text-black/60 text-base md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Local business owners and marketers in Kolkata choose EEGNITE for one simple reason: measurable and sustainable results. Every search represents intent, and our role is to help your brand appear at the exact moment a potential customer is looking for solutions. Our SEO strategies are data-backed, goal-oriented, and built to support real business growth.
                    </p>
                </div>

                <div className="w-full max-w-6xl mx-auto h-[1000px] md:h-[800px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                    <Compare
                        className="h-full"
                        slideMode="drag"
                        firstContent={
                            <div className="w-full h-full bg-white flex flex-col items-center justify-start pt-20 p-4 md:p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#FF6105] mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">EEGNITE Solution</h3>

                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FFF5F0] border border-[#FF6105]/20 text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-[#FF6105] mb-2">Strategic Local Insight</h4>
                                        <p className="text-black/70 text-xs md:text-sm leading-relaxed">Our team understands the local business landscape, from established local enterprises to fast-growing digital brands. We use this regional insight to align your website with genuine local search demand, ensuring your business appears where it matters most. As a trusted SEO company in Kolkata, India EEGNITE connects online visibility with real-world customer intent.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FF6105] text-white text-left hover:scale-[1.02] transition-transform shadow-lg">
                                        <h4 className="text-sm md:text-xl font-bold text-white mb-2">Engineering-Led SEO Execution</h4>
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed">EEGNITE approaches technical SEO from an engineering mindset. Our technical SEO services focus on site structure, crawlability, and performance, backed by analytics and continuous refinement. We audit every layer of your website to help search engines clearly understand, evaluate, and reward your digital presence.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/10 shadow-sm text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Transparent and ROI-Focused Partnership</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Clarity is central to how we work. Our reporting frameworks give you a clear view of traffic growth, keyword movement, and business impact without hidden metrics. Every action we take is driven by transparency, accountability, and ROI, ensuring SEO remains a growth investment, not a guessing game.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        secondContent={
                            <div className="w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-start pt-20 p-4 md:p-12 text-center relative grayscale">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-black/20 mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">Traditional Agency</h3>

                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full opacity-60">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Generic Global Templates</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Most agencies apply a 'one-size-fits-all' strategy, ignoring the nuances of the local market. They chase global vanity volume rather than high-intent traffic, resulting in visitors who don't convert to customers.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Surface-Level Checklists</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Relying on automated tools to generate generic audit reports. They fix surface tags but ignore the deep technical architecture, rendering the site invisible to modern search crawlers despite 'green lights'.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Black-Box Reporting</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Confusing monthly reports filled with jargon and 'vanity metrics' like impressions, designed to hide the lack of real business revenue. You never really know what they are doing.</p>
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

// --- SEO PROCESS (Visual Flowchart) ---
const SeoProcessFloating = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const steps = [
        { id: "01", title: "Keyword Discovery", desc: "Identifying high-intent search terms.", icon: Search },
        { id: "02", title: "Keyword Analysis", desc: " clustering & difficulty assessment.", icon: PieChart },
        { id: "03", title: "Orbit Mapping", desc: "Creating the strategic roadmap.", icon: Map },
        { id: "04", title: "Page Mapping", desc: "Aligning keywords to URLs.", icon: FileText },
        { id: "05", title: "Structural Audit", desc: "Technical & Local foundation.", icon: Settings },
        { id: "06", title: "Content & Signals", desc: "Creation, Distribution & Links.", icon: Sparkles },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Header Overlay */}
                <div className="absolute top-10 left-6 md:left-20 z-20">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                        Our SEO <span className="text-[#FF6105]">Process</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 md:gap-20 pl-8 md:pl-40 items-center relative z-10">
                    {/* Connecting Line */}
                    <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[200%] -translate-y-1/2 pointer-events-none rounded-full" />

                    {steps.map((step, i) => {
                        // Alternating Top and Bottom positions
                        const isTop = i % 2 === 0;
                        return (
                            <div key={i} className={`relative min-w-[300px] md:min-w-[400px] flex flex-col items-center ${isTop ? 'mb-40' : 'mt-40'}`}>
                                {/* Connector Dot on the central line */}
                                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10 ${isTop ? 'bottom-[-5rem]' : 'top-[-5rem]'}`}>
                                    <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                </div>

                                {/* Vertical Stem */}
                                <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[5rem] bg-black/10 ${isTop ? 'bottom-[-5rem]' : 'top-[-5rem]'}`} />

                                {/* Card */}
                                <div className="w-full bg-white border border-black/10 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-6xl group-hover:opacity-10 transition-opacity select-none text-black">
                                        {step.id}
                                    </div>
                                    <div className="w-12 h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                        <step.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase mb-2 text-black group-hover:text-[#FF6105] transition-colors">{step.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}

                    {/* Extra padding at the end */}
                    <div className="min-w-[50vw]" />
                </motion.div>
            </div>
        </section>
    );
};

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
        { t: "Focus on Core Business", d: "SEO demands time, tools, and constant attention. We handle the complexity so you can focus on growth, sales, and operations." },
        { t: "Avoid Costly Mistakes", d: "Search algorithms change fast. A trusted partner helps you avoid trial-and-error decisions that slow growth." },
        { t: "Measurable Growth", d: "Every action is tracked. You see how traffic, leads, and conversions improve, not just rankings on a report." },
        { t: "Long-Term Visibility", d: "Strategies built for stability in competitive markets, from local Indian searches to broader national reach." }
    ];

    return (
        <section ref={containerRef} className="bg-white relative py-16 md:py-24">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-12 md:mb-24">
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter text-black">
                        How EEGNITE Becomes a <br /><span className="text-[#FF6105]">Strong Partner</span>
                    </h2>
                </div>
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
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            className="py-16 md:min-h-[50vh] flex items-center justify-center relative md:py-20"
                        >
                            {/*
                               Grid Layout:
                               - Mobile: Flex column-ish or Grid with padding left
                               - We use padding-left on mobile to push content right of the timeline
                            */}
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative pl-20 md:pl-0">

                                {/* Text Content */}
                                <div className={`order-2 md:order-1 ${i % 2 === 1 ? 'md:col-start-2 md:pl-24' : 'md:text-right md:pr-24'}`}>
                                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-black leading-tight mb-3 md:mb-4">
                                        {s.t}
                                    </h3>
                                    <p className="text-sm md:text-lg text-black/60 font-normal leading-relaxed max-w-lg ml-auto mr-auto md:mr-0">
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

// --- TOOLS SECTION ---
// --- TOOLS SECTION ---
const ToolsSection = () => {
    const tools = [
        { src: '/icons/semrush.png', alt: 'SEMrush' },
        { src: '/icons/google.png', alt: 'Google' },
        { src: '/icons/google-analytics.png', alt: 'Google Analytics' },
        { src: '/icons/google-ads.png', alt: 'Google Ads' },
        { src: '/icons/gtm.png', alt: 'Google Tag Manager' },
        { src: '/icons/wordpress.png', alt: 'WordPress' },
        { src: '/icons/hubspot.png', alt: 'HubSpot' },
        { src: '/icons/klaviyo.png', alt: 'Klaviyo' },
        { src: '/icons/linkedin.png', alt: 'LinkedIn' },
        { src: '/icons/powerbi.png', alt: 'Power BI' },
        { src: '/icons/woocommerce.png', alt: 'WooCommerce' },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12 md:mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black">
                    Tools We <span className="text-[#FF6105]">Use</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group py-10">
                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-24 pr-12 md:pr-24">
                    {[...tools, ...tools].map((tool, i) => (
                        <div key={i} className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 relative hover:scale-110 transition-transform duration-300">
                            {/* Using standard img tag as simple overlay, or Next Image if preferred. Using img for simplicity given paths */}
                            <img src={tool.src} alt={tool.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-24 pr-12 md:pr-24" aria-hidden="true">
                    {[...tools, ...tools].map((tool, i) => (
                        <div key={i} className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 relative hover:scale-110 transition-transform duration-300">
                            <img src={tool.src} alt={tool.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes loop-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-loop-scroll {
                    animation: loop-scroll 40s linear infinite;
                }
                .paused {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

// --- WHY CHOOSE SECTION (Refined Horizontal Scroll) ---
// --- WHY CHOOSE SECTION (Refined Horizontal Scroll) ---
const WhyChooseSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const reasons = [
        {
            id: "01",
            title: "Focus on your core business",
            desc: "SEO demands time, tools, and constant attention. A professional SEO agency handles the entire complexity—technical, content, link building—so you can focus strictly on growth, sales, and operations.",
        },
        {
            id: "02",
            title: "Experience that prevents costly mistakes",
            desc: "Search algorithms change weekly. A trusted SEO partner like EEGNITE ensures you avoid penalties and trial-and-error decisions that slow growth. We navigate the changing landscape for you.",
        },
        {
            id: "03",
            title: "Measurable growth, not assumptions",
            desc: "We don't guess. Every action is tracked. You see exactly how traffic, leads, and conversions improve. We move beyond rankings to focus on real business revenue impact.",
        },
        {
            id: "04",
            title: "Long-term visibility in competitive markets",
            desc: "From local Indian searches to broader national reach, our SEO strategies are built for stability. We build defenses against algorithm updates to keep your brand visible for the long haul.",
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden py-12">
                <div className="container mx-auto px-4 md:px-20 mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-7xl font-semibold uppercase tracking-tighter leading-none">
                        Why <span className="text-[#FF6105]">India</span> Chooses Us
                    </h2>
                </div>

                <div className="flex items-center h-full w-full">
                    <motion.div style={{ x }} className="flex gap-4 md:gap-12 pl-[5vw] md:pl-[5vw] items-center">
                        {reasons.map((reason, i) => (
                            <div key={i} className="min-w-[85vw] md:min-w-[600px] flex flex-col justify-center p-6 md:p-12 border-l border-black/10 h-[50vh] md:h-[55vh] bg-white hover:bg-gray-50 transition-colors">
                                <span className="text-5xl md:text-8xl font-medium text-black/5 mb-4 md:mb-8">{reason.id}</span>
                                <h3 className="text-2xl md:text-5xl font-medium mb-4 md:mb-6 uppercase tracking-tight">{reason.title}</h3>
                                <p className="text-base md:text-xl text-black/60 leading-relaxed max-w-xl">{reason.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- VALUES SECTION (Text Reveal / Simple List) ---
// --- VALUES SECTION (Text Reveal / Simple List) ---
const ValuesSection = () => {
    const values = [
        {
            title: "Integrity",
            desc: "We believe in brutal honesty. If a strategy isn't working, we tell you. If an SEO goal is unrealistic, we correct it. You’ll always receive candid recommendations."
        },
        {
            title: "Teamwork",
            desc: "EEGNITE is not a freelancer; we are a dedicated engineering team. Senior strategists, technical leads, and content creators work in unison on your project."
        },
        {
            title: "Excellence",
            desc: "Good enough is not enough. We aim for uncompromised quality in every audit, every line of code, and every piece of content. We set the standard."
        }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-20 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24">
                    <h2 className="text-4xl md:text-8xl font-semibold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        Powered By <span className="text-[#FF6105]">Values</span>
                    </h2>
                </div>

                <div className="space-y-16 md:space-y-32">
                    {values.map((v, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-24 border-t border-black/10 pt-8 md:pt-12 transition-all hover:border-[#FF6105] duration-500">
                            <span className="text-xl md:text-2xl font-mono text-[#FF6105]">0{i + 1}</span>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-7xl font-medium uppercase tracking-tight mb-4 md:mb-6 group-hover:text-[#FF6105] transition-colors duration-300">{v.title}</h3>
                            </div>
                            <div className="flex-1">
                                <p className="text-lg md:text-2xl text-black/60 leading-relaxed group-hover:text-black transition-colors duration-300">
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- METRICS SECTION (Split Interactive) ---
// --- METRICS SECTION (Split Interactive) ---
const MetricsSection = () => {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center py-20 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-black leading-none mb-8 md:mb-12">
                        Real <span className="text-[#FF6105]">Metrics</span><br />Real Growth
                    </h2>
                    <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed mb-8 md:mb-12">
                        We don't settle for "green lights" on a tool. We focus on the metrics that actually drive revenue: Traffic, Leads, and Market Share.
                    </p>

                    <div className="flex gap-4">
                        <div className="h-24 md:h-32 w-1 bg-[#FF6105]" />
                        <div className="flex flex-col justify-between py-2">
                            <span className="text-base md:text-lg font-bold">Data Driven</span>
                            <span className="text-base md:text-lg font-bold">Transparent</span>
                            <span className="text-base md:text-lg font-bold">Scalable</span>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-8 md:space-y-12">
                    {[
                        { label: "SEO & Marketing", val: "75%" },
                        { label: "Keyword Results", val: "50%" },
                        { label: "Google Analytics", val: "65%" },
                        { label: "Off-Page SEO", val: "30%" }
                    ].map((m, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="flex justify-between items-end mb-2 md:mb-4">
                                <span className="text-xl md:text-3xl font-bold uppercase">{m.label}</span>
                                <span className="text-xl md:text-2xl font-mono text-[#FF6105] opacity-0 group-hover:opacity-100 transition-opacity">{m.val}</span>
                            </div>
                            <div className="h-3 md:h-4 w-full bg-[#f0f0f0] rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: m.val }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="h-full bg-black group-hover:bg-[#FF6105] transition-colors duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- NEW CTA SECTION ---
// --- FINAL CTA (Refined Professional) ---
const GrowthCTA = () => {
    return (
        <section className="py-24 md:py-32 bg-[#FF6105] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left: Headline */}
                    <div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                            Start Growing<br />With EEGNITE<br />Today
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>

                    {/* Right: Content & Action */}
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-xl md:text-3xl font-medium mb-8 opacity-95 leading-tight">
                            A Result-focused SEO Services Agency
                        </h3>

                        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your customers are already searching for what you offer. Let EEGNITE, a trusted India-based SEO company, ensure they find you first.
                            <br /><br />
                            From technical optimization to content strategy and local visibility, we help businesses across India, the Middle East, and other European regions to grow faster, smarter, and stronger.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free SEO Discovery Call <ArrowRight />
                            </Link>
                            <span className="text-sm uppercase tracking-widest font-medium opacity-80">
                                Turn rankings into revenue
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 md:right-10 text-white/40 text-xs md:text-sm uppercase tracking-widest">
                From Kolkata to the World
            </div>
        </section>
    );
};


export default function ServiceSeo() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />

                {/* GRAPHICAL HERO */}
                <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 lg:pt-24 px-4 md:px-6 overflow-hidden bg-white">
                    <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            {/* Tag Removed as requested */}

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-4 md:mb-10 text-black mt-4 lg:mt-0"
                            >
                                Best SEO Services From the Leading SEO Agency - <span className="text-[#FF6105]">Rank Higher. Grow Faster.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-base md:text-lg text-black/50 font-normal leading-relaxed max-w-xl mb-8 md:mb-12"
                            >
                                At EEGNITE, we're not just another SEO company in Kolkata; we operate as a growth partner focused on outcomes only. Our SEO services are designed to turn search demand into consistent visibility, qualified traffic, and measurable business growth. As one of the best SEO agencies, EEGNITE builds sustainable strategies for e-commerce brands, B2B firms, and local businesses that want long-term traction, not short-lived rankings. Every decision we make is rooted in performance, clarity, and scalability.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="w-full sm:w-auto"
                            >
                                <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center bg-[#FF6105] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                                    Start Your Project
                                </Link>
                            </motion.div>
                        </div>

                        {/* GRAPH VISUALIZATION */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <HeroGraph />
                        </motion.div>
                    </div>
                </section>

                <SeoComparisonSection />
                <HierarchicalBento />
                <FullServiceSEO />
                <SeoProcessFloating />
                <ProtocolTimeline />
                <ToolsSection />
                <WhyChooseSection />
                <ValuesSection />
                <MetricsSection />
                <Testimonials />

                {/* FAQs */}
                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase tracking-tight text-center mb-8 md:mb-16 text-black">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-3 md:space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border boundary-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        {/* Questions Text Limiter? No just flex */}
                                        <span className="max-w-[90%]">{faq.q}</span>
                                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all"><ArrowRight className="group-open:rotate-90 transition-transform" size={20} /></span>
                                    </summary>
                                    <div className="overflow-hidden">
                                        <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">
                                            {faq.a}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
                <GrowthCTA />
            </div>
            <Footer />
        </main>
    );
}

const faqs = [
    { q: "How does SEO work?", a: "SEO works by helping search engines understand your website and match it with what users are searching for. It involves improving site structure, content relevance, and technical performance, along with building credibility through off-page signals. When done consistently, SEO improves visibility, attracts the right audience, and increases organic traffic over time." },
    { q: "What are the different types of SEO Services?", a: "SEO services typically include on-page SEO, technical SEO, and off-page SEO. On-page SEO focuses on optimizing content and website elements, technical SEO improves site performance and crawlability, and off-page SEO builds authority through links and brand mentions." },
    { q: "How do I analyze which type of SEO I need?", a: "The right type of SEO depends on your business goals, target audience, and current website performance. Local SEO suits businesses serving specific locations, eCommerce SEO supports online product sales, and enterprise SEO works best for large websites. A professional SEO audit helps identify gaps." },
    { q: "Can you perform an SEO audit on my website?", a: "Yes. We conduct detailed SEO audits that review your website's technical setup, content quality, on-page elements, and search performance. The audit highlights keywords gaps, new opportunities, and clear next steps, helping you understand what's holding your site back." },
    { q: "How long will it take to see better rankings on Google?", a: "SEO is a gradual process, not an instant result. Most websites start seeing improvements within 3 to 6 months, depending on keyword competition, industry, and current website health. Highly competitive keywords or new websites may take longer, while local searches can show results sooner." },
    { q: "What is Ecommerce SEO?", a: "Ecommerce SEO focuses on optimizing online stores to improve product visibility in search results. It includes optimizing product pages, categories, site structure, page speed, and content so customers can easily find your products. When done right, ecommerce SEO helps attract high-intent shoppers." },
    { q: "How can local SEO services help businesses?", a: "Local SEO helps businesses get discovered by customers searching nearby. It improves visibility on Google Map pack and local search results, attracts high-intent local traffic, and increases chances of calls, visits, and enquiries. It turns online searches into nearby customers." },
    { q: "How much does an SEO Service Cost?", a: "SEO costs vary based on your business goals, competition, website size, and the scope of work required. Pricing can range from basic monthly packages to customized strategies for competitive markets. A reliable SEO service provider usually offers flexible plans focused on long-term value and measurable growth." }
];
