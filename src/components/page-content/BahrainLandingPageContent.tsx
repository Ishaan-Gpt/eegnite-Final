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

const bahrainProblems = [
    {
        icon: XCircle,
        title: "Treated as a Saudi Add-On, Not a Priority Market",
        desc: "Most regional agencies headquartered in Riyadh or Dubai recycle Saudi strategies for Bahrain clients. Bahrain is not smaller Saudi Arabia. It is the GCC's fintech hub with its own distinct business culture, buyer behaviour, and regulatory environment."
    },
    {
        icon: XCircle,
        title: "Creative Agencies Without Performance Infrastructure",
        desc: "Bahrain's established agency market leans toward branding, design, and social media management. These disciplines build presence. They do not build measurable pipeline without a performance marketing framework beneath them."
    },
    {
        icon: XCircle,
        title: "High Expectations With Tight Budgets and No Clear ROI",
        desc: "Bahrain businesses expect quality outcomes at reasonable investment. Without clear attribution, decision-makers cannot justify marketing spend or identify which channels are actually generating business value."
    },
    {
        icon: XCircle,
        title: "Fintech and Financial Services Marketing Requires Specialist Knowledge",
        desc: "Bahrain's dominant sectors - banking, fintech, Islamic finance, and financial advisory - require marketing that understands compliance constraints, complex buyer journeys, and the trust-first content approach financial buyers demand."
    },
    {
        icon: XCircle,
        title: "Single-Channel Social Management Mistaken for Digital Strategy",
        desc: "Social media management is one part of a digital marketing system. Bahrain businesses investing in social-only without SEO, paid search, and email are leaving the majority of their digital opportunity untouched."
    }
];

const bahrainSolutions = [
    {
        icon: CheckCircle2,
        title: "Strategies Built for Bahrain, Not Borrowed From Saudi Arabia",
        desc: "We build Bahrain-first strategies that account for the Kingdom's fintech ecosystem, bilingual buyer landscape, Bahrain Economic Vision 2030 priorities, and the specific industries driving Manama's economy."
    },
    {
        icon: CheckCircle2,
        title: "Performance Marketing With Full Attribution From Day One",
        desc: "Complete tracking infrastructure connecting your digital spend to leads generated and revenue closed. Every month you know exactly what your marketing investment is returning - in measurable business terms."
    },
    {
        icon: CheckCircle2,
        title: "Fintech and Financial Services Marketing Capability",
        desc: "We understand the compliance constraints, long buying cycles, and trust-first content approach that Bahrain's dominant financial sector requires. Marketing that builds credibility and generates qualified pipeline simultaneously."
    },
    {
        icon: CheckCircle2,
        title: "Integrated Strategy Across Every Digital Channel",
        desc: "SEO, Google Ads, paid social, email, and web development managed as one performance marketing system. Not multiple vendors producing disconnected results - one team, one strategy, full accountability."
    },
    {
        icon: CheckCircle2,
        title: "Quality Without Compromise on Budget",
        desc: "Bahrain businesses deserve strategic quality and performance accountability at investment levels that make sense for the market. We build around your budget, not despite it."
    }
];

const customServicesDescriptions = {
    "01": "SEO strategies built for Bahrain businesses looking to improve visibility, attract qualified traffic, and generate consistent enquiries. We combine technical SEO, local optimisation, and content strategy to help brands rank where it matters.",
    "02": "Social media marketing that helps Bahrain brands grow their online presence and customer engagement. Content creation, paid campaigns, and audience targeting designed to turn followers into paying customers.",
    "03": "Performance-driven Google Ads campaigns for Bahrain businesses focused on leads, conversions, and measurable growth. Every campaign is tracked, tested, and optimised to maximise return on ad spend.",
    "04": "Modern, high-performing websites designed for Bahrain businesses that need speed, mobile responsiveness, and strong conversion performance to support long-term business growth.",
    "05": "Email automation systems that help Bahrain businesses stay connected with customers, nurture leads, and improve retention through personalised campaigns and automated flows."
};

const customIndustriesDescriptions = {
    "E-commerce": "Performance-driven campaigns for e-commerce businesses in Bahrain focused on increasing product visibility, customer acquisition, and repeat purchases across GCC markets.",
    "B2B & Lead Generation": "Strategic lead generation campaigns for B2B companies in Bahrain targeting business owners, procurement teams, and senior corporate decision-makers.",
    "Medical & Healthcare": "Trust-building digital marketing solutions for healthcare providers in Bahrain designed to improve patient inquiries, online visibility, and appointment generation.",
    "Retail Business": "Omnichannel marketing campaigns for retail businesses in Bahrain that combine customer engagement, footfall growth, and online sales performance.",
    "Manufacturing & Logistics": "Digital lead generation strategies for manufacturing and industrial businesses in Bahrain focused on improving B2B visibility and qualified inquiry generation.",
    "Professional Services": "Branding and client acquisition strategies for professional service firms in Bahrain including consultants, agencies, financial firms, and legal businesses."
};

const resultsTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        RESULTS WE HAVE DELIVERED <br />
        <span className="text-[#FF6105]">FOR BAHRAIN BUSINESSES</span>
        <span className="block text-sm md:text-lg text-black/50 font-medium tracking-wide mt-4 lowercase md:uppercase normal-case">
            Real businesses. Real campaigns. Real numbers from Bahrain clients.
        </span>
    </h2>
);

const timelineSteps = [
    {
        t: "We Build for Bahrain, Not for a Regional Roster",
        d: "Your campaigns are built around Bahrain's market, buyer behaviour, and business ecosystem. Not adapted from a Saudi or UAE template with your company name changed."
    },
    {
        t: "We Understand Bahrain's Dominant Financial Sector",
        d: "Fintech, banking, Islamic finance, and financial advisory are Bahrain's most valuable commercial sectors. We have the sector knowledge, compliance awareness, and content approach these industries require to market effectively."
    },
    {
        t: "We Deliver ROI-Tied Performance Marketing",
        d: "Every campaign is connected to a revenue outcome before it launches. You receive monthly reports that show cost per lead, ROAS, and pipeline generated - not impressions and engagement rates."
    },
    {
        t: "We Integrate Every Channel Into One System",
        d: "SEO, PPC, social, email, and web working as one coordinated strategy. No single-channel solutions. No vendor fragmentation. One team managing your full digital marketing system with complete accountability."
    },
    {
        t: "We Offer International Quality at Bahrain-Appropriate Investment",
        d: "Global performance marketing methodology. Local market intelligence. Investment levels built around Bahrain's commercial realities - not Saudi or UAE pricing applied to a smaller budget market."
    }
];

const bahrainFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Bahrain?",
        answer: "EEGNITE offers 360 degree digital marketing services in Bahrain including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed under one integrated strategy built specifically for the Bahraini market. We serve businesses across Manama, Seef, Riffa, and across the Kingdom with campaigns grounded in Bahrain-specific market intelligence.",
        category: "Services"
    },
    {
        question: "Does EEGNITE Specialise In Marketing For Bahrain's Financial Services And Fintech Sector?",
        answer: "Yes. EEGNITE has specific experience building digital marketing strategies for financial services, banking, fintech, Islamic finance, and wealth management firms. We understand the compliance constraints, trust-first content approach, and long buying cycles that define financial services marketing in Bahrain. Our campaigns generate qualified client enquiries while maintaining the credibility standards that regulated financial businesses require.",
        category: "Finance"
    },
    {
        question: "How Is EEGNITE Different From Other Digital Marketing Agencies In Bahrain?",
        answer: "Most digital marketing agencies in Bahrain are either creative-first without performance attribution, or regional players applying Saudi strategies to a market with its own distinct buyer behaviour and business culture. EEGNITE builds Bahrain-first performance marketing strategies tied to measurable revenue outcomes. We are not a Saudi agency with a Bahrain office. We build genuine Bahrain strategies from the ground up.",
        category: "EEGNITE"
    },
    {
        question: "How Long Does Digital Marketing Take To Produce Results In Bahrain?",
        answer: "Google Ads campaigns begin generating leads within 7 to 14 days of going live. Meta campaigns need 10 to 21 days for the learning phase before performance stabilises. SEO builds meaningful organic visibility within 4 to 6 months. EEGNITE sets channel-specific timelines at the start of every engagement so your expectations are grounded in realistic, achievable outcomes from day one.",
        category: "Timeline"
    },
    {
        question: "What Industries Does EEGNITE Serve In Bahrain?",
        answer: "EEGNITE serves businesses across Bahrain's key commercial sectors including financial services and fintech, real estate, hospitality, retail and e-commerce, professional services, B2B and lead generation, and healthcare. We understand the buyer behaviour, platform usage, and content approach specific to each industry in Bahrain's market. Whether you are a Manama fintech startup or an established hospitality group, we have experience in your sector.",
        category: "Industries"
    },
    {
        question: "How Does EEGNITE Report On Digital Marketing Performance For Bahrain Businesses?",
        answer: "We build complete attribution tracking infrastructure before any campaign launches - connecting Google Ads, Meta, your website, and CRM through conversion events and UTM parameters. Fortnightly updates keep you informed on active performance. Monthly reports cover cost per lead, ROAS, qualified pipeline generated, and revenue attributed to digital marketing. You always know what your investment is producing in measurable business terms.",
        category: "Attribution"
    }
];

