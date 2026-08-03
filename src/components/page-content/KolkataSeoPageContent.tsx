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

// --- STATIC SECTIONS (borrowed from SEO-services layout) ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "SEO strategies that drive product visibility and sales in Kolkata.", href: "/industries/e-commerce" },
        { title: "B2B and Lead Gen", desc: "Search visibility that attracts qualified corporate leads.", href: "/industries/b2b-lead-generation" },
        { title: "Medical and Healthcare", desc: "Trust-focused SEO that increases clinic and hospital appointments.", href: "/industries/medical-healthcare" },
        { title: "Retail Business", desc: "Local SEO map pack optimization that boosts store footfall.", href: "/industries/retail-business" },
        { title: "Manufacturing and Logistics", desc: "B2B industry search visibility that generates global enquiries.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "Authority-driven local SEO that attracts premium business clients.", href: "/industries/professional-services" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
                            MARKETS WE LEAD. <br /><span className="text-[#FF6105]">INDUSTRIES WE SCALE IN KOLKATA</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs SEO strategies that strengthen visibility and authority across these core sectors in Kolkata.
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
        { title: "Increased Organic & AI Visibility", desc: "Appear where customers are actively searching-whether they are using traditional search engines or asking AI assistants like ChatGPT and Gemini." },
        { title: "More Qualified Leads", desc: "Attract prospects with genuine buying intent by optimising for complex, conversational long-tail queries used in AI-driven search." },
        { title: "Lower Customer Acquisition Costs", desc: "Reduce dependence on rising ad budgets by securing permanent, organic real estate in both standard search indexes and LLM knowledge bases." },
        { title: "Stronger Brand Authority", desc: "Build trust and credibility, ensuring your brand is recognised as a cited, trusted source by both human users and AI systems." },
        { title: "Sustainable, Future-Proof Growth", desc: "Create a scalable acquisition channel that compounds in value and adapts as search evolves from keywords to AI-generated answers." }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        WHAT YOU CAN EXPECT <br className="hidden md:inline" />FROM EEGNITE'S <span className="text-[#FF6105]">SEO SERVICES</span>
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
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">
                            READY TO SCALE <br className="hidden md:inline" />YOUR SEARCH VISIBILITY <br className="hidden md:inline" />IN KOLKATA?
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Book a free strategy call with EEGNITE and discover what is holding your search visibility back, where your greatest growth opportunities exist, and what it will take to turn SEO into a predictable source of leads, revenue, and long-term business growth.
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
                AI-Powered SEO for Kolkata Brands
            </div>
        </section>
    );
}

const faqs = [
    { q: "How much do EEGNITE’s SEO services cost in Kolkata?", a: "Our SEO services in Kolkata start at ₹25,000 per month. The final investment depends on your business goals, competition, website health, and growth requirements. After an initial audit, EEGNITE creates a tailored SEO roadmap and pricing structure designed around your specific needs." },
    { q: "How long does SEO take to show results in Kolkata?", a: "Most Kolkata businesses see meaningful movement in rankings and organic traffic within 3 to 5 months, depending on the competition level. Local SEO improvements, such as Google Business Profile optimisation, can show results faster, often within 4 to 8 weeks." },
    { q: "Is local SEO different from regular SEO?", a: "Yes. Local SEO focuses on visibility for location-based searches, such as 'near me' queries and Google Maps results, while regular SEO focuses on broader organic rankings. For most Kolkata businesses, both are needed together for full visibility." },
    { q: "Can EEGNITE fix a website that already has SEO problems?", a: "Yes. A large part of our work in Kolkata involves auditing existing websites, identifying what previous SEO efforts missed or did incorrectly, and rebuilding the strategy on a stronger technical and content foundation." },
    { q: "Do you only work with businesses based in Kolkata?", a: "No. While this page focuses on Kolkata, EEGNITE provides SEO services across India and internationally. Kolkata-based businesses benefit from our understanding of the local market alongside our broader SEO expertise." },
];

