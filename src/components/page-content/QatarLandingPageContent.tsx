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

const qatarProblems = [
    {
        icon: XCircle,
        title: "Creative Agencies Without a Performance Foundation",
        desc: "Qatar's agency market leans heavily toward branding and creative work. Beautiful campaigns with no attribution model. You know what was spent. You rarely know what it returned."
    },
    {
        icon: XCircle,
        title: "Generic Strategies in a Bilingual, Multicultural Market",
        desc: "Qatar's audience is 99% online, Arabic and English, spanning Qatari nationals, Arab expats, South Asian professionals, and Western business communities. One-size messaging connects with none of them effectively."
    },
    {
        icon: XCircle,
        title: "Single-Channel Thinking in a Multi-Channel Buying Environment",
        desc: "Social media managed by one agency. Google Ads by another. SEO ignored entirely. Disconnected channels in a market where buyers research across Google, Instagram, LinkedIn, and WhatsApp simultaneously."
    },
    {
        icon: XCircle,
        title: "Generic Strategies That Ignore Qatar’s Market Reality",
        desc: "Many agencies apply the same marketing playbook across every region without adapting to Qatar’s unique business landscape, customer behaviour, and competitive market dynamics."
    },
    {
        icon: XCircle,
        title: "No Attribution From Digital Spend to Business Revenue",
        desc: "High digital ad spend across Qatar's market with minimal attribution infrastructure. Decision-makers cannot connect their marketing investment to leads generated or revenue closed."
    }
];

const qatarSolutions = [
    {
        icon: CheckCircle2,
        title: "Strategies Built for Qatar's Unique Market Reality",
        desc: "We understand Qatar National Vision 2030, the bilingual buyer landscape, and the specific industries driving Doha's economy. Every campaign is built for your market, not adapted from another."
    },
    {
        icon: CheckCircle2,
        title: "Bilingual Campaign Capability: Arabic and English",
        desc: "We build and manage campaigns in both Arabic and English, ensuring your brand reaches and resonates with every segment of Qatar's diverse online audience without compromising message quality in either language."
    },
    {
        icon: CheckCircle2,
        title: "Full-Funnel Integration Across Every Channel",
        desc: "SEO, Google Ads, paid social, email, and web development working as one coordinated performance marketing system — not separate vendors producing disconnected results with no unified attribution."
    },
    {
        icon: CheckCircle2,
        title: "International Standard Work With Local Market Understanding",
        desc: "EEGNITE brings global performance marketing expertise to Qatar's market with the cultural and regulatory intelligence that generic international agencies consistently lack."
    },
    {
        icon: CheckCircle2,
        title: "Transparent Attribution From Click to Revenue",
        desc: "We install the measurement infrastructure that connects your digital marketing spend to actual business outcomes. Leads generated. Cost per acquisition. Revenue attributed. Every month."
    }
];

const customServicesDescriptions = {
    "01": "SEO campaigns designed to help Qatar businesses rank higher, increase visibility, and capture high-intent traffic from Google search. From technical SEO to content strategy, every action is focused on measurable growth.",
    "02": "Social media campaigns that help Qatar brands strengthen their digital presence and grow customer engagement across Instagram, Facebook, LinkedIn, and other key platforms.",
    "03": "Google Ads management for Qatar businesses looking to generate faster leads and sales. Search, Display, Shopping, and remarketing campaigns built to lower acquisition costs and improve conversion rates.",
    "04": "Conversion-focused websites for Qatar businesses built with speed, mobile performance, and user experience at the core - because a website should drive growth, not just exist online.",
    "05": "Automated email marketing systems for Qatar businesses focused on customer retention, lead nurturing, repeat purchases, and long-term relationship building."
};

