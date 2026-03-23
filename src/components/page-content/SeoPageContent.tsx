"use client";

import { useRef, useState, useEffect } from "react";
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
    Activity,
    Link2,
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







// --- PREMIUM TEXTURE COMPONENT ---
// Modern Interactive Grid Texture with low opacity fade for premium look
const PremiumTexture = ({ className = "" }: { className?: string }) => {
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
            className={`absolute inset-0 overflow-hidden ${className}`}
        >
            {/* Modern Grid Lines - Low Opacity */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial Fade from edges - makes grid more premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60 pointer-events-none" />

            {/* Moving Grid Highlight - Interactive glow on grid */}
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                animate={{
                    x: mousePos.x - 150,
                    y: mousePos.y - 150,
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
                style={{
                    background: 'radial-gradient(circle, rgba(255,97,5,0.06) 0%, transparent 70%)',
                }}
            />

            {/* Subtle animated corner accents */}
            <motion.div
                className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#FF6105]/10"
                animate={{ opacity: isHovering ? 0.4 : 0.15 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#FF6105]/10"
                animate={{ opacity: isHovering ? 0.4 : 0.15 }}
                transition={{ duration: 0.3 }}
            />
        </div>
    );
}



const IndustriesSection = () => {
    const industries = [
        { title: "Healthcare & Home Services", desc: "Local clinics & home service firms." },
        { title: "Shopify & Retail", desc: "Scalable e-commerce growth strategies." },
        { title: "B2B & Logistics", desc: "Local search intent and authority." },
        { title: "AI & SaaS Firms", desc: "Technical SEO for software companies." },
        { title: "Professional Services", desc: "Authority building & expert profiling." },
        { title: "Industrial & Manufacturing", desc: "Global supply chain visibility." }
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black mb-4">
                            Industries <br /><span className="text-[#FF6105]">We Power</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs strategies that strengthen visibility and build authority across these core sectors.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 w-full border-l md:border-l-0 md:pl-0 pl-6 border-black/5">
                        {industries.map((item, idx) => (
                            <div key={idx} className="group cursor-default">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-black mb-1 transition-colors group-hover:text-[#FF6105]">
                                    {item.title}
                                </h3>
                                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

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
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px] relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black mb-6">
                        Full Service SEO <span className="text-[#FF6105]">Solution</span>
                    </h2>
                    <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                        Our SEO services are built to do more than improve rankings. We focus on creating long-term visibility, brand authority, and consistent inbound demand through strategies.
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <FlipCard key={idx} service={service} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 md:mt-24">
                    <a href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Request a Proposal
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}

// --- FLIP CARD COMPONENT ---
interface ServiceItem {
    title: string;
    icon: any;
    description: string;
}

const FlipCard = ({ service }: { service: ServiceItem }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Initial check for mobile (simplified, can be improved with hooks)
    useState(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
        }
    });

    const handleInteractionStart = () => {
        if (!isMobile) {
            setIsFlipped(true);
            setIsHovered(true);
        }
    };

    const handleInteractionEnd = () => {
        if (!isMobile) {
            setIsFlipped(false);
            setIsHovered(false);
        }
    };

    const handleClick = () => {
        if (isMobile) setIsFlipped(!isFlipped); // Mobile Click toggle
    };

    return (
        <div
            className="h-[350px] md:h-[400px] w-full perspective-1000 cursor-pointer group relative"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onClick={handleClick}
        >
            {/* Animated Border Container */}
            <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-r from-transparent via-transparent to-transparent overflow-hidden">
                {/* Rotating Gradient Border */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: isHovered
                            ? [
                                'conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)',
                                'conic-gradient(from 360deg at 50% 50%, #FF6105 0deg, transparent 60deg, transparent 300deg, #FF6105 360deg)'
                            ]
                            : 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 360deg)'
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: "linear"
                    }}
                />

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 blur-md"
                    animate={{
                        background: isHovered
                            ? 'conic-gradient(from 0deg at 50% 50%, #FF6105 0deg, transparent 90deg, transparent 270deg, #FF6105 360deg)'
                            : 'transparent',
                        opacity: isHovered ? 0.5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <motion.div
                className="relative w-full h-full transition-all duration-700 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT */}
                <div
                    className="absolute inset-0 w-full h-full bg-white rounded-[2rem] border border-black/5 shadow-sm p-8 flex flex-col items-center justify-center text-center backface-hidden group-hover:shadow-xl transition-shadow duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Subtle grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.02] rounded-[2rem]"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />

                    <div className="w-20 h-20 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                        <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-black relative z-10">
                        {service.title}
                    </h3>
                    <div className="mt-8 relative z-10">
                        <span className="text-xs font-bold text-[#FF6105] uppercase tracking-widest bg-[#FFF5F0] px-4 py-2 rounded-full group-hover:bg-[#FF6105] group-hover:text-white transition-colors duration-300">
                            View Details
                        </span>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 w-full h-full bg-[#FF6105] rounded-[2rem] shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    <service.icon size={32} strokeWidth={1.5} className="text-white mb-6 opacity-80" />
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

// --- LEGACY SPOTLIGHT CARD (Preserved if used elsewhere, or just placeholder) ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return <div className={className}>{children}</div>;
}
// --- COMPARISON SECTION (Second Section) ---
const SeoComparisonSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black">
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
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const calculateRange = () => {
            if (containerRef.current) {
                const totalWidth = containerRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                const isMobile = windowWidth < 768;

                if (isMobile) {
                    const lastCard = containerRef.current.lastElementChild as HTMLElement;
                    if (lastCard) {
                        const lastCardOffset = lastCard.offsetLeft;
                        const lastCardWidth = lastCard.offsetWidth;
                        setScrollRange(lastCardOffset + (lastCardWidth / 2) - (windowWidth / 2));
                    }
                } else {
                    const children = Array.from(containerRef.current.children) as HTMLElement[];
                    const targetCard = children[5]; 
                    if (targetCard) {
                        const targetOffset = targetCard.offsetLeft;
                        const targetWidth = targetCard.offsetWidth;
                        setScrollRange(targetOffset + (targetWidth / 2) - (windowWidth / 2));
                    } else {
                        const totalWidth = containerRef.current.scrollWidth;
                        setScrollRange(totalWidth - windowWidth);
                    }
                }
            }
        };

        calculateRange();
        window.addEventListener('resize', calculateRange);
        return () => window.removeEventListener('resize', calculateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    const steps = [
        { id: "01", title: "Keyword Discovery", desc: "Identifying high-intent search terms.", icon: Search },
        { id: "02", title: "Keyword Analysis", desc: " clustering & difficulty assessment.", icon: PieChart },
        { id: "03", title: "Orbit Mapping", desc: "Creating the strategic roadmap.", icon: Map },
        { id: "04", title: "Page Mapping", desc: "Aligning keywords to URLs.", icon: FileText },
        { id: "05", title: "Structural Audit", desc: "Technical & Local foundation.", icon: Settings },
        { id: "06", title: "Content & Signals", desc: "Creation, Distribution & Links.", icon: Sparkles },
    ];

    return (
        <section ref={targetRef} className="relative h-[200vh] md:h-[250vh] bg-white text-black">
            <div className="sticky top-0 flex h-[85vh] md:h-screen items-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Header Overlay - Standardized Alignment */}
                <div className="absolute top-24 left-0 w-full z-20">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                            Our SEO <span className="text-[#FF6105]">Process</span>
                        </h2>
                    </div>
                </div>

                <motion.div 
                    ref={containerRef}
                    style={{ x }} 
                    className="flex gap-8 md:gap-20 pl-8 md:pl-40 items-center relative z-10 pt-16"
                >
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

                    {/* Extra padding at the end removed */}
                </motion.div>
            </div>
        </section>
    );
};

// --- REFINED CTA SECTION (Ready to Dominate) ---
const DominateCTA = () => null;

// --- PROTOCOL TIMELINE COMPONENT ---
const ProtocolTimeline = () => {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        { t: "Experience", d: "Years of hands-on SEO experience, with the same obsession for learning, testing, and improving." },
        { t: "Consistency", d: "A documented workflow with internal checks, so delivery never depends on one person. Work stays consistent, even when things get busy." },
        { t: "Transparency", d: "A simple performance dashboard with the metrics that matter. Weekly visibility tracking, monthly growth insights, and clear next steps." },
        { t: "ROI Protection", d: "We price for outcomes, not shortcuts. Strategy, execution, and measurement are built to protect ROI and support long-term growth." },
        { t: "Shared Knowledge", d: "We share insights. Your team understands what we do, why it matters, and how it moves the needle." },
    ];

    return (
        <section ref={targetRef} className="bg-white relative py-16 md:py-24">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
                <div className="text-left">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black leading-[1.1] max-w-[95%]">
                        How EEGNITE Becomes a <span className="text-[#FF6105]">Strong SEO Partner</span> For Your Business
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
                            className="py-12 md:min-h-[50vh] flex items-center justify-center relative md:py-16"
                        >
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative pl-20 md:pl-0">
                                <div className={`order-2 md:order-1 ${i % 2 === 1 ? 'md:col-start-2 md:pl-24' : 'md:text-right md:pr-24'}`}>
                                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-black leading-tight mb-3 md:mb-4">
                                        {s.t}
                                    </h3>
                                    <p className="text-sm md:text-lg text-black/60 font-normal leading-relaxed max-w-lg ml-auto mr-auto md:mr-0">
                                        {s.d}
                                    </p>
                                </div>

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

                                <div className={`hidden md:block order-1 md:order-2 ${i % 2 === 1 ? 'md:col-start-1' : ''}`} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA */}
            <div className="bg-[#FFF5F0] rounded-3xl p-8 md:p-12 mx-4 md:mx-auto max-w-4xl text-center mt-20 md:mt-32 border border-[#FF6105]/10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6105]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-black mb-4">Talk to Us</h3>
                    <p className="text-black/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        Get a free SEO analysis from our experts and see where your next growth wins are hiding
                    </p>
                    <a href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Get Your Free Analysis
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}

// --- TOOLS SECTION ---
// --- TOOLS SECTION ---
const ToolsSection = () => {
    const tools = [
        { name: 'Google Analytics', src: '/icons/google-analytics.png', fallback: BarChart3 },
        { name: 'Google Search Console', src: '/icons/google.png', fallback: Search },
        { name: 'SemRush', src: '/icons/semrush.png', fallback: Activity },
        { name: 'Ahref', src: '/icons/ahrefs.png', fallback: Link2 },
        { name: 'SE ranking', src: null, fallback: TrendingUp },
        { name: 'Keyword Planner', src: '/icons/google-ads.png', fallback: Search },
        { name: 'Google Tag Manager', src: '/icons/gtm.png', fallback: Settings },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                    Tools We <span className="text-[#FF6105]">Use</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group py-10 selection-none pointer-events-none md:pointer-events-auto">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-20 pr-12 md:pr-20">
                    {[...tools, ...tools].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center flex-shrink-0 group/item">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 group-hover/item:scale-110 transition-transform duration-300 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg">
                                {tool.src ? (
                                    <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                                ) : (
                                    <tool.fallback className="w-8 h-8 text-[#FF6105]" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden="true">
                    {[...tools, ...tools].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center flex-shrink-0 group/item">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 group-hover/item:scale-110 transition-transform duration-300 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg">
                                {tool.src ? (
                                    <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                                ) : (
                                    <tool.fallback className="w-8 h-8 text-[#FF6105]" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes loop-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
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
}

// --- WHY CHOOSE SECTION (Refined Horizontal Scroll) ---
// --- WHY CHOOSE SECTION (Refined Horizontal Scroll) ---
const WhyChooseSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef });

    useEffect(() => {
        const calculateRange = () => {
            if (containerRef.current) {
                const totalWidth = containerRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                const lastCard = containerRef.current.lastElementChild as HTMLElement;
                if (lastCard) {
                    setScrollRange(lastCard.offsetLeft);
                } else {
                    setScrollRange(totalWidth - windowWidth);
                }
            }
        };

        calculateRange();
        window.addEventListener('resize', calculateRange);
        return () => window.removeEventListener('resize', calculateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

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
        <section ref={targetRef} className="relative h-[150vh] md:h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex flex-col justify-center h-[75vh] md:h-screen overflow-hidden">
                <div className="absolute top-24 md:top-32 left-0 w-full z-20">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                            Why <span className="text-[#FF6105]">India</span> Chooses Us
                        </h2>
                    </div>
                </div>

                <div className="flex items-center h-full w-full pt-16">
                    <motion.div 
                        ref={containerRef}
                        style={{ x }} 
                        className="flex gap-4 md:gap-12 pl-[5vw] md:pl-[10vw] items-center"
                    >
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
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        Powered By <span className="text-[#FF6105]">Values</span>
                    </h2>
                </div>

                <div className="space-y-16 md:space-y-32">
                    {values.map((v, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-24 border-t border-black/10 pt-8 md:pt-12 transition-all hover:border-[#FF6105] duration-500">
                            <span className="text-xl md:text-2xl font-mono text-[#FF6105]">0{i + 1}</span>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-6xl font-medium uppercase tracking-tight mb-4 md:mb-6 group-hover:text-[#FF6105] transition-colors duration-300">{v.title}</h3>
                            </div>
                            <div className="flex-1">
                                <p className="text-base md:text-xl text-black/60 leading-relaxed group-hover:text-black transition-colors duration-300">
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
// --- CIRCULAR PROGRESS COMPONENT ---
const CircularProgress = ({ value, label }: { value: number; label: string }) => {
    const [progress, setProgress] = useState(0);
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center group cursor-default">
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                {/* Background Track */}
                <svg className="absolute w-full h-full -rotate-90">
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="transparent"
                        className="text-[#F9F9F9]"
                    />
                    {/* Animated Progress Circle */}
                    <motion.circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="url(#gradient-progress)"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        onViewportEnter={() => setProgress(value)}
                        viewport={{ once: false }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF6105" />
                            <stop offset="100%" stopColor="#FF8F50" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Center Value */}
                <div className="flex flex-col items-center justify-center bg-white rounded-full w-[100px] h-[100px] shadow-lg border border-black/5">
                    <motion.span
                        className="text-3xl font-black text-black"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        {value}%
                    </motion.span>
                </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-center group-hover:text-[#FF6105] transition-colors duration-300">
                {label}
            </h3>
        </div>
    );
};

const MetricsSection = () => {
    const stats = [
        { label: "SEO & Marketing", value: 75 },
        { label: "Keywords Results", value: 43 },
        { label: "Google Analytics", value: 66 },
        { label: "Off Page SEO", value: 15 }
    ];

    return (
        <section className="hidden py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-12 md:mb-16 text-left">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-6">
                        Real <span className="text-[#FF6105]">Metrics,</span> Real Growth.
                    </h2>
                    <p className="text-black/50 text-base md:text-xl font-medium max-w-2xl uppercase tracking-widest">
                        Get Scalable Marketing Campaigns
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-start justify-center">
                    {stats.map((stat, idx) => (
                        <CircularProgress key={idx} value={stat.value} label={stat.label} />
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
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                            Start Growing<br />With EEGNITE<br />Today
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>

                    {/* Right: Content & Action */}
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-xl md:text-3xl font-medium mb-8 opacity-95 leading-tight">
                            A Result-focused SEO Services Agency
                        </h3>

                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your customers are already searching for what you offer. Let EEGNITE, a trusted India-based SEO company, ensure they find you first.
                            <br /><br />
                            From technical optimization to content strategy and local visibility, we help businesses across India, the Middle East, and other European regions to grow faster, smarter, and stronger.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <a href="/#contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free SEO Discovery Call <ArrowRight />
                            </a>
                            <a href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg md:text-xl font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Request a Quote
                            </a>
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


// --- HERO OVAL HOLDER COMPONENT ---
const EllipticalHolder = ({ src, animateScale = false }: { src: string; animateScale?: boolean }) => (
    <span className="inline-flex items-center justify-center align-baseline mx-1 md:mx-3 w-[45px] h-[24px] md:w-[120px] md:h-[60px] rounded-full overflow-hidden border border-[#FF6105]/10 shadow-sm relative group bg-gray-50 translate-y-[1px] md:translate-y-[8px]">
        <motion.img
            src={src}
            alt="SEO animation"
            className="w-full h-full object-cover grayscale-0 opacity-100 transition-all duration-700 hover:scale-110"
            animate={animateScale ? { scale: [1, 1.08, 1] } : { x: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6105]/5 to-transparent pointer-events-none" />
    </span>
)

export default function ServiceSeo() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />

                {/* HERO SECTION */}
                <section className="relative h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 overflow-hidden bg-white">
                    {/* Orange Grid Web & Centered Glow Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden"
                        style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
                        {/* Grid Layer */}
                        <div
                            className="absolute inset-0 opacity-[0.1]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, #FF6105 1px, transparent 1px),
                                    linear-gradient(to bottom, #FF6105 1px, transparent 1px)
                                `,
                                backgroundSize: '45px 45px'
                            }}
                        />

                        {/* FOCUSED CENTERED GLOW (Smooth Fading) */}
                        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-[#FF6105]/15 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-[1] md:leading-[1.1] mb-6 text-black max-w-[1200px] mx-auto px-4">
                                Best SEO Services From <br className="hidden md:block" /> THE Leading SEO Agency
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8 md:mb-12"
                        >
                            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FF6105] uppercase tracking-tight">
                                Rank Higher. Grow Faster.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-xs md:text-base lg:text-lg text-black/60 font-normal leading-relaxed max-w-3xl mx-auto mb-10 px-4">
                                At EEGNITE, we're not just another SEO company in Kolkata; we operate as a growth partner focused on outcomes only. Our SEO services are designed to turn search demand into consistent visibility, qualified traffic, and measurable business growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <a href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl hover:shadow-[#FF6105]/20">
                                Start Your Project
                            </a>
                        </motion.div>
                    </div>
                </section>

                <SeoComparisonSection />
                <IndustriesSection />
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
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left mb-8 md:mb-16 text-black">Common <span className="text-[#FF6105]">Questions</span></h2>
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