export default function KolkataSeoPageContent() {
    // 4-item list mapped exactly from the Google Doc problem statement
    const kolkataProblems = [
        {
            icon: CustomXIcon as any,
            title: "Technical Issues Search Engines and AI Cannot Get Past",
            desc: "Slow servers, broken internal links, and poor mobile performance mean Google cannot properly crawl your site. Without clean schema markup, LLMs also fail to interpret and trust your data."
        },
        {
            icon: CustomXIcon as any,
            title: "Content That Misses Search Intent and LLM Context",
            desc: "Pages are written about your business, not what customers actually type into Google or ask ChatGPT. If your content lacks depth and entity-clear structures, AI systems will bypass you entirely."
        },
        {
            icon: CustomXIcon as any,
            title: "Zero Local SEO and AI Visibility Foundation",
            desc: "No optimised Google Business Profile, no local citations, and no location pages. Without these, you remain invisible to \"near me\" mobile searches, Google Maps, and location-aware AI Overviews."
        },
        {
            icon: CustomXIcon as any,
            title: "No Authority or AI Trust Signals",
            desc: "Search engines and LLMs only recommend brands they trust. Without quality backlinks, digital citations, and consistent topical authority, your site lacks the credibility needed to be cited as a top source."
        }
    ];

    // 4-item list mapped exactly from the Google Doc solutions
    const kolkataSolutions = [
        {
            icon: CustomCheckIcon as any,
            title: "Full Technical SEO and AI-Readiness Audit",
            desc: "We resolve speed, crawlability, mobile usability, and schema markup. This builds a rock-solid foundation so both traditional search crawlers and AI models can easily read, index, and trust your website."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Search-Intent and LLM Content Strategy",
            desc: "We research exactly how your Kolkata customers search; whether through keywords or conversational AI prompts - and build deep, entity-optimised content that answers those specific queries."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Local SEO and Map Pack Optimisation",
            desc: "We optimise your Google Business Profile, build Kolkata-specific directory citations, and design location pages to secure your spot in local map packs and location-based AI search results."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Authority Building and AI Citation Growth",
            desc: "We execute outreach-based link building from relevant, trustworthy sources. This drives up your traditional domain authority while establishing your brand as a highly credible, cited source across AI platforms."
        }
    ];

    // Services detailed for Kolkata using custom components
    const services = [
        {
            title: "KEYWORD RESEARCH AND COMPETITOR ANALYSIS",
            icon: SearchIcon,
            description: "We identify the keywords and AI-driven search opportunities your customers use, helping you outrank competitors and stay visible across Google and AI platforms that influence buying decisions."
        },
        {
            title: "LOCAL SEO, GOOGLE BUSINESS PROFILE AND AI VISIBILITY",
            icon: MapIcon,
            description: "We optimise your Google Business Profile, Kolkata-specific directories, and location pages. This drives higher visibility in local search, Google Maps, AI Overviews, and AI-powered search engines."
        },
        {
            title: "TECHNICAL SEO AUDIT AND FIXES",
            icon: CpuIcon,
            description: "We fix site speed, mobile usability, schema, and crawlability. This solid technical foundation ensures traditional search engines and AI models easily understand, index, and trust your website."
        },
        {
            title: "CONTENT, ON-PAGE OPTIMISATION AND LLM STRATEGY",
            icon: ZapIcon,
            description: "We build demand-driven pages optimised for traditional rankings and AI answers. By strengthening entities and topical authority, we boost your visibility across Google, ChatGPT, and Gemini."
        },
        {
            title: "LINK BUILDING AND AUTHORITY GROWTH",
            icon: LinkIcon,
            description: "We acquire high-quality, relevant backlinks through targeted outreach. This strengthens your domain authority, drives higher search rankings, and establishes your brand as a trusted source for AI systems."
        }
    ];

    // Process milestones aligned with the sister page process
    const processSteps = [
        { id: "01", title: "TECHNICAL & GBP AUDIT", desc: "A deep technical audit of your site speed, crawlability, and schema, alongside a review of your Kolkata Google Business profile listings and citation gaps.", icon: CpuIcon as any },
        { id: "02", title: "KEYWORD CLUSTERING", desc: "Mapping your market's local queries. We group keywords by search intent, structuring landing pages to answer exact local search queries and Conversational AI prompts.", icon: SearchIcon as any },
        { id: "03", title: "ON-PAGE & SCHEMA EXECUTION", desc: "Optimising tags, headings, content structure, and internal link distributions while installing structured local schema data to signal relevance.", icon: ZapIcon as any },
        { id: "04", title: "AUTHORITY & MAP OUTREACH", desc: "Acquiring local citation entries and premium outreach-led editorial links to build domain trust, boosting local search ranks and citation authority.", icon: LinkIcon as any },
    ];

    // Timelines aligned with the sister page timeline
    const timelineSteps = [
        { t: "STAGE 1: TECHNICAL AUDITS & CITATION SETUP", d: "Weeks 1–4: Speed optimization, server crawlability fixes, internal link correction, GBP setup, and structured schema installation to establish local relevance." },
        { t: "STAGE 2: CONTENT & ON-PAGE OPTIMISATION", d: "Weeks 5–8: Keyword research mapping, landing page text optimization, blog cluster structuring, and on-page element alignment targeting local keywords." },
        { t: "STAGE 3: AUTHORITY BUILDING & PERFORMANCE SCALE", d: "Weeks 9+: Outreach link acquisition campaigns, map pack ranking scale, position monitoring, and conversion tracking audits to tie visibility to enquiries." },
    ];

    // Choose us reasons mapped to key achievements from doc
    const chooseReasons = [
        { id: "01", title: "8 YEARS OF EXCELLENCE", desc: "For more than eight years, we've helped businesses stay visible across Google and today's AI-powered search platforms." },
        { id: "02", title: "95% CLIENT RETENTION", desc: "Clients stay because the rankings we build keep compounding long after the first contract ends, not because they're locked in." },
        { id: "03", title: "100% DEDICATED TO SUCCESS", desc: "Every account is run as a long-term growth partnership, not a retainer; we're hoping you'll renew without asking questions." },
    ];

    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                
                {/* 1. Hero */}
                <ServiceHero
                    badgeText="Be Visible To Search Engines, LLMs and Customers"
                    title={<>AI-POWERED SEO SERVICES <br className="hidden md:inline" />IN KOLKATA</>}
                    subtitle={<>BUILT TO GET YOU FOUND, <br />CHOSEN, AND BOOKED</>}
                    description={
                        <>
                            EEGNITE delivers SEO services in Kolkata built around one outcome: <span className="text-[#FF6105] font-semibold">more qualified traffic that turns into enquiries.</span> We align local SEO, technical fixes, search-intent content, and link building into a single system, ensuring your business ranks where your customers are searching; whether on traditional Google search or through emerging AI and LLM assistants.
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
                                SIGNS YOUR KOLKATA BUSINESS <span className="text-[#FF6105]">NEEDS SEO RIGHT NOW</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl font-medium">
                                If any of these sound familiar, SEO is not optional. It is overdue.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "Your website gets traffic but zero enquiries or calls.",
                                "Leads stop completely the moment your ad budget ends.",
                                "Competitors dominate Google Maps, ChatGPT, and Gemini recommendations.",
                                "Outdated websites get ignored by Google and AI models.",
                                "You lack a permanent, compounding source of organic traffic.",
                                "New Kolkata locations remain completely invisible to local buyers."
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
                    problemsTitle="REAL CAUSE BEHIND YOUR KOLKATA BUSINESS SEO PROBLEM"
                    problemsSubtitle="Most SEO problems are not visible on the surface. They are structural, keeping you hidden from both search engines and AI engines."
                    solutionsTitle="HOW EEGNITE FIXES IT"
                    solutionsSubtitle="Every fix is tied to a ranking, traffic, and AI-visibility outcome, not a checklist item."
                    problems={kolkataProblems}
                    solutions={kolkataSolutions}
                />

                {/* 5. Local Opportunity/Signs Grid (Restyled, Glassmorphism, Enlarged Cards, Header 2 Lines) */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight max-w-xl">
                                    THE SEO OPPORTUNITY IN KOLKATA <br className="hidden md:inline" /><span className="text-[#FF6105]">RIGHT NOW</span>
                                </h2>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Kolkata's digital search volume is growing faster than the number of businesses optimising for it. That gap is your opportunity.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Areas like Salt Lake, New Town, Park Street, Behala, and Howrah are seeing rising search volume for local services, but most local businesses still rely on outdated directory listings or no online presence at all.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                    Ranking now, while competition is still low relative to demand, gives your business a compounding advantage that gets harder to replicate every month a competitor delays.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6 w-full">
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">3.5x</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">More Leads Generated</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">by businesses with strong digital visibility versus those without.</p>
                                    </div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">63%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Online Research First</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">of consumers research a business online before visiting or contacting it.</p>
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
                            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block text-left md:text-center leading-normal">
                                Each part of our SEO service is built to solve a specific gap in your current search visibility.
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 text-left md:text-center leading-[1.2]">
                                EEGNITE SEO SERVICES FOR <br className="hidden md:inline" />
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
                                [ⓘ&nbsp;&nbsp;Want to see exactly how our SEO process works step by step?&nbsp;
                                <Link href="/services/seo/" className="text-[#FF6105] underline hover:text-[#C44800]">
                                    explore our full SEO Services
                                </Link>
                                &nbsp;page for a complete breakdown of our process, tools, and methodology.]
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Industries Section */}
                <IndustriesSection />

                {/* 8. Service Process */}
                <ServiceProcess
                    title={<>OUR GROWTH BASED <span className="text-[#FF6105]">SEO PROCESS</span></>}
                    steps={processSteps}
                />

                {/* 9. Service Timeline */}
                <ServiceTimeline
                    title={<>SEO TIMELINE AND <span className="text-[#FF6105]">MILESTONE PROTOCOL</span></>}
                    steps={timelineSteps}
                    ctaTitle="Talk to Us"
                    ctaDescription="Get a free SEO analysis from our experts and see where your next growth wins are hiding"
                    ctaButtonText="Get Your Free Analysis"
                />

                {/* 10. Tools Section */}
                <ToolsSection />

                {/* 11. Why Choose Us */}
                <WhyChooseUs
                    title={<>WHY KOLKATA BUSINESSES CHOOSE <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="We'd rather show you the track record than ask you to take the pitch on faith."
                    reasons={chooseReasons}
                    closingQuote="Search is no longer just about Google. Customers now use both search engines and AI-powered platforms to find answers and compare businesses. Our goal is to keep your business visible across both, so you're found when it matters most."
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
