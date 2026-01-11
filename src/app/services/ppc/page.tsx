"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import { ArrowUpRight, Target, Zap, BarChart3, Crosshair, MousePointerClick, Layers, Globe, Search, Instagram, MonitorPlay, ShoppingBag, PieChart, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// --- UI COMPONENTS ---

const SectionHeading = ({ children, align = "center" }: { children: React.ReactNode; align?: "left" | "center" }) => (
    <div className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
            {children}
        </h2>
        <div className={`h-1 w-24 bg-[#FF6105] ${align === "center" ? "mx-auto" : ""}`} />
    </div>
);

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

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,97,5,0.15), transparent 40%)`,
                }}
            />
            <div className="relative h-full z-10">{children}</div>
        </div>
    );
};

// --- SECTIONS ---

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 px-6 bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,97,5,0.08),transparent_50%)]" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="px-4 py-1 rounded-full border border-[#FF6105] text-[#FF6105] text-xs font-bold uppercase tracking-widest bg-[#FF6105]/5">
                                Performance Marketing
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-bold text-white uppercase tracking-tighter leading-[0.85] mb-8">
                            Precision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6105] to-orange-600">Scale.</span>
                        </h1>

                        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed border-l-2 border-[#FF6105] pl-6">
                            We build algorithmic ad structures that turn capital into predictable revenue. Stop guessing. Start scaling.
                        </p>
                    </div>

                    <div className="mb-4">
                        <Link href="/contact" className="group flex items-center justify-center w-24 h-24 bg-[#FF6105] rounded-full hover:scale-110 transition-transform duration-300">
                            <ArrowUpRight className="text-black w-10 h-10 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 2. INTERACTIVE SERVICE DECK (Not a simple grid)
const ServiceDeck = () => {
    const services = [
        { title: "Google Search", icon: Search, desc: "Capture intent at the exact moment of decision." },
        { title: "Social Ads", icon: Zap, desc: "Disruptive creative execution that forces engagement." },
        { title: "Shopping", icon: ShoppingBag, desc: "Feed engineering for maximum e-commerce dominance." },
        { title: "Retargeting", icon: Layers, desc: "Algorithmic sequencing to convert window shoppers." }
    ];

    return (
        <section className="py-24 px-6 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    <h2 className="text-5xl font-bold uppercase text-white tracking-tight">The <span className="text-[#FF6105]">Engine</span></h2>
                    <p className="text-neutral-400 text-lg self-end pb-2">Full-stack acquisition infrastructure designed for growth.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((s, i) => (
                        <SpotlightCard key={i} className="group min-h-[300px]">
                            <div className="p-8 h-full flex flex-col justify-between">
                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white group-hover:bg-[#FF6105] group-hover:text-black transition-colors duration-300">
                                    <s.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase">{s.title}</h3>
                                    <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors">{s.desc}</p>
                                </div>
                                <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#FF6105] transition-colors mt-6" />
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 3. ROI CALCULATOR (Clean Fintech Style)
const ROIDashboard = () => {
    const [spend, setSpend] = useState(10000);
    const roas = 4.2;

    return (
        <section className="py-32 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[3rem] border border-white/5 p-8 md:p-16 overflow-hidden relative">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6105]/5 rounded-full blur-[100px]" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-bold text-white uppercase mb-6">Growth <span className="text-[#FF6105]">Simulator</span></h3>
                        <p className="text-neutral-400 mb-12">Estimate your monthly revenue potential based on our average client performance metrics.</p>

                        <div className="mb-12">
                            <label className="block text-xs font-bold uppercase text-neutral-500 mb-4 tracking-widest">Monthly Ad Spend</label>
                            <div className="relative">
                                <input
                                    type="range" min="1000" max="100000" step="1000"
                                    value={spend} onChange={(e) => setSpend(Number(e.target.value))}
                                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FF6105]"
                                />
                            </div>
                            <div className="flex justify-between mt-4 text-sm font-mono text-[#FF6105]">
                                <span>$1k</span>
                                <span>$100k+</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-6 bg-black rounded-2xl border border-white/5">
                                <div className="text-neutral-500 text-xs uppercase mb-2">Investment</div>
                                <div className="text-2xl font-mono text-white">${spend.toLocaleString()}</div>
                            </div>
                            <div className="p-6 bg-[#FF6105] rounded-2xl">
                                <div className="text-black/60 font-bold text-xs uppercase mb-2">Est. Revenue</div>
                                <div className="text-3xl font-mono font-bold text-black">${(spend * roas).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="space-y-6">
                            {[
                                { l: "Avg. ROAS", v: "4.2x" },
                                { l: "Conversion Rate", v: "3.8%" },
                                { l: "Cost Per Acq.", v: "-22%" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <span className="text-neutral-400 uppercase tracking-widest text-sm">{stat.l}</span>
                                    <span className="text-2xl font-bold text-white">{stat.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. TIMELINE PROCESS (Vertical)
const ProcessTimeline = () => {
    const steps = [
        { t: "Deep Audit", d: "We tear down your current setup. Identifying wasted spend, keyword gaps, and missed audience segments." },
        { t: "The Build", d: "Granular campaign structure. Landing page optimization. Tracking pixel perfection." },
        { t: "Launch & Learn", d: "High-velocity A/B testing. We cycle creatives and audiences until we find the winners." },
        { t: "Scale", d: "Aggressive budget increases on high-performing ad sets. Expanding into new channels." }
    ];

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <SectionHeading>The <span className="text-[#FF6105]">Blueprint</span></SectionHeading>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pl-12 md:pl-24 group">
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-neutral-800 rounded-full border border-white/20 group-hover:bg-[#FF6105] group-hover:border-[#FF6105] transition-colors duration-300" />

                            <span className="text-[#FF6105] font-mono text-xs tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0 duration-300">
                                PHASE 0{i + 1}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-4 uppercase">{step.t}</h3>
                            <p className="text-neutral-400 leading-relaxed max-w-lg">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function PPCPage() {
    return (
        <SmoothScrolling>
            <div className="bg-black min-h-screen text-white font-sans selection:bg-[#FF6105] selection:text-black">
                <Navbar />
                <Hero />
                <ServiceDeck />
                <ROIDashboard />
                <ProcessTimeline />
                <section className="py-32 text-center bg-black">
                    <h2 className="text-6xl md:text-9xl font-bold uppercase text-neutral-900 hover:text-white transition-colors duration-700 cursor-default">
                        Dominate
                    </h2>
                    <div className="mt-[-2rem] relative z-10">
                        <Link href="/contact" className="inline-block bg-[#FF6105] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            Start Project
                        </Link>
                    </div>
                </section>
                <Footer />
            </div>
        </SmoothScrolling>
    );
}