const ctaTitle = (
    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase">
        READY TO SCALE YOUR BUSINESS <br className="hidden md:block" />
        <span className="text-[#FF6105]">IN BAHRAIN?</span>
    </h2>
);

export default function BahrainLandingPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <HomeClient />
            
            <Navbar basePath="/bahrain" />
            
            <div className="relative overflow-hidden noise">
                <FloatingIconsHero
                    topText={
                        <>
                            Bahrain’s Digital Economy Is Growing Fast, <br className="hidden md:block" />{" "}
                            And Brands With A Strong Digital Presence Are Winning More Market Share.
                        </>
                    }
                    title="ROI-DRIVEN DIGITAL MARKETING AGENCY FOR BAHRAIN BUSINESSES"
                    subTitle2="BUILD VISIBILITY. BOOST REVENUE."
                    subtitle="EEGNITE serves Bahrain's most ambitious businesses with performance-first digital marketing built for the GCC's fintech hub. SEO, Google Ads, paid social, email marketing, and web development - all integrated into one revenue-tied strategy."
                    ctaText="Start Your Project"
                    ctaHref="#contact"
                    icons={absoluteIcons}
                />
            </div>
            
            <ClientLogoSlider
                heading={
                    <>
                        Brands That Choose Growth <br />
                        Brands That Choose <br className="block md:hidden" />
                        <span className="text-[#FF6105]">EEGNITE.</span>
                    </>
                }
            />
            
            <IndustryProblemSolution
                problemsTitle="WHY BAHRAIN BUSINESSES STRUGGLE TO GET REAL VALUE FROM DIGITAL MARKETING"
                problemsSubtitle="The market is sophisticated. Most digital marketing in it is not."
                solutionsTitle="WHAT EEGNITE DELIVERS FOR BAHRAIN BUSINESSES"
                solutionsSubtitle="Bahrain-specific. ROI-tied. Built for the GCC's most commercially sophisticated market."
                problems={bahrainProblems}
                solutions={bahrainSolutions}
            />
            
            <Services 
                title={
                    <>
                        360 DEGREE DIGITAL MARKETING <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">SERVICES IN BAHRAIN</span>
                    </>
                }
                subtitle="Every service EEGNITE delivers is performance-driven and connected to your revenue goal. From organic search and performance marketing to paid ads and web development - one team, one integrated strategy, built for Bahrain."
                customDescriptions={customServicesDescriptions}
            />
            
            <ToolsSection />
            
            <IndustriesGrid 
                title={
                    <>
                        <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-black uppercase mt-4">
                            INDUSTRIES WE SERVE <span className="text-[#FF6105]">IN BAHRAIN</span>
                        </h2>
                        <p className="mt-6 text-sm md:text-lg text-black/50 font-medium tracking-wide max-w-xl lg:mx-auto">
                            EEGNITE builds digital marketing strategies for Bahrain's most competitive industries. Each approach is designed around the specific buyer, platform, and revenue model of your sector.
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
                        WHY BAHRAIN BUSINESSES <br className="hidden lg:block" />{" "}
                        <span className="text-[#FF6105]">CHOOSE EEGNITE</span>
                    </>
                }
                steps={timelineSteps}
                ctaTitle="Book Strategy Call"
                ctaDescription="Book a free strategy call with EEGNITE and discover what is limiting your business growth, where your marketing efforts are losing momentum, and how to build a stronger digital presence in Bahrain’s competitive market."
                ctaButtonText="Book Free Strategy Call"
                ctaLink="#contact"
            />
            
            <Testimonials />
            
            <FAQ 
                faqList={bahrainFaqs}
            />
            
            <GrowthCTA 
                badgeText="STOP GUESSING. START GROWING."
                title={ctaTitle}
                description="Book a free strategy call with EEGNITE and discover what is limiting your business growth, where your marketing efforts are losing momentum, and how to build a stronger digital presence in Bahrain’s competitive market. No pressure. No unnecessary pitch. Just practical growth-focused insights tailored to your business goals."
            />
            
            <Contact defaultCountryCode="+973" />
            
            <Footer />
        </main>
    );
}
