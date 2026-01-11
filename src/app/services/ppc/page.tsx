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
    RockingChair, // Replaced Rocket (not in lucide-react standard import sometimes, using Zap/Target instead if needed, but keeping consistent imports)
    Target,
    Activity,
    Users,
    Shield,
    TrendingUp,
    LayoutDashboard,
    Lightbulb,
    Globe,
    Cpu,
    Briefcase,
    Layers,
    MousePointerClick,
    MonitorPlay,
    Crosshair
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

const PPCPage = () => {
    // PPC Specific Data
    const whyChooseUs = [
        {
            title: "Instant Traffic",
            description: "Skip the waiting game. Our PPC campaigns put you at the top of search results and social feeds immediately.",
            icon: Zap,
            colSpan: "lg:col-span-2"
        },
        {
            title: "Data-Driven",
            description: "We don't guess. We test. Every click, impression, and conversion is tracked to optimize your ad spend.",
            icon: BarChart3,
            colSpan: "lg:col-span-1"
        },
        {
            title: "Laser Targeting",
            description: "Reach exactly who you want, when you want. Demographics, interests, and intent-based targeting.",
            icon: Target,
            colSpan: "lg:col-span-1"
        },
        {
            title: "Scalability",
            description: "Once we find the winning formula, we scale it. Increase budget confidently knowing your ROAS holds steady.",
            icon: TrendingUp,
            colSpan: "lg:col-span-2"
        }
    ];

    const servicesList = [
        { title: "Google Ads", icon: Search, desc: "Capture high-intent potential customers actively searching for your products or services. We manage Search, Display, and Video campaigns." },
        { title: "Social Media Ads", icon: Share2, desc: "Stop the scroll on Facebook, Instagram, LinkedIn, and TikTok. We create disruptive creatives that drive engagement and sales." },
        { title: "Shopping Ads", icon: ShoppingBag, desc: "Put your products front and center. creating highly optimized product feeds for Google Shopping to dominate e-commerce results." },
        { title: "Remarketing", icon: Layers, desc: "Don't lose a visitor. We set up strategic retargeting campaigns to bring back lost traffic and convert window shoppers." },
        { title: "Display Advertising", icon: MonitorPlay, desc: "Build brand awareness with visual ads across millions of websites and apps in the Google Display Network." },
        { title: "Conversion Optimization", icon: Activity, desc: "Traffic is nothing without sales. We optimize landing pages and ad copy to ensure maximum conversion rates." },
        { title: "Local Services Ads", icon: MapPin, desc: "Connect with local customers in your area. Perfect for service-based businesses looking for high-quality local leads." },
        { title: "YouTube Ads", icon: MonitorPlay, desc: "Video marketing that works. Engage users with compelling video content on the world's second-largest search engine." }
    ];

    const processSteps = [
        { step: "01", title: "Audit & Strategy", desc: "Analyzing current performance and competitor landscape." },
        { step: "02", title: "Setup & Tracking", desc: "Pixel installation, conversion tracking, and campaign build." },
        { step: "03", title: "Launch & Test", desc: "Live deployment with A/B testing on creatives and audiences." },
        { step: "04", title: "Optimization", desc: "Cutting wasted spend and doubling down on winners." },
        { step: "05", title: "Scale", desc: "Increasing budget and reach while maintaining ROAS." }
    ];

    const industries = [
        { title: "E-Commerce", icon: ShoppingBag, desc: "Scaling D2C brands via Shopping & Social" },
        { title: "SaaS", icon: Cpu, desc: "High-intent lead gen for software" },
        { title: "Local Biz", icon: MapPin, desc: "Plumbers, Dentists, Lawyers" },
        { title: "Real Estate", icon: Briefcase, desc: "Lead generation for property sales" },
        { title: "Education", icon: Lightbulb, desc: "Student enrollment campaigns" }
    ];

    const partnerCards = [
        { title: "Transparency", desc: "You own your ad accounts. You see exactly where every penny goes. No hidden fees or markups." },
        { title: "Agility", desc: "We move fast. Trends change, and so do we. We pivot strategies instantly to keep you ahead." },
        { title: "Creative", desc: "Ads assume visuals. Our team creates high-converting static and video assets that demand attention." },
        { title: "Communication", desc: "Direct access to your account manager. Regular reports and strategy calls to keep you in the loop." },
        { title: "Results", desc: "We are performance-obsessed. If it doesn't make money, we don't do it." }
    ];

    const whyIndiaChooser = [
        { title: "Stop Burning Cash", desc: "Inefficient ads bleed money. We plug the leaks and ensure your budget is invested, not spent." },
        { title: "Predictable Growth", desc: "Turn paid traffic into a reliable revenue engine that you can toggle on demand." },
        { title: "Expert Execution", desc: "Don't rely on auto-pilot. Our specialists manually tune your campaigns for peak performance." },
        { title: "Full Funnel View", desc: "We look at the whole picture, from ad click to landing page to final sale." }
    ];

    const faqs = [
        { q: "How much budget do I need for PPC?", a: "It depends on your industry and goals. We recommend starting with a budget that allows for sufficient data collection, typically enough for at least 30-50 clicks per day to start." },
        { q: "Google Ads vs. Facebook Ads: Which is better?", a: "Google Ads catches users with 'intent' (searching for a solution), while Facebook Ads generate 'demand' (interrupting users based on interests). We often recommend a mix of both." },
        { q: "How long until I see results?", a: "Unlike SEO, PPC can generate traffic instantly. However, optimizing for maximum ROI typically takes 1-3 months of data gathering and refinement." },
        { q: "Do I have to sign a long-term contract?", a: "No. We believe in earning your business every month. Our contracts are flexible, focusing on results rather than locking you in." },
        { q: "What is ROAS?", a: "ROAS stands for Return On Ad Spend. It's a metric used to measure the effectiveness of a digital advertising campaign. We focus on maximizing this metric." },
        { q: "Can you help with ad creatives?", a: "Yes! We have an in-house design team that creates high-converting ad visuals and copy tailored to your brand and audience." },
        { q: "Do I own my ad account?", a: "Absolutely. You retain full ownership of your ad accounts and all the data within them. We just manage it for you." },
        { q: "How do you track conversions?", a: "We set up advanced tracking using Google Tag Manager, GA4, and platform pixels (Meta Pixel, etc.) to track every lead, sale, and phone call." }
    ];

    return (
        <SmoothScrolling>
            <div className="bg-black text-white font-sans selection:bg-[#FF6105] selection:text-white overflow-hidden">
                <Navbar />

                {/* HERO SECTION - Strictly Black */}
                <section className="relative min-h-[85vh] flex items-center pt-32 px-6 overflow-hidden bg-black">
                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-medium tracking-widest uppercase text-sm">PPC Marketing</span>
                        </div>

                        <h1 className="text-5xl lg:text-[6rem] font-bold uppercase tracking-tight leading-[1] mb-8 text-white">
                            Pay Less. <br />
                            <span className="text-[#FF6105]">Convert More.</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl mb-12">
                            Data-driven ad campaigns that turn spend into revenue. Stop guessing and start scaling with precision targeting.
                        </p>

                        <div>
                            <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF6105] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#FF6105]/20 hover:shadow-xl hover:-translate-y-0.5">
                                Launch Campaign
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY EEGNITE - BENTO GRID - Clean Black */}
                <section className="py-20 px-6 bg-black border-y border-white/[0.1]">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="mb-16">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">Why <span className="text-[#FF6105]">EEGNITE?</span></h2>
                            <p className="text-lg text-white/60 leading-relaxed font-normal max-w-2xl">
                                We treat your ad budget like our own. No wasted spend, just measurable returns.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                            {whyChooseUs.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`${item.colSpan || ""} p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/[0.1] hover:border-[#FF6105] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#FF6105]/10 flex items-center justify-center text-[#FF6105] mb-6 group-hover:bg-[#FF6105] group-hover:text-black transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white">{item.title}</h3>
                                        <p className="text-white/60 leading-relaxed font-normal text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID - Clean Black Cards */}
                <section className="py-20 px-6 bg-black">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-4 text-white">Full Stack <br /><span className="text-[#FF6105]">Ad Solutions</span></h2>
                            <p className="max-w-2xl mx-auto text-white/50 text-lg font-normal">Covering every channel where your customers spend time.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {servicesList.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#0a0a0a] p-8 rounded-[1.5rem] border border-white/[0.1] hover:border-[#FF6105] hover:shadow-[0_0_30px_rgba(255,97,5,0.15)] transition-all duration-300 md:h-[320px] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-[#FF6105]/10 rounded-xl text-[#FF6105]">
                                                <item.icon size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white">{item.title}</h3>
                                        <p className="text-sm text-white/60 font-normal leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS FLOW - Clean & Linear */}
                <section className="py-20 px-6 bg-black border-t border-white/[0.1]">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-white">
                                The <span className="text-[#FF6105]">Blueprint</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-0 border-t border-white/[0.1]">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="group border-b lg:border-b-0 lg:border-r border-white/[0.1] p-8 hover:bg-[#FF6105] transition-colors duration-300 h-[350px] flex flex-col justify-between last:border-r-0"
                                >
                                    <div className="text-4xl font-bold text-white/10 group-hover:text-black/20 transition-colors">{step.step}</div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-black transition-colors">{step.title}</h4>
                                        <p className="text-sm text-white/60 font-normal leading-relaxed group-hover:text-black/70 transition-colors">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES - Clean Black */}
                <section className="py-24 px-6 bg-black border-t border-white/[0.1]">
                    <div className="max-w-7xl mx-auto mb-16 text-center">
                        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-4 text-white">
                            Industries <span className="text-[#FF6105]">We Scale</span>
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#0a0a0a] rounded-[2rem] border border-white/[0.1] hover:border-[#FF6105] transition-all duration-300 flex flex-col items-start h-full"
                            >
                                <div className="w-12 h-12 bg-[#FF6105]/10 rounded-xl flex items-center justify-center text-[#FF6105] mb-6">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 w-full text-white">{ind.title}</h3>
                                <p className="text-sm font-normal text-white/50 leading-relaxed mb-6">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTNER MODEL */}
                <section className="py-24 px-6 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="sticky top-32">
                                <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tight mb-6 leading-[0.9] text-white">
                                    Why <span className="text-[#FF6105]">Partner</span><br />With Us?
                                </h2>
                                <p className="text-lg text-white/60 font-normal leading-relaxed max-w-md mb-8">
                                    We aren't just media buyers. We are growth partners who care about your bottom line as much as you do.
                                </p>
                                <div>
                                    <Link href="/contact" className="px-8 py-4 bg-[#FF6105] text-black rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block text-sm">
                                        Partner With Us
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {partnerCards.map((card, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-[#FF6105] group transition-colors border border-transparent hover:border-[#FF6105]/10">
                                        <div className="text-3xl font-bold text-[#FF6105] group-hover:text-black relative top-[-4px]">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-white group-hover:text-black">{card.title}</h4>
                                            <p className="text-white/50 font-normal leading-relaxed text-sm group-hover:text-black/70">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US Cards */}
                <section className="py-24 px-6 bg-black border-y border-white/[0.1]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                            <div className="lg:col-span-4">
                                <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-8 sticky top-32 text-white">
                                    The <span className="text-[#FF6105]">Edge</span>
                                </h2>
                            </div>

                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                                {whyIndiaChooser.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/[0.1] hover:shadow-[0_0_20px_rgba(255,97,5,0.15)] hover:border-[#FF6105] transition-all duration-300 flex flex-col justify-between h-[250px]"
                                    >
                                        <div className="w-10 h-1 bg-[#FF6105] rounded-full mb-auto" />
                                        <div>
                                            <h3 className="text-xl font-bold uppercase leading-[1.1] mb-3 text-white">{item.title}</h3>
                                            <p className="text-white/60 font-normal text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS & PILLARS */}
                <section className="py-20 px-6 bg-black min-h-[60vh] flex items-center">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start w-full">
                        <div>
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8 text-white">Performance <br /><span className="text-[#FF6105]">Metrics</span></h3>
                            <div className="space-y-6">
                                {[
                                    { label: "ROAS Improvement", val: 82 },
                                    { label: "CTR Growth", val: 65 },
                                    { label: "Conversion Rate", val: 70 },
                                    { label: "Cost Reduction", val: 40 },
                                ].map((metric, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-white/70">
                                            <span>{metric.label}</span>
                                            <span>{metric.val}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8 text-white">Powered by <span className="text-[#FF6105]">Data</span></h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Precision", d: "Sniper-like targeting. No wasted bullets." },
                                    { t: "Velocity", d: "Rapid testing and scaling cycles." },
                                    { t: "Transparency", d: "Clear reporting. No smoke and mirrors." }
                                ].map((val, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full border border-[#FF6105] flex items-center justify-center text-[#FF6105] font-bold shrink-0 text-sm">0{i + 1}</div>
                                        <div>
                                            <h4 className="text-lg font-bold uppercase mb-1 text-white">{val.t}</h4>
                                            <p className="text-white/60 font-normal text-sm">{val.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 bg-black px-6 border-t border-white/[0.1]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-center mb-12 text-white">Common <span className="text-[#FF6105]">Questions</span></h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 open:border-[#FF6105] transition-all cursor-pointer">
                                    <summary className="font-bold text-base uppercase tracking-tight flex justify-between items-center list-none text-white">
                                        {faq.q}
                                        <span className="text-[#FF6105] group-open:rotate-180 transition-transform"><ArrowRight className="rotate-90" size={18} /></span>
                                    </summary>
                                    <p className="mt-4 text-white/60 leading-relaxed font-normal text-sm">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-black text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight text-white">
                            Ready to <span className="text-[#FF6105]">Dominate</span><br /> The Market?
                        </h2>
                        <p className="text-lg text-white/50 font-normal max-w-2xl mx-auto mb-12">
                            Stop letting your competitors steal your customers. Let's build a campaign that drives traffic, leads, and sales today.
                        </p>
                        <Link href="/contact" className="inline-flex bg-[#FF6105] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-lg shadow-[#FF6105]/20">
                            Start Your Campaign
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default PPCPage;
