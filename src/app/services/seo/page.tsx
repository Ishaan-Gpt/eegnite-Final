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

                {/* HERO SECTION - Strictly White, Thinner Fonts, No Extra Glows */}
                <section className="relative min-h-[85vh] flex items-center pt-32 px-6 overflow-hidden bg-white">
                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-medium tracking-widest uppercase text-sm">SEO Services</span>
                        </div>

                        <h1 className="text-5xl lg:text-[6rem] font-bold uppercase tracking-tight leading-[1] mb-8 text-[#2A1810]">
                            Rank <span className="text-[#FF6105]">Higher.</span> <br />
                            Grow <span className="text-[#FF6105]">Faster.</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-[#6B5545] font-normal leading-relaxed max-w-3xl mb-12">
                            Engineering-led SEO that transforms search intent into measurable revenue. No guesswork, just results.
                        </p>

                        <div>
                            <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF6105] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#e55800] transition-all shadow-lg shadow-[#FF6105]/20 hover:shadow-xl hover:-translate-y-0.5">
                                Request A Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY EEGNITE - BENTO GRID - Clean White */}
                <section className="py-20 px-6 bg-white border-y border-black/[0.03]">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="mb-16">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">Why <span className="text-[#FF6105]">EEGNITE?</span></h2>
                            <p className="text-lg text-black/60 leading-relaxed font-normal max-w-2xl">
                                Local business owners choose us for one simple reason: sustainable results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                            {whyChooseUs.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`${item.colSpan || ""} p-8 rounded-[2rem] bg-white border border-black/[0.05] hover:border-[#FF6105] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] flex items-center justify-center text-[#FF6105] mb-6 group-hover:bg-[#FF6105] group-hover:text-white transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                                        <p className="text-black/60 leading-relaxed font-normal text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID - Clean White Cards */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-4">Full Service <br /><span className="text-[#FF6105]">SEO Solution</span></h2>
                            <p className="max-w-2xl mx-auto text-black/50 text-lg font-normal">Focused on long-term visibility & revenue.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {servicesList.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-[1.5rem] border border-black/[0.05] hover:border-[#FF6105] hover:shadow-lg transition-all duration-300 md:h-[320px] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-[#FFF5F0] rounded-xl text-[#FF6105]">
                                                <item.icon size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-[#2A1810]">{item.title}</h3>
                                        <p className="text-sm text-[#6B5545] font-normal leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS FLOW - Clean & Linear */}
                <section className="py-20 px-6 bg-white border-t border-black/[0.03]">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-black">
                                Our <span className="text-[#FF6105]">Process</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-0 border-t border-black/[0.05]">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="group border-b lg:border-b-0 lg:border-r border-black/[0.05] p-8 hover:bg-[#FFF5F0] transition-colors duration-300 h-[350px] flex flex-col justify-between last:border-r-0"
                                >
                                    <div className="text-4xl font-bold text-black/5 group-hover:text-[#FF6105]/20 transition-colors">{step.step}</div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight mb-3 text-black">{step.title}</h4>
                                        <p className="text-sm text-black/60 font-normal leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES - Clean White */}
                <section className="py-24 px-6 bg-white border-t border-black/[0.03]">
                    <div className="max-w-7xl mx-auto mb-16 text-center">
                        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-4 text-black">
                            Industries <span className="text-[#FF6105]">We Power</span>
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white rounded-[2rem] border border-black/[0.05] hover:border-[#FF6105] transition-all duration-300 flex flex-col items-start h-full"
                            >
                                <div className="w-12 h-12 bg-[#FFF5F0] rounded-xl flex items-center justify-center text-[#FF6105] mb-6">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 w-full">{ind.title}</h3>
                                <p className="text-sm font-normal text-black/50 leading-relaxed mb-6">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTNER MODEL - Clean Layout */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="sticky top-32">
                                <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tight mb-6 leading-[0.9]">
                                    The <span className="text-[#FF6105]">Partner</span><br />Model
                                </h2>
                                <p className="text-lg text-black/60 font-normal leading-relaxed max-w-md mb-8">
                                    Integration, not isolation. We plug directly into your team to ensure every strategy is executed with engineering precision.
                                </p>
                                <div>
                                    <Link href="/contact" className="px-8 py-4 bg-[#FF6105] text-white rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors inline-block text-sm">
                                        Partner With Us
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {partnerCards.map((card, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-[#FFF5F0] transition-colors border border-transparent hover:border-[#FF6105]/10">
                                        <div className="text-3xl font-bold text-[#FF6105] relative top-[-4px]">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{card.title}</h4>
                                            <p className="text-black/50 font-normal leading-relaxed text-sm">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US - Clean White Cards */}
                <section className="py-24 px-6 bg-white border-y border-black/[0.03]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                            <div className="lg:col-span-4">
                                <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-8 sticky top-32">
                                    Why <span className="text-[#FF6105]">Choose Us?</span>
                                </h2>
                            </div>

                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                                {whyIndiaChooser.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-8 rounded-[2rem] border border-black/[0.05] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[250px]"
                                    >
                                        <div className="w-10 h-1 bg-[#FF6105] rounded-full mb-auto" />
                                        <div>
                                            <h3 className="text-xl font-bold uppercase leading-[1.1] mb-3">{item.title}</h3>
                                            <p className="text-black/60 font-normal text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS & PILLARS - Clean White */}
                <section className="py-20 px-6 bg-white min-h-[60vh] flex items-center">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start w-full">
                        <div>
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Performance <br /><span className="text-[#FF6105]">Metrics</span></h3>
                            <div className="space-y-6">
                                {[
                                    { label: "SEO & Marketing", val: 75 },
                                    { label: "Keyword Results", val: 50 },
                                    { label: "Google Analytics", val: 65 },
                                    { label: "Off-Page SEO", val: 30 },
                                ].map((metric, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-black/70">
                                            <span>{metric.label}</span>
                                            <span>{metric.val}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.val}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="h-full bg-[#FF6105] rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Powered by <span className="text-[#FF6105]">Values</span></h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Integrity", d: "Candid recommendations. No hidden agendas." },
                                    { t: "Teamwork", d: "Senior-led execution. We work as your extension." },
                                    { t: "Excellence", d: "Uncompromised quality in every deliverable." }
                                ].map((val, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full border border-[#FF6105] flex items-center justify-center text-[#FF6105] font-bold shrink-0 text-sm">0{i + 1}</div>
                                        <div>
                                            <h4 className="text-lg font-bold uppercase mb-1">{val.t}</h4>
                                            <p className="text-black/60 font-normal text-sm">{val.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs - White Accordion */}
                <section className="py-20 bg-white px-6 border-t border-black/[0.03]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-center mb-12">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-white p-6 rounded-2xl border border-black/5 open:border-[#FF6105] transition-all cursor-pointer">
                                    <summary className="font-bold text-base uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        {faq.q}
                                        <span className="text-[#FF6105] group-open:rotate-180 transition-transform"><ArrowRight className="rotate-90" size={18} /></span>
                                    </summary>
                                    <p className="mt-4 text-black/60 leading-relaxed font-normal text-sm">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA - Clean White */}
                <section className="py-24 bg-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                            Start Growing with <br /><span className="text-[#FF6105]">EEGNITE</span> Today
                        </h2>
                        <p className="text-lg text-black/50 font-normal max-w-2xl mx-auto mb-12">
                            From technical optimization to content strategy and local visibility, we help businesses across India, the Middle East, and other European regions to grow faster, smarter, and stronger.
                        </p>
                        <Link href="/contact" className="inline-flex bg-[#FF6105] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors shadow-lg">
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
