"use client";

import * as React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import { ToolsSection } from "@/components/shared/ToolsSection";
import { ClientLogoSlider } from "@/components/shared/ClientLogoSlider";

// Custom lightweight inline SVGs to replace lucide-react imports (following AGENTS.md rules)
const CpuIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
);

const SearchIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const LinkIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
);

const MapIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
);

const ZapIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const ArrowRightIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const ChevronRightIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const CustomXIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CustomCheckIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// --- STATIC SECTIONS (borrowed from PPC-services layout) ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "Conversion-focused ads that increase sales fast in Kolkata.", href: "/industries/e-commerce" },
        { title: "B2B & Lead Generation", desc: "Targeted campaigns that fill your corporate sales pipeline.", href: "/industries/b2b-lead-generation" },
        { title: "Medical & Healthcare", desc: "Trust-first ads that drive patient bookings and clinical visits.", href: "/industries/medical-healthcare" },
        { title: "Retail Businesses", desc: "Local geotargeted campaigns that increase store footfall.", href: "/industries/retail-business" },
        { title: "Manufacturing & Logistics", desc: "B2B industry ads that generate high-intent global enquiries.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "High-converting search and social ads for attracting premium clients.", href: "/industries/professional-services" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
                            INDUSTRIES WE HELP GROW <br className="hidden md:inline" /><span className="text-[#FF6105]">IN KOLKATA</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            Our PPC campaigns are tailored to your audience, competitive landscape, budget, and business goals, ensuring every advertising dollar is focused on driving qualified leads and measurable growth.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 w-full border-l md:border-l-0 md:pl-0 pl-6 border-black/5">
                        {industries.map((item, idx) => (
                            <Link key={idx} href={item.href} className="group block">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-black mb-1 transition-colors group-hover:text-[#FF6105] inline-flex items-center gap-1.5">
                                    {item.title}
                                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FF6105]" />
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

function ExpectationSection() {
    const expectations = [
        { title: "Intent-Based Targeting", desc: "Show ads only to users actively typing in relevant keywords. This filters out casual browsers." },
        { title: "Measurable Ad Spend", desc: "Track every rupee spent against conversions. Know exactly which ads are driving sales or inquiries." },
        { title: "Immediate Market Testing", desc: "Launch campaigns quickly to test new products, offers, or locations. Get real-time data on what works." },
        { title: "Flexible Budget Control", desc: "Set daily spending caps and adjust budgets instantly. Pause or scale campaigns based on current business capacity." },
        { title: "Competitor Counter-Strategy", desc: "Bid directly on high-value industry terms. This ensures your brand is present even when competitors dominate organic results." }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-8 md:mb-12">
                        WHAT YOU CAN EXPECT FROM EEGNITE'S <br className="hidden md:inline" /><span className="text-[#FF6105]">PERFORMANCE MARKETING SERVICES</span>
                    </h2>
                </div>
                <div className="space-y-16 md:space-y-32">
                    {expectations.map((v, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-24 border-t border-black/10 pt-8 md:pt-12 transition-all hover:border-[#FF6105] duration-500">
                            <span className="text-xl md:text-2xl font-mono text-[#FF6105]">0{i + 1}</span>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-5xl font-medium uppercase tracking-tight mb-4 md:mb-6 group-hover:text-[#FF6105] transition-colors duration-300">
                                    {v.title}
                                </h3>
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
                        <span className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4 block">STOP GUESSING. START GROWING.</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">
                            READY TO GENERATE <br className="hidden md:inline" />MORE LEADS THROUGH <br className="hidden md:inline" />PPC ADS IN KOLKATA?
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Book a free strategy call with EEGNITE and walk away with clarity on exactly what is holding your Kolkata business back from PPC growth results, and what it will take to fix it. No pitch. No pressure. Just a straight conversation about your goals.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="#contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free Strategy Call <ArrowRightIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 right-6 md:right-10 text-white/40 text-xs md:text-sm uppercase tracking-widest">
                ROI-Focused PPC for Kolkata Brands
            </div>
        </section>
    );
}

const faqs = [
    { q: "How much should I budget for PPC in Kolkata?", a: "Most Kolkata businesses start seeing meaningful results with a monthly ad spend starting from INR 30,000, depending on industry competitiveness. EEGNITE recommends a starting budget after reviewing your goals and category, rather than suggesting a fixed figure upfront." },
    { q: "How quickly will I see leads from PPC?", a: "Google Search campaigns can begin generating leads within 7 to 14 days of launch. Meta campaigns typically need 10 to 14 days for the platform's learning phase before performance stabilises and leads become more consistent." },
    { q: "Can EEGNITE manage PPC if I already have an active campaign?", a: "Yes. We frequently take over existing campaigns, audit what is currently running, identify wasted spend and tracking gaps, and restructure the account for better performance without losing existing campaign history where it is useful." },
    { q: "Do you manage both Google Ads and Meta Ads?", a: "Yes. EEGNITE manages Google Search, Shopping, and Display campaigns alongside Meta campaigns on Facebook and Instagram, choosing the right mix based on where your Kolkata audience is most likely to convert." },
    { q: "What makes EEGNITE's PPC management different from other Kolkata agencies?", a: "Most agencies report on clicks and impressions. EEGNITE builds full conversion tracking into every campaign from the start, so reporting reflects actual leads, sales, and cost per acquisition, the numbers that determine whether PPC is working for your business." }
];

export default function KolkataPpcPageContent() {
    // 4-item list mapped exactly from the Google Doc problem statement
    const kolkataProblems = [
        {
            icon: CustomXIcon as any,
            title: "No Conversion Tracking Installed Correctly",
            desc: "Without proper tracking, the platform optimises for clicks because that is the only signal it has, even if those clicks never become customers."
        },
        {
            icon: CustomXIcon as any,
            title: "Broad Targeting That Wastes Budget",
            desc: "Campaigns targeting entire cities or generic keywords burn through budget on searches that were never going to convert."
        },
        {
            icon: CustomXIcon as any,
            title: "Landing Pages That Do Not Match the Ad",
            desc: "Traffic arrives at a generic homepage instead of a page built around the exact offer in the ad, killing conversion rates."
        },
        {
            icon: CustomXIcon as any,
            title: "Campaigns Never Reviewed After Launch",
            desc: "Without a weekly review, underperforming keywords and audiences keep consuming budget long after they stop being useful."
        }
    ];

    // 4-item list mapped exactly from the Google Doc solutions
    const kolkataSolutions = [
        {
            icon: CustomCheckIcon as any,
            title: "Full Conversion Tracking Setup",
            desc: "Google Tag Manager, conversion events, and call tracking are installed so every campaign optimises toward leads and sales, not clicks."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Precision Audience and Keyword Targeting",
            desc: "Campaigns built around the specific Kolkata audiences and search terms most likely to convert, not broad generic reach."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Landing Pages Aligned to Every Campaign",
            desc: "Dedicated landing pages matching ad messaging and offer, built to convert the exact traffic each campaign sends."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Weekly Optimisation Cycles",
            desc: "Every campaign is reviewed weekly. Underperforming elements are paused or adjusted, and the budget is reallocated to what is working."
        }
    ];

    // Services detailed for Kolkata using custom components
    const services = [
        {
            title: "GOOGLE SEARCH AND SHOPPING ADS",
            icon: SearchIcon,
            description: "High-intent campaigns targeting buyers actively searching for your products or services in Kolkata, with bidding and budget structured for the lowest realistic cost per conversion."
        },
        {
            title: "META ADS (FACEBOOK AND INSTAGRAM)",
            icon: ZapIcon,
            description: "Audience-targeted campaigns for awareness, retargeting, and direct conversion, built around the platforms where your Kolkata customers actually spend time."
        },
        {
            title: "AUDIENCE RESEARCH AND CAMPAIGN STRATEGY",
            icon: CpuIcon,
            description: "In-depth audience and competitor analysis to build campaigns that reach the right customers with the right message at the right stage of the buying journey."
        },
        {
            title: "CONVERSION TRACKING AND ATTRIBUTION",
            icon: MapIcon,
            description: "Full setup of Google Tag Manager, conversion events, and call tracking so every campaign is measured against leads and sales, not vanity metrics."
        },
        {
            title: "LANDING PAGE AND RETARGETING CAMPAIGNS",
            icon: LinkIcon,
            description: "Dedicated landing pages for every major campaign, paired with retargeting sequences that bring back visitors who did not convert the first time."
        }
    ];

    // Process milestones aligned with the sister page process
    const processSteps = [
        { id: "01", title: "PPC & COMPETITOR AUDIT", desc: "A deep audit of your current ad campaigns, landing pages, tracking errors, and competitor spend strategies.", icon: CpuIcon as any },
        { id: "02", title: "KEYWORD & AUDIENCE MAPPING", desc: "Mapping high-intent keywords and target audiences in Kolkata to filter out unqualified traffic and focus spend.", icon: SearchIcon as any },
        { id: "03", title: "AD CREATIVE & LANDING PAGE BUILD", desc: "Writing high-converting ad copy and designing custom landing pages aligned directly with ad messages.", icon: ZapIcon as any },
        { id: "04", title: "WEEKLY OPTIMISATION", desc: "Tracking cost-per-lead, budget reallocation, and keyword adjustments to continually reduce acquisition costs.", icon: LinkIcon as any }
    ];

    // Timelines aligned with the sister page timeline
    const timelineSteps = [
        { t: "STAGE 1: AUDIT & TRACKING SETUP", d: "Weeks 1–2: Complete account audit, Google Tag Manager conversion events setup, call tracking integration, and landing page builds." },
        { t: "STAGE 2: STRATEGY & CAMPAIGN LAUNCH", d: "Weeks 3–4: Keyword research mapping, target audience definition, ad copy creation, and campaign launch across Google and Meta." },
        { t: "STAGE 3: TUNING & SCALE PERFORMANCE", d: "Weeks 5+: Weekly optimization cycles, bidding adjustments, search term filtering, negative keywords mapping, and budget scaling." }
    ];

    // Choose us reasons mapped to key achievements from doc
    const chooseReasons = [
        { id: "01", title: "8 Years of PPC Experience", desc: "Managing Google and Meta Ads campaigns that generate qualified leads, sales, and measurable business growth." },
        { id: "02", title: "95% Client Retention", desc: "Clients stay because our campaigns consistently improve ROI and deliver long-term performance improvements." },
        { id: "03", title: "100% Dedicated to Success", desc: "Every account is optimized continuously to reduce costs, increase conversions, and maximize advertising returns." }
    ];

    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                
                {/* 1. Hero */}
                <ServiceHero
                    badgeText="Google Ads Delivers an Average ROI of 200% — $2 Back For Every $1 Spent"
                    title={<>PPC MANAGEMENT SERVICES IN KOLKATA <br className="hidden md:inline" />THAT TURNS AD SPEND INTO PAYING CUSTOMERS</>}
                    titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl max-w-5xl"
                    subtitle={<>Capture High-Intent Buyers <br />Before Your Competitors Do</>}
                    description={
                        <>
                            EEGNITE manages PPC campaigns for Kolkata businesses across Google Ads, Meta, and beyond. Every campaign is built on intent-based targeting, conversion tracking, and weekly optimisation, so your ad budget produces leads and sales, not just clicks.
                        </>
                    }
                />

                {/* 2. Client Logo Slide */}
                <ClientLogoSlider heading={<>Brands That Choose Growth. <br />Brands That Choose EEGNITE.</>} />

                {/* 3. Signs Your Business Needs Service (Re-styled, White Background, Watermark Waterfalls) */}
                <section className="py-20 md:py-32 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                SIGNS YOUR KOLKATA BUSINESS <span className="text-[#FF6105]">NEEDS PROFESSIONAL PPC ADS MANAGEMENT</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl font-medium">
                                If any of these sound familiar, your ad spend needs structure.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "You spend on Ads but don't know your cost-per-lead.",
                                "Organic traffic is too slow; you need leads right now.",
                                "DIY ads or automated Google suggestions yielded mixed results.",
                                "Competitors dominate the top of search results instead of you.",
                                "Launching a new product or location requires immediate visibility.",
                                "Your current agency cannot explain performance in plain terms."
                            ].map((sign, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white p-8 rounded-[2rem] border border-black/5 hover:border-[#FF6105]/20 hover:shadow-[0_20px_50px_rgba(232,106,0,0.05)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full hover:-translate-y-1"
                                >
                                    {/* Large watermark indicator */}
                                    <span className="absolute top-4 right-6 text-7xl font-bold text-[#FF6105]/5 select-none transition-all duration-500 group-hover:scale-110 group-hover:text-[#FF6105]/10">
                                        0{idx + 1}
                                    </span>
                                    
                                    {/* Accent content container */}
                                    <div className="relative z-10 flex gap-4 items-start pt-4">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6105]/5 group-hover:bg-[#FF6105] flex items-center justify-center transition-all duration-300">
                                            <span className="text-[#FF6105] group-hover:text-white font-bold text-sm">
                                                ✓
                                            </span>
                                        </div>
                                        <p className="text-black/80 text-base font-semibold leading-relaxed pt-0.5 group-hover:text-black transition-colors duration-300">
                                            {sign}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Pain Points & EEGNITE Solutions */}
                <IndustryProblemSolution
                    problemsTitle="THE REAL CAUSE BEHIND YOUR KOLKATA BUSINESS PPC PROBLEM"
                    problemsSubtitle="Underperforming PPC is rarely about the platform. It is about the setup."
                    solutionsTitle="HOW EEGNITE FIXES IT"
                    solutionsSubtitle="Every fix is tied to cost per lead and conversion outcomes."
                    problems={kolkataProblems}
                    solutions={kolkataSolutions}
                />

                {/* 5. Opportunity Section (Restyled, Glassmorphism, Enlarged Cards, Header 2 Lines) */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight max-w-xl">
                                    THE PPC OPPORTUNITY IN KOLKATA <br className="hidden md:inline" /><span className="text-[#FF6105]">RIGHT NOW</span>
                                </h2>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Search and social ad costs in Kolkata remain lower than in metro markets like Mumbai, Delhi, or Bangalore, while buyer intent continues to rise across categories from healthcare to retail to professional services.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    This means Kolkata businesses can often achieve a lower cost per lead than competitors in larger cities, while reaching an audience that is increasingly comfortable making purchase decisions online.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                    Businesses that move now are securing market share at a cost that will only increase as more competitors enter the space.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6 w-full">
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">50%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">More Conversions</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">are generated by PPC traffic than organic traffic.</p>
                                    </div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">80%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Boost in Brand Awareness</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">comes from top-of-search ads.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Services Grid Section */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
                    <div className="mx-auto w-full max-w-[1400px] relative z-10">
                        <div className="max-w-4xl mb-12 md:mb-16 md:mx-auto md:text-center">
                            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block text-left md:text-center leading-normal md:whitespace-nowrap">
                                Each part of our PPC service is built to solve a specific gap in how your ad budget is currently performing.
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 text-left md:text-center leading-[1.2]">
                                EEGNITE PPC SERVICES FOR <br className="hidden md:inline" />
                                <span className="text-[#FF6105]">KOLKATA BUSINESSES</span>
                            </h2>
                        </div>

                        {/* First 3 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
                            {services.slice(0, 3).map((service, idx) => (
                                <div key={idx} className="bg-white border border-black/5 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative flex flex-col h-full hover:scale-[1.02]">
                                    <div className="w-16 h-16 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-4 text-black group-hover:text-[#FF6105] transition-colors">{service.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Second 2 cards centered */}
                        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto mt-8">
                            {services.slice(3, 5).map((service, idx) => (
                                <div key={idx} className="w-full md:w-[calc(50%-16px)] bg-white border border-black/5 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group relative flex flex-col h-full hover:scale-[1.02]">
                                    <div className="w-16 h-16 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-4 text-black group-hover:text-[#FF6105] transition-colors">{service.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Internal Link block */}
                        <div className="bg-[#F5F3EE] p-6 md:p-8 rounded-2xl border border-[#EAE7E0] flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between max-w-4xl mx-auto mt-16 md:mt-24">
                            <p className="text-sm md:text-base text-[#2A1810] font-semibold leading-relaxed text-center md:text-left">
                                [ⓘ&nbsp;&nbsp;Want to see exactly how our PPC and performance marketing process works? Click here to&nbsp;
                                <Link href="/services/ppc/" className="text-[#FF6105] underline hover:text-[#C44800]">
                                    explore our full Performance Marketing services
                                </Link>
                                &nbsp;page for a complete breakdown of campaign structure, tracking, and optimisation.]
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Industries Section */}
                <IndustriesSection />

                {/* 8. Service Process */}
                <ServiceProcess
                    title={<>OUR GROWTH BASED <span className="text-[#FF6105]">PPC PROCESS</span></>}
                    steps={processSteps}
                />

                {/* 9. Service Timeline */}
                <ServiceTimeline
                    title={<>PPC TIMELINE AND <span className="text-[#FF6105]">PERFORMANCE MILESTONES</span></>}
                    steps={timelineSteps}
                    ctaTitle="Talk to Us"
                    ctaDescription="Get a free PPC analysis from our experts and see where your next growth wins are hiding"
                    ctaButtonText="Get Your Free Analysis"
                />

                {/* 10. Tools Section */}
                <ToolsSection />

                {/* 11. Why Choose Us */}
                <WhyChooseUs
                    title={<>WHY KOLKATA BUSINESSES CHOOSE <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="We'd rather let campaign performance and client results do the talking."
                    reasons={chooseReasons}
                    closingQuote="Paid advertising is more competitive than ever. Success isn't just about launching ads - it's about reaching the right audience, controlling costs, and maximizing conversions. Our goal is to ensure your business appears in front of high-intent customers at the exact moment they're ready to take action."
                />

                {/* 12. Expectations Section */}
                <ExpectationSection />

                {/* 13. Testimonials */}
                <Testimonials />

                {/* 14. FAQ Section */}
                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left md:text-center mb-8 md:mb-16 text-black">
                            YOUR QUESTIONS. <span className="text-[#FF6105]">STRAIGHT ANSWERS.</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border border-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        <span className="max-w-[90%]">{faq.q}</span>
                                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all">
                                            <ChevronRightIcon className="w-5 h-5 group-open:rotate-90 transition-transform text-[#FF6105]" />
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

                {/* 15. Growth CTA */}
                <GrowthCTA />

                {/* 16. Contact Form Section */}
                <section id="contact" className="py-16 md:py-24 bg-white border-t border-black/5">
                    <Contact />
                </section>
            </div>
            
            <Footer />
        </main>
    );
}