const customIndustriesDescriptions = {
    "E-commerce": "Conversion-focused marketing campaigns for e-commerce brands in Qatar aiming to improve ROAS, increase product reach, and scale customer acquisition.",
    "B2B & Lead Generation": "High-intent digital campaigns for B2B businesses in Qatar focused on connecting brands with enterprise buyers and business decision-makers.",
    "Medical & Healthcare": "Patient-centric digital marketing strategies for healthcare providers in Qatar designed to increase visibility, credibility, and appointment growth.",
    "Retail Business": "Integrated online and offline marketing campaigns for retail businesses in Qatar focused on customer engagement, brand awareness, and sales growth.",
    "Manufacturing & Logistics": "SEO and performance marketing solutions for manufacturing and logistics companies in Qatar focused on industrial lead generation and market visibility.",
    "Professional Services": "Authority-driven online marketing for consultants, legal firms, agencies, and professional service providers in Qatar seeking premium client acquisition."
};

const resultsTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        RESULTS WE HAVE DELIVERED <br />
        <span className="text-[#FF6105]">FOR QATAR BUSINESSES</span>
        <span className="block text-sm md:text-lg text-black/50 font-medium tracking-wide mt-4 lowercase md:uppercase normal-case">
            Real businesses. Real campaigns. Real numbers from Qatar clients.
        </span>
    </h2>
);

const timelineSteps = [
    {
        t: "We Are Performance-First in a Creative-Heavy Market",
        d: "Every campaign is tied to a revenue outcome before it launches. No awareness campaigns without attribution. No ad spend without a clear line back to your business results."
    },
    {
        t: "We Execute in Arabic and English",
        d: "Bilingual campaign management that maintains message quality, cultural accuracy, and brand voice in both languages - without compromising either for the sake of speed or cost."
    },
    {
        t: "We Understand Qatar's Business Environment",
        d: "QNV 2030, Msheireb smart city, Lusail development, the post-World Cup tourism economy - we understand the context your business operates within and build strategies that align with it."
    },
    {
        t: "We Bring International Standard Work to Your Market",
        d: "Global performance marketing methodology applied with local intelligence. The combination that generic local agencies and generic international agencies both consistently fail to deliver."
    },
    {
        t: "We Report on Revenue, Not Reach",
        d: "Monthly reports that connect your digital marketing investment to leads generated, deals in pipeline, and revenue attributed. Not impressions. Not followers. What your business actually cares about."
    }
];

const qatarFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Qatar?",
        answer: "EEGNITE offers 360 degree digital marketing services in Qatar including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed under one integrated strategy in both Arabic and English. We serve businesses across Doha and Qatar with campaigns built specifically for the Qatari market and consumer landscape.",
        category: "Services"
    },
    {
        question: "Does EEGNITE Manage Digital Marketing Campaigns In Arabic?",
        answer: "Yes. EEGNITE manages bilingual campaigns in Arabic and English for Qatar-based clients. This covers Arabic ad copy, Arabic social media content, Arabic landing pages, and keyword strategies targeting Arabic-language search queries in the Qatari market. We ensure cultural accuracy and message quality in both languages rather than relying on translated content that loses its effectiveness across audiences.",
        category: "Arabic"
    },
    {
        question: "How Does EEGNITE Understand Qatar's Market Specifically?",
        answer: "EEGNITE's Qatar strategy is built around the country's bilingual, multicultural audience, Qatar National Vision 2030 business priorities, and the specific industries driving Doha's economy including real estate, hospitality, F&B, financial services, and retail. We do not apply UAE or Saudi strategies to the Qatari market. Every campaign is built for Qatar's distinct consumer behaviour, platform usage patterns, and business environment.",
        category: "Market"
    },
    {
        question: "How Long Does Digital Marketing Take To Produce Results In Qatar?",
        answer: "Google Ads campaigns in Qatar typically begin generating leads within 7 to 14 days of launch. Meta campaigns need 10 to 21 days for the algorithm's learning phase before performance stabilises. SEO builds meaningful organic visibility within 4 to 6 months in Qatar's competitive market. EEGNITE sets specific channel timelines at the start of every engagement so your expectations are grounded in realistic outcomes.",
        category: "Timeline"
    },
    {
        question: "What Industries Does EEGNITE Serve In Qatar?",
        answer: "EEGNITE serves businesses across real estate, F&B, hospitality, retail, e-commerce, financial services, professional services, and B2B sectors in Qatar. We understand the buyer journey, platform behaviour, and content approach specific to each industry in the Qatari market. Whether you are a Doha restaurant group, a property developer, or a management consulting firm, we have experience building digital strategies for your sector.",
        category: "Industries"
    },
    {
        question: "How Does EEGNITE Measure Digital Marketing Roi For Qatar Businesses?",
        answer: "We install attribution tracking infrastructure before any campaign launches - connecting Google Ads, Meta, your website analytics, and CRM through conversion events and UTM parameters. Monthly reports cover cost per lead, ROAS, qualified pipeline generated, and revenue attributed to digital marketing. You always know exactly which channels and campaigns are producing real business outcomes for your Qatar operation.",
        category: "Attribution"
    }
];

const ctaTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        READY TO SCALE YOUR BUSINESS <br />
        <span className="text-[#FF6105]">IN QATAR?</span>
    </h2>
);

export default function QatarLandingPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <HomeClient />
            
            <Navbar />
            
            <div className="relative overflow-hidden noise">
                <FloatingIconsHero
                    topText={
                        <>
                            Qatar’s Digital Market Is Growing Fast, <br className="hidden md:block" />{" "}
                            And Brands With A Strong Digital Presence Are Leading The Growth.
                        </>
                    }
                    title="DIGITAL MARKETING AGENCY FOR QATAR BUSINESSES THAT HELPS YOU SCALE"
                    subTitle2="GET MORE LEADS. GROW BIGGER."
                    subtitle="EEGNITE is a performance-first digital marketing agency serving Qatar's most ambitious businesses. From Doha startups to established enterprises navigating Qatar National Vision 2030, we build SEO, paid advertising, social media, and performance marketing strategies tied to measurable business revenue."
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
                problemsTitle="WHY QATAR BUSINESSES STRUGGLE TO CONVERT DIGITAL SPEND INTO GROWTH"
                problemsSubtitle="Qatar's digital landscape is sophisticated. Most marketing is not."
                solutionsTitle="WHAT EEGNITE DELIVERS FOR QATAR BUSINESSES"
                solutionsSubtitle="Performance-first. Culturally-aware. Measurably tied to your Qatar market revenue."
                problems={qatarProblems}
                solutions={qatarSolutions}
            />
            
            <Services 
                title={
                    <>
                        360 DEGREE DIGITAL MARKETING <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">SERVICES IN QATAR</span>
                    </>
                }
                subtitle="Every service EEGNITE delivers is performance-driven and connected to your revenue goal. From organic search and performance marketing to paid ads and web development - one team, one integrated strategy, built for Qatar."
                customDescriptions={customServicesDescriptions}
            />
            
            <ToolsSection />
            
            <IndustriesGrid 
                title={
                    <>
                        <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mt-4">
                            INDUSTRIES WE SERVE <span className="text-[#FF6105]">IN QATAR</span>
                        </h2>
                        <p className="mt-6 text-sm md:text-lg text-black/50 font-medium tracking-wide max-w-xl lg:mx-auto">
                            EEGNITE builds digital marketing strategies for Qatar's most competitive industries. Each approach is designed around the specific buyer, platform, and revenue model of your sector.
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
                        WHY QATAR BUSINESSES <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">CHOOSE EEGNITE</span>
                    </>
                }
                steps={timelineSteps}
                ctaTitle="Book Strategy Call"
                ctaDescription="Book a free strategy call with EEGNITE and uncover what is holding your business back, where your digital strategy needs improvement, and how to create sustainable growth in Qatar’s fast-moving market."
                ctaButtonText="Book Free Strategy Call"
                ctaLink="#contact"
            />
            
            <Testimonials />
            
            <FAQ 
                faqList={qatarFaqs}
            />
            
            <GrowthCTA 
                badgeText="STOP GUESSING. START GROWING."
                title={ctaTitle}
                description="Book a free strategy call with EEGNITE and uncover what is holding your business back, where your digital strategy needs improvement, and how to create sustainable growth in Qatar’s fast-moving market. No sales pressure. No vague promises. Just a direct conversation focused on scaling your business with clarity and confidence."
            />
            
            <Contact defaultCountryCode="+974" />
            
            <Footer />
        </main>
    );
}
