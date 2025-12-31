"use client";

import { motion } from "framer-motion";
import {
    Search,
    Settings,
    MapPin,
    FileText,
    Share2,
    BarChart3,
    ShoppingBag,
    Zap,
    CheckCircle2,
    ArrowRight,
    Rocket,
    Activity,
    Globe2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";

const SEOPage = () => {
    const whyChooseUs = [
        {
            title: "Local Expertise",
            description: "Our team understands the Kolkata business landscape, aligning your website with genuine local search demand.",
            icon: MapPin
        },
        {
            title: "Engineering-Led execution",
            description: "We audit every layer of your website using an engineering mindset for crawlability, performance, and structure.",
            icon: Settings
        },
        {
            title: "ROI-Focused Partnership",
            description: "Clarity is central to how we work. Our reporting frameworks give you a clear view of growth and business impact.",
            icon: BarChart3
        }
    ];

    const servicesList = [
        { title: "Keyword Research", icon: Search, desc: "We identify relevant, high-intent keywords based on search demand and competition." },
        { title: "Technical SEO", icon: Settings, desc: "Audit and optimize core layers from crawlability to advanced schema markup." },
        { title: "Local SEO", icon: MapPin, desc: "Optimize your Google Business Profile to match local search intent." },
        { title: "On-Page Strategy", icon: FileText, desc: "Improve content quality, page structure, and loading speed across key pages." },
        { title: "Content Strategy", icon: Zap, desc: "Create helpful, keyword-informed content planned around search intent." },
        { title: "Link Building", icon: Share2, desc: "Strengthen authority through ethical techniques and genuine backlinks." },
        { title: "Analytics Tracking", icon: Activity, desc: "Track keyword performance and user behavior to see how traffic turns into leads." },
        { title: "Shopify & E-Commerce", icon: ShoppingBag, desc: "Scale your store by connecting SEO directly to revenue using GA4 tracking." }
    ];

    const processSteps = [
        { step: "01", title: "Audit & Analysis", desc: "In-depth technical audit and competitor research." },
        { step: "02", title: "Strategy Construction", desc: "Data-backed planning tailored to your business goals." },
        { step: "03", title: "Execution", desc: "On-page, technical, and content implementation." },
        { step: "04", title: "Authority Building", desc: "Ethical link building and digital PR outreach." },
        { step: "05", title: "Monitoring & ROI", desc: "Continuous tracking and performance optimization." }
    ];

    const industries = [
        "Local clinics & Healthcare providers",
        "Shopify & E-Commerce brands",
        "B2B, Logistics & Packaging",
        "AI & SaaS companies",
        "Professional Service Providers"
    ];

    return (
        <SmoothScrolling>
            <Navbar />
            <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white pt-10 lg:pt-20 overflow-hidden">

                {/* HERO SECTION */}
                <section className="relative pt-8 lg:pt-40 pb-8 lg:pb-32 px-6">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-12"
                        >
                            <div className="w-6 lg:w-12 h-px bg-[#FF6105]" />
                            <span className="text-[9px] lg:text-sm font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#FF6105]">SEO Services</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-6 lg:mb-16 text-black pr-2"
                        >
                            Rank <span className="text-transparent [-webkit-text-stroke:1px_#FF6105] lg:[-webkit-text-stroke:2.5px_#FF6105]">Higher</span> <br />
                            Grow <span className="italic">Faster.</span>
                        </motion.h1>

                        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="lg:col-span-8"
                            >
                                <p className="text-sm lg:text-3xl font-bold text-black/40 leading-snug tracking-tight max-w-4xl">
                                    At EEGNITE, we operate as a growth partner focused on outcomes only. Our SEO services are designed to turn search demand into consistent visibility.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="lg:col-span-4 flex justify-start lg:justify-end"
                            >
                                <a href="#contact" className="group bg-[#FF6105] p-px rounded-xl lg:rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg lg:shadow-xl shadow-orange-200/50">
                                    <div className="bg-[#FF6105] px-6 lg:px-12 py-4 lg:py-8 rounded-xl lg:rounded-2xl flex items-center gap-3 lg:gap-6 border border-white/20">
                                        <span className="text-[10px] lg:text-sm font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">Free Audit</span>
                                        <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-8 lg:py-40 px-6 bg-[#FAFAFA] border-y border-black/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
                            <div className="relative">
                                <h2 className="text-4xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-8 lg:mb-12 relative z-10 text-black">
                                    Why <span className="text-[#FF6105]">EEGNITE</span>?
                                </h2>
                                <p className="text-sm lg:text-xl text-black/40 font-bold leading-relaxed mb-10 lg:mb-16 max-w-xl italic">
                                    Local business owners choose EEGNITE for one reason: results that can be measured and sustained. Every search represents intent.
                                </p>

                                <div className="space-y-6 lg:space-y-12">
                                    {whyChooseUs.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-4 lg:gap-6 group"
                                        >
                                            <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-black/5 group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-500">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-base lg:text-2xl font-black uppercase tracking-tight mb-1 lg:mb-4">{item.title}</h3>
                                                <p className="text-xs lg:text-lg text-black/40 font-medium leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative aspect-square lg:aspect-[4/5] bg-white rounded-2xl lg:rounded-[80px] overflow-hidden shadow-xl border border-black/5 flex items-center justify-center p-6 lg:p-20">
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF6105 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                                <div className="text-center relative z-10">
                                    <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full bg-orange-50 border-2 border-dashed border-[#FF6105]/30 flex items-center justify-center mx-auto mb-6 lg:mb-12">
                                        <Rocket size={36} className="text-[#FF6105]" />
                                    </div>
                                    <h3 className="text-xl lg:text-5xl font-black uppercase tracking-tighter mb-2 lg:mb-4 text-black">Growth First</h3>
                                    <p className="text-xs lg:text-xl font-bold text-black/30">Focused on outcomes only. Turn search demand into visibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="py-8 lg:py-40 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 lg:mb-32 text-center lg:text-left">
                            Full Service <br /> <span className="text-transparent [-webkit-text-stroke:1px_#FF6105] lg:[-webkit-text-stroke:2px_#FF6105] opacity-60">SEO Solutions</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-12 lg:gap-y-24">
                            {servicesList.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="relative pt-6 lg:pt-8 border-t border-black/5 group-hover:border-[#FF6105] transition-all duration-500">
                                        <div className="flex flex-col gap-3 lg:gap-6">
                                            <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6105] group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-500 shadow-sm">
                                                <item.icon size={20} />
                                            </div>
                                            <h3 className="text-base lg:text-2xl font-black uppercase tracking-tight leading-none min-h-[30px] lg:min-h-[50px]">{item.title}</h3>
                                            <p className="text-xs lg:text-lg text-black/40 font-bold leading-relaxed italic pr-1">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="py-8 lg:py-40 bg-white px-6 relative overflow-hidden border-y border-black/5">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-black mb-8 lg:mb-16">
                            The <span className="text-[#FF6105]">Process</span>
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-6">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="bg-[#FAFAFA] p-4 lg:p-12 rounded-2xl lg:rounded-[40px] border border-black/5 relative group hover:border-[#FF6105]/40 transition-all duration-500">
                                    <span className="text-4xl lg:text-7xl font-black text-[#FF6105]/[0.08] absolute top-2 lg:top-8 right-2 lg:right-10 group-hover:text-[#FF6105]/20 italic">{step.step}</span>
                                    <h4 className="text-sm lg:text-2xl font-black uppercase tracking-tighter mb-2 lg:mb-6 leading-tight text-black transition-colors">{step.title}</h4>
                                    <p className="text-[10px] lg:text-base text-black/40 transition-colors font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES & TOOLS */}
                <section className="py-8 lg:py-40 px-6 bg-white overflow-hidden relative border-b border-black/5">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-32 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl lg:text-[8rem] font-black uppercase tracking-tighter mb-8 lg:mb-16 italic leading-[0.85] text-black">
                                Industries <br /> We <span className="text-[#FF6105]">Serve</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                                {industries.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 lg:gap-6 p-4 lg:p-8 rounded-xl lg:rounded-3xl bg-[#FAFAFA] border border-black/5 hover:border-[#FF6105]/40 hover:bg-white transition-all duration-500 group">
                                        <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl bg-[#FF6105] text-white flex items-center justify-center shadow-md">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-sm lg:text-xl font-black uppercase tracking-tight italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="p-6 lg:p-16 bg-[#FAFAFA] rounded-2xl lg:rounded-[80px] relative overflow-hidden border border-black/5 shadow-lg">
                                <h3 className="text-base lg:text-3xl font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] mb-6 lg:mb-16 text-black text-center">Technology Stack</h3>
                                <div className="grid grid-cols-2 gap-x-4 lg:gap-x-12 gap-y-4 lg:gap-y-12 text-center">
                                    {["Semrush", "Ahrefs", "GA4 / GTM", "Console", "Klaviyo", "Frog"].map((tool) => (
                                        <div key={tool} className="text-[9px] lg:text-sm font-black uppercase tracking-widest text-black/40 hover:text-black transition-all cursor-default">{tool}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-12 lg:py-48 px-6 text-center bg-white relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 lg:mb-24 text-black italic">
                            DOMINATE <br /> <span className="text-[#FF6105]">ORGANIC.</span>
                        </h2>
                        <a href="#contact" className="inline-flex bg-[#FF6105] text-white text-lg lg:text-3xl px-10 lg:px-20 py-5 lg:py-10 rounded-xl lg:rounded-[40px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl lg:shadow-4xl shadow-orange-200/50 flex items-center gap-4 lg:gap-8 mx-auto group">
                            Book Audit <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </a>
                    </motion.div>
                </section>
            </div>
            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </SmoothScrolling>
    );
};

export default SEOPage;
