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
        { title: "E-commerce", desc: "SEO strategies that drive product visibility and sales in Kolkata.", href: "/industries/e-commerce" },
        { title: "B2B & Lead Generation", desc: "Search visibility that attracts qualified corporate leads.", href: "/industries/b2b-lead-generation" },
        { title: "Medical & Healthcare", desc: "Trust-focused SEO that increases clinic and hospital appointments.", href: "/industries/medical-healthcare" },
        { title: "Retail Businesses", desc: "Local SEO map pack optimization that boosts store footfall.", href: "/industries/retail-business" },
        { title: "Manufacturing & Logistics", desc: "B2B industry search visibility that generates global enquiries.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "Authority-driven local SEO that attracts premium business clients.", href: "/industries/professional-services" },
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
                            Our social media strategies are tailored to the buyer journey, content preferences, and competitive environment of each industry we serve.
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
        { title: "Consistent Brand Presence", desc: "A structured content calendar ensures your brand stays active, visible, and professional across every platform without gaps or reactive posting." },
        { title: "Increased Audience Engagement", desc: "Content built around your audience's interests and buying triggers drives genuine engagement from people who are actually potential customers." },
        { title: "Qualified Leads From Social Channels", desc: "Paid social campaigns built around conversion objectives generate enquiries and bookings directly attributable to your social media investment." },
        { title: "Stronger Brand Recognition in Kolkata", desc: "Consistent posting and community management build brand recall, so your business is the one Kolkata buyers think of first in your category." },
        { title: "Measurable ROI Across Paid and Organic", desc: "Monthly reports connect your social media activity to real business outcomes, so you always know what your investment is producing." }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-8 md:mb-12">
                        WHAT YOU CAN EXPECT FROM EEGNITE'S <br className="hidden md:inline" /><span className="text-[#FF6105]">SOCIAL MEDIA MARKETING SERVICES</span>
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
                            READY TO SCALE YOUR <br className="hidden md:inline" />SOCIAL MEDIA PRESENCE IN KOLKATA?
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Book a free strategy call with EEGNITE and discover what is holding your social media back, where your greatest audience and growth opportunities exist in Kolkata, and what it will take to turn your social channels into a consistent source of enquiries, customers, and brand authority.
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
                Social Media Marketing for Kolkata Brands
            </div>
        </section>
    );
}

const faqs = [
    { q: "How much do social media marketing services cost in Kolkata?", a: "Our social media marketing services in Kolkata start from INR 25,000 per month for a focused content management engagement. The final investment depends on the number of platforms, content volume, paid social budget, and level of community management required. EEGNITE recommends a scope and investment after an initial audit of your current presence and growth goals." },
    { q: "Which social media platforms should my Kolkata business focus on?", a: "Platform selection depends on your industry and target audience. Retail, food and beverage, and lifestyle brands in Kolkata typically see strong results on Instagram and Facebook. B2B brands and professional services firms perform better on LinkedIn. EEGNITE evaluates platform fit based on where your specific audience spends time and where your competitors are or are not present." },
    { q: "How often should my Kolkata business post on social media?", a: "Consistency matters more than frequency. Most Kolkata businesses see strong engagement and audience growth, posting 3 to 5 times per week on key platforms, supported by daily stories and regular community engagement. EEGNITE builds a posting frequency into your content calendar that is sustainable, strategic, and aligned to the behaviour patterns of your specific audience." },
    { q: "Can social media marketing actually generate leads and sales for my business?", a: "Yes, when the right strategy is in place. Organic social builds brand trust and awareness. Paid social campaigns on Meta, built around conversion objectives with proper pixel tracking and targeted landing pages, generate direct enquiries, bookings, and sales that are fully attributable to your social media investment. EEGNITE builds both working together as one system." },
    { q: "What is the difference between EEGNITE and a freelance social media manager?", a: "A freelance social media manager typically handles content posting. EEGNITE provides a full social media marketing system, including audience strategy, content pillar development, monthly calendars, content creation, paid social campaign management, community management, and performance reporting. Everything is managed by a dedicated team and integrated with your wider SEO and PPC strategy, not isolated from the rest of your marketing." }
];

