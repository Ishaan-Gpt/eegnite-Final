"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    BarChart3, ArrowRight, TrendingUp, LayoutDashboard, Search,
    PieChart, Map, FileText, Settings, Activity,
    MousePointerClick, MonitorPlay, ShoppingBag, Share2, Repeat,
} from "lucide-react";
import Link from "next/link";
import { Compare } from "@/components/ui/compare";

// --- PREMIUM TEXTURE (interactive hover effect) ---
function PremiumTexture({ opacity = "0.04" }: { opacity?: string }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute inset-0 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60 pointer-events-none" />
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                animate={{ x: mousePos.x - 150, y: mousePos.y - 150, opacity: isHovering ? 1 : 0 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
                style={{ background: 'radial-gradient(circle, rgba(255,97,5,0.06) 0%, transparent 70%)' }}
            />
            <motion.div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#FF6105]/10" animate={{ opacity: isHovering ? 0.4 : 0.15 }} transition={{ duration: 0.3 }} />
            <motion.div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#FF6105]/10" animate={{ opacity: isHovering ? 0.4 : 0.15 }} transition={{ duration: 0.3 }} />
        </div>
    );
}

// --- FLIP CARD ---
function FlipCard({ service }: { service: { title: string; icon: any; description: string } }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

    const handleInteractionStart = () => { if (!isMobile) { setIsFlipped(true); setIsHovered(true); } };
    const handleInteractionEnd = () => { if (!isMobile) { setIsFlipped(false); setIsHovered(false); } };
    const handleClick = () => { if (isMobile) setIsFlipped(!isFlipped); };

    return (
        <div className="h-[350px] md:h-[400px] w-full perspective-1000 cursor-pointer group relative" onMouseEnter={handleInteractionStart} onMouseLeave={handleInteractionEnd} onClick={handleClick}>
            <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-r from-transparent via-transparent to-transparent overflow-hidden">
                <motion.div className="absolute inset-0" animate={{ background: isHovered ? ['conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)', 'conic-gradient(from 360deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)'] : 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 360deg)' }} transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }} />
                <motion.div className="absolute inset-0 blur-md" animate={{ background: isHovered ? 'conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 90deg, transparent 270deg, #FF6105 360deg)' : 'transparent', opacity: isHovered ? 0.5 : 0 }} transition={{ duration: 0.3 }} />
            </div>
            <motion.div className="relative w-full h-full transition-all duration-700 preserve-3d" animate={{ rotateY: isFlipped ? 180 : 0 }} style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 w-full h-full bg-white rounded-[2rem] border border-black/5 shadow-sm p-8 flex flex-col items-center justify-center text-center backface-hidden group-hover:shadow-xl transition-shadow duration-300" style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute inset-0 opacity-[0.02] rounded-[2rem]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="w-20 h-20 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                        <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-black relative z-10">{service.title}</h3>
                    <div className="mt-8 relative z-10">
                        <span className="text-xs font-bold text-[#FF6105] uppercase tracking-widest bg-[#FFF5F0] px-4 py-2 rounded-full group-hover:bg-[#FF6105] group-hover:text-white transition-colors duration-300">View Details</span>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full bg-[#FF6105] rounded-[2rem] shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden overflow-y-auto" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <service.icon size={32} strokeWidth={1.5} className="text-white mb-6 opacity-80" />
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">{service.description}</p>
                </div>
            </motion.div>
        </div>
    );
}

// --- HERO ---
export function PpcHero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-6 sm:px-12 md:px-8 overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `linear-gradient(to right, #FF6105 1px, transparent 1px), linear-gradient(to bottom, #FF6105 1px, transparent 1px)`, backgroundSize: '45px 45px' }} />
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-[#FF6105]/15 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full">
                    <h1 className="text-[7.5vw] xs:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-[1.1] mb-4 md:mb-6 text-black max-w-[1200px] mx-auto text-center">
                        PPC ADVERTISING SERVICES <br className="hidden md:block" /> THAT DRIVE REAL GROWTH
                    </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-4 md:mb-12 w-full text-center">
                    <h2 className="text-lg md:text-4xl lg:text-5xl font-bold text-[#FF6105] uppercase tracking-tight">
                        SPEND SMART. SCALE FAST. WIN BIG.
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full">
                    <p className="text-xs md:text-base lg:text-lg text-black/60 font-normal leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10 px-1 text-center">
                        At EEGNITE, every penny you spend on PPC is accountable. We do not run ads and hope for the best. We build performance-first paid advertising campaigns that target the right audience, with the right message, at the right moment. From Google Ads and Meta campaigns to LinkedIn and display - every campaign tied to a measurable outcome.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <Link href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-7 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all shadow-xl hover:shadow-[#FF6105]/20">
                        Start Your Project
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// --- INTRO SECTION ---
export function IntroSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <PremiumTexture opacity="0.03" />
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
                        <p className="text-black/50 text-base md:text-xl leading-relaxed mb-8">
                            At EEGNITE, we don't just run ads, we build targeted PPC campaigns that drive real business growth. As a trusted PPC services company based in Kolkata, India we use data-driven strategies to ensure that every ad we create reaches the perfect audience for maximum impact.
                        </p>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            From in-depth keyword research and compelling ad copy creation to bid optimization and ongoing performance monitoring, our team manages every aspect of your PPC marketing campaign. Whether you're an eCommerce brand focused on driving sales or a B2B business aiming to generate high-quality leads, EEGNITE's structured approach ensures your campaigns stay aligned with your goals and deliver measurable ROI.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 lg:text-right">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-black leading-none">
                            PPC Services <br className="hidden lg:block" />
                            <span className="text-[#FF6105]">Company For</span> <br className="hidden lg:block" />
                            Sustainable <br className="hidden lg:block" />
                            Growth
                        </h2>
                        <div className="h-1.5 w-24 bg-[#FF6105] rounded-full mt-8 lg:ml-auto" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- PARTNER SECTION ---
export function PartnerSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-black/5">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-2xl lg:w-1/2">
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-black leading-none mb-6">
                            Partner with a <br />
                            <span className="text-[#FF6105]">Leading PPC</span> <br />
                            Agency in India
                        </h2>
                        <div className="h-1.5 w-24 bg-[#FF6105] rounded-full" />
                    </div>
                    <div className="lg:w-1/2 space-y-8 md:space-y-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <p className="text-black/50 text-base md:text-xl leading-relaxed mb-6">
                                When choosing a PPC agency, it's crucial to partner with a team that brings comprehensive expertise across diverse platforms. As a results-driven PPC management company in India, EEGNITE specializes in crafting tailored campaigns to meet your specific needs while ensuring maximum visibility and ROI.
                            </p>
                            <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                Whether you require a focused approach or a multi-channel campaign, a leading PPC management agency always delivers impactful solutions that fuel growth and conversions. Our approach ensures that your business stays ahead of the competition, continuously optimizing campaigns for peak efficiency.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">Expertise</h4>
                                <p className="text-lg font-bold text-black uppercase">Multi-Channel Ads</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">Focus</h4>
                                <p className="text-lg font-bold text-black uppercase">ROI Optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- FULL SERVICE PPC ---
export function FullServicePPC() {
    const services = [
        { title: "GOOGLE SEARCH ADS", icon: Search, description: "Your buyers are searching right now. We make sure your brand appears first. Keyword research, ad copy, bidding strategy, and Quality Score optimisation — all focused on the lowest possible cost per conversion." },
        { title: "META ADS", icon: Share2, description: "Full-funnel Meta campaigns built to sell. Cold prospecting, warm retargeting, and conversion campaigns — with creative testing, audience segmentation, and pixel attribution built in from day one." },
        { title: "GOOGLE DISPLAY AND YOUTUBE ADS", icon: MonitorPlay, description: "Awareness at scale, cost-efficiently. Visually compelling Display and YouTube campaigns that build brand recognition and retarget high-intent visitors at the moment they are most receptive." },
        { title: "LINKEDIN ADS", icon: MousePointerClick, description: "Decision-makers scroll LinkedIn daily. Sponsored content, lead gen forms, and message ad sequences that put your brand in front of CFOs, CEOs, and procurement heads ready to act." },
        { title: "RETARGETING CAMPAIGNS", icon: Repeat, description: "Most visitors do not convert the first time. Smart retargeting sequences across Google, Meta, and LinkedIn re-engage warm audiences with the right message and bring them back to buy." },
        { title: "SHOPPING AND E-COMMERCE ADS", icon: ShoppingBag, description: "Google Shopping and Meta catalogue campaigns that put your products in front of buyers at the exact moment they are ready to purchase. Built for e-commerce brands that want to scale revenue fast." },
        { title: "CONVERSION RATE OPTIMISATION (CRO)", icon: PieChart, description: "Traffic is only half the equation. We fix the landing page and ad-to-page alignment friction points that cost you conversions. More leads from the same spend, without increasing budget." },
        { title: "PPC ANALYTICS AND ATTRIBUTION", icon: BarChart3, description: "Full measurement infrastructure: pixel setup, conversion events, UTM tracking, and custom dashboards — so you always know which campaigns, channels, and creatives are generating your revenue." }
    ];

    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-12 md:mb-16 text-left md:text-center md:mx-auto"
                >
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black mb-6">
                        RESULTS-DRIVEN PPC ADVERTISING. <span className="text-[#FF6105]">FOCUSED ON REVENUE GROWTH</span>
                    </h2>
                    <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                        Our PPC services are built to do one thing: deliver measurable returns on your ad spend. We build campaigns that attract buyers, convert them, and scale what works across every channel that matters.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => <FlipCard key={idx} service={service} />)}
                </div>

                <div className="text-center mt-16 md:mt-24">
                    <Link href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Request a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- PPC PROCESS FLOATING ---
export function PpcProcessFloating() {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const { scrollYProgress } = useScroll({ target: targetRef as any });

    useEffect(() => {
        const calculateRange = () => {
            if (!containerRef.current) return;
            const windowWidth = window.innerWidth;
            const isMobile = windowWidth < 768;
            if (isMobile) {
                const lastCard = containerRef.current.lastElementChild as HTMLElement;
                if (lastCard) setScrollRange(lastCard.offsetLeft + (lastCard.offsetWidth / 2) - (windowWidth / 2));
            } else {
                const children = Array.from(containerRef.current.children) as HTMLElement[];
                const targetCard = children[5];
                if (targetCard) setScrollRange(targetCard.offsetLeft + (targetCard.offsetWidth / 2) - (windowWidth / 2));
                else setScrollRange(containerRef.current.scrollWidth - windowWidth);
            }
        };
        calculateRange();
        window.addEventListener('resize', calculateRange);
        return () => window.removeEventListener('resize', calculateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    const steps = [
        { id: "01", title: "GOAL SETTING", desc: "Define revenue targets, KPIs, and budget allocation.", icon: BarChart3 },
        { id: "02", title: "CHANNEL SELECTION", desc: "Right platform matched to your audience and goal.", icon: Map },
        { id: "03", title: "CAMPAIGN BUILD", desc: "Ad structure, copy, creatives, and tracking set up.", icon: FileText },
        { id: "04", title: "LAUNCH", desc: "Campaigns live. Full tracking active from day one.", icon: Activity },
        { id: "05", title: "WEEKLY OPTIMISATION", desc: "Test, adjust, cut waste, and scale what wins.", icon: Settings },
        { id: "06", title: "REPORT AND SCALE", desc: "Monthly results. Budget reallocated to top performers.", icon: TrendingUp },
    ];

    return (
        <section ref={targetRef} className="relative h-[200vh] md:h-[250vh] bg-white text-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-16 md:top-24 left-0 w-full z-20 text-left md:text-center">
                    <div className="max-w-4xl md:mx-auto px-6">
                        <h2 className="hidden md:block text-6xl font-bold uppercase tracking-tight text-black leading-tight">
                            <span className="block whitespace-nowrap">OUR PERFORMANCE-FOCUSED</span>
                            <span className="block text-[#FF6105] whitespace-nowrap">PPC ADVERTISING PROCESS</span>
                        </h2>
                        <h2 className="block md:hidden text-3xl font-bold uppercase tracking-tight text-black leading-[1.1]">
                            <span className="block">OUR PERFORMANCE</span>
                            <span className="block mt-1">FOCUSED <span className="text-[#FF6105]">PPC</span></span>
                            <span className="block text-[#FF6105] mt-1">ADVERTISING PROCESS</span>
                        </h2>
                    </div>
                </div>

                <motion.div ref={containerRef} style={{ x }} className="flex gap-8 md:gap-20 pl-8 md:pl-40 items-center relative z-10 pt-20 md:pt-36">
                    <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[200%] -translate-y-1/2 pointer-events-none rounded-full" />
                    {steps.map((step, i) => {
                        const isTop = i % 2 === 0;
                        return (
                            <div key={i} className={`relative min-w-[300px] md:min-w-[400px] flex flex-col items-center ${isTop ? 'mb-12 md:mb-28' : 'mt-12 md:mt-28'}`}>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10 ${isTop ? 'bottom-[-1.5rem] md:bottom-[-3.5rem]' : 'top-[-1.5rem] md:top-[-3.5rem]'}`}>
                                    <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                </div>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[1.5rem] md:h-[3.5rem] bg-black/10 ${isTop ? 'bottom-[-1.5rem] md:bottom-[-3.5rem]' : 'top-[-1.5rem] md:top-[-3.5rem]'}`} />
                                <div className="w-full bg-white border border-black/10 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-6xl group-hover:opacity-10 transition-opacity select-none text-black">{step.id}</div>
                                    <div className="w-12 h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform"><step.icon size={24} /></div>
                                    <h3 className="text-2xl font-bold uppercase mb-2 text-black group-hover:text-[#FF6105] transition-colors">{step.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex justify-center">
                    <a href="tel:+916289753474" className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                        Schedule a Call
                    </a>
                </div>
            </div>
        </section>
    );
}

// --- PROTOCOL TIMELINE ---
export function ProtocolTimeline() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef as any, offset: ["start start", "end end"] });

    const steps = [
        { t: "Campaign Experience", d: "Years of managing paid campaigns across industries with a constant focus on testing, scaling, and lowering acquisition costs." },
        { t: "Ad Performance Consistency", d: "Structured campaign management, audience refinement, and budget monitoring that keeps campaigns performing efficiently." },
        { t: "PPC Transparency", d: "Clear reporting on ad spend, conversions, CPC, ROAS, and next-step strategy so you always know where the budget goes." },
        { t: "Budget ROI Protection", d: "Every campaign is optimized to reduce wasted spend and maximize conversion-focused returns from your ad investment." },
        { t: "Shared Advertising Knowledge", d: "We share campaign insights, audience learnings, and performance data so your team understands what drives conversions." },
    ];

    return (
        <section ref={targetRef} className="bg-white relative py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16 text-left md:text-center">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black leading-[1.1] max-w-[95%] md:mx-auto">
                    HOW EEGNITE BECOMES A <span className="text-[#FF6105]">STRONG PPC ADVERTISING PARTNER FOR YOUR BUSINESS</span>
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#FF6105]/5 -translate-x-1/2 rounded-full overflow-hidden">
                    <motion.div style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} className="w-full bg-[#FF6105] rounded-full origin-top" />
                </div>
                {steps.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-20% 0px -20% 0px" }} className="py-12 md:min-h-[50vh] flex items-center justify-center relative md:py-16">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative pl-20 md:pl-0">
                            <div className={`order-2 md:order-1 ${i % 2 === 1 ? 'md:col-start-2 md:pl-24' : 'md:text-right md:pr-24'}`}>
                                <h3 className="text-2xl md:text-4xl font-bold uppercase text-black leading-tight mb-3 md:mb-4">{s.t}</h3>
                                <p className="text-sm md:text-lg text-black/60 font-normal leading-relaxed max-w-lg ml-auto mr-auto md:mr-0">{s.d}</p>
                            </div>
                            <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center mt-8 md:mt-0 h-full md:h-auto pointer-events-none md:pointer-events-auto">
                                <motion.div initial={{ scale: 1, backgroundColor: "#ffffff", borderColor: "#FF6105" }} whileInView={{ scale: 1.2, backgroundColor: "#FF6105", borderColor: "#ffffff" }} viewport={{ margin: "-45% 0px -45% 0px" }} transition={{ duration: 0.5 }} className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-3xl font-bold border-[6px] shadow-xl relative z-10 transition-colors duration-500">
                                    <span className="text-black">0{i + 1}</span>
                                </motion.div>
                            </div>
                            <div className={`hidden md:block order-1 md:order-2 ${i % 2 === 1 ? 'md:col-start-1' : ''}`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFF5F0] rounded-3xl p-8 md:p-12 mx-4 md:mx-auto max-w-4xl text-center mt-20 md:mt-32 border border-[#FF6105]/10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6105]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-black mb-4">Schedule A Call Now</h3>
                    <p className="text-black/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">Get a free PPC audit from our experts and see where your next growth wins are hiding.</p>
                    <a href="tel:+916289753474" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Schedule A Call Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}

// --- WHY CHOOSE SECTION ---
export function WhyChooseSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const { scrollYProgress } = useScroll({ target: targetRef as any });

    useEffect(() => {
        const calculateRange = () => {
            if (!containerRef.current) return;
            const lastCard = containerRef.current.lastElementChild as HTMLElement;
            if (lastCard) setScrollRange(lastCard.offsetLeft);
            else setScrollRange(containerRef.current.scrollWidth - window.innerWidth);
        };
        calculateRange();
        window.addEventListener('resize', calculateRange);
        return () => window.removeEventListener('resize', calculateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    const reasons = [
        { id: "01", title: "Focus on Scaling Revenue", desc: "We specialize in crafting tailored PPC campaigns that ensure maximum visibility and ROI, fueling sustainable growth that scales with your business." },
        { id: "02", title: "Avoid Click Waste", desc: "We bid smarter, not harder. By targeting the most relevant keywords and improving ad scores, we help reduce unnecessary spend while increasing efficiency." },
        { id: "03", title: "Real-time Decision Making", desc: "Our data-driven approach analyze consumer behavior in real-time to optimize every aspect of your PPC performance for smarter decisions." },
        { id: "04", title: "Local to Global Reach", desc: "Whether focusing on a niche local area or a multi-channel global approach, we deliver solutions that Fuel real growth wherever you operate." },
    ];

    return (
        <section ref={targetRef} className="relative h-[150vh] md:h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex flex-col justify-center h-[75vh] md:h-screen overflow-hidden">
                <div className="absolute top-28 md:top-32 left-0 w-full z-20 text-left md:text-center">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none md:mx-auto">
                            Why <span className="text-[#FF6105]">India</span> Chooses Us
                        </h2>
                    </div>
                </div>
                <div className="flex items-center h-full w-full pt-32 md:pt-16">
                    <motion.div ref={containerRef} style={{ x }} className="flex gap-4 md:gap-12 pl-[5vw] md:pl-[10vw] items-center">
                        {reasons.map((reason, i) => (
                            <div key={i} className="min-w-[85vw] md:min-w-[600px] flex flex-col justify-center p-6 md:p-12 border-l border-black/10 h-[50vh] md:h-[55vh] bg-white hover:bg-gray-50 transition-colors">
                                <span className="text-5xl md:text-8xl font-medium text-black/5 mb-4 md:mb-8">{reason.id}</span>
                                <h3 className="text-2xl md:text-4xl font-medium mb-4 md:mb-6 uppercase tracking-tight">{reason.title}</h3>
                                <p className="text-base md:text-xl text-black/60 leading-relaxed max-w-xl">{reason.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- PPC COMPARISON SECTION ---
export function PpcComparisonSection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-left md:text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black">
                        WHY <span className="text-[#FF6105]">EEGNITE?</span>
                    </h2>
                    <p className="text-black/60 text-base md:text-xl font-normal max-w-4xl md:mx-auto leading-relaxed">
                        Most businesses run ads. Few run ads that actually return. The difference is not the platform budget. It is the strategy, the targeting, and the continuous optimisation behind every campaign. Businesses across India, the US, Europe, and the Middle East choose EEGNITE because we treat your ad spend like our own. We spend where it works. We stop where it does not.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto h-[600px] md:h-[800px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                    <Compare
                        className="h-full"
                        slideMode="drag"
                        firstContent={
                            <div className="w-full h-full bg-white flex flex-col items-center justify-start pt-12 md:pt-20 p-4 md:p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#FF6105] mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">EEGNITE PPC SOLUTION</h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FFF5F0] border border-[#FF6105]/20 text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-[#FF6105] mb-2">Built Around Your Business Goal. Not Around Your Budget.</h4>
                                        <p className="text-black/70 text-xs md:text-sm leading-relaxed">Every campaign starts with your revenue objective. Channel selection, audience targeting, and creative are chosen to hit that number. Not to fill a reporting slide.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FF6105] text-white text-left hover:scale-[1.02] transition-transform shadow-lg">
                                        <h4 className="text-sm md:text-xl font-bold text-white mb-2">Real Accountability. Real Numbers.</h4>
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed">We report the metrics that connect your spend to your growth. Cost per acquisition, return on ad spend, and pipeline impact. Transparent. Every single month.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/10 shadow-sm text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">We Cut What Loses. We Scale What Wins.</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Weekly performance reviews, A/B testing, and fast budget reallocation. Underperforming spend does not run at EEGNITE. It gets fixed or it gets cut.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        secondContent={
                            <div className="w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-start pt-12 md:pt-20 p-4 md:p-12 text-center relative grayscale">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-black/20 mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">TRADITIONAL PPC AGENCY</h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full opacity-60">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Budgets Allocated. Returns Unknown.</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Campaigns launched to platforms without a clear funnel or attribution model. Money spent. Clicks tracked. Revenue nowhere. Agencies report CTR and call it performance.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Vanity KPIs. Impressions Celebrated While The Pipeline Stays Empty.</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Clicks and impressions reported as wins while leads and revenue stay flat. The dashboard looks healthy. Your business does not grow.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Campaigns Live. Optimisation Dead.</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Campaigns launched and left. No weekly review, no creative testing, no budget reallocation. Diminishing returns run unchecked until the contract ends.</p>
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
