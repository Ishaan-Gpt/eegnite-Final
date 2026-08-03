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

// --- INDUSTRIES SECTION ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "Online storefronts optimized for friction-free checkouts and order value growth.", href: "/industries/e-commerce" },
        { title: "B2B & Lead Generation", desc: "Corporate sites structured around service pillars and capture pathways.", href: "/industries/b2b-lead-generation" },
        { title: "Medical & Healthcare", desc: "Trustworthy websites engineered around patient bookings and compliance.", href: "/industries/medical-healthcare" },
        { title: "Retail Businesses", desc: "Localized store finders and interactive product catalogues built mobile-first.", href: "/industries/retail-business" },
        { title: "Manufacturing & Logistics", desc: "High-spec catalogue frameworks designed to capture global tenders and RFCs.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "Sleek portfolio layouts demonstrating expertise to land high-value contract deals.", href: "/industries/professional-services" },
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
                            Our web design and development projects are shaped around the buyer journey, trust signals, and conversion requirements specific to each industry we serve.
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



// --- EXPECTATION SECTION ---

function ExpectationSection() {
    const expectations = [
        { title: "A Website Built Around Your Business Goals", desc: "Not a templated design reskinned to your brand. A custom build that reflects your buyer journey, your service offering, and the specific conversion actions your business needs to grow." },
        { title: "Mobile-First Performance That Retains Visitors", desc: "A fast-loading, fully responsive website that delivers a clean, professional experience across every device your Kolkata audience uses to find and evaluate your business." },
        { title: "SEO-Ready Architecture From Day One", desc: "Site structure, schema, meta tag framework, and internal linking are built correctly at the development stage, so your website is positioned to rank from the moment it goes live." },
        { title: "Full Content Control Without Developer Dependency", desc: "A WordPress CMS built with structured editable templates and documented training so your team can manage and update your website independently from handover." },
        { title: "A Conversion System, Not Just a Digital Brochure", desc: "Clear calls to action, logical page flow, trust signals, and contact pathways built into every key page so visitors are consistently guided toward making an enquiry." }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-8 md:mb-12">
                        WHAT YOU CAN EXPECT FROM EEGNITE'S <br className="hidden md:inline" /><span className="text-[#FF6105]">WEB DESIGN AND DEVELOPMENT SERVICES</span>
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

// --- GROWTH CTA ---

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
                            READY TO BUILD A WEBSITE THAT ACTUALLY WORKS <br className="hidden md:inline" />FOR YOUR KOLKATA BUSINESS?
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Book a free strategy call with EEGNITE and discover what your current website is costing you in missed enquiries, where the conversion gaps are, and what it will take to build a website that turns your online traffic into a reliable, measurable source of leads and revenue for your Kolkata business.
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
                Web Development for Kolkata Brands
            </div>
        </section>
    );
}

const faqs = [
    { q: "How much does a website cost in Kolkata?", a: "Website projects start at INR 25,000 for focused landing pages. For full business websites, pricing typically starts from INR 40,000, with the final cost depending on the number of pages, required functionality, CMS setup, and overall project scope." },
    { q: "How long does it take to build a website?", a: "A standard business website usually takes 3 to 6 weeks from planning and design to final launch. More complex e-commerce websites or custom builds can take 6 to 12 weeks depending on features and integrations." },
    { q: "Will my website be optimised for SEO from day one?", a: "Yes. Every website is built with technical SEO fundamentals in place, including clean site structure, proper heading hierarchy, mobile responsiveness, and a search-friendly meta setup from the start." },
    { q: "Can EEGNITE redesign my existing Kolkata business website?", a: "Yes. We begin with an audit of your current website to identify issues in design, speed, SEO, and conversion performance, then redesign it to improve both user experience and business results." },
    { q: "Do you provide ongoing support after the website launches?", a: "Yes. We offer ongoing support for website maintenance, security updates, performance checks, and content updates to keep your website secure, fast, and functioning properly after launch." }
];

export default function KolkataWebdevPageContent() {
    // 4-item list mapped exactly from the Google Doc website problems
    const kolkataProblems = [
        {
            icon: CustomXIcon as any,
            title: "Built to Look Good, Not to Convert",
            desc: "Conversion architecture, buyer psychology, and the journey from landing to enquiry are rarely considered during the design process, and the business pays for it in missed leads."
        },
        {
            icon: CustomXIcon as any,
            title: "No Mobile-First Thinking in a Mobile-First Market",
            desc: "Over 70% of website traffic in India now comes from mobile devices. Websites built primarily for desktop layouts, with elements resized for mobile as an afterthought, deliver poor user experiences that lose visitors within seconds of arrival."
        },
        {
            icon: CustomXIcon as any,
            title: "Slow Page Speed Penalised by Google and Abandoned by Users",
            desc: "Unoptimised images, bloated code, cheap shared hosting, and no caching strategy are costing Kolkata businesses both their search rankings and the visitors who land on their site."
        },
        {
            icon: CustomXIcon as any,
            title: "No Clear Pathway From Visitor to Enquiry",
            desc: "Visitors arrive, read about the business, and leave. Without clear calls to action, logical page flow, trust signals, and structured contact pathways built into the design, websites inform without converting, and the entire marketing investment upstream is wasted."
        }
    ];

    // 4-item list mapped exactly from the Google Doc website fixes
    const kolkataSolutions = [
        {
            icon: CustomCheckIcon as any,
            title: "Conversion-First Design Strategy",
            desc: "Every layout, every CTA, and every content hierarchy serves a business purpose. Design serves that strategy rather than overriding it."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Mobile-First, Performance-Optimised Builds",
            desc: "Every website is built mobile-first, with image optimisation, clean code, and caching built in from the start to ensure fast page speeds."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Technical SEO Built Into Every Page From Day One",
            desc: "Site structure, URL hierarchy, schema markup, and internal linking are correctly set up at the development stage so the site is search-engine-ready."
        },
        {
            icon: CustomCheckIcon as any,
            title: "CMS Builds That Put You in Control",
            desc: "Structured WordPress page templates and documented training delivered at handover, so your team can manage the website without developer dependency."
        }
    ];

    // Services cards lists
    const services = [
        {
            title: "CUSTOM WEBSITE DESIGN AND UI/UX",
            icon: SearchIcon,
            description: "We design custom websites built around your brand identity, your buyer's decision-making process, and your conversion goals. Wireframes, user flows, and visual design are all developed before a line of code is written, ensuring the final build reflects both your brand and your buyers."
        },
        {
            title: "WORDPRESS DEVELOPMENT AND CMS BUILDS",
            icon: ZapIcon,
            description: "We build on WordPress with structured, editable page templates that give your team full content control without developer dependency. Fast, secure, mobile-first builds with clean code, reliable hosting guidance, and documented CMS training delivered at handover."
        },
        {
            title: "E-COMMERCE DEVELOPMENT (WOOCOMMERCE AND SHOPIFY)",
            icon: CpuIcon,
            description: "Online stores built to sell. Product pages, category architecture, checkout flows, and payment integrations designed for conversion at every stage of the buying journey. Platform recommendation based on your product range, order volume, and long-term growth plans."
        },
        {
            title: "LANDING PAGE DESIGN AND CRO",
            icon: MapIcon,
            description: "High-converting landing pages built for specific campaigns, offers, or services. Designed around a single conversion action, aligned to the ad or content driving traffic to them, and structured to remove every friction point standing between the visitor and the enquiry."
        },
        {
            title: "WEBSITE SPEED OPTIMISATION AND TECHNICAL AUDIT",
            icon: LinkIcon,
            description: "We audit and resolve the technical performance issues costing your current website traffic and conversions. Core Web Vitals, image compression, caching, server response time, and mobile usability were all reviewed, resolved, and verified against Google's current performance standards."
        }
    ];

    // Placeholder or alignment parameters for the steps (following design symmetry)
    const processSteps = [
        { id: "01", title: "WIREFRMAMING & UX MAPS", desc: "Drawing page flows, call-to-action nodes, and screen frameworks before creating visual templates.", icon: CpuIcon as any },
        { id: "02", title: "UI GRAPHICS & BRAND DESIGN", desc: "Creating unique layout color schemes, font structures, and custom icons to fit brand identity styles.", icon: SearchIcon as any },
        { id: "03", title: "CMS INTEGRATION & WEB BUILD", desc: "Writing clean, mobile-first code blocks and linking template fields inside WordPress admin consoles.", icon: ZapIcon as any },
        { id: "04", title: "SPEED CHECKS & FINAL LAUNCH", desc: "Running Core Web Vitals checks, image caching processes, and executing final server deployment uploads.", icon: LinkIcon as any }
    ];

    const timelineSteps = [
        { t: "STAGE 1: RESEARCH & WIREFRAMING", d: "Weeks 1–2: Competitor research audits, keyword mappings, UX wireframe creations, and layout design reviews." },
        { t: "STAGE 2: VISUAL DESIGN & BUILD", d: "Weeks 3–4: Visual design approvals, backend database setups, custom CMS templates coding, and responsive adjustments." },
        { t: "STAGE 3: CONTENT & DEPLOYMENT", d: "Weeks 5–6: Adding copy, setting up page speeds, linking contact tracking, client checks, and live domain launches." }
    ];

    const chooseReasons = [
        { id: "01", title: "8 Years of Excellence", desc: "For over eight years, we have built websites for Kolkata businesses focused on generating enquiries, leads, and sales - not just looking good online." },
        { id: "02", title: "95% Client Retention", desc: "Clients return for redesigns, development, and CRO because our websites continue delivering results while remaining easy to manage." },
        { id: "03", title: "100% Dedicated to Success", desc: "Every project is approached as a long-term business partnership with a strong focus on performance and conversion growth." }
    ];

    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                
                {/* 1. Hero */}
                <ServiceHero
                    badgeText="75% of consumers judge credibility based on website design"
                    title={<>WEB DESIGN AND DEVELOPMENT <br className="hidden md:inline" />SERVICES IN KOLKATA <br className="hidden md:inline" />BUILT TO CONVERT VISITORS <br className="hidden md:inline" />INTO CUSTOMERS</>}
                    titleClassName="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl max-w-5xl"
                    subtitle="A Website That Looks Good Is Not Enough. It Needs to Convert."
                    subtitleClassName="text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-[#FF6105] max-w-3xl"
                    description={
                        <>
                            EEGNITE builds websites for Kolkata businesses that do more than establish a digital presence. Every design decision, every page structure, and every line of code serves one purpose: turning the visitors your business attracts into genuine enquiries, bookings, and paying customers.
                        </>
                    }
                />

                {/* 2. Client Logo Slide */}
                <ClientLogoSlider heading={<>Brands That Choose Growth. <br />Brands That Choose EEGNITE.</>} />

                {/* 3. Signs Your Business Needs Service */}
                <section className="py-20 md:py-32 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                SIGNS YOUR KOLKATA BUSINESS <span className="text-[#FF6105]">NEEDS A NEW OR REDESIGNED WEBSITE</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl font-medium">
                                If Any Of These Sound Familiar, Your Current Website Is Costing You Customers.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "Your website gets traffic, but few qualified enquiries.",
                                "Customers struggle to find contact and service details.",
                                "Mobile pages take too long to load properly.",
                                "Competitor websites look more modern and trustworthy.",
                                "Your website hasn't been updated for several years.",
                                "Simple content updates require a developer every time."
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
                    problemsTitle="THE REAL CAUSE BEHIND YOUR KOLKATA BUSINESS WEBSITE PROBLEM"
                    problemsSubtitle="Most underperforming websites in Kolkata share the same structural problems, and they are rarely about the visual design."
                    solutionsTitle="HOW EEGNITE FIXES IT"
                    solutionsSubtitle="Every design and development decision is tied to conversion outcomes, not just visual approval."
                    problems={kolkataProblems}
                    solutions={kolkataSolutions}
                />

                {/* 5. Opportunity Section */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight max-w-xl">
                                    THE WEB DESIGN OPPORTUNITY IN KOLKATA <br className="hidden md:inline" /><span className="text-[#FF6105]">RIGHT NOW</span>
                                </h2>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Across industries from retail and healthcare to professional services and manufacturing, buyers in Kolkata research, evaluate, and shortlist vendors online before making any form of contact.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Yet the majority of Kolkata business websites are outdated, slow, poorly structured for mobile, and not built around any conversion goal. A professionally designed, technically sound, conversion-focused website is still a clear competitive advantage in most Kolkata market categories because the bar set by existing local competitors remains low.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                    Businesses that invest in a properly built website now are not just improving their online presence. They are building the foundation that makes every other digital marketing investment, including SEO, paid ads, social media, and email, significantly more effective.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6 w-full">
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">94%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">First Impressions Online</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">are design-related. A poor website design causes visitors to distrust the business before they read a single word.</p>
                                    </div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">75%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Credibility Judged</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">of consumers admit to judging a business's credibility based on its website design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Services Grid Section */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
                    <div className="mx-auto w-full max-w-[1400px] relative z-10">
                        <div className="max-w-6xl mb-12 md:mb-16 md:mx-auto md:text-center">
                            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block text-left md:text-center leading-normal md:whitespace-nowrap">
                                Each part of our web design and development service is built to solve a specific gap in how your current website is performing for your business.
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 text-left md:text-center leading-[1.2]">
                                EEGNITE WEB DESIGN AND DEVELOPMENT <br className="hidden md:inline" />SERVICES FOR <span className="text-[#FF6105]">KOLKATA BUSINESSES</span>
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
                                [ⓘ&nbsp;&nbsp;Want to see exactly how our Web Design & Development process works step by step? Click here to&nbsp;
                                <Link href="/services/web-design-development/" className="text-[#FF6105] underline hover:text-[#C44800]">
                                    explore our full Web Design & Development Services
                                </Link>
                                &nbsp;page for a complete breakdown of our process, tools, and methodology.]
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Industries Section */}
                <IndustriesSection />



                {/* 9. Service Process */}
                <ServiceProcess
                    title={<>OUR CONVERSION BASED <span className="text-[#FF6105]">WEB PROCESS</span></>}
                    steps={processSteps}
                />

                {/* 10. Service Timeline */}
                <ServiceTimeline
                    title={<>DEVELOPMENT TIMELINE AND <span className="text-[#FF6105]">PROJECT MILESTONES</span></>}
                    steps={timelineSteps}
                    ctaTitle="Talk to Us"
                    ctaDescription="Get a free website performance analysis from our experts and see where your next growth wins are hiding"
                    ctaButtonText="Get Your Free Analysis"
                />

                {/* 11. Tools Section */}
                <ToolsSection 
                    title={
                        <>
                            TECHNOLOGY <span className="text-[#FF6105]">WE USE</span>
                        </>
                    } 
                />

                {/* 12. Why Choose Us */}
                <WhyChooseUs
                    title={<>WHY KOLKATA BUSINESSES CHOOSE <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="We would rather show you what a properly built website produces for a business than ask you to trust a portfolio of designs that may look impressive but have never had their conversion rate measured."
                    reasons={chooseReasons}
                    closingQuote="Your website is the destination for every SEO, PPC, social media, and email campaign. If it doesn't convert visitors, every marketing investment becomes less effective. Our job is to make sure it does."
                />

                {/* 13. Expectations Section */}
                <ExpectationSection />

                {/* 14. Testimonials */}
                <Testimonials />

                {/* 15. FAQ Section */}
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

                {/* 16. Growth CTA */}
                <GrowthCTA />

                {/* 17. Contact Form Section */}
                <section id="contact" className="py-16 md:py-24 bg-white border-t border-black/5">
                    <Contact />
                </section>
            </div>
            
            <Footer />
        </main>
    );
}
