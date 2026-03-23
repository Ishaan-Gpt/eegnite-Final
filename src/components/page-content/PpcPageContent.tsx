"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
    Target,
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
    MousePointerClick,
    MonitorPlay,
    ShoppingBag,
    Share2,
    Users,
    Repeat,
    SlidersHorizontal,
    Globe,
    CheckCircle2,
    Trophy,
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
const PremiumTexture = ({ className = "", opacity = "0.04" }: { className?: string; opacity?: string }) => {
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
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60 pointer-events-none" />
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

const IntroSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <PremiumTexture opacity="0.03" />
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    {/* Left: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <p className="text-black/50 text-base md:text-xl leading-relaxed mb-8">
                            At EEGNITE, we don’t just run ads, we build targeted PPC campaigns that drive real business growth. As a trusted PPC services company based in Kolkata, India we use data-driven strategies to ensure that every ad we create reaches the perfect audience for maximum impact.
                        </p>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            From in-depth keyword research and compelling ad copy creation to bid optimization and ongoing performance monitoring, our team manages every aspect of your PPC marketing campaign. Whether you’re an eCommerce brand focused on driving sales or a B2B business aiming to generate high-quality leads, EEGNITE's structured approach ensures your campaigns stay aligned with your goals and deliver measurable ROI.
                        </p>
                    </motion.div>

                    {/* Right: Title */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 lg:text-right"
                    >
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
};

const IndustriesSection = () => {
    const industries = [
        { title: "Healthcare & Home Services", desc: "Local clinics & home service firms." },
        { title: "Shopify & Retail", desc: "Scalable e-commerce growth strategies." },
        { title: "B2B & Logistics", desc: "Local search intent and authority." },
        { title: "AI & SaaS Firms", desc: "PPC & Performance marketing for software companies." },
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
                            EEGNITE designs PPC strategies that strengthen visibility and drive conversions across these core sectors.
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

const PartnerSection = () => {
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
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-black/50 text-base md:text-xl leading-relaxed mb-6">
                                When choosing a PPC agency, it’s crucial to partner with a team that brings comprehensive expertise across diverse platforms. As a results-driven PPC management company in India, EEGNITE specializes in crafting tailored campaigns to meet your specific needs while ensuring maximum visibility and ROI.
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
};

const FullServicePPC = () => {
    const services = [
        { title: "Paid Search Management", icon: Search, description: "Our PPC experts manage high-intent search campaigns across Google Ads and Bing Ads, focusing on keywords that signal strong purchase or lead intent. Through continuous optimization of bids, ad copy, and targeting, we drive qualified traffic while improving cost efficiency and return on ad spend." },
        { title: "Display Ads", icon: MonitorPlay, description: "Display ads are a powerful way to build visibility and stay top-of-mind with potential customers. We create visually engaging display creatives and place them strategically across relevant websites, apps, and videos to support brand awareness and assist conversions." },
        { title: "Shopping Ads", icon: ShoppingBag, description: "Shopping ads offer a visually rich format to showcase your products directly within search results. At EEGNITE, we take a data-driven approach to Google Shopping campaign management, optimizing product feeds, bidding strategies, and performance metrics to improve visibility, control costs, and drive profitable sales." },
        { title: "YouTube Ads", icon: MonitorPlay, description: "With video content playing a major role in digital marketing, YouTube Ads provide an effective way to reach and engage audiences at scale. EEGNITE Ads team create high-quality YouTube video ads that capture attention and drive results, whether for brand awareness or conversions." },
        { title: "Remarketing", icon: Repeat, description: "Remarketing allows you to reconnect with users who have already interacted with your website or ads but have not converted yet. By serving relevant ads based on previous behavior, we help you re-engage high-intent audiences and increase conversion opportunities across search, display, and social platforms." },
        { title: "Paid Social", icon: Share2, description: "Our PPC team manages paid social campaigns across platforms such as Facebook, Instagram, and LinkedIn to help you reach the right audience with precision. Using detailed targeting and performance tracking, we optimize campaigns for engagement, lead generation, and conversions. From carousel ads to dynamic product promotions, we design social ad creatives that support measurable results." },
        { title: "PPC Landing Page Creation", icon: LayoutDashboard, description: "A successful PPC campaign depends on a landing page that is designed to convert. At EEGNITE, we design and optimize PPC landing pages that align perfectly with your ads, messaging, and audience intent. By focusing on clarity, speed, and user experience, we help turn ad clicks into qualified leads." },
        { title: "Conversion Rate Optimization", icon: PieChart, description: "Driving traffic is only part of the process. Our conversion rate optimization approach focuses on turning visitors into customers by improving user experience, refining messaging, and removing friction from the buyer journey. This ensures your PPC traffic delivers better engagement, higher conversions, and stronger ROI." },
        { title: "PPC Campaign Review & Audit", icon: Activity, description: "One of the biggest advantages of PPC advertising is complete transparency. Our PPC campaign audit takes a deep look into your existing campaigns to evaluate performance, spending efficiency, and conversion potential. By identifying gaps and opportunities, we help you refine your strategy and make smarter decisions that lead to better results." },
    ];

    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6105]/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px] relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-16 md:mb-24 items-start">
                    {/* Unique Animated Headline Section */}
                    <div className="lg:sticky lg:top-32 w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-black leading-[0.9] mb-8">
                                Supercharge <br /> 
                                Your <span className="text-[#FF6105]">Business</span> <br />
                                with Data-Driven <br />
                                Campaigns
                            </h2>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                            In today’s competitive marketplace, standing out requires more than just a presence, it demands smart and strategic PPC advertising campaigns that not only increase visibility but also drive meaningful business results. EEGNITE acts as a performance focused PPC management company delivers tailored PPC campaign management strategies for your business goals. Our approach goes beyond simply targeting keywords; we focus on understanding your audience’s needs and behavior, crafting campaigns that engage and convert.
                        </p>
                        <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                            With our data-driven approach, EEGNITE’s PPC experts take the time to thoroughly analyze consumer behavior and apply actionable insights to optimize every aspect of your PPC marketing services. This allows us to build highly targeted campaigns that reach the right audience at the right time, driving stronger engagement and higher conversions. 
                        </p>
                        <p className="text-black/50 text-base md:text-xl font-normal leading-relaxed">
                            Whether your objective is lead generation or improve brand visibility, our ongoing performance refinement helps you achieve measurable results while maximizing return on ad spend (ROAS). As a notable PPC company in India, we focus not only on short-term performance but also on building a scalable foundation for long-term business growth. Our tailored approach ensures that your marketing budget is strategically allocated for the best results.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <FlipCard key={idx} service={service} />
                    ))}
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

