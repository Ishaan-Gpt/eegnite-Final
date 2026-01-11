"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
    Users,
    Shield,
    TrendingUp,
    LayoutDashboard,
    Lightbulb,
    Target,
    Globe,
    Cpu,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import { useState } from "react";

const SEOPage = () => {
    // Data populated from user request
    const whyChooseUs = [
        {
            title: "Local Expertise",
            description: "Our team understands the local business landscape, from established local enterprises to fast-growing digital brands.",
            icon: MapPin,
            colSpan: "lg:col-span-2"
        },
        {
            title: "Engineering-Led",
            description: "We audit every layer of your website to help search engines clearly understand and reward your digital presence.",
            icon: Settings,
            colSpan: "lg:col-span-1"
        },
        {
            title: "ROI-Focused",
            description: "Reporting frameworks give you a clear view of traffic growth, keyword movement, and business impact.",
            icon: BarChart3,
            colSpan: "lg:col-span-1"
        },
        {
            title: "Transparency",
            description: "Every action we take is driven by transparency, accountability, and ROI, ensuring SEO remains a growth investment.",
            icon: Search,
            colSpan: "lg:col-span-2"
        }
    ];

    const servicesList = [
        { title: "Keyword Research", icon: Search, desc: "We identify relevant, high-intent keywords based on search demand and competition. By aligning your content with what potential customers are actively looking for, we improve search visibility." },
        { title: "Technical SEO", icon: Settings, desc: "We audit and optimize every core layer of your site, from crawlability, site structure, and page speed to advanced schema markup implementation." },
        { title: "Local SEO", icon: MapPin, desc: "EEGNITE optimizes your Google Business Profile, strengthens local listings, and builds location-focused pages that match how people search in your area." },
        { title: "On-Page Optimization", icon: FileText, desc: "Optimization of content quality, page structure, loading speed, and user experience so search engines can easily understand your content." },
        { title: "Content Strategy", icon: Zap, desc: "We create helpful, keyword-informed content planned around search intent, relevance, and conversion, helping your brand stay useful and visible." },
        { title: "Link Building & Digital PR", icon: Share2, desc: "We strengthen your website's authority through ethical link-building techniques, focusing on earning genuine backlinks from relevant and trusted websites." },
        { title: "Analytics & Tracking", icon: Activity, desc: "We track keyword performance, user behavior, and conversion paths. We connect SEO activity with measurable business outcomes." },
        { title: "Shopify & E-Commerce", icon: ShoppingBag, desc: "We connect SEO to revenue by implementing GA4 and Klaviyo tracking to tie organic traffic directly to customer acquisition and lifetime value." }
    ];

    const processSteps = [
        { step: "01", title: "Audit & Analysis", desc: "In-depth technical audit and competitor research." },
        { step: "02", title: "Strategy Construction", desc: "Data-backed planning tailored to your business goals." },
        { step: "03", title: "Execution", desc: "On-page, technical, and content implementation." },
        { step: "04", title: "Authority Building", desc: "Ethical link building and digital PR outreach." },
        { step: "05", title: "Monitoring & ROI", desc: "Continuous tracking and performance optimization." }
    ];

    const industries = [
        { title: "Local Clinics", icon: Shield, desc: "Healthcare providers & home services" },
        { title: "E-Commerce", icon: ShoppingBag, desc: "Shopify & digital retail brands" },
        { title: "B2B Logistics", icon: Globe, desc: "Packaging & supply chain" },
        { title: "SaaS & AI", icon: Cpu, desc: "Tech firms requiring content moats" },
        { title: "Professional", icon: Briefcase, desc: "Service providers building authority" }
    ];

    const partnerCards = [
        { title: "Experience", desc: "Years of hands-on SEO experience, with the same obsession for learning, testing, and improving." },
        { title: "Workflow", desc: "A documented workflow with internal checks, so delivery never depends on one person. Work stays consistent." },
        { title: "Dashboard", desc: "A simple performance dashboard with the metrics that matter. Weekly visibility tracking and growth insights." },
        { title: "Pricing", desc: "We price for outcomes, not shortcuts. Strategy and execution built to protect ROI and support long-term growth." },
        { title: "Insights", desc: "We share insights. Your team understands what we do, why it matters, and how it moves the needle." }
    ];

    const whyIndiaChooser = [
        { title: "Focus on Core Business", desc: "A professional SEO agency handles the complexity so you can focus on growth, sales, and operations." },
        { title: "Prevent Costly Mistakes", desc: "A trusted SEO partner like EEGNITE helps Indian businesses avoid trial-and-error decisions that slow growth." },
        { title: "Measurable Growth", desc: "Every action is tracked. You see how traffic, leads, and conversions improve, not just rankings on a report." },
        { title: "Long-term Visibility", desc: "From local Indian searches to broader national reach, SEO strategies are built for stability, not short-term spikes." }
    ];

    const faqs = [
        { q: "How does SEO work?", a: "SEO works by helping search engines understand your website and match it with what users are searching for. It involves improving site structure, content relevance, and technical performance, along with building credibility through off-page signals." },
        { q: "What are the different types of SEO Services?", a: "SEO services typically include on-page SEO, technical SEO, and off-page SEO. On-page SEO focuses on optimizing content and website elements, technical SEO improves site performance, and off-page SEO builds authority." },
        { q: "How do I analyze which type of SEO I need?", a: "The right type of SEO depends on your business goals. Local SEO suits businesses serving specific locations, eCommerce SEO supports online product sales, and enterprise SEO works best for large websites." },
        { q: "Can you perform an SEO audit on my website?", a: "Yes. We conduct detailed SEO audits that review your website's technical setup, content quality, on-page elements, and search performance, highlighting gaps and new opportunities." },
        { q: "How long will it take to see better rankings on Google?", a: "SEO is a gradual process. Most websites start seeing improvements within 3 to 6 months, depending on keyword competition. Local or low-competition searches can show results sooner." },
        { q: "What is Ecommerce SEO?", a: "Ecommerce SEO focuses on optimizing online stores to improve product visibility. It includes optimizing product pages, categories, site structure, and content so customers can easily find your products." },
        { q: "How can local SEO services help businesses?", a: "Local SEO helps businesses get discovered by customers searching nearby. It improves visibility on Google Map pack and local search results, attracting high-intent local traffic." },
        { q: "How much does an SEO Service Cost?", a: "SEO costs vary based on goals, competition, and scope. Pricing ranges from basic monthly packages to customized strategies. We offer flexible plans focused on long-term value." }
    ];

    return (
        <SmoothScrolling>
            <div className="bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white overflow-hidden">
                <Navbar />

                {/* HERO SECTION - 100vh */}
                {/* HERO SECTION - Refined & Grand with "Strategy" Feel */}
                <section className="relative min-h-[90vh] flex items-center pt-32 px-6 overflow-hidden bg-white">
                    {/* Background Elements - Subtle Orange Glows */}
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-[#f8f8f8] -z-10" />
                    <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#FF6105]/5 blur-[100px] -z-10 pointer-events-none" />
                    <div className="absolute bottom-[10%] left-[5%] w-[20vw] h-[20vw] rounded-full bg-[#FF6105]/5 blur-[80px] -z-10 pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-bold tracking-widest uppercase text-sm">SEO Services</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl lg:text-[7rem] font-bold uppercase tracking-tight leading-[0.9] mb-8 text-[#2A1810]"
                        >
                            Rank <span className="text-[#FF6105]">Higher.</span> <br />
                            Grow <span className="text-[#FF6105]">Faster.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl lg:text-2xl text-[#6B5545] font-medium leading-relaxed max-w-3xl mb-12"
                        >
                            Engineering-led SEO that transforms search intent into measurable revenue. No guesswork, just results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF6105] text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-[#e55800] transition-all shadow-xl shadow-[#FF6105]/20 hover:shadow-2xl hover:shadow-[#FF6105]/40 hover:-translate-y-1">
                                Request A Quote
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* WHY EEGNITE - BENTO GRID - min-h-screen */}
                <section className="min-h-screen flex items-center py-20 px-6 bg-white border-y border-black/5">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-16 mb-20">
                            <div>
                                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight mb-6">Why <span className="text-[#FF6105]">EEGNITE?</span></h2>
                                <p className="text-xl text-black/60 leading-relaxed font-medium">
                                    Local business owners choose EEGNITE for one simple reason: measurable and sustainable results.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Bento Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                            {whyChooseUs.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`${item.colSpan || ""} p-10 rounded-[2.5rem] bg-[#FAFAFA] border border-black/5 hover:border-[#FF6105] hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between`}
                                >
                                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                                        <item.icon size={120} />
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF6105] mb-6 group-hover:bg-[#FF6105] group-hover:text-white transition-colors relative z-10">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                                        <p className="text-black/60 leading-relaxed font-medium">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID - Simple Cards - min-h-screen */}
                <section className="min-h-screen flex items-center py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter mb-6">Full Service <br /><span className="text-[#FF6105]">SEO Solution</span></h2>
                            <p className="max-w-2xl mx-auto text-black/50 text-xl font-medium">We focus on long-term visibility & brand authority.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {servicesList.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-8 rounded-[2rem] border border-black/5 hover:border-[#FF6105] hover:shadow-2xl hover:shadow-[#FF6105]/10 transition-all duration-300 group flex flex-col h-[350px] justify-between cursor-default"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-[#FFF5F0] rounded-xl text-[#FF6105] group-hover:scale-110 transition-transform duration-300">
                                                <item.icon size={28} />
                                            </div>
                                            <div className="w-8 h-8 rounded-full border border-black/10 group-hover:border-[#FF6105] group-hover:text-[#FF6105] flex items-center justify-center transition-colors">
                                                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 leading-none text-[#2A1810]">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-[#6B5545] font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS FLOW - Creative Step Through - min-h-screen */}
                {/* PROCESS FLOW - Light Theme Redesign */}
                <section className="min-h-screen flex items-center py-20 px-6 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter text-black">
                                Our SEO <span className="text-[#FF6105]">Process</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-0 border-t border-black/10">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group border-b lg:border-b-0 lg:border-r border-black/10 p-8 hover:bg-[#FF6105] hover:text-white transition-all duration-300 h-[400px] flex flex-col justify-between last:border-r-0"
                                >
                                    <div className="text-5xl font-black text-black/5 group-hover:text-white/20 transition-colors duration-300">{step.step}</div>
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-white text-black transition-colors">{step.title}</h4>
                                        <p className="text-sm text-black/60 group-hover:text-white/80 font-medium leading-relaxed transition-colors">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES - Organized Symmetric Grid */}
                <section className="py-24 lg:py-32 px-6 bg-[#F8F8F8] text-black border-t border-black/5">
                    <div className="max-w-7xl mx-auto mb-16 text-center">
                        <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-black">
                            Industries <span className="text-[#FF6105]">We Power</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl font-medium text-black/50">
                            Tailored SEO strategies for sectors where competition is fierce and precision is everything.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-white rounded-[2rem] border border-black/5 hover:border-[#FF6105] hover:shadow-xl hover:shadow-[#FF6105]/10 transition-all duration-300 flex flex-col items-start h-full cursor-default"
                            >
                                <div className="w-14 h-14 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-[#FF6105] mb-8 group-hover:bg-[#FF6105] group-hover:text-white transition-colors duration-300">
                                    <ind.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 leading-none w-full">{ind.title}</h3>
                                <p className="text-base font-medium text-black/50 leading-relaxed mb-8">{ind.desc}</p>

                                <div className="mt-auto pt-6 border-t border-black/5 w-full flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FF6105] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Explore Strategy <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* HOW EEGNITE PARTNER - Clean List with "Actionable" Feel */}
                <section className="py-24 lg:py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                                    The <span className="text-[#FF6105]">Partner</span><br />Model
                                </h2>
                                <p className="text-xl text-black/60 font-medium leading-relaxed max-w-md mb-12">
                                    Integration, not isolation. We plug directly into your team to ensure every strategy is executed with engineering precision.
                                </p>
                                <div className="hidden lg:block">
                                    <Link href="/contact" className="px-10 py-5 bg-[#FF6105] text-white rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors inline-block shadow-lg">
                                        Partner With Us
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {partnerCards.map((card, idx) => (
                                    <div key={idx} className="group flex gap-8 items-start p-6 rounded-3xl hover:bg-[#FAFAFA] transition-colors cursor-default border border-transparent hover:border-black/5">
                                        <div className="text-5xl font-black text-black/5 group-hover:text-[#FF6105] transition-colors duration-300 relative top-[-10px]">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black uppercase tracking-tight mb-2">{card.title}</h4>
                                            <p className="text-black/50 font-medium leading-relaxed">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY BUSINESSES CHOOSE US - Minimalist White Cards */}
                <section className="py-24 lg:py-32 px-6 bg-[#FAFAFA] border-y border-black/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                            <div className="lg:col-span-4">
                                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-8 sticky top-32">
                                    Why <span className="text-[#FF6105]">Choose Us?</span>
                                </h2>
                            </div>

                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                                {whyIndiaChooser.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-[#FF6105]/20 transition-all duration-300 flex flex-col justify-between h-[300px]"
                                    >
                                        <div className="w-12 h-1 bg-[#FF6105] rounded-full mb-auto" />
                                        <div>
                                            <h3 className="text-2xl font-black uppercase leading-[1] mb-4">{item.title}</h3>
                                            <p className="text-black/60 font-medium text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS & PILLARS */}
                <section className="py-20 lg:py-32 px-6 bg-white min-h-[80vh] flex items-center">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center w-full">
                        <div>
                            <h3 className="text-4xl font-black uppercase tracking-tight mb-8">Performance <br /><span className="text-[#FF6105]">Metrics</span></h3>
                            <div className="space-y-8">
                                {/* Simple Bar Chart Representation */}
                                {[
                                    { label: "SEO & Marketing", val: 75 },
                                    { label: "Keyword Results", val: 50 },
                                    { label: "Google Analytics", val: 65 },
                                    { label: "Off-Page SEO", val: 30 },
                                ].map((metric, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2">
                                            <span>{metric.label}</span>
                                            <span>{metric.val}%</span>
                                        </div>
                                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.val}%` }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                                className="h-full bg-[#FF6105] rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-4xl font-black uppercase tracking-tight mb-8">Powered by <span className="text-[#FF6105]">Values</span></h3>
                            <div className="space-y-8">
                                {[
                                    { t: "Integrity", d: "Candid recommendations. No hidden agendas." },
                                    { t: "Teamwork", d: "Senior-led execution. We work as your extension." },
                                    { t: "Excellence", d: "Uncompromised quality in every deliverable." }
                                ].map((val, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#FF6105] flex items-center justify-center text-[#FF6105] font-black shrink-0">0{i + 1}</div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase mb-2">{val.t}</h4>
                                            <p className="text-black/60 font-medium">{val.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 bg-[#FAFAFA] px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-16">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-white p-6 rounded-2xl border border-black/5 open:border-[#FF6105] transition-all cursor-pointer">
                                    <summary className="font-bold text-lg uppercase tracking-tight flex justify-between items-center list-none">
                                        {faq.q}
                                        <span className="text-[#FF6105] group-open:rotate-180 transition-transform"><ArrowRight className="rotate-90" /></span>
                                    </summary>
                                    <p className="mt-4 text-black/60 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA - Fixed Heading Size */}
                <section className="py-32 bg-white text-center px-6 min-h-[80vh] flex flex-col justify-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-12 leading-tight">
                            Start Growing with <br /><span className="text-[#FF6105]">EEGNITE</span> Today
                        </h2>
                        <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto mb-16">
                            From technical optimization to content strategy and local visibility, we help businesses across India, the Middle East, and other European regions to grow faster, smarter, and stronger.
                        </p>
                        <Link href="/contact" className="inline-flex bg-[#FF6105] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform shadow-xl shadow-orange-500/30">
                            Request a Quote
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default SEOPage;
