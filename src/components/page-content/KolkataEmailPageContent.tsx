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
        { title: "E-commerce", desc: "Retention campaigns and cart recovery automation that boost repeat purchases.", href: "/industries/e-commerce" },
        { title: "B2B & Lead Generation", desc: "Structured lead nurture flows that convert initial enquiries into bookings.", href: "/industries/b2b-lead-generation" },
        { title: "Medical & Healthcare", desc: "Nurturing newsletters that keep patients connected and clinics fully booked.", href: "/industries/medical-healthcare" },
        { title: "Retail Businesses", desc: "Local database newsletters that announce geotargeted offline store offers.", href: "/industries/retail-business" },
        { title: "Manufacturing & Logistics", desc: "Long-cycle nurture tracking systems that educate global buyers.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "Authority-building newsletters that establish premium client trust.", href: "/industries/professional-services" },
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
                            Our email marketing strategies are tailored to the customer journey, buying cycle, and retention dynamics of each industry we serve.
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
        { title: "Higher Lead Conversion Rates", desc: "Automated nurture sequences move cold leads through your funnel consistently, converting more of the subscribers you already have into enquiries and paying customers." },
        { title: "Increased Customer Retention", desc: "Post-purchase flows, loyalty campaigns, and win-back sequences keep existing customers engaged and returning, reducing churn and increasing customer lifetime value." },
        { title: "Automated Revenue Generation", desc: "Email flows work around the clock without manual effort from your team. Welcome sequences, abandonment campaigns, and re-engagement flows generate revenue continuously once they are live." },
        { title: "Stronger Customer Relationships", desc: "Consistent, relevant communication builds trust and familiarity with your audience over time, making your brand the natural first choice when they are ready to buy." },
        { title: "Clear ROI on Every Campaign", desc: "Full attribution tracking connects every email to the enquiries, bookings, and revenue it generated. You always know exactly what your email marketing investment is returning." }
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-8 md:mb-12">
                        WHAT YOU CAN EXPECT FROM EEGNITE'S <br className="hidden md:inline" /><span className="text-[#FF6105]">EMAIL MARKETING SERVICES</span>
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
                            READY TO TURN YOUR EMAIL LIST INTO A <br className="hidden md:inline" />CONSISTENT REVENUE CHANNEL IN KOLKATA?
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Book a free strategy call with EEGNITE and discover what is holding your email marketing back, where your greatest revenue opportunities exist within your current subscriber list, and what it will take to build an automated email system that generates measurable income for your Kolkata business month after month.
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
                Email Marketing for Kolkata Brands
            </div>
        </section>
    );
}

const faqs = [
    { q: "How much do email marketing services cost in Kolkata?", a: "Our email marketing services in Kolkata start from INR 25,000 per month for a managed email engagement covering strategy, campaign planning, content creation, and performance reporting. The investment varies based on the level of automation required, number of campaigns per month, and CRM integration complexity." },
    { q: "Which email marketing platforms does EEGNITE work with?", a: "We work with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, ConvertKit, and other leading platforms. We can manage your existing platform or recommend the best option based on your business goals" },
    { q: "How long does email marketing take to show results?", a: "Promotional campaigns can generate engagement within 24-48 hours. Automation flows often start producing results immediately after launch, while list growth and optimisation efforts typically show stronger impact within 4-8 weeks." },
    { q: "Can email marketing work for a small business in Kolkata?", a: "Absolutely. Email marketing is one of the most cost-effective channels for small and medium-sized businesses, helping generate repeat sales, improve customer retention, and maximise the value of existing leads." },
    { q: "What is the difference between email marketing and marketing automation?", a: "Email marketing includes newsletters, promotions, and regular customer communications. Marketing automation uses trigger-based workflows that send emails automatically based on user actions. Together, they create a scalable system for engagement and revenue growth." }
];

