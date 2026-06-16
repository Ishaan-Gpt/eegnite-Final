"use client";

import Navbar from "@/components/Navbar";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";
import { ClientLogoSlider } from "@/components/shared/ClientLogoSlider";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import Services from "@/components/Services";
import { ToolsSection } from "@/components/shared/ToolsSection";
import IndustriesGrid from "@/components/IndustriesGrid";
import Results from "@/components/Results";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GrowthCTA from "@/components/GrowthCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { XCircle, CheckCircle2 } from "lucide-react";
import * as React from "react";

const absoluteIcons = [
    { id: 1, src: '/icons/meta.png', alt: 'Meta Ads', className: 'top-[8%] right-[5%]' },
    { id: 2, src: '/icons/google.png', alt: 'Google', className: 'top-[12%] left-[8%]' },
    { id: 3, src: '/icons/google-analytics.png', alt: 'Google Analytics', className: 'top-[45%] left-[3%]' },
    { id: 4, src: '/icons/hubspot.png', alt: 'HubSpot', className: 'top-[50%] right-[5%]' },
    { id: 5, src: '/icons/gtm.png', alt: 'Google Tag Manager', className: 'bottom-[15%] left-[10%]' },
    { id: 6, src: '/icons/semrush.png', alt: 'SEMrush', className: 'bottom-[12%] right-[8%]' },
    { id: 7, src: '/icons/klaviyo.png', alt: 'Klaviyo', className: 'top-[5%] left-[35%] hidden md:block' },
    { id: 8, src: '/icons/google-ads.png', alt: 'Google Ads', className: 'top-[20%] right-[20%] hidden md:block' },
    { id: 9, src: '/icons/figma.png', alt: 'Figma', className: 'top-[25%] left-[15%] hidden md:block' },
    { id: 10, src: '/icons/excel.png', alt: 'Excel', className: 'top-[40%] right-[15%] hidden md:block' },
    { id: 11, src: '/icons/wordpress.png', alt: 'WordPress', className: 'top-[70%] left-[20%] hidden md:block' },
    { id: 12, src: '/icons/powerbi.png', alt: 'Power BI', className: 'top-[65%] right-[25%] hidden md:block' },
    { id: 13, src: '/icons/woocommerce.png', alt: 'WooCommerce', className: 'bottom-[10%] left-[35%] hidden md:block' },
    { id: 14, src: '/icons/linkedin.png', alt: 'LinkedIn', className: 'top-[35%] left-[5%] hidden md:block' },
    { id: 15, src: '/icons/windy.png', alt: 'Windy', className: 'top-[30%] right-[8%] hidden md:block' },
];

const kolkataProblems = [
    {
        icon: XCircle,
        title: "A Saturated Agency Market With No Accountability",
        desc: "Kolkata is packed with agencies selling low-cost packages. Most disappear after the invoice. No attribution, no strategy, no results. Just another renewal cycle your business cannot afford."
    },
    {
        icon: XCircle,
        title: "Package Thinking Instead of Strategy Thinking",
        desc: "When an agency sells you a package, they are building their process, not yours. Kolkata businesses with real growth targets need custom strategies, not off-the-shelf monthly bundles designed for volume."
    },
    {
        icon: XCircle,
        title: "Spending on Digital Without Knowing the Return",
        desc: "The budget goes into ads, social media, and SEO. But when you ask what revenue it generated, nobody can answer. Performance marketing without attribution is expensive guesswork."
    },
    {
        icon: XCircle,
        title: "Local Reputation That Does Not Travel Online",
        desc: "Your business is respected in your locality. But when a buyer in New Town, Howrah, or Durgapur searches online, you are invisible. Local reputation does not translate to digital visibility by default."
    },
    {
        icon: XCircle,
        title: "Disconnected Channels Managed by Different Vendors",
        desc: "One agency for SEO. Another for ads. A freelancer for social media. Three different strategies, three different reports, and zero integration. Growth needs a system, not a roster of vendors."
    }
];

const kolkataSolutions = [
    {
        icon: CheckCircle2,
        title: "We Build Revenue-Tied Strategies, Not Packages",
        desc: "Every engagement starts with your revenue goal, your market position, and your competition in Kolkata. Strategy drives execution. Every channel is justified by the business outcome it produces."
    },
    {
        icon: CheckCircle2,
        title: "We Attribute Every Rupee to a Business Result",
        desc: "Full tracking infrastructure from first click to converted customer. You know exactly which channel, which campaign, and which content is generating your revenue in Kolkata."
    },
    {
        icon: CheckCircle2,
        title: "We Are Transparent About Everything",
        desc: "What we do, why we do it, and what it costs. Fortnightly updates, monthly performance reports, and a team that treats your investment with the same seriousness they apply to their own."
    },
    {
        icon: CheckCircle2,
        title: "We Build Your Digital Presence City-Wide and Nationally",
        desc: "We expand your visibility beyond your locality to reach buyers across Kolkata, Bengal, and nationally when your growth ambition demands it."
    },
    {
        icon: CheckCircle2,
        title: "One Team. One Strategy. Every Channel",
        desc: "SEO, PPC, social media, email, and your website managed as one integrated performance marketing system. No agency-hopping. No misaligned vendors. One direction."
    }
];

