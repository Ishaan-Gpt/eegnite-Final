"use client";

import {
    Cpu,
    LayoutDashboard,
    Search,
    Link2,
    Map,
    Zap,
    BarChart3,
    TrendingUp,
    PieChart,
    FileText,
    Settings,
} from "lucide-react";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceComparison } from "@/components/shared/ServiceComparison";
import { FullServiceGrid } from "@/components/shared/FullServiceGrid";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";

export function SeoHero() {
    return (
        <ServiceHero
            badgeText="Businesses on Page 1 of Google Capture 92% of All Clicks. The Rest Share 8%"
            title={<>SEO SERVICES THAT <br /> DRIVE REAL GROWTH</>}
            subtitle="RANK HIGHER. GROW FASTER."
            description={
                <>
                    At EEGNITE, <span className="text-[#FF6105] font-semibold">SEO is not a tactic.</span> It is the foundation of long-term digital growth. We build search strategies that move your brand up the rankings, bring in the traffic that converts, and <span className="text-[#FF6105] font-semibold">keep your business visible</span> long after the campaign month ends.
                </>
            }
        />
    );
}

export function SeoComparisonSection() {
    return (
        <ServiceComparison
            title={<>WHY <span className="text-[#FF6105]">EEGNITE?</span></>}
            description={
                <>
                    Most SEO agencies promise rankings and deliver reports. At EEGNITE, every SEO engagement <span className="text-[#FF6105] font-semibold">starts with your business goal</span>. Not keyword volume. Not domain authority targets. We build search strategies around what you actually need: <span className="text-[#FF6105] font-semibold">qualified traffic, real leads, and revenue</span> you can attribute to organic search.
                </>
            }
            firstSolutionTitle="EEGNITE SEO SOLUTION"
            firstSolutionItems={[
                {
                    title: "Your Market. Your Audience. Your Search Demand.",
                    desc: "We understand the business landscape from local to global. We align your website with genuine search demand, connecting online visibility with real-world customer intent across every market we serve."
                },
                {
                    title: "Built On Technical Depth, Not Surface Fixes.",
                    desc: "EEGNITE approaches technical SEO from an engineering mindset. Site structure, crawlability, and performance - audited at every layer so search engines can clearly understand, evaluate, and reward your digital presence."
                },
                {
                    title: "Your Rankings. Your Traffic. Your Revenue.",
                    desc: "Clarity is central to how we work. Reporting frameworks give you a clear view of traffic growth, keyword movement, and business impact. Every action driven by transparency, accountability, and ROI."
                }
            ]}
            secondSolutionTitle="TRADITIONAL SEO AGENCY"
            secondSolutionItems={[
                {
                    title: "One-Size-Fits-All Strategy. Your Market Ignored.",
                    desc: "Most agencies apply the same SEO playbook to every client, chasing global vanity volume rather than high-intent traffic. Visitors who never convert. Reports that look busy. Growth nowhere."
                },
                {
                    title: "Green Lights. Zero Depth. Rankings Untouched.",
                    desc: "Automated audit tools generate generic reports. Surface tags fixed. Deep technical architecture ignored. Your site stays invisible to modern search crawlers despite the all-clear."
                },
                {
                    title: "Black-Box Reporting. Jargon-Filled Slides Hiding The Absence Of Results.",
                    desc: "Confusing monthly reports packed with metrics designed to obscure the lack of real business growth. You never really know what is being done — or whether it is working."
                }
            ]}
        />
    );
}

