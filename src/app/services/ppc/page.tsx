"use client";

import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useMotionTemplate,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import {
    ArrowUpRight, Target, Zap, Activity, Crosshair,
    MousePointerClick, Layers, Globe, Search, Instagram,
    ShoppingBag, Hexagon, Terminal, Flame, TrendingUp
} from "lucide-react";
import Link from "next/link";
import { wrap } from "@motionone/utils";

// --- FX COMPONENTS ---

// 1. NOISE OVERLAY
const NoiseOverlay = () => (
    <div className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.05]">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20" />
    </div>
);

// 2. PARALLAX TEXT
function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) { directionFactor.current = -1; }
        else if (velocityFactor.get() > 0) { directionFactor.current = 1; }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="flex whitespace-nowrap gap-10 text-nowrap" style={{ x }}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="block text-[15vw] font-black uppercase tracking-tighter text-transparent disabled-text-stroke leading-[0.85] opacity-30 select-none">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// 3. GLITCH TEXT
const GlitchText = ({ text }: { text: string }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -ml-[2px] text-[#FF6105] opacity-0 group-hover:opacity-70 group-hover:animate-pulse">{text}</span>
            <span className="absolute top-0 left-0 ml-[2px] text-white opacity-0 group-hover:opacity-70 group-hover:animate-ping">{text}</span>
        </div>
    );
};