const customServicesDescriptions = {
    "01": "We help Kolkata businesses rank higher on Google for the searches their customers are already making. From local SEO and technical optimisation to keyword strategy and content marketing, every SEO campaign is built to drive qualified traffic and real business enquiries.",
    "02": "Social media strategies that help Kolkata brands build visibility, engagement, and customer trust. From Instagram and Facebook to LinkedIn marketing, we create content and campaigns that turn attention into conversions.",
    "03": "Google Ads campaigns designed to generate leads and sales for Kolkata businesses. Search, Display, Shopping, and remarketing campaigns are continuously tested and optimised to reduce cost per conversion and maximise ROI.",
    "04": "High-converting websites built for Kolkata businesses that want more than just design. Fast-loading, mobile-first, and conversion-focused websites that turn visitors into enquiries, leads, and customers.",
    "05": "Automated email campaigns that help Kolkata businesses nurture leads, retain customers, and increase repeat sales. From promotional campaigns to customer retention flows, every sequence is built for long-term growth."
};

const customIndustriesDescriptions = {
    "E-commerce": "Product discovery campaigns, catalog ads, remarketing, and conversion-focused strategies for e-commerce brands in Kolkata looking to scale online sales and repeat purchases.",
    "B2B & Lead Generation": "Pipeline-focused targeting campaigns for B2B companies in Kolkata aiming to connect with founders, CXOs, procurement teams, and high-intent decision-makers.",
    "Medical & Healthcare": "SEO, paid advertising, and reputation-building strategies for healthcare businesses in Kolkata focused on patient trust, local visibility, and appointment bookings.",
    "Retail Business": "Omnichannel marketing solutions for retail businesses in Kolkata designed to increase footfall, strengthen customer engagement, and drive online and offline sales together.",
    "Manufacturing & Logistics": "Industrial lead generation campaigns for manufacturing and logistics companies in Kolkata using SEO, LinkedIn marketing, and performance-driven digital channels.",
    "Professional Services": "Authority-led digital marketing for consultants, law firms, agencies, CA firms, and other professional service providers in Kolkata looking to acquire premium clients online."
};

const resultsTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        RESULTS WE HAVE DELIVERED <br />
        <span className="text-[#FF6105]">FOR KOLKATA BUSINESSES</span>
        <span className="block text-sm md:text-lg text-black/50 font-medium tracking-wide mt-4 lowercase md:uppercase normal-case">
            Real businesses. Real campaigns. Real numbers from Kolkata clients.
        </span>
    </h2>
);

const kolkataFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Kolkata?",
        answer: "EEGNITE offers 360 degree digital marketing in Kolkata including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed by one dedicated team under one integrated strategy - so every channel works together. We serve businesses across Kolkata from our base in the city.",
        category: "Services"
    },
    {
        question: "Why Should I Choose EEGNITE Over Other Digital Marketing Agencies In Kolkata?",
        answer: "Most digital marketing agencies in Kolkata sell packages and send monthly reports full of metrics that do not connect to your revenue. EEGNITE builds integrated revenue-tied strategies, holds itself accountable to real business outcomes, and operates with complete transparency on budget and performance. We have deep experience in the Kolkata market across retail, B2B, healthcare, and professional services.",
        category: "EEGNITE"
    },
    {
        question: "How Long Before I See Results From Digital Marketing In Kolkata?",
        answer: "Google Ads and Meta campaigns begin generating leads within 7 to 14 days of launch. SEO in Kolkata's competitive market builds meaningful organic traffic within 3 to 5 months. Email automation flows produce results from the week they go live. EEGNITE sets channel-specific timelines at the start of every engagement so your expectations are grounded from day one.",
        category: "Timeline"
    },
    {
        question: "Does EEGNITE Work With Businesses Outside Kolkata As Well?",
        answer: "Yes. EEGNITE is based in Kolkata and manages digital marketing campaigns for clients across India including Mumbai, Delhi, Bangalore, and Hyderabad, as well as internationally across the United States, Europe, and the Middle East. Our Kolkata base gives us deep local market expertise while our team structure allows us to manage campaigns effectively in any market.",
        category: "Global"
    },
    {
        question: "What Industries Does EEGNITE Serve In Kolkata?",
        answer: "EEGNITE serves e-commerce, B2B and lead generation, medical and healthcare, retail, manufacturing and logistics, and professional services including law firms, financial advisors, and management consultants. We have built campaigns for Kolkata businesses ranging from single-location retailers to multi-market B2B manufacturers. If your business needs digital marketing, we have experience in your sector.",
        category: "Industries"
    },
    {
        question: "How Does EEGNITE Measure And Report Results?",
        answer: "We build full attribution tracking before any campaign launches - connecting ad platforms, your website analytics, and CRM through conversion events and UTM parameters. Fortnightly updates keep you informed on active performance. Monthly reports cover cost per lead, ROAS, organic traffic growth, and revenue attributed to digital marketing. You always know exactly what your investment is delivering.",
        category: "Attribution"
    }
];

const ctaTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        READY TO SCALE YOUR BUSINESS <br />
        <span className="text-[#FF6105]">IN KOLKATA?</span>
    </h2>
);

const timelineSteps = [
    {
        t: "We Think in Revenue, Not in Reports",
        d: "Impressions and follower counts are not your growth goals. Revenue, leads, and customer acquisition are. Every strategy we run is evaluated against the business outcome it produces."
    },
    {
        t: "We Build Integrated Systems, Not Siloed Campaigns",
        d: "SEO, paid ads, social, email, and your website aligned to one strategy and one revenue goal. No agency-hopping. No misaligned vendors. One team. One direction."
    },
    {
        t: "We Are Fully Transparent",
        d: "You see exactly what we do, why we do it, and what it produces. Fortnightly updates, monthly reports, and a team that never hides behind jargon or vanity numbers."
    },
    {
        t: "We Know the Kolkata Market",
        d: "Traditional business culture going digital. Seasonal demand patterns. Hyper-local competition. Consumers switching to online-first research. We understand how Kolkata buys and builds strategies that match."
    },
    {
        t: "We Scale With Your Ambition",
        d: "Whether you are a single-location retailer or a multi-market B2B brand, EEGNITE builds strategies that match your current stage and grow as your ambition demands."
    }
];

export default function KolkataLandingPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <HomeClient />
            
            <Navbar />
            
            <div className="relative overflow-hidden noise">
                <FloatingIconsHero
                    topText="Businesses In Kolkata With A Strong Digital Presence Generate More Qualified Leads."
                    title="REVENUE-DRIVEN 360° DIGITAL MARKETING AGENCY IN KOLKATA"
                    subTitle2="ATTRACT CUSTOMERS. INCREASE ROI."
                    subtitle="EEGNITE is a performance-first digital marketing agency in Kolkata. We do not sell packages or chase vanity metrics. We build integrated SEO, paid advertising, social media, and performance marketing strategies tied directly to your business revenue."
                    ctaText="Start Your Project"
                    ctaHref="#contact"
                    icons={absoluteIcons}
                />
            </div>
            
            <ClientLogoSlider
                heading={
                    <>
                        Brands That Choose Growth <br />
                        <span className="text-[#FF6105]">Brands That Choose EEGNITE.</span>
                    </>
                }
            />
            
            <IndustryProblemSolution
                problemsTitle="WHY KOLKATA BUSINESSES STRUGGLE TO SCALE DIGITALLY"
                problemsSubtitle="The ambition is real. The digital strategy is not."
                solutionsTitle="WHAT EEGNITE DOES DIFFERENTLY FOR KOLKATA BUSINESSES"
                solutionsSubtitle="Strategy-first. Revenue-tied. Built for the Kolkata market and beyond."
                problems={kolkataProblems}
                solutions={kolkataSolutions}
            />
            
            <Services 
                title={
                    <>
                        360 DEGREE DIGITAL MARKETING <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">SERVICES IN KOLKATA</span>
                    </>
                }
                subtitle="Every service EEGNITE delivers is performance-driven and connected to your revenue goal. From organic search and performance marketing to paid ads and web development - one team, one integrated strategy, built for Kolkata."
                customDescriptions={customServicesDescriptions}
            />
            
            <ToolsSection />
            
            <IndustriesGrid 
                title={
                    <>
                        <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mt-4">
                            INDUSTRIES WE SERVE <span className="text-[#FF6105]">IN KOLKATA</span>
                        </h2>
                        <p className="mt-6 text-sm md:text-lg text-black/50 font-medium tracking-wide max-w-xl lg:mx-auto">
                            EEGNITE builds digital marketing strategies for Kolkata's most competitive industries. Each approach is designed around the specific buyer, platform, and revenue model of your sector.
                        </p>
                    </>
                }
                customDescriptions={customIndustriesDescriptions}
            />
            
            <Results 
                title={resultsTitle}
            />
            
            <ServiceTimeline
                title={
                    <>
                        WHY KOLKATA BUSINESSES <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">CHOOSE EEGNITE</span>
                    </>
                }
                steps={timelineSteps}
                ctaTitle="Book Strategy Call"
                ctaDescription="Book a free strategy call with EEGNITE and get clarity on what is slowing your growth, where your digital marketing is underperforming, and what it will take to scale your Kolkata business faster."
                ctaButtonText="Book Free Strategy Call"
                ctaLink="#contact"
            />
            
            <Testimonials />
            
            <FAQ 
                faqList={kolkataFaqs}
            />
            
            <GrowthCTA 
                badgeText="STOP GUESSING. START GROWING."
                title={ctaTitle}
                description="Book a free strategy call with EEGNITE and get clarity on what is slowing your growth, where your digital marketing is underperforming, and what it will take to scale your Kolkata business faster. No hard selling. No generic advice. Just a focused conversation built around your goals, market, and growth opportunities."
            />
            
            <Contact defaultCountryCode="+91" />
            
            <Footer />
        </main>
    );
}
