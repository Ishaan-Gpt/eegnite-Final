import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ToolsSection } from "@/components/shared/ToolsSection";
import {
    WebDesignHero,
    WebDesignComparisonSection,
    FullServiceWebDesign,
    WebDesignProcessFloating,
    ProtocolTimeline,
    WhyChooseSection,
} from "./web-design-development-interactive";
import {
    WEB_DESIGN_INDUSTRIES,
    WEB_DESIGN_VALUES,
    WEB_DESIGN_FAQS,
} from "@/data/web-design-development.data";

function IndustriesSection() {
    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
                            MARKETS WE LEAD. <br /><span className="text-[#FF6105]">INDUSTRIES WE SCALE</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs web design and development strategies that strengthen visibility and authority across these core sectors.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 w-full border-l md:border-l-0 md:pl-0 pl-6 border-black/5">
                        {WEB_DESIGN_INDUSTRIES.map((item, idx) => (
                            <Link key={idx} href={item.href} className="group block">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-black mb-1 transition-colors group-hover:text-[#FF6105] inline-flex items-center gap-1.5">
                                    {item.title}
                                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FF6105]" />
                                </h3>
                                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValuesSection() {
    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        POWERED BY <span className="text-[#FF6105]">VALUES</span>
                    </h2>
                </div>
                <div className="space-y-16 md:space-y-32">
                    {WEB_DESIGN_VALUES.map((v, i) => (
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
}

function GrowthCTA() {
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
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">
                            START BUILDING YOUR <br />HIGH-CONVERTING WEBSITE <br />WITH EEGNITE
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your website is the first thing a potential client sees and the last thing standing between your brand and a conversion. Let EEGNITE make sure it does its job. From UI/UX design and e-commerce builds to landing pages and CRO-focused development, we build websites that work as hard as your business does.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/#contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free Web Discovery Call <ArrowRight />
                            </Link>
                            <Link href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg md:text-xl font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Request a Quote
                            </Link>
                            <span className="text-sm uppercase tracking-widest font-medium opacity-80">Turn visitors into customers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 right-6 md:right-10 text-white/40 text-xs md:text-sm uppercase tracking-widest">
                From Kolkata to the World
            </div>
        </section>
    );
}

export default function WebDesignDevelopmentPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <WebDesignHero />
                <WebDesignComparisonSection />
                <IndustriesSection />
                <FullServiceWebDesign />
                <WebDesignProcessFloating />
                <ProtocolTimeline />
                <ToolsSection />
                <WhyChooseSection />
                <ValuesSection />
                <Testimonials />

                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left md:text-center mb-8 md:mb-16 text-black">
                            YOUR QUESTIONS. <span className="text-[#FF6105]">STRAIGHT ANSWERS.</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {WEB_DESIGN_FAQS.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border border-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        <span className="max-w-[90%]">{faq.q}</span>
                                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all">
                                            <ArrowRight className="group-open:rotate-90 transition-transform" size={20} />
                                        </span>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">
                                        {faq.a}
                                    </p>
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
