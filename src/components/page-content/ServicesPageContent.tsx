"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Search, MousePointerClick, Mail, Globe, Share2,
    ArrowRight, Check
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- PRECISE PREMIUM TEXTURE ---
function PremiumGridTexture({ opacity = "0.03" }: { opacity?: string }) {
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
            <div 
                className="absolute inset-0" 
                style={{ 
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, 
                    backgroundSize: '50px 50px',
                    opacity: opacity 
                }} 
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
                animate={{ x: mousePos.x - 200, y: mousePos.y - 200, opacity: isHovering ? 1 : 0 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{ background: 'radial-gradient(circle, rgba(255,97,5,0.08) 0%, transparent 70%)' }}
            />
        </div>
    );
}

// --- HER0 SECTION WITH EXACTLY ONE H1 ---
function ServicesHero() {
    return (
        <section className="relative pt-36 pb-20 px-6 sm:px-12 overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
                <div 
                    className="absolute inset-0 opacity-[0.08]" 
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #FF6105 1px, transparent 1px), linear-gradient(to bottom, #FF6105 1px, transparent 1px)`, 
                        backgroundSize: '60px 60px' 
                    }} 
                />
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[900px] md:h-[900px] bg-gradient-to-t from-[#FF6105]/10 to-transparent rounded-full blur-[90px] md:blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full"
                >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                        EEGNITE CAPABILITIES
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h1 className="text-[8vw] xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tighter leading-[1.05] mb-6 text-black max-w-[1300px] mx-auto">
                        RESULTS-DRIVEN <br />
                        <span className="text-[#FF6105]">MARKETING SERVICES</span>
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }} 
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-sm md:text-xl text-black/60 font-medium leading-relaxed px-4">
                        We build performance-first, highly scalable campaigns and conversion infrastructure. From dominant organic search presence to high-converting user interfaces, every channel is precision-optimized to turn your ad spend into predictable revenue.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// --- SERVICE CARD COMPONENT ---
function ServiceShowcaseCard({ 
    title, 
    desc, 
    bulletPoints, 
    icon: Icon, 
    href, 
    index 
}: { 
    title: string; 
    desc: string; 
    bulletPoints: string[]; 
    icon: any; 
    href: string; 
    index: number;
}) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-10%" });

    return (
        <Link href={href} className="block group h-full">
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-sm group-hover:shadow-2xl group-hover:border-[#FF6105]/20 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[420px] h-full"
            >
                <div className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div>
                    <div className="w-16 h-16 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-300">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-black mb-4 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-black/55 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        {desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                        {bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-[#FFF5F0] flex items-center justify-center text-[#FF6105] shrink-0 mt-0.5 group-hover:bg-[#FF6105] group-hover:text-white transition-colors duration-300">
                                    <Check size={12} strokeWidth={3} />
                                </span>
                                <span className="text-black/70 text-xs md:text-sm font-semibold">{bp}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span 
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#FF6105] group-hover:gap-3.5 transition-all duration-300"
                    >
                        Explore Service <ArrowRight size={14} />
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}

// --- MAIN SERVICES GRID ---
function ServicesGrid() {
    const services = [
        {
            title: "Search Engine Optimisation",
            desc: "Technical precision, content authority, and link ecosystems designed to rank your brand for the queries high-value buyers use.",
            bulletPoints: [
                "Technical Audit & Schema Markup",
                "Expert-Led Content Strategy",
                "High-ROI Local & Technical SEO"
            ],
            icon: Search,
            href: "/services/seo"
        },
        {
            title: "PPC Advertising",
            desc: "Bidding smarter, not harder. Precision paid media strategies across Google, Meta, and LinkedIn targeting purchase intent.",
            bulletPoints: [
                "Full-Funnel Ad Optimization",
                "Audience Retargeting Frameworks",
                "Measurable Cost Per Acquisition"
            ],
            icon: MousePointerClick,
            href: "/services/ppc"
        },
        {
            title: "Email Marketing",
            desc: "Automated sequences, list nurture strategies, and CRM flows that recover abandoned carts and cultivate repeat revenue.",
            bulletPoints: [
                "Drip Sequence Automation",
                "List Hygiene & Deliverability",
                "Cart Abandonment Re-engagement"
            ],
            icon: Mail,
            href: "/services/email-marketing"
        },
        {
            title: "Web Design and Development",
            desc: "Custom WordPress, Shopify, and custom builds built mobile-first and CRO-engineered from the first pixel.",
            bulletPoints: [
                "Responsive UI/UX Custom Mockups",
                "Technical Web Performance Tuning",
                "CMS Integration & Core Web Vitals"
            ],
            icon: Globe,
            href: "/services/web-development"
        },
        {
            title: "Social Media Marketing",
            desc: "Consistent content schedules, scroll-stopping creative, and active B2B brand placement on channels that target buyers.",
            bulletPoints: [
                "LinkedIn B2B Thought Leadership",
                "Organic Growth & Community Nurture",
                "Short-Form native video/Reels editing"
            ],
            icon: Share2,
            href: "/services/social-media-marketing"
        }
    ];

    return (
        <section className="pb-24 pt-10 px-6 sm:px-12 bg-white relative overflow-hidden">
            <PremiumGridTexture opacity="0.03" />
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <ServiceShowcaseCard 
                            key={idx} 
                            index={idx}
                            title={service.title}
                            desc={service.desc}
                            bulletPoints={service.bulletPoints}
                            icon={service.icon}
                            href={service.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServicesPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <ServicesHero />
                <ServicesGrid />
            </div>
            <Footer />
        </main>
    );
}