export default function KolkataEmailPageContent() {
    // 4-item list mapped exactly from the Google Doc SMM problems
    const kolkataProblems = [
        {
            icon: CustomXIcon as any,
            title: "No Strategy Behind Your Email Communication",
            desc: "Emails go out when someone has time to write them, not because there is a system determining who receives what message, at what stage of their journey, and with what goal in mind. Without a strategy, every send is a missed opportunity."
        },
        {
            icon: CustomXIcon as any,
            title: "Generic Campaigns That Miss the Mark for Your Audience",
            desc: "The same email sent to your entire list regardless of behaviour, interest, or stage in the customer journey. Batch-and-blast email erodes your sender reputation, increases unsubscribes, and produces open rates that make the channel feel pointless."
        },
        {
            icon: CustomXIcon as any,
            title: "No Automation or Lead Nurture Infrastructure in Place",
            desc: "Leads captured through ads, forms, or events enter a database and receive nothing further. Without automated welcome sequences, nurture flows, and re-engagement campaigns, warm leads go cold within days of entering your funnel."
        },
        {
            icon: CustomXIcon as any,
            title: "Zero Attribution Connecting Email Activity to Revenue",
            desc: "Emails are sent and open rates are celebrated, but there is no tracking connecting email clicks to actual enquiries, bookings, or purchases. Without attribution, you cannot know which campaigns are working or how to improve the ones that are not."
        }
    ];

    // 4-item list mapped exactly from the Google Doc SMM fixes
    const kolkataSolutions = [
        {
            icon: CustomCheckIcon as any,
            title: "Audience Segmentation and Full Email Strategy",
            desc: "We segment your list by behaviour, source, and stage in the buyer journey, then build a complete email strategy mapping the right message to each segment. Every email serves a defined purpose in moving subscribers closer to a conversion."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Behaviour-Based Automation and Lead Nurture Sequences",
            desc: "Welcome sequences, cart abandonment flows, post-purchase series, and re-engagement campaigns are built and activated to work automatically. The right message reaches the right subscriber at exactly the right moment, without manual effort."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Revenue-Focused Campaign Planning and Execution",
            desc: "Promotional campaigns, newsletters, and product launches are planned in advance against your business calendar. Every campaign is written, designed, tested, and reviewed before it goes live, with a clear conversion goal behind each send."
        },
        {
            icon: CustomCheckIcon as any,
            title: "Full Attribution Connecting Email to Business Outcomes",
            desc: "We connect your email platform to Google Analytics, your CRM, and your ad accounts through UTM tracking and conversion events. Monthly reports show exactly which campaigns generated enquiries, booked appointments, or closed sales."
        }
    ];

    // Services cards lists
    const services = [
        {
            title: "EMAIL STRATEGY AND CAMPAIGN PLANNING",
            icon: SearchIcon,
            description: "We build a complete email strategy covering audience segments, campaign types, send frequency, and funnel mapping. Every send is planned in advance against your business objectives so email becomes a strategic channel, not a reactive one."
        },
        {
            title: "MARKETING AUTOMATION AND LEAD NURTURE SEQUENCES",
            icon: ZapIcon,
            description: "Welcome flows, lead nurture sequences, cart abandonment emails, and re-engagement campaigns are built and activated to run automatically. Leads are moved through your funnel with the right message at the right time, without manual effort from your team."
        },
        {
            title: "LIST BUILDING, SEGMENTATION AND HYGIENE",
            icon: CpuIcon,
            description: "We build lead capture strategies to grow a quality subscriber list, segment your audience by behaviour and stage, and run regular list hygiene to remove inactive contacts. A clean, well-segmented list improves deliverability, open rates, and every campaign that follows."
        },
        {
            title: "NEWSLETTER AND PROMOTIONAL CAMPAIGN MANAGEMENT",
            icon: MapIcon,
            description: "Consistent, on-brand newsletters and promotional campaigns written, designed, tested, and published on schedule. Every campaign reviewed and approved before it reaches your subscribers, with subject line testing and content optimisation built into the process."
        },
        {
            title: "EMAIL ANALYTICS AND PERFORMANCE REPORTING",
            icon: LinkIcon,
            description: "Monthly reports covering open rate, click-through rate, conversion rate, revenue per campaign, and list health metrics. Every number connected to a business outcome so you always know what your email investment is actually producing."
        }
    ];

    // Placeholder or alignment parameters for the steps (following design symmetry)
    const processSteps = [
        { id: "01", title: "EMAIL AUDIT & CRM SETUP", desc: "Auditing list health, deliverability status, and configuring CRM software links to connect acquisition tracks.", icon: CpuIcon as any },
        { id: "02", title: "LIST SEGMENTATION & CAMPAIGN PLAN", desc: "Setting up behavioral tags, category parameters, and mapping a 3-month promotional campaign grid.", icon: SearchIcon as any },
        { id: "03", title: "AUTOMATION FLOW BUILD & DESIGN", desc: "Writing direct welcome emails, cart capture triggers, and designing matching brand newsletter layouts.", icon: ZapIcon as any },
        { id: "04", title: "SEND LOGS & CONVERSION TRACKS", desc: "Ongoing sequence sends, subject-line testing runs, and compiling conversion reports connecting metrics to pipeline sales.", icon: LinkIcon as any }
    ];

    const timelineSteps = [
        { t: "STAGE 1: STRATEGY & SEGMENT MAPS", d: "Weeks 1–2: Complete account audit, list cleaning, platform migrations, tracking code setup, and design template builds." },
        { t: "STAGE 2: AUTOMATION FLOWS LAUNCH", d: "Weeks 3–4: Copywriting and setup of core automation triggers (welcome sequence, cart abandonment, and nurture blocks)." },
        { t: "STAGE 3: TUNING & NEWSLETTERS", d: "Weeks 5+: Weekly campaign planning, A/B testing subject headers, behavioral tagging, and attribution reports compile." }
    ];

    const chooseReasons = [
        { id: "01", title: "8 Years of Excellence", desc: "For over eight years, we have helped Kolkata businesses turn email subscribers into consistent revenue through strategic campaigns and automation." },
        { id: "02", title: "95% Client Retention", desc: "Clients stay because our systems continue generating value through higher engagement, retention, and repeat sales." },
        { id: "03", title: "100% Dedicated to Success", desc: "Every account is managed as a long-term growth partnership with ongoing optimisation and transparent reporting." }
    ];

    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                
                {/* 1. Hero */}
                <ServiceHero
                    badgeText="4,200% Average ROI Delivered by Email Marketing"
                    title={<>EMAIL MARKETING SERVICES IN KOLKATA <br className="hidden md:inline" />THAT NURTURE LEADS AND DRIVE CONSISTENT REVENUE</>}
                    titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl max-w-5xl"
                    subtitle="Turn Your Email List Into Your Most Profitable Sales Channel"
                    subtitleClassName="text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-[#FF6105] max-w-3xl"
                    description={
                        <>
                            EEGNITE delivers email marketing services for Kolkata businesses built around one outcome: converting your subscriber list into measurable revenue. From automated lead nurture sequences and campaign strategy to CRM integration and retention flows, we manage every part of your email marketing so your pipeline grows while you focus on running your business.
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
                                SIGNS YOUR KOLKATA BUSINESS <span className="text-[#FF6105]">NEEDS PROFESSIONAL EMAIL MARKETING RIGHT NOW</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl font-medium">
                                If Any Of These Sound Familiar, Your Email Channel Is Not Working As Hard As It Should.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "Email campaigns are sent inconsistently without a clear strategy.",
                                "Your email open rates keep declining month after month.",
                                "Customer retention depends entirely on repeat purchases happening naturally.",
                                "Leads go cold because follow-up automation is missing.",
                                "Campaigns generate little to no trackable enquiries or revenue.",
                                "Your marketing tools remain disconnected from your CRM and other channels."
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
                    problemsTitle="THE REAL CAUSE BEHIND YOUR KOLKATA BUSINESS EMAIL MARKETING PROBLEM"
                    problemsSubtitle="Most email marketing problems are not about the platform or the size of the list. They are about the absence of strategy and infrastructure."
                    solutionsTitle="HOW EEGNITE FIXES IT"
                    solutionsSubtitle="Every fix is tied to open rates, conversion rates, and revenue outcomes, not vanity metrics."
                    problems={kolkataProblems}
                    solutions={kolkataSolutions}
                />

                {/* 5. Opportunity Section */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight max-w-xl">
                                    THE EMAIL MARKETING OPPORTUNITY IN KOLKATA <br className="hidden md:inline" /><span className="text-[#FF6105]">RIGHT NOW</span>
                                </h2>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    Email remains the highest-ROI channel in digital marketing globally, yet it is consistently the most underinvested channel for businesses in Kolkata.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed mb-4">
                                    For Kolkata businesses in retail, healthcare, professional services, and B2B sectors, email is the most direct line to existing customers, warm leads, and past enquiries who already know the brand. A properly structured email system turns that existing audience into a consistent, recurring revenue channel without any additional acquisition spend.
                                </p>
                                <p className="text-black/50 text-base md:text-xl leading-relaxed">
                                    The businesses in Kolkata building automated email infrastructure now are creating compounding revenue advantages that become harder for competitors to replicate with every passing month.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6 w-full">
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">4200%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Average ROI</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">delivered by email marketing, generating INR 42 in revenue for every INR 1 invested.</p>
                                    </div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between h-56 md:h-64 hover:scale-[1.03] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(232,106,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6105]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#FF6105] tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(255,97,5,0.1)]">81%</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-1.5">Primary Acquisition Channel</h4>
                                        <p className="text-black/50 text-xs md:text-sm leading-relaxed">of small and medium-sized businesses report email marketing as their primary customer acquisition channel.</p>
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
                                Each part of our email marketing service is built to solve a specific gap in how your current email channel is performing.
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 text-left md:text-center leading-[1.2]">
                                EEGNITE EMAIL MARKETING SERVICES FOR <br className="hidden md:inline" />
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
                                [ⓘ&nbsp;&nbsp;Want to see exactly how our Email Marketing process works step by step? Click here to&nbsp;
                                <Link href="/services/email-marketing/" className="text-[#FF6105] underline hover:text-[#C44800]">
                                    explore our full Email Marketing Services
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
                    title={<>OUR GROWTH BASED <span className="text-[#FF6105]">EMAIL PROCESS</span></>}
                    steps={processSteps}
                />

                {/* 9. Service Timeline */}
                <ServiceTimeline
                    title={<>EMAIL TIMELINE AND <span className="text-[#FF6105]">PERFORMANCE MILESTONES</span></>}
                    steps={timelineSteps}
                    ctaTitle="Talk to Us"
                    ctaDescription="Get a free email campaign analysis from our experts and see where your next growth wins are hiding"
                    ctaButtonText="Get Your Free Analysis"
                />

                {/* 10. Tools Section */}
                <ToolsSection />

                {/* 11. Why Choose Us */}
                <WhyChooseUs
                    title={<>WHY KOLKATA BUSINESSES CHOOSE <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="We would rather show you what a properly built email system produces than ask you to trust a pitch about potential."
                    reasons={chooseReasons}
                    closingQuote="Email is the only marketing channel you truly own. Unlike ads or social media, your subscriber list isn't controlled by algorithms or rising advertising costs. For businesses focused on sustainable growth, email remains one of the highest-ROI marketing investments available."
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