const FlipCard = ({ service }: { service: { title: string; icon: any; description: string } }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

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
        if (isMobile) setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="h-[350px] md:h-[400px] w-full perspective-1000 cursor-pointer group relative"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onClick={handleClick}
        >
            <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-r from-transparent via-transparent to-transparent overflow-hidden">
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
                <div
                    className="absolute inset-0 w-full h-full bg-white rounded-[2rem] border border-black/5 shadow-sm p-8 flex flex-col items-center justify-center text-center backface-hidden group-hover:shadow-xl transition-shadow duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                >
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

                <div
                    className="absolute inset-0 w-full h-full bg-[#FF6105] rounded-[2rem] shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden overflow-y-auto"
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
};

const PpcComparisonSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black">
                        Why <span className="text-[#FF6105]">EEGNITE?</span>
                    </h2>
                    <p className="text-black/60 text-base md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Performance-first PPC management focused on turning ad spend into measurable business growth. We combine data analysis, audience insights, and continuous optimization to improve campaign efficiency at every stage.
                    </p>
                </div>

                <div className="w-full max-w-6xl mx-auto h-[600px] md:h-[800px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                    <Compare
                        className="h-full"
                        slideMode="drag"
                        firstContent={
                            <div className="w-full h-full bg-white flex flex-col items-center justify-start pt-12 md:pt-20 p-4 md:p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#FF6105] mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">EEGNITE Solution</h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FFF5F0] border border-[#FF6105]/20 text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-[#FF6105] mb-2">Intent-Driven Audience Targeting</h4>
                                        <p className="text-black/70 text-xs md:text-sm leading-relaxed">We focus on users actively searching for your solutions, ensuring every click has a higher potential for conversion across all paid channels.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FF6105] text-white text-left hover:scale-[1.02] transition-transform shadow-lg">
                                        <h4 className="text-sm md:text-xl font-bold text-white mb-2">Continuous Performance Optimization</h4>
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed">Our PPC experts adjust bids, budgets, and placements in real-time to maintain maximum efficiency and ensure your ad budget delivers stronger returns.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/10 shadow-sm text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Full Transparency & ROI Tracking</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">We connect ad spend directly to revenue, providing clear visibility into which campaigns are truly driving growth without hidden vanity metrics.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        secondContent={
                            <div className="w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-start pt-12 md:pt-20 p-4 md:p-12 text-center relative grayscale">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-black/20 mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">Traditional Agency</h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full opacity-60">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Broad Keyword Spreading</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Targeting keywords that are too broad, leading to high spend on clicks that don't convert into real business outcomes.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Inconsistent Monitoring</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Manual adjustments made only once a month, missing out on real-time optimization and cost-saving opportunities.</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2">Lack of Transparent ROI</h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">Focusing on impressions and clicks rather than real revenue attribution, making it difficult to measure true campaign value.</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

const PpcProcessFloating = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef as any });

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
                    const targetCard = children[4]; 
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
        { id: "01", title: "Strategic Keyword Research", desc: "Identifying high-intent search terms tailored for lead growth.", icon: Search },
        { id: "02", title: "Conversion-Focused Ad Copy", desc: "Clustering & ad group intent assessment.", icon: FileText },
        { id: "03", title: "Campaign Roadmap", desc: "Creating the strategic roadmap for ad spend.", icon: Map },
        { id: "04", title: "Performance Setup", desc: "Tracking, attribution & foundation.", icon: Settings },
        { id: "05", title: "Optimization Cycle", desc: "Bid management, A/B testing & scaling.", icon: Activity },
    ];

    return (
        <section ref={targetRef} className="relative h-[200vh] md:h-[250vh] bg-white text-black">
            <div className="sticky top-0 flex h-[85vh] md:h-screen items-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="absolute top-12 md:top-24 left-0 w-full z-20">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                            Our PPC <span className="text-[#FF6105]">Strategy</span>
                        </h2>
                    </div>
                </div>

                <motion.div 
                    ref={containerRef}
                    style={{ x }} 
                    className="flex gap-8 md:gap-20 pl-8 md:pl-40 items-center relative z-10 pt-16"
                >
                    <div className="absolute left-0 right-0 top-1/2 h-2 bg-black/5 w-[200%] -translate-y-1/2 pointer-events-none rounded-full" />

                    {steps.map((step, i) => {
                        const isTop = i % 2 === 0;
                        return (
                            <div key={i} className={`relative min-w-[300px] md:min-w-[400px] flex flex-col items-center ${isTop ? 'mb-20 md:mb-40' : 'mt-20 md:mt-40'}`}>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6105] z-10 ${isTop ? 'bottom-[-2.5rem] md:bottom-[-5rem]' : 'top-[-2.5rem] md:top-[-5rem]'}`}>
                                    <div className="absolute inset-0 bg-[#FF6105] animate-ping opacity-50 rounded-full" />
                                </div>
                                <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[2.5rem] md:h-[5rem] bg-black/10 ${isTop ? 'bottom-[-2.5rem] md:bottom-[-5rem]' : 'top-[-2.5rem] md:top-[-5rem]'}`} />
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

                {/* Restored CTA logic */}
                <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex justify-center">
                    <Link href="/#contact" className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                        Discuss Your PPC Strategy
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ProtocolTimeline = () => {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef as any, offset: ["start start", "end end"] });
    const steps = [
        { t: "Brand Visibility Improvement", d: "Our PPC strategies are designed to place your brand exactly where your audience is searching and scrolling. By combining intent-driven search ads with targeted social campaigns, we help your business gain stronger visibility across search engines and social platforms. This consistent exposure builds brand awareness, strengthens recall, and keeps your services top-of-mind for potential customers." },
        { t: "Increase Website Traffic", d: "Our PPC campaigns are carefully structured to attract users who are actively searching for your products or services. By focusing on intent-based targeting and refined audience signals, we bring high-quality traffic to your website that is more likely to engage, enquire, and convert." },
        { t: "Maximized ROI", d: "EEGNITE's PPC strategies focus on turning clicks into real business outcomes. By continuously refining targeting, messaging, and bidding decisions, we help convert leads into customers while ensuring your ad budget delivers stronger returns and long-term value." },
        { t: "Lower Cost, Better Efficiency", d: "Our PPC team focuses on bidding smarter, not harder. By targeting the most relevant keywords and improving ad score, we help reduce unnecessary spend while increasing efficiency, ensuring you get more value from every click." },
        { t: "Clear Performance Reporting", d: "We believe in complete clarity when it comes to your ad spend. Our PPC reports provide clear insights into performance, results, and opportunities, so you always know how your campaigns are performing and where your investment is delivering value." },
        { t: "A/B Testing for Better Results", d: "We consistently test and refine every element of your PPC campaigns, from ad copy and visuals to CTAs and landing pages. By analyzing real performance data, we identify what resonates most with your audience and tune campaigns to improve click-through rates, conversions, and overall campaign effectiveness." },
    ];

    return (
        <section ref={targetRef} className="bg-white relative py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
                <div className="text-left">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black leading-[1.1] max-w-[95%]">
                        EEGNITE’s Approach to <span className="text-[#FF6105]">Effective PPC Management</span>
                    </h2>
                </div>
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
                                    <span className="text-black group-hover:text-white">0{i + 1}</span>
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
                    <Link href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg group">
                        Schedule A Call Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

const ToolsSection = () => {
    const tools = [
        { name: 'Google Ads', src: '/icons/google-ads.png', fallback: Search },
        { name: 'Google Analytics', src: '/icons/google-analytics.png', fallback: BarChart3 },
        { name: 'Meta Ads', src: null, fallback: Share2 },
        { name: 'Google Tag Manager', src: '/icons/gtm.png', fallback: Settings },
        { name: 'Bing Ads', src: null, fallback: Globe },
        { name: 'SemRush', src: '/icons/semrush.png', fallback: Activity },
        { name: 'YouTube Studio', src: null, fallback: MonitorPlay },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black mb-4">
                        Tools & Platforms <br /><span className="text-[#FF6105]">Powering Our PPC Campaigns</span>
                    </h2>
                </div>
                <Link href="/#contact" className="bg-[#FF6105] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                    Talk To a PPC Expert
                </Link>
            </div>

            <div className="relative flex overflow-hidden group py-10 selection-none pointer-events-none md:pointer-events-auto">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-20 pr-12 md:pr-20">
                    {[...tools, ...tools].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center flex-shrink-0 group/item">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 group-hover/item:scale-110 transition-transform duration-300 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg">
                                {tool.src ? <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" /> : <tool.fallback className="w-8 h-8 text-[#FF6105]" />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex animate-loop-scroll hover:paused gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden="true">
                    {[...tools, ...tools].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center flex-shrink-0 group/item">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 group-hover/item:scale-110 transition-transform duration-300 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg">
                                {tool.src ? <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" /> : <tool.fallback className="w-8 h-8 text-[#FF6105]" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes loop-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
                .animate-loop-scroll { animation: loop-scroll 40s linear infinite; }
                .paused { animation-play-state: paused; }
            `}</style>
        </section>
    );
}

const WhyChooseSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef as any });

    useEffect(() => {
        const calculateRange = () => {
            if (containerRef.current) {
                const totalWidth = containerRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                const isMobile = windowWidth < 768;

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
        { id: "01", title: "Focus on Scaling Revenue", desc: "We specialize in crafting tailored PPC campaigns that ensure maximum visibility and ROI, fueling sustainable growth that scales with your business." },
        { id: "02", title: "Avoid Click Waste", desc: "We bid smarter, not harder. By targeting the most relevant keywords and improving ad scores, we help reduce unnecessary spend while increasing efficiency." },
        { id: "03", title: "Real-time Decision Making", desc: "Our data-driven approach analyze consumer behavior in real-time to optimize every aspect of your PPC performance for smarter decisions." },
        { id: "04", title: "Local to Global Reach", desc: "Whether focusing on a niche local area or a multi-channel global approach, we deliver solutions that Fuel real growth wherever you operate." }
    ];

    return (
        <section ref={targetRef} className="relative h-[150vh] md:h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex flex-col justify-center h-[75vh] md:h-screen overflow-hidden">
                <div className="absolute top-28 md:top-32 left-0 w-full z-20">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none whitespace-nowrap">
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

const ValuesSection = () => {
    const values = [
        { title: "Integrity", desc: "We believe in brutal honesty. If a strategy isn't working, we tell you. You’ll always receive candid recommendations for your ad spend." },
        { title: "Teamwork", desc: "EEGNITE is a dedicated engineering team. Senior strategists, technical leads, and creative thinkers work in unison on your account." },
        { title: "Excellence", desc: "Good enough is not enough. We aim for uncompromised quality in every ad copy, every landing page, and every bid adjustment. We set the standard." }
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
                                <p className="text-base md:text-xl text-black/60 leading-relaxed group-hover:text-black transition-colors duration-300">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const PpcCTA = () => {
    return (
        <section className="py-24 md:py-32 bg-[#FF6105] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                            Start Growing<br />With EEGNITE<br />Today
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-xl md:text-3xl font-medium mb-8 opacity-95 leading-tight">
                            A Result-focused PPC Services Agency
                        </h3>
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            “A successful PPC campaign depends on a landing page that is designed to convert. At EEGNITE, we design and optimize PPC landing pages that align perfectly with your ads, messaging, and audience intent.”
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/#contact" className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl uppercase tracking-widest text-sm">
                                Book a Free PPC Call <ArrowRight />
                            </Link>
                            <Link href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl uppercase tracking-widest text-sm">
                                Request a Quote
                            </Link>
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

export default function ServicePpc() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />

                {/* HERO SECTION */}
                <section className="relative h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden bg-white">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden"
                        style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
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
                        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-[#FF6105]/15 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-[1] md:leading-[1.1] mb-6 text-black max-w-[1200px] mx-auto px-4">
                                Smart PPC Management <br className="hidden md:block" />
                                Services That Drive <br className="hidden md:block" />
                                <span className="text-[#FF6105]">Sales and Maximize ROI</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-xs md:text-base lg:text-lg text-black/60 font-normal leading-relaxed max-w-3xl mx-auto mb-10 px-4">
                                EEGNITE specializes in delivering ROI-driven PPC management services that are customized to meet your unique business objectives. We plan, execute, and optimize paid ad campaigns across platforms like Google Ads, Bing Ads and social media, ensuring your ads reach the right audience at the right time. As a top-tier PPC management company, based in Kolkata, we’ve honed a proven approach that drives genuine results, boosting visibility, increasing traffic, and maximizing return on investment, through transparent, goal-aligned execution.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link href="/#contact" className="inline-flex justify-center bg-[#FF6105] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl hover:shadow-[#FF6105]/20">
                                Start Your Project
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <IntroSection />
                <PpcComparisonSection />
                <IndustriesSection />
                <PartnerSection />
                <FullServicePPC />
                <PpcProcessFloating />
                <ProtocolTimeline />
                <ToolsSection />
                <WhyChooseSection />
                <ValuesSection />
                <Testimonials />

                <section className="py-20 bg-white flex justify-center border-t border-black/5">
                    <Link href="/#contact" className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#FF6105] transition-colors shadow-xl">
                        Discuss Your PPC Strategy
                    </Link>
                </section>

                {/* FAQs */}
                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left mb-8 md:mb-16 text-black">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-3 md:space-y-4">
                            {ppcFaqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border border-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
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
                <PpcCTA />
            </div>
            <Footer />
        </main>
    );
}

const ppcFaqs = [
    { q: "What can I expect from EEGNITE's PPC advertising services?", a: "When you choose EEGNITE’s PPC services, you can expect a strategic, performance-focused approach built around your business goals. Our PPC experts plan and manage full-funnel campaigns that balance visibility, traffic quality, and conversions. From keyword research and ad creation to bidding, tracking, and optimization, every decision is backed by data. We always focus on turning ad spend into measurable growth, not just clicks, while keeping reporting transparent and easy to understand." },
    { q: "How much does it cost to run a PPC campaign with EEGNITE?", a: "The cost of PPC management at EEGNITE depends on factors such as your business goals, industry competition, target platforms, and monthly ad spend. We don’t follow one-size-fits-all pricing. Instead, we create a tailored PPC plan that aligns with your budget and growth objectives. After understanding your requirements, our team recommends a transparent pricing structure designed to deliver the best possible returns." },
    { q: "How long does it take to see results from a PPC Ad campaign?", a: "PPC is one of the fastest digital marketing channels to generate visibility and traffic. With EEGNITE, you may start seeing early performance signals within the first few weeks of ad launch. However, meaningful and consistent results typically develop over 6 to 12 weeks as we analyze data, refine targeting, test ad variations, and optimize bids. This optimization phase ensures long-term efficiency, stronger conversions, and sustainable campaign performance." },
    { q: "Do people really click on PPC ads?", a: "Yes, PPC ads attract genuine clicks when they are well-targeted and relevant. Search ads appear precisely when users are actively looking for a product or service, which means the intent to act is already high. With strong ad copy, clear messaging, and proper targeting, PPC helps you reach ready-to-convert users and drive immediate, measurable business results." },
    { q: "Which is better: SEO or PPC?", a: "SEO and PPC serve different purposes and work best when used together. SEO is ideal for building long-term visibility, trust, and consistent organic traffic over time. PPC, on the other hand, delivers faster results by placing your business in front of high-intent users immediately. The right choice depends on your goals, timeline, and budget. At EEGNITE, we help businesses balance both strategies to drive short-term wins while building sustainable growth." },
    { q: "Where do PPC ads appear?", a: "PPC ads can appear across a wide range of digital platforms based on campaign goals and audience targeting. Common placements include search engine results pages, display networks, video platforms, and social media channels such as Facebook, Instagram, and LinkedIn. Ads may also appear on relevant third-party websites and mobile apps. The placements are selected strategically to reach the right audience, improve visibility, and drive meaningful engagement and conversions." },
];