export function FullServiceSEO() {
    const services = [
        { title: "TECHNICAL SEO", icon: Cpu, description: "We audit and fix the technical foundations that determine whether search engines can crawl, index, and rank your site. Site speed, Core Web Vitals, crawl budget, structured data, and schema - every layer examined and resolved." },
        { title: "ON-PAGE OPTIMISATION", icon: LayoutDashboard, description: "Every page optimised for the queries your buyers actually use. Title tags, meta descriptions, heading hierarchy, internal linking, and content alignment - fine-tuned to signal relevance and earn rankings that stick." },
        { title: "KEYWORD RESEARCH", icon: Search, description: "We identify the high-intent keywords your audience uses at every stage of the buying journey. Keyword discovery, clustering, difficulty assessment, and page mapping — so your content targets the searches that convert." },
        { title: "LINK BUILDING AND DIGITAL PR", icon: Link2, description: "Authority backlinks from relevant, trusted sources that tell Google your brand deserves to rank. Outreach-led, editorial link acquisition — no shortcuts, no spam, no risk to your domain." },
        { title: "LOCAL SEO", icon: Map, description: "Dominate your city. We optimise your Google Business Profile, build local citations, and target geo-specific keywords so your business appears first when nearby customers are searching for what you offer." },
        { title: "CONTENT STRATEGY", icon: Zap, description: "Content that ranks and converts. We develop topic clusters, blog strategies, and landing page content built around real search demand — designed to attract qualified traffic and build topical authority over time." },
        { title: "ANALYTICS AND CONVERSION TRACKING", icon: BarChart3, description: "We connect your SEO performance to business outcomes. Google Search Console, GA4, and custom dashboards tracking keyword rankings, organic traffic, leads from search, and revenue attributed to SEO." },
        { title: "SHOPIFY AND E-COMMERCE SEO", icon: TrendingUp, description: "Product pages, category hierarchies, and site architecture optimised for search engines and buyers simultaneously. Scalable e-commerce SEO that drives organic product discovery and revenue without relying entirely on paid ads." },
    ];

    return (
        <FullServiceGrid
            badgeText="53% Of All Website Traffic Comes From Organic Search"
            title={<>RESULTS-DRIVEN SEO. <span className="text-[#FF6105]">FOCUSED ON ORGANIC GROWTH</span></>}
            description="Our SEO services are built to do more than improve rankings. We focus on creating long-term visibility, brand authority, and consistent inbound demand through strategies that compound in value over time."
            services={services}
        />
    );
}

export function SeoProcessFloating() {
    const steps = [
        { id: "01", title: "KEYWORD DISCOVERY", desc: "Identifying high-intent search terms your buyers use.", icon: Search },
        { id: "02", title: "KEYWORD ANALYSIS", desc: "Clustering and difficulty assessment completed.", icon: PieChart },
        { id: "03", title: "ORBIT MAPPING", desc: "Strategic roadmap and priority pages defined.", icon: Map },
        { id: "04", title: "PAGE MAPPING", desc: "Keywords aligned to existing and new URLs.", icon: FileText },
        { id: "05", title: "EXECUTION", desc: "Technical fixes, content, and link building launched.", icon: Settings },
        { id: "06", title: "TRACK AND REPORT", desc: "Rankings, traffic, and revenue reviewed monthly.", icon: BarChart3 },
    ];

    return (
        <ServiceProcess
            title={<>OUR GROWTH BASED <span className="text-[#FF6105]">SEO PROCESS</span></>}
            steps={steps}
        />
    );
}

export function ProtocolTimeline() {
    const steps = [
        { t: "Search Experience", d: "Years of ranking websites across competitive industries. Constant testing, adapting, and scaling what actually works." },
        { t: "Ranking Consistency", d: "Structured SEO execution with technical checks, content workflows, and optimization systems that keep growth steady." },
        { t: "SEO Transparency", d: "Keyword tracking, traffic insights, technical reports, and clear action plans. No hidden work. No vague updates." },
        { t: "Traffic ROI Protection", d: "Every optimization is focused on visibility, qualified traffic, and long-term organic growth that protects your investment." },
        { t: "Shared SEO Knowledge", d: "We explain the strategy, ranking movements, and optimization process so your team understands the growth journey." },
    ];

    return (
        <ServiceTimeline
            title={<>HOW EEGNITE BECOMES A <span className="text-[#FF6105]">STRONG SEO PARTNER</span> FOR YOUR BUSINESS</>}
            steps={steps}
            ctaTitle="Talk to Us"
            ctaDescription="Get a free SEO analysis from our experts and see where your next growth wins are hiding"
            ctaButtonText="Get Your Free Analysis"
        />
    );
}

export function WhyChooseSection() {
    const reasons = [
        { id: "01", title: "Stay Focused on Growth", desc: "SEO requires constant optimization, technical expertise, content strategy, and ongoing monitoring. We handle the complexity behind the scenes so your team can stay focused on sales, operations, and scaling the business." },
        { id: "02", title: "Expertise That Reduces Risk", desc: "Search engines evolve constantly. Our SEO strategies are built to adapt quickly, helping your business avoid costly mistakes, ranking drops, and ineffective trial-and-error decisions." },
        { id: "03", title: "Performance You Can Measure", desc: "Every strategy is backed by data. From organic traffic and lead generation to conversion growth, we track meaningful performance metrics that connect SEO efforts directly to business impact." },
        { id: "04", title: "Built for Long-Term Visibility", desc: "Whether you're targeting a local audience or expanding into competitive markets, we create sustainable SEO strategies designed to strengthen visibility, protect rankings, and support long-term business growth." },
    ];

    return (
        <WhyChooseUs
            title={<>Why <span className="text-[#FF6105]">Businesses</span> Choose Us</>}
            reasons={reasons}
        />
    );
}