// 4. SPOTLIGHT CARD
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => { setIsFocused(true); setOpacity(1); };
    const handleBlur = () => { setIsFocused(false); setOpacity(0); };
    const handleMouseEnter = () => { setOpacity(1); };
    const handleMouseLeave = () => { setOpacity(0); };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,97,5,0.15), transparent 40%)`,
                }}
            />
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,97,5,0.4), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};


// --- SECTIONS ---

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,97,5,0.1),transparent_70%)] animate-pulse" />
            <div className="absolute top-0 w-full opacity-10">
                <ParallaxText baseVelocity={2}>DOMINATE SCALE REVENUE</ParallaxText>
                <ParallaxText baseVelocity={-2}>TARGET CLICK CONVERT</ParallaxText>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-0"
                >
                    <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-exclusion">
                        Hyper<span className="text-[#FF6105] opacity-90">Scale</span>
                    </h1>
                    <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 uppercase  disabled-text-stroke">
                        PPC
                    </h1>
                </motion.div>

                <div className="mt-12 flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
                    <p className="max-w-lg text-xl text-neutral-400 font-mono border-l-2 border-[#FF6105] pl-6">
                        <span className="text-white font-bold">WARNING:</span> This is not "safe" marketing. We build aggressive, high-velocity ad engines that burn competitors and print revenue.
                    </p>
                    <Link href="#audit" className="group flex items-center gap-4 bg-[#FF6105] text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,97,5,0.4)] hover:shadow-[0_0_80px_rgba(255,97,5,0.6)]">
                        Initiate Sequence <Zap className="fill-black" />
                    </Link>
                </div>
            </div>

            {/* Bottom Ticker */}
            <div className="absolute bottom-10 w-full border-y border-[#FF6105]/20 py-2 bg-black/50 backdrop-blur-sm">
                <div className="flex justify-around text-[#FF6105] font-mono text-xs uppercase tracking-[0.5em]">
                    <span>System Status: Optimal</span>
                    <span>High ROAS Detected</span>
                    <span>Competitor Analysis: Vulnerable</span>
                </div>
            </div>
        </section>
    );
};

const ProblemGlitch = () => {
    return (
        <section className="py-40 bg-black relative border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
                <div className="relative">
                    <div className="absolute -inset-4 bg-[#FF6105] opacity-20 blur-2xl animate-pulse rounded-full" />
                    <h2 className="relative text-6xl md:text-9xl font-black uppercase text-white leading-[0.85] tracking-tighter mb-12">
                        Budget <br />
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,white,transparent)] decoration-wavy decoration-red-500 underline line-through decoration-4">Incinerator</span>
                    </h2>
                    <p className="text-2xl text-neutral-400 font-light leading-relaxed">
                        90% of ad spend is wasted on <span className="text-red-500 font-bold">bot traffic</span>, <span className="text-red-500 font-bold">weak creative</span>, and <span className="text-red-500 font-bold">algorithmic drift</span>.
                        Your current campaigns are bleeding.
                    </p>
                </div>
                <div className="space-y-4 font-mono text-red-500/80 uppercase tracking-widest text-sm">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex justify-between border-b border-red-900/30 pb-4">
                            <span>Error_Code_0{i}: High CPA</span>
                            <span>[CRITICAL]</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Massive Overlay Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
                <span className="text-[30vw] font-black uppercase text-red-500">STOP</span>
            </div>
        </section>
    );
};

const ServicesGrid = () => {
    const services = [
        { t: "Google", i: Search, d: "High-intent capture systems." },
        { t: "Social", i: Instagram, d: "Disruptive scroll-stopping creative." },
        { t: "Shopping", i: ShoppingBag, d: "Feed optimization engineering." },
        { t: "Display", i: Layers, d: "Omnipresent retargeting nets." },
    ];

    return (
        <section className="py-32 bg-black px-6">
            <div className="max-w-7xl mx-auto mb-20">
                <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter">The <span className="text-[#FF6105]">Arsenal</span></h2>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => (
                    <SpotlightCard key={i} className="h-[400px] group">
                        <div className="p-10 h-full flex flex-col justify-between relative z-10">
                            <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-[#FF6105] group-hover:text-black transition-colors duration-300 text-white">
                                <s.i size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black uppercase text-white mb-4">{s.t}</h3>
                                <p className="text-neutral-500 font-medium">{s.d}</p>
                            </div>
                            <div className="absolute top-6 right-6 font-mono text-xs text-[#FF6105] opacity-50">
                                SYS_0{i + 1}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

const ROICalculator = () => {
    const [val, setVal] = useState(50);
    return (
        <section className="py-40 bg-[#050505] relative border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,97,5,0.05),transparent_60%)]" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-16">
                    <span className="inline-block px-4 py-1 rounded-full border border-[#FF6105] text-[#FF6105] font-mono text-xs mb-6 uppercase tracking-widest bg-[#FF6105]/10">
                        Simulation Mode
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">
                        Predict <span className="text-[#FF6105]">Profit</span>
                    </h2>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
                    <div className="flex justify-between items-end mb-12">
                        <div className="text-left">
                            <div className="text-neutral-500 font-mono text-sm uppercase tracking-widest mb-2">Monthly Spend</div>
                            <div className="text-5xl font-black text-white font-mono">${(val * 1000).toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[#FF6105] font-mono text-sm uppercase tracking-widest mb-2">Est. Revenue (4.2x)</div>
                            <div className="text-5xl font-black text-[#FF6105] font-mono drop-shadow-[0_0_15px_rgba(255,97,5,0.5)]">
                                ${(val * 1000 * 4.2).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="relative h-16 w-full">
                        <input
                            type="range" min="1" max="100" value={val} onChange={(e) => setVal(parseInt(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#FF6105] shadow-[0_0_20px_#FF6105]" style={{ width: `${val}%` }} />
                        </div>
                        <div
                            className="absolute top-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-[0_0_20px_white] pointer-events-none -translate-y-1/2 z-10"
                            style={{ left: `${val}%` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessSteps = () => {
    const steps = [
        { t: "Deep Recon", d: "Spying on competitors." },
        { t: "Strategy Build", d: "Engineering the funnel." },
        { t: "Launch & Kill", d: "Cutting losers fast." },
        { t: "Hyper Scale", d: "Doubling down on profit." },
    ];
    return (
        <section className="py-32 bg-black px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {steps.map((s, i) => (
                        <div key={i} className="p-10 hover:bg-[#FF6105] hover:text-black transition-colors duration-500 group cursor-crosshair">
                            <div className="text-xs font-mono opacity-50 mb-6 group-hover:text-black">PHASE_0{i + 1}</div>
                            <h3 className="text-4xl font-black uppercase mb-4 text-white group-hover:text-black">{s.t}</h3>
                            <p className="text-neutral-500 font-medium group-hover:text-black/70">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => (
    <section className="h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <ParallaxText baseVelocity={5}>READY TO SCALE? READY TO SCALE?</ParallaxText>
        </div>
        <div className="relative z-10 text-center">
            <Link href="/contact" className="relative group inline-block">
                <div className="absolute inset-0 bg-[#FF6105] blur-[100px] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 block text-[8vw] font-black uppercase text-white mix-blend-difference group-hover:scale-110 transition-transform duration-500">
                    DOMINATE
                </span>
                <span className="block text-[#FF6105] font-mono tracking-[1em] text-sm mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    CLICK TO ENGAGE
                </span>
            </Link>
        </div>
    </section>
);

export default function PPCPage() {
    return (
        <SmoothScrolling>
            <div className="bg-black min-h-screen text-white selection:bg-[#FF6105] selection:text-black font-sans">
                <NoiseOverlay />
                <Navbar />
                <Hero />
                <ProblemGlitch />
                <ServicesGrid />
                <ROICalculator />
                <ProcessSteps />
                <CTA />
                <Footer />
            </div>
        </SmoothScrolling>
    );
}
