"use client";

import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    AnimatePresence
} from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import {
    ArrowUpRight, Target, Zap, Activity, Crosshair,
    MousePointerClick, Layers, Globe, Search, Instagram,
    ShoppingBag, Hexagon, Terminal, Flame, TrendingUp, Plus, Minus
} from "lucide-react";
import Link from "next/link";

// --- UTILS ---
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// --- COMPONENTS ---

// 1. MAGNETIC BUTTON
const MagneticButton = ({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) => {
    return (
        <Link href={href} className={`group relative inline-block cursor-pointer ${className}`}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-[#FF6105] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-2 overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </motion.div>
            <div className="absolute inset-0 bg-[#FF6105] blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity" />
        </Link>
    );
};

// 2. PARALLAX TEXT STRIP
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
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap py-4 border-y border-white/10 bg-black">
            <motion.div className="flex whitespace-nowrap gap-10 text-nowrap" style={{ x }}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="block text-[4rem] md:text-[8rem] font-black uppercase tracking-tighter text-transparent stroke-text leading-[0.85] opacity-50 select-none hover:text-[#FF6105] transition-colors duration-300">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// 3. HORIZONTAL SCROLL SECTION
const HorizontalScroll = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const cards = [
        { title: "Search", desc: "Intent Capture", icon: Search, num: "01" },
        { title: "Social", desc: "Disruptive Ads", icon: Instagram, num: "02" },
        { title: "Display", desc: "Retargeting", icon: Layers, num: "03" },
        { title: "Shopping", desc: "Feed Ops", icon: ShoppingBag, num: "04" },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-20">
                    <div className="w-[40vw] shrink-0 flex flex-col justify-center">
                        <h2 className="text-8xl font-black uppercase text-white leading-none">
                            The <span className="text-[#FF6105]">Stack</span>
                        </h2>
                        <p className="mt-8 text-xl text-neutral-400 max-w-md">
                            We don't just run ads. We build cross-platform ecosystems that trap traffic and force conversions.
                        </p>
                    </div>
                    {cards.map((c, i) => (
                        <div key={i} className="w-[50vw] md:w-[30vw] h-[60vh] bg-neutral-900/50 border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between shrink-0 relative group hover:border-[#FF6105] transition-colors duration-500">
                            <div className="absolute right-6 top-6 text-8xl font-black text-white/5 group-hover:text-[#FF6105]/10 transition-colors">{c.num}</div>
                            <div className="w-20 h-20 bg-[#FF6105] rounded-full flex items-center justify-center text-black">
                                <c.icon size={40} />
                            </div>
                            <div>
                                <h3 className="text-5xl font-black uppercase text-white mb-2">{c.title}</h3>
                                <p className="text-xl text-neutral-400">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="w-[20vw] shrink-0" /> {/* Buffer */}
                </motion.div>
            </div>
        </section>
    );
};

// 4. ACCORDION PROCESS
const AccordionItem = ({ title, num, isOpen, onClick, children }: any) => {
    return (
        <div className="border-b border-white/10">
            <button onClick={onClick} className="w-full py-10 flex items-center justify-between group">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-mono text-[#FF6105]">0{num}</span>
                    <span className={`text-4xl md:text-6xl font-black uppercase transition-colors ${isOpen ? 'text-[#FF6105]' : 'text-white group-hover:text-white/80'}`}>{title}</span>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus className="w-8 h-8 text-white" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 pl-14 md:pl-20 max-w-3xl text-xl text-neutral-400 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Process = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const items = [
        { t: "Reconnaissance", c: "We audit everything. Competitor funnels, keyword gaps, and ad fatigue analysis before a single dollar is spent." },
        { t: "Deployment", c: "Launching exact-match SKAGs and broad-match alpha campaigns. Testing creatives at high velocity." },
        { t: "Optimization", c: "Killing underperformers within 48 hours. Reallocating budget to high-ROAS ad sets. Algorithmic scaling." },
        { t: "Domination", c: "Expanding lookalikes, retargeting pools, and cross-channel sequences to saturate the market." }
    ];

    return (
        <section className="py-32 bg-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-mono text-[#FF6105] tracking-[0.5em] mb-12 uppercase">Processing Method</h2>
                {items.map((item, i) => (
                    <AccordionItem
                        key={i}
                        num={i + 1}
                        title={item.t}
                        isOpen={openIndex === i}
                        onClick={() => setOpenIndex(i)}
                    >
                        {item.c}
                    </AccordionItem>
                ))}
            </div>
        </section>
    );
};


// 5. HERO - NEW MASK EFFECT
const Hero = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
    const y = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <section className="relative h-[110vh] bg-black flex items-center justify-center overflow-hidden">

            {/* Background Chaos */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#FF6105] opacity-[0.05] rounded-full blur-[150px] animate-pulse scale-150" />
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="relative z-10 text-center mix-blend-difference">
                <motion.h1
                    style={{ scale, y }}
                    className="text-[20vw] leading-[0.7] font-black tracking-tighter text-white uppercase"
                >
                    PPC
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-col items-center"
                >
                    <p className="text-xl md:text-2xl text-white font-mono tracking-widest uppercase mb-8">
                        Revenue Engineering
                    </p>
                    <MagneticButton href="/contact">Start Engine <ArrowUpRight className="w-5 h-5" /></MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};

// MAIN PAGE
export default function PPCPage() {
    return (
        <SmoothScrolling>
            <div className="bg-black min-h-screen text-white selection:bg-[#FF6105] selection:text-black">
                <Navbar />

                <Hero />

                <section className="py-20 bg-black border-y border-white/10">
                    <ParallaxText baseVelocity={3}>SCALING REVENUE // SCALING REVENUE //</ParallaxText>
                </section>

                <div className="py-40 px-6 max-w-5xl mx-auto text-center md:text-left">
                    <h2 className="text-4xl md:text-7xl font-bold uppercase leading-tight">
                        We build <span className="text-[#FF6105] italic">aggressive</span> ad engines that burn competitors and print profit.
                    </h2>
                </div>

                <HorizontalScroll />

                <Process />

                {/* VISUAL BREAK */}
                <section className="h-[50vh] flex items-center justify-center border-y border-white/10 bg-neutral-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF6105_0%,transparent_70%)] opacity-20" />
                    <h2 className="text-[10vw] font-black uppercase text-transparent stroke-text opacity-30">IMPACT</h2>
                </section>

                <section className="h-screen flex items-center justify-center bg-black relative">
                    <div className="text-center">
                        <h2 className="text-8xl md:text-[12rem] font-black uppercase leading-[0.8] mb-12">
                            Ready?
                        </h2>
                        <MagneticButton href="/contact">DOMINATE NOW</MagneticButton>
                    </div>
                </section>

                <Footer />

                <style jsx global>{`
                    .stroke-text {
                        color: transparent;
                        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
                    }
                    .stroke-text:hover {
                         -webkit-text-stroke: 2px #FF6105;
                    }
                `}</style>
            </div>
        </SmoothScrolling>
    );
}