export default function KolkataSmmPageContent() {
    // 4-item list mapped exactly from the Google Doc SMM problems
    const kolkataProblems = [
        {
            icon: CustomXIcon as any,
            title: "No Strategy Connecting Content to Business Goals",
            desc: "Content is created and published reactively rather than around a defined audience, content pillars, or business objective. Without that foundation, posting becomes an activity rather than marketing."
        },
        {
            icon: CustomXIcon as any,
            title: "Engagement That Looks Good but Drives Nothing",
            desc: "Likes, comments, and follower growth feel like progress but have no connection to enquiries, appointments, or sales. Without a conversion architecture behind your content, social media stays at the surface level."
        },
        {
            icon: CustomXIcon as any,
            title: "Paid Social Campaigns Without Proper Targeting or Attribution",
            desc: "Meta ads are launched without defined audiences, proper pixel tracking, or campaign objectives aligned to business goals. Budget is spent on reach and impressions with no line back to customer acquisition."
        },
        {
            icon: CustomXIcon as any,
            title: "Social Media Operating in Isolation From the Rest of Marketing",
            desc: "Your social content, SEO strategy, paid ads, and email campaigns carry different messaging and are managed by different people. The result is a fragmented brand experience that fails to compound across channels."
        }
    ];

    // 4-item list mapped exactly from the Google Doc SMM fixes
    const kolkataSolutions = [
        {
            icon: CustomCheckIcon as any,
            title: "Audience-Led Content Strategy and Monthly Calendars",
            desc: "We define your audience segments, map content pillars to your business goals, and build a structured monthly content calendar. Every post serves a purpose: building awareness, establishing authority, or driving a specific conversion action."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Conversion-Focused Content Creation and Publishing",
            desc: "We create branded posts, reels, carousels, and stories that communicate your value clearly and consistently. Every piece of content is reviewed, approved, and published on schedule so your social presence never goes quiet."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Performance-Tracked Paid Social Campaigns",
            desc: "Meta Pixel, campaign objectives, and conversion events are set up before a single rupee is spent on paid social. Campaigns are built around audience targeting, offer alignment, and measurable outcomes, not just reach."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Social Integrated Into Your Full Digital Strategy",
            desc: "Social content reinforces the messaging of your SEO, Google Ads, and email campaigns. One brand voice, one direction, across every channel your Kolkata audience encounters you on."
        }
    ];

    // Services cards lists
    const services = [
        {
            title: "CONTENT STRATEGY AND MONTHLY CALENDARS",
            icon: SearchIcon,
            description: "We build defined content pillars, monthly publishing calendars, and platform-specific formats aligned to your audience and business goals. Every piece of content is planned in advance, with clear intent behind every post."
        },
        {
            title: "CONTENT CREATION AND PUBLISHING",
            icon: ZapIcon,
            description: "Branded posts, reels, carousels, and stories created consistently and published on schedule across Instagram, Facebook, and LinkedIn. Your social presence stays active, professional, and aligned to your brand at all times."
        },
        {
            title: "PAID SOCIAL CAMPAIGNS (META AND INSTAGRAM)",
            icon: CpuIcon,
            description: "Audience-targeted paid campaigns across Facebook and Instagram are built for awareness, retargeting, and direct conversion. Every campaign is tied to a clear objective, with conversion tracking and weekly optimisation built in from day one."
        },
        {
            title: "COMMUNITY MANAGEMENT AND ENGAGEMENT",
            icon: MapIcon,
            description: "Comments, direct messages, and audience interactions are managed promptly and professionally. Consistent community management builds trust, signals responsiveness, and protects your brand reputation across platforms."
        },
        {
            title: "SOCIAL MEDIA ANALYTICS AND REPORTING",
            icon: LinkIcon,
            description: "Monthly performance reports covering reach, engagement quality, follower growth, and most importantly, enquiries and conversions attributed to social activity. Clear data. Plain language. Actionable next steps every month."
        }
    ];

    // Placeholder or alignment parameters for the steps (following design symmetry)
    const processSteps = [
        { id: "01", title: "AUDIENCE & COMPETITOR AUDIT", desc: "A deep audit of your current social media footprint, visual layouts, and competitive metrics across key segments.", icon: CpuIcon as any },
        { id: "02", title: "CONTENT PILLARS & CALENDAR SETUP", desc: "Establishing weekly content pillars and custom visual directions mapped to monthly calendar targets.", icon: SearchIcon as any },
        { id: "03", title: "CREATIVE & VIDEO PRODUCTION", desc: "Designing carousel graphics and editing short vertical reels tailored to local viewer trends.", icon: ZapIcon as any },
        { id: "04", title: "PUBLISHING & PERFORMANCE TUNING", desc: "Running scheduled posting loops alongside conversion-tracked paid campaigns with weekly analytics checks.", icon: LinkIcon as any }
    ];

    const timelineSteps = [
        { t: "STAGE 1: AUDIT & STRATEGY DIRECTION", d: "Weeks 1–2: Competitor positioning maps, content layout style sheets, platform-specific visual guidelines, and setup of tracking pixels." },
        { t: "STAGE 2: CREATIVE COLLATERALS & LAUNCH", d: "Weeks 3–4: Preparing the first month's visual assets, writing captions, scheduling monthly posts, and setting up initial ad target filters." },
        { t: "STAGE 3: OPTIMISE & AUDIENCE BUILD", d: "Weeks 5+: Weekly engagement reports review, creative split-testing on ads, negative keywords biddings, and budget reallocation loops." }
    ];

    const chooseReasons = [
        { id: "01", title: "8 Years of Excellence", desc: "Helping Kolkata businesses grow their social presence, brand authority, and audience engagement for over eight years." },
        { id: "02", title: "95% Client Retention", desc: "Clients stay because our strategies consistently deliver measurable growth and long-term results." },
        { id: "03", title: "100% Dedicated to Success", desc: "We build lasting partnerships focused on business growth, not just content posting." }
    ];

    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                
                {/* 1. Hero */}
                <ServiceHero
                    badgeText="ROI-Focused SMM"
                    title={<>SOCIAL MEDIA MARKETING SERVICES IN KOLKATA <br className="hidden md:inline" />BUILT TO GROW YOUR BRAND <br className="hidden md:inline" />AND GENERATE REAL ENQUIRIES</>}
                    titleClassName="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl max-w-5xl"
                    subtitle="Build a Social Presence That Turns Scrollers Into Customers"
                    subtitleClassName="text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-[#FF6105] max-w-3xl"
                    description={
                        <>
                            EEGNITE manages social media marketing for businesses in Kolkata across Instagram, Facebook, and LinkedIn. Every content strategy, paid campaign, and community management effort is built around one outcome: converting your social audience into real enquiries and paying customers for your business.
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
                                SIGNS YOUR KOLKATA BUSINESS <span className="text-[#FF6105]">NEEDS PROFESSIONAL SOCIAL MEDIA MANAGEMENT</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl font-medium">
                                If Any Of These Sound Familiar, Your Social Media Presence Needs A Strategy.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "You post regularly but receive no enquiries, calls, or booking requests.",
                                "Competitors in Kolkata have a more consistent social presence than you.",
                                "Your content looks generic and could belong to any brand in any city.",
                                "Social media is completely disconnected from your SEO, ads, and email marketing.",
                                "You run paid ads on Meta with no clear attribution, ROI tracking, or conversion data.",
                                "Your social pages go quiet for weeks whenever your team gets busy with other work."
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
                    problemsTitle="THE REAL CAUSE BEHIND YOUR KOLKATA SOCIAL MEDIA MARKETING PROBLEM"
                    problemsSubtitle="Inconsistent social media results rarely come from a lack of effort. They come from a missing strategy."
                    solutionsTitle="HOW EEGNITE FIXES IT"
                    solutionsSubtitle="Every fix is tied to content consistency, audience growth, and measurable enquiry outcomes."
                    problems={kolkataProblems}
                    solutions={kolkataSolutions}
                />

                {/* 5. Opportunity Section */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight max-w-xl">
                                    THE SOCIAL MEDIA OPPORTUNITY IN KOLKATA <br className="hidden md:inline" /><span className="text-[#FF6105]">RIGHT NOW</span>
                                </h2>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Kolkata's social media audience is growing faster than the number of businesses using it strategically. That gap is a significant opportunity for brands that move now.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Instagram and Facebook penetration across Kolkata's key commercial areas. Consumers in Kolkata are increasingly discovering and evaluating local businesses through social content before making contact. Yet most business accounts post inconsistently, without a strategy, and without paid amplification.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                    A well-managed, consistently active social presence stands out immediately in a market where most competitors are posting sporadically and without intent.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6 w-full">
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">95%+</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Active on Social</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">of Kolkata's online population is active on social media platforms.</p>
                                    </div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">23%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Higher Revenue</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">is generated by brands with a consistent and active social media presence.</p>
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
                                Each part of our social media service is built to solve a specific gap in your current brand presence and audience engagement.
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 text-left md:text-center leading-[1.2]">
                                EEGNITE SOCIAL MEDIA MARKETING SERVICES FOR <br className="hidden md:inline" />
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
                                [ⓘ&nbsp;&nbsp;Want to see exactly how our Social Media Marketing process works step by step? Click here to&nbsp;
                                <Link href="/services/social-media-marketing/" className="text-[#FF6105] underline hover:text-[#C44800]">
                                    explore our full Social Media Marketing Services
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
                    title={<>OUR GROWTH BASED <span className="text-[#FF6105]">SMM PROCESS</span></>}
                    steps={processSteps}
                />

                {/* 9. Service Timeline */}
                <ServiceTimeline
                    title={<>SMM TIMELINE AND <span className="text-[#FF6105]">PERFORMANCE MILESTONES</span></>}
                    steps={timelineSteps}
                    ctaTitle="Talk to Us"
                    ctaDescription="Get a free social media analysis from our experts and see where your next growth wins are hiding"
                    ctaButtonText="Get Your Free Analysis"
                />

                {/* 10. Tools Section */}
                <ToolsSection />

                {/* 11. Why Choose Us */}
                <WhyChooseUs
                    title={<>WHY KOLKATA BUSINESSES CHOOSE <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="We would rather show you what consistent social media management actually produces than ask you to take the pitch on faith."
                    reasons={chooseReasons}
                    closingQuote="Social media is where customers discover, evaluate, and trust brands. We help ensure your business stands out, builds credibility, and turns attention into customers, driving measurable growth and lasting loyalty."
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
