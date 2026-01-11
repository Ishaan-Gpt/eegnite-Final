"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import {
    ArrowUpRight, Target, Zap, BarChart3, Crosshair, MousePointerClick,
    Layers, Globe, Search, Instagram, TrendingUp, DollarSign, Activity,
    Hexagon, MonitorPlay, ShoppingBag, PieChart
} from "lucide-react";
import Link from "next/link";

// --- UTILS & MINI COMPONENTS ---

const SectionHeader = ({ title, subtitle, className = "" }: { title: string; subtitle: string; className?: string }) => (
    <div className={`mb-24 relative z-10 ${className}`}>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
        >
            <div className="h-[2px] w-12 bg-[#FF6105]" />
            <span className="block text-[#FF6105] font-mono tracking-[0.3em] text-xs uppercase font-bold">
                {subtitle}
            </span>
        </motion.div>
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.85]"
        >
            {title.split("<br/>").map((line, i) => (
                <span key={i} className="block">{line}</span>
            ))}
        </motion.h2>
    </div>
);

const GlowButton = ({ text, href }: { text: string; href: string }) => {
    return (
        <Link href={href} className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#FF6105] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
            <span className="relative z-10 font-bold uppercase tracking-widest text-black group-hover:text-white transition-colors duration-300 text-sm">
                {text}
            </span>
            <ArrowUpRight className="relative z-10 w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 shadow-[0_0_40px_rgba(255,97,5,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
    );
};

// --- SECTIONS ---

// 1. HERO - Cinematic & Dark
const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 250]);
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set((clientX - centerX) / 30);
        mouseY.set((clientY - centerY) / 30);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="h-screen w-full bg-[#050505] relative flex items-center justify-center overflow-hidden perspective-1000"
        >
            {/* Background Grid - Cyberpunk Feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,97,5,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,97,5,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

            {/* Ambient Glows */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6105] rounded-full blur-[180px] opacity-10 mix-blend-screen"
            />
            <motion.div
                style={{ x: useTransform(mouseX, x => x * -1), y: useTransform(mouseY, y => y * -1) }}
                className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF6105] rounded-full blur-[150px] opacity-5 mix-blend-screen"
            />

            <motion.div style={{ y: yText, opacity: opacityText, scale }} className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-2 h-2 bg-[#FF6105] rounded-full animate-pulse" />
                    <span className="text-[#FF6105] font-mono text-sm tracking-[0.4em] uppercase font-bold">PPC Performance</span>
                    <div className="w-2 h-2 bg-[#FF6105] rounded-full animate-pulse" />
                </div>

                <h1 className="text-[10vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-white mb-8">
                    PAY LESS.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">SCALE</span> <span className="text-[#FF6105] inline-block transform hover:skew-x-12 transition-transform cursor-cell">MORE.</span>
                </h1>

                <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 border-l-2 border-[#FF6105] pl-6 text-left">
                    We engineer ad campaigns that turn spend into exponential revenue. <span className="text-white">Scientific targeting</span> meets <span className="text-white">creative disruption</span>.
                </p>

                <GlowButton text="Launch Campaign" href="/contact" />
            </motion.div>

            {/* Decorative 3D Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <FloatingIcon icon={Crosshair} top="20%" left="15%" delay={0} />
                <FloatingIcon icon={Target} bottom="20%" right="15%" delay={2} />
                <FloatingIcon icon={Zap} top="30%" right="25%" delay={4} />
            </div>
        </section>
    );
};

const FloatingIcon = ({ icon: Icon, top, left, right, bottom, delay }: any) => (
    <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay }}
        style={{ top, left, right, bottom }}
        className="absolute w-20 h-20 border border-[#FF6105]/20 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center"
    >
        <Icon className="text-[#FF6105] w-8 h-8 opacity-80" />
    </motion.div>
);

// 2. INTERACTIVE PROBLEM - Flashlight Effect
const ProblemSolution = () => {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <SectionHeader title="THE<br/>PROBLEM" subtitle="WASTED SPEND" />
                    <p className="text-2xl text-gray-400 font-light leading-relaxed mb-12">
                        Most brands are <span className="text-white font-bold">burning budget</span> on clicks that never convert. Poor targeting, weak creative, and algorithmic drift are silent killers.
                    </p>
                    <div className="flex flex-col gap-6">
                        {["Low ROAS", "High CPA", "Invisible Ad Fatigue", "Bot Traffic"].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 text-red-500/80 font-mono uppercase tracking-widest">
                                <Activity className="w-5 h-5" /> {item} -- DETECTED
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[600px] w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden group">
                    {/* The "Torch" Effect would be complex to code fully in one shot, simulating with hover-reveal */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-4xl font-black text-[#FF6105] opacity-20 group-hover:opacity-100 transition-opacity duration-500 uppercase text-center transform scale-150">
                            PROFIT <br /> UNLOCKED
                        </h3>
                    </div>
                    {/* Grid of losing numbers */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-10 gap-4 p-8 opacity-30 group-hover:opacity-5 transition-opacity duration-700">
                        {Array.from({ length: 60 }).map((_, i) => (
                            <div key={i} className="text-xs text-red-500 font-mono flex items-center justify-center">-$40.00</div>
                        ))}
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </div>
            </div>
        </section>
    );
};

// 3. 3D CARDS - The Arsenal
const Arsenal = () => {
    const cards = [
        { title: "Google Search", icon: Search, desc: "Capture high-intent traffic the moment they search. Engineering-grade keyword architecture." },
        { title: "Social SCale", icon: Instagram, desc: "Meta & TikTok ads that don't just get views—they get sales. Disruptive creative strategy." },
        { title: "Shopping", icon: ShoppingBag, desc: "Feed optimization for e-commerce dominance. Put your product front and center." },
        { title: "Retargeting", icon: Crosshair, desc: "Bring them back. Smart sequencing to convert window shoppers into loyal buyers." }
    ];

    return (
        <section className="py-40 bg-[#050505] px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="THE<br/>ARSENAL" subtitle="PLATFORMS" />

                <div className="grid md:grid-cols-2 gap-6">
                    {cards.map((c, i) => (
                        <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-12 overflow-hidden hover:border-[#FF6105] transition-colors duration-500">
                            {/* Background Number */}
                            <span className="absolute top-0 right-0 p-8 text-[10rem] font-black text-white/[0.02] leading-none select-none group-hover:text-[#FF6105]/5 transition-colors">
                                0{i + 1}
                            </span>

                            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                                <div>
                                    <div className="w-16 h-16 bg-[#FF6105]/10 rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 group-hover:bg-[#FF6105] group-hover:text-black transition-all duration-300">
                                        <c.icon size={32} />
                                    </div>
                                    <h3 className="text-4xl font-black uppercase text-white mb-4">{c.title}</h3>
                                    <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                                        {c.desc}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-[#FF6105] font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Deploy Strategy <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6105]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 4. ROI CALCULATOR VISUALIZER
const ROIVisualizer = () => {
    const [spend, setSpend] = useState(5000);
    const roas = 4.5; // 4.5x ROAS
    const revenue = spend * roas;

    return (
        <section className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF6105 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6">Predict Your <span className="text-[#FF6105]">Growth</span></h2>
                    <p className="text-gray-500 text-xl font-mono">Drag to simulate campaign scaling.</p>
                </div>

                <div className="bg-[#0f0f0f] border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-20 mb-16">
                        <div>
                            <label className="block text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Monthly Ad Spend</label>
                            <div className="text-5xl font-black text-white font-mono bg-black/50 p-4 rounded-xl border border-white/10">
                                ${spend.toLocaleString()}
                            </div>
                        </div>
                        <div>
                            <label className="block text-[#FF6105] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Estimated Revenue
                            </label>
                            <div className="text-5xl font-black text-[#FF6105] font-mono bg-[#FF6105]/10 p-4 rounded-xl border border-[#FF6105]/20">
                                ${revenue.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="relative h-20 mb-8">
                        {/* Slider Track */}
                        <div className="absolute inset-0 bg-black/50 rounded-full border border-white/10" />
                        {/* Slider Fill */}
                        <div
                            className="absolute inset-y-0 left-0 bg-[#FF6105] rounded-full opacity-50 transition-all duration-75"
                            style={{ width: `${(spend / 50000) * 100}%` }}
                        />
                        <input
                            type="range"
                            min="1000"
                            max="50000"
                            step="1000"
                            value={spend}
                            onChange={(e) => setSpend(parseInt(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                        {/* Thumb Indicator (Fake) */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_white] pointer-events-none transition-all duration-75 z-10 flex items-center justify-center text-black font-bold"
                            style={{ left: `calc(${(spend / 50000) * 100}% - 24px)` }}
                        >
                            <MonitorPlay className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex justify-between text-gray-500 font-mono text-xs uppercase">
                        <span>$1,000</span>
                        <span>$50,000+</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. PROCESS - The Sniper Approach
const Process = () => {
    const steps = [
        { title: "Audit & Recon", desc: "We deep dive into your data. Competitor spy tools, keyword gaps, and missed opportunities." },
        { title: "Strategy Build", desc: "Constructing the funnel. Landing page optimization, ad creative direction, and tracking setup." },
        { title: "Launch & Iterate", desc: "Rapid testing phase. Killing losers, doubling down on winners. Algorithmic learning." },
        { title: "Scale to Moon", desc: "Expanding audiences, increasing budget on high-ROAS campaigns, dominating the market." }
    ];

    return (
        <section className="py-40 bg-black px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="SNIPER<br/>APPROACH" subtitle="METHODOLOGY" />

                <div className="grid lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pt-12 border-t border-white/20 hover:border-[#FF6105] transition-colors duration-500 group">
                            {/* Dot */}
                            <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#FF6105] group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_white] group-hover:shadow-[0_0_20px_#FF6105]" />

                            <h3 className="text-7xl font-black text-white/5 absolute top-4 right-0 group-hover:text-[#FF6105]/10 transition-colors">0{i + 1}</h3>

                            <h4 className="text-2xl font-black uppercase text-white mb-4 relative z-10">{step.title}</h4>
                            <p className="text-gray-400 font-medium leading-relaxed relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 7. TECH STACK ORBIT (Simplified for Code, effectively a grid)
const TechStack = () => {
    return (
        <section className="py-32 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold uppercase tracking-widest text-[#FF6105] mb-16 animate-pulse">
                    // INTEGRATED WITH
                </h2>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {[Globe, Search, Hexagon, PieChart, Activity].map((Icon, i) => (
                        <Icon key={i} size={60} className="text-white hover:text-[#FF6105] transition-colors hover:scale-110 transform duration-300" />
                    ))}
                </div>
            </div>
        </section>
    );
};

// 8. CTA - MAGNETIC
const CTA = () => {
    return (
        <section className="h-[90vh] bg-black flex items-center justify-center relative overflow-hidden">
            {/* Pulsing Core */}
            <div className="absolute w-[600px] h-[600px] bg-[#FF6105] rounded-full blur-[200px] opacity-20 animate-pulse" />

            <div className="relative z-10 text-center">
                <h2 className="text-[12vw] leading-none font-black uppercase text-white mix-blend-overlay opacity-50 mb-10">
                    DOMINATE
                </h2>
                <div className="relative inline-block group">
                    <div className="absolute inset-0 bg-[#FF6105] blur-[60px] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                    <Link
                        href="/contact"
                        className="relative block bg-[#FF6105] text-black text-4xl md:text-7xl font-black uppercase tracking-tighter px-20 py-10 rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        START PROJECT
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default function PPCPage() {
    return (
        <SmoothScrolling>
            <div className="bg-[#050505] min-h-screen text-white selection:bg-[#FF6105] selection:text-white">
                <Navbar />
                <Hero />
                <ProblemSolution />
                <Arsenal />
                <ROIVisualizer />
                <Process />
                <TechStack />
                <CTA />
                <Footer />
            </div>
        </SmoothScrolling>
    );
}
